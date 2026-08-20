import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import HeroMedia from '@/components/HeroMedia';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import Reveal from '@/components/Reveal';
import StatusChip from '@/components/StatusChip';
import WordMask from '@/components/WordMask';

/**
 * Statewide gatherings hub — root-owned. Deliberately does not lead with
 * MICE/HCC citywides (closed through 2027). Film, retreats, private
 * gatherings 10–75.
 */

const uses = [
  {
    title: 'Villa retreats',
    body: 'Full-board chef days for offsites that actually happen in houses — not ballrooms. Oʻahu and Maui book now; neighbor islands take dated inquiries.',
    to: '/services',
  },
  {
    title: 'Production and crew catering',
    body: 'Call-time breakfasts and wrap dinners, 10–75, zoned honestly. Kitchen constraints and load-in are confirmed before we accept the day.',
    to: '/oahu/catering',
  },
  {
    title: 'Private gatherings',
    body: 'Birthdays, family reunions, rehearsal dinners that are not a full wedding week. Same five-field quote. Same cleanup standard.',
    to: '/quote?service=catering-events',
  },
];

export default function Corporate() {
  return (
    <>
      <section className="relative flex min-h-[70svh] min-h-[520px] items-end overflow-hidden">
        <HeroMedia
          src="/photos/craft-fire.jpg"
          alt="Hands at a volcanic-stone grill station — concept image, not a myCHEF event"
        />
        <div className="relative mx-auto w-full max-w-spread px-5 pb-20 pt-36 lg:px-10">
          <div className="max-w-[680px]">
            <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-brass">
              Gatherings — Hawaii hub
            </p>
            <h1 className="mt-5 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-white">
              <WordMask text="Retreats, crews, private rooms — not citywides." delay={0.2} />
            </h1>
            <p className="mt-6 max-w-[65ch] text-[1.0625rem] leading-[1.65] text-ivory/90 lg:text-[1.125rem]">
              The Hawaiʻi Convention Center is closed to citywides through 2027. We do not pretend otherwise.
              What we staff now: villa retreats, production days and private gatherings from 10 to 75 guests.
            </p>
            <div className="mt-6">
              <StatusChip kind="verified" onDark>
                HCC citywides closed through 2027 — official
              </StatusChip>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                to="/quote?service=catering-events"
                className="inline-flex items-center rounded-full bg-clay px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-px hover:bg-clay-deep active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-clay"
              >
                Request a catering quote
              </Link>
              <Link
                to="/oahu/catering"
                className="text-sm font-medium text-ivory/90 underline decoration-brass/60 underline-offset-4 transition-colors hover:text-white"
              >
                Oʻahu catering
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <Reveal>
            <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">What we actually staff</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ink">
              Three gathering types. One quote form.
            </h2>
          </Reveal>
          <Reveal stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {uses.map((u) => (
              <Link
                key={u.title}
                to={u.to}
                className="group flex flex-col rounded-[14px] border border-stone bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="font-display text-[1.375rem] font-medium leading-[1.2] text-ink">{u.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{u.body}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-clay">
                  Continue
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </Reveal>
          <p className="mt-10 max-w-[65ch] text-sm leading-relaxed text-ink-soft">
            Island pages hold the transactional detail. This hub exists so statewide “Hawaii catering” searches
            land on a routing document, not a cloned Oʻahu page.
          </p>
        </div>
      </section>

      <QuoteTeaserBand headline="Headcount, island, call time. We’ll quote the rest." />
    </>
  );
}
