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
          <span className="block text-primary glow-text">{profile.name.first}</span>
          <span className="block text-parchment glow-text">{profile.name.last}</span>
        </h1>

        <p className="text-muted text-base md:text-xl mt-8 mx-auto leading-relaxed md:whitespace-nowrap">
          {profile.tagline}
        </p>
      </div>

      {/* Venture Forth, sitting just above the campfire with the guiding arrow */}
      <a
        href="#about"
        className="group absolute bottom-28 md:bottom-32 z-10 flex flex-col items-center gap-2 text-gold/80 hover:text-gold transition-colors"
        aria-label="Venture forth to the about section"
      >
        <span className="font-display font-semibold text-sm tracking-[0.3em] uppercase">
          Venture Forth
        </span>
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
