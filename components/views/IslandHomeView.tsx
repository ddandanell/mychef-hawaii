import Link from 'next/link';
import HostLink from '@/components/HostLink';
import { QuoteCta } from '@/components/Cta';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import LineReveal from '@/components/LineReveal';
import { Longform, LongFaq, SiblingCluster } from '@/components/Longform';
import QuoteTeaser from '@/components/QuoteTeaser';
import { SampleMenu } from '@/components/SampleMenu';
import { islandHomeLongform } from '@/data/longformIslands';
import { islandOrder, islands, type IslandId } from '@/data/islands';
import { islandOffers } from '@/data/offers';
import { photos } from '@/data/photos';
import { islandHref } from '@/lib/paths';
import { zoneMap } from '@/data/zoneMap';

export default function IslandHomeView({
  islandId,
  hostMode,
}: {
  islandId: IslandId;
  hostMode: boolean;
}) {
  const island = islands[islandId];
  const offer = islandOffers[islandId];
  const hero = photos[offer.heroPhoto];
  const inquiry = island.state === 'inquiry';
  const copy = islandHomeLongform[islandId];
  const href = (path: string) => islandHref(islandId, hostMode, path);
  const areaServed = zoneMap[islandId].zones.filter((z) => z.class !== 'quote-only').map((z) => z.name);

  const jsonLd =
    island.state === 'live'
      ? {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: `myCHEF ${island.name}`,
          description: island.role,
          parentOrganization: { '@type': 'Organization', '@id': '#org' },
          areaServed,
        }
      : {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: `myCHEF ${island.name}`,
          description: island.role,
          isPartOf: { '@type': 'WebSite', name: 'myCHEF Hawaii' },
        };

  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: copy.faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }}
      />

      <Hero src={hero.file} alt={hero.alt}>
        {inquiry ? <p className="text-[12px] text-paper/80">Opening</p> : null}
        <LineReveal
          text={offer.h1}
          className="mt-3 font-display text-[clamp(2.75rem,7vw,4.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-paper"
        />
        <p className="mt-5 max-w-[42ch] text-[17px] leading-[1.55] text-paper">
          {islandId === 'oahu'
            ? 'Honolulu villas and residences. We shop, cook, serve and clean.'
            : islandId === 'bigisland'
              ? 'Kona and the Kohala Coast. We shop, cook, serve and clean.'
              : 'We shop, cook, serve and clean.'}
        </p>
        <p className="mt-4 text-[17px] text-paper">
          Signature dinner from ${offer.fromPp} a guest, {island.shortName}.
        </p>
        <div className="mt-8">
          <QuoteCta island={islandId} />
        </div>
      </Hero>

      <section className="bg-paper">
        <div className="grid md:grid-cols-2">
          {(islandId === 'oahu' || islandId === 'maui' ? (['catering', 'chef'] as const) : (['chef', 'catering'] as const)).map(
            (door) =>
              door === 'chef' ? (
                <Link key="chef" href={href('/private-chef')} className="border-b border-line px-5 py-16 lg:px-12">
                  <h2 className="font-display text-[2rem] font-light text-ink">Private chef</h2>
                  <p className="mt-2 text-[17px] text-mute">From ${offer.fromPp} a guest.</p>
                </Link>
              ) : (
                <Link
                  key="catering"
                  href={href('/catering')}
                  className="border-b border-line px-5 py-16 lg:px-12 md:border-l"
                >
                  <h2 className="font-display text-[2rem] font-light text-ink">Staffed events</h2>
                  <p className="mt-2 text-[17px] text-mute">Buffet or plated, from ${offer.fromPp} a guest.</p>
                </Link>
              ),
          )}
        </div>
      </section>

      <SampleMenu island={islandId} />
      <Longform sections={copy.sections} />
      <SiblingCluster island={islandId} current="home" href={href} />

      <section className="border-t border-line bg-paper py-20">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-light text-ink">
            Where we cook on {island.name}
          </h2>
          <p className="mt-5 max-w-[60ch] text-[17px] leading-relaxed text-mute">
            Villa, Airbnb and vacation-rental kitchens with a real cooktop
            {offer.neighborhoods.length ? ` — including ${offer.neighborhoods.map((n) => n.name).join(', ')}` : ''}. Hotel
            rooms without kitchens are declined. Travel beyond the usual corridors is published on the quote.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href={href('/weddings')} className="text-ink underline underline-offset-4">
              Weddings
            </Link>
            <Link href={href('/bar')} className="text-ink underline underline-offset-4">
              Bar
            </Link>
            <Link href={href('/pricing')} className="text-ink underline underline-offset-4">
              What a night costs
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper py-12">
        <div className="mx-auto flex w-full max-w-container flex-wrap gap-x-6 gap-y-2 px-5 text-sm lg:px-10">
          {islandOrder
            .filter((id) => id !== islandId)
            .map((id) => (
              <HostLink key={id} island={id} className="text-mute underline underline-offset-4 hover:text-ink">
                {islands[id].name}
              </HostLink>
            ))}
        </div>
      </section>

      <LongFaq items={copy.faqs} title="Cost, cleanup, kitchens." />
      <QuoteTeaser headline={inquiry ? 'Join the inquiry list.' : 'Request a quote.'} island={islandId} />
    </>
  );
}
