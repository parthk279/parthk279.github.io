"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-card-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-sm font-mono text-primary hover:text-primary/80 transition-colors"
        >
          PK
        </a>

        <div className="flex items-center gap-6">
          <a
            href="#about"
            className="text-sm text-muted hover:text-foreground transition-colors hidden sm:block"
          >
            About
          </a>
          <a
            href="#experience"
            className="text-sm text-muted hover:text-foreground transition-colors hidden sm:block"
          >
            Journey
          </a>
          <a
            href="#projects"
            className="text-sm text-muted hover:text-foreground transition-colors hidden sm:block"
          >
            Quests
          </a>
          <a
            href="#contact"
            className="px-4 py-1.5 border border-primary text-primary text-sm font-mono rounded hover:bg-primary/10 transition-all"
          >
            Talk to me
          </a>
        </div>
      </div>
    </nav>
  );
}
