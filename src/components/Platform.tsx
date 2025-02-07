import React, { useState, useEffect } from "react";
import csImage from "../assets/cs.jpeg";
import accImage from "../assets/acc.jpeg";
import salesImage from "../assets/sales.jpeg";
import bg2 from "../assets/4.png";

const PlatformFeature: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => (
  <div className="bg-zinc-700 p-4 sm:p-6 rounded-2xl shadow-lg flex items-center justify-center text-zinc-100 transition-all duration-300 hover:bg-yellow-600 hover:text-zinc-900 group">
    <div className="text-center lg:text-left">
      <h4 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-zinc-900">
        {title}
      </h4>
      <p className="text-xs sm:text-sm text-zinc-300 group-hover:text-zinc-800">
        {description}
      </p>
    </div>
  </div>
);

const ImageScroller: React.FC = () => {
  const images = [
    { src: csImage, alt: "HiVE Platform Customer Service" },
    { src: accImage, alt: "HiVE Platform Sales and Marketing" },
    { src: salesImage, alt: "HiVE Platform Accounting" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg ">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

const Platform: React.FC = () => {
  const features = [
    {
      title: "Sales & Marketing",
      description: "Boost your sales with AI-driven insights",
    },
    {
      title: "Customer Support & Administration",
      description: "Provide exceptional support with automated tools",
    },
    {
      title: "Finance & Accounting",
      description: "Automate financial tasks and reporting",
    },
    { title: "E-Commerce", description: "Manage your online store with ease" },
    {
      title: "Communication + More",
      description: "Enhance collaboration with AI-powered messaging and tools",
    },
  ];

  return (
    <div className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 bg-gray-200 relative">
      <div
        className="absolute inset-0 bg-contain opacity-20 hidden sm:block"
        style={{ backgroundImage: `url(${bg2})` }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <h3 className="text-3xl sm:text-4xl font-thin mb-4 sm:mb-8 text-zinc-800 text-center">
          Our <span className="font-bold">Platform</span>
        </h3>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-zinc-800 max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16 text-center">
          HiVE’s solution integrates Ai - driven automation and content with
          business CRM tools to evolve operations across:
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <PlatformFeature key={index} {...feature} />
            ))}
          </div>
          <div className="mt-8 lg:mt-0">
            <ImageScroller />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
