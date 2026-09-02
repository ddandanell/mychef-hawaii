import { Link } from 'react-router';
import Contours from '@/components/Contours';
import HostLink from '@/components/HostLink';
import { DualCta } from '@/components/DualCta';
import { PRODUCTION_ROOT } from '@/config/site';
import { useIsland } from '@/context/IslandContext';
import { islandOrder } from '@/data/islands';
import { islandOffers } from '@/data/offers';

export default function Footer() {
  const { islandId, href, island } = useIsland();
  const quoteTo = islandId ? href(`/quote?island=${islandId}`) : '/quote';

  return (
    <footer className="grain-dark relative bg-ink text-ivory">
      <div className="relative h-24 overflow-hidden" aria-hidden="true">
        <Contours stroke="#9C7A33" strokeWidth={1} className="absolute -top-10 left-1/2 h-64 w-[900px] -translate-x-1/2 opacity-25" />
      </div>
      <div className="mx-auto w-full max-w-container px-5 pb-10 lg:px-10">
        <div className={`grid gap-10 border-t border-white/10 pt-12 ${islandId ? 'md:grid-cols-4' : 'md:grid-cols-3'}`}>
          <div>
            <Link to={href('/')} className="font-display text-2xl font-semibold tracking-tight text-ivory">
              my<span className="text-clay">CHEF</span>
              <span aria-hidden="true" className="ml-0.5 inline-block h-2 w-2 rounded-full bg-clay align-super" />
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory/70">
              Private chefs in your villa. Oʻahu, Maui, Kauaʻi, Hawaiʻi Island. Same company as Bali and Dubai.
            </p>
            <div className="mt-5">
              <DualCta island={islandId ?? undefined} />
            </div>
          </div>

          <nav aria-label="Islands">
            <h3 className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-brass">Islands</h3>
            <ul className="mt-4 space-y-2.5">
              {islandOrder.map((id) => {
                const o = islandOffers[id];
                return (
                  <li key={id}>
                    <HostLink
                      island={id}
                      className="inline-flex flex-col text-sm text-ivory/80 transition-colors hover:text-ivory"
                    >
                      <span>
                        {o.h1} — from ${o.fromPp}/pp
                      </span>
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
                { label: 'Chefs', path: '/private-chef' },
                { label: 'Catering', path: '/catering' },
                { label: 'Weddings', path: '/weddings' },
                { label: 'Bar', path: '/bar' },
                { label: 'Pricing', path: '/pricing' },
                { label: 'How it works', path: '/how-it-works' },
                { label: 'Quote', path: '/quote' },
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
                  Get a quote
                </Link>
              </li>
            </ul>
          </nav>
          {islandId && island ? (
            <nav aria-label={`${island.name} department`}>
              <h3 className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-brass">This island</h3>
              <ul className="mt-4 space-y-2.5">
                {[
                  { label: 'Chefs', path: '/private-chef' },
                  { label: 'Catering', path: '/catering' },
                  { label: 'Bar', path: '/bar' },
                  { label: 'Weddings', path: '/weddings' },
                  { label: 'Pricing', path: '/pricing' },
                  { label: 'Quote', path: '/quote' },
                  { label: 'Sitemap', path: '/sitemap' },
                ].map((l) => (
                  <li key={l.path}>
                    <Link to={href(l.path)} className="text-sm text-ivory/80 transition-colors hover:text-ivory">
                      {l.label}
                    </Link>
                  </li>
                ))}
                {islandOffers[islandId].neighborhoods.map((n) => (
                  <li key={n.slug}>
                    <Link to={href(`/${n.slug}`)} className="text-sm text-ivory/80 transition-colors hover:text-ivory">
                      {n.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>

        <div className="mt-12 space-y-2 border-t border-white/10 pt-6 font-mono text-[0.6875rem] uppercase leading-5 tracking-[0.1em] text-ivory/50">
          <p>Starting prices published. Written quote is the confirmed total.</p>
          <p>20% service + Hawaiʻi GET up to 4.712% — once, on the quote. 50% deposit locks the date.</p>
          <p>All times Hawaii Standard Time (HST). Typical WhatsApp reply in business hours.</p>
          <p className="pt-2 text-ivory/40">© {new Date().getFullYear()} myCHEF Hawaii</p>
        </div>
      </div>
    </footer>
  );
}
