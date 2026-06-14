"use client";

import { useEffect, useRef, useState } from "react";

// Intermittent shooting stars — thin white diagonal streaks with a fading tail
// that dart from the top of the sky down and across, then disappear.

type Star = {
  id: number;
  left: number; // % start, horizontal
  top: number; // % start, vertical
  length: number; // px tail length
  duration: number; // s travel time
  delay: number; // s before it starts
};

export default function ShootingStars() {
  const [stars, setStars] = useState<Star[]>([]);
  const nextId = useRef(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const launch = () => {
      const id = nextId.current++;
      const star: Star = {
        id,
        left: 5 + Math.random() * 70, // start somewhere across the upper area
        top: Math.random() * 18, // near the top
        length: 80 + Math.random() * 90,
        duration: 0.9 + Math.random() * 0.7,
        delay: 0,
      };
      setStars((s) => [...s, star]);

      // Remove the star after it finishes traveling.
      setTimeout(() => {
        setStars((s) => s.filter((x) => x.id !== id));
      }, (star.duration + 0.4) * 1000);

      // Schedule the next one at a random interval (intermittent).
      timer = setTimeout(launch, 2500 + Math.random() * 5000);
    };

    // First star after a short, randomized beat.
    timer = setTimeout(launch, 1500 + Math.random() * 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-[3] pointer-events-none overflow-hidden" aria-hidden="true">
      {stars.map((star) => (
        <span
          key={star.id}
          className="shooting-star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.length}px`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
