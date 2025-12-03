import { useState, useEffect } from "react";

export default function useScreenAndScroll() {
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 768);

    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    checkWidth();
    onScroll();

    window.addEventListener("resize", checkWidth);
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("resize", checkWidth);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return { isMobile, scrolled };
}
