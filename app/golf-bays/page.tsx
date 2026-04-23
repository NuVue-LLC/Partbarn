import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";
import Button from "@/components/ui/Button";
import { BUSINESS } from "@/lib/constants";

export const metadata = {
  title: "Golf Bays | The ParT Barn",
  description:
    "Nine Golfzon TwoVisionX simulator bays at The ParT Barn, Lake Elmo MN. Three hundred plus courses, real kitchen, real bar.",
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

function FlagIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      className={`shrink-0 mt-1 text-brand-accent ${className}`}
      aria-hidden="true"
    >
      <line
        x1="3.5"
        y1="13"
        x2="3.5"
        y2="1"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path d="M 3.5 2 L 12 4 L 3.5 6 Z" fill="currentColor" />
    </svg>
  );
}

// ========== HOLE 2 MOTIF ==========

function Hole2Motif() {
  // Par 5 dogleg right — tee bottom-left, dogleg mid, green top-right
  // Same motif as homepage BaysSplit, colored to match current section background.
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 900"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 w-full h-full"
    >
      {/* Compass — top-right */}
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

      {/* Fairway — par 5 dogleg right */}
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
      </g>

      {/* Bunkers */}
      <path
        d="M 480 480
           C 458 470, 458 452, 478 444
           C 510 434, 552 442, 568 462
           C 580 478, 558 498, 524 500
           C 498 502, 488 494, 480 480 Z"
        fill="currentColor"
        fillOpacity="0.22"
      />
      <path
        d="M 760 540
           C 736 528, 736 514, 760 506
           C 800 496, 850 502, 880 516
           C 902 526, 894 546, 858 552
           C 818 558, 778 552, 760 540 Z"
        fill="currentColor"
        fillOpacity="0.22"
      />
      <ellipse
        cx="970"
        cy="300"
        rx="14"
        ry="10"
        transform="rotate(-15 970 300)"
        fill="currentColor"
        fillOpacity="0.22"
      />

      {/* Green — kidney/peanut */}
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

      {/* Pin and flag */}
      <g stroke="currentColor" strokeWidth="1.1" fill="none">
        <line x1="1040" y1="232" x2="1040" y2="170" />
        <path d="M 1040 170 L 1072 178 L 1040 192 Z" fill="currentColor" stroke="none" />
        <circle cx="1040" cy="232" r="2.5" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}

// ========== HERO ==========

function BaysHero() {
  return (
    <section
      aria-labelledby="bays-hero-headline"
      className="relative min-h-[55vh] w-full overflow-hidden flex flex-col"
    >
      <div className="absolute inset-0 z-0 motion-safe:animate-ken-burns">
        <Image
          src="/images/bays/lounge.jpg"
          alt="A Golfzon simulator bay at The ParT Barn with the course glowing on screen and leather lounge seating"
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

      <div className="relative z-20 w-full flex-1 flex flex-col justify-center px-6 md:px-12 py-20 md:py-24 min-h-[55vh]">
        {/* Scorecard label */}
        <div className="max-w-7xl mx-auto w-full mb-12 md:mb-16">
          <FadeUp>
            <p className="font-playfair italic font-medium text-text-light text-2xl md:text-3xl leading-none">
              Hole No. 2
            </p>
            <p className="eyebrow text-brand-accent text-xs mt-2 tracking-[0.25em]">
              PAR 5 · 528 YARDS · HCP 2
            </p>
            <span aria-hidden="true" className="block h-px w-56 bg-brand-accent mt-3" />
          </FadeUp>
        </div>

        {/* Centered headline */}
        <div className="max-w-4xl mx-auto w-full text-center">
          <FadeUp delay={0.1}>
            <p className="eyebrow text-brand-accent text-sm tracking-[0.25em] mb-4">
              THE BAYS
            </p>
          </FadeUp>
          <FadeUp delay={0.18}>
            <span aria-hidden="true" className="block h-px w-16 bg-brand-accent mx-auto mb-6" />
          </FadeUp>
          <FadeUp delay={0.25}>
            <h1
              id="bays-hero-headline"
              className="font-playfair font-normal text-5xl md:text-7xl text-text-light leading-[1.05] mb-6"
            >
              The course comes to you.
            </h1>
          </FadeUp>
          <FadeUp delay={0.33}>
            <p className="font-barlow text-text-light/80 text-base md:text-lg leading-[1.7] max-w-2xl mx-auto">
              Nine simulator bays. Three hundred plus courses. Real clubs, real grass,
              real kitchen twenty feet away.
            </p>
          </FadeUp>
          <FadeUp delay={0.42}>
            <p
              className="font-caveat text-brand-accent text-3xl md:text-4xl leading-none mt-8"
              style={{ transform: "rotate(-1.5deg)" }}
            >
              tee time is whenever you want.
            </p>
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

// ========== HOW IT WORKS ==========

interface TechBlock {
  eyebrow: string;
  title: string;
  body: string;
  caveat: string;
}

const techBlocks: TechBlock[] = [
  {
    eyebrow: "Dual-Vertical Tracking",
    title: "Two cameras. Every ball. Every angle.",
    body: "Most sims track the ball with a single side-fired sensor. TwoVisionX uses two vertical high-speed cameras mounted above the tee — the same rig tour coaches use for swing analysis. Ball speed, spin rate, launch angle, and clubface impact point, read within one percent of a real flight.",
    caveat: "the ball goes where it should.",
  },
  {
    eyebrow: "The Moving Swing Plate",
    title: "The floor tilts with your lie.",
    body: "Uphill into the green on Augusta's 10th? The plate under your feet lifts. Downhill into the ravine at Pebble? It drops. Sidehill off the fairway on 18? It slopes. Every shot plays off the exact grade the course gives you — not standing flat on a rubber mat.",
    caveat: "practice like the tour.",
  },
  {
    eyebrow: "Every Shot, Measured",
    title: "Twelve data points per swing.",
    body: "Ball speed, clubhead speed, smash factor, launch angle, spin axis, backspin, sidespin, clubface angle, swing path, attack angle, carry distance, total distance. Every shot logs to your card. Print it on the way out. Beat it next time.",
    caveat: "the stats don't lie.",
  },
];

function ExperienceSection() {
  return (
    <section className="relative bg-bg-cream py-24 md:py-32 overflow-hidden">
      <PaperTexture />

      {/* Ghosted course motif in background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.10] text-brand-green-dark">
        <Hole2Motif />
      </div>

      {/* Gold gradient rules */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <FadeUp>
            <p className="eyebrow text-brand-accent text-sm mb-5">How It Works</p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <div className="flex items-center justify-center gap-5">
              <span aria-hidden="true" className="block h-px w-12 md:w-16 bg-brand-accent" />
              <h2 className="font-playfair italic font-normal text-text-dark text-3xl md:text-5xl leading-none">
                Why this sim is different.
              </h2>
              <span aria-hidden="true" className="block h-px w-12 md:w-16 bg-brand-accent" />
            </div>
          </FadeUp>
        </div>

        {/* 3-column text spread */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-y-14 md:gap-y-0 md:gap-x-10 lg:gap-x-16 relative">
          {techBlocks.map((b, i) => (
            <FadeUp key={b.eyebrow} delay={0.05 + i * 0.1} as="li">
              <div className="relative md:px-2 lg:px-4">
                <div className="flex items-baseline gap-4 mb-4">
                  <p className="font-playfair italic font-normal text-brand-green-dark text-6xl md:text-7xl leading-none">
                    0{i + 1}
                  </p>
                  <span
                    aria-hidden="true"
                    className="flex-1 h-px bg-brand-green-dark/35 mb-2"
                  />
                </div>
                <p className="eyebrow text-brand-accent text-xs tracking-[0.25em] mb-4">
                  {b.eyebrow}
                </p>
                <h3 className="font-playfair italic font-normal text-text-dark text-2xl md:text-3xl leading-[1.15] mb-5">
                  {b.title}
                </h3>
                <span
                  aria-hidden="true"
                  className="block h-px w-12 bg-brand-accent mb-5"
                />
                <p className="font-barlow text-text-dark/80 text-base leading-[1.75]">
                  {b.body}
                </p>
                <p
                  className="font-caveat text-brand-accent text-2xl md:text-3xl mt-6 leading-none"
                  style={{ transform: "rotate(-1.5deg)" }}
                >
                  {b.caveat}
                </p>
                {i < techBlocks.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden md:block absolute right-0 top-2 w-px h-40 bg-brand-accent/25 -mr-5 lg:-mr-8"
                  />
                )}
              </div>
            </FadeUp>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ========== TECH ==========

interface Spec {
  value: string;
  label: string;
  detail: string;
}

const specs: Spec[] = [
  {
    value: "300+",
    label: "Courses",
    detail: "Pebble, St Andrews, Augusta, and everything in between.",
  },
  {
    value: "Dual",
    label: "Cameras",
    detail: "Dual-vision tracking reads your swing like a tour pro's coach.",
  },
  {
    value: "9",
    label: "Bays",
    detail: "Private, climate-controlled, seats four comfortably, fits eight.",
  },
  {
    value: "Real",
    label: "Clubs",
    detail: "Bring yours or use ours. Callaway rentals available for $30.",
  },
];

// ========== VIDEO SHOWCASE ==========

function VideoShowcase() {
  return (
    <section className="relative bg-bg-cream pt-4 pb-14 md:pt-6 md:pb-20 overflow-hidden">
      <PaperTexture />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-8 md:mb-10">
          <FadeUp>
            <p className="eyebrow text-brand-accent text-xs tracking-[0.25em] mb-4">
              See It In Motion
            </p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <div className="flex items-center justify-center gap-5">
              <span aria-hidden="true" className="block h-px w-10 md:w-14 bg-brand-accent" />
              <h2 className="font-playfair italic font-normal text-text-dark text-2xl md:text-3xl leading-none">
                A swing in the bay.
              </h2>
              <span aria-hidden="true" className="block h-px w-10 md:w-14 bg-brand-accent" />
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.15}>
          <div
            className="relative w-full aspect-video overflow-hidden"
            style={{
              boxShadow:
                "18px 24px 60px -18px rgba(26,46,24,0.55), 4px 8px 16px -6px rgba(26,46,24,0.25)",
            }}
          >
            <Image
              src="/images/bays/lounge.jpg"
              alt="A Golfzon simulator bay at The ParT Barn — placeholder for showcase video"
              fill
              sizes="(min-width: 1024px) 80vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-brand-green-dark/45" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-brand-accent bg-black/20 backdrop-blur-[2px] flex items-center justify-center transition-transform hover:scale-105">
                <svg
                  width="28"
                  height="34"
                  viewBox="0 0 28 34"
                  className="text-brand-accent ml-1.5 md:ml-2 md:w-9 md:h-11"
                  aria-hidden="true"
                >
                  <polygon points="2,2 26,17 2,32" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Placeholder tag */}
            <p
              aria-hidden="true"
              className="absolute top-4 left-4 md:top-6 md:left-6 eyebrow text-brand-accent text-[10px] tracking-[0.25em] bg-black/40 px-3 py-1.5"
            >
              Video Placeholder
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.28}>
          <p
            className="font-caveat text-brand-accent text-2xl md:text-3xl text-center mt-6 leading-none"
            style={{ transform: "rotate(-1.5deg)" }}
          >
            video goes here — one perfect swing.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

function TechSection() {
  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: "#1e3d1a" }}
    >
      <DarkTexture />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <FadeUp>
            <p className="eyebrow text-brand-accent text-sm mb-5">Golfzon TwoVisionX</p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="font-playfair font-normal text-3xl md:text-5xl text-text-light leading-[1.1] max-w-3xl mx-auto">
              The best simulator on the market.
              <span className="block font-playfair italic text-text-light/80 mt-2">
                Not the cheapest — the best.
              </span>
            </h2>
          </FadeUp>
        </div>

        {/* 4-col spec grid */}
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-14 md:gap-y-0 relative mb-14 md:mb-16">
          {specs.map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.1} as="li">
              <div className="text-center md:px-6 relative">
                <p className="eyebrow text-brand-accent text-xs tracking-[0.25em] mb-5">
                  {s.label}
                </p>
                <p className="font-playfair font-normal text-5xl md:text-6xl lg:text-7xl text-text-light leading-none mb-5">
                  {s.value}
                </p>
                <p className="font-barlow text-text-light/75 text-sm leading-[1.6] max-w-[200px] mx-auto">
                  {s.detail}
                </p>
                {i < specs.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-28 bg-brand-accent/30"
                  />
                )}
              </div>
            </FadeUp>
          ))}
        </ul>

        {/* Two centered editorial photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 max-w-5xl mx-auto items-center">
          <FadeUp delay={0.35} className="flex justify-center">
            <div
              className="relative w-full max-w-[440px]"
              style={{ transform: "rotate(-1.5deg)" }}
            >
              <div
                className="relative w-full aspect-[4/3] overflow-hidden"
                style={{
                  boxShadow:
                    "16px 22px 56px -18px rgba(0,0,0,0.65), 4px 8px 16px -6px rgba(0,0,0,0.4)",
                }}
              >
                <Image
                  src="/images/bays/lounge.jpg"
                  alt="A Golfzon TwoVisionX simulator bay with the course glowing on screen and leather lounge seating"
                  fill
                  sizes="(min-width: 768px) 40vw, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.48} className="flex justify-center md:mt-10">
            <div
              className="relative w-full max-w-[440px]"
              style={{ transform: "rotate(2deg)" }}
            >
              <div
                className="relative w-full aspect-[4/3] overflow-hidden"
                style={{
                  boxShadow:
                    "16px 22px 56px -18px rgba(0,0,0,0.65), 4px 8px 16px -6px rgba(0,0,0,0.4)",
                }}
              >
                <Image
                  src="/images/events/leagues.jpg"
                  alt="Players at a simulator bay mid-swing with the course rendering on the big screen"
                  fill
                  sizes="(min-width: 768px) 40vw, 90vw"
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

// ========== PHOTO BREAK ==========

function PhotoBreak() {
  return (
    <div className="relative w-full min-h-[42vh] md:min-h-[48vh] overflow-hidden">
      <Image
        src="/images/bar/main-bar.jpg"
        alt="The main bar at The ParT Barn — warm wood, green stools, TVs above"
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
              Across The Hall
            </p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <div className="flex items-center justify-center gap-4 md:gap-5 mb-6">
              <span aria-hidden="true" className="block h-px w-10 md:w-14 bg-brand-accent" />
              <h2 className="font-playfair italic font-normal text-text-light text-3xl md:text-4xl lg:text-5xl leading-[1.1]">
                The kitchen is open.
              </h2>
              <span aria-hidden="true" className="block h-px w-10 md:w-14 bg-brand-accent" />
            </div>
          </FadeUp>
          <FadeUp delay={0.18}>
            <p
              className="font-caveat text-brand-accent text-2xl md:text-4xl leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]"
              style={{ transform: "rotate(-2deg)" }}
            >
              twenty feet away. maybe less.
            </p>
          </FadeUp>
          <FadeUp delay={0.26}>
            <p className="font-barlow text-text-light/80 text-sm md:text-base leading-[1.7] max-w-lg mx-auto mt-8">
              Real chefs. Real bar. Cocktails delivered bayside while you play the
              back nine at Pebble.
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

// ========== WHAT'S INCLUDED ==========

const included = [
  "Up to 6 players per bay",
  "Private bay with door",
  "Climate-controlled",
  "HD screens + dual cameras",
  "Cocktail service from the bar",
  "Food delivered bayside",
  "Club rentals available ($30)",
  "Scorecard printing",
];

function IncludedSection() {
  return (
    <section className="relative bg-bg-cream py-20 md:py-28 overflow-hidden">
      <PaperTexture />

      {/* Ghosted course motif for continuity with Hole 2 theme */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] text-brand-green-dark">
        <Hole2Motif />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <FadeUp>
            <p className="eyebrow text-brand-accent text-sm mb-4">What&apos;s In a Bay</p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <div className="flex items-center justify-center gap-5">
              <span aria-hidden="true" className="block h-px w-12 md:w-16 bg-brand-accent" />
              <h2 className="font-playfair italic font-normal text-text-dark text-3xl md:text-5xl leading-[1.1]">
                Everything you need.
              </h2>
              <span aria-hidden="true" className="block h-px w-12 md:w-16 bg-brand-accent" />
            </div>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p
              className="font-caveat text-brand-accent text-2xl md:text-3xl leading-none mt-5"
              style={{ transform: "rotate(-1.5deg)" }}
            >
              nothing you don&apos;t.
            </p>
          </FadeUp>
        </div>

        {/* Scorecard grid — 8 numbered features */}
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-6 md:gap-x-10 gap-y-10 md:gap-y-14">
          {included.map((item, i) => (
            <FadeUp key={item} delay={0.05 + i * 0.04} as="li">
              <div className="relative">
                <p className="font-playfair italic font-normal text-brand-green-dark text-4xl md:text-5xl leading-none mb-3">
                  0{i + 1}
                </p>
                <span
                  aria-hidden="true"
                  className="block h-px w-10 bg-brand-accent mb-3"
                />
                <p className="font-barlow text-text-dark text-sm md:text-base leading-[1.45]">
                  {item}
                </p>
              </div>
            </FadeUp>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ========== RATES ==========

const rates = [
  { label: "Summer", price: "$50", unit: "/hr", note: "May – September" },
  {
    label: "Off-Peak",
    price: "$55",
    unit: "/hr",
    note: "Oct – Apr · Mon–Thu before 4pm",
  },
  {
    label: "Peak",
    price: "$65",
    unit: "/hr",
    note: "Oct – Apr · Evenings, weekends, holidays",
  },
];

function RatesSection() {
  return (
    <section
      className="relative py-10 md:py-12 overflow-hidden border-y border-brand-accent/25"
      style={{ backgroundColor: "#14301a" }}
    >
      <DarkTexture />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent/60 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent/60 to-transparent"
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 lg:gap-10">
          {/* Left label */}
          <FadeUp className="text-center lg:text-left shrink-0">
            <p className="eyebrow text-brand-accent text-[10px] md:text-xs tracking-[0.25em] mb-2">
              Simulator Rates
            </p>
            <p className="font-playfair italic font-normal text-text-light text-xl md:text-2xl leading-none">
              Starting at $50/hr.
            </p>
            <p
              className="font-caveat text-brand-accent text-lg md:text-xl leading-none mt-2"
              style={{ transform: "rotate(-1.5deg)" }}
            >
              per bay — not per person.
            </p>
          </FadeUp>

          {/* Center rates ribbon */}
          <FadeUp delay={0.1} className="flex-1 w-full lg:w-auto">
            <ul className="grid grid-cols-3 relative">
              {rates.map((r, i) => (
                <li key={r.label} className="relative text-center px-2 md:px-4">
                  <p className="eyebrow text-brand-accent text-[10px] tracking-[0.25em] mb-2">
                    {r.label}
                  </p>
                  <p className="font-playfair font-normal text-text-light text-3xl md:text-4xl leading-none mb-1.5">
                    {r.price}
                    <span className="font-barlow text-text-light/55 text-sm md:text-base ml-1 align-baseline">
                      {r.unit}
                    </span>
                  </p>
                  <p className="font-barlow text-text-light/65 text-[10px] md:text-[11px] leading-[1.4] max-w-[160px] mx-auto">
                    {r.note}
                  </p>
                  {i < rates.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 md:h-20 bg-brand-accent/30"
                    />
                  )}
                </li>
              ))}
            </ul>
          </FadeUp>

          {/* Right link */}
          <FadeUp delay={0.2} className="shrink-0">
            <a
              href="/pricing"
              className="eyebrow text-brand-accent hover:text-text-light transition-colors text-[10px] md:text-xs tracking-[0.25em] whitespace-nowrap border-b border-brand-accent/40 pb-1"
            >
              See Full Rates &amp; Memberships →
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

// ========== FINAL CTA ==========

function FinalCtaSection() {
  return (
    <section
      aria-labelledby="bays-cta-heading"
      className="relative flex flex-col justify-center py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: "#1e3d1a" }}
    >
      <div className="absolute inset-0 z-0 motion-safe:animate-ken-burns">
        <Image
          src="/images/gallery/bar-overhead.jpg"
          alt="Overhead view of the bar at The ParT Barn — green stools, warm wood, late-night energy"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: "rgba(30, 61, 26, 0.72)" }}
      />

      <div className="relative z-20 max-w-4xl mx-auto px-6 md:px-12 text-center w-full">
        <FadeUp>
          <p className="eyebrow text-brand-accent text-sm tracking-[0.25em] mb-5">
            Book a Bay
          </p>
        </FadeUp>
        <FadeUp delay={0.08}>
          <span aria-hidden="true" className="block h-px w-16 bg-brand-accent mx-auto mb-8" />
        </FadeUp>
        <FadeUp delay={0.16}>
          <h2
            id="bays-cta-heading"
            className="font-playfair font-normal text-4xl md:text-6xl lg:text-7xl text-text-light leading-[1.02] mb-5"
          >
            Pick a night.
            <span className="block font-playfair italic">Pick a bay.</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.28}>
          <p
            className="font-caveat text-brand-accent text-2xl md:text-4xl leading-none mb-8"
            style={{ transform: "rotate(-1.5deg)" }}
          >
            the tee time is whenever.
          </p>
        </FadeUp>
        <FadeUp delay={0.36}>
          <p className="font-barlow text-text-light/80 text-base md:text-lg leading-[1.7] max-w-xl mx-auto mb-10">
            Nine bays, open seven nights a week. Up to six per bay. Food and drinks
            delivered while you play.
          </p>
        </FadeUp>
        <FadeUp delay={0.44}>
          <div className="flex flex-col items-center gap-6">
            <Button
              href={BUSINESS.booking.bayUrl}
              variant="primary"
              external
            >
              Book a Bay
            </Button>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="font-playfair text-text-light/85 hover:text-brand-accent transition-colors text-base md:text-lg"
            >
              or call us at{" "}
              <span className="italic underline underline-offset-4 decoration-brand-accent/40">
                {BUSINESS.phone}
              </span>
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ========== PAGE ==========

export default function GolfBaysPage() {
  return (
    <>
      <BaysHero />
      <ExperienceSection />
      <VideoShowcase />
      <TechSection />
      <PhotoBreak />
      <IncludedSection />
      <RatesSection />
      <FinalCtaSection />
    </>
  );
}
