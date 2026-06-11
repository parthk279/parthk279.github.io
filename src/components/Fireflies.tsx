// Single golden fireflies that drift up/down and fade in/out across the hero.
// Positions, sizes and delays ported from the reference template.

type Firefly = {
  delay: string; // animation-delay class (firefly-d0..d6)
  size: number; // px
  left: string;
  bottom: string;
};

const FIREFLIES: Firefly[] = [
  { delay: "firefly-d0", size: 6, left: "18%", bottom: "28%" },
  { delay: "firefly-d1", size: 4, left: "35%", bottom: "38%" },
  { delay: "firefly-d2", size: 6, left: "55%", bottom: "23%" },
  { delay: "firefly-d3", size: 4, left: "72%", bottom: "33%" },
  { delay: "firefly-d4", size: 6, left: "85%", bottom: "25%" },
  { delay: "firefly-d5", size: 4, left: "8%", bottom: "21%" },
  { delay: "firefly-d6", size: 4, left: "45%", bottom: "43%" },
];

export default function Fireflies() {
  return (
    <div className="absolute inset-0 z-[4] pointer-events-none" aria-hidden="true">
      {FIREFLIES.map((f, i) => (
        <div
          key={i}
          className={`firefly ${f.delay}`}
          style={{
            left: f.left,
            bottom: f.bottom,
            width: `${f.size}px`,
            height: `${f.size}px`,
          }}
        />
      ))}
    </div>
  );
}
