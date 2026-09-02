import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { goToHost } from '@/components/HostLink';
import { useIsland } from '@/context/IslandContext';
import { islandOrder, islands } from '@/data/islands';
import { cn } from '@/lib/utils';

/**
 * Navbar (design.md §8.1) — sticky, all pages.
 * Wordmark always goes to this host's front page: hub `/`, island subdomain `/`,
 * path clone `/oahu` (never `/overview`, never the hub from an island host).
 */

const rootLinks = [
  { label: 'Services', to: '/services' },
  { label: 'Islands', to: '/islands' },
  { label: 'Weddings', to: '/weddings' },
  { label: 'Bar', to: '/bar' },
  { label: 'Pricing', to: '/pricing' },
];

function Wordmark({ islandName }: { islandName?: string }) {
  return (
    <span className="flex items-baseline gap-2">
      <span className="font-display text-2xl font-semibold tracking-tight text-ink">
        my<span className="text-clay">CHEF</span>
        <span aria-hidden="true" className="ml-0.5 inline-block h-2 w-2 rounded-full bg-clay align-super" />
      </span>
      <span className="hidden font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-soft sm:inline">
        {islandName ?? 'Hawaii'}
      </span>
    </span>
  );
}

function StateDot({ state }: { state: 'live' | 'inquiry' }) {
  return (
    <span
      aria-hidden="true"
      className={cn('inline-block h-1.5 w-1.5 rounded-full', state === 'live' ? 'bg-moss' : 'bg-brass')}
    />
  );
}

function IslandSwitcher({ onNavigate }: { onNavigate?: () => void }) {
  const { island } = useIsland();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className="inline-flex items-center gap-2 rounded-full border border-stone bg-white/70 px-3.5 py-1.5 font-mono text-[0.75rem] uppercase tracking-[0.12em] text-ink transition-colors hover:border-clay/50"
      >
        {island ? <StateDot state={island.state} /> : null}
        {island ? island.shortName : 'Hawaiʻi'}
        <ChevronDown className={cn('h-3.5 w-3.5 transition-transform', open && 'rotate-180')} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            role="listbox"
            className="absolute right-0 top-full z-50 mt-2 w-72 overflow-hidden rounded-[14px] border border-stone bg-white shadow-soft"
          >
            <button
              type="button"
              role="option"
              aria-selected={!island}
              onClick={() => {
                setOpen(false);
                onNavigate?.();
                goToHost('root');
              }}
              className="flex w-full items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-sand"
            >
              <span aria-hidden="true" className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-clay" />
              <span className="-mt-0.5 flex-1">
                <span className="block font-display text-base font-medium text-ink">All Hawaiʻi</span>
                <span className="block text-xs text-ink-soft">Statewide hub</span>
              </span>
            </button>
            {islandOrder.map((id) => {
              const isl = islands[id];
              return (
                <button
                  key={id}
                  type="button"
                  role="option"
                  aria-selected={island?.id === id}
                  onClick={() => {
                    setOpen(false);
                    onNavigate?.();
                    goToHost(id);
                  }}
                  className="flex w-full items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-sand"
                >
                  <StateDot state={isl.state} />
                  <span className="-mt-0.5 flex-1">
                    <span className="block font-display text-base font-medium text-ink">{isl.name}</span>
                    <span className="block text-xs text-ink-soft">
                      {isl.state === 'live' ? 'Booking now' : 'Inquiry list'}
                    </span>
                  </span>
                </button>
              );
            })}
            <div className="border-t border-stone px-4 py-2.5 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-ink-soft">
              Two islands live · two inquiry-stage
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const { island, href, state, homePath } = useIsland();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const islandLinks = island
    ? [
        { label: 'Private Chef', to: href('/private-chef') },
        { label: 'Vacation Chef', to: href('/vacation-chef') },
        { label: 'Weddings', to: href('/wedding-catering') },
        { label: 'Bar', to: href('/bar') },
        island.id === 'kauai'
          ? { label: 'Events', to: href('/events') }
          : island.id === 'maui'
            ? { label: 'Pricing', to: href('/pricing') }
            : { label: 'Catering', to: href('/catering') },
        { label: 'Areas', to: href('/locations') },
      ]
    : [...rootLinks, { label: 'Journal', to: '/journal' }];

  const ctaLabel = state === 'inquiry' ? 'Join the Inquiry List' : 'Request a Quote';

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-stone bg-ivory/90 backdrop-blur transition-all duration-300',
        scrolled ? 'shadow-soft' : 'shadow-none',
      )}
      style={{ borderTopWidth: 3, borderTopStyle: 'solid', borderTopColor: island?.hue ?? '#B34828' }}
    >
      <div
        className={cn(
          'mx-auto flex w-full max-w-spread items-center justify-between px-5 transition-all duration-300 lg:px-10',
          scrolled ? 'h-[60px]' : 'h-[72px]',
        )}
      >
        <Link to={homePath} aria-label={island ? `myCHEF ${island.name} home` : 'myCHEF Hawaii home'} className="shrink-0">
          <Wordmark islandName={island?.shortName} />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {islandLinks.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-clay"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <IslandSwitcher />
          <Link
            to={href('/quote')}
            className={cn(
              'inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200',
              'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-clay',
              state === 'inquiry'
                ? 'border border-brass text-brass hover:bg-brass/10'
                : 'bg-clay text-white hover:-translate-y-px hover:bg-clay-deep active:scale-[0.97]',
            )}
          >
            {ctaLabel}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-2 text-ink lg:hidden"
          aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setDrawerOpen((v) => !v)}
        >
          {drawerOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-[60px] z-40 flex flex-col bg-ivory lg:hidden"
          >
            <div className="border-b border-stone px-5 py-4">
              <IslandSwitcher onNavigate={() => setDrawerOpen(false)} />
            </div>
            <nav aria-label="Mobile" className="flex flex-1 flex-col gap-1 overflow-y-auto px-5 py-6">
              {[...islandLinks, { label: 'Islands', to: '/islands' }, { label: 'Trust', to: '/trust' }].map((l, i) => (
                <motion.div
                  key={l.label + l.to}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.3 }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setDrawerOpen(false)}
                    className="block rounded-[10px] px-3 py-3 font-display text-2xl font-medium text-ink transition-colors hover:bg-sand"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="border-t border-stone p-5">
              <Link
                to={href('/quote')}
                onClick={() => setDrawerOpen(false)}
                className={cn(
                  'flex w-full items-center justify-center rounded-full px-5 py-3.5 text-base font-medium',
                  state === 'inquiry' ? 'border border-brass text-brass' : 'bg-clay text-white',
                )}
              >
                {ctaLabel}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
