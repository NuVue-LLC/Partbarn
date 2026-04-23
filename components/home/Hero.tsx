import BookingWidget from "./BookingWidget";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-headline"
      className="relative min-h-[85vh] md:min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/videos/PTB-Hero-Golf-Only.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: "rgba(15, 30, 13, 0.8)" }}
      />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-16 flex flex-col items-center text-center text-text-light">
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

        <div className="w-16 h-px bg-brand-accent mt-10 mb-48" />

        <BookingWidget />

        <div className="mt-12 flex flex-col items-center gap-2 text-text-light/70 motion-safe:animate-scroll-hint">
          <span className="eyebrow text-[10px]">Scroll</span>
          <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
            <path d="M8 2 V18 M2 12 L8 18 L14 12" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
