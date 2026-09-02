'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { islands, type IslandId } from '@/data/islands';
import { useIsland } from '@/components/IslandProvider';
import { cn } from '@/lib/utils';

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

export default function ThankYouView() {
  const params = useSearchParams();
  const { href } = useIsland();
  const islandParam = params.get('island');
  const island = islandParam && islandParam in islands ? (islandParam as IslandId) : null;
  const svc = params.get('service');
  const serviceLabel = svc ? SERVICE_LABELS[svc] ?? null : null;
  const guests = params.get('guests');
  const shore = params.get('shore');
  const shoreLabel = shore === 'north' ? 'North Shore' : shore === 'south' ? 'South Shore' : null;
  const contextParts = [island ? islands[island].name : null, shoreLabel, serviceLabel, guests ? `${guests} guests` : null].filter(
    Boolean,
  ) as string[];

  const [done, setDone] = useState<null | 'added' | 'skipped'>(null);
  const [occasion, setOccasion] = useState('');
  const [dietary, setDietary] = useState('');
  const [venue, setVenue] = useState('');
  const [budget, setBudget] = useState('');
  const [hearAbout, setHearAbout] = useState('');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setDone('added');
  };

  const input =
    'w-full border border-line bg-paper px-4 py-3 text-[1rem] text-ink placeholder:text-mute rounded-[2px] focus:outline-none focus:ring-1 focus:ring-ink';

  return (
    <>
      <section className="bg-paper py-16 lg:py-24">
        <div className="mx-auto w-full max-w-[640px] px-5 text-center lg:px-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/photos/thank-you.jpg"
            alt="A folded linen napkin and a sprig of rosemary on a stone counter in soft window light"
            className="aspect-[16/9] w-full object-cover"
          />
          <h1 className="mt-10 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-light leading-[1.05] text-ink">
            Mahalo — we’ve got it.
          </h1>
          {contextParts.length ? (
            <p className="mt-4 text-sm text-mute">{contextParts.join(' · ')}</p>
          ) : null}
          <p className="mx-auto mt-6 max-w-[52ch] text-[17px] leading-[1.65] text-mute">
            A coordinator will reply in Hawaii business hours. WhatsApp if you want a faster thread. If your dates are
            close, callback requests get priority routing.
          </p>
        </div>
      </section>

      <section className="bg-sand py-20 lg:py-28">
        <div className="mx-auto w-full max-w-3xl px-5 lg:px-10">
          {done ? (
            <p className="border border-line bg-paper px-6 py-10 text-center text-sm text-mute">
              {done === 'added' ? 'Noted — mahalo. Your coordinator sees this with your enquiry.' : 'You’re all set.'}
            </p>
          ) : (
            <div className="border border-line bg-paper p-6 lg:p-10">
              <p className="text-[12px] text-mute">Optional — 60 seconds</p>
              <h2 className="mt-3 font-display text-[clamp(1.75rem,3vw,2.25rem)] font-light text-ink">
                Help us reply faster.
              </h2>
              <p className="mt-3 max-w-[60ch] text-[17px] leading-[1.65] text-mute">
                Skip this and nothing bad happens — your enquiry is already in.
              </p>
              <form onSubmit={onSubmit} className="mt-8 grid gap-5 md:grid-cols-2">
                <label className="block text-sm text-ink">
                  Occasion
                  <select value={occasion} onChange={(e) => setOccasion(e.target.value)} className={cn(input, 'mt-2')}>
                    <option value="">Choose one</option>
                    {OCCASIONS.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </label>
                <label className="block text-sm text-ink">
                  Dietary needs
                  <input value={dietary} onChange={(e) => setDietary(e.target.value)} className={cn(input, 'mt-2')} />
                </label>
                <label className="block text-sm text-ink">
                  Venue or villa name
                  <input value={venue} onChange={(e) => setVenue(e.target.value)} className={cn(input, 'mt-2')} />
                </label>
                <div>
                  <p className="text-sm text-ink">Budget posture</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {BUDGET_POSTURES.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBudget(budget === b ? '' : b)}
                        className={cn(
                          'inline-flex h-10 items-center border px-4 text-sm font-medium rounded-[2px]',
                          budget === b ? 'border-ink bg-ink text-paper' : 'border-line bg-paper text-ink',
                        )}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
                <label className="block text-sm text-ink md:col-span-2">
                  How did you hear about us?
                  <select value={hearAbout} onChange={(e) => setHearAbout(e.target.value)} className={cn(input, 'mt-2')}>
                    <option value="">Choose one</option>
                    {HEAR_ABOUT.map((h) => (
                      <option key={h}>{h}</option>
                    ))}
                  </select>
                </label>
                <div className="flex flex-wrap items-center gap-4 md:col-span-2">
                  <button type="submit" className="inline-flex h-12 items-center bg-ink px-6 text-[14px] font-medium text-paper rounded-[2px]">
                    Add these details
                  </button>
                  <button type="button" onClick={() => setDone('skipped')} className="text-sm font-medium text-ink underline underline-offset-4">
                    No thanks, I’m done
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="mx-auto w-full max-w-3xl px-5 lg:px-10">
          {[
            { to: href('/pricing'), label: 'See pricing orientation' },
            { to: '/how-it-works', label: 'How the event day works' },
            { to: '/trust', label: 'Our honesty register' },
          ].map((l) => (
            <Link key={l.to} href={l.to} className="flex items-center justify-between border-b border-line py-5 first:border-t">
              <span className="font-display text-[1.25rem] font-light text-ink">{l.label}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
