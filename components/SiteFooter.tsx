import HostLink from '@/components/HostLink';
import Link from 'next/link';
import { islandOrder, islands, type IslandId } from '@/data/islands';
import { quotePath } from '@/lib/paths';
import { islandHref } from '@/lib/paths';

export default function SiteFooter({
  islandId,
  hostMode,
}: {
  islandId: IslandId | null;
  hostMode: boolean;
}) {
  const href = (path: string) => islandHref(islandId, hostMode, path);
  const quoteTo = quotePath(islandId ?? undefined);
  const year = new Date().getFullYear();

  const company = islandId
    ? [
        { label: 'Chefs', path: '/private-chef' },
        { label: 'Catering', path: '/catering' },
        { label: 'Weddings', path: '/weddings' },
        { label: 'Bar', path: '/bar' },
        { label: 'Pricing', path: '/pricing' },
        { label: 'About', path: '/about', hub: true },
        { label: 'Quote', path: quoteTo },
        { label: 'Legal', path: '/legal' },
      ]
    : [
        { label: 'Chefs', path: '/private-chef' },
        { label: 'Catering', path: '/catering' },
        { label: 'Weddings', path: '/weddings' },
        { label: 'Bar', path: '/bar' },
        { label: 'Pricing', path: '/pricing' },
        { label: 'About', path: '/about' },
        { label: 'Quote', path: quoteTo },
        { label: 'Trust', path: '/trust' },
        { label: 'Legal', path: '/legal' },
        { label: 'How it works', path: '/how-it-works' },
      ];

  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto w-full max-w-container px-5 py-16 lg:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href={href('/')} className="font-display text-2xl font-light tracking-tight text-paper">
              myCHEF
            </Link>
            <p className="mt-4 max-w-xs text-[17px] leading-relaxed text-paper/75">
              A chef in your villa. Oʻahu, Maui, Kauaʻi, Hawaiʻi Island.
            </p>
          </div>

          <nav aria-label="Islands">
            <p className="text-[12px] text-paper/50">Islands</p>
            <ul className="mt-4 space-y-2">
              {islandOrder.map((id) => (
                <li key={id}>
                  <HostLink island={id} className="text-sm text-paper/80 hover:text-paper">
                    {islands[id].name}
                  </HostLink>
                </li>
              ))}
              <li>
                <HostLink island="root" className="text-sm text-paper/80 hover:text-paper">
                  All Hawaiʻi
                </HostLink>
              </li>
            </ul>
          </nav>

          <nav aria-label="Company">
            <p className="text-[12px] text-paper/50">Company</p>
            <ul className="mt-4 space-y-2">
              {company.map((l) => (
                <li key={l.label}>
                  {'hub' in l && l.hub ? (
                    <HostLink island="root" path={l.path} className="text-sm text-paper/80 hover:text-paper">
                      {l.label}
                    </HostLink>
                  ) : islandId && l.path !== '/about' ? (
                    <Link href={href(l.path)} className="text-sm text-paper/80 hover:text-paper">
                      {l.label}
                    </Link>
                  ) : (
                    <HostLink island="root" path={l.path} className="text-sm text-paper/80 hover:text-paper">
                      {l.label}
                    </HostLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-[12px] leading-relaxed text-paper/50">
          Signature dinner from $125 a guest on Oʻahu. Written quote is the confirmed total.{' '}
          <Link href={href('/legal')} className="underline underline-offset-2">
            Legal
          </Link>
          . © {year} myCHEF Hawaii.
        </p>
      </div>
    </footer>
  );
}
