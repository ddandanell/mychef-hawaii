'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'motion/react';
import { DISTANCE, DURATION, EASE_STANDARD } from '@/lib/motion';
import { cn } from '@/lib/utils';

/**
 * Scroll reveals that fail safe. The resting/SSR state is fully VISIBLE, so a
 * missed in-view trigger, disabled JS, or a hydration hiccup can never leave a
 * section clipped or invisible (the old whileInView approach could strand the
 * text at opacity:0 and the image at clip-path inset(12%)).
 *
 * Below-the-fold content is hidden before paint (useLayoutEffect) and animates
 * in when it scrolls into view. Content already on screen at mount is simply
 * shown — reliability beats a re-entrance animation nobody sees anyway.
 */

const EASE = `cubic-bezier(${EASE_STANDARD.join(',')})`;
const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

type RevealState = 'idle' | 'hidden' | 'shown';

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  // 'idle' renders visible (safe default for SSR / no-JS / hydration failure).
  const [state, setState] = useState<RevealState>('idle');
  const reduce = useReducedMotion();

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el || reduce) {
      setState('shown');
      return;
    }
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    // Already on (or near) screen — reveal immediately, never hide.
    if (rect.top < vh * 0.9) {
      setState('shown');
      return;
    }
    // Below the fold — hide before paint, then animate in on scroll.
    setState('hidden');
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setState('shown');
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduce]);

  return { ref, state };
}

export default function Reveal({
  children,
  className,
  y = DISTANCE.normal,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
  delay?: number;
}) {
  const { ref, state } = useReveal<HTMLDivElement>();
  const hidden = state === 'hidden';
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: hidden ? 0 : 1,
        transform: hidden ? `translateY(${y}px)` : 'translateY(0)',
        transition:
          state === 'idle'
            ? undefined
            : `opacity ${DURATION.normal}s ${EASE} ${delay}s, transform ${DURATION.normal}s ${EASE} ${delay}s`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}

export function MaskReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, state } = useReveal<HTMLDivElement>();
  const hidden = state === 'hidden';
  return (
    <div
      ref={ref}
      className={cn('overflow-hidden', className)}
      style={{
        clipPath: hidden ? 'inset(12% 12% 12% 12%)' : 'inset(0% 0% 0% 0%)',
        transition: state === 'idle' ? undefined : `clip-path ${DURATION.slow}s ${EASE}`,
      }}
    >
      {children}
    </div>
  );
}
