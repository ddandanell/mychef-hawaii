import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router';
import { motion } from 'framer-motion';
import * as Accordion from '@radix-ui/react-accordion';
import { DualCta } from '@/components/DualCta';
import HeroMedia from '@/components/HeroMedia';
import Reveal from '@/components/Reveal';
import WordMask from '@/components/WordMask';
import { useIsland } from '@/context/IslandContext';
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

/* ---------------- JSON-LD ---------------- */

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/** Service + BreadcrumbList schema. Published starting prices live on the rate card, not in OfferCatalog. */
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

/* ---------------- Quiet price / fact lines (not pills) ---------------- */

export function BandChip({
  label,
  onDark,
}: {
  label: string;
  chipLabel?: string;
  kind?: string;
  onDark?: boolean;
}) {
  return <p className={cn('text-[17px]', onDark ? 'text-ivory/90' : 'text-ink')}>{label}</p>;
}

export function PlainChip({ children, onDark }: { children: ReactNode; onDark?: boolean }) {
  return <span className={cn('text-[12px]', onDark ? 'text-ivory/70' : 'text-ink-soft')}>{children}</span>;
}

/* ---------------- Breadcrumb ---------------- */

export interface Crumb {
  label: string;
  to?: string;
}

/** This host's home, then the current page. Never labeled Overview; never the hub from an island host. */
export function useHostHomeCrumbs(pageLabel: string): Crumb[] {
  const { island, homePath } = useIsland();
  return [
    { label: island?.name ?? 'Hawaii', to: homePath },
    { label: pageLabel },
  ];
}

export function Breadcrumb({ items, onDark }: { items: Crumb[]; onDark?: boolean }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('text-[12px]', onDark ? 'text-ivory/60' : 'text-ink-soft')}
    >
      {items.map((c, i) => (
        <span key={c.label}>
          {i > 0 ? (
            <span aria-hidden="true" className="mx-2">
              →
            </span>
          ) : null}
          {c.to ? (
            <Link to={c.to} className={cn('transition-colors', onDark ? 'hover:text-ivory' : 'hover:text-ink')}>
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
  island,
  whatsappIntent,
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
  island?: IslandId;
  whatsappIntent?: string;
}) {
  return (
    <section
      className={cn(
        'relative -mt-16 flex items-end overflow-hidden',
        fullHeight ? 'min-h-[100svh] min-h-[640px]' : 'min-h-[80svh] min-h-[560px]',
      )}
    >
      <HeroMedia src={image} alt={imageAlt} />
      <div className="relative mx-auto w-full max-w-spread px-5 pb-20 pt-36 lg:px-10">
        <div className="max-w-[680px]">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.1 }}>
            <Breadcrumb items={crumbs} onDark />
            <p className="mt-5 text-[12px] text-ivory/80">{eyebrow}</p>
          </motion.div>
          <h1 className="mt-5 font-display text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.05] tracking-[-0.02em] text-white">
            <WordMask text={title} delay={0.2} />
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
          >
            <p className="mt-6 max-w-[54ch] text-[17px] leading-[1.65] text-ivory/90">
              {lede}
            </p>
            {chips ? <div className="mt-6 space-y-1">{chips}</div> : null}
            <div className="mt-8 flex flex-wrap items-center gap-5">
              {island ? (
                <DualCta island={island} intent={whatsappIntent ?? title} />
              ) : (
                <Link
                  to={primary.to}
                  className="inline-flex h-12 items-center bg-[#F6F1E8] px-6 text-sm font-medium text-ink"
                >
                  {primary.label}
                </Link>
              )}
              {secondary.to.startsWith('#') ? (
                <a href={secondary.to} className="text-sm text-ivory/90 underline underline-offset-4 hover:text-white">
                  {secondary.label}
                </a>
              ) : (
                <Link to={secondary.to} className="text-sm text-ivory/90 underline underline-offset-4 hover:text-white">
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
      <p className={cn('text-[12px]', dark ? 'text-ivory/70' : 'text-ink-soft')}>
        {eyebrow}
      </p>
      <h2
        className={cn(
          'mt-4 font-display text-[clamp(2rem,4vw,2.5rem)] font-light leading-[1.1]',
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

  const rows: { label: string; value: string }[] = [];
  if (base.length) {
    rows.push({ label: 'Included', value: base.map((z) => z.name).join(', ') });
  }
  if (surcharge.length) {
    rows.push({
      label: 'Travel surcharge',
      value: surcharge.map((z) => (z.driveTime ? `${z.name} (${z.driveTime})` : z.name)).join(', '),
    });
  }
  if (quoteOnly.length) {
    rows.push({
      label: 'Quoted with the menu',
      value: quoteOnly.map((z) => z.name).join(', '),
    });
  }

  return (
    <div>
      <SectionIntro eyebrow={`Coverage — ${isl.name}`} title={zm.headline} />
      <Reveal stagger staggerDelay={0.07} className="mt-10">
        {rows.map((row) => (
          <div key={row.label} className="border-b border-stone py-4">
            <p className="text-[12px] text-ink-soft">{row.label}</p>
            <p className="mt-1 text-[17px] text-ink">{row.value}</p>
          </div>
        ))}
      </Reveal>
      <p className="mt-6 max-w-[65ch] text-[17px] leading-[1.65] text-ink-soft">{zm.honestyLine}</p>
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
          <p className="text-[12px] text-ink-soft">Questions</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.5rem)] font-light leading-[1.1] text-ink">
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
                    <span className="font-display text-[1.25rem] font-light leading-[1.2] text-ink">{f.q}</span>
                    <span className="text-[18px] text-ink-soft group-data-[state=open]:hidden">+</span>
                    <span className="hidden text-[18px] text-ink-soft group-data-[state=open]:inline">–</span>
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
