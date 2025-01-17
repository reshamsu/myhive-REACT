import React from "react";
import bg2 from "../assets/4.png";
import bg1 from "../assets/bg1.jpeg"
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-zinc-900 to-zinc-800 text-zinc-100 py-20 md:py-32 px-4 md:px-6 overflow-hidden relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${bg2})` }}
      ></div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center relative z-10">
        <motion.div 
          className="lg:w-1/2 text-left mb-12 lg:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-thin leading-tight mb-6">
            Elevate Your
            <span className="font-bold block mt-2 text-amber-500">Business</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-12 text-zinc-300 max-w-xl">
            Experience the future of operations with HiVE – the all-in-one
            platform designed for unparalleled success.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-amber-500 text-zinc-900 rounded-full font-semibold text-lg hover:bg-amber-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-zinc-900 shadow-lg"
            >
              Get Started
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-amber-500 text-amber-500 rounded-full font-semibold text-lg hover:bg-amber-500 hover:text-zinc-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-zinc-900 shadow-lg"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
        <motion.div 
          className="lg:w-1/2 relative mt-12 lg:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-full h-96 bg-gradient-to-br from-amber-500 to-amber-700 rounded-3xl transform rotate-3 transition-transform duration-500 hover:rotate-0 shadow-2xl"></div>
          <img
            src={bg1 || "/placeholder.svg"}
            alt="HiVE Platform"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl shadow-2xl transform -rotate-3 transition-transform duration-500 hover:rotate-0"
          />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-zinc-700 rounded-full opacity-50 blur-2xl"></div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-700 rounded-full opacity-50 blur-2xl"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

