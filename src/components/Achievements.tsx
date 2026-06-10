import { achievements } from "@/data/portfolio";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="font-display text-4xl font-bold text-center text-parchment">
        Achievements Unlocked
      </h2>
      <p className="text-gold/70 text-center text-sm font-display tracking-widest mb-12 mt-2">
        ~ trophies earned on this journey ~
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((achievement, i) => (
          <div
            key={i}
            className="wood-card rounded-xl p-5 card-hover flex items-start gap-3"
          >
            <span className="flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-lg bg-gold/15 text-gold font-display font-bold text-xs border border-gold/40 shadow-[0_0_12px_rgba(255,184,0,0.2)]">
              {achievement.rank}
            </span>
            <p className="text-sm text-muted leading-snug pt-0.5">
              {achievement.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
