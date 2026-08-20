import { Link, useParams } from 'react-router';
import PageMeta from '@/components/PageMeta';
import QuoteTeaserBand from '@/components/QuoteTeaserBand';
import Reveal from '@/components/Reveal';
import { useIsland } from '@/context/IslandContext';
import { getArticle } from '@/data/editorial';
import { PrimaryCta, SectionHead } from '@/pages/islands/shared';
import NotFound from '@/pages/NotFound';

export default function ArticlePage({ kind }: { kind: 'journal' | 'blog' }) {
  const { slug } = useParams();
  const { island, islandId } = useIsland();
  if (!island || !islandId || !slug) return <NotFound />;
  const article = getArticle(islandId, kind, slug);
  if (!article) return <NotFound />;

  return (
    <>
      <PageMeta title={article.title} description={article.description} />
      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[720px] px-5 lg:px-10">
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-clay">
            {kind} · {island.name}
          </p>
          <h1 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.1] tracking-[-0.02em] text-ink">
            {article.h1}
          </h1>
          <p className="mt-6 text-[1.125rem] leading-[1.65] text-ink-soft">{article.lede}</p>
          {article.sections.map((s) => (
            <Reveal key={s.heading}>
              <h2 className="mt-12 font-display text-2xl font-medium text-ink">{s.heading}</h2>
              <p className="mt-4 text-[1.0625rem] leading-[1.65] text-ink-soft">{s.body}</p>
            </Reveal>
          ))}
          <div className="mt-12 flex flex-wrap gap-4">
            <PrimaryCta island={island} />
            <Link to={`/${kind}`} className="self-center text-sm font-medium text-clay">
              All {kind} on {island.name}
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-sand py-16">
        <div className="mx-auto max-w-[720px] px-5">
          <SectionHead eyebrow="Process" title="Same network. This island’s drive times." />
          <Link to="/how-it-works" className="mt-6 inline-block text-sm font-medium text-clay">
            How it works on the hub
          </Link>
        </div>
      </section>
      <QuoteTeaserBand />
    </>
  );
}
