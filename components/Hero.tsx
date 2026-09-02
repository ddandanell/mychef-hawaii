import Photo from '@/components/Photo';
import TypePanel from '@/components/TypePanel';
import { cn } from '@/lib/utils';

/**
 * Full-bleed still. Type + one CTA sit on a solid paper panel —
 * never on raw photo. The photograph stays the picture.
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
  /** Crop the still toward a darker third — island catering, not a scrim. */
  objectPosition?: string;
}) {
  return (
    <section
      className={cn(
        'relative flex items-end overflow-hidden',
        min === 'short' ? 'min-h-[68svh] min-h-[480px]' : 'min-h-[92svh] min-h-[600px]',
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
      </div>
      <div className="relative mx-auto w-full max-w-spread px-5 py-12 lg:px-10 lg:py-16">
        <TypePanel className="max-w-[38rem]">{children}</TypePanel>
      </div>
    </section>
  );
}
