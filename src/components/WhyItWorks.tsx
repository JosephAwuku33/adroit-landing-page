export default function WhyItWorks() {
  return (
    <section className="py-8 bg-white/85 w-full">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center gap-8 justify-center w-full font-inter">
          <h2 className="text-3xl font-bold">What you can hire us for?</h2>

          <div className="flex flex-row gap-4 items-center w-full">
            <div className="flex flex-col gap-2 p-4 shadow-lg border border-gray-400 rounded-xl w-full">
              <p className="font-bold text-lg">White Label Engineering</p>

              <p className="text-base">
                We act as your internal engineering squad. You keep the client
                relationship and brand; we handle the heavy lifting on web,
                mobile, and backend development.
              </p>
            </div>

            <div className="flex flex-col gap-2 p-4 shadow-lg border border-gray-400 rounded-xl w-full">
              <p className="font-bold text-lg">
                Dedicated product squad for startups
              </p>

              <p className="text-base">
                We give you a cross-functional team (full-stack devs, QA,
                optional PM) that plugs into your roadmap and workflow. You get
                the output of a full engineering team at the cost of one U.S.
                senior engineer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
