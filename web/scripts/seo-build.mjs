import assert from 'node:assert/strict';
import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const webDir = resolve(fileURLToPath(new URL('..', import.meta.url)));
const outputDir = resolve(webDir, 'dist/polski-platform/browser');
const configuredOrigin = process.env.SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL;

if (!configuredOrigin && process.env.VERCEL) {
  throw new Error('Set VERCEL_PROJECT_PRODUCTION_URL or SITE_URL to generate canonical URLs and sitemap.');
}

const origin = configuredOrigin
  ? new URL(configuredOrigin.includes('://') ? configuredOrigin : `https://${configuredOrigin}`).origin
  : '';
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
  const html = (await readFile(file, 'utf8')).replaceAll('__SITE_URL__', origin);
  assert(!html.includes('__SITE_URL__'), `Unresolved site URL in ${file}`);
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
