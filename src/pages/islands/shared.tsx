import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { motion, useReducedMotion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as Accordion from '@radix-ui/react-accordion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Contours from '@/components/Contours';
import HeroMedia from '@/components/HeroMedia';
import Reveal from '@/components/Reveal';
import StatusChip from '@/components/StatusChip';
import type { ChipKind } from '@/components/StatusChip';
import WordMask from '@/components/WordMask';
import type { IslandId, IslandMeta } from '@/data/islands';
import { islands } from '@/data/islands';
import { zoneMap } from '@/data/zoneMap';
import type { Zone, ZoneClass } from '@/data/zoneMap';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

/**
 * Shared building blocks for the four island homepages
 * (island-maui.md / island-oahu.md / island-bigisland.md / island-kauai.md).
 *
 * Anti-drift rule (design.md §3): every price band renders from `rateCard`,
 * every zone from `zoneMap`, every proof claim from `proofRegister`, and
 * island identity from `islands` / IslandContext. Nothing commercial is
 * hard-coded here.
 */

/* ---------------- Hero ---------------- */

/** The one breathing element on the site (inquiry-state eyebrow dot). */
function BreathingDot() {
  const reduce = useReducedMotion();
  return (
    <motion.span
      aria-hidden="true"
      className="inline-block h-2 w-2 shrink-0 rounded-full bg-brass"
      animate={reduce ? undefined : { opacity: [1, 0.3, 1] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

export function HeroEyebrow({ island, alias }: { island: IslandMeta; alias?: string }) {
  const inquiry = island.state === 'inquiry';
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="flex flex-wrap items-center gap-x-3 gap-y-2"
    >
      {inquiry ? (
        <BreathingDot />
      ) : (
        <span aria-hidden="true" className="inline-block h-2 w-2 shrink-0 rounded-full bg-moss" />
      )}
      <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-brass">
        myCHEF {island.name}
        {alias ? ` (${alias})` : ''} — {island.stateLabel}
      </p>
      {inquiry && <StatusChip kind="inquiry">Inquiry stage</StatusChip>}
    </motion.div>
  );
}

/** Hero published-price chip: a rate-card figure, no BDE. */
export function CostChip({ label, band, index = 0 }: { label: string; band: string; index?: number }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.8 + index * 0.06 }}
      className="text-[0.9375rem] text-ivory/90"
    >
      {label} {band}
    </motion.p>
  );
}

/** State-aware primary CTA: live islands quote, inquiry islands join the list. */
export function PrimaryCta({ island, className }: { island: IslandMeta; className?: string }) {
  const inquiry = island.state === 'inquiry';
  return (
    <Link
      to={`/quote?island=${island.id}`}
      className={cn(
        'inline-flex items-center rounded-full px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-px active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px]',
        inquiry
          ? 'bg-brass hover:brightness-110 focus-visible:outline-brass'
          : 'bg-clay hover:bg-clay-deep focus-visible:outline-clay',
        className,
      )}
    >
      {inquiry ? 'Join the Inquiry List' : 'Get a quote'}
    </Link>
  );
}

/** Full-bleed hero frame — media, scrim and container per global hero rules. */
export function HeroFrame({
  island,
  children,
  src,
  alt,
}: {
  island: IslandMeta;
  children: ReactNode;
  src?: string;
  alt?: string;
}) {
  return (
    <section className="relative flex min-h-[100svh] min-h-[640px] items-end overflow-hidden">
      <HeroMedia src={src ?? island.selectorImage} alt={alt ?? `${island.name} — private chef setting`} />
      <div className="relative mx-auto w-full max-w-spread px-5 pb-24 pt-40 lg:px-10">
        <div className="max-w-[680px]">{children}</div>
      </div>
    </section>
  );
}

export function HeroH1({ text, delay = 0.2, className }: { text: string; delay?: number; className?: string }) {
  return (
    <h1
      className={cn(
        'mt-5 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-white',
        className,
      )}
    >
      <WordMask text={text} delay={delay} />
    </h1>
  );
}

/* ---------------- Section heading ---------------- */

export function SectionHead({
  eyebrow,
  title,
  intro,
  dark = false,
  center = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal className={cn('max-w-2xl', center && 'mx-auto text-center')}>
      <p
        className={cn(
          'font-mono text-[0.75rem] uppercase tracking-[0.18em]',
          dark ? 'text-brass' : 'text-clay',
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          'mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em]',
          dark ? 'text-ivory' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            'mt-4 max-w-[65ch] text-[1.0625rem] leading-[1.65] lg:text-[1.125rem]',
            dark ? 'text-ivory/80' : 'text-ink-soft',
            center && 'mx-auto',
          )}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}

/* ---------------- Service card ---------------- */

export interface ServiceCardProps {
  title: string;
  desc: string;
  img: string;
  to?: string;
  /** Published starting-price line from rateCard */
  band?: string;
  /** Labeled market stat line (mono) */
  stat?: string;
  planned?: boolean;
  wide?: boolean;
}

export function ServiceCard({ title, desc, img, to, band, stat, planned, wide }: ServiceCardProps) {
  const body = (
    <>
      <div className={cn('overflow-hidden', wide ? 'aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[220px]' : 'aspect-[4/3]')}>
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-4 lg:p-5">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-display text-[1.375rem] font-medium leading-[1.2] text-ink">{title}</h3>
          {planned && <StatusChip kind="planned">Planned</StatusChip>}
        </div>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-soft">{desc}</p>
        {band && (
          <p className="mt-3 flex flex-wrap items-center gap-2 font-mono text-[0.75rem] uppercase tracking-[0.08em] text-ink">
            <span>{band}</span>
          </p>
        )}
        {stat && (
          <p className="mt-3 font-mono text-[0.6875rem] uppercase leading-4 tracking-[0.08em] text-ink-soft">
            {stat}
          </p>
        )}
        {to && (
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-clay">
            Explore
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        )}
      </div>
    </>
  );

  const classes = cn(
    'group relative flex overflow-hidden rounded-[14px] border border-stone bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_2px_4px_rgba(34,29,21,.06),0_20px_44px_-12px_rgba(34,29,21,.2)]',
    wide ? 'col-span-2 flex-col lg:col-span-4 lg:grid lg:grid-cols-2' : 'flex-col',
  );

  return to ? (
    <Link to={to} className={classes}>
      {body}
    </Link>
  ) : (
    <div className={classes}>{body}</div>
  );
}

/* ---------------- Half panel (two-doors / shore-chooser modules) ---------------- */

export function HalfPanel({
  eyebrow,
  title,
  body,
  img,
  cta,
  chips,
}: {
  eyebrow: string;
  title: string;
  body: string;
  img: string;
  cta: ReactNode;
  chips?: ReactNode;
}) {
  return (
    <div className="group relative flex min-h-[420px] items-end overflow-hidden rounded-[14px] shadow-soft transition-shadow duration-300 hover:shadow-[0_2px_4px_rgba(34,29,21,.06),0_20px_44px_-12px_rgba(34,29,21,.2)]">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(24,19,12,0.15) 0%, rgba(24,19,12,0.55) 55%, rgba(24,19,12,0.82) 100%)',
          }}
        />
      </div>
      <div className="relative p-6 lg:p-8">
        <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-brass">{eyebrow}</p>
        <h3 className="mt-3 font-display text-[clamp(1.625rem,3vw,2.25rem)] font-medium leading-[1.1] tracking-[-0.015em] text-white">
          {title}
        </h3>
        <p className="mt-3 max-w-[52ch] text-[0.9375rem] leading-[1.6] text-ivory/90">{body}</p>
        {chips && <div className="mt-4 flex flex-wrap items-center gap-2">{chips}</div>}
        <div className="mt-6">{cta}</div>
      </div>
    </div>
  );
}

/* ---------------- Zone module ---------------- */

const zoneClassLabel: Record<ZoneClass, string> = {
  base: 'Base zone — included',
  surcharge: 'Surcharge zone',
  'quote-only': 'Quote-only',
};

function zoneStroke(cls: ZoneClass, dark: boolean): string {
  if (cls === 'base') return dark ? '#5E8371' : '#3C5648';
  if (cls === 'surcharge') return '#9C7A33';
  return dark ? 'rgba(251,248,241,0.45)' : '#5C5344';
}

/** Parameterized abstract zone diagram — concentric rings, never a literal map. */
function ZoneDiagram({ islandId, dark, reverse }: { islandId: IslandId; dark: boolean; reverse: boolean }) {
  const ref = useRef<SVGSVGElement>(null);
  const { zones } = zoneMap[islandId];
  const rings: { code: string; cls: ZoneClass }[] = [];
  zones.forEach((z) => {
    if (!rings.some((r) => r.code === z.code)) rings.push({ code: z.code, cls: z.class });
  });

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const paths = Array.from(svg.querySelectorAll('path'));
    paths.forEach((p) => {
      const len = p.getTotalLength();
      gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
    });
    const targets = reverse ? [...paths].reverse() : paths;
    const tween = gsap.to(targets, {
      strokeDashoffset: 0,
      ease: 'none',
      stagger: 0.15,
      scrollTrigger: { trigger: svg, start: 'top 85%', end: 'bottom 45%', scrub: true },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [reverse]);

  const cx = 170;
  const cy = 170;

  return (
    <svg
      ref={ref}
      viewBox="0 0 340 340"
      role="img"
      aria-label={`${islands[islandId].name} coverage zones: ${rings
        .map((r) => `Zone ${r.code} ${zoneClassLabel[r.cls]}`)
        .join(', ')}`}
      className="mx-auto w-full max-w-[380px]"
    >
      {rings.map((r, i) => {
        const radius = 62 + i * 30;
        const d = `M ${cx} ${cy - radius} A ${radius} ${radius} 0 1 1 ${cx} ${cy + radius} A ${radius} ${radius} 0 1 1 ${cx} ${cy - radius} Z`;
        return (
          <g key={r.code}>
            <path d={d} fill="none" stroke={zoneStroke(r.cls, dark)} strokeWidth={1.5} />
            <text
              x={cx}
              y={cy - radius + 16}
              textAnchor="middle"
              fill={dark ? 'rgba(251,248,241,0.75)' : '#5C5344'}
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: 2 }}
            >
              {`ZONE ${r.code}`}
            </text>
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r={4} fill={islands[islandId].hue} />
    </svg>
  );
}

function ZoneRow({ zone, dark }: { zone: Zone; dark: boolean }) {
  return (
    <div className={cn('flex gap-4 border-b pb-5', dark ? 'border-white/10' : 'border-stone')}>
      <span
        aria-hidden="true"
        className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border font-mono text-[0.6875rem] font-medium"
        style={{ borderColor: zoneStroke(zone.class, dark), color: zoneStroke(zone.class, dark) }}
      >
        {zone.code}
      </span>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <h3 className={cn('font-display text-[1.25rem] font-medium leading-[1.2]', dark ? 'text-ivory' : 'text-ink')}>
            {zone.name}
          </h3>
          <span
            className="font-mono text-[0.625rem] uppercase tracking-[0.12em]"
            style={{ color: zoneStroke(zone.class, dark) }}
          >
            {zoneClassLabel[zone.class]}
          </span>
          {zone.feeChip === 'PUBLISHED' && (
            <StatusChip kind="published" onDark={dark}>
              Published
            </StatusChip>
          )}
        </div>
        <p className={cn('mt-1.5 text-sm leading-relaxed', dark ? 'text-ivory/75' : 'text-ink-soft')}>{zone.note}</p>
        {zone.driveTime && (
          <p className={cn('mt-1 font-mono text-[0.6875rem] uppercase tracking-[0.1em]', dark ? 'text-ivory/50' : 'text-ink-soft')}>
            {zone.driveTime}
          </p>
        )}
      </div>
    </div>
  );
}

export function ZoneModule({
  islandId,
  dark = false,
  flip = false,
  reverse = false,
  eyebrow = 'Coverage — honestly zoned',
  intro,
  chipRow,
  extraNote,
}: {
  islandId: IslandId;
  dark?: boolean;
  /** flip = diagram right, text left (Kauaʻi dark module) */
  flip?: boolean;
  /** reverse = rings draw outer-to-inner (Hawaiʻi Island) */
  reverse?: boolean;
  eyebrow?: string;
  intro?: string;
  chipRow?: ReactNode;
  extraNote?: ReactNode;
}) {
  const data = zoneMap[islandId];
  return (
    <section
      className={cn(
        'py-20 lg:py-28',
        dark ? 'grain-dark relative overflow-hidden bg-ink' : 'bg-sand',
      )}
    >
      <div className="relative mx-auto grid w-full max-w-container items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <Reveal className={cn(flip && 'lg:order-2')}>
          <ZoneDiagram islandId={islandId} dark={dark} reverse={reverse} />
        </Reveal>
        <div className={cn(flip && 'lg:order-1')}>
          <SectionHead eyebrow={eyebrow} title={data.headline} intro={intro} dark={dark} />
          {chipRow && (
            <Reveal delay={0.1} className="mt-6 flex flex-wrap items-center gap-2">
              {chipRow}
            </Reveal>
          )}
          <Reveal stagger className="mt-8 space-y-5">
            {data.zones.map((z) => (
              <ZoneRow key={z.name} zone={z} dark={dark} />
            ))}
          </Reveal>
          <Reveal delay={0.15}>
            <p
              className={cn(
                'mt-8 font-mono text-[0.6875rem] uppercase leading-5 tracking-[0.12em]',
                dark ? 'text-brass' : 'text-brass',
              )}
            >
              {data.honestyLine}
            </p>
            {extraNote && (
              <p className={cn('mt-4 text-sm leading-relaxed', dark ? 'text-ivory/70' : 'text-ink-soft')}>
                {extraNote}
              </p>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Trust strip ---------------- */

export interface TrustRow {
  claim: string;
  label: string;
  kind: ChipKind;
}

export function TrustStrip({ island, rows }: { island: IslandMeta; rows: TrustRow[] }) {
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
      stagger: 0.04,
      scrollTrigger: { trigger: el, start: 'top 85%', end: '+=150%', scrub: true },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section className="grain-dark relative overflow-hidden bg-ink py-20 lg:py-28">
      <div ref={contourRef} aria-hidden="true" className="absolute inset-0">
        <Contours stroke="#9C7A33" strokeWidth={1} className="absolute -left-40 top-0 h-[640px] w-[860px] opacity-25" />
      </div>
      <div className="relative mx-auto grid w-full max-w-container gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <Reveal>
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-brass">
            Proof policy — {island.name}
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ivory">
            New to Hawaiʻi. Honest about it.
          </h2>
          <Link
            to="/trust"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-brass transition-colors hover:text-ivory"
          >
            Our trust standards
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
        <Reveal stagger className="space-y-6">
          {rows.map((row) => (
            <div key={row.label + row.claim} className="border-b border-white/10 pb-6">
              <p className="text-[1.0625rem] leading-[1.65] text-ivory/85">{row.claim}</p>
              <div className="mt-3">
                <StatusChip
                  kind={row.kind}
                  onDark
                  className={row.kind === 'policy' ? 'border-[#6E8F7F] bg-transparent text-[#9DBFB0]' : undefined}
                >
                  {row.label}
                </StatusChip>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

export interface Faq {
  q: string;
  a: string;
}

export function FaqSection({
  heading,
  intro,
  faqs,
  bg = 'bg-ivory',
}: {
  heading: string;
  intro?: string;
  faqs: Faq[];
  bg?: string;
}) {
  return (
    <section className={cn(bg, 'py-20 lg:py-28')}>
      <div className="mx-auto grid w-full max-w-container gap-12 px-5 lg:grid-cols-5 lg:px-10">
        <Reveal className="lg:col-span-2">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">Questions</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ink">
            {heading}
          </h2>
          {intro && <p className="mt-4 max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ink-soft">{intro}</p>}
        </Reveal>
        <Reveal stagger staggerDelay={0.07} className="lg:col-span-3">
          <Accordion.Root type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <Accordion.Item key={f.q} value={`item-${i}`} className="border-b border-stone">
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left">
                    <span className="font-display text-[1.25rem] font-medium leading-[1.2] text-ink">{f.q}</span>
                    <ChevronDown className="h-5 w-5 shrink-0 text-clay transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <p className="pb-6 pr-8 text-[1.0625rem] leading-[1.65] text-ink-soft">{f.a}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
    </section>
  );
}

/* ---------------- Structured data ---------------- */

/**
 * Live islands (Oʻahu, Maui): LocalBusiness referencing the root
 * Organization @id. Inquiry islands (Kauaʻi, Hawaiʻi Island): WebPage only —
 * no LocalBusiness, no local-entity claims (design.md §9.3).
 */
export function IslandJsonLd({ island }: { island: IslandMeta }) {
  const areaServed = zoneMap[island.id].zones.filter((z) => z.class !== 'quote-only').map((z) => z.name);
  const json =
    island.state === 'live'
      ? {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: `myCHEF ${island.name}`,
          description: island.role,
          parentOrganization: { '@type': 'Organization', '@id': '#org' },
          areaServed,
        }
      : {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: `myCHEF ${island.name}`,
          description: island.role,
          isPartOf: { '@type': 'WebSite', name: 'myCHEF Hawaii' },
        };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}
