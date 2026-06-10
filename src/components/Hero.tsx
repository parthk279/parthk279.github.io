import { profile } from "@/data/portfolio";
import CampfireScene from "./CampfireScene";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden">
      <CampfireScene />

      <div className="text-center max-w-4xl animate-fade-in-up relative z-10">
        <p className="text-gold/80 font-display text-sm md:text-base mb-6 tracking-[0.3em] uppercase">
          ~ a new quest begins ~
        </p>

        <h1 className="font-display text-6xl md:text-8xl font-extrabold tracking-tight leading-[0.95]">
          <span className="block text-parchment glow-text">{profile.name.first}</span>
          <span className="block text-primary glow-text">{profile.name.last}</span>
        </h1>

        <p className="text-muted text-lg md:text-xl mt-8 max-w-2xl mx-auto leading-relaxed">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#about"
            className="px-8 py-3 bg-primary text-night font-display font-semibold text-sm rounded-lg hover:bg-gold transition-all duration-300 shadow-[0_4px_20px_rgba(255,130,54,0.4)]"
          >
            Venture Forth
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-primary/50 text-primary font-display font-semibold text-sm rounded-lg hover:bg-primary/10 transition-all duration-300"
          >
            Talk to me
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 z-10 text-gold/60 hover:text-gold transition-colors"
        aria-label="Scroll to about"
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
