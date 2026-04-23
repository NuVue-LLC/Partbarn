import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";

export default function BrandIntro() {
  return (
    <section className="relative bg-bg-cream py-24 md:py-32 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-brand-accent/60" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-brand-green-dark/45 to-transparent pointer-events-none"
      />
      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <FadeUp>
              <p className="eyebrow text-brand-accent text-sm mb-5">
                Welcome to ParT Barn
              </p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="font-playfair font-normal text-4xl md:text-5xl lg:text-6xl text-text-dark leading-[1.1]">
                A restaurant, a bar, and indoor golf —{" "}
                <span className="italic text-brand-green">built for nights that go any direction.</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.18}>
              <p className="font-barlow text-text-dark/85 text-base md:text-lg leading-[1.7] mt-8 max-w-xl">
                There&apos;s a real kitchen behind the bar. Nine Golfzon simulator bays in the back.
                A food menu that takes itself seriously. Come for dinner, stay for a round, grab a
                seat at the bar — or do all three.
              </p>
            </FadeUp>
            <FadeUp delay={0.26}>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 eyebrow text-text-dark/55 text-[11px] md:text-xs">
                <span>Restaurant</span>
                <span className="block w-1 h-1 bg-brand-accent rotate-45" aria-hidden="true" />
                <span>Bar</span>
                <span className="block w-1 h-1 bg-brand-accent rotate-45" aria-hidden="true" />
                <span>9 Bays</span>
                <span className="block w-1 h-1 bg-brand-accent rotate-45" aria-hidden="true" />
                <span>Lake Elmo MN</span>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.15} className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/images/gallery/bar-stools.jpg"
                alt="The main bar at The ParT Barn — green tufted stools and warm wood floors"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
