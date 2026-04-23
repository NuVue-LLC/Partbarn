import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";
import Button from "@/components/ui/Button";
import { BUSINESS } from "@/lib/constants";

export const metadata = {
  title: "Reserve a Table | The ParT Barn",
  description:
    "Reserve a table at The ParT Barn, Lake Elmo MN. Dinner, drinks, the game on. Open seven nights a week.",
};

// ========== SHARED ==========

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

function DarkTexture() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-screen"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='320' height='320'><filter id='p'><feTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.96  0 0 0 0 0.94  0 0 0 0 0.91  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23p)'/></svg>\")",
        backgroundSize: "320px 320px",
      }}
    />
  );
}

// ========== HERO ==========

function ReserveATableHero() {
  return (
    <section
      aria-labelledby="reserve-a-table-hero-headline"
      className="relative min-h-[55vh] md:min-h-[60vh] w-full overflow-hidden flex flex-col"
    >
      <div className="absolute inset-0 z-0 motion-safe:animate-ken-burns">
        <Image
          src="/images/bar/main-bar.jpg"
          alt="Warmly lit main bar at The ParT Barn — the room filling up for dinner service"
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

      <div className="relative z-20 w-full flex-1 flex flex-col justify-center px-6 md:px-12 py-24 md:py-28 min-h-[55vh] md:min-h-[60vh]">
        <div className="max-w-4xl mx-auto w-full text-center">
          <FadeUp delay={0.1}>
            <p className="eyebrow text-brand-accent text-sm tracking-[0.25em] mb-4">
              Reservations
            </p>
          </FadeUp>
          <FadeUp delay={0.18}>
            <span
              aria-hidden="true"
              className="block h-px w-16 bg-brand-accent mx-auto mb-6"
            />
          </FadeUp>
          <FadeUp delay={0.25}>
            <h1
              id="reserve-a-table-hero-headline"
              className="font-playfair font-normal text-5xl md:text-7xl text-text-light leading-[1.05] mb-6"
            >
              Reserve your table.
            </h1>
          </FadeUp>
          <FadeUp delay={0.33}>
            <p className="font-barlow text-text-light/80 text-base md:text-lg leading-[1.7] max-w-2xl mx-auto">
              Dinner, drinks, the game on. No simulator required.
            </p>
          </FadeUp>
        </div>

        {/* Scroll indicator */}
        <div className="max-w-4xl mx-auto w-full text-center mt-10 hidden md:flex flex-col items-center gap-2 text-text-light/70 motion-safe:animate-scroll-hint">
          <span className="eyebrow text-[10px]">Scroll</span>
          <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
            <path
              d="M8 2 V18 M2 12 L8 18 L14 12"
              stroke="#c9a84c"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

// ========== BOOKING WIDGET ==========

function BookingWidgetSection() {
  return (
    <section
      aria-labelledby="booking-widget-heading"
      className="relative bg-bg-cream py-20 md:py-24 overflow-hidden"
    >
      <PaperTexture />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12 md:mb-14">
          <FadeUp>
            <p className="eyebrow text-brand-accent text-sm mb-5">Book Now</p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <div className="flex items-center justify-center gap-5">
              <span aria-hidden="true" className="block h-px w-12 md:w-16 bg-brand-accent" />
              <h2
                id="booking-widget-heading"
                className="font-playfair italic font-normal text-text-dark text-3xl md:text-5xl leading-none"
              >
                Pick your table.
              </h2>
              <span aria-hidden="true" className="block h-px w-12 md:w-16 bg-brand-accent" />
            </div>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="font-barlow text-text-dark/75 text-base md:text-lg leading-[1.7] max-w-xl mx-auto mt-6">
              Dining is open seven nights a week. Kitchen runs until close. Book
              up to 30 days in advance.
            </p>
          </FadeUp>
          <FadeUp delay={0.24}>
            <span
              aria-hidden="true"
              className="block h-px w-24 bg-brand-accent/60 mx-auto mt-8"
            />
          </FadeUp>
        </div>

        {/* SevenRooms embed container */}
        <FadeUp delay={0.3}>
          <div className="max-w-5xl mx-auto bg-bg-cream border border-brand-accent/60 p-6 md:p-12 min-h-[600px] flex items-center justify-center">
            {/*
              SevenRooms table reservation embed goes here. Replace this div
              with the actual <script> or <iframe> provided by SevenRooms during
              client onboarding. This embed should be configured for dining
              reservations specifically — separate from bay bookings.
            */}
            <div className="flex items-center justify-center min-h-[500px] w-full text-text-dark/60">
              <div className="text-center">
                <p className="font-barlow-condensed uppercase tracking-widest text-sm text-brand-accent mb-4">
                  SevenRooms Table Embed
                </p>
                <p className="font-playfair italic text-2xl text-text-dark">
                  Table reservation widget loads here.
                </p>
                <p className="font-barlow text-sm text-text-dark/60 mt-2">
                  Client embed code to be inserted during onboarding.
                </p>
              </div>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.38}>
          <p className="font-barlow text-text-dark/70 text-xs md:text-sm leading-[1.7] text-center mt-6 max-w-2xl mx-auto">
            Booking powered by SevenRooms. You&apos;ll receive a confirmation email
            once your reservation is complete.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

// ========== BEFORE YOU BOOK ==========

interface BookingNote {
  eyebrow: string;
  title: string;
  body: string;
}

const bookingNotes: BookingNote[] = [
  {
    eyebrow: "Kitchen Hours",
    title: "Open until close.",
    body: "Full kitchen runs until last call seven nights a week. Late-night menu available after 10pm.",
  },
  {
    eyebrow: "Party Size",
    title: "Two to twelve.",
    body: "Tables for two, booths for six, long tables for twelve. Larger groups — check private events.",
  },
  {
    eyebrow: "Walk-Ins Welcome",
    title: "No reservation needed at the bar.",
    body: "The bar always has seats. Dining room fills up on weekends — booking is smart if you want a specific time.",
  },
  {
    eyebrow: "Dress Code",
    title: "Come as you are.",
    body: "Jeans, sneakers, hats — all welcome. This isn't that kind of country club.",
  },
];

function BeforeYouBookSection() {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: "#1e3d1a" }}
    >
      <DarkTexture />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <FadeUp>
            <p className="eyebrow text-brand-accent text-sm mb-5">Before You Book</p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <div className="flex items-center justify-center gap-5">
              <span aria-hidden="true" className="block h-px w-12 md:w-16 bg-brand-accent" />
              <h2 className="font-playfair font-normal text-text-light text-3xl md:text-5xl leading-[1.1]">
                A few things to know.
              </h2>
              <span aria-hidden="true" className="block h-px w-12 md:w-16 bg-brand-accent" />
            </div>
          </FadeUp>
        </div>

        {/* 4-column pillar grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-0 relative">
          {bookingNotes.map((n, i) => (
            <FadeUp key={n.eyebrow} delay={0.05 + i * 0.08} as="li">
              <div className="relative md:px-6 text-center md:text-left">
                <p className="eyebrow text-brand-accent text-xs tracking-[0.25em] mb-4">
                  {n.eyebrow}
                </p>
                <h3 className="font-playfair italic font-normal text-text-light text-2xl md:text-3xl leading-[1.2] mb-5">
                  {n.title}
                </h3>
                <span
                  aria-hidden="true"
                  className="block h-px w-12 bg-brand-accent mb-5 mx-auto md:mx-0"
                />
                <p className="font-barlow text-text-light/80 text-base leading-[1.7]">
                  {n.body}
                </p>
                {i < bookingNotes.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-36 bg-brand-accent/30"
                  />
                )}
              </div>
            </FadeUp>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ========== WHAT TO EXPECT ==========

const experienceImages: { src: string; alt: string; caption: string }[] = [
  {
    src: "/images/gallery/cocktail.jpg",
    alt: "Signature cocktail on the bar at The ParT Barn",
    caption: "the bar",
  },
  {
    src: "/images/gallery/sliders.jpg",
    alt: "House sliders fresh from the kitchen",
    caption: "the kitchen",
  },
  {
    src: "/images/gallery/steak-portrait.jpg",
    alt: "Whiskey peppercorn sirloin plated and ready",
    caption: "the sirloin",
  },
  {
    src: "/images/gallery/bar-overhead.jpg",
    alt: "Dining room at The ParT Barn in full swing",
    caption: "the room",
  },
];

function WhatToExpectSection() {
  return (
    <section
      aria-labelledby="experience-heading"
      className="relative bg-bg-cream py-20 md:py-24 overflow-hidden"
    >
      <PaperTexture />

      <div className="relative max-w-3xl mx-auto px-6 md:px-12 text-center">
        <FadeUp>
          <p className="eyebrow text-brand-accent text-sm mb-5">The Experience</p>
        </FadeUp>
        <FadeUp delay={0.08}>
          <div className="flex items-center justify-center gap-5">
            <span aria-hidden="true" className="block h-px w-10 md:w-14 bg-brand-accent" />
            <h2
              id="experience-heading"
              className="font-playfair font-normal text-text-dark text-3xl md:text-5xl leading-[1.1]"
            >
              Real food, real bar, real night out.
            </h2>
            <span aria-hidden="true" className="block h-px w-10 md:w-14 bg-brand-accent" />
          </div>
        </FadeUp>
        <FadeUp delay={0.16}>
          <p className="font-barlow text-text-dark/80 text-base md:text-lg leading-[1.8] max-w-2xl mx-auto mt-8 mb-10">
            Wood-fired flatbreads. Whiskey peppercorn sirloin. Calabrian chili
            honey on everything worth putting it on. House-made pimento cheese.
            Pecan-rubbed barbecue. A full bar that takes cocktails seriously and
            pours them anyway.
          </p>
        </FadeUp>
      </div>

      {/* Photo mosaic */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 mt-4 mb-12">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {experienceImages.map((img, i) => (
            <FadeUp key={img.src} delay={0.05 + i * 0.08} as="li">
              <figure className="relative aspect-[4/5] overflow-hidden bg-black/10">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover motion-safe:transition-transform motion-safe:duration-700 hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"
                />
                <figcaption
                  className="absolute left-4 bottom-4 font-caveat text-brand-accent text-xl md:text-2xl leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                  style={{ transform: "rotate(-1.5deg)" }}
                >
                  {img.caption}
                </figcaption>
              </figure>
            </FadeUp>
          ))}
        </ul>
      </div>

      <div className="relative max-w-3xl mx-auto px-6 md:px-12 text-center">
        <FadeUp delay={0.24}>
          <a
            href="/menus"
            className="eyebrow text-brand-accent hover:text-text-dark transition-colors text-xs md:text-sm tracking-[0.25em] border-b border-brand-accent/40 pb-1 inline-block"
          >
            View Food Menu →
          </a>
        </FadeUp>
      </div>
    </section>
  );
}

// ========== SOMETHING BIGGER ==========

function SomethingBiggerSection() {
  return (
    <section
      aria-labelledby="bigger-heading"
      className="relative w-full min-h-[55vh] md:min-h-[60vh] overflow-hidden flex items-center justify-center"
    >
      <div className="absolute inset-0 z-0 motion-safe:animate-ken-burns">
        <Image
          src="/images/gallery/dining-wall.jpg"
          alt="The ParT Barn dining room set for a private group — warm wood, low light, full tables"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10"
        style={{ backgroundColor: "rgba(18, 36, 18, 0.74)" }}
      />

      <div className="relative z-20 max-w-3xl mx-auto px-6 md:px-12 py-20 md:py-24 text-center">
        <FadeUp>
          <p className="eyebrow text-brand-accent text-xs md:text-sm tracking-[0.25em] mb-5">
            Larger Groups
          </p>
        </FadeUp>
        <FadeUp delay={0.08}>
          <div className="flex items-center justify-center gap-4 md:gap-5 mb-6">
            <span aria-hidden="true" className="block h-px w-10 md:w-14 bg-brand-accent" />
            <h2
              id="bigger-heading"
              className="font-playfair font-normal text-text-light text-4xl md:text-5xl lg:text-6xl leading-[1.05]"
            >
              Private dining?
            </h2>
            <span aria-hidden="true" className="block h-px w-10 md:w-14 bg-brand-accent" />
          </div>
        </FadeUp>
        <FadeUp delay={0.18}>
          <p className="font-barlow text-text-light/85 text-base md:text-lg leading-[1.75] max-w-xl mx-auto mb-6">
            Rehearsal dinners. Corporate entertaining. Milestone celebrations.
            Full or partial buyouts of the dining room available for groups of
            twelve and up.
          </p>
        </FadeUp>
        <FadeUp delay={0.26}>
          <p
            className="font-caveat text-brand-accent text-2xl md:text-4xl leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] mb-8"
            style={{ transform: "rotate(-1.5deg)" }}
          >
            your night, your room, our kitchen.
          </p>
        </FadeUp>
        <FadeUp delay={0.34}>
          <a
            href="/private-events"
            className="eyebrow text-brand-accent hover:text-text-light transition-colors text-xs md:text-sm tracking-[0.25em] border-b border-brand-accent/40 pb-1 inline-block"
          >
            See Private Events →
          </a>
        </FadeUp>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent/60 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent/60 to-transparent"
      />
    </section>
  );
}

// ========== TALK TO US ==========

function TalkToUsSection() {
  return (
    <section
      aria-labelledby="talk-heading"
      className="relative bg-bg-cream py-20 md:py-28 overflow-hidden"
    >
      <PaperTexture />

      <div className="relative max-w-3xl mx-auto px-6 md:px-12 text-center">
        <FadeUp>
          <p className="eyebrow text-brand-accent text-sm mb-5">Prefer To Call?</p>
        </FadeUp>
        <FadeUp delay={0.08}>
          <div className="flex items-center justify-center gap-5">
            <span aria-hidden="true" className="block h-px w-10 md:w-14 bg-brand-accent" />
            <h2
              id="talk-heading"
              className="font-playfair italic font-normal text-text-dark text-3xl md:text-5xl leading-[1.1]"
            >
              Some things are easier on the phone.
            </h2>
            <span aria-hidden="true" className="block h-px w-10 md:w-14 bg-brand-accent" />
          </div>
        </FadeUp>
        <FadeUp delay={0.16}>
          <p className="font-barlow text-text-dark/80 text-base md:text-lg leading-[1.8] mt-8 mb-8">
            Dietary needs, special occasions, large parties — give us a call
            and we&apos;ll take care of it.
          </p>
        </FadeUp>
        <FadeUp delay={0.24}>
          <p className="font-playfair italic text-text-dark text-lg md:text-xl leading-none mb-10 flex items-center justify-center gap-4 md:gap-6">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="hover:text-brand-accent transition-colors"
            >
              {BUSINESS.phone}
            </a>
            <span
              aria-hidden="true"
              className="block w-px h-5 md:h-6 bg-brand-accent/60"
            />
            <a
              href={`mailto:${BUSINESS.email}`}
              className="hover:text-brand-accent transition-colors"
            >
              {BUSINESS.email}
            </a>
          </p>
        </FadeUp>
        <FadeUp delay={0.32}>
          <Button
            href={`tel:${BUSINESS.phoneRaw}`}
            variant="primary"
            className="!px-6 !py-3 !text-xs"
          >
            Call Now
          </Button>
        </FadeUp>
      </div>
    </section>
  );
}

// ========== PAGE ==========

export default function ReserveATablePage() {
  return (
    <>
      <ReserveATableHero />
      <BookingWidgetSection />
      <BeforeYouBookSection />
      <WhatToExpectSection />
      <SomethingBiggerSection />
      <TalkToUsSection />
    </>
  );
}
