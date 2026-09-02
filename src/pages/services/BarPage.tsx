import { Link } from 'react-router';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import Reveal from '@/components/Reveal';
import { useIsland } from '@/context/IslandContext';
import type { IslandId } from '@/data/islands';
import { islands } from '@/data/islands';
import { photos } from '@/data/photos';
import {
  FEE_DISCLOSURE,
  STAFFING,
  feeStack,
  formatFrom,
  formatMobileBarGuest,
  formatMobileBarPackage,
  formatRange,
  getMobileBar,
} from '@/data/rateCard';
import { usePageIsland } from '@/pages/islands/utils';
import {
  BandChip,
  JsonLd,
  PlainChip,
  SectionIntro,
  ServiceFaq,
  ServiceHero,
  serviceJsonLd,
  ZoneStrip,
  useHashScroll,
} from '@/pages/services/ServicePage';
import type { ServiceFaqItem } from '@/pages/services/ServicePage';
import { InquiryCta, InquiryHero } from '@/pages/expanded/shared';

const COPY: Record<
  IslandId,
  { h1: string; lede: string; hero: { file: string; alt: string }; places: string }
> = {
  oahu: {
    h1: 'A cocktail bar on your lānai — Waikīkī to Ko Olina.',
    lede:
      'Bartender, citrus, ice and glassware on the terrace. Stack it with an Oʻahu chef night or book the hour alone — Kahala, Ko Olina, Kailua and the North Shore.',
    hero: photos.bar,
    places: 'Waikīkī, Kahala / Gold Coast, Ko Olina, Kailua, North Shore',
  },
  maui: {
    h1: 'Mobile bar for villa nights and wedding weeks.',
    lede:
      'Welcome pours, rehearsal-night cocktails and a terrace hour in Wailea, Kapalua, Kāʻanapali and Makena. The bar stacks with the chef — one team, one quote.',
    hero: photos.bar,
    places: 'Wailea, Kāʻanapali, Kapalua, Makena, Upcountry',
  },
  kauai: {
    h1: 'Estate cocktails on both Kauaʻi shores.',
    lede:
      'Princeville, Hanalei and Poʻipū — a bartender on the terrace when the island team launches. Dated inquiries set the sequence. Starting prices are published now.',
    hero: photos.kauaiNorth,
    places: 'Princeville, Hanalei, Poʻipū, Kōloa',
  },
  bigisland: {
    h1: 'Sunset pours on the Kohala Coast.',
    lede:
      'Lava-coast terraces in the Kona–Kohala corridor. Inquiry-stage until a west-side team is staffed. The rate is published so you can plan.',
    hero: photos.kohalaFish,
    places: 'Kohala Coast, Waikoloa, Mauna Kea resort belt, Kona',
  },
};

const faqsFor = (id: IslandId): ServiceFaqItem[] => {
  const bar = getMobileBar(id);
  return [
    {
      q: 'What does the mobile bar include?',
      a: `A bartender, bar setup and glassware for ${bar.packageHours} hours. Spirits are billed at cost with receipts, or you supply your own. Mixers, citrus and ice are in the package unless the quote says otherwise.`,
    },
    {
      q: 'Can we stack the bar with a chef or wedding week?',
      a: 'Yes — that is the usual order. The bar is a line on the same written quote as dinner or the wedding week, never a surprise add-on on the night.',
    },
    {
      q: 'How is it priced?',
      a: `Starting ${formatMobileBarGuest(id)}, or ${formatMobileBarPackage(id)}. ${FEE_DISCLOSURE}`,
    },
    {
      q: 'Do you need a liquor license at a private villa?',
      a: 'Private-residence service is quoted with the legal posture in writing. Host-supplied alcohol is the cleanest path; we do not hide licensing questions in the menu price.',
    },
  ];
};

export default function BarPage() {
  useHashScroll();
  const { islandId, href } = useIsland();
  const id = (islandId ?? 'maui') as IslandId;
  const { island } = usePageIsland(id);
  const copy = COPY[id];
  const bar = getMobileBar(id);
  const inquiry = island.state === 'inquiry';
  const crumbs = [
    { label: 'Home', to: href('/') },
    { label: island.name, to: href('/') },
    { label: 'Bar' },
  ];

  const heroChips = (
    <>
      <BandChip
        label={`${formatRange(bar.perGuest[0], bar.perGuest[1])} / guest`}
        onDark
      />
      <BandChip label={formatMobileBarPackage(id)} onDark />
      <PlainChip onDark>{bar.packageHours}-hour package</PlainChip>
    </>
  );

  return (
    <>
      {inquiry ? (
        <InquiryHero
          island={island}
          crumbs={crumbs}
          service="Mobile bar — planned"
          title={copy.h1}
          lede={copy.lede}
          image={copy.hero.file}
          imageAlt={copy.hero.alt}
          chips={heroChips}
          primaryTo={`/quote?island=${id}&service=mobile-bar`}
          secondary={{ label: 'See the package ↓', to: '#package' }}
        />
      ) : (
        <ServiceHero
          fullHeight
          crumbs={crumbs}
          eyebrow={`myCHEF ${island.name} — Mobile bar`}
          title={copy.h1}
          lede={copy.lede}
          image={copy.hero.file}
          imageAlt={copy.hero.alt}
          chips={heroChips}
          primary={{ label: 'Request a bar quote', to: `/quote?island=${id}&service=mobile-bar` }}
          secondary={{ label: 'See the package ↓', to: '#package' }}
        />
      )}

      <section id="package" className="bg-ivory py-24 lg:py-32">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <SectionIntro
            eyebrow="Published starting prices"
            title="A 4-hour terrace package — or per guest."
            body={FEE_DISCLOSURE}
          />
          <Reveal stagger className="mt-14 grid gap-6 lg:grid-cols-3">
            <article className="rounded-[18px] border-2 border-clay bg-white p-7 shadow-soft lg:p-8">
              <p className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-ink-soft">4-hour package</p>
              <p className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink">
                {formatFrom(bar.packageFrom)}
              </p>
              <p className="mt-2 text-sm text-ink-soft">
                + ${bar.packagePerGuest}/guest · bartender + setup · {island.name}
              </p>
            </article>
            <article className="rounded-[18px] border border-stone bg-white p-7 shadow-soft lg:p-8">
              <p className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-ink-soft">Per guest</p>
              <p className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink">
                {formatRange(bar.perGuest[0], bar.perGuest[1])}
              </p>
              <p className="mt-2 text-sm text-ink-soft">{bar.model}</p>
            </article>
            <article className="rounded-[18px] border border-stone bg-white p-7 shadow-soft lg:p-8">
              <p className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-ink-soft">Staffing</p>
              <p className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink">
                from ${STAFFING.serverHourly}/hr
              </p>
              <p className="mt-2 text-sm text-ink-soft">
                Extra servers {STAFFING.minimumHours}–5 hr minimums · sous-chef ${STAFFING.sousHourly}/hr
              </p>
            </article>
          </Reveal>
          <p className="mt-8 max-w-[65ch] text-sm leading-relaxed text-ink-soft">{bar.note}</p>
          <p className="mt-3 font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-ink-soft">{copy.places}</p>
        </div>
      </section>

      <section className="bg-sand py-24 lg:py-32">
        <div className="mx-auto grid w-full max-w-container items-center gap-12 px-5 lg:grid-cols-2 lg:px-10">
          <Reveal>
            <img
              src={photos.bartender.file}
              alt={photos.bartender.alt}
              className="aspect-[4/3] w-full rounded-[18px] object-cover shadow-soft"
            />
          </Reveal>
          <div>
            <SectionIntro
              eyebrow="Stacked with the kitchen"
              title="Bar + chef, like Bali — priced for Hawaiʻi."
              body="Most tables book the bartender next to the dinner. Wedding weeks add a welcome pour. The quote itemises both so nothing is buried in a menu price."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to={href('/private-chef')}
                className="rounded-full border border-stone bg-white px-4 py-2 text-sm text-ink hover:border-clay/50"
              >
                Private chef
              </Link>
              <Link
                to={href('/wedding-catering')}
                className="rounded-full border border-stone bg-white px-4 py-2 text-sm text-ink hover:border-clay/50"
              >
                Wedding week
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24 lg:py-32">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <ZoneStrip islandId={id} />
          <div className="mt-12 space-y-3">
            {feeStack
              .filter((r) => r.chip === 'RPR — ATTORNEY' || r.chip === 'RPR — CPA' || r.label.startsWith('Gratuity'))
              .map((row) => (
                <p key={row.label} className="font-mono text-[0.6875rem] uppercase leading-5 tracking-[0.08em] text-ink-soft">
                  {row.label}
                </p>
              ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-24 lg:py-32">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <ServiceFaq items={faqsFor(id)} title={`Asked before we pour on ${island.name}.`} />
        </div>
      </section>

      {inquiry ? (
        <div className="bg-ivory py-16 text-center">
          <InquiryCta to={`/quote?island=${id}&service=mobile-bar`} />
        </div>
      ) : (
        <QuoteTeaserBand headline="Tell us the island, the hour, the headcount." />
      )}

      <JsonLd
        data={serviceJsonLd({
          name: `Mobile bar — ${island.name}`,
          description: copy.lede,
          islandName: island.name,
          path: `/${id}/bar`,
          crumbs: crumbs.map((c) => c.label),
        })}
      />
    </>
  );
}
