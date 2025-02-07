import type React from "react";

interface Plan {
  title: string;
  price: string;
  features: string[];
}

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: Plan;
  countryCode: string;
}

const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  plan,
  countryCode,
}) => {
  if (!isOpen) return null;

  const getPhoneNumber = (code: string) => {
    switch (code) {
      case "CA":
        return "+1 437 254 3077"; // Canada
      case "US":
        return "+1 236 939 1372"; // Vancouver number for US
      default:
        return "+94 720 333 863"; // Sri Lanka (default)
    }
  };

  const getLocation = (code: string) => {
    switch (code) {
      case "CA":
        return "HiVE Toronto - Ontario";
      case "US":
        return "HiVE Vancouver - British Columbia";
      default:
        return "HiVE Colombo";
    }
  };

  const phoneNumber = getPhoneNumber(countryCode);
  const location = getLocation(countryCode);

  const getEmailAddress = (planTitle: string) => {
    return planTitle === "Special Plan"
      ? "alliances@myhive.biz"
      : "hello@myhive.biz";
  };

  const emailAddress = getEmailAddress(plan.title);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 max-w-full relative">
        <button
          className="absolute top-2 right-2 text-2xl font-bold text-gray-500 hover:text-gray-700"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Us - {plan.title}</h2>
          <p className="mb-4">
            Thank you for your interest in our {plan.title}. Please contact us
            using the information below:
          </p>
          <p className="mb-2">Phone:</p>
          <p className="font-bold text-yellow-600 mb-4">{phoneNumber}</p>
          <p className="mb-2">Email:</p>
          <p className="font-bold text-yellow-600 mb-4">{emailAddress}</p>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
      </div>
      <div className="fixed inset-0 z-40" onClick={onClose}></div>
    </div>
  );
};

export default ContactModal;
