import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";
import Button from "@/components/ui/Button";

export default function MenuCustomization() {
  return (
    <section aria-labelledby="menu-customization" className="bg-bg-cream">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="flex items-center px-6 md:px-12 lg:px-16 xl:px-24 py-20 lg:py-24 order-2 lg:order-1">
          <div className="max-w-md">
            <FadeUp>
              <p className="eyebrow text-brand-accent text-sm mb-5">Menu Customization</p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2
                id="menu-customization"
                className="font-playfair font-normal text-4xl md:text-5xl text-text-dark leading-[1.1] mb-6"
              >
                Menus built around your night.
              </h2>
            </FadeUp>
            <FadeUp delay={0.16}>
              <p className="font-barlow text-text-dark/85 text-base md:text-lg leading-[1.7] mb-8">
                Every event menu is designed with the chef around your group&apos;s tastes,
                dietary needs, and the shape of your night. Passed apps and plated dinners for
                the formal side. Flatbreads and shareable boards for the casual side. Dietary
                restrictions — GF, vegetarian, allergens — handled without awkwardness.
              </p>
            </FadeUp>
            <FadeUp delay={0.22}>
              <Button
                href="/menus#events"
                variant="ghost"
                className="text-text-dark border-text-dark"
              >
                View Event Menu
              </Button>
            </FadeUp>
          </div>
        </div>

        <div className="relative min-h-[400px] lg:min-h-[640px] overflow-hidden order-1 lg:order-2">
          <div className="absolute inset-0 motion-safe:animate-ken-burns-soft">
            <Image
              src="/images/gallery/sliders.jpg"
              alt="Shareable sliders on a board at The ParT Barn"
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
