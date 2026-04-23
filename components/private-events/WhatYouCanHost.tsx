import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";

type EventCard = {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  alt: string;
  span: string;
  aspect: string;
};

const cards: EventCard[] = [
  {
    eyebrow: "Corporate",
    title: "Corporate Events",
    body: "Sales kickoffs, client entertainment, end-of-quarter dinners. Bay tournaments with live leaderboards, custom menus from the kitchen, AV-ready space for remarks and slides.",
    image: "/images/events/corporate.jpg",
    alt: "A long table set for a corporate dinner at The ParT Barn",
    span: "md:col-span-2",
    aspect: "aspect-[16/9]",
  },
  {
    eyebrow: "Buyouts",
    title: "Full Venue Buyouts",
    body: "The whole place — dining room, bar, all six bays — closed to the public for your night. Available seven nights a week with a dedicated event lead from planning through close.",
    image: "/images/bar/main-bar.jpg",
    alt: "The main bar at The ParT Barn lit in green and gold",
    span: "md:col-span-1",
    aspect: "aspect-[4/5]",
  },
  {
    eyebrow: "Birthdays",
    title: "Birthday Parties",
    body: "Milestone birthdays, kids' parties before 5pm, groups with a bay or two of their own. Bring the cake — we'll plate it. Menus run from apps and flights to seated dinner.",
    image: "/images/events/birthdays.jpg",
    alt: "A birthday gathering around a table at The ParT Barn",
    span: "md:col-span-1",
    aspect: "aspect-[4/5]",
  },
  {
    eyebrow: "Bach Parties",
    title: "Bachelorette & Bachelor Parties",
    body: "A bay, a bottle, and a private corner of the bar. Signature cocktail flights, custom drink packages, and a kitchen that stays open later on Fridays and Saturdays.",
    image: "/images/gallery/cocktail.jpg",
    alt: "A signature cocktail at The ParT Barn",
    span: "md:col-span-1",
    aspect: "aspect-[4/5]",
  },
  {
    eyebrow: "Weddings",
    title: "Wedding-Related Events",
    body: "Rehearsal dinners, day-after brunches, bridal-party bay time. We coordinate with your planner, handle dietary restrictions with advance notice, and can section off the dining room for your group.",
    image: "/images/gallery/dining-wall.jpg",
    alt: "The dining room at The ParT Barn with warm wood and wainscoting",
    span: "md:col-span-1",
    aspect: "aspect-[4/5]",
  },
  {
    eyebrow: "Family",
    title: "Family Celebrations",
    body: "Graduations, anniversaries, reunions, retirement dinners. Round tables for 8–12, bay access for the kids and the in-laws, and a menu built for dietary needs across generations.",
    image: "/images/events/leagues.jpg",
    alt: "Simulator bays set up for a private group gathering at The ParT Barn",
    span: "md:col-span-3",
    aspect: "aspect-[21/9]",
  },
];

export default function WhatYouCanHost() {
  return (
    <section
      aria-labelledby="what-you-can-host"
      className="bg-bg-cream py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-14 md:mb-20">
          <FadeUp>
            <p className="eyebrow text-brand-accent text-sm mb-5">What You Can Host</p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2
              id="what-you-can-host"
              className="font-playfair font-normal text-4xl md:text-6xl text-text-dark leading-[1.05] mb-6"
            >
              Six ways to take over the Barn.
            </h2>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="font-barlow text-text-dark/80 text-base md:text-lg leading-[1.7]">
              Every event is shaped around your group. Here&apos;s the short list of what
              we&apos;re set up to run — tell us what you&apos;re planning and we&apos;ll take
              it from there.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {cards.map((c, i) => (
            <FadeUp key={c.title} delay={i * 0.08} className={c.span}>
              <article className="group relative h-full bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className={`relative ${c.aspect} overflow-hidden`}>
                  <Image
                    src={c.image}
                    alt={c.alt}
                    fill
                    sizes="(min-width: 768px) 66vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <p className="eyebrow text-brand-accent text-[11px] mb-3">{c.eyebrow}</p>
                  <h3 className="font-playfair font-medium text-2xl md:text-[28px] text-text-dark leading-snug mb-3">
                    {c.title}
                  </h3>
                  <p className="font-barlow text-text-dark/75 text-sm md:text-[15px] leading-[1.65] mb-6 flex-1">
                    {c.body}
                  </p>
                  <Link
                    href="#plan"
                    className="eyebrow text-brand-accent text-xs inline-flex items-center gap-1 group-hover:gap-2 transition-all self-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
                  >
                    Start Planning <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
