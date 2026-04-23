import Image from "next/image";
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

interface PhotoProps {
  src: string;
  alt: string;
  caption: string;
  aspect: string;
  rotate: string;
  className?: string;
  sizes: string;
}

function CaptionedPhoto({
  src,
  alt,
  caption,
  aspect,
  rotate,
  className = "",
  sizes,
}: PhotoProps) {
  return (
    <figure className={className}>
      <div className="relative" style={{ transform: `rotate(${rotate})` }}>
        <div
          className={`relative w-full ${aspect} overflow-hidden`}
          style={{
            boxShadow:
              "10px 16px 36px -14px rgba(26,46,24,0.5), 3px 5px 10px -5px rgba(26,46,24,0.22)",
          }}
        >
          <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
        </div>
      </div>
      <figcaption className="eyebrow text-brand-accent text-[10px] mt-3 tracking-[0.2em] text-center">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function DiningSplit() {
  return (
    <section className="relative bg-bg-cream py-32 md:py-40 overflow-hidden">
      <PaperTexture />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Three-photo editorial cluster */}
          <FadeUp delay={0.1} className="lg:col-span-7">
            <div className="grid grid-cols-12 gap-4 md:gap-6 items-end">
              {/* Dominant left photo: The Kitchen */}
              <CaptionedPhoto
                src="/images/dining/two-plates.jpg"
                alt="Sesame salmon and a peppercorn sirloin with mashed potatoes and broccolini at The ParT Barn"
                caption="The Kitchen"
                aspect="aspect-[4/5]"
                rotate="-1.5deg"
                sizes="(min-width: 1024px) 30vw, 90vw"
                className="col-span-12 sm:col-span-7"
              />

              {/* Right column: two stacked smaller photos */}
              <div className="col-span-12 sm:col-span-5 flex flex-col gap-6 md:gap-8 sm:pt-10">
                <CaptionedPhoto
                  src="/images/gallery/cocktail.jpg"
                  alt="A signature cocktail at the green-lit bar at The ParT Barn"
                  caption="The Bar"
                  aspect="aspect-square"
                  rotate="1.5deg"
                  sizes="(min-width: 1024px) 18vw, 70vw"
                />
                <CaptionedPhoto
                  src="/images/gallery/dining-wall.jpg"
                  alt="Dining tables and the framed photo wall lit in green at The ParT Barn"
                  caption="The Room"
                  aspect="aspect-[4/3]"
                  rotate="-1deg"
                  sizes="(min-width: 1024px) 18vw, 70vw"
                />
              </div>
            </div>
          </FadeUp>

          {/* Copy column */}
          <div className="lg:col-span-5 lg:pl-2 xl:pl-6">
            <FadeUp>
              <p className="eyebrow text-brand-accent text-sm mb-6">
                Dining at ParT Barn
              </p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <span aria-hidden="true" className="block h-px w-16 bg-brand-accent mb-6" />
            </FadeUp>
            <FadeUp delay={0.14}>
              <h2 className="font-playfair font-normal text-5xl md:text-6xl text-text-dark leading-[1.05] mb-6">
                A real kitchen. A real bar. A real experience.
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <span aria-hidden="true" className="block h-px w-16 bg-brand-accent mb-8" />
            </FadeUp>
            <FadeUp delay={0.26}>
              <p className="font-barlow text-text-dark/85 text-base md:text-lg leading-[1.7] mb-10 max-w-md">
                The menu runs wood-fired flatbreads, slow-smoked wings, a whiskey
                peppercorn sirloin that does the talking. The bar program leans into
                details — Calabrian chili honey, house-made pimento cheese,
                pecan-rubbed BBQ that takes three days to come together.
              </p>
            </FadeUp>
            <FadeUp delay={0.32}>
              <Button href="/menus" variant="primary">
                View Food Menu
              </Button>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
