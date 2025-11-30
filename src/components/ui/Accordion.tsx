import { FaChevronDown } from "react-icons/fa6";
import type { FAQItem } from "../../data/faq";

export const AccordionItem: React.FC<{
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className={`w-full py-6 flex items-center justify-between gap-4 text-left focus:outline-none group`}
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span
          className={`text-lg font-medium transition-colors duration-300 ${
            isOpen ? "text-blue-600" : "text-gray-900 group-hover:text-blue-600"
          }`}
        >
          {item.question}
        </span>

        {/* Icon with rotation animation */}
        <span
          className={`shrink-0 ml-4 p-2 rounded-full transition-all duration-300 ${
            isOpen
              ? "bg-blue-50 text-blue-600 rotate-180"
              : "bg-transparent text-gray-400 group-hover:bg-gray-50"
          }`}
        >
          <FaChevronDown className="w-4 h-4" />
        </span>
      </button>

      {/* Smooth Height Animation using Grid 
        This is a pure CSS trick to animate height from 0 to auto 
      */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-6 pr-4 text-gray-600 leading-relaxed">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
};
