import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import Reveal from '@/components/Reveal';
import StatusChip from '@/components/StatusChip';
import { otherOffers } from '@/data/rateCard';
import { FaqSection, SectionHead, ZoneModule } from '@/pages/islands/shared';
import type { Faq } from '@/pages/islands/shared';
import { usePageIsland } from '@/pages/islands/utils';
import { BandChip, PlainChip, SectionIntro, useHashScroll } from '@/pages/services/ServicePage';
import { InquiryHero, InquiryPageJsonLd } from '@/pages/expanded/shared';

/**
 * Hawaiʻi Island (Big Island) — Catering & Events subpage (planned
 * `/bigisland/catering`). Inquiry-framed P2 page: west-side estate weddings
 * (1,311 non-resident marriages 2024; budgets $20k–$30k, labeled), event-spike
 * catering gated on capacity, Waimea farm dinners (research sec15 Table 15.3,
 * sec7 T7.2–T7.5). No Request a Quote, no "now serving", no LocalBusiness.
 */

const islandName = 'Hawaiʻi Island';
const path = '/bigisland/catering';

const crumbs = [
  { label: 'Home', to: '/' },
  { label: islandName, to: '/bigisland' },
  { label: 'Catering' },
];

const formats = [
  {
    title: 'Estate wedding weeks',
    text: 'Welcome dinner, rehearsal, reception, day-after brunch — one team across the week at Kohala-corridor estates.',
    stat: '1,311 Hawaiʻi Island weddings in 2024 (official) · peaks May / Apr / Oct',
  },
  {
    title: 'Waimea farm dinners',
    text: 'Ranch-country celebrations built on the Waimea supply loop — operational, not theatrical.',
  },
  {
    title: 'Reunions & feasts',
    text: 'Multi-generation villa gatherings and celebration dinners across the Kona–Kohala base zone.',
  },
  {
    title: 'Event-spike weeks',
    text: 'Ironman (October), Kona Coffee Festival (November), Merrie Monarch (April) — capacity-gated; simultaneous-event staffing depth is the binding constraint, and we say so.',
  },
];

const faqs: Faq[] = [
  {
    q: 'Why is there no booking button for Big Island catering?',
    a: 'The island is inquiry-stage: no staffed west-side unit exists yet, so nothing here is bookable. Dated inquiries — especially wedding dates — are the demand evidence that decides the launch sequence.',
  },
  {
    q: 'What do Big Island wedding budgets look like?',
    a: 'Typical destination-wedding budgets on the island run $20,000–$30,000 including the catering share (market reference, labeled). Estate venues in coffee country list from roughly $15,376 for 50 guests (directory rate, labeled). Our own event pricing publishes with the rate card at launch, labeled BUSINESS DECISION REQUIRED until then.',
  },
  {
    q: 'Can you cater an east-side wedding — Hilo or Volcano?',
    a: 'Quote-only, on purpose. The east side is 2.5–3 hours from the west-side base, so events there are quoted with dedicated staffing and an overnight model — never squeezed into a west-side day. Merrie Monarch season is exactly when that honesty matters.',
  },
  {
    q: 'How is alcohol handled at events?',
    a: 'Client-supplied alcohol with licensed staffing is the default posture statewide; the neighbor-island liquor-catering rules are marked REQUIRES PROFESSIONAL REVIEW until counsel confirms. We publish that rather than improvise it.',
  },
  {
    q: 'What happens around Ironman or the coffee festival?',
    a: 'Event-spike catering is capacity-gated: those weeks compress corridor availability and staffing depth is the binding constraint. Flag event-week dates early in your inquiry — feasibility is confirmed in writing, and we never publish fabricated availability calendars.',
  },
];

export default function BigIslandCatering() {
  useHashScroll();
  const { island } = usePageIsland('bigisland');
  const staffingOffer = otherOffers.find((o) => o.offer === 'Event staffing');

  return (
    <>
      <InquiryHero
        island={island}
        alias="Big Island"
        crumbs={crumbs}
        service="Catering & Events — planned service, activates at launch"
        title="Estate weddings and event weeks, west-side first."
        lede="Staffed catering planned for Kohala-corridor estates and venues: wedding-week formats, reunion feasts and Waimea farm dinners — with the island’s event-spike weeks flagged honestly instead of overpromised. Dated inquiries decide when this switches on."
        image="/assets/wedding-garden.jpg"
        imageAlt="Long wedding reception table in a private estate garden with ivory florals and brass candlelight"
        chips={
          <>
            <PlainChip onDark>1,311 weddings in 2024 (official)</PlainChip>
            <BandChip onDark label="Typical budgets $20k–$30k incl. catering — market reference, labeled" />
            <StatusChip kind="planned" onDark>
              Planned
            </StatusChip>
          </>
        }
        primaryTo="/quote?island=bigisland&service=catering"
        secondary={{ label: 'Formats & logistics ↓', to: '#formats' }}
      />

      {/* Formats */}
      <section id="formats" className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <SectionIntro
            eyebrow="What’s planned"
            title="Four formats, one corridor."
            body="Every format below activates with the Kona–Kohala launch — and every one of them is scoped to what a west-side team can genuinely deliver."
          />
          <Reveal stagger staggerDelay={0.07} className="mt-12 grid gap-4 md:grid-cols-2 lg:gap-6">
            {formats.map((f) => (
              <div
                key={f.title}
                className="rounded-[14px] border border-stone bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-[1.375rem] font-medium leading-[1.2] text-ink">{f.title}</h3>
                  <StatusChip kind="planned">Planned</StatusChip>
                </div>
                <p className="mt-3 text-[1.0625rem] leading-[1.65] text-ink-soft">{f.text}</p>
                {f.stat ? (
                  <p className="mt-4 font-mono text-[0.6875rem] uppercase leading-4 tracking-[0.08em] text-ink-soft">
                    {f.stat}
                  </p>
                ) : null}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Venue & staffing logic */}
      <section className="bg-sand py-20 lg:py-28">
        <div className="mx-auto grid w-full max-w-container gap-12 px-5 lg:grid-cols-2 lg:px-10">
          <SectionIntro
            eyebrow="Venue & staffing logic"
            title="Events are won in the load-in."
            body="West-side estates and registered venues only — partner properties must be registered, resort-zoned or NUC-holding. Chef-plus-assistant teams lead every event, with servers and bartenders as itemised add-ons, and commissary access exists in Kona at published rates when a venue kitchen falls short."
          />
          <Reveal stagger staggerDelay={0.07}>
            {[
              staffingOffer
                ? { label: `Staffing — ${staffingOffer.orientation}`, bde: true }
                : { label: 'Staffing — hourly, itemised on the quote', bde: true },
              { label: 'Commissary access — Kona kitchen from $37.50/hr (directory rate, labeled)', bde: false },
              { label: 'Estate venues from ~$15,376 / 50 guests — directory rate, labeled', bde: false },
              { label: 'Alcohol — client-supplied with licensed staffing, county review pending', bde: false },
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
            <div className="pt-4">
              <StatusChip kind="rpr">RPR — liquor catering, county review</StatusChip>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Event-spike honesty (dark) */}
      <section className="grain-dark relative overflow-hidden bg-ink py-20 lg:py-28">
        <div className="relative mx-auto w-full max-w-container px-5 lg:px-10">
          <SectionHead
            dark
            eyebrow="The honest constraint"
            title="Event weeks are capacity-gated — published, not fine print."
            intro="Ironman in October, the Kona Coffee Cultural Festival in November, Merrie Monarch in April: verified demand spikes where simultaneous-event staffing depth is the binding constraint. We plan around these weeks and confirm feasibility in writing — the alternative is discovering the limit on your event night, which is the one thing this page exists to prevent."
          />
          <Reveal delay={0.1} className="mt-8 flex flex-wrap items-center gap-2">
            <StatusChip kind="policy" onDark className="border-[#6E8F7F] bg-transparent text-[#9DBFB0]">
              Capacity gate — published
            </StatusChip>
            <StatusChip kind="planned" onDark>
              Gated — staffing depth
            </StatusChip>
          </Reveal>
        </div>
      </section>

      {/* Zones */}
      <ZoneModule
        islandId="bigisland"
        reverse
        eyebrow="Coverage — honestly zoned"
        intro="Catering follows the same published zones as every other island service: the corridor is the base, Waimea and Kaʻū carry published surcharges, and the east side is quote-only with dedicated staffing. Zoned travel pricing is market-validated here — an incumbent Kona caterer publishes $100–$500 location-based delivery fees (competitor-published, labeled)."
      />

      <FaqSection
        heading="Asked before every event."
        intro="Inquiry-stage answers for Big Island events — anything else, ask in the inquiry form and we reply in writing."
        faqs={faqs}
        bg="bg-ivory"
      />

      <QuoteTeaserBand
        headline="Your wedding date is a launch signal."
        note="Hawaiʻi Island (Big Island) — inquiry stage · estate weddings & event catering, west side first"
      />
      <InquiryPageJsonLd
        island={island}
        name="Catering & events — Hawaiʻi Island (Big Island)"
        description="Inquiry-stage estate wedding and event catering planned for the Kona–Kohala corridor of Hawaiʻi Island — formats, venue logic, staffing posture and zones published."
        path={path}
        crumbs={crumbs.map((c) => c.label)}
      />
    </>
  );
}
