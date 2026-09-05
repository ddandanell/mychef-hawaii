import Photo from '@/components/Photo';
import { cn } from '@/lib/utils';

/**
 * Full-bleed still. Type sits on the photograph with a readable scrim —
 * the Dubai / Bali treatment, not a paper card stacked on the picture.
 */
export default function Hero({
  src,
  alt,
  children,
  min = 'hero',
  className,
  objectPosition,
}: {
  src: string;
  alt: string;
  children: React.ReactNode;
  min?: 'hero' | 'short';
  className?: string;
  objectPosition?: string;
}) {
  return (
    <section
      className={cn(
        'hero-bleed relative flex items-end overflow-hidden',
        min === 'short' ? 'min-h-[72svh] min-h-[480px]' : 'min-h-[100svh] min-h-[640px]',
        className,
      )}
    >
      <div className="absolute inset-0">
        <Photo
          src={src}
          alt={alt}
          fill
          priority
          sizes="100vw"
          style={objectPosition ? { objectPosition } : undefined}
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,20,18,0.55)_0%,rgba(22,20,18,0.18)_52%,rgba(22,20,18,0.08)_100%),linear-gradient(180deg,rgba(22,20,18,0.28)_0%,rgba(22,20,18,0.08)_38%,rgba(22,20,18,0.78)_100%)]"
          aria-hidden
        />
      </div>
      <div className="hero-copy relative mx-auto w-full max-w-spread px-5 pb-16 pt-28 lg:px-10 lg:pb-24 lg:pt-32">
        <div className="max-w-[40rem] text-paper">{children}</div>
      </div>
    </section>
  );
}
