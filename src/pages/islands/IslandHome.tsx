import { Link } from 'react-router';
import { motion } from 'framer-motion';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { DualCta } from '@/components/DualCta';
import HostLink from '@/components/HostLink';
import { HowItWorksBlock, PackageStrip } from '@/components/PackageGrid';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import Reveal from '@/components/Reveal';
import { SampleMenu } from '@/components/SampleMenu';
import { islandOrder } from '@/data/islands';
import type { IslandId } from '@/data/islands';
import { islandOffers } from '@/data/offers';
import { photos } from '@/data/photos';
import { formatFrom } from '@/data/rateCard';
import { CostChip, HeroFrame, IslandJsonLd } from '@/pages/islands/shared';
import { usePageIsland } from '@/pages/islands/utils';

const SIBLING: Record<IslandId, string> = {
  maui: 'Private chef Maui — 260 searches/mo',
  kauai: 'Private chef Kauai — 210 searches/mo',
  oahu: 'Private chef Oahu — 90 searches/mo',
  bigisland: 'Private chef Big Island — 70 searches/mo',
};

export default function IslandHome({ islandId }: { islandId: IslandId }) {
  const { island, href } = usePageIsland(islandId);
  const offer = islandOffers[islandId];
  const hero = photos[offer.heroPhoto];

  return (
    <>
      <IslandJsonLd island={island} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: offer.faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />

      <HeroFrame island={island} src={hero.file} alt={hero.alt}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-brass"
        >
          myCHEF {island.name} · from ${offer.fromPp}/pp
        </motion.p>
        <h1 className="mt-5 font-display text-[clamp(2.75rem,7vw,5rem)] font-medium leading-[1.02] tracking-[-0.02em] text-white">
          {offer.h1}
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
        >
          <p className="mt-6 max-w-[62ch] text-[1.125rem] leading-[1.6] text-ivory/90">{offer.lede}</p>
          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <CostChip label="CORE dinner" band={`from $${offer.fromPp}/pp`} index={0} />
            <CostChip label="Stay Chef" band={`${formatFrom(offer.dayFrom)}/day`} index={1} />
            {islandId === 'kauai' ? (
              <CostChip label="Kauai catering" band="from $150/pp" index={2} />
            ) : null}
          </div>
          <div className="mt-8">
            <DualCta island={islandId} intent="a private chef" size="lg" />
          </div>
        </motion.div>
      </HeroFrame>

      <section className="bg-sand py-16 lg:py-20">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">
            One dinner · a family week · a wedding
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium text-ink">
            Pick the shape. WhatsApp the dates.
          </h2>
          <div className="mt-10">
            <PackageStrip island={islandId} />
          </div>
        </div>
      </section>

      <SampleMenu island={islandId} />
      <HowItWorksBlock island={islandId} />

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">Where we cook</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] text-ink">
            Neighborhoods on {island.name}
          </h2>
          <p className="mt-4 max-w-[65ch] text-ink-soft">
            Folders on this island site — not new hosts. Villa, Airbnb and vacation-rental kitchens with a real cooktop.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {offer.neighborhoods.map((n) => (
              <Link
                key={n.slug}
                to={href(`/${n.slug}`)}
                className="rounded-[14px] border border-stone bg-white px-5 py-4 transition-colors hover:border-clay/50"
              >
                <p className="font-display text-xl font-medium text-ink">{n.name}</p>
                <p className="mt-1 text-sm text-clay">Private chef {n.name} →</p>
              </Link>
            ))}
          </div>
          {islandId === 'kauai' ? (
            <p className="mt-10 max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ink-soft">
              <Link to={href('/catering')} className="font-medium text-clay underline underline-offset-4">
                Kauai catering
              </Link>{' '}
              searches at 210/mo — equal to private chef Kauai. Menu, prices, wedding, buffet vs plated. Not a stub.
            </p>
          ) : null}
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link to={href('/private-chef')} className="font-medium text-clay underline underline-offset-4">
              Private chef
            </Link>
            <Link to={href('/catering')} className="font-medium text-clay underline underline-offset-4">
              {islandId === 'kauai' ? 'Kauai catering' : 'Catering'}
            </Link>
            <Link to={href('/bar')} className="font-medium text-clay underline underline-offset-4">
              Bar
            </Link>
            <Link to={href('/weddings')} className="font-medium text-clay underline underline-offset-4">
              Weddings
            </Link>
            <Link to={href('/pricing')} className="font-medium text-clay underline underline-offset-4">
              Pricing
            </Link>
            <Link to={href('/quote')} className="font-medium text-clay underline underline-offset-4">
              Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-sand py-16">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">Sister islands</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {islandOrder
              .filter((id) => id !== islandId)
              .map((id) => (
                <HostLink
                  key={id}
                  island={id}
                  className="rounded-full border border-stone bg-white px-4 py-2 text-sm text-ink hover:border-clay/50"
                >
                  {SIBLING[id]}
                </HostLink>
              ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto grid w-full max-w-container gap-12 px-5 lg:grid-cols-5 lg:px-10">
          <Reveal className="lg:col-span-2">
            <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">Questions</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] text-ink">
              Cost, cleanup, kids, kitchens.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-3">
            <Accordion.Root type="single" collapsible className="w-full">
              {offer.faqs.map((f, i) => (
                <Accordion.Item key={f.q} value={`item-${i}`} className="border-b border-stone">
                  <Accordion.Header>
                    <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left">
                      <span className="font-display text-[1.25rem] font-medium leading-[1.2] text-ink">{f.q}</span>
                      <ChevronDown className="h-5 w-5 shrink-0 text-clay transition-transform group-data-[state=open]:rotate-180" />
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
      </section>

      <QuoteTeaserBand
        headline={`${offer.h1} — from $${offer.fromPp}/pp.`}
        note="WhatsApp or quote · typical reply in Hawaii business hours"
      />
    </>
  );
}
