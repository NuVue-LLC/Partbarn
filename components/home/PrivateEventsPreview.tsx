import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";
import Button from "@/components/ui/Button";

const cards = [
  {
    eyebrow: "Corporate Outings",
    title: "Team nights that don't feel forced.",
    body: "Sales kickoffs, client entertainment, end-of-quarter wins. Bay tournaments, custom menus, full AV.",
    image: "/images/events/corporate.jpg",
    alt: "A long dining table set for a private group event at The ParT Barn",
    href: "/private-events#corporate",
  },
  {
    eyebrow: "Birthdays & Celebrations",
    title: "From quiet milestones to full takeovers.",
    body: "Milestone birthdays, bachelor and bachelorette parties — we build the night around your group.",
    image: "/images/gallery/cocktail.jpg",
    alt: "A signature cocktail at the green-lit bar at The ParT Barn",
    href: "/private-events#birthdays",
  },
  {
    eyebrow: "Holiday Parties",
    title: "Year-end nights worth remembering.",
    body: "Holiday gatherings, year-end celebrations, family parties. Bays reserved, custom menus, the kind of night you book again next December.",
    image: "/images/events/leagues.jpg",
    alt: "Simulator bays at The ParT Barn set up for a private holiday gathering",
    href: "/private-events#holiday",
  },
];

export default function PrivateEventsPreview() {
  return (
    <section className="bg-bg-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeUp>
            <p className="eyebrow text-brand-accent text-sm mb-5">Private Events</p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="font-playfair font-normal text-4xl md:text-6xl text-text-dark leading-[1.1] mb-6">
              Host 8 or host 220.
            </h2>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="font-barlow text-text-dark/85 text-base md:text-lg leading-[1.7] max-w-2xl mx-auto">
              Corporate nights the team actually wants to go to. Birthdays, bachelor and
              bachelorette parties, holiday gatherings. Custom menus from the kitchen, bays
              reserved for your group, a full buyout if you want the place to yourself.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {cards.map((c, i) => (
            <FadeUp key={c.eyebrow} delay={i * 0.1}>
              <Link
                href={c.href}
                className="group block bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6 md:p-7">
                  <p className="eyebrow text-brand-accent text-[11px] mb-3">{c.eyebrow}</p>
                  <h3 className="font-playfair font-medium text-2xl text-text-dark leading-snug mb-3">
                    {c.title}
                  </h3>
                  <p className="font-barlow text-text-dark/75 text-sm leading-[1.65] mb-5">
                    {c.body}
                  </p>
                  <span className="eyebrow text-brand-accent text-xs inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <div className="text-center">
            <Button href="/private-events" variant="primary">
              Plan Your Event
            </Button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
