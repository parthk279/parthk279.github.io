import { projects } from "@/data/portfolio";
import Torch from "./Torch";

export default function Projects() {
  return (
    <section id="projects" className="dungeon-bg relative py-24 px-6 -mt-px overflow-hidden">
      {/* Flanking wall torches */}
      <Torch className="hidden lg:block absolute top-28 left-10" />
      <Torch className="hidden lg:block absolute top-28 right-10" />

      <div className="max-w-5xl mx-auto relative z-10">
        <p className="text-xs font-display font-semibold text-primary uppercase tracking-[0.3em] text-center mb-2">
          Projects
        </p>
        <h2 className="font-display text-4xl font-bold text-center text-parchment glow-text">
          Quest Log
        </h2>
        <p className="text-gold/70 text-center text-sm font-display tracking-widest mb-12 mt-2">
          ~ legendary encounters, each worth remembering ~
        </p>

        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group relative rounded-xl p-6 sm:p-10 border border-white/[0.12] backdrop-blur-sm hover:border-primary/40 transition-colors"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30,15,15,0.9) 0%, rgba(20,10,10,0.95) 50%, rgba(30,15,15,0.9) 100%)",
                boxShadow:
                  "0 0 60px rgba(180,30,30,0.06), inset 0 1px 0 rgba(255,184,0,0.08)",
              }}
            >
              <div className="flex items-start gap-6">
                <span className="hidden md:flex flex-shrink-0 w-14 h-14 items-center justify-center rounded-xl bg-primary/10 text-primary font-display font-bold text-2xl border border-primary/40 group-hover:shadow-[0_0_20px_rgba(255,130,54,0.3)] transition-shadow">
                  {project.number}
                </span>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-display text-xl font-bold text-parchment">
                      <span className="md:hidden text-primary mr-2">
                        {project.number}.
                      </span>
                      {project.title}
                    </h3>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 text-muted hover:text-primary transition-colors"
                        aria-label={`Open ${project.title}`}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>

                  <p className="text-sm text-muted/90 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-display font-semibold bg-primary/10 text-primary rounded-md border border-primary/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
