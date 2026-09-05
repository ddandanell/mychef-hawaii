import { islandOrder, type IslandId } from '@/data/islands';
import { switcherSlugs } from '@/data/switcherSlugs';
import { ISLAND_HOSTS } from '@/lib/site';

function slugOwners(): Map<string, Set<IslandId>> {
  const map = new Map<string, Set<IslandId>>();
  for (const id of islandOrder) {
    for (const slug of switcherSlugs[id]) {
      const set = map.get(slug) ?? new Set<IslandId>();
      set.add(id);
      map.set(slug, set);
    }
  }
  return map;
}

const OWNERS = slugOwners();

/** Nested journal/blog URLs can share a last segment with a place cell (e.g. /journal/wedding-week vs /wedding-week). */
function nestedEditorialKey(clean: string): string | null {
  const m = clean.match(/^\/(journal|blog)\/([^/]+)$/);
  return m ? `${m[1]}/${m[2]}` : null;
}

export function localPathFromPathname(
  pathname: string,
  islandId: IslandId | null,
  hostMode: boolean,
): string {
  const path = (pathname.split('?')[0] || '/').replace(/\/+$/, '') || '/';
  const segs = path.split('/').filter(Boolean);
  if (!hostMode && islandId && segs[0] === islandId) {
    const rest = segs.slice(1).join('/');
    return rest ? `/${rest}` : '/';
  }
  return path.startsWith('/') ? path : `/${path}`;
}

export function islandSwitchPath(localPath: string, target: IslandId): string {
  const clean = (localPath.startsWith('/') ? localPath : `/${localPath}`).replace(/\/+$/, '') || '/';
  const nested = nestedEditorialKey(clean);
  if (nested && OWNERS.has(nested)) {
    return OWNERS.get(nested)!.has(target) ? clean : '/';
  }
  const segs = clean.split('/').filter(Boolean);
  for (const seg of segs) {
    if ((ISLAND_HOSTS as string[]).includes(seg)) continue;
    const owners = OWNERS.get(seg);
    if (owners && !owners.has(target)) return '/';
  }
  return clean;
}

export function hubSwitchPath(localPath: string): string {
  const clean = (localPath.startsWith('/') ? localPath : `/${localPath}`).replace(/\/+$/, '') || '/';
  const nested = nestedEditorialKey(clean);
  if (nested && OWNERS.has(nested)) {
    return OWNERS.get(nested)!.size < islandOrder.length ? '/' : clean;
  }
  const segs = clean.split('/').filter(Boolean);
  for (const seg of segs) {
    const owners = OWNERS.get(seg);
    if (owners && owners.size < islandOrder.length) return '/';
  }
  return clean;
}

export function isHomePath(localPath: string): boolean {
  return localPath === '/' || localPath === '';
}
