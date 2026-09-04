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
const middlewareSrc = read('middleware.ts');
const files = photoFiles(photosSrc);
const hoods = neighborhoods(offersSrc);
const homes = islandOfferMeta(offersSrc);
const catering = cateringMeta(cateringSrc);
const events = cateringMeta(eventsSrc);

const errors = [];

if (hoods.length < 20) errors.push(`Expected ≥20 money neighborhoods, found ${hoods.length}`);
if (homes.length !== 4) errors.push(`Expected 4 island homes, found ${homes.length}`);
if (events.length !== 4) errors.push(`Expected 4 event offers, found ${events.length}`);

errors.push(...dupes(hoods.map((h) => h.title), 'neighborhood title'));
errors.push(...dupes(hoods.map((h) => h.h1), 'neighborhood H1'));
errors.push(...dupes(hoods.map((h) => files[h.photo] || h.photo), 'neighborhood hero file'));
errors.push(...dupes(homes.map((h) => h.title), 'island home title'));
errors.push(...dupes(catering.map((h) => h.title), 'catering title'));
errors.push(...dupes(catering.map((h) => files[h.photo] || h.photo), 'catering hero file'));
errors.push(...dupes(events.map((h) => h.title), 'events title'));
errors.push(...dupes(events.map((h) => h.h1), 'events H1'));
errors.push(...dupes(events.map((h) => files[h.photo] || h.photo), 'events hero file'));

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
for (const island of ISLANDS) {
  const a = [...(mw[island] || [])].sort().join(',');
  const b = [...(slugs[island] || [])].sort().join(',');
  if (a !== b) errors.push(`middleware CORRIDORS.${island} !== moneyNeighborhoods (${a} vs ${b})`);
}

if (errors.length) {
  console.error(`seo:audit failed (${errors.length})\n${errors.map((e) => ` - ${e}`).join('\n')}`);
  process.exit(1);
}

console.log(
  `seo:audit ok — ${hoods.length} corridors, ${homes.length} homes, ${catering.length} catering, ${events.length} events.`,
);
