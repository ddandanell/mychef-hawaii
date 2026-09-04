import { notFound } from 'next/navigation';
import { UniqueCellView } from '@/components/views/IslandDocumentView';
import { LocationPlaceView } from '@/components/views/LocationPlaceView';
import { getMoneyNeighborhood, moneyNeighborhoods } from '@/data/offers';
import { getUniqueCell, uniqueCells } from '@/data/uniqueCells';
import { getIslandService, islandServices } from '@/data/islandServices';
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
  'coverage',
  'event',
  'events',
  'faq',
  'fine-dining',
  'help',
  'how-it-works',
  'journal',
  'legal',
  'locations',
  'menus',
  'mobile-bar',
  'pricing',
  'private-chef',
  'quote',
  'sitemap',
  'sitemap.xml',
  'staffing',
  'thank-you',
  'vacation-chef',
  'wedding',
  'wedding-catering',
  'weddings',
]);

export const dynamicParams = false;

export function generateStaticParams() {
  return ISLAND_HOSTS.flatMap((island) => {
    const hoods = moneyNeighborhoods[island]
      .filter((hood) => !RESERVED_PLACE_SLUGS.has(hood.slug))
      .map((hood) => ({ island, place: hood.slug }));
    const cells = uniqueCells[island]
      .filter((cell) => !RESERVED_PLACE_SLUGS.has(cell.slug))
      .map((cell) => ({ island, place: cell.slug }));
    const services = islandServices[island]
      .filter((cell) => !RESERVED_PLACE_SLUGS.has(cell.slug))
      .map((cell) => ({ island, place: cell.slug }));
    return [...hoods, ...cells, ...services];
  });
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
  if (RESERVED_PLACE_SLUGS.has(place)) notFound();
  const hood = getMoneyNeighborhood(islandId, place);
  const cell = getUniqueCell(islandId, place);
  const service = getIslandService(islandId, place);
  if (!hood && !cell && !service) notFound();
  const hostMode = await requestHostMode();
  if (hood) return <LocationPlaceView islandId={islandId} hood={hood} hostMode={hostMode} />;
  if (cell) return <UniqueCellView islandId={islandId} cell={cell} hostMode={hostMode} />;
  if (service) return <UniqueCellView islandId={islandId} cell={service} hostMode={hostMode} />;
  notFound();
}
