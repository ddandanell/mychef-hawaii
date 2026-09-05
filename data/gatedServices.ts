import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { UniqueCell } from './uniqueCells';

/**
 * Catalog service cells that stay off the money-keyword doors.
 * Meal prep / classes / omakase are honesty pages until a bench exists.
 */

export const gatedServices: Record<IslandId, UniqueCell[]> = {
  oahu: [
    {
      slug: 'rehearsal-dinners',
      name: 'Rehearsal dinners',
      h1: 'Oahu rehearsal dinners — the night before, as its own line.',
      title: 'Oahu rehearsal dinners as their own line | myCHEF',
      description:
        'Seated rehearsal dinners in Kahala dining rooms and Ko Olina villas. Not the reception. Wedding-week stacks live on /weddings. Not the catering keyword.',
      lede:
        'Twelve seats, plated fish, the night before. The lawn reception is a different door. We write this line separately so the quote is honest.',
      photo: 'svcRehearsalOahu',
      body: [
        `Wedding catering Oahu (${SEARCH_VOLUMES['wedding catering oahu']}) lives on /weddings. Oahu catering (${SEARCH_VOLUMES['oahu catering']}) lives on /catering. This URL is the seated night before.`,
        'Kahala dining rooms hold a table. Ko Olina villas hold a week. Welcome dinners are /events/welcome-dinners. Guest counts: /guest-counts.',
      ],
      faqs: [
        {
          q: 'Is this the same as the wedding?',
          a: 'Same kitchen. Different line. The reception stays on /weddings.',
        },
        {
          q: 'Can it be family-style?',
          a: 'Yes. Plated is the usual rehearsal. Formats live under /catering.',
        },
      ],
      related: [
        { path: '/weddings', label: 'Weddings' },
        { path: '/events/welcome-dinners', label: 'Welcome dinners' },
        { path: '/kahala', label: 'Kahala' },
      ],
    },
    {
      slug: 'meal-prep',
      name: 'Meal prep',
      h1: 'Oahu meal prep stays gated until utilization is proven.',
      title: 'Oahu meal prep is gated until proven | myCHEF',
      description:
        'Volume meal prep on Oahu is not a standing SKU. Inquiry only until utilization is proven. Weekly resident cooking is /kamaaina.',
      lede:
        'Labeled containers are not a product we sell today. A fridge program needs a bench we will not invent. Ask; do not expect a rate card.',
      photo: 'svcMealprepOahu',
      body: [
        'This page exists so we do not rank a fake meal-prep SKU. Kamaʻāina weekly service is /kamaaina. Stay Chef weeks are /vacation-chef. Those are cooked in the house, not packed for the week ahead.',
        'If utilization is later proven, prices publish here. Until then the honest answer is inquiry.',
      ],
      faqs: [
        {
          q: 'Can I order five days of lunches?',
          a: 'Not as a published product. Join the inquiry. We will not invent a fridge program.',
        },
        {
          q: 'Is this the resident line?',
          a: 'No. Residents open /kamaaina.',
        },
      ],
      related: [
        { path: '/kamaaina', label: 'Kamaʻāina line' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/vacation-chef', label: 'Vacation chef' },
      ],
    },
    {
      slug: 'cooking-classes',
      name: 'Cooking classes',
      h1: 'Oahu cooking classes publish only with a real instructor bench.',
      title: 'Oahu cooking classes wait on a real instructor bench | myCHEF',
      description:
        'Experience classes on Oahu stay unpublished until a named instructor bench exists. We will not sell a class we cannot staff.',
      lede:
        'Empty boards. A stove. No standing class. When a real instructor exists, this page will name the format — not before.',
      photo: 'svcClassesOahu',
      body: [
        'Halo products stay labeled as posture. A cooking class is an instructor product. Until the bench is real, this URL is the refusal.',
        'Private chef dinners are / and /private-chef. Chef’s table nights are /chefs-table. Those are service, not a class.',
      ],
      faqs: [
        {
          q: 'Can the chef teach us to make poke?',
          a: 'Not as a published class. A dinner can include a short pass at the counter. That is /chefs-table, not this page.',
        },
        {
          q: 'Will you invent a teacher name?',
          a: 'No. See /what-we-dont-do.',
        },
      ],
      related: [
        { path: '/chefs-table', label: "Chef's table" },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/about', label: 'The Oahu crew' },
      ],
    },
    {
      slug: 'omakase-at-home',
      name: 'Omakase at home',
      h1: 'Omakase at home on Oahu — tasting in the villa, not a restaurant claim.',
      title: 'Omakase at home on Oahu — tasting in the villa | myCHEF',
      description:
        'Premium tasting at home in Kahala and Ko Olina. Menu and sourcing verification are launch gates. Not a Michelin claim. Not the private-chef keyword.',
      lede:
        'A paced tasting at the kitchen island. We will not borrow a restaurant’s name. Sourcing is written on the menu or it is not claimed.',
      photo: 'svcOmakaseOahu',
      body: [
        `Private chef Oahu (${SEARCH_VOLUMES['private chef oahu']}) is the dinner door on this host’s home. This URL is the tasting arc so those titles do not collide.`,
        'Chef’s table seating is /chefs-table. Honeymoon two-tops are /honeymoon-dinners. Sample process: /menus. Proof: a written quote.',
      ],
      faqs: [
        {
          q: 'Is this omakase like a restaurant?',
          a: 'It is a tasting in your kitchen. We do not claim stars we do not have.',
        },
        {
          q: 'Will you name a fishmonger?',
          a: 'When the invoice can stand behind it. We do not invent farm names.',
        },
      ],
      related: [
        { path: '/chefs-table', label: "Chef's table" },
        { path: '/menus', label: 'Menus' },
        { path: '/honeymoon-dinners', label: 'Dinner for two' },
      ],
    },
    {
      slug: 'corporate-catering',
      name: 'Corporate catering',
      h1: 'Executive dinners in Oahu houses — not citywides.',
      title: 'Executive dinners in Oahu houses — not citywides | myCHEF',
      description:
        'Offsites and executive dinners in Kahala and Ko Olina houses. HCC citywides are closed through 2027 and are not our product. Not the catering money keyword.',
      lede:
        'A house, a small offsite table, the guest list you actually have. Not the Hawaiʻi Convention Center. Not a MICE play while citywides are closed.',
      photo: 'svcCorpcatOahu',
      body: [
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) stays on /catering. This URL is the executive house dinner so those titles do not collide.`,
        'HCC citywides: /conventions. Occasion index: /events/corporate-events. Retreat cooking: /events/retreats. Full-board food as a line: /retreat-catering.',
      ],
      faqs: [
        {
          q: 'Can you staff a convention lunch?',
          a: 'No. Citywides are closed through 2027 and are not our product. See /conventions.',
        },
        {
          q: 'Production crew in a house?',
          a: 'Call-time breakfasts in a residence, yes. A stage downtown, no.',
        },
      ],
      related: [
        { path: '/conventions', label: 'Not MICE' },
        { path: '/events/corporate-events', label: 'House offsites' },
        { path: '/catering', label: 'Staffed catering' },
      ],
    },
    {
      slug: 'retreat-catering',
      name: 'Retreat catering',
      h1: 'Oahu full-board retreat kitchens — food as its own line.',
      title: 'Oahu full-board retreat kitchens — food as its own line | myCHEF',
      description:
        'Full-board retreat days in Oahu houses. Dietary designed in. Distinct from the occasion page /events/retreats. Not the catering money keyword.',
      lede:
        'Breakfast through dinner as a food line. The occasion lives next door. We split them so a planner can buy the kitchen without buying the story.',
      photo: 'svcRetreatcatOahu',
      body: [
        'The occasion document is /events/retreats. This URL is the food: three meals, dietary as table stakes, claimed only when the Kahala or Ko Olina kitchen can hold it.',
        `Oahu catering (${SEARCH_VOLUMES['oahu catering']}) remains /catering. Multi-day Stay Chef: /vacation-chef. Dietary: /dietary.`,
      ],
      faqs: [
        {
          q: 'Same as /events/retreats?',
          a: 'That page is the occasion. This page is the kitchen line. Buy one or both.',
        },
        {
          q: 'Full-board vegan week?',
          a: 'Designed in advance. See /dietary. We will not claim theatre.',
        },
      ],
      related: [
        { path: '/events/retreats', label: 'Retreat occasion' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/vacation-chef', label: 'Vacation chef' },
      ],
    },
  ],
  maui: [
    {
      slug: 'rehearsal-dinners',
      name: 'Rehearsal dinners',
      h1: 'Maui rehearsal dinners — a seated night, not the reception.',
      title: 'Maui rehearsal dinners — a seated night | myCHEF',
      description:
        'Seated rehearsal dinners in Wailea, Kapalua and Kāʻanapali houses. Not the lawn reception. Wedding-week stacks live on /wedding-week.',
      lede:
        'A table, paced courses, the night before. The reception is a different line on the week. West Maui Saturday traffic is planned into arrival.',
      photo: 'svcRehearsalMaui',
      body: [
        `Wedding catering Maui (${SEARCH_VOLUMES['wedding catering maui']}) is small. The wedding-week door is /wedding-week. Maui catering (${SEARCH_VOLUMES['maui catering']}) is /catering. This URL is the seated rehearsal.`,
        'Kapalua lanais and Wailea dining rooms. Welcome nights: /events/welcome-dinners. Traffic: /west-maui.',
      ],
      faqs: [
        {
          q: 'Is this the welcome dinner?',
          a: 'Welcome is /events/welcome-dinners. Rehearsal is the seated night before the ceremony.',
        },
        {
          q: 'Lahaina rehearsal?',
          a: 'West Maui houses with kitchens. See /lahaina for how we name that.',
        },
      ],
      related: [
        { path: '/wedding-week', label: 'Wedding week' },
        { path: '/west-maui', label: 'West Maui' },
        { path: '/events/welcome-dinners', label: 'Welcome dinners' },
      ],
    },
    {
      slug: 'meal-prep',
      name: 'Meal prep',
      h1: 'Maui meal prep stays gated — inquiry, not a standing SKU.',
      title: 'Maui meal prep is gated until proven | myCHEF',
      description:
        'Volume meal prep on Maui is not a standing SKU. Inquiry only until utilization is proven. Villa weeks are /vacation-chef.',
      lede:
        'We will not sell a fridge program we cannot staff in Wailea or West Maui. Ask. Do not expect a published band.',
      photo: 'svcMealprepMaui',
      body: [
        'Stay Chef weeks cook in the house each day — /vacation-chef. That is not packed lunches. This page stays gated until utilization is proven.',
        'Personal chef Maui is a measured phrase with low volume. It does not belong in a visitor-dinner title and it does not unlock a fake prep SKU.',
      ],
      faqs: [
        {
          q: 'Can you fill the villa fridge on landing day?',
          a: 'A shop-and-stock for a Stay Chef week, yes. A five-day packed program, not as a published product.',
        },
        {
          q: 'Upcountry prep?',
          a: 'Surcharge zone even for dinners. See /coverage. Prep stays gated everywhere.',
        },
      ],
      related: [
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/south-maui', label: 'South Maui' },
      ],
    },
    {
      slug: 'cooking-classes',
      name: 'Cooking classes',
      h1: 'Maui cooking classes wait on a named instructor — none published yet.',
      title: 'Maui cooking classes wait on a named instructor | myCHEF',
      description:
        'Experience classes on Maui stay unpublished until a named instructor exists. We will not sell a class we cannot staff in Wailea or West Maui.',
      lede:
        'Open kitchen, unused stations. When an instructor is real, this page will say so. Until then it is a refusal.',
      photo: 'svcClassesMaui',
      body: [
        'A counter pass during dinner is /chefs-table. A class is an instructor product. Halo language stays labeled as posture.',
        'Private chef Maui is the dinner door on this host’s home. This URL does not steal that title.',
      ],
      faqs: [
        {
          q: 'Farm-to-table class in Upcountry?',
          a: 'Not a published SKU. We do not invent farm names. See /what-we-dont-do.',
        },
        {
          q: 'Can dinner include a lesson?',
          a: 'A short pass at the counter, yes — /chefs-table. Not this page.',
        },
      ],
      related: [
        { path: '/chefs-table', label: "Chef's table" },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/about', label: 'The Maui crew' },
      ],
    },
    {
      slug: 'omakase-at-home',
      name: 'Omakase at home',
      h1: 'Omakase at home on Maui — a tasting arc in Wailea, not a Michelin claim.',
      title: 'Omakase at home on Maui — a tasting arc in Wailea | myCHEF',
      description:
        'Premium tasting at home in Wailea and Kapalua. Sourcing verification is a launch gate. Not a star claim. Not the private-chef keyword.',
      lede:
        'Courses at the open-kitchen counter. Molokini in the window if the house has it. We will not borrow a restaurant’s name.',
      photo: 'svcOmakaseMaui',
      body: [
        `Private chef Maui (${SEARCH_VOLUMES['private chef maui']}) is the dinner door. This URL is the tasting so those titles stay clean.`,
        'Chef’s table: /chefs-table. Two-tops: /honeymoon-dinners. Menus are designed per table: /menus.',
      ],
      faqs: [
        {
          q: 'Lotus Chefs or elite Maui chef omakase?',
          a: 'Related searches, not a stolen brand. We will not borrow Lotus Chefs or an “elite Maui chef” name. This URL is the tasting arc. Honesty: /what-we-dont-do.',
        },
        {
          q: 'Will you claim a fisherman?',
          a: 'When the invoice can stand behind it. Otherwise the dish is the dish.',
        },
      ],
      related: [
        { path: '/chefs-table', label: "Chef's table" },
        { path: '/wailea', label: 'Wailea' },
        { path: '/menus', label: 'Menus' },
      ],
    },
    {
      slug: 'corporate-catering',
      name: 'Corporate catering',
      h1: 'Executive dinners in Maui villas — not a ballroom.',
      title: 'Executive dinners in Maui villas — not a ballroom | myCHEF',
      description:
        'Offsites and executive dinners in Wailea, Kapalua and Kīhei houses. Not hotel ballrooms. Not the catering money keyword.',
      lede:
        'A villa kitchen, a small offsite list, South or West. We cook houses. We do not staff banquet rooms.',
      photo: 'svcCorpcatMaui',
      body: [
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) stays on /catering. This URL is the executive house dinner.`,
        'Occasion index: /events/corporate-events. Retreat cooking: /events/retreats. Full-board food line: /retreat-catering. Traffic: /west-maui.',
      ],
      faqs: [
        {
          q: 'Hotel conference lunch?',
          a: 'No. Residences and villas. Ballrooms are not the product.',
        },
        {
          q: 'Production in a South Maui house?',
          a: 'Call-time breakfasts in a residence, yes. See /south-maui.',
        },
      ],
      related: [
        { path: '/events/corporate-events', label: 'Villa offsites' },
        { path: '/south-maui', label: 'South Maui' },
        { path: '/catering', label: 'Staffed catering' },
      ],
    },
    {
      slug: 'retreat-catering',
      name: 'Retreat catering',
      h1: 'Maui full-board retreat kitchens — South and West houses.',
      title: 'Maui full-board retreat kitchens — South and West houses | myCHEF',
      description:
        'Full-board retreat days in Wailea, Kapalua and Kīhei. Distinct from /events/retreats. Dietary designed in. Not the catering money keyword.',
      lede:
        'Three meals in the house. The occasion page is next door. This page is the kitchen so a planner can buy food without buying the story.',
      photo: 'svcRetreatcatMaui',
      body: [
        'The occasion is /events/retreats. This URL is breakfast through dinner. Dietary is table stakes — /dietary. Multi-day: /vacation-chef.',
        `Maui catering (${SEARCH_VOLUMES['maui catering']}) remains /catering. Upcountry is a surcharge. See /coverage.`,
      ],
      faqs: [
        {
          q: 'Same as the retreat occasion page?',
          a: 'That page is why you gather. This page is how the kitchen runs.',
        },
        {
          q: 'West Maui full-board in Saturday traffic?',
          a: 'Arrival is planned. See /west-maui. We do not discover Honoapiʻilani on the invoice.',
        },
      ],
      related: [
        { path: '/events/retreats', label: 'Retreat occasion' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/west-maui', label: 'West Maui' },
      ],
    },
  ],
  kauai: [
    {
      slug: 'rehearsal-dinners',
      name: 'Rehearsal dinners',
      h1: 'Kauai rehearsal dinners — estate table, inquiry.',
      title: 'Kauai rehearsal dinners — estate table, inquiry | myCHEF',
      description:
        'Seated rehearsal dinners in Princeville, Hanalei and Poʻipū. Inquiry stage. Not the reception. Wedding-week stacks live on /wedding-week.',
      lede:
        'An estate table looking into a valley, or a South Shore dining room. Inquiry. Far-North inherits the bridge clause.',
      photo: 'svcRehearsalKauai',
      body: [
        `Kauai wedding catering (${SEARCH_VOLUMES['kauai wedding catering']}) is a thin measured phrase. The week door is /wedding-week. Kauai catering (${SEARCH_VOLUMES['kauai catering']}) is /catering. This URL is the seated rehearsal.`,
        'Far-North: /hanalei-bridge. Welcome: /events/welcome-dinners. Inquiry list with the shore.',
      ],
      faqs: [
        {
          q: 'Can I book a date now?',
          a: 'Join the inquiry with the shore and the dates. We will not fake instant confirm.',
        },
        {
          q: 'Hanalei rehearsal in surf season?',
          a: 'The bridge clause still applies. See /hanalei-bridge.',
        },
      ],
      related: [
        { path: '/wedding-week', label: 'Wedding week' },
        { path: '/hanalei-bridge', label: 'Bridge clause' },
        { path: '/princeville', label: 'Princeville' },
      ],
    },
    {
      slug: 'meal-prep',
      name: 'Meal prep',
      h1: 'Kauai meal prep stays gated — inquiry, not a standing SKU.',
      title: 'Kauai meal prep is gated until proven | myCHEF',
      description:
        'Volume meal prep on Kauai is not a standing SKU. Inquiry only. Estate weeks are /vacation-chef.',
      lede:
        'Unused containers in a Poʻipū kitchen. We will not invent a fridge program while this department is inquiry.',
      photo: 'svcMealprepKauai',
      body: [
        'Stay Chef: /vacation-chef. That is cooked daily, not packed. This page stays gated until utilization is proven — and until the department is staffed.',
        'Inquiry stage. Published starting prices for dinners still apply when we cook. Prep is not one of those products.',
      ],
      faqs: [
        {
          q: 'North Shore packed lunches for a hike week?',
          a: 'Not a published SKU. Far-North still inherits /hanalei-bridge even for dinners.',
        },
        {
          q: 'When will this open?',
          a: 'When utilization is proven and the crew exists. This page will change in public.',
        },
      ],
      related: [
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/south-shore', label: 'South Shore' },
      ],
    },
    {
      slug: 'cooking-classes',
      name: 'Cooking classes',
      h1: 'Kauai cooking classes stay unpublished until a bench exists.',
      title: 'Kauai cooking classes stay unpublished until a bench exists | myCHEF',
      description:
        'Experience classes on Kauai stay unpublished until a real instructor bench exists. Inquiry stage. We will not sell a class we cannot staff.',
      lede:
        'Empty Princeville boards. Mist in the window. No standing class. When an instructor is real, the page will say so.',
      photo: 'svcClassesKauai',
      body: [
        'A counter pass is /chefs-table. A class is an instructor product. Inquiry stage does not get a fake teacher name.',
        'Private chef Kauai is the dinner door on this host’s home. This URL does not steal that title.',
      ],
      faqs: [
        {
          q: 'Hanalei cooking lesson?',
          a: 'Not a published class. Far-North dinners still inherit /hanalei-bridge.',
        },
        {
          q: 'Will you name an instructor?',
          a: 'When one exists. See /what-we-dont-do.',
        },
      ],
      related: [
        { path: '/chefs-table', label: "Chef's table" },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/about', label: 'The Kauai crew' },
      ],
    },
    {
      slug: 'omakase-at-home',
      name: 'Omakase at home',
      h1: 'Omakase at home on Kauai — inquiry tasting, both shores.',
      title: 'Omakase at home on Kauai — inquiry tasting, both shores | myCHEF',
      description:
        'Premium tasting at home in Princeville and Poʻipū. Inquiry stage. Sourcing verification is a launch gate. Not a restaurant claim.',
      lede:
        'A paced tasting at the estate counter. South sun or North mist. We will not borrow a restaurant’s name while we are inquiry.',
      photo: 'svcOmakaseKauai',
      body: [
        `Private chef Kauai (${SEARCH_VOLUMES['private chef kauai']}) is the dinner door. This URL is the tasting arc.`,
        'Chef’s table: /chefs-table. Menus: /menus. Far-North still inherits /hanalei-bridge.',
      ],
      faqs: [
        {
          q: 'Can I book omakase this month?',
          a: 'Inquiry list with the shore. We will not fake a live roster.',
        },
        {
          q: 'Will you claim a Hanalei fisherman?',
          a: 'When the invoice can stand behind it. We do not invent names.',
        },
      ],
      related: [
        { path: '/chefs-table', label: "Chef's table" },
        { path: '/poipu', label: 'Poʻipū' },
        { path: '/menus', label: 'Menus' },
      ],
    },
    {
      slug: 'corporate-catering',
      name: 'Corporate catering',
      h1: 'Executive dinners on Kauai estates — inquiry.',
      title: 'Executive dinners on Kauai estates — inquiry | myCHEF',
      description:
        'Offsites and executive dinners in Princeville and Poʻipū houses. Inquiry stage. Not a convention play. Not the catering money keyword.',
      lede:
        'A small estate table. Both shores. Inquiry. We do not pretend Kauaʻi is a MICE island.',
      photo: 'svcCorpcatKauai',
      body: [
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) stays on /catering. This URL is the executive house dinner.`,
        'Occasion: /events/corporate-events. Retreat cooking: /events/retreats. Full-board food: /retreat-catering. Inquiry stage.',
      ],
      faqs: [
        {
          q: 'Can you staff a Līhuʻe conference?',
          a: 'No. Estates and villas. Not a convention product.',
        },
        {
          q: 'Silent retreat kitchen instead?',
          a: 'Food line: /retreat-catering. Occasion: /events/retreats.',
        },
      ],
      related: [
        { path: '/events/corporate-events', label: 'Estate offsites' },
        { path: '/north-shore', label: 'North Shore' },
        { path: '/catering', label: 'Staffed catering' },
      ],
    },
    {
      slug: 'retreat-catering',
      name: 'Retreat catering',
      h1: 'Kauai full-board retreat kitchens — inquiry, both shores.',
      title: 'Kauai full-board retreat kitchens — inquiry, both shores | myCHEF',
      description:
        'Full-board retreat days in Kauai houses. Inquiry stage. Distinct from /events/retreats. Dietary designed in. Not the catering money keyword.',
      lede:
        'Breakfast through dinner in the house. The mist and the fire plan follow the shore. The occasion page is next door.',
      photo: 'svcRetreatcatKauai',
      body: [
        'Occasion: /events/retreats. This URL is the kitchen line. Dietary: /dietary. Far-North: /hanalei-bridge. Multi-day: /vacation-chef.',
        `Kauai catering (${SEARCH_VOLUMES['kauai catering']}) remains /catering. Inquiry stage.`,
      ],
      faqs: [
        {
          q: 'Same as /events/retreats?',
          a: 'That page is the gathering. This page is the food line.',
        },
        {
          q: 'Vegan full-board on the North?',
          a: 'Designed in advance, claimed only when true. Bridge clause still applies.',
        },
      ],
      related: [
        { path: '/events/retreats', label: 'Retreat occasion' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/hanalei-bridge', label: 'Bridge clause' },
      ],
    },
  ],
  bigisland: [
    {
      slug: 'rehearsal-dinners',
      name: 'Rehearsal dinners',
      h1: 'Kohala rehearsal dinners — west-side night before, inquiry.',
      title: 'Kohala rehearsal dinners — west-side night before | myCHEF',
      description:
        'Seated rehearsal dinners on Kona–Kohala terraces. Inquiry stage. Not the reception. East side is a different day. Wedding stacks live on /weddings.',
      lede:
        'Eight seats on lava, plated kanpachi, Mauna Kea faint. The reception is a different line. East side is not an add-on.',
      photo: 'svcRehearsalBigisland',
      body: [
        `Wedding catering Hawaii (${SEARCH_VOLUMES['wedding catering hawaii']}) is a thin phrase. Private chef Kona (${SEARCH_VOLUMES['private chef kona']}) is the dinner door. This URL is the seated rehearsal.`,
        'West-side radius: /kohala-corridor. East side: /east-side. Inquiry stage.',
      ],
      faqs: [
        {
          q: 'Hilo rehearsal?',
          a: 'Quote-only dedicated staffing. See /east-side. Not a west-side round trip.',
        },
        {
          q: 'Ironman week?',
          a: 'Flag the dates. Town compresses. See /ironman-weeks.',
        },
      ],
      related: [
        { path: '/weddings', label: 'Weddings' },
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/kona', label: 'Kona' },
      ],
    },
    {
      slug: 'meal-prep',
      name: 'Meal prep',
      h1: 'Hawaiʻi Island meal prep stays gated — west side, inquiry.',
      title: 'Hawaiʻi Island meal prep is gated until proven | myCHEF',
      description:
        'Volume meal prep on Hawaiʻi Island is not a standing SKU. Inquiry only. West-side villa weeks are /vacation-chef. East side is a different day.',
      lede:
        'Unused containers in a Kona kitchen. Hard sun. We will not invent a fridge program while this department is inquiry.',
      photo: 'svcMealprepBigisland',
      body: [
        'Stay Chef: /vacation-chef. Cooked daily, not packed. This page stays gated until utilization is proven.',
        'West-side first. East-side prep is not a product. See /east-side. Coffee origin labeling is /coffee-act-198 — we do not invent farm names on a packed lunch either.',
      ],
      faqs: [
        {
          q: 'Can you pack Ironman week lunches?',
          a: 'Not a published SKU. Event weeks compress dinners too. See /ironman-weeks.',
        },
        {
          q: 'Hilo fridge program?',
          a: 'No. East side is quote-only dedicated days even for dinners.',
        },
      ],
      related: [
        { path: '/vacation-chef', label: 'Vacation chef' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/kohala-corridor', label: 'West-side radius' },
      ],
    },
    {
      slug: 'cooking-classes',
      name: 'Cooking classes',
      h1: 'Hawaiʻi Island cooking classes stay unpublished until a bench exists.',
      title: 'Hawaiʻi Island cooking classes wait on a named instructor | myCHEF',
      description:
        'Experience classes on Hawaiʻi Island stay unpublished until a named instructor exists. Inquiry stage. We will not sell a class we cannot staff.',
      lede:
        'Empty Kona stools. Coffee slopes in the window. No standing class. When an instructor is real, this page will change.',
      photo: 'svcClassesBigisland',
      body: [
        'A counter pass is /chefs-table. A class is an instructor product. We will not invent a Kona coffee-class brand. See /coffee-act-198.',
        'Private chef Big Island and private chef Kona are dinner doors. This URL does not steal those titles.',
      ],
      faqs: [
        {
          q: 'Coffee farm class?',
          a: 'Not a SKU. Named coffee follows Act 198. We do not invent farms.',
        },
        {
          q: 'Volcano cooking lesson?',
          a: 'East side is quote-only even for dinners. No class product. See /east-side.',
        },
      ],
      related: [
        { path: '/chefs-table', label: "Chef's table" },
        { path: '/coffee-act-198', label: 'Coffee origin' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
      ],
    },
    {
      slug: 'omakase-at-home',
      name: 'Omakase at home',
      h1: 'Omakase at home on Hawaiʻi Island — west-side tasting.',
      title: 'Omakase at home on Hawaiʻi Island — west-side tasting | myCHEF',
      description:
        'Premium tasting at home in Kona and Kohala. Inquiry stage. Sourcing verification is a launch gate. East side is a different day. Not a restaurant claim.',
      lede:
        'Kanpachi in courses at the kitchen counter. Lava in the window. We will not borrow a restaurant’s name. East side is not implied.',
      photo: 'svcOmakaseBigisland',
      body: [
        `Private chef Kona (${SEARCH_VOLUMES['private chef kona']}) and private chef Big Island (${SEARCH_VOLUMES['private chef big island']}) are dinner doors. This URL is the tasting.`,
        'Chef’s table: /chefs-table. Coffee on a crust follows /coffee-act-198. East side: /east-side.',
      ],
      faqs: [
        {
          q: 'Can I book this month?',
          a: 'Inquiry. We will not fake a live west-side roster.',
        },
        {
          q: 'Hilo tasting?',
          a: 'Quote-only dedicated day. See /east-side.',
        },
      ],
      related: [
        { path: '/chefs-table', label: "Chef's table" },
        { path: '/kona', label: 'Kona' },
        { path: '/kohala-corridor', label: 'West-side radius' },
      ],
    },
    {
      slug: 'corporate-catering',
      name: 'Corporate catering',
      h1: 'Executive dinners on the Kohala Coast — inquiry.',
      title: 'Executive dinners on the Kohala Coast — inquiry | myCHEF',
      description:
        'Offsites and executive dinners in Kona and Kohala houses. Inquiry stage. Not a Hilo add-on. Not the catering money keyword.',
      lede:
        'A west-side villa table. Hard sun. Not the whole island. Not a ballroom. Inquiry.',
      photo: 'svcCorpcatBigisland',
      body: [
        `Big island catering (${SEARCH_VOLUMES['big island catering']}) stays on /catering. This URL is the executive house dinner.`,
        'Occasion: /events/corporate-events. Retreat cooking: /events/retreats. Full-board food: /retreat-catering. Ironman weeks: /ironman-weeks.',
      ],
      faqs: [
        {
          q: 'Can you add a Hilo day onto a Waikoloa offsite?',
          a: 'As its own dedicated team day, quoted. Not as an unpaid errand. See /east-side.',
        },
        {
          q: 'Ironman week offsite?',
          a: 'Flag dates early. Town compresses. See /ironman-weeks.',
        },
      ],
      related: [
        { path: '/events/corporate-events', label: 'Villa offsites' },
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/catering', label: 'Staffed catering' },
      ],
    },
    {
      slug: 'retreat-catering',
      name: 'Retreat catering',
      h1: 'Hawaiʻi Island full-board retreat kitchens — west side.',
      title: 'Hawaiʻi Island full-board retreat kitchens — west side | myCHEF',
      description:
        'Full-board retreat days in Kona–Kohala houses. Inquiry stage. Distinct from /events/retreats. East side is a different day. Not the catering money keyword.',
      lede:
        'Breakfast fish, a small offsite table, lava heat. The occasion page is next door. This page is the kitchen.',
      photo: 'svcRetreatcatBigisland',
      body: [
        'Occasion: /events/retreats. This URL is breakfast through dinner. Dietary: /dietary. Multi-day: /vacation-chef. West-side first.',
        `Big island catering (${SEARCH_VOLUMES['big island catering']}) remains /catering. Hilo retreats are quote-only dedicated days — /east-side.`,
      ],
      faqs: [
        {
          q: 'Same as /events/retreats?',
          a: 'That page is the gathering. This page is the food line.',
        },
        {
          q: 'Volcano full-board?',
          a: 'Quote-only east side with dedicated staffing. Not a west-side round trip.',
        },
      ],
      related: [
        { path: '/events/retreats', label: 'Retreat occasion' },
        { path: '/dietary', label: 'Dietary' },
        { path: '/east-side', label: 'East side' },
      ],
    },
  ],
};
