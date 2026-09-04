import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import { gatedServices } from './gatedServices';
import { residentLineList } from './residentLine';
import { feeStackList } from './feeStackPages';
import type { UniqueCell } from './uniqueCells';

/**
 * Catalog service cells that are not money-keyword doors.
 * Titles must not steal /catering or / private-chef keywords.
 */

export const islandServices: Record<IslandId, UniqueCell[]> = {
  oahu: [
    {
      slug: 'what-we-dont-do',
      name: 'What we will not claim',
      h1: 'What we will not claim on Oahu.',
      title: 'What we will not claim on Oahu | myCHEF',
      description:
        'No invented Oahu guest reviews, no fake licenses, no “now serving” language ahead of a staffed kitchen. Published prices and a written quote are the proof.',
      lede:
        'Hawaii is launching. We will not invent stars, chef names, or an 808 number. The Gold Coast dinner is real. The Yelp page is not.',
      photo: 'svcHonestyOahu',
      body: [
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) and private chef Oahu (${SEARCH_VOLUMES['private chef oahu']}) are measured searches. Those doors are /catering and /. This page is the honesty register so those titles stay clean.`,
        'We do not invent guest reviews. We do not sell chef bios. HCC citywides are closed through 2027 and are not our product — see /conventions. Hotel suites without kitchens are not a kitchen.',
        'Proof today: published starting prices on /pricing, a sample menu on /menus, cleanup, a written quote.',
      ],
      faqs: [
        {
          q: 'Do you have Oʻahu reviews?',
          a: 'Not yet. They publish after verified events. Until then the proof is the card and the quote. See /trust.',
        },
        {
          q: 'Will you cook a hotel room?',
          a: 'If there is a stove we can work. Most suites do not. Residences and villas are the product.',
        },
      ],
      related: [
        { path: '/faq', label: 'FAQ' },
        { path: '/about', label: 'The Oahu crew' },
        { path: '/conventions', label: 'Not MICE' },
      ],
    },
    {
      slug: 'guest-counts',
      name: 'Guest counts',
      h1: 'Guest counts we staff on Oahu — two to fifteen, ten to seventy-five.',
      title: 'Guest counts we staff on Oahu | myCHEF',
      description:
        'Oahu dinners 2–15. Receptions about 10–75. Larger formats are quoted, not promised. Kahala dining rooms and Ko Olina villas are the usual rooms.',
      lede:
        'A dinner for two is a chef and the shopping. A seated twelve is a different crew. We write the headcount before the deposit.',
      photo: 'svcCountsOahu',
      body: [
        'Dinners two to fifteen. Receptions about ten to seventy-five. A hundred-guest lawn is quoted as its own format or declined — not stretched from a Tuesday dinner.',
        'Kahala dining rooms hold a seated table. Ko Olina villas hold a week. Waikīkī residences hold what the kitchen can hold. See /coverage.',
      ],
      faqs: [
        {
          q: 'Can you do 200 on a Gold Coast lawn?',
          a: 'Not as a promise. Larger than about seventy-five is quoted. We would rather decline than lie.',
        },
        {
          q: 'Is a dinner for two too small?',
          a: 'No. Date night is a published band. See /honeymoon-dinners.',
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/events', label: 'Occasions' },
        { path: '/pricing', label: 'Starting prices' },
      ],
    },
    {
      slug: 'dietary',
      name: 'Dietary',
      h1: 'Dietary on Oahu — designed in, not theatre.',
      title: 'Dietary on Oahu — designed in, not theatre | myCHEF',
      description:
        'Vegan, gluten-free, allergy-aware Oahu menus designed in advance. Claimed only when the Kahala, Ko Olina or Kailua kitchen can do it that night.',
      lede:
        'A separate board when wheat cannot share a pan. Kids’ plates planned with the adults. We do not print “we do everything” and hope.',
      photo: 'svcDietaryOahu',
      body: [
        'Tell us allergies on the quote form. The designed menu in 48 hours names what we can hold. Compact condos change what we can fire.',
        'This is not a dietary brand. It is the same per-table menu on /menus with the constraint written in.',
      ],
      faqs: [
        {
          q: 'Nut-free on Oahu?',
          a: 'When the kitchen and the shop can hold it. We will not claim a dedicated allergen kitchen we do not have.',
        },
        {
          q: 'Kids and allergies together?',
          a: 'Yes — planned with /kids-menus, not as an afterthought plate from the freezer.',
        },
      ],
      related: [
        { path: '/menus', label: 'Menus' },
        { path: '/kids-menus', label: 'Kids at the table' },
        { path: '/faq', label: 'FAQ' },
      ],
    },
    {
      slug: 'honeymoon-dinners',
      name: 'Honeymoon dinners',
      h1: 'Honeymoon dinners on Oahu — two seats, one kitchen.',
      title: 'Honeymoon dinners on Oahu — two seats, one kitchen | myCHEF',
      description:
        'Dinner-for-two in Kahala, Ko Olina and Kailua kitchens. Published starting prices. Not a wedding-week stack — that lives on /weddings.',
      lede:
        'Two plates. Brass candles. The rest of the house dark. This is Date Night, not a reception dressed as romance.',
      photo: 'svcHoneymoonOahu',
      body: [
        `Wedding catering Oahu (${SEARCH_VOLUMES['wedding catering oahu']}) is /weddings. This page is two seats. The crew is smaller. The quote is a dinner band, not four lines.`,
        'Gold Coast dining rooms and Ko Olina villas are the usual rooms. A welcome-night grazing for the arriving family is /events/welcome-dinners.',
      ],
      faqs: [
        {
          q: 'Is this a wedding?',
          a: 'No. /weddings is the week. This is Tuesday for two.',
        },
        {
          q: 'Can we add a bartender?',
          a: 'Yes as a line. See /bar.',
        },
      ],
      related: [
        { path: '/chefs-table', label: 'Chef’s table' },
        { path: '/weddings', label: 'Wedding week' },
        { path: '/gold-coast', label: 'Gold Coast' },
      ],
    },
    {
      slug: 'chefs-table',
      name: 'Chef’s table',
      h1: 'Chef’s table in an Oahu villa — the island, not a restaurant pass.',
      title: 'Chef’s table in an Oahu villa | myCHEF',
      description:
        'Private chef’s table at your Oahu kitchen island. Guests watch the pass in the house. Not a resort communal table.',
      lede:
        'Three seats at the koa counter. The pan, the catch, the window. This is not a ticketed restaurant table we do not own.',
      photo: 'svcChefsTableOahu',
      body: [
        'The villa kitchen is the room. Kahala islands and Ko Olina counters that actually have a pass. Compact condos may not hold it — we say so on the quote.',
        'Halo tasting language stays labeled as posture. We do not make a Michelin claim.',
      ],
      faqs: [
        {
          q: 'How many at the counter?',
          a: 'Usually two to six. Past that it becomes a seated dinner. See /guest-counts.',
        },
        {
          q: 'Omakase?',
          a: 'Sushi-forward is a menu direction on /menus — not a separate brand and not a claim we cannot source.',
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/menus', label: 'Menus' },
        { path: '/private-chef', label: 'What’s included' },
      ],
    },
    {
      slug: 'kids-menus',
      name: 'Kids at the table',
      h1: 'Kids at the Oahu table — planned with the adults.',
      title: 'Kids at the Oahu table | myCHEF',
      description:
        'Children’s plates on Oahu planned with the adults’ menu. Kailua weeks and Ko Olina villas. Not a freezer afterthought.',
      lede:
        'The kids eat when the adults eat. Simpler plates, same kitchen, same night. Kailua family weeks are built for this.',
      photo: 'svcKidsOahu',
      body: [
        'Kailua and Lanikai houses often hold multi-day packages. Town apartments can too if the stove is real. See /kamaaina for resident Tuesdays.',
        'Dietary for kids is /dietary. We do not print a fake kids’ carte.',
      ],
      faqs: [
        {
          q: 'Separate kids’ sitting?',
          a: 'If the house wants it. Usually one service, two plate styles.',
        },
        {
          q: 'Is this a tourist SKU?',
          a: 'Visitor families go through / or /vacation-chef. Resident weekly is /kamaaina. Same kitchen standard.',
        },
      ],
      related: [
        { path: '/kailua', label: 'Kailua' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/vacation-chef', label: 'Vacation chef' },
      ],
    },
    ...gatedServices.oahu,
    ...residentLineList.oahu,
    ...feeStackList.oahu,
  ],
  maui: [
    {
      slug: 'what-we-dont-do',
      name: 'What we will not claim',
      h1: 'What we will not claim on Maui.',
      title: 'What we will not claim on Maui | myCHEF',
      description:
        'No invented Maui guest reviews, no Lahaina luxury-dining brand, no ballroom citywides. Published prices and a written quote are the proof.',
      lede:
        'We cook villas. We do not staff ballrooms. We do not market West Maui as a Lahaina dining brand. Reviews publish after verified events.',
      photo: 'svcHonestyMaui',
      body: [
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) and private chef Maui (${SEARCH_VOLUMES['private chef maui']}) live on /catering and /. This page holds the refusals so those doors stay honest.`,
        'No invented chef names. No implied hotel affiliation. Upcountry is a surcharge, not a surprise. See /lahaina for how we name West Maui.',
      ],
      faqs: [
        {
          q: 'Lotus Chefs or elite Maui chef?',
          a: 'Related searches, not us. We do not impersonate another kitchen.',
        },
        {
          q: 'Do you have Maui reviews?',
          a: 'Not yet. We will not invent them.',
        },
      ],
      related: [
        { path: '/faq', label: 'FAQ' },
        { path: '/lahaina', label: 'How we name Lahaina' },
        { path: '/west-maui', label: 'West Maui' },
      ],
    },
    {
      slug: 'guest-counts',
      name: 'Guest counts',
      h1: 'Guest counts we staff on Maui — lawns about ten to seventy-five.',
      title: 'Guest counts we staff on Maui | myCHEF',
      description:
        'Maui dinners 2–15. Lawn receptions about 10–75. Larger formats quoted. Wailea, Kapalua, Makena.',
      lede:
        'A tasting for two in Kapalua is not a Wailea lawn. We write the headcount and the crew before the deposit.',
      photo: 'svcCountsMaui',
      body: [
        'Hotel-zoned residences with kitchens. Identical event plates for a lawn. Date Night stays a dinner band. See /honeymoon-dinners.',
        'West Maui Saturday traffic is planned into arrival. Headcount does not change the corridor. See /west-maui.',
      ],
      faqs: [
        {
          q: 'Seventy-five on a Kīhei lot?',
          a: 'Only if the house and the county allow it. The quote names the address. Larger is quoted or declined.',
        },
        {
          q: 'Same crew as catering?',
          a: 'Same department. /catering is the staffed-room keyword. This page is the number.',
        },
      ],
      related: [
        { path: '/events', label: 'Occasions' },
        { path: '/south-maui', label: 'South Maui' },
        { path: '/pricing', label: 'Starting prices' },
      ],
    },
    {
      slug: 'dietary',
      name: 'Dietary',
      h1: 'Dietary on Maui — designed in Wailea and West Maui kitchens.',
      title: 'Dietary on Maui — designed in, not theatre | myCHEF',
      description:
        'Vegan, gluten-free, allergy-aware Maui menus designed in advance. Claimed only when the villa kitchen can hold it.',
      lede:
        'Catch-led plates can still be gluten-free. Vegan is a designed tasting, not a garnish swap at the pass.',
      photo: 'svcDietaryMaui',
      body: [
        'Tell us on the quote. The 48-hour menu names the constraint. Sushi-forward is a direction, not a separate allergen kitchen.',
        'Kids’ plates with allergies sit on /kids-menus. Lawn identical plates still honor the list — or we do not take the night.',
      ],
      faqs: [
        {
          q: 'Pescatarian lawn of forty?',
          a: 'Yes when designed. Identical event plates, one dietary note on the quote.',
        },
        {
          q: 'Farm names for vegan produce?',
          a: 'Only in writing. We do not invent Upcountry farms.',
        },
      ],
      related: [
        { path: '/menus', label: 'Menus' },
        { path: '/kids-menus', label: 'Kids at the table' },
        { path: '/wailea', label: 'Wailea' },
      ],
    },
    {
      slug: 'honeymoon-dinners',
      name: 'Honeymoon dinners',
      h1: 'Honeymoon dinners on Maui — two seats, Wailea or Kapalua.',
      title: 'Honeymoon dinners on Maui — two seats | myCHEF',
      description:
        'Dinner-for-two in Wailea and Kapalua kitchens. Published starting prices. Wedding-week stacks live on /weddings and /wedding-week.',
      lede:
        'The picture people send. Two plates at blue hour. Not four wedding lines swallowed into one romantic blur.',
      photo: 'svcHoneymoonMaui',
      body: [
        `Wedding catering Maui (${SEARCH_VOLUMES['wedding catering maui']}) is /weddings. This page is two seats. Welcome dinner for the arriving party is /events/welcome-dinners.`,
        'Kapalua is often dinner for two. Wailea can be a tasting counter — see /chefs-table.',
      ],
      faqs: [
        {
          q: 'Can this start the wedding week?',
          a: 'As its own line, yes. The week stack is /wedding-week.',
        },
        {
          q: 'West Maui two-top?',
          a: 'Kāʻanapali and Kapalua houses with kitchens. Tell us the address. See /west-maui.',
        },
      ],
      related: [
        { path: '/chefs-table', label: 'Chef’s table' },
        { path: '/wedding-week', label: 'Wedding week' },
        { path: '/kapalua', label: 'Kapalua' },
      ],
    },
    {
      slug: 'chefs-table',
      name: 'Chef’s table',
      h1: 'Chef’s table in a Maui villa — the counter, not a resort communal table.',
      title: 'Chef’s table in a Maui villa | myCHEF',
      description:
        'Private chef’s table at a Wailea or Kapalua kitchen counter. Guests watch the tasting. Not a ticketed restaurant.',
      lede:
        'Open kitchen, Molokini in the window, courses across the counter. This is the house pass — not a communal resort table we do not run.',
      photo: 'svcChefsTableMaui',
      body: [
        'Wailea open kitchens are the usual room. Kapalua counters that actually face the cook. A lawn of forty is not a chef’s table.',
        'Halo tasting language stays labeled as posture. No Michelin claim.',
      ],
      faqs: [
        {
          q: 'Sushi at the counter?',
          a: 'A menu direction we can arrange when sourcing holds. Not a separate brand.',
        },
        {
          q: 'Same as private chef Maui?',
          a: `Private chef Maui (${SEARCH_VOLUMES['private chef maui']}) is the dinner door on /. This URL is the counter format.`,
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/wailea', label: 'Wailea' },
        { path: '/menus', label: 'Menus' },
      ],
    },
    {
      slug: 'kids-menus',
      name: 'Kids at the table',
      h1: 'Kids at the Maui table — Kīhei weeks and Wailea houses.',
      title: 'Kids at the Maui table | myCHEF',
      description:
        'Children’s plates on Maui planned with the adults’ menu. Kīhei vacation homes and Wailea villas. Not a freezer afterthought.',
      lede:
        'South Maui family weeks are built for this. Adult catch, simpler plates beside. One service.',
      photo: 'svcKidsMaui',
      body: [
        'Kīhei is often the family house. Wailea can be too. West Maui decks as well — see /south-maui and /west-maui.',
        'Dietary for kids is /dietary. Multi-day is /vacation-chef.',
      ],
      faqs: [
        {
          q: 'Kids on a lawn reception?',
          a: 'Yes as plated or buffet lines designed in. Headcount still /guest-counts.',
        },
        {
          q: 'High chairs?',
          a: 'The house provides them. We cook around the table that exists.',
        },
      ],
      related: [
        { path: '/kihei', label: 'Kīhei' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/vacation-chef', label: 'Vacation chef' },
      ],
    },
    ...gatedServices.maui,
    ...residentLineList.maui,
    ...feeStackList.maui,
  ],
  kauai: [
    {
      slug: 'what-we-dont-do',
      name: 'What we will not claim',
      h1: 'What we will not claim on Kauai.',
      title: 'What we will not claim on Kauai | myCHEF',
      description:
        'Inquiry stage. No fake live roster, no invented Kauai guest reviews, no waitlist dressed as booked. The bridge clause is written. Published prices.',
      lede:
        'Both shores. Inquiry. We staff the estate when a crew exists. We will not print “now serving Kauaʻi” ahead of that.',
      photo: 'svcHonestyKauai',
      body: [
        `Private chef Kauai and Kauai catering share ${SEARCH_VOLUMES['private chef kauai']} monthly. Those titles live on / and /catering. This page is the refusal list.`,
        'Far-North inherits /hanalei-bridge. We do not invent a flat driving fee that covers the island. Guest reviews: none yet.',
      ],
      faqs: [
        {
          q: 'Is inquiry a waitlist?',
          a: 'Inquiry means we confirm a crew before we take the night. You still get a written quote.',
        },
        {
          q: 'South Shore chef as a brand?',
          a: 'No. One department, two shores. See /south-shore.',
        },
      ],
      related: [
        { path: '/faq', label: 'FAQ' },
        { path: '/hanalei-bridge', label: 'Bridge clause' },
        { path: '/coverage', label: 'Coverage' },
      ],
    },
    {
      slug: 'guest-counts',
      name: 'Guest counts',
      h1: 'Guest counts we staff on Kauai — estate formats to about seventy-five.',
      title: 'Guest counts we staff on Kauai | myCHEF',
      description:
        'Kauai dinners 2–15. Estate receptions about 10–75. Inquiry stage. Larger formats quoted. Princeville, Hanalei, Poʻipū.',
      lede:
        'An estate table looking into a valley is not a ballroom. We staff to about seventy-five when a crew exists.',
      photo: 'svcCountsKauai',
      body: [
        'Inquiry stage. Headcount is still written. Far-North weather can shrink the outdoor table — the clause is /hanalei-bridge.',
        'Dinner for two is /honeymoon-dinners. The week stack is /wedding-week.',
      ],
      faqs: [
        {
          q: 'A hundred on a North Shore lawn?',
          a: 'Quoted or declined. About seventy-five is the published hold. The road may decide.',
        },
        {
          q: 'South Shore larger than North?',
          a: 'The house decides, not the shore. Poʻipū still sits in the same guest-count bands.',
        },
      ],
      related: [
        { path: '/events', label: 'Estate events' },
        { path: '/wedding-week', label: 'Wedding week' },
        { path: '/north-shore', label: 'North Shore' },
      ],
    },
    {
      slug: 'dietary',
      name: 'Dietary',
      h1: 'Dietary on Kauai — designed for the shore you are on.',
      title: 'Dietary on Kauai — designed in, not theatre | myCHEF',
      description:
        'Vegan, gluten-free, allergy-aware Kauai menus designed in advance. North Shore covered plan, South Shore fire. Inquiry stage.',
      lede:
        'The handshake poke can be gluten-free. Wood-grilled catch is a South Shore fire question. We design it before we claim it.',
      photo: 'svcDietaryKauai',
      body: [
        'Inquiry stage does not mean a fake dietary promise. The 48-hour menu names the shore and the constraint.',
        'Kids’ plates: /kids-menus. Menus process: /menus.',
      ],
      faqs: [
        {
          q: 'Shellfish allergy on the North Shore?',
          a: 'Designed in. We will not run a mixed grill that cannot be held.',
        },
        {
          q: 'Vegan retreat days?',
          a: 'Full-board retreats are /events/retreats — dietary is table stakes, claimed only when true.',
        },
      ],
      related: [
        { path: '/menus', label: 'Menus' },
        { path: '/south-shore', label: 'South Shore' },
        { path: '/events/retreats', label: 'Retreats' },
      ],
    },
    {
      slug: 'honeymoon-dinners',
      name: 'Honeymoon dinners',
      h1: 'Honeymoon dinners on Kauai — two seats, both shores.',
      title: 'Honeymoon dinners on Kauai — two seats | myCHEF',
      description:
        'Dinner-for-two on Princeville terraces or Poʻipū kitchens. Inquiry stage. Wedding-week stacks live on /weddings.',
      lede:
        'Two plates, mist or sun. Not an estate reception. Far-North two-tops still inherit the bridge clause.',
      photo: 'svcHoneymoonKauai',
      body: [
        `Kauai wedding catering (${SEARCH_VOLUMES['kauai wedding catering']}) is /weddings. This page is two seats. Inquiry list with the shore.`,
        'Princeville and Poʻipū are the usual rooms. Hanalei far-North: /hanalei-bridge.',
      ],
      faqs: [
        {
          q: 'Can we book Date Night without the week?',
          a: 'Yes. The week is optional.',
        },
        {
          q: 'Covered terrace if it rains?',
          a: 'North Shore gets the covered plan. We write it.',
        },
      ],
      related: [
        { path: '/chefs-table', label: 'Chef’s table' },
        { path: '/princeville', label: 'Princeville' },
        { path: '/poipu', label: 'Poʻipū' },
      ],
    },
    {
      slug: 'chefs-table',
      name: 'Chef’s table',
      h1: 'Chef’s table in a Kauai villa — the counter facing the mountains.',
      title: 'Chef’s table in a Kauai villa | myCHEF',
      description:
        'Private chef’s table at a Princeville or Poʻipū kitchen counter. Inquiry stage. Not a resort communal table.',
      lede:
        'The pass is the island in the house. Misted peaks or pale cliffs. Not a ticketed restaurant we do not own.',
      photo: 'svcChefsTableKauai',
      body: [
        'Inquiry stage. Counters that actually face the cook. Compact galleys may not hold it — the quote says so.',
        'Halo tasting language stays labeled as posture.',
      ],
      faqs: [
        {
          q: 'How many at the counter?',
          a: 'Two to six. Past that it is a seated dinner. See /guest-counts.',
        },
        {
          q: 'Same as private chef Kauai?',
          a: `The dinner door is /. This URL is the counter format.`,
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/menus', label: 'Menus' },
        { path: '/north-shore', label: 'North Shore' },
      ],
    },
    {
      slug: 'kids-menus',
      name: 'Kids at the table',
      h1: 'Kids at the Kauai table — Kapaʻa houses and both shores.',
      title: 'Kids at the Kauai table | myCHEF',
      description:
        'Children’s plates on Kauai planned with the adults’ menu. Kapaʻa, Poʻipū, Princeville. Inquiry stage. Not a freezer afterthought.',
      lede:
        'East-side town houses often hold families. The North and South do too. One service, two plate styles.',
      photo: 'svcKidsKauai',
      body: [
        'Kapaʻa is a live corridor. Poʻipū pool kitchens and Princeville estates as well. Inquiry stage.',
        'Dietary: /dietary. Multi-day: /vacation-chef.',
      ],
      faqs: [
        {
          q: 'Kids and the bridge clause?',
          a: 'Far-North still inherits weather. We move the night rather than forfeit. See /hanalei-bridge.',
        },
        {
          q: 'Simple pasta?',
          a: 'If it fits the designed menu. We do not print a fake kids’ carte.',
        },
      ],
      related: [
        { path: '/kapaa', label: 'Kapaʻa' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/vacation-chef', label: 'Vacation chef' },
      ],
    },
    ...gatedServices.kauai,
    ...residentLineList.kauai,
    ...feeStackList.kauai,
  ],
  bigisland: [
    {
      slug: 'what-we-dont-do',
      name: 'What we will not claim',
      h1: 'What we will not claim on Hawaiʻi Island.',
      title: 'What we will not claim on Hawaiʻi Island | myCHEF',
      description:
        'No whole-island coverage, no invented farm names, no fake guest reviews, no same-day Kona–Hilo round trip. West side first. Inquiry stage.',
      lede:
        'Four thousand square miles. We cook the west-side radius. Hilo is a different day. Coffee origin is labeled when the law requires it.',
      photo: 'svcHonestyBigisland',
      body: [
        `Private chef Big Island and private chef Kona are ${SEARCH_VOLUMES['private chef big island']}. Big island catering is ${SEARCH_VOLUMES['big island catering']}. Those titles live on / and /catering. This page is the map of refusals.`,
        'See /east-side, /coffee-act-198, /kohala-corridor. Event weeks compress the calendar: /ironman-weeks. Reviews: none yet.',
      ],
      faqs: [
        {
          q: 'Now serving Hilo?',
          a: 'Quote-only with dedicated staffing. We will not publish that ahead of a crew. See /east-side.',
        },
        {
          q: 'Named Kona farm on the card?',
          a: 'Only in writing. Act 198 from 2027. See /coffee-act-198.',
        },
      ],
      related: [
        { path: '/faq', label: 'FAQ' },
        { path: '/east-side', label: 'East side' },
        { path: '/coverage', label: 'Coverage' },
      ],
    },
    {
      slug: 'guest-counts',
      name: 'Guest counts',
      h1: 'Guest counts we staff on Hawaiʻi Island — west-side tables, not the whole island.',
      title: 'Guest counts we staff on Hawaiʻi Island | myCHEF',
      description:
        'West-side dinners 2–15. Receptions about 10–75. Hilo is a different day. Inquiry stage. Larger formats quoted.',
      lede:
        'Eight on a lava terrace is a night we know. A hundred across two climate zones is not. Headcount is written with the address.',
      photo: 'svcCountsBigisland',
      body: [
        'West-side first. Waikoloa, Mauna Lani, Kona town. East side is dedicated staffing — not added onto a Waikoloa count.',
        'Dinner for two: /honeymoon-dinners. Retreat full-board: /events/retreats.',
      ],
      faqs: [
        {
          q: 'Ironman week larger lists?',
          a: 'Town compresses. Flag dates early. Headcount still has a ceiling. See /ironman-weeks.',
        },
        {
          q: 'Volcano dinner for twelve?',
          a: 'Quote-only east side. See /east-side.',
        },
      ],
      related: [
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/events', label: 'Occasions' },
        { path: '/pricing', label: 'Starting prices' },
      ],
    },
    {
      slug: 'dietary',
      name: 'Dietary',
      h1: 'Dietary on Hawaiʻi Island — designed west-side first.',
      title: 'Dietary on Hawaiʻi Island — designed in, not theatre | myCHEF',
      description:
        'Vegan, gluten-free, allergy-aware Kona–Kohala menus designed in advance. Claimed only when the west-side kitchen can hold it. Inquiry stage.',
      lede:
        'Kanpachi can be dairy-free. Coffee on the crust is coffee, origin when documented. We design the constraint before we print it.',
      photo: 'svcDietaryBigisland',
      body: [
        'West-side provisioning for west-side nights. East-side dietary is its own team day. See /menus and /coffee-act-198.',
        'Kids: /kids-menus. Retreat full-board dietary is table stakes on /events/retreats — claimed only when true.',
      ],
      faqs: [
        {
          q: 'Gluten-free coffee crust?',
          a: 'The crust is a recipe question. Origin labeling is a different law. We will not confuse the two.',
        },
        {
          q: 'Vegan Hilo?',
          a: 'East side is quote-only. Do not assume a west-side vegan menu travels.',
        },
      ],
      related: [
        { path: '/menus', label: 'Menus' },
        { path: '/coffee-act-198', label: 'Coffee origin' },
        { path: '/kona', label: 'Kona' },
      ],
    },
    {
      slug: 'honeymoon-dinners',
      name: 'Honeymoon dinners',
      h1: 'Honeymoon dinners on Hawaiʻi Island — two seats, west-side lava.',
      title: 'Honeymoon dinners on Hawaiʻi Island — two seats | myCHEF',
      description:
        'Dinner-for-two on Kona–Kohala terraces. Inquiry stage. Wedding-week stacks live on /weddings. Not a Hilo add-on.',
      lede:
        'Two plates, hard sun or sunset, Mauna Kea faint. East side is a different day.',
      photo: 'svcHoneymoonBigisland',
      body: [
        'West-side villas first. Waikoloa and the Kohala Coast are the usual rooms. The week stack is /weddings. Welcome night is /events/welcome-dinners.',
        'Inquiry stage. Published starting prices from $125 a guest on this island.',
      ],
      faqs: [
        {
          q: 'Volcano two-top?',
          a: 'Quote-only east side with dedicated staffing. See /east-side.',
        },
        {
          q: 'Same as private chef Kona?',
          a: `Private chef Kona (${SEARCH_VOLUMES['private chef kona']}) is the dinner door on /. This URL is two seats.`,
        },
      ],
      related: [
        { path: '/chefs-table', label: 'Chef’s table' },
        { path: '/kohala', label: 'Kohala Coast' },
        { path: '/weddings', label: 'Wedding week' },
      ],
    },
    {
      slug: 'chefs-table',
      name: 'Chef’s table',
      h1: 'Chef’s table in a Kona villa — the counter, lava in the window.',
      title: 'Chef’s table in a Kona villa | myCHEF',
      description:
        'Private chef’s table at a Kona or Kohala kitchen counter. Inquiry stage. Guests watch the sear. Not a resort communal table.',
      lede:
        'Hard sun, coffee slopes, the pan. This is the house pass — not a ticketed restaurant.',
      photo: 'svcChefsTableBigisland',
      body: [
        'Kona town and Kohala resort residences with a real counter. Galleys may not hold it. Inquiry stage.',
        'Halo tasting language stays labeled as posture. Farm names only in writing.',
      ],
      faqs: [
        {
          q: 'How many at the counter?',
          a: 'Two to six. Past that it is a seated dinner. See /guest-counts.',
        },
        {
          q: 'Coffee tasting with dinner?',
          a: 'Coffee may be on the crust. A farm tour is not a SKU. See /coffee-act-198.',
        },
      ],
      related: [
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
        { path: '/kona', label: 'Kona' },
        { path: '/menus', label: 'Menus' },
      ],
    },
    {
      slug: 'kids-menus',
      name: 'Kids at the table',
      h1: 'Kids at the Hawaiʻi Island table — west-side family nights.',
      title: 'Kids at the Hawaiʻi Island table | myCHEF',
      description:
        'Children’s plates on the Kona–Kohala corridor planned with the adults’ menu. Inquiry stage. Not a freezer afterthought.',
      lede:
        'Waikoloa residences and Kona houses. Adult kanpachi, simpler plates beside. East side is a different day.',
      photo: 'svcKidsBigisland',
      body: [
        'West-side first. Multi-day family weeks: /vacation-chef. Dietary: /dietary. Inquiry stage.',
        'Ironman weeks pack town — flag those dates. See /ironman-weeks.',
      ],
      faqs: [
        {
          q: 'Kids on a lava terrace at noon?',
          a: 'Shade and timing are the house. Hard sun is real. We cook the kitchen you have.',
        },
        {
          q: 'Hilo family week?',
          a: 'Quote-only east side. See /east-side.',
        },
      ],
      related: [
        { path: '/waikoloa', label: 'Waikoloa' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/vacation-chef', label: 'Vacation chef' },
      ],
    },
    ...gatedServices.bigisland,
    ...residentLineList.bigisland,
    ...feeStackList.bigisland,
  ],
};

export function getIslandService(island: IslandId, slug: string): UniqueCell | undefined {
  return islandServices[island].find((row) => row.slug === slug);
}

export function islandServiceSlugs(island: IslandId): string[] {
  return islandServices[island].map((row) => row.slug);
}
