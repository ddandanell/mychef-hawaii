import { Link } from 'react-router';
import Contours from '@/components/Contours';
import HostLink from '@/components/HostLink';
import StatusChip from '@/components/StatusChip';
import { PRODUCTION_ROOT } from '@/config/site';
import { useIsland } from '@/context/IslandContext';
import { islandOrder, islands } from '@/data/islands';

/**
 * Footer (design.md §8.9) — ink background, contour motif band on top edge.
 * No fabricated license numbers, addresses, or phone numbers.
 */
export default function Footer() {
  const { state, islandId, href, island } = useIsland();
  const inquiry = state === 'inquiry';
  const quoteTo = islandId ? href(`/quote?island=${islandId}`) : '/quote';
  const quoteLabel = inquiry ? 'Join the Inquiry List' : 'Request a Quote';

  return (
    <footer className="grain-dark relative bg-ink text-ivory">
      <div className="relative h-24 overflow-hidden" aria-hidden="true">
        <Contours stroke="#9C7A33" strokeWidth={1} className="absolute -top-10 left-1/2 h-64 w-[900px] -translate-x-1/2 opacity-25" />
      </div>
      <div className="mx-auto w-full max-w-container px-5 pb-10 lg:px-10">
        <div className={`grid gap-10 border-t border-white/10 pt-12 ${islandId ? 'md:grid-cols-4' : 'md:grid-cols-3'}`}>
          <div>
            <span className="font-display text-2xl font-semibold tracking-tight text-ivory">
              my<span className="text-clay">CHEF</span>
              <span aria-hidden="true" className="ml-0.5 inline-block h-2 w-2 rounded-full bg-clay align-super" />
            </span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory/70">
              Private chefs, private dining, catering and events — quiet luxury, honestly labeled.
            </p>
            <p className="mt-5 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ivory/50">
              Part of the myCHEF family
            </p>
            <ul className="mt-2 space-y-1.5">
              {['Bali', 'Dubai', 'Cape Town'].map((geo) => (
                <li key={geo} className="flex items-center gap-2 text-sm text-ivory/70">
                  {geo} <StatusChip kind="verified">Verified — International</StatusChip>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Islands">
            <h3 className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-brass">Islands</h3>
            <ul className="mt-4 space-y-2.5">
              {islandOrder.map((id) => {
                const isl = islands[id];
                return (
                  <li key={id}>
                    <HostLink
                      island={id}
                      className="inline-flex items-center gap-2 text-sm text-ivory/80 transition-colors hover:text-ivory"
                    >
                      <span
                        aria-hidden="true"
                        className={isl.state === 'live' ? 'h-1.5 w-1.5 rounded-full bg-moss' : 'h-1.5 w-1.5 rounded-full bg-brass'}
                      />
                      {isl.name}
                      <span className="font-mono text-[0.625rem] uppercase tracking-[0.08em] text-ivory/40">
                        {id}.{PRODUCTION_ROOT}
                      </span>
                    </HostLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h3 className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-brass">Hawaii hub</h3>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: 'Services', path: '/services' },
                { label: 'Weddings', path: '/weddings' },
                { label: 'Gatherings', path: '/corporate' },
                { label: 'How it works', path: '/how-it-works' },
                { label: 'Pricing', path: '/pricing' },
                { label: 'Journal', path: '/journal' },
                { label: 'Trust', path: '/trust' },
                { label: 'Legal', path: '/legal' },
              ].map((l) => (
                <li key={l.path}>
                  <HostLink island="root" path={l.path} className="text-sm text-ivory/80 transition-colors hover:text-ivory">
                    {l.label}
                  </HostLink>
                </li>
              ))}
              <li>
                <Link to={quoteTo} className="text-sm text-ivory/80 transition-colors hover:text-ivory">
                  {quoteLabel}
                </Link>
              </li>
            </ul>
          </nav>
          {islandId && island ? (
            <nav aria-label={`${island.name} department`}>
              <h3 className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-brass">This island</h3>
              <ul className="mt-4 space-y-2.5">
                {[
                  { label: 'Private chef', path: '/private-chef' },
                  { label: 'Vacation chef', path: '/vacation-chef' },
                  { label: 'Areas', path: '/locations' },
                  { label: 'Journal', path: '/journal' },
                  { label: 'Blog', path: '/blog' },
                  { label: 'Sitemap', path: '/sitemap' },
                ].map((l) => (
                  <li key={l.path}>
                    <Link to={href(l.path)} className="text-sm text-ivory/80 transition-colors hover:text-ivory">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>

        <div className="mt-12 space-y-2 border-t border-white/10 pt-6 font-mono text-[0.6875rem] uppercase leading-5 tracking-[0.1em] text-ivory/50">
          <p>Hawaii is launching — reviews publish only after verified events.</p>
          <p>All times Hawaii Standard Time (HST).</p>
          <p>
            Pricing shown is indicative planning orientation; terms subject to professional review. See{' '}
            <Link to="/legal" className="text-brass underline-offset-2 hover:underline">
              /legal
            </Link>
            .
          </p>
          <p>
            Photography on this preview is labeled concept imagery — not photographs of myCHEF Hawaiʻi events.
            Final owned photography ships at launch.
          </p>
          <p className="pt-2 text-ivory/40">© {new Date().getFullYear()} myCHEF Hawaii</p>
        </div>
      </div>
    </footer>
  );
}
