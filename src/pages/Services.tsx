import React from "react";
import ServiceSlider from "../components/ServiceSlider";
import bg2 from "../assets/4.png";

const Services: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-500 min-h-screen py-20 px-4">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-center opacity-25 md:opacity-15 bg-contain"
        style={{ backgroundImage: `url(${bg2})` }}
      ></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-5xl font-thin text-gray-800 text-center mb-12">
          Service <span className="font-bold text-yellow-600">Features</span>
        </h1>
        <ServiceSlider />
      </div>
    </div>
  );
};

export default Services;
