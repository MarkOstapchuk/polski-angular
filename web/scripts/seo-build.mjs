import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const webDir = resolve(fileURLToPath(new URL('..', import.meta.url)));
const repoDir = resolve(webDir, '..');
const outputDir = resolve(webDir, 'dist/polski-platform/browser');
const configuredOrigin = process.env.SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL;

function readEnvFile(filePath) {
  if (!existsSync(filePath)) return {};
  const entries = {};
  for (const rawLine of readFileSync(filePath, 'utf8').split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const eqIndex = line.indexOf('=');
    if (eqIndex <= 0) continue;
    const key = line.slice(0, eqIndex).trim();
    let value = line.slice(eqIndex + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    entries[key] = value;
  }
  return entries;
}

const fileEnv = {
  ...readEnvFile(resolve(repoDir, '.env')),
  ...readEnvFile(resolve(repoDir, '.env.local')),
  ...readEnvFile(resolve(webDir, '.env')),
  ...readEnvFile(resolve(webDir, '.env.local')),
};

const posthogKey = (process.env.POSTHOG_KEY ?? fileEnv.POSTHOG_KEY ?? '').trim();
const posthogHost = (process.env.POSTHOG_HOST ?? fileEnv.POSTHOG_HOST ?? '').trim();

function buildPosthogSnippet(key, host) {
  if (!key || !host) return '';
  const assetsHost = host.replace('.i.posthog.com', '-assets.i.posthog.com');
  return `<script>
!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once unregister opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing reset identify setPersonProperties".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
posthog.init(${JSON.stringify(key)},{api_host:${JSON.stringify(host)},ui_host:${JSON.stringify(assetsHost.replace('-assets.i.posthog.com', '.posthog.com'))},defaults:"2026-08-30",person_profiles:"identified_only",capture_dead_clicks:true});
posthog.register({app_surface:"seo_landing",ui_locale:document.documentElement.lang||"pl"});
</script>
`;
}

if (!configuredOrigin && process.env.VERCEL) {
  throw new Error('Set VERCEL_PROJECT_PRODUCTION_URL or SITE_URL to generate canonical URLs and sitemap.');
}

const origin = configuredOrigin
  ? new URL(configuredOrigin.includes('://') ? configuredOrigin : `https://${configuredOrigin}`).origin
  : '';
const posthogSnippet = buildPosthogSnippet(posthogKey, posthogHost);
const pages = [
  { route: '/', file: 'seo/index.html' },
  { route: '/ru', file: 'ru/index.html' },
  { route: '/en', file: 'en/index.html' },
  { route: '/nauka/polskie-znaki', file: 'nauka/polskie-znaki/index.html' },
  { route: '/gramatyka/przypadki', file: 'gramatyka/przypadki/index.html' },
  { route: '/slownictwo/podstawowe-zwroty', file: 'slownictwo/podstawowe-zwroty/index.html' },
];

for (const page of pages) {
  const file = resolve(outputDir, page.file);
  let html = (await readFile(file, 'utf8')).replaceAll('__SITE_URL__', origin);
  assert(!html.includes('__SITE_URL__'), `Unresolved site URL in ${file}`);
  if (posthogSnippet && !html.includes('posthog.init(')) {
    html = html.replace('</head>', `${posthogSnippet}</head>`);
  }
  await writeFile(file, html);
}

const robotsFile = resolve(outputDir, 'robots.txt');
const robots = await readFile(robotsFile, 'utf8');
await writeFile(robotsFile, origin
  ? robots.replaceAll('__SITE_URL__', origin)
  : robots.replace(/^Sitemap:.*\n/m, ''));

if (origin) {
  const urls = pages.map(({ route }) => `  <url><loc>${origin}${route}</loc></url>`).join('\n');
  await writeFile(resolve(outputDir, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
} else {
  console.warn('SEO sitemap skipped: set SITE_URL to generate it for a local build.');
}
