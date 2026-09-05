import { notFound } from 'next/navigation';
import { UniqueCellView } from '@/components/views/IslandDocumentView';
import { STAFFING_SLUGS, getStaffingPage } from '@/data/staffingPages';
import type { IslandId } from '@/data/islands';
import { islandMetadata } from '@/lib/pageSeo';
import { requestHostMode } from '@/lib/request';
import { ISLAND_HOSTS } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return ISLAND_HOSTS.flatMap((island) => STAFFING_SLUGS.map((role) => ({ island, role })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ island: string; role: string }>;
}) {
  const { island, role } = await params;
  if (!(ISLAND_HOSTS as readonly string[]).includes(island)) return {};
  return islandMetadata(island as IslandId, `/staffing/${role}`);
}

export default async function StaffingPage({
  params,
}: {
  params: Promise<{ island: string; role: string }>;
}) {
  const { island, role } = await params;
  if (!(ISLAND_HOSTS as readonly string[]).includes(island)) notFound();
  const islandId = island as IslandId;
  const page = getStaffingPage(islandId, role);
  if (!page) notFound();
  const hostMode = await requestHostMode();
  return <UniqueCellView islandId={islandId} hostMode={hostMode} cell={page} />;
}
