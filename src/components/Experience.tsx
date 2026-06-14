"use client";

import { useEffect, useRef, useState } from "react";
import { experience } from "@/data/portfolio";
import MapDecor from "./MapDecor";

// The trail path (in the 1000x1500 map viewBox), winding from bottom to top.
const TRAIL =
  "M180,1360 C300,1230 700,1300 780,1100 C850,884 280,934 220,800 C160,650 700,634 750,500 C800,350 400,300 350,230 C300,166 480,84 550,50";

// Marker stops along the trail, oldest (bottom) → newest (top).
// `t` is the normalized position along the path (0 = start/bottom, 1 = end/top).
// experience[] is newest-first, so we reverse for the journey order.
const journey = [...experience].reverse();
// Spread stops from near the start to ~0.8 along the trail, leaving the top
// stretch (0.8 → 1.0) for the boat to sail toward the "X marks the spot".
const STOP_START = 0.06;
const STOP_END = 0.8;
// The faint "what's next" stretch begins exactly at the current (top) node.
const SPLIT_T = STOP_END;
const STOPS = journey.map((exp, i) => ({
  exp,
  t:
    journey.length > 1
      ? STOP_START + (STOP_END - STOP_START) * (i / (journey.length - 1))
      : STOP_START,
}));

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  // Boat starts parked on the current (NCICS) node at the top of the journey.
  const [progress, setProgress] = useState(STOP_END);
  const [boat, setBoat] = useState({ x: 350, y: 230, angle: 0 });
  const [stopPts, setStopPts] = useState<{ x: number; y: number }[]>([]);

  // Compute each stop's position (as % of the 1000x1500 viewBox) once mounted.
  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const total = path.getTotalLength();
    setStopPts(
      STOPS.map((s) => {
        const p = path.getPointAtLength(s.t * total);
        return { x: (p.x / 1000) * 100, y: (p.y / 1500) * 100 };
      })
    );
  }, []);

  // X-marks-the-spot sits at the very end of the trail (top of the map).
  const [treasure, setTreasure] = useState({ x: 55, y: 3.3 });
  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const end = path.getPointAtLength(path.getTotalLength());
    setTreasure({ x: (end.x / 1000) * 100, y: (end.y / 1500) * 100 });
  }, []);

  // Scroll → progress along the trail.
  useEffect(() => {
    const section = sectionRef.current;
    const path = pathRef.current;
    if (!section || !path) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      // Scroll progress through the section: 0 when its top reaches the top of
      // the viewport, 1 when its bottom does. Clamped, so before the section is
      // reached it stays at 0 (boat parked on the current/NCICS node).
      const p = Math.max(0, Math.min(1, -rect.top / (rect.height - vh)));
      // Boat sails from the current role (NCICS, top) down through the journey.
      const bt = STOP_END - p * (STOP_END - STOP_START);
      setProgress(bt);

      const total = path.getTotalLength();
      const pt = path.getPointAtLength(bt * total);
      const ahead = path.getPointAtLength(Math.min(total, bt * total + 1));
      const angle = (Math.atan2(ahead.y - pt.y, ahead.x - pt.x) * 180) / Math.PI;
      setBoat({ x: pt.x, y: pt.y, angle });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Active stop = the one closest to the boat's current position on the trail.
  const activeIdx = STOPS.reduce(
    (best, s, i) =>
      Math.abs(s.t - progress) < Math.abs(STOPS[best].t - progress) ? i : best,
    0
  );

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="treasure-map-bg relative -mt-px overflow-hidden pb-16"
    >
      {/* Heading */}
      <div className="max-w-4xl mx-auto px-6 pt-16 pb-6 relative z-20">
        <p className="text-xs font-display font-medium uppercase tracking-[0.3em] mb-3 text-[#3A2A1A]">
          Journey So Far
        </p>
        <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mb-2 text-[#3A2A1A]">
          Experience
        </h2>
        <p className="text-lg text-[#5C4A3A]/70">
          Every stop, a story. Every role, a relic.
        </p>
        <p className="lg:hidden text-sm italic mt-2 text-[#3A2A1A]">
          scroll to sail the journey
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-8 lg:pb-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 lg:gap-12 items-start">
          {/* ---- Map (left) ---- */}
          <div className="relative lg:sticky lg:top-24">
            <div className="relative mx-auto max-w-md lg:max-w-none" style={{ aspectRatio: "1000 / 1500" }}>
              <svg
                viewBox="0 0 1000 1500"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* full decorative map: mountains, trees, river, tents,
                    compass, chests, anchors, corner flourishes */}
                <MapDecor />

                {/* Masks split the trail by length exactly at the current node,
                    while each visible path keeps its own dotted dash pattern. */}
                <defs>
                  <mask id="trail-main-mask">
                    <path
                      d={TRAIL}
                      fill="none"
                      stroke="white"
                      strokeWidth="10"
                      pathLength={1}
                      strokeDasharray={`${SPLIT_T} ${1 - SPLIT_T}`}
                    />
                  </mask>
                  <mask id="trail-end-mask">
                    <path
                      d={TRAIL}
                      fill="none"
                      stroke="white"
                      strokeWidth="10"
                      pathLength={1}
                      strokeDasharray={`0 ${SPLIT_T} ${1 - SPLIT_T}`}
                    />
                  </mask>
                </defs>
                {/* full trail (invisible) drives the boat's path math */}
                <path ref={pathRef} d={TRAIL} fill="none" stroke="none" />
                {/* main dotted journey: start → current node */}
                <path
                  d={TRAIL}
                  fill="none"
                  stroke="#8B6F47"
                  strokeWidth="3"
                  strokeDasharray="12 6"
                  strokeLinecap="round"
                  opacity="0.6"
                  mask="url(#trail-main-mask)"
                />
                {/* faint "what's next" stretch: current node → X */}
                <path
                  d={TRAIL}
                  fill="none"
                  stroke="#8B6F47"
                  strokeWidth="2"
                  strokeDasharray="6 8"
                  strokeLinecap="round"
                  opacity="0.25"
                  mask="url(#trail-end-mask)"
                />

                {/* boat / traveler */}
                <g
                  transform={`translate(${boat.x}, ${boat.y})`}
                  style={{ transition: "transform 0.1s linear" }}
                >
                  <ellipse cx="0" cy="14" rx="22" ry="6" fill="rgba(60,40,20,0.25)" />
                  {/* hull */}
                  <path d="M-20,2 Q0,22 20,2 L14,-2 L-14,-2 Z" fill="#5C3D1E" />
                  <path d="M-20,2 Q0,22 20,2" fill="none" stroke="#3A2A1A" strokeWidth="2" />
                  {/* mast + sail */}
                  <line x1="0" y1="-2" x2="0" y2="-30" stroke="#3A2A1A" strokeWidth="2.5" />
                  <path d="M2,-28 Q22,-20 2,-6 Z" fill="#FFF8F0" stroke="#D4B896" strokeWidth="1" />
                  <path d="M-2,-26 Q-16,-19 -2,-8 Z" fill="#F4E3C3" stroke="#D4B896" strokeWidth="1" />
                  {/* little flag */}
                  <path d="M0,-30 L8,-33 L0,-36 Z" fill="#b75000" />
                </g>
              </svg>

              {/* HTML node overlay: Lv badge + circle + company/dates */}
              {stopPts.map((pt, i) => {
                const exp = STOPS[i].exp;
                const active = i === activeIdx;
                const label =
                  exp.short ?? exp.company.replace(" - NOAA Affiliate", "");
                return (
                  <div
                    key={i}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center"
                    style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
                  >
                    {/* Lv badge */}
                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#3A2A1A]/80 text-[#D4B896] text-[10px] font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap pointer-events-none">
                      Lv. {exp.level}
                    </span>
                    {/* node circle — current role gets a distinct teal style,
                        all past roles share the template's solid brown style */}
                    <div
                      className="w-11 h-11 rounded-full border-2 flex items-center justify-center font-display font-bold text-base transition-transform duration-300 hover:scale-110"
                      style={
                        exp.current
                          ? {
                              background: "rgba(26,122,109,0.15)",
                              borderColor: "#1A7A6D",
                              color: "#1A7A6D",
                              boxShadow: "0 0 12px rgba(26,122,109,0.25)",
                            }
                          : {
                              background: "#5C4A3A",
                              borderColor: "#8B6F47",
                              color: "#FFF8F0",
                              transform: active ? "scale(1.1)" : "scale(1)",
                            }
                      }
                    >
                      {exp.company[0]}
                    </div>
                    {/* company + dates */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 flex flex-col items-center pointer-events-none">
                      <span className="text-[11px] font-semibold text-[#3A2A1A] whitespace-nowrap">
                        {label}
                      </span>
                      <span className="text-[10px] font-medium text-[#3A2A1A]/65 whitespace-nowrap">
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span className="text-[9px] font-bold italic whitespace-nowrap mt-0.5 text-[#1A7A6D]">
                          You are here
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* X marks the spot — destination at the top of the trail */}
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center pointer-events-none"
                style={{ left: `${treasure.x}%`, top: `${treasure.y}%` }}
              >
                <div className="relative w-12 h-12">
                  <div className="absolute -inset-3 rounded-full bg-[#FFB800]/15 animate-treasure-pulse" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[80%] h-[3px] bg-[#C0392B] rounded-full rotate-45 absolute" />
                    <div className="w-[80%] h-[3px] bg-[#C0392B] rounded-full -rotate-45 absolute" />
                  </div>
                </div>
                <span className="text-[#8B6F47] text-[11px] font-bold italic mt-1.5 whitespace-nowrap">
                  What&apos;s next?
                </span>
              </div>
            </div>
          </div>

          {/* ---- Role cards (right) ---- */}
          <div className="space-y-3">
            {journey
              .map((exp, i) => ({ exp, i }))
              .reverse()
              .map(({ exp, i }) => {
                const active = i === activeIdx;
                return (
                  <div
                    key={exp.company}
                    className={`rounded-xl p-4 border transition-all duration-300 ${
                      active
                        ? "bg-[#FFF8F0] border-[#b75000]/60 shadow-[0_6px_24px_rgba(183,80,0,0.18)] scale-[1.02]"
                        : "bg-[#FFF8F0]/70 border-[#D4B896]/50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-7 h-7 rounded-full border flex items-center justify-center text-[11px] font-display font-bold shrink-0"
                          style={{
                            background: active ? "#b75000" : "rgba(183,80,0,0.08)",
                            borderColor: "#b7500066",
                            color: active ? "#FFF8F0" : "#b75000",
                          }}
                        >
                          {exp.company[0]}
                        </div>
                        <h4 className="font-display font-bold text-base text-[#3A2A1A]">
                          {exp.company.replace(" - NOAA Affiliate", "")}
                          {exp.current && (
                            <span className="text-[9px] font-normal italic ml-1.5 text-[#1A7A6D]">
                              current
                            </span>
                          )}
                        </h4>
                      </div>
                      <span className="text-[9px] font-bold bg-[#8B6F47]/10 text-[#8B6F47] px-2 py-0.5 rounded-full whitespace-nowrap">
                        Lv. {exp.level}
                      </span>
                    </div>
                    <p className="text-[#3A2A1A] text-sm font-semibold ml-9">
                      {exp.role}
                    </p>
                    <p className="text-[#8B6F47] text-xs ml-9 mb-2">{exp.period}</p>

                    {/* every role shows its content; the active one is highlighted */}
                    <div className="ml-9">
                      <ul className="space-y-1.5 mb-2">
                        {exp.bullets.slice(0, 4).map((b, j) => (
                          <li key={j} className="flex gap-2 text-[#3A2A1A]/80 text-[13px] leading-snug">
                            <span className="text-[#b75000] mt-0.5">▸</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 bg-[#F4E3C3] border border-[#D4B896] rounded-full text-[11px] font-medium text-[#3A2A1A]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
