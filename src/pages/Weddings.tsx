import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import HeroMedia from '@/components/HeroMedia';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import Reveal from '@/components/Reveal';
import StatusChip from '@/components/StatusChip';
import WordMask from '@/components/WordMask';
import { islands } from '@/data/islands';

/**
 * Statewide weddings hub — root-owned. Routes island-modified wedding
 * intent to the island hosts and never competes with Maui wedding-catering.
 */

const islandsWeddings = [
  {
    id: 'maui' as const,
    title: 'Maui wedding weeks',
    body: 'Primary wedding island: welcome dinner, rehearsal, reception and recovery brunch with one team. Peak months September, October and May, plus December–March villa pressure.',
    to: '/maui/wedding-catering',
    cta: 'Maui wedding catering',
    img: '/photos/wedding-garden.jpg',
    chip: 'Booking now',
  },
  {
    id: 'oahu' as const,
    title: 'Oʻahu wedding weekends',
    body: 'Celebration dinners and weekend stacks in the resort corridors — not a convention-centre product. Ko Olina, Kahala and windward estates are the usual rooms.',
    to: '/oahu/catering',
    cta: 'Oʻahu catering',
    img: '/photos/wedding-garden.jpg',
    chip: 'Booking now',
  },
  {
    id: 'kauai' as const,
    title: 'Kauaʻi estate weddings',
    body: '1,660 non-resident marriages in 2024 (official). Estate formats to about 75 guests, both shores. Inquiry-stage — your dates help set the launch.',
    to: '/kauai/events',
    cta: 'Join the Kauaʻi list',
    img: '/photos/island-kauai.jpg',
    chip: 'Inquiry stage',
  },
  {
    id: 'bigisland' as const,
    title: 'Hawaiʻi Island estate weeks',
    body: 'Kohala estates, wedding-week format, gated until a west-side team exists. Inquiry only; no local-entity claim.',
    to: '/bigisland/catering',
    cta: 'Join the Big Island list',
    img: '/photos/dinner-for-two.jpg',
    chip: 'Inquiry stage',
  },
];

export default function Weddings() {
  return (
    <>
      <section className="relative flex min-h-[70svh] min-h-[520px] items-end overflow-hidden">
        <HeroMedia
          src="/photos/wedding-garden.jpg"
          alt="Estate wedding table under linen canopies — concept image, not a myCHEF event"
        />
        <div className="relative mx-auto w-full max-w-spread px-5 pb-20 pt-36 lg:px-10">
          <div className="max-w-[680px]">
            <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-brass">
              Weddings — Hawaii hub
            </p>
            <h1 className="mt-5 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-white">
              <WordMask text="One team for the whole wedding week." delay={0.2} />
            </h1>
            <p className="mt-6 max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ivory/90 lg:text-[1.125rem]">
              Welcome dinner to recovery brunch. This page routes you to the island that will actually cook —
              Maui first, Oʻahu for weekends, Kauaʻi and Hawaiʻi Island on the inquiry list.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                to="/quote?service=wedding-week"
                className="inline-flex items-center rounded-full bg-clay px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-px hover:bg-clay-deep active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-clay"
              >
                Request a wedding quote
              </Link>
              <Link
                to="/maui/wedding-catering"
                className="text-sm font-medium text-ivory/90 underline decoration-brass/60 underline-offset-4 transition-colors hover:text-white"
              >
                Start on Maui
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <Reveal>
            <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">Four islands, four products</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ink">
              Pick the island hosting the week.
            </h2>
          </Reveal>
          <Reveal stagger className="mt-12 grid gap-6 md:grid-cols-2">
            {islandsWeddings.map((row) => {
              const isl = islands[row.id];
              return (
                <Link
                  key={row.id}
                  to={row.to}
                  className="group flex flex-col overflow-hidden rounded-[14px] border border-stone bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_2px_4px_rgba(34,29,21,.06),0_20px_44px_-12px_rgba(34,29,21,.2)]"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={row.img}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 lg:p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-[1.5rem] font-medium leading-[1.2] text-ink">{row.title}</h3>
                      <StatusChip kind={isl.state === 'live' ? 'verified' : 'inquiry'}>{row.chip}</StatusChip>
                    </div>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{row.body}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-clay">
                      {row.cta}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </Reveal>
          <p className="mt-10 max-w-[65ch] font-mono text-[0.6875rem] uppercase leading-5 tracking-[0.1em] text-ink-soft">
            Guest counts we staff: dinners 2–15, receptions about 10–75. Larger rooms are quoted as exceptions, never
            implied as standard.
          </p>
        </div>
      </section>

      <QuoteTeaserBand headline="Tell us the island, the dates, the headcount." />
    </>
  );
}
