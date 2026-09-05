import { PRODUCTION_ROOT, detectIslandFromHost } from '@/lib/site';
import { MASTER_MAP, masterHostName, type MasterHost, type IslandSitemapHost } from '@/data/commercialGraph';
import { moneyNeighborhoods } from '@/data/offers';
import { uniqueCells } from '@/data/uniqueCells';
import { islandServices } from '@/data/islandServices';
import { occasionPages } from '@/data/occasionPages';
import { cateringFormats } from '@/data/cateringFormats';
import { fineDiningPages } from '@/data/fineDining';
import { staffingPages } from '@/data/staffingPages';
import { menuSkuPages } from '@/data/menuSkus';
import { helpArticles } from '@/data/helpArticles';
import { journalArticles } from '@/data/journalArticles';
import { blogArticles } from '@/data/blogArticles';
import { SUPPORT_PATHS } from '@/data/islandSupport';

function xmlEscape(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}

function loc(host: MasterHost, path: string): string {
  const hostname = masterHostName(host);
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `https://${hostname}${clean === '/' ? '/' : clean}`;
}

function neighborhoodRows(island: IslandSitemapHost): { host: MasterHost; path: string; priority: string }[] {
  return moneyNeighborhoods[island].map((hood) => ({
    host: island,
    path: `/${hood.slug}`,
    priority: '0.7',
  }));
}

function supportRows(island: IslandSitemapHost): { host: MasterHost; path: string; priority: string }[] {
  return [...SUPPORT_PATHS, '/about', '/events', '/legal', '/journal', '/blog', '/locations', '/areas', '/contact', '/trust', '/services', '/help', '/fine-dining', '/staffing', '/corporate', '/gatherings', '/islands', '/sitemap'].map((path) => ({
    host: island,
    path,
    priority: '0.6',
  }));
}

function uniqueCellRows(island: IslandSitemapHost): { host: MasterHost; path: string; priority: string }[] {
  return [
    ...uniqueCells[island].map((cell) => ({ host: island, path: `/${cell.slug}`, priority: '0.55' })),
    ...islandServices[island].map((cell) => ({ host: island, path: `/${cell.slug}`, priority: '0.5' })),
    ...occasionPages[island].map((cell) => ({ host: island, path: `/events/${cell.slug}`, priority: '0.5' })),
    ...cateringFormats[island].map((cell) => ({ host: island, path: `/catering/${cell.slug}`, priority: '0.5' })),
    ...fineDiningPages[island].map((cell) => ({ host: island, path: `/fine-dining/${cell.slug}`, priority: '0.45' })),
    ...staffingPages[island].map((cell) => ({ host: island, path: `/staffing/${cell.slug}`, priority: '0.45' })),
    ...menuSkuPages[island].map((cell) => ({ host: island, path: `/menus/${cell.slug}`, priority: '0.45' })),
    ...helpArticles[island].map((cell) => ({ host: island, path: `/help/${cell.slug}`, priority: '0.4' })),
    ...journalArticles[island].map((cell) => ({ host: island, path: `/journal/${cell.slug}`, priority: '0.35' })),
    ...blogArticles[island].map((cell) => ({ host: island, path: `/blog/${cell.slug}`, priority: '0.35' })),
  ];
}

function urlset(rows: { host: MasterHost; path: string; priority?: string }[]): string {
  const entries = rows.map((r) => {
    const href = loc(r.host, r.path);
    const priority =
      r.priority ??
      (r.path === '/' ? (r.host === 'hub' ? '1.0' : '0.9') : r.path === '/about' ? '0.6' : '0.8');
    const changefreq = r.path === '/' ? 'weekly' : 'monthly';
    return `  <url>
    <loc>${xmlEscape(href)}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`;
}

export async function GET(request: Request) {
  const host = (request.headers.get('x-forwarded-host') || request.headers.get('host') || PRODUCTION_ROOT)
    .split(':')[0]
    .toLowerCase();
  const island = detectIslandFromHost(host);
  const extras = island
    ? [...neighborhoodRows(island), ...supportRows(island), ...uniqueCellRows(island)]
    : (['oahu', 'maui', 'kauai', 'bigisland'] as const).flatMap((id) => [
        ...neighborhoodRows(id),
        ...supportRows(id),
        ...uniqueCellRows(id),
      ]);
  const rows = island
    ? [...MASTER_MAP.filter((r) => r.host === island), ...extras]
    : [...MASTER_MAP, ...extras];
  return new Response(urlset(rows), {
    status: 200,
    headers: {
      'content-type': 'application/xml; charset=utf-8',
      'cache-control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}

export const dynamic = 'force-dynamic';
