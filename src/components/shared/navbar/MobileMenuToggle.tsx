import { motion, AnimatePresence } from "motion/react";
import { MenuIcon } from "../../icons/Menu";
import { CloseIcon } from "../../icons/Close";

type MobileMenuToggleProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export default function MobileMenuToggle({
  isOpen,
  setIsOpen,
}: MobileMenuToggleProps) {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="md:hidden p-2 rounded-lg text-brown relative z-50"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <span className="relative block w-8 h-8">
        <AnimatePresence initial={false}>
          {!isOpen && (
            <motion.span
              key="menu"
              initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 45 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 150,
                damping: 30,
              }}
              className="absolute inset-0 flex items-center justify-center text-black"
            >
              <MenuIcon />
            </motion.span>
          )}
          {isOpen && (
            <motion.span
              key="close"
              initial={{ opacity: 0, scale: 0.8, rotate: 45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: -45 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 150,
                damping: 30,
              }}
              className="absolute inset-0 flex items-center justify-center text-black"
            >
              <CloseIcon />
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </button>
  );
}
