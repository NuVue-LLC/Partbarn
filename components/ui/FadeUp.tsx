"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "p" | "h1" | "h2" | "h3" | "li" | "ul";
}

const buildVariants = (y: number, duration: number, delay: number): Variants => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

export default function FadeUp({
  children,
  delay = 0,
  duration = 0.6,
  y = 20,
  className = "",
  as = "div",
}: FadeUpProps) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={buildVariants(y, duration, delay)}
    >
      {children}
    </MotionTag>
  );
}
