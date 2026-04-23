import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      aria-labelledby="menus-hero-headline"
      className="relative min-h-[60vh] md:min-h-[70vh] w-full overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%)" }}
      >
        <div className="relative h-full w-full motion-safe:animate-ken-burns-soft">
          <Image
            src="/images/menus/food.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-brand-green-dark"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
      >
        <div className="relative h-full w-full translate-x-[15%] -translate-y-[14%] motion-safe:animate-ken-burns-soft">
          <Image
            src="/images/menus/drink.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 z-10 bg-brand-green-dark/35"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-10 h-48 bg-gradient-to-b from-brand-green-dark/75 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-10 h-64 bg-gradient-to-t from-brand-green-dark/60 to-transparent"
      />

      <svg
        aria-hidden="true"
        className="absolute inset-0 z-20 h-full w-full pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <line
          x1="0"
          y1="0"
          x2="100"
          y2="100"
          stroke="#c9a84c"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      >
        <Image
          src="/images/menus/ptb-ball.png"
          alt=""
          width={324}
          height={312}
          className="h-20 w-auto md:h-28 drop-shadow-[0_6px_16px_rgba(0,0,0,0.45)]"
        />
      </div>

      <div className="relative z-30 w-full max-w-4xl mx-auto px-6 md:px-12 pt-24 md:pt-28 pb-12 md:pb-14 min-h-[60vh] md:min-h-[70vh] flex flex-col items-center justify-between text-center text-text-light">
        <div>
          <p className="eyebrow text-brand-accent text-xs md:text-sm mb-6">
            Food &amp; Drink
          </p>
          <h1
            id="menus-hero-headline"
            className="font-playfair font-light text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight"
          >
            The menu.
          </h1>
        </div>

        <div className="flex flex-col items-center">
          <p className="font-barlow text-base md:text-lg text-text-light/90 max-w-2xl">
            Wood-fired flatbreads, slow-smoked wings, sandwiches built for the back nine,
            and a full bar program.
          </p>
          <div className="w-16 h-px bg-brand-accent my-8" />
          <Button
            href="/menu.pdf"
            variant="ghost"
            className="text-text-light"
            external
          >
            Download Menu (PDF)
          </Button>
        </div>
      </div>
    </section>
  );
}
