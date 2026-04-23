"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Polaroid {
  phrase: string;
  src: string;
  alt: string;
  aspect: string; // tailwind aspect class
  width: string; // desktop width (rem)
  rotate: string; // -4..+4 deg
  pos: { top: string; left: string };
  caption: { font: "playfair" | "caveat"; size: string };
  z?: number;
}

const polaroids: Polaroid[] = [
  {
    phrase: "Dinner with the family.",
    src: "/images/gallery/two-plates-overhead.jpg",
    alt: "An overhead view of two plates and wine at The ParT Barn — a family meal",
    aspect: "aspect-[4/3]",
    width: "15rem",
    rotate: "-3deg",
    pos: { top: "1%", left: "4%" },
    caption: { font: "caveat", size: "text-3xl" },
    z: 6,
  },
  {
    phrase: "A drink and the game at the bar.",
    src: "/images/gallery/cocktail.jpg",
    alt: "A signature cocktail at the green-lit bar at The ParT Barn",
    aspect: "aspect-[4/5]",
    width: "11rem",
    rotate: "2deg",
    pos: { top: "3%", left: "44%" },
    caption: { font: "playfair", size: "text-base" },
    z: 5,
  },
  {
    phrase: "Date night that doesn't feel like every other date night.",
    src: "/images/gallery/steak-portrait.jpg",
    alt: "A grilled sirloin and wine — a date-night plate at The ParT Barn",
    aspect: "aspect-[4/5]",
    width: "12rem",
    rotate: "-2deg",
    pos: { top: "5%", left: "73%" },
    caption: { font: "playfair", size: "text-sm" },
    z: 7,
  },
  {
    phrase: "Friday with your friends and nine simulator bays.",
    src: "/images/gallery/sliders.jpg",
    alt: "Sliders and a flatbread set in front of an active simulator at The ParT Barn",
    aspect: "aspect-[4/3]",
    width: "17rem",
    rotate: "3deg",
    pos: { top: "32%", left: "2%" },
    caption: { font: "playfair", size: "text-base" },
    z: 5,
  },
  {
    phrase: "The seat at the end of the bar on a slow Wednesday.",
    src: "/images/gallery/bar-overhead.jpg",
    alt: "The bar at The ParT Barn from above — green stools lined up under TVs",
    aspect: "aspect-[3/2]",
    width: "16rem",
    rotate: "-2deg",
    pos: { top: "33%", left: "38%" },
    caption: { font: "caveat", size: "text-2xl" },
    z: 8,
  },
  {
    phrase: "Tournaments, leagues, league nights that run a little late.",
    src: "/images/events/leagues.jpg",
    alt: "A row of Golfzon simulator bays during a league night",
    aspect: "aspect-[4/3]",
    width: "15rem",
    rotate: "2deg",
    pos: { top: "37%", left: "75%" },
    caption: { font: "playfair", size: "text-sm" },
    z: 5,
  },
  {
    phrase: "The corporate night out the team actually wants to go to.",
    src: "/images/events/corporate.jpg",
    alt: "A long dining table at The ParT Barn, set for a private corporate event",
    aspect: "aspect-[3/2]",
    width: "14rem",
    rotate: "-3deg",
    pos: { top: "70%", left: "22%" },
    caption: { font: "playfair", size: "text-sm" },
    z: 6,
  },
  {
    phrase: "Birthdays from 8 to 220.",
    src: "/images/events/birthdays.jpg",
    alt: "A signature martini garnished with a mini golf ball at The ParT Barn bar",
    aspect: "aspect-[4/5]",
    width: "13rem",
    rotate: "3deg",
    pos: { top: "70%", left: "62%" },
    caption: { font: "playfair", size: "text-base" },
    z: 7,
  },
];

const variants = {
  hidden: { opacity: 0, y: 22, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

interface PolaroidViewProps {
  p: Polaroid;
  className?: string;
  rotateOverride?: string | null;
  imgSizes: string;
}

function PolaroidView({ p, className = "", rotateOverride, imgSizes }: PolaroidViewProps) {
  const rotation = rotateOverride === null ? "0deg" : rotateOverride ?? p.rotate;
  const captionFontClass = p.caption.font === "caveat" ? "font-caveat" : "font-playfair italic";
  return (
    <div
      className={`bg-white rounded-[2px] shadow-[6px_10px_28px_-12px_rgba(26,46,24,0.55)] pt-3 px-3 pb-3 ${className}`}
      style={{ transform: `rotate(${rotation})` }}
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
      <div className="h-[88px] flex items-center justify-center px-2">
        <p
          className={`text-center text-text-dark leading-[1.15] ${captionFontClass} ${p.caption.size}`}
        >
          {p.phrase}
        </p>
      </div>
    </div>
  );
}

export default function Occasions() {
  return (
    <section className="bg-bg-off py-20 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="block h-px w-12 bg-brand-accent" aria-hidden="true" />
          <p className="eyebrow text-brand-accent text-sm">What to come for</p>
        </motion.div>

        {/* Desktop scattered Polaroid composition */}
        <div className="hidden md:block relative h-[120vh] min-h-[1100px]">
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
            // alternate small/large mobile size hierarchy
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
