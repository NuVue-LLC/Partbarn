import FadeUp from "@/components/ui/FadeUp";

type Testimonial = {
  quote: string;
  name: string;
  event: string;
  featured?: boolean;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "We did a sales kickoff for 48 — bay tournament the first hour, plated dinner after. The leaderboard on the screens got competitive fast, and the kitchen nailed a split menu with three dietary requests. Our sales lead asked me to book it again before we’d even wrapped up the night.",
    name: "Sarah M.",
    event: "Corporate Sales Kickoff · 48 guests",
    featured: true,
  },
  {
    quote:
      "Booked a bay and half the dining room for my wife’s 40th. They plated the cake, ran a custom cocktail for her, and kept the bays open an extra hour when people didn’t want to leave. Not a single hiccup.",
    name: "Jared T.",
    event: "40th Birthday · 22 guests",
  },
  {
    quote:
      "Full buyout for our holiday party, 180 people. The AV worked, the mic worked, the food came out hot and on time. That’s rarer than it should be at that scale.",
    name: "Kelly O.",
    event: "Company Holiday Party · 180 guests",
  },
];

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials"
      className="bg-brand-green-dark text-text-light py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
          <FadeUp>
            <p className="eyebrow text-brand-accent text-sm mb-5">What Groups Say</p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2
              id="testimonials"
              className="font-playfair font-normal text-4xl md:text-6xl text-text-light leading-[1.05]"
            >
              Notes from the floor.
            </h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <FadeUp className="lg:col-span-3">
            <TestimonialCard t={testimonials[0]} />
          </FadeUp>
          <FadeUp delay={0.1} className="lg:col-span-2">
            <TestimonialCard t={testimonials[1]} />
          </FadeUp>
          <FadeUp delay={0.18} className="lg:col-span-1">
            <TestimonialCard t={testimonials[2]} />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure
      className={`h-full bg-brand-green text-text-light border-t-[3px] border-brand-accent shadow-lg p-8 md:p-10 flex flex-col ${
        t.featured ? "lg:p-14" : ""
      }`}
    >
      <span
        aria-hidden="true"
        className={`font-playfair text-brand-accent/60 leading-none mb-4 ${
          t.featured ? "text-7xl md:text-8xl" : "text-6xl"
        }`}
      >
        &ldquo;
      </span>
      <blockquote
        className={`font-playfair font-normal text-text-light leading-[1.35] flex-1 ${
          t.featured
            ? "text-2xl md:text-3xl lg:text-[32px]"
            : "text-xl md:text-2xl"
        }`}
      >
        {t.quote}
      </blockquote>
      <figcaption className="mt-8 pt-6 border-t border-text-light/15">
        <p className="font-caveat text-brand-accent text-2xl md:text-3xl leading-none mb-2">
          {t.name}
        </p>
        <p className="eyebrow text-text-light/70 text-[11px]">{t.event}</p>
      </figcaption>
    </figure>
  );
}
