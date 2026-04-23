"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyPlanCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const plan = document.getElementById("plan");
    if (!plan) return;

    let pastHero = false;
    let planVisible = false;

    const update = () => setShow(pastHero && !planVisible);

    const onScroll = () => {
      pastHero = window.scrollY > window.innerHeight * 0.85;
      update();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        planVisible = entry.isIntersecting;
        update();
      },
      { rootMargin: "-10% 0px -20% 0px" },
    );
    observer.observe(plan);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToPlan = () => {
    const plan = document.getElementById("plan");
    if (plan) plan.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          onClick={scrollToPlan}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed z-40 bg-brand-accent text-text-dark eyebrow text-xs px-6 py-3.5 shadow-lg hover:bg-brand-accent-dark hover:-translate-y-0.5 transition-all duration-300 bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:right-8 md:translate-x-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
          aria-label="Plan your event — scroll to inquiry form"
        >
          Plan Your Event
        </motion.button>
      )}
    </AnimatePresence>
  );
}
