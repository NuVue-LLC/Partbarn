"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeUp from "@/components/ui/FadeUp";

interface Photo {
  src: string;
  alt: string;
  shape: "landscape" | "portrait" | "square" | "wide";
}

const photos: Photo[] = [
  {
    src: "/images/gallery/bar-stools.jpg",
    alt: "The main bar at The ParT Barn — green tufted stools and warm wood floors",
    shape: "landscape",
  },
  {
    src: "/images/gallery/steak-portrait.jpg",
    alt: "A grilled sirloin with mashed potatoes and broccolini, plated against a forest-green wall",
    shape: "portrait",
  },
  {
    src: "/images/gallery/salmon.jpg",
    alt: "A sesame-glazed salmon fillet over noodles and greens",
    shape: "square",
  },
  {
    src: "/images/gallery/dining-wall.jpg",
    alt: "Dining tables and the framed photo wall lit in green at The ParT Barn",
    shape: "landscape",
  },
  {
    src: "/images/gallery/sliders.jpg",
    alt: "A trio of sliders and a flatbread set in front of an active simulator",
    shape: "landscape",
  },
  {
    src: "/images/bar/main-bar.jpg",
    alt: "The full bar lit in green and gold on a Friday night at The ParT Barn",
    shape: "landscape",
  },
];

const shapeClass: Record<Photo["shape"], string> = {
  landscape: "h-[420px] w-[600px]",
  portrait: "h-[420px] w-[315px]",
  square: "h-[420px] w-[420px]",
  wide: "h-[420px] w-[720px]",
};

export default function Gallery() {
  return (
    <section className="bg-brand-green-dark text-text-light pt-20 md:pt-24 pb-14 md:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10">
        <FadeUp>
          <p className="eyebrow text-brand-accent text-sm mb-5 text-center">
            Inside ParT Barn
          </p>
        </FadeUp>
        <FadeUp delay={0.08}>
          <h2 className="font-playfair font-normal text-4xl md:text-6xl text-text-light leading-[1.1] text-center">
            Any night. Every night.
          </h2>
        </FadeUp>
      </div>

      <FadeUp delay={0.2}>
        <motion.div
          className="no-scrollbar flex gap-4 px-6 md:px-12 overflow-x-auto snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {photos.map((p) => (
            <div
              key={p.src}
              className={`relative shrink-0 ${shapeClass[p.shape]} snap-start group cursor-grab overflow-hidden`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 768px) 40vw, 80vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-brand-green-dark/0 group-hover:bg-brand-green-dark/10 transition-colors" />
            </div>
          ))}
        </motion.div>
      </FadeUp>

      <p className="eyebrow text-text-light/45 text-[10px] tracking-[0.3em] text-center mt-6">
        Drag · Scroll
      </p>
    </section>
  );
}
