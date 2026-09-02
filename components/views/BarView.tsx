import HostLink from '@/components/HostLink';
import { QuoteCta } from '@/components/Cta';
import Hero from '@/components/Hero';
import LineReveal from '@/components/LineReveal';
import { LongFaq, SiblingCluster } from '@/components/Longform';
import QuoteTeaser from '@/components/QuoteTeaser';
import { islands, type IslandId } from '@/data/islands';
import { photos } from '@/data/photos';
import { FEE_DISCLOSURE, formatMobileBarGuest, formatMobileBarPackage, getMobileBar } from '@/data/rateCard';
import { islandHref } from '@/lib/paths';

const rows: { id: IslandId; line: string }[] = [
  { id: 'oahu', line: 'Waikīkī residences, Kahala lawns, Ko Olina villas and Kailua houses.' },
  { id: 'maui', line: 'Welcome pours in Wailea, Kapalua and Kāʻanapali.' },
  { id: 'kauai', line: 'Princeville, Hanalei and Poʻipū — a bartender on the terrace.' },
  { id: 'bigisland', line: 'Kona–Kohala first. Sunset bar on lava-coast terraces.' },
];

const COPY: Record<IslandId, { h1: string; lede: string; hero: { file: string; alt: string } }> = {
  oahu: {
    h1: 'A cocktail bar on your lānai — Waikīkī to Ko Olina.',
    lede: 'Bartender, citrus, ice and glassware on the terrace. Stack it with an Oʻahu chef night or book the hour alone.',
    hero: photos.bar,
  },
  maui: {
    h1: 'Mobile bar for villa nights and wedding weeks.',
    lede: 'Welcome pours, rehearsal-night cocktails and a terrace hour in Wailea, Kapalua, Kāʻanapali and Makena.',
    hero: photos.bar,
  },
  kauai: {
    h1: 'Estate cocktails on both Kauaʻi shores.',
    lede: 'Princeville, Hanalei and Poʻipū — a bartender on the terrace. Starting prices published.',
    hero: photos.kauaiNorth,
  },
  bigisland: {
    h1: 'Sunset pours on the Kohala Coast.',
    lede: 'Lava-coast terraces in the Kona–Kohala corridor. Bartender add-on or a 4-hour mobile-bar package.',
    hero: photos.kohalaFish,
  },
};

export function HubBarView() {
  return (
    <>
      <Hero src={photos.bar.file} alt={photos.bar.alt} min="short">
        <p className="text-[12px] text-paper/80">Cocktails</p>
        <LineReveal
          text="Cocktails where you already are."
          className="mt-5 font-display text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.05] text-paper"
        />
        <p className="mt-6 max-w-[54ch] text-[17px] leading-[1.65] text-paper">
          A bartender, a terrace bar, citrus and ice — stacked with dinner or booked as its own hour.
        </p>
        <p className="mt-5 text-[17px] text-paper">From {formatMobileBarGuest('maui')}, Maui.</p>
        <div className="mt-8">
          <QuoteCta service="mobile-bar" inverse />
        </div>
      </Hero>
      <section className="bg-paper py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <p className="text-[12px] text-mute">Island tariff</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.5rem)] font-light leading-[1.1] text-ink">
            Four islands, four starting prices.
          </h2>
          <div className="mt-10">
            {rows.map((row) => {
              const bar = getMobileBar(row.id);
              return (
                <HostLink
                  key={row.id}
                  island={row.id}
                  path="/bar"
                  className="grid gap-2 border-b border-line py-6 md:grid-cols-[1fr_1.4fr_1fr] md:items-baseline"
                >
                  <p className="font-display text-[1.5rem] font-light text-ink">{islands[row.id].name}</p>
                  <p className="text-[17px] leading-relaxed text-mute">{row.line}</p>
                  <p className="text-[17px] text-ink md:text-right">
                    {formatMobileBarPackage(row.id)}
                    <span className="mt-1 block text-[12px] text-mute">
                      or ${bar.perGuest[0]}–${bar.perGuest[1]} a guest
                    </span>
                  </p>
                </HostLink>
              );
            })}
          </div>
        </div>
      </section>
      <QuoteTeaser headline="Date, headcount, island — we quote the bar in writing." />
    </>
  );
}

export function IslandBarView({ islandId, hostMode }: { islandId: IslandId; hostMode: boolean }) {
  const copy = COPY[islandId];
  const bar = getMobileBar(islandId);
  const href = (path: string) => islandHref(islandId, hostMode, path);
  const faqs = [
    {
      q: 'What does the mobile bar include?',
      a: `A bartender, bar setup and glassware for ${bar.packageHours} hours. Spirits are billed at cost with receipts, or you supply your own.`,
    },
    {
      q: 'Can we stack the bar with a chef or wedding week?',
      a: 'Yes — that is the usual order. The bar is a line on the same written quote as dinner or the wedding week.',
    },
    {
      q: 'How is it priced?',
      a: `Starting ${formatMobileBarGuest(islandId)}, or ${formatMobileBarPackage(islandId)}. ${FEE_DISCLOSURE}`,
    },
  ];

  return (
    <>
      <Hero src={copy.hero.file} alt={copy.hero.alt} min="short">
        <p className="text-[12px] text-paper/80">{islands[islandId].name}</p>
        <LineReveal
          text={copy.h1}
          className="mt-4 font-display text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.05] text-paper"
        />
        <p className="mt-5 max-w-[52ch] text-[17px] leading-[1.65] text-paper">{copy.lede}</p>
        <p className="mt-4 text-[17px] text-paper">{formatMobileBarPackage(islandId)}</p>
        <div className="mt-8">
          <QuoteCta island={islandId} service="mobile-bar" inverse />
        </div>
      </Hero>
      <LongFaq items={faqs} />
      <SiblingCluster island={islandId} href={href} />
      <QuoteTeaser island={islandId} />
    </>
  );
}
