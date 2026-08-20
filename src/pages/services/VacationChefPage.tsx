import { Link } from 'react-router';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import Reveal from '@/components/Reveal';
import { otherOffers } from '@/data/rateCard';
import {
  BandChip,
  JsonLd,
  SectionIntro,
  ServiceFaq,
  ServiceHero,
  serviceJsonLd,
  useHashScroll,
} from '@/pages/services/ServicePage';
import type { LiveIslandId, ServiceFaqItem } from '@/pages/services/ServicePage';

/**
 * Vacation Chef — multi-day villa residency + weekly household service
 * (service-vacation-chef.md). One template, two island bindings; Oʻahu
 * additionally carries the kamaʻāina weekly line as a first-class #weekly anchor.
 */

interface VacationChefContent {
  islandName: string;
  path: string;
  h1: string;
  leadTimeFaq: ServiceFaqItem;
}

const content: Record<LiveIslandId, VacationChefContent> = {
  maui: {
    islandName: 'Maui',
    path: '/maui/vacation-chef',
    h1: 'A chef for your whole Maui stay.',
    leadTimeFaq: {
      q: 'How far ahead should we plan for December through March?',
      a: 'Maui’s high season books furthest out — multi-day chefs are one-calendar people, so a reserved week is genuinely reserved. Ask as early as you can; we confirm holds in writing.',
    },
  },
  oahu: {
    islandName: 'Oʻahu',
    path: '/oahu/vacation-chef',
    h1: 'A chef for the week — or every week.',
    leadTimeFaq: {
      q: 'What about summer and the holidays?',
      a: 'Summer family travel and the December holidays are Oʻahu’s tightest windows for multi-day service. Weekly household plans are year-round and less seasonal — the standing calendar fills first, so start the conversation early.',
    },
  },
};

const dayRows = [
  {
    label: 'Morning',
    text: 'Coffee, fruit, a proper breakfast before the beach.',
    image: '/craft-ingredients.jpg',
    alt: 'Island produce — avocado, citrus, greens and fish on ice — styled on a wooden table',
  },
  {
    label: 'Midday',
    text: 'Pool lunches, kids fed early, nobody cooks.',
    image: '/photos/vacation-chef.jpg',
    alt: 'A chef plating a casual but refined family lunch on a villa kitchen island',
  },
  {
    label: 'Evening',
    text: 'The dressed dinner — the night-in that beats the reservation.',
    image: '/craft-service.jpg',
    alt: "Server's hands setting wine glasses on a private dining table in warm dusk light",
  },
];

const baseFaqs: ServiceFaqItem[] = [
  {
    q: 'How are groceries billed across a multi-day stay?',
    a: 'At cost, always itemised. Your chef shops day-by-day, receipts are shared with you, and the grocery total is reconciled at the end of the stay — no markup, no bundled “provisioning fee.”',
  },
  {
    q: 'Can one chef hold a dietary framework for a whole week?',
    a: 'Yes — that’s the point of a residency. Menus evolve across the stay inside your framework (vegan, gluten-free, nut-aware, retreat protocols), so day five is as considered as day one, and nobody re-explains anything.',
  },
  {
    q: 'What happens on the chef’s day off?',
    a: 'Rest days are scheduled into longer stays up front — honest capacity planning, never a surprise gap. The fridge is left stocked and prepped, and we’ll point you at the nights worth going out for.',
  },
];

/* ---------------- Section 2 — A day with your chef ---------------- */

function DayStory() {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <SectionIntro
          eyebrow="A day with your chef"
          title="Three meals, zero logistics."
        />
        <div className="mt-14 space-y-16">
          {dayRows.map((row, i) => (
            <div
              key={row.label}
              className={`grid items-center gap-8 lg:grid-cols-2 ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
            >
              <Reveal className="overflow-hidden rounded-[14px]">
                <img
                  src={row.image}
                  alt={row.alt}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </Reveal>
              <Reveal delay={0.1}>
                <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-brass">{row.label}</p>
                <p className="mt-3 max-w-[50ch] font-display text-[1.625rem] font-medium leading-[1.3] text-ink">
                  {row.text}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 3 — How multi-day pricing works ---------------- */

function PricingModel({ islandName }: { islandName: string }) {
  const vacationOffer = otherOffers.find((o) => o.offer === 'Vacation chef / multi-day');
  return (
    <section id="pricing-model" className="bg-sand py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-container gap-12 px-5 lg:grid-cols-2 lg:px-10">
        <SectionIntro
          eyebrow="Transparency"
          title="How multi-day pricing works."
          body="An all-day chef can’t stack events — multi-day is priced for utilization, which is why per-day beats per-dinner across a stay."
        />
        <Reveal delay={0.1}>
          <div className="rounded-[14px] border border-stone bg-white p-6 shadow-soft lg:p-8">
            <p className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-ink-soft">
              Worked example — 8 guests · 5 days · {islandName}
            </p>
            <div className="mt-6 space-y-4">
              {vacationOffer ? (
                <div className="border-b border-stone pb-4">
                  <BandChip label={`Per-person/day band — ${vacationOffer.orientation}`} />
                </div>
              ) : null}
              <p className="border-b border-stone pb-4 font-mono text-[0.75rem] uppercase leading-5 tracking-[0.1em] text-ink">
                Groceries at cost, receipts shared
              </p>
              <p className="border-b border-stone pb-4 font-mono text-[0.75rem] uppercase leading-5 tracking-[0.1em] text-ink">
                Chef travel days — none within base zone
              </p>
              <p className="font-mono text-[0.75rem] uppercase leading-5 tracking-[0.1em] text-ink">
                No per-meal service stacking — one daily rate
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Section 4 — Island module ---------------- */

function OahuWeekly() {
  const weeklyOffer = otherOffers.find((o) => o.offer === 'Weekly meal prep (kamaʻāina line)');
  return (
    <section id="weekly" className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <SectionIntro
          eyebrow="Oʻahu — the kamaʻāina line"
          title="For households: the weekly chef."
          body="A standing weekly service for Oʻahu households — set menus each week, groceries at cost, one fixed weekly fee. Built for Kahala to Hawaiʻi Kai: families, executives, anyone tired of the weekday dinner question."
        />
        <Reveal delay={0.15} className="mt-8 flex flex-col items-start gap-4">
          {weeklyOffer ? (
            <>
              <BandChip label={`Standing weekly service — ${weeklyOffer.model}`} />
              <BandChip label={`Structure — ${weeklyOffer.orientation}`} />
            </>
          ) : null}
          <BandChip label="4-week minimum posture" />
          <Link
            to="/quote?island=oahu&service=weekly"
            className="mt-2 inline-flex items-center rounded-full bg-clay px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-px hover:bg-clay-deep active:scale-[0.97]"
          >
            Start a household plan
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function MauiRetreats() {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <SectionIntro
          eyebrow="Maui — full-board weeks"
          title="Retreats and full-board weeks."
          body="Wellness retreats and hosted villa weeks, with a chef aligned to your retreat’s dietary framework from day one. Groups from eight to twenty eat better on per-day economics — one daily rate, every meal covered, nobody stacking restaurant reservations across a week."
        />
        <Reveal delay={0.15} className="mt-8">
          <Link
            to="/quote?island=maui&service=vacation-chef"
            className="inline-flex items-center rounded-full bg-clay px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-px hover:bg-clay-deep active:scale-[0.97]"
          >
            Plan a retreat week
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Section 5 — Practicalities ---------------- */

function Practicalities() {
  const staffingOffer = otherOffers.find((o) => o.offer === 'Event staffing');
  const tiles: { title: string; body: React.ReactNode }[] = [
    {
      title: 'Villa kitchen',
      body: 'Full kitchen preferred — we assess yours during menu design and bring kit where it falls short.',
    },
    {
      title: 'Provisioning',
      body: 'Arrival-day stocking available, so the fridge is full before you are. Groceries at cost, always itemised.',
    },
    {
      title: 'Staffing add-ons',
      body: staffingOffer ? (
        <BandChip label={`Servers — ${staffingOffer.orientation}`} />
      ) : (
        'Servers available by the hour, labeled on your quote.'
      ),
    },
    {
      title: 'Rest days',
      body: 'Chef days off are scheduled into longer stays — honest capacity planning, never a surprise gap.',
    },
  ];
  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <SectionIntro eyebrow="Practicalities" title="The unglamorous parts, answered." />
        <Reveal stagger staggerDelay={0.07} className="mt-12 grid gap-4 md:grid-cols-2 lg:gap-6">
          {tiles.map((t) => (
            <div key={t.title} className="rounded-[14px] border border-stone bg-white p-6 shadow-soft">
              <h3 className="font-display text-[1.375rem] font-medium leading-[1.2] text-ink">{t.title}</h3>
              <div className="mt-3 text-[1.0625rem] leading-[1.65] text-ink-soft">{t.body}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Page ---------------- */

export default function VacationChefPage({ island }: { island: LiveIslandId }) {
  useHashScroll();
  const c = content[island];
  const vacationOffer = otherOffers.find((o) => o.offer === 'Vacation chef / multi-day');
  const weeklyOffer = otherOffers.find((o) => o.offer === 'Weekly meal prep (kamaʻāina line)');
  const crumbs = [
    { label: 'Home', to: '/' },
    { label: c.islandName, to: `/${island}` },
    { label: 'Vacation Chef' },
  ];

  return (
    <>
      <ServiceHero
        crumbs={crumbs}
        eyebrow={`Vacation Chef — ${c.islandName}`}
        title={c.h1}
        lede="Breakfast through dinner, provisioning managed, menus that evolve across the stay. Up to three meals a day; groceries at cost, always itemised."
        image="/photos/vacation-chef.jpg"
        imageAlt="A vacation chef plates morning fruit and eggs in a villa kitchen while a family breakfasts by the pool. Concept image, not a myCHEF event."
        chips={
          <>
            {vacationOffer ? <BandChip onDark label={`Multi-day — ${vacationOffer.orientation}`} /> : null}
            {island === 'oahu' && weeklyOffer ? (
              <BandChip onDark label={`Weekly household — ${weeklyOffer.model}; ${weeklyOffer.orientation}`} />
            ) : null}
          </>
        }
        primary={{ label: 'Check availability', to: `/quote?island=${island}&service=vacation-chef` }}
        secondary={{ label: 'How multi-day pricing works ↓', to: '#pricing-model' }}
      />
      <DayStory />
      <PricingModel islandName={c.islandName} />
      {island === 'oahu' ? <OahuWeekly /> : <MauiRetreats />}
      <Practicalities />
      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <ServiceFaq
            items={[...baseFaqs, c.leadTimeFaq]}
            intro={`Multi-day and weekly answers for ${c.islandName} — single dinners live on the private chef page.`}
          />
        </div>
      </section>
      <QuoteTeaserBand
        headline="One chef. The whole stay."
        note={`Quote opens with ${c.islandName} pre-selected · All times HST`}
      />
      <JsonLd
        data={serviceJsonLd({
          name: `Vacation chef — ${c.islandName}`,
          description: c.h1,
          islandName: c.islandName,
          path: c.path,
          crumbs: crumbs.map((x) => x.label),
        })}
      />
    </>
  );
}
