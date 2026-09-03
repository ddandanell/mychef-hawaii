import type { IslandId } from './islands';
import { islands } from './islands';
import { areasFor } from './areas';
import { zoneMap } from './zoneMap';
import { formatBand, getTiers } from './rateCard';

export interface Article {
  kind: 'journal' | 'blog';
  slug: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  sections: { heading: string; body: string }[];
}

function coreBand(id: IslandId): string {
  const t = getTiers(id).find((x) => x.tier === 'CORE');
  return t ? `${formatBand(t)}/person` : 'indicative band';
}

function journalSeeds(id: IslandId): Omit<Article, 'kind'>[] {
  const isl = islands[id];
  const z = zoneMap[id];
  const band = coreBand(id);
  const areaNames = areasFor(id)
    .slice(0, 5)
    .map((a) => a.name)
    .join(', ');
  const inquiry =
    isl.state === 'inquiry'
      ? ` ${isl.name} is inquiry-stage — dated inquiries, not a booking button, until a staffed team exists.`
      : '';
  const live = isl.state === 'live' ? ' Booking now on this island.' : '';

  return [
    {
      slug: 'how-much-does-a-private-chef-cost',
      title: `How much does a private chef cost on ${isl.name}?`,
      description: `Published private chef prices on ${isl.name} — dinner bands, villa day rate and catering starting prices.`,
      h1: `What a private chef costs on ${isl.name}.`,
      lede: `Published CORE band ${band}. Your written quote is itemised. We do not hide travel in the menu price.${inquiry}`,
      sections: [
        { heading: 'The published band', body: `CORE on ${isl.name} sits at ${band}. ENTRY, PREMIUM and the villa day rate live on /private-chef-cost and /pricing. Quotes are confirmed in writing.` },
        { heading: 'What is included', body: 'Menu design, shopping, cooking, table service, cleanup. Alcohol, rentals and venue fees are always separate lines.' },
        { heading: 'Zones', body: `${z.headline} ${z.honestyLine}` },
      ],
    },
    {
      slug: 'how-to-hire-a-private-chef',
      title: `How to hire a private chef on ${isl.name}`,
      description: `Five-field quote, island logistics, and what happens after you enquire on ${isl.name}.`,
      h1: `Hiring a chef on ${isl.name}, without a mystery invoice.`,
      lede: `Tell us the area, the date, the headcount and the service. We reply in HST. ${isl.role}${live}${inquiry}`,
      sections: [
        { heading: 'The form', body: 'Island, date or flexible, party bucket, service, one contact channel. No account.' },
        { heading: 'Where we cook', body: `Coverage on ${isl.name}: ${areaNames}. Quote-only and surcharge zones are published, not discovered on the night.` },
      ],
    },
    {
      slug: 'villa-kitchens',
      title: `Villa kitchens on ${isl.name} — what we actually cook with`,
      description: `Condo galleys vs estate kitchens on ${isl.name}. We design the menu around the room.`,
      h1: `The kitchen is the constraint. We say so.`,
      lede: `On ${isl.name} we cook in the room you have — galley, condo, estate. If it cannot support the menu, that is on the quote, not the night.`,
      sections: [
        { heading: 'Bring-equipment menus', body: 'Freight elevators, load-in and COIs are handled in advance on towers. Estates are a different kit.' },
        { heading: 'Honesty', body: 'We decline rooms without a functioning kitchen rather than impersonate room service.' },
      ],
    },
    {
      slug: 'wedding-week',
      title: `Wedding-week catering on ${isl.name}`,
      description: `Welcome dinner to recovery brunch. ${isl.name} venues and guest-count honesty.`,
      h1: `One team for the week on ${isl.name}.`,
      lede: `Welcome, rehearsal, reception, recovery brunch. Guest counts we staff: dinners 2–15, receptions about 10–75.${inquiry}`,
      sections: [
        { heading: 'What a week is', body: 'One wedding client is several revenue events if we are honest about the stack. We quote them as lines, not a blur.' },
        { heading: 'Venues', body: `On ${isl.name} we serve the areas we publish — ${areaNames} — and we do not invent partnerships.` },
      ],
    },
    {
      slug: 'dietary-needs',
      title: `Dietary needs and allergies — private chef on ${isl.name}`,
      description: `Vegan, gluten-free and allergy-aware courses planned in advance on ${isl.name}.`,
      h1: `Allergies are a menu, not an improvisation.`,
      lede: `Tell us in the quote form. The proposal reflects it. We do not invent a “we can do anything” claim.`,
      sections: [
        { heading: 'When we know', body: 'Courses are designed ahead. Cross-contact limits are stated if the kitchen cannot support them.' },
      ],
    },
    {
      slug: 'what-is-included',
      title: `What’s included with a private chef on ${isl.name}`,
      description: `Menu, shop, cook, serve, clean. Exclusions listed. ${isl.name}.`,
      h1: `Included. Excluded. Written.`,
      lede: `Shopping, cooking, service, cleanup are in. Alcohol, rentals, venue fees are out — always their own lines on ${isl.name} quotes.`,
      sections: [{ heading: 'Service charge and tax', body: 'GET and service-charge display carry REQUIRES PROFESSIONAL REVIEW labels until counsel and a CPA sign off.' }],
    },
    {
      slug: 'travel-zones',
      title: `Travel zones on ${isl.name}`,
      description: z.honestyLine,
      h1: z.headline,
      lede: `${z.honestyLine} Areas: ${areaNames}.`,
      sections: z.zones.map((zone) => ({ heading: zone.name, body: `${zone.note}${zone.driveTime ? ` Drive: ${zone.driveTime}.` : ''}` })),
    },
    {
      slug: 'vacation-chef-week',
      title: `Vacation chef weeks on ${isl.name}`,
      description: `Multi-day chef service for villa stays on ${isl.name}.`,
      h1: `A chef for the stay, not a single dinner dropped in.`,
      lede: `Provisioning, full-board days, one team. ${isl.role}${inquiry}`,
      sections: [{ heading: 'Packages', body: '3 / 5 / 7-day vacation-chef postures are published starting prices. Groceries at cost.' }],
    },
    {
      slug: 'how-far-ahead-to-book',
      title: `How far ahead to book a private chef on ${isl.name}`,
      description: `Peak months and notice windows on ${isl.name}.`,
      h1: `Peaks book early. We would rather say that now.`,
      lede: `December–March and wedding peaks (September, October, May) move first on live islands. Far-zone events carry published notice windows.${inquiry}`,
      sections: [{ heading: 'Notice', body: 'Far-North Kauaʻi is 72 hours. East-side Hawaiʻi Island is a dedicated day, not a same-day Kona–Hilo fantasy.' }],
    },
    {
      slug: 'private-chef-vs-restaurant',
      title: `Private chef vs a restaurant reservation on ${isl.name}`,
      description: `In-villa service compared with going out — ${isl.name}.`,
      h1: `The table is yours. The kitchen is borrowed.`,
      lede: `A restaurant reservation is a different product. We cook in your villa on ${isl.name}, then leave it cleaner than we found it.`,
      sections: [{ heading: 'When a restaurant is better', body: 'If you want a room you do not have, book a restaurant. If you want the evening in the house, enquire here.' }],
    },
  ];
}

const extraBlogSlugs: { slug: string; topic: string }[] = [
  { slug: 'proposal-dinners', topic: 'proposal dinners' },
  { slug: 'anniversary-dinners', topic: 'anniversary dinners' },
  { slug: 'family-reunions', topic: 'family reunions' },
  { slug: 'kids-at-the-table', topic: 'kids at the table' },
  { slug: 'breakfast-in-the-villa', topic: 'villa breakfast' },
  { slug: 'lunch-service', topic: 'in-villa lunch' },
  { slug: 'grocery-at-cost', topic: 'groceries billed at cost' },
  { slug: 'cleanup-standard', topic: 'the cleanup standard' },
  { slug: 'wine-and-alcohol', topic: 'wine, beer and spirits — always a separate line' },
  { slug: 'weather-backup', topic: 'wet-weather backups for outdoor tables' },
  { slug: 'peak-season', topic: 'peak-season honesty' },
  { slug: 'shoulder-season', topic: 'shoulder-season dates' },
  { slug: 'condo-load-in', topic: 'condo load-in and quiet hours' },
  { slug: 'estate-logistics', topic: 'estate logistics' },
  { slug: 'staffing-servers', topic: 'when we add servers' },
  { slug: 'bartender-add-on', topic: 'bartender add-ons, quoted separately' },
  { slug: 'welcome-dinner', topic: 'arrival-night welcome dinners' },
  { slug: 'day-after-brunch', topic: 'day-after brunch' },
  { slug: 'rehearsal-dinner', topic: 'rehearsal dinners' },
  { slug: 'corporate-offsites', topic: 'corporate offsites — not HCC citywides' },
  { slug: 'retreat-full-board', topic: 'retreat full-board days' },
  { slug: 'photoshoot-catering', topic: 'production and crew meals' },
  { slug: 'sourcing-honesty', topic: 'sourcing honesty — Hawaiʻi still imports most of its food' },
  { slug: 'named-farms', topic: 'named farms only after written verification' },
  { slug: 'fish-species', topic: 'fish named as food, not as décor' },
  { slug: 'coffee-labeling', topic: 'coffee origin labeling — Act 198 from 2027' },
  { slug: 'no-fake-reviews', topic: 'why there are no Hawaiʻi star ratings yet' },
];

export function articlesFor(island: IslandId): Article[] {
  const isl = islands[island];
  const journal: Article[] = journalSeeds(island).map((s) => ({ ...s, kind: 'journal' as const }));
  const blogs: Article[] = extraBlogSlugs.map((b) => ({
    kind: 'blog' as const,
    slug: b.slug,
    title: `${b.topic[0].toUpperCase()}${b.topic.slice(1)} on ${isl.name}`,
    description: `${b.topic} — ${isl.name} private chef and catering notes. Published operations, no fabricated events.`,
    h1: `${b.topic[0].toUpperCase()}${b.topic.slice(1)}.`,
    lede: `On ${isl.name}, ${b.topic} is a real operational question, not a blog mood. ${isl.role} ${isl.state === 'inquiry' ? 'Inquiry-stage: dated inquiries only.' : 'Live island: written quotes.'}`,
    sections: [
      { heading: 'How we handle it', body: `We put ${b.topic} on the quote as a line or a constraint. ${zoneMap[island].honestyLine}` },
      { heading: 'What we will not do', body: 'No fake local reviews, no invented partnerships, no “now serving” language ahead of a staffed team.' },
    ],
  }));
  const areaNotes: Article[] = areasFor(island).map((a) => ({
    kind: 'blog' as const,
    slug: `dining-in-${a.slug}`,
    title: `Dining in ${a.name} — private chef notes`,
    description: `${a.blurb} ${isl.name}.`,
    h1: `A table in ${a.name}.`,
    lede: `${a.blurb} ${a.logistics}`,
    sections: [
      { heading: 'Fit', body: a.fit },
      { heading: 'Logistics', body: a.logistics },
      { heading: 'Zone', body: `${a.zoneClass === 'base' ? 'Base zone — included.' : a.zoneClass === 'surcharge' ? 'Surcharge zone — published travel fee on the quote.' : 'Quote-only — we do not publish a flat fee.'}` },
    ],
  }));
  return [...journal, ...blogs, ...areaNotes];
}

export function getArticle(island: IslandId, kind: 'journal' | 'blog', slug: string): Article | undefined {
  return articlesFor(island).find((a) => a.kind === kind && a.slug === slug);
}
