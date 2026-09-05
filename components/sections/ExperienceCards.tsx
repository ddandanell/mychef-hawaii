import { ArrowUpRight, CalendarDays, Heart, Martini, Sparkles, Users, UtensilsCrossed } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Eyebrow from '@/components/Eyebrow';
import HostLink from '@/components/HostLink';
import Photo from '@/components/Photo';
import Reveal from '@/components/Reveal';
import { islands, type IslandId } from '@/data/islands';
import { photos, type PhotoKey } from '@/data/photos';
import { getDayRate, getMobileBar, getOtherOffer, getTiers } from '@/data/rateCard';

/**
 * Section library · "Choose your experience".
 * Editorial experience tiles with an emotional line, a real starting price
 * (derived from the canonical rate card — no hardcoded numbers), and a Lucide
 * icon. Island-aware: pass an island to localise prices, or leave it for the
 * statewide floor. Prices carry the honest fee note, never a fake discount.
 */

interface Experience {
  title: string;
  line: string;
  path: string;
  photo: PhotoKey;
  Icon: LucideIcon;
  price: (island: IslandId) => string;
}

const dinnerFloor = (island: IslandId) => getTiers(island).find((t) => t.tier === 'CORE')?.band[0] ?? 125;
const chefsTableFloor = (island: IslandId) => getTiers(island).find((t) => t.tier === 'ULTRA')?.band[0] ?? 275;

const EXPERIENCES: Experience[] = [
  {
    title: 'Private chef dinner',
    line: 'Your villa becomes the restaurant for a night.',
    path: '/private-chef',
    photo: 'mauiKitchen',
    Icon: UtensilsCrossed,
    price: (i) => `From $${dinnerFloor(i)} a guest`,
  },
  {
    title: 'Stay chef',
    line: 'A chef for the whole stay — not just one dinner.',
    path: '/vacation-chef',
    photo: 'vacationOahu',
    Icon: CalendarDays,
    price: (i) => `From $${getDayRate(i).from.toLocaleString('en-US')} a day`,
  },
  {
    title: 'Weddings & events',
    line: 'One crew, from welcome dinner to farewell brunch.',
    path: '/weddings',
    photo: 'weddingOahu',
    Icon: Heart,
    price: (i) => `From $${getOtherOffer('wedding').byIsland[i].from} a guest + staffing`,
  },
  {
    title: "Chef's table",
    line: 'A tasting menu, plated at your own table.',
    path: '/fine-dining',
    photo: 'kapaluaTwo',
    Icon: Sparkles,
    price: (i) => `From $${chefsTableFloor(i)} a guest`,
  },
  {
    title: 'Mobile bar',
    line: 'Terrace cocktails, poured beside the sunset.',
    path: '/bar',
    photo: 'mobileBarOahu',
    Icon: Martini,
    price: (i) => `From $${getMobileBar(i).packageFrom} · 4 hrs`,
  },
  {
    title: 'Catering',
    line: 'Staffed events for ten to seventy-five guests.',
    path: '/catering',
    photo: 'cateringOahu',
    Icon: Users,
    price: () => 'Custom quote',
  },
];

export default function ExperienceCards({ islandId = null }: { islandId?: IslandId | null }) {
  const floor: IslandId = islandId ?? 'oahu';
  const where = islandId ? islands[islandId].name : 'Hawaii';

  return (
    <section aria-label="Choose your experience" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto w-full max-w-spread px-5 lg:px-10">
        <Eyebrow>Choose your experience</Eyebrow>
        <h2 className="mt-4 max-w-[20ch] font-display text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.08] text-ink">
          Pick the night. See where the price starts.
        </h2>
        <p className="mt-5 max-w-[54ch] text-[17px] leading-relaxed text-mute">
          Published starting prices in {where}. The written quote confirms the total — 20% service and Hawaiʻi GET are
          always their own lines.
        </p>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EXPERIENCES.map((exp, i) => (
            <li key={exp.title}>
              <Reveal delay={(i % 3) * 0.06}>
                <HostLink
                  island={islandId ?? 'root'}
                  path={exp.path}
                  className="group flex h-full flex-col overflow-hidden border border-line bg-paper transition-colors duration-300 hover:border-brass"
                >
                  <span className="relative block aspect-[4/3] overflow-hidden bg-sand">
                    <Photo
                      src={photos[exp.photo].file}
                      alt={photos[exp.photo].alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] motion-reduce:transform-none"
                    />
                    <span className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-paper/90 text-ink backdrop-blur-sm">
                      <exp.Icon className="h-5 w-5" aria-hidden strokeWidth={1.5} />
                    </span>
                  </span>
                  <span className="flex flex-1 flex-col p-6">
                    <span className="font-display text-[1.5rem] font-light text-ink">{exp.title}</span>
                    <span className="mt-2 max-w-[34ch] text-[15px] leading-relaxed text-mute">{exp.line}</span>
                    <span className="mt-6 flex items-center justify-between border-t border-line pt-4">
                      <span className="text-[15px] font-medium text-ink">{exp.price(floor)}</span>
                      <ArrowUpRight
                        className="h-5 w-5 text-brass transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none"
                        aria-hidden
                      />
                    </span>
                  </span>
                </HostLink>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
