import { Link } from 'react-router';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import Reveal from '@/components/Reveal';
import StatusChip from '@/components/StatusChip';
import { formatOtherOffer, getOtherOffer } from '@/data/rateCard';
import { FaqSection, SectionHead, ZoneModule } from '@/pages/islands/shared';
import type { Faq } from '@/pages/islands/shared';
import { usePageIsland } from '@/pages/islands/utils';
import { BandChip, PlainChip, SectionIntro, useHashScroll } from '@/pages/services/ServicePage';
import { InquiryCta, InquiryHero, InquiryPageJsonLd } from '@/pages/expanded/shared';

/**
 * Kauaʻi — Events subpage (planned `/kauai/events`). Inquiry-framed P2 page:
 * staffed wedding & event catering for the structurally unserved 15–75-guest
 * band (incumbents cap at 15, resorts absorb 75+), wedding-week stack,
 * retreat catering, published flood/bridge limits and the concierge referral
 * gate (research sec15 Table 15.4, sec23 Table 23.4). No Request a Quote, no
 * "now serving", no LocalBusiness schema.
 */

const islandName = 'Kauaʻi';
const path = '/kauai/events';

const crumbs = [
  { label: 'Home', to: '/' },
  { label: islandName, to: '/kauai' },
  { label: 'Events' },
];

const segments = [
  {
    title: 'Elopements · 2–10',
    text: 'Chef-led celebrations at villa and estate scale — the fixed-price dinner-for-two architecture applies.',
  },
  {
    title: 'Intimate · 10–30',
    text: 'Estate dinners and welcome evenings with restaurant pacing — above the incumbent 15-guest ceiling, fully staffed.',
  },
  {
    title: 'Mid-size · 30–75',
    text: 'The island’s unserved band: below resort buyouts, beyond any local chef’s cap. Reception, rehearsal and day-after brunch by one team.',
  },
];

const faqs: Faq[] = [
  {
    q: 'Why the 15–75 guest focus?',
    a: 'Because that band is structurally unserved on Kauaʻi: the local chef leader caps at 15 guests and the resorts absorb 75-plus. A fully staffed, dual-node chef company serving 15–75 guests does not exist on the island — that gap is the flagship planned service, and 1,660 non-resident marriages in 2024 (official) sit mostly inside it.',
  },
  {
    q: 'What happens if the Hanalei bridge or road closes before our event?',
    a: 'The far-North weather clause applies: road closures reschedule rather than forfeit. Service west of the Hanalei bridge during flood advisories is a published no — single-road access and flood risk make it an honest service-area limit, and we treat that limit as a trust asset, not fine print.',
  },
  {
    q: 'How are staffing and extras billed for events?',
    a: 'Hourly with 4–5 hour minimums, itemised as their own lines — servers, sous-chefs and service leads each appear separately on the quote ($55/hr server, $75/hr sous-chef retail convention, labeled). Nothing is folded into a mysterious “service fee.”',
  },
  {
    q: 'Can our concierge, planner or villa agency refer us?',
    a: 'Yes — and that channel is the point: Kauaʻi’s highest-value bookings are referred, not searched, so the launch itself is gated on referral agreements. Agencies refer through a published, honest process; commission terms are set at launch and never hidden. Use the partner intake below.',
  },
  {
    q: 'When does Kauaʻi event catering actually launch?',
    a: 'When two things are true: the inquiry list proves the demand and referral agreements are signed. We publish launch news when there is a staffed, insured island team behind it — not before.',
  },
];

export default function KauaiEvents() {
  useHashScroll();
  const { island } = usePageIsland('kauai');
  const staffingOffer = getOtherOffer('event-staffing');

  return (
    <>
      <InquiryHero
        island={island}
        crumbs={crumbs}
        service="Weddings & Events — planned service, activates at launch"
        title="Fifteen to seventy-five guests. Kauaʻi’s unserved band."
        lede="The local chef ceiling is 15 guests; the resorts start making sense at 75. Between them sits the island’s real event market — estate weddings, retreat weeks, celebration feasts — with nobody staffed to serve it. That gap is the planned flagship, and your dated inquiry is the evidence that launches it."
        image="/photos/maui-wedding-long-table-banyan-dusk.jpg"
        imageAlt="A wedding-week long table under a banyan at dusk. Campaign still, not a documented event."
        chips={
          <>
            <PlainChip onDark>1,660 Kauaʻi weddings in 2024 (official) · peaks Sep / Oct / May</PlainChip>
            <PlainChip onDark>15–75 guests — flagship band</PlainChip>
            <StatusChip kind="planned" onDark>
              Planned
            </StatusChip>
          </>
        }
        primaryTo="/quote?island=kauai&service=events"
        secondary={{ label: 'The honest limits ↓', to: '#limits' }}
      />

      {/* Wedding-week stack */}
      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <SectionIntro
            eyebrow="The wedding week"
            title="One team, welcome dinner to recovery brunch."
            body="Kauaʻi’s wedding planner segmentation — elopement, intimate, mid-size — maps exactly onto the 2–75 guest sweet spot this service is planned around. Every format below activates at launch, with staffing itemised on the quote."
          />
          <Reveal stagger staggerDelay={0.07} className="mt-12 grid gap-4 md:grid-cols-3 lg:gap-6">
            {segments.map((s) => (
              <div
                key={s.title}
                className="rounded-[14px] border border-stone bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-[1.375rem] font-medium leading-[1.2] text-ink">{s.title}</h3>
                  <StatusChip kind="planned">Planned</StatusChip>
                </div>
                <p className="mt-3 text-[1.0625rem] leading-[1.65] text-ink-soft">{s.text}</p>
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-2">
              {staffingOffer ? <BandChip label={`Staffing — ${formatOtherOffer(staffingOffer, 'kauai')}`} /> : null}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Retreat & wellness catering */}
      <section className="bg-sand py-20 lg:py-28">
        <div className="mx-auto grid w-full max-w-container items-center gap-12 px-5 lg:grid-cols-2 lg:px-10">
          <SectionIntro
            eyebrow="Retreats & wellness"
            title="Priced, staffed retreat catering."
            body="The island’s retreat niche is held by an incumbent that publishes no prices across four pages. The planned answer: per-person-per-day retreat catering with dietary frameworks (vegan, gluten-free, protocol-driven) held across the whole stay — priced on the quote, staffed on the day."
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

      {/* The honest limits (dark) */}
      <section id="limits" className="grain-dark relative overflow-hidden bg-ink py-20 lg:py-28">
        <div className="relative mx-auto w-full max-w-container px-5 lg:px-10">
          <SectionHead
            dark
            eyebrow="The honest limits"
            title="One ring road. Published limits, not fine print."
            intro="Princeville to Poʻipū is over an hour on a good day, and west of the Hanalei bridge there is one road in. So: no flat island-wide coverage claim, ever; Haʻena and the far North are quote-only with 72-hour notice; and during flood advisories, service west of the bridge is a published no. Road closures reschedule rather than forfeit — a trust asset, printed where you can see it."
          />
          <Reveal delay={0.1} className="mt-8 flex flex-wrap items-center gap-2">
            <StatusChip kind="policy" onDark className="border-[#6E8F7F] bg-transparent text-[#9DBFB0]">
              Bridge/weather clause — policy
            </StatusChip>
            <StatusChip kind="pending" onDark>
              No flat island-wide coverage — red line
            </StatusChip>
          </Reveal>
        </div>
      </section>

      {/* Referral gate */}
      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[720px] px-5 text-center lg:px-10">
          <Reveal>
            <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">Concierge & planners</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ink">
              Referred, not searched.
            </h2>
            <p className="mx-auto mt-6 max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ink-soft lg:text-[1.125rem]">
              Kauaʻi’s highest-value bookings arrive through concierges, planners and villa agencies — which is why
              the launch is gated on signed referral agreements. Agencies refer through a published, honest
              process: commission terms are set at launch and never hidden.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <InquiryCta to="/quote?island=kauai&source=concierge">Partner intake — concierge & agencies</InquiryCta>
              <Link
                to="/trust"
                className="text-sm font-medium text-clay underline decoration-clay/40 underline-offset-4 transition-colors hover:text-clay-deep"
              >
                Our network-wide standards →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Zones */}
      <ZoneModule
        islandId="kauai"
        eyebrow="Coverage — honestly zoned"
        intro="Events follow the published zone map: Līhuʻe and Kapaʻa are the included base, Princeville/Hanalei and Poʻipū carry a published surcharge, and Haʻena and the far North are quote-only with 72-hour notice. The incumbent norm — a flat $50–$75/day driving fee and a five-person South Shore minimum — is competitor-published and labeled; our zone fees are published on the rate card."
      />

      <FaqSection
        heading="Asked before every event."
        intro="Inquiry-stage answers for Kauaʻi events — the limits above are the policy, published."
        faqs={faqs}
        bg="bg-sand"
      />

      <QuoteTeaserBand
        headline="Your guest count is our launch case."
        note="Kauaʻi — inquiry stage · staffed weddings & events, 15–75 guests"
      />
      <InquiryPageJsonLd
        island={island}
        name="Weddings & events — Kauaʻi"
        description="Inquiry-stage staffed wedding and event catering planned for Kauaʻi's unserved 15–75 guest band — wedding-week stack, retreat catering, published zone and flood limits, concierge referral gate."
        path={path}
        crumbs={crumbs.map((c) => c.label)}
      />
    </>
  );
}
