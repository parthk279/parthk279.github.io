import { achievements } from "@/data/portfolio";

// Achievements Unlocked — circular rank medallions, shown at the bottom of the
// cave (About) section. Structure & styling ported from the reference template.

export default function Achievements() {
  return (
    <div>
      <p className="text-xs font-display font-medium text-primary uppercase tracking-[0.3em] mb-4 mt-12">
        Achievements Unlocked
      </p>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-4">
        {achievements.map((a, i) => (
          <div
            key={i}
            className="group flex flex-col items-center cursor-default"
          >
            <div className="relative mb-2">
              {/* soft always-on halo */}
              <div
                className="absolute -inset-2 rounded-full blur-lg transition-all duration-300 group-hover:-inset-4 group-hover:blur-xl"
                style={{ background: `${a.color}2e`, opacity: 0.6 }}
              />
              {/* bright hover halo */}
              <div
                className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"
                style={{ background: a.color }}
              />
              {/* outer ring */}
              <div
                className="relative w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                style={{
                  borderColor: `${a.color}66`,
                  background: `${a.color}1f`,
                }}
              >
                {/* inner disc */}
                <div
                  className="w-10 h-10 rounded-full border flex items-center justify-center"
                  style={{ backgroundColor: "#1e1c1a", borderColor: `${a.color}66` }}
                >
                  <span
                    className="font-display font-bold text-xs leading-none"
                    style={{ color: a.color }}
                  >
                    {a.rank}
                  </span>
                </div>
              </div>
              {/* bottom nub */}
              <div
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3.5 h-1.5 rounded-b-full transition-transform duration-300 group-hover:scale-125"
                style={{ background: `${a.color}66` }}
              />
            </div>
            <p className="text-white text-[11px] text-center leading-tight mt-1">
              <span className="group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
                {a.title}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
