"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Check } from "lucide-react";
import ContactModal from "./ContactModal";

interface Plan {
  title: string;
  price: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: string[];
  isPopular?: boolean;
  description: string;
}

interface PriceCardProps {
  plan: Plan;
  isYearly: boolean;
  onSelect: () => void;
}

const PriceCard: React.FC<PriceCardProps> = ({ plan, isYearly, onSelect }) => {
  const { title, monthlyPrice, yearlyPrice, features, isPopular, description } =
    plan;
  const currentPrice = isYearly ? yearlyPrice : monthlyPrice;

  return (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
        isPopular ? "border-2 border-yellow-600" : ""
      } flex flex-col h-full`}
    >
      {isPopular && (
        <div className="bg-yellow-400 text-zinc-900 text-center py-2 font-medium text-sm">
          MOST POPULAR
        </div>
      )}
      <div className="p-6 sm:p-8 flex-grow">
        <h3 className="text-2xl font-bold text-zinc-900 mb-2">{title}</h3>
        <p className="text-zinc-600 mb-4 text-sm">{description}</p>
        <div className="mb-6">
          <span className="text-3xl sm:text-4xl font-bold text-yellow-600">
            {currentPrice}
          </span>
          <span className="text-zinc-500 ml-2">
            {isYearly ? "/year" : "/month"}
          </span>
          {isYearly && (
            <div className="mt-2 text-sm text-yellow-600 font-medium">
              Save with annual billing
            </div>
          )}
        </div>

        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-zinc-700">
              <Check className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0 mt-1" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 sm:p-8 bg-gray-100 mt-auto">
        <button
          onClick={onSelect}
          className={`w-full py-3 px-4 rounded-full font-semibold transition-colors duration-300 text-sm sm:text-base ${
            isPopular
              ? "bg-yellow-600 text-zinc-900 hover:bg-yellow-500"
              : "bg-gray-200 text-zinc-900 hover:bg-gray-300"
          }`}
        >
          {title === "Special Plan" ? "Contact Us" : "Start Now"}
        </button>
      </div>
    </div>
  );
};

const EnterpriseCard: React.FC<{ onSelect: () => void }> = ({ onSelect }) => (
  <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl p-8 text-zinc-900 max-w-3xl mx-auto mt-16">
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="mb-6 md:mb-0 md:mr-8">
        <h3 className="text-2xl font-bold mb-3">Enterprise</h3>
        <p className="mb-4">
          Custom solutions for organizations with advanced needs and larger
          teams
        </p>
        <ul className="space-y-3">
          <li className="flex items-start">
            <Check className="h-5 w-5 mr-2 flex-shrink-0 mt-1" />
            <span>Join our exclusive network of prestigious alliances</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 mr-2 flex-shrink-0 mt-1" />
            <span>Custom integrations and dedicated support</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 mr-2 flex-shrink-0 mt-1" />
            <span>All Pro features plus enterprise-grade security</span>
          </li>
        </ul>
      </div>
      <button
        onClick={onSelect}
        className="bg-zinc-900 text-yellow-400 py-3 px-8 rounded-full font-semibold hover:bg-zinc-800 transition-colors duration-300 whitespace-nowrap"
      >
        Contact Us
      </button>
    </div>
  </div>
);

const getRegionCode = async (): Promise<string> => {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    if (data.country_code === "CA") {
      if (data.region_code === "BC") {
        return "CA_BC";
      } else if (data.region_code === "ON") {
        return "CA_ON";
      }
      return "CA_ON"; // Default to Ontario for other Canadian provinces
    }
    return data.country_code;
  } catch (error) {
    console.error("Error fetching region:", error);
    return "LK"; // Default to Sri Lanka if there's an error
  }
};

const Price: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [regionCode, setRegionCode] = useState("LK");
  const [isYearly, setIsYearly] = useState(true);

  useEffect(() => {
    getRegionCode().then(setRegionCode);
  }, []);

  const plans: Plan[] = [
    {
      title: "Free",
      monthlyPrice: "$0",
      yearlyPrice: "$0",
      description: "For individuals just getting started",
      features: [
        "Basic website building",
        "Limited chatbot functionality",
        "1 GB storage",
        "Community support",
      ],
      price: "$0",
    },
    {
      title: "Core Plan",
      monthlyPrice: "$100",
      yearlyPrice: "$960",
      description: "For small businesses and startups",
      features: [
        "Website Building & Development (+ Store)",
        "⁠Online Payment Integration",
        "⁠Live 24/7 Chatbot",
        "5 GB storage",
        "Email support",
      ],
      price: "USD 100",
    },
    {
      title: "Pro Plan",
      monthlyPrice: "$250",
      yearlyPrice: "$2,400",
      description: "For growing businesses and teams",
      features: [
        "All Core Plan features",
        "Designated User Access",
        "⁠Social Media One-Click Marketing Tools",
        "Ai Generated Content",
        "20 GB storage",
        "Priority support",
      ],
      isPopular: true,
      price: "USD 250",
    },
    {
      title: "Essential Plan",
      monthlyPrice: "$500",
      yearlyPrice: "$4,800",
      description: "For established businesses with advanced needs",
      features: [
        "All Pro Plan features",
        "⁠Ai Voice Bots",
        "Automation workflows",
        "Advanced analytics",
        "Unlimited storage",
        "24/7 dedicated support",
      ],
      price: "USD 500",
    },
  ];

  const handlePlanSelect = (plan: Plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-800">
      <div className="py-20 sm:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-thin text-white mb-4">
              Pricing <span className="font-bold">Plans</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
              Choose the perfect plan to elevate your business with HiVE's
              cutting-edge solutions.
            </p>

            {/* Billing Toggle */}
            <div className="mt-8 inline-flex items-center bg-white/20 p-1 rounded-full">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  !isYearly ? "bg-white text-yellow-600" : "text-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  isYearly ? "bg-white text-yellow-600" : "text-white"
                }`}
              >
                Yearly (Save 20%)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <PriceCard
                key={index}
                plan={plan}
                isYearly={isYearly}
                onSelect={() => handlePlanSelect(plan)}
              />
            ))}
          </div>

          <EnterpriseCard
            onSelect={() =>
              handlePlanSelect({
                title: "Special Plan",
                price: "Custom",
                monthlyPrice: "Custom",
                yearlyPrice: "Custom",
                description: "Enterprise-grade solutions",
                features: [],
              })
            }
          />
        </div>
        {selectedPlan && (
          <ContactModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            plan={selectedPlan}
            regionCode={regionCode}
          />
        )}
      </div>
    </div>
  );
};

export default Price;
