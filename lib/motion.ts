export const EASE_STANDARD = [0.22, 1, 0.36, 1] as const;

export const DURATION = {
  fast: 0.2,
  normal: 0.45,
  slow: 0.8,
  cinematic: 1.2,
} as const;

export const DISTANCE = {
  small: 12,
  normal: 32,
  large: 80,
} as const;

export const revealTransition = {
  duration: DURATION.normal,
  ease: EASE_STANDARD,
};

export const fastTransition = {
  duration: DURATION.fast,
  ease: EASE_STANDARD,
};
