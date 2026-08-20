import { cn } from '@/lib/utils';

/**
 * Contour motif — abstract topographic contour lines (design.md §6).
 * The site's one decorative signature: abstract cartography, thin strokes.
 * Inline SVG so it can be recolored and scroll-drawn.
 */
export default function Contours({
  className,
  stroke = '#E3D9C8',
  strokeWidth = 1.5,
}: {
  className?: string;
  stroke?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      aria-hidden="true"
      className={cn('pointer-events-none', className)}
    >
      <g stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round">
        <path d="M400 300c-34 0-58-24-58-52s22-50 56-50 60 22 60 52-24 50-58 50z" />
        <path d="M400 322c-52 0-90-34-90-76s36-74 88-74 92 32 92 76-38 74-90 74z" />
        <path d="M398 346c-72 2-124-46-122-102s50-102 120-100 126 44 124 102-48 98-122 100z" />
        <path d="M402 372c-94 0-158-60-156-128s66-132 154-130 162 58 160 128-64 130-158 130z" />
        <path d="M398 400c-116-2-192-76-190-156s84-162 190-160 196 74 194 156-76 162-194 160z" />
        <path d="M402 428c-140 0-226-94-224-184s102-196 224-194 230 92 228 184-88 194-228 194z" />
        <path d="M150 520c-40-8-66-34-64-62s32-52 70-50 66 30 64 64-30 56-70 48z" />
        <path d="M150 548c-56-10-92-46-90-88s46-74 96-72 92 42 90 90-44 80-96 70z" />
        <path d="M640 120c-28-6-46-26-44-46s24-38 52-36 48 24 46 48-24 40-54 34z" />
        <path d="M640 146c-44-8-72-36-70-68s36-58 78-56 74 36 72 70-34 62-80 54z" />
      </g>
    </svg>
  );
}
