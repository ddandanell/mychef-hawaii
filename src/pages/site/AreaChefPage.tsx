import { Link, useParams } from 'react-router';
import PageMeta from '@/components/PageMeta';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import { useIsland } from '@/context/IslandContext';
import { getArea } from '@/data/areas';
import { getLocation } from '@/data/locations';
import { HeroEyebrow, HeroFrame, HeroH1, PrimaryCta, SectionHead } from '@/pages/islands/shared';
import LocationPage from '@/pages/locations/LocationPage';
import NotFound from '@/pages/NotFound';

/** mychef.id-style /private-chef/{area} cell. Uses full location doc when one exists. */
export default function AreaChefPage() {
  const { slug } = useParams();
  const { island, islandId } = useIsland();
  if (!island || !islandId || !slug) return <NotFound />;
  const loc = getLocation(islandId, slug);
  if (loc) return <LocationPage />;

  const area = getArea(islandId, slug);
  if (!area) return <NotFound />;

  return (
    <>
      <PageMeta
        title={`Private chef ${area.name} — myCHEF ${island.name}`}
        description={area.blurb}
      />
      <HeroFrame island={island}>
        <HeroEyebrow island={island} />
        <p className="mt-3 font-mono text-[0.75rem] uppercase tracking-[0.18em] text-ivory/70">
          Private chef · {area.name}
        </p>
        <HeroH1 text={`A chef in ${area.name}.`} />
        <p className="mt-6 max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ivory/90">{area.blurb}</p>
        <div className="mt-8">
          <PrimaryCta island={island} />
        </div>
      </HeroFrame>
      <section className="bg-ivory py-20">
        <div className="mx-auto grid max-w-container gap-12 px-5 lg:grid-cols-2 lg:px-10">
          <div>
            <SectionHead eyebrow={area.name} title="Fit." />
            <p className="mt-6 text-[1.0625rem] leading-[1.65] text-ink-soft">{area.fit}</p>
          </div>
          <div>
            <SectionHead eyebrow="Logistics" title="Published, not discovered." />
            <p className="mt-6 text-[1.0625rem] leading-[1.65] text-ink-soft">{area.logistics}</p>
            <Link to="/locations" className="mt-6 inline-block text-sm font-medium text-clay">
              All {island.name} areas
            </Link>
          </div>
        </div>
      </section>
      <QuoteTeaserBand />
    </>
  );
}
