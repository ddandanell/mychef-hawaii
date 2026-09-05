import { QuoteCta } from '@/components/Cta';
import DocumentPhotoGrid from '@/components/DocumentPhotoGrid';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import LineReveal from '@/components/LineReveal';
import { DocumentCopy, LongFaq, SiblingCluster } from '@/components/Longform';
import QuoteTeaser from '@/components/QuoteTeaser';
import PlacePriceBlock from '@/components/PlacePriceBlock';
import { islands, type IslandId } from '@/data/islands';
import type { MoneyNeighborhood } from '@/data/offers';
import { photos } from '@/data/photos';
import { islandHref } from '@/lib/paths';

export function LocationPlaceView({
  islandId,
  hood,
  hostMode,
}: {
  islandId: IslandId;
  hood: MoneyNeighborhood;
  hostMode: boolean;
}) {
  const island = islands[islandId];
  const photo = photos[hood.photo];
  const href = (path: string) => islandHref(islandId, hostMode, path);

  return (
    <>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'FoodService',
            name: `${hood.title.split('|')[0].split('—')[0].trim()} — myCHEF`,
            description: hood.description,
            areaServed: `${hood.name}, ${island.name}`,
            serviceType: 'Villa dinner',
            parentOrganization: { '@type': 'Organization', name: `myCHEF ${island.name}` },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: hood.faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          },
        ]}
      />
      <Hero src={photo.file} alt={photo.alt}>
        <p className="text-[13px] text-mute">
          {island.name} · {hood.name}
        </p>
        <LineReveal
          text={hood.h1}
          className="mt-3 font-display text-[clamp(2.75rem,7vw,4.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink"
        />
        <p className="mt-5 max-w-[46ch] text-[17px] leading-[1.55] text-ink">{hood.lede}</p>
        <p className="mt-4 text-[17px] text-ink">{hood.zone}</p>
        <div className="mt-8">
          <QuoteCta island={islandId} variant="light" />
        </div>
      </Hero>

      <DocumentCopy heading={`How a ${hood.name} booking runs.`} paras={hood.body} />

      <PlacePriceBlock islandId={islandId} placeName={hood.name} href={href} />

      <DocumentPhotoGrid
        islandId={islandId}
        eyebrow={`${island.shortName} · Beside ${hood.name}`}
        heading="Open a related document."
        intro="This page is the dinner door for this corridor. What’s included, the staffed room, the form, and the coverage map are their own URLs."
        columns={2}
        items={[
          { path: '/private-chef', label: 'What’s included', detail: '/private-chef' },
          { path: '/catering', label: 'Villa catering', detail: '/catering' },
          { path: '/quote', label: 'The quote form', detail: '/quote' },
          { path: '/coverage', label: 'Coverage map', detail: '/coverage' },
        ]}
      />

      <SiblingCluster island={islandId} href={href} />
      <LongFaq items={hood.faqs} title={`Asked on ${hood.name} bookings.`} />
      <QuoteTeaser headline={`Tell us the ${hood.name} address and the dates.`} island={islandId} />
    </>
  );
}
