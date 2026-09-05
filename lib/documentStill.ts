import type { IslandId } from '@/data/islands';
import { photos } from '@/data/photos';
import { getMoneyNeighborhood } from '@/data/offers';
import { getUniqueCell } from '@/data/uniqueCells';
import { getIslandService } from '@/data/islandServices';
import { getOccasionPage } from '@/data/occasionPages';
import { getCateringFormat } from '@/data/cateringFormats';
import { getFineDiningPage } from '@/data/fineDining';
import { getStaffingPage } from '@/data/staffingPages';
import { getMenuSkuPage } from '@/data/menuSkus';
import { getHelpArticle } from '@/data/helpArticles';
import { getIslandSupport } from '@/data/islandSupport';
import { eventOffers } from '@/data/events';
import { islandAbout } from '@/data/islandAbout';
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
import { getJournalArticle } from '@/data/journalArticles';
import { getBlogArticle } from '@/data/blogArticles';

export type DocumentStill = { file: string; alt: string };

function fromKey(key: keyof typeof photos): DocumentStill {
  return photos[key];
}

/**
 * Island-host still for a local path. Same map OG images use.
 * Null for the island home (callers use the island hero) and unknown paths.
 */
export function stillForPath(islandId: IslandId, localPath: string): DocumentStill | null {
  if (localPath === '/') return null;

  const slug = /^\/([^/]+)$/.exec(localPath)?.[1];
  const hood = slug ? getMoneyNeighborhood(islandId, slug) : undefined;
  if (hood) return fromKey(hood.photo);
  const cell = slug ? getUniqueCell(islandId, slug) : undefined;
  if (cell) return fromKey(cell.photo);
  const service = slug ? getIslandService(islandId, slug) : undefined;
  if (service) return fromKey(service.photo);

  const occasionSlug = /^\/events\/([^/]+)$/.exec(localPath)?.[1];
  const occasion = occasionSlug ? getOccasionPage(islandId, occasionSlug) : undefined;
  if (occasion) return fromKey(occasion.photo);
  const formatSlug = /^\/catering\/([^/]+)$/.exec(localPath)?.[1];
  const format = formatSlug ? getCateringFormat(islandId, formatSlug) : undefined;
  if (format) return fromKey(format.photo);
  const fineSlug = /^\/fine-dining\/([^/]+)$/.exec(localPath)?.[1];
  const fine = fineSlug ? getFineDiningPage(islandId, fineSlug) : undefined;
  if (fine) return fromKey(fine.photo);
  const staffSlug = /^\/staffing\/([^/]+)$/.exec(localPath)?.[1];
  const staff = staffSlug ? getStaffingPage(islandId, staffSlug) : undefined;
  if (staff) return fromKey(staff.photo);
  const skuSlug = /^\/menus\/([^/]+)$/.exec(localPath)?.[1];
  const sku = skuSlug ? getMenuSkuPage(islandId, skuSlug) : undefined;
  if (sku) return fromKey(sku.photo);
  const helpSlug = /^\/help\/([^/]+)$/.exec(localPath)?.[1];
  const help = helpSlug ? getHelpArticle(islandId, helpSlug) : undefined;
  if (help) return fromKey(help.photo);
  const support = getIslandSupport(islandId, localPath);
  if (support) return fromKey(support.photo);

  if (localPath === '/events') return fromKey(eventOffers[islandId].photo);
  if (localPath === '/about') return islandAbout[islandId].hero;
  if (localPath === '/private-chef') {
    return fromKey(
      ({ oahu: 'chefOahu', maui: 'chefMaui', kauai: 'chefKauai', bigisland: 'chefBigisland' } as const)[islandId],
    );
  }
  if (localPath === '/vacation-chef') {
    return fromKey(
      ({
        oahu: 'vacationOahu',
        maui: 'vacationMaui',
        kauai: 'vacationKauai',
        bigisland: 'vacationBigisland',
      } as const)[islandId],
    );
  }
  if (localPath === '/catering') {
    return fromKey(
      ({ oahu: 'cateringOahu', maui: 'cateringMaui', kauai: 'cateringKauai', bigisland: 'cateringBigisland' } as const)[
        islandId
      ],
    );
  }
  if (localPath === '/weddings' || localPath === '/wedding-catering') {
    return fromKey(
      ({ oahu: 'weddingOahu', maui: 'weddingMaui', kauai: 'weddingKauai', bigisland: 'weddingBigisland' } as const)[
        islandId
      ],
    );
  }
  if (localPath === '/bar') {
    return fromKey(({ oahu: 'barOahu', maui: 'barMaui', kauai: 'barKauai', bigisland: 'barBigisland' } as const)[islandId]);
  }
  if (localPath === '/mobile-bar') {
    return fromKey(
      ({
        oahu: 'mobileBarOahu',
        maui: 'mobileBarMaui',
        kauai: 'mobileBarKauai',
        bigisland: 'mobileBarBigisland',
      } as const)[islandId],
    );
  }
  if (localPath === '/quote') return fromKey(islandQuote[islandId].photo);
  if (localPath === '/pricing') return fromKey(islandPricing[islandId].photo);
  if (localPath === '/legal') return fromKey(islandLegal[islandId].photo);
  if (localPath === '/thank-you') return fromKey(islandThanks[islandId].photo);
  if (localPath === '/journal') return fromKey(islandJournal[islandId].photo);
  if (localPath === '/blog') return fromKey(islandBlog[islandId].photo);
  if (localPath === '/locations') return fromKey(islandLocations[islandId].photo);
  if (localPath === '/areas') return fromKey(islandAreas[islandId].photo);
  if (localPath === '/contact') return fromKey(islandContact[islandId].photo);
  if (localPath === '/trust') return fromKey(islandTrust[islandId].photo);
  if (localPath === '/services') return fromKey(islandServiceIndex[islandId].photo);
  if (localPath === '/help') return fromKey(islandHelpIndex[islandId].photo);
  if (localPath === '/fine-dining') return fromKey(islandFineDiningIndex[islandId].photo);
  if (localPath === '/staffing') return fromKey(islandStaffingIndex[islandId].photo);
  if (localPath === '/corporate') return fromKey(islandCorporate[islandId].photo);
  if (localPath === '/gatherings') return fromKey(islandGatherings[islandId].photo);
  if (localPath === '/islands') return fromKey(islandIslands[islandId].photo);
  if (localPath === '/sitemap') return fromKey(islandSitemap[islandId].photo);

  const journalSlug = /^\/journal\/([^/]+)$/.exec(localPath)?.[1];
  const journalPiece = journalSlug ? getJournalArticle(islandId, journalSlug) : undefined;
  if (journalPiece) return fromKey(journalPiece.photo);
  const blogSlug = /^\/blog\/([^/]+)$/.exec(localPath)?.[1];
  const blogPiece = blogSlug ? getBlogArticle(islandId, blogSlug) : undefined;
  if (blogPiece) return fromKey(blogPiece.photo);

  return null;
}
