import HostLink from '@/components/HostLink';
import PageMeta from '@/components/PageMeta';
import { PRODUCTION_ROOT } from '@/config/site';
import { HUB_COMMERCIAL_PATHS, ISLAND_COMMERCIAL_PATHS } from '@/data/commercialGraph';
import { islandOrder, islands } from '@/data/islands';

const HUB_LABELS: Record<string, string> = {
  '/': 'Home',
  '/private-chef': 'Personal chef / villa',
  '/catering': 'Catering',
  '/weddings': 'Weddings',
  '/about': 'About',
  '/bar': 'Bar',
  '/pricing': 'Pricing',
  '/quote': 'Quote',
  '/trust': 'Trust',
  '/legal': 'Legal',
};

const ISLAND_LABELS: Record<string, string> = {
  '/': 'Home',
  '/private-chef': 'Private chef',
  '/catering': 'Catering',
  '/weddings': 'Weddings',
  '/bar': 'Bar',
  '/pricing': 'Pricing',
  '/quote': 'Quote',
};

export default function NetworkSitemap() {
  return (
    <>
      <PageMeta
        title="Sitemap — myCHEF Hawaii"
        description="Commercial pages on mychef-hawaii.com and the four island hosts."
      />
      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto max-w-container px-5 lg:px-10">
          <p className="text-[12px] uppercase tracking-[0.18em] text-clay">{PRODUCTION_ROOT}</p>
          <h1 className="mt-4 font-display text-4xl font-medium text-ink">Commercial pages.</h1>
          <p className="mt-4 max-w-[65ch] text-ink-soft">
            Hub plus four island hosts. Starting prices, WhatsApp, written quote.
          </p>

          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            <li className="border border-stone bg-white p-5">
              <p className="text-[12px] uppercase tracking-[0.14em] text-clay">Hub</p>
              <p className="mt-2 font-display text-2xl text-ink">myCHEF Hawaii</p>
              <p className="mt-1 text-sm text-ink-soft">https://{PRODUCTION_ROOT}</p>
              <ul className="mt-4 space-y-1 text-sm">
                {HUB_COMMERCIAL_PATHS.map((path) => (
                  <li key={path}>
                    <HostLink island="root" path={path} className="text-clay hover:underline">
                      {HUB_LABELS[path] ?? path}
                    </HostLink>
                  </li>
                ))}
              </ul>
            </li>
            {islandOrder.map((id) => {
              const isl = islands[id];
              return (
                <li key={id} className="border border-stone bg-white p-5">
                  <p className="text-[12px] uppercase tracking-[0.14em] text-clay">{isl.name}</p>
                  <p className="mt-2 font-display text-2xl text-ink">{isl.name}</p>
                  <p className="mt-1 text-sm text-ink-soft">https://{id}.{PRODUCTION_ROOT}</p>
                  <ul className="mt-4 space-y-1 text-sm">
                    {ISLAND_COMMERCIAL_PATHS.map((path) => (
                      <li key={path}>
                        <HostLink island={id} path={path} className="text-clay hover:underline">
                          {ISLAND_LABELS[path] ?? path}
                        </HostLink>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
