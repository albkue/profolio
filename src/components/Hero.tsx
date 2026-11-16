"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { SiGithub } from "react-icons/si";
import Magnetic from "./Magnetic";
import TextReveal from "./TextReveal";
import { CornerOrnament, KbachPattern } from "./khmer";
import { enterUp } from "@/lib/motion";

const techStrip = [
  "Spring Boot",
  "Kafka",
  "PostgreSQL",
  "Redis",
  "FastAPI",
  "Docker",
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Soft dark-gold radial glow behind the headline — slow ambient breathe */}
      <div
        aria-hidden
        className="absolute top-[-10rem] left-1/2 -z-10 h-[36rem] w-[56rem] -translate-x-1/2 animate-[glow-breathe_16s_ease-in-out_infinite] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,162,39,0.10) 0%, rgba(201,162,39,0.04) 40%, transparent 70%)",
        }}
      />
      {/* Khmer geometric line pattern with a very slow vertical drift (~6% opacity) */}
      <div
        aria-hidden
        className="absolute top-0 right-0 -z-10 h-[26rem] w-[min(42rem,100%)] [mask-image:linear-gradient(to_bottom,black,transparent)]"
        style={{ opacity: "var(--pattern-opacity)" }}
      >
        <KbachPattern
          id="kbach-hero"
          className="absolute top-0 right-0 h-[30rem] w-full animate-[kbach-drift_22s_ease-in-out_infinite_alternate] text-gold"
        />
      </div>
      {/* Corner ornaments */}
      <CornerOrnament className="absolute top-4 left-4 -z-10 hidden text-gold/60 sm:block" />
      <CornerOrnament
        flip
        className="absolute top-4 right-4 -z-10 hidden text-gold/60 sm:block"
      />

      <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6 pt-24 pb-16 sm:pt-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="h-20 w-20 overflow-hidden rounded-full bg-elevated p-[2px] ring-1 ring-gold/30"
        >
          <Image
            src="/profile.jpg"
            alt="Eng Sothy"
            width={80}
            height={80}
            priority
            className="h-full w-full rounded-full object-cover"
          />
        </motion.div>

        {/* 1 — monospace label */}
        <motion.p
          {...enterUp(0.05)}
          className="font-mono text-xs tracking-[0.25em] text-gold uppercase"
        >
          01 — Backend &amp; Data Engineering
        </motion.p>

        <motion.div {...enterUp(0.15)} className="flex flex-wrap items-center gap-4">
          <span className="flex items-center gap-2 rounded-full border border-hairline bg-surface px-3 py-1 font-mono text-xs tracking-widest text-muted uppercase">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold" />
            Open to opportunities
          </span>
          <span className="font-mono text-xs tracking-widest text-muted uppercase">
            Phnom Penh, Cambodia
          </span>
        </motion.div>

        {/* 2 — headline (word-by-word reveal) */}
        <h1 className="text-[clamp(2.75rem,1.5rem+5.5vw,4.5rem)] font-display font-semibold tracking-tight text-foreground">
          <TextReveal text="Eng Sothy" delay={0.25} />
          <span aria-hidden className="text-gold">
            .
          </span>
        </h1>

        {/* 3 — supporting description */}
        <motion.p
          {...enterUp(0.45, 18)}
          className="font-display text-xl font-medium tracking-tight text-foreground/80 sm:text-2xl"
        >
          Building production-shaped APIs and ML-powered services — from data
          and model to a deployed, containerized service.
        </motion.p>
        <motion.p
          {...enterUp(0.55, 18)}
          className="max-w-2xl text-base leading-7 text-muted"
        >
          Data Science &amp; Engineering student at the Royal University of
          Phnom Penh. Comfortable across the full path from training a model
          to shipping it behind a clean, documented API. Seeking a backend or
          AI/ML engineering internship.
        </motion.p>

        {/* 4 — CTAs + 5 — social links */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <motion.div {...enterUp(0.65)} className="flex flex-wrap gap-4">
            <Magnetic>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full border border-transparent bg-gold px-6 py-2.5 text-sm font-semibold text-gold-contrast shadow-[0_0_24px_rgba(201,162,39,0.15)] transition-all hover:-translate-y-0.5 hover:bg-gold-hover"
              >
                View Selected Work
                <span
                  aria-hidden
                  className="-translate-y-px transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="/Eng_Sothy_CV.pdf"
                download
                className="rounded-full border border-hairline px-6 py-2.5 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-gold/50 hover:text-gold"
              >
                Download CV
              </a>
            </Magnetic>
          </motion.div>
          <motion.div
            {...enterUp(0.78)}
            className="flex h-[42px] items-center gap-3 text-muted"
          >
            <a
              href="https://github.com/albkue"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-2.5 -m-2.5 transition-all duration-300 hover:scale-110 hover:text-gold"
            >
              <SiGithub className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        {/* 6 — technology strip */}
        <motion.div
          {...enterUp(0.9)}
          className="mt-6 border-t border-hairline pt-6"
        >
          <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
            {techStrip.join(" · ")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
