import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";
import Button from "@/components/ui/Button";

const benefits = [
  {
    title: "Priority Booking",
    body: "Reserve bays before they go public. Hold your league night.",
  },
  {
    title: "Bay-Time Discount",
    body: "Member rates on every bay, every day, every party size.",
  },
  {
    title: "Member Nights",
    body: "Quarterly tournaments and tastings only members get on the list for.",
  },
  {
    title: "Bring a Guest",
    body: "Free guest passes every month. Show off the place to your people.",
  },
];

export default function MembershipsPreview() {
  return (
    <section className="bg-bg-off py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <FadeUp>
              <p className="eyebrow text-brand-accent text-sm mb-5">
                Memberships
              </p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="font-playfair font-normal text-4xl md:text-5xl lg:text-6xl text-text-dark leading-[1.1] mb-6">
                Make ParT Barn your local.
              </h2>
            </FadeUp>
            <FadeUp delay={0.16}>
              <p className="font-barlow text-text-dark/85 text-base md:text-lg leading-[1.7] mb-10 max-w-xl">
                Members get the bay first. Discounts on bay time, priority on weekends,
                seats at quarterly tournaments and tastings, and the kind of weeknights
                you don&apos;t want to miss.
              </p>
            </FadeUp>

            <FadeUp delay={0.22}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7 mb-10">
                {benefits.map((b) => (
                  <li key={b.title} className="border-t border-text-dark/15 pt-4">
                    <p className="eyebrow text-text-dark text-xs mb-2">{b.title}</p>
                    <p className="font-barlow text-text-dark/75 text-sm leading-[1.6]">
                      {b.body}
                    </p>
                  </li>
                ))}
              </ul>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="flex flex-wrap items-center gap-4">
                <Button href="/pricing" variant="primary">
                  View Memberships
                </Button>
                <a
                  href="mailto:partbarn@hoari.com?subject=Membership%20inquiry"
                  className="eyebrow text-text-dark/70 hover:text-brand-accent transition-colors text-xs"
                >
                  Or talk to a member of the team →
                </a>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.18} className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/images/gallery/dining-wall.jpg"
                alt="The dining room at The ParT Barn — green chairs and a wall of framed golf moments"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
