// Decorative campfire scene anchored at the bottom of the hero.
// Layered forest silhouette + a flickering central campfire, hanging vines,
// and creature eyes lurking in the dark that glow amber on hover.
// Faithful port of the reference template's SVG scene.

// Eye-pairs (two pupils ~10px apart) hidden in the treeline.
const eyePairs: [number, number][] = [
  [300, 234],
  [450, 184],
  [600, 196],
  [840, 200],
  [980, 176],
  [1120, 215],
];

export default function CampfireScene() {
  return (
    <div
      className="absolute bottom-0 left-0 w-full h-[55vh] min-h-[340px] max-h-[520px] pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 500"
        className="absolute bottom-0 w-full h-full pointer-events-auto"
        preserveAspectRatio="xMidYMax slice"
      >
        {/* Far treeline */}
        <path
          d="M0,320 C60,280 100,220 180,240 C260,260 300,180 400,200 C500,220 540,160 640,180 C740,200 780,140 880,170 C980,200 1020,150 1100,175 C1180,200 1220,160 1300,190 C1380,220 1420,180 1440,200 L1440,500 L0,500Z"
          fill="#15221A"
        />
        <path
          d="M0,360 C80,330 140,270 240,290 C340,310 380,240 500,260 C620,280 660,220 780,240 C900,260 940,210 1060,235 C1180,260 1220,210 1340,240 C1400,255 1440,230 1440,240 L1440,500 L0,500Z"
          fill="#112018"
          opacity="0.85"
        />
        {/* Mid treeline */}
        <path
          d="M0,400 L0,300 C50,280 100,250 160,265 C220,280 260,240 330,235 C400,230 440,260 510,248 C580,236 620,210 700,220 C780,230 820,200 900,195 C980,190 1020,220 1100,210 C1180,200 1220,180 1300,195 C1380,210 1420,195 1440,200 L1440,500 L0,500Z"
          fill="#0E1A0E"
        />

        {/* Creature eyes lurking in the dark */}
        {eyePairs.map(([x, y], i) => (
          <g className="eye-group" key={i}>
            {/* invisible hit area so the whole spot is hoverable */}
            <rect
              x={x - 18}
              y={y - 14}
              width="42"
              height="28"
              fill="transparent"
            />
            <circle className="eye" cx={x} cy={y} r="2.5" />
            <circle className="eye" cx={x + 11} cy={y - 2} r="2.5" />
          </g>
        ))}

        {/* Foreground hills */}
        <path
          d="M0,420 C120,400 240,440 380,425 C520,410 640,445 780,430 C920,415 1040,448 1180,432 C1320,416 1400,438 1440,428 L1440,500 L0,500Z"
          fill="#091408"
        />

        {/* ---- Central campfire ---- */}
        {/* Ground glow */}
        <ellipse cx="720" cy="442" rx="120" ry="18" fill="#FF8236" opacity="0.08" />
        <ellipse cx="720" cy="442" rx="70" ry="10" fill="#FF8236" opacity="0.14" />

        {/* Logs */}
        <line x1="672" y1="440" x2="768" y2="432" stroke="#5C3D1E" strokeWidth="9" strokeLinecap="round" />
        <line x1="668" y1="431" x2="772" y2="440" stroke="#5C3D1E" strokeWidth="9" strokeLinecap="round" />
        <line x1="690" y1="444" x2="750" y2="444" stroke="#4A3018" strokeWidth="8" strokeLinecap="round" />
        <circle cx="672" cy="440" r="5" fill="#4A3018" />
        <circle cx="768" cy="432" r="5" fill="#4A3018" />
        <circle cx="668" cy="431" r="4.5" fill="#4A3018" />
        <circle cx="772" cy="440" r="4.5" fill="#4A3018" />

        {/* Pulsing glow */}
        <ellipse className="campfire-glow" cx="720" cy="420" rx="30" ry="8" fill="#FF8236" opacity="0.15" />

        {/* Flames (outer → inner) */}
        <path
          className="campfire-flame-1"
          d="M720,394 C730,406 750,420 747,434 C744,440 734,444 720,444 C706,444 696,440 693,434 C690,420 710,406 720,394Z"
          fill="#FF8236"
        />
        <path
          className="campfire-flame-2"
          d="M720,402 C728,411 743,423 740,434 C738,439 730,442 720,442 C710,442 702,439 700,434 C697,423 712,411 720,402Z"
          fill="#FFB800"
        />
        <path
          className="campfire-flame-3"
          d="M720,410 C726,416 736,425 734,434 C733,438 727,440 720,440 C713,440 707,438 706,434 C704,425 714,416 720,410Z"
          fill="#FFD966"
        />
        <path
          className="campfire-flame-4"
          d="M720,418 C724,423 730,428 729,434 C728,437 725,439 720,439 C715,439 712,437 711,434 C710,428 716,423 720,418Z"
          fill="#FFF0D0"
        />
      </svg>

      {/* Hanging vines (vertical lines) at the edges — brighten on hover */}
      <svg
        viewBox="0 0 1200 800"
        className="absolute inset-0 w-full h-full pointer-events-auto"
        preserveAspectRatio="xMidYMin slice"
      >
        <g className="vine-group">
          <path d="M100,0 Q95,50 110,100 Q120,150 105,200 Q95,240 112,280" fill="none" stroke="#2D5016" strokeWidth="2.5" strokeLinecap="round" />
          <ellipse cx="100" cy="55" rx="6" ry="3.5" fill="#2D5016" opacity="0.8" transform="rotate(-25 100 55)" />
          <ellipse cx="115" cy="120" rx="6" ry="3.5" fill="#2D5016" opacity="0.8" transform="rotate(20 115 120)" />
          <ellipse cx="100" cy="195" rx="6" ry="3.5" fill="#2D5016" opacity="0.8" transform="rotate(-15 100 195)" />
          <ellipse cx="110" cy="260" rx="6" ry="3.5" fill="#2D5016" opacity="0.8" transform="rotate(25 110 260)" />
        </g>
        <g className="vine-group">
          <path d="M1080,0 Q1090,50 1075,105 Q1065,150 1085,200 Q1095,245 1078,285" fill="none" stroke="#1A3A0A" strokeWidth="2.5" strokeLinecap="round" />
          <ellipse cx="1085" cy="55" rx="6" ry="3.5" fill="#1A3A0A" opacity="0.8" transform="rotate(20 1085 55)" />
          <ellipse cx="1070" cy="115" rx="6" ry="3.5" fill="#1A3A0A" opacity="0.8" transform="rotate(-15 1070 115)" />
          <ellipse cx="1088" cy="210" rx="6" ry="3.5" fill="#1A3A0A" opacity="0.8" transform="rotate(25 1088 210)" />
          <ellipse cx="1080" cy="270" rx="6" ry="3.5" fill="#1A3A0A" opacity="0.8" transform="rotate(-20 1080 270)" />
        </g>
        <g className="vine-group">
          <path d="M0,120 Q40,125 75,160 Q100,195 85,240 Q70,275 90,310" fill="none" stroke="#2D5016" strokeWidth="2.5" strokeLinecap="round" />
          <ellipse cx="45" cy="130" rx="6" ry="3.5" fill="#2D5016" opacity="0.8" transform="rotate(10 45 130)" />
          <ellipse cx="85" cy="175" rx="6" ry="3.5" fill="#2D5016" opacity="0.8" transform="rotate(35 85 175)" />
          <ellipse cx="80" cy="250" rx="6" ry="3.5" fill="#2D5016" opacity="0.8" transform="rotate(15 80 250)" />
          <ellipse cx="88" cy="295" rx="6" ry="3.5" fill="#2D5016" opacity="0.8" transform="rotate(30 88 295)" />
        </g>
        <g className="vine-group">
          <path d="M1200,150 Q1160,155 1130,185 Q1110,215 1125,260 Q1140,295 1120,330" fill="none" stroke="#1A3A0A" strokeWidth="2.5" strokeLinecap="round" />
          <ellipse cx="1155" cy="160" rx="6" ry="3.5" fill="#1A3A0A" opacity="0.8" transform="rotate(-10 1155 160)" />
          <ellipse cx="1120" cy="200" rx="6" ry="3.5" fill="#1A3A0A" opacity="0.8" transform="rotate(-35 1120 200)" />
          <ellipse cx="1130" cy="270" rx="6" ry="3.5" fill="#1A3A0A" opacity="0.8" transform="rotate(-15 1130 270)" />
          <ellipse cx="1122" cy="315" rx="6" ry="3.5" fill="#1A3A0A" opacity="0.8" transform="rotate(-30 1122 315)" />
        </g>
      </svg>
    </div>
  );
}
