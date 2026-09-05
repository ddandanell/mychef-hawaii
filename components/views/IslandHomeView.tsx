import Link from 'next/link';
import { CtaLink, QuoteCta } from '@/components/Cta';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import LineReveal from '@/components/LineReveal';
import { Longform, LongFaq } from '@/components/Longform';
import QuoteTeaser from '@/components/QuoteTeaser';
import { SampleMenu } from '@/components/SampleMenu';
import { islandHomeLongform } from '@/data/longformIslands';
import { islands, type IslandId } from '@/data/islands';
import { islandOffers, moneyNeighborhoods } from '@/data/offers';
import { photos } from '@/data/photos';
import { islandHref } from '@/lib/paths';
import { LocationsBlock } from '@/components/LocationsBlock';

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

      <Hero src={hero.file} alt={hero.alt}>
        {inquiry ? (
          <p className="text-[12px] uppercase tracking-[0.2em] text-paper/80">Opening · Inquiry</p>
        ) : (
          <p className="text-[12px] uppercase tracking-[0.2em] text-paper/80">myCHEF {island.name}</p>
        )}
        <LineReveal
          text={offer.h1}
          className="mt-5 font-display text-[clamp(2.75rem,6.4vw,5rem)] font-light leading-[1.04] tracking-[-0.03em] text-paper"
        />
        <p className="mt-6 max-w-[42ch] text-[17px] leading-[1.6] text-paper/90">{offer.lede}</p>
        <p className="mt-4 text-[15px] tracking-[0.01em] text-paper/80">
          Signature dinner from ${offer.fromPp} a guest, {island.shortName}.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <QuoteCta island={islandId} variant="light" />
          <CtaLink href={href('/pricing')} variant="ghost">
            What a night costs
          </CtaLink>
        </div>
      </Hero>

      <section className="bg-paper py-24 lg:py-32">
        <div className="mx-auto grid w-full max-w-spread gap-16 px-5 lg:grid-cols-2 lg:px-10">
          <Link href={href('/private-chef')} className="group max-w-[40ch]">
            <p className="text-[12px] uppercase tracking-[0.16em] text-mute">01</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,3.5vw,2.75rem)] font-light text-ink">Private chef</h2>
            <p className="mt-3 text-[17px] leading-relaxed text-mute">
              In the kitchen of this house. From ${offer.fromPp} a guest.
            </p>
          </Link>
          <Link href={href('/catering')} className="group max-w-[40ch]">
            <p className="text-[12px] uppercase tracking-[0.16em] text-mute">02</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,3.5vw,2.75rem)] font-light text-ink">Staffed events</h2>
            <p className="mt-3 text-[17px] leading-relaxed text-mute">
              Buffet or plated, from ${offer.fromPp} a guest. About ten to seventy-five.
            </p>
          </Link>
        </div>
      </section>

      <SampleMenu island={islandId} />
      <Longform sections={copy.sections} />

      <section className="bg-paper py-20 lg:py-28">
        <div className="mx-auto w-full max-w-spread px-5 lg:px-10">
          <p className="text-[12px] uppercase tracking-[0.18em] text-mute">On {island.name}</p>
          <h2 className="mt-4 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-light text-ink">Named corridors</h2>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[17px]">
            {moneyNeighborhoods[islandId].map((hood) => (
              <li key={hood.slug}>
                <Link href={href(`/${hood.slug}`)} className="text-ink underline-offset-4 hover:underline">
                  {hood.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <LocationsBlock id="locations" anchorsFor={islandId} scope={islandId} />

      <LongFaq items={copy.faqs} title="Cost, cleanup, kitchens." />
      <QuoteTeaser
        headline={inquiry ? 'Join the inquiry list.' : 'Date, guest count, and the house. That is enough to start.'}
        island={islandId}
      />
    </>
  );
}
