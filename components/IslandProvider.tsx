'use client';

import { createContext, useContext } from 'react';
import type { IslandId } from '@/data/islands';
import { islandHref } from '@/lib/paths';

export interface IslandValue {
  islandId: IslandId | null;
  hostMode: boolean;
  href: (path: string) => string;
}

const IslandContext = createContext<IslandValue>({
  islandId: null,
  hostMode: false,
  href: (path) => path,
});

export function IslandProvider({
  islandId,
  hostMode,
  children,
}: {
  islandId: IslandId | null;
  hostMode: boolean;
  children: React.ReactNode;
}) {
  const value: IslandValue = {
    islandId,
    hostMode,
    href: (path: string) => islandHref(islandId, hostMode, path),
  };
  return <IslandContext.Provider value={value}>{children}</IslandContext.Provider>;
}

export function useIsland(): IslandValue {
  return useContext(IslandContext);
}
