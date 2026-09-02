import { Link, useParams } from 'react-router';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PageMeta from '@/components/PageMeta';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import Reveal from '@/components/Reveal';
import StatusChip from '@/components/StatusChip';
import { useIsland } from '@/context/IslandContext';
import { islands } from '@/data/islands';
import type { IslandId } from '@/data/islands';
import { areasFor, getArea } from '@/data/areas';
import { getLocation, locationsFor } from '@/data/locations';
import {
  FaqSection,
  HeroEyebrow,
  HeroFrame,
  HeroH1,
  PrimaryCta,
  SectionHead,
} from '@/pages/islands/shared';
import { Breadcrumb, JsonLd } from '@/pages/services/ServicePage';
import NotFound from '@/pages/NotFound';

const ISLAND_IDS: IslandId[] = ['oahu', 'maui', 'bigisland', 'kauai'];

const zoneChip = {
  base: { kind: 'policy' as const, label: 'Base zone — included' },
  surcharge: { kind: 'published' as const, label: 'Surcharge zone — published' },
  'quote-only': { kind: 'pending' as const, label: 'Quote-only' },
};

export default function LocationPage() {
  const { island: islandParam, slug } = useParams();
  const { islandId: ctxIsland, href, toHub } = useIsland();
  const islandId = ISLAND_IDS.find((id) => id === islandParam) ?? ctxIsland;
  const loc = islandId && slug ? getLocation(islandId, slug) : undefined;
  const area = islandId && slug ? getArea(islandId, slug) : undefined;

  if (!islandId || !slug) return <NotFound />;
  if (!loc && area) {
    const island = islands[islandId];
    const others = areasFor(islandId).filter((a) => a.slug !== area.slug);
    const chip = zoneChip[area.zoneClass];
    return (
      <>
        <PageMeta title={`Private chef ${area.name} — myCHEF ${island.name}`} description={area.blurb} />
        <HeroFrame island={island}>
          <HeroEyebrow island={island} />
          <p className="mt-3 font-mono text-[0.75rem] uppercase tracking-[0.18em] text-ivory/70">
            {area.name} · {chip.label}
          </p>
          <HeroH1 text={`A chef in ${area.name}.`} />
          <p className="mt-6 max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ivory/90">{area.blurb}</p>
          <div className="mt-8">
            <PrimaryCta island={island} />
          </div>
        </HeroFrame>
        <section className="bg-ivory py-20">
          <div className="mx-auto grid max-w-container gap-12 px-5 lg:grid-cols-2 lg:px-10">
            <div>
              <SectionHead eyebrow={area.name} title="Fit." />
              <p className="mt-6 text-[1.0625rem] leading-[1.65] text-ink-soft">{area.fit}</p>
            </div>
            <div>
              <SectionHead eyebrow="Logistics" title="Published, not discovered." />
              <p className="mt-6 text-[1.0625rem] leading-[1.65] text-ink-soft">{area.logistics}</p>
              <Link to={href('/locations')} className="mt-6 inline-block text-sm font-medium text-clay">
                All {island.name} areas
              </Link>
            </div>
          </div>
        </section>
        {others.length > 0 && (
          <section className="bg-sand py-16">
            <div className="mx-auto max-w-container px-5 lg:px-10">
              <SectionHead eyebrow={island.name} title="Other areas on this island." />
              <div className="mt-8 flex flex-wrap gap-2">
                {others.map((a) => (
                  <Link
                    key={a.slug}
                    to={href(`/locations/${a.slug}`)}
                    className="inline-flex rounded-full border border-stone bg-white px-4 py-2 text-sm text-ink hover:border-clay/40"
                  >
                    {a.name}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
        <QuoteTeaserBand />
      </>
    );
  }
  if (!loc) return <NotFound />;

  const island = islands[islandId];
  const siblings = locationsFor(islandId).filter((l) => l.slug !== loc.slug);
  const crumbs = [
    { label: 'Hawaii', to: toHub('/') },
    { label: island.name, to: href('/') },
    { label: loc.name, to: href(`/locations/${loc.slug}`) },
  ];
  const inquiry = island.state === 'inquiry';
  const chip = zoneChip[loc.zoneClass];

  return (
    <>
      <PageMeta
        title={`${loc.name} private chef — myCHEF ${island.name}`}
        description={loc.lede}
      />
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: `${loc.name} — myCHEF ${island.name}`,
            description: loc.lede,
            isPartOf: { '@type': 'WebSite', name: `myCHEF ${island.name}` },
            about: { '@type': 'Place', name: `${loc.name}, ${island.name}, Hawaiʻi` },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: crumbs.map((c, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: c.label,
            })),
          },
        ]}
      />
      <HeroFrame island={island} src={loc.hero} alt={loc.heroAlt}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.1 }}>
          <Breadcrumb items={crumbs} onDark />
          <div className="mt-5">
            <HeroEyebrow island={island} />
          </div>
          <p className="mt-3 font-mono text-[0.75rem] uppercase tracking-[0.18em] text-ivory/70">
            {loc.area} · Zone {loc.zoneCode}
          </p>
        </motion.div>
        <HeroH1 text={loc.h1} />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
        >
          <p className="mt-6 max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ivory/90 lg:text-[1.125rem]">
            {loc.lede}
          </p>
          <div className="mt-6">
            <StatusChip kind={chip.kind} onDark>
              {chip.label}
            </StatusChip>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link
              to={loc.quoteQuery}
              className={
                inquiry
                  ? 'inline-flex items-center rounded-full bg-brass px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-px hover:brightness-110 active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-brass'
                  : 'inline-flex items-center rounded-full bg-clay px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-px hover:bg-clay-deep active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-clay'
              }
            >
              {inquiry ? 'Join the Inquiry List' : 'Request a Quote'}
            </Link>
            <Link
              to={href('/')}
              className="text-sm font-medium text-ivory/90 underline decoration-brass/60 underline-offset-4 transition-colors hover:text-white"
            >
              {island.name} home
            </Link>
          </div>
        </motion.div>
      </HeroFrame>

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto grid w-full max-w-container gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <div>
            <SectionHead eyebrow={loc.name} title="Who this corridor is for." />
            <Reveal delay={0.1}>
              {loc.body.map((p) => (
                <p key={p.slice(0, 24)} className="mt-5 max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ink-soft">
                  {p}
                </p>
              ))}
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <div className="rounded-[14px] border border-stone bg-sand p-6 lg:p-8">
              <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">Fit</p>
              <p className="mt-3 text-[1.0625rem] leading-[1.65] text-ink">{loc.fit}</p>
              <p className="mt-8 font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">Logistics</p>
              <p className="mt-3 text-[1.0625rem] leading-[1.65] text-ink">{loc.logistics}</p>
              <Link
                to={loc.quoteQuery}
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-clay transition-colors hover:text-clay-deep"
              >
                {inquiry ? 'Join the inquiry list' : 'Request a quote'}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <FaqSection heading={`Asked in ${loc.name}.`} faqs={loc.faqs} bg="bg-sand" />

      {siblings.length > 0 && (
        <section className="bg-ivory py-20 lg:py-28">
          <div className="mx-auto w-full max-w-container px-5 lg:px-10">
            <SectionHead eyebrow={island.name} title="Other areas on this island." />
            <Reveal stagger className="mt-10 flex flex-wrap gap-3">
              {siblings.map((s) => (
                <Link
                  key={s.slug}
                  to={href(`/locations/${s.slug}`)}
                  className="inline-flex items-center rounded-full border border-stone bg-white px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-clay/50"
                >
                  {s.name}
                </Link>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      <QuoteTeaserBand
        headline={inquiry ? `Tell us your dates in ${loc.name}.` : `Cook in ${loc.name}.`}
        note={`${island.name} · ${loc.name} · Zone ${loc.zoneCode}`}
      />
    </>
  );
}
