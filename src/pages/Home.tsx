import Brands from "../components/Brands";
import Hero from "../components/Hero";
import HireUsReason from "../components/HireUsReason";
import WhyItWorks from "../components/WhyItWorks";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <Brands />
      <HireUsReason />
      <WhyItWorks/>
    </main>
  );
}
