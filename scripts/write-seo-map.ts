import { mkdirSync, writeFileSync, unlinkSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ISLAND_HOSTS, PRODUCTION_ROOT } from '../src/config/site';
import {
  HUB_COMMERCIAL_PATHS,
  ISLAND_COMMERCIAL_PATHS,
} from '../src/data/commercialGraph';
import { resolveDocumentSeo, sitemapLocs } from '../src/lib/seo';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = join(root, 'public');
const sitemapDir = join(publicDir, 'sitemaps');
mkdirSync(sitemapDir, { recursive: true });

type SeoEntry = { title: string; description: string; island: string | null; path: string };
const map: Record<string, SeoEntry> = {};

function xmlEscape(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}

function urlset(host: string): string {
  const urls = sitemapLocs(host);
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${xmlEscape(u.loc)}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;
}

function record(host: string, path: string) {
  const seo = resolveDocumentSeo(host, path);
  const island = seo.islandId;
  const key = `${island ?? 'hub'}:${path}`;
  map[key] = { title: seo.title, description: seo.description, island, path };
}

HUB_COMMERCIAL_PATHS.forEach((p) => record(PRODUCTION_ROOT, p));
ISLAND_HOSTS.forEach((id) => {
  const host = `${id}.${PRODUCTION_ROOT}`;
  ISLAND_COMMERCIAL_PATHS.forEach((p) => record(host, p));
  writeFileSync(join(sitemapDir, `${id}.xml`), urlset(host));
});

writeFileSync(join(sitemapDir, 'hub.xml'), urlset(PRODUCTION_ROOT));
writeFileSync(join(sitemapDir, 'index.xml'), urlset(PRODUCTION_ROOT));
writeFileSync(join(publicDir, 'sitemap.xml'), urlset(PRODUCTION_ROOT));

const vercelXml = join(sitemapDir, 'vercel.xml');
try {
  unlinkSync(vercelXml);
} catch {
  /* already gone */
}

writeFileSync(join(publicDir, 'seo-map.json'), JSON.stringify(map));
console.log(`seo-map ${Object.keys(map).length} entries, commercial sitemaps written`);
