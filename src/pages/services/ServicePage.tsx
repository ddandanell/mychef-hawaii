import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router';
import { motion } from 'framer-motion';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import HeroMedia from '@/components/HeroMedia';
import HostLink from '@/components/HostLink';
import Reveal from '@/components/Reveal';
import StatusChip from '@/components/StatusChip';
import type { ChipKind } from '@/components/StatusChip';
import WordMask from '@/components/WordMask';
import type { IslandId } from '@/data/islands';
import { islands } from '@/data/islands';
import { zoneMap } from '@/data/zoneMap';
import { cn } from '@/lib/utils';

/**
 * Shared service-page template (service-private-chef.md is the canonical
 * template; design.md §10 rows 14–17). Every island × service page composes
 * these primitives and binds commercial content from the canonical data
 * objects (rateCard / zoneMap / proofRegister) — nothing here hard-codes a
 * price, zone, or proof claim.
 */

export type LiveIslandId = Extract<IslandId, 'maui' | 'oahu'>;

/* ---------------- JSON-LD ---------------- */

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/** Service + BreadcrumbList schema. Bands stay out of OfferCatalog until BDE clears (launch posture: Service only). */
export function serviceJsonLd({
  name,
  description,
  islandName,
  path,
  crumbs,
}: {
  name: string;
  description: string;
  islandName: string;
  path: string;
  crumbs: string[];
}) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name,
      description,
      provider: { '@type': 'Organization', name: 'myCHEF Hawaii' },
      areaServed: { '@type': 'Place', name: `${islandName}, Hawaiʻi` },
      url: path,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: crumbs.map((label, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: label,
      })),
    },
  ];
}

/* ---------------- Hash anchor scrolling (#weekly, #chefs-table, #for-two) ---------------- */

export function useHashScroll() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const t = window.setTimeout(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 450);
    return () => window.clearTimeout(t);
  }, [hash]);
}

/* ---------------- Chips ---------------- */

/** A price/model line with its governing status chip always adjacent (design.md §8.3). */
export function BandChip({
  label,
  chipLabel = 'BDE',
  kind = 'bde',
  onDark,
}: {
  label: string;
  chipLabel?: string;
  kind?: ChipKind;
  onDark?: boolean;
}) {
  return (
    <span className="inline-flex flex-wrap items-center gap-x-2 gap-y-1.5">
      <span
        className={cn(
          'font-mono text-[0.75rem] uppercase leading-5 tracking-[0.1em]',
          onDark ? 'text-ivory/90' : 'text-ink',
        )}
      >
        {label}
      </span>
      <StatusChip kind={kind} onDark={onDark}>
        {chipLabel}
      </StatusChip>
    </span>
  );
}

/** A plain mono outline chip for non-price facts (guest ranges, peak months). */
export function PlainChip({ children, onDark }: { children: ReactNode; onDark?: boolean }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 font-mono text-[0.6875rem] uppercase leading-4 tracking-[0.12em]',
        onDark ? 'border-ivory/30 text-ivory/85' : 'border-stone text-ink-soft',
      )}
    >
      {children}
    </span>
  );
}

/* ---------------- Breadcrumb ---------------- */

export interface Crumb {
  label: string;
  to?: string;
}

export function Breadcrumb({ items, onDark }: { items: Crumb[]; onDark?: boolean }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        'font-mono text-[0.6875rem] uppercase tracking-[0.14em]',
        onDark ? 'text-ivory/60' : 'text-ink-soft',
      )}
    >
      {items.map((c, i) => (
        <span key={c.label}>
          {i > 0 ? (
            <span aria-hidden="true" className="mx-2">
              →
            </span>
          ) : null}
          {c.to ? (
            <Link to={c.to} className={cn('transition-colors', onDark ? 'hover:text-ivory' : 'hover:text-clay')}>
              {c.label}
            </Link>
          ) : (
            <span aria-current="page">{c.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

/* ---------------- Hero (80svh default; wedding earns 100svh) ---------------- */

export interface HeroCta {
  label: string;
  to: string;
}

export function ServiceHero({
  crumbs,
  eyebrow,
  title,
  lede,
  image,
  imageAlt,
  chips,
  primary,
  secondary,
  fullHeight = false,
}: {
  crumbs: Crumb[];
  eyebrow: string;
  title: string;
  lede: string;
  image: string;
  imageAlt: string;
  chips?: ReactNode;
  primary: HeroCta;
  secondary: HeroCta;
  fullHeight?: boolean;
}) {
  return (
    <section
      className={cn(
        'relative flex items-end overflow-hidden',
        fullHeight ? 'min-h-[100svh] min-h-[640px]' : 'min-h-[80svh] min-h-[560px]',
      )}
    >
      <HeroMedia src={image} alt={imageAlt} />
      <div className="relative mx-auto w-full max-w-spread px-5 pb-20 pt-36 lg:px-10">
        <div className="max-w-[680px]">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.1 }}>
            <Breadcrumb items={crumbs} onDark />
            <p className="mt-5 flex items-center gap-2.5 font-mono text-[0.75rem] uppercase tracking-[0.18em] text-brass">
              <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-moss" />
              {eyebrow}
            </p>
          </motion.div>
          <h1 className="mt-5 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-white">
            <WordMask text={title} delay={0.2} />
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
          >
            <p className="mt-6 max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ivory/90 lg:text-[1.125rem]">
              {lede}
            </p>
            {chips ? <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">{chips}</div> : null}
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                to={primary.to}
                className="inline-flex items-center rounded-full bg-clay px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-px hover:bg-clay-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-clay active:scale-[0.97]"
              >
                {primary.label}
              </Link>
              {secondary.to.startsWith('#') ? (
                <a
                  href={secondary.to}
                  className="text-sm font-medium text-ivory/90 underline decoration-brass/60 underline-offset-4 transition-colors hover:text-white"
                >
                  {secondary.label}
                </a>
              ) : (
                <Link
                  to={secondary.to}
                  className="text-sm font-medium text-ivory/90 underline decoration-brass/60 underline-offset-4 transition-colors hover:text-white"
                >
                  {secondary.label}
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section intro ---------------- */

export function SectionIntro({
  eyebrow,
  title,
  body,
  dark,
  center,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal className={cn(center && 'mx-auto max-w-2xl text-center')}>
      <p className={cn('font-mono text-[0.75rem] uppercase tracking-[0.18em]', dark ? 'text-brass' : 'text-clay')}>
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
      {body ? (
        <p
          className={cn(
            'mt-4 max-w-[65ch] text-[1.0625rem] leading-[1.65]',
            dark ? 'text-ivory/75' : 'text-ink-soft',
            center && 'mx-auto',
          )}
        >
          {body}
        </p>
      ) : null}
    </Reveal>
  );
}

/* ---------------- Zone strip (from canonical zoneMap; 3 rows max + island link) ---------------- */

export function ZoneStrip({ islandId }: { islandId: IslandId }) {
  const zm = zoneMap[islandId];
  const isl = islands[islandId];
  const base = zm.zones.filter((z) => z.class === 'base');
  const surcharge = zm.zones.filter((z) => z.class === 'surcharge');
  const quoteOnly = zm.zones.filter((z) => z.class === 'quote-only');

  const rows: { label: string; value: string; bde: boolean }[] = [];
  if (base.length) {
    rows.push({ label: 'Base zones — included', value: base.map((z) => z.name).join(' · '), bde: false });
  }
  if (surcharge.length) {
    rows.push({
      label: 'Surcharge — published',
      value: surcharge.map((z) => (z.driveTime ? `${z.name} (${z.driveTime})` : z.name)).join(' · '),
      bde: surcharge.some((z) => z.feeChip === 'BDE'),
    });
  }
  if (quoteOnly.length) {
    rows.push({
      label: 'Quote-only — extended drive',
      value: quoteOnly.map((z) => z.name).join(' · '),
      bde: quoteOnly.some((z) => z.feeChip === 'BDE'),
    });
  }

  return (
    <div>
      <SectionIntro eyebrow="Coverage — honestly zoned" title={zm.headline} />
      <Reveal stagger staggerDelay={0.07} className="mt-10">
        {rows.slice(0, 3).map((row) => (
          <div
            key={row.label}
            className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-stone py-4"
          >
            <span className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-ink-soft">{row.label}</span>
            <span className="flex flex-wrap items-center justify-end gap-2">
              <span className="text-sm text-ink">{row.value}</span>
              {row.bde ? <StatusChip kind="bde">BDE</StatusChip> : null}
            </span>
          </div>
        ))}
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 font-mono text-[0.6875rem] uppercase leading-5 tracking-[0.1em] text-ink-soft">
          {zm.honestyLine}
        </p>
        <HostLink
          island={isl.id}
          className="mt-3 inline-flex items-center text-sm font-medium text-clay underline decoration-clay/40 underline-offset-4 transition-colors hover:text-clay-deep"
        >
          See the full zone module on the {isl.name} page →
        </HostLink>
      </Reveal>
    </div>
  );
}

/* ---------------- FAQ (restyled accordion + FAQPage schema for AI extraction) ---------------- */

export interface ServiceFaqItem {
  q: string;
  a: string;
}

export function ServiceFaq({
  items,
  title = 'Before you ask.',
  intro,
}: {
  items: ServiceFaqItem[];
  title?: string;
  intro?: string;
}) {
  return (
    <div>
      <div className="grid gap-12 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">Questions</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ink">
            {title}
          </h2>
          {intro ? <p className="mt-4 max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ink-soft">{intro}</p> : null}
        </Reveal>
        <Reveal stagger staggerDelay={0.07} className="lg:col-span-3">
          <Accordion.Root type="single" collapsible className="w-full">
            {items.map((f, i) => (
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
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: items.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }}
      />
    </div>
  );
}
