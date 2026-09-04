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
    <div
      className={cn(
        'border-t border-brass/45 bg-paper px-7 py-10 text-ink shadow-[inset_0_1px_0_0_rgba(28,25,22,0.06)] sm:px-10 sm:py-12',
        className,
      )}
    >
      {children}
    </div>
  );
}
