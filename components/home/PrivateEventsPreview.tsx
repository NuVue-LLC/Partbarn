import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";
import Button from "@/components/ui/Button";

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

interface Block {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  alt: string;
  aspect: string;
  rotate: string;
  colSpan: string;
  offset: string;
}

const blocks: Block[] = [
  {
    eyebrow: "Corporate Outings",
    title: "Team nights that don't feel forced.",
    body: "Sales kickoffs, client entertainment, end-of-quarter wins. Bay tournaments, custom menus, full AV.",
    image: "/images/events/corporate.jpg",
    alt: "A long dining table set for a private group event at The ParT Barn",
    aspect: "aspect-[4/3]",
    rotate: "-1.5deg",
    colSpan: "lg:col-span-4",
    offset: "",
  },
  {
    eyebrow: "Birthdays & Celebrations",
    title: "From quiet milestones to full takeovers.",
    body: "Milestone birthdays, bachelor and bachelorette parties — we build the night around your group.",
    image: "/images/events/birthdays.jpg",
    alt: "A signature martini garnished with a mini golf ball at The ParT Barn bar",
    aspect: "aspect-square",
    rotate: "1.5deg",
    colSpan: "lg:col-span-4",
    offset: "",
  },
  {
    eyebrow: "Holiday Parties",
    title: "Year-end nights worth remembering.",
    body: "Holiday gatherings, year-end celebrations, family parties. Bays reserved, custom menus, the kind of night you book again next December.",
    image: "/images/events/leagues.jpg",
    alt: "Simulator bays at The ParT Barn set up for a private holiday gathering",
    aspect: "aspect-[4/3]",
    rotate: "-1deg",
    colSpan: "lg:col-span-4",
    offset: "",
  },
];

export default function PrivateEventsPreview() {
  return (
    <section className="relative bg-bg-cream py-20 md:py-24 overflow-hidden">
      <PaperTexture />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-10">
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
              Corporate nights the team actually wants to go to. Birthdays, bachelor
              and bachelorette parties, holiday gatherings. Custom menus from the
              kitchen, bays reserved for your group, a full buyout if you want the
              place to yourself.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 mb-12 items-start">
          {blocks.map((b, i) => (
            <FadeUp
              key={b.eyebrow}
              delay={i * 0.1}
              className={`${b.colSpan} ${b.offset}`}
            >
              <article className="flex flex-col items-center text-center">
                <div
                  className="relative w-full max-w-[260px] mb-4"
                  style={{ transform: `rotate(${b.rotate})` }}
                >
                  <div
                    className={`relative w-full ${b.aspect} overflow-hidden`}
                    style={{
                      boxShadow:
                        "8px 12px 28px -12px rgba(26,46,24,0.45), 2px 4px 8px -4px rgba(26,46,24,0.22)",
                    }}
                  >
                    <Image
                      src={b.image}
                      alt={b.alt}
                      fill
                      sizes="(min-width: 1024px) 22vw, 80vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <p className="eyebrow text-brand-accent text-[11px] mb-2">
                  {b.eyebrow}
                </p>
                <h3 className="font-playfair font-normal text-xl md:text-2xl text-text-dark leading-snug mb-2 max-w-[260px]">
                  {b.title}
                </h3>
                <p className="font-barlow text-text-dark/80 text-sm leading-[1.6] max-w-[260px]">
                  {b.body}
                </p>
              </article>
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
