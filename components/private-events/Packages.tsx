import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";

type Package = {
  number: string;
  name: string;
  capacity: string;
  specs: { label: string; value: string }[];
  bestFor: string;
  price: string;
  priceUnit: string;
  highlighted?: boolean;
};

const packages: Package[] = [
  {
    number: "01",
    name: "The Huddle",
    capacity: "8–20 Guests",
    specs: [
      { label: "Bays", value: "2 Reserved" },
      { label: "Duration", value: "2 Hours" },
      { label: "Food & Drink", value: "Shared Apps + Drinks" },
    ],
    bestFor: "Small team dinners and birthday hangs.",
    price: "$X",
    priceUnit: "per guest",
  },
  {
    number: "02",
    name: "The Tournament",
    capacity: "20–60 Guests",
    specs: [
      { label: "Bays", value: "4 Reserved" },
      { label: "Format", value: "Tournament-Style Optional" },
      { label: "Food & Drink", value: "Custom Spread + Dedicated Bar" },
    ],
    bestFor: "Corporate nights and bachelor parties.",
    price: "$X",
    priceUnit: "per guest",
    highlighted: true,
  },
  {
    number: "03",
    name: "The Buyout",
    capacity: "60–220 Guests",
    specs: [
      { label: "Venue", value: "Full — All Six Bays" },
      { label: "Seating", value: "Dining Room + Bar" },
      { label: "Menu", value: "Custom Everything" },
    ],
    bestFor: "Large corporate events and holiday gatherings.",
    price: "$X",
    priceUnit: "minimum spend",
  },
];

export default function Packages() {
  return (
    <section
      aria-labelledby="packages"
      className="bg-bg-off py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <FadeUp>
            <p className="eyebrow text-brand-accent text-sm mb-5">Packages</p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2
              id="packages"
              className="font-playfair font-normal text-4xl md:text-6xl text-text-dark leading-[1.05] mb-6"
            >
              Packages.
            </h2>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="font-barlow text-text-dark/80 text-base md:text-lg leading-[1.7]">
              Starting points for common event sizes. Every event gets a custom quote based on
              your specifics, but these are the shape of what we build.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {packages.map((p, i) => (
            <FadeUp key={p.name} delay={i * 0.08} className={p.highlighted ? "lg:-my-3" : ""}>
              <PackageCard pkg={p} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function PackageCard({ pkg }: { pkg: Package }) {
  const isHighlighted = pkg.highlighted;

  const wrapperClass = isHighlighted
    ? "relative h-full bg-brand-green-dark text-text-light border-t-[3px] border-brand-accent shadow-xl transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl"
    : "relative h-full bg-bg-cream text-text-dark border-t border-text-dark/10 shadow-sm transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-lg";

  const dividerClass = isHighlighted ? "border-text-light/15" : "border-text-dark/10";
  const eyebrowMuted = isHighlighted ? "text-text-light/55" : "text-text-dark/55";
  const bodyMuted = isHighlighted ? "text-text-light/75" : "text-text-dark/75";
  const specLabelMuted = isHighlighted ? "text-text-light/55" : "text-text-dark/55";

  return (
    <article className={`${wrapperClass} flex flex-col`}>
      {isHighlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="eyebrow text-[10px] bg-brand-accent text-text-dark px-3 py-1.5 shadow-sm">
            Most Requested
          </span>
        </div>
      )}

      <div className="p-8 md:p-10 pb-6 md:pb-6 flex flex-col gap-5">
        <div className="flex items-baseline justify-between">
          <p className={`eyebrow text-[11px] ${eyebrowMuted}`}>Package {pkg.number}</p>
          <p className="eyebrow text-brand-accent text-[11px]">{pkg.capacity}</p>
        </div>
        <h3
          className={`font-playfair font-normal text-4xl md:text-5xl leading-[1.05] ${
            isHighlighted ? "text-text-light" : "text-text-dark"
          }`}
        >
          {pkg.name}
        </h3>
      </div>

      <ul className={`px-8 md:px-10 border-t ${dividerClass} flex-1`}>
        {pkg.specs.map((s) => (
          <li
            key={s.label}
            className={`flex items-baseline justify-between gap-4 py-4 border-b ${dividerClass} last:border-b-0`}
          >
            <span className={`eyebrow text-[10px] ${specLabelMuted} shrink-0`}>
              {s.label}
            </span>
            <span
              className={`font-barlow text-sm md:text-[15px] text-right ${
                isHighlighted ? "text-text-light" : "text-text-dark"
              }`}
            >
              {s.value}
            </span>
          </li>
        ))}
      </ul>

      <div className={`p-8 md:p-10 pt-6 md:pt-6 border-t ${dividerClass}`}>
        <p className={`font-barlow text-sm leading-[1.65] ${bodyMuted} mb-6`}>
          {pkg.bestFor}
        </p>

        <div className="flex items-baseline gap-2 mb-6">
          <span className={`eyebrow text-[10px] ${specLabelMuted}`}>Starting at</span>
        </div>
        <div className="flex items-baseline gap-3 mb-8">
          <span
            className={`font-playfair font-normal text-5xl md:text-6xl leading-none ${
              isHighlighted ? "text-brand-accent" : "text-text-dark"
            }`}
          >
            {pkg.price}
          </span>
          <span className={`font-barlow text-sm ${bodyMuted}`}>{pkg.priceUnit}</span>
        </div>

        <Link
          href="#plan"
          className={`inline-flex items-center gap-1 eyebrow text-xs ${
            isHighlighted ? "text-brand-accent" : "text-brand-accent"
          } hover:gap-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2`}
        >
          Start Planning <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
