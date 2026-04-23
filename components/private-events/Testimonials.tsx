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
      className="bg-brand-green-dark text-text-light py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
          <FadeUp>
            <p className="eyebrow text-brand-accent text-xs mb-4">What Groups Say</p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2
              id="testimonials"
              className="font-playfair font-normal text-3xl md:text-5xl text-text-light leading-[1.05]"
            >
              Notes from the floor.
            </h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
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
      className={`h-full bg-brand-green text-text-light border-t-[3px] border-brand-accent shadow-lg p-6 md:p-8 flex flex-col ${
        t.featured ? "lg:p-10" : ""
      }`}
    >
      <span
        aria-hidden="true"
        className={`font-playfair text-brand-accent/60 leading-none mb-3 ${
          t.featured ? "text-5xl md:text-6xl" : "text-4xl"
        }`}
      >
        &ldquo;
      </span>
      <blockquote
        className={`font-playfair font-normal text-text-light leading-[1.4] flex-1 ${
          t.featured
            ? "text-lg md:text-xl lg:text-2xl"
            : "text-base md:text-lg"
        }`}
      >
        {t.quote}
      </blockquote>
      <figcaption className="mt-6 pt-4 border-t border-text-light/15">
        <p className="font-caveat text-brand-accent text-xl md:text-2xl leading-none mb-1.5">
          {t.name}
        </p>
        <p className="eyebrow text-text-light/70 text-[10px]">{t.event}</p>
      </figcaption>
    </figure>
  );
}
