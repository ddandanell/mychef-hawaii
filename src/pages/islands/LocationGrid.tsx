import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import StatusChip from '@/components/StatusChip';
import { useIsland } from '@/context/IslandContext';
import type { IslandId } from '@/data/islands';
import { islands } from '@/data/islands';
import { locationsFor } from '@/data/locations';
import type { ZoneClass } from '@/data/zoneMap';
import { SectionHead } from '@/pages/islands/shared';

const zoneLabel: Record<ZoneClass, string> = {
  base: 'Base zone',
  surcharge: 'Surcharge',
  'quote-only': 'Quote-only',
};

export default function LocationGrid({
  islandId,
  eyebrow = 'Where we cook',
  title,
  intro,
}: {
  islandId: IslandId;
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  const island = islands[islandId];
  const { href, islandId: ctxId } = useIsland();
  const pathFor = (slug: string) =>
    ctxId === islandId ? href(`/${slug}`) : `${island.basePath}/${slug}`;
  const rows = locationsFor(islandId);
  if (!rows.length) return null;

  return (
    <section id="locations" className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <SectionHead eyebrow={eyebrow} title={title} intro={intro} />
        <Reveal stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {rows.map((loc) => (
            <Link
              key={loc.slug}
              to={pathFor(loc.slug)}
              className="group flex flex-col overflow-hidden border border-stone bg-white transition-all duration-300 hover:shadow-[0_2px_4px_rgba(34,29,21,.06),0_20px_44px_-12px_rgba(34,29,21,.2)]"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={loc.hero}
                  alt={loc.heroAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col p-4 lg:p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-[1.375rem] font-medium leading-[1.2] text-ink">{loc.name}</h3>
                  <StatusChip kind={loc.zoneClass === 'base' ? 'policy' : loc.zoneClass === 'surcharge' ? 'published' : 'pending'}>
                    {zoneLabel[loc.zoneClass]}
                  </StatusChip>
                </div>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-soft">{loc.area}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-clay">
                  {loc.name} page
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
