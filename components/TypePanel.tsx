import { cn } from '@/lib/utils';

/** Solid paper field for type + CTA on a photograph. Ink on paper, WCAG AA. */
export default function TypePanel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('bg-paper px-6 py-8 text-ink sm:px-8 sm:py-10', className)}>
      {children}
    </div>
  );
}
