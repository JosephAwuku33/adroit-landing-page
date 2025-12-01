// import { NavLink } from "react-router";
import { navLinks } from "../../data/navLinks";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CloseIcon } from "../icons/Close";
import { MenuIcon } from "../icons/Menu";
import { assets } from "../../assets/assets";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Detect screen width (for dynamic layout)
  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <nav
      className={` ${
        isMobile && isOpen
          ? "flex-col items-start"
          : "flex-row items-center justify-between"
      }  bg-white fixed w-full z-20 top-0 start-0 p-2 md:p-4`}
    >
      <div className="max-w-7xl flex flex-wrap items-center justify-between border-b border-gray-300 md:mx-4 p-3 shadow-sm shadow-primary">
        <div className="flex flex-row items-center gap-2">
          <img
            src={assets.AdroitLogo}
            alt="Adroit Logo"
            className="md:w-1/6 md:h-1/6 w-10 h-10"
          />
          <p className="font-inter text-xl">Adroit 360</p>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg text-brown transition-transform transform hover:scale-110 focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <span className="relative block w-8 h-8">
            <AnimatePresence mode="sync" initial={false}>
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
                  className="absolute inset-0 flex items-center justify-center"
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
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <CloseIcon />
                </motion.span>
              )}
            </AnimatePresence>
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-6 pr-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="font-inter text-lg tracking-tighter text-gray-800 hover:text-blue-500"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && isMobile && (
            <motion.div
              id="mobile-menu"
              animate={isOpen ? "open" : "closed"}
              className="w-full bg-white mt-4"
            >
              <div className="flex flex-col space-y-6 font-inter">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    className="tracking-tighter text-gray-800"
                    href={link.path}
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </a>
                ))}
                {/* Mobile CTA */}
                <button className="rounded-md px-6 py-3 bg-primary ">
                  <p className="text-base font-inter font-bold text-center text-white">
                    Book A Call
                  </p>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop CTA */}
        <div className="md:block hidden">
          <button className="rounded-md px-6 py-3 bg-primary ">
            <p className="text-base font-inter font-bold text-center text-white">
              Book A Call
            </p>
          </button>
        </div>
      </div>
    </nav>
  );
}
