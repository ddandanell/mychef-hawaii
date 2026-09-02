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
  onDark,
  align = 'left',
}: {
  label: string;
  items: NavTarget[];
  onDark?: boolean;
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
        className={cn(
          'inline-flex items-center gap-1.5 py-1 text-sm font-medium',
          onDark ? 'text-paper/85 hover:text-paper' : 'text-mute hover:text-ink',
        )}
      >
        {label}
        <span className="text-[11px] opacity-60" aria-hidden>
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
              'absolute top-full z-50 mt-3 min-w-[16rem] border border-line bg-paper py-2',
              align === 'right' ? 'right-0' : 'left-0',
            )}
          >
            {items.map((item) => (
              <HostLink
                key={`${item.island}-${item.path ?? '/'}-${item.label}`}
                island={item.island}
                path={item.path ?? '/'}
                className="flex items-baseline justify-between gap-4 px-4 py-2.5 text-left text-sm text-ink hover:bg-sand"
              >
                <span>{item.label}</span>
                {item.note ? <span className="text-[12px] text-mute">{item.note}</span> : null}
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
        className="flex w-full items-baseline justify-between gap-4 py-4 text-left"
      >
        <span className="font-display text-2xl font-light text-ink">{label}</span>
        <span className="text-sm text-mute">{open ? '–' : '+'}</span>
      </button>
      {open ? <div className="flex flex-col pb-4">{children}</div> : null}
    </div>
  );
}
