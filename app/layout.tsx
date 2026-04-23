import type { Metadata } from "next";
import { Playfair_Display, Barlow_Condensed, Barlow } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import StickyBookCTA from "@/components/layout/StickyBookCTA";
import SchemaMarkup from "@/components/layout/SchemaMarkup";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The ParT Barn | Indoor Golf, Bar & Restaurant | Lake Elmo, MN",
  description:
    "An upscale indoor golf simulator bar and restaurant in Lake Elmo, MN. Nine Golfzon TwoVisionX bays, a real kitchen, full bar. Book a bay or reserve a table.",
  metadataBase: new URL("https://thepartbarn.com"),
  openGraph: {
    title: "The ParT Barn | Indoor Golf, Bar & Restaurant",
    description:
      "Play. Eat. Compete. A little bit country club. A whole lot more fun. Lake Elmo, MN.",
    url: "https://thepartbarn.com",
    siteName: "The ParT Barn",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The ParT Barn",
    description: "Indoor golf simulator bar and restaurant in Lake Elmo, MN.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${barlowCondensed.variable} ${barlow.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-cream text-text-dark">
        <a href="#main" className="skip-link">Skip to content</a>
        <SchemaMarkup />
        <Nav />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <StickyBookCTA />
      </body>
    </html>
  );
}
