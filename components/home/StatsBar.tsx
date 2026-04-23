"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "300+", label: "World-Class Courses" },
  { value: "9", label: "Simulator Bays" },
  { value: "7 Days", label: "Open All Week" },
  { value: "2026", label: "Hospitality Award Nominee" },
];

export default function StatsBar() {
  return (
    <section className="bg-brand-green-dark text-text-light py-20 border-t border-text-light/8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-0 relative">
          {stats.map((s, i) => (
            <motion.li
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-center md:px-6 relative"
            >
              <p className="font-playfair font-normal text-5xl md:text-6xl lg:text-7xl text-text-light leading-none mb-3">
                {s.value}
              </p>
              <p className="eyebrow text-text-light/70 text-[11px] md:text-xs tracking-[0.2em]">
                {s.label}
              </p>
              {i < stats.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-brand-accent/30"
                />
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
