import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

type PonsTranslation = { target?: string };
type PonsHit = {
  type?: string;
  target?: string;
  roms?: Array<{ arabs?: Array<{ translations?: PonsTranslation[] }> }>;
};

function json(body: unknown, status = 200): Response {
  return Response.json(body, { status, headers: corsHeaders });
}

function translationsFrom(payload: unknown): string[] {
  if (!Array.isArray(payload)) return [];
  const values: string[] = [];

  for (const section of payload) {
    if (section?.lang !== 'pl' || !Array.isArray(section.hits)) continue;
    for (const hit of section.hits as PonsHit[]) {
      if (hit.type === 'translation' && hit.target) values.push(hit.target);
      for (const rom of hit.roms ?? []) {
        for (const arab of rom.arabs ?? []) {
          for (const translation of arab.translations ?? []) {
            if (translation.target) values.push(translation.target);
          }
        }
      }
    }
  }

  return [...new Set(values.map((value) => value.replace(/<[^>]*>/g, '').trim()).filter(Boolean))].slice(0, 8);
}

Deno.serve(async (request) => {
  if (request.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (request.method !== 'POST') return json({ error: 'METHOD_NOT_ALLOWED' }, 405);

  const secret = Deno.env.get('PONS_API_SECRET');
  if (!secret) return json({ error: 'DICTIONARY_NOT_CONFIGURED' }, 503);

  try {
    const body = await request.json();
    const word = typeof body?.word === 'string' ? body.word.normalize('NFC').trim() : '';
    if (word.length > 80 || !/^[\p{Script=Latin}]+(?:[-'’][\p{Script=Latin}]+)*$/u.test(word)) {
      return json({ error: 'INVALID_WORD' }, 400);
    }

    const url = new URL('https://api.pons.com/v1/dictionary');
    url.search = new URLSearchParams({ q: word, l: 'plru', in: 'pl', fm: '1', language: 'ru' }).toString();
    const response = await fetch(url, { headers: { 'X-Secret': secret, Accept: 'application/json' } });
    if (response.status === 204) return json({ word, translations: [] });
    if (!response.ok) return json({ error: 'DICTIONARY_LOOKUP_FAILED' }, 502);

    return json({ word, translations: translationsFrom(await response.json()) });
  } catch {
    return json({ error: 'DICTIONARY_LOOKUP_FAILED' }, 502);
  }
});
