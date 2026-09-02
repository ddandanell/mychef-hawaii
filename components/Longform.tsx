import * as Accordion from '@radix-ui/react-accordion';
import HostLink from '@/components/HostLink';
import Link from 'next/link';
import type { IslandId } from '@/data/islands';

export interface CopySection {
  h2: string;
  paras: string[];
}

export interface CopyFaq {
  q: string;
  a: string;
}

export function Longform({ sections }: { sections: CopySection[] }) {
  return (
    <section className="border-t border-line bg-paper py-20 lg:py-28">
      <div className="mx-auto w-full max-w-3xl space-y-16 px-5 lg:px-10">
        {sections.map((s) => (
          <article key={s.h2}>
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-light leading-[1.15] text-ink">
              {s.h2}
            </h2>
            {s.paras.map((p) => (
              <p key={p.slice(0, 48)} className="mt-5 text-[17px] leading-[1.7] text-mute">
                {p}
              </p>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}

export function LongFaq({ items, title = 'Questions' }: { items: CopyFaq[]; title?: string }) {
  return (
    <section className="border-t border-line bg-paper py-20">
      <div className="mx-auto grid w-full max-w-container gap-12 px-5 lg:grid-cols-5 lg:px-10">
        <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-light text-ink lg:col-span-2">{title}</h2>
        <Accordion.Root type="single" collapsible className="lg:col-span-3">
          {items.map((f, i) => (
            <Accordion.Item key={f.q} value={`lf-${i}`} className="border-b border-line">
              <Accordion.Header>
                <Accordion.Trigger className="group flex min-h-12 w-full items-center justify-between gap-4 py-5 text-left">
                  <span className="font-display text-[1.25rem] font-light text-ink">{f.q}</span>
                  <span className="text-[14px] text-mute group-data-[state=open]:hidden">+</span>
                  <span className="hidden text-[14px] text-mute group-data-[state=open]:inline">–</span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-none">
                <p className="pb-6 text-[17px] leading-relaxed text-mute">{f.a}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}

const HUB = [
  { to: '/', label: 'Private chef', key: 'home' },
  { to: '/catering', label: 'Catering', key: 'catering' },
  { to: '/weddings', label: 'Weddings', key: 'weddings' },
  { to: '/pricing', label: 'Pricing', key: 'pricing' },
  { to: '/quote', label: 'Quote', key: 'quote' },
] as const;

export function SiblingCluster({
  island,
  current,
  href,
}: {
  island?: IslandId | null;
  current?: 'home' | 'chef' | 'catering' | 'weddings' | 'pricing' | 'quote';
  href?: (path: string) => string;
}) {
  const prefix = href ?? ((p: string) => p);
  const rows = island
    ? [
        { key: 'home' as const, to: prefix('/'), label: 'Private chef' },
        { key: 'chef' as const, to: prefix('/private-chef'), label: 'What’s included' },
        { key: 'catering' as const, to: prefix('/catering'), label: 'Catering' },
        { key: 'weddings' as const, to: prefix('/weddings'), label: 'Weddings' },
        { key: 'pricing' as const, to: prefix('/pricing'), label: 'Pricing' },
        { key: 'quote' as const, to: prefix('/quote'), label: 'Quote' },
      ]
    : HUB.map((l) => ({ key: l.key, to: l.to, label: l.label }));

  return (
    <nav aria-label="Related pages" className="border-t border-line bg-paper py-10">
      <div className="mx-auto flex w-full max-w-container flex-wrap gap-x-6 gap-y-2 px-5 text-sm lg:px-10">
        {rows
          .filter((r) => r.key !== current)
          .map((r) =>
            island ? (
              <Link key={r.to} href={r.to} className="text-ink underline underline-offset-4">
                {r.label}
              </Link>
            ) : (
              <HostLink key={r.to} island="root" path={r.to} className="text-ink underline underline-offset-4">
                {r.label}
              </HostLink>
            ),
          )}
      </div>
    </nav>
  );
}
