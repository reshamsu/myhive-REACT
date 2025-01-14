import React from "react";

const WhyHive: React.FC = () => {
  return (
    <div className="mt-10 text-center bg-white p-10">
      <h3 className="text-2xl font-semibold text-gray-500">Why Choose HiVE?</h3>
      <p className="mt-4 text-lg text-white max-w-4xl mx-auto">
        Here’s what sets us apart from the competition:
      </p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
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
          <div key={index} className="bg-amber-500 p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-bold text-zinc-900">{item.title}</h4>
            <p className="mt-2 text-zinc-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyHive;
