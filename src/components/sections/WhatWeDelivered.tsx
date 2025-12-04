import { FiSmartphone } from "react-icons/fi";
import { IoCubeOutline } from "react-icons/io5";
import { LuBuilding2 } from "react-icons/lu";
import { motion } from "motion/react";
import { Truck } from "../icons/WhatWeDelivered/Truck";
import { Telephone } from "../icons/WhatWeDelivered/Telephone";
import { Legal } from "../icons/WhatWeDelivered/Legal";

export default function WhatWeDelivered() {
  const items = [
    {
      id: "01",
      title: "Beverage logistics platform",
      description:
        "We built and scaled an ordering and logistics system for a major beverage brand, handling thousands of orders and complex delivery rules.",
      icon: <IoCubeOutline className="w-6 h-6 text-primary" />,
      svgIcon: <Truck />,
      imgIcon:
        "https://www.appventurez.com/wp-content/themes/appventurez_theme/assets/images/industy-NEW/logistics.svg",
      color: "bg-[#505058]",
    },
    {
      id: "02",
      title: "Telco customer tools",
      description:
        "We supported a telecom giant with digital tools that improved customer experience and internal workflows.",
      icon: <FiSmartphone className="w-6 h-6 text-primary" />,
      svgIcon: <Telephone />,
      imgIcon:
        "https://www.appventurez.com/wp-content/themes/appventurez_theme/assets/images/industy-NEW/automotives.svg",
      color: "bg-[#505058]",
    },
    {
      id: "03",
      title: "Legal and enterprise platforms",
      description:
        "We delivered secure, workflow-heavy platforms for institutional and legal clients, with strict uptime and data requirements.",
      icon: <LuBuilding2 className="w-6 h-6 text-primary" />,
      svgIcon: <Legal />,
      imgIcon:
        "https://www.appventurez.com/wp-content/themes/appventurez_theme/assets/images/industy-NEW/banking.svg",
      color: "bg-[#505058]",
    },
  ];

  return (
    <section className="bg-white py-20 font-inter w-full">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            What we've delivered
          </h2>
        </div>

        {/* Zig-Zag Layout */}
        <div className="flex flex-col gap-20">
          {items.map((item, index) => {
            const reversed = index % 2 !== 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`flex flex-col md:flex-row items-center ${
                  reversed ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Icon / Image Block */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className=" flex items-center justify-center w-full md:w-[40%] h-full"
                >
                  {item.svgIcon}
                </motion.div>

                {/* Text Content */}
                <div className="md:w-[50%]">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
