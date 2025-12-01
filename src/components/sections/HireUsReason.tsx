export default function HireUsReason() {
  // const color = "#323a61"
  return (
    <section className="py-8 bg-linear-to-b from-secondary to-primary text-black w-full">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center gap-8 justify-center w-full font-inter">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            What you can hire us for?
          </h2>

          <div className="flex flex-col md:flex-row gap-4 items-stretch w-full">
            <div className="flex flex-col gap-4 p-4 w-full bg-white shadow-2xl border border-white ">
              <img
                loading="lazy"
                decoding="async"
                width="78"
                height="71"
                src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/Innovative.svg"
                alt="Engineering"
              />
              <p className="font-bold text-gray-900 text-lg">White Label Engineering</p>

              <p className="text-gray-600 leading-relaxed">
                We act as your internal engineering squad. You keep the client
                relationship and brand; we handle the heavy lifting on web,
                mobile, and backend development.
              </p>
            </div>

            <div className="flex flex-col gap-4 p-4 w-full bg-white shadow-2xl border border-white ">
              <img
                loading="lazy"
                decoding="async"
                width="69"
                height="71"
                src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/Industry.svg"
                alt="Startups"
              />
              <p className="font-bold text-gray-900 text-lg">
                Dedicated product squad for startups
              </p>

              <p className="text-gray-600 leading-relaxed">
                We give you a cross-functional team (full-stack devs, QA,
                optional PM) that plugs into your roadmap and workflow. You get
                the output of a full engineering team at the cost of one U.S.
                senior engineer.
              </p>
            </div>

            <div className="flex flex-col gap-4 p-4 w-full bg-white border shadow-2xl border-white ">
              <img
                loading="lazy"
                decoding="async"
                width="74"
                height="71"
                src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/Scalability.svg"
                alt="Roboto"
              />
              <p className="font-bold text-gray-900 text-lg">AI and automation projects</p>

              <p className="text-gray-600 leading-relaxed">
                We build AI-powered tools that save time and cut costs: internal
                copilots, chatbots, workflow automation, dashboards, OCR and
                data pipelines.
              </p>
            </div>
          </div>

          <p className="text-base font-poppins text-white font-semibold text-center">
            We are not a freelancer pool. We are a stable, managed engineering
            team
          </p>
        </div>
      </div>
    </section>
  );
}
