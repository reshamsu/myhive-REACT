import React from "react";
import bg2 from "../assets/4.png";

const WhyHive: React.FC = () => {
  return (
    <div className="bg-gray-200 py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 relative">
      <div
        className="absolute inset-0 bg-contain opacity-50 hidden sm:block"
        style={{ backgroundImage: `url(${bg2})` }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h3 className="text-3xl sm:text-4xl font-thin mb-4 sm:mb-8 text-zinc-900">
          Why Choose <span className="font-bold">HiVE</span>?
        </h3>
        <p className="text-lg sm:text-xl leading-relaxed text-zinc-800 max-w-4xl mx-auto mb-8 sm:mb-16">
          Here's what sets us apart from the competition:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
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
              className="bg-zinc-700 p-6 sm:p-8 rounded-2xl shadow-lg text-center lg:text-left transition-all duration-300 hover:bg-yellow-600 group"
            >
              <h4 className="text-xl sm:text-2xl font-light text-yellow-600 group-hover:text-zinc-900 mb-2 sm:mb-4">
                {item.title}
              </h4>
              <p className="text-sm sm:text-base text-zinc-300 group-hover:text-zinc-900">
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
