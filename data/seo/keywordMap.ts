import { SEARCH_VOLUMES } from '@/data/offers';

/**
 * One primary keyword per master-map URL. Volumes from DataForSEO Google Ads US
 * (`data/seo/dataforseo-snapshot.json`). Do not invent. Refresh with:
 *   npm run seo:snapshot
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
  { host: 'oahu', path: '/', keyword: 'private chef oahu', volume: SEARCH_VOLUMES['private chef oahu'] },
  { host: 'oahu', path: '/catering', keyword: 'oahu catering', volume: SEARCH_VOLUMES['oahu catering'] },
  { host: 'oahu', path: '/weddings', keyword: 'wedding catering oahu', volume: SEARCH_VOLUMES['wedding catering oahu'] },
  { host: 'maui', path: '/', keyword: 'private chef maui', volume: SEARCH_VOLUMES['private chef maui'] },
  { host: 'maui', path: '/catering', keyword: 'maui catering', volume: SEARCH_VOLUMES['maui catering'] },
  { host: 'maui', path: '/weddings', keyword: 'wedding catering maui', volume: SEARCH_VOLUMES['wedding catering maui'] },
  { host: 'kauai', path: '/', keyword: 'private chef kauai', volume: SEARCH_VOLUMES['private chef kauai'] },
  { host: 'kauai', path: '/catering', keyword: 'kauai catering', volume: SEARCH_VOLUMES['kauai catering'] },
  { host: 'kauai', path: '/weddings', keyword: 'kauai wedding catering', volume: SEARCH_VOLUMES['kauai wedding catering'] },
  { host: 'bigisland', path: '/', keyword: 'private chef big island', volume: SEARCH_VOLUMES['private chef big island'] },
  { host: 'bigisland', path: '/catering', keyword: 'big island catering', volume: SEARCH_VOLUMES['big island catering'] },
] as const;

export const SUPPORT_KEYWORDS = {
  '/bar': { keyword: 'mobile bar hawaii', volume: SEARCH_VOLUMES['mobile bar hawaii'] },
  '/private-chef': { keyword: 'personal chef oahu', volume: SEARCH_VOLUMES['personal chef oahu'] },
} as const;
