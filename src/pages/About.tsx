import React from "react";
import Platform from "../components/Platform";
import CoreValues from "../components/CoreValues";
import WhyHive from "../components/WhyHive";
import AboutSection from "../components/AboutSection";

const About: React.FC = () => {
  return (
    <div>
      <AboutSection/>
      <Platform />
      <CoreValues />
      <WhyHive />
    </div>
  );
};

export default About;
