import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-zinc-900 text-zinc-100 py-32 px-4 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-left mb-12 lg:mb-0">
          <h1 className="text-5xl lg:text-7xl font-thin leading-tight mb-6">
            Elevate Your
            <span className="font-bold block mt-2">Business</span>
          </h1>
          <p className="text-xl leading-relaxed mb-12 text-zinc-400 max-w-xl">
            Experience the future of operations with HiVE – the all-in-one
            platform designed for unparalleled success.
          </p>
          <div className="space-x-4">
            <button className="px-6 py-3 bg-amber-500 text-zinc-900 rounded-full font-semibold text-lg hover:bg-amber-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-zinc-900">
              Get Started
            </button>
            <button className="px-6 py-3 border-2 border-zinc-100 text-zinc-100 rounded-full font-semibold text-lg hover:bg-zinc-100 hover:text-zinc-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-zinc-100 focus:ring-offset-2 focus:ring-offset-zinc-900">
              Learn More
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="w-full h-96 bg-gradient-to-br from-amber-500 to-amber-700 rounded-3xl transform rotate-3 transition-transform duration-500 hover:rotate-0"></div>
          <img
            src="/placeholder.svg?height=400&width=600"
            alt="HiVE Platform"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl shadow-2xl transform -rotate-3 transition-transform duration-500 hover:rotate-0"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
