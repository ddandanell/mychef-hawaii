import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import * as Accordion from '@radix-ui/react-accordion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';
import Contours from '@/components/Contours';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import Reveal from '@/components/Reveal';
import StatusChip from '@/components/StatusChip';
import type { ChipKind } from '@/components/StatusChip';
import WordMask from '@/components/WordMask';
import { proofRegister } from '@/data/proofRegister';

gsap.registerPlugin(ScrollTrigger);

/**
 * /trust — the proof page for a brand with zero Hawaiʻi reviews (trust.md).
 * Converts the weakest point into the most provable claim: a rigorously
 * honest proof architecture. Schema: Organization reference only — no
 * AggregateRating, no Review markup, prohibited until third-party-verified
 * reviews exist.
 */

/* ---------------- Section 1 — Header ---------------- */

function Header() {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-container items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div>
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">Trust</p>
          <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
            <WordMask text="New to Hawaiʻi. Not new at this." delay={0.15} />
          </h1>
          <Reveal delay={0.65} y={24}>
            <p className="mt-6 max-w-[65ch] text-[1.25rem] leading-[1.55] text-ink">
              myCHEF operates private-chef services internationally and is launching in Hawaiʻi now. That
              means we don&apos;t have Hawaiʻi reviews yet — so instead of pretending, we publish exactly
              what we can prove, and label everything else.
            </p>
          </Reveal>
        </div>
        <ClipReveal className="aspect-[4/5] rounded-[14px] border border-stone shadow-soft">
          <img
            src="/photos/vacation-chef.jpg"
            alt="Three small framed prints of different coastlines on a warm plaster wall"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </ClipReveal>
      </div>
    </section>
  );
}

/* ---------------- Clip-reveal frame (GSAP, isolated) ---------------- */

function ClipReveal({ children, className }: { children: React.ReactNode; className?: string }) {
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
        scrollTrigger: { trigger: el, start: 'top 78%', once: true },
      },
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <div ref={ref} className={className ? `overflow-hidden ${className}` : 'overflow-hidden'}>
      {children}
    </div>
  );
}

/* ---------------- Section 2 — The Proof Register ---------------- */

type RegisterStatus = 'VERIFIED' | 'PENDING' | 'NOT_AVAILABLE' | 'PROHIBITED';

const statusChipKind: Record<RegisterStatus, ChipKind> = {
  VERIFIED: 'verified',
  PENDING: 'pending',
  NOT_AVAILABLE: 'not-available',
  PROHIBITED: 'not-available',
};

interface RegisterRow {
  claim: string;
  status: RegisterStatus;
  label: string;
  detail: string;
}

// Rows 1–2 render from the canonical proof register (anti-drift rule);
// page-specific rows and expandable detail copy per trust.md §2.
const registerRows: RegisterRow[] = [
  {
    claim: proofRegister[0].claim,
    status: proofRegister[0].status,
    label: proofRegister[0].label,
    detail:
      'Family history is real and labeled by geography. It says nothing about Hawaiʻi yet — and we never present it as local experience.',
  },
  {
    claim: 'Hawaiʻi client reviews',
    status: 'NOT_AVAILABLE',
    label: 'NOT AVAILABLE — YET',
    detail:
      'Reviews publish here only after verified Hawaiʻi events, routed to third-party platforms. We will never buy, incentivize, or gate a review (FTC 16 CFR Part 465; Google/Yelp policy).',
  },
  {
    claim: 'Star ratings / review markup on this site',
    status: 'PROHIBITED',
    label: 'PROHIBITED — BY POLICY',
    detail:
      'No self-serving review markup, ever. Ratings appear only when third-party platforms carry them.',
  },
  {
    claim: 'Named Hawaiʻi chefs',
    status: 'PENDING',
    label: 'PENDING — REAL PEOPLE ONLY',
    detail: 'Chef profiles publish when real, hired chefs exist. No stock-photo chefs, no invented bios.',
  },
  {
    claim: 'Insurance & food-safety credentials',
    status: 'PENDING',
    label: 'PENDING — PUBLISH IF VERIFIABLE',
    detail:
      "Certificates publish when issued and verifiable. Until then we say 'pending', not 'fully insured'.",
  },
  {
    claim: '\u2018Serving Hawaiʻi since…\u2019 claims',
    status: 'PROHIBITED',
    label: 'PROHIBITED',
    detail: 'We launched in 2026. Any site telling you otherwise about us is wrong.',
  },
];

function ProofRegisterSection() {
  return (
    <section className="bg-ivory pb-20 lg:pb-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">The Proof Register</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ink">
            Every claim, with its status.
          </h2>
          <p className="mt-4 max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ink-soft">
            An index of record, not a marketing page. Tap any row for the detail behind the label.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <Accordion.Root type="single" collapsible className="w-full border-t border-stone">
            {registerRows.map((row, i) => (
              <Accordion.Item key={row.label} value={`row-${i}`} className="border-b border-stone">
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full flex-wrap items-center gap-x-6 gap-y-3 py-6 text-left">
                    <span className="min-w-0 flex-1 font-display text-[1.25rem] font-medium leading-[1.25] text-ink lg:text-[1.375rem]">
                      {row.claim}
                    </span>
                    <span className="flex items-center gap-4">
                      <StatusChip kind={statusChipKind[row.status]}>{row.label}</StatusChip>
                      <ChevronDown className="h-5 w-5 shrink-0 text-clay transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <p className="max-w-[65ch] pb-6 pr-8 text-[1.0625rem] leading-[1.65] text-ink-soft">
                    {row.detail}
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

/* ---------------- Section 3 — Our review policy ---------------- */

const policyCards = [
  {
    title: 'Never incentivized',
    body: "No discounts, credits, or gifts for reviews. That's a federal rule (FTC) and platform rule — and it should be.",
  },
  {
    title: 'Never gated',
    body: 'We ask every client the same way, happy or not. We never screen for happy customers first.',
  },
  {
    title: 'Platform-first',
    body: 'Reviews live on third-party platforms (Google, wedding platforms) where you can verify them, not in a carousel we control.',
  },
  {
    title: 'Labeled history',
    body: 'International testimonials, when shown, always carry their geography. Bali praise is Bali praise.',
  },
];

function ReviewPolicy() {
  const contourRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contourRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const paths = el.querySelectorAll('path');
    paths.forEach((p) => {
      const len = p.getTotalLength();
      gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
    });
    const tween = gsap.to(paths, {
      strokeDashoffset: 0,
      ease: 'none',
      stagger: 0.05,
      scrollTrigger: { trigger: el, start: 'top 85%', end: 'bottom 40%', scrub: true },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section className="grain-dark relative overflow-hidden bg-ink py-20 lg:py-28">
      <div ref={contourRef} aria-hidden="true" className="absolute inset-0">
        <Contours stroke="#9C7A33" strokeWidth={1} className="absolute -right-40 top-0 h-[640px] w-[860px] opacity-25" />
      </div>
      <div className="relative mx-auto w-full max-w-container px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-brass">Our Review Policy</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ivory">
            The rules we hold ourselves to.
          </h2>
        </Reveal>
        <Reveal stagger staggerDelay={0.1} className="mt-12 grid gap-5 sm:grid-cols-2">
          {policyCards.map((c) => (
            <div
              key={c.title}
              className="rounded-[14px] bg-ivory p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 lg:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-display text-[1.375rem] font-medium leading-[1.2] text-ink">{c.title}</h3>
                <StatusChip kind="policy">Policy</StatusChip>
              </div>
              <p className="mt-3 text-[1.0625rem] leading-[1.65] text-ink-soft">{c.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Section 4 — How we vet chefs ---------------- */

const vettingSteps = [
  {
    n: '01',
    title: 'Credential check',
    body: 'Food-handler certification per Hawaiʻi DOH requirements.',
    chip: 'RPR — permit pathway under professional review',
  },
  { n: '02', title: 'Background check', body: 'Completed before any client-facing event.', chip: null },
  {
    n: '03',
    title: 'Paid working trial',
    body: 'A trial service, not an interview plate.',
    chip: null,
  },
  {
    n: '04',
    title: 'Menu & costing review',
    body: 'Menus priced against the island rate card before they reach a client.',
    chip: null,
  },
  {
    n: '05',
    title: 'Event supervision',
    body: 'First events supervised by a senior chef.',
    chip: null,
  },
];

function Vetting() {
  const imgRef = useRef<HTMLImageElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const tween = gsap.fromTo(
      img,
      { yPercent: -6 },
      {
        yPercent: 6,
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
    <section className="bg-sand py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-container items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div>
          <Reveal>
            <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">Vetting</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ink">
              The standard every island team is hired to.
            </h2>
          </Reveal>
          <Reveal stagger staggerDelay={0.09} className="mt-10 space-y-7">
            {vettingSteps.map((s) => (
              <div key={s.n} className="flex gap-5">
                <span className="font-display text-2xl font-semibold leading-none text-brass">{s.n}</span>
                <div>
                  <h3 className="font-display text-[1.375rem] font-medium leading-[1.2] text-ink">{s.title}</h3>
                  <p className="mt-1.5 text-[1.0625rem] leading-[1.65] text-ink-soft">
                    {s.body}
                    {s.chip ? (
                      <>
                        {' '}
                        <StatusChip kind="rpr">{s.chip}</StatusChip>
                      </>
                    ) : null}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-10 border-t border-stone pt-6 font-mono text-[0.6875rem] uppercase leading-5 tracking-[0.1em] text-ink-soft">
              The Hawaiʻi operating and permit structure is under professional review; we publish the final
              structure when counsel signs off. See{' '}
              <Link to="/legal" className="text-clay underline-offset-2 hover:underline">
                /legal
              </Link>
              .
            </p>
          </Reveal>
        </div>
        <figure>
          <div ref={wrapRef} className="relative overflow-hidden rounded-[14px] shadow-soft">
            <img
              ref={imgRef}
              src="/photos/food-plating.jpg"
              alt="A chef plating a coursed dish — the craft standard every island team is vetted to"
              loading="lazy"
              className="aspect-[4/5] w-full scale-[1.15] object-cover"
            />
          </div>
          <figcaption className="mt-3 font-mono text-[0.625rem] uppercase tracking-[0.1em] text-ink-soft">
            Concept image — not a myCHEF Hawaiʻi event. Final photography pending.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ---------------- Section 5 — The family (geography-labeled) ---------------- */

const family = [
  { market: 'Bali', line: "est. 2015 — the family's first kitchen" },
  { market: 'Dubai', line: "the family's Middle East kitchen" },
  { market: 'Cape Town', line: "the family's Southern Africa kitchen" },
];

function Family() {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">The Family</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ink">
            International, and labeled that way.
          </h2>
        </Reveal>
        <Reveal stagger staggerDelay={0.1} className="mt-12 grid gap-5 sm:grid-cols-3">
          {family.map((f) => (
            <div
              key={f.market}
              className="rounded-[14px] border border-stone bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 lg:p-8"
            >
              <h3 className="font-display text-[1.625rem] font-medium leading-[1.2] text-ink">{f.market}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.line}</p>
              <div className="mt-5">
                <StatusChip kind="verified">Verified — International</StatusChip>
              </div>
            </div>
          ))}
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 max-w-[65ch] font-mono text-[0.6875rem] uppercase leading-5 tracking-[0.1em] text-ink-soft">
            Each market keeps its own team, its own reviews, its own licenses. Shared standards, separate
            operations.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Page ---------------- */

export default function Trust() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            '@id': '#org',
            name: 'myCHEF Hawaii',
            parentOrganization: { '@type': 'Organization', name: 'myCHEF (international)' },
          }),
        }}
      />
      <Header />
      <ProofRegisterSection />
      <ReviewPolicy />
      <Vetting />
      <Family />
      <QuoteTeaserBand headline="Honesty is the whole pitch. Taste the rest." />
    </>
  );
}
