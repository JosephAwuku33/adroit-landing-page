import { FiPhoneCall, FiPenTool, FiUsers } from "react-icons/fi";
import { IoRocketOutline } from "react-icons/io5";

export default function HowWeWork() {
  const steps = [
    {
      id: "01",
      title: "Quick Discovery Call",
      description:
        "We learn about your projects, tech stack, and exactly where your current capacity is breaking in a focused 20-minute chat.",
      // Using FiPhoneCall
      icon: <FiPhoneCall className="w-6 h-6 text-blue-600" />,
      color: "bg-blue-50 border-blue-100",
    },
    {
      id: "02",
      title: "Shape the Engagement",
      description:
        "We agree on the model: white-label, dedicated squad, or project-based. You see a clear plan, timeline, and monthly cost.",
      // Using FiPenTool
      icon: <FiPenTool className="w-6 h-6 text-indigo-600" />,
      color: "bg-indigo-50 border-indigo-100",
    },
    {
      id: "03",
      title: "Onboard the Squad",
      description:
        "We plug into your tools (Slack, Jira, GitHub). We align on sprint lengths, demo days, and communication rhythm immediately.",
      // Using FiUsers
      icon: <FiUsers className="w-6 h-6 text-purple-600" />,
      color: "bg-purple-50 border-purple-100",
    },
    {
      id: "04",
      title: "Build and Iterate",
      description:
        "We ship in 2-week sprints with demos, code reviews, and regular check-ins. You get predictable output and transparent progress.",
      // Using IoRocketOutline for a dynamic look
      icon: <IoRocketOutline className="w-6 h-6 text-teal-600" />,
      color: "bg-teal-50 border-teal-100",
    },
  ];

  return (
    <section id="howwework" className="py-20 bg-gray-50/50 w-full font-inter">
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

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group relative bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50/50 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Top Section: Icon & Number */}
              <div className="flex justify-between items-start mb-6">
                {/* Icon Circle */}
                <div
                  className={`p-3 rounded-xl ${step.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  {step.icon}
                </div>

                {/* Watermark Number */}
                <span className="text-4xl font-bold text-blue-900 lg:text-gray-100 lg:group-hover:text-blue-500 transition-colors duration-300 select-none">
                  {step.id}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {step.description}
              </p>

              {/* Decorative bottom line */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gray-50 group-hover:bg-blue-500/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
