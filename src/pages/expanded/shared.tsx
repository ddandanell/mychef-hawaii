import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import HeroMedia from '@/components/HeroMedia';
import type { IslandMeta } from '@/data/islands';
import { HeroEyebrow, HeroH1 } from '@/pages/islands/shared';
import { Breadcrumb, JsonLd } from '@/pages/services/ServicePage';
import type { Crumb } from '@/pages/services/ServicePage';
import { cn } from '@/lib/utils';

export function InquiryCta({
  to,
  children = 'Enquire for dates',
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
        'inline-flex h-12 items-center bg-[#F6F1E8] px-6 text-sm font-medium text-ink',
        className,
      )}
    >
      {children}
    </Link>
  );
}

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
    <section className="relative -mt-16 flex min-h-[80svh] min-h-[560px] items-end overflow-hidden">
      <HeroMedia src={image} alt={imageAlt} />
      <div className="relative mx-auto w-full max-w-spread px-5 pb-20 pt-36 lg:px-10">
        <div className="max-w-[680px]">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.1 }}>
            <Breadcrumb items={crumbs} onDark />
            <div className="mt-5">
              <HeroEyebrow island={island} alias={alias} />
            </div>
            <p className="mt-3 text-[12px] text-ivory/70">{service}</p>
          </motion.div>
          <HeroH1 text={title} delay={0.2} />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
          >
            <p className="mt-6 max-w-[54ch] text-[17px] leading-[1.65] text-ivory/90">{lede}</p>
            {chips ? <div className="mt-6 space-y-1">{chips}</div> : null}
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <InquiryCta to={primaryTo} />
              {secondary ? (
                secondary.to.startsWith('#') ? (
                  <a href={secondary.to} className="text-sm text-ivory/90 underline underline-offset-4 hover:text-white">
                    {secondary.label}
                  </a>
                ) : (
                  <Link to={secondary.to} className="text-sm text-ivory/90 underline underline-offset-4 hover:text-white">
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
