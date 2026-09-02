import { Link } from 'react-router';
import HeroMedia from '@/components/HeroMedia';
import HostLink from '@/components/HostLink';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import { islands } from '@/data/islands';
import { photos } from '@/data/photos';
import { formatMobileBarGuest, formatMobileBarPackage, getMobileBar } from '@/data/rateCard';
import type { IslandId } from '@/data/islands';

const rows: { id: IslandId; line: string }[] = [
  { id: 'oahu', line: 'Waikīkī residences, Kahala lawns, Ko Olina villas and Kailua houses.' },
  { id: 'maui', line: 'Welcome pours in Wailea, Kapalua and Kāʻanapali.' },
  { id: 'kauai', line: 'Princeville, Hanalei and Poʻipū — a bartender on the terrace.' },
  { id: 'bigisland', line: 'Kona–Kohala first. Sunset bar on lava-coast terraces.' },
];

export default function Bar() {
  return (
    <>
      <section className="relative -mt-16 flex min-h-[80svh] min-h-[560px] items-end overflow-hidden">
        <HeroMedia src={photos.bar.file} alt="Wailea" overlay="dusk" />
        <div className="relative mx-auto w-full max-w-spread px-5 pb-20 pt-36 lg:px-10">
          <div className="max-w-[680px]">
            <p className="text-[12px] text-ivory/80">Cocktails</p>
            <h1 className="mt-5 font-display text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.05] tracking-[-0.02em] text-white">
              Cocktails where you already are.
            </h1>
            <p className="mt-6 max-w-[54ch] text-[17px] leading-[1.65] text-ivory/90">
              A bartender, a terrace bar, citrus and ice — stacked with dinner or booked as its own hour.
            </p>
            <p className="mt-5 text-[17px] text-ivory/90">
              From {formatMobileBarGuest('maui')}, Maui.
            </p>
            <div className="mt-8">
              <Link
                to="/quote?service=mobile-bar"
                className="inline-flex h-12 items-center bg-[#F6F1E8] px-6 text-sm font-medium text-ink"
              >
                Enquire
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <p className="text-[12px] text-ink-soft">Island tariff</p>
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
                  className="grid gap-2 border-b border-stone py-6 md:grid-cols-[1fr_1.4fr_1fr] md:items-baseline"
                >
                  <p className="font-display text-[1.5rem] font-light text-ink">{islands[row.id].name}</p>
                  <p className="text-[17px] leading-relaxed text-ink-soft">{row.line}</p>
                  <p className="text-[17px] text-ink md:text-right">
                    {formatMobileBarPackage(row.id)}
                    <span className="mt-1 block text-[12px] text-ink-soft">
                      or ${bar.perGuest[0]}–${bar.perGuest[1]} a guest
                    </span>
                  </p>
                </HostLink>
              );
            })}
          </div>
        </div>
      </section>

      <QuoteTeaserBand headline="Date, headcount, island — we quote the bar in writing." />
    </>
  );
}
