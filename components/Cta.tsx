import Link from 'next/link';
import { cn } from '@/lib/utils';
import { quotePath } from '@/lib/paths';
import { primaryCtaLabel, type IslandId } from '@/data/islands';

const base =
  'inline-flex h-12 items-center justify-center px-6 text-[14px] font-medium leading-none tracking-[0.01em] rounded-[2px] transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

const variants = {
  primary: `${base} bg-ink text-paper focus-visible:outline-ink`,
  secondary: `${base} bg-paper text-ink border border-ink focus-visible:outline-ink`,
} as const;

export function CtaLink({
  href,
  children,
  variant = 'primary',
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  const cls = cn(variants[variant], className);
  const external = href.startsWith('http') || href.startsWith('mailto:');
  if (external) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function QuoteCta({
  island,
  service,
  variant = 'primary',
  className,
}: {
  island?: IslandId | null;
  service?: string;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <CtaLink href={quotePath(island ?? undefined, service)} variant={variant} className={className}>
      {primaryCtaLabel(island)}
    </CtaLink>
  );
}

export function EnquireCta({
  island,
  variant = 'primary',
  className,
}: {
  island?: IslandId | null;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <CtaLink href={quotePath(island ?? undefined)} variant={variant} className={className}>
      {primaryCtaLabel(island)}
    </CtaLink>
  );
}
