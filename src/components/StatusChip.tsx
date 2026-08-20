import { cn } from '@/lib/utils';

/**
 * Status Chip — the honesty system's signature component (design.md §8.3).
 * JetBrains Mono micro-labels rendered inline wherever a claim, price, or
 * policy appears. Always adjacent to the number/claim it governs.
 */

export type ChipKind =
  | 'verified'
  | 'bde'
  | 'rpr'
  | 'pending'
  | 'inquiry'
  | 'planned'
  | 'not-available'
  | 'policy';

const styles: Record<ChipKind, string> = {
  verified: 'bg-moss text-white border-transparent',
  bde: 'bg-transparent text-brass border-brass',
  rpr: 'bg-transparent text-brass border-brass',
  pending: 'bg-stone text-ink-soft border-transparent',
  inquiry: 'bg-transparent text-brass border-brass',
  planned: 'bg-stone text-ink-soft border-transparent',
  'not-available': 'bg-stone text-ink-soft border-transparent',
  policy: 'bg-moss/15 text-moss border-moss/40',
};

interface StatusChipProps {
  kind: ChipKind;
  children: React.ReactNode;
  className?: string;
  onDark?: boolean;
}

export default function StatusChip({ kind, children, className, onDark }: StatusChipProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center whitespace-nowrap rounded-full border px-2 py-0.5',
        'font-mono text-[0.6875rem] font-medium uppercase leading-4 tracking-[0.08em]',
        styles[kind],
        onDark && (kind === 'bde' || kind === 'rpr' || kind === 'inquiry') && 'text-brass border-brass',
        onDark && (kind === 'pending' || kind === 'planned' || kind === 'not-available') && 'bg-white/10 text-ivory/80',
        className,
      )}
    >
      {children}
    </span>
  );
}
