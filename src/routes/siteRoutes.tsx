import type { ComponentType } from 'react';
import { Route } from 'react-router';
import type { IslandId } from '@/data/islands';
import Maui from '@/pages/Maui';
import Oahu from '@/pages/Oahu';
import BigIsland from '@/pages/BigIsland';
import Kauai from '@/pages/Kauai';
import MauiPrivateChef from '@/pages/services/MauiPrivateChef';
import OahuPrivateChef from '@/pages/services/OahuPrivateChef';
import MauiVacationChef from '@/pages/services/MauiVacationChef';
import OahuVacationChef from '@/pages/services/OahuVacationChef';
import OahuCatering from '@/pages/services/OahuCatering';
import BigIslandPrivateChef from '@/pages/expanded/BigIslandPrivateChef';
import BigIslandVacationChef from '@/pages/expanded/BigIslandVacationChef';
import BigIslandCatering from '@/pages/expanded/BigIslandCatering';
import KauaiPrivateChef from '@/pages/expanded/KauaiPrivateChef';
import KauaiVacationChef from '@/pages/expanded/KauaiVacationChef';
import KauaiEvents from '@/pages/expanded/KauaiEvents';
import LocationPage from '@/pages/locations/LocationPage';
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

/** Island-specific extra leaves (catering / events). Wedding + bar are shared. */
const THIRD: Record<IslandId, { path: string; Page: ComponentType }[]> = {
  oahu: [{ path: 'catering', Page: OahuCatering }],
  maui: [],
  kauai: [{ path: 'events', Page: KauaiEvents }],
  bigisland: [{ path: 'catering', Page: BigIslandCatering }],
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
      <Route path={p('/wedding-catering')} element={<IslandWeddingPage />} />
      <Route path={p('/weddings')} element={<IslandWeddingPage />} />
      <Route path={p('/bar')} element={<BarPage />} />
      <Route path={p('/mobile-bar')} element={<BarPage />} />
      <Route path={p('/pricing')} element={<Pricing />} />
      {THIRD[id].map(({ path, Page }) => (
        <Route key={path} path={p(`/${path}`)} element={<Page />} />
      ))}
      <Route path={p('/locations')} element={<LocationHub />} />
      <Route path={p('/locations/:slug')} element={<LocationPage />} />
      <Route path={p('/private-chef/:slug')} element={<AreaChefPage />} />
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
