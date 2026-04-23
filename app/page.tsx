import Hero from "@/components/home/Hero";
import BrandIntro from "@/components/home/BrandIntro";
import Occasions from "@/components/home/Occasions";
import DiningSplit from "@/components/home/DiningSplit";
import BaysSplit from "@/components/home/BaysSplit";
import StatsBar from "@/components/home/StatsBar";
import PrivateEventsPreview from "@/components/home/PrivateEventsPreview";
import MembershipsPreview from "@/components/home/MembershipsPreview";
import Gallery from "@/components/home/Gallery";
import NewsletterCTA from "@/components/home/NewsletterCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <Occasions />
      <DiningSplit />
      <BaysSplit />
      <StatsBar />
      <PrivateEventsPreview />
      <MembershipsPreview />
      <Gallery />
      <NewsletterCTA />
    </>
  );
}
