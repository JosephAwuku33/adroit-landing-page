import Brands from "../components/sections/Brands";
import EngagementModels from "../components/sections/EngagementModels";
import FAQ from "../components/sections/FAQ";
import Hero from "../components/sections/Hero";
import HireUsReason from "../components/sections/HireUsReason";
import HowWeWork from "../components/sections/HowWeWork";
import WhatWeDelivered from "../components/sections/WhatWeDelivered";
import WhyItWorks from "../components/sections/WhyItWorks";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <Brands />
      <HireUsReason />
      <WhyItWorks />
      <HowWeWork />
      <EngagementModels/>
      <WhatWeDelivered />
      <FAQ />
    </main>
  );
}
