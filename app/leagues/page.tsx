import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";
import Button from "@/components/ui/Button";
import { BUSINESS } from "@/lib/constants";

export const metadata = {
  title: "Leagues | The ParT Barn",
  description:
    "Leagues at The ParT Barn are on pause while we build the next season. Get on the list and we'll tell you first when registration opens.",
};

// ========== SHARED ==========

function PaperTexture() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.10] mix-blend-multiply"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='320' height='320'><filter id='p'><feTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.10  0 0 0 0 0.18  0 0 0 0 0.10  0 0 0 0.45 0'/></filter><rect width='100%' height='100%' filter='url(%23p)'/></svg>\")",
        backgroundSize: "320px 320px",
      }}
    />
  );
}

function DarkTexture() {
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

// ========== COURSE MOTIFS ==========

function CompassRose({ x = 1130, y = 160 }: { x?: number; y?: number }) {
  return (
    <g
      transform={`translate(${x} ${y})`}
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
  );
}

// Hole 4 — Par 4, straight with water hazard on the right
function Hole4Motif() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 900"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 w-full h-full"
    >
      <CompassRose x={100} y={160} />

      {/* Fairway — straight-ish, narrowing toward the green */}
      <path
        d="M 260 760
           C 240 640, 260 520, 320 420
           C 360 340, 430 260, 530 220
           C 620 184, 720 188, 790 210
           C 820 220, 840 242, 840 270
           C 840 300, 820 320, 790 330
           C 720 352, 620 348, 540 320
           C 470 294, 420 248, 390 200
           C 360 150, 360 108, 400 90
           C 380 80, 340 110, 330 170
           C 320 230, 336 308, 384 378
           C 430 444, 500 486, 580 500
           C 650 510, 720 498, 770 478
           C 810 462, 820 446, 810 430
           C 796 410, 756 404, 700 418
           C 640 432, 560 428, 490 406
           C 420 384, 370 348, 338 306
           C 300 254, 292 196, 312 146
           C 328 106, 352 82, 378 72
           C 352 60, 312 76, 286 126
           C 252 192, 236 292, 244 396
           C 252 510, 272 630, 260 760 Z"
        fill="currentColor"
        fillOpacity="0.05"
        stroke="currentColor"
        strokeWidth="1.3"
      />

      {/* Tee box — bottom */}
      <g>
        <rect
          x="240"
          y="748"
          width="52"
          height="18"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <circle cx="266" cy="757" r="2" fill="currentColor" />
      </g>

      {/* Water hazard — right side, wavy blob */}
      <path
        d="M 900 640
           C 870 600, 876 540, 916 510
           C 960 478, 1020 486, 1062 510
           C 1102 534, 1120 582, 1104 628
           C 1086 680, 1030 708, 972 706
           C 922 704, 890 680, 882 648
           C 880 638, 886 630, 900 640 Z"
        fill="currentColor"
        fillOpacity="0.18"
      />
      {/* Water ripple lines */}
      <path
        d="M 910 580 C 940 576, 980 582, 1020 578"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeOpacity="0.35"
      />
      <path
        d="M 920 620 C 960 618, 1010 626, 1060 620"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeOpacity="0.35"
      />

      {/* Bunkers flanking the green */}
      <ellipse
        cx="340"
        cy="170"
        rx="22"
        ry="10"
        transform="rotate(-20 340 170)"
        fill="currentColor"
        fillOpacity="0.22"
      />
      <ellipse
        cx="480"
        cy="120"
        rx="18"
        ry="9"
        transform="rotate(15 480 120)"
        fill="currentColor"
        fillOpacity="0.22"
      />

      {/* Green — oval */}
      <ellipse
        cx="420"
        cy="90"
        rx="58"
        ry="30"
        transform="rotate(-8 420 90)"
        fill="currentColor"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeWidth="1.3"
      />

      {/* Pin and flag */}
      <g stroke="currentColor" strokeWidth="1.1" fill="none">
        <line x1="420" y1="90" x2="420" y2="32" />
        <path d="M 420 32 L 452 40 L 420 54 Z" fill="currentColor" stroke="none" />
        <circle cx="420" cy="90" r="2.5" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}

// Hole 5 — Par 5, S-curve double dogleg
function Hole5Motif() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 900"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 w-full h-full"
    >
      <CompassRose x={1100} y={170} />

      {/* Fairway — S-curve */}
      <path
        d="M 150 760
           C 120 680, 140 580, 220 520
           C 300 462, 380 456, 440 480
           C 500 504, 520 540, 500 590
           C 480 636, 440 656, 400 660
           C 440 670, 500 668, 560 640
           C 640 604, 700 540, 740 460
           C 780 380, 840 320, 920 280
           C 1000 244, 1080 250, 1120 290
           C 1150 322, 1150 360, 1120 390
           C 1090 418, 1040 426, 990 420
           C 1040 440, 1110 434, 1140 400
           C 1178 356, 1170 298, 1120 258
           C 1060 212, 970 208, 890 244
           C 810 280, 750 346, 710 434
           C 670 522, 620 590, 550 620
           C 480 648, 410 644, 360 618
           C 310 592, 286 550, 296 508
           C 310 454, 364 424, 418 418
           C 370 400, 310 408, 256 438
           C 200 470, 156 530, 138 594
           C 122 648, 132 710, 150 760 Z"
        fill="currentColor"
        fillOpacity="0.05"
        stroke="currentColor"
        strokeWidth="1.3"
      />

      {/* Tee box — bottom-left */}
      <g>
        <rect
          x="128"
          y="748"
          width="52"
          height="18"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <circle cx="154" cy="757" r="2" fill="currentColor" />
      </g>

      {/* Bunkers — distributed along the S */}
      <ellipse
        cx="430"
        cy="600"
        rx="24"
        ry="12"
        transform="rotate(10 430 600)"
        fill="currentColor"
        fillOpacity="0.22"
      />
      <ellipse
        cx="680"
        cy="480"
        rx="20"
        ry="10"
        transform="rotate(-15 680 480)"
        fill="currentColor"
        fillOpacity="0.22"
      />
      <ellipse
        cx="860"
        cy="360"
        rx="18"
        ry="9"
        transform="rotate(25 860 360)"
        fill="currentColor"
        fillOpacity="0.22"
      />
      <ellipse
        cx="1020"
        cy="330"
        rx="16"
        ry="8"
        transform="rotate(-10 1020 330)"
        fill="currentColor"
        fillOpacity="0.22"
      />

      {/* Green — elevated, kidney-shaped */}
      <path
        d="M 1050 260
           C 1020 248, 1020 228, 1050 220
           C 1080 212, 1108 216, 1128 228
           C 1148 240, 1150 260, 1130 272
           C 1108 284, 1090 280, 1076 270
           C 1062 260, 1040 276, 1022 272
           C 1004 268, 1000 256, 1010 248
           C 1020 242, 1036 246, 1050 260 Z"
        fill="currentColor"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeWidth="1.3"
      />

      {/* Pin and flag */}
      <g stroke="currentColor" strokeWidth="1.1" fill="none">
        <line x1="1075" y1="248" x2="1075" y2="190" />
        <path d="M 1075 190 L 1107 198 L 1075 212 Z" fill="currentColor" stroke="none" />
        <circle cx="1075" cy="248" r="2.5" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}

// Hole 6 — Par 3 island green
function Hole6Motif() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 900"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 w-full h-full"
    >
      <CompassRose x={120} y={170} />

      {/* Tee box — bottom-center */}
      <g>
        <rect
          x="574"
          y="748"
          width="52"
          height="18"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <circle cx="600" cy="757" r="2" fill="currentColor" />
      </g>

      {/* Short cart path dashed line from tee curving toward the water edge */}
      <path
        d="M 600 740 C 580 680, 540 600, 500 540"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="5 6"
        strokeOpacity="0.5"
      />

      {/* Water — large oval surrounding the island */}
      <ellipse
        cx="620"
        cy="360"
        rx="360"
        ry="230"
        fill="currentColor"
        fillOpacity="0.16"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      {/* Water ripples */}
      <ellipse
        cx="620"
        cy="360"
        rx="320"
        ry="200"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeOpacity="0.3"
      />
      <ellipse
        cx="620"
        cy="360"
        rx="278"
        ry="170"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeOpacity="0.22"
      />

      {/* Small bunker on the island front edge */}
      <ellipse
        cx="560"
        cy="420"
        rx="22"
        ry="10"
        transform="rotate(-10 560 420)"
        fill="currentColor"
        fillOpacity="0.24"
      />

      {/* Island green — irregular oval */}
      <path
        d="M 540 340
           C 520 318, 540 288, 580 280
           C 620 272, 672 278, 706 298
           C 734 316, 738 346, 720 368
           C 700 392, 666 400, 620 398
           C 574 396, 544 380, 538 360
           C 536 354, 540 348, 540 340 Z"
        fill="currentColor"
        fillOpacity="0.16"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      {/* Pin and flag — center of island */}
      <g stroke="currentColor" strokeWidth="1.1" fill="none">
        <line x1="630" y1="340" x2="630" y2="270" />
        <path d="M 630 270 L 664 278 L 630 294 Z" fill="currentColor" stroke="none" />
        <circle cx="630" cy="340" r="2.5" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}

// ========== HERO ==========

function LeaguesHero() {
  return (
    <section
      aria-labelledby="leagues-hero-headline"
      className="relative min-h-[75vh] w-full overflow-hidden flex flex-col"
    >
      <div className="absolute inset-0 z-0 motion-safe:animate-ken-burns">
        <Image
          src="/images/events/leagues.jpg"
          alt="League night at The ParT Barn — players gathered around a simulator bay"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: "rgba(30, 61, 26, 0.55)" }}
      />

      <div className="relative z-20 w-full flex-1 flex flex-col justify-center px-6 md:px-12 py-32 md:py-40 min-h-[75vh]">
        <div className="max-w-4xl mx-auto w-full text-center">
          <FadeUp delay={0.1}>
            <p className="eyebrow text-brand-accent text-sm tracking-[0.25em] mb-4">
              Leagues
            </p>
          </FadeUp>
          <FadeUp delay={0.18}>
            <span
              aria-hidden="true"
              className="block h-px w-16 bg-brand-accent mx-auto mb-6"
            />
          </FadeUp>
          <FadeUp delay={0.25}>
            <h1
              id="leagues-hero-headline"
              className="font-playfair font-normal text-5xl md:text-7xl text-text-light leading-[1.05] mb-6"
            >
              The best night of your week.
            </h1>
          </FadeUp>
          <FadeUp delay={0.33}>
            <p className="font-barlow text-text-light/80 text-base md:text-lg leading-[1.7] max-w-2xl mx-auto">
              Leagues are on pause for a bit. They&apos;re coming back. Get on the
              list and we&apos;ll tell you first.
            </p>
          </FadeUp>
          <FadeUp delay={0.42}>
            <p
              className="font-caveat text-brand-accent text-3xl md:text-4xl leading-none mt-8 mb-10"
              style={{ transform: "rotate(-1.5deg)" }}
            >
              first to know, first to tee off.
            </p>
          </FadeUp>
          <FadeUp delay={0.5}>
            <Button href="#join-the-list" variant="primary">
              Join The List
            </Button>
          </FadeUp>
        </div>

        {/* Scroll indicator */}
        <div className="max-w-4xl mx-auto w-full text-center mt-12 hidden md:flex flex-col items-center gap-2 text-text-light/70 motion-safe:animate-scroll-hint">
          <span className="eyebrow text-[10px]">Scroll</span>
          <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
            <path
              d="M8 2 V18 M2 12 L8 18 L14 12"
              stroke="#c9a84c"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

// ========== PAUSE EXPLAINED ==========

function PauseSection() {
  return (
    <section className="relative bg-bg-cream py-20 md:py-28 overflow-hidden">
      <PaperTexture />

      {/* Ghosted course motif — Hole 4 par 4 w/ water */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.09] text-brand-green-dark">
        <Hole4Motif />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 md:px-12 text-center">
        <FadeUp>
          <p className="eyebrow text-brand-accent text-sm mb-5">A Quick Note</p>
        </FadeUp>
        <FadeUp delay={0.08}>
          <div className="flex items-center justify-center gap-4 md:gap-5 mb-10">
            <span aria-hidden="true" className="block h-px w-8 md:w-12 bg-brand-accent" />
            <h2 className="font-playfair italic font-normal text-text-dark text-2xl md:text-3xl lg:text-4xl leading-[1.2]">
              Leagues are on pause
              <span className="block">while we build the next season.</span>
            </h2>
            <span aria-hidden="true" className="block h-px w-8 md:w-12 bg-brand-accent" />
          </div>
        </FadeUp>
        <FadeUp delay={0.16}>
          <p className="font-barlow text-text-dark/80 text-base md:text-lg leading-[1.8] mb-6">
            We ran leagues during our first year and learned a lot about what members
            want — more nights, better formats, flights that actually match skill
            levels, and food and drink packages that don&apos;t make you feel like
            you&apos;re ordering between shots.
          </p>
        </FadeUp>
        <FadeUp delay={0.24}>
          <p className="font-barlow text-text-dark/80 text-base md:text-lg leading-[1.8]">
            We&apos;re rebuilding the program from the ground up. When it comes back,
            it&apos;ll be worth the wait. Sign up below and you&apos;ll be first to
            know when registration opens.
          </p>
        </FadeUp>
      </div>

      {/* Full-width editorial photo band below the copy */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-12 mt-16 md:mt-20">
        <FadeUp delay={0.3}>
          <div className="relative w-full aspect-[21/9] overflow-hidden"
            style={{
              boxShadow:
                "0 20px 50px -16px rgba(26,46,24,0.35), 0 6px 14px -4px rgba(26,46,24,0.18)",
            }}
          >
            <Image
              src="/images/gallery/bar-stools.jpg"
              alt="Green leather bar stools at the main bar at The ParT Barn — the room between rounds"
              fill
              sizes="(min-width: 1024px) 80vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
            />
            <div className="absolute bottom-0 inset-x-0 px-6 pb-5 md:pb-7 text-center">
              <p
                className="font-caveat text-brand-accent text-2xl md:text-4xl leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]"
                style={{ transform: "rotate(-1.5deg)" }}
              >
                more nights. better flights.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ========== PHOTO BREAK — NIGHTS OUT ==========

function NightsOutBreak() {
  return (
    <div className="relative w-full min-h-[42vh] md:min-h-[48vh] overflow-hidden">
      <Image
        src="/images/gallery/bar-overhead.jpg"
        alt="Overhead view of the bar at The ParT Barn — green stools, warm wood, late-night energy"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(30, 61, 26, 0.58)" }}
      />

      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="relative text-center max-w-3xl">
          <FadeUp>
            <p className="eyebrow text-brand-accent text-xs md:text-sm tracking-[0.25em] mb-5">
              League Night
            </p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <div className="flex items-center justify-center gap-4 md:gap-5 mb-6">
              <span aria-hidden="true" className="block h-px w-10 md:w-14 bg-brand-accent" />
              <h2 className="font-playfair italic font-normal text-text-light text-3xl md:text-4xl lg:text-5xl leading-[1.1]">
                Nights out. Not nights in.
              </h2>
              <span aria-hidden="true" className="block h-px w-10 md:w-14 bg-brand-accent" />
            </div>
          </FadeUp>
          <FadeUp delay={0.18}>
            <p
              className="font-caveat text-brand-accent text-2xl md:text-4xl leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]"
              style={{ transform: "rotate(-2deg)" }}
            >
              drinks between holes. trash talk encouraged.
            </p>
          </FadeUp>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent/60 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent/60 to-transparent"
      />
    </div>
  );
}

// ========== WHAT'S COMING ==========

interface Pillar {
  eyebrow: string;
  title: string;
  body: string;
}

const pillars: Pillar[] = [
  {
    eyebrow: "Skill-Based Flights",
    title: "Play against people at your level.",
    body: "No more getting crushed by a scratch golfer on week one. Flights grouped by handicap and experience so every match is competitive.",
  },
  {
    eyebrow: "Social Or Serious",
    title: "Two tracks. Your call.",
    body: "Casual leagues for the weeknight crowd who want drinks and trash talk. Competitive leagues for players chasing a trophy and a season title.",
  },
  {
    eyebrow: "Food And Drinks Included",
    title: "Leagues are nights out.",
    body: "Every league night includes a tab credit and a kitchen menu built for bayside eating. Show up hungry, leave full, maybe win something.",
  },
];

function WhatsComingSection() {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: "#1e3d1a" }}
    >
      <DarkTexture />

      {/* Ghosted course motif — Hole 5 par 5 double dogleg */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] text-text-light">
        <Hole5Motif />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <FadeUp>
            <p className="eyebrow text-brand-accent text-sm mb-5">What&apos;s Coming</p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <div className="flex items-center justify-center gap-5">
              <span aria-hidden="true" className="block h-px w-12 md:w-16 bg-brand-accent" />
              <h2 className="font-playfair font-normal text-text-light text-3xl md:text-5xl leading-[1.1]">
                Built for how you actually play.
              </h2>
              <span aria-hidden="true" className="block h-px w-12 md:w-16 bg-brand-accent" />
            </div>
          </FadeUp>
        </div>

        {/* Three-column editorial grid */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-y-14 md:gap-y-0 md:gap-x-10 lg:gap-x-16 relative">
          {pillars.map((p, i) => (
            <FadeUp key={p.eyebrow} delay={0.05 + i * 0.1} as="li">
              <div className="relative md:px-2 lg:px-4 text-center md:text-left">
                <p className="eyebrow text-brand-accent text-xs tracking-[0.25em] mb-4">
                  {p.eyebrow}
                </p>
                <h3 className="font-playfair italic font-normal text-text-light text-2xl md:text-3xl leading-[1.2] mb-5">
                  {p.title}
                </h3>
                <span
                  aria-hidden="true"
                  className="block h-px w-12 bg-brand-accent mb-5 mx-auto md:mx-0"
                />
                <p className="font-barlow text-text-light/80 text-base leading-[1.75]">
                  {p.body}
                </p>
                {i < pillars.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden md:block absolute right-0 top-2 w-px h-40 bg-brand-accent/25 -mr-5 lg:-mr-8"
                  />
                )}
              </div>
            </FadeUp>
          ))}
        </ul>

        {/* Polaroid trio below the pillars */}
        <div className="relative mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 items-start">
          {[
            {
              src: "/images/gallery/sliders.jpg",
              alt: "Sliders and fries plated for bayside eating",
              rotate: "-3deg",
              caveat: "hungry? same.",
              aspect: "aspect-[4/3]",
              hideOnMobile: false,
            },
            {
              src: "/images/gallery/cocktail.jpg",
              alt: "Cocktail on the bar at The ParT Barn",
              rotate: "2deg",
              caveat: "round one is on the house.",
              aspect: "aspect-[4/5]",
              hideOnMobile: false,
            },
            {
              src: "/images/events/birthdays.jpg",
              alt: "Players and friends gathered at a simulator bay",
              rotate: "-2deg",
              caveat: "bring three friends.",
              aspect: "aspect-[4/3]",
              hideOnMobile: true,
            },
          ].map((p, i) => (
            <FadeUp
              key={p.src}
              delay={0.1 + i * 0.08}
              className={`flex justify-center ${p.hideOnMobile ? "hidden md:flex" : ""}`}
            >
              <div
                className="relative w-full max-w-[340px]"
                style={{ transform: `rotate(${p.rotate})` }}
              >
                <div
                  className={`relative w-full ${p.aspect} overflow-hidden`}
                  style={{
                    boxShadow:
                      "14px 20px 50px -18px rgba(0,0,0,0.65), 3px 6px 14px -4px rgba(0,0,0,0.4)",
                  }}
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 768px) 30vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <p
                  aria-hidden="true"
                  className="font-caveat text-brand-accent text-xl md:text-2xl mt-3 text-center leading-none"
                >
                  {p.caveat}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.4}>
          <p className="font-barlow text-text-light/60 text-xs md:text-sm text-center mt-16 md:mt-20 max-w-xl mx-auto leading-[1.7]">
            Formats and details being finalized for the next season. Sign up to see
            them first.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

// ========== EMAIL CAPTURE ==========

function EmailCaptureSection() {
  return (
    <section
      id="join-the-list"
      aria-labelledby="email-capture-heading"
      className="relative bg-bg-cream py-20 md:py-28 overflow-hidden scroll-mt-24"
    >
      <PaperTexture />

      {/* Ghosted course motif — Hole 6 par 3 island green (the list = the island) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.09] text-brand-green-dark">
        <Hole6Motif />
      </div>

      <div className="relative max-w-2xl mx-auto px-6 md:px-12 text-center">
        <FadeUp>
          <p className="eyebrow text-brand-accent text-sm mb-5">The List</p>
        </FadeUp>
        <FadeUp delay={0.08}>
          <div className="flex items-center justify-center gap-5">
            <span aria-hidden="true" className="block h-px w-10 md:w-14 bg-brand-accent" />
            <h2
              id="email-capture-heading"
              className="font-playfair italic font-normal text-text-dark text-3xl md:text-5xl leading-[1.1]"
            >
              Be the first to know.
            </h2>
            <span aria-hidden="true" className="block h-px w-10 md:w-14 bg-brand-accent" />
          </div>
        </FadeUp>
        <FadeUp delay={0.16}>
          <p className="font-barlow text-text-dark/80 text-base md:text-lg leading-[1.8] mt-8 mb-10">
            Drop your email. We&apos;ll send one note when registration opens, and
            nothing else. No spam, no newsletters, no &ldquo;just checking in&rdquo;
            emails. Just the news.
          </p>
        </FadeUp>

        <FadeUp delay={0.24}>
          <form
            action={BUSINESS.newsletterUrl}
            method="get"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col sm:flex-row items-stretch gap-3 max-w-lg mx-auto"
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="EMAIL"
              type="email"
              required
              placeholder="you@email.com"
              className="flex-1 bg-bg-cream border border-brand-accent/50 text-text-dark placeholder:text-text-dark/40 font-barlow text-base px-4 py-3 rounded-none focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center font-barlow-condensed font-medium uppercase tracking-[0.15em] text-sm px-8 py-3 rounded-none bg-brand-accent text-text-dark hover:bg-brand-accent-dark hover:-translate-y-0.5 shadow-sm hover:shadow-md transition-all duration-300 ease-out"
            >
              Join The List
            </button>
          </form>
        </FadeUp>

        <FadeUp delay={0.32}>
          <p className="font-barlow text-text-dark/70 text-xs md:text-sm leading-[1.7] mt-6">
            We only email when there&apos;s something worth saying.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

// ========== IN THE MEANTIME ==========

function InTheMeantimeSection() {
  return (
    <section
      aria-labelledby="meantime-heading"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: "#1e3d1a" }}
    >
      <DarkTexture />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <FadeUp>
            <p className="eyebrow text-brand-accent text-sm mb-5">While You Wait</p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <div className="flex items-center justify-center gap-5">
              <span aria-hidden="true" className="block h-px w-12 md:w-16 bg-brand-accent" />
              <h2
                id="meantime-heading"
                className="font-playfair font-normal text-text-light text-3xl md:text-5xl leading-[1.1]"
              >
                The bays are still open.
              </h2>
              <span aria-hidden="true" className="block h-px w-12 md:w-16 bg-brand-accent" />
            </div>
          </FadeUp>
        </div>

        {/* Centered stacked: body + picture CTA + secondary link */}
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp delay={0.14}>
            <p className="font-barlow text-text-light/85 text-base md:text-lg leading-[1.8] mb-12 md:mb-14">
              Leagues will be back. Until then, the nine bays are open seven nights a
              week. Bring three friends, pick a course, and play your own round. No
              bracket, no pressure, just the game.
            </p>
          </FadeUp>

          <FadeUp delay={0.24}>
            <div className="relative w-full max-w-2xl mx-auto">
              {/* Main landscape photo */}
              <div
                className="relative w-full aspect-[16/9] overflow-hidden"
                style={{
                  boxShadow:
                    "20px 26px 70px -18px rgba(0,0,0,0.75), 4px 8px 18px -6px rgba(0,0,0,0.5)",
                }}
              >
                <Image
                  src="/images/bays/lounge.jpg"
                  alt="A Golfzon simulator bay at The ParT Barn — course glowing on screen, leather lounge seating"
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                />
                {/* Bottom scrim for overlay caption */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                />
                {/* Overlay caption */}
                <div className="absolute inset-x-0 bottom-0 px-6 pb-6 md:pb-8 text-center">
                  <p className="eyebrow text-brand-accent text-[10px] md:text-xs tracking-[0.25em] mb-2">
                    The Bays
                  </p>
                  <p className="font-playfair italic text-text-light text-2xl md:text-3xl leading-none">
                    Open seven nights.
                  </p>
                </div>
              </div>

              {/* Companion polaroid — offset bottom-right, overlapping */}
              <div
                className="absolute -bottom-14 md:-bottom-16 -right-2 md:-right-8 w-[38%] md:w-[32%] z-30"
                style={{ transform: "rotate(4deg)" }}
              >
                <div
                  className="relative w-full aspect-[4/5] overflow-hidden"
                  style={{
                    boxShadow:
                      "14px 20px 50px -18px rgba(0,0,0,0.75), 3px 6px 14px -4px rgba(0,0,0,0.5)",
                  }}
                >
                  <Image
                    src="/images/gallery/retail.jpg"
                    alt="Clubs and gear on display at The ParT Barn"
                    fill
                    sizes="(min-width: 1024px) 20vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.36}>
            <p
              className="font-caveat text-brand-accent text-2xl md:text-3xl leading-none mt-24 md:mt-28"
              style={{ transform: "rotate(-1.5deg)" }}
            >
              any night. nine bays.
            </p>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="flex flex-col items-center gap-5 mt-10">
              <Button href="/book-a-bay" variant="primary">
                Book A Bay
              </Button>
              <a
                href="/pricing"
                className="eyebrow text-brand-accent hover:text-text-light transition-colors text-xs tracking-[0.25em] border-b border-brand-accent/40 pb-1"
              >
                Or See Membership Options →
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

// ========== CLOSING SIGN-OFF ==========

function ClosingSignOff() {
  return (
    <section
      aria-labelledby="closing-signoff-heading"
      className="relative w-full min-h-[42vh] md:min-h-[48vh] overflow-hidden flex items-center justify-center"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/events/corporate.jpg"
          alt="Players mid-round at a simulator bay at The ParT Barn"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10"
        style={{ backgroundColor: "rgba(12, 22, 12, 0.78)" }}
      />

      <div className="relative z-20 max-w-2xl mx-auto px-6 md:px-12 py-16 md:py-20 text-center">
        <FadeUp>
          <p className="eyebrow text-brand-accent text-xs md:text-sm tracking-[0.25em] mb-5">
            One More Thing
          </p>
        </FadeUp>
        <FadeUp delay={0.08}>
          <div className="flex items-center justify-center gap-4 md:gap-5 mb-6">
            <span aria-hidden="true" className="block h-px w-10 md:w-14 bg-brand-accent" />
            <h2
              id="closing-signoff-heading"
              className="font-playfair italic font-normal text-text-light text-3xl md:text-4xl lg:text-5xl leading-[1.1]"
            >
              Don&apos;t miss the first email.
            </h2>
            <span aria-hidden="true" className="block h-px w-10 md:w-14 bg-brand-accent" />
          </div>
        </FadeUp>
        <FadeUp delay={0.18}>
          <p
            className="font-caveat text-brand-accent text-2xl md:text-4xl leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] mb-8"
            style={{ transform: "rotate(-1.5deg)" }}
          >
            you&apos;ll want to be on that list.
          </p>
        </FadeUp>
        <FadeUp delay={0.26}>
          <a
            href="#join-the-list"
            className="eyebrow text-brand-accent hover:text-text-light transition-colors text-xs md:text-sm tracking-[0.25em] border-b border-brand-accent/40 pb-1 inline-block"
          >
            Join The List →
          </a>
        </FadeUp>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent/60 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent/60 to-transparent"
      />
    </section>
  );
}

// ========== PAGE ==========

export default function LeaguesPage() {
  return (
    <>
      <LeaguesHero />
      <PauseSection />
      <NightsOutBreak />
      <WhatsComingSection />
      <EmailCaptureSection />
      <InTheMeantimeSection />
      <ClosingSignOff />
    </>
  );
}
