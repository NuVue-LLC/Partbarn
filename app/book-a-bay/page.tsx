import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";
import Button from "@/components/ui/Button";
import { BUSINESS } from "@/lib/constants";

export const metadata = {
  title: "Book a Bay | The ParT Barn",
  description:
    "Reserve a Golfzon TwoVisionX simulator bay at The ParT Barn, Lake Elmo MN. Nine bays, three hundred courses, open seven nights a week.",
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

function BookABayHero() {
  return (
    <section
      aria-labelledby="book-a-bay-hero-headline"
      className="relative min-h-[55vh] md:min-h-[60vh] w-full overflow-hidden flex flex-col"
    >
      <div className="absolute inset-0 z-0 motion-safe:animate-ken-burns">
        <Image
          src="/images/bays/lounge.jpg"
          alt="Atmospheric interior of a Golfzon simulator bay at The ParT Barn — screen glowing, warm lighting"
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
              id="book-a-bay-hero-headline"
              className="font-playfair font-normal text-5xl md:text-7xl text-text-light leading-[1.05] mb-6"
            >
              Book your bay.
            </h1>
          </FadeUp>
          <FadeUp delay={0.33}>
            <p className="font-barlow text-text-light/80 text-base md:text-lg leading-[1.7] max-w-2xl mx-auto">
              Nine bays. Three hundred courses. Open seven nights a week. Pick your
              time below.
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
                Pick your time.
              </h2>
              <span aria-hidden="true" className="block h-px w-12 md:w-16 bg-brand-accent" />
            </div>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="font-barlow text-text-dark/75 text-base md:text-lg leading-[1.7] max-w-xl mx-auto mt-6">
              Bays run Monday through Sunday. Book up to 30 days in advance. Most
              groups book two hours.
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
              SevenRooms bay booking embed goes here. Replace this div with the
              actual <script> or <iframe> provided by SevenRooms during client
              onboarding. This embed should be configured for bay bookings
              specifically.
            */}
            <div className="flex items-center justify-center min-h-[500px] w-full text-text-dark/60">
              <div className="text-center">
                <p className="font-barlow-condensed uppercase tracking-widest text-sm text-brand-accent mb-4">
                  SevenRooms Bay Embed
                </p>
                <p className="font-playfair italic text-2xl text-text-dark">
                  Bay booking widget loads here.
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
    eyebrow: "Session Length",
    title: "One hour minimum.",
    body: "Bays book in one-hour increments. Most groups book two — enough for a full round of nine plus food and a drink.",
  },
  {
    eyebrow: "Party Size",
    title: "Up to six per bay.",
    body: "Each bay fits six comfortably. Bigger groups? Book multiple bays or ask about a partial buyout.",
  },
  {
    eyebrow: "Bring Your Own Or Rent",
    title: "Clubs optional.",
    body: "Bring your own set or rent a full Callaway set for $30. No clubs needed — we've got you covered.",
  },
  {
    eyebrow: "Cancellations",
    title: "24 hours, no charge.",
    body: "Cancel or change your booking up to 24 hours before. After that, we charge the bay fee.",
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

// ========== RATES REMINDER ==========

interface Rate {
  label: string;
  price: string;
  unit: string;
  note: string;
}

const rates: Rate[] = [
  { label: "Summer", price: "$50", unit: "/hr", note: "May – September" },
  {
    label: "Off-Peak",
    price: "$55",
    unit: "/hr",
    note: "Oct – Apr · Mon–Thu before 4pm",
  },
  {
    label: "Peak",
    price: "$65",
    unit: "/hr",
    note: "Oct – Apr · Evenings, weekends, holidays",
  },
];

function RatesReminderSection() {
  return (
    <section
      className="relative py-10 md:py-12 overflow-hidden border-y border-brand-accent/25"
      style={{ backgroundColor: "#14301a" }}
    >
      <DarkTexture />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent/60 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent/60 to-transparent"
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
          {/* Left label */}
          <FadeUp className="text-center lg:text-left shrink-0">
            <p className="eyebrow text-brand-accent text-[10px] md:text-xs tracking-[0.25em] mb-2">
              Rates
            </p>
            <p className="font-playfair italic font-normal text-text-light text-xl md:text-2xl leading-none">
              Pay by the hour.
            </p>
            <p
              className="font-caveat text-brand-accent text-lg md:text-xl leading-none mt-2"
              style={{ transform: "rotate(-1.5deg)" }}
            >
              per bay — not per person.
            </p>
          </FadeUp>

          {/* Center rates ribbon */}
          <FadeUp delay={0.1} className="flex-1 w-full lg:w-auto">
            <ul className="grid grid-cols-3 relative">
              {rates.map((r, i) => (
                <li key={r.label} className="relative text-center px-2 md:px-4">
                  <p className="eyebrow text-brand-accent text-[10px] tracking-[0.25em] mb-2">
                    {r.label}
                  </p>
                  <p className="font-playfair font-normal text-text-light text-3xl md:text-4xl leading-none mb-1.5">
                    {r.price}
                    <span className="font-barlow text-text-light/55 text-sm md:text-base ml-1 align-baseline">
                      {r.unit}
                    </span>
                  </p>
                  <p className="font-barlow text-text-light/65 text-[10px] md:text-[11px] leading-[1.4] max-w-[160px] mx-auto">
                    {r.note}
                  </p>
                  {i < rates.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 md:h-20 bg-brand-accent/30"
                    />
                  )}
                </li>
              ))}
            </ul>
          </FadeUp>

          {/* Right link */}
          <FadeUp delay={0.2} className="shrink-0">
            <a
              href="/pricing"
              className="eyebrow text-brand-accent hover:text-text-light transition-colors text-[10px] md:text-xs tracking-[0.25em] whitespace-nowrap border-b border-brand-accent/40 pb-1"
            >
              See Membership Tiers →
            </a>
          </FadeUp>
        </div>
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
          src="/images/events/corporate.jpg"
          alt="Private event at The ParT Barn — the full dining room and bar set for a group"
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
              Eight or more?
            </h2>
            <span aria-hidden="true" className="block h-px w-10 md:w-14 bg-brand-accent" />
          </div>
        </FadeUp>
        <FadeUp delay={0.18}>
          <p className="font-barlow text-text-light/85 text-base md:text-lg leading-[1.75] max-w-xl mx-auto mb-6">
            Corporate nights. Milestone birthdays. Bachelor parties. Full buyouts.
            Our private events team handles everything from menu to simulator
            flights.
          </p>
        </FadeUp>
        <FadeUp delay={0.26}>
          <p
            className="font-caveat text-brand-accent text-2xl md:text-4xl leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] mb-8"
            style={{ transform: "rotate(-1.5deg)" }}
          >
            buy out the house. we handle the rest.
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
            Special requests, tricky timing, questions about the setup — a quick
            call sorts it out fast.
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

export default function BookABayPage() {
  return (
    <>
      <BookABayHero />
      <BookingWidgetSection />
      <BeforeYouBookSection />
      <RatesReminderSection />
      <SomethingBiggerSection />
      <TalkToUsSection />
    </>
  );
}
