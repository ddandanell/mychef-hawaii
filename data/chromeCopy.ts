import type { IslandId } from './islands';

/** Homepage chrome copy — unique H1s stay locked in islandOffers / HomeView. */
export const hubChrome = {
  kicker: 'myCHEF Hawaii · Private dining in your villa',
  h1: 'Private Chef Hawaii — in your villa, on your island.',
  lede: 'A private dinner, a Stay Chef or a staffed event in your villa. We shop, cook, serve and clean in a real kitchen.',
  price:
    'Signature dinner from $125 a guest on Oʻahu and $150 on Maui and Kauaʻi. Stay Chef from $850 a day on Oʻahu.',
  primaryCta: 'Request a written quote',
  secondaryCta: 'Choose your island',
  coresH2: 'A chef for the house, or catering for the event.',
  chefLine: 'One dinner in the villa. Shop, cook, serve, clean. Stay Chef weeks live on /vacation-chef.',
  chefPrice: 'From $125 a guest on Oʻahu · $150 on Maui and Kauaʻi',
  cateringLine: 'Staffed villa events of about 10–75. Buffet or plated. One-table dinners live on /private-chef.',
  cateringPrice: 'From $125 a guest on Oʻahu · $150 on Maui and Kauaʻi',
  howH2: 'Tell us the table. We write the menu and cook it in the house.',
  closer: 'Island, date, guest count and kitchen. That is enough to start.',
  closerLine: 'Oʻahu and Maui receive a written quote. Kauaʻi and Hawaiʻi Island begin with an inquiry.',
  chooserH2: 'Choose where we cook.',
  chooserIntro:
    'Oʻahu and Maui take quotes now; Kauaʻi and Hawaiʻi Island are at inquiry stage. Stay on one island — change it only when you mean to.',
};

export const processSteps = [
  {
    n: '01',
    title: 'Tell us the table',
    line: 'Send the island, date, villa address, guest count and occasion.',
  },
  {
    n: '02',
    title: 'We write the menu and quote',
    line: 'Your menu and written quote show 20% service and Hawaiʻi GET up to 4.712% separately.',
  },
  {
    n: '03',
    title: 'We shop and cook',
    line: 'We shop for the menu, then cook it in your villa’s real kitchen.',
  },
  {
    n: '04',
    title: 'You host. We clear.',
    line: 'We serve the table, clear every course and leave the kitchen clean.',
  },
] as const;

export const islandChooserCopy: Record<IslandId, { line: string; price: string }> = {
  oahu: {
    line: 'Honolulu to Ko Olina, for villa dinners and staffed events. Quotes open now.',
    price: 'Signature dinner from $125 a guest · Stay Chef from $850 a day',
  },
  maui: {
    line: 'Wailea, Kīhei and West Maui, for villa dinners and staffed events. Quotes open now.',
    price: 'Signature dinner from $150 a guest · Stay Chef from $1,050 a day',
  },
  kauai: {
    line: 'Princeville and Hanalei to Poʻipū, for villa dinners and staffed events. Inquiry stage.',
    price: 'Signature dinner from $150 a guest',
  },
  bigisland: {
    line: 'Kona and the Kohala Coast first, for villa dinners and staffed events. Inquiry stage.',
    price: 'Signature dinner from $125 a guest · west side first',
  },
};

export const islandHeroLede: Record<IslandId, string> = {
  oahu:
    'From Honolulu residences to Ko Olina villas, we cook only in a working kitchen. We shop, cook, serve and clean; Signature dinner starts at $125 a guest and Stay Chef at $850 a day.',
  maui:
    'Private chef service on Maui runs from Wailea and Kīhei to West Maui; the villa must have a real kitchen. Signature dinner starts at $150 a guest, Stay Chef at $1,050 a day.',
  kauai:
    'Princeville and Hanalei to the north; Poʻipū to the south, always in a villa with a real kitchen. Kauaʻi is inquiry-stage, with Signature dinner from $150 a guest.',
  bigisland:
    'Kona and the Kohala Coast come first, with west-side villas setting the route. Hawaiʻi Island is inquiry-stage, and every booking requires a real kitchen.',
};

export const heroFocal: Record<'hub' | IslandId, string> = {
  hub: '58% 42%',
  oahu: '62% 45%',
  maui: '55% 40%',
  kauai: '50% 38%',
  bigisland: '60% 45%',
};
