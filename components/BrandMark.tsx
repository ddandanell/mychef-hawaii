import { cn } from '@/lib/utils';

/**
 * myCHEF brand mark — a chef's serving cloche over a brass wave line.
 * Dome and plate use currentColor so the mark reads on paper (ink) and on
 * ink (paper) alike; the vent knob and the ocean wave carry the brass accent
 * that runs through the rest of the site.
 */
export default function BrandMark({
  className,
  accent = 'var(--color-brass)',
}: {
  className?: string;
  accent?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      role="img"
      aria-hidden="true"
      className={cn('shrink-0', className)}
    >
      {/* vent knob — echoes the wordmark okina accent */}
      <circle cx="16" cy="7.6" r="1.6" fill={accent} />
      <path d="M16 9.2v1.8" stroke={accent} strokeWidth="1.4" strokeLinecap="round" />
      {/* cloche dome */}
      <path
        d="M6 21a10 10 0 0 1 20 0"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      {/* dome inner highlight */}
      <path
        d="M11.4 20.2A4.9 4.9 0 0 1 16 15.4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.45"
      />
      {/* plate */}
      <path d="M4.2 21.4h23.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      {/* ocean wave — the island line */}
      <path
        d="M7.4 25.2c1.45-1.45 2.9-1.45 4.3 0 1.45 1.45 2.9 1.45 4.3 0 1.45-1.45 2.9-1.45 4.3 0"
        stroke={accent}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
