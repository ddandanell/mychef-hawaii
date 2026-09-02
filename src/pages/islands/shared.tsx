import type { ReactNode } from 'react';
import { Link } from 'react-router';
import * as Accordion from '@radix-ui/react-accordion';
import HeroMedia from '@/components/HeroMedia';
import Reveal from '@/components/Reveal';
import type { ChipKind } from '@/components/StatusChip';
import WordMask from '@/components/WordMask';
import type { IslandId, IslandMeta } from '@/data/islands';
import { zoneMap } from '@/data/zoneMap';
import type { Zone, ZoneClass } from '@/data/zoneMap';
import { cn } from '@/lib/utils';

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

export function HeroEyebrow({ island, alias }: { island: IslandMeta; alias?: string }) {
  return (
    <p className="text-[12px] text-ivory/80">
      myCHEF {island.name}
      {alias ? ` · ${alias}` : ''}
      {island.state === 'inquiry' ? ' · Opening' : ''}
    </p>
  );
}

/** Quiet price line — not a chip. */
export function CostChip({ label, band }: { label: string; band: string; index?: number }) {
  return (
    <p className="text-[17px] text-ivory/90">
      {label} {band}
    </p>
  );
}

/** State-aware primary CTA. */
export function PrimaryCta({ island, className }: { island: IslandMeta; className?: string }) {
  const inquiry = island.state === 'inquiry';
  return (
    <Link
      to={`/quote?island=${island.id}`}
      className={cn(
        'inline-flex h-12 items-center bg-[#F6F1E8] px-6 text-sm font-medium text-ink',
        className,
      )}
    >
      {inquiry ? 'Enquire for dates' : 'Enquire'}
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
    <section className="relative -mt-16 flex min-h-[100svh] min-h-[640px] items-end overflow-hidden">
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
        'mt-5 font-display text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.05] tracking-[-0.02em] text-white',
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

export function ServiceCard({ title, desc, img, to, band, stat, wide }: ServiceCardProps) {
  const body = (
    <>
      <div className={cn('overflow-hidden', wide ? 'aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[220px]' : 'aspect-[4/3]')}>
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-4 lg:p-5">
        <h3 className="font-display text-[1.375rem] font-light leading-[1.2] text-ink">{title}</h3>
        <p className="mt-1.5 flex-1 text-[17px] leading-relaxed text-ink-soft">{desc}</p>
        {band && <p className="mt-3 text-[17px] text-ink">{band}</p>}
        {stat && <p className="mt-2 text-[12px] text-ink-soft">{stat}</p>}
        {to && <span className="mt-4 text-sm text-ink">Explore</span>}
      </div>
    </>
  );

  const classes = cn(
    'group relative flex overflow-hidden border border-stone bg-white',
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
    <div className="group relative flex min-h-[420px] items-end overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(28,25,22,0.08) 0%, rgba(28,25,22,0.22) 55%, rgba(28,25,22,0.38) 100%)',
          }}
        />
      </div>
      <div className="relative p-6 lg:p-8">
        <p className="text-[12px] text-ivory/80">{eyebrow}</p>
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
  base: 'Included',
  surcharge: 'Travel surcharge',
  'quote-only': 'Quote-only',
};

function ZoneRow({ zone, dark }: { zone: Zone; dark: boolean }) {
  return (
    <div className={cn('border-b pb-5', dark ? 'border-white/10' : 'border-stone')}>
      <h3 className={cn('font-display text-[1.25rem] font-light leading-[1.2]', dark ? 'text-ivory' : 'text-ink')}>
        {zone.name}
      </h3>
      <p className={cn('mt-1 text-[12px]', dark ? 'text-ivory/60' : 'text-ink-soft')}>
        {zoneClassLabel[zone.class]}
        {zone.driveTime ? ` · ${zone.driveTime}` : ''}
      </p>
      <p className={cn('mt-1.5 text-[17px] leading-relaxed', dark ? 'text-ivory/75' : 'text-ink-soft')}>{zone.note}</p>
    </div>
  );
}

export function ZoneModule({
  islandId,
  dark = false,
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
      <div className="relative mx-auto max-w-container px-5 lg:px-10">
        <div>
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
                'mt-8 text-[17px] leading-relaxed',
                dark ? 'text-ivory/70' : 'text-ink-soft',
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
  return (
    <section className="bg-ink py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-container gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div>
          <p className="text-[12px] text-ivory/60">Honesty — {island.name}</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.75rem)] font-light leading-[1.1] text-ivory">
            New to Hawaiʻi. Honest about it.
          </h2>
          <Link to="/trust" className="mt-8 inline-block text-sm text-ivory/80 underline underline-offset-4">
            Our trust standards
          </Link>
        </div>
        <div className="space-y-6">
          {rows.map((row) => (
            <div key={row.label + row.claim} className="border-b border-white/10 pb-6">
              <p className="text-[17px] leading-[1.65] text-ivory/85">{row.claim}</p>
            </div>
          ))}
        </div>
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
          <p className="text-[12px] text-ink-soft">Questions</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.5rem)] font-light leading-[1.1] text-ink">
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
