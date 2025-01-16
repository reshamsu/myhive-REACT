import React, { useState, useEffect } from "react";
import csImage from "../assets/cs.jpeg";
import accImage from "../assets/acc.jpeg";
import salesImage from "../assets/sales.jpeg";
import bg2 from "../assets/4.png";

const PlatformFeature: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => (
  <div className="bg-zinc-700 p-6 rounded-2xl shadow-lg flex items-center justify-center text-zinc-100 transition-all duration-300 hover:bg-amber-600 hover:text-zinc-900 group">
    <div>
      <h4 className="text-xl font-semibold mb-2 group-hover:text-zinc-900">
        {title}
      </h4>
      <p className="text-sm text-zinc-300 group-hover:text-zinc-800">
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
    <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
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
      title: "Customer Support",
      description: "Provide exceptional support with automated tools",
    },
    {
      title: "Human Resources",
      description: "Streamline HR processes and employee management",
    },
    {
      title: "Finance & Accounting",
      description: "Automate financial tasks and reporting",
    },
    { title: "E-Commerce", description: "Manage your online store with ease" },
    {
      title: "Website Management",
      description: "Build and maintain your web presence effortlessly",
    },
  ];

  return (
    <div className="py-32 px-4 bg-amber-500 relative">
      <div 
        className="absolute inset-0 bg-contain opacity-50"
        style={{ backgroundImage: `url(${bg2})` }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <h3 className="text-4xl font-thin mb-8 text-zinc-800 text-center">
          Our <span className="font-bold">Platform</span>
        </h3>
        <p className="text-xl leading-relaxed text-zinc-800 max-w-4xl mx-auto mb-16 text-center">
          The HiVE Solution integrates AI-driven automation and secure licensed
          payment processing to optimize operations across:
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <PlatformFeature key={index} {...feature} />
            ))}
          </div>
          <ImageScroller />
        </div>
      </div>
    </div>
  );
};

export default Platform;

