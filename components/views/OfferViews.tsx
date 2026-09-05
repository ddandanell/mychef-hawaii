import { QuoteCta } from '@/components/Cta';
import DocumentPhotoGrid from '@/components/DocumentPhotoGrid';
import Eyebrow from '@/components/Eyebrow';
import Hero from '@/components/Hero';
import HubPhotoGrid from '@/components/HubPhotoGrid';
import LineReveal from '@/components/LineReveal';
import { DocumentCopy, SiblingCluster } from '@/components/Longform';
import Photo from '@/components/Photo';
import QuoteTeaser from '@/components/QuoteTeaser';
import HostLink from '@/components/HostLink';
import { islandChooserCopy } from '@/data/chromeCopy';
import { getHubDirectory } from '@/data/hubDirectories';
import { islandOrder, islands, type IslandId } from '@/data/islands';
import { islandOffers } from '@/data/offers';
import type { PhotoKey } from '@/data/photos';
import { photos } from '@/data/photos';
import { formatDayRate, getDayRate } from '@/data/rateCard';
import { islandHref } from '@/lib/paths';

const VAC: Record<
  IslandId,
  { h1: string; lede: string; photo: PhotoKey; body: string[]; related: { path: string; label: string }[] }
> = {
  maui: {
    h1: 'A chef for your whole Maui stay.',
    lede: 'Stay Chef day rates from $1,050. Groceries at cost. Arrival-night dinner, a stocked fridge, full-board days when the house actually cooks.',
    photo: 'vacationMaui',
    body: [
      'Stay Chef on Maui is the visitor week: arrival-night dinner, a stocked fridge, full-board days when the house actually cooks. Groceries billed at cost with receipts. From $1,050 a day.',
      '/personal-chef is the resident household line. This URL is the villa week for Wailea, Kīhei, Kapalua, Kāʻanapali and Makena.',
      'The house must have a working kitchen. Hotel rooms without a cooktop are declined.',
    ],
    related: [
      { path: '/private-chef', label: 'What’s included' },
      { path: '/personal-chef', label: 'Resident household line' },
      { path: '/journal/vacation-chef-week', label: 'Stay Chef week notes' },
    ],
  },
  oahu: {
    h1: 'A chef for the Oʻahu villa week.',
    lede: 'Stay Chef from $850 a day. Groceries at cost. Arrival-night dinner, a stocked fridge, full-board days when the house actually cooks. Weekly household cooking is /personal-chef.',
    photo: 'vacationOahu',
    body: [
      'Stay Chef on Oʻahu is the visitor week: arrival-night dinner, a stocked fridge, full-board days when the house actually cooks. Groceries billed at cost with receipts. From $850 a day.',
      'The kamaʻāina weekly line is a different document — /kamaaina and /personal-chef. Same crew, different rhythm. This URL is the villa week for guests.',
      'Kahala, Ko Olina, windward houses. A real cooktop is required. Hotel rooms without kitchens are declined.',
    ],
    related: [
      { path: '/private-chef', label: 'What’s included' },
      { path: '/kamaaina', label: 'Kamaʻāina weekly' },
      { path: '/personal-chef', label: 'Resident household line' },
      { path: '/journal/vacation-chef-week', label: 'Stay Chef week notes' },
    ],
  },
  kauai: {
    h1: 'A chef for your Kauaʻi week.',
    lede: 'Stay Chef from $1,100 a day. Princeville, Poʻipū, Hanalei. Inquiry stage. Groceries billed at cost with receipts.',
    photo: 'vacationKauai',
    body: [
      'Stay Chef on Kauaʻi is inquiry-stage. From $1,100 a day when we can staff Princeville, Poʻipū or Hanalei. Groceries billed at cost with receipts.',
      'We do not hold a fake Book-now button. Inquiry first, then a written quote if the week can be staffed.',
      '/personal-chef is the resident line. This URL is the visitor week.',
    ],
    related: [
      { path: '/private-chef', label: 'What’s included' },
      { path: '/personal-chef', label: 'Resident household line' },
      { path: '/journal/vacation-chef-week', label: 'Stay Chef week notes' },
    ],
  },
  bigisland: {
    h1: 'A chef for the Kohala week.',
    lede: 'Stay Chef from $950 a day. West-side first — Kona and the Kohala Coast. Inquiry stage.',
    photo: 'vacationBigisland',
    body: [
      'Stay Chef on Hawaiʻi Island is west-side first — Kona and the Kohala Coast. From $950 a day. Inquiry stage.',
      'Hilo, Volcano and Kaʻū are quote-only dedicated days, not a same-day west-side round trip.',
      '/personal-chef is the resident line. This URL is the visitor week.',
    ],
    related: [
      { path: '/private-chef', label: 'What’s included' },
      { path: '/personal-chef', label: 'Resident household line' },
      { path: '/journal/vacation-chef-week', label: 'Stay Chef week notes' },
    ],
  },
};

export function HubOfferView({ kind }: { kind: 'private-chef' | 'vacation-chef' }) {
  const household = getHubDirectory('/personal-chef');
  const copy =
    kind === 'private-chef'
      ? {
          h1: 'Visitor dinners in Hawaii villas.',
          lede: 'Open the island document. Oʻahu from $125 a guest, Maui and Kauaʻi from $150 a guest. Weekly household cooking lives on each island /personal-chef.',
          img: photos.chefMaui,
          service: 'private-chef',
          path: '/private-chef' as const,
        }
      : {
          h1: 'Vacation chef — a chef for the villa week',
          lede: 'Stay Chef day rates from $850 Oʻahu / $1,050 Maui / $1,100 Kauaʻi / $950 Hawaiʻi Island. Groceries at cost.',
          img: photos.vacationMaui,
          service: 'vacation-chef',
          path: '/vacation-chef' as const,
        };

  return (
    <>
      <Hero src={copy.img.file} alt={copy.img.alt}>
        <Eyebrow tone="paper">myCHEF Hawaii</Eyebrow>
        <LineReveal
          text={copy.h1}
          className="mt-6 font-display text-[clamp(2.5rem,6.4vw,4.75rem)] font-light leading-[1.02] tracking-[-0.02em] text-paper"
        />
        <p className="mt-6 max-w-[42ch] text-[17px] leading-[1.6] text-paper lg:text-[19px]">{copy.lede}</p>
        <div className="mt-9">
          <QuoteCta service={copy.service} variant="light" />
        </div>
      </Hero>
      <section className="bg-paper py-24 lg:py-32">
        <div className="mx-auto w-full max-w-spread px-5 lg:px-10">
          <Eyebrow>Where we cook</Eyebrow>
          <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.08] text-ink">
            Open the island document.
          </h2>
          <ul className="mt-14 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {islandOrder.map((id) => {
              const isl = islands[id];
              const chooser = islandChooserCopy[id];
              const o = islandOffers[id];
              return (
                <li key={id}>
                  <HostLink island={id} path={copy.path} className="group block">
                    <span className="relative block aspect-[3/4] overflow-hidden bg-sand">
                      <Photo
                        src={isl.selectorImage}
                        alt={isl.name}
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] motion-reduce:transform-none"
                      />
                    </span>
                    <span className="mt-5 block font-display text-[1.5rem] font-light text-ink">{isl.name}</span>
                    <span className="mt-2 block text-[15px] leading-relaxed text-mute">{chooser.line}</span>
                    <span className="mt-2 block text-[13px] text-mute">from ${o.fromPp} a guest</span>
                  </HostLink>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      {kind === 'private-chef' ? (
        <HubPhotoGrid
          eyebrow="Beside this visitor dinner"
          heading="Open a related document."
          intro="This page is the four-island picker for visitor dinners. Household weeks, Stay Chef weeks, the form, and the rate card are their own URLs."
          columns={2}
          items={[
            {
              href: '/personal-chef',
              title: household?.cardLabel ?? 'Household week',
              body: household?.lede ?? 'Weekly household cooking lives on each island /personal-chef.',
              still: photos.hubPersonal,
            },
            {
              href: '/vacation-chef',
              title: 'Stay Chef week',
              body: 'A chef for the villa week. Groceries at cost. Distinct from one visitor dinner.',
              still: photos.vacationMaui,
            },
            {
              href: '/quote',
              title: 'The quote form',
              body: 'Five fields. A human reply. Typical response in Hawaii business hours.',
              still: photos.quoteHub,
            },
            {
              href: '/pricing',
              title: 'What a night costs',
              body: 'The published rate card. Distinct from the fee-stack explainer.',
              still: photos.hubPricing,
            },
          ]}
        />
      ) : null}
      <QuoteTeaser />
    </>
  );
}

export function IslandVacationView({ islandId, hostMode }: { islandId: IslandId; hostMode: boolean }) {
  const copy = VAC[islandId];
  const href = (path: string) => islandHref(islandId, hostMode, path);
  const day = getDayRate(islandId);

  return (
    <>
      <Hero src={photos[copy.photo].file} alt={photos[copy.photo].alt} min="short">
        <p className="text-[13px] text-mute">{islands[islandId].name}</p>
        <LineReveal
          text={copy.h1}
          className="mt-4 font-display text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.05] text-ink"
        />
        <p className="mt-5 max-w-[52ch] text-[17px] leading-[1.65] text-ink">{copy.lede}</p>
        <p className="mt-4 text-[17px] text-ink">{formatDayRate(islandId)} · {day.model}</p>
        <div className="mt-8">
          <QuoteCta island={islandId} service="vacation-chef" variant="light" />
        </div>
      </Hero>
      <DocumentCopy heading={`How a Stay Chef week runs on ${islands[islandId].name}.`} paras={copy.body} />
      <DocumentPhotoGrid
        islandId={islandId}
        eyebrow={`${islands[islandId].name} · Beside this week`}
        heading="Open a related document."
        intro="/personal-chef is the resident line. /private-chef is one dinner. The week notes sit in the journal."
        items={copy.related.map((link) => ({
          path: link.path,
          label: link.label,
          detail: link.path,
        }))}
      />
      <SiblingCluster island={islandId} href={href} />
      <QuoteTeaser island={islandId} />
    </>
  );
}
