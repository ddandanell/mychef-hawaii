import type { CSSProperties } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function Photo({
  src,
  alt,
  priority = false,
  sizes = '100vw',
  className,
  fill = false,
  width,
  height,
  style,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  style?: CSSProperties;
}) {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn('object-cover', className)}
        style={style}
      />
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 1600}
      height={height ?? 1067}
      priority={priority}
      sizes={sizes}
      className={cn('object-cover', className)}
    />
  );
}
