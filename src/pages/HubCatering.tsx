import { DualCtaLight } from '@/components/DualCta';
import HostLink from '@/components/HostLink';
import PageMeta from '@/components/PageMeta';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import { CATERING_VOLUMES, HUB_CATERING, cateringOffers } from '@/data/catering';
import { islandOrder, islands } from '@/data/islands';
import { photos } from '@/data/photos';

/**
 * Hub /catering — primary keyword hawaii catering (210/mo).
 * Island doors carry the larger volumes (Oahu 720, Maui 480, Kauai 210).
 */
export default function HubCatering() {
  return (
    <>
      <PageMeta title={HUB_CATERING.title} description={HUB_CATERING.description} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FoodService',
            name: 'Hawaii catering — myCHEF',
            description: HUB_CATERING.description,
            areaServed: 'Hawaiʻi',
            serviceType: 'Catering',
            parentOrganization: { '@type': 'Organization', name: 'myCHEF Hawaii' },
          }),
        }}
      />
      <section className="bg-ivory pb-10 pt-16 lg:pt-24">
        <div className="mx-auto grid w-full max-w-container items-center gap-10 px-5 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-[12px] text-ink-soft">Hawaii catering · {HUB_CATERING.volume}/mo</p>
            <h1 className="mt-4 font-display text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.05] text-ink">
              {HUB_CATERING.h1}
            </h1>
            <p className="mt-5 max-w-[62ch] text-[1.125rem] leading-[1.65] text-ink-soft">{HUB_CATERING.lede}</p>
            <p className="mt-4 max-w-[62ch] text-sm text-ink-soft">
              Buffet or plated. Villa, wedding, retreat. Published starting prices. Written menu. WhatsApp for a quote.
            </p>
            <div className="mt-8">
              <DualCtaLight intent="Hawaii catering" service="catering" />
            </div>
          </div>
          <img src={photos.catering.file} alt={photos.catering.alt} className="aspect-[4/3] w-full object-cover" />
        </div>
      </section>

      <section className="bg-sand py-16 lg:py-24">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium text-ink">Choose the island</h2>
          <p className="mt-4 max-w-[65ch] text-ink-soft">
            Oahu catering is the largest door ({CATERING_VOLUMES['oahu catering']}/mo). Maui catering{' '}
            {CATERING_VOLUMES['maui catering']}. Kauai catering {CATERING_VOLUMES['kauai catering']}.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {islandOrder.map((id) => {
              const c = cateringOffers[id];
              const isl = islands[id];
              return (
                <HostLink
                  key={id}
                  island={id}
                  path="/catering"
                  className="border border-stone bg-white p-5 transition-colors hover:border-ink/40"
                >
                  <p className="font-display text-2xl font-medium text-ink">{c.h1}</p>
                  <p className="mt-2 text-ink-soft">from ${c.fromPp} per guest</p>
                  <p className="mt-2 text-sm text-ink-soft">{isl.name}</p>
                </HostLink>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 lg:py-24">
        <div className="mx-auto w-full max-w-3xl px-5 lg:px-10">
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium text-ink">Buffet or plated</h2>
          <p className="mt-4 text-[1.0625rem] leading-[1.65] text-ink-soft">
            Buffet is the volume format. Plated is the restaurant arc. Family-style sits between. The food band is the
            island CORE card — from $125 per guest on Oʻahu, $150 on Maui and Kauaʻi. Staffing is itemised. Wedding
            catering Hawaii from $125–$175 per guest plus staffing, depending on the island.
          </p>
        </div>
      </section>

      <QuoteTeaserBand headline="Hawaii catering — from $125 per guest. Quote in writing." />
    </>
  );
}
