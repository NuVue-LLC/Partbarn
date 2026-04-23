"use client";

import Image from "next/image";
import { useState } from "react";
import FadeUp from "@/components/ui/FadeUp";
import { BUSINESS } from "@/lib/constants";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(BUSINESS.newsletterUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bar/main-bar.jpg"
          alt="The full bar at The ParT Barn lit in green and gold"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: "rgba(30, 61, 26, 0.65)" }}
      />

      <div className="relative z-20 max-w-3xl mx-auto px-6 md:px-12 text-center text-text-light">
        <FadeUp>
          <p className="eyebrow text-brand-accent text-sm mb-5">
            Stay in the loop
          </p>
        </FadeUp>
        <FadeUp delay={0.08}>
          <h2 className="font-playfair font-normal text-4xl md:text-6xl text-text-light leading-[1.1] mb-6">
            Be the first to know.
          </h2>
        </FadeUp>
        <FadeUp delay={0.16}>
          <p className="font-barlow text-text-light/85 text-base md:text-lg leading-[1.7] max-w-lg mx-auto mb-10">
            League nights, tournaments, new menu drops, the occasional special.
            No spam, no pressure.
          </p>
        </FadeUp>
        <FadeUp delay={0.22}>
          <form
            onSubmit={submit}
            className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Your email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="YOUR EMAIL"
              className="flex-1 bg-bg-cream text-text-dark eyebrow text-sm px-5 py-4 placeholder:text-text-dark/45 focus:outline-none focus:ring-2 focus:ring-brand-accent rounded-none"
            />
            <button
              type="submit"
              className="eyebrow text-sm bg-brand-accent text-text-dark px-8 py-4 hover:bg-brand-accent-dark hover:-translate-y-0.5 transition-all duration-300 shadow-md"
            >
              Subscribe
            </button>
          </form>
        </FadeUp>
      </div>
    </section>
  );
}
