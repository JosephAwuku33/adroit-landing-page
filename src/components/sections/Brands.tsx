import { brands } from "../../data/brands";
import { motion } from "motion/react";

// Duplicate the brands array for infinite looping
const dualBrands = [...brands, ...brands];

export default function Brands() {
  return (
    <section className="w-full font-inter py-8 overflow-hidden">
      {" "}
      {/* 1. Add overflow-hidden */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col gap-16 items-center justify-center w-full">
          {/* ... Title and Description content ... */}
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl text-center font-extrabold text-gray-900 tracking-tight mb-4">
              Trusted by major brands in Africa and beyond
            </h2>
            <p className="text-center text-lg text-gray-600">
              Our team has delivered platforms and products...
            </p>
          </div>

          {/* 2. Marquee Container */}
          <div className="relative w-full max-w-7xl">
            <motion.div
              className="flex items-center gap-12 w-fit min-w-full"
              animate={{
                x: ["0%", "-100%"], // Move from 0% to -100% (the width of one full set)
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  ease: "linear",
                  duration: 30,
                },
              }}
            >
              {/* 3. Map over the duplicated array */}
              {dualBrands.map((brand, index) => (
                <img
                  key={`${brand.name}-${index}`}
                  src={brand.imgUrl}
                  alt={brand.name}
                  className="h-20 object-contain opacity-70 hover:opacity-100 transition duration-300 shrink-0"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
