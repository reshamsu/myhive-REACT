import type React from "react";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonial";
import CallToAction from "../components/CallToAction";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 text-gray-800">
      <HeroSection />
      <Features />
      <Statistics />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;
