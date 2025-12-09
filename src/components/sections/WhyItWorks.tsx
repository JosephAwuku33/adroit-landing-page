import { FiAlertTriangle, FiCheckCircle, FiX, FiCheck } from "react-icons/fi";

// Problem Item (Red X)
function ListItemProblem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      {/* icon container keeps icon at top even if text wraps */}
      <span className="mt-1 p-1 bg-red-50 text-red-500 rounded-full shrink-0">
        <FiX size={16} />
      </span>
      <p className="text-base text-gray-700 leading-relaxed">{text}</p>
    </li>
  );
}

// Solution Item (Green Check)
function ListItemSolution({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      {/* icon container keeps icon at top even if text wraps */}
      <span className="mt-1 p-1 bg-green-50 text-green-600 rounded-full shrink-0">
        <FiCheck size={16} />
      </span>
      <p className="text-base text-gray-800 font-medium leading-relaxed">
        {text}
      </p>
    </li>
  );
}

export default function WhyItWorks() {
  return (
    <section className="py-16 bg-white/90 w-full font-inter">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="flex flex-col items-center gap-12 justify-center w-full">
          {/* Main Section Title */}
          <div className="text-center space-y-4 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Why this model works
            </h2>
            <p className="text-lg text-gray-600">
              We bridge the gap between expensive local hiring and unreliable
              outsourcing.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-stretch w-full md:px-8 lg:px-16">
            {/* --- Card 1: The Problem (Red Theme) --- */}
            <div className="flex flex-col gap-6 p-8 w-full bg-white border border-red-100 shadow-xl shadow-red-50/50 rounded-2xl hover:shadow-red-100/80 transition-all duration-300">
              {/* Card Title */}
              <div className="flex items-center gap-3 pb-4 border-b border-red-50">
                <div className="p-3 bg-red-50 rounded-full text-red-600">
                  <FiAlertTriangle size={24} />
                </div>
                <h3 className="font-bold text-xl text-gray-900">The Problem</h3>
              </div>

              {/* List with Red X icons */}
              <ul className="flex flex-col gap-6">
                <ListItemProblem text="U.S. senior dev rates often exceed $150/hr + benefits." />
                <ListItemProblem text="Agencies turning down profitable work due to capacity constraints." />
                <ListItemProblem text="Startups burning vital cash flow on slow in-house hiring." />
                <ListItemProblem text="Typical offshore horror stories: poor communication, missed deadlines, and timezone misalignment." />
              </ul>
            </div>

            {/* --- Card 2: Our Answer (Blue/Indigo Theme) --- */}
            <div className="flex flex-col gap-6 p-8 w-full bg-white border border-blue-100 shadow-xl shadow-blue-50/50 rounded-2xl hover:shadow-blue-100/80 transition-all duration-300 relative overflow-hidden">
              {/* Optional decorative background blur for modern feel */}
              <div className="absolute top-0 right-0 -mt-12 -mr-12 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

              {/* Card Title */}
              <div className="flex items-center gap-3 pb-4 border-b border-blue-50 relative z-10">
                <div className="p-3 bg-blue-50 rounded-full text-blue-600">
                  <FiCheckCircle size={24} />
                </div>
                <h3 className="font-bold text-xl text-gray-900">Our Answer</h3>
              </div>

              {/* List with Green Check icons */}
              <ul className="flex flex-col gap-6 relative z-10">
                <ListItemSolution text="Senior engineers at 50-60% of typical U.S. cost base." />
                <ListItemSolution text="Native English team with real-time 4+ hour overlap with EST." />
                <ListItemSolution text="Proven experience delivering for enterprise giants like Coca-Cola and MTN." />
                <ListItemSolution text="Clear, transparent process: daily sprints, live demos, rigorous code reviews, and documentation." />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
