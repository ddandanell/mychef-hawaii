'use client';

import { motion, useReducedMotion } from 'motion/react';
import { DURATION, EASE_STANDARD } from '@/lib/motion';
import { cn } from '@/lib/utils';

export default function LineReveal({
  text,
  as: Tag = 'h1',
  className,
}: {
  text: string;
  as?: 'h1' | 'h2' | 'p';
  className?: string;
}) {
  const reduce = useReducedMotion();
  const words = text.split(' ');
  if (reduce) {
    return <Tag className={className}>{text}</Tag>;
  }
  return (
    <Tag className={cn(className)}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ duration: DURATION.slow, delay: 0.08 + i * 0.035, ease: EASE_STANDARD }}
          >
            {word}
            {i < words.length - 1 ? '\u00a0' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
