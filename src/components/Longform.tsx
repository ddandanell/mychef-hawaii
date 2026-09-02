import { Link } from 'react-router';
import * as Accordion from '@radix-ui/react-accordion';
import HostLink from '@/components/HostLink';
import { useIsland } from '@/context/IslandContext';
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
    <section className="border-t border-stone bg-ivory py-20 lg:py-28">
      <div className="mx-auto w-full max-w-3xl space-y-16 px-5 lg:px-10">
        {sections.map((s) => (
          <article key={s.h2}>
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-light leading-[1.15] text-ink">
              {s.h2}
            </h2>
            {s.paras.map((p) => (
              <p key={p.slice(0, 48)} className="mt-5 text-[17px] leading-[1.7] text-ink-soft">
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
    <section className="border-t border-stone bg-ivory py-20">
      <div className="mx-auto grid w-full max-w-container gap-12 px-5 lg:grid-cols-5 lg:px-10">
        <h2 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-light text-ink lg:col-span-2">{title}</h2>
        <Accordion.Root type="single" collapsible className="lg:col-span-3">
          {items.map((f, i) => (
            <Accordion.Item key={f.q} value={`lf-${i}`} className="border-b border-stone">
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-center justify-between gap-4 py-5 text-left">
                  <span className="font-display text-[1.25rem] font-light text-ink">{f.q}</span>
                  <span className="text-[12px] text-ink-soft">+</span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content>
                <p className="pb-6 text-[17px] leading-relaxed text-ink-soft">{f.a}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}

const HUB = [
  { to: '/', label: 'Private chef' },
  { to: '/catering', label: 'Catering' },
  { to: '/weddings', label: 'Weddings' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/quote', label: 'Quote' },
] as const;

export function SiblingCluster({
  island,
  current,
}: {
  island?: IslandId | null;
  current?: 'home' | 'chef' | 'catering' | 'weddings' | 'pricing' | 'quote';
}) {
  const { href } = useIsland();
  const rows = island
    ? [
        { key: 'home' as const, to: href('/'), label: 'Private chef' },
        { key: 'chef' as const, to: href('/private-chef'), label: 'What’s included' },
        { key: 'catering' as const, to: href('/catering'), label: 'Catering' },
        { key: 'weddings' as const, to: href('/weddings'), label: 'Weddings' },
        { key: 'pricing' as const, to: href('/pricing'), label: 'Pricing' },
        { key: 'quote' as const, to: href('/quote'), label: 'Quote' },
      ]
    : HUB.map((l) => ({
        key: (l.to === '/' ? 'home' : l.to.slice(1)) as NonNullable<typeof current>,
        to: l.to,
        label: l.label,
      }));

  return (
    <nav aria-label="Related pages" className="border-t border-stone bg-ivory py-10">
      <div className="mx-auto flex w-full max-w-container flex-wrap gap-x-6 gap-y-2 px-5 text-sm lg:px-10">
        {rows
          .filter((r) => r.key !== current)
          .map((r) =>
            island && r.key === 'home' ? (
              <Link key={r.to} to={r.to} className="text-ink underline underline-offset-4">
                {r.label}
              </Link>
            ) : island ? (
              <Link key={r.to} to={r.to} className="text-ink underline underline-offset-4">
                {r.label}
              </Link>
            ) : r.to.startsWith('http') ? (
              <HostLink key={r.to} island="root" path={r.to} className="text-ink underline underline-offset-4">
                {r.label}
              </HostLink>
            ) : (
              <Link key={r.to} to={r.to} className="text-ink underline underline-offset-4">
                {r.label}
              </Link>
            ),
          )}
      </div>
    </nav>
  );
}
