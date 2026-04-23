import Hero from "@/components/private-events/Hero";
import CapacityStrip from "@/components/private-events/CapacityStrip";
import InquiryForm from "@/components/private-events/InquiryForm";
import WhatYouCanHost from "@/components/private-events/WhatYouCanHost";
import TheSpace from "@/components/private-events/TheSpace";
import Packages from "@/components/private-events/Packages";
import MenuCustomization from "@/components/private-events/MenuCustomization";
import Testimonials from "@/components/private-events/Testimonials";
import FaqAndCTAs from "@/components/private-events/FaqAndCTAs";
import StickyPlanCTA from "@/components/private-events/StickyPlanCTA";

export const metadata = {
  title: "Private Events | The ParT Barn",
  description: "Host 8 to 220 — corporate, birthdays, weddings, holiday parties.",
};

export default function Page() {
  // sections
  return (
    <>
      <Hero />
      <CapacityStrip />
      <InquiryForm />
      <WhatYouCanHost />
      <TheSpace />
      <Packages />
      <MenuCustomization />
      <Testimonials />
      <FaqAndCTAs />
      <StickyPlanCTA />
    </>
  );
}
