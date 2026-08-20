import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Full-bleed hero media — GSAP isolated component (no Framer Motion here).
 * Ken Burns scale 1.08 → 1.0 over 6s on load, then scroll-linked parallax
 * y -8% scrub. Scrim per design.md §4 hero overlay rule.
 */
export default function HeroMedia({
  src,
  alt,
  overlay = 'default',
}: {
  src: string;
  alt: string;
  overlay?: 'default' | 'dusk';
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(img, { scale: 1 });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(img, { scale: 1.08 }, { scale: 1.0, duration: 6, ease: 'power2.out' });
      gsap.to(img, {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: { trigger: wrap, start: 'top top', end: 'bottom top', scrub: true },
      });
    }, wrap);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef} className="absolute inset-0 overflow-hidden">
      <img ref={imgRef} src={src} alt={alt} className="h-full w-full object-cover" />
      <div
        className={
          overlay === 'dusk'
            ? 'hero-scrim-dusk-mobile absolute inset-0 md:hidden'
            : 'hero-scrim-mobile absolute inset-0 md:hidden'
        }
        aria-hidden="true"
      />
      <div
        className={
          overlay === 'dusk'
            ? 'hero-scrim-dusk-desktop absolute inset-0 hidden md:block'
            : 'hero-scrim-desktop absolute inset-0 hidden md:block'
        }
        aria-hidden="true"
      />
    </div>
  );
}
