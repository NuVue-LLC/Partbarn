"use client";

import { useState } from "react";
import FadeUp from "@/components/ui/FadeUp";

type MenuItem = {
  name: string;
  price?: string;
  description?: string;
  note?: string;
};

type StandardSection = {
  type: "standard";
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
};

type FeaturedSection = {
  type: "featured";
  id: string;
  title: string;
  item: MenuItem;
};

type TextSection = {
  type: "text";
  id: string;
  title: string;
  blocks: { label: string; content: string }[];
};

type Section = StandardSection | FeaturedSection | TextSection;

const FOOD: Section[] = [
  {
    type: "standard",
    id: "warm-ups",
    title: "Warm-Ups",
    items: [
      {
        name: "Pimento Cheese Dip",
        price: "$12",
        description: "House-made pimento cheese dip served with pita chips.",
        note: "A PTB Salute to the Masters",
      },
      {
        name: "“Birdies”",
        price: "$17",
        description:
          "Slow-smoked jumbo wings. Sauces: PT Whiskey BBQ, buffalo, Calabrian hot honey, sesame-ginger, or sweet pecan rub.",
      },
      {
        name: "Jumbo German Pretzel",
        price: "$14",
        description:
          "House-made German-style pretzel with horseradish honey mustard and white cheese sauce. Add Wisconsin Charcuterie (cheese curds + smoked sausage) +$7",
      },
      {
        name: "White Cheddar Melts",
        price: "$12",
        description:
          "Hand-battered Wisconsin cheese curds with ranch and PT Whiskey BBQ sauce.",
      },
      {
        name: "Cheesy Fried Pickles",
        price: "$13",
        description: "Pickle spears, provolone, and bacon in fried egg roll wrappers.",
      },
      {
        name: "Chicken Bacon Ranch Eggrolls",
        price: "$14",
        description:
          "Grilled chicken, provolone, chopped bacon, chives in a fried egg roll wrapper with ranch dressing.",
      },
      {
        name: "Nachos",
        price: "$19",
        description:
          "Tortilla chips with shredded pork or ground beef, white cheese sauce, pico de gallo, red salsa, cilantro-lime crema, shredded cheddar.",
      },
      {
        name: "Hand-Breaded Chicken Tenders",
        price: "$18",
        description: "Brined, ranch-seasoned tenders with ranch or PT Whiskey BBQ sauce.",
      },
      {
        name: "Bacon Jam Minis",
        price: "$18",
        description:
          "Ground beef, Gorgonzola, sweet onion jam, house-made pickles, comeback sauce on slider buns.",
      },
      {
        name: "Deviled Egg Trio",
        price: "$13",
        description:
          "Topped three ways: pimento cheese, Calabrian chili crisp, chipotle-jalapeño candied bacon.",
      },
    ],
  },
  {
    type: "featured",
    id: "the-turn",
    title: "The Turn",
    item: {
      name: "The Turn",
      price: "$12",
      description: "Smoked sausage link served with shoestring fries.",
    },
  },
  {
    type: "standard",
    id: "sandwiches",
    title: "Sandwiches",
    subtitle: "All served with chips, shoestring fries, or coleslaw",
    items: [
      {
        name: "Clubhouse Classic",
        price: "$16",
        description:
          "Triple-stacked shaved ham and smoked turkey, Swiss, provolone, and American cheeses, bacon, lettuce, tomatoes, mayo on grilled sourdough.",
      },
      {
        name: "French Dip",
        price: "$18",
        description:
          "Sliced roast beef, provolone, horseradish cream on a toasted hoagie roll with au jus.",
      },
      {
        name: "Smash Burger",
        price: "$16",
        description:
          "Two smashed beef patties, American cheese, comeback sauce on a toasted bun.",
      },
      {
        name: "Buffalo Chicken Wrap",
        price: "$15",
        description:
          "Diced grilled or fried chicken in buffalo sauce, shredded cheddar, lettuce, tomatoes, ranch in a grilled flour tortilla.",
      },
      {
        name: "Classic Reuben",
        price: "$16",
        description:
          "Thinly sliced smoked corned beef, sauerkraut, Swiss, Thousand Island on grilled marble rye.",
      },
      {
        name: "Pork Tenderloin",
        price: "$17",
        description:
          "Battered and deep-fried, lettuce, tomatoes, red onions on a toasted bun.",
      },
      {
        name: "Pulled Pork",
        price: "$16",
        description:
          "Slow-smoked sweet pecan-rubbed pulled pork, PT Whiskey BBQ sauce, coleslaw, fried onion rings on a toasted bun.",
      },
    ],
  },
  {
    type: "standard",
    id: "greens-soup",
    title: "Greens + Soup",
    items: [
      {
        name: "Wedge Birdie",
        price: "$19",
        description:
          "Iceberg with bacon, tomatoes, red onions, blue cheese dressing, blue cheese, and buffalo wings.",
      },
      {
        name: "Pepper Seared Salmon",
        price: "$21",
        description:
          "Spring mix with pepper-grilled salmon, balsamic mustard vinaigrette, parmesan, goat cheese, red onions, grape tomatoes, crostini.",
      },
      {
        name: "Steak Salad",
        price: "$22",
        description:
          "Spring mix with seared filet tips, horseradish ranch, fried onion rings, grape tomatoes, smoked blue cheese, sweet onion jam, grilled bread.",
      },
      {
        name: "Daily Soup",
        price: "Cup $7 / Bowl $9",
      },
    ],
  },
  {
    type: "standard",
    id: "flatbreads",
    title: "Flatbreads",
    items: [
      {
        name: "Hot Honey Pepperoni",
        price: "$15",
        description:
          "Natural uncured pepperoni, red sauce, Calabrian hot honey, five-cheese blend.",
      },
      {
        name: "Smokehouse",
        price: "$18",
        description:
          "Sweet pecan-rubbed BBQ pulled pork, PT Whiskey BBQ sauce, cilantro lime crema, red onions, five-cheese blend, jalapeños.",
      },
      {
        name: "Chicken Bacon Ranch",
        price: "$17",
        description:
          "Grilled chicken, chopped bacon, five-cheese blend, shredded cheddar, chives, ranch dressing.",
      },
      {
        name: "Margherita",
        price: "$14",
        description:
          "Mozzarella, heirloom tomatoes, basil, California extra virgin olive oil.",
      },
      {
        name: "Taco",
        price: "$17",
        description:
          "Seasoned ground beef, white cheese sauce, pico de gallo, red salsa, cilantro-lime crema, cheddar cheese.",
      },
    ],
  },
  {
    type: "standard",
    id: "entrees",
    title: "Entrées",
    items: [
      {
        name: "Whiskey Peppercorn Sirloin",
        price: "$38",
        description:
          "9 oz. sirloin with whiskey peppercorn sauce, mashed potatoes, sautéed broccolini.",
      },
      {
        name: "Sesame Ginger Salmon",
        price: "$34",
        description:
          "Salmon filet with Calabrian chili crunch, buckwheat soba noodles, baby bok choy, edamame, red bell peppers, soy sesame ginger glaze.",
      },
      {
        name: "PTB Stuffed Chicken",
        price: "$27",
        description:
          "Lightly breaded chicken breast stuffed with ham and Swiss, over mustard cream sauce, mashed potatoes, broccolini.",
      },
    ],
  },
];

const DRINKS: Section[] = [
  {
    type: "standard",
    id: "signature-cocktails",
    title: "Signature Cocktails",
    items: [
      { name: "The Transfusion", price: "$13", description: "Gray Duck Vodka, grape juice, ginger ale, lime" },
      { name: "The Fizz", price: "$13", description: "Bombay Sapphire Gin, elderflower liqueur, soda, cucumber" },
      { name: "John Daly", price: "$12", description: "Gray Duck Vodka, lemonade, iced tea" },
      { name: "19th Hole Old Fashioned", price: "$14", description: "Bourbon, Angostura bitters, orange peel" },
      { name: "Signature Margarita", price: "$13", description: "Tequila, Cointreau, agave, lime, salt rim" },
      {
        name: "Back Nine Breeze",
        price: "$12",
        description: "Malibu Coconut Rum, coconut cream, pineapple juice, cranberry juice, lime",
      },
      {
        name: "Par-Tini",
        price: "$14",
        description: "Tito’s Vodka, limoncello, lemon juice, lemon zest, basil",
      },
      {
        name: "The Caddie’s Choice",
        price: "$14",
        description: "Rye whiskey, sweet vermouth, orange bitters, smoked cherry",
      },
      { name: "Birdie Collins", price: "$13", description: "Bombay Sapphire Gin, lavender syrup, soda, lemon" },
      { name: "Golden Hour Spritz", price: "$12", description: "Prosecco, Aperol, blood orange" },
    ],
  },
  {
    type: "featured",
    id: "mini-beers",
    title: "Mini Beers",
    item: {
      name: "Mini Beers",
      price: "$5 each / $14 flight",
      description: "Original, Chocolate, Crème Brûlée.",
    },
  },
  {
    type: "standard",
    id: "zero-proof",
    title: "Zero Proof",
    items: [
      { name: "Arnold Palmer", price: "$5" },
      { name: "Craft Lemonades", price: "$6" },
      { name: "Sparkling Waters", price: "$4" },
    ],
  },
  {
    type: "text",
    id: "brews",
    title: "Domestic, Craft, & Local Brews",
    blocks: [
      {
        label: "On Tap",
        content: "Michelob Golden, Michelob ULTRA, Busch Light, Duck Duck Beer, Local IPA, Seasonal",
      },
      {
        label: "Bottles & Cans",
        content: "Domestic $7  ·  Imports $8  ·  Non-Alcoholic $6",
      },
    ],
  },
  {
    type: "standard",
    id: "white-wines",
    title: "White Wines",
    items: [
      { name: "Josh Cellars Chardonnay", price: "$12" },
      { name: "Bonanza Chardonnay", price: "$14" },
      { name: "Saint Clair Sauvignon Blanc", price: "$12" },
      { name: "Whitehaven Sauvignon Blanc", price: "$13" },
      { name: "Torresella Pinot Grigio", price: "$12" },
      { name: "Risata Moscato", price: "$12" },
    ],
  },
  {
    type: "standard",
    id: "red-wines",
    title: "Red Wines",
    items: [
      { name: "Josh Cellars Cabernet Sauvignon", price: "$12" },
      { name: "Bonanza Cabernet Sauvignon", price: "$14" },
      { name: "Josh Cellars Pinot Noir", price: "$12" },
      { name: "Broadside Merlot", price: "$12" },
    ],
  },
  {
    type: "standard",
    id: "rose-sparkling",
    title: "Rosé & Sparkling",
    items: [
      { name: "Champs de Provence Rosé", price: "$10" },
      { name: "La Gioiosa Prosecco", price: "$12" },
    ],
  },
];

const HAPPY_HOUR = [
  { label: "Signature Cocktails", value: "$2 Off" },
  { label: "Draft Pints", value: "$5" },
  { label: "House Wines", value: "$7 / glass" },
  { label: "Well Drinks", value: "$6" },
  { label: "Flatbreads", value: "Half Price" },
];

const DISCLAIMER =
  "Thoroughly cooking foods of animal origin such as beef, eggs, fish, lamb, poultry or shellfish reduces the risk of food-borne illness. Individuals with certain health conditions may be at higher risk if these foods are consumed raw or undercooked.";

type Tab = "food" | "drinks";

export default function MenuTabs() {
  const [tab, setTab] = useState<Tab>("food");

  return (
    <>
      <div className="bg-bg-cream border-b border-text-dark/10 sticky top-20 z-30 shadow-[0_6px_18px_-14px_rgba(0,0,0,0.25)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 flex items-center justify-center gap-10 md:gap-16">
          <TabButton active={tab === "food"} onClick={() => setTab("food")}>
            Food
          </TabButton>
          <TabButton active={tab === "drinks"} onClick={() => setTab("drinks")}>
            Drinks
          </TabButton>
        </div>
      </div>

      <div className="bg-bg-cream py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          {tab === "food" ? <FoodMenu /> : <DrinksMenu />}
        </div>
      </div>
    </>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`relative font-barlow-condensed uppercase tracking-[0.2em] text-sm md:text-base py-5 md:py-6 bg-transparent border-0 rounded-none outline-none focus:outline-none focus-visible:outline-none transition-colors ${
        active ? "text-text-dark" : "text-text-dark/55 hover:text-text-dark"
      }`}
    >
      {children}
      {active && (
        <span
          aria-hidden="true"
          className="absolute left-0 right-0 -bottom-px h-[2px] bg-brand-accent"
        />
      )}
    </button>
  );
}

function FoodMenu() {
  return (
    <div className="space-y-20 md:space-y-28">
      {FOOD.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}

      <FadeUp>
        <p className="font-barlow text-xs md:text-[13px] text-text-dark/55 italic leading-[1.7] max-w-3xl mx-auto text-center pt-8 border-t border-text-dark/10">
          {DISCLAIMER}
        </p>
      </FadeUp>
    </div>
  );
}

function DrinksMenu() {
  return (
    <div className="space-y-20 md:space-y-28">
      {DRINKS.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}

      <HappyHourCallout />
    </div>
  );
}

function SectionRenderer({ section }: { section: Section }) {
  if (section.type === "featured") {
    return <FeaturedCard section={section} />;
  }
  if (section.type === "text") {
    return <TextBlock section={section} />;
  }
  return <StandardSectionView section={section} />;
}

function SectionHeader({ id, title, subtitle }: { id: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-10 md:mb-14">
      <FadeUp>
        <h2 id={id} className="scroll-mt-[148px] font-playfair font-normal text-3xl md:text-5xl text-text-dark leading-[1.05]">
          {title}
        </h2>
      </FadeUp>
      <FadeUp delay={0.06}>
        <div className="w-12 h-px bg-brand-accent mx-auto mt-5" />
      </FadeUp>
      {subtitle && (
        <FadeUp delay={0.12}>
          <p className="font-barlow text-sm md:text-[15px] text-text-dark/65 italic mt-5 max-w-xl mx-auto">
            {subtitle}
          </p>
        </FadeUp>
      )}
    </div>
  );
}

function StandardSectionView({ section }: { section: StandardSection }) {
  return (
    <section aria-labelledby={section.id}>
      <SectionHeader id={section.id} title={section.title} subtitle={section.subtitle} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-8 md:gap-y-10">
        {section.items.map((item, i) => (
          <FadeUp key={item.name} delay={(i % 4) * 0.05}>
            <ItemRow item={item} />
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

function ItemRow({ item }: { item: MenuItem }) {
  return (
    <article>
      <div className="flex items-baseline gap-3">
        <h3 className="font-barlow-condensed font-bold uppercase tracking-[0.05em] text-base md:text-lg text-text-dark">
          {item.name}
        </h3>
        <span
          aria-hidden="true"
          className="flex-1 border-b border-dotted border-text-dark/25 translate-y-[-4px]"
        />
        {item.price && (
          <span className="font-barlow-condensed font-medium text-base md:text-lg text-brand-accent-dark whitespace-nowrap">
            {item.price}
          </span>
        )}
      </div>
      {item.description && (
        <p className="font-barlow font-light text-sm md:text-[15px] text-text-dark/75 leading-[1.65] mt-2">
          {item.description}
        </p>
      )}
      {item.note && (
        <p className="font-barlow font-light italic text-xs md:text-sm text-brand-accent-dark/90 mt-1.5">
          {item.note}
        </p>
      )}
    </article>
  );
}

function FeaturedCard({ section }: { section: FeaturedSection }) {
  const { item } = section;
  return (
    <FadeUp>
      <section
        aria-labelledby={section.id}
        className="relative bg-brand-green-dark text-text-light border-t-[3px] border-brand-accent shadow-xl px-8 md:px-12 py-10 md:py-14 text-center max-w-2xl mx-auto"
      >
        <p className="eyebrow text-brand-accent text-[11px] md:text-xs mb-4">
          Featured
        </p>
        <h2
          id={section.id}
          className="scroll-mt-[148px] font-playfair font-normal text-3xl md:text-5xl text-text-light leading-[1.05]"
        >
          {section.title}
        </h2>
        <div className="w-12 h-px bg-brand-accent mx-auto my-6" />
        <p className="font-barlow-condensed font-bold uppercase tracking-[0.08em] text-lg md:text-xl text-text-light">
          {item.name} <span className="text-brand-accent ml-2">{item.price}</span>
        </p>
        {item.description && (
          <p className="font-barlow font-light text-sm md:text-[15px] text-text-light/80 leading-[1.65] mt-3 max-w-md mx-auto">
            {item.description}
          </p>
        )}
      </section>
    </FadeUp>
  );
}

function TextBlock({ section }: { section: TextSection }) {
  return (
    <section aria-labelledby={section.id}>
      <SectionHeader id={section.id} title={section.title} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-8 max-w-3xl mx-auto">
        {section.blocks.map((b, i) => (
          <FadeUp key={b.label} delay={i * 0.05}>
            <p className="eyebrow text-brand-accent text-[11px] mb-3 text-center md:text-left">
              {b.label}
            </p>
            <p className="font-barlow font-light text-text-dark/80 text-sm md:text-[15px] leading-[1.7] text-center md:text-left">
              {b.content}
            </p>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

function HappyHourCallout() {
  return (
    <FadeUp>
      <section
        aria-labelledby="happy-hour"
        className="relative bg-bg-off border-2 border-brand-accent px-6 md:px-12 py-10 md:py-14"
      >
        <div className="text-center mb-8">
          <p className="eyebrow text-brand-accent text-xs md:text-sm mb-4">
            Monday – Friday  ·  3 PM – 6 PM
          </p>
          <h2
            id="happy-hour"
            className="scroll-mt-[148px] font-playfair font-normal text-3xl md:text-5xl text-text-dark leading-[1.05]"
          >
            Happy Hour.
          </h2>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-6 gap-x-4 max-w-4xl mx-auto">
          {HAPPY_HOUR.map((h, i) => (
            <li
              key={h.label}
              className={`text-center px-2 ${
                i < HAPPY_HOUR.length - 1 ? "lg:border-r lg:border-text-dark/15" : ""
              }`}
            >
              <p className="font-barlow-condensed font-bold uppercase tracking-[0.08em] text-sm md:text-[15px] text-text-dark mb-1.5">
                {h.label}
              </p>
              <p className="font-playfair text-xl md:text-2xl text-brand-accent-dark leading-none">
                {h.value}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </FadeUp>
  );
}
