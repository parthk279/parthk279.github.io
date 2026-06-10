import { achievements } from "@/data/portfolio";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 max-w-5xl mx-auto">
      <p className="text-xs font-display font-semibold text-primary uppercase tracking-[0.3em] text-center mb-2">
        Achievements Unlocked
      </p>
      <h2 className="font-display text-4xl font-bold text-center text-parchment">
        Trophies &amp; Relics
      </h2>
      <p className="text-gold/70 text-center text-sm font-display tracking-widest mb-12 mt-2">
        ~ earned on this journey ~
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {achievements.map((achievement, i) => (
          <div
            key={i}
            className="group flex flex-col items-center text-center cursor-default"
          >
            {/* Medallion */}
            <div className="relative mb-3">
              {/* Glow halo on hover */}
              <div
                className="absolute -inset-2 rounded-full blur-lg transition-all duration-300 group-hover:-inset-4 group-hover:blur-xl"
                style={{ background: `${achievement.color}22`, opacity: 0.6 }}
              />
              <div
                className="relative w-16 h-16 flex items-center justify-center rounded-full border-2 transition-transform duration-300 group-hover:scale-110"
                style={{
                  borderColor: `${achievement.color}80`,
                  background:
                    "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.12), rgba(0,0,0,0.3))",
                  boxShadow: `0 0 18px ${achievement.color}33, inset 0 1px 0 rgba(255,255,255,0.15)`,
                }}
              >
                <span
                  className="font-display font-extrabold text-lg leading-none"
                  style={{ color: achievement.color }}
                >
                  {achievement.rank}
                </span>
              </div>
              {/* Medallion nub */}
              <div
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3.5 h-1.5 rounded-b-full transition-transform duration-300 group-hover:scale-125"
                style={{ background: `${achievement.color}66` }}
              />
            </div>
            <p className="text-sm text-muted leading-snug max-w-[180px]">
              {achievement.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
