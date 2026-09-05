import { QuoteCta } from '@/components/Cta';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import LineReveal from '@/components/LineReveal';
import { LongFaq, SiblingCluster } from '@/components/Longform';
import QuoteTeaser from '@/components/QuoteTeaser';
import DocumentPhotoGrid from '@/components/DocumentPhotoGrid';
import { eventOffers } from '@/data/events';
import { occasionPages } from '@/data/occasionPages';
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
          <QuoteCta island={islandId} service="catering-events" variant="light" />
        </div>
      </Hero>

      <DocumentPhotoGrid
        islandId={islandId}
        eyebrow={`${islands[islandId].name} · Occasions`}
        heading="Open an occasion document."
        items={occasionPages[islandId].map((page) => ({
          path: `/events/${page.slug}`,
          label: page.name,
          detail: `/events/${page.slug}`,
        }))}
      />
      <DocumentPhotoGrid
        islandId={islandId}
        eyebrow={`${islands[islandId].name} · Beside these occasions`}
        heading="Open a related document."
        intro="/catering is the staffed room. /weddings is the week. The form and the packaged cart are their own URLs."
        columns={2}
        items={[
          { path: '/catering', label: 'Villa catering', detail: '/catering' },
          { path: '/weddings', label: 'Wedding week', detail: '/weddings' },
          { path: '/quote', label: 'The quote form', detail: '/quote' },
          { path: '/mobile-bar', label: 'The packaged cart', detail: '/mobile-bar' },
        ]}
      />

      <SiblingCluster island={islandId} current="catering" href={href} />
      <LongFaq items={offer.faqs} title="Occasion, not the catering keyword." />
      <QuoteTeaser headline="Tell us the occasion, the dates, the headcount." island={islandId} />
    </>
  );
}
