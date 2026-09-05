import { cn } from '@/lib/utils';

export default function Eyebrow({
  children,
  tone = 'ink',
}: {
  children: React.ReactNode;
  tone?: 'ink' | 'paper';
}) {
  return (
    <p
      className={cn(
        'flex items-center gap-3 text-[12px] uppercase tracking-[0.18em]',
        tone === 'paper' ? 'text-paper' : 'text-mute',
      )}
    >
      <span aria-hidden className="h-px w-8 bg-brass" />
      {children}
    </p>
  );
}
