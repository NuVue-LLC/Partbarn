export const BUSINESS = {
  name: "The ParT Barn",
  tagline: "Play. Eat. Compete.",
  subline: "A little bit country club. A whole lot more fun.",
  address: {
    street: "8515 Hudson Blvd N #8702",
    city: "Lake Elmo",
    state: "MN",
    zip: "55042",
  },
  phone: "(651) 735-7436",
  phoneRaw: "6517357436",
  email: "partbarn@hoari.com",
  hours: {
    weekday: "Mon–Fri: 10am–10pm",
    weekend: "Sat–Sun: 9am–10pm",
  },
  social: {
    facebook:
      "https://www.facebook.com/people/The-ParT-Barn/61577366402517/",
    instagram: "https://www.instagram.com/partbarngolf/",
    tiktok: "https://www.tiktok.com/@partbarngolf",
  },
  bays: 9,
  courses: "300+",
  capacity: 220,
  parent: "Heart of America Group",
  award:
    "2026 Greater Stillwater Chamber Community Awards — Smalley Hospitality of the Year Nominee",
  booking: {
    bayUrl:
      "https://www.sevenrooms.com/explore/thepartbarn/reservations/create/search/",
    tableUrl:
      "https://www.sevenrooms.com/explore/thepartbarn/reservations/create/search/",
  },
  newsletterUrl: "https://mailchi.mp/57d352f75141/ptb-news",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menus", label: "Menus" },
  { href: "/golf-bays", label: "Golf Bays" },
  { href: "/private-events", label: "Private Events" },
  { href: "/pricing", label: "Pricing & Memberships" },
  { href: "/leagues", label: "Leagues" },
] as const;
