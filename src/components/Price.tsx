import type React from "react";
import { useState } from "react";
import { Check } from "lucide-react";
import ContactModal from "./ContactModal";

interface Plan {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

const PriceCard: React.FC<Plan & { onSelect: () => void }> = ({
  title,
  price,
  features,
  isPopular,
  onSelect,
}) => (
  <div
    className={`bg-gray-300 rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 ${
      isPopular ? "border-2 border-yellow-600" : ""
    } flex flex-col h-full`}
  >
    {isPopular && (
      <div className="bg-yellow-600 text-zinc-900 text-center py-2 font-semibold">
        Most Popular
      </div>
    )}
    <div className="p-6 sm:p-8 flex-grow">
      <h3 className="text-2xl text-zinc-900 mb-2 font-bold">{title}</h3>
      <div className="mb-6">
        <span className="text-3xl sm:text-4xl font-bold text-yellow-600">
          {price}
        </span>
        <br />
        <span className="text-zinc-800 font-semibold">Onwards/month</span>
      </div>

      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-zinc-700">
            <Check className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0 mt-1" />
            <span className="text-sm sm:text-base">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="p-6 sm:p-8 bg-gray-700 mt-auto">
      <button
        onClick={onSelect}
        className="w-full bg-yellow-600 text-zinc-900 py-3 px-4 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-300 text-sm sm:text-base"
      >
        Start Now
      </button>
    </div>
  </div>
);

const SpecialPlan: React.FC<{ onSelect: () => void }> = ({ onSelect }) => (
  <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:scale-105 p-8 text-center max-w-3xl mx-auto mt-16">
    <p className="text-xl text-zinc-800 mb-6 font-semibold">
      Looking to create a partnership for services or bigger projects?
    </p>
    <ul className="space-y-3 text-left mb-8">
      <li className="flex items-start text-zinc-900">
        <Check className="h-6 w-6 text-zinc-900 mr-2 flex-shrink-0 mt-1" />
        <span className="text-base">
          Join our new gen community And become a part of our exclusive network
          subscribed by many prestigious alliances
        </span>
      </li>
    </ul>
    <button
      onClick={onSelect}
      className="bg-zinc-900 text-yellow-400 py-3 px-8 rounded-full font-semibold hover:bg-zinc-800 transition-colors duration-300 text-lg"
    >
      Contact Us
    </button>
  </div>
);

const Price: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const plans: Plan[] = [
    {
      title: "Core Plan",
      price: "USD 100",
      features: [
        "Website Building & Development (+ Store)",
        "⁠Online Payment Integration",
        "⁠Live 24/7 Chatbot",
      ],
    },
    {
      title: "Pro Plan",
      price: "USD 200",
      features: [
        "Core Plan",
        "Designated User Access",
        "⁠Social Media One-Click Marketing Tools",
        "Ai Generated Content",
      ],
    },
    {
      title: "Essential Plan",
      price: "USD 500",
      features: ["Pro Plan", "⁠Ai Voice Bots", "Automation"],
      isPopular: true,
    },
  ];

  const handlePlanSelect = (planTitle: string) => {
    setSelectedPlan(planTitle);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-zinc-100 min-h-screen">
      <div className="py-20 sm:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-thin text-center text-zinc-900 mb-4">
            Pricing <span className="font-bold">Plans</span>
          </h2>
          <p className="text-lg sm:text-xl text-center text-zinc-500 mb-12 sm:mb-16 max-w-3xl mx-auto">
            Choose the perfect plan to elevate your business with HiVE's
            cutting-edge solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {plans.map((plan, index) => (
              <PriceCard
                key={index}
                {...plan}
                onSelect={() => handlePlanSelect(plan.title)}
              />
            ))}
          </div>
          <SpecialPlan onSelect={() => handlePlanSelect("Special Plan")} />
        </div>
        <ContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          planTitle={selectedPlan}
        />
      </div>
    </div>
  );
};

export default Price;
