import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-zinc-800 text-white text-center py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold leading-tight mb-6">
          Empower Your Business with{" "}
          <span className="text-amber-500">AI-Powered Solutions</span>
        </h1>
        <p className="text-lg leading-relaxed mb-8">
          Streamline operations, optimize workflows, and take control with HiVE
          – the all-in-one platform tailored for business success.
        </p>
        <div className="space-y-4 sm:space-x-4 sm:space-y-0 sm:flex sm:justify-center">
          <button className="bg-amber-500 hover:bg-amber-700 text-white py-3 px-6 rounded-lg shadow-lg transform transition duration-200 hover:scale-105">
            Get Started
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-3 px-6 rounded-lg shadow-lg transform transition duration-200 hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
