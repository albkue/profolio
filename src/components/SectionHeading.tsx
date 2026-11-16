"use client";

import { motion } from "motion/react";
import { EASE, VIEWPORT } from "@/lib/motion";

/**
 * Editorial section heading used by every major section:
 * monospace gold number + uppercase eyebrow, large display title,
 * and a hairline divider that draws horizontally when in view.
 */
export default function SectionHeading({
  index,
  eyebrow,
  title,
  className,
}: {
  index: string;
  eyebrow: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.45, ease: EASE }}
        className="flex items-center gap-3"
      >
        <span className="font-mono text-xs tracking-[0.25em] text-gold">
          {index}
        </span>
        <span aria-hidden className="h-px w-8 bg-gold/40" />
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
          {eyebrow}
        </span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.55, delay: 0.08, ease: EASE }}
        className="mt-4 text-[clamp(1.875rem,1.25rem+2vw,2.5rem)] font-display font-semibold tracking-tight text-foreground"
      >
        {title}
      </motion.h2>
      <motion.div
        aria-hidden
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
        className="mt-6 h-px w-full origin-left bg-hairline"
      />
    </div>
  );
}
