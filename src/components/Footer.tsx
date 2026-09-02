import { Link } from 'react-router';
import HostLink from '@/components/HostLink';
import { useIsland } from '@/context/IslandContext';
import { islandOrder, islands } from '@/data/islands';

export default function Footer() {
  const { islandId, href } = useIsland();
  const quoteTo = islandId ? href(`/quote?island=${islandId}`) : '/quote';

  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto w-full max-w-container px-5 py-16 lg:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link to={href('/')} className="font-display text-2xl font-light tracking-tight text-ivory">
              myCHEF
            </Link>
            <p className="mt-4 max-w-xs text-[17px] leading-relaxed text-ivory/75">
              A chef in your villa. Oʻahu, Maui, Kauaʻi, Hawaiʻi Island.
            </p>
          </div>

          <nav aria-label="Islands">
            <p className="text-[12px] text-ivory/50">Islands</p>
            <ul className="mt-4 space-y-2">
              {islandOrder.map((id) => (
                <li key={id}>
                  <HostLink island={id} className="text-sm text-ivory/80 hover:text-ivory">
                    {islands[id].name}
                  </HostLink>
                </li>
              ))}
              <li>
                <HostLink island="root" className="text-sm text-ivory/80 hover:text-ivory">
                  All Hawaiʻi
                </HostLink>
              </li>
            </ul>
          </nav>

          <nav aria-label="Company">
            <p className="text-[12px] text-ivory/50">Company</p>
            <ul className="mt-4 space-y-2">
              {(islandId
                ? [
                    { label: 'Chefs', path: '/private-chef' },
                    { label: 'Catering', path: '/catering' },
                    { label: 'Weddings', path: '/weddings' },
                    { label: 'Bar', path: '/bar' },
                    { label: 'Pricing', path: '/pricing' },
                    { label: 'Quote', path: quoteTo },
                    { label: 'Legal', path: '/legal' },
                  ]
                : [
                    { label: 'Chefs', path: '/private-chef' },
                    { label: 'Catering', path: '/catering' },
                    { label: 'Weddings', path: '/weddings' },
                    { label: 'Bar', path: '/bar' },
                    { label: 'Pricing', path: '/pricing' },
                    { label: 'Quote', path: quoteTo },
                    { label: 'Trust', path: '/trust' },
                    { label: 'Legal', path: '/legal' },
                    { label: 'How it works', path: '/how-it-works' },
                  ]
              ).map((l) => (
                <li key={l.label}>
                  {islandId ? (
                    <Link
                      to={l.path.startsWith('/quote') ? l.path : href(l.path)}
                      className="text-sm text-ivory/80 hover:text-ivory"
                    >
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
          Signature dinner from $125 a guest on Oʻahu. Written quote is the confirmed total.{' '}
          <Link to={href('/legal')} className="underline underline-offset-2">
            Legal
          </Link>
          . © {new Date().getFullYear()} myCHEF Hawaii.
        </p>
      </div>
    </footer>
  );
}
