import { mkdirSync, writeFileSync, unlinkSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ISLAND_HOSTS, PRODUCTION_ROOT } from '../src/config/site';
import {
  HUB_COMMERCIAL_PATHS,
  ISLAND_COMMERCIAL_PATHS,
} from '../src/data/commercialGraph';
import { HUB_CATERING, cateringOffers } from '../src/data/catering';
import { islandOffers } from '../src/data/offers';
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
const masterXml = urlset(PRODUCTION_ROOT);
writeFileSync(join(publicDir, 'sitemap.xml'), masterXml);
writeFileSync(join(publicDir, 'sitemap-hub.xml'), masterXml);
writeFileSync(
  join(publicDir, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: https://${PRODUCTION_ROOT}/sitemap.xml\n`,
);

const vercelXml = join(sitemapDir, 'vercel.xml');
try {
  unlinkSync(vercelXml);
} catch {
  /* already gone */
}

const LOCKED_TITLES: Record<string, string> = {
  'hub:/': 'Private Chef Hawaii | Four Island Villa Chefs | myCHEF',
  'hub:/catering': 'Hawaii Catering | Staffed Villa Events 10–75 | myCHEF',
  'hub:/weddings': 'Wedding Catering Hawaii | Wedding-Week Chefs | myCHEF',
  'oahu:/': 'Private Chef Oahu | Villa and Household Chefs | myCHEF',
  'oahu:/catering': 'Oahu Catering | Honolulu to Ko Olina Events | myCHEF',
  'oahu:/weddings': 'Wedding Catering Oahu | Gold Coast Weekends | myCHEF',
  'maui:/': 'Private Chef Maui | In-Villa Dinners and Weeks | myCHEF',
  'maui:/catering': 'Maui Catering | Villa Receptions and Events | myCHEF',
  'maui:/weddings': 'Wedding Catering Maui | Wedding-Week Chefs | myCHEF',
  'kauai:/': 'Private Chef Kauai | Both Shores — Inquiry | myCHEF',
  'kauai:/catering': 'Kauai Catering | Estate Events — Inquiry | myCHEF',
  'bigisland:/': 'Private Chef Big Island | Kona–Kohala Inquiry | myCHEF',
};

writeFileSync(join(publicDir, 'seo-map.json'), JSON.stringify(map));

const mismatches = Object.entries(LOCKED_TITLES).filter(([key, expected]) => map[key]?.title !== expected);
if (mismatches.length) {
  throw new Error(
    `Locked money titles drifted:\n${mismatches
      .map(([key, expected]) => `  ${key}: got ${JSON.stringify(map[key]?.title)} expected ${JSON.stringify(expected)}`)
      .join('\n')}`,
  );
}

const LOCKED_H1: Array<[string, string]> = [
  [islandOffers.oahu.h1, 'Private Chef Oahu — in your villa, in your home.'],
  [islandOffers.maui.h1, 'A private chef’s table — in your own Maui villa.'],
  [islandOffers.kauai.h1, 'Private chef Kauai — both shores, inquiry stage.'],
  [islandOffers.bigisland.h1, 'Private chef Big Island — the Kohala Coast first.'],
  [cateringOffers.oahu.h1, 'Oahu catering — staffed events from Honolulu to Ko Olina.'],
  [cateringOffers.maui.h1, 'Maui catering — staffed villa events, not drop-off.'],
  [cateringOffers.kauai.h1, 'Kauai catering — both shores, inquiry stage.'],
  [HUB_CATERING.h1, 'Hawaii catering — villas and estates, not ballrooms.'],
];
const h1Miss = LOCKED_H1.filter(([got, expected]) => got !== expected);
if (h1Miss.length) {
  throw new Error(
    `Locked money H1s drifted:\n${h1Miss
      .map(([got, expected]) => `  got ${JSON.stringify(got)} expected ${JSON.stringify(expected)}`)
      .join('\n')}`,
  );
}

console.log(`seo-map ${Object.keys(map).length} entries, commercial sitemaps written`);
