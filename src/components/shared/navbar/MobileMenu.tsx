import {
  motion,
  AnimatePresence,
  type AnimationGeneratorType,
} from "motion/react";
import { navLinks } from "../../../data/navLinks";
import type { Ref } from "react";

type MobileMenuProps = {
  isOpen: boolean;
  close: () => void;
  containerRef: Ref<HTMLDivElement>;
};

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring" as AnimationGeneratorType,
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring" as AnimationGeneratorType,
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function MobileMenu({
  isOpen,
  close,
  containerRef,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={sidebar}
          ref={containerRef}
          className="fixed top-0 left-0 w-full h-screen bg-white p-8 z-40 flex flex-col"
        >
          <div className="flex flex-col space-y-6 font-inter mt-16">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="tracking-tighter text-gray-800 text-xl"
                onClick={close}
              >
                {link.name}
              </a>
            ))}

            <button className="rounded-md px-6 py-3 bg-primary mt-6">
              <p className="text-base font-inter font-semibold text-center text-white">
                Book A Call
              </p>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
