'use client';

import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import * as Accordion from '@radix-ui/react-accordion';
import { QuoteCta } from '@/components/Cta';
import Eyebrow from '@/components/Eyebrow';
import Hero from '@/components/Hero';
import HostLink from '@/components/HostLink';
import LineReveal from '@/components/LineReveal';
import { Longform, SiblingCluster } from '@/components/Longform';
import Photo from '@/components/Photo';
import QuoteTeaser from '@/components/QuoteTeaser';
import { islandChooserCopy } from '@/data/chromeCopy';
import { useIsland } from '@/components/IslandProvider';
import { hubPricingSections } from '@/data/longformHub';
import { islandPricing } from '@/data/islandPricing';
import { photos } from '@/data/photos';
import { islandOrder, islands, primaryCtaLabel, type IslandId } from '@/data/islands';
import {
  formatBand,
  formatDayRate,
  formatMobileBarPackage,
  formatOtherOffer,
  getDayRate,
  getMobileBar,
  getTiers,
  otherOffers,
} from '@/data/rateCard';
import type { RateTier } from '@/data/rateCard';
import { cn } from '@/lib/utils';

const TIER_LABEL: Record<RateTier, string> = {
  ENTRY: 'Table',
  CORE: 'Signature',
  PREMIUM: 'Premium',
  ULTRA: 'Chef’s table',
};

const faqs = [
  {
    q: 'How much does a private chef cost in Hawaii?',
    a: 'Oʻahu Signature $125–$190 a guest. Maui and Kauaʻi $150–$250. Hawaiʻi Island Signature $150–$225, Table from $110. Stay Chef day rates from $850 Oʻahu / $1,050 Maui / $1,100 Kauaʻi / $950 Hawaiʻi Island. Written quote before you commit.',
  },
  {
    q: 'Private chef Hawaii cost — what is actually on the quote?',
    a: 'The food and chef line from the published band, then 20% service and GET up to 4.712% as their own lines. Stay Chef groceries at cost. Zone travel only outside the usual corridors. The written quote is the confirmed total.',
  },
  {
    q: 'What’s included in the per-guest price?',
    a: 'Menu design, same-day shopping, cooking in your villa, table service and a clean kitchen. Alcohol is BYO or quoted separately. Rentals and venue fees are add-ons when you want them.',
  },
  {
    q: 'Are groceries included?',
    a: 'On a signature dinner, groceries sit inside the per-guest band. On Stay Chef and multi-day days, groceries are billed at cost with receipts.',
  },
  {
    q: 'What is added on the quote?',
    a: 'A 20% service charge and Hawaiʻi GET up to 4.712% are added as their own lines. A 50% deposit locks the date. Gratuity is always voluntary.',
  },
];

export default function PricingView() {
  const { islandId, href } = useIsland();
  const params = useSearchParams();
  const paramIsland = params.get('island');
  const initial: IslandId =
    islandOrder.find((id) => id === paramIsland) ??
    (islandId && islandOrder.includes(islandId) ? islandId : 'oahu');
  const [active, setActive] = useState<IslandId>(initial);
  const tiers = useMemo(() => getTiers(active), [active]);
  const day = getDayRate(active);
  const bar = getMobileBar(active);

  const copy = islandId ? islandPricing[islandId] : null;
  const photo = copy ? photos[copy.photo] : null;
  const h1 = copy?.h1 ?? 'What a night costs.';
  const lede =
    copy?.lede ??
    'USD. Line by line. The written quote is the confirmed total — never a verbal range in a chat window.';
  const questions = copy?.faqs ?? faqs;

  return (
    <>
      <Hero src={(photo ?? photos.menu).file} alt={(photo ?? photos.menu).alt}>
        <p className="text-[13px] text-mute">{copy?.kicker ?? 'Published starting prices'}</p>
        <LineReveal
          text={h1}
          className="mt-4 font-display text-[clamp(2.5rem,6vw,4.25rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink"
        />
        <p className="mt-5 max-w-[46ch] text-[17px] leading-[1.55] text-ink">{lede}</p>
        <div className="mt-8">
          <QuoteCta island={islandId} variant="light" />
        </div>
      </Hero>

      {!islandId ? (
        <section className="bg-paper py-24 lg:py-32">
          <div className="mx-auto w-full max-w-spread px-5 lg:px-10">
            <Eyebrow>Where we cook</Eyebrow>
            <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.08] text-ink">
              Open the island rate card.
            </h2>
            <ul className="mt-14 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
              {islandOrder.map((id) => {
                const still = photos[islandPricing[id].photo];
                const chooser = islandChooserCopy[id];
                return (
                  <li key={id}>
                    <HostLink island={id} path="/pricing" className="group block">
                      <span className="relative block aspect-[3/4] overflow-hidden bg-sand">
                        <Photo
                          src={still.file}
                          alt={still.alt}
                          fill
                          sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                          className="transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] motion-reduce:transform-none"
                        />
                      </span>
                      <span className="mt-5 block font-display text-[1.5rem] font-light text-ink">{islands[id].name}</span>
                      <span className="mt-2 block text-[15px] leading-relaxed text-mute">{chooser.line}</span>
                      <span className="mt-2 block text-[13px] text-mute">{chooser.price}</span>
                    </HostLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="bg-paper py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <p className="text-[12px] text-mute">Published starting prices</p>
          {!islandId ? (
            <div className="mt-8 flex flex-wrap gap-2">
              {islandOrder.map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActive(id)}
                  className={cn(
                    'inline-flex h-10 items-center border px-4 text-sm font-medium rounded-[2px]',
                    active === id ? 'border-ink bg-ink text-paper' : 'border-line bg-paper text-ink',
                  )}
                >
                  {islands[id].shortName}
                </button>
              ))}
            </div>
          ) : null}

          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-b border-line">
                  <th className="py-3 pr-4 text-[12px] font-medium text-mute">Tier</th>
                  <th className="py-3 pr-4 text-[12px] font-medium text-mute">Per guest</th>
                  <th className="py-3 text-[12px] font-medium text-mute">Model</th>
                </tr>
              </thead>
              <tbody>
                {tiers.map((t) => (
                  <tr key={t.tier} className="border-b border-line">
                    <td className="py-4 pr-4 font-display text-xl font-light text-ink">{TIER_LABEL[t.tier]}</td>
                    <td className="py-4 pr-4 font-display text-xl font-light text-ink">{formatBand(t)}</td>
                    <td className="py-4 text-sm text-mute">{t.model}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="border border-line p-6">
              <p className="text-[12px] text-mute">Stay Chef</p>
              <p className="mt-2 font-display text-3xl font-light text-ink">{formatDayRate(active)}</p>
              <p className="mt-2 text-sm text-mute">{day.includes}</p>
            </article>
            <article className="border border-line p-6">
              <p className="text-[12px] text-mute">Mobile bar</p>
              <p className="mt-2 font-display text-3xl font-light text-ink">{formatMobileBarPackage(active)}</p>
              <p className="mt-2 text-sm text-mute">{bar.note}</p>
            </article>
          </div>

          <ul className="mt-10 space-y-3">
            {otherOffers.map((o) => (
              <li key={o.key} className="flex flex-wrap justify-between gap-3 border-b border-line py-3">
                <span className="text-[17px] text-ink">{o.offer}</span>
                <span className="font-display text-[17px] text-ink">{formatOtherOffer(o, active)}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <QuoteCta island={islandId ?? active} />
            {islandId ? (
              <HostLink
                island={islandId}
                path="/private-chef-cost"
                className="text-ink underline underline-offset-4"
              >
                How the fee stack prints
              </HostLink>
            ) : null}
          </div>
        </div>
      </section>
      {copy ? (
        <Longform sections={[{ h2: copy.kicker, paras: copy.body }]} />
      ) : (
        <Longform sections={hubPricingSections} />
      )}
      <section className="border-t border-line bg-paper py-20">
        <div className="mx-auto grid w-full max-w-container gap-12 px-5 lg:grid-cols-5 lg:px-10">
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-light text-ink lg:col-span-2">Questions</h2>
          <Accordion.Root type="single" collapsible className="lg:col-span-3">
            {questions.map((f, i) => (
              <Accordion.Item key={f.q} value={`p-${i}`} className="border-b border-line">
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between gap-4 py-5 text-left">
                    <span className="font-display text-[1.25rem] font-light text-ink">{f.q}</span>
                    <span className="text-[14px] text-mute">+</span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                  <p className="pb-6 text-[17px] leading-relaxed text-mute">{f.a}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>
      <SiblingCluster island={islandId} current="pricing" href={href} />
      <QuoteTeaser headline={`${primaryCtaLabel(islandId)}. Quote in writing.`} island={islandId} />
    </>
  );
}
