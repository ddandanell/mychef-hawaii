import { QuoteCta } from '@/components/Cta';
import DocumentPhotoGrid from '@/components/DocumentPhotoGrid';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import LineReveal from '@/components/LineReveal';
import { DocumentCopy, LongFaq, SiblingCluster } from '@/components/Longform';
import QuoteTeaser from '@/components/QuoteTeaser';
import { SampleMenu } from '@/components/SampleMenu';
import HostLink from '@/components/HostLink';
import type { IslandSupportPage } from '@/data/islandSupport';
import { islands, type IslandId } from '@/data/islands';
import { photos } from '@/data/photos';
import type { UniqueCell } from '@/data/uniqueCells';
import { zoneMap } from '@/data/zoneMap';
import { islandHref } from '@/lib/paths';
import { moneyNeighborhoods } from '@/data/offers';
import { uniqueCells } from '@/data/uniqueCells';
import { menuSkuPages } from '@/data/menuSkus';
import { helpArticles } from '@/data/helpArticles';

function FaqSchema({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }}
    />
  );
}

export function IslandSupportView({
  islandId,
  hostMode,
  copy,
  showZones,
  showMenu,
  showHelp,
}: {
  islandId: IslandId;
  hostMode: boolean;
  copy: IslandSupportPage;
  showZones?: boolean;
  showMenu?: boolean;
  showHelp?: boolean;
}) {
  const island = islands[islandId];
  const photo = photos[copy.photo];
  const href = (path: string) => islandHref(islandId, hostMode, path);
  const zones = zoneMap[islandId];

  return (
    <>
      <FaqSchema faqs={copy.faqs} />
      <Hero src={photo.file} alt={photo.alt}>
        <p className="text-[13px] text-mute">{copy.kicker}</p>
        <LineReveal
          text={copy.h1}
          className="mt-4 font-display text-[clamp(2.5rem,6vw,4.25rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink"
        />
        <p className="mt-5 max-w-[46ch] text-[17px] leading-[1.55] text-ink">{copy.lede}</p>
        <div className="mt-8">
          <QuoteCta island={islandId} variant="light" />
        </div>
      </Hero>

      <DocumentCopy paras={copy.body} />

      {copy.steps ? (
        <section className="border-t border-line bg-sand py-20">
          <div className="mx-auto max-w-container space-y-16 px-5 lg:px-10">
            {copy.steps.map((s) => (
              <article key={s.n}>
                <p className="font-display text-2xl font-light text-ink">{s.n}</p>
                <h2 className="mt-2 font-display text-[clamp(1.625rem,3vw,2.25rem)] font-light text-ink">{s.title}</h2>
                <p className="mt-4 max-w-[65ch] text-[17px] leading-[1.65] text-mute">{s.body}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {showZones ? (
        <section className="border-t border-line bg-paper py-20 lg:py-28">
          <div className="mx-auto w-full max-w-container px-5 lg:px-10">
            <p className="text-[13px] text-mute">{zones.headline}</p>
            <ul className="mt-10 grid gap-8 md:grid-cols-2">
              {zones.zones.map((z) => (
                <li key={z.name} className="border-t border-line pt-6">
                  <p className="text-[12px] uppercase tracking-[0.14em] text-mute">
                    {z.class}
                    {z.feeChip ? ` · ${z.feeChip}` : ''}
                  </p>
                  <h2 className="mt-2 font-display text-[1.75rem] font-light text-ink">{z.name}</h2>
                  <p className="mt-3 text-[17px] leading-[1.65] text-mute">{z.note}</p>
                  {z.driveTime ? <p className="mt-2 text-sm text-mute">{z.driveTime}</p> : null}
                </li>
              ))}
            </ul>
            <p className="mt-12 max-w-[62ch] text-[17px] leading-relaxed text-mute">{zones.honestyLine}</p>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {moneyNeighborhoods[islandId].map((hood) => (
                <li key={hood.slug}>
                  <HostLink island={islandId} path={`/${hood.slug}`} className="text-ink underline underline-offset-4">
                    {hood.name}
                  </HostLink>
                </li>
              ))}
            </ul>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {uniqueCells[islandId].map((cell) => (
                <li key={cell.slug}>
                  <HostLink island={islandId} path={`/${cell.slug}`} className="text-ink underline underline-offset-4">
                    {cell.name}
                  </HostLink>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {showMenu ? <SampleMenu island={islandId} /> : null}

      {showMenu ? (
        <nav aria-label="Menu documents on this island" className="border-t border-line bg-sand py-10">
          <div className="mx-auto flex w-full max-w-container flex-wrap gap-x-6 gap-y-2 px-5 text-sm lg:px-10">
            {menuSkuPages[islandId].map((sku) => (
              <HostLink
                key={sku.slug}
                island={islandId}
                path={`/menus/${sku.slug}`}
                className="text-ink underline underline-offset-4"
              >
                {sku.name}
              </HostLink>
            ))}
          </div>
        </nav>
      ) : null}

      {showHelp ? (
        <nav aria-label="Help articles on this island" className="border-t border-line bg-sand py-10">
          <div className="mx-auto flex w-full max-w-container flex-wrap gap-x-6 gap-y-2 px-5 text-sm lg:px-10">
            {helpArticles[islandId].map((article) => (
              <HostLink
                key={article.slug}
                island={islandId}
                path={`/help/${article.slug}`}
                className="text-ink underline underline-offset-4"
              >
                {article.name}
              </HostLink>
            ))}
            <HostLink
              island={islandId}
              path="/private-chef-cost"
              className="text-ink underline underline-offset-4"
            >
              Fee stack
            </HostLink>
          </div>
        </nav>
      ) : null}

      <SiblingCluster island={islandId} href={href} />
      <LongFaq items={copy.faqs} title={`Asked on ${island.shortName}.`} />
      <QuoteTeaser headline="Request a quote. Quote in writing." island={islandId} />
    </>
  );
}

export function UniqueCellView({
  islandId,
  cell,
}: {
  islandId: IslandId;
  hostMode: boolean;
  cell: UniqueCell;
}) {
  const island = islands[islandId];
  const photo = photos[cell.photo];

  return (
    <>
      <FaqSchema faqs={cell.faqs} />
      <Hero src={photo.file} alt={photo.alt}>
        <p className="text-[13px] text-mute">
          {island.name} · {cell.name}
        </p>
        <LineReveal
          text={cell.h1}
          className="mt-3 font-display text-[clamp(2.75rem,7vw,4.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink"
        />
        <p className="mt-5 max-w-[46ch] text-[17px] leading-[1.55] text-ink">{cell.lede}</p>
        <div className="mt-8">
          <QuoteCta island={islandId} variant="light" />
        </div>
      </Hero>

      <DocumentCopy paras={cell.body} />
      {cell.related.length ? (
        <DocumentPhotoGrid
          islandId={islandId}
          eyebrow={`${island.shortName} · Beside this note`}
          heading="Open a related document."
          columns={cell.related.length <= 2 ? 2 : 3}
          items={cell.related.map((link) => ({
            path: link.path,
            label: link.label,
            detail: link.path,
          }))}
        />
      ) : null}

      <LongFaq items={cell.faqs} title={`Asked about ${cell.name}.`} />
      <QuoteTeaser headline="Tell us the address and the dates." island={islandId} />
    </>
  );
}
