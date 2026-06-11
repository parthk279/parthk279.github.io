// Decorative campfire scene anchored at the bottom of the hero.
// Layered forest silhouette + a flickering central campfire.
// Faithful port of the reference template's SVG scene.
// (The glowing creature eye-pairs are rendered separately in FireEyes.)

export default function CampfireScene() {
  return (
    <div
      className="absolute bottom-0 left-0 w-full h-[55vh] min-h-[340px] max-h-[520px] pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 500"
        className="absolute bottom-0 w-full h-full"
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

    </div>
  );
}
