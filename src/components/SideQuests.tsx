import { sideQuests } from "@/data/portfolio";

export default function SideQuests() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="font-display text-4xl font-bold text-center text-parchment">
        Side Quests
      </h2>
      <p className="text-gold/70 text-center text-sm font-display tracking-widest mb-12 mt-2">
        ~ bonus adventures worth mentioning ~
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sideQuests.map((quest) => (
          <div
            key={quest.title}
            className="wood-card rounded-xl p-6 card-hover flex flex-col"
          >
            <span className="text-[11px] font-display font-bold text-gold mb-3 uppercase tracking-wider flex items-center gap-1.5">
              <span className="animate-sway inline-block">⚑</span> Side Quest
            </span>
            <h3 className="font-display text-lg font-bold text-parchment mb-2">
              {quest.title}
            </h3>
            <p className="text-sm text-muted/90 mb-4 flex-1 leading-relaxed">
              {quest.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {quest.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 text-xs font-display font-semibold bg-primary/10 text-primary rounded border border-primary/25"
                >
                  {t}
                </span>
              ))}
            </div>
            {quest.link && (
              <a
                href={quest.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gold font-display font-semibold hover:text-primary transition-colors"
              >
                View &rarr;
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
