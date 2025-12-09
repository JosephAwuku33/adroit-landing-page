import { useState } from "react";
import { faqs } from "../../data/faq";
import { AccordionItem } from "../ui/Accordion";

export default function FAQ() {
  // State to track which index is currently open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Toggle logic: if clicking open item, close it; otherwise open new one
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-16 bg-white font-inter">
      <div className="container mx-auto px-6 md:px-16">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Questions teams usually ask us
          </h2>
        </div>

        {/* FAQ List */}
        <div className="bg-white p-4 md:p-8">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              item={faq}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
