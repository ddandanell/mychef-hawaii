import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import Reveal from '@/components/Reveal';
import StatusChip from '@/components/StatusChip';
import { formatOtherOffer, getOtherOffer } from '@/data/rateCard';
import { FaqSection, SectionHead } from '@/pages/islands/shared';
import type { Faq } from '@/pages/islands/shared';
import { usePageIsland } from '@/pages/islands/utils';
import { BandChip, PlainChip, SectionIntro, ZoneStrip, useHashScroll } from '@/pages/services/ServicePage';
import { InquiryHero, InquiryPageJsonLd } from '@/pages/expanded/shared';

/**
 * Hawaiʻi Island (Big Island) — Vacation Chef subpage (planned
 * `/bigisland/vacation-chef`). Inquiry-framed P2 page: multi-day villa
 * residencies for the Kohala/Waimea corridor, full-stay club-tier
 * residencies referral-gated (research sec15 Table 15.3). No Request a
 * Quote, no "now serving", no LocalBusiness schema.
 */

const islandName = 'Hawaiʻi Island';
const path = '/bigisland/vacation-chef';

const crumbs = [
  { label: 'Home', to: '/' },
  { label: islandName, to: '/bigisland' },
  { label: 'Vacation Chef' },
];

const dayRows = [
  {
    label: 'Morning',
    text: 'Coffee, fruit, a proper breakfast before the coast — 100% Kona, labeled honestly or not named at all.',
    image: '/photos/hawaii-produce-fish-sourcing-still.jpg',
    alt: 'Island produce — avocado, citrus, greens and fish on ice — styled on a wooden table',
  },
  {
    label: 'Midday',
    text: 'Villa lunches between beach and pool, kids fed early, nobody cooks.',
    image: '/photos/vacation-chef.jpg',
    alt: 'A chef plating a casual but refined family lunch on a villa kitchen island',
  },
  {
    label: 'Evening',
    text: 'The dressed dinner on the terrace — the night-in that beats the resort reservation.',
    image: '/photos/plated-fish-lanai-dusk.jpg',
    alt: "Server's hands setting wine glasses on a private dining table in warm dusk light",
  },
];

const faqs: Faq[] = [
  {
    q: 'How are groceries billed across a multi-day stay?',
    a: 'At cost, always itemised. Your chef shops day-by-day, receipts are shared with you, and the grocery total is reconciled at the end of the stay — no markup, no bundled “provisioning fee.”',
  },
  {
    q: 'What does a multi-day chef cost on the Big Island?',
    a: 'Multi-day service is priced per person per day plus groceries at cost, inside a verified market envelope of $179–$300+ per person per day (competitor-published, labeled). Our Hawaiʻi Island starting price is published from $199 per person per day and activates with the west-side launch.',
  },
  {
    q: 'Can one chef hold a dietary framework for a whole week?',
    a: 'Yes — that’s the point of a residency. Menus evolve across the stay inside your framework (vegan, gluten-free, nut-aware, retreat protocols), so day five is as considered as day one, and nobody re-explains anything.',
  },
  {
    q: 'We’re staying on the east side — is a residency possible?',
    a: 'Quote-only, and deliberately so. Hilo/Volcano sits 2.5–3 hours from the west-side base, so east-side residencies are quoted with dedicated staffing and an overnight model — never squeezed around west-side jobs.',
  },
  {
    q: 'How do the club-tier residencies work — Hualālai, Kūkiʻo, Kohanaiki?',
    a: 'Full-stay residencies in the club tier are referral-gated: access runs through concierge and club channels, not a booking form, and the format requires confidentiality and multi-day staffing depth. If that’s your stay, say so in your inquiry and we route it accordingly at launch.',
  },
];

export default function BigIslandVacationChef() {
  useHashScroll();
  const { island } = usePageIsland('bigisland');
  const vacationOffer = getOtherOffer('vacation-chef');

  return (
    <>
      <InquiryHero
        island={island}
        alias="Big Island"
        crumbs={crumbs}
        service="Vacation Chef — planned service, activates at launch"
        title="A chef for your whole Kohala stay."
        lede="Breakfast through dinner across a corridor week — provisioning managed, menus that evolve across the stay, groceries at cost and always itemised. Planned for Kohala/Waimea corridor stays when the island launches; your dated inquiry is the demand evidence."
        image="/photos/vacation-chef.jpg"
        imageAlt="A chef plating a casual but refined family lunch on a villa kitchen island in daytime warmth"
        chips={
          <>
            {vacationOffer ? <BandChip onDark label={`Multi-day — ${formatOtherOffer(vacationOffer, 'bigisland')}`} /> : null}
            <PlainChip onDark>3/5/7-night formats — planned</PlainChip>
            <StatusChip kind="planned" onDark>
              Planned
            </StatusChip>
          </>
        }
        primaryTo="/quote?island=bigisland&service=vacation-chef"
        secondary={{ label: 'The Waimea supply loop ↓', to: '#supply-loop' }}
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
                <Reveal className="overflow-hidden ">
                  <img
                    src={row.image}
                    alt={row.alt}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  />
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="text-[12px] text-ink-soft">{row.label}</p>
                  <p className="mt-3 max-w-[50ch] font-display text-[1.625rem] font-medium leading-[1.3] text-ink">
                    {row.text}
                  </p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Waimea supply loop */}
      <section id="supply-loop" className="bg-sand py-20 lg:py-28">
        <div className="mx-auto grid w-full max-w-container gap-12 px-5 lg:grid-cols-2 lg:px-10">
          <SectionIntro
            eyebrow="The supply loop"
            title="Waimea makes this operational, not theatrical."
            body="Upcountry Waimea sits 25–60 minutes mauka from the coast, with three weekly farmers markets and the island’s ranch country behind them. Procurement runs are batched with corridor jobs — which is why a residency here can genuinely be built on the island’s farm-and-ranch bench instead of a brochure claim."
          />
          <Reveal stagger staggerDelay={0.07}>
            {[
              { label: 'West-side supplier depth — broadline, produce and retail backup in Kona', bde: false },
              { label: 'Waimea market runs — batched with Zone B corridor jobs', bde: false },
              { label: 'Substitution lists pre-approved — orders locked 5–7 days out', bde: false },
              { label: 'East-side stays — quote-only, overnight staffing model', bde: true },
            ].map((row) => (
              <div
                key={row.label}
                className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-stone py-4"
              >
                <span className="font-mono text-[0.75rem] uppercase leading-5 tracking-[0.1em] text-ink">
                  {row.label}
                </span>
                {row.bde ? <StatusChip kind="published">Published</StatusChip> : null}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Club-tier residencies */}
      <section className="grain-dark relative overflow-hidden bg-ink py-20 lg:py-28">
        <div className="relative mx-auto w-full max-w-container px-5 lg:px-10">
          <SectionHead
            dark
            eyebrow="The club tier"
            title="Full-stay residencies — referral-gated."
            intro="Hualālai, Kūkiʻo and Kohanaiki are among the most private addresses in the state. Full-stay chef residencies there are reached through concierge and club channels, not search — and the format demands confidentiality and real multi-day staffing depth. That gate is published now, so nobody mistakes it for fine print later."
          />
          <Reveal delay={0.1} className="mt-8 flex flex-wrap items-center gap-2">
            <StatusChip kind="planned" onDark>
              Planned
            </StatusChip>
            <StatusChip kind="inquiry" onDark>
              Referral-gated
            </StatusChip>
          </Reveal>
        </div>
      </section>

      {/* Zones */}
      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <ZoneStrip islandId="bigisland" />
        </div>
      </section>

      <FaqSection
        heading="Asked about the long stay."
        intro="Multi-day answers for Hawaiʻi Island — single dinners live on the private chef page."
        faqs={faqs}
        bg="bg-sand"
      />

      <QuoteTeaserBand
        headline="One chef. The whole corridor week."
        note="Hawaiʻi Island (Big Island) — inquiry stage · multi-day residencies, Kohala/Waimea corridor"
      />
      <InquiryPageJsonLd
        island={island}
        name="Vacation chef — Hawaiʻi Island (Big Island)"
        description="Inquiry-stage multi-day vacation chef residencies planned for the Kohala/Waimea corridor of Hawaiʻi Island — supply loop, club-tier gating and zone posture published."
        path={path}
        crumbs={crumbs.map((c) => c.label)}
      />
    </>
  );
}
