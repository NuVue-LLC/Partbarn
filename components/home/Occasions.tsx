"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Polaroid {
  phrase: string;
  src: string;
  alt: string;
  aspect: string;
  width: string;
  rotate: string;
  pos: { top: string; left: string };
  caption: { font: "playfair" | "caveat"; size: string };
  tape: "left" | "right" | "center";
  z?: number;
}

const polaroids: Polaroid[] = [
  // Row 1
  {
    phrase: "Dinner with the family.",
    src: "/images/gallery/two-plates-overhead.jpg",
    alt: "An overhead view of two plates and wine at The ParT Barn — a family meal",
    aspect: "aspect-[4/3]",
    width: "17rem",
    rotate: "-3deg",
    pos: { top: "2%", left: "3%" },
    caption: { font: "caveat", size: "text-3xl" },
    tape: "left",
    z: 6,
  },
  {
    phrase: "A drink and the game at the bar.",
    src: "/images/gallery/cocktail.jpg",
    alt: "A signature cocktail at the green-lit bar at The ParT Barn",
    aspect: "aspect-[4/5]",
    width: "14rem",
    rotate: "2.5deg",
    pos: { top: "3%", left: "39%" },
    caption: { font: "playfair", size: "text-base" },
    tape: "center",
    z: 7,
  },
  {
    phrase: "Friday with your friends and nine simulator bays.",
    src: "/images/gallery/sliders.jpg",
    alt: "Sliders and a flatbread set in front of an active simulator at The ParT Barn",
    aspect: "aspect-[4/3]",
    width: "18rem",
    rotate: "3deg",
    pos: { top: "1%", left: "65%" },
    caption: { font: "playfair", size: "text-base" },
    tape: "right",
    z: 5,
  },

  // Row 2
  {
    phrase: "The seat at the end of the bar on a slow Wednesday.",
    src: "/images/gallery/bar-overhead.jpg",
    alt: "The bar at The ParT Barn from above — green stools lined up under TVs",
    aspect: "aspect-[3/2]",
    width: "17rem",
    rotate: "-2deg",
    pos: { top: "55%", left: "3%" },
    caption: { font: "caveat", size: "text-2xl" },
    tape: "right",
    z: 8,
  },
  {
    phrase: "The corporate night out the team actually wants to go to.",
    src: "/images/events/corporate.jpg",
    alt: "A long dining table at The ParT Barn, set for a private corporate event",
    aspect: "aspect-[3/2]",
    width: "16rem",
    rotate: "3deg",
    pos: { top: "57%", left: "38%" },
    caption: { font: "playfair", size: "text-sm" },
    tape: "center",
    z: 6,
  },
  {
    phrase: "Birthdays from 8 to 220.",
    src: "/images/events/birthdays.jpg",
    alt: "A signature martini garnished with a mini golf ball at The ParT Barn bar",
    aspect: "aspect-[4/5]",
    width: "15rem",
    rotate: "-3deg",
    pos: { top: "55%", left: "68%" },
    caption: { font: "playfair", size: "text-base" },
    tape: "left",
    z: 7,
  },
];

const variants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.09,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

function Tape({ side }: { side: "left" | "right" | "center" }) {
  // Sits ON the white polaroid frame — partial overhang upward, mostly on the photo border.
  const positionClass =
    side === "left"
      ? "left-3 -rotate-[24deg]"
      : side === "right"
        ? "right-3 rotate-[18deg]"
        : "left-1/2 -translate-x-1/2 -rotate-2";
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute -top-1 ${positionClass} block w-20 h-5 rounded-[1px]`}
      style={{
        backgroundColor: "rgba(255, 253, 245, 0.78)",
        backgroundImage:
          "linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 60%, rgba(0,0,0,0.05) 100%)",
        boxShadow:
          "0 2px 5px -2px rgba(26,46,24,0.4), inset 0 0 0 1px rgba(255,255,255,0.35)",
      }}
    />
  );
}

interface PolaroidViewProps {
  p: Polaroid;
  rotateOverride?: string | null;
  imgSizes: string;
}

function PolaroidView({ p, rotateOverride, imgSizes }: PolaroidViewProps) {
  const rotation = rotateOverride === null ? "0deg" : rotateOverride ?? p.rotate;
  const captionFontClass =
    p.caption.font === "caveat" ? "font-caveat" : "font-playfair italic";
  return (
    <div className="relative" style={{ transform: `rotate(${rotation})` }}>
      <div
        className="relative bg-white rounded-[2px] pt-3 px-3 pb-3"
        style={{
          boxShadow:
            "1px 1px 0 0 rgba(255,255,255,0.7) inset, 10px 16px 36px -14px rgba(26,46,24,0.55), 2px 4px 8px -4px rgba(26,46,24,0.25)",
        }}
      >
        <div className={`relative w-full ${p.aspect} overflow-hidden`}>
          <Image
            src={p.src}
            alt={p.alt}
            fill
            sizes={imgSizes}
            className="object-cover"
          />
        </div>
        <div className="h-[80px] flex items-center justify-center px-2">
          <p
            className={`text-center text-text-dark leading-[1.15] ${captionFontClass} ${p.caption.size}`}
          >
            {p.phrase}
          </p>
        </div>
      </div>
      <Tape side={p.tape} />
    </div>
  );
}

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

function CourseHoleMotif() {
  // Top-down architectural plan view of a golf hole:
  // Closed fairway shape, multiple hazards, water, contoured green, cart path.
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 900"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 w-full h-full text-brand-green-dark"
    >
      {/* Compass mark */}
      <g
        transform="translate(1130 90)"
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

      {/* Fairway — clean closed ribbon from tee (bottom-left) to green (top-right) */}
      <path
        d="M 130 720
           C 220 560, 460 440, 760 340
           C 900 290, 1020 250, 1075 210
           C 1115 215, 1100 270, 1010 305
           C 800 365, 600 425, 420 500
           C 280 555, 175 625, 130 720 Z"
        fill="currentColor"
        fillOpacity="0.05"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      {/* Tee box — clean small rounded rectangle */}
      <g>
        <rect
          x="108"
          y="704"
          width="52"
          height="18"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <circle cx="134" cy="713" r="2" fill="currentColor" />
        <text
          x="172"
          y="717"
          fontFamily="var(--font-barlow-condensed), sans-serif"
          fontSize="10"
          letterSpacing="3"
          fill="currentColor"
        >
          TEE
        </text>
      </g>

      {/* Cart path — single graceful curve */}
      <path
        d="M 90 730
           C 110 620, 220 540, 380 490
           C 560 430, 760 380, 940 320"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
      />

      {/* Bunker — fairway, mid-hole */}
      <path
        d="M 500 540
           C 480 528, 480 514, 502 508
           C 538 500, 576 506, 596 520
           C 612 532, 596 548, 564 552
           C 532 556, 512 550, 500 540 Z"
        fill="currentColor"
        fillOpacity="0.22"
      />

      {/* Bunker — greenside */}
      <path
        d="M 980 282
           C 966 274, 968 264, 986 260
           C 1010 256, 1028 264, 1036 276
           C 1042 286, 1028 294, 1008 294
           C 994 294, 986 290, 980 282 Z"
        fill="currentColor"
        fillOpacity="0.22"
      />

      {/* Water hazard — clean pond */}
      <path
        d="M 650 600
           C 620 590, 600 600, 595 620
           C 590 642, 612 658, 642 660
           C 678 664, 700 650, 700 628
           C 700 612, 682 605, 650 600 Z"
        fill="currentColor"
        fillOpacity="0.28"
      />
      {/* Water ripples */}
      <path
        d="M 615 625 q 8 -4 16 0 q 8 4 16 0 q 8 -4 16 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.7"
      />

      {/* Green — single clean ellipse with one inner contour */}
      <ellipse
        cx="1070"
        cy="220"
        rx="62"
        ry="44"
        transform="rotate(-12 1070 220)"
        fill="currentColor"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <ellipse
        cx="1070"
        cy="220"
        rx="36"
        ry="22"
        transform="rotate(-12 1070 220)"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeDasharray="1 3"
      />

      {/* Pin and flag at center of green */}
      <g stroke="currentColor" strokeWidth="1.1" fill="none">
        <line x1="1070" y1="220" x2="1070" y2="158" />
        <path d="M 1070 158 L 1102 166 L 1070 180 Z" fill="currentColor" stroke="none" />
        <circle cx="1070" cy="220" r="2.5" fill="currentColor" stroke="none" />
      </g>

      {/* Yardage callouts */}
      <g
        fontFamily="var(--font-barlow-condensed), sans-serif"
        fontSize="10"
        letterSpacing="2"
        fill="currentColor"
      >
        <g>
          <line x1="395" y1="540" x2="420" y2="530" stroke="currentColor" strokeWidth="0.8" />
          <text x="425" y="534">200 TO PIN</text>
        </g>
        <g>
          <line x1="780" y1="445" x2="805" y2="435" stroke="currentColor" strokeWidth="0.8" />
          <text x="810" y="439">100 TO PIN</text>
        </g>
      </g>

      {/* Scale ruler — bottom-right */}
      <g
        transform="translate(1000 800)"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="currentColor"
      >
        <line x1="0" y1="0" x2="120" y2="0" />
        <line x1="0" y1="-4" x2="0" y2="4" />
        <line x1="60" y1="-3" x2="60" y2="3" />
        <line x1="120" y1="-4" x2="120" y2="4" />
        <text
          x="0"
          y="20"
          fontFamily="var(--font-barlow-condensed), sans-serif"
          fontSize="9"
          letterSpacing="2"
        >
          0
        </text>
        <text
          x="48"
          y="20"
          fontFamily="var(--font-barlow-condensed), sans-serif"
          fontSize="9"
          letterSpacing="2"
        >
          50
        </text>
        <text
          x="100"
          y="20"
          fontFamily="var(--font-barlow-condensed), sans-serif"
          fontSize="9"
          letterSpacing="2"
        >
          100Y
        </text>
      </g>
    </svg>
  );
}

export default function Occasions() {
  return (
    <section className="relative bg-bg-off py-20 md:py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.14]">
        <CourseHoleMotif />
      </div>
      <PaperTexture />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-5 mb-12"
        >
          <span className="block h-px w-16 bg-brand-accent" aria-hidden="true" />
          <h2 className="font-playfair italic font-normal text-text-dark text-3xl md:text-5xl leading-none">
            An evening, however you take it.
          </h2>
          <span className="block h-px w-16 bg-brand-accent" aria-hidden="true" />
        </motion.div>

        {/* Desktop scattered Polaroid composition — 3 across, 2 rows */}
        <div className="hidden md:block relative h-[80vh] min-h-[760px]">
          {polaroids.map((p, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              variants={variants}
              className="absolute"
              style={{
                top: p.pos.top,
                left: p.pos.left,
                width: p.width,
                zIndex: p.z ?? 5,
              }}
            >
              <PolaroidView p={p} imgSizes="20vw" />
            </motion.div>
          ))}
        </div>

        {/* Mobile stacked Polaroids */}
        <ul className="md:hidden flex flex-col items-center gap-10">
          {polaroids.map((p, i) => {
            const widthClass =
              i % 3 === 0 ? "w-[300px]" : i % 3 === 1 ? "w-[240px]" : "w-[270px]";
            return (
              <motion.li
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants}
                className={widthClass}
              >
                <PolaroidView p={p} rotateOverride={null} imgSizes="80vw" />
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
