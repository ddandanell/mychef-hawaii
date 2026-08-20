import { useEffect, useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import { Link, useSearchParams } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Reveal from '@/components/Reveal';
import WordMask from '@/components/WordMask';
import { islands } from '@/data/islands';
import type { IslandId } from '@/data/islands';
import { cn } from '@/lib/utils';

/**
 * Thank You — /thank-you (thank-you.md).
 * Confirms the enquiry, sets the response expectation, and offers the
 * optional step-2 qualification — framed as acceleration, never a second
 * gate. Receives island/service/guests context from the quote submit.
 */

const SERVICE_LABELS: Record<string, string> = {
  'signature-dinner': 'Signature in-villa dinner',
  'dinner-for-two': 'Dinner for two',
  'wedding-week': 'Wedding week',
  'catering-events': 'Catering & events',
  'vacation-chef': 'Vacation chef (multi-day)',
  'weekly-household': 'Weekly household service',
  'something-else': 'Something else',
};

const OCCASIONS = ['Celebration', 'Wedding week', 'Just dinner', 'Retreat', 'Other'];
const HEAR_ABOUT = ['Google', 'Concierge or villa agency', 'Wedding planner', 'Friend', 'Other'];
const BUDGET_POSTURES = ['Entry', 'Core', 'Premium', 'Guide me'];

/* ---------------- Section 1 — Confirmation hero ---------------- */

function ConfirmationMark() {
  return (
    <motion.svg
      viewBox="0 0 96 96"
      className="mx-auto h-20 w-20"
      initial={false}
      aria-hidden="true"
    >
      <motion.circle
        cx="48"
        cy="48"
        r="44"
        fill="none"
        stroke="#9C7A33"
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />
      <motion.path
        d="M32 49.5 43.5 61 65 37"
        fill="none"
        stroke="#9C7A33"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, delay: 0.6, ease: 'easeOut' }}
      />
    </motion.svg>
  );
}

function Hero({
  island,
  serviceLabel,
  guests,
  shore,
}: {
  island: IslandId | null;
  serviceLabel: string | null;
  guests: string | null;
  shore: string | null;
}) {
  const inquiry = island ? islands[island].state === 'inquiry' : false;

  const shoreLabel = shore === 'north' ? 'North Shore' : shore === 'south' ? 'South Shore' : null;
  const contextParts = [
    island ? islands[island].name : null,
    shoreLabel,
    serviceLabel,
    guests ? `${guests} guests` : null,
  ].filter(Boolean) as string[];
  const contextLine = contextParts.length
    ? contextParts.join(' · ').toUpperCase()
    : 'YOUR ENQUIRY IS IN';

  return (
    <section className="bg-ivory py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[640px] px-5 text-center lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden rounded-[14px] border border-stone shadow-soft"
        >
          <img
            src="/photos/thank-you.jpg"
            alt="A folded linen napkin and a sprig of rosemary on a stone counter in soft window light"
            className="aspect-[16/9] w-full object-cover"
          />
        </motion.div>
        <div className="mt-10">
          <ConfirmationMark />
        </div>
        <h1 className="mt-8 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
          <WordMask text="Mahalo — we’ve got it." delay={0.9} />
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.05 }}
          className="mt-4 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-brass"
        >
          {contextLine}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 1.1 }}
          className="mx-auto mt-6 max-w-[52ch] text-[1.0625rem] leading-[1.65] text-ink-soft"
        >
          {inquiry && island ? (
            <>
              You’re on the {islands[island].name} inquiry list. Every dated enquiry directly shapes when we open —
              we’ll be in touch with honest timing.
            </>
          ) : (
            <>
              A coordinator will reply within one business day, Hawaii Standard Time. If your dates are close,
              callback requests get priority routing.
            </>
          )}
        </motion.p>
      </div>
    </section>
  );
}

/* ---------------- Section 2 — Optional Step 2 ---------------- */

const optionalInput =
  'w-full rounded-[10px] border border-stone bg-white px-4 py-3 text-[1rem] text-ink placeholder:text-ink-soft/50 transition-colors hover:border-clay/40 focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay/30';

function StepTwo() {
  const [occasion, setOccasion] = useState('');
  const [dietary, setDietary] = useState('');
  const [venue, setVenue] = useState('');
  const [needSuggestions, setNeedSuggestions] = useState(false);
  const [budget, setBudget] = useState('');
  const [hearAbout, setHearAbout] = useState('');
  const [done, setDone] = useState<null | 'added' | 'skipped'>(null);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setDone('added');
  };

  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="mx-auto w-full max-w-3xl px-5 lg:px-10">
        <AnimatePresence mode="wait">
          {done ? (
            <motion.p
              key="done"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="rounded-[14px] border border-stone bg-white px-6 py-10 text-center font-mono text-[0.75rem] uppercase tracking-[0.14em] text-ink-soft shadow-soft"
            >
              {done === 'added' ? 'Noted — mahalo. Your coordinator sees this with your enquiry.' : 'You’re all set.'}
            </motion.p>
          ) : (
            <motion.div
              key="card"
              exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
              transition={{ duration: 0.3 }}
            >
              <Reveal>
                <div className="rounded-[14px] border border-stone bg-white p-6 shadow-soft lg:p-10">
                  <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">
                    Optional — 60 seconds
                  </p>
                  <h2 className="mt-3 font-display text-[clamp(1.75rem,3vw,2.25rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ink">
                    Help us reply faster.
                  </h2>
                  <p className="mt-3 max-w-[60ch] text-[1.0625rem] leading-[1.65] text-ink-soft">
                    Skip this and nothing bad happens — your enquiry is already in. These details just let the first
                    reply be more useful.
                  </p>

                  <Reveal stagger staggerDelay={0.05} className="mt-8">
                    <form onSubmit={onSubmit} className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label htmlFor="occasion" className="mb-2 block font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-ink">
                          Occasion
                        </label>
                        <div className="relative">
                          <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} className={cn(optionalInput, 'appearance-none pr-10', !occasion && 'text-ink-soft/60')}>
                            <option value="">Choose one</option>
                            {OCCASIONS.map((o) => (
                              <option key={o} value={o} className="text-ink">{o}</option>
                            ))}
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" aria-hidden="true" />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="dietary" className="mb-2 block font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-ink">
                          Dietary needs
                        </label>
                        <input
                          id="dietary"
                          type="text"
                          value={dietary}
                          onChange={(e) => setDietary(e.target.value)}
                          placeholder="allergies, vegan, kosher-style…"
                          className={optionalInput}
                        />
                      </div>

                      <div>
                        <label htmlFor="venue" className="mb-2 block font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-ink">
                          Venue or villa name
                        </label>
                        <input
                          id="venue"
                          type="text"
                          value={venue}
                          onChange={(e) => setVenue(e.target.value)}
                          placeholder="Where you’re staying"
                          className={optionalInput}
                        />
                        <label className="mt-2.5 flex cursor-pointer items-center gap-2 text-sm text-ink-soft">
                          <input
                            type="checkbox"
                            checked={needSuggestions}
                            onChange={(e) => setNeedSuggestions(e.target.checked)}
                            className="h-4 w-4 rounded border-stone accent-clay"
                          />
                          Need suggestions
                        </label>
                      </div>

                      <div>
                        <span className="mb-2 block font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-ink">
                          Budget posture
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {BUDGET_POSTURES.map((b) => (
                            <button
                              key={b}
                              type="button"
                              aria-pressed={budget === b}
                              onClick={() => setBudget(budget === b ? '' : b)}
                              className={cn(
                                'rounded-full border px-4 py-2 font-mono text-[0.75rem] tracking-[0.06em] transition-colors',
                                budget === b
                                  ? 'border-clay bg-clay text-white'
                                  : 'border-stone bg-white text-ink-soft hover:border-clay/50 hover:text-ink',
                              )}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="hear-about" className="mb-2 block font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-ink">
                          How did you hear about us?
                        </label>
                        <div className="relative">
                          <select id="hear-about" value={hearAbout} onChange={(e) => setHearAbout(e.target.value)} className={cn(optionalInput, 'appearance-none pr-10', !hearAbout && 'text-ink-soft/60')}>
                            <option value="">Choose one</option>
                            {HEAR_ABOUT.map((h) => (
                              <option key={h} value={h} className="text-ink">{h}</option>
                            ))}
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" aria-hidden="true" />
                        </div>
                      </div>

                      <div className="flex flex-col items-start gap-4 pt-2 md:col-span-2 md:flex-row md:items-center">
                        <button
                          type="submit"
                          className="inline-flex items-center rounded-full border border-brass px-6 py-3 text-sm font-medium text-brass transition-all duration-200 hover:-translate-y-px hover:bg-brass/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-brass active:scale-[0.97]"
                        >
                          Add these details
                        </button>
                        <button
                          type="button"
                          onClick={() => setDone('skipped')}
                          className="text-sm font-medium text-ink-soft underline decoration-stone underline-offset-4 transition-colors hover:text-clay"
                        >
                          No thanks, I’m done
                        </button>
                      </div>
                    </form>
                  </Reveal>
                </div>
              </Reveal>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ---------------- Section 3 — While you wait ---------------- */

const nextLinks = [
  { to: '/pricing', label: 'See pricing orientation' },
  { to: '/how-it-works', label: 'How the event day works' },
  { to: '/trust', label: 'Our honesty register' },
];

function WhileYouWait() {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto w-full max-w-3xl px-5 lg:px-10">
        <Reveal>
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">While You Wait</p>
        </Reveal>
        <Reveal stagger staggerDelay={0.08} className="mt-6">
          {nextLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group flex items-center justify-between gap-4 border-b border-stone py-5 first:border-t"
            >
              <span className="font-display text-[1.25rem] font-medium text-ink transition-colors group-hover:text-clay lg:text-[1.375rem]">
                {l.label}
              </span>
              <ArrowRight className="h-5 w-5 shrink-0 text-clay transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default function ThankYou() {
  const [params] = useSearchParams();

  // thank-you.md: excluded from indexing (noindex) in a production build.
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex';
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  const { island, serviceLabel, guests, shore } = useMemo(() => {
    const islandParam = params.get('island');
    const isl = islandParam && islandParam in islands ? (islandParam as IslandId) : null;
    const svc = params.get('service');
    return {
      island: isl,
      serviceLabel: svc ? SERVICE_LABELS[svc] ?? null : null,
      guests: params.get('guests'),
      shore: params.get('shore'),
    };
  }, [params]);

  return (
    <>
      <Hero island={island} serviceLabel={serviceLabel} guests={guests} shore={shore} />
      <StepTwo />
      <WhileYouWait />
    </>
  );
}
