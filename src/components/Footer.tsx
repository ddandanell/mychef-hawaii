import { Link } from 'react-router';
import HostLink from '@/components/HostLink';
import { DualCta } from '@/components/DualCta';
import { useIsland } from '@/context/IslandContext';
import { islandOrder } from '@/data/islands';
import { islandOffers } from '@/data/offers';
import { cateringOffers } from '@/data/catering';

export default function Footer() {
  const { islandId, href } = useIsland();
  const quoteTo = islandId ? href(`/quote?island=${islandId}`) : '/quote';

  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto w-full max-w-container px-5 py-16 lg:px-10">
        <div className={`grid gap-10 ${islandId ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
          <div>
            <Link to={href('/')} className="font-display text-2xl font-medium tracking-tight text-ivory">
              myCHEF
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory/70">
              Private chef and catering in your villa. Oʻahu, Maui, Kauaʻi, Hawaiʻi Island.
            </p>
            <div className="mt-5">
              <DualCta island={islandId ?? undefined} />
            </div>
          </div>

          <nav aria-label="Islands">
            <h3 className="text-[12px] text-ivory/50">Islands</h3>
            <ul className="mt-4 space-y-2.5">
              {islandOrder.map((id) => {
                const o = islandOffers[id];
                const c = cateringOffers[id];
                return (
                  <li key={id}>
                    <HostLink island={id} className="text-sm text-ivory/80 hover:text-ivory">
                      {o.h1} · {c.h1}
                    </HostLink>
                  </li>
                );
              })}
              <li>
                <HostLink island="root" className="text-sm text-ivory/80 hover:text-ivory">
                  All Hawaiʻi
                </HostLink>
              </li>
            </ul>
          </nav>

          <nav aria-label="Company">
            <h3 className="text-[12px] text-ivory/50">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: 'Chefs', path: '/private-chef' },
                { label: 'Catering', path: '/catering' },
                { label: 'Weddings', path: '/weddings' },
                { label: 'Bar', path: '/bar' },
                { label: 'Pricing', path: '/pricing' },
                { label: 'Quote', path: quoteTo },
                { label: 'Legal', path: '/legal' },
              ].map((l) => (
                <li key={l.path}>
                  {l.path.startsWith('/quote') && islandId ? (
                    <Link to={l.path} className="text-sm text-ivory/80 hover:text-ivory">
                      {l.label}
                    </Link>
                  ) : (
                    <HostLink island="root" path={l.path} className="text-sm text-ivory/80 hover:text-ivory">
                      {l.label}
                    </HostLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-[12px] leading-relaxed text-ivory/50">
          Starting prices published. Written quote is the confirmed total.{' '}
          <Link to={href('/legal')} className="underline underline-offset-2">
            Legal
          </Link>
          . © {new Date().getFullYear()} myCHEF Hawaii. Bali and Dubai:{' '}
          <a href="https://mychef-bali.com" className="underline underline-offset-2">
            Bali
          </a>
          {' · '}
          <a href="https://mychef-dubai.com" className="underline underline-offset-2">
            Dubai
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
