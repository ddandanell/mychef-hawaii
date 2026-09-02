import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import * as Accordion from '@radix-ui/react-accordion';
import { PackageGrid } from '@/components/PackageGrid';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import { useIsland } from '@/context/IslandContext';
import { islandOrder, islands } from '@/data/islands';
import type { IslandId } from '@/data/islands';
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
    q: 'Private chef Maui cost — what do I actually pay per guest?',
    a: 'Signature dinners start at $150–$250 a guest. Date Night for two from $500+. Stay Chef from $1,050 a day. That is the food and chef line — service and GET are called out on the written quote.',
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
  {
    q: 'Why bands instead of a single number?',
    a: 'A private-chef quote depends on your menu, your date and your kitchen. A band is an honest starting range; the quote is always exact before you deposit.',
  },
  {
    q: 'How do deposits work?',
    a: 'A 50% deposit locks your date. The full cancellation posture lives on our legal page.',
  },
];

export default function Pricing() {
  const { islandId } = useIsland();
  const [params] = useSearchParams();
  const paramIsland = params.get('island');
  const initial: IslandId =
    islandOrder.find((id) => id === paramIsland) ??
    (islandId && islandOrder.includes(islandId) ? islandId : 'oahu');
  const [active, setActive] = useState<IslandId>(initial);
  const tiers = useMemo(() => getTiers(active), [active]);
  const day = getDayRate(active);
  const bar = getMobileBar(active);
  const packIsland = islandId && islandOrder.includes(islandId) ? islandId : active;

  const h1 =
    islandId === 'maui'
      ? 'What a night costs on Maui.'
      : islandId === 'kauai'
        ? 'What a night costs on Kauaʻi.'
        : islandId === 'bigisland'
          ? 'What a night costs on Hawaiʻi Island.'
          : islandId === 'oahu'
            ? 'What a night costs on Oʻahu.'
            : 'What a night costs.';

  return (
    <>
      <section className="bg-ivory pb-12 pt-10 lg:pb-16 lg:pt-14">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <p className="text-[12px] text-ink-soft">House tariff</p>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink">
            {h1}
          </h1>
          <p className="mt-6 max-w-[62ch] text-[17px] leading-[1.65] text-ink">
            Four evening names, published in USD. Signature dinner from $125 a guest on Oʻahu, $150 on Maui and
            Kauaʻi. The written quote is the confirmed total.
          </p>
        </div>
      </section>

      <section className="bg-ivory pb-20 lg:pb-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <div role="tablist" aria-label="Island rate cards" className="flex flex-wrap gap-x-8 gap-y-3 border-b border-stone">
            {islandOrder.map((id) => {
              const meta = islands[id];
              const selected = id === active;
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(id)}
                  className={cn(
                    'border-b pb-3 text-[14px] transition-colors',
                    selected ? 'text-ink' : 'border-transparent text-ink-soft hover:text-ink',
                  )}
                  style={selected ? { borderColor: meta.hue } : undefined}
                >
                  {meta.name}
                </button>
              );
            })}
          </div>

          <div className="mt-2">
            {tiers.map((entry) => (
              <div
                key={entry.tier}
                className="grid items-baseline gap-2 border-b border-stone py-6 md:grid-cols-[1fr_auto_1fr]"
              >
                <h2 className="font-display text-[1.5rem] font-light text-ink">{TIER_LABEL[entry.tier]}</h2>
                <p className="font-display text-[2rem] font-light leading-none tracking-tight text-ink md:text-right lg:text-[3rem]">
                  {formatBand(entry)}
                </p>
                <p className="text-[17px] text-ink-soft md:text-right">
                  per guest
                  {entry.tier === 'CORE' ? ' · most booked' : ''}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-[65ch] text-[17px] leading-[1.65] text-ink-soft">
            Minimum party usually six. Groceries sit inside the dinner band. Small parties are quoted as a
            fixed night — ask us.{' '}
            <Link to={`/quote?island=${active}&service=signature-dinner`} className="text-ink underline underline-offset-4">
              Enquire
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-sand py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <p className="text-[12px] text-ink-soft">Stay Chef · Bar</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.5rem)] font-light leading-[1.1] text-ink">
            A chef for the day. Cocktails on the terrace.
          </h2>
          <div className="mt-10">
            {islandOrder.map((id) => {
              const isl = islands[id];
              const b = getMobileBar(id);
              return (
                <div
                  key={id}
                  className="grid gap-2 border-b border-stone py-6 md:grid-cols-[1fr_1fr_1fr] md:items-baseline"
                >
                  <p className="font-display text-[1.375rem] font-light text-ink">{isl.name}</p>
                  <p className="text-[17px] text-ink">
                    {formatDayRate(id)}
                    <span className="mt-1 block text-[12px] text-ink-soft">{getDayRate(id).model}</span>
                  </p>
                  <p className="text-[17px] text-ink">
                    {formatMobileBarPackage(id)}
                    <span className="mt-1 block text-[12px] text-ink-soft">
                      or ${b.perGuest[0]}–${b.perGuest[1]} a guest
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
          <p className="mt-8 max-w-[65ch] text-[17px] leading-[1.65] text-ink-soft">
            {day.includes} {islands[active].name} bar: {bar.note}
          </p>
        </div>
      </section>

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <p className="text-[12px] text-ink-soft">Other evenings</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.5rem)] font-light leading-[1.1] text-ink">
            Beyond the dinner.
          </h2>
          <div className="mt-10">
            {otherOffers.map((row) => (
              <div
                key={row.offer}
                className="grid gap-2 border-b border-stone py-6 first:border-t md:grid-cols-[1.1fr_0.9fr_1.4fr] md:items-baseline md:gap-6"
              >
                <h3 className="font-display text-[1.375rem] font-light leading-[1.2] text-ink">{row.offer}</h3>
                <p className="text-[12px] text-ink-soft">{row.model}</p>
                <p className="text-[17px] leading-relaxed text-ink">
                  {formatOtherOffer(row, active)}
                  <span className="mt-1 block text-[17px] text-ink-soft">{row.orientation}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-16 lg:py-24">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <p className="max-w-[65ch] text-[17px] leading-[1.65] text-ink">
            Service 20% and Hawaiʻi GET up to 4.712% are added as their own lines. A 50% deposit locks the
            date. Gratuity is voluntary.{' '}
            <Link to="/legal" className="underline underline-offset-4">
              Legal
            </Link>
            .
          </p>
        </div>
      </section>

      <PackageGrid island={packIsland} heading="Named packages" />

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto w-full max-w-3xl px-5 lg:px-10">
          <p className="text-[12px] text-ink-soft">Pricing questions</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.5rem)] font-light leading-[1.1] text-ink">
            Straight answers.
          </h2>
          <Accordion.Root type="single" collapsible className="mt-10 w-full">
            {faqs.map((f, i) => (
              <Accordion.Item key={f.q} value={`item-${i}`} className="border-b border-stone">
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left">
                    <span className="font-display text-[1.125rem] font-light leading-snug text-ink lg:text-[1.375rem]">
                      {f.q}
                    </span>
                    <span className="text-[18px] text-ink-soft group-data-[state=open]:hidden">+</span>
                    <span className="hidden text-[18px] text-ink-soft group-data-[state=open]:inline">–</span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state-closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <p className="max-w-[65ch] pb-6 text-[17px] leading-[1.65] text-ink-soft">
                    {f.a}
                    {f.q.startsWith('How do deposits') ? (
                      <>
                        {' '}
                        <Link to="/legal" className="text-ink underline underline-offset-4">
                          Legal
                        </Link>
                        .
                      </>
                    ) : null}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      <QuoteTeaserBand headline="Want the exact number for your dates?" />
    </>
  );
}
