import { FaRegCalendar } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section className="py-8 bg-white/80 mt-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-3 items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-5xl font-bold leading-tight font-inter text-blue-900">
              <Typewriter
                options={{
                  strings: [
                    "Build with a senior engineering team for the cost of one U.S. hire",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="mt-4 text-gray-600 text-base font-inter leading">
              We are Adroit 360. Our Ghana-based engineers build systems for
              brands like Coca-Cola, MTN and IFC. Now we support U.S. agencies
              and startups with full product teams at a fraction of U.S. rates.
            </p>
            <button className="flex items-center justify-center gap-3 mt-8 bg-primary text-white px-8 py-3 rounded font-inter w-full md:w-1/2">
              <FaRegCalendar color="white" size={20} />{" "}
              <span>Book a 20 minute call</span>
            </button>

            <div className="flex flex-row gap-2 items-center w-full md:w-1/2 mt-2">
              <div className="w-1/2 border border-gray-300" />
              <span>Or</span>
              <div className="w-1/2 border border-gray-300" />
            </div>

            <div className="flex items-center mt-2 gap-2">
              <MdEmail color="black" size={25} />
              <p className=" font-inter text-base">
                Email us at{" "}
                <span className="font-semibold text-blue-900">
                  hello@adroit360usa.com
                </span>
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1666718622024-dc6bdc808bda?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="App screenshot"
              className="w-full opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
