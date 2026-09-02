import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import Contours from '@/components/Contours';
import { DualCtaLight } from '@/components/DualCta';
import { PackageGrid } from '@/components/PackageGrid';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import Reveal from '@/components/Reveal';
import StatusChip from '@/components/StatusChip';
import type { ChipKind } from '@/components/StatusChip';
import WordMask from '@/components/WordMask';
import { useIsland } from '@/context/IslandContext';
import { islandOrder, islands } from '@/data/islands';
import type { IslandId } from '@/data/islands';
import { feeStack, formatBand, formatDayRate, formatMobileBarPackage, formatOtherOffer, getDayRate, getMobileBar, getTiers, otherOffers } from '@/data/rateCard';
import type { FeeStackRow, RateTier } from '@/data/rateCard';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

/**
 * Pricing Orientation — /pricing (pricing.md).
 * The canonical rate-card page: one architecture, four island rate cards,
 * every number labeled. All values render from the rateCard object; the
 * page hard-codes nothing.
 */

const TIER_LABEL: Record<RateTier, string> = {
  ENTRY: 'ENTRY',
  CORE: 'CORE MYCHEF',
  PREMIUM: 'PREMIUM',
  ULTRA: 'ULTRA-PREMIUM',
};

const feeChipKind: Record<FeeStackRow['chip'], ChipKind> = {
  PUBLISHED: 'published',
  'RPR — ATTORNEY': 'rpr',
  'RPR — CPA': 'rpr',
  RPR: 'rpr',
  'VERIFIED — POLICY': 'policy',
};

/* ---------------- Section 1 — Header + Status Banner ---------------- */

function Header() {
  const { islandId } = useIsland();
  const h1 =
    islandId === 'maui'
      ? 'Private chef Maui cost — published, line by line.'
      : islandId === 'kauai'
        ? 'Private chef Kauai cost — and Kauai catering prices.'
        : 'Private chef Hawaii cost — published, line by line.';
  const lede =
    islandId === 'maui'
      ? 'Per person, what is included, groceries at cost, 20% service, Hawaiʻi GET. Private chef Maui cost is CORE $150–$250/pp. Published prices and a written menu — not a named-chef marketplace. Your written quote is the confirmed total.'
      : islandId === 'kauai'
        ? 'Per person, what is included, groceries at cost, 20% service, Hawaiʻi GET. Private chef Kauai and Kauai catering share the same $150–$250/pp CORE band. Wedding catering from $175/pp plus staffing. Quote in writing.'
        : 'Per person, what is included, groceries at cost, 20% service, Hawaiʻi GET. Private chef Maui cost starts at $150–$250/pp. We publish starting prices and a named chef team — not a marketplace of fifty random chefs. Your written quote is the confirmed total.';

  return (
    <section className="relative overflow-hidden bg-ivory pb-16 pt-14 lg:pb-20 lg:pt-20">
      <Contours className="absolute -right-24 -top-16 h-96 w-[520px] opacity-[0.06]" stroke="#A34A28" />
      <div className="relative mx-auto w-full max-w-container px-5 lg:px-10">
        <motion.div
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[14px] border border-moss/40 bg-moss/5 px-5 py-4"
        >
          <p className="font-mono text-[0.6875rem] uppercase leading-5 tracking-[0.1em] text-moss">
            Published starting prices — quote confirmed in writing. 20% service + Hawaiʻi GET up to 4.712% once on
            the quote. 50% deposit locks the date. Gratuity is voluntary.
          </p>
        </motion.div>
        <p className="mt-10 font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">
          Private chef cost · {islandId === 'maui' ? 'Maui' : islandId === 'kauai' ? 'Kauaʻi' : 'Hawaii'}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
          <WordMask text={h1} delay={0.35} />
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          className="mt-6 max-w-[65ch] text-[1.25rem] leading-[1.55] text-ink"
        >
          {lede}
        </motion.p>
      </div>
    </section>
  );
}

/* ---------------- Section 2 — Island Rate-Card Tabs ---------------- */

function RateCardTabs() {
  const { islandId } = useIsland();
  const [params] = useSearchParams();
  const paramIsland = params.get('island');
  const initial: IslandId =
    islandOrder.find((id) => id === paramIsland) ??
    (islandId && islandOrder.includes(islandId) ? islandId : 'oahu');
  const [active, setActive] = useState<IslandId>(initial);

  const tiers = useMemo(() => getTiers(active), [active]);

  return (
    <section className="bg-ivory pb-20 lg:pb-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <Reveal>
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">
            Signature In-Villa Dinner — Published Per-Person Bands
          </p>
        </Reveal>

        {/* Tab bar */}
        <Reveal delay={0.1}>
          <div role="tablist" aria-label="Island rate cards" className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-b border-stone">
            {islandOrder.map((id) => {
              const meta = islands[id];
              const selected = id === active;
              return (
                <button
                  key={id}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(id)}
                  className={cn(
                    'flex items-center gap-2 border-b-2 pb-3 font-display text-[1.125rem] font-medium transition-colors',
                    selected ? 'text-ink' : 'border-transparent text-ink-soft hover:text-ink',
                  )}
                  style={selected ? { borderColor: meta.hue } : undefined}
                >
                  <span
                    aria-hidden="true"
                    className={cn('inline-block h-1.5 w-1.5 rounded-full', meta.state === 'live' ? 'bg-moss' : 'bg-brass')}
                  />
                  {meta.name}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Tier ladder */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            <motion.div
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
            >
              {tiers.map((entry) => {
                const signature = entry.tier === 'CORE';
                return (
                  <motion.article
                    key={entry.tier}
                    variants={{
                      hidden: { opacity: 0, y: 24 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
                    }}
                    className={cn(
                      'relative flex flex-col rounded-[14px] border bg-white p-5 shadow-soft lg:p-6',
                      signature ? 'border-clay border-2' : 'border-stone',
                    )}
                  >
                    {signature && (
                      <span className="absolute -top-3 left-5 rounded-full bg-clay px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.1em] text-white">
                        Most booked posture
                      </span>
                    )}
                    <h3 className="font-mono text-[0.75rem] font-medium uppercase tracking-[0.14em] text-ink-soft">
                      {TIER_LABEL[entry.tier]}
                    </h3>
                    <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-2">
                      <span className="font-display text-[2rem] font-semibold leading-none tracking-[-0.01em] text-ink">
                        {formatBand(entry)}
                      </span>
                    </div>
                    <p className="mt-2 font-mono text-[0.6875rem] uppercase leading-4 tracking-[0.08em] text-ink-soft">
                      {entry.model}
                    </p>
                    <p className="mt-4 border-t border-stone pt-4 text-sm leading-relaxed text-ink-soft">
                      {entry.minimumSpendNote}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                      Small parties are fixed-price products — ask us.
                    </p>
                    <Link
                      to={`/quote?island=${active}&service=signature-dinner`}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-clay transition-colors hover:text-clay-deep"
                    >
                      Get a quote
                      <span aria-hidden="true">→</span>
                    </Link>
                  </motion.article>
                );
              })}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ---------------- Day rate + mobile bar ---------------- */

function DayRateAndBar() {
  const [params] = useSearchParams();
  const { islandId } = useIsland();
  const paramIsland = params.get('island');
  const active: IslandId =
    islandOrder.find((id) => id === paramIsland) ??
    (islandId && islandOrder.includes(islandId) ? islandId : 'oahu');
  const day = getDayRate(active);
  const bar = getMobileBar(active);

  return (
    <section className="bg-ivory pb-20 lg:pb-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">Villa day rate · Mobile bar</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ink">
            Chef for the day. Cocktails on the terrace.
          </h2>
        </Reveal>
        <Reveal stagger className="mt-12 grid gap-6 md:grid-cols-2">
          {islandOrder.map((id) => {
            const d = getDayRate(id);
            const b = getMobileBar(id);
            const isl = islands[id];
            return (
              <article key={id} className="rounded-[18px] border border-stone bg-white p-6 shadow-soft lg:p-8">
                <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-soft">{isl.name}</p>
                <p className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink">{formatDayRate(id)}</p>
                <p className="mt-2 text-sm text-ink-soft">{d.model}</p>
                <p className="mt-6 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-clay">Mobile bar</p>
                <p className="mt-2 font-display text-2xl font-semibold text-ink">{formatMobileBarPackage(id)}</p>
                <p className="mt-1 text-sm text-ink-soft">
                  or ${b.perGuest[0]}–${b.perGuest[1]}/guest
                </p>
              </article>
            );
          })}
        </Reveal>
        <p className="mt-8 max-w-[65ch] text-sm text-ink-soft">
          {day.includes} Active island shown in tabs above: {islands[active].name}. Bar {bar.note}
        </p>
      </div>
    </section>
  );
}

/* ---------------- Section 3 — Beyond the dinner ---------------- */

function OtherModels() {
  const { islandId } = useIsland();
  const active: IslandId = islandId && islandOrder.includes(islandId) ? islandId : 'oahu';
  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">Other published offers</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ink">
            Beyond the dinner.
          </h2>
        </Reveal>
        <Reveal stagger staggerDelay={0.07} className="mt-12">
          {otherOffers.map((row) => (
            <div
              key={row.offer}
              className="grid gap-2 border-b border-stone py-6 first:border-t md:grid-cols-[1.1fr_0.9fr_1.4fr] md:items-baseline md:gap-6"
            >
              <h3 className="font-display text-[1.375rem] font-medium leading-[1.2] text-ink">{row.offer}</h3>
              <p className="font-mono text-[0.6875rem] uppercase leading-5 tracking-[0.08em] text-ink-soft">
                {row.model}
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-ink">
                {formatOtherOffer(row, active)}
                <span className="mt-1 block text-sm text-ink-soft">{row.orientation}</span>
              </p>
            </div>
          ))}
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-8 max-w-3xl font-mono text-[0.6875rem] uppercase leading-5 tracking-[0.1em] text-ink-soft">
            Starting prices. Quote confirmed in writing. Groceries at cost on day-rate and vacation-chef days.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Section 4 — The fee stack (receipt aesthetic) ---------------- */

function FeeStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const contourRef = useRef<HTMLDivElement>(null);
  const receiptRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const receipt = receiptRef.current;
    const rows = rowsRef.current;
    if (!receipt || !rows) return;
    if (reduced) {
      gsap.set([receipt, rows.children], { opacity: 1, y: 0, x: 0, rotate: 0 });
      return;
    }
    const ctx = gsap.context(() => {
      // Contour drawing scrubbed behind the receipt
      const paths = contourRef.current?.querySelectorAll('path');
      if (paths && paths.length) {
        paths.forEach((p) => {
          const len = p.getTotalLength();
          gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
        });
        gsap.to(paths, {
          strokeDashoffset: 0,
          ease: 'none',
          stagger: 0.05,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 90%', end: 'bottom 40%', scrub: true },
        });
      }
      // Receipt slides up + slight rotate 1.5° → 0
      gsap.fromTo(
        receipt,
        { opacity: 0, y: 48, rotate: 1.5 },
        {
          opacity: 1,
          y: 0,
          rotate: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: receipt, start: 'top 80%', once: true },
        },
      );
      // Rows type-in: opacity + x 8px, stagger 0.1s
      gsap.fromTo(
        rows.children,
        { opacity: 0, x: 8 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: { trigger: rows, start: 'top 78%', once: true },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="grain-dark relative overflow-hidden bg-ink py-20 lg:py-28">
      <div ref={contourRef} aria-hidden="true" className="absolute inset-0">
        <Contours stroke="#9C7A33" strokeWidth={1} className="absolute -left-40 top-1/2 h-[640px] w-[820px] -translate-y-1/2 opacity-25" />
      </div>
      <div className="relative mx-auto w-full max-w-container px-5 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-brass">Full Transparency</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ivory">
            The fee stack, line by line.
          </h2>
          <p className="mx-auto mt-5 max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ivory/80">
            Every myCHEF quote itemises the same six lines. Here they are — with the label each one carries.
          </p>
        </Reveal>

        <div
          ref={receiptRef}
          className="mx-auto mt-12 w-full max-w-[560px] rounded-[14px] bg-ivory p-6 shadow-soft lg:p-8"
        >
          <p className="border-b border-stone pb-4 text-center font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-ink-soft">
            myCHEF Hawaii — what a quote contains
          </p>
          <ul ref={rowsRef} className="divide-y divide-stone">
            {feeStack.map((row, i) => (
              <li key={row.label} className="flex items-start justify-between gap-4 py-4">
                <p className="font-mono text-[0.75rem] leading-5 tracking-[0.02em] text-ink">
                  <span className="mr-2 text-ink-soft">{String(i + 1).padStart(2, '0')}</span>
                  {row.label}
                </p>
                <StatusChip kind={feeChipKind[row.chip]} className="mt-0.5 shrink-0">
                  {row.chip}
                </StatusChip>
              </li>
            ))}
          </ul>
        </div>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-xl text-center">
          <p className="text-[1.0625rem] leading-[1.65] text-ivory/85">
            Compare any quote you receive against this stack. If a competitor&apos;s number looks lower, check which
            lines are missing.
          </p>
          <Link
            to="/legal"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brass underline decoration-brass/50 underline-offset-4 transition-colors hover:text-ivory"
          >
            Full policy posture →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Section 5 — Price-orientation FAQ ---------------- */

const faqs = [
  {
    q: 'How much does a private chef cost in Hawaii?',
    a: 'Oʻahu CORE $125–$190 per person. Maui and Kauaʻi $150–$250/pp. Big Island CORE $150–$225, ENTRY from $110. Stay Chef day rates from $850 Oʻahu / $1,050 Maui / $1,100 Kauaʻi / $950 Hawaiʻi Island. Written quote before you commit.',
  },
  {
    q: 'Private chef Maui cost — what do I actually pay per person?',
    a: 'Signature dinners start at $150–$250 per person (CORE). Date Night for two from $500+. Stay Chef from $1,050/day. That is the food/chef line — groceries, service and GET are called out next.',
  },
  {
    q: 'What’s included in the per-person price?',
    a: 'Menu design, same-day shopping, cooking in your villa, table service and a clean kitchen. Alcohol is BYO or quoted separately (mobile bar is its own line). Rentals and venue fees are add-ons when you want them.',
  },
  {
    q: 'Are groceries included?',
    a: 'On a signature dinner, groceries sit inside the per-person band. On Stay Chef / vacation-chef / multi-day days, groceries are billed at cost with receipts — never marked up silently.',
  },
  {
    q: 'What is the 20% service charge?',
    a: 'A 20% service charge is added as its own line on every quote (HRS §481B-14 posture). It is not a tip. Gratuity is always voluntary and never hidden in the bill.',
  },
  {
    q: 'What is Hawaiʻi GET?',
    a: 'General Excise Tax, up to 4.712% including the county surcharge, shown as its own line, valid through December 31, 2030. We do not bury it in the food price.',
  },
  {
    q: 'Why bands instead of a single number?',
    a: 'A private-chef quote depends on your menu, your date and your kitchen. A band is an honest starting range; the quote is always exact before you deposit.',
  },
  {
    q: 'How do deposits work?',
    a: 'A 50% deposit locks your date. The full cancellation posture lives on our legal page.',
    link: { to: '/legal', label: 'Read the terms posture →' },
  },
];

function PricingFaq() {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto w-full max-w-3xl px-5 lg:px-10">
        <Reveal className="text-center">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">Pricing FAQ</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ink">
            Price questions, straight answers.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <Accordion.Root type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <Accordion.Item key={f.q} value={`item-${i}`} className="border-b border-stone">
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left">
                    <span className="font-display text-[1.125rem] font-medium leading-snug text-ink lg:text-[1.375rem]">
                      {f.q}
                    </span>
                    <ChevronDown className="h-5 w-5 shrink-0 text-clay transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <p className="max-w-[65ch] pb-6 text-[1.0625rem] leading-[1.65] text-ink-soft">
                    {f.a}
                    {f.link && (
                      <>
                        {' '}
                        <Link to={f.link.to} className="font-medium text-clay underline decoration-clay/40 underline-offset-4 hover:text-clay-deep">
                          {f.link.label}
                        </Link>
                      </>
                    )}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </div>
    </section>
  );
}

function CompareAndPackages() {
  const { islandId } = useIsland();
  const id = islandId && islandOrder.includes(islandId) ? islandId : 'maui';
  return (
    <>
      <section className="bg-sand py-16 lg:py-24">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">How we sit in the market</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium text-ink">
            Villa chef vs restaurant week vs per-person platforms
          </h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-stone font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-ink-soft">
                  <th className="py-3 pr-4"> </th>
                  <th className="py-3 pr-4">myCHEF Hawaii</th>
                  <th className="py-3 pr-4">Restaurant week</th>
                  <th className="py-3">Per-person chef platforms</th>
                </tr>
              </thead>
              <tbody className="text-ink-soft">
                <tr className="border-b border-stone">
                  <td className="py-4 pr-4 font-medium text-ink">Price</td>
                  <td className="py-4 pr-4">Published $125–$250/pp CORE. Named packages.</td>
                  <td className="py-4 pr-4">$80–$200+/cover plus tax, tip, taxis, kids, babysitter.</td>
                  <td className="py-4">Public Maui bands ~$123–$171/pp. Similar Honolulu/Kauaʻi ~$140/pp.</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-4 pr-4 font-medium text-ink">Who cooks</td>
                  <td className="py-4 pr-4">One named chef team. We shop, cook, serve and clean.</td>
                  <td className="py-4 pr-4">Whoever is on the line that night.</td>
                  <td className="py-4">A marketplace of many chefs. You pick from a grid.</td>
                </tr>
                <tr className="border-b border-stone">
                  <td className="py-4 pr-4 font-medium text-ink">Where</td>
                  <td className="py-4 pr-4">Your villa / Airbnb kitchen. Cleanup included.</td>
                  <td className="py-4 pr-4">Their dining room. Reservations, parking, bedtime.</td>
                  <td className="py-4">Your kitchen. Drinks usually not included.</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-medium text-ink">Next step</td>
                  <td className="py-4 pr-4">WhatsApp + written quote. Typical reply in business hours.</td>
                  <td className="py-4 pr-4">OpenTable.</td>
                  <td className="py-4">Browse chefs, then book.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 max-w-[65ch] text-sm text-ink-soft">
            We do not invent competitor names on this page. The mechanic is the point: we are in the same dollar band,
            with published starting prices and one team — not fifty profiles.
          </p>
          <div className="mt-8">
            <DualCtaLight island={islandId ?? undefined} intent="a private chef quote" />
          </div>
        </div>
      </section>
      <PackageGrid island={id} heading="Named packages" />
    </>
  );
}

export default function Pricing() {
  return (
    <>
      <Header />
      <CompareAndPackages />
      <RateCardTabs />
      <DayRateAndBar />
      <OtherModels />
      <FeeStack />
      <PricingFaq />
      <QuoteTeaserBand headline="Want the exact number for your dates?" />
    </>
  );
}
