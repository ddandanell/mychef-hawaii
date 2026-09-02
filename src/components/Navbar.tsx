import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { DualCtaCompact } from '@/components/DualCta';
import { goToHost } from '@/components/HostLink';
import { useIsland } from '@/context/IslandContext';
import { islandOrder, islands } from '@/data/islands';
import { islandOffers } from '@/data/offers';
import { cn } from '@/lib/utils';

const hubLinks = [
  { label: 'Chefs', to: '/private-chef' },
  { label: 'Catering', to: '/catering' },
  { label: 'Bar', to: '/bar' },
  { label: 'Weddings', to: '/weddings' },
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
        <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-moss" />
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
            className="absolute right-0 top-full z-50 mt-2 w-80 overflow-hidden rounded-[14px] border border-stone bg-white shadow-soft"
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
                <span className="block text-xs text-ink-soft">Private chef Hawaii — from $125/pp</span>
              </span>
            </button>
            {islandOrder.map((id) => {
              const isl = islands[id];
              const o = islandOffers[id];
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
                  <span aria-hidden="true" className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-moss" />
                  <span className="-mt-0.5 flex-1">
                    <span className="block font-display text-base font-medium text-ink">{isl.name}</span>
                    <span className="block text-xs text-ink-soft">
                      {o.h1} — from ${o.fromPp}/pp
                    </span>
                  </span>
                </button>
              );
            })}
            <div className="border-t border-stone px-4 py-2.5 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-ink-soft">
              Four islands booking now
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const { island, href, islandId } = useIsland();
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
        { label: 'Chefs', to: href('/private-chef') },
        { label: 'Catering', to: href('/catering') },
        { label: 'Bar', to: href('/bar') },
        { label: 'Weddings', to: href('/weddings') },
        { label: 'Pricing', to: href('/pricing') },
        { label: 'Quote', to: href('/quote') },
      ]
    : [...hubLinks, { label: 'Quote', to: '/quote' }];

  const homeTarget = href('/');

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
        <Link to={homeTarget} aria-label={island ? `myCHEF ${island.name} home` : 'myCHEF Hawaii home'} className="shrink-0">
          <Wordmark islandName={island?.shortName} />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
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
          <DualCtaCompact island={islandId ?? undefined} />
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
              {islandLinks.map((l, i) => (
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
              <DualCtaCompact island={islandId ?? undefined} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
