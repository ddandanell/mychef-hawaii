/**
 * Section library · confidence bar.
 * A restrained strip of what we do and what a guest can rely on — placed
 * directly under the hero. Honest proof only (published prices, written
 * quote, groceries at cost, reply time). No fabricated counters or reviews.
 */
const SERVES = [
  'Private residences',
  'Vacation villas',
  'Weddings',
  'Multi-day stays',
  'Private events',
];

const PROOF: { k: string; v: string }[] = [
  { k: 'Published prices', v: 'From $125 a guest' },
  { k: 'Written quote', v: '20% service + GET as their own lines' },
  { k: 'Groceries', v: 'At cost, with receipts' },
  { k: 'Every enquiry', v: 'A real reply within a day' },
];

export default function ConfidenceBar() {
  return (
    <section aria-label="What we do and what to expect" className="border-b border-line bg-sand">
      <div className="mx-auto w-full max-w-spread px-5 py-10 lg:px-10 lg:py-12">
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] uppercase tracking-[0.18em] text-mute">
          {SERVES.map((s, i) => (
            <li key={s} className="flex items-center gap-5">
              {i > 0 ? <span aria-hidden className="h-1 w-1 rounded-full bg-brass" /> : null}
              <span>{s}</span>
            </li>
          ))}
        </ul>
        <dl className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROOF.map((p) => (
            <div key={p.k} className="border-t border-line pt-4">
              <dt className="text-[12px] uppercase tracking-[0.16em] text-mute">{p.k}</dt>
              <dd className="mt-2 text-[17px] leading-snug text-ink">{p.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
