import { motion, type AnimationGeneratorType } from "motion/react";

import { FaArrowAltCircleRight } from "react-icons/fa";
import { content } from "../../data/solutionsAI";

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as AnimationGeneratorType, stiffness: 50 },
  },
};

const AISolutions = () => {
  return (
    <section className="relative w-full text-black py-20 px-6 lg:px-8 font-inter">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* 1. HERO HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
            {content.hero.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {content.hero.subtitle}
          </p>
        </motion.div>

        {/* 2. GRID LAYOUT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]"
        >
          {/* Main Feature / Highlight Card (Spans 2 cols on Desktop) */}
          <motion.div
            variants={itemVariants}
            className="group relative md:col-span-2 lg:col-span-2 row-span-1 rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${content.highlight.bgImage})` }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-900/90 to-transparent" />

            {/* Content */}
            <div className="relative z-10 p-8 h-full flex flex-col justify-center items-start">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                {content.highlight.title}
              </h3>
              <p className="text-slate-300 mb-8 max-w-md text-lg leading-relaxed">
                {content.highlight.desc}
              </p>
              <button className="flex items-center gap-2 px-6 py-3 bg-white text-slate-950 font-bold rounded-full hover:bg-secondary transition-colors shadow-sm shadow-primary group-hover:pr-8 duration-300">
                {content.highlight.cta}
                <FaArrowAltCircleRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Feature Cards Loop */}
          {content.features.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`group relative rounded-3xl overflow-hidden border border-slate-800 shadow-xl min-h-[250px] ${
                // Optional: Make specific cards span differently for masonry feel
                index === 3 ? "md:col-span-2 lg:col-span-1" : "col-span-1"
              }`}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${feature.bgImage})` }}
              />
              {/* Heavy Overlay for Text Readability */}
              <div className="absolute inset-0 bg-slate-950/70 group-hover:bg-slate-950/60 transition-colors duration-500" />

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <div className="w-10 h-1 mb-4 bg-primary rounded-full" />
                <p className="text-lg font-medium text-slate-100 leading-snug">
                  {feature.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AISolutions;
