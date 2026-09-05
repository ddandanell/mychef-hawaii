import { notFound } from 'next/navigation';
import { UniqueCellView } from '@/components/views/IslandDocumentView';
import { getOccasionPage, OCCASION_SLUGS } from '@/data/occasionPages';
import type { IslandId } from '@/data/islands';
import { islandMetadata } from '@/lib/pageSeo';
import { requestHostMode } from '@/lib/request';
import { ISLAND_HOSTS } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return ISLAND_HOSTS.flatMap((island) => OCCASION_SLUGS.map((occasion) => ({ island, occasion })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ island: string; occasion: string }>;
}) {
  const { island, occasion } = await params;
  if (!(ISLAND_HOSTS as readonly string[]).includes(island)) return {};
  return islandMetadata(island as IslandId, `/events/${occasion}`);
}

export default async function OccasionPage({
  params,
}: {
  params: Promise<{ island: string; occasion: string }>;
}) {
  const { island, occasion } = await params;
  if (!(ISLAND_HOSTS as readonly string[]).includes(island)) notFound();
  const islandId = island as IslandId;
  const page = getOccasionPage(islandId, occasion);
  if (!page) notFound();
  const hostMode = await requestHostMode();
  return <UniqueCellView islandId={islandId} hostMode={hostMode} cell={page} />;
}
