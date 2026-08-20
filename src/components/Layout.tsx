import { useEffect, type CSSProperties } from 'react';
import { Outlet, useLocation } from 'react-router';
import Lenis from 'lenis';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PageMeta from '@/components/PageMeta';
import { useIsland } from '@/context/IslandContext';

/**
 * Layout — nested-route pattern (pattern B): Layout renders <Outlet/> and
 * App.tsx nests every route inside <Route element={<Layout/>}>.
 *
 * Navbar is `sticky top-0 z-50` in normal flow, so no page needs
 * nav-height offset bookkeeping. Lenis smooth scroll site-wide (lerp 0.09),
 * disabled under prefers-reduced-motion.
 */
export default function Layout() {
  const { pathname, hash } = useLocation();
  const { island } = useIsland();

  useEffect(() => {
    if (hash) {
      const timer = window.setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const lenis = new Lenis({ lerp: 0.09 });
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div
      className="flex min-h-[100dvh] flex-col bg-ivory"
      style={island ? ({ ['--island-hue']: island.hue } as CSSProperties) : undefined}
    >
      <PageMeta />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-clay focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
