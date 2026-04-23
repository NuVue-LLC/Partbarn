import FadeUp from "@/components/ui/FadeUp";

function PaperTexture() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.10] mix-blend-multiply"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='320' height='320'><filter id='p'><feTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.10  0 0 0 0 0.18  0 0 0 0 0.10  0 0 0 0.45 0'/></filter><rect width='100%' height='100%' filter='url(%23p)'/></svg>\")",
        backgroundSize: "320px 320px",
      }}
    />
  );
}

export default function BrandIntro() {
  return (
    <section className="relative bg-bg-cream py-20 md:py-24 overflow-hidden">
      <PaperTexture />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-gradient-to-b from-brand-green-dark/75 via-brand-green-dark/25 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent/45 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent/45 to-transparent"
      />

      <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
        <FadeUp>
          <span
            aria-hidden="true"
            className="block mx-auto h-px w-[72px] bg-brand-accent mb-8"
          />
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="eyebrow text-brand-accent text-sm">
            Welcome to ParT Barn
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <h2 className="font-playfair font-normal text-4xl md:text-6xl text-text-dark leading-[1.1] max-w-3xl mx-auto mt-10">
            A restaurant, a bar, and indoor golf — built for nights that go any direction.
          </h2>
        </FadeUp>

        <FadeUp delay={0.45}>
          <p className="font-barlow font-normal text-text-dark text-base md:text-lg leading-[1.7] max-w-2xl mx-auto mt-10">
            There&apos;s a real kitchen behind the bar. Nine Golfzon simulator bays
            in the back. Come for dinner, stay for a round, grab a seat at the bar
            — or do all three.
          </p>
        </FadeUp>

        <FadeUp delay={0.6}>
          <span
            aria-hidden="true"
            className="block mx-auto h-px w-[72px] bg-brand-accent mt-10"
          />
        </FadeUp>
      </div>
    </section>
  );
}
