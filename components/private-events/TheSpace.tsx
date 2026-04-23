import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";

export default function TheSpace() {
  return (
    <section
      aria-labelledby="the-space"
      className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 motion-safe:animate-ken-burns-soft">
        <Image
          src="/images/bays/lounge.jpg"
          alt="The lounge and simulator bays at The ParT Barn lit in warm wood and green"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(26, 46, 24, 0.85) 0%, rgba(26, 46, 24, 0.75) 45%, rgba(26, 46, 24, 0.35) 100%)",
        }}
      />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-2xl text-text-light">
          <FadeUp>
            <p className="eyebrow text-brand-accent text-sm mb-5">The Space</p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2
              id="the-space"
              className="font-playfair font-light text-5xl md:text-7xl text-text-light leading-[1.05] tracking-tight mb-8"
            >
              The venue.
            </h2>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="font-barlow text-text-light/90 text-lg md:text-xl leading-[1.7] mb-6">
              5,000 square feet across the dining room, the bar, and the six simulator bays —
              all configurable. Host the whole space for 220. Take half for 80. Reserve a
              private section for 30. The team will help you shape it to fit your night.
            </p>
          </FadeUp>
          <FadeUp delay={0.24}>
            <div className="w-16 h-px bg-brand-accent my-8" />
          </FadeUp>
          <FadeUp delay={0.28}>
            <p className="font-barlow text-text-light/75 text-base md:text-lg leading-[1.7]">
              Two large TVs, four simulator screens, a full sound system, and a mic if you
              need one for a toast or a speech.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
