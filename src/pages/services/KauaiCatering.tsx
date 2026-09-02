import { Link } from 'react-router';
import { DualCtaLight } from '@/components/DualCta';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import Reveal from '@/components/Reveal';
import { SEARCH_VOLUMES } from '@/data/offers';
import { photos } from '@/data/photos';
import {
  FEE_DISCLOSURE,
  STAFFING,
  formatFrom,
  formatOtherOffer,
  getOtherOffer,
  getTiers,
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
} from '@/pages/services/ServicePage';
import type { ServiceFaqItem } from '@/pages/services/ServicePage';

/**
 * Kauai catering — equal-volume money page (210/mo, same as private chef Kauai).
 * Menu, prices, wedding, buffet vs plated. Not a stub.
 */

const formats = [
  {
    title: 'Buffet',
    text: 'High-volume service for a room that wants to move. Stations stay hot; guests serve themselves. Best from about 20 guests up.',
    when: 'Retreats · family weeks · informal receptions',
  },
  {
    title: 'Plated (coursed seated)',
    text: 'A restaurant arc, off-site, to the table. Courses paced. Needs more servers than a buffet for the same headcount.',
    when: 'Rehearsal dinners · seated celebrations',
  },
  {
    title: 'Family-style',
    text: 'Shared platters down the table — the usual Kauaʻi estate night when the guest list is 10–20.',
    when: 'Welcome dinners · villa celebrations',
  },
  {
    title: 'Grazing & pūpū',
    text: 'Styled boards and passed small plates. Grazing tables $750–$950 (market reference, labeled). Pūpū $5–$7 per piece, 20-pc minimums.',
    when: 'Cocktail hour · terrace welcome',
  },
];

const sampleMenu = [
  { course: 'Boards', name: 'Ahi poke, local crudités, mango, kukui', note: 'Grazing start — or skip straight to seated.' },
  { course: 'First', name: 'Kanpachi crudo or chilled cucumber-crab', note: 'Plated if the room sits; stationed if it mingles.' },
  { course: 'Main — buffet or plated', name: 'Wood-grilled catch, coconut rice, island greens', note: 'Plus a ranch or veg plate so the table is not one fish.' },
  { course: 'Close', name: 'Lilikoi cheesecake or coconut haupia', note: 'Or a fruit board if the night should stay light.' },
];

const faqs: ServiceFaqItem[] = [
  {
    q: 'How much is Kauai catering?',
    a: 'CORE food from $150–$250 per person — the same Maui-class band as a private-chef dinner. Kauai wedding catering from $175/pp plus staffing ($55/hr server, $75/hr sous-chef, 4–5 hour minimums). 20% service and Hawaiʻi GET up to 4.712% sit on their own lines, once. Written quote before a deposit.',
  },
  {
    q: 'Buffet vs plated — which should we book?',
    a: 'Buffet is the volume format: fewer servers, guests move. Plated is the restaurant arc: more staffing, a paced room. Family-style sits between them. The food band does not change; the staffing line does. We will tell you which fits the house.',
  },
  {
    q: 'Do you publish a Kauai catering menu?',
    a: 'A sample estate menu is on this page. Your written menu is designed for that house, that week, those allergies — not a laminated carte. WhatsApp the guest list and we send two directions in 48 hours.',
  },
  {
    q: 'Can you do Kauai wedding catering?',
    a: 'Yes. Estate formats to about 75 guests in Princeville, Poʻipū and Hanalei. Welcome dinner, rehearsal, reception and recovery brunch as separate lines — one culinary team. See /weddings for the week stack.',
  },
  {
    q: 'Private chef or catering?',
    a: 'A villa dinner for the house is private chef Kauai. Ten to seventy-five guests with staffing is Kauai catering. Same company, same rate card, different shape. Both search at 210/mo.',
  },
  {
    q: 'Princeville, Poʻipū or Hanalei — does the price change?',
    a: 'Menu bands are the Kauaʻi card. Drive time is a published zone line. Far-North (Hāʻena) needs 72-hour notice and a weather/road clause — we reschedule rather than forfeit.',
  },
];

const neighborhoods = [
  { slug: 'princeville', name: 'Princeville', line: 'North Shore estates' },
  { slug: 'poipu', name: 'Poʻipū', line: 'South Shore retreats' },
  { slug: 'hanalei', name: 'Hanalei', line: 'Valley + weather honesty' },
];

export default function KauaiCatering() {
  useHashScroll();
  const { island, href } = usePageIsland('kauai');
  const core = getTiers('kauai').find((t) => t.tier === 'CORE');
  const wedding = getOtherOffer('wedding');
  const crumbs = [
    { label: 'Home', to: href('/') },
    { label: 'Kauaʻi', to: href('/') },
    { label: 'Catering' },
  ];

  return (
    <>
      <ServiceHero
        crumbs={crumbs}
        eyebrow={`Kauai catering · ${SEARCH_VOLUMES['kauai catering']}/mo — equal to private chef Kauai`}
        title="Kauai catering"
        lede="A real money page: published prices, a sample menu, buffet vs plated, wedding catering. Princeville, Poʻipū, Hanalei. We shop, cook, staff and clean. WhatsApp for a written quote."
        image={photos.catering.file}
        imageAlt={photos.catering.alt}
        island="kauai"
        whatsappIntent="Kauai catering"
        chips={
          <>
            <PlainChip onDark>10–75 guests</PlainChip>
            <BandChip label={`Food ${core ? formatFrom(core.band[0]) : 'from $150'}/pp`} onDark />
            <PlainChip onDark>Buffet · plated · wedding</PlainChip>
          </>
        }
        primary={{ label: 'Get a catering quote', to: '/quote?island=kauai&service=catering' }}
        secondary={{ label: 'Prices & menu ↓', to: '#prices' }}
      />

      <section id="formats" className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <SectionIntro
            eyebrow="Buffet vs plated"
            title="Pick the room, then the format."
            body="The food band is the Kauaʻi CORE card. Staffing changes with the format. We will not upsell plated if a buffet feeds the night better."
          />
          <Reveal stagger staggerDelay={0.07} className="mt-12 grid gap-4 md:grid-cols-2 lg:gap-6">
            {formats.map((f) => (
              <article key={f.title} className="rounded-[14px] border border-stone bg-white p-6 shadow-soft">
                <h3 className="font-display text-[1.375rem] font-medium text-ink">{f.title}</h3>
                <p className="mt-3 text-[1.0625rem] leading-[1.65] text-ink-soft">{f.text}</p>
                <p className="mt-4 font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-clay">{f.when}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="prices" className="bg-sand py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <SectionIntro
            eyebrow="Kauai catering prices"
            title="Published starting prices. Quote in writing."
            body={FEE_DISCLOSURE}
          />
          <Reveal stagger className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="rounded-[18px] border-2 border-clay bg-white p-7 shadow-soft">
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-soft">Food — CORE</p>
              <p className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink">
                {core ? `$${core.band[0]}–$${core.band[1]}` : '$150–$250'}
                <span className="ml-2 font-sans text-base font-normal text-ink-soft">/ person</span>
              </p>
              <p className="mt-3 text-sm text-ink-soft">
                Menu design, shopping, cooking, service, cleanup. Same band as private chef Kauai.
              </p>
            </article>
            <article className="rounded-[18px] border border-stone bg-white p-7 shadow-soft">
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-soft">
                Kauai wedding catering
              </p>
              <p className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink">
                {formatFrom(wedding.byIsland.kauai.from)}
                <span className="ml-2 font-sans text-base font-normal text-ink-soft">/ person + staffing</span>
              </p>
              <p className="mt-3 text-sm text-ink-soft">{formatOtherOffer(wedding, 'kauai')}</p>
              <Link to={href('/weddings')} className="mt-4 inline-flex text-sm font-medium text-clay underline underline-offset-4">
                Wedding week →
              </Link>
            </article>
            <article className="rounded-[18px] border border-stone bg-white p-7 shadow-soft">
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-soft">Staffing</p>
              <p className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink">
                ${STAFFING.serverHourly}
                <span className="ml-2 font-sans text-base font-normal text-ink-soft">/ hr server</span>
              </p>
              <p className="mt-3 text-sm text-ink-soft">
                Sous-chef ${STAFFING.sousHourly}/hr · {STAFFING.minimumHours}–5 hour minimums · itemised, never folded into a mystery fee.
              </p>
            </article>
          </Reveal>
          <p className="mt-8 max-w-[65ch] text-sm text-ink-soft">
            Groceries for multi-day retreat catering are billed at cost with receipts. Drinks are BYO or the mobile bar
            on a separate line. 50% deposit locks the date.
          </p>
          <div className="mt-8">
            <DualCtaLight island="kauai" intent="Kauai catering prices" service="catering" />
          </div>
        </div>
      </section>

      <section id="menu" className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto w-full max-w-3xl px-5 lg:px-10">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">Kauai catering menu</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] text-ink">
            A sample estate menu
          </h2>
          <p className="mt-4 text-[1.0625rem] leading-[1.65] text-ink-soft">
            Built for a Princeville lawn or a Poʻipū kitchen — not a laminated carte. You edit until it is yours.
          </p>
          <ol className="mt-12 space-y-8">
            {sampleMenu.map((c) => (
              <li key={c.course} className="border-t border-stone pt-6">
                <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-clay">{c.course}</p>
                <h3 className="mt-1 font-display text-[1.625rem] font-medium leading-[1.2] text-ink">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-sand py-20 lg:py-28">
        <div className="mx-auto grid w-full max-w-container items-center gap-12 px-5 lg:grid-cols-2 lg:px-10">
          <SectionIntro
            eyebrow="Kauai wedding catering"
            title="Welcome dinner to recovery brunch."
            body="One culinary team for the week. Estate formats to about 75 guests. Reception from $175/pp plus staffing. Wet-weather plan in writing. Far-North inherits the Hanalei-bridge clause."
          />
          <Reveal>
            <img
              src={photos.wedding.file}
              alt={photos.wedding.alt}
              className="aspect-[4/3] w-full rounded-[14px] object-cover shadow-soft"
            />
            <Link to={href('/weddings')} className="mt-5 inline-flex text-sm font-medium text-clay underline underline-offset-4">
              Full wedding-week page →
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <SectionIntro
            eyebrow="Where we cater"
            title="Princeville, Poʻipū, Hanalei."
            body="Private chef pages for the villa dinner. This page for the staffed room. Same host, same team."
          />
          <Reveal stagger className="mt-12 grid gap-4 md:grid-cols-3">
            {neighborhoods.map((n) => (
              <Link
                key={n.slug}
                to={href(`/${n.slug}`)}
                className="rounded-[14px] border border-stone bg-white p-6 shadow-soft transition-colors hover:border-clay/50"
              >
                <h3 className="font-display text-[1.375rem] font-medium text-ink">Private chef {n.name}</h3>
                <p className="mt-2 text-sm text-ink-soft">{n.line}</p>
                <p className="mt-4 text-sm font-medium text-clay">Open the neighborhood →</p>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-sand py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <ServiceFaq
            items={faqs}
            title="Kauai catering prices, menu, wedding."
            intro="Equal search volume to private chef Kauai. Real answers — then WhatsApp."
          />
        </div>
      </section>

      <QuoteTeaserBand
        headline="Kauai catering — from $150/pp. Quote in writing."
        note="WhatsApp or quote · Kauaʻi · typical reply in Hawaii business hours"
      />
      <JsonLd
        data={serviceJsonLd({
          name: 'Kauai catering',
          description:
            'Kauai catering from $150/pp. Buffet or plated, wedding catering, published menu and prices in Princeville, Poʻipū and Hanalei.',
          islandName: island.name,
          path: '/kauai/catering',
          crumbs: crumbs.map((c) => c.label),
        })}
      />
    </>
  );
}
