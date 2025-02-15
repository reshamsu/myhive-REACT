"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  workingHours: string;
}

const contactInfoByRegion: { [key: string]: ContactInfo } = {
  LK: {
    phone: "+94 720 333 863",
    email: "hello@myhive.biz",
    address: "Colombo 3, Sri Lanka",
    workingHours: "9am - 6pm IST, Monday - Friday",
  },
  CA_ON: {
    phone: "+1 437 254 3077",
    email: "hello@myhive.biz",
    address: "Toronto, Ontario, Canada",
    workingHours: "9am - 5pm EST, Monday - Friday",
  },
  CA_BC: {
    phone: "+1 236 939 1372",
    email: "hello@myhive.biz",
    address: "Vancouver, British Columbia, Canada",
    workingHours: "9am - 5pm PST, Monday - Friday",
  },
  US: {
    phone: "+1 236 939 1372",
    email: "hello@myhive.biz",
    address: "Vancouver, British Columbia, Canada",
    workingHours: "9am - 5pm PST, Monday - Friday",
  },
};

const getRegionCode = async (): Promise<string> => {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    if (data.country_code === "CA") {
      // For Canada, we'll use the region code to differentiate between provinces
      if (data.region_code === "BC") {
        return "CA_BC";
      } else if (data.region_code === "ON") {
        return "CA_ON";
      }
      // For other Canadian provinces, default to Ontario
      return "CA_ON";
    }
    return data.country_code;
  } catch (error) {
    console.error("Error fetching region:", error);
    return "LK"; // Default to Sri Lanka if there's an error
  }
};

const ContactForm: React.FC = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfo>(
    contactInfoByRegion.LK
  );

  useEffect(() => {
    getRegionCode().then((code) => {
      setContactInfo(contactInfoByRegion[code] || contactInfoByRegion.LK);
    });
  }, []);

  return (
    <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Contact Information Section */}
        <div className="bg-yellow-600 text-gray-800 p-8 w-full lg:w-2/5">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Contact Information
          </h2>
          <p className="mb-8">We're here to assist you with any inquiries.</p>
          <ul className="space-y-6">
            <li className="flex items-center">
              <Phone className="mr-4 h-6 w-6" />
              <span>{contactInfo.phone}</span>
            </li>
            <li className="flex items-center">
              <Mail className="mr-4 h-6 w-6" />
              <span>{contactInfo.email}</span>
            </li>
            <li className="flex items-center">
              <MapPin className="mr-4 h-6 w-6" />
              <span>{contactInfo.address}</span>
            </li>
            <li className="flex items-center">
              <Clock className="mr-4 h-6 w-6" />
              <span>{contactInfo.workingHours}</span>
            </li>
          </ul>
        </div>

        {/* Contact Form Section */}
        <form className="p-8 bg-gray-200 w-full lg:w-3/5">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Send us a message
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-600 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2" htmlFor="phone">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full p-3 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2" htmlFor="inquiryType">
                Inquiry Type
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                className="w-full p-3 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
              >
                <option value="general">General Inquiry</option>
                <option value="support">Support</option>
                <option value="sales">Sales</option>
              </select>
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-gray-600 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full p-3 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
            ></textarea>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-yellow-600 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
