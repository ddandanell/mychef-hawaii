import {
  ISLAND_HOSTS,
  PRODUCTION_ROOT,
  canonicalUrl,
  detectIslandFromHost,
} from './site';
import { MASTER_MAP, masterHostName, type MasterHost } from '@/data/commercialGraph';
import { getArea } from '@/data/areas';
import { islandOrder, islands, type IslandId } from '@/data/islands';
import { getLocation } from '@/data/locations';
import { getMoneyNeighborhood, islandOffers, moneyNeighborhoods } from '@/data/offers';
import { getUniqueCell, uniqueCells } from '@/data/uniqueCells';
import { getIslandService, islandServices } from '@/data/islandServices';
import { getOccasionPage, occasionPages } from '@/data/occasionPages';
import { getCateringFormat, cateringFormats } from '@/data/cateringFormats';
import { getFineDiningPage, fineDiningPages } from '@/data/fineDining';
import { getStaffingPage, staffingPages } from '@/data/staffingPages';
import { getMenuSkuPage, menuSkuPages } from '@/data/menuSkus';
import { getHelpArticle, helpArticles } from '@/data/helpArticles';
import { islandQuote } from '@/data/islandQuote';
import { islandPricing } from '@/data/islandPricing';
import { islandLegal } from '@/data/islandLegal';
import { islandThanks } from '@/data/islandThanks';
import { islandJournal } from '@/data/islandJournal';
import { islandBlog } from '@/data/islandBlog';
import { islandLocations } from '@/data/islandLocations';
import { islandAreas } from '@/data/islandAreas';
import { islandContact } from '@/data/islandContact';
import { islandTrust } from '@/data/islandTrust';
import { islandServiceIndex } from '@/data/islandServiceIndex';
import { islandHelpIndex } from '@/data/islandHelpIndex';
import { islandFineDiningIndex } from '@/data/islandFineDiningIndex';
import { islandStaffingIndex } from '@/data/islandStaffingIndex';
import { islandCorporate } from '@/data/islandCorporate';
import { islandGatherings } from '@/data/islandGatherings';
import { islandIslands } from '@/data/islandIslands';
import { islandSitemap } from '@/data/islandSitemap';
import { getJournalArticle, journalArticles } from '@/data/journalArticles';
import { getBlogArticle, blogArticles } from '@/data/blogArticles';
import { getIslandSupport, SUPPORT_PATHS } from '@/data/islandSupport';
import { cateringOffers } from '@/data/catering';
import { eventOffers } from '@/data/events';
import { islandAbout } from '@/data/islandAbout';
import { lookupPageMeta, metaForPath } from '@/data/pageMeta';
import { getHubDirectory, HUB_ALL_PICKER_PATHS } from '@/data/hubDirectories';
import { photos } from '@/data/photos';
import { stillForPath } from '@/lib/documentStill';
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
    const still = stillForPath(islandId, localPath);
    if (still) return `${origin}${still.file}`;
  }
  if (!islandId) {
    const hubDir = getHubDirectory(localPath);
    if (hubDir) return `${origin}${photos[hubDir.photo].file}`;
    const hubStill: Partial<Record<string, { file: string }>> = {
      '/thank-you': photos.hubThanks,
      '/corporate': photos.hubCorporate,
      '/gatherings': photos.hubGatherings,
      '/mobile-bar': photos.hubMobileBar,
      '/bar': photos.barHero,
      '/weddings': photos.weddingHero,
      '/catering': photos.cateringHero,
      '/services': photos.hubServices,
      '/how-it-works': photos.hubHow,
      '/quote': photos.quoteHub,
      '/trust': photos.hubTrust,
      '/legal': photos.hubLegal,
      '/areas': photos.hubAreas,
      '/journal': photos.hubJournal,
      '/blog': photos.hubBlog,
      '/islands': photos.hubIslands,
      '/private-chef': photos.hubChef,
      '/vacation-chef': photos.hubVacation,
      '/pricing': photos.hubPricing,
    };
    const still = hubStill[localPath];
    if (still) return `${origin}${still.file}`;
    if (localPath === '/about') return `${origin}/about/about-hub.png`;
    return `${origin}${photos.hubHero.file}`;
  }
  return `${origin}${photos[islandOffers[islandId].heroPhoto].file}`;
}

const ISLAND_RATE_JSONLD = new Set([
  '/',
  '/pricing',
  '/private-chef-cost',
  '/services',
  '/mobile-bar',
  '/weddings',
  '/wedding-catering',
  '/private-chef',
  '/vacation-chef',
  '/catering',
]);

const HUB_RATE_JSONLD = new Set(['/', '/pricing', '/services', '/mobile-bar', '/weddings']);

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
        name: `Villa dinner — ${n}`,
        itemOffered: { '@type': 'Service', name: `Villa dinner — ${n}`, serviceType: 'Private chef' },
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
        name: `Stay Chef — ${n}`,
        itemOffered: { '@type': 'Service', name: `Stay Chef — ${n}`, serviceType: 'Personal chef' },
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          minPrice: day.from,
          unitText: 'USD per day',
        },
      },
      {
        '@type': 'Offer',
        name: `Wedding week — ${n}`,
        itemOffered: { '@type': 'Service', name: `Wedding week — ${n}`, serviceType: 'Catering' },
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          minPrice: wedding.from,
          unitText: 'USD per person',
        },
      },
      {
        '@type': 'Offer',
        name: `Packaged cart — ${n}`,
        itemOffered: { '@type': 'Service', name: `Packaged cart — ${n}`, serviceType: 'Bartending' },
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
      ? `myCHEF ${islands[islandId].name} published prices`
      : 'myCHEF Hawaii published prices',
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
    const journalPiece =
      journalMatch?.[1] === 'journal' ? getJournalArticle(islandId, journalMatch[2]) : undefined;
    const blogPiece =
      journalMatch?.[1] === 'blog' ? getBlogArticle(islandId, journalMatch[2]) : undefined;
    const placeSlug = /^\/([^/]+)$/.exec(localPath)?.[1];
    const hood = placeSlug ? getMoneyNeighborhood(islandId, placeSlug) : undefined;

    if (journalPiece) {
      title = journalPiece.title;
      description = journalPiece.description;
      ogType = 'article';
    } else if (blogPiece) {
      title = blogPiece.title;
      description = blogPiece.description;
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
    } else if (localPath === '/catering') {
      title = cateringOffers[islandId].title;
      description = cateringOffers[islandId].description;
    } else if (localPath === '/about') {
      title = islandAbout[islandId].title;
      description = islandAbout[islandId].description;
    } else if (islandQuote[islandId] && localPath === '/quote') {
      title = islandQuote[islandId].title;
      description = islandQuote[islandId].description;
    } else if (islandPricing[islandId] && localPath === '/pricing') {
      title = islandPricing[islandId].title;
      description = islandPricing[islandId].description;
    } else if (islandLegal[islandId] && localPath === '/legal') {
      title = islandLegal[islandId].title;
      description = islandLegal[islandId].description;
    } else if (islandThanks[islandId] && localPath === '/thank-you') {
      title = islandThanks[islandId].title;
      description = islandThanks[islandId].description;
    } else if (islandJournal[islandId] && localPath === '/journal') {
      title = islandJournal[islandId].title;
      description = islandJournal[islandId].description;
    } else if (islandBlog[islandId] && localPath === '/blog') {
      title = islandBlog[islandId].title;
      description = islandBlog[islandId].description;
    } else if (islandLocations[islandId] && localPath === '/locations') {
      title = islandLocations[islandId].title;
      description = islandLocations[islandId].description;
    } else if (islandAreas[islandId] && localPath === '/areas') {
      title = islandAreas[islandId].title;
      description = islandAreas[islandId].description;
    } else if (islandContact[islandId] && localPath === '/contact') {
      title = islandContact[islandId].title;
      description = islandContact[islandId].description;
    } else if (islandTrust[islandId] && localPath === '/trust') {
      title = islandTrust[islandId].title;
      description = islandTrust[islandId].description;
    } else if (islandServiceIndex[islandId] && localPath === '/services') {
      title = islandServiceIndex[islandId].title;
      description = islandServiceIndex[islandId].description;
    } else if (islandHelpIndex[islandId] && localPath === '/help') {
      title = islandHelpIndex[islandId].title;
      description = islandHelpIndex[islandId].description;
    } else if (islandFineDiningIndex[islandId] && localPath === '/fine-dining') {
      title = islandFineDiningIndex[islandId].title;
      description = islandFineDiningIndex[islandId].description;
    } else if (islandStaffingIndex[islandId] && localPath === '/staffing') {
      title = islandStaffingIndex[islandId].title;
      description = islandStaffingIndex[islandId].description;
    } else if (islandCorporate[islandId] && localPath === '/corporate') {
      title = islandCorporate[islandId].title;
      description = islandCorporate[islandId].description;
    } else if (islandGatherings[islandId] && localPath === '/gatherings') {
      title = islandGatherings[islandId].title;
      description = islandGatherings[islandId].description;
    } else if (islandIslands[islandId] && localPath === '/islands') {
      title = islandIslands[islandId].title;
      description = islandIslands[islandId].description;
    } else if (islandSitemap[islandId] && localPath === '/sitemap') {
      title = islandSitemap[islandId].title;
      description = islandSitemap[islandId].description;
    } else if (getIslandSupport(islandId, localPath)) {
      const support = getIslandSupport(islandId, localPath)!;
      title = support.title;
      description = support.description;
    } else if (placeSlug && getUniqueCell(islandId, placeSlug)) {
      const cell = getUniqueCell(islandId, placeSlug)!;
      title = cell.title;
      description = cell.description;
    } else if (placeSlug && getIslandService(islandId, placeSlug)) {
      const service = getIslandService(islandId, placeSlug)!;
      title = service.title;
      description = service.description;
    } else if (/^\/events\/[^/]+$/.test(localPath) && getOccasionPage(islandId, localPath.slice('/events/'.length))) {
      const occasion = getOccasionPage(islandId, localPath.slice('/events/'.length))!;
      title = occasion.title;
      description = occasion.description;
    } else if (
      /^\/catering\/[^/]+$/.test(localPath) &&
      getCateringFormat(islandId, localPath.slice('/catering/'.length))
    ) {
      const format = getCateringFormat(islandId, localPath.slice('/catering/'.length))!;
      title = format.title;
      description = format.description;
    } else if (
      /^\/fine-dining\/[^/]+$/.test(localPath) &&
      getFineDiningPage(islandId, localPath.slice('/fine-dining/'.length))
    ) {
      const fine = getFineDiningPage(islandId, localPath.slice('/fine-dining/'.length))!;
      title = fine.title;
      description = fine.description;
    } else if (
      /^\/staffing\/[^/]+$/.test(localPath) &&
      getStaffingPage(islandId, localPath.slice('/staffing/'.length))
    ) {
      const staff = getStaffingPage(islandId, localPath.slice('/staffing/'.length))!;
      title = staff.title;
      description = staff.description;
    } else if (
      /^\/menus\/[^/]+$/.test(localPath) &&
      getMenuSkuPage(islandId, localPath.slice('/menus/'.length))
    ) {
      const sku = getMenuSkuPage(islandId, localPath.slice('/menus/'.length))!;
      title = sku.title;
      description = sku.description;
    } else if (
      /^\/help\/[^/]+$/.test(localPath) &&
      getHelpArticle(islandId, localPath.slice('/help/'.length))
    ) {
      const help = getHelpArticle(islandId, localPath.slice('/help/'.length))!;
      title = help.title;
      description = help.description;
    } else if (locRec) {
      title = `${locRec.name} kitchen note — myCHEF ${island.name}`;
      description = locRec.lede;
    } else if (area) {
      title = `${area.name} map note — myCHEF ${island.name}`;
      description = area.blurb;
    } else {
      const explicit = lookupPageMeta(path, islandId, hostMode);
      if (explicit) {
        title = explicit.title;
        description = explicit.description;
      } else {
        title = `${island.name} | myCHEF`;
        description = `Villa kitchens on ${island.name}. Written quotes.`;
      }
    }
  } else {
    const hubDir = getHubDirectory(localPath);
    if (hubDir) {
      title = hubDir.title;
      description = hubDir.description;
    } else {
      const mapped = metaForPath(path);
      title = mapped.title;
      description = mapped.description;
    }
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

  const priced = islandId ? ISLAND_RATE_JSONLD.has(localPath) : HUB_RATE_JSONLD.has(path);
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
  const hubExtras = fromHost
    ? []
    : HUB_ALL_PICKER_PATHS.map((path) => ({
        loc: `https://${masterHostName('hub')}${path}`,
        changefreq: 'monthly',
        priority: '0.55',
      }));
  const extras = (fromHost ? [fromHost] : ISLAND_HOSTS).flatMap((island) => [
    ...moneyNeighborhoods[island].map((hood) => ({
      loc: `https://${masterHostName(island)}${`/${hood.slug}`}`,
      changefreq: 'monthly',
      priority: '0.7',
    })),
    ...(['/about', '/events', '/legal', '/journal', '/blog', '/locations', '/areas', '/contact', '/trust', '/services', '/help', '/fine-dining', '/staffing', '/corporate', '/gatherings', '/islands', '/sitemap', ...SUPPORT_PATHS] as const).map((path) => ({
      loc: `https://${masterHostName(island)}${path}`,
      changefreq: 'monthly',
      priority: '0.6',
    })),
    ...uniqueCells[island].map((cell) => ({
      loc: `https://${masterHostName(island)}/${cell.slug}`,
      changefreq: 'monthly',
      priority: '0.55',
    })),
    ...islandServices[island].map((cell) => ({
      loc: `https://${masterHostName(island)}/${cell.slug}`,
      changefreq: 'monthly',
      priority: '0.5',
    })),
    ...occasionPages[island].map((cell) => ({
      loc: `https://${masterHostName(island)}/events/${cell.slug}`,
      changefreq: 'monthly',
      priority: '0.5',
    })),
    ...cateringFormats[island].map((cell) => ({
      loc: `https://${masterHostName(island)}/catering/${cell.slug}`,
      changefreq: 'monthly',
      priority: '0.5',
    })),
    ...fineDiningPages[island].map((cell) => ({
      loc: `https://${masterHostName(island)}/fine-dining/${cell.slug}`,
      changefreq: 'monthly',
      priority: '0.45',
    })),
    ...staffingPages[island].map((cell) => ({
      loc: `https://${masterHostName(island)}/staffing/${cell.slug}`,
      changefreq: 'monthly',
      priority: '0.45',
    })),
    ...menuSkuPages[island].map((cell) => ({
      loc: `https://${masterHostName(island)}/menus/${cell.slug}`,
      changefreq: 'monthly',
      priority: '0.45',
    })),
    ...helpArticles[island].map((cell) => ({
      loc: `https://${masterHostName(island)}/help/${cell.slug}`,
      changefreq: 'monthly',
      priority: '0.4',
    })),
    ...journalArticles[island].map((cell) => ({
      loc: `https://${masterHostName(island)}/journal/${cell.slug}`,
      changefreq: 'monthly',
      priority: '0.35',
    })),
    ...blogArticles[island].map((cell) => ({
      loc: `https://${masterHostName(island)}/blog/${cell.slug}`,
      changefreq: 'monthly',
      priority: '0.35',
    })),
  ]);
  return [
    ...master.map((r) => ({
      loc: `https://${masterHostName(r.host as MasterHost)}${r.path === '/' ? '/' : r.path}`,
      changefreq: r.path === '/' ? 'weekly' : 'monthly',
      priority: r.path === '/' ? (r.host === 'hub' ? '1.0' : '0.9') : r.path === '/about' ? '0.6' : '0.8',
    })),
    ...hubExtras,
    ...extras,
  ];
}

export function islandSitemapIndex(hostname: string): string[] {
  const host = hostname.split(':')[0] ?? hostname;
  if (detectIslandFromHost(host)) return [];
  return ISLAND_HOSTS.map((id) => `${canonicalUrl(id, '/', host).replace(/\/$/, '')}/sitemap.xml`);
}


