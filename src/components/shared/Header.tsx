import Hero from "../sections/Hero";
import Navbar from "./navbar/Navbar";

export default function Header() {
  return (
    <header
      className="relative min-h-screen z-50 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1763996147774-522014c41e74?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
      }}
    >
      <div className="md:hidden block absolute inset-0 bg-black w-full opacity-10 " />
      <Navbar />
      <Hero />
    </header>
  );
}
