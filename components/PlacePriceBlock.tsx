import { islands, type IslandId } from '@/data/islands';
import {
  FEE_DISCLOSURE,
  formatBand,
  formatFrom,
  getDayRate,
  getMobileBar,
  getOtherOffer,
  getTiers,
} from '@/data/rateCard';

/** Paper rate-card strip for money corridors and AREA_CELLS dinner doors. Labels stay off money keywords. */
export default function PlacePriceBlock({
  islandId,
  placeName,
  href,
}: {
  islandId: IslandId;
  placeName: string;
  href: (path: string) => string;
}) {
  const island = islands[islandId];
  const core = getTiers(islandId).find((t) => t.tier === 'CORE');
  const day = getDayRate(islandId);
  const bar = getMobileBar(islandId);
  const wedding = getOtherOffer('wedding').byIsland[islandId];
  const cards = [
    { label: 'Villa dinner', value: core ? formatBand(core) : '', unit: 'per guest' },
    { label: 'Stay Chef', value: formatFrom(day.from), unit: 'per day' },
    { label: 'Wedding week', value: formatFrom(wedding.from), unit: 'per guest + staffing' },
    { label: 'Packaged cart', value: formatFrom(bar.packageFrom), unit: `per ${bar.packageHours}-hr package` },
  ];
  return (
    <section className="border-t border-line bg-sand py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <p className="text-[12px] uppercase tracking-[0.18em] text-mute">Published prices · {placeName}</p>
        <h2 className="mt-4 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-light leading-[1.1] text-ink">
          What a night in {placeName} starts at.
        </h2>
        <p className="mt-4 max-w-[62ch] text-[17px] leading-relaxed text-mute">{FEE_DISCLOSURE}</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <article key={c.label} className={`border ${i === 0 ? 'border-ink' : 'border-line'} bg-paper p-6`}>
              <p className="text-[12px] text-mute">{c.label}</p>
              <p className="mt-3 font-display text-[2rem] font-light leading-tight tracking-tight text-ink">{c.value}</p>
              <p className="mt-2 text-sm text-mute">{c.unit}</p>
            </article>
          ))}
        </div>
        <a
          href={href('/pricing')}
          className="mt-8 inline-block text-sm font-medium text-ink underline decoration-brass underline-offset-[6px]"
        >
          The full {island.name} rate card, line by line
        </a>
      </div>
    </section>
  );
}
