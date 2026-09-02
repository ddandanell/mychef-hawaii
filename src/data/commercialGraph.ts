/**
 * Locked master map — 12 keyword URLs. Sitemap lists only these.
 * Supporting /private-chef /bar /pricing /quote stay live, unadvertised.
 * No neighborhood or blog URLs.
 */

export const PRODUCTION_ROOT = 'mychef-hawaii.com';

export const ISLAND_SITEMAP_HOSTS = ['oahu', 'maui', 'kauai', 'bigisland'] as const;
export type IslandSitemapHost = (typeof ISLAND_SITEMAP_HOSTS)[number];

export type MasterHost = 'hub' | IslandSitemapHost;

export interface MasterLoc {
  host: MasterHost;
  path: '/' | '/catering' | '/weddings';
}

/** The 12 shipped money URLs. One primary keyword each. */
export const MASTER_MAP: readonly MasterLoc[] = [
  { host: 'hub', path: '/' },
  { host: 'hub', path: '/catering' },
  { host: 'hub', path: '/weddings' },
  { host: 'oahu', path: '/' },
  { host: 'oahu', path: '/catering' },
  { host: 'oahu', path: '/weddings' },
  { host: 'maui', path: '/' },
  { host: 'maui', path: '/catering' },
  { host: 'maui', path: '/weddings' },
  { host: 'kauai', path: '/' },
  { host: 'kauai', path: '/catering' },
  { host: 'bigisland', path: '/' },
] as const;

/** Supporting paths — live, not in XML sitemap, titles must not compete. */
export const SUPPORTING_PATHS = ['/private-chef', '/bar', '/pricing', '/quote'] as const;

export function masterHostName(host: MasterHost): string {
  return host === 'hub' ? PRODUCTION_ROOT : `${host}.${PRODUCTION_ROOT}`;
}

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

export function masterLocs(filterHost?: MasterHost): { loc: string; path: string; priority: string }[] {
  return MASTER_MAP.filter((row) => !filterHost || row.host === filterHost).map((row) => ({
    loc: absoluteUrl(masterHostName(row.host), row.path),
    path: row.path,
    priority: row.path === '/' ? (row.host === 'hub' ? '1.0' : '0.9') : '0.8',
  }));
}

/** @deprecated use MASTER_MAP — kept for HTML nav of supporting pages */
export const HUB_COMMERCIAL_PATHS = ['/', '/catering', '/weddings', '/private-chef', '/bar', '/pricing', '/quote'] as const;
export const ISLAND_COMMERCIAL_PATHS = ['/', '/catering', '/weddings', '/private-chef', '/bar', '/pricing', '/quote'] as const;
