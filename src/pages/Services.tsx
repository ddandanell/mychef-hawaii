import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import type { ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import Reveal from '@/components/Reveal';
import StatusChip from '@/components/StatusChip';
import WordMask from '@/components/WordMask';
import { getOtherOffer, rateCard } from '@/data/rateCard';
import { photos } from '@/data/photos';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

/**
 * /services — statewide service-category hub (services.md). Explains the
 * four service lines at brand level and routes every transactional intent
 * to island pages. Starting prices render from the canonical rate card.
 * Schema: ItemList of Service (overview only).
 */

/* ---------------- Clip-reveal image (GSAP, isolated) ---------------- */

function ClipImage({
  src,
  alt,
  caption,
  className,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const tween = gsap.fromTo(
      el,
      { clipPath: 'inset(10% 10% 10% 10%)' },
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 0.9,
        ease: 'power3.out',
        once: true,
        scrollTrigger: { trigger: el, start: 'top 75%', once: true },
      },
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <figure className={className}>
      <div ref={ref} className="overflow-hidden rounded-[14px] shadow-soft">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="aspect-[4/5] h-full w-full object-cover"
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 font-mono text-[0.625rem] uppercase tracking-[0.1em] text-ink-soft">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

/* ---------------- Shared bits ---------------- */

function MonoChips({ items }: { items: string[] }) {
  return (
    <span className="flex flex-wrap gap-2">
      {items.map((c) => (
        <span
          key={c}
          className="inline-flex items-center rounded-full border border-stone bg-white/70 px-3 py-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-ink-soft"
        >
          {c}
        </span>
      ))}
    </span>
  );
}

function AvailabilityRow() {
  return (
    <span className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-ink-soft">
      <span className="inline-flex items-center gap-2">
        <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-moss" />
        Oʻahu &amp; Maui — booking now
      </span>
      <span className="inline-flex items-center gap-2">
        <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-brass" />
        Kauaʻi &amp; Hawaiʻi Island — inquiry stage
      </span>
    </span>
  );
}

function IslandCta({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-1.5 text-sm font-medium text-clay transition-colors hover:text-clay-deep"
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

function ServiceBlock({
  anchor,
  flip = false,
  bg,
  image,
  alt,
  caption,
  children,
}: {
  anchor: string;
  flip?: boolean;
  bg: 'ivory' | 'sand';
  image: string;
  alt: string;
  caption?: string;
  children: ReactNode;
}) {
  return (
    <section id={anchor} className={cn('scroll-mt-24 py-20 lg:py-28', bg === 'ivory' ? 'bg-ivory' : 'bg-sand')}>
      <div className="mx-auto grid w-full max-w-container items-center gap-10 px-5 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <ClipImage src={image} alt={alt} caption={caption} className={cn(flip && 'lg:order-2')} />
        <Reveal stagger staggerDelay={0.08} className={cn(flip && 'lg:order-1')}>
          {children}
        </Reveal>
      </div>
    </section>
  );
}

function BlockTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ink">
      {children}
    </h2>
  );
}

function BlockBody({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ink-soft lg:text-[1.125rem]">
      {children}
    </p>
  );
}

/* ---------------- Section 1 — Header ---------------- */

function Header() {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">Services</p>
        <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
          <WordMask text="Private dining, four ways." delay={0.15} />
        </h1>
        <Reveal delay={0.6} y={24}>
          <p className="mt-6 max-w-[65ch] text-[1.25rem] leading-[1.55] text-ink">
            Every myCHEF engagement includes menu design, shopping, cooking, table service and cleanup. What
            changes is the shape of the occasion — one night, two people, a wedding week, or a chef for your
            whole stay.
          </p>
        </Reveal>
        <Reveal delay={0.75} className="mt-8">
          <AvailabilityRow />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Section 2 — Service line blocks ---------------- */

// Indicative posture derived from the canonical rate card — never hard-coded.
const entryBands = rateCard.filter((e) => e.offer === 'signature-dinner' && e.tier === 'ENTRY');
const entryLo = Math.min(...entryBands.map((e) => e.band[0]));
const entryHi = Math.max(...entryBands.map((e) => e.band[1]));
const vacationOffer = getOtherOffer('vacation-chef');
const dinnerForTwoOffer = getOtherOffer('dinner-for-two');

function PrivateChefBlock() {
  return (
    <ServiceBlock
      anchor="private-chef"
      bg="sand"
      image={photos.mauiKitchen.file}
      alt={photos.mauiKitchen.alt}
      caption="Campaign still — not a documented myCHEF Hawaiʻi event."
    >
      <BlockTitle>The signature in-villa dinner.</BlockTitle>
      <BlockBody>
        Your chef arrives about three hours before service with everything sourced that day. Multi-course
        menus built around your tastes, served at your table, kitchen left spotless. For 2–15 guests.
      </BlockBody>
      <span className="mt-6 block">
        <MonoChips items={['Menu design', 'Shopping', 'Cooking', 'Service', 'Cleanup']} />
      </span>
      <span className="mt-3 block font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-ink-soft">
        Excluded, quoted separately: Alcohol · Rentals · Venue fees
      </span>
      <span className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-ink">
        From ${entryLo}–${entryHi}/person depending on island and tier
        <StatusChip kind="published">Published</StatusChip>
        <Link to="/pricing" className="inline-flex items-center gap-1 font-medium text-clay hover:text-clay-deep">
          island pricing
          <ArrowRight className="h-4 w-4" />
        </Link>
      </span>
      <span className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
        <IslandCta to="/maui/private-chef">Maui private chef</IslandCta>
        <IslandCta to="/oahu/private-chef">Oʻahu private chef</IslandCta>
      </span>
      <span className="mt-4 block font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-ink-soft">
        Kauaʻi &amp; Hawaiʻi Island: inquiry list
      </span>
    </ServiceBlock>
  );
}

function PrivateDiningBlock() {
  return (
    <ServiceBlock
      anchor="private-dining"
      flip
      bg="ivory"
      image={photos.kapaluaTwo.file}
      alt={photos.kapaluaTwo.alt}
      caption="Campaign still — not a documented myCHEF Hawaiʻi event."
    >
      <BlockTitle>Celebrations and dinners-for-two.</BlockTitle>
      <BlockBody>
        Anniversaries, proposals, birthdays, and the quiet dinner that ends up being the best night of the
        trip. Small parties are fixed-price products — two covers are never a discounted big table.
      </BlockBody>
      <span className="mt-6 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-2 rounded-full border border-stone bg-white/70 px-3 py-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-ink-soft">
          Dinners-for-two {dinnerForTwoOffer.orientation}
          <StatusChip kind="published">Published</StatusChip>
        </span>
        <span className="inline-flex items-center rounded-full border border-stone bg-white/70 px-3 py-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-ink-soft">
          2–12 guests
        </span>
        <span className="inline-flex items-center rounded-full border border-stone bg-white/70 px-3 py-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-ink-soft">
          Add-ons: florals, photography, wine pairing
        </span>
      </span>
      {dinnerForTwoOffer ? (
        <span className="mt-4 block font-mono text-[0.6875rem] uppercase leading-5 tracking-[0.08em] text-ink-soft">
          Starting prices: {dinnerForTwoOffer.orientation} <StatusChip kind="published" className="ml-1">Published</StatusChip>
        </span>
      ) : null}
      <span className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
        <IslandCta to="/maui/private-chef">Maui celebrations</IslandCta>
        <IslandCta to="/oahu/private-chef">Oʻahu celebrations</IslandCta>
      </span>
      <span className="mt-4 block font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-ink-soft">
        Kauaʻi &amp; Hawaiʻi Island: inquiry list
      </span>
    </ServiceBlock>
  );
}

function CateringBlock() {
  return (
    <ServiceBlock
      anchor="catering"
      bg="sand"
      image={photos.catering.file}
      alt={photos.catering.alt}
    >
      <BlockTitle>Gatherings from 10 to 75.</BlockTitle>
      <BlockBody>
        Receptions, retreats, welcome parties and recovery brunches. Staffed service with published staffing
        ratios, wet-weather plans, and grazing/pupu formats.
      </BlockBody>
      <span className="mt-6 block">
        <MonoChips items={['Grazing tables', 'Pupu service', 'Buffet', 'Coursed seated', 'Live stations']} />
      </span>
      <span className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
        <IslandCta to="/oahu/catering">Oʻahu catering</IslandCta>
        <IslandCta to="/maui/wedding-catering">Maui wedding catering</IslandCta>
      </span>
      <span className="mt-4 block font-mono text-[0.6875rem] uppercase leading-5 tracking-[0.08em] text-ink-soft">
        Maui events via the wedding-week team · Neighbor islands: inquiry
      </span>
    </ServiceBlock>
  );
}

function BarBlock() {
  return (
    <ServiceBlock
      anchor="bar"
      flip
      bg="ivory"
      image={photos.bar.file}
      alt={photos.bar.alt}
      caption="Campaign still — not a documented myCHEF Hawaiʻi event."
    >
      <BlockTitle>A bartender on the terrace.</BlockTitle>
      <BlockBody>
        Mobile cocktail hour — stacked with a private chef night or booked alone. Four-hour villa packages
        with bartender and setup; spirits billed at cost or BYO.
      </BlockBody>
      <span className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-ink">
        Packages from $650 Oʻahu · $800 Maui · $850 Kauaʻi · $725 Hawaiʻi Island
        <StatusChip kind="published">Published</StatusChip>
      </span>
      <span className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
        <IslandCta to="/maui/bar">Maui mobile bar</IslandCta>
        <IslandCta to="/oahu/bar">Oʻahu mobile bar</IslandCta>
        <IslandCta to="/bar">All islands</IslandCta>
      </span>
    </ServiceBlock>
  );
}

function VacationChefBlock() {
  return (
    <ServiceBlock
      anchor="vacation-chef"
      bg="sand"
      image={photos.vacation.file}
      alt={photos.vacation.alt}
    >
      <BlockTitle>A chef for your whole stay.</BlockTitle>
      <BlockBody>
        Multi-day villa residencies and weekly household service — breakfast through dinner, provisioning
        managed, up to three meals a day. Priced per person per day, groceries at cost.
      </BlockBody>
      {vacationOffer ? (
        <span className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-ink">
          Multi-day — {vacationOffer.orientation}
          <StatusChip kind="published">Published</StatusChip>
        </span>
      ) : null}
      <span className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
        <IslandCta to="/maui/vacation-chef">Maui vacation chef</IslandCta>
        <IslandCta to="/oahu/vacation-chef">Oʻahu vacation chef</IslandCta>
      </span>
      <span className="mt-4 block font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-ink-soft">
        Kauaʻi &amp; Hawaiʻi Island: inquiry list
      </span>
    </ServiceBlock>
  );
}

/* ---------------- Section 3 — Weddings callout band ---------------- */

function WeddingBand() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const tween = gsap.fromTo(
      img,
      { yPercent: -10 },
      {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: { trigger: wrap, start: 'top bottom', end: 'bottom top', scrub: true },
      },
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section ref={wrapRef} className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          ref={imgRef}
          src={photos.wedding.file}
          alt={photos.wedding.alt}
          loading="lazy"
          className="h-[120%] w-full object-cover"
        />
        <div className="hero-scrim-mobile absolute inset-0" aria-hidden="true" />
      </div>
      <div className="relative mx-auto w-full max-w-[720px] px-5 py-24 text-center lg:py-36">
        <Reveal>
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-brass">Weddings</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ivory">
            The wedding week, not just the wedding night.
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 text-[1.0625rem] leading-[1.65] text-ivory/85 lg:text-[1.125rem]">
            Welcome dinner, rehearsal, reception, recovery brunch — one culinary team across the whole week.
            Hawaiʻi sees 10,625 destination weddings a year (2024, official); Maui alone hosts 2,500.
          </p>
        </Reveal>
        <Reveal delay={0.22}>
          <Link
            to="/maui/wedding-catering"
            className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-ivory px-6 py-3 text-sm font-medium text-ink transition-all duration-200 hover:-translate-y-px hover:bg-white active:scale-[0.97]"
          >
            Maui wedding catering
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-10 font-mono text-[0.625rem] uppercase tracking-[0.1em] text-ivory/50">
            Concept image — campaign still, not a documented myCHEF Hawaiʻi event.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Section 4 — How to book strip ---------------- */

const miniSteps = [
  { n: '01', title: 'Enquire', desc: 'Five fields, two minutes, no account.' },
  { n: '02', title: 'Menus', desc: 'A real human replies within 48 hours with menu directions and a range.' },
  { n: '03', title: 'Event', desc: 'We shop, cook, serve — and leave the kitchen cleaner than we found it.' },
];

function HowToBookStrip() {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">How to Book</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ink">
            Three steps to the table.
          </h2>
        </Reveal>
        <Reveal stagger staggerDelay={0.12} className="mt-12 grid gap-10 md:grid-cols-3 md:gap-6">
          {miniSteps.map((s) => (
            <div key={s.n} className="border-t-2 border-brass/50 pt-6">
              <p className="font-display text-3xl font-semibold text-brass">{s.n}</p>
              <h3 className="mt-2 font-display text-[1.375rem] font-medium leading-[1.2] text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.desc}</p>
            </div>
          ))}
        </Reveal>
        <Reveal delay={0.2} className="mt-10">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-clay transition-colors hover:text-clay-deep"
          >
            The full process
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Page ---------------- */

export default function Services() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'myCHEF Hawaii service lines',
            itemListElement: [
              { name: 'Private Chef — the signature in-villa dinner', anchor: '#private-chef' },
              { name: 'Private Dining — celebrations and dinners-for-two', anchor: '#private-dining' },
              { name: 'Catering & Events — gatherings from 10 to 75', anchor: '#catering' },
              { name: 'Mobile bar — villa cocktails', anchor: '#bar' },
              { name: 'Vacation Chef — a chef for your whole stay', anchor: '#vacation-chef' },
            ].map((s, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              item: { '@type': 'Service', name: s.name, url: `/services${s.anchor}` },
            })),
          }),
        }}
      />
      <Header />
      <PrivateChefBlock />
      <PrivateDiningBlock />
      <CateringBlock />
      <BarBlock />
      <VacationChefBlock />
      <WeddingBand />
      <HowToBookStrip />
      <QuoteTeaserBand />
    </>
  );
}
