import { profile, education } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2">Character Sheet</h2>
      <p className="text-muted text-center text-sm font-mono mb-12">
        ~ who is this adventurer? ~
      </p>

      <div className="border border-card-border rounded-xl bg-card p-8 md:p-12">
        <div className="flex flex-col md:flex-row md:items-start gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-2xl font-bold text-foreground">
                {profile.name.first} {profile.name.last}
              </h3>
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full border border-primary/30">
                Lv. {profile.level}
              </span>
            </div>

            <p className="text-accent font-mono text-sm mb-1">
              Class: {profile.class}
            </p>
            <p className="text-muted font-mono text-sm mb-6">
              Location: {profile.location}
            </p>

            <p className="text-foreground/80 leading-relaxed">{profile.bio}</p>
          </div>

          <div className="md:w-64 space-y-4">
            <div className="border border-card-border rounded-lg p-4 bg-background/50">
              <p className="text-xs font-mono text-muted uppercase mb-2">
                Education
              </p>
              {education.map((edu) => (
                <div key={edu.school} className="mb-3 last:mb-0">
                  <p className="text-sm font-medium text-foreground">
                    {edu.degree}
                  </p>
                  <p className="text-xs text-muted">{edu.school}</p>
                  <p className="text-xs text-primary font-mono">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
