"use client";

import { useMemo } from "react";

// Deterministic pseudo-random so SSR and client markup match.
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export default function Ambient() {
  const { stars, fireflies, embers } = useMemo(() => {
    const rand = seeded(42);
    const stars = Array.from({ length: 60 }, () => ({
      left: `${rand() * 100}%`,
      top: `${rand() * 60}%`,
      delay: `${rand() * 3}s`,
      duration: `${2 + rand() * 3}s`,
      size: `${1 + rand() * 1.5}px`,
    }));
    const fireflies = Array.from({ length: 14 }, () => ({
      left: `${rand() * 100}%`,
      top: `${30 + rand() * 65}%`,
      delay: `${rand() * 4}s`,
      duration: `${3 + rand() * 3}s`,
    }));
    const embers = Array.from({ length: 18 }, () => ({
      left: `${rand() * 100}%`,
      delay: `${rand() * 5}s`,
      duration: `${4 + rand() * 4}s`,
    }));
    return { stars, fireflies, embers };
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Twinkling stars in the upper sky */}
      {stars.map((s, i) => (
        <span
          key={`star-${i}`}
          className="star"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
            animationDuration: s.duration,
          }}
        />
      ))}

      {/* Drifting fireflies */}
      {fireflies.map((f, i) => (
        <span
          key={`fly-${i}`}
          className="firefly"
          style={{
            left: f.left,
            top: f.top,
            animationDelay: f.delay,
            animationDuration: f.duration,
          }}
        />
      ))}

      {/* Rising campfire embers */}
      {embers.map((e, i) => (
        <span
          key={`ember-${i}`}
          className="ember"
          style={{
            left: e.left,
            animationDelay: e.delay,
            animationDuration: e.duration,
          }}
        />
      ))}

      {/* Warm campfire glow anchored at the bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-64 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center bottom, rgba(255,130,54,0.18) 0%, rgba(255,184,0,0.06) 40%, transparent 70%)",
          animation: "campfire-glow-pulse 2.2s ease-in-out infinite",
        }}
      />
    </div>
  );
}
