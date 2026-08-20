import HostLink from '@/components/HostLink';
import PageMeta from '@/components/PageMeta';
import Reveal from '@/components/Reveal';
import { articlesFor } from '@/data/editorial';
import { islandOrder, islands } from '@/data/islands';

/** Statewide journal/blog directory — each island keeps its own writing. */
export default function HubEditorial({ kind }: { kind: 'journal' | 'blog' }) {
  const title = kind === 'journal' ? 'Journal' : 'Blog';

  return (
    <>
      <PageMeta
        title={`${title} — myCHEF Hawaii`}
        description={`Island ${title.toLowerCase()} lives on each department host, not as cloned statewide posts.`}
      />
      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto max-w-container px-5 lg:px-10">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">
            Statewide directory
          </p>
          <h1 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.1] text-ink">
            {kind === 'journal' ? 'The journal, by island.' : 'Guides and notes, by island.'}
          </h1>
          <p className="mt-4 max-w-[65ch] text-ink-soft">
            Each island department publishes its own {kind}. The hub does not rank for “private chef Maui” —
            that page lives on the Maui host.
          </p>
          <Reveal stagger className="mt-12 grid gap-4 md:grid-cols-2">
            {islandOrder.map((id) => {
              const list = articlesFor(id).filter((a) => a.kind === kind);
              const isl = islands[id];
              return (
                <HostLink
                  key={id}
                  island={id}
                  path={`/${kind}`}
                  className="rounded-[14px] border border-stone bg-white p-5 shadow-soft transition-colors hover:border-clay/40"
                >
                  <p className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-clay">
                    {isl.name}
                  </p>
                  <h2 className="mt-2 font-display text-xl font-medium text-ink">
                    {list.length} {kind} pieces
                  </h2>
                  <p className="mt-2 text-sm text-ink-soft">{isl.role}</p>
                </HostLink>
              );
            })}
          </Reveal>
        </div>
      </section>
    </>
  );
}
