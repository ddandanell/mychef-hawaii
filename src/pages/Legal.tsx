import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import type { ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import Contours from '@/components/Contours';
import Reveal from '@/components/Reveal';
import StatusChip from '@/components/StatusChip';
import type { ChipKind } from '@/components/StatusChip';
import WordMask from '@/components/WordMask';
import { feeStack } from '@/data/rateCard';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

/**
 * /legal — legal & policy posture (legal.md). A deliberate "document"
 * aesthetic: narrow measure, mono section numbers, hairline rules, brass
 * section markers. Every unsettled item carries its professional-review
 * label (RPR / CPA), adjacent to the number it governs.
 */

function feeChipKind(chip: string): ChipKind {
  if (chip.startsWith('VERIFIED')) return 'verified';
  if (chip.startsWith('RPR')) return 'rpr';
  if (chip.startsWith('PUBLISHED')) return 'published';
  return 'published';
}

/* ---------------- Section 1 — Header ---------------- */

function Header() {
  return (
    <section className="relative overflow-hidden bg-ivory pt-20 lg:pt-28">
      <Contours className="absolute -right-24 -top-16 h-96 w-[520px] opacity-[0.06]" stroke="#A34A28" />
      <div className="relative mx-auto w-full max-w-container px-5 lg:px-10">
        <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">Policies</p>
        <h1 className="mt-4 max-w-[14ch] font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
          <WordMask text="The fine print, in large type." delay={0.15} />
        </h1>
        <Reveal delay={0.6} y={24}>
          <p className="mt-6 max-w-[68ch] text-[1.25rem] leading-[1.55] text-ink">
            Everything that governs a myCHEF Hawaii booking, written to be read. Items still under
            professional review are labeled exactly that.
          </p>
        </Reveal>
        <Reveal delay={0.75} className="mt-8 max-w-[68ch]">
          <p className="rounded-[10px] border border-brass px-5 py-4 font-mono text-[0.75rem] uppercase leading-6 tracking-[0.08em] text-brass">
            This page describes policy posture, not executed legal terms. Final contracts are
            attorney-drafted. Chips: <span className="whitespace-nowrap">RPR = requires professional review</span>{' '}
            · <span className="whitespace-nowrap">CPA = CPA sign-off pending</span>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Section 2 — Policy document (01–07) ---------------- */

function P({ children }: { children: ReactNode }) {
  return <p className="mt-4 max-w-[68ch] text-[1.0625rem] leading-[1.65] text-ink-soft">{children}</p>;
}

function ChipRow({ children }: { children: ReactNode }) {
  return <span className="mt-3 flex flex-wrap items-center gap-2">{children}</span>;
}

const cancellationTiers = [
  { window: '28+ days', posture: 'Partial refund posture' },
  { window: '14–28 days', posture: 'Deposit retained' },
  { window: '<7 days', posture: 'Full balance posture' },
];

const policySections: { id: string; num: string; title: string; body: ReactNode }[] = [
  {
    id: 's01',
    num: '01',
    title: 'Quotes & booking',
    body: (
      <>
        <P>
          Every booking is confirmed by an itemised written quote: menu price, staffing, travel-zone fees,
          service charge and tax posture — each on its own line.{' '}
          <StatusChip kind="verified">Verified — Policy</StatusChip>
        </P>
        <P>
          Indicative website bands are published starting prices. Your written quote confirms the night.{' '}
          <StatusChip kind="published">Published</StatusChip>
        </P>
        <div className="mt-6 rounded-[14px] border border-stone bg-white p-5 lg:p-6">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-ink">
            Every quote shows this fee stack
          </p>
          <ul className="mt-4 divide-y divide-stone">
            {feeStack.map((row) => (
              <li key={row.label} className="flex flex-wrap items-center gap-x-4 gap-y-2 py-3">
                <span className="min-w-0 flex-1 text-sm leading-relaxed text-ink-soft">{row.label}</span>
                <StatusChip kind={feeChipKind(row.chip)}>{row.chip}</StatusChip>
              </li>
            ))}
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 's02',
    num: '02',
    title: 'Deposits',
    body: (
      <>
        <P>
          A deposit locks your date; the Hawaiʻi market norm is 50%, with final balance due 7–14 days before
          the event and headcount lock at 14–21 days.
        </P>
        <ChipRow>
          <StatusChip kind="published">Market norm — labeled</StatusChip>
          <StatusChip kind="rpr">RPR</StatusChip>
        </ChipRow>
        <P>No Hawaiʻi catering-deposit statute governs this; final terms are attorney-drafted.</P>
      </>
    ),
  },
  {
    id: 's03',
    num: '03',
    title: 'Cancellation & weather',
    body: (
      <>
        <P>Proposed cancellation tiers — presented as proposed, not final:</P>
        <div className="mt-4 max-w-[68ch] rounded-[14px] border border-stone bg-white">
          <ul className="divide-y divide-stone">
            {cancellationTiers.map((t) => (
              <li key={t.window} className="flex items-center gap-4 px-5 py-3.5">
                <span className="w-24 shrink-0 font-mono text-[0.75rem] uppercase tracking-[0.1em] text-brass">
                  {t.window}
                </span>
                <span className="text-sm leading-relaxed text-ink-soft">{t.posture}</span>
              </li>
            ))}
          </ul>
        </div>
        <ChipRow>
          <StatusChip kind="rpr">RPR — Attorney review</StatusChip>
        </ChipRow>
        <P>
          Force-majeure: road closures, flood advisories and bridge closures (e.g., Hanalei) reschedule
          rather than forfeit, where safe and feasible. <StatusChip kind="rpr">RPR</StatusChip>
        </P>
      </>
    ),
  },
  {
    id: 's04',
    num: '04',
    title: 'Taxes (GET)',
    body: (
      <>
        <P>
          Hawaiʻi&apos;s General Excise Tax is a tax on our gross income, not on you. If passed on visibly,
          the maximum rate is 4.7120% including county surcharge — identical on all four islands, valid
          through December 31, 2030 — always shown as its own line.
        </P>
        <ChipRow>
          <StatusChip kind="verified">Verified — DOTAX-derived</StatusChip>
          <StatusChip kind="rpr">CPA sign-off pending</StatusChip>
        </ChipRow>
        <p className="mt-5 font-mono text-[0.6875rem] uppercase leading-5 tracking-[0.1em] text-ink-soft">
          We will never display the obsolete 4.166% figure.
        </p>
      </>
    ),
  },
  {
    id: 's05',
    num: '05',
    title: 'Service charge & gratuity',
    body: (
      <>
        <P>
          Where a service charge applies (20% is the market convention), Hawaiʻi law (HRS §481B-14 posture)
          requires it be distributed to employees as tip income or its retention clearly disclosed. Our
          quotes will state which, in writing.
        </P>
        <ChipRow>
          <StatusChip kind="published">Market norm — labeled</StatusChip>
          <StatusChip kind="rpr">RPR — Attorney</StatusChip>
        </ChipRow>
        <P>Gratuity beyond that is always voluntary.</P>
      </>
    ),
  },
  {
    id: 's06',
    num: '06',
    title: 'Licensing, insurance & food safety',
    body: (
      <>
        <P>
          Operating structure, food-handler certification pathway and insurance certificates publish here
          when issued and verifiable.{' '}
          <StatusChip kind="pending">Pending — publish only if true</StatusChip>
        </P>
        <P>
          We do not display license numbers or certificates we don&apos;t hold.{' '}
          <StatusChip kind="not-available">Prohibited</StatusChip>
        </P>
      </>
    ),
  },
  {
    id: 's07',
    num: '07',
    title: 'Privacy & accessibility',
    body: (
      <>
        <P>
          We collect only what the quote form asks, use it only to serve your enquiry, never sell it.
          Analytics are island-dimensioned and cookie-consented.
        </P>
        <P>
          Built to WCAG 2.2 AA: contrast-checked, keyboard-navigable, reduced-motion respected. Issues? Tell
          us via the quote form&apos;s &apos;other&apos; channel.
        </P>
      </>
    ),
  },
];

function PolicyDocument() {
  const docRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState('s01');

  useEffect(() => {
    const doc = docRef.current;
    if (!doc) return;
    const ctx = gsap.context(() => {
      doc.querySelectorAll<HTMLElement>('[data-policy-section]').forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 45%',
          end: 'bottom 45%',
          onToggle: (self) => {
            if (self.isActive) setActive(el.dataset.policySection ?? 's01');
          },
        });
      });
    }, doc);
    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div ref={docRef} className="mx-auto w-full max-w-container px-5 lg:px-10">
        {/* Mobile: horizontal scroll chip bar */}
        <nav
          aria-label="Policy sections"
          className="sticky top-[60px] z-30 -mx-5 mb-10 overflow-x-auto border-b border-stone bg-ivory/95 px-5 py-3 backdrop-blur lg:hidden"
        >
          <div className="flex gap-2">
            {policySections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={cn(
                  'whitespace-nowrap rounded-full border px-3 py-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.08em] transition-colors',
                  active === s.id ? 'border-brass text-brass' : 'border-stone text-ink-soft',
                )}
              >
                {s.num} · {s.title}
              </a>
            ))}
          </div>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-20">
          {/* Desktop: sticky section rail */}
          <nav aria-label="Policy sections" className="hidden lg:block">
            <div className="sticky top-32 self-start">
              <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">Contents</p>
              <ul className="mt-6 space-y-1">
                {policySections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className={cn(
                        'flex items-baseline gap-3 rounded-[10px] px-3 py-2.5 transition-colors',
                        active === s.id ? 'bg-sand text-ink' : 'text-ink-soft hover:bg-sand/60',
                      )}
                    >
                      <span
                        className={cn(
                          'font-mono text-[0.75rem] tracking-[0.1em]',
                          active === s.id ? 'text-brass' : 'text-ink-soft/60',
                        )}
                      >
                        {s.num}
                      </span>
                      <span className="text-sm font-medium">{s.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* The document */}
          <div className="max-w-[68ch]">
            {policySections.map((s, i) => (
              <article
                key={s.id}
                id={s.id}
                data-policy-section={s.id}
                className={cn('scroll-mt-32', i > 0 && 'mt-16 border-t border-stone pt-16')}
              >
                <Reveal>
                  <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-brass">
                    §{s.num}
                  </p>
                  <h2 className="mt-3 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ink">
                    {s.title}
                  </h2>
                </Reveal>
                <Reveal delay={0.08}>{s.body}</Reveal>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 3 — What the labels mean ---------------- */

const labelExplainers = [
  {
    chip: 'verified' as ChipKind,
    label: 'Verified',
    body: "Checked against an official or primary source, with period labels (e.g., 'CY2025, preliminary').",
  },
  {
    chip: 'published' as ChipKind,
    label: 'Published',
    body: 'Starting prices from the rate card. Your written quote is the contract; service charge and GET stay on their own lines.',
  },
  {
    chip: 'pending' as ChipKind,
    label: 'Labeled signal',
    body: 'Competitor or platform figures, date-stamped and attributed — never presented as neutral market facts.',
  },
];

function LabelsExplainer() {
  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ink">
            What the labels mean.
          </h2>
        </Reveal>
        <Reveal stagger staggerDelay={0.1} className="mt-12 grid gap-5 md:grid-cols-3">
          {labelExplainers.map((l) => (
            <div key={l.label} className="rounded-[14px] border border-stone bg-white p-6 lg:p-8">
              <StatusChip kind={l.chip}>{l.label}</StatusChip>
              <p className="mt-4 text-[1.0625rem] leading-[1.65] text-ink-soft">{l.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Section 4 — Slim CTA ---------------- */

function SlimCta() {
  return (
    <section className="bg-ivory py-20 lg:py-24">
      <div className="mx-auto w-full max-w-container px-5 lg:px-10">
        <Reveal className="flex flex-wrap items-center justify-between gap-6 border-t border-stone pt-12">
          <p className="max-w-[52ch] font-display text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-[1.2] tracking-[-0.015em] text-ink">
            Questions about any policy? Ask before you book —
          </p>
          <Link
            to="/quote"
            className="inline-flex items-center gap-1.5 rounded-full bg-clay px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-px hover:bg-clay-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-clay active:scale-[0.97]"
          >
            Request a Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Page ---------------- */

export default function Legal() {
  return (
    <>
      <Header />
      <PolicyDocument />
      <LabelsExplainer />
      <SlimCta />
    </>
  );
}
