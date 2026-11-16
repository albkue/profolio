"use client";

import { motion } from "motion/react";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import Magnetic from "./Magnetic";
import SectionHeading from "./SectionHeading";
import { GoldDivider, KbachPattern } from "./khmer";
import { revealUp } from "@/lib/motion";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Soft gold glow behind the closing section */}
      <div
        aria-hidden
        className="absolute bottom-[-10rem] left-1/2 -z-10 h-[28rem] w-[44rem] -translate-x-1/2 animate-[glow-breathe_16s_ease-in-out_infinite] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,162,39,0.08) 0%, rgba(201,162,39,0.03) 40%, transparent 70%)",
        }}
      />
      {/* Khmer geometric line pattern, fading upward (~6% opacity) */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 -z-10 h-[22rem] w-[min(36rem,100%)] opacity-[0.06] [mask-image:linear-gradient(to_top,black,transparent)]"
      >
        <KbachPattern
          id="kbach-contact"
          className="absolute bottom-0 left-0 h-[26rem] w-full animate-[kbach-drift_22s_ease-in-out_infinite_alternate] text-gold"
        />
      </div>

      <div className="mx-auto max-w-4xl px-6 py-20">
        <SectionHeading index="07" eyebrow="Contact" title="Contact" />
        <div className="mt-8 flex flex-wrap gap-4">
          <motion.div {...revealUp(0.05, 14)}>
            <Magnetic>
              <a
                href="mailto:sothyeng284@gmail.com"
                className="flex items-center gap-2 rounded-full border border-transparent bg-gold px-5 py-2.5 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:bg-gold-hover"
              >
                <HiOutlineMail className="h-4 w-4" />
                sothyeng284@gmail.com
              </a>
            </Magnetic>
          </motion.div>
          <motion.div {...revealUp(0.15, 14)}>
            <Magnetic>
              <a
                href="https://github.com/albkue"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-gold/50 hover:text-gold"
              >
                <SiGithub className="h-4 w-4" />
                github.com/albkue
              </a>
            </Magnetic>
          </motion.div>
          <motion.div {...revealUp(0.25, 14)}>
            <span className="flex items-center gap-2 px-2 font-mono text-sm text-muted">
              <HiOutlinePhone className="h-4 w-4" />
              +855 10 635 568
            </span>
          </motion.div>
        </div>

        <GoldDivider className="mt-14" />
        <motion.p
          {...revealUp(0.3, 10)}
          className="mt-6 text-center font-mono text-xs tracking-[0.25em] text-muted uppercase"
        >
          Eng Sothy — Phnom Penh, Cambodia
        </motion.p>
      </div>
    </section>
  );
}
