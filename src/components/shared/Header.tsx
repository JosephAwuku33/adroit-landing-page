import Hero from "../sections/Hero";
import Navbar from "./navbar/Navbar";
import useScreenAndScroll from "./navbar/useScreenAndScroll";

export default function Header() {
  const { isMobile } = useScreenAndScroll();
  return (
    <header
      className="relative min-h-full z-50 bg-cover bg-center w-full"
      style={{
        backgroundImage: isMobile
          ? `url("https://res.cloudinary.com/dsttnkan0/image/upload/v1765217085/flamengo-with-lowered-brightness_ovkxey.jpg")`
          : `url("https://images.unsplash.com/photo-1763996147774-522014c41e74?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
      }}
    >
      <div className=" absolute inset-0 bg-black/45 w-full opacity-10 " />
      <Navbar />
      <Hero />
    </header>
  );
}
