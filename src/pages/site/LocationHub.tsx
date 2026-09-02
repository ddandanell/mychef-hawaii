import { Link } from 'react-router';
import PageMeta from '@/components/PageMeta';
import { useIsland } from '@/context/IslandContext';
import { ISLAND_COMMERCIAL_PATHS } from '@/data/commercialGraph';
import NotFound from '@/pages/NotFound';

const LABELS: Record<string, string> = {
  '/': 'Home',
  '/private-chef': 'Private chef',
  '/catering': 'Catering',
  '/weddings': 'Weddings',
  '/bar': 'Bar',
  '/pricing': 'Pricing',
  '/quote': 'Quote',
};

/** Island /locations — commercial doors only. Not a 12-area directory. */
export default function LocationHub() {
  const { island, islandId, href } = useIsland();
  if (!island || !islandId) return <NotFound />;

  return (
    <>
      <PageMeta
        title={`Where we cook — myCHEF ${island.name}`}
        description={`Villa kitchens on ${island.name}. Private chef, catering, weddings, bar, pricing.`}
      />
      <section className="bg-ivory py-20">
        <div className="mx-auto max-w-container px-5 lg:px-10">
          <p className="text-[12px] uppercase tracking-[0.18em] text-clay">{island.name}</p>
          <h1 className="mt-4 font-display text-4xl font-medium text-ink">Where we cook.</h1>
          <p className="mt-4 max-w-[65ch] text-ink-soft">
            Villa, Airbnb and vacation-rental kitchens with a real cooktop. Hotel rooms without kitchens are
            declined.
          </p>
          <ul className="mt-10 space-y-2 text-sm">
            {ISLAND_COMMERCIAL_PATHS.map((p) => (
              <li key={p}>
                <Link to={href(p)} className="text-clay hover:underline">
                  {LABELS[p] ?? p}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
