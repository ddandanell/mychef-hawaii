import { notFound } from 'next/navigation';
import { UniqueCellView } from '@/components/views/IslandDocumentView';
import { MENU_SKU_SLUGS, getMenuSkuPage } from '@/data/menuSkus';
import type { IslandId } from '@/data/islands';
import { islandMetadata } from '@/lib/pageSeo';
import { requestHostMode } from '@/lib/request';
import { ISLAND_HOSTS } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return ISLAND_HOSTS.flatMap((island) => MENU_SKU_SLUGS.map((sku) => ({ island, sku })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ island: string; sku: string }>;
}) {
  const { island, sku } = await params;
  if (!(ISLAND_HOSTS as readonly string[]).includes(island)) return {};
  return islandMetadata(island as IslandId, `/menus/${sku}`);
}

export default async function MenuSkuPage({
  params,
}: {
  params: Promise<{ island: string; sku: string }>;
}) {
  const { island, sku } = await params;
  if (!(ISLAND_HOSTS as readonly string[]).includes(island)) notFound();
  const islandId = island as IslandId;
  const page = getMenuSkuPage(islandId, sku);
  if (!page) notFound();
  const hostMode = await requestHostMode();
  return <UniqueCellView islandId={islandId} hostMode={hostMode} cell={page} />;
}
