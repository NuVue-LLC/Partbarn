import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";

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

const menuImages: { src: string; alt: string; caption: string }[] = [
  {
    src: "/images/gallery/sliders.jpg",
    alt: "Shareable sliders on a wooden board at The ParT Barn",
    caption: "the passed",
  },
  {
    src: "/images/gallery/salmon.jpg",
    alt: "Plated salmon at The ParT Barn",
    caption: "the plated",
  },
  {
    src: "/images/gallery/two-plates-overhead.jpg",
    alt: "Shareable boards from overhead at The ParT Barn",
    caption: "the shareable",
  },
  {
    src: "/images/events/corporate.jpg",
    alt: "A long dining table set for a private corporate event at The ParT Barn",
    caption: "the room",
  },
];

export default function MenuCustomization() {
  return (
    <section
      aria-labelledby="menu-customization"
      className="relative bg-bg-cream py-20 md:py-24 overflow-hidden"
    >
      <PaperTexture />

      <div className="relative max-w-3xl mx-auto px-6 md:px-12 text-center">
        <FadeUp>
          <p className="eyebrow text-brand-accent text-sm mb-5">Menu Customization</p>
        </FadeUp>
        <FadeUp delay={0.08}>
          <div className="flex items-center justify-center gap-5">
            <span aria-hidden="true" className="block h-px w-10 md:w-14 bg-brand-accent" />
            <h2
              id="menu-customization"
              className="font-playfair font-normal text-text-dark text-3xl md:text-5xl leading-[1.1]"
            >
              Menus built around your night.
            </h2>
            <span aria-hidden="true" className="block h-px w-10 md:w-14 bg-brand-accent" />
          </div>
        </FadeUp>
        <FadeUp delay={0.16}>
          <p className="font-barlow text-text-dark/80 text-base md:text-lg leading-[1.8] max-w-2xl mx-auto mt-8 mb-10">
            Every event menu is designed with the chef around your group&apos;s tastes,
            dietary needs, and the shape of your night. Passed apps and plated
            dinners for the formal side. Flatbreads and shareable boards for the
            casual side. Dietary restrictions — GF, vegetarian, allergens —
            handled without awkwardness.
          </p>
        </FadeUp>
      </div>

      {/* Photo mosaic */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 mt-4 mb-12">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {menuImages.map((img, i) => (
            <FadeUp key={img.src} delay={0.05 + i * 0.08} as="li">
              <figure className="relative aspect-[4/5] overflow-hidden bg-black/10">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover motion-safe:transition-transform motion-safe:duration-700 hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"
                />
                <figcaption
                  className="absolute left-4 bottom-4 font-caveat text-brand-accent text-xl md:text-2xl leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                  style={{ transform: "rotate(-1.5deg)" }}
                >
                  {img.caption}
                </figcaption>
              </figure>
            </FadeUp>
          ))}
        </ul>
      </div>

      <div className="relative max-w-3xl mx-auto px-6 md:px-12 text-center">
        <FadeUp delay={0.24}>
          <a
            href="/menus#events"
            className="eyebrow text-brand-accent hover:text-text-dark transition-colors text-xs md:text-sm tracking-[0.25em] border-b border-brand-accent/40 pb-1 inline-block"
          >
            View Event Menu →
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
