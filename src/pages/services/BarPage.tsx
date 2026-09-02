import { Link } from 'react-router';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import Reveal from '@/components/Reveal';
import { useIsland } from '@/context/IslandContext';
import type { IslandId } from '@/data/islands';
import { photos } from '@/data/photos';
import {
  FEE_DISCLOSURE,
  STAFFING,
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
  useHashScroll,
  useHostHomeCrumbs,
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
      'Princeville, Hanalei and Poʻipū — a bartender on the terrace. Stack with a Kauaʻi chef night or book the hour. Starting prices published.',
    hero: photos.bar,
    places: 'Princeville, Hanalei, Poʻipū, Kōloa',
  },
  bigisland: {
    h1: 'Sunset pours on the Kohala Coast.',
    lede:
      'Lava-coast terraces in the Kona–Kohala corridor. Bartender add-on or a 4-hour mobile-bar package. The rate is published so you can plan.',
    hero: photos.bar,
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
  const crumbs = useHostHomeCrumbs('Bar');

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
          island={id}
          whatsappIntent="a mobile bar"
          primary={{ label: 'Get a bar quote', to: `/quote?island=${id}&service=mobile-bar` }}
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
          <div className="mt-14">
            <div className="grid gap-2 border-b border-stone py-6 md:grid-cols-[1fr_auto] md:items-baseline">
              <p className="font-display text-[1.375rem] font-light text-ink">4-hour package</p>
              <p className="font-display text-[2.5rem] font-light text-ink">{formatFrom(bar.packageFrom)}</p>
              <p className="text-[17px] text-ink-soft md:col-span-2">
                + ${bar.packagePerGuest} a guest · bartender + setup · {island.name}
              </p>
            </div>
            <div className="grid gap-2 border-b border-stone py-6 md:grid-cols-[1fr_auto] md:items-baseline">
              <p className="font-display text-[1.375rem] font-light text-ink">Per guest</p>
              <p className="font-display text-[2.5rem] font-light text-ink">
                {formatRange(bar.perGuest[0], bar.perGuest[1])}
              </p>
              <p className="text-[17px] text-ink-soft md:col-span-2">{bar.model}</p>
            </div>
            <div className="grid gap-2 border-b border-stone py-6 md:grid-cols-[1fr_auto] md:items-baseline">
              <p className="font-display text-[1.375rem] font-light text-ink">Staffing</p>
              <p className="font-display text-[2.5rem] font-light text-ink">from ${STAFFING.serverHourly}/hr</p>
              <p className="text-[17px] text-ink-soft md:col-span-2">
                Extra servers {STAFFING.minimumHours}–5 hr minimums · sous-chef ${STAFFING.sousHourly}/hr
              </p>
            </div>
          </div>
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
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
          <div>
            <SectionIntro
              eyebrow="Stacked with the kitchen"
              title="Bar + chef, stacked on one quote."
              body="Most tables book the bartender next to the dinner. Wedding weeks add a welcome pour. The quote itemises both so nothing is buried in a menu price."
            />
            <div className="mt-8 flex flex-wrap gap-6">
              <Link to={href('/private-chef')} className="text-sm text-ink underline underline-offset-4">
                Private chef
              </Link>
              <Link to={href('/weddings')} className="text-sm text-ink underline underline-offset-4">
                Wedding week
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24 lg:py-32">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-light text-ink">Where we pour</h2>
          <p className="mt-5 max-w-[60ch] text-[17px] leading-relaxed text-ink-soft">{copy.places}</p>
          <p className="mt-8 max-w-[65ch] text-[17px] leading-[1.65] text-ink-soft">
            Service 20% and Hawaiʻi GET are added as their own lines.{' '}
            <Link to="/legal" className="text-ink underline underline-offset-4">
              Legal
            </Link>
            .
          </p>
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
