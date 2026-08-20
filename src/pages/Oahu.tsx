import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import Reveal from '@/components/Reveal';
import StatusChip from '@/components/StatusChip';
import WordMask from '@/components/WordMask';
import { getTiers, otherOffers } from '@/data/rateCard';
import { proofRegister } from '@/data/proofRegister';
import {
  CostChip,
  FaqSection,
  HalfPanel,
  HeroEyebrow,
  HeroFrame,
  IslandJsonLd,
  PrimaryCta,
  SectionHead,
  ServiceCard,
  TrustStrip,
  ZoneModule,
} from '@/pages/islands/shared';
import LocationGrid from '@/pages/islands/LocationGrid';
import { usePageIsland } from '@/pages/islands/utils';
import type { Faq, TrustRow } from '@/pages/islands/shared';

/**
 * Oʻahu homepage — `/oahu` (island-oahu.md). Live state: Request a Quote.
 * Dual-market thesis: resort-zone villa dining for visitors plus a resident
 * kamaʻāina line — frequency, not yield. Deliberately does not lead with
 * conventions/MICE.
 */

/* ---------------- Section 1 — Hero (dual persona) ---------------- */

function Hero() {
  const { island, href } = usePageIsland('oahu');
  const tiers = getTiers('oahu');
  const entry = tiers.find((t) => t.tier === 'ENTRY');
  const core = tiers.find((t) => t.tier === 'CORE');
  const entryBand = entry ? `$${entry.band[0]}–$${entry.band[1]}` : '';
  const coreBand = core ? `$${core.band[0]}–$${core.band[1]}` : '';

  return (
    <HeroFrame island={island}>
      <HeroEyebrow island={island} />
      <h1 className="mt-5 font-display text-[clamp(2.25rem,5.5vw,4rem)] font-medium leading-[1.08] tracking-[-0.02em] text-white">
        <span className="block">
          <WordMask text="Your villa, your celebration." delay={0.2} />
        </span>
        <motion.span
          aria-hidden="true"
          className="my-4 block h-px w-24 origin-left bg-brass"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        />
        <span className="block text-ivory/95">
          <WordMask text="Your household, your weekly chef." delay={0.55} />
        </span>
      </h1>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.95 }}
      >
        <p className="mt-6 max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ivory/90 lg:text-[1.125rem]">
          Private chef service across Waikīkī, Kahala and the Gold Coast, Ko Olina, Kailua/Lanikai and the
          North Shore — for visitors' celebration weeks and residents' Tuesday nights alike.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-2.5">
          <CostChip label="Signature dinners" band={`${coreBand}/person`} index={0} />
          <CostChip label="Entry set menus" band={`${entryBand}/pp (8+)`} index={1} />
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <PrimaryCta island={island} />
          <Link
            to={href('/vacation-chef')}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ivory/90 underline decoration-brass/60 underline-offset-4 transition-colors hover:text-white"
          >
            Weekly household service
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    </HeroFrame>
  );
}

/* ---------------- Section 2 — Two doors (visitor / resident) ---------------- */

function TwoDoors() {
  const { href } = usePageIsland('oahu');
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <SectionHead eyebrow="Two doors, one standard" title="Visiting Oʻahu — or living on it?" />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <HalfPanel
              eyebrow="Visiting?"
              title="Celebration weeks, fully cheffed."
              body="Celebration dinners, multi-day villa service and wedding weekends in the resort corridors. Arrive to a stocked fridge and a chef who knows your dates."
              img="/photos/svc-private-chef-oahu.jpg"
              cta={
                <Link
                  to={href('/private-chef')}
                  className="inline-flex items-center gap-1.5 rounded-full bg-clay px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-px hover:bg-clay-deep active:scale-[0.97]"
                >
                  Plan your evenings
                  <ArrowRight className="h-4 w-4" />
                </Link>
              }
            />
          </Reveal>
          <Reveal delay={0.12}>
            <HalfPanel
              eyebrow="Live here?"
              title="The kamaʻāina line."
              body="Weekly meal prep and standing chef service for households from Kahala to Hawaiʻi Kai. Fixed weekly fee + groceries at cost."
              img="/photos/vacation-chef.jpg"
              chips={<StatusChip kind="bde" onDark>BDE</StatusChip>}
              cta={
                <Link
                  to={href('/vacation-chef')}
                  className="inline-flex items-center gap-1.5 rounded-full border border-ivory/70 px-5 py-2.5 text-sm font-medium text-ivory transition-all duration-200 hover:-translate-y-px hover:border-ivory hover:bg-white/10 active:scale-[0.97]"
                >
                  See household service
                  <ArrowRight className="h-4 w-4" />
                </Link>
              }
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 3 — Service cards ---------------- */

function Services() {
  const { href } = usePageIsland('oahu');
  const tiers = getTiers('oahu');
  const entry = tiers.find((t) => t.tier === 'ENTRY');
  const core = tiers.find((t) => t.tier === 'CORE');
  const tierSpan = entry && core ? `$${entry.band[0]}–$${core.band[1]}` : '';
  const weekly = otherOffers.find((o) => o.offer.startsWith('Weekly meal prep'));

  return (
    <section className="bg-ivory pb-20 lg:pb-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <SectionHead eyebrow="Services on Oʻahu" title="Four ways we cook here." />
        <Reveal stagger className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          <ServiceCard
            title="Celebration & villa dinners"
            desc="Multi-course in-villa dinners, by tier — from set menus to the chef's-table halo."
            img="/photos/svc-private-chef-oahu.jpg"
            to={href('/private-chef')}
            band={`${tierSpan}/pp by tier`}
          />
          <ServiceCard
            title="Multi-day resort-villa packages"
            desc="3–7 day stays, Ko Olina to the North Shore — provisioning, full-board days, one team."
            img="/photos/vacation-chef.jpg"
            to={href('/vacation-chef')}
          />
          <ServiceCard
            title="Kamaʻāina weekly meals"
            desc="Fixed weekly fee + groceries at cost — a standing chef night for resident households."
            img="/assets/farmers-market.jpg"
            to={href('/vacation-chef#weekly')}
            band={weekly ? weekly.orientation : ''}
          />
          <ServiceCard
            title="Catering & events"
            desc="Receptions, retreats, film and production crews, 10–75 guests."
            img="/craft-fire.jpg"
            to={href('/catering')}
          />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Section 5 — Trust strip ---------------- */

function OahuTrust() {
  const { island } = usePageIsland('oahu');
  const rows: TrustRow[] = [
    { claim: proofRegister[1].claim, label: proofRegister[1].label, kind: 'not-available' },
    { claim: proofRegister[0].claim, label: proofRegister[0].label, kind: 'verified' },
    {
      claim: 'Published zone surcharges — the North Shore fee is on the website, not the invoice.',
      label: 'POLICY',
      kind: 'policy',
    },
  ];
  return <TrustStrip island={island} rows={rows} />;
}

/* ---------------- Section 5 — FAQ ---------------- */

const faqs: Faq[] = [
  {
    q: 'Our condo kitchen is tiny — does that work?',
    a: 'Yes. Condo kitchens are the Oʻahu norm, so we design bring-equipment menus around them. Freight elevators, loading docks and certificates of insurance (COIs) are handled with your building in advance.',
  },
  {
    q: 'How does the 30-day rental rule affect windward stays?',
    a: 'Kailua/Lanikai is a 30-day-estate market, which shapes the product: we build multi-day packages for those stays — provisioning, full-board days and event dinners — rather than one-off dinner drop-ins.',
  },
  {
    q: 'How do you deal with Oʻahu traffic?',
    a: 'We schedule around the corridor: your chef is on-site before the rush, roughly three hours pre-service. Timing is planned per event and confirmed in writing on your quote.',
  },
  {
    q: 'Which areas carry travel fees?',
    a: 'Only the North Shore / Turtle Bay corridor — 60–90+ minutes from town — carries a published surcharge, labeled BUSINESS DECISION REQUIRED until the rate card is approved. Waikīkī, Kahala/Gold Coast, Ko Olina and Kailua/Lanikai are base zones with no travel fee.',
  },
  {
    q: 'Is there a minimum for weekly household service?',
    a: 'The kamaʻāina line runs on a 4-week minimum posture — labeled BUSINESS DECISION REQUIRED — with a fixed weekly fee and groceries at cost. Your quote itemises everything before you commit.',
  },
];

/* ---------------- Page ---------------- */

export default function Oahu() {
  const { island } = usePageIsland('oahu');
  return (
    <>
      <IslandJsonLd island={island} />
      <Hero />
      <TwoDoors />
      <Services />
      <ZoneModule
        islandId="oahu"
        extraNote="Condo kitchen? We design bring-equipment menus. Freight elevators and COIs handled in advance."
      />
      <LocationGrid
        islandId="oahu"
        title="Five corridors, not one island-wide claim."
        intro="Waikīkī, Kahala, Ko Olina, Kailua/Lanikai and the North Shore — each with its own logistics, not a copied Oʻahu paragraph."
      />
      <OahuTrust />
      <FaqSection
        heading="Asked on Oʻahu."
        intro="Corridor-specific answers — statewide policies live on the trust and pricing pages."
        faqs={faqs}
        bg="bg-ivory"
      />
      <QuoteTeaserBand headline="Visitors get the celebration. Residents get the Tuesdays." />
    </>
  );
}
