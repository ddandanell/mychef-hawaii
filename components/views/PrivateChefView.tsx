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
  maui: 'Personal chef for Maui villas.',
  oahu: 'Personal chef for Oahu villas.',
  kauai: 'Personal chef for Kauai villas.',
  bigisland: 'Personal chef for Big Island villas.',
};

const HERO: Record<IslandId, { file: string; alt: string }> = {
  maui: photos.mauiKitchen,
  oahu: photos.oahuDinner,
  kauai: photos.kauaiChef,
  bigisland: photos.kohalaFish,
};

export default function PrivateChefView({ islandId, hostMode }: { islandId: IslandId; hostMode: boolean }) {
  const copy = privateChefLongform[islandId];
  const hero = HERO[islandId];
  const href = (path: string) => islandHref(islandId, hostMode, path);
  const core = getTiers(islandId).find((t) => t.tier === 'CORE');

  return (
    <>
      <Hero src={hero.file} alt={hero.alt}>
        <p className="text-[12px] text-paper/80">myCHEF {islands[islandId].name}</p>
        <LineReveal
          text={H1[islandId]}
          className="mt-4 font-display text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.05] text-paper"
        />
        <p className="mt-5 max-w-[48ch] text-[17px] leading-[1.65] text-paper">
          In-home dinner, weekly household line, no restaurant. {core ? `${formatBand(core)} a guest CORE.` : ''}
        </p>
        <div className="mt-8">
          <QuoteCta island={islandId} service="private-chef" />
        </div>
      </Hero>
      <Longform sections={copy.sections} />
      <SiblingCluster island={islandId} current="chef" href={href} />
      <LongFaq items={copy.faqs} />
      <QuoteTeaser island={islandId} />
    </>
  );
}
