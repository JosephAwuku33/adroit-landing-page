// import { FiCheck } from "react-icons/fi";

import { FaStar } from "react-icons/fa";

function ListItemText({ text }: { text: string }) {
  return (
    <li className="flex items-stretch gap-3 pl-4">
      {/* icon container keeps icon at top even if text wraps */}
      {/* <span className="mt-1 p-1 bg-red-50 text-green-500 rounded-full shrink-0">
        <FiCheck size={16} />
      </span> */}
      <p className="text-base text-gray-700 leading-relaxed">{text}</p>
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
    <section className="bg-white/10 py-16 w-full font-inter">
      <div className="container mx-auto px-4 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Simple, transparent engagement models
          </h2>
        </div>

        {/* items */}
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-stretch px-2 gap-6">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`${
                index === 1 && `shadow-lg shadow-teal-100`
              } bg-white rounded-xl border-gray-200 shadow-sm border hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50/50 transition-all duration-300 hover:-translate-y-2 hover:scale-110 group relative flex flex-col items-start gap-4 p-6`}
            >
              {/* img */}
              <div className="w-full h-1/2">
                <img
                  src={item.img}
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
              {/* top thing */}
              {index === 1 && (
                <div className="absolute -top-5 left-0 mx-auto w-full flex items-center justify-center">
                  <div className="rounded-full flex items-center gap-2 px-4 py-1.5 bg-pink-200">
                    <FaStar color="#f341a9" size={18} />

                    <p className="text-primary font-medium text-sm">
                      Most popular
                    </p>
                  </div>
                </div>
              )}
              <div className="space-y-4 w-full">
                {/* Title */}
                <h3 className="text-xl tracking-tight font-semibold text-gray-800 mb-3 group-hover:text-blue-900">
                  {item.title}
                </h3>
                {/* Subtitle */}
                <p className="pl-1 text-gray-600 text-base tracking-tight ">
                  {item.subtitle}
                </p>
              </div>

              {/* list texts */}
              <div className="flex flex-col gap-4">
                {item.listItems.map((listItem, index) => (
                  <ul key={index} className="flex flex-col">
                    <ListItemText text={listItem} />
                  </ul>
                ))}
              </div>

              {/* Get Started Button */}
              <button
                className={`${
                  index !== 1
                    ? `text-black bg-white border border-gray-400`
                    : `text-white bg-primary`
                } text-center p-2 rounded-full w-full`}
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
