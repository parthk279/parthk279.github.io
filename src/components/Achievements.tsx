import { achievements } from "@/data/portfolio";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2">
        Achievements Unlocked
      </h2>
      <p className="text-muted text-center text-sm font-mono mb-12">
        ~ trophies earned on this journey ~
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((achievement, i) => (
          <div
            key={i}
            className="border border-card-border rounded-lg bg-card p-5 card-hover"
          >
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-accent/10 text-accent font-bold text-xs font-mono border border-accent/30">
                {achievement.rank}
              </span>
              <p className="text-sm text-foreground/90 leading-snug">
                {achievement.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
