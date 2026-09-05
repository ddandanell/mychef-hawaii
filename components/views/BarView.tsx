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
    hero: photos.barOahu,
  },
  maui: {
    h1: 'Mobile bar for villa nights and wedding weeks.',
    lede: 'Welcome pours, rehearsal-night cocktails and a terrace hour in Wailea, Kapalua, Kāʻanapali and Makena.',
    hero: photos.barMaui,
  },
  kauai: {
    h1: 'Estate cocktails on both Kauaʻi shores.',
    lede: 'Princeville, Hanalei and Poʻipū — a bartender on the terrace. Starting prices published.',
    hero: photos.barKauai,
  },
  bigisland: {
    h1: 'Sunset pours on the Kohala Coast.',
    lede: 'Lava-coast terraces in the Kona–Kohala corridor. Bartender add-on or a 4-hour mobile-bar package.',
    hero: photos.barBigisland,
  },
};

export function HubBarView() {
  return (
    <>
      <Hero src={photos.barHero.file} alt={photos.barHero.alt} min="short">
        <p className="text-[13px] text-mute">Cocktails</p>
        <LineReveal
          text="Cocktails where you already are."
          className="mt-5 font-display text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.05] text-ink"
        />
        <p className="mt-6 max-w-[54ch] text-[17px] leading-[1.65] text-ink">
          A bartender, a terrace bar, citrus and ice — stacked with dinner or booked as its own hour.
        </p>
        <p className="mt-5 text-[17px] text-ink">From {formatMobileBarGuest('maui')}, Maui.</p>
        <div className="mt-8">
          <QuoteCta service="mobile-bar" variant="light" />
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

const PACKAGE: Record<IslandId, { h1: string; lede: string; hero: { file: string; alt: string } }> = {
  oahu: {
    h1: 'The 4-hour mobile bar package — Waikīkī to Ko Olina.',
    lede:
      'A cart, ice, citrus, glassware and a bartender for four hours. Distinct from the cocktail-hour add-on on /bar. Stack it with dinner or book the package alone.',
    hero: photos.mobileBarOahu,
  },
  maui: {
    h1: 'A 4-hour mobile bar for Maui villa nights.',
    lede:
      'The packaged cart for Wailea, Kapalua, Kāʻanapali and Makena. /bar is the bartender add-on. This page is the four-hour setup, priced as a package.',
    hero: photos.mobileBarMaui,
  },
  kauai: {
    h1: 'A 4-hour mobile bar on both Kauaʻi shores.',
    lede:
      'Princeville, Hanalei and Poʻipū — a full cart on the terrace. Inquiry stage. Starting prices published. The add-on hour lives on /bar.',
    hero: photos.mobileBarKauai,
  },
  bigisland: {
    h1: 'A 4-hour mobile bar on the Kohala Coast.',
    lede:
      'Lava-coast package: ice, citrus, glassware, bartender. West-side first. /bar is the stacked hour; this page is the four-hour cart.',
    hero: photos.mobileBarBigisland,
  },
};

export function HubMobileBarView() {
  return (
    <>
      <Hero src={photos.barHero.file} alt={photos.barHero.alt} min="short">
        <p className="text-[13px] text-mute">4-hour package</p>
        <LineReveal
          text="The mobile bar package — four hours, four islands."
          className="mt-5 font-display text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.05] text-ink"
        />
        <p className="mt-6 max-w-[54ch] text-[17px] leading-[1.65] text-ink">
          A cart, a bartender, citrus and ice as a published package. The cocktail-hour add-on lives on /bar.
        </p>
        <div className="mt-8">
          <QuoteCta service="mobile-bar" variant="light" />
        </div>
      </Hero>
      <section className="bg-paper py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          {rows.map((row) => (
            <HostLink
              key={row.id}
              island={row.id}
              path="/mobile-bar"
              className="grid gap-2 border-b border-line py-6 md:grid-cols-[1fr_1.4fr_1fr] md:items-baseline"
            >
              <p className="font-display text-[1.5rem] font-light text-ink">{islands[row.id].name}</p>
              <p className="text-[17px] leading-relaxed text-mute">{row.line}</p>
              <p className="text-[17px] text-ink md:text-right">{formatMobileBarPackage(row.id)}</p>
            </HostLink>
          ))}
        </div>
      </section>
      <QuoteTeaser headline="Date, headcount, island — we quote the package in writing." />
    </>
  );
}

export function IslandMobileBarView({ islandId, hostMode }: { islandId: IslandId; hostMode: boolean }) {
  const copy = PACKAGE[islandId];
  const bar = getMobileBar(islandId);
  const href = (path: string) => islandHref(islandId, hostMode, path);
  const faqs = [
    {
      q: 'How is this different from /bar?',
      a: `${islands[islandId].name} /bar is the bartender add-on stacked with dinner. This page is the four-hour mobile-bar package — cart, ice, citrus, glassware — priced as its own line.`,
    },
    {
      q: 'What does the package include?',
      a: `A bartender, bar setup and glassware for ${bar.packageHours} hours. Spirits are billed at cost with receipts, or you supply your own.`,
    },
    {
      q: 'How is it priced?',
      a: `${formatMobileBarPackage(islandId)}, or ${formatMobileBarGuest(islandId)}. ${FEE_DISCLOSURE}`,
    },
  ];

  return (
    <>
      <Hero src={copy.hero.file} alt={copy.hero.alt} min="short">
        <p className="text-[13px] text-mute">{islands[islandId].name} · 4-hour package</p>
        <LineReveal
          text={copy.h1}
          className="mt-4 font-display text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.05] text-ink"
        />
        <p className="mt-5 max-w-[52ch] text-[17px] leading-[1.65] text-ink">{copy.lede}</p>
        <p className="mt-4 text-[17px] text-ink">{formatMobileBarPackage(islandId)}</p>
        <div className="mt-8">
          <QuoteCta island={islandId} service="mobile-bar" />
        </div>
      </Hero>
      <LongFaq items={faqs} title="The packaged cart." />
      <SiblingCluster island={islandId} href={href} />
      <QuoteTeaser island={islandId} />
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
        <p className="text-[13px] text-mute">{islands[islandId].name}</p>
        <LineReveal
          text={copy.h1}
          className="mt-4 font-display text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.05] text-ink"
        />
        <p className="mt-5 max-w-[52ch] text-[17px] leading-[1.65] text-ink">{copy.lede}</p>
        <p className="mt-4 text-[17px] text-ink">{formatMobileBarPackage(islandId)}</p>
        <div className="mt-8">
          <QuoteCta island={islandId} service="mobile-bar" />
        </div>
      </Hero>
      <LongFaq items={faqs} />
      <SiblingCluster island={islandId} href={href} />
      <QuoteTeaser island={islandId} />
    </>
  );
}
