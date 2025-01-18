import React from "react";
import ServiceSlider from "../components/ServiceSlider";

const Services: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-thin text-gray-800 text-center mb-12">
          Service <span className="font-bold text-yellow-600">Features</span>
        </h1>
        <ServiceSlider />
      </div>
    </div>
  );
};

export default Services;

