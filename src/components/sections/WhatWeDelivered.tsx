import { FiSmartphone } from "react-icons/fi";
import { IoCubeOutline } from "react-icons/io5";
import { LuBuilding2 } from "react-icons/lu";

export default function WhatWeDelivered() {
  const items = [
    {
      id: "01",
      title: "Beverage logistics platform",
      description:
        "We built and scaled an ordering and logistics system for a major beverage brand, handling thousands of orders and complex delivery rules.",
      icon: <IoCubeOutline className="w-6 h-6 text-primary" />,
      color: "bg-[#505058]",
    },
    {
      id: "02",
      title: "Telco customer tools",
      description:
        "We supported a telecom giant with digital tools that improved customer experience and internal workflows.",
      icon: <FiSmartphone className="w-6 h-6 text-primary" />,
      color: "bg-[#505058]",
    },
    {
      id: "03",
      title: "Legal and enterprise platforms",
      description:
        "We delivered secure, workflow-heavy platforms for institutional and legal clients, with strict uptime and data requirements.",
      icon: <LuBuilding2 className="w-6 h-6 text-primary" />,
      color: "bg-[#505058]",
    },
  ];

  return (
    <section className="bg-white/35 py-16 w-full font-inter">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            What we've delivered
          </h2>
        </div>

        {/* items */}
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-stretch px-4 gap-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white group flex flex-col items-start gap-4 p-6"
            >
              {/* Icon */}
              <div
                className={`${item.color} p-3 rounded-xl group-hover:scale-110 group-hover:bg-pink-100`}
              >
                {item.icon}
              </div>
              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-blue-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
