import { profile } from "@/data/portfolio";

const treasures = [
  {
    label: "Resume",
    subtitle: "The adventurer's scroll.",
    href: profile.resumeUrl,
    action: "Loot",
  },
  {
    label: "LinkedIn",
    subtitle: "Join the party.",
    href: profile.social.linkedin,
    action: "Connect",
  },
  {
    label: "Email",
    subtitle: "Send a raven.",
    href: `mailto:${profile.email}`,
    action: "Write",
  },
  {
    label: "GitHub",
    subtitle: "View the grimoire.",
    href: profile.social.github,
    action: "Explore",
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2">Treasure Found</h2>
      <p className="text-muted text-center text-sm font-mono mb-12">
        ~ take what you need, adventurer ~
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {treasures.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-card-border rounded-xl bg-card p-5 card-hover group block"
          >
            <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
              {item.label}
            </p>
            <p className="text-xs text-muted mt-1">{item.subtitle}</p>
            <p className="text-xs font-mono text-primary mt-3">
              {item.action} &rarr;
            </p>
          </a>
        ))}
      </div>

      <div className="text-center border-t border-card-border pt-8">
        <p className="text-muted text-sm font-mono italic mb-4">
          &ldquo;the adventure never ends.&rdquo;
        </p>
        <p className="text-muted/60 text-xs">
          &copy; {new Date().getFullYear()} {profile.name.first}{" "}
          {profile.name.last}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
