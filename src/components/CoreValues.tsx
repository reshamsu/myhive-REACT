import React from "react";

const CoreValues: React.FC = () => {
  return (
    <div className="bg-zinc-900 py-32 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-4xl font-thin mb-16 text-zinc-100">
          Core <span className="font-bold">Values</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation",
              description: "We strive to be at the forefront of technology.",
            },
            {
              title: "Security",
              description: "Safeguarding sensitive data and transactions.",
            },
            {
              title: "Efficiency",
              description:
                "Streamlining processes to save time and reduce errors.",
            },
            {
              title: "Scalability",
              description: "Growing with your business needs.",
            },
            {
              title: "Trust",
              description: "Building reliable and transparent partnerships.",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="bg-zinc-800 p-8 rounded-2xl shadow-lg text-left transition-all duration-300 hover:bg-amber-500 group"
            >
              <h4 className="text-2xl font-light text-amber-500 group-hover:text-zinc-900 mb-4">
                {value.title}
              </h4>
              <p className="text-zinc-300 group-hover:text-zinc-900">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
