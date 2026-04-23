import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      aria-labelledby="private-events-hero-headline"
      className="relative min-h-[60vh] md:min-h-[70vh] w-full flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 motion-safe:animate-ken-burns">
        <Image
          src="/images/events/corporate.jpg"
          alt="A long dining table set for a private group event at The ParT Barn"
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

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12 flex flex-col items-center text-center text-text-light">
        <p className="eyebrow text-text-light/85 text-xs md:text-sm mb-6">
          Private Events · Buyouts · Bay Tournaments
        </p>
        <h1
          id="private-events-hero-headline"
          className="font-playfair font-light text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight"
        >
          Host 8 or host 220.
        </h1>
        <p className="font-barlow text-lg md:text-xl text-text-light/85 mt-6 max-w-2xl">
          Full bar, full kitchen, six simulator bays, and a team that builds the night around
          your group. Corporate nights, birthdays, bachelorettes, holiday parties — if it&apos;s
          a celebration, it fits here.
        </p>

        <div className="w-16 h-px bg-brand-accent my-10" />

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button href="/private-events#plan" variant="primary">
            Plan Your Event
          </Button>
          <Button href="/menus#events" variant="ghost" className="text-text-light">
            View Event Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
