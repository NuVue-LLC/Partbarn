import Hero from "@/components/menus/Hero";
import MenuTabs from "@/components/menus/MenuTabs";

export const metadata = {
  title: "Menus | The ParT Barn",
  description:
    "Wood-fired flatbreads, slow-smoked wings, sandwiches, entrées, signature cocktails, and a full bar program at The ParT Barn.",
};

export default function Page() {
  return (
    <>
      <Hero />
      <MenuTabs />
    </>
  );
}
