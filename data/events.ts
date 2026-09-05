import type { IslandId } from './islands';
import type { PhotoKey } from './photos';

/**
 * Villa-event documents — occasion pages, not catering clones.
 * Do not put "oahu catering" / "maui catering" in these titles.
 */
export interface EventOffer {
  h1: string;
  title: string;
  description: string;
  lede: string;
  photo: PhotoKey;
  occasions: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
}

export const eventOffers: Record<IslandId, EventOffer> = {
  oahu: {
    h1: 'Villa events on Oahu — birthdays, retreats, welcome nights.',
    title: 'Oahu villa events — birthdays, retreats, welcome nights | myCHEF',
    description:
      'Staffed villa events on Oahu: birthdays, retreats and welcome nights from Honolulu to Ko Olina. The catering door is /catering. Request a quote.',
    lede:
      'The occasion page, not the catering keyword. Birthdays, company offsites, welcome nights in residences with kitchens. Buffet or plated lives on /catering with published starting prices.',
    photo: 'eventsOahu',
    occasions: [
      {
        title: 'Birthdays and anniversaries',
        text: 'A staffed table in the house, not a restaurant buyout. Guest lists we hold: about ten to seventy-five. Kahala dining rooms and Ko Olina villas are the usual rooms.',
      },
      {
        title: 'Retreats and offsites',
        text: 'Full-board days when the house actually cooks. Not a convention-centre play. Dietary is designed in, not promised as theatre.',
      },
      {
        title: 'Welcome nights',
        text: 'The first evening of a villa week — family-style or grazing, the room still arriving. Wedding-week stacks live on /weddings.',
      },
    ],
    faqs: [
      {
        q: 'Is this the same as Oahu catering?',
        a: 'No. /catering owns the staffed-room keyword and the published CORE band. This page is the occasion: birthday, retreat, welcome night. Same team, different door.',
      },
      {
        q: 'How many guests?',
        a: 'Dinners two to fifteen. Receptions about ten to seventy-five. Larger formats are quoted, not promised.',
      },
      {
        q: 'Hire a chef for a party?',
        a: 'Related search. A house dinner is /private-chef. Ten to seventy-five is /catering. This page is the occasion — birthday, retreat, welcome night — not a ballroom hire.',
      },
    ],
  },
  maui: {
    h1: 'Villa events on Maui — Wailea lawns and West Maui houses.',
    title: 'Maui villa events — Wailea lawns and West Maui houses | myCHEF',
    description:
      'Staffed villa events on Maui: birthdays, retreats and welcome nights in Wailea, Kīhei and West Maui. Catering is the larger door on /catering.',
    lede:
      'The lawn, the guest list, the occasion. Wailea, Kapalua, Kāʻanapali, Makena. Maui catering — the money search — lives on /catering. This page names the night.',
    photo: 'eventsMaui',
    occasions: [
      {
        title: 'Lawn gatherings',
        text: 'Hotel-zoned residences with kitchens. A birthday on the grass is still a staffed room: plates, service, a written wet-weather backup.',
      },
      {
        title: 'Retreat weeks',
        text: 'South Maui and West Maui houses that cook three times a day. Groceries at cost on Stay Chef days. See /vacation-chef for the week rate.',
      },
      {
        title: 'Welcome dinners',
        text: 'The ice-breaker before a wedding week. The week stack itself is /weddings — separate lines, not a blur.',
      },
    ],
    faqs: [
      {
        q: 'Is this Maui catering?',
        a: 'Maui catering is /catering — 480 monthly searches, published $150–$250 a guest. This page is the occasion cell so those titles do not collide.',
      },
      {
        q: 'Can you do a villa party in Lahaina?',
        a: 'We cook West Maui: Kāʻanapali, Nāpili, Kapalua. Tell us the address. See /lahaina for how we name that geography.',
      },
    ],
  },
  kauai: {
    h1: 'Estate events on Kauai — both shores, inquiry.',
    title: 'Kauai estate events — both shores, inquiry | myCHEF',
    description:
      'Staffed estate events on Kauai: Princeville, Hanalei and Poʻipū. Inquiry stage. The catering door is /catering.',
    lede:
      'Both shores. Inquiry stage. The bridge and the weather are real. Kauai catering holds the volume keyword; this page holds the occasion.',
    photo: 'eventsKauai',
    occasions: [
      {
        title: 'North Shore estates',
        text: 'Princeville and Hanalei. Far-North inherits the Hanalei-bridge clause — reschedule rather than forfeit. 72-hour notice.',
      },
      {
        title: 'South Shore houses',
        text: 'Poʻipū and Kōloa. Shorter drive from Līhuʻe. Arrival-night dinners and retreat days.',
      },
      {
        title: 'Wedding-adjacent nights',
        text: 'Welcome dinner or rehearsal as its own line. The week is /weddings. From $175 a guest plus staffing.',
      },
    ],
    faqs: [
      {
        q: 'Can I book a date now?',
        a: 'Yes — join the inquiry list with the shore and the dates. This is not a waitlist island dressed up as live.',
      },
      {
        q: 'Kauai catering or an estate event?',
        a: 'Same crew. /catering is the staffed-room keyword. This page is birthday, retreat, welcome night.',
      },
    ],
  },
  bigisland: {
    h1: 'Villa events on the Big Island — Kohala and Kona first.',
    title: 'Big Island villa events — Kohala and Kona | myCHEF',
    description:
      'Staffed villa events on Hawaiʻi Island: Kohala Coast and Kona. Inquiry stage. East side is quote-only. Catering lives on /catering.',
    lede:
      'West-side first. Seven resort communities in one radius. Hilo is a different day. Big island catering is /catering; this page is the occasion.',
    photo: 'eventsBigisland',
    occasions: [
      {
        title: 'Kohala retreats',
        text: 'Waikoloa, Mauna Lani, the Mauna Kea resort belt. Lava-heat evenings, kitchens that range from a true pass to a galley.',
      },
      {
        title: 'Kona town nights',
        text: 'Kailua-Kona and Keauhou. Ironman week compresses the calendar — flag those dates early.',
      },
      {
        title: 'East side',
        text: 'Hilo and Volcano are quote-only with dedicated staffing. We will not sell a same-day round trip.',
      },
    ],
    faqs: [
      {
        q: 'Same as Big Island catering?',
        a: 'No. /catering owns the staffed-room keyword (volume 50). This page names the occasion so the titles do not compete.',
      },
      {
        q: 'Can you cover Hilo from Kona?',
        a: 'Not in one day. East side is 2.5–3 hours — its own team day, quoted honestly.',
      },
    ],
  },
};
