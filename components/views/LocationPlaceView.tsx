import { QuoteCta } from '@/components/Cta';
import DocumentPhotoGrid from '@/components/DocumentPhotoGrid';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import LineReveal from '@/components/LineReveal';
import { DocumentCopy, LongFaq, SiblingCluster } from '@/components/Longform';
import QuoteTeaser from '@/components/QuoteTeaser';
import { islands, type IslandId } from '@/data/islands';
import type { MoneyNeighborhood } from '@/data/offers';
import { photos } from '@/data/photos';
import { islandHref } from '@/lib/paths';
import {
  FEE_DISCLOSURE,
  formatBand,
  formatFrom,
  getDayRate,
  getMobileBar,
  getOtherOffer,
  getTiers,
} from '@/data/rateCard';

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
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: hood.faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }}
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

      <PriceBlock islandId={islandId} hoodName={hood.name} href={href} />

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

function PriceBlock({
  islandId,
  hoodName,
  href,
}: {
  islandId: IslandId;
  hoodName: string;
  href: (path: string) => string;
}) {
  const island = islands[islandId];
  const core = getTiers(islandId).find((t) => t.tier === 'CORE');
  const day = getDayRate(islandId);
  const bar = getMobileBar(islandId);
  const wedding = getOtherOffer('wedding').byIsland[islandId];
  const cards = [
    { label: 'Villa dinner', value: core ? formatBand(core) : '', unit: 'per guest' },
    { label: 'Stay Chef', value: formatFrom(day.from), unit: 'per day' },
    { label: 'Wedding week', value: formatFrom(wedding.from), unit: 'per guest + staffing' },
    { label: 'Packaged cart', value: formatFrom(bar.packageFrom), unit: `per ${bar.packageHours}-hr package` },
  ];
  return (
    <section className="border-t border-line bg-sand py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <p className="text-[12px] uppercase tracking-[0.18em] text-mute">Published prices · {hoodName}</p>
        <h2 className="mt-4 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-light leading-[1.1] text-ink">
          What a night in {hoodName} starts at.
        </h2>
        <p className="mt-4 max-w-[62ch] text-[17px] leading-relaxed text-mute">{FEE_DISCLOSURE}</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <article key={c.label} className={`border ${i === 0 ? 'border-ink' : 'border-line'} bg-paper p-6`}>
              <p className="text-[12px] text-mute">{c.label}</p>
              <p className="mt-3 font-display text-[2rem] font-light leading-tight tracking-tight text-ink">{c.value}</p>
              <p className="mt-2 text-sm text-mute">{c.unit}</p>
            </article>
          ))}
        </div>
        <a
          href={href('/pricing')}
          className="mt-8 inline-block text-sm font-medium text-ink underline decoration-brass underline-offset-[6px]"
        >
          The full {island.name} rate card, line by line
        </a>
      </div>
    </section>
  );
}
