import { notFound } from 'next/navigation';
import { LocationPlaceView } from '@/components/views/LocationPlaceView';
import { getMoneyNeighborhood, moneyNeighborhoods } from '@/data/offers';
import type { IslandId } from '@/data/islands';
import { islandMetadata } from '@/lib/pageSeo';
import { requestHostMode } from '@/lib/request';
import { ISLAND_HOSTS } from '@/lib/site';

/** Static island routes win over [place]; keep this list in lockstep with app/[island]/*. */
const RESERVED_PLACE_SLUGS = new Set([
  'about',
  'areas',
  'bar',
  'blog',
  'catering',
  'contact',
  'event',
  'events',
  'faq',
  'journal',
  'legal',
  'locations',
  'mobile-bar',
  'pricing',
  'private-chef',
  'quote',
  'sitemap',
  'thank-you',
  'vacation-chef',
  'wedding',
  'wedding-catering',
  'weddings',
]);

export const dynamicParams = false;

export function generateStaticParams() {
  return ISLAND_HOSTS.flatMap((island) =>
    moneyNeighborhoods[island]
      .filter((hood) => !RESERVED_PLACE_SLUGS.has(hood.slug))
      .map((hood) => ({ island, place: hood.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ island: string; place: string }>;
}) {
  const { island, place } = await params;
  if (!(ISLAND_HOSTS as readonly string[]).includes(island)) return {};
  return islandMetadata(island as IslandId, `/${place}`);
}

export default async function PlacePage({
  params,
}: {
  params: Promise<{ island: string; place: string }>;
}) {
  const { island, place } = await params;
  if (!(ISLAND_HOSTS as readonly string[]).includes(island)) notFound();
  const islandId = island as IslandId;
  const hood = getMoneyNeighborhood(islandId, place);
  if (!hood || RESERVED_PLACE_SLUGS.has(place)) notFound();
  const hostMode = await requestHostMode();
  return <LocationPlaceView islandId={islandId} hood={hood} hostMode={hostMode} />;
}
