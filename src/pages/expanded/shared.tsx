import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import HeroMedia from '@/components/HeroMedia';
import type { IslandMeta } from '@/data/islands';
import { HeroEyebrow, HeroH1 } from '@/pages/islands/shared';
import { Breadcrumb, JsonLd } from '@/pages/services/ServicePage';
import type { Crumb } from '@/pages/services/ServicePage';
import { cn } from '@/lib/utils';

/**
 * Shared primitives for the P2 inquiry-framed island subpages
 * (src/pages/expanded/*). Kauaʻi and Hawaiʻi Island are inquiry-stage:
 * every CTA is "Join the Inquiry List" (brass), nothing says "Request a
 * Quote" or "now serving", and structured data is WebPage + BreadcrumbList
 * only — never LocalBusiness (design.md §9.3, island-bigisland.md,
 * island-kauai.md).
 */

/** Brass inquiry pill — the only primary CTA style on P2 subpages. */
export function InquiryCta({
  to,
  children = 'Join the Inquiry List',
  className,
}: {
  to: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={cn(
        'inline-flex items-center rounded-full bg-brass px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-px hover:brightness-110 active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-brass',
        className,
      )}
    >
      {children}
    </Link>
  );
}

/**
 * Inquiry-framed service hero — mirrors the live ServiceHero layout but
 * carries the inquiry eyebrow (breathing brass dot + INQUIRY STAGE chip)
 * and the brass inquiry CTA instead of a quote button.
 */
export function InquiryHero({
  island,
  alias,
  crumbs,
  service,
  title,
  lede,
  image,
  imageAlt,
  chips,
  primaryTo,
  secondary,
}: {
  island: IslandMeta;
  alias?: string;
  crumbs: Crumb[];
  /** Service label line, e.g. "Private Chef — planned service" */
  service: string;
  title: string;
  lede: string;
  image: string;
  imageAlt: string;
  chips?: ReactNode;
  primaryTo: string;
  secondary?: { label: string; to: string };
}) {
  return (
    <section className="relative flex min-h-[80svh] min-h-[560px] items-end overflow-hidden">
      <HeroMedia src={image} alt={imageAlt} />
      <div className="relative mx-auto w-full max-w-spread px-5 pb-20 pt-36 lg:px-10">
        <div className="max-w-[680px]">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.1 }}>
            <Breadcrumb items={crumbs} onDark />
            <div className="mt-5">
              <HeroEyebrow island={island} alias={alias} />
            </div>
            <p className="mt-3 font-mono text-[0.75rem] uppercase tracking-[0.18em] text-ivory/70">{service}</p>
          </motion.div>
          <HeroH1 text={title} delay={0.2} />
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
              <InquiryCta to={primaryTo} />
              {secondary ? (
                secondary.to.startsWith('#') ? (
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
                )
              ) : null}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/**
 * Structured data for P2 subpages: WebPage + BreadcrumbList only.
 * No LocalBusiness and no Service/Offer schema until a staffed island
 * team exists (research sec23, D23.3/D23.4; Insight 2).
 */
export function InquiryPageJsonLd({
  island,
  name,
  description,
  path,
  crumbs,
}: {
  island: IslandMeta;
  name: string;
  description: string;
  path: string;
  crumbs: string[];
}) {
  return (
    <JsonLd
      data={[
        {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name,
          description,
          url: path,
          isPartOf: { '@type': 'WebSite', name: 'myCHEF Hawaii' },
          about: { '@type': 'Place', name: `${island.name}, Hawaiʻi` },
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
      ]}
    />
  );
}
