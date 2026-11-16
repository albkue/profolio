/**
 * Shared motion system for the whole site.
 * One easing curve, consistent durations and distances (CLAUDE.md motion rules).
 */

/** Universal easing curve — fast start, long smooth settle. */
export const EASE = [0.22, 1, 0.36, 1] as const;

/** Scroll-reveal trigger: fire once, slightly before the element is centered. */
export const VIEWPORT = { once: true, margin: "-80px" } as const;

/** Scroll-triggered fade-up: 400–600ms, 12–24px upward movement. */
export const revealUp = (delay = 0, distance = 18) => ({
  initial: { opacity: 0, y: distance },
  whileInView: { opacity: 1, y: 0 },
  viewport: VIEWPORT,
  transition: { duration: 0.55, delay, ease: EASE },
});

/** Entrance fade-up for above-the-fold (hero) elements. */
export const enterUp = (delay = 0, distance = 16) => ({
  initial: { opacity: 0, y: distance },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: EASE },
});
