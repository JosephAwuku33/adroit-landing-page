// import { FiCheck } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

function ListItemText({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
      <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
    </li>
  );
}

export default function EngagementModels() {
  const items = [
    {
      id: "1",
      img: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Agency Overflow Squad",
      subtitle: "Perfect for agencies needing extra capacity",
      listItems: [
        "2 full-stack engineers + QA",
        "White-label, under your brand",
        "Ideal for ongoing client projects",
      ],
    },
    {
      id: "2",
      img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Startup Product Squad",
      subtitle: "Best value for growing startups",
      listItems: [
        "2-3 full engineers + QA",
        "Part-time PM included",
        "Embedded into your team and roadmap",
      ],
    },
    {
      id: "3",
      img: "https://media.istockphoto.com/id/1446470674/photo/mvp-minimum-viable-product-concept-for-lean-startup-life-cycle-of-product-development.jpg?s=1024x1024&w=is&k=20&c=TeprYs0JavadJ3toBS-rvpLfob2ZADtOjXAamf0fGKg=",
      title: "Fixed-scope MVP Build",
      subtitle: "Complete project delivery",
      listItems: [
        "Discovery + design + build + launch",
        "Web or mobile product",
        "Full documentation included",
      ],
    },
  ];

  return (
    <section id="models" className="bg-gray-50 py-20 w-full font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Simple, transparent engagement models
          </h2>
        </div>

        {/* items */}
        <div className="grid grid-cols-1 lg:grid-cols-3 place-items-stretch gap-8">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`
                relative flex flex-col gap-6 p-8 rounded-2xl bg-white
                border border-gray-200 shadow-sm
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-lg
                ${index === 1 ? "ring-2 ring-primary/30 shadow-primary/10" : ""}
              `}
            >
              {/* img */}
              <div className="w-full h-44 overflow-hidden rounded-xl">
                <img
                  src={item.img}
                  className="w-full h-full object-cover"
                  alt={item.title}
                />
              </div>

              {/* badge thing */}
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="rounded-full flex items-center gap-2 px-4 py-1.5 bg-primary text-white shadow-sm">
                    <FaStar size={14} />
                    <p className="font-medium text-xs">Most popular</p>
                  </div>
                </div>
              )}

              <div className="w-full">
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                {/* Subtitle */}
                <p className="text-gray-600 text-sm">{item.subtitle}</p>
              </div>

              {/* list texts */}
              <div className="flex flex-col gap-3 pt-2">
                {item.listItems.map((listItem, index) => (
                  <ul key={index} className="flex flex-col">
                    <ListItemText text={listItem} />
                  </ul>
                ))}
              </div>

              {/* Get Started Button */}
              <button
                className={`
                  mt-auto w-full rounded-full py-3 text-sm font-semibold
                  transition-colors duration-200
                  ${
                    index === 1
                      ? "bg-primary text-white hover:bg-primary/90"
                      : "bg-white text-gray-900 border border-gray-300 hover:border-gray-500"
                  }
                `}
              >
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
