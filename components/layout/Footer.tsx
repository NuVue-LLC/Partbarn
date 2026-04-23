import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import Logo from "./Logo";
import Button from "@/components/ui/Button";

const exp = [
  { href: "/golf-bays", label: "Golf Bays" },
  { href: "/menus", label: "Menus" },
  { href: "/leagues", label: "Leagues" },
  { href: "/private-events", label: "Private Events" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-green-dark text-text-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-5">
          <Logo variant="white" />
          <p className="font-playfair text-2xl leading-snug">{BUSINESS.tagline}</p>
          <address className="not-italic text-sm leading-relaxed text-text-light/80 font-barlow">
            {BUSINESS.address.street}
            <br />
            {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
          </address>
          <p className="text-xs text-text-light/60 leading-relaxed font-barlow">
            {BUSINESS.award}
          </p>
        </div>

        <div>
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

        <div>
          <h2 className="eyebrow text-brand-accent text-xs mb-5">Visit</h2>
          <ul className="space-y-3 font-barlow text-text-light/85 text-sm">
            <li>{BUSINESS.address.street}</li>
            <li>
              {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
            </li>
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

        <div>
          <h2 className="eyebrow text-brand-accent text-xs mb-5">Reserve</h2>
          <div className="flex flex-col gap-3">
            <Button href="/book-a-bay" variant="primary">Book a Bay</Button>
            <Button href="/reserve-a-table" variant="ghost" className="text-text-light">
              Reserve a Table
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t border-text-light/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-light/60">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <p>© 2026 The ParT Barn</p>
            <p className="text-text-light/45">{BUSINESS.parent} property</p>
          </div>

          <div className="flex items-center gap-5">
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
      className="text-text-light/70 hover:text-brand-accent transition-colors"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        {children}
      </svg>
    </a>
  );
}
