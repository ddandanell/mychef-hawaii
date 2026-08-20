import type { IslandId } from '@/data/islands';

/** Production root. Island hosts are oahu / maui / kauai / bigisland subdomains. */
export const PRODUCTION_ROOT = 'mychef-hawaii.com';

export const ISLAND_HOSTS: IslandId[] = ['oahu', 'maui', 'kauai', 'bigisland'];

export function detectIslandFromHost(hostname: string): IslandId | null {
  const h = hostname.split(':')[0]?.toLowerCase() ?? '';
  if (
    h === 'localhost' ||
    h === '127.0.0.1' ||
    h === PRODUCTION_ROOT ||
    h === `www.${PRODUCTION_ROOT}`
  ) {
    return null;
  }
  const first = h.split('.')[0];
  return (ISLAND_HOSTS as string[]).includes(first) ? (first as IslandId) : null;
}

/** Wildcard island hosts work on localhost and mychef-hawaii.com — not on *.vercel.app. */
export function usesIslandSubdomains(hostname: string): boolean {
  const h = hostname.split(':')[0]?.toLowerCase() ?? '';
  if (h === '127.0.0.1') return false;
  if (h === 'localhost' || h.endsWith('.localhost')) return true;
  if (h.endsWith('.vercel.app') || h.endsWith('.now.sh')) return false;
  if (h === PRODUCTION_ROOT || h.endsWith(`.${PRODUCTION_ROOT}`)) return true;
  return true;
}

function rootHostOf(hostname: string): string {
  const h = hostname.split(':')[0]?.toLowerCase() ?? 'localhost';
  if (h === '127.0.0.1') return 'localhost';
  if (h.endsWith('.localhost') || h === 'localhost') return 'localhost';
  if (h === PRODUCTION_ROOT || h.endsWith(`.${PRODUCTION_ROOT}`)) return PRODUCTION_ROOT;
  if (h.startsWith('www.')) return h.slice(4);
  return h;
}

type HostLoc = { protocol: string; hostname: string; port?: string };

function currentLoc(): HostLoc {
  if (typeof window !== 'undefined') {
    return { protocol: window.location.protocol, hostname: window.location.hostname, port: window.location.port };
  }
  return { protocol: 'https:', hostname: PRODUCTION_ROOT, port: '' };
}

export function originFor(island: IslandId | 'root', loc: HostLoc = currentLoc()): string {
  const port = loc.port && loc.port !== '80' && loc.port !== '443' ? `:${loc.port}` : '';
  const root = rootHostOf(loc.hostname);
  if (island === 'root' || !usesIslandSubdomains(loc.hostname)) {
    return `${loc.protocol}//${root}${port}`;
  }
  return `${loc.protocol}//${island}.${root}${port}`;
}

/** Absolute URL on an island host (or root). Path-prefix fallback on Vercel default URLs. */
export function siteUrl(island: IslandId | 'root', path = '/', loc: HostLoc = currentLoc()): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  const origin = originFor(island, loc);
  if (island !== 'root' && !usesIslandSubdomains(loc.hostname)) {
    const prefix = `/${island}`;
    if (clean === '/') return `${origin}${prefix}`;
    return `${origin}${prefix}${clean}`;
  }
  return `${origin}${clean === '/' ? '/' : clean}`;
}

export function locFromHost(hostname: string): HostLoc {
  const h = hostname.split(':')[0] ?? hostname;
  const proto = h === 'localhost' || h.endsWith('.localhost') || h.startsWith('127.') ? 'http:' : 'https:';
  return { protocol: proto, hostname: h, port: '' };
}

/** True when this request is on the purchased apex / island wildcard, not a *.vercel.app preview. */
export function isProductionApex(hostname: string): boolean {
  const h = hostname.split(':')[0]?.toLowerCase() ?? '';
  return h === PRODUCTION_ROOT || h === `www.${PRODUCTION_ROOT}` || h.endsWith(`.${PRODUCTION_ROOT}`);
}
