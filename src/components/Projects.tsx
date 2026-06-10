import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="font-display text-4xl font-bold text-center text-parchment">
        Quest Log
      </h2>
      <p className="text-gold/70 text-center text-sm font-display tracking-widest mb-12 mt-2">
        ~ legendary encounters, each worth remembering ~
      </p>

      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.number}
            className="parchment-card rounded-2xl p-8 card-hover"
          >
            <div className="flex items-start gap-6">
              <span className="hidden md:flex flex-shrink-0 w-14 h-14 items-center justify-center rounded-xl bg-primary/10 text-primary-dark font-display font-bold text-2xl border border-primary/40">
                {project.number}
              </span>

              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display text-xl font-bold text-parchment-ink">
                    <span className="md:hidden text-primary-dark mr-2">
                      {project.number}.
                    </span>
                    {project.title}
                  </h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 text-bark-light hover:text-primary-dark transition-colors"
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

                <p className="text-sm text-bark leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-display font-semibold bg-primary/10 text-primary-dark rounded-md border border-primary/30"
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
    </section>
  );
}
