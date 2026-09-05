import { CtaLink, QuoteCta } from '@/components/Cta';
import DocumentPhotoGrid from '@/components/DocumentPhotoGrid';
import Eyebrow from '@/components/Eyebrow';
import Hero from '@/components/Hero';
import HostLink from '@/components/HostLink';
import JsonLd from '@/components/JsonLd';
import LineReveal from '@/components/LineReveal';
import { Longform, LongFaq } from '@/components/Longform';
import Photo from '@/components/Photo';
import QuoteTeaser from '@/components/QuoteTeaser';
import { SampleMenu } from '@/components/SampleMenu';
import { heroFocal, islandHeroLede } from '@/data/chromeCopy';
import { islandHomeLongform } from '@/data/longformIslands';
import { islands, type IslandId } from '@/data/islands';
import { islandOffers, moneyNeighborhoods } from '@/data/offers';
import { photos } from '@/data/photos';
import { stillForPath } from '@/lib/documentStill';
import { islandHref } from '@/lib/paths';
import { LocationsBlock } from '@/components/LocationsBlock';
import PlacePriceBlock from '@/components/PlacePriceBlock';

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
  return (
    <>
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

      <Hero src={hero.file} alt={hero.alt} objectPosition={heroFocal[islandId]}>
        <Eyebrow tone="paper">
          {inquiry ? `${island.name} · Inquiry` : `myCHEF ${island.name}`}
        </Eyebrow>
        <LineReveal
          text={offer.h1}
          className="mt-6 font-display text-[clamp(2.5rem,6.4vw,4.75rem)] font-light leading-[1.02] tracking-[-0.02em] text-paper"
        />
        <p className="mt-6 max-w-[42ch] text-[17px] leading-[1.6] text-paper lg:text-[19px]">
          {islandHeroLede[islandId]}
        </p>
        <p className="mt-4 text-[15px] text-paper">
          Signature dinner from ${offer.fromPp} a guest, {island.shortName}.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <QuoteCta island={islandId} variant="light" />
          <CtaLink href={href('/pricing')} variant="ghost">
            What a night costs
          </CtaLink>
        </div>
      </Hero>

      <section className="bg-paper py-24 lg:py-32">
        <div className="mx-auto grid w-full max-w-spread gap-10 px-5 lg:grid-cols-2 lg:gap-16 lg:px-10">
          {(
            [
              {
                n: '01',
                path: '/private-chef',
                title: 'What’s included',
                body: `In the kitchen of this house. From $${offer.fromPp} a guest.`,
              },
              {
                n: '02',
                path: '/catering',
                title: 'Staffed events',
                body: `Buffet or plated, from $${offer.fromPp} a guest. About ten to seventy-five.`,
              },
            ] as const
          ).map((door) => {
            const still = stillForPath(islandId, door.path);
            return (
              <HostLink key={door.path} island={islandId} path={door.path} className="group block">
                <span className="relative block min-h-[44vh] overflow-hidden bg-sand lg:min-h-[52vh]">
                  <Photo
                    src={still?.file ?? island.selectorImage}
                    alt={still?.alt ?? door.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] motion-reduce:transform-none"
                  />
                </span>
                <p className="mt-6 font-display text-[1.375rem] font-light text-brass">{door.n}</p>
                <h2 className="mt-2 font-display text-[clamp(2rem,3.5vw,2.75rem)] font-light text-ink">{door.title}</h2>
                <p className="mt-3 max-w-[40ch] text-[17px] leading-relaxed text-mute">{door.body}</p>
              </HostLink>
            );
          })}
        </div>
      </section>

      <PlacePriceBlock islandId={islandId} placeName={island.name} href={href} />

      <SampleMenu island={islandId} />
      <Longform sections={copy.sections} />

      <DocumentPhotoGrid
        islandId={islandId}
        eyebrow={`Where we cook on ${island.shortName}`}
        heading="Named corridors"
        intro="Each corridor is its own dinner door — unique title, H1, and still. Coverage stays the zone map."
        items={moneyNeighborhoods[islandId].map((hood) => ({
          path: `/${hood.slug}`,
          label: hood.name,
          detail: hood.zone,
          id: hood.slug,
        }))}
      />

      <LocationsBlock id="locations" anchorsFor={islandId} scope={islandId} />

      <LongFaq items={copy.faqs} title="Cost, cleanup, kitchens." />
      <QuoteTeaser
        headline={inquiry ? 'Join the inquiry list.' : 'Island, date, guest count and kitchen. That is enough to start.'}
        island={islandId}
      />
    </>
  );
}
