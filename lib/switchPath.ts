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
