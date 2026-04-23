import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";
import Button from "@/components/ui/Button";

export default function BaysSplit() {
  return (
    <section className="bg-brand-green-dark text-text-light">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="order-2 lg:order-1 flex items-center px-6 md:px-12 lg:px-16 xl:px-24 py-20 lg:py-24">
          <div className="max-w-md">
            <FadeUp>
              <p className="eyebrow text-brand-accent text-sm mb-5">
                Golfzon TwoVisionX
              </p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="font-playfair font-normal text-4xl md:text-5xl text-text-light leading-[1.1] mb-6">
                The course comes to you.
              </h2>
            </FadeUp>
            <FadeUp delay={0.16}>
              <p className="font-barlow text-text-light/85 text-base md:text-lg leading-[1.7] mb-8">
                Nine bays running Golfzon TwoVisionX — the same technology the pros practice on.
                Three hundred world-class courses in full 3D. Moving swing plates that simulate
                uphill, downhill, and sidehill lies. High-speed ball tracking, auto-tee,
                multiplayer modes. Up to six per bay. Food and drinks brought to you while you play.
              </p>
            </FadeUp>
            <FadeUp delay={0.22}>
              <Button href="/book-a-bay" variant="ghost" className="text-text-light border-text-light">
                Book a Bay
              </Button>
            </FadeUp>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative min-h-[400px] lg:min-h-[640px] overflow-hidden">
          <div className="absolute inset-0 motion-safe:animate-ken-burns-soft">
            <Image
              src="/images/bays/lounge.jpg"
              alt="A Golfzon TwoVisionX simulator bay at The ParT Barn with leather lounge seating and a championship course on screen"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
