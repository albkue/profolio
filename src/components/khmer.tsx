"use client";

import { motion } from "motion/react";
import { EASE, VIEWPORT } from "@/lib/motion";

/**
 * Khmer-inspired geometric line pattern ("kbach" diamond lattice).
 * Purely decorative — always render behind content at 4–8% opacity
 * with a fade mask, per CLAUDE.md constraints.
 * `id` must be unique per page (e.g. "kbach-hero", "kbach-contact").
 */
export function KbachPattern({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  return (
    <svg aria-hidden className={className}>
      <defs>
        <pattern
          id={id}
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          {/* Outer diamond */}
          <path
            d="M20 2 L38 20 L20 38 L2 20 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          {/* Inner diamond */}
          <path
            d="M20 12 L28 20 L20 28 L12 20 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          {/* Connector ticks to the tile edges */}
          <path
            d="M0 20 H2 M38 20 H40 M20 0 V2 M20 38 V40"
            stroke="currentColor"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

/**
 * Thin gold ornamental divider with a kbach diamond at the center.
 * Draws outward from the middle when it enters the viewport.
 */
export function GoldDivider({ className }: { className?: string }) {
  return (
    <motion.div
      aria-hidden
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className={`flex items-center gap-3 ${className ?? ""}`}
    >
      <motion.span
        variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
        transition={{ duration: 0.7, ease: EASE }}
        className="h-px flex-1 origin-right bg-gradient-to-l from-transparent via-gold/30 to-gold/50"
      />
      <motion.span
        variants={{
          hidden: { opacity: 0, scale: 0.4 },
          visible: { opacity: 1, scale: 1 },
        }}
        transition={{ duration: 0.4, delay: 0.35, ease: EASE }}
        className="h-1.5 w-1.5 rotate-45 border border-gold/60"
      />
      <motion.span
        variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
        transition={{ duration: 0.7, ease: EASE }}
        className="h-px flex-1 origin-left bg-gradient-to-r from-transparent via-gold/30 to-gold/50"
      />
    </motion.div>
  );
}

/** Minimal gold corner ornament (double L-lines + diamond) for hero corners. */
export function CornerOrnament({
  className,
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      aria-hidden
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      className={`${className ?? ""} ${flip ? "-scale-x-100" : ""}`}
    >
      <path
        d="M54 2 H12 Q2 2 2 12 V54"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
      <path
        d="M54 10 H14 Q10 10 10 14 V54"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.25"
      />
      <rect
        x="8"
        y="8"
        width="5"
        height="5"
        transform="rotate(45 10.5 10.5)"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}
