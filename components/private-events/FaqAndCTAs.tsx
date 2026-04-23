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

export default function FaqAndCTAs() {
  return (
    <section aria-labelledby="faq-heading" className="bg-bg-cream py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-14 md:mb-20">
          <FadeUp>
            <p className="eyebrow text-brand-accent text-sm mb-5">Before You Ask</p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2
              id="faq-heading"
              className="font-playfair font-normal text-4xl md:text-6xl text-text-dark leading-[1.05] mb-6"
            >
              Questions, answered.
            </h2>
          </FadeUp>
        </div>

        <FadeUp delay={0.16}>
          <div className="bg-bg-off border-t-2 border-brand-accent divide-y divide-text-dark/10">
            {faqs.map((f) => (
              <details key={f.q} className="group">
                <summary className="list-none cursor-pointer px-6 md:px-8 py-5 md:py-6 flex items-start justify-between gap-6 focus-visible:outline-none focus-visible:bg-text-dark/5 transition-colors hover:bg-text-dark/[0.03]">
                  <span className="font-playfair font-normal text-lg md:text-xl text-text-dark leading-snug">
                    {f.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 mt-1 font-barlow-condensed text-brand-accent text-2xl leading-none transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="px-6 md:px-8 pb-6 md:pb-7 -mt-1">
                  <p className="font-barlow text-text-dark/80 text-base leading-[1.7] max-w-2xl">
                    {f.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </FadeUp>

        <div className="mt-24 md:mt-32 text-center">
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
      </div>
    </section>
  );
}
