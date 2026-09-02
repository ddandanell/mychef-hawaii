import { ArrowRight } from 'lucide-react';
import HeroMedia from '@/components/HeroMedia';
import HostLink from '@/components/HostLink';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import Reveal from '@/components/Reveal';
import StatusChip from '@/components/StatusChip';
import WordMask from '@/components/WordMask';
import { islands } from '@/data/islands';
import { photos } from '@/data/photos';
import {
  FEE_DISCLOSURE,
  formatMobileBarGuest,
  formatMobileBarPackage,
  getMobileBar,
} from '@/data/rateCard';
import type { IslandId } from '@/data/islands';

/**
 * Statewide bar hub — root-owned. Deep-links to island subdomains.
 */

const islandsBar: {
  id: IslandId;
  title: string;
  body: string;
  img: string;
  alt: string;
}[] = [
  {
    id: 'oahu',
    title: 'Oʻahu terrace bar',
    body: 'Waikīkī residences, Kahala lawns, Ko Olina villas and Kailua houses. Cocktail hour stacked with a chef night, or booked alone.',
    img: photos.bar.file,
    alt: photos.bar.alt,
  },
  {
    id: 'maui',
    title: 'Maui villa & wedding-week bar',
    body: 'Welcome pours in Wailea, Kapalua and Kāʻanapali. The bar stacks with the wedding week or a signature dinner.',
    img: photos.bar.file,
    alt: photos.bar.alt,
  },
  {
    id: 'kauai',
    title: 'Kauaʻi estate cocktails',
    body: 'Princeville, Hanalei and Poʻipū. Inquiry-stage — your dates help staff the island team.',
    img: photos.bar.file,
    alt: photos.bar.alt,
  },
  {
    id: 'bigisland',
    title: 'Kohala Coast pours',
    body: 'Kona–Kohala first. Sunset bar on lava-coast terraces when the west-side team launches.',
    img: photos.bar.file,
    alt: photos.bar.alt,
  },
];

export default function Bar() {
  return (
    <>
      <section className="relative flex min-h-[80svh] min-h-[560px] items-end overflow-hidden">
        <HeroMedia src={photos.bar.file} alt={photos.bar.alt} overlay="dusk" />
        <div className="relative mx-auto w-full max-w-spread px-5 pb-20 pt-36 lg:px-10">
          <div className="max-w-[680px]">
            <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-brass">
              Mobile bar — Hawaii hub
            </p>
            <h1 className="mt-5 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-white">
              <WordMask text="Cocktails where you already are." delay={0.2} />
            </h1>
            <p className="mt-6 max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ivory/90 lg:text-[1.125rem]">
              A bartender, a terrace bar, citrus and ice — stacked with a private chef or booked as its own
              hour. Starting prices are published per island. Quote confirmed in writing.
            </p>
            <p className="mt-5 font-mono text-[0.75rem] uppercase tracking-[0.12em] text-ivory/75">
              From {formatMobileBarGuest('maui')} · {formatMobileBarPackage('maui')}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <HostLink
                island="maui"
                path="/bar"
                className="inline-flex items-center rounded-full bg-clay px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-px hover:bg-clay-deep"
              >
                Start on Maui
              </HostLink>
              <a
                href="#islands"
                className="text-sm font-medium text-ivory/90 underline decoration-brass/60 underline-offset-4"
              >
                Choose your island ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="islands" className="bg-ivory py-24 lg:py-32">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <Reveal>
            <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">Four island bars</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ink">
              Pick the island pouring.
            </h2>
            <p className="mt-4 max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ink-soft">
              {FEE_DISCLOSURE}
            </p>
          </Reveal>
          <Reveal stagger className="mt-14 grid gap-6 md:grid-cols-2">
            {islandsBar.map((row) => {
              const isl = islands[row.id];
              const bar = getMobileBar(row.id);
              return (
                <HostLink
                  key={row.id}
                  island={row.id}
                  path="/bar"
                  className="group flex flex-col overflow-hidden rounded-[18px] border border-stone bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_2px_4px_rgba(34,29,21,.06),0_20px_44px_-12px_rgba(34,29,21,.2)]"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={row.img}
                      alt={row.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 lg:p-8">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-[1.5rem] font-medium leading-[1.2] text-ink">{row.title}</h3>
                      <StatusChip kind={isl.state === 'live' ? 'verified' : 'inquiry'}>
                        {isl.stateLabel}
                      </StatusChip>
                    </div>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{row.body}</p>
                    <p className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink">
                      from ${bar.packageFrom.toLocaleString('en-US')}
                      <span className="ml-2 font-sans text-sm font-normal text-ink-soft">
                        / {bar.packageHours} hr + ${bar.packagePerGuest}/guest
                      </span>
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-clay">
                      {isl.name} bar
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </HostLink>
              );
            })}
          </Reveal>
        </div>
      </section>

      <QuoteTeaserBand headline="Date, headcount, island — we quote the bar in writing." />
    </>
  );
}
