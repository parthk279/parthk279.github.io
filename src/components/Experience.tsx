"use client";

import { useState } from "react";
import { experience } from "@/data/portfolio";

export default function Experience() {
  const [selected, setSelected] = useState(0);
  const exp = experience[selected];

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="font-display text-4xl font-bold text-center text-parchment">
        The Journey So Far
      </h2>
      <p className="text-gold/70 text-center text-sm font-display tracking-widest mb-2 mt-2">
        ~ every stop, a story. every role, a relic ~
      </p>
      <p className="text-muted/60 text-center text-xs font-display mb-12">
        tap a campsite to explore
      </p>

      {/* Trail of campsites */}
      <div className="flex items-center justify-center gap-1 md:gap-2 mb-12 overflow-x-auto pb-4">
        {experience.map((e, i) => (
          <div key={i} className="flex items-center">
            <button
              onClick={() => setSelected(i)}
              className={`timeline-node relative flex flex-col items-center gap-2 px-3 md:px-4 py-3 rounded-xl border cursor-pointer ${
                selected === i
                  ? "border-primary bg-primary/10 text-primary shadow-[0_0_20px_rgba(255,130,54,0.3)]"
                  : "wood-card text-muted hover:text-gold"
              }`}
            >
              <span className="text-[10px] font-display font-semibold">
                Lv.{e.level}
              </span>
              <span
                className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-display font-bold ${
                  selected === i
                    ? "bg-primary text-night"
                    : "bg-bark text-gold border border-gold/30"
                }`}
              >
                {e.company[0]}
              </span>
              <span className="text-[10px] font-display whitespace-nowrap max-w-[72px] truncate">
                {e.company.split(" ")[0]}
              </span>
              {e.current && (
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-gold text-night text-[9px] font-display font-bold rounded-full whitespace-nowrap shadow-[0_0_10px_rgba(255,184,0,0.5)]">
                  YOU ARE HERE
                </span>
              )}
            </button>
            {i < experience.length - 1 && (
              <div className="w-6 md:w-10 h-px bg-gradient-to-r from-primary/40 to-bark-light/40 mx-0.5" />
            )}
          </div>
        ))}

        {/* What's next? */}
        <div className="flex items-center">
          <div className="w-6 md:w-10 h-px bg-bark-light/30 mx-0.5" />
          <div className="flex flex-col items-center gap-2 px-3 md:px-4 py-3 rounded-xl border border-dashed border-gold/40 text-gold/60">
            <span className="text-[10px] font-display font-semibold">Lv.?</span>
            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-bark/60 text-gold/70 text-sm font-display font-bold border border-dashed border-gold/30 animate-treasure-pulse">
              ?
            </span>
            <span className="text-[10px] font-display whitespace-nowrap">
              What&apos;s next?
            </span>
          </div>
        </div>
      </div>

      {/* Detail card */}
      <div className="parchment-card rounded-2xl p-8 animate-fade-in-up" key={selected}>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
          <div>
            <h3 className="font-display text-2xl font-bold text-parchment-ink">
              {exp.role}
            </h3>
            <p className="text-primary-dark font-display font-semibold">
              {exp.company}
            </p>
          </div>
          <div className="text-left md:text-right">
            <p className="text-sm text-bark-light font-display font-semibold">
              {exp.period}
            </p>
            <p className="text-xs text-bark-light/80">{exp.location}</p>
          </div>
        </div>

        {/* XP bar */}
        <div className="mb-6">
          <div className="flex justify-between text-[11px] font-display font-semibold text-bark-light mb-1">
            <span>XP earned at this stop</span>
            <span>Lv. {exp.level}</span>
          </div>
          <div className="h-2.5 rounded-full bg-bark-light/20 overflow-hidden">
            <div
              className="xp-bar-fill h-full rounded-full bg-gradient-to-r from-primary to-gold"
              style={{ width: `${Math.min(100, 55 + exp.level * 9)}%` }}
            />
          </div>
        </div>

        <ul className="space-y-3 mb-6">
          {exp.bullets.map((bullet, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm text-bark leading-relaxed"
            >
              <span className="text-primary-dark mt-1 flex-shrink-0">▸</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {exp.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-xs font-display font-semibold bg-primary/10 text-primary-dark rounded-md border border-primary/30"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
