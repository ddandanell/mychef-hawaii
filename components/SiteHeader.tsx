'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { EnquireCta } from '@/components/Cta';
import HostLink from '@/components/HostLink';
import { MobileDisclosure, NavMenu, type NavTarget } from '@/components/NavMenu';
import { useIsland } from '@/components/IslandProvider';
import { islandOrder, islands } from '@/data/islands';
import { SERVICE_AREAS } from '@/data/serviceAreas';
import { DURATION, EASE_STANDARD } from '@/lib/motion';
import { cn } from '@/lib/utils';

const HUB_DARK_HERO = new Set(['/', '/bar', '/weddings', '/about', '/corporate', '/gatherings']);
const ISLAND_DARK_HERO = new Set(['/', '/bar', '/weddings', '/private-chef', '/catering', '/vacation-chef']);

const CHEF_ITEMS: NavTarget[] = [
  { label: 'Oʻahu', island: 'oahu' },
  { label: 'Maui', island: 'maui' },
  { label: 'Kauaʻi', island: 'kauai', note: 'Inquiry' },
  { label: 'Hawaiʻi Island', island: 'bigisland', note: 'Inquiry' },
  { label: 'How it works', island: 'root', path: '/how-it-works' },
];

const CATERING_ITEMS: NavTarget[] = [
  { label: 'Hawaii', island: 'root', path: '/catering' },
  { label: 'Oʻahu catering', island: 'oahu', path: '/catering' },
  { label: 'Maui catering', island: 'maui', path: '/catering' },
  { label: 'Kauaʻi catering', island: 'kauai', path: '/catering' },
  { label: 'Hawaiʻi Island catering', island: 'bigisland', path: '/catering' },
];

const WEDDING_ITEMS: NavTarget[] = [
  { label: 'Hawaii', island: 'root', path: '/weddings' },
  { label: 'Oʻahu', island: 'oahu', path: '/weddings' },
  { label: 'Maui', island: 'maui', path: '/weddings' },
  { label: 'Kauaʻi', island: 'kauai', path: '/weddings', note: 'Inquiry' },
];

const BAR_ITEMS: NavTarget[] = [
  { label: 'Hawaii', island: 'root', path: '/bar' },
  { label: 'Oʻahu', island: 'oahu', path: '/bar' },
  { label: 'Maui', island: 'maui', path: '/bar' },
];

const ISLAND_SWITCH: NavTarget[] = [
  { label: 'All Hawaiʻi', island: 'root' },
  ...islandOrder.map((id) => ({
    label: islands[id].name,
    island: id,
    note: islands[id].state === 'inquiry' ? 'Inquiry' : undefined,
  })),
];

function localPath(pathname: string, islandId: string | null, hostMode: boolean): string {
  const clean = pathname.replace(/\/+$/, '') || '/';
  if (hostMode) return clean;
  if (islandId && (clean === `/${islandId}` || clean.startsWith(`/${islandId}/`))) {
    return clean.slice(islandId.length + 1) || '/';
  }
  return clean;
}

function areaItems(islandId: (typeof islandOrder)[number]): NavTarget[] {
  return SERVICE_AREAS[islandId].corridors.map((c) => ({
    label: c.name,
    island: islandId,
    path: `/#${c.id}`,
  }));
}

function MobileLink({ item, onPick }: { item: NavTarget; onPick: () => void }) {
  return (
    <HostLink
      island={item.island}
      path={item.path ?? '/'}
      onClick={onPick}
      className="flex items-baseline justify-between gap-3 py-2 text-lg text-ink"
    >
      <span>{item.label}</span>
      {item.note ? <span className="text-[13px] text-mute">{item.note}</span> : null}
    </HostLink>
  );
}

export default function SiteHeader() {
  const { islandId, hostMode } = useIsland();
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

  const path = localPath(pathname, islandId, hostMode);
  const overHero = (islandId ? ISLAND_DARK_HERO : HUB_DARK_HERO).has(path) && !scrolled && !drawerOpen;
  const onDark = overHero;
  const linkCls = cn('text-sm font-medium', onDark ? 'text-paper/85 hover:text-paper' : 'text-mute hover:text-ink');

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 h-16 transition-colors duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
        overHero ? 'border-b border-transparent bg-transparent' : 'border-b border-line bg-paper',
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-spread items-center justify-between px-5 lg:px-10">
        <div className="flex items-center gap-6">
          <HostLink
            island="root"
            aria-label="myCHEF Hawaii home"
            className={cn('font-display text-[1.375rem] font-light tracking-tight', onDark ? 'text-paper' : 'text-ink')}
          >
            myCHEF
          </HostLink>
          {islandId ? <div className="hidden lg:block"><NavMenu label="Islands" items={ISLAND_SWITCH} onDark={onDark} /></div> : null}
        </div>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {islandId ? (
            <>
              <HostLink island={islandId} path="/" className={linkCls}>
                Private chef
              </HostLink>
              <HostLink island={islandId} path="/catering" className={linkCls}>
                Catering
              </HostLink>
              <HostLink island={islandId} path="/weddings" className={linkCls}>
                Weddings
              </HostLink>
              <HostLink island={islandId} path="/bar" className={linkCls}>
                Bar
              </HostLink>
              <NavMenu label="Areas" items={areaItems(islandId)} onDark={onDark} />
            </>
          ) : (
            <>
              <NavMenu label="Private chefs" items={CHEF_ITEMS} onDark={onDark} />
              <NavMenu label="Catering" items={CATERING_ITEMS} onDark={onDark} />
              <NavMenu label="Weddings" items={WEDDING_ITEMS} onDark={onDark} />
              <NavMenu label="Bar" items={BAR_ITEMS} onDark={onDark} />
              <HostLink island="root" path="/pricing" className={linkCls}>
                Pricing
              </HostLink>
              <HostLink island="root" path="/about" className={linkCls}>
                About
              </HostLink>
            </>
          )}
        </nav>

        <div className="hidden lg:block">
          <EnquireCta island={islandId} inverse={onDark} />
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
            <nav aria-label="Mobile" className="flex flex-1 flex-col overflow-y-auto px-5 py-4">
              {islandId ? (
                <>
                  <MobileDisclosure label="Islands">
                    {ISLAND_SWITCH.map((item) => (
                      <MobileLink key={item.label} item={item} onPick={() => setDrawerOpen(false)} />
                    ))}
                  </MobileDisclosure>
                  <HostLink
                    island={islandId}
                    path="/"
                    className="block border-b border-line py-4 font-display text-2xl font-light text-ink"
                  >
                    Private chef
                  </HostLink>
                  <HostLink
                    island={islandId}
                    path="/catering"
                    className="block border-b border-line py-4 font-display text-2xl font-light text-ink"
                  >
                    Catering
                  </HostLink>
                  <HostLink
                    island={islandId}
                    path="/weddings"
                    className="block border-b border-line py-4 font-display text-2xl font-light text-ink"
                  >
                    Weddings
                  </HostLink>
                  <HostLink
                    island={islandId}
                    path="/bar"
                    className="block border-b border-line py-4 font-display text-2xl font-light text-ink"
                  >
                    Bar
                  </HostLink>
                  <MobileDisclosure label="Areas">
                    {areaItems(islandId).map((item) => (
                      <MobileLink key={item.path} item={item} onPick={() => setDrawerOpen(false)} />
                    ))}
                  </MobileDisclosure>
                </>
              ) : (
                <>
                  <MobileDisclosure label="Private chefs">
                    {CHEF_ITEMS.map((item) => (
                      <MobileLink key={item.label} item={item} onPick={() => setDrawerOpen(false)} />
                    ))}
                  </MobileDisclosure>
                  <MobileDisclosure label="Catering">
                    {CATERING_ITEMS.map((item) => (
                      <MobileLink key={item.label} item={item} onPick={() => setDrawerOpen(false)} />
                    ))}
                  </MobileDisclosure>
                  <MobileDisclosure label="Weddings">
                    {WEDDING_ITEMS.map((item) => (
                      <MobileLink key={item.label} item={item} onPick={() => setDrawerOpen(false)} />
                    ))}
                  </MobileDisclosure>
                  <MobileDisclosure label="Bar">
                    {BAR_ITEMS.map((item) => (
                      <MobileLink key={item.label} item={item} onPick={() => setDrawerOpen(false)} />
                    ))}
                  </MobileDisclosure>
                  <HostLink
                    island="root"
                    path="/pricing"
                    className="block border-b border-line py-4 font-display text-2xl font-light text-ink"
                  >
                    Pricing
                  </HostLink>
                  <HostLink
                    island="root"
                    path="/about"
                    className="block border-b border-line py-4 font-display text-2xl font-light text-ink"
                  >
                    About
                  </HostLink>
                </>
              )}
            </nav>
            <div className="border-t border-line p-5">
              <EnquireCta island={islandId} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
