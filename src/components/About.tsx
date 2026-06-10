import { profile, education } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="cave-bg py-24 px-6 -mt-px">
      <div className="max-w-5xl mx-auto">
      <p className="text-xs font-display font-semibold text-primary uppercase tracking-[0.3em] text-center mb-2">
        About
      </p>
      <h2 className="font-display text-4xl font-bold text-center text-parchment">
        Character Sheet
      </h2>
      <p className="text-gold/70 text-center text-sm font-display tracking-widest mb-12 mt-2">
        ~ who is this adventurer? ~
      </p>

      <div className="parchment-card rounded-2xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row md:items-start gap-8">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h3 className="font-display text-3xl font-bold text-parchment-ink">
                {profile.name.first} {profile.name.last}
              </h3>
              <span className="px-3 py-1 bg-primary/15 text-primary-dark text-xs font-display font-semibold rounded-full border border-primary/40">
                Lv. {profile.level}
              </span>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-1 mb-6 font-display text-sm">
              <span className="text-bark-light">
                <span className="text-primary-dark font-semibold">Class:</span>{" "}
                {profile.class}
              </span>
              <span className="text-bark-light">
                <span className="text-primary-dark font-semibold">Location:</span>{" "}
                {profile.location}
              </span>
            </div>

            <p className="text-bark leading-relaxed">{profile.bio}</p>
          </div>

          <div className="md:w-72 flex-shrink-0">
            <div className="rounded-xl p-5 border border-bark-light/30 bg-[#fef0dc]">
              <p className="text-xs font-display font-semibold text-primary-dark uppercase tracking-wider mb-3">
                ⚔ Lineage &amp; Training
              </p>
              {education.map((edu) => (
                <div
                  key={edu.school}
                  className="mb-4 last:mb-0 pb-4 last:pb-0 border-b last:border-0 border-bark-light/20"
                >
                  <p className="text-sm font-display font-semibold text-parchment-ink">
                    {edu.degree}
                  </p>
                  <p className="text-xs text-bark-light">{edu.school}</p>
                  <p className="text-xs text-primary-dark font-display font-semibold mt-0.5">
                    {edu.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
