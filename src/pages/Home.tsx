import Brands from "../components/Brands";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import HireUsReason from "../components/HireUsReason";
import HowWeWork from "../components/HowWeWork";
import WhyItWorks from "../components/WhyItWorks";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <Brands />
      <HireUsReason />
      <WhyItWorks />
      <HowWeWork />
      <FAQ />
    </main>
  );
}
