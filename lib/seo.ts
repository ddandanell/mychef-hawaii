import {
  ISLAND_HOSTS,
  PRODUCTION_ROOT,
  canonicalUrl,
  detectIslandFromHost,
} from './site';
import { MASTER_MAP, masterHostName, type MasterHost } from '@/data/commercialGraph';
import { getArea } from '@/data/areas';
import { getArticle } from '@/data/editorial';
import { getCatalog } from '@/data/islandCatalog';
import { islandOrder, islands, type IslandId } from '@/data/islands';
import { getLocation } from '@/data/locations';
import { getMoneyNeighborhood, islandOffers, moneyNeighborhoods } from '@/data/offers';
import { getUniqueCell, uniqueCells } from '@/data/uniqueCells';
import { getIslandSupport, SUPPORT_PATHS } from '@/data/islandSupport';
import { eventOffers } from '@/data/events';
import { islandAbout } from '@/data/islandAbout';
import { lookupPageMeta, metaForPath } from '@/data/pageMeta';
import { photos } from '@/data/photos';
import { formatBand, getDayRate, getMobileBar, getOtherOffer, getTiers } from '@/data/rateCard';
import { SERVICE_AREAS } from '@/data/serviceAreas';

export interface DocumentSeo {
  title: string;
  description: string;
  canonical: string;
  robots: string;
  ogType: 'website' | 'article';
  ogImage: string;
  jsonLd: Record<string, unknown>[];
  islandId: IslandId | null;
}


function cleanPath(pathname: string): string {
  const p = pathname.replace(/\/$/, '') || '/';
  return p.startsWith('/') ? p : `/${p}`;
}

function ogImageFor(islandId: IslandId | null, origin: string, localPath = '/'): string {
  if (islandId && localPath !== '/') {
    const slug = /^\/([^/]+)$/.exec(localPath)?.[1];
    const hood = slug ? getMoneyNeighborhood(islandId, slug) : undefined;
    if (hood) return `${origin}${photos[hood.photo].file}`;
    const cell = slug ? getUniqueCell(islandId, slug) : undefined;
    if (cell) return `${origin}${photos[cell.photo].file}`;
    const support = getIslandSupport(islandId, localPath);
    if (support) return `${origin}${photos[support.photo].file}`;
    if (localPath === '/events') return `${origin}${photos[eventOffers[islandId].photo].file}`;
    if (localPath === '/about') return `${origin}${islandAbout[islandId].hero.file}`;
    if (localPath === '/private-chef') {
      const key = { oahu: 'chefOahu', maui: 'chefMaui', kauai: 'chefKauai', bigisland: 'chefBigisland' } as const;
      return `${origin}${photos[key[islandId]].file}`;
    }
    if (localPath === '/vacation-chef') {
      const key = {
        oahu: 'vacationOahu',
        maui: 'vacationMaui',
        kauai: 'vacationKauai',
        bigisland: 'vacationBigisland',
      } as const;
      return `${origin}${photos[key[islandId]].file}`;
    }
    if (localPath === '/mobile-bar') {
      const key = {
        oahu: 'mobileBarOahu',
        maui: 'mobileBarMaui',
        kauai: 'mobileBarKauai',
        bigisland: 'mobileBarBigisland',
      } as const;
      return `${origin}${photos[key[islandId]].file}`;
    }
  }
  if (!islandId) return `${origin}${photos.hubHero.file}`;
  return `${origin}${photos[islandOffers[islandId].heroPhoto].file}`;
}

function offerCatalogJsonLd(origin: string, islandId: IslandId | null) {
  const ids: IslandId[] = islandId ? [islandId] : ['oahu', 'maui', 'kauai', 'bigisland'];
  const items = ids.flatMap((id) => {
    const n = islands[id].name;
    const core = getTiers(id).find((t) => t.tier === 'CORE');
    const day = getDayRate(id);
    const bar = getMobileBar(id);
    const wedding = getOtherOffer('wedding').byIsland[id];
    return [
      {
        '@type': 'Offer',
        name: `Private chef dinner — ${n}`,
        itemOffered: { '@type': 'Service', name: `Private chef — ${n}`, serviceType: 'Private chef' },
        priceSpecification: core
          ? {
              '@type': 'PriceSpecification',
              priceCurrency: 'USD',
              minPrice: core.band[0],
              maxPrice: core.band[1],
              unitText: 'USD per person',
            }
          : undefined,
        description: core ? `Signature in-villa dinner ${formatBand(core)} per person on ${n}.` : undefined,
      },
      {
        '@type': 'Offer',
        name: `Villa chef day rate — ${n}`,
        itemOffered: { '@type': 'Service', name: `Vacation chef — ${n}`, serviceType: 'Personal chef' },
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          minPrice: day.from,
          unitText: 'USD per day',
        },
      },
      {
        '@type': 'Offer',
        name: `Wedding catering — ${n}`,
        itemOffered: { '@type': 'Service', name: `Wedding catering — ${n}`, serviceType: 'Catering' },
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          minPrice: wedding.from,
          unitText: 'USD per person',
        },
      },
      {
        '@type': 'Offer',
        name: `Mobile bar — ${n}`,
        itemOffered: { '@type': 'Service', name: `Mobile bar — ${n}`, serviceType: 'Bartending' },
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          minPrice: bar.packageFrom,
          unitText: 'USD per 4-hour package',
        },
      },
    ];
  });
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: islandId
      ? `myCHEF ${islands[islandId].name} private chef and catering prices`
      : 'myCHEF Hawaii private chef and catering prices',
    url: origin,
    itemListElement: items,
  };
}

function orgJsonLd(name: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    parentOrganization: { '@type': 'Organization', name: 'myCHEF' },
    areaServed: 'Hawaiʻi',
  };
}

function areaPlaces(islandId: IslandId | null) {
  const ids = islandId ? [islandId] : islandOrder;
  return ids.flatMap((id) => SERVICE_AREAS[id].corridors.map((c) => ({ '@type': 'Place', name: c.name })));
}

function publishedPriceRange(islandId: IslandId | null): string {
  if (islandId) {
    const core = getTiers(islandId).find((t) => t.tier === 'CORE');
    return core ? `$${core.band[0]}–$${core.band[1]}` : '$125–$250';
  }
  const oahu = getTiers('oahu').find((t) => t.tier === 'CORE');
  const maui = getTiers('maui').find((t) => t.tier === 'CORE');
  return `$${oahu?.band[0] ?? 125}–$${maui?.band[1] ?? 250}`;
}

/** LocalBusiness / FoodService — service-area kitchen. No telephone. No streetAddress. */
export function localBusinessJsonLd(islandId: IslandId | null, origin: string) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'FoodService'],
    name: islandId ? `myCHEF ${islands[islandId].name}` : 'myCHEF Hawaii',
    url: origin,
    priceRange: publishedPriceRange(islandId),
    areaServed: areaPlaces(islandId),
    serviceType: 'Private chef',
    parentOrganization: islandId
      ? { '@type': 'Organization', name: 'myCHEF Hawaii', url: `https://${PRODUCTION_ROOT}` }
      : { '@type': 'Organization', name: 'myCHEF' },
  };
}

export function resolveDocumentSeo(hostname: string, pathname: string): DocumentSeo {
  const host = hostname.split(':')[0] ?? hostname;
  const path = cleanPath(pathname);
  const fromHost = detectIslandFromHost(host);
  const pathSeg = path.split('/').filter(Boolean)[0];
  const fromPath =
    !fromHost && (ISLAND_HOSTS as string[]).includes(pathSeg ?? '') ? (pathSeg as IslandId) : null;
  const islandId = fromHost ?? fromPath;
  const hostMode = Boolean(fromHost);
  const localPath = fromHost ? path : fromPath ? cleanPath(path.slice(`/${fromPath}`.length) || '/') : path;

  let title = '';
  let description = '';
  let ogType: DocumentSeo['ogType'] = 'website';

  if (islandId) {
    const island = islands[islandId];
    const catalog = getCatalog(islandId, localPath);
    const locRec = localPath.startsWith('/locations/')
      ? getLocation(islandId, localPath.slice('/locations/'.length))
      : undefined;
    const areaSlug = localPath.startsWith('/private-chef/')
      ? localPath.slice('/private-chef/'.length)
      : localPath.startsWith('/locations/')
        ? localPath.slice('/locations/'.length)
        : '';
    const area = areaSlug ? getArea(islandId, areaSlug) : undefined;
    const journalMatch = localPath.match(/^\/(journal|blog)\/([^/]+)$/);
    const article = journalMatch
      ? getArticle(islandId, journalMatch[1] as 'journal' | 'blog', journalMatch[2])
      : undefined;
    const placeSlug = /^\/([^/]+)$/.exec(localPath)?.[1];
    const hood = placeSlug ? getMoneyNeighborhood(islandId, placeSlug) : undefined;

    if (article) {
      title = article.title;
      description = article.description;
      ogType = 'article';
    } else if (localPath === '/') {
      title = islandOffers[islandId].title;
      description = islandOffers[islandId].description;
    } else if (hood) {
      title = hood.title;
      description = hood.description;
    } else if (localPath === '/events') {
      title = eventOffers[islandId].title;
      description = eventOffers[islandId].description;
    } else if (localPath === '/about') {
      title = islandAbout[islandId].title;
      description = islandAbout[islandId].description;
    } else if (getIslandSupport(islandId, localPath)) {
      const support = getIslandSupport(islandId, localPath)!;
      title = support.title;
      description = support.description;
    } else if (placeSlug && getUniqueCell(islandId, placeSlug)) {
      const cell = getUniqueCell(islandId, placeSlug)!;
      title = cell.title;
      description = cell.description;
    } else if (locRec) {
      title = `${locRec.name} private chef — myCHEF ${island.name}`;
      description = locRec.lede;
    } else if (area) {
      title = `Private chef ${area.name} — myCHEF ${island.name}`;
      description = area.blurb;
    } else {
      const explicit = lookupPageMeta(path, islandId, hostMode);
      if (explicit) {
        title = explicit.title;
        description = explicit.description;
      } else if (catalog) {
        title = catalog.title;
        description = catalog.lede;
      } else if (localPath === '/journal') {
        title = `Journal — myCHEF ${island.name}`;
        description = `Island journal for ${island.name}. ${island.role}`;
      } else if (localPath === '/blog') {
        title = `Blog — myCHEF ${island.name}`;
        description = `Guides and notes for private chef service on ${island.name}.`;
      } else if (localPath === '/locations') {
        title = `Service areas — myCHEF ${island.name}`;
        description = `Coverage on ${island.name}: published zones, not statewide fiction.`;
      } else if (localPath === '/sitemap') {
        title = `Sitemap — myCHEF ${island.name}`;
        description = `Commercial pages on the ${island.name} site.`;
      } else {
        const mapped = metaForPath(path, islandId, hostMode);
        title = mapped.title;
        description = mapped.description;
      }
    }
  } else {
    const mapped = metaForPath(path);
    title = mapped.title;
    description = mapped.description;
  }

  const canonical = islandId ? canonicalUrl(islandId, localPath, host) : canonicalUrl('root', path, host);
  const origin = islandId
    ? canonicalUrl(islandId, '/', host).replace(/\/$/, '')
    : canonicalUrl('root', '/', host).replace(/\/$/, '');
  const jsonLd: Record<string, unknown>[] = [
    orgJsonLd(islandId ? `myCHEF ${islands[islandId].name}` : 'myCHEF Hawaii', origin || `https://${PRODUCTION_ROOT}`),
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description,
      url: canonical,
      isPartOf: { '@type': 'WebSite', name: islandId ? `myCHEF ${islands[islandId].name}` : 'myCHEF Hawaii', url: origin },
    },
  ];

  jsonLd.push(localBusinessJsonLd(islandId, origin || `https://${PRODUCTION_ROOT}`));

  const priced =
    localPath === '/' ||
    localPath === '/pricing' ||
    localPath === '/services' ||
    localPath === '/bar' ||
    localPath === '/mobile-bar' ||
    localPath === '/weddings' ||
    localPath === '/wedding-catering' ||
    localPath === '/private-chef' ||
    localPath === '/vacation-chef' ||
    localPath === '/catering' ||
    localPath === '/events' ||
    localPath === '/menus' ||
    (!islandId && ['/', '/pricing', '/services', '/bar', '/mobile-bar', '/weddings', '/corporate', '/gatherings'].includes(path));
  if (priced) {
    jsonLd.push(offerCatalogJsonLd(origin || `https://${PRODUCTION_ROOT}`, islandId));
  }

  return {
    title,
    description,
    canonical,
    robots:
      localPath === '/thank-you' || path === '/thank-you' || path.endsWith('/thank-you')
        ? 'noindex,follow'
        : 'index,follow',
    ogType,
    ogImage: ogImageFor(islandId, origin || `https://${PRODUCTION_ROOT}`, localPath),
    jsonLd,
    islandId,
  };
}

export function sitemapLocs(hostname: string): { loc: string; changefreq: string; priority: string }[] {
  const host = hostname.split(':')[0] ?? hostname;
  const fromHost = detectIslandFromHost(host);
  const master = fromHost ? MASTER_MAP.filter((r) => r.host === fromHost) : MASTER_MAP;
  const extras = (fromHost ? [fromHost] : ISLAND_HOSTS).flatMap((island) => [
    ...moneyNeighborhoods[island].map((hood) => ({
      loc: `https://${masterHostName(island)}${`/${hood.slug}`}`,
      changefreq: 'monthly',
      priority: '0.7',
    })),
    ...(['/about', '/events', ...SUPPORT_PATHS] as const).map((path) => ({
      loc: `https://${masterHostName(island)}${path}`,
      changefreq: 'monthly',
      priority: '0.6',
    })),
    ...uniqueCells[island].map((cell) => ({
      loc: `https://${masterHostName(island)}/${cell.slug}`,
      changefreq: 'monthly',
      priority: '0.55',
    })),
  ]);
  return [
    ...master.map((r) => ({
      loc: `https://${masterHostName(r.host as MasterHost)}${r.path === '/' ? '/' : r.path}`,
      changefreq: r.path === '/' ? 'weekly' : 'monthly',
      priority: r.path === '/' ? (r.host === 'hub' ? '1.0' : '0.9') : r.path === '/about' ? '0.6' : '0.8',
    })),
    ...extras,
  ];
}

export function islandSitemapIndex(hostname: string): string[] {
  const host = hostname.split(':')[0] ?? hostname;
  if (detectIslandFromHost(host)) return [];
  return ISLAND_HOSTS.map((id) => `${canonicalUrl(id, '/', host).replace(/\/$/, '')}/sitemap.xml`);
}


