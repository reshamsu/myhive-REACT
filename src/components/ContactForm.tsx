"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Clock, Building2 } from "lucide-react";

interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  location: string;
  workingHours: string;
  officeDetails: string;
}

const officeLocations: ContactInfo[] = [
  {
    phone: "+94 720 333 863",
    whatsapp: "94720333863", // Sri Lanka format
    email: "hello@myhive.biz",
    address: "No. 146/5, Havelock Road",
    location: "Colombo 05, Sri Lanka",
    workingHours: "9am - 6pm IST, Monday - Friday",
    officeDetails: "HiVE Colombo - Head Office",
  },
  {
    phone: "+1 437 254 3077",
    whatsapp: "14372543077", // Canada format
    email: "hello@myhive.biz",
    address: "100 City Centre Dr",
    location: "Mississauga, Ontario L5B 2C9, Canada",
    workingHours: "9am - 5pm EST, Monday - Friday",
    officeDetails: "HiVE Toronto - Ontario Branch",
  },
  {
    phone: "+1 236 979 1372",
    whatsapp: "12369791372", // Canada format
    email: "hello@myhive.biz",
    address: "1021 West Hastings Street",
    location: "Vancouver, BC V6E 0C3, Canada",
    workingHours: "9am - 5pm PST, Monday - Friday",
    officeDetails: "HiVE Vancouver - British Columbia Branch",
  },
];

const getRegionCode = async (): Promise<number> => {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    console.log("Region data in ContactForm:", data); // Add logging to debug

    if (data.country_code === "LK") {
      return 0; // Colombo
    }

    if (data.country_code === "CA") {
      if (data.region_code === "BC") {
        console.log("Detected British Columbia");
        return 2; // Vancouver
      } else if (data.region_code === "ON") {
        console.log("Detected Ontario");
        return 1; // Toronto
      }
      return 1; // Default to Ontario for other Canadian provinces
    }

    return 2; // Default to Vancouver for international users
  } catch (error) {
    console.error("Error fetching region:", error);
    return 0; // Default to Colombo if there's an error
  }
};

const ContactForm: React.FC = () => {
  const [selectedOffice, setSelectedOffice] = useState<number>(0);

  useEffect(() => {
    const fetchRegion = async () => {
      const officeIndex = await getRegionCode();
      setSelectedOffice(officeIndex);
    };

    fetchRegion();
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

          {/* Office Selection Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {officeLocations.map((office, index) => (
              <button
                key={index}
                onClick={() => setSelectedOffice(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedOffice === index
                    ? "bg-gray-800 text-yellow-400"
                    : "bg-yellow-500 text-gray-800 hover:bg-yellow-400"
                }`}
              >
                {office.officeDetails.split(" - ")[0]}
              </button>
            ))}
          </div>

          {/* Selected Office Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center mb-2">
                <Building2 className="mr-4 h-6 w-6" />
                <span className="font-semibold">
                  {officeLocations[selectedOffice].officeDetails}
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <Phone className="mr-4 h-6 w-6" />
                <div>
                  <p>Phone: {officeLocations[selectedOffice].phone}</p>
                  <p>
                    <a
                      href={`https://wa.me/${officeLocations[selectedOffice].whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-900 transition duration-300"
                    >
                      WhatsApp: {officeLocations[selectedOffice].phone}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="mr-4 h-6 w-6" />
              <span>{officeLocations[selectedOffice].email}</span>
            </div>
            <div>
              <div className="flex items-start">
                <MapPin className="mr-4 h-6 w-6 mt-1" />
                <div>
                  <p>{officeLocations[selectedOffice].address}</p>
                  <p>{officeLocations[selectedOffice].location}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="mr-4 h-6 w-6" />
              <span>{officeLocations[selectedOffice].workingHours}</span>
            </div>
          </div>
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
              <label className="block text-gray-600 mb-2" htmlFor="office">
                Preferred Office
              </label>
              <select
                id="office"
                name="office"
                className="w-full p-3 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                value={selectedOffice}
                onChange={(e) => setSelectedOffice(Number(e.target.value))}
              >
                {officeLocations.map((office, index) => (
                  <option key={index} value={index}>
                    {office.officeDetails}
                  </option>
                ))}
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
