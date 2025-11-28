import { FaRobot } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";

export default function HireUsReason() {
  return (
    <section className="py-8 bg-white/85 w-full">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center gap-8 justify-center w-full font-inter">
          <h2 className="text-3xl font-bold">What you can hire us for?</h2>

          <div className="flex flex-row gap-4 items-center w-full">
            <div className="flex flex-col gap-2 p-4 shadow-lg border border-gray-400 rounded-xl w-full">
              <LuUsers size={28} color="blue" />
              <p className="font-bold text-lg">White Label Engineering</p>

              <p className="text-base">
                We act as your internal engineering squad. You keep the client
                relationship and brand; we handle the heavy lifting on web,
                mobile, and backend development.
              </p>
            </div>

            <div className="flex flex-col gap-2 p-4 shadow-lg border border-gray-400 rounded-xl w-full">
              <IoRocketSharp size={28} color="blue" />
              <p className="font-bold text-lg">
                Dedicated product squad for startups
              </p>

              <p className="text-base">
                We give you a cross-functional team (full-stack devs, QA,
                optional PM) that plugs into your roadmap and workflow. You get
                the output of a full engineering team at the cost of one U.S.
                senior engineer.
              </p>
            </div>

            <div className="flex flex-col gap-2 p-4 shadow-lg border border-gray-400 rounded-xl w-full">
              <FaRobot size={28} color="blue" />
              <p className="font-bold text-lg">AI and automation projects</p>

              <p className="text-base">
                We build AI-powered tools that save time and cut costs: internal
                copilots, chatbots, workflow automation, dashboards, OCR and
                data pipelines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
