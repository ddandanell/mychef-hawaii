import HostLink from '@/components/HostLink';
import { EnquireCta } from '@/components/Cta';
import { LocationsBlock } from '@/components/LocationsBlock';
import { islandOrder, islands, type IslandId } from '@/data/islands';
import { islandHref } from '@/lib/paths';

export default function SiteFooter({
  islandId,
  hostMode,
}: {
  islandId: IslandId | null;
  hostMode: boolean;
}) {
  const href = (path: string) => islandHref(islandId, hostMode, path);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <LocationsBlock tone="ink" />

      <div className="mx-auto w-full max-w-container border-t border-white/10 px-5 py-14 lg:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <HostLink island="root" className="font-display text-2xl font-light tracking-tight text-paper">
              myCHEF
            </HostLink>
            <p className="mt-4 max-w-xs text-[17px] leading-relaxed text-paper/75">
              A chef in your villa. Oʻahu, Maui, Kauaʻi, Hawaiʻi Island.
            </p>
            <div className="mt-6">
              <EnquireCta island={islandId} inverse />
            </div>
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
              <li>
                <HostLink island="root" path="/about" className="text-sm text-paper/80 hover:text-paper">
                  About
                </HostLink>
              </li>
              <li>
                <HostLink island="root" path="/pricing" className="text-sm text-paper/80 hover:text-paper">
                  Pricing
                </HostLink>
              </li>
              <li>
                <HostLink island="root" path="/legal" className="text-sm text-paper/80 hover:text-paper">
                  Legal
                </HostLink>
              </li>
            </ul>
          </nav>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-[12px] leading-relaxed text-paper/50">
          Published prices. Written quote. 20% service and Hawaiʻi GET are their own lines. Oʻahu Signature $125–$190 a
          guest. Maui $150–$250.{' '}
          <a href={href('/legal')} className="underline underline-offset-2">
            Legal
          </a>
          . © {year} myCHEF Hawaii.
        </p>
      </div>
    </footer>
  );
}
