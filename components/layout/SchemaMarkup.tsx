import { BUSINESS } from "@/lib/constants";

export default function SchemaMarkup() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "SportsActivityLocation"],
    name: BUSINESS.name,
    description:
      "Indoor golf simulator bar and restaurant in Lake Elmo, MN",
    image: "/images/hero/hero-bar.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.9937,
      longitude: -92.876,
    },
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    url: "https://thepartbarn.com",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "09:00",
        closes: "22:00",
      },
    ],
    priceRange: "$$",
    servesCuisine: "American",
    acceptsReservations: true,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
