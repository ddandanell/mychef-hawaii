import { Link } from 'react-router';
import { DualCtaLight } from '@/components/DualCta';
import HostLink from '@/components/HostLink';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import { islandOrder, islands } from '@/data/islands';
import { islandOffers } from '@/data/offers';
import { photos } from '@/data/photos';

/**
 * Hub commercial doors — statewide intent, then send the guest to an island.
 */
export default function HubOfferPage({
  kind,
}: {
  kind: 'private-chef' | 'catering' | 'vacation-chef';
}) {
  const copy = {
    'private-chef': {
      h1: 'Private chef Hawaii',
      lede:
        'A chef in your villa kitchen — Oʻahu from $125/pp, Maui and Kauaʻi from $150/pp, Big Island from $125/pp. We shop, cook, serve and clean. Same company as Bali and Dubai.',
      intent: 'a private chef',
      service: 'private-chef' as const,
      path: '/private-chef',
      img: photos.chefTeam,
    },
    catering: {
      h1: 'Private catering in Hawaii',
      lede:
        'Staffed events for about 10–75 guests — grazing, pūpū, buffet, coursed, live stations. Kauai catering searches at 210/mo — equal to private chef Kauai — and is a real money page: menu, prices, wedding. Published starting prices on every island.',
      intent: 'catering',
      service: 'catering-events' as const,
      path: '/catering',
      img: photos.catering,
    },
    'vacation-chef': {
      h1: 'Vacation chef — a chef for the villa week',
      lede:
        'Stay Chef day rates from $850 Oʻahu / $1,050 Maui / $1,100 Kauaʻi / $950 Hawaiʻi Island. Groceries at cost. Breakfast through dinner, one team.',
      intent: 'a vacation chef for the week',
      service: 'vacation-chef' as const,
      path: '/vacation-chef',
      img: photos.vacation,
    },
  }[kind];

  return (
    <>
      <section className="bg-ivory pb-10 pt-16 lg:pt-24">
        <div className="mx-auto grid w-full max-w-container items-center gap-10 px-5 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">myCHEF Hawaii</p>
            <h1 className="mt-4 font-display text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.05] text-ink">
              {copy.h1}
            </h1>
            <p className="mt-5 max-w-[62ch] text-[1.125rem] leading-[1.65] text-ink-soft">{copy.lede}</p>
            <div className="mt-8">
              <DualCtaLight intent={copy.intent} service={copy.service} />
            </div>
          </div>
          <img src={copy.img.file} alt={copy.img.alt} className="aspect-[4/3] w-full rounded-[14px] object-cover shadow-soft" />
        </div>
      </section>

      <section className="bg-sand py-16 lg:py-24">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium text-ink">Choose the island</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {islandOrder.map((id) => {
              const o = islandOffers[id];
              const isl = islands[id];
              return (
                <HostLink
                  key={id}
                  island={id}
                  path={copy.path}
                  className="rounded-[14px] border border-stone bg-white p-5 transition-colors hover:border-clay/50"
                >
                  <p className="font-display text-2xl font-medium text-ink">{o.h1}</p>
                  <p className="mt-2 text-clay">from ${o.fromPp}/pp</p>
                  <p className="mt-2 text-sm text-ink-soft">{isl.role}</p>
                </HostLink>
              );
            })}
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link to="/pricing" className="text-clay underline underline-offset-4">
              Statewide pricing
            </Link>
            <Link to="/weddings" className="text-clay underline underline-offset-4">
              Weddings
            </Link>
            <Link to="/bar" className="text-clay underline underline-offset-4">
              Bar
            </Link>
            <Link to="/quote" className="text-clay underline underline-offset-4">
              Quote
            </Link>
          </div>
        </div>
      </section>
      <QuoteTeaserBand headline="WhatsApp the island and the dates." />
    </>
  );
}
