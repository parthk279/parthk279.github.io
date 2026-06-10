import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2">Quest Log</h2>
      <p className="text-muted text-center text-sm font-mono mb-12">
        ~ legendary encounters along the way ~
      </p>

      <div className="space-y-8">
        {projects.map((project) => (
          <div
            key={project.number}
            className="border border-card-border rounded-xl bg-card p-8 card-hover"
          >
            <div className="flex items-start gap-6">
              <span className="hidden md:flex flex-shrink-0 w-14 h-14 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold text-xl font-mono border border-primary/30">
                {project.number}
              </span>

              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-bold text-foreground">
                    <span className="md:hidden text-primary font-mono mr-2">
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

                <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs bg-tag-bg text-tag-text rounded border border-primary/20 font-mono"
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
