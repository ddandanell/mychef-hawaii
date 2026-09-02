import { notFound } from 'next/navigation';
import { ISLAND_HOSTS } from '@/lib/site';
import type { IslandId } from '@/data/islands';
import { requestHostMode } from '@/lib/request';

export function generateStaticParams() {
  return ISLAND_HOSTS.map((island) => ({ island }));
}

export const dynamicParams = false;

export async function parseIsland(params: Promise<{ island: string }>): Promise<IslandId> {
  const { island } = await params;
  if (!(ISLAND_HOSTS as readonly string[]).includes(island)) notFound();
  return island as IslandId;
}

export async function islandProps(params: Promise<{ island: string }>) {
  const islandId = await parseIsland(params);
  const hostMode = await requestHostMode();
  return { islandId, hostMode };
}
