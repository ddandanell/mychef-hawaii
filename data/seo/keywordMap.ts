import { SEARCH_VOLUMES } from '@/data/offers';

/**
 * One primary keyword per live URL that owns a measured phrase. Volumes from
 * DataForSEO Google Ads US (`data/seo/dataforseo-snapshot.json`). Do not invent.
 * Refresh with: `npm run seo:snapshot`. Hub `/bar` is the bartender add-on and
 * has no measured volume — `mobile bar hawaii` lives on hub `/mobile-bar`.
 */
export type MasterKeywordRow = {
  host: 'hub' | 'oahu' | 'maui' | 'kauai' | 'bigisland';
  path: string;
  keyword: keyof typeof SEARCH_VOLUMES;
  volume: number;
};

export const MASTER_KEYWORDS: readonly MasterKeywordRow[] = [
  { host: 'hub', path: '/', keyword: 'private chef hawaii', volume: SEARCH_VOLUMES['private chef hawaii'] },
  { host: 'hub', path: '/catering', keyword: 'hawaii catering', volume: SEARCH_VOLUMES['hawaii catering'] },
  { host: 'hub', path: '/weddings', keyword: 'wedding catering hawaii', volume: SEARCH_VOLUMES['wedding catering hawaii'] },
  { host: 'hub', path: '/mobile-bar', keyword: 'mobile bar hawaii', volume: SEARCH_VOLUMES['mobile bar hawaii'] },
  { host: 'oahu', path: '/', keyword: 'private chef oahu', volume: SEARCH_VOLUMES['private chef oahu'] },
  { host: 'oahu', path: '/catering', keyword: 'oahu catering', volume: SEARCH_VOLUMES['oahu catering'] },
  { host: 'oahu', path: '/weddings', keyword: 'wedding catering oahu', volume: SEARCH_VOLUMES['wedding catering oahu'] },
  { host: 'oahu', path: '/honolulu', keyword: 'private chef honolulu', volume: SEARCH_VOLUMES['private chef honolulu'] },
  { host: 'oahu', path: '/north-shore', keyword: 'private chef north shore oahu', volume: SEARCH_VOLUMES['private chef north shore oahu'] },
  { host: 'oahu', path: '/personal-chef', keyword: 'personal chef honolulu', volume: SEARCH_VOLUMES['personal chef honolulu'] },
  { host: 'maui', path: '/', keyword: 'private chef maui', volume: SEARCH_VOLUMES['private chef maui'] },
  { host: 'maui', path: '/catering', keyword: 'maui catering', volume: SEARCH_VOLUMES['maui catering'] },
  { host: 'maui', path: '/weddings', keyword: 'wedding catering maui', volume: SEARCH_VOLUMES['wedding catering maui'] },
  { host: 'maui', path: '/lahaina', keyword: 'private chef lahaina maui', volume: SEARCH_VOLUMES['private chef lahaina maui'] },
  { host: 'maui', path: '/personal-chef', keyword: 'personal chef maui', volume: SEARCH_VOLUMES['personal chef maui'] },
  { host: 'kauai', path: '/', keyword: 'private chef kauai', volume: SEARCH_VOLUMES['private chef kauai'] },
  { host: 'kauai', path: '/catering', keyword: 'kauai catering', volume: SEARCH_VOLUMES['kauai catering'] },
  { host: 'kauai', path: '/weddings', keyword: 'kauai wedding catering', volume: SEARCH_VOLUMES['kauai wedding catering'] },
  { host: 'kauai', path: '/poipu', keyword: 'private chef poipu kauai', volume: SEARCH_VOLUMES['private chef poipu kauai'] },
  { host: 'bigisland', path: '/', keyword: 'private chef big island', volume: SEARCH_VOLUMES['private chef big island'] },
  { host: 'bigisland', path: '/catering', keyword: 'big island catering', volume: SEARCH_VOLUMES['big island catering'] },
  { host: 'bigisland', path: '/kona', keyword: 'private chef kona', volume: SEARCH_VOLUMES['private chef kona'] },
] as const;
