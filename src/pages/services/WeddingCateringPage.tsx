import { Link } from 'react-router';
import {
  CalendarRange,
  CloudRain,
  Handshake,
  UtensilsCrossed,
  Users,
  Wine,
} from 'lucide-react';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import Reveal from '@/components/Reveal';
import StatusChip from '@/components/StatusChip';
import { feeStack, formatBand, getTiers, otherOffers } from '@/data/rateCard';
import {
  BandChip,
  JsonLd,
  PlainChip,
  SectionIntro,
  ServiceFaq,
  ServiceHero,
  serviceJsonLd,
  useHashScroll,
} from '@/pages/services/ServicePage';
import type { ServiceFaqItem } from '@/pages/services/ServicePage';

/**
 * Maui Wedding Catering — the wedding-week page (service-wedding-catering.md).
 * Sells the week stack (welcome dinner → rehearsal → reception → recovery
 * brunch), not just reception catering. Maui-only, live island.
 */

const weekEvents = [
  {
    day: 'Welcome dinner',
    text: 'The ice-breaker: family-style or grazing, relaxed by design.',
    chips: ['Grazing tables', 'Family-style'],
  },
  {
    day: 'Rehearsal',
    text: 'A coursed dinner for the inner circle.',
    chips: ['Coursed seated'],
  },
  {
    day: 'The reception',
    text: '10–75 guests, staffed service, published staffing ratios, wet-weather plan in writing.',
    chips: ['Staffed service', 'Rentals coordinated'],
  },
  {
    day: 'Recovery brunch',
    text: 'The morning after, done gently.',
    chips: ['Brunch stations'],
  },
];

const faqs: ServiceFaqItem[] = [
  {
    q: 'What guest counts and minimums do you work with?',
    a: 'Private-estate formats run 10 to 75 guests. Minimums depend on the event and the week stack — every minimum is itemised on the proposal before you commit, never discovered afterward.',
  },
  {
    q: 'Our venue is a private estate (or a tented site) — what do you need?',
    a: 'A kitchen assessment is part of menu design. Estate kitchens are ideal; for tented and remote sites we bring equipment and build a back-of-house plan with your planner and the venue. Power, water and load-in are all settled in writing before the week begins.',
  },
  {
    q: 'How do deposits and payments work?',
    a: 'Deposit ladders in the 50/25/25 style are common across the market; our own terms are attorney-reviewed and shown line-by-line on your proposal. The full posture — deposits, cancellation, GET, service charge — is published on /legal.',
  },
  {
    q: 'We’re aiming for October — how early should we ask?',
    a: 'September, October and May are Maui’s peak wedding months, and one team can only hold one wedding week at a time. Ask as early as you have a date; we confirm holds in writing.',
  },
  {
    q: 'Can you handle many dietary needs across a large party?',
    a: 'Yes — dietary needs are tracked per guest, not per table. Vegan, gluten-free, dairy-free and nut-aware menus run in parallel with the main menu, and severe allergies are discussed directly before confirmation.',
  },
];

/* ---------------- Section 2 — The wedding week ---------------- */

function WeddingWeek() {
  return (
    <section id="the-week" className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <SectionIntro
          eyebrow="The wedding week"
          title="One team, four events, no hand-offs."
        />
        <div className="relative mt-12">
          <div aria-hidden="true" className="absolute bottom-4 left-[7px] top-4 hidden w-px bg-stone md:block" />
          <Reveal stagger staggerDelay={0.09} className="space-y-8">
            {weekEvents.map((e) => (
              <div
                key={e.day}
                className="relative rounded-[14px] border border-stone bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 md:ml-10 lg:p-8"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-10 top-8 hidden h-[15px] w-[15px] rounded-full border-2 border-brass bg-ivory md:block"
                />
                <h3 className="font-display text-[1.625rem] font-medium leading-[1.2] text-brass">{e.day}</h3>
                <p className="mt-2 max-w-[60ch] text-[1.0625rem] leading-[1.65] text-ink-soft">{e.text}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {e.chips.map((chip) => (
                    <PlainChip key={chip}>{chip}</PlainChip>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
          <Reveal stagger staggerDelay={0.09} className="mt-12 grid grid-cols-2 gap-4 lg:gap-6">
            {[
              {
                src: '/assets/wedding-reception.jpg',
                alt: 'A wedding reception table styled for a private-estate celebration dinner',
              },
              {
                src: '/assets/wedding-candles.jpg',
                alt: 'Candlelight and table styling detail from a wedding-week evening event',
              },
            ].map((img) => (
              <figure key={img.src}>
                <div className="overflow-hidden rounded-[14px] shadow-soft">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="aspect-[4/3] h-full w-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 font-mono text-[0.625rem] uppercase leading-4 tracking-[0.1em] text-ink-soft">
                  Concept image — not a myCHEF Hawaiʻi event. Final photography pending.
                </figcaption>
              </figure>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 3 — Pricing posture for weddings ---------------- */

function WeddingPricing() {
  const core = getTiers('maui').find((t) => t.tier === 'CORE');
  const weddingOffer = otherOffers.find((o) => o.offer === 'Wedding reception / wedding week');
  const dinnerTwo = otherOffers.find((o) => o.offer === 'Dinner for two / elopement');
  const mauiPosture =
    dinnerTwo?.orientation
      .split('·')
      .map((s) => s.trim())
      .find((s) => /maui/i.test(s)) ?? dinnerTwo?.orientation ?? '';
  const feeRows = feeStack.filter(
    (r) => r.label.startsWith('Service charge') || r.label.startsWith('GET') || r.label.startsWith('Booking deposit'),
  );

  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <SectionIntro
          eyebrow="Pricing posture"
          title="Orientation, labeled — the proposal itemises everything."
        />
        <Reveal stagger staggerDelay={0.09} className="mt-12 grid gap-4 lg:grid-cols-3 lg:gap-6">
          <div className="rounded-[14px] border border-stone bg-white p-6 shadow-soft lg:p-8">
            <h3 className="font-display text-[1.375rem] font-medium leading-[1.2] text-ink">Reception</h3>
            <p className="mt-2 text-sm leading-[1.6] text-ink-soft">
              {weddingOffer ? `${weddingOffer.model} — ${weddingOffer.orientation}.` : 'Per-person + staffing.'}
            </p>
            <div className="mt-4 flex flex-col items-start gap-3">
              {core ? <BandChip label={`Maui core band ${formatBand(core)}/pp — ${core.model}`} /> : null}
              <BandChip label="Per-person + staffing + minimums" />
            </div>
          </div>
          <div className="rounded-[14px] border-2 border-clay bg-white p-6 shadow-soft lg:p-8">
            <h3 className="font-display text-[1.375rem] font-medium leading-[1.2] text-ink">Week stack</h3>
            <p className="mt-2 text-sm leading-[1.6] text-ink-soft">
              Welcome dinner through recovery brunch, bundled across events and quoted as one proposal — one team,
              one invoice, no hand-offs.
            </p>
            <div className="mt-4">
              <BandChip label="Bundled across events — quoted as one proposal" />
            </div>
          </div>
          <div className="rounded-[14px] border border-stone bg-white p-6 shadow-soft lg:p-8">
            <h3 className="font-display text-[1.375rem] font-medium leading-[1.2] text-ink">
              Elopements & dinners for two
            </h3>
            <p className="mt-2 text-sm leading-[1.6] text-ink-soft">
              The whole standard, scaled to two — a fixed-price private dinner instead of a reception.
            </p>
            <div className="mt-4">{mauiPosture ? <BandChip label={`Fixed price — ${mauiPosture}`} /> : null}</div>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="mt-10">
          <p className="font-mono text-[0.6875rem] uppercase leading-5 tracking-[0.1em] text-ink-soft">
            Market context, labeled — the Hawaiʻi catering convention is per-person plus the fee stack below; the
            full fee stack lives on /pricing and every line is itemised in your proposal.
          </p>
          <div className="mt-4 space-y-3">
            {feeRows.map((row) => (
              <p key={row.label} className="flex flex-wrap items-center gap-2 text-sm leading-[1.6] text-ink">
                <span className="font-mono text-[0.6875rem] uppercase tracking-[0.1em]">{row.label}</span>
                <StatusChip kind={row.chip.startsWith('RPR') ? 'rpr' : row.chip === 'BDE' ? 'bde' : 'verified'}>
                  {row.chip}
                </StatusChip>
              </p>
            ))}
          </div>
          <Link
            to="/pricing"
            className="mt-5 inline-flex items-center text-sm font-medium text-clay underline decoration-clay/40 underline-offset-4 transition-colors hover:text-clay-deep"
          >
            See the full fee stack on /pricing →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Section 4 — What we handle ---------------- */

function WhatWeHandle() {
  const tiles = [
    { icon: UtensilsCrossed, title: 'Rentals & tabletop', text: 'Tables, linen, tabletop — coordinated and set before guests arrive.' },
    { icon: Users, title: 'Staffing & ratios', text: 'Published staffing ratios, so service is planned, not hoped for.' },
    {
      icon: Wine,
      title: 'Bar coordination',
      text: 'Bar service coordinated with licensed providers; licensing questions answered in writing.',
      rpr: true,
    },
    { icon: CloudRain, title: 'Wet-weather plans', text: 'Every event carries a written weather plan before the week begins.' },
    { icon: Handshake, title: 'Vendor coordination', text: 'We slot into your planner’s vendor team — timelines and COIs handled.' },
    { icon: CalendarRange, title: 'Multi-event logistics', text: 'Four events across venues, one culinary team, one plan.' },
  ];
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <SectionIntro
          eyebrow="Planner-friendly"
          title="What we handle."
        />
        <Reveal stagger staggerDelay={0.07} className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {tiles.map((t) => (
            <div
              key={t.title}
              className="rounded-[14px] border border-stone bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1"
            >
              <t.icon aria-hidden="true" className="h-6 w-6 text-clay" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-[1.375rem] font-medium leading-[1.2] text-ink">{t.title}</h3>
              <p className="mt-2 text-sm leading-[1.6] text-ink-soft">{t.text}</p>
              {t.rpr ? (
                <div className="mt-3">
                  <StatusChip kind="rpr">RPR</StatusChip>
                </div>
              ) : null}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Section 5 — For planners & couples ---------------- */

function PlannersCouples() {
  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-container gap-4 px-5 lg:grid-cols-2 lg:gap-6 lg:px-10">
        <Reveal className="rounded-[14px] border border-stone bg-white p-8 shadow-soft">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">Working with a planner?</p>
          <p className="mt-4 max-w-[55ch] text-[1.0625rem] leading-[1.65] text-ink-soft">
            We slot into your vendor team — COIs and timelines handled, staffing ratios published, and planner
            referrals welcomed with honest, written terms.
          </p>
        </Reveal>
        <Reveal delay={0.12} className="rounded-[14px] border border-stone bg-white p-8 shadow-soft">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">Planning from the mainland?</p>
          <p className="mt-4 max-w-[55ch] text-[1.0625rem] leading-[1.65] text-ink-soft">
            Time-zone-friendly calls (all times HST), tasting options for pre-visits, and everything — menus,
            minimums, weather plans — confirmed in writing.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Page ---------------- */

export default function WeddingCateringPage() {
  useHashScroll();
  const crumbs = [
    { label: 'Home', to: '/' },
    { label: 'Maui', to: '/maui' },
    { label: 'Wedding Catering' },
  ];

  return (
    <>
      <ServiceHero
        fullHeight
        crumbs={crumbs}
        eyebrow="myCHEF Maui — Wedding Weeks"
        title="The whole wedding week, beautifully fed."
        lede="One culinary team from the welcome dinner to the recovery brunch — private estate formats for 10 to 75 guests across Wailea, Kāʻanapali, Kapalua, Makena and Upcountry."
        image="/assets/wedding-garden.jpg"
        imageAlt="A private estate garden set for a wedding-week dinner — one culinary team across the whole week"
        chips={
          <>
            <span className="inline-flex flex-wrap items-center gap-x-2 gap-y-1.5">
              <span className="font-mono text-[0.75rem] uppercase leading-5 tracking-[0.1em] text-ivory/90">
                Maui hosts ~2,500 destination weddings a year
              </span>
              <StatusChip kind="verified" onDark>
                Official — DOH · 2024
              </StatusChip>
            </span>
            <PlainChip onDark>Peak months — Sep · Oct · May</PlainChip>
          </>
        }
        primary={{ label: 'Request a wedding quote', to: '/quote?island=maui&service=wedding' }}
        secondary={{ label: 'See the week ↓', to: '#the-week' }}
      />
      <WeddingWeek />
      <WeddingPricing />
      <WhatWeHandle />
      <PlannersCouples />
      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <ServiceFaq
            items={faqs}
            title="Asked before every wedding week."
            intro="Real pre-booking answers — anything else, ask in the quote form and we reply in writing."
          />
        </div>
      </section>
      <QuoteTeaserBand
        headline="The date goes first. Ask early."
        note="Quote opens with Maui pre-selected · All times HST"
      />
      <JsonLd
        data={serviceJsonLd({
          name: 'Wedding catering — Maui',
          description: 'The whole wedding week, beautifully fed — one culinary team from welcome dinner to recovery brunch.',
          islandName: 'Maui',
          path: '/maui/wedding-catering',
          crumbs: crumbs.map((x) => x.label),
        })}
      />
    </>
  );
}
