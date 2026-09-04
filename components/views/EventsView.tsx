import { QuoteCta } from '@/components/Cta';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import LineReveal from '@/components/LineReveal';
import { LongFaq, SiblingCluster } from '@/components/Longform';
import QuoteTeaser from '@/components/QuoteTeaser';
import { eventOffers } from '@/data/events';
import { islands, type IslandId } from '@/data/islands';
import { photos } from '@/data/photos';
import { islandHref } from '@/lib/paths';

export function IslandEventsView({ islandId, hostMode }: { islandId: IslandId; hostMode: boolean }) {
  const offer = eventOffers[islandId];
  const hero = photos[offer.photo];
  const href = (path: string) => islandHref(islandId, hostMode, path);
  const inquiry = islands[islandId].state === 'inquiry';

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: offer.faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }}
      />
      <Hero src={hero.file} alt={hero.alt} min="short">
        <p className="text-[13px] text-mute">
          {inquiry ? 'Opening · ' : ''}
          {islands[islandId].name} events
        </p>
        <LineReveal
          text={offer.h1}
          className="mt-5 font-display text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.05] text-ink"
        />
        <p className="mt-6 max-w-[54ch] text-[17px] leading-[1.65] text-ink">{offer.lede}</p>
        <div className="mt-8">
          <QuoteCta island={islandId} service="catering-events" />
        </div>
      </Hero>

      <section className="border-t border-line bg-paper py-20 lg:py-28">
        <div className="mx-auto grid w-full max-w-container gap-12 px-5 md:grid-cols-3 lg:px-10">
          {offer.occasions.map((item) => (
            <article key={item.title}>
              <h2 className="font-display text-[1.75rem] font-light text-ink">{item.title}</h2>
              <p className="mt-4 text-[17px] leading-[1.7] text-mute">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <SiblingCluster island={islandId} current="catering" href={href} />
      <LongFaq items={offer.faqs} title="Occasion, not the catering keyword." />
      <QuoteTeaser headline="Tell us the occasion, the dates, the headcount." island={islandId} />
    </>
  );
}
