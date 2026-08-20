import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import Reveal from '@/components/Reveal';
import StatusChip from '@/components/StatusChip';
import { otherOffers } from '@/data/rateCard';
import {
  CostChip,
  FaqSection,
  HalfPanel,
  HeroEyebrow,
  HeroFrame,
  HeroH1,
  IslandJsonLd,
  PrimaryCta,
  SectionHead,
  ServiceCard,
  ZoneModule,
} from '@/pages/islands/shared';
import LocationGrid from '@/pages/islands/LocationGrid';
import { tierBand, usePageIsland } from '@/pages/islands/utils';
import type { Faq } from '@/pages/islands/shared';

/**
 * Kauaʻi homepage — `/kauai` (island-kauai.md). P2 inquiry-framing page:
 * inquiry CTA only, no LocalBusiness schema (WebPage only), no local-entity
 * trust elements. Led by North Shore estate value + South Shore retreats,
 * with published travel-zone honesty as the differentiating trust asset.
 */

/* ---------------- Section 1 — Hero ---------------- */

function Hero() {
  const { island } = usePageIsland('kauai');
  return (
    <HeroFrame island={island}>
      <HeroEyebrow island={island} />
      <HeroH1 text="Two shores. One inquiry list." />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
      >
        <p className="mt-6 max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ivory/90 lg:text-[1.125rem]">
          Kauaʻi pairs the state's second-highest visitor wallet with its smallest, most intimate venue base —
          North Shore estates above Hanalei, South Shore retreats around Poʻipū. myCHEF opens here when the
          inquiry list proves the demand. Tell us your dates and your shore.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-2.5">
          <CostChip
            label="Indicative signature dinners"
            band={`${tierBand('kauai', 'CORE')}/person — activates at launch`}
          />
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <PrimaryCta island={island} />
          <Link
            to="/quote?island=kauai&source=concierge"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ivory/90 underline decoration-brass/60 underline-offset-4 transition-colors hover:text-white"
          >
            Concierge or villa agency? Partner intake
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    </HeroFrame>
  );
}

/* ---------------- Section 2 — Shore chooser ---------------- */

function ShoreChooser() {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <SectionHead eyebrow="Pick your shore" title="Which shore are you on?" />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <HalfPanel
              eyebrow="North Shore"
              title="Princeville · Hanalei"
              body="Estate weddings, retreat weeks and the island's signature villa inventory. Surf-season winters book early; far-North events carry a weather clause (see zones)."
              img="/assets/celebration-table.jpg"
              cta={
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to="/quote?island=kauai&shore=north"
                    className="inline-flex items-center gap-1.5 rounded-full bg-brass px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-px hover:brightness-110 active:scale-[0.97]"
                  >
                    Join the inquiry list — North Shore
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/kauai/locations/north-shore"
                    className="text-sm font-medium text-ivory/90 underline decoration-brass/60 underline-offset-4"
                  >
                    North Shore page
                  </Link>
                </div>
              }
            />
          </Reveal>
          <Reveal delay={0.12}>
            <HalfPanel
              eyebrow="South Shore"
              title="Poʻipū · Kōloa"
              body="Sunnier, steadier, closer to the Līhuʻe base — arrivals-night dinners and provisioning for week-long stays."
              img="/photos/loc-kauai-south.jpg"
              cta={
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to="/quote?island=kauai&shore=south"
                    className="inline-flex items-center gap-1.5 rounded-full bg-brass px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-px hover:brightness-110 active:scale-[0.97]"
                  >
                    Join the inquiry list — South Shore
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/kauai/locations/south-shore"
                    className="text-sm font-medium text-ivory/90 underline decoration-brass/60 underline-offset-4"
                  >
                    South Shore page
                  </Link>
                </div>
              }
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 3 — Zone map as a trust feature ---------------- */

function ZoneTrust() {
  return (
    <ZoneModule
      islandId="kauai"
      dark
      flip
      eyebrow="The zone map, published"
      intro="On Kauaʻi, the incumbent norm is a flat daily driving fee and a five-person South Shore minimum (competitor-published, labeled). We think zone pricing should be a map, not a surprise — three published zones, and the far North carries a 72-hour notice plus a Hanalei-bridge weather clause: road closures reschedule rather than forfeit."
      chipRow={
        <>
          <StatusChip kind="pending" onDark>
            Incumbent fees — competitor-labeled
          </StatusChip>
          <span className="inline-flex items-center gap-2 text-[0.8125rem] text-ivory/85">
            Our zone fees <StatusChip kind="bde" onDark>BDE</StatusChip>
          </span>
          <span className="inline-flex items-center gap-2 text-[0.8125rem] text-ivory/85">
            Bridge/weather clause{' '}
            <StatusChip kind="policy" onDark className="border-[#6E8F7F] bg-transparent text-[#9DBFB0]">
              POLICY
            </StatusChip>
          </span>
        </>
      }
    />
  );
}

/* ---------------- Section 4 — What's planned ---------------- */

function Planned() {
  const dinnerTwo = otherOffers.find((o) => o.offer.startsWith('Dinner for two'));
  const dinnerTwoKauai = dinnerTwo?.orientation.split('·')[1]?.trim() ?? '';

  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <SectionHead
          eyebrow="The launch plan"
          title="What launch looks like here."
          intro="Every service below activates when the inquiry list proves the demand — your dates are the evidence."
        />
        <Reveal stagger className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          <ServiceCard
            planned
            title="In-villa dinners"
            desc="Market bands $118–$250/pp, competitor-labeled — our posture sits at the signature tier."
            img="/assets/food-plating.jpg"
            to="/kauai/private-chef"
            band={`Our posture ${tierBand('kauai', 'CORE')}/pp`}
          />
          <ServiceCard
            planned
            title="Wedding weeks to ~75"
            desc="Estate formats, one team across the week — welcome dinner to recovery brunch."
            img="/assets/wedding-garden.jpg"
            to="/kauai/events"
            stat="1,660 Kauaʻi weddings in 2024 (official)"
          />
          <ServiceCard
            planned
            title="Arrival-night dinner + provisioning"
            desc="Land late, eat well, fridge stocked — the first evening handled before you unpack."
            img="/assets/private-dining-room.jpg"
            to="/kauai/private-chef"
          />
          <ServiceCard
            planned
            title="Retreat & wellness full-board"
            desc="Multi-day chef service for retreat houses — full-board days, one team."
            img="/vacation-chef.jpg"
            to="/kauai/vacation-chef"
          />
        </Reveal>
        {dinnerTwoKauai && (
          <Reveal delay={0.15} className="mt-8 flex flex-wrap items-center gap-2 font-mono text-[0.75rem] uppercase tracking-[0.08em] text-ink">
            <span>Dinners-for-two: {dinnerTwoKauai}</span>
            <StatusChip kind="bde">BDE</StatusChip>
          </Reveal>
        )}
      </div>
    </section>
  );
}

/* ---------------- Section 5 — Honesty block ---------------- */

function WhyInquiry() {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[720px] px-5 text-center lg:px-10">
        <Reveal>
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">The honest answer</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ink">
            Why no booking button?
          </h2>
          <p className="mx-auto mt-6 max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ink-soft lg:text-[1.125rem]">
            A booking button is a promise of a staffed, insured island team. The island's supplier bench is
            thin and shipped-in food costs more (+10–15% posture, labeled) — we launch when we can do it
            properly, not quickly.
          </p>
          <Link
            to="/trust"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-clay transition-colors hover:text-clay-deep"
          >
            Our network-wide standards
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Section 5 — FAQ ---------------- */

const faqs: Faq[] = [
  {
    q: 'North Shore or South Shore — does the season matter?',
    a: 'Yes. North Shore winters bring surf-season demand and weather exposure — those dates book early and far-North events carry a weather clause. The South Shore (Poʻipū/Kōloa) is sunnier and steadier year-round, and closer to the Līhuʻe base.',
  },
  {
    q: 'What happens if the Hanalei bridge or road closes?',
    a: 'The far-North weather clause applies: road closures reschedule rather than forfeit. We plan Haʻena events with that reality published up front, not discovered on the day.',
  },
  {
    q: 'Why the 72-hour notice for the far North?',
    a: 'Haʻena and the far North are quote-only with 72-hour minimum notice — drive time, provisioning and staffing all change beyond the bridge. The notice window is how we keep the promise realistic.',
  },
  {
    q: 'Can our concierge or villa agency refer guests?',
    a: 'Yes — agencies can refer through a published, honest process. Commission terms are set at launch and never hidden; they will be labeled BUSINESS DECISION REQUIRED until then. Use the partner intake link above.',
  },
  {
    q: 'When will you launch on Kauaʻi?',
    a: 'When the inquiry list proves the demand and the team is staffed — we publish launch news when there is an insured island team behind it, not before.',
  },
];

/* ---------------- Page ---------------- */

export default function Kauai() {
  const { island } = usePageIsland('kauai');
  return (
    <>
      <IslandJsonLd island={island} />
      <Hero />
      <ShoreChooser />
      <LocationGrid
        islandId="kauai"
        eyebrow="Two shores"
        title="Read the shore before you join the list."
        intro="Princeville/Hanalei and Poʻipū/Kōloa are different products. The pages below stay inquiry-framed — no booking button."
      />
      <ZoneTrust />
      <Planned />
      <WhyInquiry />
      <FaqSection
        heading="Asked on Kauaʻi."
        intro="Two-shore answers — the zone map above is the policy, published."
        faqs={faqs}
        bg="bg-sand"
      />
      <QuoteTeaserBand
        headline="Your dates are our business case."
        note="Kauaʻi — inquiry stage · North Shore estates · South Shore retreats"
      />
    </>
  );
}
