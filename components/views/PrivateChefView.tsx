import { QuoteCta } from '@/components/Cta';
import Hero from '@/components/Hero';
import LineReveal from '@/components/LineReveal';
import { LongFaq, Longform, SiblingCluster } from '@/components/Longform';
import QuoteTeaser from '@/components/QuoteTeaser';
import { privateChefLongform } from '@/data/longformPrivateChef';
import { islands, type IslandId } from '@/data/islands';
import { photos } from '@/data/photos';
import { formatBand, getTiers } from '@/data/rateCard';
import { islandHref } from '@/lib/paths';

const H1: Record<IslandId, string> = {
  maui: 'Visitor dinners in the villa — Wailea to West Maui.',
  oahu: 'Visitor dinners in the house — Gold Coast to Ko Olina.',
  kauai: 'Visitor dinners on both shores — inquiry.',
  bigisland: 'Visitor dinners on the west side — inquiry.',
};

const LEDE: Record<IslandId, string> = {
  oahu: 'A visitor dinner in the house. Weekly household cooking is /personal-chef.',
  maui: 'A visitor dinner in the villa. Weekly household cooking is /personal-chef.',
  kauai: 'A visitor dinner on either shore — inquiry. Weekly household cooking is /personal-chef.',
  bigisland: 'A visitor dinner on the west side — inquiry. Weekly household cooking is /personal-chef.',
};

const HERO: Record<IslandId, { file: string; alt: string }> = {
  maui: photos.chefMaui,
  oahu: photos.chefOahu,
  kauai: photos.chefKauai,
  bigisland: photos.chefBigisland,
};

export default function PrivateChefView({ islandId, hostMode }: { islandId: IslandId; hostMode: boolean }) {
  const copy = privateChefLongform[islandId];
  const hero = HERO[islandId];
  const href = (path: string) => islandHref(islandId, hostMode, path);
  const core = getTiers(islandId).find((t) => t.tier === 'CORE');

  return (
    <>
      <Hero src={hero.file} alt={hero.alt}>
        <p className="text-[13px] text-mute">myCHEF {islands[islandId].name}</p>
        <LineReveal
          text={H1[islandId]}
          className="mt-4 font-display text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.05] text-ink"
        />
        <p className="mt-5 max-w-[48ch] text-[17px] leading-[1.65] text-ink">
          {LEDE[islandId]} {core ? `${formatBand(core)} a guest CORE.` : ''}
        </p>
        <div className="mt-8">
          <QuoteCta island={islandId} service="private-chef" variant="light" />
        </div>
      </Hero>
      <Longform sections={copy.sections} />
      <SiblingCluster island={islandId} current="chef" href={href} />
      <LongFaq items={copy.faqs} />
      <QuoteTeaser island={islandId} />
    </>
  );
}
