import Image from "next/image";
import BookingWidget from "./BookingWidget";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-headline"
      className="relative min-h-[85vh] md:min-h-screen w-full overflow-visible"
    >
      <div className="relative w-full min-h-[85vh] md:min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0 motion-safe:animate-ken-burns">
          <Image
            src="/images/bar/main-bar.jpg"
            alt="Interior of The ParT Barn — warm wood floor, green tufted bar stools, TVs over the bar"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div
          className="absolute inset-0 z-10"
          style={{ backgroundColor: "rgba(30, 61, 26, 0.55)" }}
        />

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24 md:pb-16 flex flex-col items-center text-center text-text-light min-h-[85vh] md:min-h-screen justify-center">
          <p className="eyebrow text-text-light/85 text-xs md:text-sm mb-6">
            Restaurant · Bar · Indoor Golf · Lake Elmo
          </p>
          <h1
            id="hero-headline"
            className="font-playfair font-light text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight"
          >
            Play. Eat. Compete.
          </h1>
          <p className="font-barlow text-lg md:text-xl text-text-light/85 mt-6 max-w-2xl">
            A little bit country club. A whole lot more fun.
          </p>

          <div className="w-16 h-px bg-brand-accent my-10" />

          {/* Mobile widget — sits inline within hero */}
          <div className="md:hidden w-full">
            <BookingWidget />
          </div>

          <div className="mt-12 hidden md:flex flex-col items-center gap-2 text-text-light/70 motion-safe:animate-scroll-hint">
            <span className="eyebrow text-[10px]">Scroll</span>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
              <path d="M8 2 V18 M2 12 L8 18 L14 12" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Desktop widget — overhangs the hero/intro seam */}
      <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 z-30 w-full max-w-4xl px-6 md:px-12 pb-6">
        <BookingWidget />
      </div>
    </section>
  );
}
