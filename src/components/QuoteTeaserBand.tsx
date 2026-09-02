import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Contours from '@/components/Contours';
import { DualCta } from '@/components/DualCta';
import Reveal from '@/components/Reveal';
import { useIsland } from '@/context/IslandContext';

gsap.registerPlugin(ScrollTrigger);

export default function QuoteTeaserBand({
  headline = "Tell us where you're dining.",
  note = 'WhatsApp or quote · typical reply in Hawaii business hours',
}: {
  headline?: string;
  note?: string;
}) {
  const { islandId } = useIsland();
  const contourRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contourRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const paths = el.querySelectorAll('path');
    paths.forEach((p) => {
      const len = p.getTotalLength();
      gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
    });
    const tween = gsap.to(paths, {
      strokeDashoffset: 0,
      ease: 'none',
      stagger: 0.05,
      scrollTrigger: { trigger: el, start: 'top 90%', end: 'bottom 40%', scrub: true },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section className="grain-dark relative overflow-hidden bg-ink py-20 lg:py-28">
      <div ref={contourRef} aria-hidden="true" className="absolute inset-0">
        <Contours stroke="#9C7A33" strokeWidth={1} className="absolute -right-32 top-1/2 h-[560px] w-[760px] -translate-y-1/2 opacity-30" />
      </div>
      <div className="relative mx-auto w-full max-w-container px-5 lg:px-10">
        <Reveal>
          <h2 className="max-w-2xl font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.015em] text-ivory">
            {headline}
          </h2>
        </Reveal>
        <Reveal delay={0.15} className="mt-8">
          <DualCta island={islandId ?? undefined} size="lg" />
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-8 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ivory/50">{note}</p>
        </Reveal>
      </div>
    </section>
  );
}
