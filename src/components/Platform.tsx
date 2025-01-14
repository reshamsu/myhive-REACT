import React from "react";

const Platform: React.FC = () => {
  return (
    <div className="bg-white p-10 mt-10 text-center max-w-full">
      <h3 className="text-2xl font-semibold">Our Platform</h3>
      <p className="mt-4 text-lg max-w-4xl mx-auto">
        The HiVE Solution integrates AI-driven automation and secure licensed
        payment processing to optimize operations across:
      </p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
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
            className="bg-amber-500 p-4 rounded-lg shadow-md flex items-center justify-center text-white font-semibold"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Platform;
