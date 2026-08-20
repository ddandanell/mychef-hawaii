import { Link } from 'react-router';
import PageMeta from '@/components/PageMeta';
import Reveal from '@/components/Reveal';
import { useIsland } from '@/context/IslandContext';
import { articlesFor } from '@/data/editorial';
import NotFound from '@/pages/NotFound';

export default function JournalIndex({ kind }: { kind: 'journal' | 'blog' }) {
  const { island, islandId } = useIsland();
  if (!island || !islandId) return <NotFound />;
  const list = articlesFor(islandId).filter((a) => a.kind === kind);

  return (
    <>
      <PageMeta
        title={`${kind === 'journal' ? 'Journal' : 'Blog'} — myCHEF ${island.name}`}
        description={`${list.length} ${kind} pieces for ${island.name}. Editorial, not transactional island clones.`}
      />
      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto w-full max-w-container px-5 lg:px-10">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">
            {kind} · {island.name}
          </p>
          <h1 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.1] text-ink">
            {kind === 'journal' ? 'The journal.' : 'Guides and notes.'}
          </h1>
          <p className="mt-4 max-w-[65ch] text-ink-soft">
            {island.name}-specific writing. Statewide process lives on the Hawaii hub. No fabricated events.
          </p>
          <Reveal stagger className="mt-12 grid gap-4 md:grid-cols-2">
            {list.map((a) => (
              <Link
                key={a.slug}
                to={`/${kind}/${a.slug}`}
                className="rounded-[14px] border border-stone bg-white p-5 shadow-soft transition-colors hover:border-clay/40"
              >
                <h2 className="font-display text-xl font-medium text-ink">{a.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{a.description}</p>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
