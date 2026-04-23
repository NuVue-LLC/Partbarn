import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import Button from "@/components/ui/Button";

const exp = [
  { href: "/golf-bays", label: "Golf Bays" },
  { href: "/menus", label: "Menus" },
  { href: "/leagues", label: "Leagues" },
  { href: "/private-events", label: "Private Events" },
];

const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${BUSINESS.address.street}, ${BUSINESS.address.city}, ${BUSINESS.address.state} ${BUSINESS.address.zip}`,
)}`;

function MapCard() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden border border-brand-accent/40 bg-[#14301a]">
      {/* Abstract map/contour background */}
      <svg
        aria-hidden="true"
        viewBox="0 0 300 300"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full text-brand-accent opacity-30"
      >
        {/* Road grid */}
        <g stroke="currentColor" strokeWidth="0.6" fill="none">
          <line x1="0" y1="90" x2="300" y2="70" />
          <line x1="0" y1="210" x2="300" y2="195" />
          <line x1="70" y1="0" x2="90" y2="300" />
          <line x1="220" y1="0" x2="240" y2="300" />
        </g>
        {/* Highway */}
        <path
          d="M 0 150 C 60 148, 120 155, 180 150 C 240 145, 280 150, 300 148"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          opacity="0.7"
        />
        {/* Lake */}
        <path
          d="M 30 230 C 20 220, 25 210, 40 208 C 60 206, 72 218, 68 234 C 64 248, 40 246, 30 230 Z"
          fill="currentColor"
          fillOpacity="0.18"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        {/* Contour blobs */}
        <g fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.5">
          <ellipse cx="220" cy="85" rx="38" ry="22" />
          <ellipse cx="220" cy="85" rx="24" ry="14" />
        </g>
      </svg>

      {/* Centered pin + address */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          className="text-brand-accent mb-3 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
          aria-hidden="true"
        >
          <path
            d="M12 2 C 7.5 2, 4 5.5, 4 10 C 4 15, 12 22, 12 22 C 12 22, 20 15, 20 10 C 20 5.5, 16.5 2, 12 2 Z"
            fill="currentColor"
            stroke="#1a2e18"
            strokeWidth="1"
          />
          <circle cx="12" cy="10" r="3" fill="#1a2e18" />
        </svg>
        <p className="font-playfair italic text-text-light text-sm md:text-base leading-tight">
          {BUSINESS.address.street}
        </p>
        <p className="font-barlow text-text-light/75 text-xs mt-1">
          {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
        </p>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-brand-green-dark text-text-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-14 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
        {/* Brand column */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <Link
            href="/"
            aria-label="The ParT Barn — Home"
            className="inline-flex items-center gap-4 group"
          >
            <svg
              width="64"
              height="64"
              viewBox="0 0 40 40"
              fill="none"
              aria-hidden="true"
              className="shrink-0"
            >
              <path
                d="M20 3 L36 13 V30 L20 37 L4 30 V13 Z"
                stroke="#f5f0e8"
                strokeWidth="1.4"
                fill="none"
              />
              <text
                x="20"
                y="24"
                textAnchor="middle"
                fontFamily="Playfair Display, Georgia, serif"
                fontSize="14"
                fontWeight="500"
                fill="#c9a84c"
              >
                PB
              </text>
            </svg>
            <span className="flex flex-col leading-none">
              <span className="font-playfair text-3xl md:text-4xl text-text-light tracking-wide">
                The ParT Barn
              </span>
              <span className="eyebrow text-xs text-text-light/70 mt-2">
                Lake Elmo · MN
              </span>
            </span>
          </Link>

          <p className="font-playfair italic text-xl text-text-light/90 leading-snug">
            {BUSINESS.tagline}
          </p>

          <address className="not-italic font-barlow text-sm leading-relaxed text-text-light/75">
            {BUSINESS.address.street}
            <br />
            {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
          </address>

          {/* Award block — gets its own space with gold accent */}
          <div className="border-l-2 border-brand-accent pl-4 py-1 max-w-md">
            <p className="eyebrow text-brand-accent text-[10px] tracking-[0.25em] mb-2">
              2026 Nominee
            </p>
            <p className="font-barlow text-text-light/80 text-sm leading-[1.6]">
              {BUSINESS.award}
            </p>
          </div>
        </div>

        {/* Experience column */}
        <div className="lg:col-span-2">
          <h2 className="eyebrow text-brand-accent text-xs mb-5">Experience</h2>
          <ul className="space-y-3">
            {exp.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-barlow text-text-light/85 hover:text-brand-accent transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Visit column */}
        <div className="lg:col-span-2">
          <h2 className="eyebrow text-brand-accent text-xs mb-5">Visit</h2>
          <ul className="space-y-3 font-barlow text-text-light/85 text-sm">
            <li>{BUSINESS.hours.weekday}</li>
            <li>{BUSINESS.hours.weekend}</li>
            <li>
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="hover:text-brand-accent transition-colors"
              >
                {BUSINESS.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="hover:text-brand-accent transition-colors"
              >
                {BUSINESS.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Map + Reserve column */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <div>
            <h2 className="eyebrow text-brand-accent text-xs mb-5">Find Us</h2>
            <MapCard />
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow text-brand-accent hover:text-text-light transition-colors text-[11px] tracking-[0.25em] mt-3 inline-block border-b border-brand-accent/40 pb-1"
            >
              Get Directions →
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <Button href="/book-a-bay" variant="primary">Book a Bay</Button>
            <Button href="/reserve-a-table" variant="ghost" className="text-text-light">
              Reserve a Table
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t border-text-light/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-7 flex flex-col md:flex-row items-center justify-between gap-5 text-xs text-text-light/60">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
            <p className="font-barlow">© 2026 The ParT Barn</p>
            <p className="font-barlow text-text-light/45">
              {BUSINESS.parent} property
            </p>
          </div>

          <div className="flex items-center gap-3">
            <SocialLink href={BUSINESS.social.facebook} label="Facebook">
              <path d="M13 22V12h3l.5-4H13V5.5C13 4.5 13.4 4 14.6 4H16V0.2C15.7.2 14.5 0 13.3 0 10.7 0 9 1.7 9 4.7V8H6v4h3v10h4z" />
            </SocialLink>
            <SocialLink href={BUSINESS.social.instagram} label="Instagram">
              <path d="M12 2.2c3.2 0 3.6 0 4.85.07 3.25.15 4.77 1.7 4.92 4.92.06 1.25.07 1.62.07 4.81s0 3.56-.07 4.81c-.15 3.22-1.66 4.77-4.92 4.92-1.25.06-1.62.07-4.85.07s-3.6 0-4.85-.07c-3.27-.15-4.77-1.7-4.92-4.92C2.16 15.6 2.15 15.23 2.15 12s0-3.56.07-4.81C2.37 3.97 3.88 2.42 7.15 2.27 8.4 2.21 8.77 2.2 12 2.2zm0 4.6a5.2 5.2 0 1 0 0 10.4 5.2 5.2 0 0 0 0-10.4zm0 8.6a3.4 3.4 0 1 1 0-6.8 3.4 3.4 0 0 1 0 6.8zm5.4-9.85a1.22 1.22 0 1 0 0 2.44 1.22 1.22 0 0 0 0-2.44z" />
            </SocialLink>
            <SocialLink href={BUSINESS.social.tiktok} label="TikTok">
              <path d="M19.6 6.3a4.8 4.8 0 0 1-3-1.05A4.8 4.8 0 0 1 14.85 2H11.7v13.4a2.55 2.55 0 1 1-2.55-2.55c.27 0 .53.04.78.12V9.78a5.7 5.7 0 1 0 4.92 5.62V8.7a7.93 7.93 0 0 0 4.75 1.55V7.07a4.85 4.85 0 0 1-0-.77z" />
            </SocialLink>
          </div>
        </div>
        <div className="text-center pb-4 text-[10px] text-text-light/35 tracking-wide">
          Designed &amp; built by NuVue Pro
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full border border-brand-accent/50 flex items-center justify-center text-brand-accent hover:bg-brand-accent hover:text-brand-green-dark transition-colors"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        {children}
      </svg>
    </a>
  );
}
