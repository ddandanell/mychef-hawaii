import Link from 'next/link';
import Eyebrow from '@/components/Eyebrow';
import Photo from '@/components/Photo';

/** Hub-host document list as photography, not paper tiles. Same-host Links. */
export default function HubPhotoGrid({
  eyebrow,
  heading,
  intro,
  items,
  columns = 3,
}: {
  eyebrow: string;
  heading: string;
  intro?: string;
  items: { href: string; title: string; body: string; still: { file: string; alt: string } }[];
  columns?: 3 | 4;
}) {
  const grid = columns === 4 ? 'sm:grid-cols-2 xl:grid-cols-4' : 'sm:grid-cols-2 xl:grid-cols-3';
  const sizes =
    columns === 4
      ? '(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw'
      : '(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw';
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="mx-auto w-full max-w-spread px-5 lg:px-10">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.08] text-ink">
          {heading}
        </h2>
        {intro ? <p className="mt-5 max-w-[52ch] text-[17px] leading-relaxed text-mute">{intro}</p> : null}
        <ul className={`mt-14 grid gap-8 ${grid}`}>
          {items.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="group block">
                <span className="relative block aspect-[3/4] overflow-hidden bg-sand">
                  <Photo
                    src={item.still.file}
                    alt={item.still.alt}
                    fill
                    sizes={sizes}
                    className="transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] motion-reduce:transform-none"
                  />
                </span>
                <span className="mt-5 block font-display text-[1.5rem] font-light text-ink">{item.title}</span>
                <span className="mt-2 block text-[15px] leading-relaxed text-mute">{item.body}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
