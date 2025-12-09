import { brands } from "../../data/brands";
import { motion } from "motion/react";

export default function Brands() {
  return (
    <section className="w-full font-inter py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4 text-center md:text-left">
              Brands that trust us
            </h2>
            <p className="text-lg text-gray-600 max-w-md text-center md:text-left">
              We have had the privilege of working with some of the most
              reputable brands across various industries.
            </p>
          </div>
          <div className="flex gap-6 md:w-1/2 justify-center items-center w-full">
            {/* Column 1 — slightly lower */}
            <div className="grid grid-rows-3 w-full">
              {brands.slice(0, 3).map((b) => (
                <motion.img
                  key={b.name}
                  src={b.imgUrl}
                  alt={b.name}
                  initial={b.initial}
                  whileInView={b.whileInView}
                  transition={b.transition}
                  className="h-4/5 w-4/5  object-contain place-self-center"
                />
              ))}
            </div>

            {/* Column 2 — centered */}
            <div className="grid grid-rows-3 w-full gap-3">
              {brands.slice(3, 6).map((b) => (
                <motion.img
                  key={b.name}
                  src={b.imgUrl}
                  alt={b.name}
                  initial={b.initial}
                  whileInView={b.whileInView}
                  transition={b.transition}
                  className="h-full w-full object-contain place-self-center"
                />
              ))}
            </div>

            {/* Column 3 — slightly higher */}
            <div className="grid grid-rows-3 w-full">
              {brands.slice(6, 9).map((b) => (
                <motion.img
                  key={b.name}
                  src={b.imgUrl}
                  alt={b.name}
                  initial={b.initial}
                  whileInView={b.whileInView}
                  transition={b.transition}
                  className="h-4/5 w-4/5 object-contain place-self-center"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
