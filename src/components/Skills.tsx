import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="font-display text-4xl font-bold text-center text-parchment">
        Skill Tree
      </h2>
      <p className="text-gold/70 text-center text-sm font-display tracking-widest mb-12 mt-2">
        ~ abilities unlocked along the journey ~
      </p>

      <div className="space-y-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="font-display text-sm font-semibold text-primary mb-3 uppercase tracking-wider flex items-center gap-2">
              <span className="text-gold">◆</span> {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm font-medium bg-[#1a1209] text-muted rounded-lg border border-primary/20 hover:border-primary/60 hover:text-primary transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
