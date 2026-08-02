import Categories from "@/components/home/Categories";
import FAQ from "@/components/home/FAQ";
import FeaturedGear from "@/components/home/FeaturedGear";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
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
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}