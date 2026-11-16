"use client";

import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

/**
 * Light/dark theme toggle. Default is light; the pre-paint script in
 * layout.tsx applies a stored dark preference before first paint.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  // Read the applied theme after mount (set by the pre-paint script)
  useEffect(() => {
    if (document.documentElement.dataset.theme === "dark") {
      setTheme("dark");
    }
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // storage unavailable — theme still applies for this visit
    }
    setTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-muted transition-colors hover:border-gold/50 hover:text-gold"
    >
      {theme === "dark" ? (
        <HiOutlineSun aria-hidden className="h-5 w-5" />
      ) : (
        <HiOutlineMoon aria-hidden className="h-5 w-5" />
      )}
    </button>
  );
}
