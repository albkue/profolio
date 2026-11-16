"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { revealUp } from "@/lib/motion";

export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div {...revealUp(delay)} className={className}>
      {children}
    </motion.div>
  );
}
