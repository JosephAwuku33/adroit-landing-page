import AISolutions from "../components/sections/AISolutions";
import Brands from "../components/sections/Brands";
import EngagementModels from "../components/sections/EngagementModels";
import FAQ from "../components/sections/FAQ";
import HireUsReason from "../components/sections/HireUsReason";
import HowWeWork from "../components/sections/HowWeWork";
import TrustedCount from "../components/sections/TrustedCount";
import WhatWeDelivered from "../components/sections/WhatWeDelivered";
import WhyItWorks from "../components/sections/WhyItWorks";

export default function Home() {
  return (
    <main className="h-full w-full overflow-x-clip">
      <Brands />
      <TrustedCount />
      <HireUsReason />
      <WhyItWorks />
      <HowWeWork />
      <EngagementModels />
      <WhatWeDelivered />
      <AISolutions />
      <FAQ />
    </main>
  );
}
