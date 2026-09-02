import { Link } from 'react-router';
import HeroMedia from '@/components/HeroMedia';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import { formatOtherOffer, getOtherOffer } from '@/data/rateCard';

const islandsWeddings = [
  {
    id: 'maui' as const,
    title: 'Maui',
    body: 'Welcome dinner, rehearsal, reception and recovery brunch with one team. Peak months September, October and May.',
    to: '/maui/wedding-catering',
    img: '/photos/maui-wedding-long-table-banyan-dusk.jpg',
    alt: 'Wailea',
  },
  {
    id: 'oahu' as const,
    title: 'Oʻahu',
    body: 'Celebration dinners and weekend stacks in Ko Olina, Kahala and windward estates.',
    to: '/oahu/wedding-catering',
    img: '/photos/oahu-gold-coast-estate-dinner.jpg',
    alt: 'Kahala',
  },
  {
    id: 'kauai' as const,
    title: 'Kauaʻi',
    body: 'Estate formats on both shores. Welcome dinner, rehearsal and reception as separate lines.',
    to: '/kauai/wedding-catering',
    img: '/photos/kauai-north-terrace-mist.jpg',
    alt: 'Princeville',
  },
  {
    id: 'bigisland' as const,
    title: 'Hawaiʻi Island',
    body: 'Kohala estates, wedding-week format, west side first.',
    to: '/bigisland/wedding-catering',
    img: '/photos/kohala-lava-coast-table.jpg',
    alt: 'Kohala',
  },
];

export default function Weddings() {
  return (
    <>
      <section className="relative -mt-16 flex min-h-[80svh] min-h-[560px] items-end overflow-hidden">
        <HeroMedia src="/photos/maui-wedding-long-table-banyan-dusk.jpg" alt="Wailea" />
        <div className="relative mx-auto w-full max-w-spread px-5 pb-20 pt-36 lg:px-10">
          <div className="max-w-[680px]">
            <p className="text-[12px] text-ivory/80">Wedding week</p>
            <h1 className="mt-5 font-display text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.05] tracking-[-0.02em] text-white">
              One team for the whole wedding week.
            </h1>
            <p className="mt-6 max-w-[54ch] text-[17px] leading-[1.65] text-ivory/90">
              Welcome dinner to recovery brunch. Guest lists we staff: dinners for two to fifteen, receptions
              about ten to seventy-five.
            </p>
            <div className="mt-8">
              <Link
                to="/quote?service=wedding-week"
                className="inline-flex h-12 items-center bg-[#F6F1E8] px-6 text-sm font-medium text-ink"
              >
                Enquire
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        {islandsWeddings.map((row) => (
          <Link key={row.id} to={row.to} className="group relative block min-h-[70svh] min-h-[420px] overflow-hidden">
            <img src={row.img} alt={row.alt} className="absolute inset-0 h-full w-full object-cover" />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(180deg, rgba(28,25,22,0.08) 0%, rgba(28,25,22,0.28) 55%, rgba(28,25,22,0.55) 100%)',
              }}
            />
            <div className="relative mx-auto flex min-h-[70svh] min-h-[420px] w-full max-w-spread items-end px-5 pb-16 lg:px-10">
              <div className="max-w-[560px]">
                <p className="text-[12px] text-ivory/80">{row.title}</p>
                <h2 className="mt-3 font-display text-[clamp(2rem,4vw,2.75rem)] font-light leading-[1.1] text-white">
                  {row.title}
                </h2>
                <p className="mt-3 text-[17px] leading-[1.65] text-ivory/90">{row.body}</p>
                <p className="mt-4 text-[17px] text-ivory">
                  Wedding catering {formatOtherOffer(getOtherOffer('wedding'), row.id)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <QuoteTeaserBand headline="Tell us the island, the dates, the headcount." />
    </>
  );
}
