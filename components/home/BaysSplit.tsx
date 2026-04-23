import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";
import Button from "@/components/ui/Button";

function DarkTexture() {
  // Light noise filter — visible on dark green at low opacity.
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-screen"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='320' height='320'><filter id='p'><feTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.96  0 0 0 0 0.94  0 0 0 0 0.91  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23p)'/></svg>\")",
        backgroundSize: "320px 320px",
      }}
    />
  );
}

function Hole2Motif() {
  // Par 5 dogleg right — tee bottom-left, dogleg mid, green top-right
  // Rendered in warm cream/gold against dark green background.
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 900"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 w-full h-full text-bg-cream"
    >
      {/* Compass mark — top-right */}
      <g
        transform="translate(1130 160)"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
      >
        <circle cx="0" cy="0" r="18" />
        <line x1="0" y1="-22" x2="0" y2="22" />
        <line x1="-22" y1="0" x2="22" y2="0" />
        <text
          x="-3"
          y="-26"
          fontFamily="var(--font-barlow-condensed), sans-serif"
          fontSize="10"
          letterSpacing="1"
          fill="currentColor"
          stroke="none"
        >
          N
        </text>
      </g>

      {/* Fairway — par 5 sharp dogleg-right.
          First leg runs straight up; sharp 90° elbow; second leg sweeps right to green. */}
      <path
        d="M 130 740
           C 100 660, 110 560, 200 500
           C 290 440, 380 420, 460 420
           C 540 420, 580 460, 580 520
           C 580 580, 620 600, 700 580
           C 820 555, 940 510, 1020 440
           C 1080 388, 1110 340, 1080 290
           C 1110 270, 1130 320, 1100 380
           C 1040 460, 920 540, 760 600
           C 640 642, 540 656, 480 640
           C 410 622, 380 580, 380 510
           C 380 460, 360 440, 300 460
           C 220 488, 160 580, 130 740 Z"
        fill="currentColor"
        fillOpacity="0.05"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      {/* Tee box */}
      <g>
        <rect
          x="108"
          y="718"
          width="52"
          height="18"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <circle cx="134" cy="727" r="2" fill="currentColor" />
        <text
          x="172"
          y="731"
          fontFamily="var(--font-barlow-condensed), sans-serif"
          fontSize="10"
          letterSpacing="3"
          fill="currentColor"
        >
          TEE
        </text>
      </g>

      {/* Cart path — follows the dogleg's inside */}
      <path
        d="M 90 740
           C 90 620, 130 520, 240 470
           C 340 430, 430 430, 480 470
           C 510 500, 510 540, 540 560
           C 600 590, 700 580, 820 540
           C 920 510, 1010 460, 1080 380"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
      />

      {/* Bunkers — three, varied shapes */}
      {/* Inside-corner bunker (cuts the dogleg) */}
      <path
        d="M 480 480
           C 458 470, 458 452, 478 444
           C 510 434, 552 442, 568 462
           C 580 478, 558 498, 524 500
           C 498 502, 488 494, 480 480 Z"
        fill="currentColor"
        fillOpacity="0.22"
      />
      {/* Long fairway bunker, second leg */}
      <path
        d="M 760 540
           C 736 528, 736 514, 760 506
           C 800 496, 850 502, 880 516
           C 902 526, 894 546, 858 552
           C 818 558, 778 552, 760 540 Z"
        fill="currentColor"
        fillOpacity="0.22"
      />
      {/* Greenside pot bunker — small and round */}
      <ellipse
        cx="970"
        cy="300"
        rx="14"
        ry="10"
        transform="rotate(-15 970 300)"
        fill="currentColor"
        fillOpacity="0.22"
      />

      {/* Water hazard */}
      <path
        d="M 320 580
           C 290 570, 270 580, 268 600
           C 266 622, 286 638, 316 642
           C 350 644, 372 632, 372 612
           C 372 598, 354 588, 320 580 Z"
        fill="currentColor"
        fillOpacity="0.28"
      />
      <path
        d="M 290 605 q 8 -4 16 0 q 8 4 16 0 q 8 -4 16 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.7"
      />

      {/* Green — kidney/peanut shape, organic and asymmetric (vs. Hole 1's clean oval) */}
      <path
        d="M 1015 240
           C 985 222, 990 202, 1015 196
           C 1040 190, 1062 196, 1078 208
           C 1095 220, 1118 218, 1130 234
           C 1142 252, 1132 274, 1110 282
           C 1090 290, 1075 282, 1062 270
           C 1048 258, 1030 280, 1010 282
           C 985 284, 970 270, 975 254
           C 980 244, 998 246, 1015 240 Z"
        fill="currentColor"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      {/* Inner contour — narrows toward back of green */}
      <path
        d="M 1020 240
           C 1010 232, 1018 222, 1035 222
           C 1058 222, 1080 230, 1090 244
           C 1095 256, 1080 264, 1060 260
           C 1042 256, 1028 250, 1020 240 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeDasharray="1 3"
      />

      {/* Pin and flag — back-left of kidney */}
      <g stroke="currentColor" strokeWidth="1.1" fill="none">
        <line x1="1040" y1="232" x2="1040" y2="170" />
        <path d="M 1040 170 L 1072 178 L 1040 192 Z" fill="currentColor" stroke="none" />
        <circle cx="1040" cy="232" r="2.5" fill="currentColor" stroke="none" />
      </g>

      {/* Yardage callouts */}
      <g
        fontFamily="var(--font-barlow-condensed), sans-serif"
        fontSize="10"
        letterSpacing="2"
        fill="currentColor"
      >
        <g>
          <line x1="380" y1="500" x2="405" y2="490" stroke="currentColor" strokeWidth="0.8" />
          <text x="410" y="494">300 TO PIN</text>
        </g>
        <g>
          <line x1="780" y1="540" x2="805" y2="530" stroke="currentColor" strokeWidth="0.8" />
          <text x="810" y="534">150 TO PIN</text>
        </g>
      </g>

      {/* Scale ruler */}
      <g
        transform="translate(1000 760)"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="currentColor"
      >
        <line x1="0" y1="0" x2="120" y2="0" />
        <line x1="0" y1="-4" x2="0" y2="4" />
        <line x1="60" y1="-3" x2="60" y2="3" />
        <line x1="120" y1="-4" x2="120" y2="4" />
        <text x="0" y="20" fontFamily="var(--font-barlow-condensed), sans-serif" fontSize="9" letterSpacing="2">
          0
        </text>
        <text x="48" y="20" fontFamily="var(--font-barlow-condensed), sans-serif" fontSize="9" letterSpacing="2">
          50
        </text>
        <text x="100" y="20" fontFamily="var(--font-barlow-condensed), sans-serif" fontSize="9" letterSpacing="2">
          100Y
        </text>
      </g>
    </svg>
  );
}

export default function BaysSplit() {
  return (
    <section className="relative bg-brand-green-dark text-text-light py-20 md:py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <Hole2Motif />
      </div>
      <DarkTexture />

      {/* Scorecard label — top-left */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 mb-8 md:mb-10">
        <FadeUp>
          <div>
            <p className="font-playfair italic font-medium text-text-light text-2xl md:text-3xl leading-none">
              Hole No. 2
            </p>
            <p className="eyebrow text-brand-accent text-xs mt-2 tracking-[0.25em]">
              Par 5 · 528 Yards · HCP 2
            </p>
            <span aria-hidden="true" className="block h-px w-44 bg-brand-accent mt-3" />
          </div>
        </FadeUp>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Copy column */}
          <div className="lg:col-span-6 order-2 lg:order-1 lg:pr-6 xl:pr-10">
            <FadeUp>
              <p className="eyebrow text-brand-accent text-sm mb-6">
                Golfzon TwoVisionX
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <span aria-hidden="true" className="block h-px w-16 bg-brand-accent mb-6" />
            </FadeUp>
            <FadeUp delay={0.16}>
              <h2 className="font-playfair font-normal text-5xl md:text-7xl text-text-light leading-[1.05] mb-6">
                The course comes to you.
              </h2>
            </FadeUp>
            <FadeUp delay={0.22}>
              <span aria-hidden="true" className="block h-px w-16 bg-brand-accent mb-8" />
            </FadeUp>
            <FadeUp delay={0.28}>
              <p className="font-barlow text-text-light/80 text-base md:text-lg leading-[1.7] mb-10 max-w-md">
                Nine bays running Golfzon TwoVisionX — the same technology the pros
                practice on. Three hundred world-class courses in full 3D. Moving
                swing plates that simulate uphill, downhill, and sidehill lies.
                High-speed ball tracking, auto-tee, multiplayer modes. Up to six per
                bay. Food and drinks brought to you while you play.
              </p>
            </FadeUp>
            <FadeUp delay={0.34}>
              <Button
                href="/golf-bays"
                variant="ghost"
                className="text-text-light border-text-light"
              >
                View the Bays
              </Button>
            </FadeUp>
          </div>

          {/* Photograph — clean landscape, no Polaroid */}
          <FadeUp delay={0.18} className="lg:col-span-6 order-1 lg:order-2 flex justify-center">
            <div
              className="relative w-full max-w-[560px]"
              style={{ transform: "rotate(1deg)" }}
            >
              <div
                className="relative w-full aspect-[3/2] overflow-hidden"
                style={{
                  boxShadow:
                    "16px 22px 60px -18px rgba(0,0,0,0.7), 4px 8px 16px -6px rgba(0,0,0,0.4)",
                }}
              >
                <Image
                  src="/images/bays/lounge.jpg"
                  alt="A Golfzon TwoVisionX simulator bay at The ParT Barn with leather lounge seating and a championship course on screen"
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
