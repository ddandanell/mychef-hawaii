'use client';

import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import HostLink from '@/components/HostLink';
import { DURATION, EASE_STANDARD } from '@/lib/motion';
import { cn } from '@/lib/utils';
import type { IslandId } from '@/data/islands';

export interface NavTarget {
  label: string;
  island: IslandId | 'root';
  path?: string;
  note?: string;
}

export function NavMenu({
  label,
  items,
  align = 'left',
}: {
  label: string;
  items: NavTarget[];
  align?: 'left' | 'right';
}) {
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

  return (
    <div ref={ref} className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex min-h-10 items-center gap-1.5 py-1 text-base font-medium text-[var(--nav-fg)] hover:underline underline-offset-4"
      >
        {label}
        <span className="text-[13px] text-mute" aria-hidden>
          {open ? '–' : '+'}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            role="menu"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: 12 }}
            transition={{ duration: DURATION.fast, ease: EASE_STANDARD }}
            className={cn(
              'absolute top-full z-50 mt-2 min-w-[17rem] border border-line bg-paper py-2 text-ink shadow-[0_18px_40px_rgba(22,20,18,0.12)]',
              align === 'right' ? 'right-0' : 'left-0',
            )}
          >
            {items.map((item) => (
              <HostLink
                key={`${item.island}-${item.path ?? '/'}-${item.label}`}
                island={item.island}
                path={item.path ?? '/'}
                className="flex min-h-12 items-baseline justify-between gap-4 px-4 py-3 text-left text-base text-ink hover:bg-sand hover:underline underline-offset-4"
              >
                <span>{item.label}</span>
                {item.note ? <span className="text-[13px] text-mute">{item.note}</span> : null}
              </HostLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function MobileDisclosure({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-line">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex min-h-14 w-full items-baseline justify-between gap-4 py-4 text-left"
      >
        <span className="font-display text-2xl font-light text-ink">{label}</span>
        <span className="text-base text-mute">{open ? '–' : '+'}</span>
      </button>
      {open ? <div className="flex flex-col pb-4">{children}</div> : null}
    </div>
  );
}
