import type React from "react";
import crmImage from "../assets/crm.jpeg";
import emailMarketingImage from "../assets/emailMarketing.jpeg";
import webBuilderImage from "../assets/webBuilder.jpeg";
import automationImage from "../assets/automation.jpeg";
import smsImage from "../assets/sms.jpeg";
import detailReportingImage from "../assets/detailReporting.jpeg";

interface PricingFeature {
  title: string;
  description: string;
  image: string;
  plans: {
    core: boolean;
    pro: boolean;
    essential: boolean;
  };
}

const pricingFeatures: PricingFeature[] = [
  {
    title: "CRM",
    description: "Manage customer relationships effectively",
    image: crmImage,
    plans: { core: true, pro: true, essential: true },
  },
  {
    title: "Email Marketing",
    description: "Create and send targeted email campaigns",
    image: emailMarketingImage,
    plans: { core: true, pro: true, essential: false },
  },
  {
    title: "Website Builder",
    description: "Build and customize your business website",
    image: webBuilderImage,
    plans: { core: false, pro: true, essential: false },
  },
  {
    title: "Automation",
    description: "Automate repetitive tasks and workflows",
    image: automationImage,
    plans: { core: false, pro: true, essential: true },
  },
  {
    title: "2-Way SMS Messaging",
    description: "Engage with customers via text messages",
    image: smsImage,
    plans: { core: false, pro: false, essential: true },
  },
  {
    title: "Detailed Reporting",
    description: "Access comprehensive business insights",
    image: detailReportingImage,
    plans: { core: false, pro: true, essential: true },
  },
];

const ServiceSlider: React.FC = () => {
  return (
    <div className="relative px-4 md:px-8 lg:px-12 bg-gray-100 py-20 rounded-3xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:max-h-[80vh] md:overflow-y-auto">
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
        <p className="text-gray-600 mb-6 text-base">{feature.description}</p>
      </div>
    </div>
  );
};

export default ServiceSlider;
