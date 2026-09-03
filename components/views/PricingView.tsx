'use client';

import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import * as Accordion from '@radix-ui/react-accordion';
import { QuoteCta } from '@/components/Cta';
import { Longform, SiblingCluster } from '@/components/Longform';
import QuoteTeaser from '@/components/QuoteTeaser';
import { useIsland } from '@/components/IslandProvider';
import { hubPricingSections } from '@/data/longformHub';
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

  const h1 =
    islandId === 'maui'
      ? 'What a night costs on Maui.'
      : islandId === 'kauai'
        ? 'What a night costs on Kauaʻi.'
        : islandId === 'bigisland'
          ? 'What a night costs on the Big Island.'
          : islandId === 'oahu'
            ? 'What a night costs on Oahu.'
            : 'What a night costs.';

  return (
    <>
      <section className="bg-paper py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <p className="text-[12px] text-mute">Published starting prices</p>
          <h1 className="mt-4 max-w-[18ch] font-display text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-[1.05] text-ink">
            {h1}
          </h1>
          <p className="mt-6 max-w-[62ch] text-[17px] leading-[1.65] text-mute">
            USD. Line by line. The written quote is the confirmed total — never a verbal range in a chat window.
          </p>
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

          <div className="mt-10">
            <QuoteCta island={islandId ?? active} />
          </div>
        </div>
      </section>
      <Longform sections={hubPricingSections} />
      <section className="border-t border-line bg-paper py-20">
        <div className="mx-auto grid w-full max-w-container gap-12 px-5 lg:grid-cols-5 lg:px-10">
          <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-light text-ink lg:col-span-2">Questions</h2>
          <Accordion.Root type="single" collapsible className="lg:col-span-3">
            {faqs.map((f, i) => (
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
