"use client";

import type React from "react";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Building2 } from "lucide-react";

interface OfficeInfo {
  name: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  location: string;
  workingHours: string;
}

const officeLocations: OfficeInfo[] = [
  {
    name: "HiVE Colombo - Head Office",
    phone: "+94 720 333 863",
    whatsapp: "+94 720 333 863",
    email: "hello@myhive.biz",
    address: "No. 146/5, Havelock Road",
    location: "Colombo 05, Sri Lanka",
    workingHours: "9am - 6pm IST, Monday - Friday",
  },
  {
    name: "HiVE Toronto - Ontario Branch",
    phone: "+1 437 254 3077",
    whatsapp: "+1 437 254 3077",
    email: "hello@myhive.biz",
    address: "100 City Centre Dr",
    location: "Mississauga, Ontario L5B 2C9, Canada",
    workingHours: "9am - 5pm EST, Monday - Friday",
  },
  {
    name: "HiVE Vancouver - British Columbia Branch",
    phone: "+1 236 939 1372",
    whatsapp: "+1 236 939 1372",
    email: "hello@myhive.biz",
    address: "1021 West Hastings Street",
    location: "Vancouver, BC V6E 0C3, Canada",
    workingHours: "9am - 5pm PST, Monday - Friday",
  },
];

const ContactForm: React.FC = () => {
  const [selectedOffice, setSelectedOffice] = useState<number>(0);

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
                {office.name.split(" - ")[0]}
              </button>
            ))}
          </div>

          {/* Selected Office Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center mb-2">
                <Building2 className="mr-4 h-6 w-6" />
                <span className="font-semibold">
                  {officeLocations[selectedOffice].name}
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <Phone className="mr-4 h-6 w-6" />
                <div>
                  <p>Phone: {officeLocations[selectedOffice].phone}</p>
                  <p>WhatsApp: {officeLocations[selectedOffice].whatsapp}</p>
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
                    {office.name}
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
