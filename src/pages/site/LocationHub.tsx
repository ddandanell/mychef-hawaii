import LocationGrid from '@/pages/islands/LocationGrid';
import PageMeta from '@/components/PageMeta';
import { useIsland } from '@/context/IslandContext';
import { areasFor } from '@/data/areas';
import { Link } from 'react-router';
import NotFound from '@/pages/NotFound';

export default function LocationHub() {
  const { island, islandId } = useIsland();
  if (!island || !islandId) return <NotFound />;
  const extras = areasFor(islandId);

  return (
    <>
      <PageMeta
        title={`Service areas — myCHEF ${island.name}`}
        description={`Coverage on ${island.name}: published zones, not statewide fiction.`}
      />
      <LocationGrid
        islandId={islandId}
        title={`${island.name} areas, named.`}
        intro="Each cell has its own logistics. Neighborhoods are folders on this host, never new subdomains."
      />
      <section className="bg-sand py-16">
        <div className="mx-auto max-w-container px-5 lg:px-10">
          <h2 className="font-display text-2xl font-medium text-ink">All published cells</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {extras.map((a) => (
              <li key={a.slug}>
                <Link
                  to={`/locations/${a.slug}`}
                  className="inline-flex rounded-full border border-stone bg-white px-4 py-2 text-sm text-ink hover:border-clay/40"
                >
                  {a.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
