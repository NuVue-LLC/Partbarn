import FadeUp from "@/components/ui/FadeUp";
import Button from "@/components/ui/Button";

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

function Hole3Motif() {
  // Par 3 ISLAND GREEN — iconic. Tee on shore, water around the green,
  // small bridge to the island. Visually distinct from Hole 1 (straight par 4)
  // and Hole 2 (par 5 dogleg, kidney green).
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 900"
      preserveAspectRatio="xMinYMin slice"
      className="pointer-events-none absolute inset-0 w-full h-full text-brand-green-dark"
    >
      {/* Compass — top-right */}
      <g
        transform="translate(1130 90)"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
      >
        <circle cx="0" cy="0" r="18" />
        <line x1="0" y1="-22" x2="0" y2="22" />
        <line x1="-22" y1="0" x2="22" y2="0" />
        <text
          x="-3"
          y="-26"
          fontFamily="var(--font-barlow-condensed), sans-serif"
          fontSize="10"
          letterSpacing="1"
          fill="currentColor"
          stroke="none"
        >
          N
        </text>
      </g>

      {/* WATER — large lake covering the middle of the section */}
      <path
        d="M 240 760
           C 160 690, 140 580, 220 480
           C 320 360, 480 280, 660 240
           C 840 200, 1000 200, 1100 250
           C 1170 290, 1170 380, 1100 470
           C 1010 580, 860 670, 700 720
           C 540 770, 360 800, 240 760 Z"
        fill="currentColor"
        fillOpacity="0.18"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      {/* Water ripple lines */}
      <g fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.55">
        <path d="M 320 600 q 14 -4 28 0 q 14 4 28 0 q 14 -4 28 0 q 14 4 28 0" />
        <path d="M 720 460 q 14 -4 28 0 q 14 4 28 0 q 14 -4 28 0" />
        <path d="M 920 600 q 14 -4 28 0 q 14 4 28 0 q 14 -4 28 0" />
        <path d="M 460 720 q 14 -4 28 0 q 14 4 28 0 q 14 -4 28 0" />
      </g>

      {/* Tee box — on land, near bottom-left shore */}
      <g>
        <rect
          x="108"
          y="730"
          width="52"
          height="18"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <circle cx="134" cy="739" r="2" fill="currentColor" />
        <text
          x="172"
          y="743"
          fontFamily="var(--font-barlow-condensed), sans-serif"
          fontSize="10"
          letterSpacing="3"
          fill="currentColor"
        >
          TEE
        </text>
      </g>

      {/* Walking path from tee to bridge */}
      <path
        d="M 130 740 C 220 700, 360 660, 480 600"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeDasharray="3 3"
      />

      {/* Bridge — short rail lines connecting fairway to island */}
      <g stroke="currentColor" strokeWidth="0.9" fill="none">
        <line x1="500" y1="595" x2="600" y2="540" />
        <line x1="510" y1="608" x2="610" y2="554" />
        <line x1="520" y1="600" x2="528" y2="608" />
        <line x1="556" y1="572" x2="564" y2="580" />
        <line x1="592" y1="544" x2="600" y2="552" />
      </g>

      {/* ISLAND landmass holding the green */}
      <path
        d="M 600 540
           C 580 510, 600 480, 660 470
           C 740 458, 820 462, 880 480
           C 940 498, 960 530, 940 560
           C 920 590, 870 600, 800 600
           C 720 600, 640 580, 600 540 Z"
        fill="currentColor"
        fillOpacity="0.10"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      {/* Single greenside bunker on the island */}
      <ellipse
        cx="900"
        cy="580"
        rx="20"
        ry="10"
        transform="rotate(-15 900 580)"
        fill="currentColor"
        fillOpacity="0.28"
      />

      {/* GREEN — long narrow horizontal oval, distinct from Hole 1 round and Hole 2 kidney */}
      <ellipse
        cx="780"
        cy="525"
        rx="80"
        ry="32"
        transform="rotate(-6 780 525)"
        fill="currentColor"
        fillOpacity="0.18"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <ellipse
        cx="780"
        cy="525"
        rx="50"
        ry="18"
        transform="rotate(-6 780 525)"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeDasharray="1 3"
      />

      {/* Pin and flag */}
      <g stroke="currentColor" strokeWidth="1.1" fill="none">
        <line x1="800" y1="520" x2="800" y2="460" />
        <path d="M 800 460 L 832 468 L 800 482 Z" fill="currentColor" stroke="none" />
        <circle cx="800" cy="520" r="2.5" fill="currentColor" stroke="none" />
      </g>

      {/* Yardage callout */}
      <g
        fontFamily="var(--font-barlow-condensed), sans-serif"
        fontSize="10"
        letterSpacing="2"
        fill="currentColor"
      >
        <line x1="380" y1="690" x2="405" y2="680" stroke="currentColor" strokeWidth="0.8" />
        <text x="410" y="684">168 YDS · ALL CARRY</text>
      </g>

      {/* Lake label */}
      <text
        x="380"
        y="450"
        fontFamily="var(--font-playfair), serif"
        fontStyle="italic"
        fontSize="14"
        fill="currentColor"
        opacity="0.75"
      >
        the lake
      </text>

      {/* Scale ruler */}
      <g
        transform="translate(1000 820)"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="currentColor"
      >
        <line x1="0" y1="0" x2="120" y2="0" />
        <line x1="0" y1="-4" x2="0" y2="4" />
        <line x1="60" y1="-3" x2="60" y2="3" />
        <line x1="120" y1="-4" x2="120" y2="4" />
        <text x="0" y="20" fontFamily="var(--font-barlow-condensed), sans-serif" fontSize="9" letterSpacing="2">
          0
        </text>
        <text x="48" y="20" fontFamily="var(--font-barlow-condensed), sans-serif" fontSize="9" letterSpacing="2">
          50
        </text>
        <text x="100" y="20" fontFamily="var(--font-barlow-condensed), sans-serif" fontSize="9" letterSpacing="2">
          100Y
        </text>
      </g>
    </svg>
  );
}

interface Tier {
  name: string;
  price: string;
  altPrice?: string;
  hours?: string;
  perks: string[];
  highlight?: boolean;
}

const tiers: Tier[] = [
  {
    name: "Birdie",
    price: "$179/mo",
    altPrice: "12-month · or $199/mo month-to-month",
    perks: [
      "60 minutes free per day (Mon–Fri)",
      "10% off merchandise",
      "Exclusive member specials on food & drinks",
    ],
  },
  {
    name: "Eagle",
    price: "$299/mo",
    hours: "15 hrs/month (Oct–Apr)",
    perks: [
      "Unlimited play (May–Sept)",
      "Club storage + 4 guest passes/month",
      "15% off merchandise",
      "Exclusive member specials on food & drinks",
    ],
    highlight: true,
  },
  {
    name: "Corporate",
    price: "$7,000/yr",
    hours: "20 hrs/month (Oct–Apr)",
    perks: [
      "Unlimited play (May–Sept)",
      "Club storage",
      "5 account holders",
      "Branding included",
    ],
  },
];

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

function TierCard({ tier }: { tier: Tier }) {
  return (
    <div
      className={`flex flex-col h-full bg-white shadow-[10px_18px_36px_-16px_rgba(26,46,24,0.4),3px_5px_10px_-4px_rgba(26,46,24,0.18)] transition-[transform,box-shadow] duration-200 ease-out hover:shadow-[12px_22px_44px_-14px_rgba(26,46,24,0.48),3px_6px_12px_-4px_rgba(26,46,24,0.22)] hover:-translate-y-1 ${
        tier.highlight ? "lg:-translate-y-3 lg:hover:-translate-y-4" : ""
      }`}
    >
      <div className="bg-brand-green-dark text-text-light px-6 py-7 text-center relative">
        {tier.highlight && (
          <span className="eyebrow absolute top-3 right-4 text-[10px] tracking-[0.2em] text-brand-accent">
            Most Popular
          </span>
        )}
        <p className="eyebrow text-brand-accent text-xs tracking-[0.2em]">
          {tier.name} Membership
        </p>
        <p className="font-playfair text-4xl md:text-5xl text-text-light mt-2 leading-none">
          {tier.price}
        </p>
        {tier.hours && (
          <p className="font-barlow text-text-light/75 text-sm mt-3">{tier.hours}</p>
        )}
        {tier.altPrice && (
          <p className="font-barlow text-text-light/75 text-xs mt-3 leading-snug">
            {tier.altPrice}
          </p>
        )}
      </div>

      <ul className="flex-1 flex flex-col gap-4 px-6 py-7">
        {tier.perks.map((perk) => (
          <li
            key={perk}
            className="flex items-start gap-3 font-barlow text-text-dark text-sm leading-[1.55]"
          >
            <CheckIcon />
            <span>{perk}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MembershipsPreview() {
  return (
    <section className="relative bg-bg-off py-24 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.14]">
        <Hole3Motif />
      </div>
      <PaperTexture />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <FadeUp>
            <p className="eyebrow text-brand-accent text-sm mb-3">Memberships</p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <span aria-hidden="true" className="block h-px w-16 bg-brand-accent mx-auto mb-6" />
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-playfair font-normal text-4xl md:text-6xl text-text-dark leading-[1.1] mb-6">
              Make ParT Barn your local.
            </h2>
          </FadeUp>
          <FadeUp delay={0.18}>
            <p className="font-barlow text-text-dark/85 text-base md:text-lg leading-[1.7] max-w-2xl mx-auto">
              Members get the bay first. Lower rates, priority on weekends, seats at
              quarterly tournaments, and the kind of weeknights you don&apos;t want to miss.
            </p>
          </FadeUp>
        </div>

        {/* Three tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14 items-stretch">
          {tiers.map((tier, i) => (
            <FadeUp key={tier.name} delay={0.1 + i * 0.08}>
              <TierCard tier={tier} />
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/pricing" variant="primary">
              View Memberships
            </Button>
            <a
              href="mailto:partbarn@hoari.com?subject=Membership%20inquiry"
              className="eyebrow text-text-dark/70 hover:text-brand-accent transition-colors text-xs"
            >
              Or talk to a member of the team →
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
