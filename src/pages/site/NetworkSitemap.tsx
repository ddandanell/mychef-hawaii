import HostLink from '@/components/HostLink';
import PageMeta from '@/components/PageMeta';
import { originFor, PRODUCTION_ROOT } from '@/config/site';
import { islandPageCount } from '@/data/islandCatalog';
import { islandOrder, islands } from '@/data/islands';
import { articlesFor } from '@/data/editorial';
import { areasFor } from '@/data/areas';

/** Hub sitemap — the statewide directory of island departments. */
export default function NetworkSitemap() {
  const origin =
    typeof window !== 'undefined' ? originFor('root') : `https://${PRODUCTION_ROOT}`;

  return (
    <>
      <PageMeta
        title="Sitemap — myCHEF Hawaii"
        description="Statewide hub plus four island department sites on wildcard hosts."
      />
      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto max-w-container px-5 lg:px-10">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">
            {PRODUCTION_ROOT}
          </p>
          <h1 className="mt-4 font-display text-4xl font-medium text-ink">
            One hub. Four island departments.
          </h1>
          <p className="mt-4 max-w-[65ch] text-ink-soft">
            The wildcard {`*.${PRODUCTION_ROOT}`} sends each island to its own host. Neighborhoods stay
            folders on that host — never new subdomains.
          </p>

          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            <li className="rounded-[14px] border border-stone bg-white p-5 shadow-soft">
              <p className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-clay">Hub</p>
              <p className="mt-2 font-display text-2xl text-ink">myCHEF Hawaii</p>
              <p className="mt-1 text-sm text-ink-soft">{origin}</p>
              <ul className="mt-4 space-y-1 text-sm">
                {[
                  ['/', 'Home'],
                  ['/islands', 'Islands'],
                  ['/services', 'Services'],
                  ['/weddings', 'Weddings'],
                  ['/corporate', 'Gatherings'],
                  ['/how-it-works', 'How it works'],
                  ['/pricing', 'Pricing'],
                  ['/journal', 'Journal directory'],
                  ['/blog', 'Blog directory'],
                  ['/quote', 'Quote'],
                  ['/trust', 'Trust'],
                  ['/legal', 'Legal'],
                ].map(([path, label]) => (
                  <li key={path}>
                    <HostLink island="root" path={path} className="text-clay hover:underline">
                      {label}
                    </HostLink>
                  </li>
                ))}
              </ul>
            </li>
            {islandOrder.map((id) => {
              const isl = islands[id];
              const count = islandPageCount(id);
              return (
                <li key={id} className="rounded-[14px] border border-stone bg-white p-5 shadow-soft">
                  <p className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-clay">
                    {isl.state === 'live' ? 'Booking now' : 'Inquiry stage'}
                  </p>
                  <p className="mt-2 font-display text-2xl text-ink">{isl.name}</p>
                  <p className="mt-1 text-sm text-ink-soft">
                    {typeof window !== 'undefined' ? originFor(id) : `https://${id}.${PRODUCTION_ROOT}`}
                  </p>
                  <p className="mt-3 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-ink-soft">
                    {count} pages · {areasFor(id).length} areas ·{' '}
                    {articlesFor(id).filter((a) => a.kind === 'blog').length} blog ·{' '}
                    {articlesFor(id).filter((a) => a.kind === 'journal').length} journal
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3 text-sm">
                    <HostLink island={id} path="/" className="text-clay hover:underline">
                      Home
                    </HostLink>
                    <HostLink island={id} path="/private-chef" className="text-clay hover:underline">
                      Private chef
                    </HostLink>
                    <HostLink island={id} path="/journal" className="text-clay hover:underline">
                      Journal
                    </HostLink>
                    <HostLink island={id} path="/blog" className="text-clay hover:underline">
                      Blog
                    </HostLink>
                    <HostLink island={id} path="/sitemap" className="text-clay hover:underline">
                      Full sitemap
                    </HostLink>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
