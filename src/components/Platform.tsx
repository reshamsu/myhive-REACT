import React from "react";

const Platform: React.FC = () => {
  return (
    <div className="bg-zinc-800 py-32 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-4xl font-thin mb-8 text-zinc-100">
          Our <span className="font-bold">Platform</span>
        </h3>
        <p className="text-xl leading-relaxed text-zinc-300 max-w-4xl mx-auto mb-16">
          The HiVE Solution integrates AI-driven automation and secure licensed
          payment processing to optimize operations across:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            "Sales & Marketing",
            "Customer Support",
            "Human Resources",
            "Finance & Accounting",
            "E-Commerce",
            "Website Management",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-zinc-700 p-6 rounded-2xl shadow-lg flex items-center justify-center text-zinc-100 font-light text-xl transition-all duration-300 hover:bg-amber-500 hover:text-zinc-900"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Platform;
