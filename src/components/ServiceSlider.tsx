"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Server,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Zap,
  Globe,
  BarChart3,
  MessageCircle,
  PenTool,
  Share2,
} from "lucide-react";

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

interface ServiceSection {
  title: string;
  subtitle: string;
  description: string;
  mainIcon: React.ElementType;
  features: FeatureItem[];
  ctaText: string;
}

const productSection: ServiceSection = {
  title: "All-in-one-CRM",
  subtitle: "Product",
  description:
    "A comprehensive solution that streamlines your business operations and enhances customer relationships.",
  mainIcon: Server,
  ctaText: "Explore Your Benefits",
  features: [
    {
      title: "All-In-One CRM",
      description:
        "Saves time & cost with a cross-functional platform specialized in multiple business functions.",
      icon: Globe,
    },
    {
      title: "Integratable",
      description:
        "User flexible with options to integrate preferred applications like WordPress, WhatsApp & more.",
      icon: Share2,
    },
    {
      title: "Cross Functional",
      description:
        "One Platform for multiple lines of business functions that work together, unlike traditional CRMs limited to one line of functions.",
      icon: BarChart3,
    },
    {
      title: "Ai Driven",
      description:
        "Innovative advantage with Ai-powered features evolving daily, staying ahead of the industry.",
      icon: Zap,
    },
    {
      title: "Cloud Platform",
      description:
        "Saves space with no installation or updates required, accessible from anywhere.",
      icon: Server,
    },
    {
      title: "Consistent Performance",
      description:
        "Ai - Driven functions ensure reliable operation at peak performance every second of the day.",
      icon: CheckCircle,
    },
    // {
    //   title: "Text & Voice Ai Communication",
    //   description: "Automate client interactions via emails, SMS, and voice.",
    //   icon: MessageCircle,
    // },
  ],
};

const serviceSection: ServiceSection = {
  title: "Digital Services",
  subtitle: "Services",
  description:
    "Expert digital solutions to elevate your brand presence and engage your audience effectively.",
  mainIcon: MessageSquare,
  ctaText: "View Our Services",
  features: [
    {
      title: "Website Building & Development",
      description: "Professional, SEO-optimized, and conversion-focused sites.",
      icon: PenTool,
    },
    {
      title: "Marketing Automation",
      description: "Ai-driven workflows for customer engagement.",
      icon: Zap,
    },
    {
      title: "Live Chatbots & Ai Voice Assistants",
      description: "24/7 automated customer support.",
      icon: MessageCircle,
    },
    {
      title: "Social Media Management",
      description: "One-click posting and performance tracking.",
      icon: Share2,
    },
    {
      title: "Content Creation",
      description:
        "Ai-generated content for blogs, emails, and marketing campaigns.",
      icon: PenTool,
    },
  ],
};

export default function ServiceSlider() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<"product" | "service">("product");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToKeyBenefits = () => {
    const keyBenefitsSection = document.getElementById("key-benefits");
    if (keyBenefitsSection) {
      keyBenefitsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab("product")}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === "product"
                  ? "bg-white text-yellow-600 shadow-md"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Product
            </button>
            <button
              onClick={() => setActiveTab("service")}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === "service"
                  ? "bg-white text-yellow-600 shadow-md"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Services
            </button>
          </div>
        </div>

        {/* Content Sections */}
        <div className="relative">
          {/* Product Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: activeTab === "product" ? 1 : 0,
              x: activeTab === "product" ? 0 : -20,
              display: activeTab === "product" ? "block" : "none",
            }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-yellow-50 to-amber-100"
          >
            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center mb-10">
                <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                  <div className="h-16 w-16 rounded-2xl bg-yellow-600 text-white flex items-center justify-center shadow-lg">
                    <productSection.mainIcon className="h-8 w-8" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-yellow-600 uppercase tracking-wider mb-2">
                    {productSection.subtitle}
                  </h3>
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">
                    {productSection.title}
                  </h2>
                  <p className="text-gray-600 max-w-2xl">
                    {productSection.description}
                  </p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {productSection.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-start">
                      <div className="mr-4 mt-1 h-10 w-10 rounded-lg bg-yellow-600/10 text-yellow-600 flex items-center justify-center">
                        <feature.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <button
                  onClick={scrollToKeyBenefits}
                  className="inline-flex items-center px-6 py-3 rounded-full bg-yellow-600 text-white font-medium hover:bg-yellow-500 transition-colors duration-200"
                >
                  {productSection.ctaText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Service Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: activeTab === "service" ? 1 : 0,
              x: activeTab === "service" ? 0 : 20,
              display: activeTab === "service" ? "block" : "none",
            }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-50 to-gray-100"
          >
            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center mb-10">
                <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                  <div className="h-16 w-16 rounded-2xl bg-yellow-600 text-white flex items-center justify-center shadow-lg">
                    <serviceSection.mainIcon className="h-8 w-8" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-yellow-600 uppercase tracking-wider mb-2">
                    {serviceSection.subtitle}
                  </h3>
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">
                    {serviceSection.title}
                  </h2>
                  <p className="text-gray-600 max-w-2xl">
                    {serviceSection.description}
                  </p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {serviceSection.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-start">
                      <div className="mr-4 mt-1 h-10 w-10 rounded-lg bg-yellow-600/10 text-yellow-600 flex items-center justify-center">
                        <feature.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <button className="inline-flex items-center px-6 py-3 rounded-full bg-yellow-600 text-white font-medium hover:bg-yellow-500 transition-colors duration-200">
                  {serviceSection.ctaText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
