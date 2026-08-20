import { motion } from 'framer-motion';

/**
 * Hero headline word-mask reveal (design.md §7): word-level split,
 * y 110% → 0 inside overflow-hidden masks, stagger 0.06s, 0.8s power4.out.
 */
export default function WordMask({
  text,
  delay = 0.2,
  className,
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  const words = text.split(' ');
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: delay + i * 0.06 }}
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
