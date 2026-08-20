import { Link } from 'react-router';
import PageMeta from '@/components/PageMeta';
import { useIsland } from '@/context/IslandContext';
import { allIslandPaths, islandPageCount } from '@/data/islandCatalog';
import { islands } from '@/data/islands';
import NotFound from '@/pages/NotFound';

export default function HtmlSitemap() {
  const { islandId } = useIsland();
  if (!islandId) return <NotFound />;
  const paths = allIslandPaths(islandId);
  const island = islands[islandId];

  return (
    <>
      <PageMeta
        title={`Sitemap — myCHEF ${island.name}`}
        description={`${islandPageCount(islandId)} pages on the ${island.name} site.`}
      />
      <section className="bg-ivory py-20">
        <div className="mx-auto max-w-container px-5 lg:px-10">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">{island.name} site</p>
          <h1 className="mt-4 font-display text-4xl font-medium text-ink">
            {islandPageCount(islandId)} pages on this host.
          </h1>
          <ul className="mt-10 columns-1 gap-x-10 text-sm sm:columns-2 lg:columns-3">
            {paths.sort().map((p) => (
              <li key={p} className="mb-2 break-inside-avoid">
                <Link to={p} className="text-clay hover:underline">
                  {p}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
