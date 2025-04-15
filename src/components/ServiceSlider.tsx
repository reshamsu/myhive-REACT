"use client";

import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Server,
  MessageSquare,
  CheckCircle,
  Zap,
  Globe,
  BarChart3,
  Bot,
  PenTool,
  Share2,
  Mic,
  LineChart,
  Clock,
  Users,
  Phone,
  ArrowRight,
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
  description: "",
  mainIcon: Server,
  ctaText: "Explore More Featuers",
  features: [
    {
      title: "CRM",
      description: "",
      icon: Globe,
    },
    {
      title: "Integratable",
      description: "",
      icon: Share2,
    },
    {
      title: "Cross Functional",
      description: "",
      icon: BarChart3,
    },
    {
      title: "AI Powered",
      description: "",
      icon: Zap,
    },
    {
      title: "Cloud Platform",
      description: "",
      icon: Server,
    },
    {
      title: "Consistent Performance",
      description: "",
      icon: CheckCircle,
    },
  ],
};

// Key benefits for product section
const productBenefits: FeatureItem[] = [
  {
    title: "Saves Time & Cost",
    description: "",
    icon: Clock,
  },
  {
    title: "User Flexible",
    description: "",
    icon: Zap,
  },
  {
    title: "Innovative Advantage",
    description: "",
    icon: Globe,
  },
  {
    title: "Consistent Performance",
    description: "",
    icon: BarChart3,
  },
  {
    title: "Saves Space",
    description: "",
    icon: Server,
  },
];

// Key services for service section
const serviceFeatures: FeatureItem[] = [
  {
    title: "Automation",
    description: "",
    icon: Zap,
  },
  {
    title: "Website Building Design & Development",
    description: "",
    icon: PenTool,
  },
  {
    title: "Live & AI Chatbots",
    description: "",
    icon: Bot,
  },
  {
    title: "AI Voice Assistants & Employees",
    description: "",
    icon: Mic,
  },
  {
    title: "Business Consultation",
    description: "",
    icon: LineChart,
  },
];

const serviceSection: ServiceSection = {
  title: "Business Technology",
  subtitle: "Services",
  description: "",
  mainIcon: MessageSquare,
  ctaText: "Explore More Featuers",
  features: serviceFeatures,
};

export default function ServiceSlider() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<"product" | "service">("product");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Function to scroll to benefits section
  const scrollToProductBenefits = () => {
    const benefitsSection = document.getElementById("product-benefits");
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to scroll to services section
  const scrollToServiceBenefits = () => {
    const servicesSection = document.getElementById("service-benefits");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
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

              {/* Key Benefits Section */}
              <div className="mt-16" id="product-benefits">
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-bold mb-4">Explore More Services</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">Our busines technology offers the following services</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {productBenefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
                      className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="h-12 w-12 rounded-xl bg-yellow-600 text-white flex items-center justify-center mb-6">
                        {React.createElement(benefit.icon, {
                          className: "h-6 w-6",
                        })}
                      </div>
                      <h3 className="text-lg mb-3">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center mt-8">
                <button
                  onClick={scrollToProductBenefits}
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
                  .
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

              {/* Key Services Section */}
              <div className="mt-8">
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-bold mb-4">Key Services</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto"></p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                  {serviceFeatures.map((feature, idx) => (
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

                {/* Service Benefits Section */}
                <div className="mt-16" id="service-benefits">
                  <div className="text-center mb-10">
                    <h3 className="text-2xl font-bold mb-4">
                      Service Benefits
                    </h3>
                    <p className="text-gray-600 max-w-2xl mx-auto"></p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <Clock className="h-6 w-6 text-yellow-600 mr-3" />
                        <h4 className="">Saves Time</h4>
                      </div>
                      <p className="text-gray-600 text-sm"></p>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <Zap className="h-6 w-6 text-yellow-600 mr-3" />
                        <h4 className="">Saves Cost</h4>
                      </div>
                      <p className="text-gray-600 text-sm"></p>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <Users className="h-6 w-6 text-yellow-600 mr-3" />
                        <h4 className="">Real-Life Engagement</h4>
                      </div>
                      <p className="text-gray-600 text-sm"></p>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <Phone className="h-6 w-6 text-yellow-600 mr-3" />
                        <h4 className="">Real-Time Engagement</h4>
                      </div>
                      <p className="text-gray-600 text-sm"></p>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <LineChart className="h-6 w-6 text-yellow-600 mr-3" />
                        <h4 className="">Advanced Consultation</h4>
                      </div>
                      <p className="text-gray-600 text-sm"></p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center mt-8">
                  <button
                    onClick={scrollToServiceBenefits}
                    className="inline-flex items-center px-6 py-3 rounded-full bg-yellow-600 text-white font-medium hover:bg-yellow-500 transition-colors duration-200"
                  >
                    {serviceSection.ctaText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
