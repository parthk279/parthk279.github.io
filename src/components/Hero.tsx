"use client";

import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent/40 rounded-full animate-float [animation-delay:1s]" />
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-primary/20 rounded-full animate-float [animation-delay:2s]" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent/30 rounded-full animate-float [animation-delay:0.5s]" />
      </div>

      <div className="text-center max-w-4xl animate-fade-in-up">
        <p className="text-muted font-mono text-sm mb-4 tracking-wider uppercase">
          ~ A new quest begins ~
        </p>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-2">
          <span className="block text-foreground">{profile.name.first}</span>
          <span className="block text-primary">{profile.name.last}</span>
        </h1>

        <p className="text-muted text-lg md:text-xl mt-6 max-w-2xl mx-auto">
          {profile.tagline}
        </p>

        <a
          href="#about"
          className="inline-block mt-10 px-8 py-3 border border-primary text-primary font-mono text-sm rounded hover:bg-primary/10 transition-all duration-300"
        >
          Venture Forth
        </a>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 text-muted hover:text-primary transition-colors"
      >
        <svg
          className="w-6 h-6 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </a>
    </section>
  );
}
