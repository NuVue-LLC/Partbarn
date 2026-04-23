"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyBookCTA() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const suppressed =
    (pathname?.startsWith("/private-events") ?? false) ||
    (pathname?.startsWith("/book-a-bay") ?? false);

  useEffect(() => {
    if (suppressed) {
      setShow(false);
      return;
    }
    const onScroll = () => {
      setShow(window.scrollY > window.innerHeight * 0.8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [suppressed]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed z-40 bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:right-8 md:translate-x-0"
        >
          <Link
            href="/book-a-bay"
            className="inline-block bg-brand-accent text-text-dark eyebrow text-xs px-6 py-3 shadow-lg hover:bg-brand-accent-dark hover:-translate-y-0.5 transition-all duration-300"
            aria-label="Book a Bay"
          >
            Book a Bay
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
