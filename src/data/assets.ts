import { CONCEPT, photos } from './photos';

/**
 * Photography asset library — campaign stills generated for this site.
 */

export interface AssetEntry {
  file: string;
  alt: string;
  source: string;
  licensePosture: string;
  culturalCheck: string;
}

const LICENSE_POSTURE =
  'campaign still generated for layout';

const SOURCE = 'Generated campaign still for myCHEF Hawaii';

export const assets: Record<string, AssetEntry> = {
  heroPrivateChef: {
    file: photos.mauiKitchen.file,
    alt: photos.mauiKitchen.alt,
    source: SOURCE,
    licensePosture: LICENSE_POSTURE,
    culturalCheck: 'Pass: hands-first working chef; no tiki/hula/lei product styling.',
  },
  foodPlating: {
    file: photos.kauaiChef.file,
    alt: photos.kauaiChef.alt,
    source: SOURCE,
    licensePosture: LICENSE_POSTURE,
    culturalCheck: 'Pass: editorial plating; mountains as place, not sacred-site tourism.',
  },
  privateDiningRoom: {
    file: photos.oahuEstate.file,
    alt: photos.oahuEstate.alt,
    source: SOURCE,
    licensePosture: LICENSE_POSTURE,
    culturalCheck: 'Pass: estate interior/lawn; no cultural props.',
  },
  villaModern: {
    file: photos.oahuEstate.file,
    alt: photos.oahuEstate.alt,
    source: SOURCE,
    licensePosture: LICENSE_POSTURE,
    culturalCheck: 'Pass: architecture and table; no venue named as partner.',
  },
  beachTable: {
    file: photos.kailua.file,
    alt: photos.kailua.alt,
    source: SOURCE,
    licensePosture: LICENSE_POSTURE,
    culturalCheck: 'Pass: windward house table, not a staged beach luau.',
  },
  weddingReception: {
    file: photos.wedding.file,
    alt: photos.wedding.alt,
    source: SOURCE,
    licensePosture: LICENSE_POSTURE,
    culturalCheck: 'Pass: estate long table; no tiki décor.',
  },
  weddingGarden: {
    file: photos.wedding.file,
    alt: photos.wedding.alt,
    source: SOURCE,
    licensePosture: LICENSE_POSTURE,
    culturalCheck: 'Pass: private-estate garden; no Hawaiian sacred-site imagery.',
  },
  weddingCandles: {
    file: photos.weddingDetail.file,
    alt: photos.weddingDetail.alt,
    source: SOURCE,
    licensePosture: LICENSE_POSTURE,
    culturalCheck: 'Pass: tabletop detail, no people, no cultural props.',
  },
  seafoodMarket: {
    file: photos.produce.file,
    alt: photos.produce.alt,
    source: SOURCE,
    licensePosture: LICENSE_POSTURE,
    culturalCheck: 'Pass: ingredient still; no vendor faces; no farm named.',
  },
  farmersMarket: {
    file: photos.produce.file,
    alt: photos.produce.alt,
    source: SOURCE,
    licensePosture: LICENSE_POSTURE,
    culturalCheck: 'Pass: produce only; no producer names claimed.',
  },
  tropicalFruit: {
    file: photos.produce.file,
    alt: photos.produce.alt,
    source: SOURCE,
    licensePosture: LICENSE_POSTURE,
    culturalCheck: 'Pass: ingredient still, not generic tropical décor.',
  },
  dinnerForTwo: {
    file: photos.kapaluaTwo.file,
    alt: photos.kapaluaTwo.alt,
    source: SOURCE,
    licensePosture: LICENSE_POSTURE,
    culturalCheck: 'Pass: quiet evening table; no posed celebrity couple.',
  },
  celebrationTable: {
    file: photos.gatherings.file,
    alt: photos.gatherings.alt,
    source: SOURCE,
    licensePosture: LICENSE_POSTURE,
    culturalCheck: 'Pass: gathering table, not tropical-kitsch décor.',
  },
  menuCard: {
    file: photos.menu.file,
    alt: photos.menu.alt,
    source: SOURCE,
    licensePosture: LICENSE_POSTURE,
    culturalCheck: 'Pass: paper-goods detail; no venue or chef named.',
  },
  mobileBar: {
    file: photos.bar.file,
    alt: photos.bar.alt,
    source: SOURCE,
    licensePosture: LICENSE_POSTURE,
    culturalCheck: 'Pass: villa terrace bar; coupe glasses, not tiki mugs.',
  },
  vacationChef: {
    file: photos.vacation.file,
    alt: photos.vacation.alt,
    source: SOURCE,
    licensePosture: LICENSE_POSTURE,
    culturalCheck: 'Pass: morning household service; no fake family portraits.',
  },
  catering: {
    file: photos.catering.file,
    alt: photos.catering.alt,
    source: SOURCE,
    licensePosture: LICENSE_POSTURE,
    culturalCheck: 'Pass: working chef team; no named venue.',
  },
  kohala: {
    file: photos.kohalaFish.file,
    alt: photos.kohalaFish.alt,
    source: SOURCE,
    licensePosture: LICENSE_POSTURE,
    culturalCheck: 'Pass: lava-coast food still; no sacred terminology.',
  },
};

export type AssetKey = keyof typeof assets;

void CONCEPT;
