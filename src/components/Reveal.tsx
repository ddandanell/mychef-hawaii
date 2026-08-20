import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

/**
 * Section reveal (design.md §7): y 32 → 0, opacity 0 → 1, 0.9s power3.out,
 * trigger at 80% viewport, once. With `stagger`, children animate with
 * 0.09s stagger from y 24. Collapses to instant opacity under
 * prefers-reduced-motion.
 */
export default function Reveal({
  children,
  className,
  stagger = false,
  staggerDelay = 0.09,
  y,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  staggerDelay?: number;
  y?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = stagger ? Array.from(el.children) : [el];
    if (reduced) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }
    const tween = gsap.fromTo(
      targets,
      { opacity: 0, y: y ?? (stagger ? 24 : 32) },
      {
        opacity: 1,
        y: 0,
        duration: stagger ? 0.7 : 0.9,
        ease: 'power3.out',
        stagger: stagger ? staggerDelay : 0,
        delay,
        once: true,
        scrollTrigger: { trigger: el, start: 'top 80%', once: true },
      },
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [stagger, staggerDelay, y, delay]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
