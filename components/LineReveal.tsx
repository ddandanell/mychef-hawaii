import { cn } from '@/lib/utils';

/**
 * Marketing headline. One crisp line — no per-word overflow clip
 * (that ghosted/doubled the H1 on photographs).
 */
export default function LineReveal({
  text,
  as: Tag = 'h1',
  className,
}: {
  text: string;
  as?: 'h1' | 'h2' | 'p';
  className?: string;
}) {
  return <Tag className={cn(className)}>{text}</Tag>;
}
