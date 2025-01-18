import React from "react";
import AboutSection from "../components/AboutSection";
import Platform from "../components/Platform";
import CoreValues from "../components/CoreValues";
import WhyHive from "../components/WhyHive";

const About: React.FC = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <AboutSection />
      <Platform />
      <CoreValues />
      <WhyHive />
    </div>
  );
};

export default About;
