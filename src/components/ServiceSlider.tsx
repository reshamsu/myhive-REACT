import type React from "react";
import crmImage from "../assets/crm.jpeg";
import webBuilderImage from "../assets/webBuilder.jpeg";
import automationImage from "../assets/automation.jpeg";
import emailMarketingImage from "../assets/emailMarketing.jpeg";
import smsImage from "../assets/sms.jpeg";
import detailReportingImage from "../assets/detailReporting.jpeg";

interface PricingFeature {
  title: string;
  description: string | string[];
  image: string;
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
  },
  {
    title: "Email Marketing",
    description: "Create and send targeted email campaigns",
    image: emailMarketingImage,
  },
  {
    title: "2-Way SMS Messaging",
    description: "Engage with customers via text messages",
    image: smsImage,
  },
  {
    title: "Detailed Reporting",
    description: "Access comprehensive business insights",
    image: detailReportingImage,
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
  return (
    <div className="bg-white rounded-lg p-6 flex flex-col justify-between shadow-xl h-full">
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
    </div>
  );
};

export default ServiceSlider;
