import { createContext, useContext, useMemo } from 'react';
import type { ReactNode } from 'react';
import { useLocation } from 'react-router';
import { detectIslandFromHost, originFor, siteUrl } from '@/config/site';
import type { IslandId, IslandMeta, IslandState } from '@/data/islands';
import { islands } from '@/data/islands';

/**
 * IslandContext — each wildcard host is its own department.
 *
 * Resolution order:
 *  1. Hostname: oahu.* / maui.* / kauai.* / bigisland.* (production + *.localhost)
 *  2. Path fallback on the hub: /oahu, /maui, /bigisland, /kauai
 */

export interface IslandContextValue {
  island: IslandMeta | null;
  islandId: IslandId | null;
  state: IslandState | 'root';
  /** '' on an island host; '/maui' etc. on hub path-fallback */
  basePath: string;
  /** True when this tab is an island subdomain, not the hub. */
  hostMode: boolean;
  /** Path with the hub prefix stripped (`/journal` not `/maui/journal`). */
  localPath: string;
  href: (path: string) => string;
  toHub: (path?: string) => string;
  toIsland: (id: IslandId, path?: string) => string;
}

const IslandContext = createContext<IslandContextValue | null>(null);

const PATH_PREFIXES: IslandId[] = ['oahu', 'maui', 'bigisland', 'kauai'];

function detectFromPath(pathname: string): IslandId | null {
  const seg = pathname.split('/').filter(Boolean)[0]?.toLowerCase();
  if (!seg) return null;
  return (PATH_PREFIXES as string[]).includes(seg) ? (seg as IslandId) : null;
}

function stripPrefix(pathname: string, id: IslandId): string {
  const prefix = `/${id}`;
  if (pathname === prefix) return '/';
  if (pathname.startsWith(`${prefix}/`)) {
    const rest = pathname.slice(prefix.length);
    return rest.length ? rest : '/';
  }
  return pathname;
}

export function IslandProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  const value = useMemo<IslandContextValue>(() => {
    const fromHost =
      typeof window !== 'undefined' ? detectIslandFromHost(window.location.hostname) : null;
    const fromPath = detectFromPath(pathname);
    const id = fromHost ?? fromPath;
    const island = id ? islands[id] : null;
    const hostMode = Boolean(fromHost);
    const basePath = island ? (hostMode ? '' : island.basePath) : '';
    const localPath = island && !hostMode ? stripPrefix(pathname, island.id) : pathname || '/';

    return {
      island,
      islandId: id,
      state: island ? island.state : 'root',
      basePath,
      hostMode,
      localPath,
      href: (path: string) => {
        const clean = path.startsWith('/') ? path : `/${path}`;
        if (clean === '/') return basePath || '/';
        return `${basePath}${clean}`;
      },
      toHub: (path = '/') => (typeof window === 'undefined' ? path : siteUrl('root', path)),
      toIsland: (islandId, path = '/') =>
        typeof window === 'undefined' ? path : siteUrl(islandId, path),
    };
  }, [pathname]);

  return <IslandContext.Provider value={value}>{children}</IslandContext.Provider>;
}

export function useIsland(): IslandContextValue {
  const ctx = useContext(IslandContext);
  if (!ctx) throw new Error('useIsland must be used within <IslandProvider>');
  return ctx;
}

export function islandOrigin(id: IslandId | 'root'): string {
  return originFor(id);
}
