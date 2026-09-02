'use client';

import { motion, useReducedMotion } from 'motion/react';
import { DISTANCE, DURATION, EASE_STANDARD } from '@/lib/motion';
import { cn } from '@/lib/utils';

export default function Reveal({
  children,
  className,
  y = DISTANCE.normal,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px' }}
      transition={{ duration: DURATION.normal, delay, ease: EASE_STANDARD }}
    >
      {children}
    </motion.div>
  );
}

export function MaskReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={cn('overflow-hidden', className)}>{children}</div>;
  }
  return (
    <motion.div
      className={cn('overflow-hidden', className)}
      initial={{ clipPath: 'inset(12% 12% 12% 12%)' }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: DURATION.slow, ease: EASE_STANDARD }}
    >
      {children}
    </motion.div>
  );
}
