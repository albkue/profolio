"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { EASE } from "@/lib/motion";

const links = [
  { href: "#projects", id: "projects", label: "Work" },
  { href: "#skills", id: "skills", label: "Skills" },
  { href: "#about", id: "about", label: "About" },
  { href: "#certifications", id: "certifications", label: "Certs" },
  { href: "#education", id: "education", label: "Education" },
  { href: "#contact", id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    links.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Close the mobile menu when the viewport grows to desktop size
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Escape closes the mobile menu
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3 md:py-4">
        <a
          href="#top"
          className="flex items-center gap-2.5 text-sm font-semibold tracking-tight"
        >
          <Image
            src="/profile.jpg"
            alt="Eng Sothy"
            width={28}
            height={28}
            className="h-7 w-7 rounded-full object-cover ring-1 ring-gold/30"
          />
          Eng Sothy
        </a>

        {/* Desktop links (≥768px) */}
        <ul className="hidden gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-active={active === link.id}
                className={`nav-link block rounded-full px-3 py-1.5 font-mono text-xs tracking-widest uppercase transition-colors ${
                  active === link.id
                    ? "text-gold"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger (<768px), 44px touch target */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-muted transition-colors hover:border-gold/50 hover:text-gold md:hidden"
        >
          <span aria-hidden className="relative block h-3 w-4">
            <motion.span
              animate={open ? { y: 6, rotate: 45 } : { y: 0, rotate: 0 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="absolute top-1.5 left-0 block h-px w-4 bg-current"
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1 }}
              transition={{ duration: 0.15 }}
              className="absolute top-1.5 left-0 block h-px w-4 bg-current"
            />
            <motion.span
              animate={open ? { y: -6, rotate: -45 } : { y: 0, rotate: 0 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="absolute top-1.5 left-0 block h-px w-4 bg-current"
            />
          </span>
        </button>
      </nav>

      {/* Mobile slide-down panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="border-t border-hairline bg-background/95 backdrop-blur md:hidden"
          >
            <div className="mx-auto max-w-4xl px-6 pt-2 pb-4">
              <ul className="flex flex-col">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      data-active={active === link.id}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between py-3.5 font-mono text-sm tracking-widest uppercase transition-colors ${
                        active === link.id
                          ? "text-gold"
                          : "text-foreground/80 hover:text-gold"
                      }`}
                    >
                      {link.label}
                      <span
                        aria-hidden
                        className={active === link.id ? "text-gold" : "text-muted"}
                      >
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-2 border-t border-hairline pt-4">
                <a
                  href="/Eng_Sothy_CV.pdf"
                  download
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-gold py-3 text-sm font-semibold text-background transition-colors hover:bg-gold-hover"
                >
                  Download CV
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
