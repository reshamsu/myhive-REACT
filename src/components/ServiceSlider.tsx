"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, Zap, Globe, BarChart } from "lucide-react";
import crmImage from "../assets/crm.jpeg";
import webBuilderImage from "../assets/webBuilder.jpeg";
import automationImage from "../assets/automation.jpeg";
import detailReportingImage from "../assets/detailReporting.jpeg";

interface ServiceFeature {
  title: string;
  description: string | string[];
  image: string;
  icon: React.ElementType;
  marketingMessage?: string;
}

const serviceFeatures: ServiceFeature[] = [
  {
    title: "CRM",
    description: [
      "Fully Integrated System",
      "Flexible and integratable to other softwares",
      "Pipeline & Funnel Management",
      "B2B Lead Generation",
      "Payments & Invoices",
    ],
    image: crmImage,
    icon: Users,
    marketingMessage: "Smarter CRM, Stronger Relationships.",
  },
  {
    title: "Automation",
    description: [
      "Automated Workflows",
      "Booking & Appointments Model",
      "Live Bot (AI) 24/7",
      "Text Communication (Emails, SMS & Memos)",
      "Voice Bot 24/7",
    ],
    image: automationImage,
    icon: Zap,
    marketingMessage:
      "Automate, Accelerate, Dominate—AI CRM for Modern Business.",
  },
  {
    title: "Digital Marketing",
    description: [
      "Website Builder & Management",
      "Email Marketing",
      "One-Click Social Media Management",
      "AI Generatable Content",
    ],
    image: webBuilderImage,
    icon: Globe,
    marketingMessage:
      "Drive Growth, Boost Efficiency, Delight Customers—Powered by AI.",
  },
  {
    title: "Detailed Reporting",
    description: [
      "Access comprehensive business insights",
      "Real-time analytics dashboard",
      "Custom report generation",
      "Data visualization tools",
      "Performance tracking metrics",
    ],
    image: detailReportingImage,
    icon: BarChart,
    marketingMessage:
      "From Data to Decisions: Let AI Supercharge Your Business.",
  },
];

export default function ServiceSlider() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {serviceFeatures.map((feature, index) => (
            <ServiceCard
              key={index}
              feature={feature}
              index={index}
              isLoaded={isLoaded}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ServiceCard = ({
  feature,
  index,
  isLoaded,
}: {
  feature: ServiceFeature;
  index: number;
  isLoaded: boolean;
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-xl"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Image Header */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={feature.image || "/placeholder.svg"}
          alt={feature.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-gray-900/40 flex items-end p-6">
          <div>
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-600/80 text-white">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <ul className="mb-6 space-y-2">
          {Array.isArray(feature.description) ? (
            feature.description.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="mr-2 mt-1 text-yellow-600">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))
          ) : (
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-yellow-600">•</span>
              <span className="text-gray-700">{feature.description}</span>
            </li>
          )}
        </ul>
      </div>

      {/* Marketing Message Tooltip */}
      <div
        className={`
          absolute inset-x-0 bottom-0 bg-gradient-to-t from-yellow-600 to-yellow-500
          p-6 text-white transform transition-all duration-300 ease-in-out
          ${
            showTooltip
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }
        `}
      >
        <div className="relative">
          {/* Chat Bubble Triangle */}
          <div className="absolute -top-3 left-6 h-4 w-4 bg-yellow-600 transform rotate-45"></div>

          {/* Message Content */}
          <p className="relative text-base font-medium leading-relaxed">
            {feature.marketingMessage}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
