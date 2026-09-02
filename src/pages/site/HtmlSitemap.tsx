import { Link } from 'react-router';
import PageMeta from '@/components/PageMeta';
import { useIsland } from '@/context/IslandContext';
import { ISLAND_COMMERCIAL_PATHS } from '@/data/commercialGraph';
import { islands } from '@/data/islands';
import NotFound from '@/pages/NotFound';

const LABELS: Record<(typeof ISLAND_COMMERCIAL_PATHS)[number], string> = {
  '/': 'Home',
  '/private-chef': 'Private chef',
  '/catering': 'Catering',
  '/weddings': 'Weddings',
  '/bar': 'Bar',
  '/pricing': 'Pricing',
  '/quote': 'Quote',
};

export default function HtmlSitemap() {
  const { islandId } = useIsland();
  if (!islandId) return <NotFound />;
  const island = islands[islandId];

  return (
    <>
      <PageMeta
        title={`Sitemap — myCHEF ${island.name}`}
        description={`Commercial pages on the ${island.name} site.`}
      />
      <section className="bg-ivory py-20">
        <div className="mx-auto max-w-container px-5 lg:px-10">
          <p className="text-[12px] uppercase tracking-[0.18em] text-clay">{island.name}</p>
          <h1 className="mt-4 font-display text-4xl font-medium text-ink">Pages on this host.</h1>
          <ul className="mt-10 space-y-2 text-sm">
            {ISLAND_COMMERCIAL_PATHS.map((p) => (
              <li key={p}>
                <Link to={p} className="text-clay hover:underline">
                  {LABELS[p]} — {p}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
