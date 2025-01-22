import React from "react";
import bg2 from "../assets/4.png";
import bg1 from "../assets/bg1.jpeg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {

  const goToPage = useNavigate();

  const handlePrice = () => {
    goToPage("/pricing");
  };

  const handleFeatuers = () => {
    goToPage("/services");
  };


  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-400 text-gray-800 py-20 md:py-32 px-4 md:px-6 overflow-hidden relative">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 md:opacity-15"
        style={{ backgroundImage: `url(${bg2})` }}
      ></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center relative z-10">
        {/* Left Content */}
        <motion.div
          className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl leading-tight mb-6 uppercase font-bold">
            Elevate Your
            <span className="font-bold block mt-2 text-yellow-600">
              Business
            </span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-12 text-zinc-900 font-medium max-w-xl mx-auto lg:mx-0">
            Experience the future of operations with HiVE – the all-in-one
            platform designed for unparalleled success.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-yellow-600 text-gray-800 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-gray-800 shadow-lg"
              aria-label="Get Started with HiVE"
              onClick={handlePrice}
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-yellow-600 text-yellow-600 rounded-full font-bold text-lg hover:bg-yellow-600 hover:text-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-gray-800 shadow-lg"
              aria-label="Learn More about HiVE"
              onClick={handleFeatuers}
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* Right Image Content */}
        <motion.div
          className="lg:w-1/2 w-full h-64 md:h-96 relative mt-12 lg:mt-0 flex justify-center items-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-full h-full bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-3xl shadow-2xl transform md:rotate-3 transition-transform duration-500 hover:rotate-0"></div>
          <img
            src={bg1 || "/placeholder.svg"}
            alt="HiVE Platform"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl shadow-2xl md:transform -rotate-3 transition-transform duration-500 hover:rotate-0"
            loading="eager"
          />
          <div className="absolute -bottom-10 -right-10 w-32 h-32 md:w-40 md:h-40 bg-gray-700 rounded-full opacity-50 blur-2xl"></div>
          <div className="absolute -top-10 -left-10 w-32 h-32 md:w-40 md:h-40 bg-yellow-700 rounded-full opacity-50 blur-2xl"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
