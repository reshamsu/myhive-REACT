import type React from "react";
import { X } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  planTitle: string;
}

const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  planTitle,
}) => {
  if (!isOpen) return null;

  const isSpecialPlan = planTitle === "Special Plan";
  const email = isSpecialPlan ? "alliances@myhive.biz" : "hello@myhive.biz";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-zinc-900">
          Contact Us - {planTitle}
        </h2>
        <p className="mb-4 text-zinc-700">
          Thank you for your interest in our {planTitle}. Please contact us
          using the information below:
        </p>
        <div className="space-y-2">
          <p className="flex items-center text-zinc-800">
            <span className="font-semibold mr-2">Phone:</span>
            <a
              href="tel:+94720333863"
              className="text-yellow-600 hover:underline"
            >
              +94 720 333 863
            </a>
          </p>
          <p className="flex items-center text-zinc-800">
            <span className="font-semibold mr-2">Email:</span>
            <a
              href={`mailto:${email}`}
              className="text-yellow-600 hover:underline"
            >
              {email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
