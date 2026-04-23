import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      aria-labelledby="menus-hero-headline"
      className="relative bg-brand-green-dark text-text-light pt-36 md:pt-44 pb-20 md:pb-28"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <p className="eyebrow text-brand-accent text-sm mb-6">
          Food &amp; Drink
        </p>
        <h1
          id="menus-hero-headline"
          className="font-playfair font-light text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight"
        >
          The menu.
        </h1>
        <p className="font-barlow text-lg md:text-xl text-text-light/85 mt-6 max-w-2xl mx-auto">
          Wood-fired flatbreads, slow-smoked wings, sandwiches built for the back nine, and a full
          bar program. Served all day, every day we&apos;re open.
        </p>

        <div className="w-16 h-px bg-brand-accent mx-auto my-10" />

        <Button
          href="/menu.pdf"
          variant="ghost"
          className="text-text-light"
          external
        >
          Download Menu (PDF)
        </Button>
      </div>
    </section>
  );
}
