#!/usr/bin/env node
/**
 * Fail the build when money pages share a title, H1, or hero file.
 *
 *   npm run seo:audit
 */
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const ISLANDS = ['oahu', 'maui', 'kauai', 'bigisland'];

function read(rel) {
  return readFileSync(join(ROOT, rel), 'utf8');
}

function sliceExport(src, name, nextExport) {
  const start = src.indexOf(`export const ${name}`);
  if (start < 0) throw new Error(`Missing export const ${name}`);
  const end = nextExport ? src.indexOf(nextExport, start + 1) : src.length;
  if (nextExport && end < 0) throw new Error(`Could not bound ${name}`);
  return src.slice(start, end);
}

function photoFiles(src) {
  const map = {};
  const re = /(\w+):\s*\{\s*file:\s*'([^']+)'/g;
  let m;
  while ((m = re.exec(src))) map[m[1]] = m[2];
  return map;
}

function neighborhoods(src) {
  const block = sliceExport(src, 'moneyNeighborhoods', 'export function getMoneyNeighborhood');
  const items = [];
  const re =
    /slug:\s*'([^']+)'[\s\S]*?h1:\s*'([^']+)'[\s\S]*?title:\s*'([^']+)'[\s\S]*?photo:\s*'([^']+)'/g;
  let m;
  while ((m = re.exec(block))) {
    items.push({ slug: m[1], h1: m[2], title: m[3], photo: m[4] });
  }
  return items;
}

function islandOfferMeta(src) {
  const block = sliceExport(src, 'islandOffers', 'export const moneyNeighborhoods');
  const items = [];
  const re = /h1:\s*'([^']+)'[\s\S]*?title:\s*'([^']+)'/g;
  let m;
  while ((m = re.exec(block))) items.push({ h1: m[1], title: m[2] });
  return items;
}

function cateringMeta(src) {
  const items = [];
  const re = /h1:\s*'([^']+)'[\s\S]*?title:\s*'([^']+)'[\s\S]*?photo:\s*'([^']+)'/g;
  let m;
  while ((m = re.exec(src))) items.push({ h1: m[1], title: m[2], photo: m[3] });
  return items;
}

function middlewareCorridors(src) {
  const map = {};
  for (const island of ISLANDS) {
    const re = new RegExp(`${island}:\\s*\\[([^\\]]+)\\]`);
    const hit = src.match(re);
    if (!hit) throw new Error(`middleware missing ${island} corridors`);
    map[island] = hit[1]
      .split(',')
      .map((s) => s.replace(/['\s]/g, ''))
      .filter(Boolean);
  }
  return map;
}

function supportBlocks(src, name) {
  const start = src.indexOf(`export const ${name}`);
  if (start < 0) throw new Error(`Missing export const ${name}`);
  const next = src.indexOf('export const ', start + `export const ${name}`.length);
  const block = src.slice(start, next < 0 ? src.length : next);
  const items = [];
  const re = /h1:\s*'([^']+)'[\s\S]*?title:\s*'([^']+)'[\s\S]*?photo:\s*'([^']+)'/g;
  let m;
  while ((m = re.exec(block))) items.push({ h1: m[1], title: m[2], photo: m[3] });
  return items;
}

function uniqueCellMeta(src) {
  const items = [];
  const re = /slug:\s*'([^']+)'[\s\S]*?h1:\s*'([^']+)'[\s\S]*?title:\s*'([^']+)'[\s\S]*?photo:\s*'([^']+)'/g;
  let m;
  while ((m = re.exec(src))) items.push({ slug: m[1], h1: m[2], title: m[3], photo: m[4] });
  return items;
}

function uniqueCellSlugsByIsland(src) {
  const map = {};
  let current = null;
  for (const line of src.split('\n')) {
    const island = line.match(/^\s+(oahu|maui|kauai|bigisland):\s*[\[{]/);
    if (island) current = island[1];
    const slug = line.match(/slug:\s*'([^']+)'/);
    if (current && slug) {
      map[current] ??= [];
      map[current].push(slug[1]);
    }
  }
  return map;
}

function offerSlugsByIsland(src) {
  const block = sliceExport(src, 'moneyNeighborhoods', 'export function getMoneyNeighborhood');
  const map = {};
  let current = null;
  for (const line of block.split('\n')) {
    const island = line.match(/^\s+(oahu|maui|kauai|bigisland):\s*\[/);
    if (island) current = island[1];
    const slug = line.match(/slug:\s*'([^']+)'/);
    if (current && slug) {
      map[current] ??= [];
      map[current].push(slug[1]);
    }
  }
  return map;
}

function dupes(values, label) {
  const seen = new Map();
  const errors = [];
  for (const value of values) {
    if (seen.has(value)) errors.push(`${label} duplicated: ${value}`);
    else seen.set(value, true);
  }
  return errors;
}

const offersSrc = read('data/offers.ts');
const photosSrc = read('data/photos.ts');
const cateringSrc = read('data/catering.ts');
const eventsSrc = read('data/events.ts');
const supportSrc = read('data/islandSupport.ts');
const cellsSrc = read('data/uniqueCells.ts');
const servicesSrc = read('data/islandServices.ts') + '\n' + read('data/gatedServices.ts') + '\n' + read('data/residentLine.ts') + '\n' + read('data/feeStackPages.ts');
const occasionsSrc = read('data/occasionPages.ts') + '\n' + read('data/occasionExtras.ts');
const formatsSrc = read('data/cateringFormats.ts');
const fineSrc = read('data/fineDining.ts');
const staffSrc = read('data/staffingPages.ts');
const menuSkuSrc = read('data/menuSkus.ts');
const helpSrc = read('data/helpArticles.ts');
const quoteSrc = read('data/islandQuote.ts');
const pricingDocSrc = read('data/islandPricing.ts');
const legalSrc = read('data/islandLegal.ts');
const thanksSrc = read('data/islandThanks.ts');
const journalSrc = read('data/islandJournal.ts');
const blogSrc = read('data/islandBlog.ts');
const locationsSrc = read('data/islandLocations.ts');
const areasSrc = read('data/islandAreas.ts');
const contactSrc = read('data/islandContact.ts');
const trustSrc = read('data/islandTrust.ts');
const serviceIndexSrc = read('data/islandServiceIndex.ts');
const helpIndexSrc = read('data/islandHelpIndex.ts');
const fineIndexSrc = read('data/islandFineDiningIndex.ts');
const staffIndexSrc = read('data/islandStaffingIndex.ts');
const corporateSrc = read('data/islandCorporate.ts');
const gatheringsSrc = read('data/islandGatherings.ts');
const islandsIndexSrc = read('data/islandIslands.ts');
const sitemapDocSrc = read('data/islandSitemap.ts');
const hubDirSrc = read('data/hubDirectories.ts');
const hubNestedSrc = read('data/hubNestedDirectories.ts');
const journalArticleSrc = read('data/journalArticles.ts');
const blogArticleSrc = read('data/blogArticles.ts');
const middlewareSrc = read('middleware.ts');
const files = photoFiles(photosSrc);
const hoods = neighborhoods(offersSrc);
const homes = islandOfferMeta(offersSrc);
const catering = cateringMeta(cateringSrc);
const events = cateringMeta(eventsSrc);
const faq = supportBlocks(supportSrc, 'islandFaq');
const coverage = supportBlocks(supportSrc, 'islandCoverage');
const how = supportBlocks(supportSrc, 'islandHow');
const menus = supportBlocks(supportSrc, 'islandMenus');
const cells = uniqueCellMeta(cellsSrc);
const services = uniqueCellMeta(servicesSrc);
const occasions = uniqueCellMeta(occasionsSrc);
const formats = uniqueCellMeta(formatsSrc);
const fine = uniqueCellMeta(fineSrc);
const staff = uniqueCellMeta(staffSrc);
const menuSkus = uniqueCellMeta(menuSkuSrc);
const help = uniqueCellMeta(helpSrc);
const quoteDocs = supportBlocks(quoteSrc, 'islandQuote');
const pricingDocs = supportBlocks(pricingDocSrc, 'islandPricing');
const legalDocs = supportBlocks(legalSrc, 'islandLegal');
const thanksDocs = supportBlocks(thanksSrc, 'islandThanks');
const journalDocs = supportBlocks(journalSrc, 'islandJournal');
const blogDocs = supportBlocks(blogSrc, 'islandBlog');
const locationDocs = supportBlocks(locationsSrc, 'islandLocations');
const areaDocs = supportBlocks(areasSrc, 'islandAreas');
const contactDocs = supportBlocks(contactSrc, 'islandContact');
const trustDocs = supportBlocks(trustSrc, 'islandTrust');
const serviceIndexDocs = supportBlocks(serviceIndexSrc, 'islandServiceIndex');
const helpIndexDocs = supportBlocks(helpIndexSrc, 'islandHelpIndex');
const fineIndexDocs = supportBlocks(fineIndexSrc, 'islandFineDiningIndex');
const staffIndexDocs = supportBlocks(staffIndexSrc, 'islandStaffingIndex');
const corporateDocs = supportBlocks(corporateSrc, 'islandCorporate');
const gatheringsDocs = supportBlocks(gatheringsSrc, 'islandGatherings');
const islandsIndexDocs = supportBlocks(islandsIndexSrc, 'islandIslands');
const sitemapDocs = supportBlocks(sitemapDocSrc, 'islandSitemap');
const hubDirs = [...supportBlocks(hubDirSrc, 'hubDirectories'), ...supportBlocks(hubNestedSrc, 'hubNestedDirectories')];
const journalPieces = uniqueCellMeta(journalArticleSrc);
const blogPieces = uniqueCellMeta(blogArticleSrc);

const errors = [];

if (hoods.length < 20) errors.push(`Expected ≥20 money neighborhoods, found ${hoods.length}`);
if (homes.length !== 4) errors.push(`Expected 4 island homes, found ${homes.length}`);
if (events.length !== 4) errors.push(`Expected 4 event offers, found ${events.length}`);
if (faq.length !== 4) errors.push(`Expected 4 island FAQ pages, found ${faq.length}`);
if (coverage.length !== 4) errors.push(`Expected 4 coverage pages, found ${coverage.length}`);
if (how.length !== 4) errors.push(`Expected 4 how-it-works pages, found ${how.length}`);
if (menus.length !== 4) errors.push(`Expected 4 menus pages, found ${menus.length}`);
if (cells.length < 15) errors.push(`Expected ≥15 unique cells, found ${cells.length}`);
if (services.length < 56) errors.push(`Expected ≥56 island service pages, found ${services.length}`);
if (occasions.length < 28) errors.push(`Expected ≥28 occasion pages, found ${occasions.length}`);
if (formats.length < 24) errors.push(`Expected ≥24 catering format pages, found ${formats.length}`);
if (fine.length < 16) errors.push(`Expected ≥16 fine-dining pages, found ${fine.length}`);
if (staff.length < 12) errors.push(`Expected ≥12 staffing pages, found ${staff.length}`);
if (menuSkus.length < 16) errors.push(`Expected ≥16 menu SKU pages, found ${menuSkus.length}`);
if (help.length < 20) errors.push(`Expected ≥20 help articles, found ${help.length}`);
if (quoteDocs.length !== 4) errors.push(`Expected 4 island quote pages, found ${quoteDocs.length}`);
if (pricingDocs.length !== 4) errors.push(`Expected 4 island pricing pages, found ${pricingDocs.length}`);
if (legalDocs.length !== 4) errors.push(`Expected 4 island legal pages, found ${legalDocs.length}`);
if (thanksDocs.length !== 4) errors.push(`Expected 4 island thank-you pages, found ${thanksDocs.length}`);
if (journalDocs.length !== 4) errors.push(`Expected 4 island journal pages, found ${journalDocs.length}`);
if (blogDocs.length !== 4) errors.push(`Expected 4 island blog pages, found ${blogDocs.length}`);
if (locationDocs.length !== 4) errors.push(`Expected 4 island locations pages, found ${locationDocs.length}`);
if (areaDocs.length !== 4) errors.push(`Expected 4 island areas pages, found ${areaDocs.length}`);
if (contactDocs.length !== 4) errors.push(`Expected 4 island contact pages, found ${contactDocs.length}`);
if (trustDocs.length !== 4) errors.push(`Expected 4 island trust pages, found ${trustDocs.length}`);
if (serviceIndexDocs.length !== 4) errors.push(`Expected 4 island services pages, found ${serviceIndexDocs.length}`);
if (helpIndexDocs.length !== 4) errors.push(`Expected 4 island help indexes, found ${helpIndexDocs.length}`);
if (fineIndexDocs.length !== 4) errors.push(`Expected 4 island fine-dining indexes, found ${fineIndexDocs.length}`);
if (staffIndexDocs.length !== 4) errors.push(`Expected 4 island staffing indexes, found ${staffIndexDocs.length}`);
if (corporateDocs.length !== 4) errors.push(`Expected 4 island corporate indexes, found ${corporateDocs.length}`);
if (gatheringsDocs.length !== 4) errors.push(`Expected 4 island gatherings indexes, found ${gatheringsDocs.length}`);
if (islandsIndexDocs.length !== 4) errors.push(`Expected 4 island islands indexes, found ${islandsIndexDocs.length}`);
if (sitemapDocs.length !== 4) errors.push(`Expected 4 island sitemap pages, found ${sitemapDocs.length}`);
if (hubDirs.length !== 52) errors.push(`Expected 52 hub directories, found ${hubDirs.length}`);
if (journalPieces.length !== 28) errors.push(`Expected 28 journal articles, found ${journalPieces.length}`);
if (blogPieces.length !== 116) errors.push(`Expected 116 blog articles, found ${blogPieces.length}`);

errors.push(...dupes(hoods.map((h) => h.title), 'neighborhood title'));
errors.push(...dupes(hoods.map((h) => h.h1), 'neighborhood H1'));
errors.push(...dupes(hoods.map((h) => files[h.photo] || h.photo), 'neighborhood hero file'));
errors.push(...dupes(homes.map((h) => h.title), 'island home title'));
errors.push(...dupes(catering.map((h) => h.title), 'catering title'));
errors.push(...dupes(catering.map((h) => files[h.photo] || h.photo), 'catering hero file'));
errors.push(...dupes(events.map((h) => h.title), 'events title'));
errors.push(...dupes(events.map((h) => h.h1), 'events H1'));
errors.push(...dupes(events.map((h) => files[h.photo] || h.photo), 'events hero file'));
errors.push(...dupes(faq.map((h) => h.title), 'faq title'));
errors.push(...dupes(faq.map((h) => h.h1), 'faq H1'));
errors.push(...dupes(faq.map((h) => files[h.photo] || h.photo), 'faq hero file'));
errors.push(...dupes(coverage.map((h) => h.title), 'coverage title'));
errors.push(...dupes(coverage.map((h) => files[h.photo] || h.photo), 'coverage hero file'));
errors.push(...dupes(how.map((h) => h.title), 'how-it-works title'));
errors.push(...dupes(how.map((h) => files[h.photo] || h.photo), 'how-it-works hero file'));
errors.push(...dupes(menus.map((h) => h.title), 'menus title'));
errors.push(...dupes(menus.map((h) => files[h.photo] || h.photo), 'menus hero file'));
errors.push(...dupes(cells.map((h) => h.title), 'unique-cell title'));
errors.push(...dupes(cells.map((h) => h.h1), 'unique-cell H1'));
errors.push(...dupes(cells.map((h) => files[h.photo] || h.photo), 'unique-cell hero file'));
errors.push(...dupes(services.map((h) => h.title), 'service title'));
errors.push(...dupes(services.map((h) => h.h1), 'service H1'));
errors.push(...dupes(services.map((h) => files[h.photo] || h.photo), 'service hero file'));
errors.push(...dupes(occasions.map((h) => h.title), 'occasion title'));
errors.push(...dupes(occasions.map((h) => h.h1), 'occasion H1'));
errors.push(...dupes(occasions.map((h) => files[h.photo] || h.photo), 'occasion hero file'));
errors.push(...dupes(formats.map((h) => h.title), 'format title'));
errors.push(...dupes(formats.map((h) => h.h1), 'format H1'));
errors.push(...dupes(formats.map((h) => files[h.photo] || h.photo), 'format hero file'));
errors.push(...dupes(fine.map((h) => h.title), 'fine-dining title'));
errors.push(...dupes(fine.map((h) => h.h1), 'fine-dining H1'));
errors.push(...dupes(fine.map((h) => files[h.photo] || h.photo), 'fine-dining hero file'));
errors.push(...dupes(staff.map((h) => h.title), 'staffing title'));
errors.push(...dupes(staff.map((h) => h.h1), 'staffing H1'));
errors.push(...dupes(staff.map((h) => files[h.photo] || h.photo), 'staffing hero file'));
errors.push(...dupes(menuSkus.map((h) => h.title), 'menu-sku title'));
errors.push(...dupes(menuSkus.map((h) => h.h1), 'menu-sku H1'));
errors.push(...dupes(menuSkus.map((h) => files[h.photo] || h.photo), 'menu-sku hero file'));
errors.push(...dupes(help.map((h) => h.title), 'help title'));
errors.push(...dupes(help.map((h) => h.h1), 'help H1'));
errors.push(...dupes(help.map((h) => files[h.photo] || h.photo), 'help hero file'));
errors.push(...dupes(quoteDocs.map((h) => h.title), 'quote title'));
errors.push(...dupes(quoteDocs.map((h) => h.h1), 'quote H1'));
errors.push(...dupes(quoteDocs.map((h) => files[h.photo] || h.photo), 'quote hero file'));
errors.push(...dupes(pricingDocs.map((h) => h.title), 'pricing title'));
errors.push(...dupes(pricingDocs.map((h) => h.h1), 'pricing H1'));
errors.push(...dupes(pricingDocs.map((h) => files[h.photo] || h.photo), 'pricing hero file'));
errors.push(...dupes(legalDocs.map((h) => h.title), 'legal title'));
errors.push(...dupes(legalDocs.map((h) => h.h1), 'legal H1'));
errors.push(...dupes(legalDocs.map((h) => files[h.photo] || h.photo), 'legal hero file'));
errors.push(...dupes(thanksDocs.map((h) => h.title), 'thank-you title'));
errors.push(...dupes(thanksDocs.map((h) => h.h1), 'thank-you H1'));
errors.push(...dupes(thanksDocs.map((h) => files[h.photo] || h.photo), 'thank-you hero file'));
errors.push(...dupes(journalDocs.map((h) => h.title), 'journal title'));
errors.push(...dupes(journalDocs.map((h) => h.h1), 'journal H1'));
errors.push(...dupes(journalDocs.map((h) => files[h.photo] || h.photo), 'journal hero file'));
errors.push(...dupes(blogDocs.map((h) => h.title), 'blog title'));
errors.push(...dupes(blogDocs.map((h) => h.h1), 'blog H1'));
errors.push(...dupes(blogDocs.map((h) => files[h.photo] || h.photo), 'blog hero file'));
errors.push(...dupes(locationDocs.map((h) => h.title), 'locations title'));
errors.push(...dupes(locationDocs.map((h) => h.h1), 'locations H1'));
errors.push(...dupes(locationDocs.map((h) => files[h.photo] || h.photo), 'locations hero file'));
errors.push(...dupes(areaDocs.map((h) => h.title), 'areas title'));
errors.push(...dupes(areaDocs.map((h) => h.h1), 'areas H1'));
errors.push(...dupes(areaDocs.map((h) => files[h.photo] || h.photo), 'areas hero file'));
errors.push(...dupes(contactDocs.map((h) => h.title), 'contact title'));
errors.push(...dupes(contactDocs.map((h) => h.h1), 'contact H1'));
errors.push(...dupes(contactDocs.map((h) => files[h.photo] || h.photo), 'contact hero file'));
errors.push(...dupes(trustDocs.map((h) => h.title), 'trust title'));
errors.push(...dupes(trustDocs.map((h) => h.h1), 'trust H1'));
errors.push(...dupes(trustDocs.map((h) => files[h.photo] || h.photo), 'trust hero file'));
errors.push(...dupes(serviceIndexDocs.map((h) => h.title), 'services-index title'));
errors.push(...dupes(serviceIndexDocs.map((h) => h.h1), 'services-index H1'));
errors.push(...dupes(serviceIndexDocs.map((h) => files[h.photo] || h.photo), 'services-index hero file'));
errors.push(...dupes(helpIndexDocs.map((h) => h.title), 'help-index title'));
errors.push(...dupes(helpIndexDocs.map((h) => h.h1), 'help-index H1'));
errors.push(...dupes(helpIndexDocs.map((h) => files[h.photo] || h.photo), 'help-index hero file'));
errors.push(...dupes(fineIndexDocs.map((h) => h.title), 'fine-index title'));
errors.push(...dupes(fineIndexDocs.map((h) => h.h1), 'fine-index H1'));
errors.push(...dupes(fineIndexDocs.map((h) => files[h.photo] || h.photo), 'fine-index hero file'));
errors.push(...dupes(staffIndexDocs.map((h) => h.title), 'staff-index title'));
errors.push(...dupes(staffIndexDocs.map((h) => h.h1), 'staff-index H1'));
errors.push(...dupes(staffIndexDocs.map((h) => files[h.photo] || h.photo), 'staff-index hero file'));
errors.push(...dupes(corporateDocs.map((h) => h.title), 'corporate-index title'));
errors.push(...dupes(corporateDocs.map((h) => h.h1), 'corporate-index H1'));
errors.push(...dupes(corporateDocs.map((h) => files[h.photo] || h.photo), 'corporate-index hero file'));
errors.push(...dupes(gatheringsDocs.map((h) => h.title), 'gatherings-index title'));
errors.push(...dupes(gatheringsDocs.map((h) => h.h1), 'gatherings-index H1'));
errors.push(...dupes(gatheringsDocs.map((h) => files[h.photo] || h.photo), 'gatherings-index hero file'));
errors.push(...dupes(islandsIndexDocs.map((h) => h.title), 'islands-index title'));
errors.push(...dupes(islandsIndexDocs.map((h) => h.h1), 'islands-index H1'));
errors.push(...dupes(islandsIndexDocs.map((h) => files[h.photo] || h.photo), 'islands-index hero file'));
errors.push(...dupes(sitemapDocs.map((h) => h.title), 'sitemap title'));
errors.push(...dupes(sitemapDocs.map((h) => h.h1), 'sitemap H1'));
errors.push(...dupes(sitemapDocs.map((h) => files[h.photo] || h.photo), 'sitemap hero file'));
errors.push(...dupes(hubDirs.map((h) => h.title), 'hub-directory title'));
errors.push(...dupes(hubDirs.map((h) => h.h1), 'hub-directory H1'));
errors.push(...dupes(hubDirs.map((h) => files[h.photo] || h.photo), 'hub-directory hero file'));
errors.push(...dupes(journalPieces.map((h) => h.title), 'journal-article title'));
errors.push(...dupes(journalPieces.map((h) => h.h1), 'journal-article H1'));
errors.push(...dupes(journalPieces.map((h) => files[h.photo] || h.photo), 'journal-article hero file'));
errors.push(...dupes(blogPieces.map((h) => h.title), 'blog-article title'));
errors.push(...dupes(blogPieces.map((h) => h.h1), 'blog-article H1'));
errors.push(...dupes(blogPieces.map((h) => files[h.photo] || h.photo), 'blog-article hero file'));

const allTitles = [
  ...hoods.map((h) => h.title),
  ...homes.map((h) => h.title),
  ...catering.map((h) => h.title),
  ...events.map((h) => h.title),
  ...faq.map((h) => h.title),
  ...coverage.map((h) => h.title),
  ...how.map((h) => h.title),
  ...menus.map((h) => h.title),
  ...cells.map((h) => h.title),
  ...services.map((h) => h.title),
  ...occasions.map((h) => h.title),
  ...formats.map((h) => h.title),
  ...fine.map((h) => h.title),
  ...staff.map((h) => h.title),
  ...menuSkus.map((h) => h.title),
  ...help.map((h) => h.title),
  ...quoteDocs.map((h) => h.title),
  ...pricingDocs.map((h) => h.title),
  ...legalDocs.map((h) => h.title),
  ...thanksDocs.map((h) => h.title),
  ...journalDocs.map((h) => h.title),
  ...blogDocs.map((h) => h.title),
  ...locationDocs.map((h) => h.title),
  ...areaDocs.map((h) => h.title),
  ...contactDocs.map((h) => h.title),
  ...trustDocs.map((h) => h.title),
  ...serviceIndexDocs.map((h) => h.title),
  ...helpIndexDocs.map((h) => h.title),
  ...fineIndexDocs.map((h) => h.title),
  ...staffIndexDocs.map((h) => h.title),
  ...corporateDocs.map((h) => h.title),
  ...gatheringsDocs.map((h) => h.title),
  ...islandsIndexDocs.map((h) => h.title),
  ...sitemapDocs.map((h) => h.title),
  ...hubDirs.map((h) => h.title),
  ...journalPieces.map((h) => h.title),
  ...blogPieces.map((h) => h.title),
];
errors.push(...dupes(allTitles, 'cross-type title'));

const cateringTitles = new Set(catering.map((h) => h.title));
for (const row of events) {
  if (cateringTitles.has(row.title)) errors.push(`events title collides with catering: ${row.title}`);
}

const homeTitles = new Set(homes.map((h) => h.title));
for (const hood of hoods) {
  if (homeTitles.has(hood.title)) errors.push(`neighborhood title collides with island home: ${hood.title}`);
  const file = files[hood.photo];
  if (!file) errors.push(`unknown photo key ${hood.photo} on /${hood.slug}`);
  else if (!existsSync(join(ROOT, 'public', file.replace(/^\//, '')))) {
    errors.push(`missing photo file ${file}`);
  }
}

for (const row of catering) {
  const file = files[row.photo];
  if (!file) errors.push(`unknown catering photo key ${row.photo}`);
  else if (!existsSync(join(ROOT, 'public', file.replace(/^\//, '')))) {
    errors.push(`missing catering photo ${file}`);
  }
}

for (const row of events) {
  const file = files[row.photo];
  if (!file) errors.push(`unknown events photo key ${row.photo}`);
  else if (!existsSync(join(ROOT, 'public', file.replace(/^\//, '')))) {
    errors.push(`missing events photo ${file}`);
  }
}

for (const row of [...faq, ...coverage, ...how, ...menus, ...cells, ...services, ...occasions, ...formats, ...fine, ...staff, ...menuSkus, ...help, ...quoteDocs, ...pricingDocs, ...legalDocs, ...thanksDocs, ...journalDocs, ...blogDocs, ...locationDocs, ...areaDocs, ...contactDocs, ...trustDocs, ...serviceIndexDocs, ...helpIndexDocs, ...fineIndexDocs, ...staffIndexDocs, ...corporateDocs, ...gatheringsDocs, ...islandsIndexDocs, ...sitemapDocs, ...hubDirs, ...journalPieces, ...blogPieces]) {
  const file = files[row.photo];
  const label = row.slug ? `/${row.slug}` : row.title;
  if (!file) errors.push(`unknown photo key ${row.photo} on ${label}`);
  else if (!existsSync(join(ROOT, 'public', file.replace(/^\//, '')))) {
    errors.push(`missing photo file ${file}`);
  }
}

const MONEY_TITLE_RE =
  /\b(oahu catering|maui catering|kauai catering|hawaii catering|big island catering|private chef (oahu|maui|kauai|honolulu|big island|kona|hawaii)|wedding catering (oahu|maui|hawaii|kauai))\b/i;
for (const row of [...faq, ...coverage, ...how, ...menus, ...cells, ...services, ...occasions, ...formats, ...fine, ...staff, ...menuSkus, ...help, ...quoteDocs, ...pricingDocs, ...legalDocs, ...thanksDocs, ...journalDocs, ...blogDocs, ...locationDocs, ...areaDocs, ...contactDocs, ...trustDocs, ...serviceIndexDocs, ...helpIndexDocs, ...fineIndexDocs, ...staffIndexDocs, ...corporateDocs, ...gatheringsDocs, ...islandsIndexDocs, ...sitemapDocs, ...hubDirs, ...journalPieces, ...blogPieces]) {
  if (MONEY_TITLE_RE.test(row.title)) {
    errors.push(`support/cell title uses a money keyword: ${row.title}`);
  }
}

for (const key of [
  'vacationOahu',
  'vacationMaui',
  'vacationKauai',
  'vacationBigisland',
  'chefOahu',
  'chefMaui',
  'chefKauai',
  'chefBigisland',
  'mobileBarOahu',
  'mobileBarMaui',
  'mobileBarKauai',
  'mobileBarBigisland',
]) {
  const file = files[key];
  if (!file) errors.push(`missing photo key ${key}`);
  else if (!existsSync(join(ROOT, 'public', file.replace(/^\//, '')))) {
    errors.push(`missing photo file ${file}`);
  }
}

const mw = middlewareCorridors(middlewareSrc);
const slugs = offerSlugsByIsland(offersSrc);
const cellSlugs = uniqueCellSlugsByIsland(cellsSrc);
const serviceSlugs = uniqueCellSlugsByIsland(servicesSrc);
for (const island of ISLANDS) {
  const a = [...(mw[island] || [])].sort().join(',');
  const b = [...(slugs[island] || [])].sort().join(',');
  if (a !== b) errors.push(`middleware CORRIDORS.${island} !== moneyNeighborhoods (${a} vs ${b})`);
  const hoodSet = new Set(slugs[island] || []);
  const taken = new Set(hoodSet);
  for (const slug of cellSlugs[island] || []) {
    if (taken.has(slug)) errors.push(`unique cell /${slug} collides on ${island}`);
    taken.add(slug);
  }
  for (const slug of serviceSlugs[island] || []) {
    if (taken.has(slug)) errors.push(`service /${slug} collides on ${island}`);
    taken.add(slug);
  }
}

if (errors.length) {
  console.error(`seo:audit failed (${errors.length})\n${errors.map((e) => ` - ${e}`).join('\n')}`);
  process.exit(1);
}

console.log(
  `seo:audit ok — ${hoods.length} corridors, ${homes.length} homes, ${catering.length} catering, ${events.length} events, ${faq.length} faq, ${coverage.length} coverage, ${cells.length} unique cells, ${services.length} services, ${occasions.length} occasions, ${formats.length} formats, ${fine.length} fine-dining, ${staff.length} staffing, ${menuSkus.length} menu SKUs, ${help.length} help, ${quoteDocs.length} quote, ${pricingDocs.length} pricing, ${legalDocs.length} legal, ${thanksDocs.length} thank-you, ${journalDocs.length} journal, ${blogDocs.length} blog, ${locationDocs.length} locations, ${areaDocs.length} areas, ${contactDocs.length} contact, ${trustDocs.length} trust, ${serviceIndexDocs.length} service lists, ${helpIndexDocs.length} help indexes, ${fineIndexDocs.length} fine-dining indexes, ${staffIndexDocs.length} staffing indexes, ${corporateDocs.length} corporate indexes, ${gatheringsDocs.length} gatherings indexes, ${islandsIndexDocs.length} islands indexes, ${sitemapDocs.length} sitemap, ${hubDirs.length} hub directories, ${journalPieces.length} journal articles, ${blogPieces.length} blog articles.`,
);
