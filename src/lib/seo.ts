import {
  ISLAND_HOSTS,
  PRODUCTION_ROOT,
  detectIslandFromHost,
  locFromHost,
  siteUrl,
  usesIslandSubdomains,
} from '../config/site';
import { getArea } from '../data/areas';
import { getArticle } from '../data/editorial';
import { allIslandPaths, getCatalog } from '../data/islandCatalog';
import { islands, type IslandId } from '../data/islands';
import { getLocation } from '../data/locations';
import { metaForPath } from '../data/pageMeta';

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

const HUB_PATHS = [
  '/',
  '/islands',
  '/services',
  '/how-it-works',
  '/pricing',
  '/trust',
  '/legal',
  '/quote',
  '/thank-you',
  '/weddings',
  '/corporate',
  '/journal',
  '/blog',
  '/sitemap',
];

function cleanPath(pathname: string): string {
  const p = pathname.replace(/\/$/, '') || '/';
  return p.startsWith('/') ? p : `/${p}`;
}

function ogImageFor(islandId: IslandId | null, origin: string): string {
  if (!islandId) return `${origin}/photos/home/hero.jpg`;
  return `${origin}${islands[islandId].selectorImage}`;
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

export function resolveDocumentSeo(hostname: string, pathname: string): DocumentSeo {
  const host = hostname.split(':')[0] ?? hostname;
  const loc = locFromHost(host);
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

    if (article) {
      title = article.title;
      description = article.description;
      ogType = 'article';
    } else if (locRec) {
      title = `${locRec.name} private chef — myCHEF ${island.name}`;
      description = locRec.lede;
    } else if (area) {
      title = `Private chef ${area.name} — myCHEF ${island.name}`;
      description = area.blurb;
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
      description = `${allIslandPaths(islandId).length} pages on the ${island.name} site.`;
    } else {
      const mapped = metaForPath(path, islandId, hostMode);
      title = mapped.title;
      description = mapped.description;
    }
  } else {
    const mapped = metaForPath(path);
    title = mapped.title;
    description = mapped.description;
  }

  const canonical = islandId ? siteUrl(islandId, localPath, loc) : siteUrl('root', path, loc);
  const origin = islandId ? siteUrl(islandId, '/', loc).replace(/\/$/, '') : siteUrl('root', '/', loc).replace(/\/$/, '');
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

  if (islandId && islands[islandId].state === 'live') {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'FoodService',
      name: `myCHEF ${islands[islandId].name}`,
      url: origin,
      areaServed: { '@type': 'AdministrativeArea', name: islands[islandId].name },
      serviceType: 'Private chef',
    });
  }

  return {
    title,
    description,
    canonical,
    robots: 'index,follow',
    ogType,
    ogImage: ogImageFor(islandId, origin || `https://${PRODUCTION_ROOT}`),
    jsonLd,
    islandId,
  };
}

export function sitemapLocs(hostname: string): { loc: string; changefreq: string; priority: string }[] {
  const host = hostname.split(':')[0] ?? hostname;
  const loc = locFromHost(host);
  const fromHost = detectIslandFromHost(host);
  const sub = usesIslandSubdomains(host);

  if (fromHost) {
    return allIslandPaths(fromHost).map((p) => ({
      loc: siteUrl(fromHost, p, loc),
      changefreq: p === '/' ? 'weekly' : 'monthly',
      priority: p === '/' ? '1.0' : p.startsWith('/blog') || p.startsWith('/journal') ? '0.6' : '0.8',
    }));
  }

  const rows: { loc: string; changefreq: string; priority: string }[] = HUB_PATHS.map((p) => ({
    loc: siteUrl('root', p, loc),
    changefreq: p === '/' ? 'weekly' : 'monthly',
    priority: p === '/' ? '1.0' : '0.7',
  }));

  for (const id of ISLAND_HOSTS) {
    if (sub) {
      rows.push({
        loc: siteUrl(id, '/', loc),
        changefreq: 'weekly',
        priority: '0.9',
      });
    } else {
      allIslandPaths(id).forEach((p) => {
        rows.push({
          loc: siteUrl(id, p, loc),
          changefreq: p === '/' ? 'weekly' : 'monthly',
          priority: p === '/' ? '0.9' : '0.6',
        });
      });
    }
  }
  return rows;
}

export function islandSitemapIndex(hostname: string): string[] {
  const host = hostname.split(':')[0] ?? hostname;
  if (detectIslandFromHost(host) || !usesIslandSubdomains(host)) return [];
  const loc = locFromHost(host);
  return ISLAND_HOSTS.map((id) => `${siteUrl(id, '/', loc).replace(/\/$/, '')}/sitemap.xml`);
}


