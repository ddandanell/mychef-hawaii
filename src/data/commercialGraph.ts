/**
 * Canonical commercial URL graph for hub + four island hosts.
 * Sitemap and HTML /sitemap list only these paths — not neighborhoods,
 * blog, journal, or catalog stubs.
 */

export const PRODUCTION_ROOT = 'mychef-hawaii.com';

export const ISLAND_SITEMAP_HOSTS = ['oahu', 'maui', 'kauai', 'bigisland'] as const;
export type IslandSitemapHost = (typeof ISLAND_SITEMAP_HOSTS)[number];

/** Hub paths advertised in XML + HTML sitemaps. */
export const HUB_COMMERCIAL_PATHS = [
  '/',
  '/private-chef',
  '/catering',
  '/weddings',
  '/bar',
  '/pricing',
  '/quote',
  '/trust',
  '/legal',
  '/how-it-works',
] as const;

/** Per-island paths advertised in XML + HTML sitemaps. */
export const ISLAND_COMMERCIAL_PATHS = [
  '/',
  '/private-chef',
  '/catering',
  '/weddings',
  '/bar',
  '/pricing',
  '/quote',
] as const;

export function absoluteUrl(host: string, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `https://${host}${clean === '/' ? '/' : clean}`;
}

export function hubLoc(path: string): string {
  return absoluteUrl(PRODUCTION_ROOT, path);
}

export function islandLoc(island: IslandSitemapHost, path: string): string {
  return absoluteUrl(`${island}.${PRODUCTION_ROOT}`, path);
}
