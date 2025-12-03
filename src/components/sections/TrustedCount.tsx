import CountUp from "react-countup";

export default function TrustedCount() {
  const countRecords = [
    {
      number: 10,
      text: "Years in business",
    },

    {
      number: 40,
      text: "Engineers",
    },

    {
      number: 100,
      text: "Enterprise Projects",
    },

    {
      number: 360,
      text: "Solutions Delivered",
    },
  ];

  return (
    <section className="py-16 w-full ">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-row items-center justify-evenly gap-4 w-full">
          {countRecords.map((item, index) => (
            <div className="flex flex-col items-center gap-3">
              <h3 className="text-4xl md:text-5xl font-hepta-slab font-bold text-primary">
                <CountUp end={item.number} duration={15} />
                {`${index === 3 ? "°" : "+"} `}
              </h3>
              <p className="font-inter-tight">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
