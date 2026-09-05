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
  const re = /h1:\s*'([^']+)'[\s\S]*?title:\s*'([^']+)'[\s\S]*?heroPhoto:\s*'([^']+)'/g;
  let m;
  while ((m = re.exec(block))) items.push({ h1: m[1], title: m[2], photo: m[3] });
  return items;
}

/** First `title:` after `  {island}: {` — the source resolveDocumentSeo actually reads. */
function islandRecordTitle(src, island) {
  const start = src.search(new RegExp(`\\n  ${island}: \\{`));
  if (start < 0) return '';
  const hit = src.slice(start, start + 4000).match(/title:\s*'([^']+)'/);
  return hit ? hit[1] : '';
}

function pageMetaKeyTitle(src, key) {
  const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const hit = src.match(new RegExp(`'${escaped}':\\s*\\{[\\s\\S]*?title:\\s*'([^']+)'`));
  return hit ? hit[1] : '';
}

function neighborhoodTitle(src, island, slug) {
  const start = src.search(new RegExp(`\\n  ${island}: \\[`));
  if (start < 0) return '';
  const rest = src.slice(start + 1);
  const next = rest.search(/\n  (oahu|maui|kauai|bigisland): \[/);
  const block = next < 0 ? src.slice(start) : src.slice(start, start + 1 + next);
  const slugAt = block.search(new RegExp(`slug:\\s*'${slug}'`));
  if (slugAt < 0) return '';
  const hit = block.slice(slugAt).match(/title:\s*'([^']+)'/);
  return hit ? hit[1] : '';
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

function quotedList(src, name) {
  const re = new RegExp(`(?:const|export const) ${name} = \\[([^\\]]+)\\]`);
  const hit = src.match(re);
  if (!hit) throw new Error(`Missing ${name} list`);
  return hit[1]
    .split(',')
    .map((s) => s.replace(/['\s]/g, ''))
    .filter((s) => s && !s.startsWith('.'));
}

function sameSet(a, b, label) {
  const left = [...new Set(a)].sort();
  const right = [...new Set(b)].sort();
  if (left.join('|') !== right.join('|')) {
    return [`${label} drift: catalog [${left.join(', ')}] vs live [${right.join(', ')}]`];
  }
  return [];
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
const cellsSrc = read('data/uniqueCells.ts') + '\n' + read('data/areaCells.ts');
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
const hubEditorialSrc = read('data/hubEditorialDirectories.ts');
const journalArticleSrc = read('data/journalArticles.ts') + '\n' + read('data/extraJournalNotes.ts');
const blogArticleSrc = read('data/blogArticles.ts') + '\n' + read('data/extraBlogNotes.ts');
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
const hubDirs = [
  ...supportBlocks(hubDirSrc, 'hubDirectories'),
  ...supportBlocks(hubNestedSrc, 'hubNestedDirectories'),
  ...supportBlocks(hubEditorialSrc, 'hubEditorialDirectories'),
];
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
if (cells.length < 47) errors.push(`Expected ≥47 unique cells, found ${cells.length}`);
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
if (hubDirs.length !== 89) errors.push(`Expected 89 hub directories, found ${hubDirs.length}`);
if (journalPieces.length !== 40) errors.push(`Expected 40 journal articles, found ${journalPieces.length}`);
if (blogPieces.length !== 160) errors.push(`Expected 160 blog articles, found ${blogPieces.length}`);

errors.push(...dupes(hoods.map((h) => h.title), 'neighborhood title'));
errors.push(...dupes(hoods.map((h) => h.h1), 'neighborhood H1'));
errors.push(...dupes(hoods.map((h) => files[h.photo] || h.photo), 'neighborhood hero file'));
errors.push(...dupes(homes.map((h) => h.title), 'island home title'));
errors.push(...dupes(homes.map((h) => files[h.photo] || h.photo), 'island home hero file'));
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

const allHeroes = [
  ...hoods,
  ...homes,
  ...catering,
  ...events,
  ...faq,
  ...coverage,
  ...how,
  ...menus,
  ...cells,
  ...services,
  ...occasions,
  ...formats,
  ...fine,
  ...staff,
  ...menuSkus,
  ...help,
  ...quoteDocs,
  ...pricingDocs,
  ...legalDocs,
  ...thanksDocs,
  ...journalDocs,
  ...blogDocs,
  ...locationDocs,
  ...areaDocs,
  ...contactDocs,
  ...trustDocs,
  ...serviceIndexDocs,
  ...helpIndexDocs,
  ...fineIndexDocs,
  ...staffIndexDocs,
  ...corporateDocs,
  ...gatheringsDocs,
  ...islandsIndexDocs,
  ...sitemapDocs,
  ...hubDirs,
  ...journalPieces,
  ...blogPieces,
].map((h) => files[h.photo] || h.photo);
errors.push(...dupes(allHeroes, 'cross-type hero file'));

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
  /\b(oahu catering|maui catering|kauai catering|hawaii catering|big island catering|private chef (oahu|maui|kauai|honolulu|big island|kona|hawaii|lahaina maui|north shore oahu|poipu kauai)|wedding catering (oahu|maui|hawaii|kauai)|kauai wedding catering|personal chef (honolulu|maui|oahu)|mobile bar hawaii)\b/i;
if (!/kauai wedding catering/.test(MONEY_TITLE_RE.source) || !/mobile bar hawaii/.test(MONEY_TITLE_RE.source)) {
  errors.push('MONEY_TITLE_RE dropped kauai wedding catering or mobile bar hawaii');
}
if (!/personal chef/.test(MONEY_TITLE_RE.source) || !/lahaina maui/.test(MONEY_TITLE_RE.source)) {
  errors.push('MONEY_TITLE_RE dropped personal-chef or long-tail private-chef phrases');
}
for (const row of [...faq, ...coverage, ...how, ...menus, ...cells, ...services, ...occasions, ...formats, ...fine, ...staff, ...menuSkus, ...help, ...quoteDocs, ...pricingDocs, ...legalDocs, ...thanksDocs, ...journalDocs, ...blogDocs, ...locationDocs, ...areaDocs, ...contactDocs, ...trustDocs, ...serviceIndexDocs, ...helpIndexDocs, ...fineIndexDocs, ...staffIndexDocs, ...corporateDocs, ...gatheringsDocs, ...islandsIndexDocs, ...sitemapDocs, ...hubDirs, ...journalPieces, ...blogPieces]) {
  if (row.slug === 'personal-chef') continue;
  if (MONEY_TITLE_RE.test(row.title)) {
    errors.push(`support/cell title uses a money keyword: ${row.title}`);
  }
}

const pageMetaSrc = read('data/pageMeta.ts');
if (/PAGE_META\[prefixed\] \?\? PAGE_META\[clean\]/.test(pageMetaSrc)) {
  errors.push('lookupPageMeta still falls back to hub titles on island hosts');
}
if (/Private chef Oahu, Maui, Kauai/.test(pageMetaSrc)) {
  errors.push('hub /islands pageMeta still stuffs island money keywords');
}
if (/Personal chef for Hawaii villas/.test(pageMetaSrc)) {
  errors.push('hub /private-chef pageMeta still uses the personal-chef title');
}
if (/vacation chef and weekly household service/i.test(pageMetaSrc)) {
  errors.push('island /vacation-chef pageMeta still sells the household week');
}
if (/Legal notes for private chef & catering/i.test(pageMetaSrc)) {
  errors.push('hub /legal pageMeta still cannibalizes with private chef & catering');
}
if (/How a private chef booking works/i.test(pageMetaSrc)) {
  errors.push('hub /how-it-works pageMeta still stuffs private chef hawaii');
}
if (/private chef journal/i.test(journalSrc) || /private chef journal/i.test(pageMetaSrc)) {
  errors.push('island /journal titles still stuff private chef {island}');
}
if (/private chef blog/i.test(blogSrc) || /private chef blog/i.test(pageMetaSrc)) {
  errors.push('island /blog titles still stuff private chef {island}');
}

const catalogSrc = read('data/islandCatalog.ts');
if (/Private chef & catering/.test(catalogSrc)) {
  errors.push('catalog default titles still cannibalize with Private chef & catering');
}
if (!/title:\s*`\$\{label\} on \$\{n\} \| myCHEF`/.test(catalogSrc)) {
  errors.push('catalog default titles must be unique per island (`${label} on ${n} | myCHEF`)');
}
if (/Private chef Kauai from/.test(catalogSrc)) {
  errors.push('catalog Kauaʻi North Shore lede still stuffs Private chef Kauai');
}
if (/EVENT_SLUGS = \['weddings'/.test(catalogSrc) || /\/events\/weddings/.test(catalogSrc)) {
  errors.push('catalog still lists /events/weddings — /weddings owns wedding titles');
}

const occasionExtrasSrc = read('data/occasionExtras.ts');
const liveOccasions = [
  ...quotedList(read('data/occasionPages.ts'), 'OCCASION_SLUGS'),
  ...quotedList(occasionExtrasSrc, 'OCCASION_EXTRA_SLUGS'),
];
errors.push(...sameSet(quotedList(catalogSrc, 'EVENT_SLUGS'), liveOccasions, 'catalog EVENT_SLUGS'));
errors.push(
  ...sameSet(quotedList(catalogSrc, 'CATERING_SLUGS'), quotedList(formatsSrc, 'CATERING_FORMAT_SLUGS'), 'catalog CATERING_SLUGS'),
);
errors.push(
  ...sameSet(quotedList(catalogSrc, 'FINE_SLUGS'), quotedList(fineSrc, 'FINE_DINING_SLUGS'), 'catalog FINE_SLUGS'),
);
errors.push(...sameSet(quotedList(catalogSrc, 'HELP_SLUGS'), quotedList(helpSrc, 'HELP_SLUGS'), 'catalog HELP_SLUGS'));
errors.push(
  ...sameSet(quotedList(catalogSrc, 'STAFF_SLUGS'), quotedList(staffSrc, 'STAFFING_SLUGS'), 'catalog STAFF_SLUGS'),
);
errors.push(
  ...sameSet(quotedList(catalogSrc, 'MENU_SLUGS'), quotedList(menuSkuSrc, 'MENU_SKU_SLUGS'), 'catalog MENU_SLUGS'),
);

const longCateringSrc = read('data/longformCatering.ts');
if (/q: 'How much is Oahu catering\?'/.test(longCateringSrc)) {
  errors.push('longform catering still duplicates How much is Oahu catering');
}
if (/q: 'How much is Maui catering\?'/.test(longCateringSrc)) {
  errors.push('longform catering still duplicates How much is Maui catering');
}
if (/q: 'How much is Kauai catering\?'/.test(longCateringSrc)) {
  errors.push('longform catering still duplicates How much is Kauai catering');
}

const longHubSrc = read('data/longformHub.ts');
if (/q: 'How much is Hawaii catering\?'/.test(longHubSrc)) {
  errors.push('hub catering longform still duplicates How much is Hawaii catering');
}
if (/q: 'How much does a private chef cost in Hawaii\?'/.test(longHubSrc)) {
  errors.push('hub home longform still duplicates How much does a private chef cost in Hawaii');
}
if (/not a \/kona page/.test(longHubSrc)) {
  errors.push('hub quote copy still claims Kona is not a /kona page');
}

const longIslandSrc = read('data/longformIslands.ts');
if (/They are not their own URLs/.test(longIslandSrc) || /They are not their own URLs/.test(longHubSrc)) {
  errors.push('copy still claims neighborhood corridors are not URLs');
}
if (/not as their own URLs/.test(longHubSrc) || /not as their own URLs/.test(longIslandSrc)) {
  errors.push('copy still claims neighborhood corridors are not URLs');
}
if (/They are not destination URLs/.test(longIslandSrc)) {
  errors.push('Maui home still claims neighborhood names are not destination URLs');
}
if (/it is not a path of its own/.test(longIslandSrc)) {
  errors.push('Hawaiʻi Island home still claims Kona is not a path of its own');
}
if (/a path of its own/.test(longHubSrc) || /a path of its own/.test(longIslandSrc)) {
  errors.push('copy still claims Honolulu or Kona is not a path of its own');
}
if (/not as their own paths/.test(longIslandSrc) || /not as their own paths/.test(longHubSrc)) {
  errors.push('copy still claims neighborhood corridors are not their own paths');
}
if (/spin Kona out as its own path/.test(longIslandSrc)) {
  errors.push('Hawaiʻi Island FAQ still claims Kona is not its own path');
}
if (/h2: 'Private chef Kona'/.test(longIslandSrc)) {
  errors.push('Hawaiʻi Island home H2 still steals private chef kona from /kona');
}
if (/h2: 'Private chef Honolulu'/.test(longIslandSrc)) {
  errors.push('Oahu home H2 still steals private chef honolulu from /honolulu');
}
if (/h2: 'Private chef Maui cost'/.test(longIslandSrc)) {
  errors.push('Maui home H2 still steals the cost story from /private-chef-cost');
}
if (/h2: 'Personal chef Oahu'/.test(longIslandSrc)) {
  errors.push('Oahu home H2 still steals personal chef oahu from /personal-chef');
}
if (/h2: 'Private chef Hawaii cost'/.test(longHubSrc)) {
  errors.push('hub /pricing H2 still steals private chef hawaii from hub home');
}

const nestedIndexSrc = [
  'data/islandFineDiningIndex.ts',
  'data/islandGatherings.ts',
  'data/islandCorporate.ts',
  'data/islandStaffingIndex.ts',
  'data/islandHelpIndex.ts',
  'data/islandServiceIndex.ts',
]
  .map(read)
  .join('\n');
if (/No\. Open \/east-side\. It is a different chef day\./.test(nestedIndexSrc)) {
  errors.push('nested-index FAQs still clone the Hilo east-side chef-day answer');
}
if (
  /\/bar is the bartender product\. \/staffing\/bartenders is the hourly line\. This page lists both kinds of add-on\.'/.test(
    nestedIndexSrc,
  )
) {
  errors.push('staffing indexes still clone the Same as /bar answer across islands');
}
if (
  /FAQ is the question list\. This page is the first-booking documents beside it\.'/.test(
    nestedIndexSrc,
  )
) {
  errors.push('help indexes still clone the Same as /faq answer across islands');
}

const extraBlogSrc = read('data/extraBlogNotes.ts');
if (/This piece is the kitchen note beside it\.'/.test(extraBlogSrc)) {
  errors.push('extra-blog FAQs still clone the kitchen-note-beside-it answer');
}
if (/This piece is the later table\.'/.test(extraBlogSrc)) {
  errors.push('extra-blog FAQs still clone the later-table answer');
}
if (/No\. One kitchen, two plate sizes\. Open \/quote\.'/.test(extraBlogSrc)) {
  errors.push('extra-blog FAQs still clone the kids-station answer');
}

const blogOnlySrc = read('data/blogArticles.ts');
if (/This piece is how groceries print beside it\.'/.test(blogOnlySrc)) {
  errors.push('blog article FAQs still clone the grocery-line answer');
}
if (/No\. Cost plus receipts\. Open \/quote\.'/.test(blogOnlySrc)) {
  errors.push('blog article FAQs still clone the grocery-markup answer');
}
if (/No\. Unverified fish is named as fish\.'/.test(blogOnlySrc)) {
  errors.push('blog article FAQs still clone the unverified-fish answer');
}
if (/No\. Unverified produce is named as food\.'/.test(blogOnlySrc)) {
  errors.push('blog article FAQs still clone the unverified-produce answer');
}
if (/No\. Quoted add-on\. Empty bench means we say so\.'/.test(staffSrc)) {
  errors.push('staffing FAQs still clone the empty-butler-bench answer');
}
if (/Inquiry only\. Not the staffed product\.'/.test(formatsSrc)) {
  errors.push('drop-off FAQs still clone the not-the-staffed-product answer');
}
if (/Grazing is boards — \/catering\/grazing\. This is seated platters\.'/.test(formatsSrc + menuSkuSrc)) {
  errors.push('family-style FAQs still clone the grazing-vs-platters answer');
}
if (/We grill\. We do not staff a theatrical luau\.'/.test(formatsSrc)) {
  errors.push('BBQ FAQs still clone the theatrical-luau answer');
}
if (/This piece is a short kitchen note beside it\.'/.test(blogOnlySrc)) {
  errors.push('dining-in FAQs still clone the short-kitchen-note answer');
}
if (/This piece is the short load-in note\.'/.test(blogOnlySrc)) {
  errors.push('condo-load-in FAQs still clone the short-load-in answer');
}
if (/When the lot is documented\. Otherwise it is coffee\.'/.test(blogOnlySrc)) {
  errors.push('coffee-labeling FAQs still clone the lot-documented answer');
}
if (/That page is the corridor cell\. This piece is the shorter kitchen note beside it\.'/.test(blogOnlySrc)) {
  errors.push('dining-in FAQs still clone the shorter-kitchen-note answer');
}
if (/This piece is the short load-in note — at inquiry\.'/.test(blogOnlySrc)) {
  errors.push('condo-load-in FAQs still clone the inquiry-load-in answer');
}

if (/No\. We will not invent either\. Send \/quote\.'/.test(contactSrc)) {
  errors.push('island contact FAQs still clone the no-office-or-808 answer');
}
if (/Open \/ or \/vacation-chef\. This page is residents\.'/.test(servicesSrc)) {
  errors.push('resident-line FAQs still clone the visitors-open-vacation-chef answer');
}
if (
  /A sample estate menu is on this page\. Your written menu is designed for that house and that guest list — not a laminated carte\.'/.test(
    cateringSrc,
  )
) {
  errors.push('hub and Oahu catering FAQs still clone the laminated-carte sample-menu answer');
}

const journalOnlySrc = read('data/journalArticles.ts');
if (/This piece is the journal note on why we will not take a verbal yes\.'/.test(journalOnlySrc)) {
  errors.push('journal FAQs still clone the verbal-yes answer');
}
if (/No\. We cook in the house\. Open \/quote\.'/.test(journalOnlySrc)) {
  errors.push('journal FAQs still clone the restaurant-house answer');
}

const extraJournalSrc = read('data/extraJournalNotes.ts');
if (/This piece is a visitor villa week\.'/.test(extraJournalSrc)) {
  errors.push('extra-journal FAQs still clone the visitor-villa-week answer');
}

const leftoverCatalogFaqSrc = [
  'data/cateringFormats.ts',
  'data/fineDining.ts',
  'data/gatedServices.ts',
  'data/helpArticles.ts',
  'data/islandServices.ts',
  'data/menuSkus.ts',
  'data/occasionExtras.ts',
]
  .map(read)
  .join('\n');
if (/Yes\. See \/honeymoon-dinners\.'/.test(leftoverCatalogFaqSrc)) {
  errors.push('catalog FAQs still clone the honeymoon-dinners yes answer');
}
if (/The product door is \/weddings\. This page is the planner sequence\.'/.test(leftoverCatalogFaqSrc)) {
  errors.push('help FAQs still clone the wedding-guide planner-sequence answer');
}
if (/That page is the service\. This page is the menu\.'/.test(leftoverCatalogFaqSrc)) {
  errors.push('menu SKU FAQs still clone the service-vs-menu answer');
}

const LEFTOVER_JPEG_RE =
  /oahu-villa-lanai-plated-dinner-dusk\.jpg|oahu-gold-coast-estate-dinner\.jpg|maui-villa-terrace-cocktail-bar\.jpg|bartender-terrace-service\.jpg|maui-wedding-long-table-banyan-dusk\.jpg|wedding-tabletop-candles-ivory\.jpg|kauai-chef-plating-seared-fish-mountains\.jpg|kohala-grilled-whole-fish-lava-golden-hour\.jpg|maui-wailea-kitchen-plating\.jpg|upcountry-maui-mist-kitchen-produce\.jpg|vacation-chef-morning-breakfast-pool\.jpg|estate-catering-chef-team-lawn-dusk\.jpg|gatherings-garden-table-dusk\.jpg|live-fire-grill-lanai-fish\.jpg|hawaii-produce-fish-sourcing-still\.jpg|plated-fish-lanai-dusk\.jpg|villa-chef-assistant-kitchen\.jpg|villa-table-menu-card-detail\.jpg/;
const leftoverJpegDocs = [
  ...hoods,
  ...homes,
  ...catering,
  ...events,
  ...faq,
  ...coverage,
  ...how,
  ...menus,
  ...cells,
  ...services,
  ...occasions,
  ...formats,
  ...fine,
  ...staff,
  ...menuSkus,
  ...help,
  ...quoteDocs,
  ...pricingDocs,
  ...legalDocs,
  ...thanksDocs,
  ...journalDocs,
  ...blogDocs,
  ...locationDocs,
  ...areaDocs,
  ...contactDocs,
  ...trustDocs,
  ...serviceIndexDocs,
  ...helpIndexDocs,
  ...fineIndexDocs,
  ...staffIndexDocs,
  ...corporateDocs,
  ...gatheringsDocs,
  ...islandsIndexDocs,
  ...sitemapDocs,
  ...hubDirs,
  ...journalPieces,
  ...blogPieces,
];
for (const row of leftoverJpegDocs) {
  const file = files[row.photo] || '';
  if (LEFTOVER_JPEG_RE.test(file)) {
    const label = row.slug ? `/${row.slug}` : row.title;
    errors.push(`live document ${label} still uses leftover JPEG ${file}`);
  }
}

const homeTitleBlob = homes.map((h) => h.title).join('\n').toLowerCase();
const hoodTitleBlob = hoods.map((h) => h.title).join('\n').toLowerCase();
const cateringTitleBlob = catering.map((h) => h.title).join('\n').toLowerCase();
const residentSrc = read('data/residentLine.ts').toLowerCase();
if (!/private chef hawaii/.test(pageMetaSrc.toLowerCase())) {
  errors.push('hub home title no longer owns private chef hawaii');
}
if (!/hawaii catering/.test(pageMetaSrc.toLowerCase())) {
  errors.push('hub /catering title no longer owns hawaii catering');
}
if (!/wedding catering hawaii/.test(pageMetaSrc.toLowerCase())) {
  errors.push('hub /weddings title no longer owns wedding catering hawaii');
}
if (!/mobile bar hawaii/.test(pageMetaSrc.toLowerCase())) {
  errors.push('hub /mobile-bar title no longer owns mobile bar hawaii');
}
if (!homeTitleBlob.includes('private chef oahu')) errors.push('Oahu home title no longer owns private chef oahu');
if (!homeTitleBlob.includes('private chef maui')) errors.push('Maui home title no longer owns private chef maui');
if (!homeTitleBlob.includes('private chef kauai')) errors.push('Kauai home title no longer owns private chef kauai');
if (!homeTitleBlob.includes('private chef big island')) {
  errors.push('Hawaiʻi Island home title no longer owns private chef big island');
}
if (!cateringTitleBlob.includes('oahu catering')) errors.push('Oahu /catering title no longer owns oahu catering');
if (!cateringTitleBlob.includes('maui catering')) errors.push('Maui /catering title no longer owns maui catering');
if (!cateringTitleBlob.includes('kauai catering')) errors.push('Kauai /catering title no longer owns kauai catering');
if (!cateringTitleBlob.includes('big island catering')) {
  errors.push('Hawaiʻi Island /catering title no longer owns big island catering');
}
if (!hoodTitleBlob.includes('private chef honolulu')) {
  errors.push('/honolulu title no longer owns private chef honolulu');
}
if (!hoodTitleBlob.includes('private chef lahaina maui')) {
  errors.push('/lahaina title no longer owns private chef lahaina maui');
}
if (!hoodTitleBlob.includes('private chef kona')) errors.push('/kona title no longer owns private chef kona');
if (!hoodTitleBlob.includes('private chef poipu kauai')) {
  errors.push('/poipu title no longer owns private chef poipu kauai');
}
if (!hoodTitleBlob.includes('private chef north shore oahu')) {
  errors.push('/north-shore title no longer owns private chef north shore oahu');
}
if (!/personal chef honolulu/.test(residentSrc)) {
  errors.push('Oahu /personal-chef title no longer owns personal chef honolulu');
}
if (!/personal chef maui/.test(residentSrc)) {
  errors.push('Maui /personal-chef title no longer owns personal chef maui');
}
if (!/wedding catering oahu/.test(pageMetaSrc.toLowerCase())) {
  errors.push('Oahu /weddings title no longer owns wedding catering oahu');
}
if (!/wedding catering maui/.test(pageMetaSrc.toLowerCase())) {
  errors.push('Maui /weddings title no longer owns wedding catering maui');
}
const kauaiWeddingsTitle = pageMetaSrc.match(/'\/kauai\/weddings':\s*\{[^}]*title:\s*'([^']+)'/);
if (!kauaiWeddingsTitle || !/kauai wedding catering/i.test(kauaiWeddingsTitle[1])) {
  errors.push('Kauai /weddings title no longer owns kauai wedding catering');
}
const bigislandCateringTitle = pageMetaSrc.match(/'\/bigisland\/catering':\s*\{[^}]*title:\s*'([^']+)'/);
if (!bigislandCateringTitle || !/big island catering/i.test(bigislandCateringTitle[1])) {
  errors.push('pageMeta /bigisland/catering title no longer owns big island catering');
}
if (/title: 'Wedding catering Kauai \| myCHEF'/.test(pageMetaSrc)) {
  errors.push('Kauai /weddings title still uses reversed Wedding catering Kauai');
}
if (/Hawaiʻi Island catering — Kohala Coast/.test(pageMetaSrc)) {
  errors.push('pageMeta /bigisland/catering still drops big island catering');
}

const hoodTitleBlock = sliceExport(offersSrc, 'moneyNeighborhoods', 'export function getMoneyNeighborhood');
const homeTitleBlock = sliceExport(offersSrc, 'islandOffers', 'export const moneyNeighborhoods');
const cateringOfferBlock = cateringSrc.slice(
  cateringSrc.indexOf('export const cateringOffers'),
  cateringSrc.indexOf('export const HUB_CATERING'),
);
const residentLineSrc = read('data/residentLine.ts');
const keywordRows = [...read('data/seo/keywordMap.ts').matchAll(/host: '(\w+)', path: '([^']+)', keyword: '([^']+)'/g)];
if (keywordRows.length !== 22) {
  errors.push(`MASTER_KEYWORDS count drifted: ${keywordRows.length}`);
}
for (const [, host, path, keyword] of keywordRows) {
  let title = '';
  if (host === 'hub') {
    if (path === '/') {
      const def = pageMetaSrc.match(/const DEFAULT[\s\S]*?title:\s*'([^']+)'/);
      title = def ? def[1] : '';
    } else {
      title = pageMetaKeyTitle(pageMetaSrc, path);
    }
  } else if (path === '/') {
    title = islandRecordTitle(homeTitleBlock, host);
  } else if (path === '/catering') {
    title = islandRecordTitle(cateringOfferBlock, host);
  } else if (path === '/weddings') {
    title = pageMetaKeyTitle(pageMetaSrc, `/${host}${path}`);
  } else if (path === '/personal-chef') {
    title = islandRecordTitle(residentLineSrc, host);
  } else {
    title = neighborhoodTitle(hoodTitleBlock, host, path.slice(1));
  }
  if (!title) {
    errors.push(`MASTER_KEYWORDS ${host}${path} has no live title source for “${keyword}”`);
  } else if (!title.toLowerCase().includes(keyword.toLowerCase())) {
    errors.push(`MASTER_KEYWORDS ${host}${path} title “${title}” dropped “${keyword}”`);
  }
}

const seoSrc = read('lib/seo.ts');
if (!/cateringOffers\[islandId\]\.title/.test(seoSrc)) {
  errors.push('seo.ts still misses cateringOffers intercept for island /catering titles');
}
if (/\$\{locRec\.name\} private chef/.test(seoSrc)) {
  errors.push('location fallback titles still use private chef');
}
if (/title = catalog\.title/.test(seoSrc) || /else if \(catalog\)/.test(seoSrc)) {
  errors.push('seo.ts still falls back to cloned catalog titles');
}
if (/title = article\.title/.test(seoSrc) || /else if \(article\)/.test(seoSrc)) {
  errors.push('seo.ts still falls back to cloned editorial titles');
}
if (/from '@\/data\/editorial'/.test(seoSrc) || /import \{ getArticle \}/.test(seoSrc)) {
  errors.push('seo.ts still imports cloned editorial seeds');
}
if (/metaForPath\(path, islandId/.test(seoSrc)) {
  errors.push('seo.ts still uses hub DEFAULT titles on island hosts');
}
if (/Private chef \$\{area\.name\}/.test(seoSrc)) {
  errors.push('area fallback titles still use Private chef {area}');
}
if (/\/private-chef': photos\.chefMaui/.test(seoSrc) || /\/vacation-chef': photos\.vacationMaui/.test(seoSrc)) {
  errors.push('hub OG still steals Maui island stills for /private-chef or /vacation-chef');
}
if (!/\/private-chef': photos\.hubChef/.test(seoSrc) || !/\/vacation-chef': photos\.hubVacation/.test(seoSrc)) {
  errors.push('hub OG must use hubChef / hubVacation for /private-chef and /vacation-chef');
}

const placeViewSrc = read('components/views/LocationPlaceView.tsx');
const priceBlockSrc = read('components/PlacePriceBlock.tsx');
const uniqueViewSrc = read('components/views/IslandDocumentView.tsx');
const priceLabelSrc = `${placeViewSrc}\n${priceBlockSrc}\n${uniqueViewSrc}`;
if (/label: 'Mobile bar'/.test(priceLabelSrc)) {
  errors.push('corridor price cards still use the Mobile bar label');
}
if (/label: 'Private chef dinner'/.test(priceLabelSrc)) {
  errors.push('corridor price cards still use the Private chef dinner label');
}
if (!/PlacePriceBlock/.test(placeViewSrc)) {
  errors.push('corridor pages must reuse PlacePriceBlock');
}
if (!/LocationPlaceView[\s\S]{0,2500}'FoodService'/.test(placeViewSrc)) {
  errors.push('corridor pages still missing FoodService JSON-LD');
}
if (!/cell\.slug === 'personal-chef'/.test(uniqueViewSrc) || !/UniqueCellView[\s\S]*'FoodService'/.test(uniqueViewSrc)) {
  errors.push('personal-chef owners still missing FoodService JSON-LD');
}
if (!/isAreaDinnerDoor\(islandId, cell\.slug\)/.test(uniqueViewSrc) || !/PlacePriceBlock/.test(uniqueViewSrc)) {
  errors.push('supporting-area dinner doors must reuse PlacePriceBlock gated to AREA_CELLS');
}
const islandHomeSrc = read('components/views/IslandHomeView.tsx');
if (!/PlacePriceBlock/.test(islandHomeSrc)) {
  errors.push('island homes must publish PlacePriceBlock');
}
if (!/IslandHomeView[\s\S]{0,2000}'FoodService'/.test(islandHomeSrc)) {
  errors.push('island homes still missing owner FoodService JSON-LD');
}
const homeViewSrc = read('components/views/HomeView.tsx');
if (!/Private chef Hawaii — myCHEF/.test(homeViewSrc)) {
  errors.push('hub home still missing owner FoodService JSON-LD');
}
if (/path: '\/private-chef',\s*title: 'Private chef'/.test(islandHomeSrc)) {
  errors.push('island homes still label /private-chef as Private chef');
}
const svcIndexSrc = read('data/islandServiceIndex.ts');
if (/label: 'Private chef dinner'/.test(svcIndexSrc) || /label: '4-hour mobile bar'/.test(svcIndexSrc)) {
  errors.push('island /services still uses Private chef dinner or 4-hour mobile bar card labels');
}
const cateringViewSrc = read('components/views/CateringView.tsx');
if (/>Wedding catering</.test(cateringViewSrc) || />Wedding catering Hawaii</.test(cateringViewSrc)) {
  errors.push('catering rate cards still use Wedding catering labels');
}
if (!/Sample islandId=\{islandId\}/.test(cateringViewSrc)) {
  errors.push('island catering sample menu still shares the Hawaii catering kicker');
}
if (!/IslandCateringView[\s\S]{0,2500}'FoodService'/.test(cateringViewSrc)) {
  errors.push('island /catering still missing owner FoodService JSON-LD');
}
if (!/Oahu catering menu/.test(cateringViewSrc) || !/Maui catering menu/.test(cateringViewSrc)) {
  errors.push('island catering sample kickers dropped Oahu or Maui catering menu');
}
if (!/Kauai catering menu/.test(cateringViewSrc) || !/Big Island catering menu/.test(cateringViewSrc)) {
  errors.push('island catering sample kickers dropped Kauai or Big Island catering menu');
}
const weddingViewSrc = read('components/views/WeddingView.tsx');
if (/label: 'Mobile bar package'/.test(weddingViewSrc)) {
  errors.push('wedding related doors still use the Mobile bar package label');
}
if (!/IslandWeddingView[\s\S]{0,1200}'FoodService'/.test(weddingViewSrc)) {
  errors.push('island /weddings still missing owner FoodService JSON-LD');
}
const barViewSrc = read('components/views/BarView.tsx');
if (!/HubMobileBarView[\s\S]{0,1500}'FoodService'/.test(barViewSrc) || !/Mobile bar Hawaii — myCHEF/.test(barViewSrc)) {
  errors.push('hub /mobile-bar still missing owner FoodService JSON-LD');
}
if (!/IslandMobileBarView[\s\S]{0,2500}'FoodService'/.test(barViewSrc)) {
  errors.push('island /mobile-bar still missing FoodService JSON-LD');
}
const pricingViewSrc = read('components/views/PricingView.tsx');
if (/>Mobile bar</.test(pricingViewSrc)) {
  errors.push('pricing table still labels the cart Mobile bar');
}
if (/name: `Private chef dinner/.test(seoSrc) || /name: `Private chef —/.test(seoSrc)) {
  errors.push('JSON-LD offers still use Private chef dinner names');
}
if (/name: `Villa dinner[\s\S]{0,160}serviceType: 'Private chef'/.test(seoSrc)) {
  errors.push('JSON-LD Villa dinner offers still use serviceType Private chef');
}
if (/name: `Stay Chef[\s\S]{0,160}serviceType: 'Personal chef'/.test(seoSrc)) {
  errors.push('JSON-LD Stay Chef offers still use serviceType Personal chef');
}
if (/name: `Wedding week[\s\S]{0,160}serviceType: 'Catering'/.test(seoSrc)) {
  errors.push('JSON-LD Wedding week offers still use serviceType Catering');
}
if (!/function localBusinessJsonLd[\s\S]{0,500}serviceType: 'Private chef'/.test(seoSrc)) {
  errors.push('LocalBusiness JSON-LD must keep serviceType Private chef on identity pages');
}
if (/name: `Mobile bar/.test(seoSrc)) {
  errors.push('JSON-LD offers still use Mobile bar names');
}
if (/name: `Wedding catering/.test(seoSrc)) {
  errors.push('JSON-LD offers still use Wedding catering names');
}
if (/private chef and catering prices/.test(seoSrc)) {
  errors.push('JSON-LD OfferCatalog still titles itself private chef and catering prices');
}
if (!/ISLAND_RATE_JSONLD/.test(seoSrc) || !/HUB_RATE_JSONLD/.test(seoSrc)) {
  errors.push('JSON-LD OfferCatalog must use the rate-page allow lists');
}
if (/ISLAND_RATE_JSONLD[\s\S]{0,400}'\/events'/.test(seoSrc) || /ISLAND_RATE_JSONLD[\s\S]{0,400}'\/menus'/.test(seoSrc)) {
  errors.push('JSON-LD OfferCatalog still sprays onto /events or /menus');
}
if (/HUB_RATE_JSONLD[\s\S]{0,250}'\/corporate'/.test(seoSrc) || /HUB_RATE_JSONLD[\s\S]{0,250}'\/gatherings'/.test(seoSrc)) {
  errors.push('JSON-LD OfferCatalog still sprays onto hub /corporate or /gatherings');
}
if (/ISLAND_RATE_JSONLD[\s\S]{0,400}'\/bar'/.test(seoSrc) || /HUB_RATE_JSONLD[\s\S]{0,250}'\/bar'/.test(seoSrc)) {
  errors.push('JSON-LD OfferCatalog still treats /bar as the packaged-cart product');
}
if (!/LOCAL_BUSINESS_JSONLD/.test(seoSrc)) {
  errors.push('LocalBusiness JSON-LD must use an identity-page allow list');
}
if (/jsonLd\.push\(localBusinessJsonLd/.test(seoSrc) && !/LOCAL_BUSINESS_JSONLD\.has\(localPath\)/.test(seoSrc)) {
  errors.push('LocalBusiness JSON-LD still stamps every unique URL');
}
if (/ISLAND_RATE_JSONLD[\s\S]{0,400}'\/wedding-catering'/.test(seoSrc)) {
  errors.push('JSON-LD OfferCatalog still treats /wedding-catering as a live product URL');
}
if (!/segs\[0\] === 'wedding-catering'/.test(middlewareSrc) || !/pathname = '\/weddings'/.test(middlewareSrc)) {
  errors.push('/wedding-catering must 301 to /weddings');
}
if (existsSync(join(ROOT, 'app/[island]/wedding-catering/page.tsx'))) {
  errors.push('/wedding-catering still ships as a live island page');
}
const stillSrc = read('lib/documentStill.ts');
if (/localPath === '\/wedding-catering'/.test(stillSrc)) {
  errors.push('documentStill still treats /wedding-catering as a live still path');
}
if (
  /'\/oahu\/wedding-catering'/.test(pageMetaSrc) ||
  /'\/maui\/wedding-catering'/.test(pageMetaSrc) ||
  /'\/kauai\/wedding-catering'/.test(pageMetaSrc) ||
  /'\/bigisland\/wedding-catering'/.test(pageMetaSrc)
) {
  errors.push('pageMeta still titles the /wedding-catering alias');
}

const hubStealSrc = [
  'components/views/OfferViews.tsx',
  'components/views/HomeView.tsx',
  'components/views/SupportViews.tsx',
  'components/views/BarView.tsx',
  'app/personal-chef/page.tsx',
]
  .map(read)
  .join('\n');
if (/img: photos\.chefMaui/.test(hubStealSrc) || /img: photos\.vacationMaui/.test(hubStealSrc)) {
  errors.push('hub /private-chef or /vacation-chef hero still uses a Maui island still');
}
if (/src=\{photos\.chefMaui\.file\}/.test(hubStealSrc)) {
  errors.push('hub home private-chef card still uses the Maui island still');
}
if (/still: photos\.chefMaui/.test(hubStealSrc) || /still: photos\.vacationMaui/.test(hubStealSrc)) {
  errors.push('hub related doors still steal Maui island stills for /private-chef or /vacation-chef');
}

const chromeSrc = read('data/chromeCopy.ts');
if (/Daily chef service for your villa stay/.test(chromeSrc)) {
  errors.push('hub home private-chef card still sells Stay Chef as daily chef service');
}
if (/chefPrice: 'From \$850 a day/.test(chromeSrc)) {
  errors.push('hub home private-chef card still prints Stay Chef day rates');
}
if (/One dinner or a staffed event/.test(chromeSrc)) {
  errors.push('hub home catering card still sells a one-table dinner');
}
if (/cateringPrice: 'Signature dinner from/.test(chromeSrc)) {
  errors.push('hub home catering card still prints Signature dinner on the staffed-event door');
}
if (/private chef stays/.test(chromeSrc)) {
  errors.push('Maui island chooser still sells Stay Chef as private chef stays');
}
if (/Oʻahu catering/.test(chromeSrc) || /Maui catering/.test(chromeSrc) || /Kauaʻi catering/.test(chromeSrc)) {
  errors.push('island chooser lines still use catering money keywords');
}

const supportViewsSrc = read('components/views/SupportViews.tsx');
if (/articlesFor/.test(supportViewsSrc) || /from '@\/data\/editorial'/.test(supportViewsSrc)) {
  errors.push('hub journal/blog picker still counts cloned editorial seeds');
}
if (/href: '\/private-chef',\s*title: 'Private chef'/.test(supportViewsSrc)) {
  errors.push('hub /services still labels /private-chef as Private chef');
}
if (/Private chef dinners from \$125 a guest, Stay Chef day rates, wedding catering/.test(supportViewsSrc)) {
  errors.push('hub /services hero still uses Private chef dinners / wedding catering');
}

const headerSrc = read('components/SiteHeader.tsx');
if (/path="\/private-chef"[\s\S]{0,240}Private chef/.test(headerSrc)) {
  errors.push('site header still sends Private chef to /private-chef');
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
  'hubChef',
  'hubVacation',
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
