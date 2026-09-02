import Reveal from '@/components/Reveal';
import StatusChip from '@/components/StatusChip';
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

/**
 * Place names only — neighborhood URLs are deferred (301 to the island home).
 * Do not link /wailea, /honolulu, /kona, or any other doorway slug.
 */
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
  const rows = locationsFor(islandId);
  if (!rows.length) return null;

  return (
    <section id="locations" className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <SectionHead eyebrow={eyebrow} title={title} intro={intro} />
        <Reveal stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {rows.map((loc) => (
            <article key={loc.slug} className="flex flex-col overflow-hidden border border-stone bg-white">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={loc.hero} alt={loc.heroAlt} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-4 lg:p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-[1.375rem] font-medium leading-[1.2] text-ink">{loc.name}</h3>
                  <StatusChip kind={loc.zoneClass === 'base' ? 'policy' : loc.zoneClass === 'surcharge' ? 'published' : 'pending'}>
                    {zoneLabel[loc.zoneClass]}
                  </StatusChip>
                </div>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-soft">{loc.area}</p>
                <p className="mt-4 text-sm text-ink-soft">Covered on the {island.name} home — not its own URL.</p>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
