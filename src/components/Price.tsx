import type React from "react";
import { useState } from "react";
import { Check, X } from "lucide-react";

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
    <h3 className="text-3xl text-zinc-900 mb-4 font-bold">
      Special Partnership Plan
    </h3>
    <p className="text-lg text-zinc-800 mb-6 font-semibold">
      Looking to create a partnership for services or bigger projects?
    </p>
    <ul className="space-y-3 text-left mb-8">
      <li className="flex items-start text-zinc-900">
        <Check className="h-6 w-6 text-zinc-900 mr-2 flex-shrink-0 mt-1" />
        <span className="text-base">
          Join Our New-Gen Community subscribed by many prestigious alliances
        </span>
      </li>
      <li className="flex items-start text-zinc-900">
        <Check className="h-6 w-6 text-zinc-900 mr-2 flex-shrink-0 mt-1" />
        <span className="text-base">All exclusive LIFETIME PRO Plan</span>
      </li>
      <li className="flex items-start text-zinc-900">
        <Check className="h-6 w-6 text-zinc-900 mr-2 flex-shrink-0 mt-1" />
        <span className="text-base">Rates are subject to negotiations</span>
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

const FormModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: string;
}> = ({ isOpen, onClose, selectedPlan }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted:", { ...formData, selectedPlan });
    setSubmitMessage("Form submitted successfully!");
    setIsSubmitting(false);
    setTimeout(() => {
      onClose();
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        industry: "",
      });
    }, 3000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-zinc-900">
            Sign Up for {selectedPlan}
          </h2>
          <button
            onClick={onClose}
            className="text-zinc-500 hover:text-zinc-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-zinc-700"
              >
                First Name*
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                onChange={handleInputChange}
                value={formData.firstName}
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-zinc-700"
              >
                Last Name*
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                onChange={handleInputChange}
                value={formData.lastName}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-700"
              >
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                onChange={handleInputChange}
                value={formData.email}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-zinc-700"
              >
                Phone Number*
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                onChange={handleInputChange}
                value={formData.phone}
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-zinc-700"
              >
                Company/Brand
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                onChange={handleInputChange}
                value={formData.company}
              />
            </div>
            <div>
              <label
                htmlFor="industry"
                className="block text-sm font-medium text-zinc-700"
              >
                Industry
              </label>
              <input
                type="text"
                id="industry"
                name="industry"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                onChange={handleInputChange}
                value={formData.industry}
              />
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-yellow-600 text-zinc-900 py-2 px-4 rounded-full font-semibold hover:bg-yellow-500 transition-colors duration-300 disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
          {submitMessage && (
            <p className="mt-4 text-center text-green-600">{submitMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

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
    <div className="bg-zinc-100 py-20 sm:py-32 px-4 sm:px-6">
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
        <SpecialPlan
          onSelect={() => handlePlanSelect("Special Partnership Plan")}
        />
      </div>
      <FormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </div>
  );
};

export default Price;
