import { motion } from 'framer-motion';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import Reveal from '@/components/Reveal';
import StatusChip from '@/components/StatusChip';
import { photos } from '@/data/photos';
import { proofRegister } from '@/data/proofRegister';
import {
  FaqSection,
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
 * Hawaiʻi Island homepage — `/bigisland` (island-bigisland.md). P2
 * inquiry-framing page, NOT a booking page: no Request a Quote CTA, no
 * LocalBusiness schema (WebPage only via IslandJsonLd), no "now serving"
 * claims. Dual naming: "Big Island" (search language) + "Hawaiʻi Island"
 * (geographic correctness).
 */

/* ---------------- Section 1 — Hero ---------------- */

function Hero() {
  const { island } = usePageIsland('bigisland');
  return (
    <HeroFrame island={island}>
      <HeroEyebrow island={island} alias="Big Island" />
      <HeroH1 text="The Kohala Coast, first." />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
      >
        <p className="mt-6 max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ivory/90 lg:text-[1.125rem]">
          The Big Island is 4,000 square miles — we won't pretend to cover all of it. When myCHEF launches
          here, it starts where the island's luxury villas cluster: the Kona–Kohala corridor, seven resort
          communities within one 30-minute service radius. Tell us your dates and help set the launch clock.
        </p>
        <p className="mt-5 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-brass">
          Now taking dated inquiries — Kona/Kohala focus · east side quote-only at launch
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <PrimaryCta island={island} />
          <a
            href="#why-inquiry"
            className="text-sm font-medium text-ivory/90 underline decoration-brass/60 underline-offset-4 transition-colors hover:text-white"
          >
            Why inquiry-only? ↓
          </a>
        </div>
      </motion.div>
    </HeroFrame>
  );
}

/* ---------------- Section 2 — What's planned ---------------- */

function Planned() {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <SectionHead
          eyebrow="The launch plan"
          title="What launch looks like here."
          intro="Every service below activates with the Kona–Kohala launch — dated inquiries decide the sequence."
        />
        <Reveal stagger className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          <ServiceCard
            planned
            title="Kona/Kohala villa dinners"
            desc="Signature multi-course dinners in corridor villas — indicative band pending rate-card activation."
            img={photos.konaKitchen.file}
            to="/bigisland/private-chef"
            band={`${tierBand('bigisland', 'CORE')}/pp starting`}
          />
          <ServiceCard
            planned
            title="Sourcing-led tasting menus"
            desc="Built on the state's deepest farm-and-ranch bench — see the sourcing story below."
            img={photos.produce.file}
            to="/bigisland/private-chef"
          />
          <ServiceCard
            planned
            title="Estate weddings"
            desc="Kohala estates, wedding-week format — welcome dinner to recovery brunch, one team."
            img={photos.wedding.file}
            to="/bigisland/wedding-catering"
          />
          <ServiceCard
            planned
            title="Mobile bar"
            desc="Sunset pours on Kona–Kohala terraces. Published starting prices; inquiry until launch."
            img={photos.bar.file}
            to="/bigisland/bar"
          />
          <ServiceCard
            planned
            title="Multi-day villa residencies"
            desc="A chef for the whole stay, for Kohala/Waimea corridor weeks."
            img={photos.vacation.file}
            to="/bigisland/vacation-chef"
          />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Section 3 — The sourcing story ---------------- */

function SourcingStory() {
  const farmClaim = proofRegister.find((p) => p.label.includes('WRITTEN VERIFICATION'));
  return (
    <section className="grain-dark relative overflow-hidden bg-ink py-20 lg:py-28">
      <div className="relative mx-auto w-full max-w-container px-5 lg:px-10">
        <SectionHead eyebrow="The sourcing story" title="No island feeds a chef like this one." dark />
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ivory/85 lg:text-[1.125rem]">
              Kanpachi raised off the Kona coast. Ranch beef from the island's upcountry. Mushrooms from the
              Hāmākua side. Two famous coffee origins.
            </p>
            <p className="mt-5 max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ivory/85 lg:text-[1.125rem]">
              When we launch here, menus will be written around this bench — with every producer name
              verified before it's printed.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <StatusChip kind="pending" onDark>
                {farmClaim ? farmClaim.label : 'PENDING — WRITTEN VERIFICATION'}
              </StatusChip>
              <StatusChip kind="rpr" onDark>
                Compliance — Act 198 labeling from Jul 1, 2027
              </StatusChip>
            </div>
            <p className="mt-6 font-mono text-[0.6875rem] uppercase leading-5 tracking-[0.12em] text-brass">
              Producer names publish only with written verification.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <figure>
              <div className="overflow-hidden rounded-[14px]">
                <img
                  src={photos.kohalaFish.file}
                  alt={photos.kohalaFish.alt}
                  loading="lazy"
                  className="aspect-[16/10] h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 font-mono text-[0.625rem] uppercase tracking-[0.1em] text-ivory/50">
                Concept image — not a myCHEF Hawaiʻi event. Final photography pending.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 5 — Why inquiry-only ---------------- */

function WhyInquiry() {
  return (
    <section id="why-inquiry" className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[720px] px-5 text-center lg:px-10">
        <Reveal>
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">The honest answer</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ink">
            Why isn't there a booking button?
          </h2>
          <p className="mx-auto mt-6 max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ink-soft lg:text-[1.125rem]">
            A booking button is a promise of a staffed, insured island team. That team is being built now.
            Dated inquiries are the evidence that decides the launch sequence — when the corridor's inquiry
            list says go, we go.
          </p>
          <a
            href="/trust"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-clay transition-colors hover:text-clay-deep"
          >
            Our network-wide standards →
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Section 6 — FAQ ---------------- */

const faqs: Faq[] = [
  {
    q: 'Why can’t I book a date yet?',
    a: 'Hawaiʻi Island is inquiry-stage: there is no staffed west-side unit yet, so there is no booking button. Dated inquiries are the evidence that sets the launch sequence — tell us your dates and you directly move the launch clock.',
  },
  {
    q: 'Kona vs Hilo — can one team cover both?',
    a: 'Not in one day. Hilo/Volcano is 2.5–3 hours from the west side, so the east side is quote-only at launch: quoted with dedicated staffing, never squeezed into a west-side day. A same-day Kona–Hilo round trip is a logistics fantasy, and we publish that.',
  },
  {
    q: 'What about island event weeks — Ironman, coffee season?',
    a: 'Big event weeks compress corridor availability, so we plan around them: flag your dates early and we confirm feasibility in writing. We do not publish fabricated availability calendars.',
  },
  {
    q: 'Is there a minimum spend on the east side?',
    a: 'East-side events carry a published surcharge and dedicated staffing because of the drive — the figure appears on your written quote, not the invoice.',
  },
  {
    q: 'When will you launch on Hawaiʻi Island?',
    a: 'When the inquiry list and hiring say so. We publish launch news when there is a staffed, insured team behind it — we don’t promise dates we can’t staff.',
  },
];

/* ---------------- Page ---------------- */

export default function BigIsland() {
  const { island } = usePageIsland('bigisland');
  return (
    <>
      <IslandJsonLd island={island} />
      <Hero />
      <Planned />
      <SourcingStory />
      <ZoneModule islandId="bigisland" reverse eyebrow="Geography, honestly zoned" />
      <LocationGrid
        islandId="bigisland"
        title="West side first."
        intro="Kona and the Kohala Coast are the opening corridor. Hilo/Volcano stays quote-only — a same-day round trip is not a product."
      />
      <WhyInquiry />
      <FaqSection
        heading="Asked about the Big Island."
        intro="Inquiry-stage answers — we publish constraints instead of discovering them on your event night."
        faqs={faqs}
        bg="bg-sand"
      />
      <QuoteTeaserBand
        headline="Be the reason we launch sooner."
        note="Hawaiʻi Island (Big Island) — inquiry stage · Kona–Kohala corridor first"
      />
    </>
  );
}
