import FadeUp from "@/components/ui/FadeUp";

const facts = [
  { eyebrow: "Capacity", value: "8–220", label: "Guests" },
  { eyebrow: "Bays", value: "6", label: "Golfzon Simulators" },
  { eyebrow: "Space", value: "Buyouts", label: "Full or Partial" },
  { eyebrow: "Catering", value: "Kitchen", label: "Custom Menus" },
  { eyebrow: "Bar", value: "Full Bar", label: "Drink Packages" },
  { eyebrow: "AV", value: "Screens", label: "Mic Available" },
];

export default function CapacityStrip() {
  return (
    <section
      aria-label="Private events capacity and amenities"
      className="bg-bg-cream border-y border-text-dark/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 py-10 md:py-12">
          {facts.map((f, i) => (
            <FadeUp
              key={f.eyebrow}
              as="li"
              delay={i * 0.06}
              className="relative text-center px-4 py-4 lg:py-0"
            >
              <p className="eyebrow text-brand-accent text-[10px] md:text-[11px] mb-2">
                {f.eyebrow}
              </p>
              <p className="font-playfair font-normal text-2xl md:text-3xl lg:text-4xl text-text-dark leading-none mb-2">
                {f.value}
              </p>
              <p className="font-barlow text-text-dark/70 text-xs md:text-sm leading-snug">
                {f.label}
              </p>
              {i < facts.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-14 bg-text-dark/10"
                />
              )}
            </FadeUp>
          ))}
        </ul>
      </div>
    </section>
  );
}
