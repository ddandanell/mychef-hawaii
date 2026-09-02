import Photo from '@/components/Photo';
import { cn } from '@/lib/utils';

/**
 * Full-bleed still. Type + one CTA sit in a quiet third.
 * Gradient from the type edge only — 20–35% max. The photograph stays the picture.
 */
export default function Hero({
  src,
  alt,
  children,
  min = 'hero',
  className,
}: {
  src: string;
  alt: string;
  children: React.ReactNode;
  min?: 'hero' | 'short';
  className?: string;
}) {
  return (
    <section
      className={cn(
        'relative -mt-16 flex items-end overflow-hidden',
        min === 'short' ? 'min-h-[72svh] min-h-[520px]' : 'min-h-[100svh] min-h-[640px]',
        className,
      )}
    >
      <div className="absolute inset-0">
        <Photo src={src} alt={alt} fill priority sizes="100vw" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-full max-w-[42rem] bg-gradient-to-r from-ink/35 via-ink/18 to-transparent"
      />
      <div className="relative mx-auto w-full max-w-spread px-5 pb-20 pt-36 lg:px-10 lg:pb-24 lg:pt-40">
        <div className="max-w-[38rem] [text-shadow:0_1px_16px_rgba(28,25,22,0.28)]">{children}</div>
      </div>
    </section>
  );
}
