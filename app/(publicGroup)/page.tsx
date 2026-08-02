import Categories from "@/components/home/Categories";
import FeaturedGear from "@/components/home/FeaturedGear";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Stats from "@/components/home/Stats";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedGear />
      <WhyChooseUs />
      <HowItWorks />
      <Stats />

    </main>
  );
}