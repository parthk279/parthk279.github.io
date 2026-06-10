"use client";

import { useState } from "react";
import { experience } from "@/data/portfolio";

function Compass() {
  return (
    <svg
      viewBox="-60 -60 120 120"
      className="w-24 h-24 opacity-60"
      aria-hidden="true"
    >
      <circle cx="0" cy="0" r="50" fill="none" stroke="#8B6F47" strokeWidth="1.5" opacity="0.4" />
      <circle cx="0" cy="0" r="40" fill="none" stroke="#8B6F47" strokeWidth="0.75" opacity="0.3" />
      {/* compass star */}
      <path d="M0,-42 L7,-7 L0,0 L-7,-7Z" fill="#b75000" opacity="0.7" />
      <path d="M0,42 L7,7 L0,0 L-7,7Z" fill="#8B6F47" opacity="0.5" />
      <path d="M-42,0 L-7,-7 L0,0 L-7,7Z" fill="#8B6F47" opacity="0.5" />
      <path d="M42,0 L7,-7 L0,0 L7,7Z" fill="#8B6F47" opacity="0.5" />
      <text x="0" y="-52" textAnchor="middle" fill="#8B6F47" fontSize="10" fontWeight="bold" opacity="0.6">N</text>
      <text x="0" y="58" textAnchor="middle" fill="#8B6F47" fontSize="10" fontWeight="bold" opacity="0.6">S</text>
      <text x="-54" y="4" textAnchor="middle" fill="#8B6F47" fontSize="10" fontWeight="bold" opacity="0.6">W</text>
      <text x="54" y="4" textAnchor="middle" fill="#8B6F47" fontSize="10" fontWeight="bold" opacity="0.6">E</text>
      <circle cx="0" cy="0" r="3" fill="#8B6F47" opacity="0.6" />
    </svg>
  );
}

export default function Experience() {
  const [selected, setSelected] = useState(0);
  const exp = experience[selected];

  return (
    <section
      id="experience"
      className="treasure-map-bg relative py-24 px-6 -mt-px overflow-hidden"
    >
      {/* Map flavor: compass + faded label */}
      <div className="absolute top-8 right-8 hidden md:block">
        <Compass />
      </div>
      <p
        className="absolute bottom-10 left-10 hidden lg:block font-display italic text-[#8B6F47] text-2xl select-none"
        style={{ opacity: 0.18, transform: "rotate(-5deg)" }}
        aria-hidden="true"
      >
        Terra Incognita
      </p>

      <div className="max-w-5xl mx-auto relative z-10">
        <p className="text-xs font-display font-semibold text-[#b75000] uppercase tracking-[0.3em] text-center mb-2">
          Experience
        </p>
        <h2 className="font-display text-4xl font-bold text-center text-[#3a2a1a]">
          The Journey So Far
        </h2>
        <p className="text-[#5c4a3a] text-center text-sm font-display tracking-widest mb-2 mt-2 italic">
          every stop, a story. every role, a relic.
        </p>
        <p className="text-[#8B6F47] text-center text-xs font-display mb-12">
          ⚑ Campsites Along the Trail — tap a campsite to explore
        </p>

        {/* Dotted trail of campsites */}
        <div className="relative flex items-center justify-center gap-0 mb-12 overflow-x-auto pb-4">
          {experience.map((e, i) => (
            <div key={i} className="flex items-center">
              <button
                onClick={() => setSelected(i)}
                className={`timeline-node relative flex flex-col items-center gap-1.5 px-3 md:px-4 py-3 rounded-xl border cursor-pointer transition-all ${
                  selected === i
                    ? "border-[#b75000] bg-[#fff8f0] shadow-[0_4px_16px_rgba(183,80,0,0.25)]"
                    : "border-[#8B6F47]/40 bg-[#fff8f0]/60 hover:bg-[#fff8f0]"
                }`}
              >
                <span className="text-[10px] font-display font-bold text-[#8B6F47]">
                  Lv.{e.level}
                </span>
                <span
                  className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-display font-bold border-2 ${
                    selected === i
                      ? "bg-[#b75000] text-[#fff8f0] border-[#b75000]"
                      : "bg-[#f4e3c3] text-[#5c4a3a] border-[#8B6F47]/40"
                  }`}
                >
                  {e.company[0]}
                </span>
                <span className="text-[10px] font-display font-semibold text-[#5c4a3a] whitespace-nowrap max-w-[72px] truncate">
                  {e.company.split(" ")[0]}
                </span>
                {e.current && (
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-[#b75000] text-[#fff8f0] text-[9px] font-display font-bold rounded-full whitespace-nowrap shadow">
                    YOU ARE HERE
                  </span>
                )}
              </button>
              {i < experience.length - 1 && (
                <svg className="w-8 md:w-12 h-4 mx-0.5" aria-hidden="true">
                  <line
                    x1="0"
                    y1="8"
                    x2="100%"
                    y2="8"
                    stroke="#b75000"
                    strokeWidth="2"
                    strokeDasharray="6 5"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                </svg>
              )}
            </div>
          ))}

          {/* What's next? */}
          <div className="flex items-center">
            <svg className="w-8 md:w-12 h-4 mx-0.5" aria-hidden="true">
              <line x1="0" y1="8" x2="100%" y2="8" stroke="#8B6F47" strokeWidth="2" strokeDasharray="4 6" strokeLinecap="round" opacity="0.4" />
            </svg>
            <div className="flex flex-col items-center gap-1.5 px-3 md:px-4 py-3 rounded-xl border border-dashed border-[#8B6F47]/50">
              <span className="text-[10px] font-display font-bold text-[#8B6F47]">Lv.?</span>
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-[#f4e3c3]/60 text-[#8B6F47] text-sm font-display font-bold border-2 border-dashed border-[#8B6F47]/40 animate-treasure-pulse">
                ?
              </span>
              <span className="text-[10px] font-display font-semibold text-[#8B6F47] whitespace-nowrap">
                What&apos;s next?
              </span>
            </div>
          </div>
        </div>

        {/* Detail card (parchment) */}
        <div className="parchment-card rounded-2xl p-8 animate-fade-in-up" key={selected}>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
            <div>
              <h3 className="font-display text-2xl font-bold text-parchment-ink">
                {exp.role}
              </h3>
              <p className="text-[#b75000] font-display font-semibold">
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
                className="xp-bar-fill h-full rounded-full bg-gradient-to-r from-[#b75000] to-gold"
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
                <span className="text-[#b75000] mt-1 flex-shrink-0">▸</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {exp.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-xs font-display font-semibold bg-[#f4e3c3] text-[#5c4a3a] rounded-full border border-[#D4B896]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
