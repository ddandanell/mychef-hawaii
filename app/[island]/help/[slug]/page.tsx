import { notFound } from 'next/navigation';
import { UniqueCellView } from '@/components/views/IslandDocumentView';
import { HELP_SLUGS, getHelpArticle } from '@/data/helpArticles';
import type { IslandId } from '@/data/islands';
import { islandMetadata } from '@/lib/pageSeo';
import { requestHostMode } from '@/lib/request';
import { ISLAND_HOSTS } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return ISLAND_HOSTS.flatMap((island) => HELP_SLUGS.map((slug) => ({ island, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ island: string; slug: string }>;
}) {
  const { island, slug } = await params;
  if (!(ISLAND_HOSTS as readonly string[]).includes(island)) return {};
  return islandMetadata(island as IslandId, `/help/${slug}`);
}

export default async function HelpArticlePage({
  params,
}: {
  params: Promise<{ island: string; slug: string }>;
}) {
  const { island, slug } = await params;
  if (!(ISLAND_HOSTS as readonly string[]).includes(island)) notFound();
  const islandId = island as IslandId;
  const page = getHelpArticle(islandId, slug);
  if (!page) notFound();
  const hostMode = await requestHostMode();
  return <UniqueCellView islandId={islandId} hostMode={hostMode} cell={page} />;
}
