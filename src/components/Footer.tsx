import { profile } from "@/data/portfolio";

const treasures = [
  {
    label: "Resume",
    subtitle: "Full adventure log.",
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
    action: "Message",
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
      <h2 className="font-display text-4xl font-bold text-center text-parchment">
        Treasure Found
      </h2>
      <p className="text-gold/70 text-center text-sm font-display tracking-widest mb-12 mt-2">
        ~ take what you need, adventurer ~
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {treasures.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="wood-card rounded-xl p-5 card-hover group block relative overflow-hidden"
          >
            <div
              className="absolute -right-4 -top-4 w-16 h-16 rounded-full animate-treasure-pulse"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,184,0,0.3) 0%, transparent 70%)",
              }}
            />
            <p className="font-display font-bold text-parchment group-hover:text-gold transition-colors">
              {item.label}
            </p>
            <p className="text-xs text-muted/80 mt-1">{item.subtitle}</p>
            <p className="text-xs font-display font-semibold text-primary mt-3">
              {item.action} &rarr;
            </p>
          </a>
        ))}
      </div>

      <div className="text-center border-t border-primary/15 pt-8">
        <p className="text-gold/70 text-sm font-display italic mb-4">
          &ldquo;the adventure never ends.&rdquo;
        </p>
        <p className="text-muted/50 text-xs">
          &copy; {new Date().getFullYear()} {profile.name.first}{" "}
          {profile.name.last}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
