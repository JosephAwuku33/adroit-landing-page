import { FiPhoneCall, FiPenTool, FiUsers } from "react-icons/fi";
import { IoRocketOutline } from "react-icons/io5";
import { motion } from "motion/react";
import useScreenAndScroll from "../shared/navbar/useScreenAndScroll";

export default function HowWeWork() {
  const { isMobile } = useScreenAndScroll();
  const steps = [
    {
      id: "01",
      title: "Quick Discovery Call",
      description:
        "We learn about your projects, tech stack, and exactly where your current capacity is breaking in a focused 20-minute chat.",
      icon: <FiPhoneCall className="w-6 h-6 text-blue-600" />,
    },
    {
      id: "02",
      title: "Shape the Engagement",
      description:
        "We agree on the model: white-label, dedicated squad, or project-based. You see a clear plan, timeline, and monthly cost.",
      icon: <FiPenTool className="w-6 h-6 text-indigo-600" />,
    },
    {
      id: "03",
      title: "Onboard the Squad",
      description:
        "We plug into your tools (Slack, Jira, GitHub). We align on sprint lengths, demo days, and communication rhythm immediately.",
      icon: <FiUsers className="w-6 h-6 text-purple-600" />,
    },
    {
      id: "04",
      title: "Build and Iterate",
      description:
        "We ship in 2-week sprints with demos, code reviews, and regular check-ins. You get predictable output and transparent progress.",
      icon: <IoRocketOutline className="w-6 h-6 text-teal-600" />,
    },
  ];

  return (
    <section id="howwework" className="py-20 bg-gray-50/50 min-w-full font-inter">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            How we work with you
          </h2>
          <p className="text-lg text-gray-600">
            A simple, transparent process designed to get us coding and
            delivering value within days, not months.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-300 md:left-1/2 transform md:-translate-x-1/2" />

          <div className="space-y-20 w-full">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`relative flex flex-col md:flex-row ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Connector Dot */}
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute left-2 top-2 w-12 h-12 p-1 rounded-full bg-white border-2 border-blue-500 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center shadow-sm"
                  >
                    {step.icon}
                  </motion.div>

                  {/* Number Watermark */}
                  <span
                    className={`absolute text-5xl font-bold text-blue-900 md:text-6xl ${
                      isLeft ? "md:-left-24" : "md:-right-24"
                    } top-0 ${isMobile && `left-16`} pointer-events-none`}
                  >
                    {step.id}
                  </span>

                  {/* Content */}
                  <div
                    className={`mt-14 ${isMobile && `ml-16`} md:mt-0 md:w-1/2 ${
                      isLeft
                        ? "md:pr-10 text-left"
                        : "md:pl-10 text-left md:text-right"
                    }`}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
