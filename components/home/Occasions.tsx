"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Item =
  | {
      kind: "text";
      text: string;
      weight: 300 | 400 | 500;
      size: string;
      italic?: boolean;
      gold?: boolean;
      pos: { top: string; left: string; maxWidth: string; z?: number };
    }
  | {
      kind: "image";
      src: string;
      alt: string;
      pos: { top: string; left: string; width: string; rotate: string; z?: number };
      aspect: string;
    };

const items: Item[] = [
  // ZONE A — Dinner with the family + two-plates
  {
    kind: "text",
    text: "Dinner with the family.",
    weight: 400,
    size: "text-3xl md:text-5xl",
    pos: { top: "4%", left: "4%", maxWidth: "18rem", z: 20 },
  },
  {
    kind: "image",
    src: "/images/gallery/two-plates-overhead.jpg",
    alt: "An overhead view of two plates and wine at The ParT Barn",
    pos: { top: "5%", left: "58%", width: "13rem", rotate: "2deg", z: 5 },
    aspect: "aspect-[4/3]",
  },

  // ZONE B — A drink and the game at the bar (cluster left), salmon orphan accent (right counterweight)
  {
    kind: "image",
    src: "/images/gallery/cocktail.jpg",
    alt: "A signature cocktail at the green-lit bar",
    pos: { top: "24%", left: "5%", width: "10rem", rotate: "-2deg", z: 5 },
    aspect: "aspect-[4/5]",
  },
  {
    kind: "text",
    text: "A drink and the game at the bar.",
    weight: 400,
    size: "text-xl md:text-3xl",
    italic: true,
    pos: { top: "30%", left: "26%", maxWidth: "16rem", z: 20 },
  },
  {
    kind: "image",
    src: "/images/gallery/salmon.jpg",
    alt: "A sesame-glazed salmon fillet over noodles and greens",
    pos: { top: "26%", left: "78%", width: "9rem", rotate: "3deg", z: 5 },
    aspect: "aspect-square",
  },

  // ZONE C — Friday with friends + sliders
  {
    kind: "text",
    text: "Friday with your friends and nine simulator bays.",
    weight: 500,
    size: "text-2xl md:text-4xl",
    pos: { top: "44%", left: "4%", maxWidth: "22rem", z: 20 },
  },
  {
    kind: "image",
    src: "/images/gallery/sliders.jpg",
    alt: "Sliders and a flatbread set in front of an active simulator",
    pos: { top: "46%", left: "56%", width: "14rem", rotate: "2deg", z: 5 },
    aspect: "aspect-[4/3]",
  },

  // ZONE D — The seat at the end of the bar + bar-overhead (left cluster)
  {
    kind: "image",
    src: "/images/gallery/bar-overhead.jpg",
    alt: "The bar at The ParT Barn from above — green stools lined up under TVs",
    pos: { top: "63%", left: "4%", width: "14rem", rotate: "-2deg", z: 5 },
    aspect: "aspect-[3/2]",
  },
  {
    kind: "text",
    text: "The seat at the end of the bar on a slow Wednesday.",
    weight: 400,
    size: "text-xl md:text-2xl",
    italic: true,
    gold: true,
    pos: { top: "66%", left: "26%", maxWidth: "18rem", z: 20 },
  },

  // ZONE E — Corporate (left cluster) + Birthdays (right cluster)
  {
    kind: "text",
    text: "The corporate night out the team actually wants to go to.",
    weight: 400,
    size: "text-xl md:text-3xl",
    pos: { top: "84%", left: "4%", maxWidth: "20rem", z: 20 },
  },
  {
    kind: "image",
    src: "/images/gallery/dining-wall.jpg",
    alt: "Dining tables and the framed photo wall lit in green at The ParT Barn",
    pos: { top: "82%", left: "30%", width: "10rem", rotate: "2deg", z: 5 },
    aspect: "aspect-[3/2]",
  },
  {
    kind: "text",
    text: "Birthdays from 8 to 220.",
    weight: 500,
    size: "text-3xl md:text-5xl",
    pos: { top: "84%", left: "54%", maxWidth: "18rem", z: 20 },
  },
  {
    kind: "image",
    src: "/images/events/birthdays.jpg",
    alt: "A signature martini garnished with a mini golf ball at the bar",
    pos: { top: "82%", left: "82%", width: "8rem", rotate: "-2deg", z: 5 },
    aspect: "aspect-[4/5]",
  },
];

const variants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.07,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function Occasions() {
  return (
    <section className="bg-bg-off py-20 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="block h-px w-12 bg-brand-accent" aria-hidden="true" />
          <p className="eyebrow text-brand-accent text-sm">What to come for</p>
        </motion.div>

        {/* Desktop scrapbook collage */}
        <div className="hidden md:block relative h-[100vh] min-h-[900px]">
          {items.map((it, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              variants={variants}
              className="absolute"
              style={{
                top: it.pos.top,
                left: it.pos.left,
                zIndex: it.pos.z,
                ...(it.kind === "text"
                  ? { maxWidth: it.pos.maxWidth }
                  : { width: it.pos.width }),
              }}
            >
              {it.kind === "text" ? (
                <p
                  className={`font-playfair leading-[1.15] ${it.size} ${
                    it.italic ? "italic" : ""
                  } ${it.gold ? "text-brand-accent" : "text-text-dark"}`}
                  style={{ fontWeight: it.weight }}
                >
                  {it.text}
                </p>
              ) : (
                <div
                  className="bg-white p-2 shadow-[0_8px_24px_-8px_rgba(26,46,24,0.35)]"
                  style={{ transform: `rotate(${it.pos.rotate})` }}
                >
                  <div className={`relative w-full ${it.aspect} overflow-hidden`}>
                    <Image
                      src={it.src}
                      alt={it.alt}
                      fill
                      sizes="20vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile: stacked, alternating alignment */}
        <ul className="md:hidden flex flex-col gap-10">
          {items.map((it, i) => (
            <motion.li
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={variants}
              className={i % 2 === 0 ? "text-left" : "text-right"}
            >
              {it.kind === "text" ? (
                <p
                  className={`font-playfair leading-[1.2] ${it.size} ${
                    it.italic ? "italic" : ""
                  } ${it.gold ? "text-brand-accent" : "text-text-dark"}`}
                  style={{ fontWeight: it.weight }}
                >
                  {it.text}
                </p>
              ) : (
                <div className="bg-white p-2 shadow-md mx-auto max-w-[260px]">
                  <div className={`relative ${it.aspect} overflow-hidden`}>
                    <Image
                      src={it.src}
                      alt={it.alt}
                      fill
                      sizes="60vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
