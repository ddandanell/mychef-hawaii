import HostLink from '@/components/HostLink';
import { QuoteCta } from '@/components/Cta';
import Eyebrow from '@/components/Eyebrow';
import Hero from '@/components/Hero';
import LineReveal from '@/components/LineReveal';
import { DocumentCopy, LongFaq, SiblingCluster } from '@/components/Longform';
import Photo from '@/components/Photo';
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
    h1: 'Villa bartender add-on — Wailea and Kapalua terraces.',
    lede: 'Welcome pours, rehearsal-night cocktails and a terrace hour in Wailea, Kapalua, Kāʻanapali and Makena. The four-hour packaged cart lives on /mobile-bar.',
    hero: photos.barMaui,
  },
  kauai: {
    h1: 'Estate cocktails on both Kauaʻi shores.',
    lede: 'Princeville, Hanalei and Poʻipū — a bartender on the terrace. Starting prices published.',
    hero: photos.barKauai,
  },
  bigisland: {
    h1: 'Sunset pours on the Kohala Coast.',
    lede: 'Lava-coast terraces in the Kona–Kohala corridor. Bartender add-on; the four-hour packaged cart lives on /mobile-bar.',
    hero: photos.barBigisland,
  },
};

function IslandBarPicker({
  path,
  heading,
  stills,
  priceOf,
}: {
  path: '/bar' | '/mobile-bar';
  heading: string;
  stills: Record<IslandId, { hero: { file: string; alt: string } }>;
  priceOf: (id: IslandId) => string;
}) {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="mx-auto w-full max-w-spread px-5 lg:px-10">
        <Eyebrow>Where we pour</Eyebrow>
        <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.08] text-ink">
          {heading}
        </h2>
        <ul className="mt-14 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {rows.map((row) => {
            const still = stills[row.id].hero;
            return (
              <li key={row.id}>
                <HostLink island={row.id} path={path} className="group block">
                  <span className="relative block aspect-[3/4] overflow-hidden bg-sand">
                    <Photo
                      src={still.file}
                      alt={still.alt}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] motion-reduce:transform-none"
                    />
                  </span>
                  <span className="mt-5 block font-display text-[1.5rem] font-light text-ink">{islands[row.id].name}</span>
                  <span className="mt-2 block text-[15px] leading-relaxed text-mute">{row.line}</span>
                  <span className="mt-2 block text-[13px] text-mute">{priceOf(row.id)}</span>
                </HostLink>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

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
      <IslandBarPicker
        path="/bar"
        heading="Open the island bar document."
        stills={COPY}
        priceOf={(id) => {
          const bar = getMobileBar(id);
          return `${formatMobileBarPackage(id)} · or $${bar.perGuest[0]}–$${bar.perGuest[1]} a guest`;
        }}
      />
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
      <Hero src={photos.hubMobileBar.file} alt={photos.hubMobileBar.alt} min="short">
        <p className="text-[13px] text-mute">4-hour package</p>
        <LineReveal
          text="Mobile bar Hawaii — four hours, four islands."
          className="mt-5 font-display text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.05] text-ink"
        />
        <p className="mt-6 max-w-[54ch] text-[17px] leading-[1.65] text-ink">
          A cart, a bartender, citrus and ice as a published package. The cocktail-hour add-on lives on /bar.
        </p>
        <div className="mt-8">
          <QuoteCta service="mobile-bar" variant="light" />
        </div>
      </Hero>
      <IslandBarPicker
        path="/mobile-bar"
        heading="Open the island package document."
        stills={PACKAGE}
        priceOf={(id) => formatMobileBarPackage(id)}
      />
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
          <QuoteCta island={islandId} service="mobile-bar" variant="light" />
        </div>
      </Hero>
      <DocumentCopy heading={`How the packaged cart runs on ${islands[islandId].name}.`} paras={[copy.lede, `/bar is the bartender add-on stacked with dinner. This URL is the four-hour mobile-bar package — cart, ice, citrus, glassware — priced as its own line.`, `${formatMobileBarPackage(islandId)}, or ${formatMobileBarGuest(islandId)}. ${FEE_DISCLOSURE}`]}>
        <nav aria-label="Related on this island" className="mt-14 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <HostLink island={islandId} path="/bar" className="text-ink underline underline-offset-4">
            Bartender add-on
          </HostLink>
          <HostLink island={islandId} path="/weddings" className="text-ink underline underline-offset-4">
            Wedding week
          </HostLink>
          <HostLink island={islandId} path="/private-chef" className="text-ink underline underline-offset-4">
            What’s included
          </HostLink>
        </nav>
      </DocumentCopy>
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
      q: 'How is this different from /mobile-bar?',
      a: `${islands[islandId].name} /mobile-bar is the four-hour packaged cart. This page is the bartender add-on — stacked with dinner or booked as its own hour.`,
    },
    {
      q: 'What does the add-on include?',
      a: `A bartender, citrus, ice and glassware. Spirits are billed at cost with receipts, or you supply your own. The four-hour cart is a different line on /mobile-bar.`,
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
          <QuoteCta island={islandId} service="mobile-bar" variant="light" />
        </div>
      </Hero>
      <DocumentCopy heading={`How the terrace bar runs on ${islands[islandId].name}.`} paras={[copy.lede, `/mobile-bar is the four-hour packaged cart. This URL is the add-on hour — stacked with dinner or booked alone.`, `${formatMobileBarPackage(islandId)}, or ${formatMobileBarGuest(islandId)}. ${FEE_DISCLOSURE}`]}>
        <nav aria-label="Related on this island" className="mt-14 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <HostLink island={islandId} path="/mobile-bar" className="text-ink underline underline-offset-4">
            4-hour package
          </HostLink>
          <HostLink island={islandId} path="/weddings" className="text-ink underline underline-offset-4">
            Wedding week
          </HostLink>
          <HostLink island={islandId} path="/private-chef" className="text-ink underline underline-offset-4">
            What’s included
          </HostLink>
        </nav>
      </DocumentCopy>
      <LongFaq items={faqs} />
      <SiblingCluster island={islandId} href={href} />
      <QuoteTeaser island={islandId} />
    </>
  );
}
