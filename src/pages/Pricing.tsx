import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import Contours from '@/components/Contours';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import Reveal from '@/components/Reveal';
import StatusChip from '@/components/StatusChip';
import type { ChipKind } from '@/components/StatusChip';
import WordMask from '@/components/WordMask';
import { useIsland } from '@/context/IslandContext';
import { islandOrder, islands } from '@/data/islands';
import type { IslandId } from '@/data/islands';
import { feeStack, formatBand, getTiers, otherOffers } from '@/data/rateCard';
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
  BDE: 'bde',
  'RPR — ATTORNEY': 'rpr',
  'RPR — CPA': 'rpr',
  RPR: 'rpr',
  'VERIFIED — POLICY': 'policy',
};

/* ---------------- Section 1 — Header + Status Banner ---------------- */

function Header() {
  return (
    <section className="relative overflow-hidden bg-ivory pb-16 pt-14 lg:pb-20 lg:pt-20">
      <Contours className="absolute -right-24 -top-16 h-96 w-[520px] opacity-[0.06]" stroke="#A34A28" />
      <div className="relative mx-auto w-full max-w-container px-5 lg:px-10">
        <motion.div
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[14px] border border-brass px-5 py-4"
        >
          <p className="font-mono text-[0.6875rem] uppercase leading-5 tracking-[0.1em] text-brass">
            Planning orientation — All figures below are indicative bands pending final rate-card approval{' '}
            <StatusChip kind="bde" className="mx-1">BDE</StatusChip> Tax and service-charge display mechanics are
            under CPA/attorney review <StatusChip kind="rpr" className="mx-1">RPR</StatusChip> Final quotes are
            always itemised in writing.
          </p>
        </motion.div>
        <p className="mt-10 font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">Pricing</p>
        <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
          <WordMask text="Honest numbers, labeled honestly." delay={0.35} />
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          className="mt-6 max-w-[65ch] text-[1.25rem] leading-[1.55] text-ink"
        >
          One architecture, four island rate cards — because a Maui villa dinner and an Oʻahu condo dinner are
          different economics. Every band below is a planning range, not a retail price.
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
  const isl = islands[active];

  return (
    <section className="bg-ivory pb-20 lg:pb-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <Reveal>
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">
            Signature In-Villa Dinner — Per-Person Bands
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
            {isl.state === 'inquiry' && (
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <StatusChip kind="inquiry">Inquiry stage</StatusChip>
                <p className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-ink-soft">
                  Rate card activates when the island launches.
                </p>
              </div>
            )}
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
                      <StatusChip kind="bde">BDE</StatusChip>
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
                      {isl.state === 'inquiry' ? 'Join the inquiry list' : 'Request this tier'}
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

/* ---------------- Section 3 — Beyond the dinner ---------------- */

function OtherModels() {
  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">Other Pricing Models</p>
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
              <p className="text-[0.9375rem] leading-relaxed text-ink-soft">
                <span className="text-ink">{row.orientation}</span>{' '}
                <StatusChip kind="bde" className="ml-1 align-middle">BDE</StatusChip>
              </p>
            </div>
          ))}
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-8 max-w-3xl font-mono text-[0.6875rem] uppercase leading-5 tracking-[0.1em] text-ink-soft">
            Labeled figures are market signals from published competitor/platform sources with dates, never neutral
            “market prices”. Our final rates are set from our own cost stack.
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
    q: 'Why bands instead of exact prices?',
    a: 'Because a private-chef quote depends on your menu, your date and your kitchen. A band is an honest planning range; your written quote is always exact and itemised before you commit to anything.',
  },
  {
    q: 'Why do small parties cost more per head?',
    a: 'The chef’s time, shopping and travel are largely fixed costs. Spread across two guests instead of eight, the per-person figure rises — so small parties are quoted as fixed-price products rather than stretched per-person bands. Ask us; we’ll show the math.',
  },
  {
    q: 'What’s included — and what isn’t?',
    a: 'Menu design, shopping, cooking, tableside service and kitchen cleanup are inside the band. Groceries for multi-day service are billed at cost. Service charge, GET and any travel-zone fee appear as their own labeled lines — never folded in silently.',
  },
  {
    q: 'How do deposits and cancellations work?',
    a: 'A 50% deposit locks your date (market norm, RPR-labeled). The full cancellation posture lives on our legal page — plain language, labeled the same way as everything else here.',
    link: { to: '/legal', label: 'Read the terms posture →' },
  },
  {
    q: 'Why do you publish competitor-labeled price signals?',
    a: 'Because you were going to compare anyway. Labeled signals — with sources and dates — are more honest than pretending a single neutral “market price” exists. Our own rates are set from our own cost stack.',
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

export default function Pricing() {
  return (
    <>
      <Header />
      <RateCardTabs />
      <OtherModels />
      <FeeStack />
      <PricingFaq />
      <QuoteTeaserBand headline="Want the exact number for your dates?" />
    </>
  );
}
