import { cn } from '@/lib/utils';

/** Mute words only — no pills. Honesty lives on /trust and /legal. */
export type ChipKind =
  | 'verified'
  | 'published'
  | 'bde'
  | 'rpr'
  | 'pending'
  | 'inquiry'
  | 'planned'
  | 'not-available'
  | 'policy';

interface StatusChipProps {
  kind: ChipKind;
  children: React.ReactNode;
  className?: string;
  onDark?: boolean;
}

export default function StatusChip({ children, className, onDark }: StatusChipProps) {
  return (
    <span
      className={cn(
        'text-[12px] font-normal normal-case tracking-normal',
        onDark ? 'text-ivory/70' : 'text-[#8A8378]',
        className,
      )}
    >
      {children}
    </span>
  );
}
