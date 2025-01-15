import React from "react";

const WhyHive: React.FC = () => {
  return (
    <div className="bg-zinc-800 py-32 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-4xl font-thin mb-8 text-zinc-100">
          Why Choose <span className="font-bold">HiVE</span>?
        </h3>
        <p className="text-xl leading-relaxed text-zinc-300 max-w-4xl mx-auto mb-16">
          Here's what sets us apart from the competition:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            {
              title: "Licensed Merchant Platform",
              description: "Ensuring compliance and secure payments.",
            },
            {
              title: "End-to-End Automation",
              description: "Seamless business operations.",
            },
            {
              title: "Scalability",
              description: "Evolves with your business growth.",
            },
            {
              title: "AI-Driven Efficiency",
              description: "Improving performance and decision-making.",
            },
            {
              title: "Security & Compliance",
              description: "Protecting your data and ensuring peace of mind.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-zinc-700 p-8 rounded-2xl shadow-lg text-left transition-all duration-300 hover:bg-amber-500 group"
            >
              <h4 className="text-2xl font-light text-amber-500 group-hover:text-zinc-900 mb-4">
                {item.title}
              </h4>
              <p className="text-zinc-300 group-hover:text-zinc-900">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyHive;
