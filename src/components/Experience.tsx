"use client";

import { useState } from "react";
import { experience } from "@/data/portfolio";

export default function Experience() {
  const [selected, setSelected] = useState(0);

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2">
        The Journey So Far
      </h2>
      <p className="text-muted text-center text-sm font-mono mb-12">
        ~ tap a stop to explore ~
      </p>

      {/* Timeline */}
      <div className="flex items-center justify-center gap-4 mb-12 overflow-x-auto pb-4">
        {experience.map((exp, i) => (
          <div key={i} className="flex items-center">
            <button
              onClick={() => setSelected(i)}
              className={`timeline-node relative flex flex-col items-center gap-2 px-4 py-3 rounded-xl border transition-all duration-300 cursor-pointer ${
                selected === i
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-card-border bg-card text-muted hover:text-foreground"
              }`}
            >
              <span className="text-xs font-mono">Lv.{exp.level}</span>
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-card-border text-xs font-bold">
                {exp.company[0]}
              </span>
              <span className="text-xs font-mono whitespace-nowrap">
                {exp.company.split(" ")[0]}
              </span>
              {exp.current && (
                <span className="absolute -top-2 -right-2 px-1.5 py-0.5 bg-primary text-background text-[10px] font-mono rounded-full">
                  NOW
                </span>
              )}
            </button>
            {i < experience.length - 1 && (
              <div className="w-8 h-px bg-card-border mx-1" />
            )}
          </div>
        ))}

        <div className="flex items-center">
          <div className="w-8 h-px bg-card-border mx-1" />
          <div className="flex flex-col items-center gap-2 px-4 py-3 rounded-xl border border-dashed border-card-border text-muted">
            <span className="text-xs font-mono">Lv.?</span>
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-card-border text-xs font-bold">
              ?
            </span>
            <span className="text-xs font-mono">Next</span>
          </div>
        </div>
      </div>

      {/* Detail Card */}
      <div className="border border-card-border rounded-xl bg-card p-8 animate-fade-in-up" key={selected}>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl font-bold text-foreground">
              {experience[selected].role}
            </h3>
            <p className="text-primary font-mono text-sm">
              {experience[selected].company}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted font-mono">
              {experience[selected].period}
            </p>
            <p className="text-xs text-muted">
              {experience[selected].location}
            </p>
          </div>
        </div>

        <ul className="space-y-3 mb-6">
          {experience[selected].bullets.map((bullet, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm text-foreground/80"
            >
              <span className="text-primary mt-1 flex-shrink-0">&#9656;</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {experience[selected].tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 text-xs bg-tag-bg text-tag-text rounded border border-primary/20 font-mono"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
