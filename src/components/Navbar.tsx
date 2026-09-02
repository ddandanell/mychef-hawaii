import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import { DualCtaCompact } from '@/components/DualCta';
import { goToHost } from '@/components/HostLink';
import { useIsland } from '@/context/IslandContext';
import { islandOrder, islands } from '@/data/islands';
import { cn } from '@/lib/utils';

const hubLinks = [
  { label: 'Chefs', to: '/private-chef' },
  { label: 'Catering', to: '/catering' },
  { label: 'Bar', to: '/bar' },
  { label: 'Weddings', to: '/weddings' },
  { label: 'Pricing', to: '/pricing' },
];

/** Hub paths whose first viewport is a dark still (wordmark inverts to paper). */
const HUB_DARK_HERO = new Set(['/', '/bar', '/weddings']);
/** Island paths whose first viewport is a dark still. Hub /private-chef and /catering are ivory. */
const ISLAND_DARK_HERO = new Set([
  '/',
  '/bar',
  '/weddings',
  '/private-chef',
  '/catering',
  '/vacation-chef',
]);

function Wordmark({ onDark }: { onDark?: boolean }) {
  return (
    <span className={cn('font-display text-[1.375rem] font-light tracking-tight', onDark ? 'text-white' : 'text-ink')}>
      myCHEF
    </span>
  );
}

function IslandSwitcher({ onNavigate, onDark }: { onNavigate?: () => void; onDark?: boolean }) {
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
        className={cn('inline-flex items-center gap-1 py-1 text-sm', onDark ? 'text-white' : 'text-ink')}
      >
        {island ? island.shortName : 'All Hawaiʻi'}
        <span className="text-[12px] opacity-60">{open ? '–' : '+'}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            role="listbox"
            className="absolute right-0 top-full z-50 mt-2 w-56 border border-stone bg-ivory"
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
              className="block w-full px-4 py-2.5 text-left text-sm text-ink hover:bg-sand"
            >
              All Hawaiʻi
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
                  className="flex w-full items-baseline justify-between gap-3 px-4 py-2.5 text-left text-sm text-ink hover:bg-sand"
                >
                  <span>{isl.name}</span>
                  {isl.state === 'inquiry' ? (
                    <span className="text-[12px] text-ink-soft">Opening</span>
                  ) : null}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const { island, href, islandId, localPath } = useIsland();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const islandLinks = island
    ? [
        { label: 'Chefs', to: href('/private-chef') },
        { label: 'Catering', to: href('/catering') },
        { label: 'Bar', to: href('/bar') },
        { label: 'Weddings', to: href('/weddings') },
        { label: 'Pricing', to: href('/pricing') },
        { label: 'Quote', to: href('/quote') },
      ]
    : [...hubLinks, { label: 'Quote', to: '/quote' }];

  const path = (island ? localPath : pathname).replace(/\/+$/, '') || '/';
  const overHero = (island ? ISLAND_DARK_HERO : HUB_DARK_HERO).has(path) && !scrolled && !drawerOpen;
  const onDark = overHero;
  const homeTarget = href('/');

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 h-16 transition-colors duration-300',
        overHero ? 'border-b border-transparent bg-transparent' : 'border-b border-stone bg-ivory',
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-spread items-center justify-between px-5 lg:px-10">
        <Link to={homeTarget} aria-label={island ? `myCHEF ${island.name} home` : 'myCHEF Hawaii home'} className="shrink-0">
          <Wordmark onDark={onDark} />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {islandLinks.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className={cn('text-sm', onDark ? 'text-white/85 hover:text-white' : 'text-ink-soft hover:text-ink')}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <IslandSwitcher onDark={onDark} />
          <DualCtaCompact island={islandId ?? undefined} onDark={onDark} />
        </div>

        <button
          type="button"
          className={cn('inline-flex items-center justify-center p-2 lg:hidden', onDark ? 'text-white' : 'text-ink')}
          aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setDrawerOpen((v) => !v)}
        >
          {drawerOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 flex flex-col bg-ivory lg:hidden"
          >
            <div className="border-b border-stone px-5 py-4">
              <IslandSwitcher onNavigate={() => setDrawerOpen(false)} />
            </div>
            <nav aria-label="Mobile" className="flex flex-1 flex-col overflow-y-auto px-5 py-6">
              {islandLinks.map((l) => (
                <Link
                  key={l.label + l.to}
                  to={l.to}
                  onClick={() => setDrawerOpen(false)}
                  className="block border-b border-stone py-4 font-display text-2xl font-light text-ink"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="border-t border-stone p-5">
              <DualCtaCompact island={islandId ?? undefined} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
