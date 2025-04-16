"use client";

import { useState, useEffect } from "react";
import { Check } from "lucide-react";
import ContactModal from "./ContactModal";

interface Plan {
  title: string;
  price: string;
  monthlyPrice: string;
  features: string[];
  isPopular?: boolean;
  description: string;
}

interface PriceCardProps {
  plan: Plan;
  onSelect: () => void;
}

const PriceCard = ({ plan, onSelect }: PriceCardProps) => {
  const { title, monthlyPrice, features, isPopular } = plan;

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
        <h3 className="text-2xl font-bold text-zinc-900 mb-4">{title}</h3>
        <div className="mb-6">
          <span className="text-3xl sm:text-4xl font-bold text-yellow-600">
            {monthlyPrice}
          </span>
          <span className="text-zinc-500 ml-2">/month upwards</span>
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

const EnterpriseCard = ({ onSelect }: { onSelect: () => void }) => (
  <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl p-8 text-white max-w-3xl mx-auto mt-16">
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="mb-6 md:mb-0 md:mr-8">
        <h3 className="text-2xl font-bold mb-3">Alliance</h3>
        {/* <p className="mb-4">
          Custom solutions for organizations with advanced needs and larger
          teams
        </p> */}
        <ul className="space-y-3">
          <li className="flex items-start">
            <Check className="h-5 w-5 mr-2 flex-shrink-0 mt-1" />
            <span>Lifetime Pro Plan</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 mr-2 flex-shrink-0 mt-1" />
            <span>Exclusive Global Network of Prestigious Alliances!</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 mr-2 flex-shrink-0 mt-1" />
            <span>All Future Developments & Features FREE of Cost!</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 mr-2 flex-shrink-0 mt-1" />
            <span>⁠FREE Training!</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 mr-2 flex-shrink-0 mt-1" />
            <span>Priority Level Support!</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 mr-2 flex-shrink-0 mt-1" />
            <span>⁠Designated Team Just For You!</span>
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

export default function Price() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [regionCode, setRegionCode] = useState("LK");

  useEffect(() => {
    getRegionCode().then(setRegionCode);
  }, []);

  const plans: Plan[] = [
    {
      title: "Core Plan",
      monthlyPrice: "$100",
      price: "USD 100",
      description: "For small businesses and startups",
      features: ["Startups", "⁠Freelancers", "Brand Builders"],
    },
    {
      title: "Essential Plan",
      monthlyPrice: "$500",
      price: "USD 500",
      description: "For established businesses with advanced needs",
      features: ["Brand Builders","Freelancers", "Startups", "Small Scale Businesses"],
      isPopular: true,
    },
    {
      title: "Pro Plan",
      monthlyPrice: "$1000",
      price: "USD 1000",
      description: "For growing businesses and teams",
      features: [
        "Startups",
        "Small Scale Businesses",
        "Medium Scale Businesses",
      ],
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
              Choose the perfect plan to elevate your brand and empower your
              business with myhives' solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <PriceCard
                key={index}
                plan={plan}
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
                features: [],
                description: "Enterprise-grade solutions",
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
}
