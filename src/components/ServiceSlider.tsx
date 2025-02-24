"use client";

import type React from "react";
import { useState } from "react";
import crmImage from "../assets/crm.jpeg";
import webBuilderImage from "../assets/webBuilder.jpeg";
import automationImage from "../assets/automation.jpeg";
import detailReportingImage from "../assets/detailReporting.jpeg";

interface PricingFeature {
  title: string;
  description: string | string[];
  image: string;
  marketingMessage?: string;
}

const pricingFeatures: PricingFeature[] = [
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
    marketingMessage:
      "Drive Growth, Boost Efficiency, Delight Customers—Powered by AI.",
  },
  {
    title: "Detailed Reporting",
    description: "Access comprehensive business insights",
    image: detailReportingImage,
    marketingMessage:
      "From Data to Decisions: Let AI Supercharge Your Business.",
  },
];

const ServiceSlider: React.FC = () => {
  return (
    <div className="relative px-4 md:px-8 lg:px-12 bg-gray-100 py-20 rounded-3xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pricingFeatures.map((feature, index) => (
          <ServiceCard key={index} feature={feature} />
        ))}
      </div>
    </div>
  );
};

const ServiceCard: React.FC<{ feature: PricingFeature }> = ({ feature }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="bg-white rounded-lg p-6 flex flex-col justify-between shadow-xl h-full hover:shadow-2xl transition-all duration-300 overflow-hidden">
        <div>
          <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
            <img
              src={feature.image || "/placeholder.svg"}
              alt={feature.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
            </div>
          </div>
          <ul className="list-disc pl-5 mb-6">
            {Array.isArray(feature.description) ? (
              feature.description.map((item, index) => (
                <li key={index} className="text-gray-600 mb-2 text-base">
                  {item}
                </li>
              ))
            ) : (
              <li className="text-gray-600 mb-2 text-base">
                {feature.description}
              </li>
            )}
          </ul>
        </div>

        {/* Message Bubble */}
        <div
          className={`
            absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-800 to-gray-800/95
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
            <div className="absolute -top-3 left-6 w-4 h-4 bg-gray-800 transform rotate-45"></div>

            {/* Message Content */}
            <p className="relative text-sm leading-relaxed">
              {feature.marketingMessage}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSlider;
