import type { ComponentType } from 'react';
import { Route } from 'react-router';
import type { IslandId } from '@/data/islands';
import { moneyNeighborhoods } from '@/data/offers';
import Maui from '@/pages/Maui';
import Oahu from '@/pages/Oahu';
import BigIsland from '@/pages/BigIsland';
import Kauai from '@/pages/Kauai';
import MauiPrivateChef from '@/pages/services/MauiPrivateChef';
import OahuPrivateChef from '@/pages/services/OahuPrivateChef';
import KauaiPrivateChef from '@/pages/services/KauaiPrivateChef';
import BigIslandPrivateChef from '@/pages/services/BigIslandPrivateChef';
import MauiVacationChef from '@/pages/services/MauiVacationChef';
import OahuVacationChef from '@/pages/services/OahuVacationChef';
import KauaiVacationChef from '@/pages/services/KauaiVacationChef';
import BigIslandVacationChef from '@/pages/services/BigIslandVacationChef';
import IslandCatering from '@/pages/services/IslandCatering';
import LocationPage from '@/pages/locations/LocationPage';
import NeighborhoodMoneyPage from '@/pages/locations/NeighborhoodMoneyPage';
import Quote from '@/pages/Quote';
import ThankYou from '@/pages/ThankYou';
import Legal from '@/pages/Legal';
import AreaChefPage from '@/pages/site/AreaChefPage';
import ArticlePage from '@/pages/site/ArticlePage';
import { CatalogOrNotFound } from '@/pages/site/CatalogPage';
import HtmlSitemap from '@/pages/site/HtmlSitemap';
import JournalIndex from '@/pages/site/JournalIndex';
import LocationHub from '@/pages/site/LocationHub';
import BarPage from '@/pages/services/BarPage';
import IslandWeddingPage from '@/pages/services/IslandWeddingPage';
import Pricing from '@/pages/Pricing';

const HOME: Record<IslandId, ComponentType> = {
  oahu: Oahu,
  maui: Maui,
  kauai: Kauai,
  bigisland: BigIsland,
};

const CHEF: Record<IslandId, ComponentType> = {
  oahu: OahuPrivateChef,
  maui: MauiPrivateChef,
  kauai: KauaiPrivateChef,
  bigisland: BigIslandPrivateChef,
};

const VAC: Record<IslandId, ComponentType> = {
  oahu: OahuVacationChef,
  maui: MauiVacationChef,
  kauai: KauaiVacationChef,
  bigisland: BigIslandVacationChef,
};

/** Shared leaves for one island department (paths relative to that host or prefix). */
export function islandLeaves(id: IslandId, prefix = '') {
  const Home = HOME[id];
  const Chef = CHEF[id];
  const Vac = VAC[id];
  const root = prefix || '/';
  const p = (path: string) => (prefix ? `${prefix}${path}` : path);

  return (
    <>
      <Route path={root} element={<Home />} />
      <Route path={p('/private-chef')} element={<Chef />} />
      <Route path={p('/vacation-chef')} element={<Vac />} />
      <Route path={p('/catering')} element={<IslandCatering />} />
      <Route path={p('/events')} element={<IslandCatering />} />
      <Route path={p('/wedding-catering')} element={<IslandWeddingPage />} />
      <Route path={p('/weddings')} element={<IslandWeddingPage />} />
      <Route path={p('/bar')} element={<BarPage />} />
      <Route path={p('/mobile-bar')} element={<BarPage />} />
      <Route path={p('/pricing')} element={<Pricing />} />
      <Route path={p('/locations')} element={<LocationHub />} />
      <Route path={p('/locations/:slug')} element={<LocationPage />} />
      <Route path={p('/private-chef/:slug')} element={<AreaChefPage />} />
      {moneyNeighborhoods[id].map((n) => (
        <Route key={n.slug} path={p(`/${n.slug}`)} element={<NeighborhoodMoneyPage />} />
      ))}
      <Route path={p('/journal')} element={<JournalIndex kind="journal" />} />
      <Route path={p('/blog')} element={<JournalIndex kind="blog" />} />
      <Route path={p('/journal/:slug')} element={<ArticlePage kind="journal" />} />
      <Route path={p('/blog/:slug')} element={<ArticlePage kind="blog" />} />
      <Route path={p('/quote')} element={<Quote />} />
      <Route path={p('/thank-you')} element={<ThankYou />} />
      <Route path={p('/legal')} element={<Legal />} />
      <Route path={p('/sitemap')} element={<HtmlSitemap />} />
      <Route path={prefix ? `${prefix}/*` : '*'} element={<CatalogOrNotFound />} />
    </>
  );
}
