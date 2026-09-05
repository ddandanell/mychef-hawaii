'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import HostLink from '@/components/HostLink';
import { useIsland } from '@/components/IslandProvider';
import { islandOrder, islands } from '@/data/islands';
import { DURATION, EASE_STANDARD } from '@/lib/motion';
import { hubSwitchPath, islandSwitchPath, localPathFromPathname } from '@/lib/switchPath';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export default function IslandSwitcher({
  onPick,
  className,
}: {
  onPick?: () => void;
  className?: string;
}) {
  const { islandId, hostMode } = useIsland();
  const pathname = usePathname() || '/';
  const local = localPathFromPathname(pathname, islandId, hostMode);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const leave = useRef<number>(0);
  const reduce = useReducedMotion();
  const menuId = useId();

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const show = () => {
    window.clearTimeout(leave.current);
    setOpen(true);
  };
  const hide = () => {
    leave.current = window.setTimeout(() => setOpen(false), 140);
  };

  const label = islandId ? islands[islandId].shortName : 'Islands';

  return (
    <div
      ref={ref}
      className={cn('relative', className)}
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="listbox"
        aria-label={islandId ? `Island: ${islands[islandId].name}. Change island.` : 'Choose an island'}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex min-h-10 items-center gap-2 py-1 text-[13px] font-medium uppercase tracking-[0.14em] text-[var(--nav-fg)] hover:opacity-80"
      >
        <span>{label}</span>
        <span className="text-[11px] opacity-70" aria-hidden>
          {open ? '–' : '+'}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            role="listbox"
            aria-label="Islands"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: 12 }}
            transition={{ duration: DURATION.fast, ease: EASE_STANDARD }}
            className="absolute right-0 top-full z-50 mt-2 min-w-[18rem] border border-line bg-paper py-2 text-ink shadow-[0_18px_40px_rgba(22,20,18,0.12)]"
          >
            <p className="px-4 pb-2 pt-3 text-[12px] uppercase tracking-[0.14em] text-mute">
              Stay on this page, change island.
            </p>
            <HostLink
              island="root"
              path={hubSwitchPath(local)}
              onClick={() => {
                setOpen(false);
                onPick?.();
              }}
              className="flex min-h-12 items-baseline justify-between gap-4 px-4 py-3 text-left text-base hover:bg-sand"
            >
              <span>All Hawaiʻi</span>
              {!islandId ? (
                <span className="text-[12px] uppercase tracking-[0.12em] text-mute">Here</span>
              ) : null}
            </HostLink>
            {islandOrder.map((id) => (
              <HostLink
                key={id}
                island={id}
                path={islandSwitchPath(local, id)}
                onClick={() => {
                  setOpen(false);
                  onPick?.();
                }}
                className="flex min-h-12 items-baseline justify-between gap-4 px-4 py-3 text-left text-base hover:bg-sand"
              >
                <span>{islands[id].name}</span>
                <span className="text-[12px] uppercase tracking-[0.12em] text-mute">
                  {islandId === id ? 'Here' : islands[id].state === 'inquiry' ? 'Inquiry' : null}
                </span>
              </HostLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
