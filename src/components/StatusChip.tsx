import { useLocation } from 'react-router';
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

function isHonestyPage(pathname: string): boolean {
  const p = pathname.replace(/\/$/, '') || '/';
  const local = p.replace(/^\/(oahu|maui|kauai|bigisland)(?=\/|$)/, '') || '/';
  return local === '/trust' || local === '/legal';
}

export default function StatusChip({ children, className, onDark }: StatusChipProps) {
  const { pathname } = useLocation();
  if (!isHonestyPage(pathname)) return null;
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
