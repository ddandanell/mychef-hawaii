import { useState } from 'react';
import { Link } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import Reveal from '@/components/Reveal';
import StatusChip from '@/components/StatusChip';
import { formatOtherOffer, getOtherOffer } from '@/data/rateCard';
import { zoneMap } from '@/data/zoneMap';
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
 * Oʻahu Catering & Events (service-catering.md) — receptions, retreats,
 * corporate-adjacent gatherings and production/crew catering. Positioned on
 * year-round volume and logistics competence — no convention claims.
 */

const formats: { title: string; text: string; band?: string; image?: string }[] = [
  {
    title: 'Grazing tables',
    text: 'Abundant, styled, built for a room that wants to mingle.',
    band: '$750–$950 — market reference, labeled',
  },
  {
    title: 'Pūpū service',
    text: 'Passed and stationed small plates with real pacing.',
    band: '$5–$7 per piece · 20-pc minimums — market convention, labeled',
  },
  { title: 'Buffet', text: 'High-volume service without the cafeteria feel.' },
  { title: 'Coursed seated', text: 'A restaurant arc, off-site, to the table.' },
  {
    title: 'Live stations',
    text: 'Fire, smoke and a chef working the pass in front of your guests.',
    image: '/photos/live-fire-grill-lanai-fish.jpg',
  },
];

const eventTabs = [
  {
    label: 'Celebrations',
    pitch:
      'Birthdays, anniversaries, graduations — milestone dinners and estate receptions with restaurant pacing. Grazing tables and pūpū service carry the room; a coursed seated format carries the moment.',
    chips: ['Grazing', 'Pūpū', 'Coursed seated'],
    cta: 'Plan a celebration',
  },
  {
    label: 'Retreats',
    pitch:
      'Multi-meal retreat-week programs — breakfast through dinner held to your dietary framework and priced per day rather than per plate. One team across the week means day four is as considered as day one.',
    chips: ['Buffet', 'Coursed seated', 'Live stations'],
    cta: 'Plan a retreat week',
  },
  {
    label: 'Business',
    pitch:
      'Board dinners, office events and staff meals with itemised invoicing your finance team will actually like. COIs and freight-elevator logistics handled for tower and resort venues.',
    chips: ['Coursed seated', 'Buffet'],
    cta: 'Plan a business event',
  },
  {
    label: 'Production',
    pitch:
      'Film and photo crew catering — early call times, location flexibility, and hot meals that land even when the schedule slips. Built for Oʻahu’s year-round production calendar.',
    chips: ['Buffet', 'Live stations'],
    cta: 'Book crew catering',
  },
];

const faqs: ServiceFaqItem[] = [
  {
    q: 'What are the minimums by format?',
    a: 'Volume formats carry guest minimums — 10 to 20 depending on the format — and every minimum is published on your quote before you commit. Smaller groups are usually better served by the private chef format.',
  },
  {
    q: 'How is staffing billed?',
    a: 'Hourly, with 4–5 hour minimums, itemised as its own line — servers, sous-chefs and service leads each appear separately on the quote. Nothing is folded into a mysterious “service fee.”',
  },
  {
    q: 'Our venue needs a COI and a freight-elevator booking — is that handled?',
    a: 'Yes. Condo, tower and resort venues across Oʻahu run on certificates of insurance and elevator windows — we handle both with building management as a standard part of event logistics, before the date.',
  },
  {
    q: 'When does the calendar get tight?',
    a: 'The December holidays are the hardest dates, and January brings a corporate-hospitality spike around the Sony Open week — named as calendar awareness, not affiliation. Retreat weeks book around school breaks. Ask early and we confirm holds in writing.',
  },
  {
    q: 'What is the cancellation posture?',
    a: 'Published, not improvised — deposits, cancellation windows and the full fee stack are on /legal and restated line-by-line on every proposal.',
  },
];

/* ---------------- Section 2 — Formats ---------------- */

function Formats() {
  return (
    <section id="formats" className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <SectionIntro
          eyebrow="Formats"
          title="Five ways to feed a room."
        />
        <Reveal stagger staggerDelay={0.07} className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {formats.map((f) => (
            <div
              key={f.title}
              className="group relative flex flex-col overflow-hidden rounded-[14px] border border-stone bg-white shadow-soft transition-all duration-300 hover:-translate-y-1"
            >
              {f.image ? (
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={f.image}
                    alt="A chef working over a grill at dusk, warm ember tones against a deep neutral background"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-15"
                    style={{ background: 'radial-gradient(circle at 50% 80%, #A34A28, transparent 70%)' }}
                  />
                </div>
              ) : null}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[1.25rem] font-medium leading-[1.2] text-ink">{f.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-[1.6] text-ink-soft">{f.text}</p>
                {f.band ? (
                  <div className="mt-4">
                    <BandChip label={f.band} />
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-8 font-mono text-[0.6875rem] uppercase leading-5 tracking-[0.1em] text-ink-soft">
            Volume formats carry guest minimums (10–20 depending on format) — published on your quote.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Section 3 — Event types (Framer Motion tabs) ---------------- */

function EventTabs() {
  const [active, setActive] = useState(0);
  const tab = eventTabs[active];
  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <SectionIntro eyebrow="Event types" title="What are you feeding?" />
        <Reveal className="mt-12">
          <div role="tablist" aria-label="Event types" className="flex flex-wrap gap-x-8 gap-y-2 border-b border-stone">
            {eventTabs.map((t, i) => (
              <button
                key={t.label}
                type="button"
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={`relative pb-3 font-display text-[1.25rem] font-medium transition-colors ${
                  active === i ? 'text-ink' : 'text-ink-soft hover:text-clay'
                }`}
              >
                {t.label}
                {active === i ? (
                  <motion.span
                    layoutId="event-tab-underline"
                    className="absolute inset-x-0 -bottom-px h-0.5 bg-brass"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                ) : null}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.label}
              role="tabpanel"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="mt-8 max-w-3xl"
            >
              <p className="text-[1.0625rem] leading-[1.65] text-ink-soft">{tab.pitch}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {tab.chips.map((chip) => (
                  <PlainChip key={chip}>{chip}</PlainChip>
                ))}
              </div>
              <Link
                to="/quote?island=oahu&service=catering"
                className="mt-7 inline-flex items-center rounded-full bg-clay px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-px hover:bg-clay-deep active:scale-[0.97]"
              >
                {tab.cta}
              </Link>
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Section 4 — Staffing & logistics ---------------- */

function StaffingLogistics() {
  const staffingOffer = getOtherOffer('event-staffing');
  const rates = staffingOffer ? Array.from(formatOtherOffer(staffingOffer, 'oahu').matchAll(/\$\d+/g), (m) => m[0]) : [];
  const surchargeZone = zoneMap.oahu.zones.find((z) => z.class === 'surcharge');

  const specRows: { label: string; published: boolean }[] = [];
  if (staffingOffer && rates[0]) {
    specRows.push({ label: `Servers from ${rates[0]}/hr — ${staffingOffer.model}`, published: true });
  }
  if (staffingOffer && rates[1]) {
    specRows.push({ label: `Sous-chef & service leads from ${rates[1]}/hr`, published: true });
  }
  specRows.push({ label: 'Rentals ~$10/set/day — market reference, labeled', published: false });
  if (surchargeZone) {
    specRows.push({
      label: `${surchargeZone.name}${surchargeZone.driveTime ? ` (${surchargeZone.driveTime})` : ''} — published surcharge`,
      published: surchargeZone.feeChip === 'PUBLISHED',
    });
  }

  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-container gap-12 px-5 lg:grid-cols-2 lg:px-10">
        <SectionIntro
          eyebrow="Staffing & logistics"
          title="Events are won in the load-in."
          body="We publish staffing ratios, arrive with duplicate kit, plan freight-elevator and COI requirements for condo and resort venues, and schedule around corridor traffic. The boring parts are the job."
        />
        <Reveal stagger staggerDelay={0.07}>
          {specRows.map((row) => (
            <div
              key={row.label}
              className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-stone py-4"
            >
              <span className="font-mono text-[0.75rem] uppercase leading-5 tracking-[0.1em] text-ink">
                {row.label}
              </span>
              {row.published ? <StatusChip kind="published">Published</StatusChip> : null}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Page ---------------- */

export default function CateringPage() {
  useHashScroll();
  const crumbs = [
    { label: 'Home', to: '/' },
    { label: 'Oʻahu', to: '/oahu' },
    { label: 'Catering' },
  ];

  return (
    <>
      <ServiceHero
        crumbs={crumbs}
        eyebrow="myCHEF Oʻahu — Catering & Events"
        title="Catering that shows up like a kitchen brigade."
        lede="Staffed events for 10–75 guests across Oʻahu — estate receptions, retreat weeks, office and production catering. Published staffing ratios, itemised quotes, zone fees on the website before they’re on an invoice."
        image="/photos/svc-catering.jpg"
        imageAlt="A chef team plates identical event dishes under a tent beside a Hawaiian lawn and ocean. Concept image, not a myCHEF event."
        chips={
          <>
            <PlainChip onDark>10–75 guests</PlainChip>
            <PlainChip onDark>Grazing · Pūpū · Buffet · Coursed · Live stations</PlainChip>
          </>
        }
        primary={{ label: 'Request an event quote', to: '/quote?island=oahu&service=catering' }}
        secondary={{ label: 'Formats ↓', to: '#formats' }}
      />
      <Formats />
      <EventTabs />
      <StaffingLogistics />
      <section className="bg-sand py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <ServiceFaq
            items={faqs}
            title="Asked before every event."
            intro="Real pre-booking answers — anything else, ask in the quote form and we reply in writing."
          />
        </div>
      </section>
      <QuoteTeaserBand
        headline="Ten guests or seventy-five — the quote is itemised either way."
        note="Quote opens with Oʻahu pre-selected · All times HST"
      />
      <JsonLd
        data={serviceJsonLd({
          name: 'Catering & events — Oʻahu',
          description: 'Staffed events for 10–75 guests across Oʻahu — estate receptions, retreat weeks, office and production catering.',
          islandName: 'Oʻahu',
          path: '/oahu/catering',
          crumbs: crumbs.map((x) => x.label),
        })}
      />
    </>
  );
}
