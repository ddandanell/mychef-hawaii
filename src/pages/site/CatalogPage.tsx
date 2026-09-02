import { Link } from 'react-router';
import PageMeta from '@/components/PageMeta';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import { useIsland } from '@/context/IslandContext';
import { getCatalog } from '@/data/islandCatalog';
import { photos } from '@/data/photos';
import {
  coreDinnerFrom,
  formatDayRate,
  formatMobileBarPackage,
  formatOtherOffer,
  getOtherOffer,
} from '@/data/rateCard';
import { PrimaryCta, SectionHead } from '@/pages/islands/shared';
import NotFound from '@/pages/NotFound';
import type { IslandId } from '@/data/islands';

const heroByIsland: Record<IslandId, { file: string; alt: string }> = {
  oahu: photos.oahuDinner,
  maui: photos.mauiKitchen,
  kauai: photos.kauaiChef,
  bigisland: photos.kohalaFish,
};

export default function CatalogPage() {
  const { island, islandId, localPath } = useIsland();
  if (!island || !islandId) return <NotFound />;
  const page = getCatalog(islandId, localPath);
  if (!page) return <NotFound />;
  const hero = heroByIsland[islandId];
  const wedding = formatOtherOffer(getOtherOffer('wedding'), islandId);

  return (
    <>
      <PageMeta title={page.title} description={page.lede} />
      <section className="bg-ivory py-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-container items-start gap-10 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-10">
          <div>
            <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">
              {island.name} · private chef & catering · {page.kind}
            </p>
            <h1 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.1] text-ink">
              {page.h1}
            </h1>
            <p className="mt-6 text-[1.125rem] leading-[1.65] text-ink-soft">{page.lede}</p>
            {page.body.map((p) => (
              <p key={p.slice(0, 24)} className="mt-5 text-[1.0625rem] leading-[1.65] text-ink-soft">
                {p}
              </p>
            ))}
            <div className="mt-8 rounded-[14px] border border-stone bg-white p-5">
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-ink-soft">
                Published starting prices — {island.name}
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink">
                <li>Signature dinner {coreDinnerFrom(islandId)}</li>
                <li>Villa chef day rate {formatDayRate(islandId)}</li>
                <li>Wedding catering {wedding}</li>
                <li>Mobile bar {formatMobileBarPackage(islandId)}</li>
              </ul>
            </div>
            <div className="mt-10">
              <PrimaryCta island={island} />
            </div>
          </div>
          <figure className="overflow-hidden rounded-[14px] shadow-soft">
            <img src={hero.file} alt={hero.alt} className="aspect-[4/5] w-full object-cover" />
            <figcaption className="mt-3 font-mono text-[0.625rem] uppercase tracking-[0.1em] text-ink-soft">
              Campaign still — not a documented myCHEF Hawaiʻi event.
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="bg-sand py-16">
        <div className="mx-auto max-w-container px-5 lg:px-10">
          <SectionHead eyebrow={island.name} title="Also on this island site." />
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { to: '/private-chef', label: 'Private chef' },
              { to: '/vacation-chef', label: 'Vacation chef' },
              { to: '/wedding-catering', label: 'Weddings' },
              { to: '/bar', label: 'Mobile bar' },
              { to: '/pricing', label: 'Pricing' },
              { to: '/locations', label: 'Areas' },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-full border border-stone bg-white px-4 py-2 text-sm transition-colors hover:border-clay/40"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <QuoteTeaserBand />
    </>
  );
}

/** Catch-all: catalog cell or a real 404. */
export function CatalogOrNotFound() {
  const { islandId, localPath } = useIsland();
  if (!islandId || !getCatalog(islandId, localPath)) return <NotFound />;
  return <CatalogPage />;
}
