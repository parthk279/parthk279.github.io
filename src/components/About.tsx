import { profile, education, featuredSkills } from "@/data/portfolio";
import RevealImage from "./RevealImage";
import Vines from "./Vines";
import Torch from "./Torch";

const socials = [
  {
    label: "LinkedIn",
    href: profile.social.linkedin,
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "GitHub",
    href: profile.social.github,
    path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    path: "M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z",
  },
];

export default function About() {
  return (
    <section id="about" className="cave-bg relative py-24 px-6 -mt-px overflow-hidden">
      {/* Hanging vines + flanking wall torches */}
      <Vines />
      <div className="absolute z-10 top-1/2 -translate-y-1/2 left-3 sm:left-6 lg:left-10 hidden md:block">
        <Torch />
      </div>
      <div className="absolute z-10 top-1/2 -translate-y-1/2 right-3 sm:right-6 lg:right-10 hidden md:block">
        <Torch />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <p className="text-xs font-display font-medium text-primary uppercase tracking-[0.3em] mb-2">
          About
        </p>
        <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-8">
          Character Sheet
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Cursor-reveal portrait with name/class/level overlay */}
          <div className="h-full">
            <div className="relative rounded-xl overflow-hidden border-2 border-primary/30 shadow-[0_8px_40px_rgba(0,0,0,0.5)] aspect-[3/4] w-full max-w-sm mx-auto lg:max-w-none lg:h-full">
              <RevealImage
                baseSrc="profile.jpg"
                revealSrc="draft2.jpg"
                alt={`${profile.name.first} ${profile.name.last}`}
                className="w-full h-full rounded-xl"
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-5 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
                }}
              >
                <div className="flex items-baseline justify-between">
                  <div>
                    <h3 className="font-display font-bold text-2xl text-white leading-tight">
                      {profile.name.first} {profile.name.last}
                    </h3>
                    <p className="text-white/80 text-xs uppercase tracking-widest">
                      {profile.class}
                    </p>
                  </div>
                  <span className="font-display font-bold text-lg text-white">
                    Lv. {profile.level}
                  </span>
                </div>
              </div>
              <div
                className="absolute inset-0 pointer-events-none rounded-xl"
                style={{
                  background:
                    "linear-gradient(165deg, rgba(255,130,54,0.08) 0%, transparent 30%)",
                }}
              />
            </div>
          </div>

          {/* Stat block — dark mortar card */}
          <div className="h-full">
            <div className="rounded-xl px-5 py-5 border border-white/[0.12] h-full flex flex-col" style={{ backgroundColor: "#1e1c1a" }}>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                I&apos;m an engineer who believes the most complex data should serve the most critical missions. Currently at{" "}
                <span className="text-primary font-semibold">NCICS &amp; NOAA</span>, I build scalable, cloud-native architectures to make sense of our world&apos;s climate data. With a{" "}
                <span className="text-white font-semibold">Master&apos;s in Computer Science from NC State</span>{" "}
                and a deep love for{" "}
                <span className="text-white font-semibold">MLOps</span>, I turn distributed systems into engines for real-world impact — I don&apos;t just build models, I build the infrastructure that ensures they work when it matters most.
              </p>

              {/* Education badge */}
              <div className="flex flex-wrap gap-2 mb-5">
                {education.map((edu) => (
                  <div
                    key={edu.school}
                    className="flex items-center gap-1.5 bg-primary/10 border-2 border-primary/25 rounded-lg px-3 py-1.5"
                  >
                    <span className="text-white/90 text-xs font-semibold">
                      🎓 {edu.school.replace("North Carolina State University", "NC State").replace("Symbiosis University", "Symbiosis")} {edu.year.match(/\d{4}/)?.[0]}
                    </span>
                  </div>
                ))}
              </div>

              <div className="w-full h-px bg-white/[0.10] mb-5" />

              {/* Skills */}
              <p className="text-xs font-display font-semibold text-primary uppercase tracking-[0.3em] mb-3">
                Skills
              </p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {featuredSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs text-white bg-white/[0.10] border border-white/[0.18] rounded font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="w-full h-px bg-white/[0.10] mb-5" />

              {/* Connect */}
              <p className="text-xs font-display font-semibold text-primary uppercase tracking-[0.3em] mb-3">
                Connect
              </p>
              <div className="flex items-center gap-2 mb-5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-8 h-8 rounded-full bg-white/[0.10] border border-white/[0.18] flex items-center justify-center text-white/70 hover:text-primary hover:border-primary/40 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 px-3 py-1.5 text-xs font-display font-semibold text-primary border border-primary/40 rounded-full hover:bg-primary/10 transition-colors"
                >
                  Resume
                </a>
              </div>

              <div className="mt-auto w-full h-px bg-white/[0.10] mb-4" />
              <p className="text-white/50 text-xs">
                {profile.interests.join(" · ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
