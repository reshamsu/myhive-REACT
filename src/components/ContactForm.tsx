"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Building2, Send } from "lucide-react";

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
    phone: "+94 71 766 8690",
    whatsapp: "94717668690", // Sri Lanka format
    email: "hello@myhive.biz",
    address: "No. 146/5, Havelock Road",
    location: "Colombo 05, Sri Lanka",
    workingHours: "9am - 6pm IST, Monday - Friday",
    officeDetails: "myHiVE Colombo - Head Office",
  },
  {
    phone: "+1 437 254 3077",
    whatsapp: "14372543077", // Canada format
    email: "hello@myhive.biz",
    address: "100 City Centre Dr",
    location: "Mississauga, Ontario L5B 2C9, Canada",
    workingHours: "9am - 5pm EST, Monday - Friday",
    officeDetails: "myHiVE Toronto - Ontario Branch",
  },
  {
    phone: "+1 236 979 1372",
    whatsapp: "12369791372", // Canada format
    email: "hello@myhive.biz",
    address: "1021 West Hastings Street",
    location: "Vancouver, BC V6E 0C3, Canada",
    workingHours: "9am - 5pm PST, Monday - Friday",
    officeDetails: "myHiVE Vancouver - British Columbia Branch",
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

export default function ContactForm() {
  const [selectedOffice, setSelectedOffice] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    setIsLoaded(true);

    const fetchRegion = async () => {
      const officeIndex = await getRegionCode();
      setSelectedOffice(officeIndex);
    };

    fetchRegion();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formState);
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="container mx-auto px-4 sm:px-6 pb-20"
    >
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl">
        <div className="flex flex-col lg:flex-row">
          {/* Contact Information Section */}
          <div className="relative bg-gradient-to-br from-yellow-600 to-yellow-500 p-8 lg:p-12 text-gray-800 w-full lg:w-2/5">
            {/* Decorative elements */}
            <div className="absolute -top-12 -left-12 h-32 w-32 rounded-full bg-yellow-400/30 blur-2xl"></div>
            <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-yellow-400/30 blur-2xl"></div>

            <div className="relative">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-2xl md:text-3xl font-bold mb-6"
              >
                Contact Information
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-8 text-gray-800/90"
              >
                We're here to assist you with any inquiries about our services.
              </motion.p>

              {/* Office Selection Tabs */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap gap-2 mb-8"
              >
                {officeLocations.map((office, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedOffice(index)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedOffice === index
                        ? "bg-gray-800 text-yellow-400 shadow-lg"
                        : "bg-yellow-500/70 text-gray-800 hover:bg-yellow-400 hover:shadow-md"
                    }`}
                  >
                    {office.officeDetails.split(" - ")[0]}
                  </button>
                ))}
              </motion.div>

              {/* Selected Office Details */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="flex items-center mb-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/30">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <span className="ml-4 font-semibold">
                      {officeLocations[selectedOffice].officeDetails}
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <div className="flex items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/30">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">
                        Phone: {officeLocations[selectedOffice].phone}
                      </p>
                      <a
                        href={`https://wa.me/${officeLocations[selectedOffice].whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800/80 hover:text-gray-900 transition duration-300"
                      >
                        WhatsApp: {officeLocations[selectedOffice].phone}
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex items-center"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/30">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="ml-4">
                    {officeLocations[selectedOffice].email}
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <div className="flex items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/30">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <p>{officeLocations[selectedOffice].address}</p>
                      <p>{officeLocations[selectedOffice].location}</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="flex items-center"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/30">
                    <Clock className="h-5 w-5" />
                  </div>
                  <span className="ml-4">
                    {officeLocations[selectedOffice].workingHours}
                  </span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-8 lg:p-12 bg-gray-50 w-full lg:w-3/5"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Send us a message
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 bg-white border border-gray-200 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 bg-white border border-gray-200 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-white border border-gray-200 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-200"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="office"
                >
                  Preferred Office
                </label>
                <select
                  id="office"
                  name="office"
                  className="w-full p-3 bg-white border border-gray-200 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-200"
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
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full p-3 bg-white border border-gray-200 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-200"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="group flex w-full items-center justify-center rounded-lg bg-yellow-600 px-6 py-4 font-semibold text-gray-800 shadow-lg transition-all duration-300 hover:bg-yellow-500"
              >
                <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
}
