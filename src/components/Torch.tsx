// Wall-mounted flickering torch — exact SVG paths from the reference template.
// Used to flank the dungeon-themed Projects section.

export default function Torch({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      {/* Warm halo cast by the flame */}
      <div
        className="absolute -top-8 left-1/2 -translate-x-1/2 w-28 h-36 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(255,130,54,0.25) 0%, rgba(255,184,0,0.08) 45%, transparent 70%)",
        }}
      />
      <svg viewBox="0 0 40 80" className="w-8 h-auto relative">
        {/* Bracket + handle */}
        <rect x="14" y="50" width="12" height="4" rx="1" fill="#3A302A" />
        <rect x="16" y="53" width="8" height="3" rx="1" fill="#2E2622" />
        <rect x="17" y="28" width="6" height="26" rx="2" fill="#5C4A3A" />
        <rect x="16" y="26" width="8" height="4" rx="1.5" fill="#4A3A2E" />
        {/* Flames */}
        <path
          d="M20,4 C22,10 27,16 26,22 C25,25 23,26 20,26 C17,26 15,25 14,22 C13,16 18,10 20,4Z"
          fill="#FF8236"
          className="torch-flame-1"
        />
        <path
          d="M20,9 C21,13 25,17 24,22 C23,24 22,25 20,25 C18,25 17,24 16,22 C15,17 19,13 20,9Z"
          fill="#FFB800"
          className="torch-flame-2"
        />
        <path
          d="M20,14 C21,17 23,19 22,22 C22,23 21,24 20,24 C19,24 18,23 18,22 C17,19 19,17 20,14Z"
          fill="#FFF0D0"
          className="torch-flame-3"
        />
      </svg>
    </div>
  );
}
