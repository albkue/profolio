"use client";

import { motion } from "motion/react";
import { useRef, useState } from "react";

/**
 * Subtle spotlight card: gold radial highlight that follows the pointer,
 * plus a 2–4px lift on hover. No 3D tilt (mouse-following rotation is
 * disallowed by CLAUDE.md's motion constraints).
 */
export default function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }

  function handleLeave() {
    setHovered(false);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      animate={{ y: hovered ? -3 : 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`relative overflow-hidden ${className ?? ""}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(420px circle at ${pos.x}% ${pos.y}%, rgba(201,162,39,0.07), transparent 70%)`,
        }}
      />
      {children}
    </motion.div>
  );
}
