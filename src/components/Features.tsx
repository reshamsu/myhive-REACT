import React from "react";
import { FaRobot, FaChartLine, FaLock, FaCogs } from "react-icons/fa";

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="bg-gray-200 rounded-2xl p-8 hover:bg-gray-200 transition-all duration-300 flex flex-col items-start">
    <div className="text-4xl mb-6 text-yellow-600">{icon}</div>
    <h3 className="text-2xl font-light mb-4 text-zinc-900">{title}</h3>
    <p className="text-zinc-700">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: <FaRobot />,
      title: "AI-Powered Automation",
      description:
        "Transform your business with intelligent workflows that save time and reduce errors.",
    },
    {
      icon: <FaChartLine />,
      title: "Real-Time Analytics",
      description:
        "Make data-driven decisions with real-time insights into your sales, finances, and operations.",
    },
    {
      icon: <FaLock />,
      title: "Secure Payment Processing",
      description:
        "Secure, multi-currency payment solutions with built-in fraud detection to protect your business.",
    },
    {
      icon: <FaCogs />,
      title: "End-to-End Integration",
      description:
        "Unified solutions for seamless collaboration across sales, marketing, HR, and finance.",
    },
  ];

  return (
    <div className="bg-white py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-thin text-center text-zinc-500 mb-16 md:mb-24">
          Key <span className="font-bold">Features</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
