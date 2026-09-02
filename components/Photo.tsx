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
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
}) {
  const shared = {
    src,
    alt,
    priority,
    sizes,
    className: cn('object-cover', className),
  };
  if (fill) {
    return <Image {...shared} fill />;
  }
  return <Image {...shared} width={width ?? 1600} height={height ?? 1067} />;
}
