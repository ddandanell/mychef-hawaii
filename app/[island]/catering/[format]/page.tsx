import { notFound } from 'next/navigation';
import { UniqueCellView } from '@/components/views/IslandDocumentView';
import { CATERING_FORMAT_SLUGS, getCateringFormat } from '@/data/cateringFormats';
import type { IslandId } from '@/data/islands';
import { islandMetadata } from '@/lib/pageSeo';
import { requestHostMode } from '@/lib/request';
import { ISLAND_HOSTS } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return ISLAND_HOSTS.flatMap((island) =>
    CATERING_FORMAT_SLUGS.map((format) => ({ island, format })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ island: string; format: string }>;
}) {
  const { island, format } = await params;
  if (!(ISLAND_HOSTS as readonly string[]).includes(island)) return {};
  return islandMetadata(island as IslandId, `/catering/${format}`);
}

export default async function CateringFormatPage({
  params,
}: {
  params: Promise<{ island: string; format: string }>;
}) {
  const { island, format } = await params;
  if (!(ISLAND_HOSTS as readonly string[]).includes(island)) notFound();
  const islandId = island as IslandId;
  const page = getCateringFormat(islandId, format);
  if (!page) notFound();
  const hostMode = await requestHostMode();
  return <UniqueCellView islandId={islandId} hostMode={hostMode} cell={page} />;
}
