import { Link } from 'react-router';
import { motion } from 'framer-motion';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import Reveal from '@/components/Reveal';
import StatusChip from '@/components/StatusChip';
import { otherOffers } from '@/data/rateCard';
import { proofRegister } from '@/data/proofRegister';
import {
  CostChip,
  FaqSection,
  HeroEyebrow,
  HeroFrame,
  HeroH1,
  IslandJsonLd,
  PrimaryCta,
  SectionHead,
  ServiceCard,
  TrustStrip,
  ZoneModule,
} from '@/pages/islands/shared';
import LocationGrid from '@/pages/islands/LocationGrid';
import { tierBand, usePageIsland } from '@/pages/islands/utils';
import type { Faq, TrustRow } from '@/pages/islands/shared';

/**
 * Maui homepage — `/maui` (island-maui.md). Live state: Request a Quote.
 * Thesis: the private chef's table in the guest's own villa — luxury-villa
 * and wedding-week island. Cultural vetoes: no Lahaina luxury-dining
 * marketing (West Maui = Kāʻanapali/Napili/Kapalua); farm names only with
 * verification chips; venue-discipline note instead of legal exposition.
 */

/* ---------------- Section 1 — Hero ---------------- */

function Hero() {
  const { island } = usePageIsland('maui');
  return (
    <HeroFrame island={island}>
      <HeroEyebrow island={island} />
      <HeroH1 text="A private chef's table — in your own Maui villa." />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
      >
        <p className="mt-6 max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ivory/90 lg:text-[1.125rem]">
          Signature in-villa dinners, dinners-for-two and full wedding-week service across Wailea, Kāʻanapali,
          Kapalua, Makena and Upcountry. We shop, cook, serve and disappear — the evening is yours.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-2.5">
          <CostChip label="Signature dinners" band={`${tierBand('maui', 'CORE')}/person`} index={0} />
          <CostChip label="Chef's table" band={tierBand('maui', 'ULTRA')} index={1} />
        </div>
        <p className="mt-5 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-brass">
          December–March is peak — early enquiries get the dates.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <PrimaryCta island={island} />
          <Link
            to="/quote?island=maui&service=vacation-chef"
            className="inline-flex items-center rounded-full border border-ivory/70 px-6 py-3 text-sm font-medium text-ivory transition-all duration-200 hover:-translate-y-px hover:border-ivory hover:bg-white/10 active:scale-[0.97]"
          >
            Check multi-day availability
          </Link>
        </div>
      </motion.div>
    </HeroFrame>
  );
}

/* ---------------- Section 2 — Signature services ---------------- */

function Services() {
  const { href } = usePageIsland('maui');
  const dinnerTwo = otherOffers.find((o) => o.offer.startsWith('Dinner for two'));
  const vacation = otherOffers.find((o) => o.offer.startsWith('Vacation chef'));
  const dinnerTwoBand = dinnerTwo ? dinnerTwo.orientation.split('·')[0].trim() : '';

  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <SectionHead eyebrow="Signature services" title="What Maui books most." />
        <Reveal stagger className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          <ServiceCard
            title="Signature in-villa dinner"
            desc="Multi-course, 4–15 guests, your table."
            img="/photos/svc-private-chef-maui.jpg"
            to={href('/private-chef')}
            band={`${tierBand('maui', 'CORE')}/pp`}
          />
          <ServiceCard
            title="Private chef's table"
            desc="Our halo: a coursed tasting at your villa, beyond any resort communal table."
            img="/photos/loc-wailea.jpg"
            to={href('/private-chef#chefs-table')}
            band={`${tierBand('maui', 'ULTRA')}/pp`}
          />
          <ServiceCard
            title="Dinner for two"
            desc="Proposals, anniversaries, honeymoons — fixed-price intimacy."
            img="/assets/dinner-for-two.jpg"
            to={href('/private-chef#for-two')}
            band={dinnerTwoBand}
          />
          <ServiceCard
            title="Wedding week"
            desc="Welcome dinner to recovery brunch — one team all week."
            img="/photos/home/hub-weddings.jpg"
            to={href('/wedding-catering')}
            stat="≈2,500 Maui weddings/yr (2024, official)"
          />
          <ServiceCard
            wide
            title="Multi-day & retreat full-board"
            desc="A chef for your whole stay — villa provisioning, full-board days and retreat service across the resort corridors."
            img="/photos/vacation-chef.jpg"
            to={href('/vacation-chef')}
            band={vacation ? vacation.orientation : ''}
          />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Section 4 — Sourcing module ---------------- */

function Sourcing() {
  const farmClaim = proofRegister.find((p) => p.label.includes('WRITTEN VERIFICATION'));
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-container items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <Reveal>
          <figure>
            <div className="overflow-hidden rounded-[14px]">
              <img
                src="/photos/farmers-market.jpg"
                alt="Hawaii produce stall — concept image of the sourcing bench, not a myCHEF event"
                loading="lazy"
                className="aspect-[16/10] h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 font-mono text-[0.625rem] uppercase tracking-[0.1em] text-ink-soft">
              Concept image — not a myCHEF Hawaiʻi event. Final photography pending.
            </figcaption>
          </figure>
        </Reveal>
        <div>
          <SectionHead eyebrow="Sourcing" title="Sourced on the island, admitted when it isn't." />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ink-soft">
              Hawaiʻi imports most of its food — roughly 90% by common estimates — so “everything is local”
              menus are usually marketing. Our Maui menus lead with island produce where it's genuinely
              better, and we name specific Upcountry farms only where a verified relationship exists.
            </p>
            <div className="mt-6">
              <StatusChip kind="pending">{farmClaim ? farmClaim.label : 'PENDING — WRITTEN VERIFICATION'}</StatusChip>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 5 — Trust strip ---------------- */

function MauiTrust() {
  const { island } = usePageIsland('maui');
  const rows: TrustRow[] = [
    { claim: proofRegister[1].claim, label: 'NOT AVAILABLE — YET', kind: 'not-available' },
    { claim: proofRegister[0].claim, label: proofRegister[0].label, kind: 'verified' },
    { claim: proofRegister[5].claim, label: 'POLICY', kind: 'policy' },
  ];
  return <TrustStrip island={island} rows={rows} />;
}

/* ---------------- Section 6 — FAQ ---------------- */

const faqs: Faq[] = [
  {
    q: 'Are there travel fees beyond Wailea and Kapalua?',
    a: 'Only outside the base zones — and they are published, not discovered. Upcountry carries a labeled surcharge (elevation and drive time); Paia/Haiku and the North Shore are quoted with the menu. Every zone fee appears on your written quote before you commit.',
  },
  {
    q: 'Can you handle dietary needs — vegan, gluten-free, allergies?',
    a: 'Yes. Menus are designed around your table: vegan, gluten-free and allergy-aware courses are planned in advance with your chef, never improvised on the night. Tell us in the quote form and the menu proposal reflects it.',
  },
  {
    q: 'What happens if weather turns on an outdoor setup?',
    a: 'Every outdoor event is planned with a wet-weather backup — covered lanai service, revised timing or an indoor reset. We confirm the backup plan with you before the event day, not during the rain.',
  },
  {
    q: 'Can you do wine pairings and add-ons?',
    a: 'Yes — pairing suggestions, sommelier-style service and add-ons (cheese courses, late-night plates) are quoted as separate line items. Alcohol itself is purchased by you or quoted separately; it is never hidden inside a menu price.',
  },
  {
    q: 'How does wedding-week booking work?',
    a: 'One team across the week: welcome dinner, rehearsal, reception and recovery brunch can all be booked together with a single quote and a single point of contact. Peak wedding months book early — enquire as soon as you have dates.',
  },
  {
    q: 'How tight is December–March availability?',
    a: 'Honestly: it is our peak. December–March dates — and September/October/May wedding peaks — are the first to go. Early enquiries get the dates; we would rather tell you that now than apologize later.',
  },
];

/* ---------------- Page ---------------- */

export default function Maui() {
  const { island } = usePageIsland('maui');
  return (
    <>
      <IslandJsonLd island={island} />
      <Hero />
      <Services />
      <ZoneModule
        islandId="maui"
        extraNote="We serve hotel-zoned resort residences and estates — venues with stable long-term status."
      />
      <LocationGrid
        islandId="maui"
        title="Five Maui areas, named."
        intro="Wailea, Kāʻanapali, Kapalua, Makena and Upcountry each have their own page. West Maui is Kāʻanapali, Nāpili and Kapalua — never marketed as Lahaina luxury dining."
      />
      <Sourcing />
      <MauiTrust />
      <FaqSection
        heading="Asked on Maui."
        intro="Island-specific answers — statewide policies live on the trust and pricing pages."
        faqs={faqs}
        bg="bg-sand"
      />
      <QuoteTeaserBand headline="Your villa. Your evening. Our kitchen kit." />
    </>
  );
}
