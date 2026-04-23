import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";
import Button from "@/components/ui/Button";
import { BUSINESS } from "@/lib/constants";

export const metadata = {
  title: "Pricing & Memberships | The ParT Barn",
  description:
    "Membership tiers, bay rates, discounts, and FAQs for The ParT Barn in Lake Elmo, MN.",
};

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

function FlagIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      className={`shrink-0 mt-1 text-brand-accent ${className}`}
      aria-hidden="true"
    >
      <line x1="3.5" y1="13" x2="3.5" y2="1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 3.5 2 L 12 4 L 3.5 6 Z" fill="currentColor" />
    </svg>
  );
}

// ========== HERO ==========

function PricingHero() {
  return (
    <section
      aria-labelledby="pricing-hero-headline"
      className="relative min-h-[75vh] w-full overflow-hidden flex flex-col"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0 motion-safe:animate-ken-burns">
        <Image
          src="/images/bays/lounge.jpg"
          alt="Warm lounge interior at The ParT Barn"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      {/* Dark green overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: "rgba(30, 61, 26, 0.55)" }}
      />

      {/* Content */}
      <div className="relative z-20 w-full flex-1 flex flex-col justify-center px-6 md:px-12 py-32 md:py-40 min-h-[75vh]">
        {/* Scorecard label — upper left */}
        <div className="max-w-7xl mx-auto w-full mb-12 md:mb-16">
          <FadeUp>
            <p className="font-playfair italic font-medium text-text-light text-2xl md:text-3xl leading-none">
              Hole No. 19
            </p>
            <p className="eyebrow text-brand-accent text-xs mt-2 tracking-[0.25em]">
              THE 19TH HOLE · WHERE MEMBERS GATHER
            </p>
            <span aria-hidden="true" className="block h-px w-56 bg-brand-accent mt-3" />
          </FadeUp>
        </div>

        {/* Centered headline block */}
        <div className="max-w-4xl mx-auto w-full text-center">
          <FadeUp delay={0.1}>
            <p className="eyebrow text-brand-accent text-sm tracking-[0.15em] mb-4">
              PRICING &amp; MEMBERSHIPS
            </p>
          </FadeUp>
          <FadeUp delay={0.18}>
            <span aria-hidden="true" className="block h-px w-16 bg-brand-accent mx-auto mb-6" />
          </FadeUp>
          <FadeUp delay={0.25}>
            <h1
              id="pricing-hero-headline"
              className="font-playfair font-normal text-5xl md:text-7xl text-text-light leading-[1.05] mb-6"
            >
              Make ParT Barn your local.
            </h1>
          </FadeUp>
          <FadeUp delay={0.33}>
            <p className="font-barlow text-text-light/80 text-base md:text-lg leading-[1.7] max-w-2xl mx-auto">
              Play more, pay less. Membership gets you priority on the bay, lower rates
              every time you walk in, and a seat on the list for tournaments, tastings,
              and the nights you don&apos;t want to miss.
            </p>
          </FadeUp>
        </div>

        {/* Scroll indicator */}
        <div className="max-w-4xl mx-auto w-full text-center mt-12 hidden md:flex flex-col items-center gap-2 text-text-light/70 motion-safe:animate-scroll-hint">
          <span className="eyebrow text-[10px]">Scroll</span>
          <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
            <path d="M8 2 V18 M2 12 L8 18 L14 12" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}

// ========== TIERS ==========

interface Tier {
  name: string;
  price: string;
  priceSub: string;
  hours?: string;
  perks: string[];
  ctaLabel: string;
  ctaHref: string;
  highlight?: boolean;
}

const tiers: Tier[] = [
  {
    name: "Birdie",
    price: "$179",
    priceSub: "/mo · 12-month · or $199/mo month-to-month",
    perks: [
      "60 minutes free per day (Mon–Fri)",
      "10% off merchandise",
      "Exclusive member specials on food & drinks",
    ],
    ctaLabel: "Start Birdie Membership",
    ctaHref: "mailto:partbarn@hoari.com?subject=Birdie%20Membership",
  },
  {
    name: "Eagle",
    price: "$299",
    priceSub: "/mo",
    hours: "15 hrs/month (Oct–Apr) · Unlimited play (May–Sept)",
    perks: [
      "Club storage",
      "4 guest passes per month",
      "15% off merchandise",
      "Exclusive member specials on food & drinks",
    ],
    ctaLabel: "Start Eagle Membership",
    ctaHref: "mailto:partbarn@hoari.com?subject=Eagle%20Membership",
    highlight: true,
  },
  {
    name: "Corporate",
    price: "$7,000",
    priceSub: "/yr",
    hours: "20 hrs/month (Oct–Apr) · Unlimited play (May–Sept)",
    perks: [
      "Club storage",
      "5 account holders",
      "Branding included",
      "Priority corporate bookings",
    ],
    ctaLabel: "Contact Us for Corporate",
    ctaHref: "mailto:partbarn@hoari.com?subject=Corporate%20Membership",
  },
];

function TierPlacard({ tier }: { tier: Tier }) {
  const borderClass = tier.highlight
    ? "border-2 border-brand-accent"
    : "border border-text-dark/15";
  return (
    <div
      className={`relative flex flex-col h-full bg-bg-cream ${borderClass} ${
        tier.highlight ? "lg:-translate-y-4" : ""
      }`}
    >
      {tier.highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-accent px-4 py-1">
          <span className="eyebrow text-[10px] text-text-dark tracking-[0.25em]">
            Most Popular
          </span>
        </div>
      )}

      <div className="px-8 pt-10 pb-8 border-b border-text-dark/15">
        <p className="eyebrow text-brand-accent text-xs tracking-[0.25em]">
          {tier.name} Membership
        </p>
        <p className="font-playfair font-normal text-text-dark text-6xl md:text-7xl mt-4 leading-none">
          {tier.price}
        </p>
        <p className="font-barlow text-text-dark/70 text-sm mt-3 leading-snug">
          {tier.priceSub}
        </p>
        {tier.hours && (
          <p className="eyebrow text-text-dark/60 text-[10px] mt-4 tracking-[0.2em]">
            {tier.hours}
          </p>
        )}
      </div>

      <ul className="flex-1 flex flex-col gap-4 px-8 py-8">
        {tier.perks.map((perk) => (
          <li
            key={perk}
            className="flex items-start gap-3 font-barlow text-text-dark text-sm md:text-base leading-[1.55]"
          >
            <FlagIcon />
            <span>{perk}</span>
          </li>
        ))}
      </ul>

      <div className="px-8 pb-8">
        <Button
          href={tier.ctaHref}
          variant="primary"
          className="w-full !px-4 text-center"
        >
          {tier.ctaLabel}
        </Button>
      </div>
    </div>
  );
}

function TiersSection() {
  return (
    <section className="relative bg-bg-cream pt-8 pb-24 md:pb-28 overflow-hidden">
      <PaperTexture />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <FadeUp>
          <div className="text-center mb-12 md:mb-16">
            <p className="eyebrow text-brand-accent text-sm mb-3">The Tiers</p>
            <span aria-hidden="true" className="block h-px w-16 bg-brand-accent mx-auto" />
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {tiers.map((tier, i) => (
            <FadeUp key={tier.name} delay={i * 0.08}>
              <TierPlacard tier={tier} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ========== RATES ==========

const rates = [
  {
    label: "Summer",
    price: "$50",
    unit: "/hr",
    note: "May – September",
  },
  {
    label: "Off-Peak",
    price: "$55",
    unit: "/hr",
    note: "Oct – Apr · Mon–Thu before 4pm",
  },
  {
    label: "Peak",
    price: "$65",
    unit: "/hr",
    note: "Oct – Apr · Evenings, weekends, holidays",
  },
];

function RatesSection() {
  return (
    <section className="relative py-24 md:py-28 overflow-hidden" style={{ backgroundColor: "#1e3d1a" }}>
      <PaperTexture />
      <div className="relative max-w-5xl mx-auto px-6 md:px-12">
        <FadeUp>
          <div className="text-center mb-14">
            <p className="eyebrow text-brand-accent text-sm mb-3">Simulator Rates</p>
            <span aria-hidden="true" className="block h-px w-16 bg-brand-accent mx-auto mb-6" />
            <h2 className="font-playfair font-normal text-3xl md:text-5xl text-text-light leading-[1.1]">
              Pay by the hour.
            </h2>
          </div>
        </FadeUp>

        <ul className="divide-y divide-text-light/20 border-y border-text-light/20">
          {rates.map((r, i) => (
            <FadeUp key={r.label} delay={i * 0.08} as="li">
              <div className="py-7 md:py-9 grid grid-cols-12 gap-4 items-baseline">
                <div className="col-span-12 md:col-span-4">
                  <p className="eyebrow text-brand-accent text-xs tracking-[0.25em]">
                    {r.label}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-4 flex items-baseline gap-1">
                  <span className="font-playfair font-normal text-5xl md:text-6xl text-text-light leading-none">
                    {r.price}
                  </span>
                  <span className="font-barlow text-text-light/60 text-base md:text-lg">
                    {r.unit}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-4 md:text-right">
                  <p className="font-barlow text-text-light/70 text-sm md:text-base">
                    {r.note}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </ul>

        <FadeUp delay={0.35}>
          <p className="font-barlow text-text-light/65 text-sm mt-10 max-w-2xl mx-auto text-center leading-[1.7]">
            Rates are per bay, not per person — up to six players per bay.
            Peak applies Oct–Apr on evenings, weekends, and holidays.
            Member rates available on every booking.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

// ========== DISCOUNTS & EXTRAS ==========

const discounts = [
  {
    label: "Seniors (65+)",
    detail: "10% off off-peak rates with valid ID.",
  },
  {
    label: "Veterans",
    detail: "15% off any time, all year. Thank you for your service.",
  },
  {
    label: "Callaway Club Rental",
    detail: "$30 per set. Full set of Callaway clubs, yours for the session.",
  },
];

function DiscountsSection() {
  return (
    <section className="relative bg-bg-cream py-24 md:py-28 overflow-hidden">
      <PaperTexture />
      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        <FadeUp>
          <div className="text-center mb-14">
            <p className="eyebrow text-brand-accent text-sm mb-3">Discounts &amp; Extras</p>
            <span aria-hidden="true" className="block h-px w-16 bg-brand-accent mx-auto" />
          </div>
        </FadeUp>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {discounts.map((d, i) => (
            <FadeUp key={d.label} delay={i * 0.08} as="li">
              <div className="flex flex-col items-start gap-3 border-t border-text-dark/15 pt-5">
                <FlagIcon className="mt-0" />
                <p className="eyebrow text-text-dark text-xs tracking-[0.25em]">
                  {d.label}
                </p>
                <p className="font-barlow text-text-dark/80 text-sm md:text-base leading-[1.65] max-w-xs">
                  {d.detail}
                </p>
              </div>
            </FadeUp>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ========== FAQ ==========

const faqs = [
  {
    q: "What's the difference between peak and off-peak hours?",
    a: "Off-peak covers Monday–Thursday before 4pm from October through April. Peak covers evenings, weekends, and holidays in that same window. Summer (May–September) runs a single Summer rate across the board.",
  },
  {
    q: "Can I freeze my membership?",
    a: "Birdie and Eagle members can freeze for up to two months per year with two weeks' notice. Talk to us and we'll set it up.",
  },
  {
    q: "Can I upgrade or downgrade my tier?",
    a: "Anytime. Upgrades take effect immediately and are prorated. Downgrades begin the following billing cycle.",
  },
  {
    q: "What counts as a guest pass?",
    a: "A guest pass covers one non-member for a single bay session. Eagle members get 4 per month — bring the crew, show off the place.",
  },
  {
    q: "What's the difference between 12-month Birdie and month-to-month?",
    a: "$179/month on a 12-month commitment vs. $199/month with no commitment. Same benefits either way — the discount is for locking in the year.",
  },
  {
    q: "Do members have to commit long-term?",
    a: "Only if you want to save. Month-to-month Birdie, Eagle, and Corporate tiers are all month-to-month unless otherwise noted. Cancel with 30 days' notice.",
  },
];

function FaqSection() {
  return (
    <section className="relative bg-bg-off py-24 md:py-28 overflow-hidden">
      <PaperTexture />
      <div className="relative max-w-3xl mx-auto px-6 md:px-12">
        <FadeUp>
          <div className="text-center mb-14">
            <p className="eyebrow text-brand-accent text-sm mb-3">Frequently Asked</p>
            <span aria-hidden="true" className="block h-px w-16 bg-brand-accent mx-auto mb-6" />
            <h2 className="font-playfair font-normal text-3xl md:text-5xl text-text-dark leading-[1.1]">
              The details, answered.
            </h2>
          </div>
        </FadeUp>

        <ul className="divide-y divide-text-dark/15 border-y border-text-dark/15">
          {faqs.map((f, i) => (
            <FadeUp key={f.q} delay={i * 0.05} as="li">
              <div className="py-8">
                <p className="font-playfair italic text-text-dark text-xl md:text-2xl leading-snug mb-3">
                  {f.q}
                </p>
                <p className="font-barlow text-text-dark/80 text-sm md:text-base leading-[1.7] max-w-2xl">
                  {f.a}
                </p>
              </div>
            </FadeUp>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ========== FINAL CTA ==========

function TalkToUsSection() {
  return (
    <section className="relative bg-bg-cream py-24 md:py-28 overflow-hidden">
      <PaperTexture />
      <div className="relative max-w-3xl mx-auto px-6 md:px-12 text-center">
        <FadeUp>
          <p className="eyebrow text-brand-accent text-sm mb-3">Still thinking</p>
        </FadeUp>
        <FadeUp delay={0.08}>
          <span aria-hidden="true" className="block h-px w-16 bg-brand-accent mx-auto mb-6" />
        </FadeUp>
        <FadeUp delay={0.14}>
          <h2 className="font-playfair font-normal text-4xl md:text-6xl text-text-dark leading-[1.05] mb-6">
            Still have questions? Talk to us.
          </h2>
        </FadeUp>
        <FadeUp delay={0.22}>
          <p className="font-barlow text-text-dark/85 text-base md:text-lg leading-[1.7] max-w-xl mx-auto mb-10">
            A real person, on the phone or over email, is the fastest way to figure out
            which tier fits. We&apos;ll walk you through it.
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-x-8 gap-y-4 mb-10">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="font-playfair text-text-dark text-2xl md:text-3xl hover:text-brand-accent transition-colors"
            >
              {BUSINESS.phone}
            </a>
            <span aria-hidden="true" className="hidden md:block h-6 w-px bg-text-dark/20" />
            <a
              href={`mailto:${BUSINESS.email}`}
              className="font-playfair italic text-text-dark text-xl md:text-2xl hover:text-brand-accent transition-colors"
            >
              {BUSINESS.email}
            </a>
          </div>
        </FadeUp>
        <FadeUp delay={0.36}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              href="mailto:partbarn@hoari.com?subject=Start%20my%20membership"
              variant="primary"
            >
              Start Your Membership
            </Button>
            <Button
              href="mailto:partbarn@hoari.com?subject=Pricing%20inquiry"
              variant="ghost"
              className="text-text-dark border-text-dark"
            >
              Contact Us
            </Button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <TiersSection />
      <RatesSection />
      <DiscountsSection />
      <FaqSection />
      <TalkToUsSection />
    </>
  );
}
