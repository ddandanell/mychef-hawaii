import { Component, Fragment, type ReactNode } from 'react';
import { Navigate, Routes, Route } from 'react-router';
import Layout from '@/components/Layout';
import { detectIslandFromHost } from '@/config/site';
import { IslandProvider } from '@/context/IslandContext';
import { islandOrder } from '@/data/islands';
import { islandLeaves } from '@/routes/siteRoutes';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import Islands from '@/pages/Islands';
import Services from '@/pages/Services';
import HowItWorks from '@/pages/HowItWorks';
import Pricing from '@/pages/Pricing';
import Trust from '@/pages/Trust';
import Legal from '@/pages/Legal';
import Quote from '@/pages/Quote';
import ThankYou from '@/pages/ThankYou';
import Weddings from '@/pages/Weddings';
import Bar from '@/pages/Bar';
import Corporate from '@/pages/Corporate';
import About from '@/pages/About';
import HubCatering from '@/pages/HubCatering';
import HubEditorial from '@/pages/site/HubEditorial';
import HubOfferPage from '@/pages/site/HubOfferPage';
import NetworkSitemap from '@/pages/site/NetworkSitemap';

/**
 * Root host (mychef-hawaii.com / localhost) is the statewide hub.
 * Island hosts (oahu|maui|kauai|bigisland.*) are separate departments.
 * Path prefixes /oahu /maui /kauai /bigisland remain as hub fallbacks.
 */
class RouteErrorBoundary extends Component<{ children: ReactNode }, { message: string | null }> {
  state = { message: null as string | null };
  static getDerivedStateFromError(error: unknown) {
    return { message: error instanceof Error ? error.message : String(error) };
  }
  componentDidCatch(error: unknown) {
    console.error('Route render error:', error);
  }
  render() {
    if (this.state.message) {
      return (
        <main className="mx-auto max-w-container px-5 py-24 font-mono text-sm text-ink">
          <p className="text-clay">Route render error</p>
          <pre className="mt-4 whitespace-pre-wrap">{this.state.message}</pre>
        </main>
      );
    }
    return this.props.children;
  }
}

function HubRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Navigate to="/" replace />} />
        <Route path="/islands" element={<Islands />} />
        <Route path="/areas" element={<Islands />} />
        <Route path="/services" element={<Services />} />
        <Route path="/private-chef" element={<HubOfferPage kind="private-chef" />} />
        <Route path="/catering" element={<HubCatering />} />
        <Route path="/about" element={<About />} />
        <Route path="/vacation-chef" element={<HubOfferPage kind="vacation-chef" />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/trust" element={<Trust />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/weddings" element={<Weddings />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/mobile-bar" element={<Bar />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/gatherings" element={<Corporate />} />
        <Route path="/journal" element={<HubEditorial kind="journal" />} />
        <Route path="/blog" element={<HubEditorial kind="blog" />} />
        <Route path="/sitemap" element={<NetworkSitemap />} />
        {islandOrder.map((id) => (
          <Fragment key={id}>{islandLeaves(id, `/${id}`)}</Fragment>
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

function IslandHostRoutes({ islandId }: { islandId: (typeof islandOrder)[number] }) {
  return (
    <Routes>
      <Route element={<Layout />}>{islandLeaves(islandId)}</Route>
    </Routes>
  );
}

export default function App() {
  const hostIsland =
    typeof window !== 'undefined' ? detectIslandFromHost(window.location.hostname) : null;

  return (
    <IslandProvider>
      <RouteErrorBoundary>
        {hostIsland ? <IslandHostRoutes islandId={hostIsland} /> : <HubRoutes />}
      </RouteErrorBoundary>
    </IslandProvider>
  );
}
