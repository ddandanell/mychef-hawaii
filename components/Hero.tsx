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
      data-hero
      className={cn(
        'hero-bleed relative flex items-end overflow-hidden',
        min === 'short' ? 'min-h-[max(480px,68svh)]' : 'min-h-[max(640px,92svh)]',
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
        <div aria-hidden className="absolute inset-0 bg-ink/35 lg:bg-ink/20" />
        <div aria-hidden className="absolute inset-0 hero-scrim-bottom" />
        <div aria-hidden className="absolute inset-0 hidden lg:block hero-scrim-left" />
      </div>
      <div className="hero-copy relative mx-auto w-full max-w-spread px-5 pb-16 pt-28 lg:px-10 lg:pb-24 lg:pt-32">
        <div className="hero-type-shadow max-w-[40rem] text-paper">{children}</div>
      </div>
    </section>
  );
}
