import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";
import { BUSINESS } from "@/lib/constants";

const faqs = [
  {
    q: "What’s the minimum group size?",
    a: "Eight guests. For smaller groups, book a bay or reserve a regular table — the experience is the same, just without the private-event coordination.",
  },
  {
    q: "How far in advance should I book?",
    a: "Four to six weeks for most events, eight or more for full buyouts and the November–December holiday window (those fill first). Shorter notice is sometimes workable — always worth asking.",
  },
  {
    q: "Do you require a deposit?",
    a: "Yes — 25% at booking to hold the date, balance due the week of the event. The deposit is fully refundable up to 14 days out.",
  },
  {
    q: "Can we bring our own cake or decorations?",
    a: "Cakes, yes — no cake-cutting fee, and we’ll plate and serve them for you. Decorations are welcome within reason: no open flames and nothing affixed with heavy adhesive. Coordinate specifics with your event lead the week of.",
  },
  {
    q: "What about dietary restrictions?",
    a: "Handled. Tell us in advance and the kitchen accommodates gluten-free, vegetarian, vegan, and major allergens. Cross-contamination is minimized but can’t be guaranteed in a shared kitchen — flag severe allergies on the inquiry form.",
  },
  {
    q: "Can we do a tournament format?",
    a: "Yes. We run bracket and stroke-play formats with live leaderboards across the bays, and the team sets it up and runs it. Works best with groups of 16 or more.",
  },
  {
    q: "What’s your cancellation policy?",
    a: "Cancel 14+ days out for a full deposit refund. Between 7 and 14 days, 50% refunded. Less than 7 days, the deposit is non-refundable. Rescheduling within 90 days is always free if we have availability.",
  },
  {
    q: "Do you have parking?",
    a: "Free surface parking on-site, roughly 120 spaces. Overflow in the neighboring lot on weekends.",
  },
  {
    q: "Is the venue ADA accessible?",
    a: "Yes — ground-floor entry, accessible restrooms, and accessible seating in the dining room and at the bay stations. If specific accommodations are needed, flag them on the inquiry form and we’ll confirm details before your event.",
  },
];

const ctas = [
  { label: "View Events Menu", href: "/menus#events" },
  { label: `Call ${BUSINESS.phone}`, href: `tel:${BUSINESS.phoneRaw}` },
  { label: "Book a Visit", href: "/reserve-a-table" },
];

function PaperTexture() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.10] mix-blend-multiply"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='320' height='320'><filter id='p'><feTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.10  0 0 0 0 0.18  0 0 0 0 0.10  0 0 0 0.45 0'/></filter><rect width='100%' height='100%' filter='url(%23p)'/></svg>\")",
        backgroundSize: "320px 320px",
      }}
    />
  );
}

export default function FaqAndCTAs() {
  return (
    <>
      <section
        aria-labelledby="faq-heading"
        className="relative bg-bg-off py-24 md:py-28 overflow-hidden"
      >
        <PaperTexture />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent"
        />

        <div className="relative max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <FadeUp>
              <p className="eyebrow text-brand-accent text-sm mb-5">Before You Ask</p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <div className="flex items-center justify-center gap-5">
                <span aria-hidden="true" className="block h-px w-12 md:w-16 bg-brand-accent" />
                <h2
                  id="faq-heading"
                  className="font-playfair italic font-normal text-3xl md:text-5xl text-text-dark leading-none"
                >
                  Questions, answered.
                </h2>
                <span aria-hidden="true" className="block h-px w-12 md:w-16 bg-brand-accent" />
              </div>
            </FadeUp>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 border-t border-text-dark/15">
            {faqs.map((f, i) => (
              <FadeUp key={f.q} delay={i * 0.05} as="li">
                <div className="py-8 border-b border-text-dark/15 h-full">
                  <p className="font-playfair italic text-text-dark text-xl md:text-2xl leading-snug mb-3">
                    {f.q}
                  </p>
                  <p className="font-barlow text-text-dark/80 text-sm md:text-base leading-[1.7]">
                    {f.a}
                  </p>
                </div>
              </FadeUp>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label="Other ways to reach us" className="bg-bg-cream py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <FadeUp>
            <p className="eyebrow text-brand-accent text-sm mb-5">Other Ways In</p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="font-playfair font-normal text-4xl md:text-5xl text-text-dark leading-[1.05] mb-6">
              Not quite ready?
            </h2>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="font-barlow text-text-dark/80 text-base md:text-lg leading-[1.7] max-w-2xl mx-auto mb-12">
              Take a look at our events menu to see what we can build. Call us at{" "}
              {BUSINESS.phone}{" "}if it&apos;s easier to talk. Or just book a regular visit
              and see the space in person before you commit.
            </p>
          </FadeUp>
          <FadeUp delay={0.22}>
            <ul className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8">
              {ctas.map((c) => {
                const external = c.href.startsWith("tel:");
                const className =
                  "eyebrow text-sm text-text-dark/80 hover:text-brand-accent transition-colors border-b border-text-dark/25 hover:border-brand-accent pb-1";
                return (
                  <li key={c.label}>
                    {external ? (
                      <a href={c.href} className={className}>
                        {c.label} →
                      </a>
                    ) : (
                      <Link href={c.href} className={className}>
                        {c.label} →
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
