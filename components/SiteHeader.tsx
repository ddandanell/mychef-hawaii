'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { QuoteCta } from '@/components/Cta';
import HostLink, { goToHost } from '@/components/HostLink';
import { useIsland } from '@/components/IslandProvider';
import { islandOrder, islands } from '@/data/islands';
import { DURATION, EASE_STANDARD } from '@/lib/motion';
import { cn } from '@/lib/utils';

const hubLinks = [
  { label: 'Chefs', to: '/private-chef' },
  { label: 'Catering', to: '/catering' },
  { label: 'Bar', to: '/bar' },
  { label: 'Weddings', to: '/weddings' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
];

const HUB_DARK_HERO = new Set(['/', '/bar', '/weddings', '/about', '/corporate', '/gatherings']);
const ISLAND_DARK_HERO = new Set([
  '/',
  '/bar',
  '/weddings',
  '/private-chef',
  '/catering',
  '/vacation-chef',
]);

function localPath(pathname: string, islandId: string | null, hostMode: boolean): string {
  const clean = pathname.replace(/\/+$/, '') || '/';
  if (hostMode) return clean;
  if (islandId && (clean === `/${islandId}` || clean.startsWith(`/${islandId}/`))) {
    return clean.slice(islandId.length + 1) || '/';
  }
  return clean;
}

function IslandSwitcher({ onNavigate, onDark }: { onNavigate?: () => void; onDark?: boolean }) {
  const { islandId } = useIsland();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

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
        className={cn('inline-flex items-center gap-1 py-1 text-sm font-medium', onDark ? 'text-paper' : 'text-ink')}
      >
        {islandId ? islands[islandId].shortName : 'All Hawaiʻi'}
        <span className="text-[12px] opacity-60">{open ? '–' : '+'}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: DURATION.fast, ease: EASE_STANDARD }}
            role="listbox"
            className="absolute right-0 top-full z-50 mt-2 w-56 border border-line bg-paper"
          >
            <button
              type="button"
              role="option"
              aria-selected={!islandId}
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
                  aria-selected={islandId === id}
                  onClick={() => {
                    setOpen(false);
                    onNavigate?.();
                    goToHost(id);
                  }}
                  className="flex w-full items-baseline justify-between gap-3 px-4 py-2.5 text-left text-sm text-ink hover:bg-sand"
                >
                  <span>{isl.name}</span>
                  {isl.state === 'inquiry' ? <span className="text-[12px] text-mute">Opening</span> : null}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SiteHeader() {
  const { islandId, hostMode, href } = useIsland();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  const islandLinks = islandId
    ? [
        { label: 'Chefs', to: href('/private-chef') },
        { label: 'Catering', to: href('/catering') },
        { label: 'Bar', to: href('/bar') },
        { label: 'Weddings', to: href('/weddings') },
        { label: 'Pricing', to: href('/pricing') },
        { label: 'About', to: '/about', hub: true as const },
        { label: 'Quote', to: href('/quote') },
      ]
    : [...hubLinks, { label: 'Quote', to: '/quote' }];

  const path = localPath(pathname, islandId, hostMode);
  const overHero = (islandId ? ISLAND_DARK_HERO : HUB_DARK_HERO).has(path) && !scrolled && !drawerOpen;
  const onDark = overHero;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 h-16 transition-colors duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
        overHero ? 'border-b border-transparent bg-transparent' : 'border-b border-line bg-paper',
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-spread items-center justify-between px-5 lg:px-10">
        <Link
          href={href('/')}
          aria-label={islandId ? `myCHEF ${islands[islandId].name} home` : 'myCHEF Hawaii home'}
          className="shrink-0"
        >
          <span
            className={cn(
              'font-display text-[1.375rem] font-light tracking-tight',
              onDark ? 'text-paper' : 'text-ink',
            )}
          >
            myCHEF
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {islandLinks.map((l) => {
            const cls = cn('text-sm font-medium', onDark ? 'text-paper/85 hover:text-paper' : 'text-mute hover:text-ink');
            if ('hub' in l && l.hub) {
              return (
                <HostLink key={l.label} island="root" path={l.to} className={cls}>
                  {l.label}
                </HostLink>
              );
            }
            return (
              <Link key={l.label} href={l.to} className={cls}>
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <IslandSwitcher onDark={onDark} />
          <QuoteCta island={islandId} inverse={onDark} />
        </div>

        <button
          type="button"
          className={cn('inline-flex items-center justify-center p-2 text-sm font-medium lg:hidden', onDark ? 'text-paper' : 'text-ink')}
          aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setDrawerOpen((v) => !v)}
        >
          {drawerOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: DURATION.fast, ease: EASE_STANDARD }}
            className="fixed inset-0 top-16 z-40 flex flex-col bg-paper lg:hidden"
          >
            <div className="border-b border-line px-5 py-4">
              <IslandSwitcher onNavigate={() => setDrawerOpen(false)} />
            </div>
            <nav aria-label="Mobile" className="flex flex-1 flex-col overflow-y-auto px-5 py-6">
              {islandLinks.map((l) => {
                const cls = 'block border-b border-line py-4 font-display text-2xl font-light text-ink';
                if ('hub' in l && l.hub) {
                  return (
                    <HostLink key={l.label + l.to} island="root" path={l.to} className={cls}>
                      {l.label}
                    </HostLink>
                  );
                }
                return (
                  <Link key={l.label + l.to} href={l.to} className={cls}>
                    {l.label}
                  </Link>
                );
              })}
            </nav>
            <div className="border-t border-line p-5">
              <QuoteCta island={islandId} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
