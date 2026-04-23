import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";
import Button from "@/components/ui/Button";

export default function DiningSplit() {
  return (
    <section className="bg-bg-cream">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="relative min-h-[400px] lg:min-h-[640px] overflow-hidden">
          <div className="absolute inset-0 motion-safe:animate-ken-burns-soft">
            <Image
              src="/images/dining/two-plates.jpg"
              alt="Sesame salmon and a peppercorn sirloin with mashed potatoes and broccolini at The ParT Barn"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex items-center px-6 md:px-12 lg:px-16 xl:px-24 py-20 lg:py-24">
          <div className="max-w-md">
            <FadeUp>
              <p className="eyebrow text-brand-accent text-sm mb-5">
                Dining at ParT Barn
              </p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="font-playfair font-normal text-4xl md:text-5xl text-text-dark leading-[1.1] mb-6">
                A real kitchen. A real bar. A real experience.
              </h2>
            </FadeUp>
            <FadeUp delay={0.16}>
              <p className="font-barlow text-text-dark/85 text-base md:text-lg leading-[1.7] mb-8">
                The menu runs wood-fired flatbreads, slow-smoked wings, a whiskey peppercorn
                sirloin that does the talking. The bar program leans into details — Calabrian
                chili honey, house-made pimento cheese, pecan-rubbed BBQ that takes three days
                to come together.
              </p>
            </FadeUp>
            <FadeUp delay={0.22}>
              <Button href="/menus" variant="ghost" className="text-text-dark border-text-dark">
                View Food Menu
              </Button>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
