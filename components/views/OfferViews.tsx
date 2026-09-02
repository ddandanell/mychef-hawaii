import { QuoteCta } from '@/components/Cta';
import Hero from '@/components/Hero';
import LineReveal from '@/components/LineReveal';
import { SiblingCluster } from '@/components/Longform';
import QuoteTeaser from '@/components/QuoteTeaser';
import HostLink from '@/components/HostLink';
import { islandOrder, islands, type IslandId } from '@/data/islands';
import { islandOffers } from '@/data/offers';
import { photos } from '@/data/photos';
import { formatDayRate, getDayRate } from '@/data/rateCard';
import { islandHref } from '@/lib/paths';

const VAC: Record<IslandId, { h1: string; lede: string }> = {
  maui: {
    h1: 'A chef for your whole Maui stay.',
    lede: 'Stay Chef day rates from $1,050. Groceries at cost. Arrival-night dinner, a stocked fridge, full-board days when the house actually cooks.',
  },
  oahu: {
    h1: 'A chef for the week — or every week.',
    lede: 'Stay Chef from $850 a day on Oʻahu. The kamaʻāina weekly line from $300 a week plus groceries at cost. Same crew, different rhythm.',
  },
  kauai: {
    h1: 'A chef for your Kauaʻi week.',
    lede: 'Stay Chef from $1,100 a day. Princeville, Poʻipū, Hanalei. Inquiry stage. Groceries billed at cost with receipts.',
  },
  bigisland: {
    h1: 'A chef for the Kohala week.',
    lede: 'Stay Chef from $950 a day. West-side first — Kona and the Kohala Coast. Inquiry stage.',
  },
};

export function HubOfferView({ kind }: { kind: 'private-chef' | 'vacation-chef' }) {
  const copy =
    kind === 'private-chef'
      ? {
          h1: 'Personal chef for Hawaii villas.',
          lede: 'Personal chef and vacation-rental chef in Hawaii. Oʻahu from $125 a guest, Maui and Kauaʻi from $150 a guest. We shop, cook, serve and clean.',
          img: photos.chefTeam,
          service: 'private-chef',
          path: '/private-chef' as const,
        }
      : {
          h1: 'Vacation chef — a chef for the villa week',
          lede: 'Stay Chef day rates from $850 Oʻahu / $1,050 Maui / $1,100 Kauaʻi / $950 Hawaiʻi Island. Groceries at cost.',
          img: photos.vacation,
          service: 'vacation-chef',
          path: '/vacation-chef' as const,
        };

  return (
    <>
      <section className="bg-paper pb-10 pt-16 lg:pt-24">
        <div className="mx-auto grid w-full max-w-container items-center gap-10 px-5 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-[12px] text-mute">myCHEF Hawaii</p>
            <h1 className="mt-4 font-display text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.05] text-ink">{copy.h1}</h1>
            <p className="mt-5 max-w-[62ch] text-[1.125rem] leading-[1.65] text-mute">{copy.lede}</p>
            <div className="mt-8">
              <QuoteCta service={copy.service} />
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={copy.img.file} alt={copy.img.alt} className="aspect-[4/3] w-full object-cover" />
        </div>
      </section>
      <section className="bg-sand py-16 lg:py-24">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-light text-ink">Choose the island</h2>
          <div className="mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {islandOrder.map((id) => {
              const o = islandOffers[id];
              return (
                <HostLink key={id} island={id} path={copy.path} className="bg-paper p-5">
                  <p className="font-display text-2xl font-light text-ink">{islands[id].name}</p>
                  <p className="mt-2 text-mute">from ${o.fromPp} a guest</p>
                </HostLink>
              );
            })}
          </div>
        </div>
      </section>
      <QuoteTeaser />
    </>
  );
}

export function IslandVacationView({ islandId, hostMode }: { islandId: IslandId; hostMode: boolean }) {
  const copy = VAC[islandId];
  const href = (path: string) => islandHref(islandId, hostMode, path);
  const day = getDayRate(islandId);

  return (
    <>
      <Hero src={photos.vacation.file} alt={photos.vacation.alt} min="short">
        <p className="text-[12px] text-paper/80">{islands[islandId].name}</p>
        <LineReveal
          text={copy.h1}
          className="mt-4 font-display text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.05] text-paper"
        />
        <p className="mt-5 max-w-[52ch] text-[17px] leading-[1.65] text-paper">{copy.lede}</p>
        <p className="mt-4 text-[17px] text-paper">{formatDayRate(islandId)} · {day.model}</p>
        <div className="mt-8">
          <QuoteCta island={islandId} service="vacation-chef" inverse />
        </div>
      </Hero>
      <SiblingCluster island={islandId} href={href} />
      <QuoteTeaser island={islandId} />
    </>
  );
}
