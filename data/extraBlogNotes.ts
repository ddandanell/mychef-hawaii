import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { UniqueCell } from './uniqueCells';

/**
 * Remaining extra-blog kitchen notes beside live SKUs.
 * Distinct from occasion, menu, staffing, and bar URLs. Titles must not use money keywords.
 */

export const EXTRA_BLOG_NOTES: Record<IslandId, UniqueCell[]> = {
  oahu: [
    {
      slug: 'anniversary-dinners',
      name: 'Anniversary dinners',
      h1: 'Oahu anniversary kitchen notes — the SKU is /events/anniversaries.',
      title: 'Oahu anniversary kitchen notes — beside the occasion SKU | myCHEF',
      description:
        'Short Oahu anniversary kitchen notes. Distinct from /events/anniversaries.',
      lede:
        '/events/anniversaries is the occasion door. This blog note is the Kahala kitchen — two tops, not a cloned wedding page.',
      photo: 'blogAnnivOahu',
      body: [
        'Two people, a real dining room, a night that is not a reception. Kahala and Ko Olina houses. The occasion SKU stays on /events/anniversaries.',
        '/blog/proposal-dinners is the ask. This piece is the later anniversary table. A cooktop is still required.',
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /events/anniversaries?',
          a: 'That URL is the occasion SKU. This piece is the Kahala kitchen note beside it.',
        },
        {
          q: 'Same as /blog/proposal-dinners?',
          a: 'That note is the ask. This piece is the later Kahala table.',
        },
      ],
      related: [
        { path: '/events/anniversaries', label: 'Anniversary SKU' },
        { path: '/blog/proposal-dinners', label: 'Proposal dinners' },
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'kids-at-the-table',
      name: 'Kids at the table',
      h1: 'Oahu kids-plate notes — written with the adults, not after.',
      title: 'Oahu kids-plate kitchen notes — written with the adults | myCHEF',
      description:
        'Short Oahu kids-plate kitchen notes. Distinct from /kids-menus.',
      lede:
        '/kids-menus is the SKU. This blog note is how a Kahala kids plate actually lands — designed with the adults, not an afterthought.',
      photo: 'blogKidsOahu',
      body: [
        'Children’s plates are planned with the adults’ menu. We do not invent a separate kids station. Kahala tables of mixed ages.',
        'The SKU stays on /kids-menus. This piece is the kitchen timing. Allergies belong in the first thread.',
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /kids-menus?',
          a: 'That URL is the SKU. This piece is the Kahala kitchen note beside it.',
        },
        {
          q: 'Do you run a kids station?',
          a: 'No. One kitchen, two plate sizes. Open /quote — Kahala kitchen.',
        },
      ],
      related: [
        { path: '/kids-menus', label: 'Kids menus' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'breakfast-in-the-villa',
      name: 'Villa breakfast',
      h1: 'Oahu villa-breakfast notes — morning timing, not a dinner leftover.',
      title: 'Oahu villa-breakfast kitchen notes — morning, not a leftover | myCHEF',
      description:
        'Short Oahu villa-breakfast kitchen notes. Distinct from /menus/breakfast.',
      lede:
        '/menus/breakfast is the SKU. This blog note is the Kahala morning — shopped that day, not last night’s fish reheated.',
      photo: 'blogBreakfastOahu',
      body: [
        'Breakfast is its own chef call. We do not leave dinner service running into morning without writing it. Diamond head light, a real range.',
        'The SKU stays on /menus/breakfast. Groceries still print at cost — /blog/grocery-at-cost.',
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /menus/breakfast?',
          a: 'That URL is the SKU. This piece is the Kahala morning kitchen note.',
        },
        {
          q: 'Can dinner leftovers be breakfast?',
          a: 'Only if you ask and we write it. Open /quote — Kahala kitchen.',
        },
      ],
      related: [
        { path: '/menus/breakfast', label: 'Breakfast SKU' },
        { path: '/blog/grocery-at-cost', label: 'Groceries at cost' },
        { path: '/vacation-chef', label: 'Vacation chef weeks' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'lunch-service',
      name: 'In-villa lunch',
      h1: 'Oahu in-villa lunch notes — midday, not a stacked dinner day.',
      title: 'Oahu in-villa lunch notes — midday, not a stacked dinner | myCHEF',
      description:
        'Short Oahu in-villa lunch kitchen notes. Distinct from /menus/lunch.',
      lede:
        '/menus/lunch is the SKU. This blog note is why a Kahala lunch is its own call — not an unpaid add-on to dinner.',
      photo: 'blogLunchOahu',
      body: [
        'Midday service is a chef day. We will not hide a Kahala lunch under a Ko Olina dinner. Write both, or pick one.',
        'The SKU stays on /menus/lunch. This piece is the stacking honesty.',
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /menus/lunch?',
          a: 'That URL is the SKU. This piece is the Kahala midday kitchen note.',
        },
        {
          q: 'Lunch and dinner as one unpaid day?',
          a: 'No. Both nights print. Open /quote — Kahala kitchen.',
        },
      ],
      related: [
        { path: '/menus/lunch', label: 'Lunch SKU' },
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'staffing-servers',
      name: 'When we add servers',
      h1: 'Oahu server-add notes — quoted when the list needs a pour.',
      title: 'Oahu server-add kitchen notes — quoted when the list needs a pour | myCHEF',
      description:
        'Short Oahu server-add kitchen notes. Distinct from /staffing/servers.',
      lede:
        '/staffing/servers is the hourly SKU. This blog note is when a Kahala guest list actually needs a pour — quoted, never buried.',
      photo: 'blogServersOahu',
      body: [
        'Two people, the chef pours. A seated twelve usually wants a server. The line prints hourly. Kahala dining rooms, not a banquet crew.',
        'The SKU stays on /staffing/servers. /bar is the bartender. This piece is the pour decision.',
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /staffing/servers?',
          a: 'That URL is the hourly SKU. This piece is when we add the Kahala person.',
        },
        {
          q: 'Same as /bar?',
          a: 'That URL is the bartender add-on. This piece is service at the Kahala table.',
        },
      ],
      related: [
        { path: '/staffing/servers', label: 'Servers SKU' },
        { path: '/bar', label: 'Bartender add-on' },
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'bartender-add-on',
      name: 'Bartender add-on',
      h1: 'Oahu bartender-add notes — bottles stay a different line.',
      title: 'Oahu bartender-add kitchen notes — bottles stay a different line | myCHEF',
      description:
        'Short Oahu bartender-add kitchen notes. Distinct from /bar and /staffing/bartenders.',
      lede:
        '/bar is the bartender add-on. /staffing/bartenders is the hourly SKU. This blog note is the Kahala pour — person and bottles never hide inside CORE.',
      photo: 'blogBartenderOahu',
      body: [
        'The person is a line. The bottles are a line. /blog/wine-and-alcohol holds the bottle rule. This piece is when we add the bartender on a Kahala lanai.',
        '/mobile-bar is the 4-hour package. This URL is the shorter add-on note.',
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /bar?',
          a: 'That URL is the add-on SKU. This piece is the Kahala kitchen note beside it.',
        },
        {
          q: 'Same as /staffing/bartenders?',
          a: 'That URL is the hourly SKU. This piece is when we add the Kahala pour.',
        },
      ],
      related: [
        { path: '/bar', label: 'Bar add-on' },
        { path: '/staffing/bartenders', label: 'Bartenders SKU' },
        { path: '/blog/wine-and-alcohol', label: 'Wine line' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'welcome-dinner',
      name: 'Welcome dinners',
      h1: 'Oahu arrival-night notes — first evening, not the reception.',
      title: 'Oahu arrival-night kitchen notes — first evening, not the reception | myCHEF',
      description:
        'Short Oahu arrival-night kitchen notes. Distinct from /events/welcome-dinners.',
      lede:
        '/events/welcome-dinners is the occasion SKU. This blog note is the Kahala first evening — jet lag, a real range, not the reception.',
      photo: 'blogWelcomeOahu',
      body: [
        'Arrival night is its own line so the reception does not swallow it. Kahala and Ko Olina. We shop that day.',
        'The SKU stays on /events/welcome-dinners. Wedding-week stacking lives on /rehearsal-dinners and /weddings.',
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /events/welcome-dinners?',
          a: 'That URL is the occasion SKU. This piece is the Kahala arrival kitchen note.',
        },
        {
          q: 'Same as the reception?',
          a: 'No. Separate line. Open /weddings if that is the night you mean — Kahala house.',
        },
      ],
      related: [
        { path: '/events/welcome-dinners', label: 'Welcome SKU' },
        { path: '/weddings', label: 'Wedding door' },
        { path: '/rehearsal-dinners', label: 'Rehearsal SKU' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'day-after-brunch',
      name: 'Day-after brunch',
      h1: 'Oahu day-after brunch notes — recovery morning, not the wedding.',
      title: 'Oahu day-after brunch notes — recovery morning, not the wedding | myCHEF',
      description:
        'Short Oahu day-after brunch kitchen notes. Distinct from /events/brunch.',
      lede:
        '/events/brunch is the occasion SKU. This blog note is the Kahala recovery morning — fruit, eggs, a small staffed list.',
      photo: 'blogBrunchOahu',
      body: [
        'Brunch is a morning call, not leftover reception food. Diamond head in daylight. The guest list is usually smaller.',
        'The SKU stays on /events/brunch. Wedding-week stacking is four lines, not one package.',
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /events/brunch?',
          a: 'That URL is the occasion SKU. This piece is the Kahala recovery-morning kitchen note.',
        },
        {
          q: 'Same as /menus/breakfast?',
          a: 'Breakfast is a menu SKU. This note is the day-after Kahala kitchen.',
        },
      ],
      related: [
        { path: '/events/brunch', label: 'Brunch SKU' },
        { path: '/menus/breakfast', label: 'Breakfast SKU' },
        { path: '/weddings', label: 'Wedding door' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'rehearsal-dinner',
      name: 'Rehearsal dinners',
      h1: 'Oahu rehearsal-night kitchen — the night before, a separate line.',
      title: 'Oahu rehearsal-night kitchen notes — the night before, a separate line | myCHEF',
      description:
        'Short Oahu rehearsal-night kitchen notes. Distinct from /rehearsal-dinners.',
      lede:
        '/rehearsal-dinners is the SKU. This blog note is the Kahala night before — seated, not a ballroom, not the reception.',
      photo: 'blogRehearsalOahu',
      body: [
        'The night before is a seated line. Guest counts we staff sit around 10–75. Kahala dining rooms, not a hotel ballroom.',
        'The SKU stays on /rehearsal-dinners. /weddings holds the catering keyword. This piece is the kitchen.',
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /rehearsal-dinners?',
          a: 'That URL is the SKU. This piece is the Kahala kitchen note beside it.',
        },
        {
          q: 'Same as /weddings?',
          a: 'That door owns the catering keyword. This note is the Kahala night-before kitchen.',
        },
      ],
      related: [
        { path: '/rehearsal-dinners', label: 'Rehearsal SKU' },
        { path: '/weddings', label: 'Wedding door' },
        { path: '/events/welcome-dinners', label: 'Welcome SKU' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'corporate-offsites',
      name: 'Corporate offsites',
      h1: 'Oahu house-offsite notes — a table, not a citywide.',
      title: 'Oahu house-offsite kitchen notes — a table, not a citywide | myCHEF',
      description:
        'Short Oahu house-offsite kitchen notes. Distinct from /events/corporate-events and /corporate-catering.',
      lede:
        '/events/corporate-events is the occasion. /corporate-catering is the kitchen SKU. This blog note is the Kahala house table — not HCC, not a ballroom.',
      photo: 'blogOffsitesOahu',
      body: [
        'Board dinners in houses. Identical plates. A cooktop. We do not staff citywides. Kahala residences, unused notebooks on the sideboard.',
        'Oahu /conventions says HCC citywides are closed. This piece is the house kitchen.',
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /events/corporate-events?',
          a: 'That URL is the occasion SKU. This piece is the Kahala house kitchen note.',
        },
        {
          q: 'Same as /corporate-catering?',
          a: 'That URL is the kitchen SKU. This piece is the shorter Kahala offsite note.',
        },
      ],
      related: [
        { path: '/events/corporate-events', label: 'Offsite SKU' },
        { path: '/corporate-catering', label: 'Corporate catering' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'retreat-full-board',
      name: 'Retreat full-board',
      h1: 'Oahu retreat-day notes — breakfast through dinner as lines.',
      title: 'Oahu retreat-day kitchen notes — breakfast through dinner as lines | myCHEF',
      description:
        'Short Oahu retreat-day kitchen notes. Distinct from /retreat-catering and /events/retreats.',
      lede:
        '/retreat-catering is the kitchen SKU. /events/retreats is the occasion. This blog note is how a Kahala full-board day actually stacks — every meal a line.',
      photo: 'blogRetreatOahu',
      body: [
        'Breakfast, lunch, dinner as separate calls, or a written day rate. Dietary capability is table stakes, claimed only when true. Kahala houses.',
        'The SKU stays on /retreat-catering. This piece is the meal-stack kitchen.',
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /retreat-catering?',
          a: 'That URL is the kitchen SKU. This piece is the Kahala full-board kitchen note.',
        },
        {
          q: 'Same as /events/retreats?',
          a: 'That URL is the occasion. This piece is how the Kahala meals stack.',
        },
      ],
      related: [
        { path: '/retreat-catering', label: 'Retreat SKU' },
        { path: '/events/retreats', label: 'Retreat occasion' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
  ],
  maui: [
    {
      slug: 'anniversary-dinners',
      name: 'Anniversary dinners',
      h1: 'Maui anniversary kitchen notes — the SKU is /events/anniversaries.',
      title: 'Maui anniversary kitchen notes — beside the occasion SKU | myCHEF',
      description:
        'Short Maui anniversary kitchen notes. Distinct from /events/anniversaries.',
      lede:
        '/events/anniversaries is the occasion door. This blog note is the Wailea kitchen — two tops, not a cloned wedding page.',
      photo: 'blogAnnivMaui',
      body: [
        'Two people, a real dining room, a night that is not a reception. Wailea and Kapalua houses. The occasion SKU stays on /events/anniversaries.',
        '/blog/proposal-dinners is the ask. This piece is the later anniversary table. A cooktop is still required.',
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /events/anniversaries?',
          a: 'That URL is the occasion SKU. This piece is the Wailea kitchen note beside it.',
        },
        {
          q: 'Same as /blog/proposal-dinners?',
          a: 'That note is the ask. This piece is the later Wailea table.',
        },
      ],
      related: [
        { path: '/events/anniversaries', label: 'Anniversary SKU' },
        { path: '/blog/proposal-dinners', label: 'Proposal dinners' },
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'kids-at-the-table',
      name: 'Kids at the table',
      h1: 'Maui kids-plate notes — written with the adults, not after.',
      title: 'Maui kids-plate kitchen notes — written with the adults | myCHEF',
      description:
        'Short Maui kids-plate kitchen notes. Distinct from /kids-menus.',
      lede:
        '/kids-menus is the SKU. This blog note is how a Wailea kids plate actually lands — designed with the adults, not an afterthought.',
      photo: 'blogKidsMaui',
      body: [
        'Children’s plates are planned with the adults’ menu. We do not invent a separate kids station. Wailea tables of mixed ages.',
        'The SKU stays on /kids-menus. This piece is the kitchen timing. Allergies belong in the first thread.',
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /kids-menus?',
          a: 'That URL is the SKU. This piece is the Wailea kitchen note beside it.',
        },
        {
          q: 'Do you run a kids station?',
          a: 'No. One kitchen, two plate sizes. Open /quote — Wailea kitchen.',
        },
      ],
      related: [
        { path: '/kids-menus', label: 'Kids menus' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'breakfast-in-the-villa',
      name: 'Villa breakfast',
      h1: 'Maui villa-breakfast notes — morning timing, not a dinner leftover.',
      title: 'Maui villa-breakfast kitchen notes — morning, not a leftover | myCHEF',
      description:
        'Short Maui villa-breakfast kitchen notes. Distinct from /menus/breakfast.',
      lede:
        '/menus/breakfast is the SKU. This blog note is the Wailea morning — shopped that day, not last night’s fish reheated.',
      photo: 'blogBreakfastMaui',
      body: [
        'Breakfast is its own chef call. We do not leave dinner service running into morning without writing it. The west sunset light, a real range.',
        'The SKU stays on /menus/breakfast. Groceries still print at cost — /blog/grocery-at-cost.',
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /menus/breakfast?',
          a: 'That URL is the SKU. This piece is the Wailea morning kitchen note.',
        },
        {
          q: 'Can dinner leftovers be breakfast?',
          a: 'Only if you ask and we write it. Open /quote — Wailea kitchen.',
        },
      ],
      related: [
        { path: '/menus/breakfast', label: 'Breakfast SKU' },
        { path: '/blog/grocery-at-cost', label: 'Groceries at cost' },
        { path: '/vacation-chef', label: 'Vacation chef weeks' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'lunch-service',
      name: 'In-villa lunch',
      h1: 'Maui in-villa lunch notes — midday, not a stacked dinner day.',
      title: 'Maui in-villa lunch notes — midday, not a stacked dinner | myCHEF',
      description:
        'Short Maui in-villa lunch kitchen notes. Distinct from /menus/lunch.',
      lede:
        '/menus/lunch is the SKU. This blog note is why a Wailea lunch is its own call — not an unpaid add-on to dinner.',
      photo: 'blogLunchMaui',
      body: [
        'Midday service is a chef day. We will not hide a Wailea lunch under a Kapalua dinner. Write both, or pick one.',
        'The SKU stays on /menus/lunch. This piece is the stacking honesty.',
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /menus/lunch?',
          a: 'That URL is the SKU. This piece is the Wailea midday kitchen note.',
        },
        {
          q: 'Lunch and dinner as one unpaid day?',
          a: 'No. Both nights print. Open /quote — Wailea kitchen.',
        },
      ],
      related: [
        { path: '/menus/lunch', label: 'Lunch SKU' },
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'staffing-servers',
      name: 'When we add servers',
      h1: 'Maui server-add notes — quoted when the list needs a pour.',
      title: 'Maui server-add kitchen notes — quoted when the list needs a pour | myCHEF',
      description:
        'Short Maui server-add kitchen notes. Distinct from /staffing/servers.',
      lede:
        '/staffing/servers is the hourly SKU. This blog note is when a Wailea guest list actually needs a pour — quoted, never buried.',
      photo: 'blogServersMaui',
      body: [
        'Two people, the chef pours. A seated twelve usually wants a server. The line prints hourly. Wailea dining rooms, not a banquet crew.',
        'The SKU stays on /staffing/servers. /bar is the bartender. This piece is the pour decision.',
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /staffing/servers?',
          a: 'That URL is the hourly SKU. This piece is when we add the Wailea person.',
        },
        {
          q: 'Same as /bar?',
          a: 'That URL is the bartender add-on. This piece is service at the Wailea table.',
        },
      ],
      related: [
        { path: '/staffing/servers', label: 'Servers SKU' },
        { path: '/bar', label: 'Bartender add-on' },
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'bartender-add-on',
      name: 'Bartender add-on',
      h1: 'Maui bartender-add notes — bottles stay a different line.',
      title: 'Maui bartender-add kitchen notes — bottles stay a different line | myCHEF',
      description:
        'Short Maui bartender-add kitchen notes. Distinct from /bar and /staffing/bartenders.',
      lede:
        '/bar is the bartender add-on. /staffing/bartenders is the hourly SKU. This blog note is the Wailea pour — person and bottles never hide inside CORE.',
      photo: 'blogBartenderMaui',
      body: [
        'The person is a line. The bottles are a line. /blog/wine-and-alcohol holds the bottle rule. This piece is when we add the bartender on a Wailea lanai.',
        '/mobile-bar is the 4-hour package. This URL is the shorter add-on note.',
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /bar?',
          a: 'That URL is the add-on SKU. This piece is the Wailea kitchen note beside it.',
        },
        {
          q: 'Same as /staffing/bartenders?',
          a: 'That URL is the hourly SKU. This piece is when we add the Wailea pour.',
        },
      ],
      related: [
        { path: '/bar', label: 'Bar add-on' },
        { path: '/staffing/bartenders', label: 'Bartenders SKU' },
        { path: '/blog/wine-and-alcohol', label: 'Wine line' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'welcome-dinner',
      name: 'Welcome dinners',
      h1: 'Maui arrival-night notes — first evening, not the reception.',
      title: 'Maui arrival-night kitchen notes — first evening, not the reception | myCHEF',
      description:
        'Short Maui arrival-night kitchen notes. Distinct from /events/welcome-dinners.',
      lede:
        '/events/welcome-dinners is the occasion SKU. This blog note is the Wailea first evening — jet lag, a real range, not the reception.',
      photo: 'blogWelcomeMaui',
      body: [
        'Arrival night is its own line so the reception does not swallow it. Wailea and Kapalua. We shop that day.',
        'The SKU stays on /events/welcome-dinners. Wedding-week stacking lives on /rehearsal-dinners and /weddings.',
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /events/welcome-dinners?',
          a: 'That URL is the occasion SKU. This piece is the Wailea arrival kitchen note.',
        },
        {
          q: 'Same as the reception?',
          a: 'No. Separate line. Open /weddings if that is the night you mean — Wailea villa.',
        },
      ],
      related: [
        { path: '/events/welcome-dinners', label: 'Welcome SKU' },
        { path: '/weddings', label: 'Wedding door' },
        { path: '/rehearsal-dinners', label: 'Rehearsal SKU' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'day-after-brunch',
      name: 'Day-after brunch',
      h1: 'Maui day-after brunch notes — recovery morning, not the wedding.',
      title: 'Maui day-after brunch notes — recovery morning, not the wedding | myCHEF',
      description:
        'Short Maui day-after brunch kitchen notes. Distinct from /events/brunch.',
      lede:
        '/events/brunch is the occasion SKU. This blog note is the Wailea recovery morning — fruit, eggs, a small staffed list.',
      photo: 'blogBrunchMaui',
      body: [
        'Brunch is a morning call, not leftover reception food. The west sunset in daylight. The guest list is usually smaller.',
        'The SKU stays on /events/brunch. Wedding-week stacking is four lines, not one package.',
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /events/brunch?',
          a: 'That URL is the occasion SKU. This piece is the Wailea recovery-morning kitchen note.',
        },
        {
          q: 'Same as /menus/breakfast?',
          a: 'Breakfast is a menu SKU. This note is the day-after Wailea kitchen.',
        },
      ],
      related: [
        { path: '/events/brunch', label: 'Brunch SKU' },
        { path: '/menus/breakfast', label: 'Breakfast SKU' },
        { path: '/weddings', label: 'Wedding door' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'rehearsal-dinner',
      name: 'Rehearsal dinners',
      h1: 'Maui rehearsal-night kitchen — the night before, a separate line.',
      title: 'Maui rehearsal-night kitchen notes — the night before, a separate line | myCHEF',
      description:
        'Short Maui rehearsal-night kitchen notes. Distinct from /rehearsal-dinners.',
      lede:
        '/rehearsal-dinners is the SKU. This blog note is the Wailea night before — seated, not a ballroom, not the reception.',
      photo: 'blogRehearsalMaui',
      body: [
        'The night before is a seated line. Guest counts we staff sit around 10–75. Wailea dining rooms, not a hotel ballroom.',
        'The SKU stays on /rehearsal-dinners. /weddings holds the catering keyword. This piece is the kitchen.',
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /rehearsal-dinners?',
          a: 'That URL is the SKU. This piece is the Wailea kitchen note beside it.',
        },
        {
          q: 'Same as /weddings?',
          a: 'That door owns the catering keyword. This note is the Wailea night-before kitchen.',
        },
      ],
      related: [
        { path: '/rehearsal-dinners', label: 'Rehearsal SKU' },
        { path: '/weddings', label: 'Wedding door' },
        { path: '/events/welcome-dinners', label: 'Welcome SKU' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'corporate-offsites',
      name: 'Corporate offsites',
      h1: 'Maui house-offsite notes — a table, not a citywide.',
      title: 'Maui house-offsite kitchen notes — a table, not a citywide | myCHEF',
      description:
        'Short Maui house-offsite kitchen notes. Distinct from /events/corporate-events and /corporate-catering.',
      lede:
        '/events/corporate-events is the occasion. /corporate-catering is the kitchen SKU. This blog note is the Wailea house table — not HCC, not a ballroom.',
      photo: 'blogOffsitesMaui',
      body: [
        'Board dinners in houses. Identical plates. A cooktop. We do not staff citywides. Wailea residences, unused notebooks on the sideboard.',
        'Citywides are not the product — /what-we-dont-do. This piece is the house kitchen.',
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /events/corporate-events?',
          a: 'That URL is the occasion SKU. This piece is the Wailea villa kitchen note.',
        },
        {
          q: 'Same as /corporate-catering?',
          a: 'That URL is the kitchen SKU. This piece is the shorter Wailea offsite note.',
        },
      ],
      related: [
        { path: '/events/corporate-events', label: 'Offsite SKU' },
        { path: '/corporate-catering', label: 'Corporate catering' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
    {
      slug: 'retreat-full-board',
      name: 'Retreat full-board',
      h1: 'Maui retreat-day notes — breakfast through dinner as lines.',
      title: 'Maui retreat-day kitchen notes — breakfast through dinner as lines | myCHEF',
      description:
        'Short Maui retreat-day kitchen notes. Distinct from /retreat-catering and /events/retreats.',
      lede:
        '/retreat-catering is the kitchen SKU. /events/retreats is the occasion. This blog note is how a Wailea full-board day actually stacks — every meal a line.',
      photo: 'blogRetreatMaui',
      body: [
        'Breakfast, lunch, dinner as separate calls, or a written day rate. Dietary capability is table stakes, claimed only when true. Wailea houses.',
        'The SKU stays on /retreat-catering. This piece is the meal-stack kitchen.',
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /retreat-catering?',
          a: 'That URL is the kitchen SKU. This piece is the Wailea full-board kitchen note.',
        },
        {
          q: 'Same as /events/retreats?',
          a: 'That URL is the occasion. This piece is how the Wailea meals stack.',
        },
      ],
      related: [
        { path: '/retreat-catering', label: 'Retreat SKU' },
        { path: '/events/retreats', label: 'Retreat occasion' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/quote', label: 'Quote form' },
      ],
    },
  ],
  kauai: [
    {
      slug: 'anniversary-dinners',
      name: 'Anniversary dinners',
      h1: 'Kauai anniversary kitchen notes — the SKU is /events/anniversaries.',
      title: 'Kauai anniversary kitchen notes — beside the occasion SKU | myCHEF',
      description:
        'Short Kauai anniversary kitchen notes. Distinct from /events/anniversaries.',
      lede:
        '/events/anniversaries is the occasion door. This blog note is the Princeville kitchen — two tops, not a cloned wedding page.',
      photo: 'blogAnnivKauai',
      body: [
        'Two people, a real dining room, a night that is not a reception. Princeville and Poʻipū houses. The occasion SKU stays on /events/anniversaries.',
        '/blog/proposal-dinners is the ask. This piece is the later anniversary table. A cooktop is still required, inquiry until we can staff.',
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /events/anniversaries?',
          a: 'That URL is the occasion SKU. This piece is the Princeville kitchen note beside it. Inquiry until we can staff.',
        },
        {
          q: 'Same as /blog/proposal-dinners?',
          a: 'That note is the ask. This piece is the later Princeville table. Inquiry until we can staff.',
        },
      ],
      related: [
        { path: '/events/anniversaries', label: 'Anniversary SKU' },
        { path: '/blog/proposal-dinners', label: 'Proposal dinners' },
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'kids-at-the-table',
      name: 'Kids at the table',
      h1: 'Kauai kids-plate notes — written with the adults, not after.',
      title: 'Kauai kids-plate kitchen notes — written with the adults | myCHEF',
      description:
        'Short Kauai kids-plate kitchen notes. Distinct from /kids-menus.',
      lede:
        '/kids-menus is the SKU. This blog note is how a Princeville kids plate actually lands — designed with the adults, not an afterthought.',
      photo: 'blogKidsKauai',
      body: [
        'Children’s plates are planned with the adults’ menu. We do not invent a separate kids station. Princeville tables of mixed ages.',
        'The SKU stays on /kids-menus. This piece is the kitchen timing at inquiry. Allergies belong in the first thread.',
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /kids-menus?',
          a: 'That URL is the SKU. This piece is the Princeville kitchen note beside it. Inquiry until we can staff.',
        },
        {
          q: 'Do you run a kids station?',
          a: 'No. One kitchen, two plate sizes. Open /quote — Princeville kitchen, when we can staff.',
        },
      ],
      related: [
        { path: '/kids-menus', label: 'Kids menus' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'breakfast-in-the-villa',
      name: 'Villa breakfast',
      h1: 'Kauai villa-breakfast notes — morning timing, not a dinner leftover.',
      title: 'Kauai villa-breakfast kitchen notes — morning, not a leftover | myCHEF',
      description:
        'Short Kauai villa-breakfast kitchen notes. Distinct from /menus/breakfast.',
      lede:
        '/menus/breakfast is the SKU. This blog note is the Princeville morning — shopped that day, not last night’s fish reheated.',
      photo: 'blogBreakfastKauai',
      body: [
        'Breakfast is its own chef call. We do not leave dinner service running into morning without writing it. Misted mountains light, a real range.',
        'The SKU stays on /menus/breakfast. Groceries still print at cost — /blog/grocery-at-cost. Inquiry.',
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /menus/breakfast?',
          a: 'That URL is the SKU. This piece is the Princeville morning kitchen note. Inquiry until we can staff.',
        },
        {
          q: 'Can dinner leftovers be breakfast?',
          a: 'Only if you ask and we write it. Open /quote — Princeville kitchen, when we can staff.',
        },
      ],
      related: [
        { path: '/menus/breakfast', label: 'Breakfast SKU' },
        { path: '/blog/grocery-at-cost', label: 'Groceries at cost' },
        { path: '/vacation-chef', label: 'Vacation chef weeks' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'lunch-service',
      name: 'In-villa lunch',
      h1: 'Kauai in-villa lunch notes — midday, not a stacked dinner day.',
      title: 'Kauai in-villa lunch notes — midday, not a stacked dinner | myCHEF',
      description:
        'Short Kauai in-villa lunch kitchen notes. Distinct from /menus/lunch.',
      lede:
        '/menus/lunch is the SKU. This blog note is why a Princeville lunch is its own call — not an unpaid add-on to dinner.',
      photo: 'blogLunchKauai',
      body: [
        'Midday service is a chef day. We will not hide a Princeville lunch under a Poʻipū dinner. Write both, or pick one.',
        'The SKU stays on /menus/lunch. This piece is the stacking honesty at inquiry.',
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /menus/lunch?',
          a: 'That URL is the SKU. This piece is the Princeville midday kitchen note. Inquiry until we can staff.',
        },
        {
          q: 'Lunch and dinner as one unpaid day?',
          a: 'No. Both nights print. Open /quote — Princeville kitchen, when we can staff.',
        },
      ],
      related: [
        { path: '/menus/lunch', label: 'Lunch SKU' },
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'staffing-servers',
      name: 'When we add servers',
      h1: 'Kauai server-add notes — quoted when the list needs a pour.',
      title: 'Kauai server-add kitchen notes — quoted when the list needs a pour | myCHEF',
      description:
        'Short Kauai server-add kitchen notes. Distinct from /staffing/servers.',
      lede:
        '/staffing/servers is the hourly SKU. This blog note is when a Princeville guest list actually needs a pour — quoted, never buried.',
      photo: 'blogServersKauai',
      body: [
        'Two people, the chef pours. A seated twelve usually wants a server. The line prints hourly. Princeville dining rooms, not a banquet crew.',
        'The SKU stays on /staffing/servers. /bar is the bartender. This piece is the pour decision at inquiry.',
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /staffing/servers?',
          a: 'That URL is the hourly SKU. This piece is when we add the Princeville person. Inquiry until we can staff.',
        },
        {
          q: 'Same as /bar?',
          a: 'That URL is the bartender add-on. This piece is service at the Princeville table. Inquiry until we can staff.',
        },
      ],
      related: [
        { path: '/staffing/servers', label: 'Servers SKU' },
        { path: '/bar', label: 'Bartender add-on' },
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'bartender-add-on',
      name: 'Bartender add-on',
      h1: 'Kauai bartender-add notes — bottles stay a different line.',
      title: 'Kauai bartender-add kitchen notes — bottles stay a different line | myCHEF',
      description:
        'Short Kauai bartender-add kitchen notes. Distinct from /bar and /staffing/bartenders.',
      lede:
        '/bar is the bartender add-on. /staffing/bartenders is the hourly SKU. This blog note is the Princeville pour — person and bottles never hide inside CORE.',
      photo: 'blogBartenderKauai',
      body: [
        'The person is a line. The bottles are a line. /blog/wine-and-alcohol holds the bottle rule. This piece is when we add the bartender on a Princeville lanai.',
        '/mobile-bar is the 4-hour package. This URL is the shorter add-on note at inquiry.',
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /bar?',
          a: 'That URL is the add-on SKU. This piece is the Princeville kitchen note beside it. Inquiry until we can staff.',
        },
        {
          q: 'Same as /staffing/bartenders?',
          a: 'That URL is the hourly SKU. This piece is when we add the Princeville pour. Inquiry until we can staff.',
        },
      ],
      related: [
        { path: '/bar', label: 'Bar add-on' },
        { path: '/staffing/bartenders', label: 'Bartenders SKU' },
        { path: '/blog/wine-and-alcohol', label: 'Wine line' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'welcome-dinner',
      name: 'Welcome dinners',
      h1: 'Kauai arrival-night notes — first evening, not the reception.',
      title: 'Kauai arrival-night kitchen notes — first evening, not the reception | myCHEF',
      description:
        'Short Kauai arrival-night kitchen notes. Distinct from /events/welcome-dinners.',
      lede:
        '/events/welcome-dinners is the occasion SKU. This blog note is the Princeville first evening — jet lag, a real range, not the reception.',
      photo: 'blogWelcomeKauai',
      body: [
        'Arrival night is its own line so the reception does not swallow it. Princeville and Poʻipū. We shop that day.',
        'The SKU stays on /events/welcome-dinners. Wedding-week stacking lives on /rehearsal-dinners and /weddings. Inquiry.',
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /events/welcome-dinners?',
          a: 'That URL is the occasion SKU. This piece is the Princeville arrival kitchen note. Inquiry until we can staff.',
        },
        {
          q: 'Same as the reception?',
          a: 'No. Separate line. Open /weddings if that is the night you mean — Princeville house at inquiry.',
        },
      ],
      related: [
        { path: '/events/welcome-dinners', label: 'Welcome SKU' },
        { path: '/weddings', label: 'Wedding door' },
        { path: '/rehearsal-dinners', label: 'Rehearsal SKU' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'day-after-brunch',
      name: 'Day-after brunch',
      h1: 'Kauai day-after brunch notes — recovery morning, not the wedding.',
      title: 'Kauai day-after brunch notes — recovery morning, not the wedding | myCHEF',
      description:
        'Short Kauai day-after brunch kitchen notes. Distinct from /events/brunch.',
      lede:
        '/events/brunch is the occasion SKU. This blog note is the Princeville recovery morning — fruit, eggs, a small staffed list.',
      photo: 'blogBrunchKauai',
      body: [
        'Brunch is a morning call, not leftover reception food. Misted mountains in daylight. The guest list is usually smaller.',
        'The SKU stays on /events/brunch. Wedding-week stacking is four lines, not one package. Inquiry.',
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /events/brunch?',
          a: 'That URL is the occasion SKU. This piece is the Princeville recovery-morning kitchen note. Inquiry until we can staff.',
        },
        {
          q: 'Same as /menus/breakfast?',
          a: 'Breakfast is a menu SKU. This note is the day-after Princeville kitchen. Inquiry until we can staff.',
        },
      ],
      related: [
        { path: '/events/brunch', label: 'Brunch SKU' },
        { path: '/menus/breakfast', label: 'Breakfast SKU' },
        { path: '/weddings', label: 'Wedding door' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'rehearsal-dinner',
      name: 'Rehearsal dinners',
      h1: 'Kauai rehearsal-night kitchen — the night before, a separate line.',
      title: 'Kauai rehearsal-night kitchen notes — the night before, a separate line | myCHEF',
      description:
        'Short Kauai rehearsal-night kitchen notes. Distinct from /rehearsal-dinners.',
      lede:
        '/rehearsal-dinners is the SKU. This blog note is the Princeville night before — seated, not a ballroom, not the reception.',
      photo: 'blogRehearsalKauai',
      body: [
        'The night before is a seated line. Guest counts we staff sit around 10–75. Princeville dining rooms, not a hotel ballroom.',
        'The SKU stays on /rehearsal-dinners. /weddings holds the catering keyword. This piece is the kitchen at inquiry.',
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /rehearsal-dinners?',
          a: 'That URL is the SKU. This piece is the Princeville kitchen note beside it. Inquiry until we can staff.',
        },
        {
          q: 'Same as /weddings?',
          a: 'That door owns the catering keyword. This note is the Princeville night-before kitchen. Inquiry until we can staff.',
        },
      ],
      related: [
        { path: '/rehearsal-dinners', label: 'Rehearsal SKU' },
        { path: '/weddings', label: 'Wedding door' },
        { path: '/events/welcome-dinners', label: 'Welcome SKU' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'corporate-offsites',
      name: 'Corporate offsites',
      h1: 'Kauai house-offsite notes — a table, not a citywide.',
      title: 'Kauai house-offsite kitchen notes — a table, not a citywide | myCHEF',
      description:
        'Short Kauai house-offsite kitchen notes. Distinct from /events/corporate-events and /corporate-catering.',
      lede:
        '/events/corporate-events is the occasion. /corporate-catering is the kitchen SKU. This blog note is the Princeville house table — not HCC, not a ballroom.',
      photo: 'blogOffsitesKauai',
      body: [
        'Board dinners in houses. Identical plates. A cooktop. We do not staff citywides. Princeville residences, unused notebooks on the sideboard.',
        'Citywides are not the product — /what-we-dont-do. This piece is the house kitchen at inquiry.',
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /events/corporate-events?',
          a: 'That URL is the occasion SKU. This piece is the Princeville house kitchen note. Inquiry until we can staff.',
        },
        {
          q: 'Same as /corporate-catering?',
          a: 'That URL is the kitchen SKU. This piece is the shorter Princeville offsite note. Inquiry until we can staff.',
        },
      ],
      related: [
        { path: '/events/corporate-events', label: 'Offsite SKU' },
        { path: '/corporate-catering', label: 'Corporate catering' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'retreat-full-board',
      name: 'Retreat full-board',
      h1: 'Kauai retreat-day notes — breakfast through dinner as lines.',
      title: 'Kauai retreat-day kitchen notes — breakfast through dinner as lines | myCHEF',
      description:
        'Short Kauai retreat-day kitchen notes. Distinct from /retreat-catering and /events/retreats.',
      lede:
        '/retreat-catering is the kitchen SKU. /events/retreats is the occasion. This blog note is how a Princeville full-board day actually stacks — every meal a line.',
      photo: 'blogRetreatKauai',
      body: [
        'Breakfast, lunch, dinner as separate calls, or a written day rate. Dietary capability is table stakes, claimed only when true. Princeville houses.',
        'The SKU stays on /retreat-catering. This piece is the meal-stack kitchen at inquiry.',
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /retreat-catering?',
          a: 'That URL is the kitchen SKU. This piece is the Princeville full-board kitchen note. Inquiry until we can staff.',
        },
        {
          q: 'Same as /events/retreats?',
          a: 'That URL is the occasion. This piece is how the Princeville meals stack. Inquiry until we can staff.',
        },
      ],
      related: [
        { path: '/retreat-catering', label: 'Retreat SKU' },
        { path: '/events/retreats', label: 'Retreat occasion' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
  ],
  bigisland: [
    {
      slug: 'anniversary-dinners',
      name: 'Anniversary dinners',
      h1: 'Hawaiʻi Island anniversary kitchen notes — the SKU is /events/anniversaries.',
      title: 'Hawaiʻi Island anniversary kitchen notes — beside the occasion SKU | myCHEF',
      description:
        'Short Hawaiʻi Island anniversary kitchen notes. Distinct from /events/anniversaries.',
      lede:
        '/events/anniversaries is the occasion door. This blog note is the Waikoloa kitchen — two tops, not a cloned wedding page.',
      photo: 'blogAnnivBigisland',
      body: [
        'Two people, a real dining room, a night that is not a reception. Waikoloa and Kona houses. The occasion SKU stays on /events/anniversaries.',
        '/blog/proposal-dinners is the ask. This piece is the later anniversary table. A cooktop is still required, inquiry until we can staff.',
        `Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /events/anniversaries?',
          a: 'That URL is the occasion SKU. This piece is the Waikoloa kitchen note beside it. Hilo is never implied.',
        },
        {
          q: 'Same as /blog/proposal-dinners?',
          a: 'That note is the ask. This piece is the later Waikoloa table. Hilo is never implied.',
        },
      ],
      related: [
        { path: '/events/anniversaries', label: 'Anniversary SKU' },
        { path: '/blog/proposal-dinners', label: 'Proposal dinners' },
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'kids-at-the-table',
      name: 'Kids at the table',
      h1: 'Hawaiʻi Island kids-plate notes — written with the adults, not after.',
      title: 'Hawaiʻi Island kids-plate kitchen notes — written with the adults | myCHEF',
      description:
        'Short Hawaiʻi Island kids-plate kitchen notes. Distinct from /kids-menus.',
      lede:
        '/kids-menus is the SKU. This blog note is how a Waikoloa kids plate actually lands — designed with the adults, not an afterthought.',
      photo: 'blogKidsBigisland',
      body: [
        'Children’s plates are planned with the adults’ menu. We do not invent a separate kids station. Waikoloa tables of mixed ages.',
        'The SKU stays on /kids-menus. This piece is the kitchen timing at inquiry. Allergies belong in the first thread.',
        `Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /kids-menus?',
          a: 'That URL is the SKU. This piece is the Waikoloa kitchen note beside it. Hilo is never implied.',
        },
        {
          q: 'Do you run a kids station?',
          a: 'No. One kitchen, two plate sizes. Open /quote — Waikoloa kitchen. Hilo is never implied.',
        },
      ],
      related: [
        { path: '/kids-menus', label: 'Kids menus' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'breakfast-in-the-villa',
      name: 'Villa breakfast',
      h1: 'Hawaiʻi Island villa-breakfast notes — morning timing, not a dinner leftover.',
      title: 'Hawaiʻi Island villa-breakfast kitchen notes — morning, not a leftover | myCHEF',
      description:
        'Short Hawaiʻi Island villa-breakfast kitchen notes. Distinct from /menus/breakfast.',
      lede:
        '/menus/breakfast is the SKU. This blog note is the Waikoloa morning — shopped that day, not last night’s fish reheated.',
      photo: 'blogBreakfastBigisland',
      body: [
        'Breakfast is its own chef call. We do not leave dinner service running into morning without writing it. The lava coast light, a real range.',
        'The SKU stays on /menus/breakfast. Groceries still print at cost — /blog/grocery-at-cost. Inquiry.',
        `Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /menus/breakfast?',
          a: 'That URL is the SKU. This piece is the Waikoloa morning kitchen note. Hilo is never implied.',
        },
        {
          q: 'Can dinner leftovers be breakfast?',
          a: 'Only if you ask and we write it. Open /quote — Waikoloa kitchen. Hilo is never implied.',
        },
      ],
      related: [
        { path: '/menus/breakfast', label: 'Breakfast SKU' },
        { path: '/blog/grocery-at-cost', label: 'Groceries at cost' },
        { path: '/vacation-chef', label: 'Vacation chef weeks' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'lunch-service',
      name: 'In-villa lunch',
      h1: 'Hawaiʻi Island in-villa lunch notes — midday, not a stacked dinner day.',
      title: 'Hawaiʻi Island in-villa lunch notes — midday, not a stacked dinner | myCHEF',
      description:
        'Short Hawaiʻi Island in-villa lunch kitchen notes. Distinct from /menus/lunch.',
      lede:
        '/menus/lunch is the SKU. This blog note is why a Waikoloa lunch is its own call — not an unpaid add-on to dinner.',
      photo: 'blogLunchBigisland',
      body: [
        'Midday service is a chef day. We will not hide a Waikoloa lunch under a Kona dinner. Write both, or pick one.',
        'The SKU stays on /menus/lunch. This piece is the stacking honesty at inquiry.',
        `Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /menus/lunch?',
          a: 'That URL is the SKU. This piece is the Waikoloa midday kitchen note. Hilo is never implied.',
        },
        {
          q: 'Lunch and dinner as one unpaid day?',
          a: 'No. Both nights print. Open /quote — Waikoloa kitchen. Hilo is never implied.',
        },
      ],
      related: [
        { path: '/menus/lunch', label: 'Lunch SKU' },
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/coverage', label: 'Coverage' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'staffing-servers',
      name: 'When we add servers',
      h1: 'Hawaiʻi Island server-add notes — quoted when the list needs a pour.',
      title: 'Hawaiʻi Island server-add kitchen notes — quoted when the list needs a pour | myCHEF',
      description:
        'Short Hawaiʻi Island server-add kitchen notes. Distinct from /staffing/servers.',
      lede:
        '/staffing/servers is the hourly SKU. This blog note is when a Waikoloa guest list actually needs a pour — quoted, never buried.',
      photo: 'blogServersBigisland',
      body: [
        'Two people, the chef pours. A seated twelve usually wants a server. The line prints hourly. Waikoloa dining rooms, not a banquet crew.',
        'The SKU stays on /staffing/servers. /bar is the bartender. This piece is the pour decision at inquiry.',
        `Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /staffing/servers?',
          a: 'That URL is the hourly SKU. This piece is when we add the Waikoloa person. Hilo is never implied.',
        },
        {
          q: 'Same as /bar?',
          a: 'That URL is the bartender add-on. This piece is service at the Waikoloa table. Hilo is never implied.',
        },
      ],
      related: [
        { path: '/staffing/servers', label: 'Servers SKU' },
        { path: '/bar', label: 'Bartender add-on' },
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'bartender-add-on',
      name: 'Bartender add-on',
      h1: 'Hawaiʻi Island bartender-add notes — bottles stay a different line.',
      title: 'Hawaiʻi Island bartender-add kitchen notes — bottles stay a different line | myCHEF',
      description:
        'Short Hawaiʻi Island bartender-add kitchen notes. Distinct from /bar and /staffing/bartenders.',
      lede:
        '/bar is the bartender add-on. /staffing/bartenders is the hourly SKU. This blog note is the Waikoloa pour — person and bottles never hide inside CORE.',
      photo: 'blogBartenderBigisland',
      body: [
        'The person is a line. The bottles are a line. /blog/wine-and-alcohol holds the bottle rule. This piece is when we add the bartender on a Waikoloa lanai.',
        '/mobile-bar is the 4-hour package. This URL is the shorter add-on note at inquiry.',
        `Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /bar?',
          a: 'That URL is the add-on SKU. This piece is the Waikoloa kitchen note beside it. Hilo is never implied.',
        },
        {
          q: 'Same as /staffing/bartenders?',
          a: 'That URL is the hourly SKU. This piece is when we add the Waikoloa pour. Hilo is never implied.',
        },
      ],
      related: [
        { path: '/bar', label: 'Bar add-on' },
        { path: '/staffing/bartenders', label: 'Bartenders SKU' },
        { path: '/blog/wine-and-alcohol', label: 'Wine line' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'welcome-dinner',
      name: 'Welcome dinners',
      h1: 'Hawaiʻi Island arrival-night notes — first evening, not the reception.',
      title: 'Hawaiʻi Island arrival-night kitchen notes — first evening, not the reception | myCHEF',
      description:
        'Short Hawaiʻi Island arrival-night kitchen notes. Distinct from /events/welcome-dinners.',
      lede:
        '/events/welcome-dinners is the occasion SKU. This blog note is the Waikoloa first evening — jet lag, a real range, not the reception.',
      photo: 'blogWelcomeBigisland',
      body: [
        'Arrival night is its own line so the reception does not swallow it. Waikoloa and Kona. We shop that day.',
        'The SKU stays on /events/welcome-dinners. Wedding-week stacking lives on /rehearsal-dinners and /weddings. Inquiry.',
        `Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /events/welcome-dinners?',
          a: 'That URL is the occasion SKU. This piece is the Waikoloa arrival kitchen note. Hilo is never implied.',
        },
        {
          q: 'Same as the reception?',
          a: 'No. Separate line. Open /weddings if that is the night you mean — Waikoloa house. Hilo is never implied.',
        },
      ],
      related: [
        { path: '/events/welcome-dinners', label: 'Welcome SKU' },
        { path: '/weddings', label: 'Wedding door' },
        { path: '/rehearsal-dinners', label: 'Rehearsal SKU' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'day-after-brunch',
      name: 'Day-after brunch',
      h1: 'Hawaiʻi Island day-after brunch notes — recovery morning, not the wedding.',
      title: 'Hawaiʻi Island day-after brunch notes — recovery morning, not the wedding | myCHEF',
      description:
        'Short Hawaiʻi Island day-after brunch kitchen notes. Distinct from /events/brunch.',
      lede:
        '/events/brunch is the occasion SKU. This blog note is the Waikoloa recovery morning — fruit, eggs, a small staffed list.',
      photo: 'blogBrunchBigisland',
      body: [
        'Brunch is a morning call, not leftover reception food. The lava coast in daylight. The guest list is usually smaller.',
        'The SKU stays on /events/brunch. Wedding-week stacking is four lines, not one package. Inquiry.',
        `Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /events/brunch?',
          a: 'That URL is the occasion SKU. This piece is the Waikoloa recovery-morning kitchen note. Hilo is never implied.',
        },
        {
          q: 'Same as /menus/breakfast?',
          a: 'Breakfast is a menu SKU. This note is the day-after Waikoloa kitchen. Hilo is never implied.',
        },
      ],
      related: [
        { path: '/events/brunch', label: 'Brunch SKU' },
        { path: '/menus/breakfast', label: 'Breakfast SKU' },
        { path: '/weddings', label: 'Wedding door' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'rehearsal-dinner',
      name: 'Rehearsal dinners',
      h1: 'Hawaiʻi Island rehearsal-night kitchen — the night before, a separate line.',
      title: 'Hawaiʻi Island rehearsal-night kitchen notes — the night before, a separate line | myCHEF',
      description:
        'Short Hawaiʻi Island rehearsal-night kitchen notes. Distinct from /rehearsal-dinners.',
      lede:
        '/rehearsal-dinners is the SKU. This blog note is the Waikoloa night before — seated, not a ballroom, not the reception.',
      photo: 'blogRehearsalBigisland',
      body: [
        'The night before is a seated line. Guest counts we staff sit around 10–75. Waikoloa dining rooms, not a hotel ballroom.',
        'The SKU stays on /rehearsal-dinners. /weddings holds the catering keyword. This piece is the kitchen at inquiry.',
        `Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /rehearsal-dinners?',
          a: 'That URL is the SKU. This piece is the Waikoloa kitchen note beside it. Hilo is never implied.',
        },
        {
          q: 'Same as /weddings?',
          a: 'That door owns the catering keyword. This note is the Waikoloa night-before kitchen. Hilo is never implied.',
        },
      ],
      related: [
        { path: '/rehearsal-dinners', label: 'Rehearsal SKU' },
        { path: '/weddings', label: 'Wedding door' },
        { path: '/events/welcome-dinners', label: 'Welcome SKU' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'corporate-offsites',
      name: 'Corporate offsites',
      h1: 'Hawaiʻi Island house-offsite notes — a table, not a citywide.',
      title: 'Hawaiʻi Island house-offsite kitchen notes — a table, not a citywide | myCHEF',
      description:
        'Short Hawaiʻi Island house-offsite kitchen notes. Distinct from /events/corporate-events and /corporate-catering.',
      lede:
        '/events/corporate-events is the occasion. /corporate-catering is the kitchen SKU. This blog note is the Waikoloa house table — not HCC, not a ballroom.',
      photo: 'blogOffsitesBigisland',
      body: [
        'Board dinners in houses. Identical plates. A cooktop. We do not staff citywides. Waikoloa residences, unused notebooks on the sideboard.',
        'Citywides are not the product — /what-we-dont-do. This piece is the house kitchen at inquiry.',
        `Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /events/corporate-events?',
          a: 'That URL is the occasion SKU. This piece is the Waikoloa house kitchen note. Hilo is never implied.',
        },
        {
          q: 'Same as /corporate-catering?',
          a: 'That URL is the kitchen SKU. This piece is the shorter Waikoloa offsite note. Hilo is never implied.',
        },
      ],
      related: [
        { path: '/events/corporate-events', label: 'Offsite SKU' },
        { path: '/corporate-catering', label: 'Corporate catering' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
    {
      slug: 'retreat-full-board',
      name: 'Retreat full-board',
      h1: 'Hawaiʻi Island retreat-day notes — breakfast through dinner as lines.',
      title: 'Hawaiʻi Island retreat-day kitchen notes — breakfast through dinner as lines | myCHEF',
      description:
        'Short Hawaiʻi Island retreat-day kitchen notes. Distinct from /retreat-catering and /events/retreats.',
      lede:
        '/retreat-catering is the kitchen SKU. /events/retreats is the occasion. This blog note is how a Waikoloa full-board day actually stacks — every meal a line.',
      photo: 'blogRetreatBigisland',
      body: [
        'Breakfast, lunch, dinner as separate calls, or a written day rate. Dietary capability is table stakes, claimed only when true. Waikoloa houses.',
        'The SKU stays on /retreat-catering. This piece is the meal-stack kitchen at inquiry.',
        `Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. This article does not steal that title.`,
      ],
      faqs: [
        {
          q: 'Same as /retreat-catering?',
          a: 'That URL is the kitchen SKU. This piece is the Waikoloa full-board kitchen note. Hilo is never implied.',
        },
        {
          q: 'Same as /events/retreats?',
          a: 'That URL is the occasion. This piece is how the Waikoloa meals stack. Hilo is never implied.',
        },
      ],
      related: [
        { path: '/retreat-catering', label: 'Retreat SKU' },
        { path: '/events/retreats', label: 'Retreat occasion' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/quote', label: 'Inquiry form' },
      ],
    },
  ],
};
