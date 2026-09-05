'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { EnquireCta } from '@/components/Cta';
import HostLink from '@/components/HostLink';
import IslandSwitcher from '@/components/IslandSwitcher';
import { MobileDisclosure, NavMenu, type NavTarget } from '@/components/NavMenu';
import { useIsland } from '@/components/IslandProvider';
import { islands } from '@/data/islands';
import { moneyNeighborhoods } from '@/data/offers';
import { DURATION, EASE_STANDARD } from '@/lib/motion';
import { isHomePath, localPathFromPathname } from '@/lib/switchPath';
import { cn } from '@/lib/utils';

const HUB_GUIDE_ITEMS: NavTarget[] = [
  { label: 'FAQ', island: 'root', path: '/faq' },
  { label: 'How it works', island: 'root', path: '/how-it-works' },
  { label: 'Menus', island: 'root', path: '/menus' },
  { label: 'Coverage', island: 'root', path: '/coverage' },
  { label: 'Contact', island: 'root', path: '/contact' },
];

function areaItems(islandId: NonNullable<ReturnType<typeof useIsland>['islandId']>): NavTarget[] {
  return [
    { label: 'Map notes', island: islandId, path: '/areas' },
    { label: 'Live corridors', island: islandId, path: '/locations' },
    ...moneyNeighborhoods[islandId].map((hood) => ({
      label: hood.name,
      island: islandId,
      path: `/${hood.slug}`,
    })),
  ];
}

function MobileLink({ item, onPick }: { item: NavTarget; onPick: () => void }) {
  return (
    <HostLink
      island={item.island}
      path={item.path ?? '/'}
      onClick={onPick}
      className="flex min-h-12 items-baseline justify-between gap-3 py-2 text-base text-ink hover:underline"
    >
      <span>{item.label}</span>
      {item.note ? <span className="text-[13px] text-mute">{item.note}</span> : null}
    </HostLink>
  );
}

const linkCls = 'text-base font-medium text-[var(--nav-fg)] hover:underline underline-offset-4';

export default function SiteHeader() {
  const { islandId, hostMode } = useIsland();
  const pathname = usePathname();
  const local = localPathFromPathname(pathname || '/', islandId, hostMode);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [onHero, setOnHero] = useState(isHomePath(local));
  const reduce = useReducedMotion();

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOnHero(Boolean(document.querySelector('.hero-bleed')));
  }, [pathname]);

  const overlay = onHero && !scrolled && !drawerOpen;

  return (
    <header
      data-chrome={overlay ? 'overlay' : 'solid'}
      className={cn(
        'fixed inset-x-0 top-0 z-50 h-16 border-b transition-[background-color,border-color,color] duration-300',
        overlay ? 'border-transparent bg-transparent' : 'border-line bg-paper/92 backdrop-blur-md',
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-spread items-center justify-between gap-4 px-5 lg:px-10">
        <div className="flex min-w-0 items-center gap-5">
          <HostLink
            island={islandId ?? 'root'}
            aria-label={islandId ? `myCHEF ${islands[islandId].name} home` : 'myCHEF Hawaii home'}
            className="font-display text-[1.375rem] font-light tracking-tight text-[var(--nav-fg)]"
          >
            myCHEF
          </HostLink>
        </div>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {islandId ? (
            <>
              <HostLink island={islandId} path="/private-chef" className={linkCls}>
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
              <NavMenu label="Areas" items={areaItems(islandId)} />
              <NavMenu
                label="Guide"
                items={[
                  { label: 'FAQ', island: islandId, path: '/faq' },
                  { label: 'How it works', island: islandId, path: '/how-it-works' },
                  { label: 'Menus', island: islandId, path: '/menus' },
                  { label: 'Coverage', island: islandId, path: '/coverage' },
                  { label: 'Pricing', island: islandId, path: '/pricing' },
                  { label: 'Contact', island: islandId, path: '/contact' },
                  { label: 'About', island: islandId, path: '/about' },
                ]}
              />
            </>
          ) : (
            <>
              <HostLink island="root" path="/private-chef" className={linkCls}>
                Private chef
              </HostLink>
              <HostLink island="root" path="/catering" className={linkCls}>
                Catering
              </HostLink>
              <HostLink island="root" path="/weddings" className={linkCls}>
                Weddings
              </HostLink>
              <HostLink island="root" path="/bar" className={linkCls}>
                Bar
              </HostLink>
              <NavMenu label="Guide" items={HUB_GUIDE_ITEMS} />
              <HostLink island="root" path="/pricing" className={linkCls}>
                Pricing
              </HostLink>
              <HostLink island="root" path="/about" className={linkCls}>
                About
              </HostLink>
            </>
          )}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <IslandSwitcher />
          <EnquireCta island={islandId} variant={overlay ? 'light' : 'primary'} />
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <IslandSwitcher />
          <button
            type="button"
            className="inline-flex min-h-12 items-center justify-center px-2 text-base font-medium text-[var(--nav-fg)]"
            aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setDrawerOpen((v) => !v)}
          >
            {drawerOpen ? 'Close' : 'Menu'}
          </button>
        </div>
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
                  <HostLink
                    island={islandId}
                    path="/private-chef"
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
                  <MobileDisclosure label="Guide">
                    {(
                      [
                        { label: 'FAQ', path: '/faq' },
                        { label: 'How it works', path: '/how-it-works' },
                        { label: 'Menus', path: '/menus' },
                        { label: 'Coverage', path: '/coverage' },
                        { label: 'Pricing', path: '/pricing' },
                        { label: 'Contact', path: '/contact' },
                        { label: 'About', path: '/about' },
                      ] as const
                    ).map((item) => (
                      <MobileLink
                        key={item.path}
                        item={{ label: item.label, island: islandId, path: item.path }}
                        onPick={() => setDrawerOpen(false)}
                      />
                    ))}
                  </MobileDisclosure>
                </>
              ) : (
                <>
                  <HostLink
                    island="root"
                    path="/private-chef"
                    className="block border-b border-line py-4 font-display text-2xl font-light text-ink"
                  >
                    Private chef
                  </HostLink>
                  <HostLink
                    island="root"
                    path="/catering"
                    className="block border-b border-line py-4 font-display text-2xl font-light text-ink"
                  >
                    Catering
                  </HostLink>
                  <HostLink
                    island="root"
                    path="/weddings"
                    className="block border-b border-line py-4 font-display text-2xl font-light text-ink"
                  >
                    Weddings
                  </HostLink>
                  <HostLink
                    island="root"
                    path="/bar"
                    className="block border-b border-line py-4 font-display text-2xl font-light text-ink"
                  >
                    Bar
                  </HostLink>
                  <MobileDisclosure label="Guide">
                    {HUB_GUIDE_ITEMS.map((item) => (
                      <MobileLink key={item.path} item={item} onPick={() => setDrawerOpen(false)} />
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
