"use client";

import React from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Zap,
  Sparkles,
  BarChart3,
  Cloud,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useMediaQuery } from "../hooks/use-media-query";

interface Benefit {
  title: string;
  description: string;
  icon: React.ElementType;
}

const benefits: Benefit[] = [
  {
    title: "Saves Time & Cost",
    description:
      "All-in-One Cross-Functional platform specialized in a range of business functions, compared to the usual niched CRMs offering one line of function.",
    icon: Clock,
  },
  {
    title: "User Flexible",
    description:
      "Option to integrate user preferred applications & business tools such as WordPress, WhatsApp & more.",
    icon: Zap,
  },
  {
    title: "Innovative Advantage",
    description:
      "AI Driven platform evolving every day offering future developments and features ahead of the industry & now.",
    icon: Sparkles,
  },
  {
    title: "Consistent Performance",
    description: "Functions and platform as a whole driven by AI every second.",
    icon: BarChart3,
  },
  {
    title: "Saves Space",
    description:
      "Cloud Platform, compared to the usual applications that require installation & updates.",
    icon: Cloud,
  },
];

export default function KeyBenefits() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<number | null>(null);
  const touchStartX = useRef(0);
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Set up automatic slider for mobile
  useEffect(() => {
    setIsLoaded(true);

    if (isMobile) {
      startAutoSlide();
    } else {
      // Clear timer if not mobile
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isMobile]);

  const startAutoSlide = () => {
    // Clear any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    // Set up new timer
    timerRef.current = window.setInterval(() => {
      setCurrentSlide((prev) => (prev === benefits.length - 1 ? 0 : prev + 1));
    }, 3000);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    // Reset timer when manually changing slides
    if (isMobile) {
      startAutoSlide();
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === benefits.length - 1 ? 0 : prev + 1));
    if (isMobile) startAutoSlide();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? benefits.length - 1 : prev - 1));
    if (isMobile) startAutoSlide();
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    // Pause auto-sliding during touch
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      // Swipe left, go to next slide
      nextSlide();
    } else if (diff < -50) {
      // Swipe right, go to previous slide
      prevSlide();
    }

    // Resume auto-sliding
    if (isMobile) {
      startAutoSlide();
    }
  };

  return (
    <section id="key-benefits" className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Benefits</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our CRM platform offers unique advantages that set us apart from
            traditional solutions
          </p>
        </motion.div>

        {/* Desktop View - Grid Layout */}
        {!isMobile && (
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="h-12 w-12 rounded-xl bg-yellow-600 text-white flex items-center justify-center mb-6">
                  {React.createElement(benefit.icon, { className: "h-6 w-6" })}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Mobile View - Slider */}
        {isMobile && (
          <div className="md:hidden">
            <div
              className="relative overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="flex items-center justify-center">
                <button
                  onClick={prevSlide}
                  className="absolute left-0 z-10 p-2 bg-white/70 rounded-full shadow-md"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-5 w-5 text-yellow-600" />
                </button>

                <div className="w-full max-w-sm mx-auto">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md min-h-[280px] flex flex-col"
                  >
                    <div className="h-12 w-12 rounded-xl bg-yellow-600 text-white flex items-center justify-center mb-6">
                      {React.createElement(benefits[currentSlide].icon, {
                        className: "h-6 w-6",
                      })}
                    </div>
                    <h3 className="text-xl font-bold mb-3">
                      {benefits[currentSlide].title}
                    </h3>
                    <p className="text-gray-600 flex-grow">
                      {benefits[currentSlide].description}
                    </p>
                  </motion.div>
                </div>

                <button
                  onClick={nextSlide}
                  className="absolute right-0 z-10 p-2 bg-white/70 rounded-full shadow-md"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-5 w-5 text-yellow-600" />
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {benefits.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentSlide
                        ? "w-6 bg-yellow-600"
                        : "w-2 bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
