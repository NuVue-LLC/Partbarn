"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyBookCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > window.innerHeight * 0.8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const widget = document.getElementById("hero-booking");
    if (widget) {
      widget.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed z-40 bg-brand-accent text-text-dark eyebrow text-xs px-6 py-3 shadow-lg hover:bg-brand-accent-dark hover:-translate-y-0.5 transition-all duration-300 bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:right-8 md:translate-x-0"
          aria-label="Book a Bay — scroll to booking widget"
        >
          Book a Bay
        </motion.button>
      )}
    </AnimatePresence>
  );
}
