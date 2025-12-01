// import { FiCheck } from "react-icons/fi";

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
      title: "Startup Product Squd",
      subtitle: "Best value for growingn startups",
      listItems: [
        "2-3 full engineers + QA",
        "Part-time PM included",
        "Embedded into your team and roadmap",
      ],
    },
    {
      id: "3",
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
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Simple, transparent engagement models
          </h2>
        </div>

        {/* items */}
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-stretch px-4 gap-6">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="bg-white border rounded-xl border-gray-200 hover:scale-110 shadow-xl group relative flex flex-col items-start gap-12 p-6"
            >
              {/* top thing */}
              {index === 1 && (
                <div className="absolute -top-3 left-0 mx-auto w-full flex items-center justify-center">
                  <div className="rounded-full p-2 bg-primary">
                    <p className="text-white">Most popular</p>
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
                {item.listItems.map((listItem) => (
                  <ul className="flex flex-col">
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
