"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
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
        <ul className="flex gap-1">
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
      </nav>
    </header>
  );
}
