import type { IslandId } from './islands';
import { islands } from './islands';
import { ISLAND_COMMERCIAL_PATHS } from './commercialGraph';
import { zoneMap } from './zoneMap';

export type CatalogKind =
  | 'service'
  | 'event'
  | 'catering'
  | 'fine-dining'
  | 'help'
  | 'staffing'
  | 'menu';

export interface CatalogEntry {
  path: string;
  kind: CatalogKind;
  title: string;
  h1: string;
  lede: string;
  body: string[];
}

const SERVICE_PATHS: { path: string; label: string; lede: (n: string) => string }[] = [
  { path: '/private-chef-cost', label: 'Private chef cost', lede: (n) => `Published starting prices for ${n} — dinner bands, villa day rate and fee stack. Quote confirmed in writing.` },
  { path: '/personal-chef', label: 'Personal chef / kamaʻāina line', lede: (n) => `Weekly household service on ${n}. Resident line — not a tourist one-off.` },
  { path: '/meal-prep', label: 'Meal prep', lede: (n) => `Volume meal prep on ${n} is gated until utilization is proven. Inquiry only.` },
  { path: '/cooking-classes', label: 'Cooking classes', lede: (n) => `Experience product on ${n} publishes only with a real instructor bench — otherwise it stays a page that says so.` },
  { path: '/omakase-at-home', label: 'Omakase at home', lede: (n) => `Premium tasting at home on ${n}. Menu/IP and sourcing verification are launch gates.` },
  { path: '/chefs-table', label: "Chef's table", lede: (n) => `Private chef's table in your ${n} villa — not a resort communal table.` },
  { path: '/honeymoon-dinners', label: 'Honeymoon dinners', lede: (n) => `Dinner-for-two on ${n}. Published starting price; quote confirmed in writing.` },
  { path: '/rehearsal-dinners', label: 'Rehearsal dinners', lede: (n) => `Wedding-week SKU on ${n}: rehearsal, welcome, day-after as separate lines.` },
  { path: '/retreat-catering', label: 'Retreat catering', lede: (n) => `Full-board retreat days on ${n}. Dietary capability is table stakes, claimed only when true.` },
  { path: '/corporate-catering', label: 'Corporate catering', lede: (n) => `Offsites and executive dinners on ${n}. Not HCC citywides (closed through 2027).` },
  { path: '/faq', label: 'FAQ', lede: (n) => `Island questions for ${n}. Statewide policy lives on the hub.` },
  { path: '/menus', label: 'Menus', lede: (n) => `Menus on ${n} are designed per table. This page explains the process, not a fake standing carte.` },
  { path: '/kids-menus', label: 'Kids at the table', lede: (n) => `Children’s plates on ${n} are planned with the adults’ menu, not an afterthought.` },
  { path: '/dietary', label: 'Dietary', lede: (n) => `Vegan, gluten-free, allergy-aware — designed in advance on ${n}.` },
  { path: '/how-it-works', label: 'How it works', lede: (n) => `Same network process. ${n} changes the drive times, which we publish.` },
  { path: '/pricing', label: 'Pricing', lede: (n) => `${n} starting prices from the canonical rate card — dinner, day rate, bar, wedding.` },
  { path: '/catering', label: 'Catering', lede: (n) => `Staffed catering on ${n}. Drop-off is a different product. Guest counts we staff are published.` },
  { path: '/events', label: 'Events', lede: (n) => `Estate and villa events on ${n}. Receptions about 10–75; larger formats are quoted.` },
  { path: '/about', label: 'About this island department', lede: (n) => `myCHEF ${n} is a department of the Hawaii network — own chefs, zones and inquiry vs live posture.` },
  { path: '/coverage', label: 'Coverage map', lede: (n) => `Where we cook on ${n}. Published zones, not statewide fiction.` },
  { path: '/guest-counts', label: 'Guest counts we staff', lede: (n) => `Dinners 2–15, receptions about 10–75 on ${n}. Larger formats are quoted, not promised.` },
  { path: '/what-we-dont-do', label: 'What we will not claim', lede: (n) => `No fake reviews, no invented licenses, no “now serving ${n}” language ahead of a staffed team.` },
];

const EVENT_SLUGS = ['weddings', 'birthdays', 'anniversaries', 'corporate-events', 'retreats', 'villa-parties', 'welcome-dinners', 'brunch'];
const CATERING_SLUGS = ['bbq', 'plated', 'family-style', 'buffet', 'grazing', 'drop-off'];
const FINE_SLUGS = ['romantic-dinner', 'tasting-menu', 'chefs-table-evening', 'celebration-dinner'];
const HELP_SLUGS = ['getting-started', 'menu-guide', 'wedding-guide', 'corporate-guide', 'managing-booking'];
const STAFF_SLUGS = ['servers', 'bartenders', 'butlers'];
const MENU_SLUGS = ['three-course', 'family-style-menu', 'breakfast', 'lunch'];

function entry(island: IslandId, path: string, kind: CatalogKind, label: string, extra: string): CatalogEntry {
  const n = islands[island].name;
  const z = zoneMap[island];
  return {
    path,
    kind,
    title: `${label} | Private chef & catering — myCHEF ${n}`,
    h1: label,
    lede: extra,
    body: [
      `${label} on ${n} is its own commercial cell — not a find-and-replace of a sibling island. ${islands[island].role}`,
      `${z.headline} ${z.honestyLine}`,
      `${n} is booking now. WhatsApp or the quote form — typical reply in Hawaii business hours. Travel fees are published.`,
      'Hawaiʻi guest reviews: none yet. We do not invent guest reviews or chef names.',
      `Starting prices for private chef dinners, catering and the villa day rate are published on /pricing. Quote confirmed in writing.`,
    ],
  };
}

const UNIQUE: Record<IslandId, { path: string; label: string; lede: string }[]> = {
  oahu: [
    { path: '/kamaaina', label: 'Kamaʻāina household line', lede: 'Frequency, not yield — weekly service for Oʻahu residents. Not a tourist SKU.' },
    { path: '/conventions', label: 'Conventions and HCC', lede: 'Hawaiʻi Convention Center citywides are closed through 2027. This department is not a MICE play.' },
    { path: '/gold-coast', label: 'Gold Coast estates', lede: 'Kahala and Diamond Head residences with real dining rooms — base zone.' },
    { path: '/short-stay', label: 'Legal short-stay villas', lede: 'Ko Olina holds the deepest legal short-stay villa pool on Oʻahu. We say so because the law does.' },
  ],
  maui: [
    { path: '/lahaina', label: 'Lahaina, named honestly', lede: 'West Maui is Kāʻanapali, Nāpili, Kapalua. We do not market this department as Lahaina luxury dining.' },
    { path: '/south-maui', label: 'South Maui corridor', lede: 'Wailea, Makena, Kīhei — three cells, three logistics stories, one South Maui team.' },
    { path: '/west-maui', label: 'West Maui corridor', lede: 'Kāʻanapali to Kapalua. Traffic is planned into arrival, not discovered on the invoice.' },
    { path: '/wedding-week', label: 'Maui wedding week', lede: 'Primary wedding island. Welcome, rehearsal, reception, recovery brunch as separate lines.' },
  ],
  kauai: [
    { path: '/hanalei-bridge', label: 'Hanalei bridge clause', lede: 'Far-North events inherit the weather/road clause. 72-hour notice. Reschedule rather than forfeit.' },
    { path: '/north-shore', label: 'Kauaʻi North Shore', lede: 'Princeville, Hanalei, Hāʻena. Surf-season winters book early. Private chef Kauai from $150/pp.' },
    { path: '/south-shore', label: 'Kauaʻi South Shore', lede: 'Poʻipū and Kōloa. Shorter drive from Līhuʻe than the North. Same Maui-class starting prices.' },
    { path: '/wedding-week', label: 'Kauaʻi wedding week', lede: 'Estate formats to about 75 guests. Welcome, rehearsal, reception as separate lines. Book now.' },
  ],
  bigisland: [
    { path: '/kohala-corridor', label: 'Kona–Kohala corridor', lede: 'Seven resort communities inside a 30-minute west-side radius. The island is 4,000 square miles; we will not pretend to cover it.' },
    { path: '/coffee-act-198', label: 'Coffee origin labeling', lede: 'Named Kaʻū and Kona coffee follow Act 198 from 2027. We do not invent farm names.' },
    { path: '/ironman-weeks', label: 'Ironman weeks', lede: 'Event weeks in Kailua-Kona compress availability. We publish that instead of overselling.' },
    { path: '/east-side', label: 'Hilo and Volcano', lede: '2.5–3 hours from Kona. Quote-only. Dedicated staffing — never a same-day west-side round trip.' },
  ],
};

export function catalogFor(island: IslandId): CatalogEntry[] {
  const n = islands[island].name;
  const out: CatalogEntry[] = SERVICE_PATHS.map((s) => entry(island, s.path, 'service', s.label, s.lede(n)));
  EVENT_SLUGS.forEach((s) =>
    out.push(entry(island, `/events/${s}`, 'event', s.replace(/-/g, ' '), `${s.replace(/-/g, ' ')} on ${n}. Occasion cell, not a cloned wedding page.`)),
  );
  CATERING_SLUGS.forEach((s) =>
    out.push(
      entry(
        island,
        `/catering/${s}`,
        'catering',
        `${s.replace(/-/g, ' ')} catering`,
        `${s.replace(/-/g, ' ')} as a format on ${n}. Drop-off is a different product from staffed service.`,
      ),
    ),
  );
  FINE_SLUGS.forEach((s) =>
    out.push(
      entry(
        island,
        `/fine-dining/${s}`,
        'fine-dining',
        s.replace(/-/g, ' '),
        `Fine-dining format on ${n}. Halo products stay labeled as posture, not as a Michelin claim we do not make.`,
      ),
    ),
  );
  HELP_SLUGS.forEach((s) =>
    out.push(entry(island, `/help/${s}`, 'help', s.replace(/-/g, ' '), `Help article for ${n} guests and planners.`)),
  );
  STAFF_SLUGS.forEach((s) =>
    out.push(
      entry(island, `/staffing/${s}`, 'staffing', s, `${s} add-ons on ${n} are quoted as hourly or per-event lines — never buried in a menu price.`),
    ),
  );
  MENU_SLUGS.forEach((s) =>
    out.push(entry(island, `/menus/${s}`, 'menu', s.replace(/-/g, ' '), `${s.replace(/-/g, ' ')} on ${n} is designed per table.`)),
  );
  UNIQUE[island].forEach((u) => out.push(entry(island, u.path, 'service', u.label, u.lede)));
  return out;
}

export function getCatalog(island: IslandId, path: string): CatalogEntry | undefined {
  const clean = path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
  return catalogFor(island).find((c) => c.path === clean);
}

/** Advertised indexable paths on one island host. Commercial cells only. */
export function allIslandPaths(_island: IslandId): string[] {
  return [...ISLAND_COMMERCIAL_PATHS];
}

export function islandPageCount(island: IslandId): number {
  return allIslandPaths(island).length;
}
