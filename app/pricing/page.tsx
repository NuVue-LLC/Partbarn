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

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" stroke="#c9a84c" strokeWidth="1.4" />
      <path
        d="M7.5 12.5 L10.5 15.5 L16.5 9"
        stroke="#c9a84c"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ========== HOLE 19 MOTIF ==========

function Hole19Motif() {
  // Par-3 "19th hole" — short hole, large welcoming green, clubhouse building top-right.
  // Rendered in brand-green-dark over cream background at low opacity.
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 900"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 w-full h-full text-brand-green-dark"
    >
      {/* Compass — top-left */}
      <g transform="translate(80 80)" stroke="currentColor" strokeWidth="0.9" fill="none">
        <circle cx="0" cy="0" r="22" />
        <line x1="0" y1="-22" x2="0" y2="-12" strokeWidth="1.2" />
        <line x1="0" y1="22" x2="0" y2="12" />
        <line x1="-22" y1="0" x2="-12" y2="0" />
        <line x1="22" y1="0" x2="12" y2="0" />
        <text x="0" y="-30" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill="currentColor" stroke="none" letterSpacing="1">N</text>
      </g>

      {/* Tee box */}
      <rect x="95" y="450" width="68" height="38" fill="currentColor" fillOpacity="0.35" stroke="currentColor" strokeWidth="0.9" />

      {/* Fairway — short wide corridor tee to green */}
      <path
        d="M 130 450 C 200 430, 460 420, 720 400
           C 720 460, 460 490, 130 488 Z"
        fill="currentColor"
        fillOpacity="0.11"
        stroke="currentColor"
        strokeWidth="0.9"
      />

      {/* Green — large welcoming oval */}
      <ellipse cx="870" cy="430" rx="150" ry="115"
        fill="currentColor" fillOpacity="0.22"
        stroke="currentColor" strokeWidth="1.4"
      />
      {/* Inner contour */}
      <ellipse cx="870" cy="430" rx="115" ry="86"
        fill="none" stroke="currentColor" strokeWidth="0.7" strokeDasharray="4 3"
      />

      {/* Left-side bunker */}
      <path
        d="M 722 470 C 700 458, 698 492, 730 500 C 754 506, 762 480, 722 470 Z"
        fill="currentColor" fillOpacity="0.22"
        stroke="currentColor" strokeWidth="0.9"
      />
      {/* Back-right bunker */}
      <path
        d="M 890 300 C 870 284, 935 272, 952 294 C 960 308, 940 324, 890 300 Z"
        fill="currentColor" fillOpacity="0.22"
        stroke="currentColor" strokeWidth="0.9"
      />

      {/* Flag pole + pennant */}
      <line x1="858" y1="430" x2="858" y2="322" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M 858 322 L 914 340 L 858 358 Z" fill="currentColor" fillOpacity="0.65" />
      <circle cx="858" cy="433" r="5" fill="currentColor" fillOpacity="0.45" />

      {/* Yardage callout */}
      <g
        fontFamily="var(--font-barlow-condensed), sans-serif"
        fontSize="10"
        letterSpacing="2"
        fill="currentColor"
      >
        <line x1="420" y1="450" x2="445" y2="440" stroke="currentColor" strokeWidth="0.8" />
        <text x="450" y="444">162 YDS · TO PIN</text>
      </g>

      {/* Scale ruler — bottom-right */}
      <g transform="translate(880 830)" stroke="currentColor" strokeWidth="0.8" fill="none">
        <line x1="0" y1="0" x2="200" y2="0" />
        <line x1="0" y1="-6" x2="0" y2="6" />
        <line x1="100" y1="-4" x2="100" y2="4" />
        <line x1="200" y1="-6" x2="200" y2="6" />
        <text x="0" y="18" textAnchor="middle" fontSize="9" fill="currentColor" stroke="none" fontFamily="sans-serif">0</text>
        <text x="100" y="18" textAnchor="middle" fontSize="9" fill="currentColor" stroke="none" fontFamily="sans-serif">50</text>
        <text x="200" y="18" textAnchor="middle" fontSize="9" fill="currentColor" stroke="none" fontFamily="sans-serif">100 YD</text>
      </g>
    </svg>
  );
}

// ========== PHOTO BREAK ==========

function PhotoBreak() {
  return (
    <div className="relative w-full min-h-[50vh] md:min-h-[56vh] overflow-hidden">
      <Image
        src="/images/bar/main-bar.jpg"
        alt="The bar at The ParT Barn — golden hour, warm wood, green stools"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(30, 61, 26, 0.38)" }}
      />

      {/* Handwritten caption */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <p
          className="font-caveat text-text-light text-4xl md:text-6xl text-center leading-[1.1] drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
          style={{ transform: "rotate(-2deg)" }}
        >
          your place, when you want it.
        </p>
      </div>

      {/* Top/bottom gradient rules */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent/60 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent/60 to-transparent"
      />
    </div>
  );
}

// ========== HERO ==========

function PricingHero() {
  return (
    <section
      aria-labelledby="pricing-hero-headline"
      className="relative min-h-[85vh] w-full overflow-hidden flex flex-col"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0 motion-safe:animate-ken-burns">
        <Image
          src="/images/gallery/bar-stools.jpg"
          alt="The bar at The ParT Barn lined with green stools — the regulars' seats"
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
      <div className="relative z-20 w-full flex-1 flex flex-col justify-center px-6 md:px-12 py-20 md:py-24 min-h-[85vh]">
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
  return (
    <div
      className={`relative flex flex-col h-full bg-white shadow-[10px_18px_36px_-16px_rgba(26,46,24,0.4),3px_5px_10px_-4px_rgba(26,46,24,0.18)] transition-all duration-300 ease-out hover:shadow-[18px_28px_54px_-16px_rgba(26,46,24,0.55),5px_8px_18px_-4px_rgba(26,46,24,0.28)] ${
        tier.highlight
          ? "lg:-translate-y-3 hover:-translate-y-5 lg:hover:-translate-y-6"
          : "hover:-translate-y-2"
      }`}
    >
      {/* Dark green header */}
      <div className="relative bg-brand-green-dark text-text-light px-6 py-8 text-center">
        {tier.highlight && (
          <span className="eyebrow absolute top-3 right-4 text-[10px] tracking-[0.2em] text-brand-accent">
            Most Popular
          </span>
        )}
        <p className="eyebrow text-brand-accent text-xs tracking-[0.25em]">
          {tier.name} Membership
        </p>
        <p className="font-playfair font-normal text-5xl md:text-6xl text-text-light mt-3 leading-none">
          {tier.price}
        </p>
        <p className="font-barlow text-text-light/75 text-xs md:text-sm mt-3 leading-snug">
          {tier.priceSub}
        </p>
        {tier.hours && (
          <p className="font-barlow text-text-light/70 text-[11px] md:text-xs mt-3 leading-snug">
            {tier.hours}
          </p>
        )}
      </div>

      {/* Handwritten "our pick" tag on highlighted tier */}
      {tier.highlight && (
        <span
          aria-hidden="true"
          className="font-caveat text-brand-accent text-3xl md:text-4xl absolute -top-7 -right-4 z-10"
          style={{ transform: "rotate(8deg)" }}
        >
          our pick!
        </span>
      )}

      {/* Perks body */}
      <ul className="flex-1 flex flex-col gap-4 px-6 py-8">
        {tier.perks.map((perk) => (
          <li
            key={perk}
            className="flex items-start gap-3 font-barlow text-text-dark text-sm md:text-base leading-[1.55]"
          >
            <CheckIcon />
            <span>{perk}</span>
          </li>
        ))}
      </ul>

      {/* CTA button footer */}
      <div className="px-6 pb-8">
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
    <section className="relative bg-bg-cream pt-16 md:pt-20 pb-24 md:pb-28 overflow-hidden">
      <PaperTexture />
      <div className="pointer-events-none absolute inset-0 opacity-[0.14]">
        <Hole19Motif />
      </div>

      {/* Gold gradient top/bottom rules */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-14 md:mb-20">
          <FadeUp>
            <p className="eyebrow text-brand-accent text-sm mb-5">The Tiers</p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <div className="flex items-center justify-center gap-5">
              <span aria-hidden="true" className="block h-px w-12 md:w-16 bg-brand-accent" />
              <h2 className="font-playfair italic font-normal text-text-dark text-3xl md:text-5xl leading-none">
                Pick your clubhouse.
              </h2>
              <span aria-hidden="true" className="block h-px w-12 md:w-16 bg-brand-accent" />
            </div>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 items-stretch">
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
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ backgroundColor: "#1e3d1a" }}>
      <PaperTexture />
      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <FadeUp>
            <p className="eyebrow text-brand-accent text-sm mb-5">Simulator Rates</p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <div className="flex items-center justify-center gap-5">
              <span aria-hidden="true" className="block h-px w-12 md:w-16 bg-brand-accent" />
              <h2 className="font-playfair italic font-normal text-3xl md:text-5xl text-text-light leading-none">
                Pay by the hour.
              </h2>
              <span aria-hidden="true" className="block h-px w-12 md:w-16 bg-brand-accent" />
            </div>
          </FadeUp>
        </div>

        {/* Three rate pillars */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-y-14 md:gap-y-0 relative">
          {rates.map((r, i) => (
            <FadeUp key={r.label} delay={i * 0.12} as="li">
              <div className="text-center md:px-6 relative">
                <p className="eyebrow text-brand-accent text-xs tracking-[0.25em] mb-5">
                  {r.label}
                </p>
                <div className="flex items-baseline justify-center gap-1 mb-5">
                  <span className="font-playfair font-normal text-6xl md:text-7xl text-text-light leading-none">
                    {r.price}
                  </span>
                  <span className="font-barlow text-text-light/60 text-base md:text-lg">
                    {r.unit}
                  </span>
                </div>
                <p className="font-barlow text-text-light/75 text-sm md:text-base leading-[1.6] max-w-[220px] mx-auto">
                  {r.note}
                </p>
                {i < rates.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-24 bg-brand-accent/30"
                  />
                )}
              </div>
            </FadeUp>
          ))}
        </ul>

        {/* Handwritten member accent + disclaimer */}
        <div className="mt-20 text-center">
          <FadeUp delay={0.35}>
            <p
              className="font-caveat text-brand-accent text-3xl md:text-4xl mb-6 leading-none"
              style={{ transform: "rotate(-1.5deg)" }}
            >
              members save on every booking.
            </p>
          </FadeUp>
          <FadeUp delay={0.42}>
            <p className="font-barlow text-text-light/65 text-sm max-w-2xl mx-auto leading-[1.7]">
              Rates are per bay, not per person — up to six players per bay.
              Peak applies Oct–Apr on evenings, weekends, and holidays.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

// ========== DISCOUNTS & EXTRAS ==========

const discounts = [
  {
    value: "10%",
    label: "Seniors (65+)",
    detail: "Off off-peak rates with valid ID.",
  },
  {
    value: "15%",
    label: "Veterans",
    detail: "Off any time, all year. Thank you for your service.",
  },
  {
    value: "$30",
    label: "Callaway Club Rental",
    detail: "Per set. Full Callaway clubs, yours for the session.",
  },
];

function DiscountsSection() {
  return (
    <section className="relative bg-bg-cream py-24 md:py-32 overflow-hidden">
      <PaperTexture />

      {/* Gold gradient top/bottom rules */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent"
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-20">
          <FadeUp>
            <p className="eyebrow text-brand-accent text-sm mb-5">Discounts &amp; Extras</p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <div className="flex items-center justify-center gap-5">
              <span aria-hidden="true" className="block h-px w-12 md:w-16 bg-brand-accent" />
              <h2 className="font-playfair italic font-normal text-text-dark text-3xl md:text-5xl leading-none">
                A little something extra.
              </h2>
              <span aria-hidden="true" className="block h-px w-12 md:w-16 bg-brand-accent" />
            </div>
          </FadeUp>
        </div>

        {/* Three discount pillars — matching the Rates section treatment */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-y-14 md:gap-y-0 relative">
          {discounts.map((d, i) => (
            <FadeUp key={d.label} delay={i * 0.12} as="li">
              <div className="text-center md:px-6 relative">
                <p className="font-playfair font-normal text-6xl md:text-7xl text-text-dark leading-none mb-5">
                  {d.value}
                </p>
                <p className="eyebrow text-brand-accent text-xs tracking-[0.25em] mb-4">
                  {d.label}
                </p>
                <p className="font-barlow text-text-dark/75 text-sm md:text-base leading-[1.6] max-w-[240px] mx-auto">
                  {d.detail}
                </p>
                {i < discounts.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-28 bg-brand-accent/30"
                  />
                )}
              </div>
            </FadeUp>
          ))}
        </ul>

        {/* Handwritten accent */}
        <div className="mt-20 text-center">
          <FadeUp delay={0.35}>
            <p
              className="font-caveat text-brand-accent text-3xl md:text-4xl leading-none"
              style={{ transform: "rotate(-1.5deg)" }}
            >
              just mention it at the bar.
            </p>
          </FadeUp>
        </div>
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

      {/* Gold gradient top/bottom rules */}
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
            <p className="eyebrow text-brand-accent text-sm mb-5">Frequently Asked</p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <div className="flex items-center justify-center gap-5">
              <span aria-hidden="true" className="block h-px w-12 md:w-16 bg-brand-accent" />
              <h2 className="font-playfair italic font-normal text-3xl md:text-5xl text-text-dark leading-none">
                The details, answered.
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
  );
}

// ========== FINAL CTA ==========

function TalkToUsSection() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <Image
        src="/images/gallery/cocktail.jpg"
        alt="Signature cocktail at The ParT Barn"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(30, 61, 26, 0.72)" }}
      />
      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
        <FadeUp>
          <p className="eyebrow text-brand-accent text-sm mb-5">Still thinking</p>
        </FadeUp>
        <FadeUp delay={0.08}>
          <div className="flex items-center justify-center gap-5 mb-8">
            <span aria-hidden="true" className="block h-px w-12 md:w-16 bg-brand-accent" />
            <h2 className="font-playfair italic font-normal text-3xl md:text-5xl text-text-light leading-none">
              Talk to us.
            </h2>
            <span aria-hidden="true" className="block h-px w-12 md:w-16 bg-brand-accent" />
          </div>
        </FadeUp>
        <FadeUp delay={0.22}>
          <p className="font-barlow text-text-light/80 text-base md:text-lg leading-[1.7] max-w-xl mx-auto mb-10">
            A real person, on the phone or over email, is the fastest way to figure out
            which tier fits. We&apos;ll walk you through it.
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-x-8 gap-y-4 mb-10">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="font-playfair text-text-light text-2xl md:text-3xl hover:text-brand-accent transition-colors"
            >
              {BUSINESS.phone}
            </a>
            <span aria-hidden="true" className="hidden md:block h-6 w-px bg-text-light/30" />
            <a
              href={`mailto:${BUSINESS.email}`}
              className="font-playfair italic text-text-light text-xl md:text-2xl hover:text-brand-accent transition-colors"
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
              className="text-text-light border-text-light"
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
      <PhotoBreak />
      <RatesSection />
      <DiscountsSection />
      <FaqSection />
      <TalkToUsSection />
    </>
  );
}
