import { Link } from 'react-router';
import PageMeta from '@/components/PageMeta';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import { useIsland } from '@/context/IslandContext';
import { getCatalog } from '@/data/islandCatalog';
import { PrimaryCta, SectionHead } from '@/pages/islands/shared';
import NotFound from '@/pages/NotFound';

export default function CatalogPage() {
  const { island, islandId, localPath } = useIsland();
  if (!island || !islandId) return <NotFound />;
  const page = getCatalog(islandId, localPath);
  if (!page) return <NotFound />;

  return (
    <>
      <PageMeta title={page.title} description={page.lede} />
      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[800px] px-5 lg:px-10">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">
            {island.name} · {page.kind}
          </p>
          <h1 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.1] text-ink">{page.h1}</h1>
          <p className="mt-6 text-[1.125rem] leading-[1.65] text-ink-soft">{page.lede}</p>
          {page.body.map((p) => (
            <p key={p.slice(0, 24)} className="mt-5 text-[1.0625rem] leading-[1.65] text-ink-soft">
              {p}
            </p>
          ))}
          <div className="mt-10">
            <PrimaryCta island={island} />
          </div>
        </div>
      </section>
      <section className="bg-sand py-16">
        <div className="mx-auto max-w-container px-5 lg:px-10">
          <SectionHead eyebrow={island.name} title="Also on this island site." />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/private-chef" className="rounded-full border border-stone bg-white px-4 py-2 text-sm">
              Private chef
            </Link>
            <Link to="/locations" className="rounded-full border border-stone bg-white px-4 py-2 text-sm">
              Areas
            </Link>
            <Link to="/journal" className="rounded-full border border-stone bg-white px-4 py-2 text-sm">
              Journal
            </Link>
            <Link to="/blog" className="rounded-full border border-stone bg-white px-4 py-2 text-sm">
              Blog
            </Link>
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
