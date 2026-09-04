#!/usr/bin/env node
/**
 * DataForSEO v3 client for myCHEF Hawaii keyword verification.
 *
 *   node scripts/dataforseo.mjs ping
 *   node scripts/dataforseo.mjs volumes
 *   node scripts/dataforseo.mjs related
 *   node scripts/dataforseo.mjs snapshot
 *
 * Reads DATAFORSEO_LOGIN / DATAFORSEO_PASSWORD from .env.local.
 * Never logs the password. Never import this into the Next.js client bundle.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const BASE = 'https://api.dataforseo.com/v3';
const US = 2840;
const EN = 'en';

function loadEnv() {
  const envPath = join(ROOT, '.env.local');
  const parsed = {};
  try {
    const raw = readFileSync(envPath, 'utf8');
    for (const line of raw.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eq = trimmed.indexOf('=');
      if (eq < 1) continue;
      parsed[trimmed.slice(0, eq)] = trimmed.slice(eq + 1);
    }
  } catch {
    /* fall through to process.env */
  }
  const login = process.env.DATAFORSEO_LOGIN || parsed.DATAFORSEO_LOGIN;
  const password = process.env.DATAFORSEO_PASSWORD || parsed.DATAFORSEO_PASSWORD;
  if (!login || !password) {
    throw new Error('Missing DATAFORSEO_LOGIN / DATAFORSEO_PASSWORD in .env.local');
  }
  return { login, password };
}

function authHeader() {
  const { login, password } = loadEnv();
  return `Basic ${Buffer.from(`${login}:${password}`).toString('base64')}`;
}

export async function dfs(method, path, body) {
  const url = `${BASE}${path}`;
  const headers = {
    Authorization: authHeader(),
    Accept: 'application/json',
  };
  const init = { method, headers };
  if (body !== undefined) {
    headers['Content-Type'] = 'application/json';
    init.body = JSON.stringify(body);
  }
  const res = await fetch(url, init);
  const json = await res.json();
  if (!res.ok || json.status_code >= 40000) {
    const msg = json.status_message || json.error || res.statusText;
    throw new Error(`DataForSEO ${path} failed (${json.status_code || res.status}): ${msg}`);
  }
  return json;
}

export async function ping() {
  return dfs('GET', '/appendix/user_data');
}

export async function searchVolume(keywords, { locationCode = US, languageCode = EN } = {}) {
  return dfs('POST', '/keywords_data/google_ads/search_volume/live', [
    {
      keywords,
      location_code: locationCode,
      language_code: languageCode,
      sort_by: 'search_volume',
    },
  ]);
}

export async function keywordsForKeywords(keywords, { locationCode = US, languageCode = EN } = {}) {
  return dfs('POST', '/keywords_data/google_ads/keywords_for_keywords/live', [
    {
      keywords,
      location_code: locationCode,
      language_code: languageCode,
      sort_by: 'search_volume',
      include_seed_keyword: true,
    },
  ]);
}

export async function relatedKeywords(keyword, { locationCode = US, languageCode = EN, depth = 2 } = {}) {
  return dfs('POST', '/dataforseo_labs/google/related_keywords/live', [
    {
      keyword,
      location_code: locationCode,
      language_code: languageCode,
      depth,
      include_seed_keyword: true,
      limit: 50,
    },
  ]);
}

export async function organicSerp(keyword, { locationCode = US, languageCode = EN, depth = 10 } = {}) {
  return dfs('POST', '/serp/google/organic/live/regular', [
    {
      keyword,
      location_code: locationCode,
      language_code: languageCode,
      depth,
    },
  ]);
}

/** Money keywords already mapped on the site, plus location/service variants we sell. */
export const MONEY_KEYWORDS = [
  'private chef hawaii',
  'private chef oahu',
  'private chef honolulu',
  'private chef maui',
  'private chef kauai',
  'private chef big island',
  'private chef kona',
  'personal chef oahu',
  'personal chef honolulu',
  'personal chef maui',
  'oahu catering',
  'maui catering',
  'kauai catering',
  'hawaii catering',
  'big island catering',
  'wedding catering hawaii',
  'wedding catering oahu',
  'wedding catering maui',
  'wedding catering kauai',
  'private chef wailea',
  'private chef wailea maui',
  'private chef kaanapali',
  'private chef lahaina maui',
  'private chef kihei maui',
  'private chef kapalua',
  'private chef kahala',
  'private chef ko olina',
  'private chef kailua',
  'private chef north shore oahu',
  'private chef waikiki',
  'private chef princeville',
  'private chef poipu kauai',
  'private chef hanalei',
  'private chef waikoloa',
  'vacation chef hawaii',
  'vacation chef maui',
  'mobile bar hawaii',
  'private chef maui cost',
  'best private chef maui',
  'kauai wedding catering',
];

export const SEED_KEYWORDS = [
  'private chef hawaii',
  'private chef maui',
  'private chef oahu',
  'private chef kauai',
  'oahu catering',
  'maui catering',
  'wedding catering hawaii',
];

function compactVolumeRow(row) {
  if (!row) return null;
  return {
    keyword: row.keyword,
    search_volume: row.search_volume,
    competition: row.competition,
    competition_index: row.competition_index,
    cpc: row.cpc,
    monthly_searches: (row.monthly_searches || []).slice(-3),
  };
}

function printUser(data) {
  const user = data.tasks?.[0]?.result?.[0] || {};
  const money = user.money || user.finance || {};
  console.log(
    JSON.stringify(
      {
        login: user.login,
        timezone: user.timezone,
        money: {
          balance: money.balance ?? money.value,
          currency: money.currency,
        },
        rate_limits_present: Boolean(user.rates),
      },
      null,
      2,
    ),
  );
}

async function cmdPing() {
  const data = await ping();
  printUser(data);
}

async function cmdVolumes() {
  const data = await searchVolume(MONEY_KEYWORDS);
  const rows = (data.tasks?.[0]?.result || []).map(compactVolumeRow);
  rows.sort((a, b) => (b.search_volume || 0) - (a.search_volume || 0));
  console.log(
    JSON.stringify(
      {
        cost: data.cost,
        location_code: US,
        language_code: EN,
        count: rows.length,
        keywords: rows,
      },
      null,
      2,
    ),
  );
}

async function cmdRelated() {
  const out = {};
  for (const seed of SEED_KEYWORDS) {
    const data = await relatedKeywords(seed);
    const items = data.tasks?.[0]?.result?.[0]?.items || [];
    out[seed] = items.slice(0, 12).map((item) => ({
      keyword: item.keyword_data?.keyword || item.keyword,
      search_volume: item.keyword_data?.keyword_info?.search_volume ?? null,
    }));
  }
  console.log(JSON.stringify(out, null, 2));
}

async function cmdSnapshot() {
  const [volRes, ...relatedRes] = await Promise.all([
    searchVolume(MONEY_KEYWORDS),
    ...SEED_KEYWORDS.map((seed) => relatedKeywords(seed).then((data) => ({ seed, data }))),
  ]);

  const volumes = {};
  for (const row of volRes.tasks?.[0]?.result || []) {
    if (row?.keyword) volumes[row.keyword] = compactVolumeRow(row);
  }

  const related = {};
  for (const { seed, data } of relatedRes) {
    const items = data.tasks?.[0]?.result?.[0]?.items || [];
    related[seed] = items.slice(0, 10).map((item) => item.keyword_data?.keyword || item.keyword).filter(Boolean);
  }

  const snapshot = {
    source: 'DataForSEO Google Ads + Labs related_keywords',
    pulled_at: new Date().toISOString().slice(0, 10),
    location: 'United States',
    location_code: US,
    language_code: EN,
    cost: volRes.cost,
    volumes,
    related,
  };

  const dir = join(ROOT, 'data', 'seo');
  mkdirSync(dir, { recursive: true });
  const file = join(dir, 'dataforseo-snapshot.json');
  writeFileSync(file, `${JSON.stringify(snapshot, null, 2)}\n`);
  console.log(`Wrote ${file}`);
  console.log(
    JSON.stringify(
      {
        cost: volRes.cost,
        keywords: Object.keys(volumes).length,
        seeds: Object.keys(related).length,
      },
      null,
      2,
    ),
  );
}

const cmd = process.argv[2] || 'ping';
const commands = {
  ping: cmdPing,
  volumes: cmdVolumes,
  related: cmdRelated,
  snapshot: cmdSnapshot,
};

if (!commands[cmd]) {
  console.error(`Unknown command "${cmd}". Use: ping | volumes | related | snapshot`);
  process.exit(1);
}

commands[cmd]().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
