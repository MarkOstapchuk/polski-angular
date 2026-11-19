import {
  Activity,
  ActivityItem,
  ActivityKind,
  AdaptedActivity,
  AdaptedItem,
  ChoiceOption,
  MultiGapMeta,
  PromptGapMeta,
  WordBankEntry,
  WordOrderMeta,
} from './lesson-types';

const CASE_NAMES = new Set([
  'mianownik',
  'dopelniacz',
  'celownik',
  'biernik',
  'narzednik',
  'miejscownik',
  'wolacz',
]);

const FIXED_CHOICE_SETS: Array<{
  test: (acc0: string[], normSet: Set<string>, items: ActivityItem[]) => boolean;
  options: (acc0: string[]) => string[];
}> = [
  {
    test: (acc0) => acc0.every((a) => /^(P|N|B)$/i.test(a)),
    options: (acc0) => {
      const hasB = acc0.some((a) => a.toUpperCase() === 'B');
      const hasN = acc0.some((a) => a.toUpperCase() === 'N');
      if (hasB && !hasN) return ['P', 'B'];
      if (hasB && hasN) return ['P', 'N', 'B'];
      return ['P', 'N'];
    },
  },
  {
    test: (acc0) => acc0.every((a) => /^(KELNER|KLIENT)$/i.test(a)),
    options: () => ['KELNER', 'KLIENT'],
  },
  {
    test: (acc0) => acc0.every((a) => /^(rok|lata|lat)$/i.test(a)),
    options: () => ['rok', 'lata', 'lat'],
  },
  {
    test: (acc0) => acc0.every((a) => /^(JAKI|JAKA|JAKIE)$/i.test(a)),
    options: () => ['JAKI', 'JAKA', 'JAKIE'],
  },
  {
    test: (acc0) => acc0.every((a) => /^(żeby|bo)$/i.test(a)),
    options: () => ['żeby', 'bo'],
  },
  {
    test: (acc0) => acc0.every((a) => /^(w|na|o)$/i.test(a)),
    options: () => ['w', 'na', 'o'],
  },
  {
    test: (acc0) => acc0.every((a) => /^(siebie|sobie|sobą)$/i.test(a)),
    options: () => ['siebie', 'sobie', 'sobą'],
  },
  {
    test: (acc0, normSet) => normSet.size <= 5 && acc0.every((a) => /^sw[oó]j/i.test(a)),
    options: (acc0) => uniqueByNormalized(acc0),
  },
  {
    test: (acc0) => acc0.every((a) => CASE_NAMES.has(normalizeAnswer(a))),
    options: (acc0) => uniqueByNormalized(acc0),
  },
  {
    test: (acc0, normSet, items) =>
      items.length >= 5 &&
      normSet.size >= 2 &&
      normSet.size <= 4 &&
      acc0.every((a) => a.length <= 20),
    options: (acc0) => uniqueByNormalized(acc0),
  },
];

export function normalizeAnswer(value: string): string {
  const normalized = value
    .toLocaleLowerCase('pl-PL')
    .replace(/ł/g, 'l')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .replace(/\p{P}/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return /^\d[\d\s]*$/.test(normalized) ? normalized.replace(/\s/g, '') : normalized;
}

function uniqueByNormalized(values: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const val of values) {
    const trimmed = val.trim();
    if (!trimmed) continue;
    const key = normalizeAnswer(trimmed);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(trimmed);
  }
  return out;
}

function hashString(input: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

function deterministicShuffle<T>(arr: readonly T[], seedKey: string, ensureNonIdentity = false): T[] {
  const copy = [...arr];
  if (copy.length <= 1) return copy;
  let state = hashString(seedKey) || 1;
  const nextRand = () => {
    state = (Math.imul(1664525, state) + 1013904223) >>> 0;
    return state / 0x100000000;
  };
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(nextRand() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  if (ensureNonIdentity && copy.length >= 2) {
    const same = copy.every((v, idx) => v === arr[idx]);
    if (same && new Set(copy).size >= 2) {
      const swapIdx = copy.findIndex((v) => v !== copy[0]);
      if (swapIdx > 0) [copy[0], copy[swapIdx]] = [copy[swapIdx], copy[0]];
    }
  }
  return copy;
}

function matchesAnyAccepted(candidate: string, accepted: string[]): boolean {
  const normCand = normalizeAnswer(candidate);
  if (!normCand) return false;
  return accepted.some((acc) => normalizeAnswer(acc) === normCand);
}

function isPromptGapItem(item: ActivityItem): boolean {
  const stripped = item.prompt.replace(/\([^)]*\)/g, ' ');
  return /[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]_+|_+[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/.test(stripped);
}

function buildPromptGapMeta(item: ActivityItem): PromptGapMeta {
  const cleaned = item.prompt.replace(/^\d+\s*·\s*/, '');
  const segments: Array<{ text: string; isGap: boolean }> = [];
  let buf = '';
  let inGap = false;
  for (const ch of cleaned) {
    const chGap = ch === '_';
    if (buf && chGap !== inGap) {
      segments.push({ text: buf, isGap: inGap });
      buf = '';
    }
    inGap = chGap;
    buf += ch;
  }
  if (buf) segments.push({ text: buf, isGap: inGap });

  const letters: string[] = [];
  const seen = new Set<string>();
  for (const ch of item.accepted[0] ?? '') {
    if (/\s/.test(ch)) continue;
    if (!seen.has(ch)) {
      seen.add(ch);
      letters.push(ch);
    }
  }
  return { segments, letterAssist: letters };
}

function buildMultiGapMeta(item: ActivityItem): MultiGapMeta {
  const parts = item.accepted[0].split(';').map((s) => s.trim());
  const gapCount = parts.length;
  const splitPrompt = item.prompt.split('___');
  const inlineParts = splitPrompt.length === gapCount + 1 ? splitPrompt : [];
  const labels = item.multiGapLabels?.length === gapCount
    ? item.multiGapLabels
    : Array.from({ length: gapCount }, (_, idx) => String(idx + 1));
  return { gapCount, inlineParts, labels };
}

function hasBalancedParens(text: string): boolean {
  let depth = 0;
  for (const ch of text) {
    if (ch === '(') depth++;
    else if (ch === ')') {
      depth--;
      if (depth < 0) return false;
    }
  }
  return depth === 0;
}

function deduplicateChoiceOptions(rawOptions: string[]): ChoiceOption[] {
  const seen = new Set<string>();
  const out: ChoiceOption[] = [];
  for (const raw of rawOptions) {
    const trimmed = raw.trim().replace(/^[.,;:?!]+|[.,;:?!]+$/g, '').trim();
    if (!trimmed) continue;
    const key = normalizeAnswer(trimmed);
    if (!key || seen.has(key)) continue;
    seen.add(key);
    out.push({ value: trimmed, label: trimmed });
  }
  return out;
}

function tryExtractSlashChoice(item: ActivityItem): ChoiceOption[] | null {
  const prompt = item.prompt.trim();
  if (!prompt || item.accepted[0]?.includes(';')) return null;

  // 1. Explicit (P/N)
  if (/\(\s*P\s*\/\s*N\s*\)/i.test(prompt) && item.accepted.some((a) => /^(P|N)$/i.test(a.trim()))) {
    return [
      { value: 'P', label: 'P' },
      { value: 'N', label: 'N' },
    ];
  }

  // 2. Nagranie X: optA / optB / optC -> value 'a' | 'b' | 'c'
  const recMatch = prompt.match(/^Nagranie\s+\d+\s*:\s*(.+)$/i);
  if (recMatch && item.accepted.some((a) => /^[abc]$/i.test(a.trim()))) {
    const segs = recMatch[1].split(/\s*\/\s*/).map((s) => s.trim()).filter(Boolean);
    if (segs.length === 3) {
      const letters = ['a', 'b', 'c'];
      return segs.map((seg, idx) => ({
        value: letters[idx],
        label: `${letters[idx]}) ${seg}`,
      }));
    }
  }

  // 3. Parenthetical (A / B) or (A / B / C)
  const parenMatch = prompt.match(/\(([^()]*\/[^()]*)\)/);
  if (parenMatch) {
    const inner = parenMatch[1].trim();
    if (!inner.includes('_')) {
      const segs = inner.split(/\s*\/\s*/).map((s) => s.trim()).filter(Boolean);
      if (segs.length >= 2 && segs.length <= 5) {
        const opts = deduplicateChoiceOptions(segs);
        if (opts.length >= 2 && opts.some((o) => matchesAnyAccepted(o.value, item.accepted))) {
          return opts;
        }
      }
    }
  }

  // 4. Inline slash outside parens
  if (!prompt.includes(' / ')) return null;
  const cleaned = prompt.replace(/^\d+\.\s*/, '').replace(/[.?!]+$/, '').trim();
  const rawParts = cleaned.split(/\s*\/\s*/).map((s) => s.trim()).filter(Boolean);
  if (rawParts.length < 2 || rawParts.length > 5) return null;
  if (rawParts.some((p) => p.includes('_') || !hasBalancedParens(p))) return null;

  const candidateSets: string[][] = [];

  // 4a. Prefix-shared first segment (e.g., "dobry dzień / wieczór / noc")
  const firstWords = rawParts[0].split(/\s+/);
  if (firstWords.length >= 2 && rawParts.slice(1).every((p) => !/\s/.test(p) || p.split(/\s+/).length === 1)) {
    const prefix = firstWords.slice(0, -1).join(' ');
    candidateSets.push([rawParts[0], ...rawParts.slice(1).map((p) => `${prefix} ${p}`)]);
  }

  // 4b. Direct segments (e.g., "panika / zmęczenie / lęk")
  candidateSets.push(rawParts);

  // 4c. Two-segment inline sentence slash (e.g., "Jest uśmiechnięty / spięty", "większość moi / moich współpracowników")
  if (rawParts.length === 2) {
    const leftWords = rawParts[0].split(/\s+/);
    const rightWords = rawParts[1].split(/\s+/);
    const leftLast = leftWords[leftWords.length - 1] ?? '';
    const rightFirst = rightWords[0] ?? '';

    if (leftLast && rightFirst) {
      candidateSets.push([leftLast, rightFirst]);
      if (rightWords.length > 1) {
        candidateSets.push([`${leftLast} ${rightWords.slice(1).join(' ')}`, rawParts[1]]);
      }
      if (leftWords.length >= 2 && rightWords.length >= 2) {
        candidateSets.push([leftWords.slice(-2).join(' '), rightWords.slice(0, 2).join(' ')]);
      }
      if (leftWords.length >= 2 && rightWords.length === 1) {
        candidateSets.push([leftWords.slice(-2).join(' '), rightWords[0]]);
      }
    }
  }

  for (const cand of candidateSets) {
    const opts = deduplicateChoiceOptions(cand);
    if (opts.length >= 2 && opts.some((o) => matchesAnyAccepted(o.value, item.accepted))) {
      return opts;
    }
  }

  return null;
}

function stripWordOrderPrefix(prompt: string): string {
  return prompt
    .replace(/^(?:[a-z]\)|\d+\.)\s+/i, '')
    .replace(/^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+:\s+/, '')
    .trim();
}

function tokenizeNormalizedWords(text: string): string[] {
  return normalizeAnswer(text).split(/\s+/).filter(Boolean);
}

function isWordOrderActivity(activity: Activity): boolean {
  const items = activity.items;
  if (items.length < 2) return false;
  if (items.some((i) => i.accepted[0]?.includes(';'))) return false;

  const slashOrDotItems = items.filter((item) => {
    const cleaned = stripWordOrderPrefix(item.prompt);
    const sep = cleaned.includes(' · ') ? ' · ' : cleaned.includes(' / ') ? ' / ' : null;
    if (!sep) return false;
    return cleaned.split(sep).length >= 3;
  });

  if (slashOrDotItems.length < Math.max(2, items.length * 0.8)) return false;
  if (tryExtractSlashChoice(items[0])) return false;

  return items.every((item) => {
    const cleaned = stripWordOrderPrefix(item.prompt);
    const sep = cleaned.includes(' · ') ? ' · ' : ' / ';
    const promptWords = new Set(tokenizeNormalizedWords(cleaned.split(sep).join(' ')));
    const targetWords = tokenizeNormalizedWords(item.accepted[0] ?? '');
    if (targetWords.length === 0) return false;
    const overlap = targetWords.filter((w) => promptWords.has(w)).length;
    return overlap / targetWords.length >= 0.7;
  });
}

function isSentenceOrderActivity(activity: Activity): boolean {
  if (activity.items.length !== 1) return false;
  const header = `${activity.title} ${activity.instruction}`;
  if (!/uporządkuj|w poprawnej kolejności|ułóż tekst z podanych zdań/i.test(header)) return false;
  const sentences = (activity.items[0].accepted[0] ?? '')
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
  return sentences.length >= 3;
}

function buildWordOrderMeta(activityId: string, item: ActivityItem, isSentenceOrder: boolean): WordOrderMeta {
  if (item.wordOrderTokens?.length) {
    return {
      tokens: deterministicShuffle(item.wordOrderTokens, `${activityId}:${item.id}`, true),
      separator: ' ',
      isSentenceOrder,
    };
  }

  if (isSentenceOrder) {
    const sentences = (item.accepted[0] ?? '')
      .split(/(?<=[.!?])\s+/)
      .map((s) => s.trim())
      .filter(Boolean);
    return {
      tokens: deterministicShuffle(sentences, `${activityId}:${item.id}`, true),
      separator: ' ',
      isSentenceOrder: true,
    };
  }

  const cleaned = stripWordOrderPrefix(item.prompt);
  const sep = cleaned.includes(' · ') ? ' · ' : ' / ';
  const rawChunks = cleaned.split(sep).map((c) => c.trim()).filter(Boolean);

  const chunkWords = tokenizeNormalizedWords(rawChunks.join(' ')).sort().join('|');
  const acceptedWords = tokenizeNormalizedWords(item.accepted[0] ?? '').sort().join('|');

  if (rawChunks.length >= 2 && chunkWords === acceptedWords) {
    return {
      tokens: deterministicShuffle(rawChunks, `${activityId}:${item.id}`, true),
      separator: ' ',
      isSentenceOrder: false,
    };
  }

  const acceptedTokens = (item.accepted[0] ?? '').trim().split(/\s+/).filter(Boolean);
  return {
    tokens: deterministicShuffle(acceptedTokens, `${activityId}:${item.id}`, true),
    separator: ' ',
    isSentenceOrder: false,
  };
}

function isDialogueOrderActivity(activity: Activity): boolean {
  const items = activity.items;
  if (items.length < 4) return false;
  if (items.some((i) => i.accepted[0]?.includes(';') || i.prompt.includes('___'))) return false;
  const header = `${activity.title} ${activity.instruction}`;
  if (/uzupełnij|wpisz formy|spójniki/i.test(header)) return false;
  return /właściwej kolejności|poprawnej kolejności|odpowiedniej kolejności|ułóż (dialog|rozmowę|fragmenty)|uporządkuj dialog/i.test(header);
}

function isTypedWordBankActivity(activity: Activity): boolean {
  const items = activity.items;
  if (items.length < 4) return false;
  if (items.every((i) => i.accepted[0]?.includes(';'))) return false;
  const instr = activity.instruction;
  if (/\b(z ramki|z listy|z podanej listy|wybieraj z|z obu list)\b/i.test(instr)) return true;
  if (/:\s*[^.]{4,},/.test(instr) && !/kolejności|przykład|informacji:|klasa,|bilety|wpisz formy:|polecenia:/i.test(instr)) {
    return true;
  }
  return false;
}

function buildWordBankFromAccepted(activity: Activity): WordBankEntry[] {
  const counts = new Map<string, { value: string; count: number }>();
  for (const item of activity.items) {
    const parts = (item.accepted[0] ?? '').split(';').map((s) => s.trim()).filter(Boolean);
    for (const part of parts) {
      const key = normalizeAnswer(part);
      const existing = counts.get(key);
      if (existing) {
        existing.count++;
      } else {
        counts.set(key, { value: part, count: 1 });
      }
    }
  }
  const entries: WordBankEntry[] = Array.from(counts.values()).map((entry) => ({
    value: entry.value,
    label: entry.value,
    expectedCount: entry.count,
  }));
  return deterministicShuffle(entries, activity.id);
}

function buildWordBankFromChoiceOptions(activity: Activity): WordBankEntry[] {
  const expectedCounts = new Map<string, number>();
  for (const item of activity.items) {
    const key = normalizeAnswer(item.accepted[0] ?? '');
    expectedCounts.set(key, (expectedCounts.get(key) ?? 0) + 1);
  }
  const seen = new Set<string>();
  const entries: WordBankEntry[] = [];
  for (const item of activity.items) {
    for (const opt of item.options ?? []) {
      const trimmed = opt.trim();
      const key = normalizeAnswer(trimmed);
      if (!trimmed || seen.has(key)) continue;
      seen.add(key);
      entries.push({
        value: trimmed,
        label: trimmed,
        expectedCount: expectedCounts.get(key) ?? 1,
      });
    }
  }
  return entries;
}

function tryFixedChoiceOptions(items: ActivityItem[]): ChoiceOption[] | null {
  if (items.length < 3) return null;
  if (items.some((i) => i.accepted[0]?.includes(';'))) return null;
  if (items.every((i) => isPromptGapItem(i))) return null;

  const acc0 = items.map((i) => (i.accepted[0] ?? '').trim());
  const normSet = new Set(acc0.map(normalizeAnswer));
  if (normSet.size < 2 || normSet.size >= items.length) return null;

  for (const rule of FIXED_CHOICE_SETS) {
    if (rule.test(acc0, normSet, items)) {
      const opts = rule.options(acc0);
      return opts.map((o) => ({ value: o, label: o }));
    }
  }
  return null;
}

function adaptDefaultTypedItem(item: ActivityItem): AdaptedItem {
  if (item.uxMode) {
    return {
      raw: item,
      id: item.id,
      uxMode: item.uxMode,
      multiGap: item.uxMode === 'multi-gap' ? buildMultiGapMeta(item) : undefined,
      promptGap: item.uxMode === 'prompt-gap' ? buildPromptGapMeta(item) : undefined,
    };
  }

  if (item.accepted[0]?.includes(';')) {
    return {
      raw: item,
      id: item.id,
      uxMode: 'multi-gap',
      multiGap: buildMultiGapMeta(item),
    };
  }

  const slashOpts = tryExtractSlashChoice(item);
  if (slashOpts) {
    return {
      raw: item,
      id: item.id,
      uxMode: 'choice',
      choiceOptions: slashOpts,
    };
  }

  if (/^Zdanie\s+\d+:/i.test(item.prompt) && item.accepted.some((a) => /^(P|N)$/i.test(a.trim()))) {
    return {
      raw: item,
      id: item.id,
      uxMode: 'choice',
      choiceOptions: [
        { value: 'P', label: 'P' },
        { value: 'N', label: 'N' },
      ],
    };
  }

  const maxLen = Math.max(0, ...item.accepted.map((a) => a.length));
  if (maxLen >= 25) {
    return { raw: item, id: item.id, uxMode: 'long-text' };
  }

  return { raw: item, id: item.id, uxMode: 'typed' };
}

export function adaptActivity(activity: Activity): AdaptedActivity {
  const items = activity.items;

  if (activity.uxMode) {
    return {
      raw: activity,
      id: activity.id,
      uxMode: activity.uxMode,
      items: items.map((item) => ({
        raw: item,
        id: item.id,
        uxMode: item.uxMode ?? activity.uxMode!,
      })),
      wordBank: activity.wordBank?.map((w) => ({ value: w, label: w, expectedCount: 1 })),
    };
  }

  if (activity.kind === ActivityKind.Classify) {
    const categories = [...new Set(items.flatMap((i) => i.options ?? []))];
    return {
      raw: activity,
      id: activity.id,
      uxMode: 'classify',
      categories,
      items: items.map((item) => ({
        raw: item,
        id: item.id,
        uxMode: 'classify',
        choiceOptions: (item.options ?? []).map((o) => ({ value: o, label: o })),
      })),
    };
  }

  if (activity.kind === ActivityKind.Match) {
    return {
      raw: activity,
      id: activity.id,
      uxMode: 'match',
      chunkedMatch: items.length >= 10,
      items: items.map((item) => ({
        raw: item,
        id: item.id,
        uxMode: 'match',
      })),
    };
  }

  if (activity.kind === ActivityKind.LetterCloze) {
    return {
      raw: activity,
      id: activity.id,
      uxMode: 'letter-cloze',
      items: items.map((item) => ({
        raw: item,
        id: item.id,
        uxMode: 'letter-cloze',
      })),
    };
  }

  if (activity.kind === ActivityKind.Choice) {
    const maxOpts = Math.max(0, ...items.map((i) => i.options?.length ?? 0));
    if (maxOpts >= 5) {
      return {
        raw: activity,
        id: activity.id,
        uxMode: 'word-bank',
        wordBank: buildWordBankFromChoiceOptions(activity),
        items: items.map((item) => ({
          raw: item,
          id: item.id,
          uxMode: 'word-bank',
          choiceOptions: (item.options ?? []).map((o) => ({ value: o, label: o })),
        })),
      };
    }
    return {
      raw: activity,
      id: activity.id,
      uxMode: 'choice',
      items: items.map((item) => ({
        raw: item,
        id: item.id,
        uxMode: 'choice',
        choiceOptions: (item.options ?? []).map((o) => ({ value: o, label: o })),
      })),
    };
  }

  // ActivityKind.Typed — strict priority order

  // 6a. Fixed choice (F16)
  const fixedOpts = tryFixedChoiceOptions(items);
  if (fixedOpts) {
    return {
      raw: activity,
      id: activity.id,
      uxMode: 'choice',
      items: items.map((item) => ({
        raw: item,
        id: item.id,
        uxMode: 'choice',
        choiceOptions: fixedOpts,
      })),
    };
  }

  // 6b. Word-order / Sentence-order (F18 + Rule A)
  if (isWordOrderActivity(activity)) {
    return {
      raw: activity,
      id: activity.id,
      uxMode: 'word-order',
      items: items.map((item) => ({
        raw: item,
        id: item.id,
        uxMode: 'word-order',
        wordOrder: buildWordOrderMeta(activity.id, item, false),
      })),
    };
  }

  if (isSentenceOrderActivity(activity)) {
    return {
      raw: activity,
      id: activity.id,
      uxMode: 'word-order',
      items: items.map((item) => ({
        raw: item,
        id: item.id,
        // Rule A: keep single-item paragraph ordering as <textarea> (long-text) by default,
        // while attaching sentence-order tokens for optional "Kafelki" toggle.
        uxMode: 'long-text',
        wordOrder: buildWordOrderMeta(activity.id, item, true),
      })),
    };
  }

  // 6c. Dialogue-order (F18 + Rule B)
  if (isDialogueOrderActivity(activity)) {
    const bank: WordBankEntry[] = deterministicShuffle(
      items.map((item) => ({
        value: item.accepted[0],
        label: item.accepted[0],
        expectedCount: 1,
      })),
      activity.id,
      true,
    );
    return {
      raw: activity,
      id: activity.id,
      uxMode: 'dialogue-order',
      wordBank: bank,
      items: items.map((item) => ({
        raw: item,
        id: item.id,
        uxMode: 'dialogue-order',
      })),
    };
  }

  // 6d. Instruction-text Word-Bank (F19)
  if (isTypedWordBankActivity(activity)) {
    return {
      raw: activity,
      id: activity.id,
      uxMode: 'word-bank',
      wordBank: buildWordBankFromAccepted(activity),
      items: items.map((item) => ({
        raw: item,
        id: item.id,
        uxMode: 'word-bank',
        multiGap: item.accepted[0]?.includes(';') ? buildMultiGapMeta(item) : undefined,
      })),
    };
  }

  // 6e. Prompt-gap (F22 + Rule C)
  if (items.length > 0 && items.every((i) => isPromptGapItem(i))) {
    return {
      raw: activity,
      id: activity.id,
      uxMode: 'prompt-gap',
      items: items.map((item) => ({
        raw: item,
        id: item.id,
        uxMode: 'prompt-gap',
        promptGap: buildPromptGapMeta(item),
      })),
    };
  }

  // 6f. Slash choice activity-level (F16 + Rule D)
  const slashAdapted = items.map((item) => tryExtractSlashChoice(item));
  const slashCount = slashAdapted.filter(Boolean).length;
  if (slashCount >= Math.max(2, items.length * 0.8)) {
    return {
      raw: activity,
      id: activity.id,
      uxMode: 'choice',
      items: items.map((item, idx) => {
        const opts = slashAdapted[idx];
        if (opts) {
          return {
            raw: item,
            id: item.id,
            uxMode: 'choice',
            choiceOptions: opts,
          };
        }
        return adaptDefaultTypedItem(item);
      }),
    };
  }

  // 6g. Multi-gap activity-level (F17)
  if (items.length > 0 && items.every((i) => i.accepted[0]?.includes(';'))) {
    return {
      raw: activity,
      id: activity.id,
      uxMode: 'multi-gap',
      items: items.map((item) => ({
        raw: item,
        id: item.id,
        uxMode: 'multi-gap',
        multiGap: buildMultiGapMeta(item),
      })),
    };
  }

  // 6h. Mixed / default typed
  return {
    raw: activity,
    id: activity.id,
    uxMode: 'typed',
    items: items.map((item) => adaptDefaultTypedItem(item)),
  };
}
