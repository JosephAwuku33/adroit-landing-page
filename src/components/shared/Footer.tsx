import { motion, stagger } from "motion/react";
import { icons } from "../../data/footerLinks";
import { assets } from "../../assets/assets";

// --- FRAMER MOTION VARIANTS ---
const footerVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delayChildren: stagger(0.05, { from: "last" }) },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// --- MAIN FOOTER COMPONENT ---
export default function Footer() {
  return (
    <motion.footer
      className="bg-black/80 text-white font-inter w-full"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto container px-6 pb-8 pt-8">
        {/*  */}
        <div className="flex flex-col lg:flex-row lg:gap-12 gap-4 md:gap-6 items-start w-full">
          <div className="flex flex-row items-center gap-2">
            <img
              src={assets.AdroitLogo}
              alt="Adroit Logo"
              className="w-10 h-10"
            />
            <p className="font-inter text-base text-white">Adroit 360</p>
          </div>
          <div className="border border-gray-300 w-full hidden lg:block lg:w-0 lg:h-12 " />
          <div className="hidden lg:block">
            <p className="text-white text-sm">
              77 Sugar Creek Center Boulevard, <br />
              Suger Land, Tx 77478,USA
            </p>
          </div>
          <div className="border border-gray-300 w-full lg:w-0 lg:h-12" />
          <div className="space-y-4 lg:space-y-0">
            <p className="text-white text-sm lg:hidden block">
              77 Sugar Creek Center Boulevard, Suger Land, Tx 77478,USA
            </p>
            <div>
              <p className="text-white text-sm">T:937-776-8924</p>
              <p className="text-white text-sm">E:hello@adroit360usa.com</p>
            </div>
          </div>
          <div className="border border-gray-300 w-full md:w-full md:h-0 lg:h-12 lg:w-0" />
          {/* Mobile Icons and Tablet*/}
          <div className="grid grid-cols-3 w-full gap-4 lg:hidden">
            {icons.map((item) => (
              <motion.a
                key={item.name}
                // href={item.href}
                className="text-white/90 flex flex-col items-center justify-center space-y-3 hover:text-white transition duration-200 transform hover:scale-125"
                aria-label={item.name}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.icon}
                <p className="text-base">{item.name}</p>
              </motion.a>
            ))}
          </div>

          {/* Desktop Icons */}
          <div className="hidden lg:flex flex-row gap-4 items-center">
            {icons.map((item) => (
              <motion.a
                key={item.name}
                // href={item.href}
                className="text-white/90 flex flex-col items-center justify-center space-y-2 hover:text-white transition duration-200 transform hover:scale-125"
                aria-label={item.name}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.icon}
                <p className="text-sm">{item.name}</p>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="flex mt-6">
          {/* Copyright */}
          <motion.p
            className="text-xs leading-5 text-white order-1"
            variants={itemVariants}
          >
            &copy; {new Date().getFullYear()} Adroit 360 All rights reserved.
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
}
