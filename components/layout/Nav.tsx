"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import Logo from "./Logo";
import Button from "@/components/ui/Button";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const variant: "white" | "dark" = scrolled ? "white" : "white";
  const solid = scrolled || open;

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          backgroundColor: solid ? "rgba(30, 61, 26, 1)" : "rgba(30, 61, 26, 0)",
          boxShadow: solid
            ? "0 6px 24px -10px rgba(0,0,0,0.35)"
            : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <Logo variant={variant} />

          <nav
            aria-label="Primary"
            className="hidden lg:flex items-center gap-8"
          >
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative eyebrow text-text-light text-[13px] py-2 transition-colors hover:text-brand-accent"
                >
                  {link.label}
                  <span
                    className={`absolute left-0 right-0 -bottom-0.5 h-[2px] bg-brand-accent transition-transform duration-300 origin-left ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button href="/book-a-bay" variant="primary" className="!px-6 !py-3 text-[12px]">
              Book a Bay
            </Button>
            <Button
              href="/reserve-a-table"
              variant="ghost"
              className="!px-6 !py-3 text-[12px] text-text-light"
            >
              Reserve a Table
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="lg:hidden text-text-light p-2 -mr-2"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? (
                <path d="M6 6 L18 18 M18 6 L6 18" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M4 7 H20" strokeLinecap="round" />
                  <path d="M4 12 H20" strokeLinecap="round" />
                  <path d="M4 17 H20" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-brand-green-dark lg:hidden pt-24 px-8 pb-12 overflow-y-auto"
          >
            <nav aria-label="Mobile" className="flex flex-col gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i + 0.1, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className="block font-playfair text-3xl text-text-light hover:text-brand-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-8 flex flex-col gap-3">
                <Button href="/book-a-bay" variant="primary">Book a Bay</Button>
                <Button href="/reserve-a-table" variant="ghost" className="text-text-light">
                  Reserve a Table
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
