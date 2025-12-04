export default function HireUsReason() {
  // const color = "#323a61"
  return (
    <section id="whatwedo" className="py-8 relative text-black w-full">
      {/* img */}
      <div className="absolute inset-0 w-full">
        <img
          className="object-cover w-full h-full"
          alt=""
          src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?q=80&w=917&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>

      {/* overlay */}
      <div className="absolute inset-0 w-full bg-gray-100 opacity-30" />

      {/* main content */}
      <div className="container mx-auto relative px-6 md:px-12 z-10">
        <div className="flex flex-col items-center gap-8 justify-center w-full font-inter">
          <h2 className="text-3xl md:text-4xl text-center font-extrabold text-white/95 tracking-tight">
            What you can hire us for?
          </h2>

          <div className="flex flex-col md:flex-row gap-4 items-stretch w-full">
            <div className="flex flex-col gap-4 p-6 w-full rounded-xl bg-white shadow-2xl border border-white ">
              <img
                loading="lazy"
                decoding="async"
                width="78"
                height="71"
                src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/Innovative.svg"
                alt="Engineering"
              />
              <p className="font-bold text-gray-900 text-lg">
                White Label Engineering
              </p>

              <p className="text-gray-600 leading-relaxed">
                We act as your internal engineering squad. You keep the client
                relationship and brand; we handle the heavy lifting on web,
                mobile, and backend development.
              </p>
            </div>

            <div className="flex flex-col gap-4 rounded-xl p-6 w-full bg-white shadow-2xl border border-white ">
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

            <div className="flex flex-col gap-4 rounded-xl  p-6 w-full bg-white border shadow-2xl border-white ">
              <img
                loading="lazy"
                decoding="async"
                width="74"
                height="71"
                src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/Scalability.svg"
                alt="Roboto"
              />
              <p className="font-bold text-gray-900 text-lg">
                AI and automation projects
              </p>

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
