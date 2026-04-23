import FadeUp from "@/components/ui/FadeUp";

const facts = [
  { value: "8–220", label: "Guest Capacity" },
  { value: "9", label: "Simulator Bays" },
  { value: "Full", label: "Private Buyouts" },
  { value: "Custom", label: "Kitchen & Bar" },
];

export default function CapacityStrip() {
  return (
    <section
      aria-label="Private events capacity and amenities"
      className="bg-brand-green-dark text-text-light py-20 border-t border-text-light/8"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-0 relative">
          {facts.map((f, i) => (
            <FadeUp
              key={f.label}
              as="li"
              delay={i * 0.15}
              className="relative text-center md:px-6"
            >
              <p className="font-playfair font-normal text-5xl md:text-6xl lg:text-7xl text-text-light leading-none mb-3">
                {f.value}
              </p>
              <p className="eyebrow text-text-light/70 text-[11px] md:text-xs tracking-[0.2em]">
                {f.label}
              </p>
              {i < facts.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-brand-accent/30"
                />
              )}
            </FadeUp>
          ))}
        </ul>
      </div>
    </section>
  );
}
