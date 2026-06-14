// Decorative hanging vines, ported from the reference template's cave section.
// Renders as a full-bleed SVG overlay; non-interactive.

export default function Vines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full z-[1] pointer-events-none"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 1200 800"
      aria-hidden="true"
    >
      <g className="vine-group">
        <path d="M100,0 Q95,50 110,100 Q120,150 105,200 Q95,240 112,280" fill="none" stroke="#2D5016" strokeWidth="2.5" strokeLinecap="round" />
        <ellipse cx="100" cy="55" rx="6" ry="3.5" fill="#2D5016" opacity="0.75" transform="rotate(-25 100 55)" />
        <ellipse cx="115" cy="120" rx="6" ry="3.5" fill="#2D5016" opacity="0.75" transform="rotate(20 115 120)" />
        <ellipse cx="100" cy="195" rx="6" ry="3.5" fill="#2D5016" opacity="0.75" transform="rotate(-15 100 195)" />
        <ellipse cx="110" cy="260" rx="6" ry="3.5" fill="#2D5016" opacity="0.75" transform="rotate(25 110 260)" />
      </g>
      <g className="vine-group">
        <path d="M1080,0 Q1090,50 1075,105 Q1065,150 1085,200 Q1095,245 1078,285" fill="none" stroke="#1A3A0A" strokeWidth="2.5" strokeLinecap="round" />
        <ellipse cx="1085" cy="55" rx="6" ry="3.5" fill="#1A3A0A" opacity="0.75" transform="rotate(20 1085 55)" />
        <ellipse cx="1070" cy="115" rx="6" ry="3.5" fill="#1A3A0A" opacity="0.75" transform="rotate(-15 1070 115)" />
        <ellipse cx="1088" cy="210" rx="6" ry="3.5" fill="#1A3A0A" opacity="0.75" transform="rotate(25 1088 210)" />
        <ellipse cx="1080" cy="270" rx="6" ry="3.5" fill="#1A3A0A" opacity="0.75" transform="rotate(-20 1080 270)" />
      </g>
      <g className="vine-group">
        <path d="M0,120 Q40,125 75,160 Q100,195 85,240 Q70,275 90,310" fill="none" stroke="#2D5016" strokeWidth="2.5" strokeLinecap="round" />
        <ellipse cx="45" cy="130" rx="6" ry="3.5" fill="#2D5016" opacity="0.75" transform="rotate(10 45 130)" />
        <ellipse cx="85" cy="175" rx="6" ry="3.5" fill="#2D5016" opacity="0.75" transform="rotate(35 85 175)" />
        <ellipse cx="80" cy="250" rx="6" ry="3.5" fill="#2D5016" opacity="0.75" transform="rotate(15 80 250)" />
        <ellipse cx="88" cy="295" rx="6" ry="3.5" fill="#2D5016" opacity="0.75" transform="rotate(30 88 295)" />
      </g>
      <g className="vine-group">
        <path d="M1200,150 Q1160,155 1130,185 Q1110,215 1125,260 Q1140,295 1120,330" fill="none" stroke="#1A3A0A" strokeWidth="2.5" strokeLinecap="round" />
        <ellipse cx="1155" cy="160" rx="6" ry="3.5" fill="#1A3A0A" opacity="0.75" transform="rotate(-10 1155 160)" />
        <ellipse cx="1120" cy="200" rx="6" ry="3.5" fill="#1A3A0A" opacity="0.75" transform="rotate(-35 1120 200)" />
        <ellipse cx="1130" cy="270" rx="6" ry="3.5" fill="#1A3A0A" opacity="0.75" transform="rotate(-15 1130 270)" />
        <ellipse cx="1122" cy="315" rx="6" ry="3.5" fill="#1A3A0A" opacity="0.75" transform="rotate(-30 1122 315)" />
      </g>
    </svg>
  );
}
