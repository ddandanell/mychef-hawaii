import { notFound } from 'next/navigation';
import { UniqueCellView } from '@/components/views/IslandDocumentView';
import { FINE_DINING_SLUGS, getFineDiningPage } from '@/data/fineDining';
import type { IslandId } from '@/data/islands';
import { islandMetadata } from '@/lib/pageSeo';
import { requestHostMode } from '@/lib/request';
import { ISLAND_HOSTS } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return ISLAND_HOSTS.flatMap((island) =>
    FINE_DINING_SLUGS.map((course) => ({ island, course })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ island: string; course: string }>;
}) {
  const { island, course } = await params;
  if (!(ISLAND_HOSTS as readonly string[]).includes(island)) return {};
  return islandMetadata(island as IslandId, `/fine-dining/${course}`);
}

export default async function FineDiningPage({
  params,
}: {
  params: Promise<{ island: string; course: string }>;
}) {
  const { island, course } = await params;
  if (!(ISLAND_HOSTS as readonly string[]).includes(island)) notFound();
  const islandId = island as IslandId;
  const page = getFineDiningPage(islandId, course);
  if (!page) notFound();
  const hostMode = await requestHostMode();
  return <UniqueCellView islandId={islandId} hostMode={hostMode} cell={page} />;
}
