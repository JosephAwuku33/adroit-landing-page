const items = [
  {
    id: "1",
    text: [
      "1. Build smarter, faster, and more efficient security & communication solutions with AI.",
      "2. Unlock innovation and drive growth; from real‑time transcription to sentiment analysis at scale.",
      "3. Transform your operations with powerful automation, predictive intelligence, and next‑gen AI.",
    ],
    imgUrl:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: "2",
    text: [
      "4. Custom AI solutions: from concept to deployment to 24/7 support.",
      "5. Multimodal AI — text, voice, and visuals integrated seamlessly for a global audience.",
      "6. Custom AI solutions designed to deliver maximum value at minimal cost.",
    ],
    imgUrl:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: "3",
    text: [
      "7. AI that scales with your business, while keeping expenses under control.",
      "8. Smarter business decisions, bigger savings, lower overhead.",
      "9. Affordable AI for real-time insights, analytics, and intelligent automation.",
      "10. Optimize workflows, reduce costs, and accelerate growth with AI.",
    ],
    imgUrl:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// 1. Build smarter, faster, and more efficient security & communication solutions with AI.
// 2. Unlock innovation and drive growth; from real‑time transcription to sentiment analysis at scale.
// 3. Transform your operations with powerful automation, predictive intelligence, and next‑gen AI.
// 4. Custom AI solutions: from concept to deployment to 24/7 support.
// 5. Multimodal AI — text, voice, and visuals integrated seamlessly for a global audience.
// 6. Custom AI solutions designed to deliver maximum value at minimal cost.
// 7. AI that scales with your business, while keeping expenses under control.
// 8. Smarter business decisions, bigger savings, lower overhead.
// 9. Affordable AI for real-time insights, analytics, and intelligent automation.
// 10. Optimize workflows, reduce costs, and accelerate growth with AI.
export default function AISolutions() {
  return (
    <section className="py-16 w-full font-inter">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl font-inter md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Artificial Intelligence Solutions
          </h2>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-stretch">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 p-3 bg-white rounded-2xl border-gray-200 border"
            >
              {/* Image */}
              <div className="w-full h-1/2 object-cover ">
                <img
                  src={item.imgUrl}
                  alt={`AI Solution ${item.id}`}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Texts */}
              <div className="mt-2">
                {item.text.map((line, lineIndex) => (
                  <p key={lineIndex} className="text-gray-700 text-base">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
