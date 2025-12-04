import CountUp from "react-countup";

export default function TrustedCount() {
  const countRecords = [
    {
      id: "1",
      number: 10,
      text: "Years in business",
    },

    {
      id: "2",
      number: 40,
      text: "Engineers",
    },

    {
      id: "3",
      number: 100,
      text: "Enterprise Projects",
    },

    {
      id: "4",
      number: 360,
      text: "Solutions Delivered",
    },
  ];

  return (
    <section className="py-16 w-full ">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 place-items-center md:flex md:flex-row md:items-stretch md:justify-evenly gap-8 w-full">
          {countRecords.map((item, index) => (
            <div key={item.id} className="flex flex-col items-center">
              <h3 className="text-4xl md:text-5xl font-hepta-slab font-bold text-gray-900">
                <CountUp
                  enableScrollSpy={true}
                  end={item.number}
                  duration={15}
                />
                {`${index === 3 ? "°" : "+"} `}
              </h3>
              <p className="font-inter text-sm md:text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
