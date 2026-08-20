import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import Reveal from '@/components/Reveal';
import StatusChip from '@/components/StatusChip';
import { otherOffers } from '@/data/rateCard';
import { FaqSection, SectionHead } from '@/pages/islands/shared';
import type { Faq } from '@/pages/islands/shared';
import { usePageIsland } from '@/pages/islands/utils';
import { BandChip, PlainChip, SectionIntro, ZoneStrip, useHashScroll } from '@/pages/services/ServicePage';
import { InquiryHero, InquiryPageJsonLd } from '@/pages/expanded/shared';

/**
 * Kauaʻi — Vacation Chef subpage (planned `/kauai/vacation-chef`).
 * Inquiry-framed P2 page: multi-day villa chef packages (3-day anchor),
 * arrival-night dinner + provisioning, retreat & wellness full-board
 * (research sec15 Table 15.4, sec23 Table 23.4). No Request a Quote, no
 * "now serving", no LocalBusiness schema.
 */

const islandName = 'Kauaʻi';
const path = '/kauai/vacation-chef';

const crumbs = [
  { label: 'Home', to: '/' },
  { label: islandName, to: '/kauai' },
  { label: 'Vacation Chef' },
];

const dayRows = [
  {
    label: 'Morning',
    text: 'Coffee, fruit, a proper breakfast before the beach — the fridge already stocked from arrival night.',
    image: '/assets/farmers-market.jpg',
    alt: 'Island produce — avocado, citrus, greens and fish on ice — styled on a wooden table',
  },
  {
    label: 'Midday',
    text: 'Pool lunches, kids fed early, nobody watches the clock or the stove.',
    image: '/vacation-chef.jpg',
    alt: 'A chef plating a casual but refined family lunch on a villa kitchen island',
  },
  {
    label: 'Evening',
    text: 'The dressed dinner — North Shore estate or South Shore lanai, the night-in that beats the reservation.',
    image: '/assets/private-dining-room.jpg',
    alt: "Server's hands setting wine glasses on a private dining table in warm dusk light",
  },
];

const faqs: Faq[] = [
  {
    q: 'How are groceries billed across a multi-day stay?',
    a: 'At cost, always itemised. Your chef shops day-by-day, receipts are shared with you, and the grocery total is reconciled at the end of the stay — no markup, no bundled “provisioning fee.” Kauaʻi’s thin supplier bench means substitution lists and orders locked 5–7 days out, which your chef manages, not you.',
  },
  {
    q: 'What does a multi-day chef cost on Kauaʻi?',
    a: 'Multi-day service prices per person per day plus groceries at cost, inside a verified market envelope of $179–$300+ per person per day (competitor-published, labeled). Our island posture is labeled BUSINESS DECISION REQUIRED until the rate card activates at launch.',
  },
  {
    q: 'We’re staying on the far North — Haʻena side. Does multi-day work there?',
    a: 'Quote-only, with 72-hour minimum notice and the Hanalei-bridge weather clause: road closures reschedule rather than forfeit. For week-long far-North stays, the provisioning plan is built around single-road access — published up front, never discovered mid-stay.',
  },
  {
    q: 'What happens on the chef’s day off?',
    a: 'Rest days are scheduled into longer stays up front — honest capacity planning, never a surprise gap. The fridge is left stocked and prepped, and we’ll point you at the nights worth going out for.',
  },
  {
    q: 'Can a chef hold a retreat’s dietary framework all week?',
    a: 'Yes — that is the retreat format’s core: vegan, gluten-free and protocol-driven menus held across every day of the stay, so day five is as considered as day one. Dietary capability is table stakes, designed into the menu rather than substituted at the pass.',
  },
];

export default function KauaiVacationChef() {
  useHashScroll();
  const { island } = usePageIsland('kauai');
  const vacationOffer = otherOffers.find((o) => o.offer === 'Vacation chef / multi-day');

  return (
    <>
      <InquiryHero
        island={island}
        crumbs={crumbs}
        service="Vacation Chef — planned service, activates at launch"
        title="A chef for the whole Kauaʻi week."
        lede="Kauaʻi stays average over a week — so the planned format fits the trip: a 3-day anchor package, arrival-night dinner with provisioning, and full-board weeks for retreat houses. It activates when the inquiry list proves the demand; your dates are that proof."
        image="/vacation-chef.jpg"
        imageAlt="A chef plating a casual but refined family lunch on a villa kitchen island in daytime warmth"
        chips={
          <>
            {vacationOffer ? <BandChip onDark label={`Multi-day — ${vacationOffer.orientation}`} /> : null}
            <PlainChip onDark>3-day anchor · 7+ day stays</PlainChip>
            <StatusChip kind="planned" onDark>
              Planned
            </StatusChip>
          </>
        }
        primaryTo="/quote?island=kauai&service=vacation-chef"
        secondary={{ label: 'Arrival night, handled ↓', to: '#arrival-night' }}
      />

      {/* A day with your chef */}
      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <SectionIntro eyebrow="A day with your chef" title="Three meals, zero logistics." />
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

      {/* Arrival-night dinner + provisioning */}
      <section id="arrival-night" className="bg-sand py-20 lg:py-28">
        <div className="mx-auto grid w-full max-w-container items-center gap-12 px-5 lg:grid-cols-2 lg:px-10">
          <SectionIntro
            eyebrow="The first evening"
            title="Land late. Eat well. Fridge stocked."
            body="The arrival-night format is built for Kauaʻi realities: flights land tired, the South Shore is closer to the Līhuʻe base, and nobody wants a grocery run at 9 pm. Dinner is on the table the first evening and the villa is provisioned for the week — before you’ve finished unpacking."
          />
          <Reveal delay={0.1} className="overflow-hidden rounded-[14px]">
            <img
              src="/photos/island-kauai.jpg"
              alt="Garden estate outdoor table under mature trees with a linen tablecloth in soft overcast light"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Retreat & wellness full-board (dark) */}
      <section className="grain-dark relative overflow-hidden bg-ink py-20 lg:py-28">
        <div className="relative mx-auto w-full max-w-container px-5 lg:px-10">
          <SectionHead
            dark
            eyebrow="Retreats & wellness"
            title="Full-board weeks for retreat houses."
            intro="Kauaʻi’s retreat niche is real but unpriced — the incumbent holds it across four pages without publishing a number. The planned answer is priced, staffed retreat catering: per-person-per-day full board, one team across the week, dietary frameworks held from day one. Multi-day economics beat stacking single dinners across a retreat week, and we’ll say so on the quote."
          />
          <Reveal delay={0.1} className="mt-8 flex flex-wrap items-center gap-2">
            <StatusChip kind="planned" onDark>
              Planned
            </StatusChip>
            <StatusChip kind="pending" onDark>
              Incumbent niche — unpriced, labeled
            </StatusChip>
          </Reveal>
        </div>
      </section>

      {/* The Kauaʻi kitchen math */}
      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto grid w-full max-w-container gap-12 px-5 lg:grid-cols-2 lg:px-10">
          <SectionIntro
            eyebrow="The Kauaʻi kitchen math"
            title="The island costs more to cook on. Published."
            body="Shipped-in food carries a +10–15% cost posture versus Oʻahu (labeled), and the supplier bench is thin. Multi-day menus are engineered around that reality — pre-approved substitution lists, orders locked 5–7 days out, and dual-shore staffing pods that undercut incumbent travel fees on reliability."
          />
          <Reveal stagger staggerDelay={0.07}>
            {[
              { label: 'Shipped-in COGS — +10–15% posture vs Oʻahu, labeled', bde: false },
              { label: 'Substitution lists pre-approved; orders locked 5–7 days out', bde: false },
              { label: 'Dual-shore staffing pods — South Shore base + North Shore pod', bde: false },
              { label: 'Groceries at cost, receipts shared, reconciled at checkout', bde: false },
            ].map((row) => (
              <div
                key={row.label}
                className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-stone py-4"
              >
                <span className="font-mono text-[0.75rem] uppercase leading-5 tracking-[0.1em] text-ink">
                  {row.label}
                </span>
                {row.bde ? <StatusChip kind="bde">BDE</StatusChip> : null}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Zones */}
      <section className="bg-sand py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <ZoneStrip islandId="kauai" />
        </div>
      </section>

      <FaqSection
        heading="Asked about the long stay."
        intro="Multi-day answers for Kauaʻi — single dinners live on the private chef page."
        faqs={faqs}
        bg="bg-ivory"
      />

      <QuoteTeaserBand
        headline="One chef. Both shores. The whole week."
        note="Kauaʻi — inquiry stage · multi-day chef service, arrival night to checkout"
      />
      <InquiryPageJsonLd
        island={island}
        name="Vacation chef — Kauaʻi"
        description="Inquiry-stage multi-day vacation chef service planned for Kauaʻi — 3-day anchor packages, arrival-night dinner and provisioning, retreat full-board, dual-shore staffing."
        path={path}
        crumbs={crumbs.map((c) => c.label)}
      />
    </>
  );
}
