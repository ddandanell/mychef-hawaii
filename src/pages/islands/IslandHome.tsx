import { Link } from 'react-router';
import * as Accordion from '@radix-ui/react-accordion';
import { DualCta } from '@/components/DualCta';
import HostLink from '@/components/HostLink';
import { Longform, SiblingCluster } from '@/components/Longform';
import PageMeta from '@/components/PageMeta';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import { SampleMenu } from '@/components/SampleMenu';
import { islandHomeLongform } from '@/data/longformIslands';
import { islandOrder, islands } from '@/data/islands';
import type { IslandId } from '@/data/islands';
import { islandOffers } from '@/data/offers';
import { photos } from '@/data/photos';
import { HeroFrame, IslandJsonLd } from '@/pages/islands/shared';
import { usePageIsland } from '@/pages/islands/utils';

export default function IslandHome({ islandId }: { islandId: IslandId }) {
  const { island, href } = usePageIsland(islandId);
  const offer = islandOffers[islandId];
  const hero = photos[offer.heroPhoto];
  const inquiry = island.state === 'inquiry';
  const copy = islandHomeLongform[islandId];

  return (
    <>
      <PageMeta title={offer.title} description={offer.description} />
      <IslandJsonLd island={island} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: copy.faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />

      <HeroFrame island={island} src={hero.file} alt={hero.alt}>
        {inquiry ? <p className="text-[12px] text-white/70">Opening</p> : null}
        <h1 className="mt-3 font-display text-[clamp(2.75rem,7vw,4.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-white">
          {offer.h1}
        </h1>
        <p className="mt-5 max-w-[42ch] text-[17px] leading-[1.55] text-white/90">
          {islandId === 'oahu'
            ? 'Honolulu villas and residences. We shop, cook, serve and clean.'
            : islandId === 'bigisland'
              ? 'Kona and the Kohala Coast. We shop, cook, serve and clean.'
              : 'We shop, cook, serve and clean.'}
        </p>
        <p className="mt-4 text-[17px] text-white/80">
          Signature dinner from ${offer.fromPp} a guest, {island.shortName}.
        </p>
        <div className="mt-8">
          <DualCta
            island={islandId}
            intent="a private chef"
            size="lg"
          />
        </div>
      </HeroFrame>

      <section className="bg-ivory">
        <div className="grid md:grid-cols-2">
          {(islandId === 'oahu' || islandId === 'maui'
            ? (['catering', 'chef'] as const)
            : (['chef', 'catering'] as const)
          ).map((door) =>
            door === 'chef' ? (
              <Link key="chef" to={href('/private-chef')} className="border-b border-stone px-5 py-16 lg:px-12">
                <h2 className="font-display text-[2rem] font-light text-ink">Private chef</h2>
                <p className="mt-2 text-[17px] text-ink-soft">From ${offer.fromPp} a guest.</p>
              </Link>
            ) : (
              <Link
                key="catering"
                to={href('/catering')}
                className="border-b border-stone px-5 py-16 lg:px-12 md:border-l"
              >
                <h2 className="font-display text-[2rem] font-light text-ink">Staffed events</h2>
                <p className="mt-2 text-[17px] text-ink-soft">Buffet or plated, from ${offer.fromPp} a guest.</p>
              </Link>
            ),
          )}
        </div>
      </section>

      <SampleMenu island={islandId} />
      <Longform sections={copy.sections} />
      <SiblingCluster island={islandId} current="home" />

      <section className="border-t border-stone bg-ivory py-20">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-light text-ink">
            Where we cook on {island.name}
          </h2>
          <p className="mt-5 max-w-[60ch] text-[17px] leading-relaxed text-ink-soft">
            Villa, Airbnb and vacation-rental kitchens with a real cooktop
            {offer.neighborhoods.length
              ? ` — including ${offer.neighborhoods.map((n) => n.name).join(', ')}`
              : ''}
            . Hotel rooms without kitchens are declined. Travel beyond the usual corridors is published on the quote.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link to={href('/weddings')} className="text-ink underline underline-offset-4">
              Weddings
            </Link>
            <Link to={href('/bar')} className="text-ink underline underline-offset-4">
              Bar
            </Link>
            <Link to={href('/pricing')} className="text-ink underline underline-offset-4">
              What a night costs
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-stone bg-ivory py-12">
        <div className="mx-auto flex w-full max-w-container flex-wrap gap-x-6 gap-y-2 px-5 text-sm lg:px-10">
          {islandOrder
            .filter((id) => id !== islandId)
            .map((id) => (
              <HostLink key={id} island={id} className="text-ink-soft underline underline-offset-4 hover:text-ink">
                {islands[id].name}
              </HostLink>
            ))}
        </div>
      </section>

      <section className="border-t border-stone bg-ivory py-20">
        <div className="mx-auto grid w-full max-w-container gap-12 px-5 lg:grid-cols-5 lg:px-10">
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-light text-ink lg:col-span-2">
            Cost, cleanup, kitchens.
          </h2>
          <Accordion.Root type="single" collapsible className="lg:col-span-3">
            {copy.faqs.map((f, i) => (
              <Accordion.Item key={f.q} value={`item-${i}`} className="border-b border-stone">
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between gap-4 py-5 text-left">
                    <span className="font-display text-[1.25rem] font-light text-ink">{f.q}</span>
                    <span className="text-[12px] text-ink-soft">+</span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                  <p className="pb-6 text-[17px] leading-relaxed text-ink-soft">{f.a}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      <QuoteTeaserBand headline={inquiry ? 'Enquire for dates.' : `${offer.h1} — from $${offer.fromPp} a guest.`} />
    </>
  );
}
