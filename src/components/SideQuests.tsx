import { sideQuests } from "@/data/portfolio";

export default function SideQuests() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2">Side Quests</h2>
      <p className="text-muted text-center text-sm font-mono mb-12">
        ~ bonus adventures worth mentioning ~
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sideQuests.map((quest) => (
          <div
            key={quest.title}
            className="border border-card-border rounded-xl bg-card p-6 card-hover flex flex-col"
          >
            <span className="text-xs font-mono text-accent mb-3 uppercase">
              Side Quest
            </span>
            <h3 className="text-base font-bold text-foreground mb-2">
              {quest.title}
            </h3>
            <p className="text-sm text-foreground/70 mb-4 flex-1">
              {quest.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {quest.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 text-xs bg-tag-bg text-tag-text rounded border border-primary/20 font-mono"
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
                className="text-sm text-primary font-mono hover:underline"
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
