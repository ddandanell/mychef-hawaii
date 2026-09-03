'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import HostLink from '@/components/HostLink';
import TypePanel from '@/components/TypePanel';
import { islandOrder, islands } from '@/data/islands';
import { islandOffers } from '@/data/offers';

/**
 * The one cinematic GSAP block on the hub home: pinned island portraits.
 * Lazy-loads GSAP. Transform/opacity only. Instant under reduced motion.
 */
export default function IslandScroll() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    let ctx: { revert: () => void } | undefined;
    let killed = false;

    (async () => {
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      if (killed) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        const slides = el.querySelectorAll<HTMLElement>('[data-island-slide]');
        const pin = el.querySelector<HTMLElement>('[data-island-pin]');
        if (!pin || slides.length === 0) return;

        gsap.set(slides, { autoAlpha: 0 });
        gsap.set(slides[0], { autoAlpha: 1 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pin,
            start: 'top top',
            end: '+=240%',
            pin: true,
            scrub: 0.6,
            anticipatePin: 1,
          },
        });

        slides.forEach((slide, i) => {
          if (i === 0) return;
          tl.to(slides[i - 1], { autoAlpha: 0, duration: 1 }, i - 0.15);
          tl.fromTo(slide, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 }, i - 0.15);
        });
      }, el);
    })();

    return () => {
      killed = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section ref={root} id="islands" aria-label="Islands">
      <div data-island-pin className="relative h-[100svh] overflow-hidden bg-ink">
        {islandOrder.map((id) => {
          const isl = islands[id];
          const o = islandOffers[id];
          return (
            <div key={id} data-island-slide className="absolute inset-0">
              <HostLink island={id} className="absolute inset-0 block">
                <span className="absolute inset-0">
                  <Image src={isl.selectorImage} alt={isl.name} fill sizes="100vw" className="object-cover" />
                </span>
                <span className="relative z-10 flex h-full items-end px-5 py-12 lg:px-10">
                  <TypePanel className="max-w-[28rem]">
                    <span className="block font-display text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-[1.05] text-ink">
                      {isl.name}
                    </span>
                    <span className="mt-3 block text-[17px] text-ink">
                      {isl.state === 'inquiry' ? 'Opening. ' : ''}
                      From ${o.fromPp} a guest.
                    </span>
                  </TypePanel>
                </span>
              </HostLink>
            </div>
          );
        })}
      </div>
    </section>
  );
}
