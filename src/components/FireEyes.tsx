"use client";

import { useEffect, useRef } from "react";

// Pairs of glowing dots — "creature eyes" — running along the campfire line in
// a zig-zag. Invisible until the cursor nears the bottom of the hero (the fire),
// then they light up, brightest nearest the cursor. Colors/positions/sizes
// follow the reference template's pattern.

const COLORS = ["#FF4422", "#FFB800", "#FF6B18"]; // red, gold, orange

// Eye-pairs run along the campfire line, zig-zagging up and down around it.
const FIRE_LINE = 9; // % up from the bottom of the hero
const ZIGZAG = [0, 4, -3, 5, -2, 3, -4, 4, -3]; // % offsets cycled per pair

type Eye = {
  left: number; // %
  bottom: number; // %
  gap: number; // px between the two dots
  w: number;
  h: number;
  color: string;
};

const EYES: Eye[] = Array.from({ length: 19 }, (_, i) => {
  const big = i % 3 === 1;
  return {
    left: 2 + i * 5, // 2% → 92%
    bottom: FIRE_LINE + ZIGZAG[i % ZIGZAG.length],
    gap: big ? 8 : 5,
    w: big ? 7 : 5,
    h: big ? 5 : 4,
    color: COLORS[i % 3],
  };
  // Drop the two pairs flanking the campfire (left 47% & 52%) so the fire
  // itself isn't crowded by glowing eyes.
}).filter((eye) => eye.left !== 47 && eye.left !== 52);

export default function FireEyes() {
  const rootRef = useRef<HTMLDivElement>(null);
  const eyeRefs = useRef<(HTMLDivElement | null)[]>([]);
  // Cursor in the hero, normalized: x 0..1, y measured from the bottom (1=top).
  const cursor = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const section = rootRef.current?.parentElement;
    if (!section) return;

    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      cursor.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: 1 - (e.clientY - rect.top) / rect.height,
      };
    };
    const onLeave = () => {
      cursor.current = null;
    };

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);

    // Current (lerped) opacity per eye — smoothly chases its target each frame.
    const current = new Array(EYES.length).fill(0);
    let raf = 0;

    const targetFor = (eye: Eye): number => {
      const c = cursor.current;
      if (!c) return 0;
      // Only light up in the lower portion, near the fire.
      const bottomZone = Math.max(0, 1 - c.y * 1.7);
      if (bottomZone <= 0) return 0;
      // Horizontal proximity to this pair (within ~22% of width).
      const dx = Math.abs(c.x - eye.left / 100);
      const near = Math.max(0, 1 - dx / 0.22);
      return Math.min(1, bottomZone * near * 1.4); // brighter, clamps at 1
    };

    const tick = () => {
      for (let i = 0; i < EYES.length; i++) {
        const target = targetFor(EYES[i]);
        // Ease toward target — fast to brighten, smooth to fade.
        const speed = target > current[i] ? 0.25 : 0.08;
        current[i] += (target - current[i]) * speed;
        const node = eyeRefs.current[i];
        if (node) node.style.opacity = current[i].toFixed(3);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={rootRef} className="absolute inset-0 z-[5] pointer-events-none" aria-hidden="true">
      {EYES.map((eye, i) => {
        const dot = {
          width: `${eye.w}px`,
          height: `${eye.h}px`,
          backgroundColor: eye.color,
          boxShadow: `0 0 ${eye.gap + 4}px 1px ${eye.color}, 0 0 ${eye.gap}px ${eye.color}`,
        };
        return (
          <div
            key={i}
            ref={(el) => {
              eyeRefs.current[i] = el;
            }}
            className="absolute flex items-center"
            style={{
              left: `${eye.left}%`,
              bottom: `${eye.bottom}%`,
              gap: `${eye.gap}px`,
              opacity: 0,
            }}
          >
            <span className="rounded-full" style={dot} />
            <span className="rounded-full" style={dot} />
          </div>
        );
      })}
    </div>
  );
}
