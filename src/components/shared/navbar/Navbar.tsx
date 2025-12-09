import { useRef, useState } from "react";
import { assets } from "../../../assets/assets";
import { navLinks } from "../../../data/navLinks";
import MobileMenu from "./MobileMenu";
import MobileMenuToggle from "./MobileMenuToggle";
import useScreenAndScroll from "./useScreenAndScroll";

export default function Navbar() {
  const { isMobile, scrolled } = useScreenAndScroll();
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const containerRef = useRef(null);

  return (
    <nav
      className={`${
        isMobile && isMobileMenuOpened
          ? "flex-col items-start"
          : "flex-row items-center justify-between"
      } ${
        scrolled ? "bg-white text-black shadow-lg" : "text-white"
      } fixed w-full z-20 top-0 start-0`}
    >
      <div className="mx-auto container flex flex-wrap items-center justify-between p-2">
        {/* Logo */}
        <div className="flex flex-row items-center">
          <img
            src={assets.AdroitLogo}
            alt="Adroit Logo"
            className="object-contain w-16 h-16"
          />
          <p className="font-inter text-xl">Adroit 360</p>
        </div>

        {/* Mobile menu toggle */}
        {isMobile && (
          <MobileMenuToggle
            isOpen={isMobileMenuOpened}
            setIsOpen={setIsMobileMenuOpened}
          />
        )}

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-6 pr-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="font-inter text-lg tracking-tight hover:text-secondary"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="md:block hidden">
          <button className="px-6 py-3 bg-primary ">
            <p className="text-base font-inter font-semibold text-center text-white">
              Book A Call
            </p>
          </button>
        </div>
      </div>

      {/* Mobile sidebar */}
      <MobileMenu
        isOpen={isMobileMenuOpened}
        close={() => setIsMobileMenuOpened(false)}
        containerRef={containerRef}
      />
    </nav>
  );
}
