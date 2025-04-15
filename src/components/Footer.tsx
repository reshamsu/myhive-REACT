"use client";

import type React from "react";
import { useState, useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

interface OfficeInfo {
  name: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  location: string;
  mapLocation: string; // Google Maps query string
  countryCode: string; // Country code for location detection
}

const officeLocations: OfficeInfo[] = [
  {
    name: "Hive Colombo - Sri Lanka (Head Quarters)",
    phone: "+94 71 766 8690",
    whatsapp: "94717668690", // Sri Lanka format
    email: "hello@myhive.biz",
    address: "No. 146/5, Havelock Road",
    location: "Colombo 05, Sri Lanka",
    mapLocation: "146/5,+Havelock+Road,+Colombo+05,+Sri+Lanka",
    countryCode: "LK",
  },
  {
    name: "Hive Toronto - Canada",
    phone: "+1 437 254 3077",
    whatsapp: "14372543077", // Canada format
    email: "hello@myhive.biz",
    address: "100 City Centre Dr",
    location: "Mississauga, Ontario L5B 2C9, Canada",
    mapLocation: "100+City+Centre+Dr,+Mississauga,+Ontario+L5B+2C9,+Canada",
    countryCode: "CA_ON",
  },
  {
    name: "Hive Doha - Qatar",
    phone: "+974 3120 7455",
    whatsapp: "97431207455", // Qatar format
    email: "hello@myhive.biz",
    address: "1021 West Hastings Street",
    location: "Vancouver, BC V6E 0C3, Canada",
    mapLocation: "Doha,+Qatar", // Update with actual address when available
    countryCode: "QA",
  },
];

const Footer: React.FC = () => {
  const [selectedOffice, setSelectedOffice] = useState<number>(0);

  // Function to get the user's region based on IP
  const getRegionCode = async (): Promise<string> => {
    try {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      console.log("Region data in Footer:", data);

      if (data.country_code === "LK") {
        return "LK";
      }

      if (data.country_code === "CA") {
        if (data.region_code === "ON") {
          return "CA_ON";
        }
        return "CA_ON"; // Default to Ontario for other Canadian provinces
      }

      if (data.country_code === "QA") {
        return "QA";
      }

      return "LK"; // Default to Sri Lanka for other countries
    } catch (error) {
      console.error("Error fetching region:", error);
      return "LK"; // Default to Sri Lanka if there's an error
    }
  };

  // Set the selected office based on user's location
  useEffect(() => {
    const fetchRegion = async () => {
      const regionCode = await getRegionCode();
      const officeIndex = officeLocations.findIndex(
        (office) => office.countryCode === regionCode
      );
      setSelectedOffice(officeIndex >= 0 ? officeIndex : 0);
    };

    fetchRegion();
  }, []);

  return (
    <footer className="bg-gray-100 text-gray-800 py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* First Column with Company Info and Quick Links */}
          <div className="lg:col-span-1">
            {/* Company Info */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-yellow-600 mb-4">
                myhive
              </h3>
              <p className="text-gray-600 mb-4">
                Empowering business and elevating brands with innovative and
                advanced business technology solutions
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/people/HiVEAi/61567132149488/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-yellow-600 transition duration-300"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://www.instagram.com/hive.biz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-yellow-600 transition duration-300"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/company/hive-live/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-yellow-600 transition duration-300"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://www.tiktok.com/@hive.biz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-yellow-600 transition duration-300"
                >
                  <FaTiktok size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Google Map Column */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Find Us</h3>
            <div className="h-48 w-full rounded-lg overflow-hidden shadow-md mb-2">
              <iframe
                title="Office Location Map"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${
                  officeLocations[selectedOffice].mapLocation
                }&zoom=15&maptype=roadmap&language=en&region=${
                  officeLocations[selectedOffice].countryCode.split("_")[0]
                }&style=feature:administrative|element:geometry|visibility:off&style=feature:poi|visibility:simplified&style=feature:road|element:labels.icon|visibility:off&style=feature:transit|visibility:off&style=feature:water|color:0xe0f2f7&style=feature:landscape|color:0xf5f5f5&style=feature:road|element:geometry|color:0xffffff&style=feature:poi|element:geometry|color:0xf0f0f0&style=feature:all|element:labels.text.fill|color:0x616161&style=feature:all|element:labels.text.stroke|color:0xffffff&style=feature:road|element:geometry.stroke|color:0xf5f5f5`}
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {officeLocations.map((office, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedOffice(index)}
                  className={`px-2 py-1 text-xs rounded-full transition-colors ${
                    selectedOffice === index
                      ? "bg-yellow-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {office.name.split(" - ")[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info - All Locations in Columns */}
          {officeLocations.map((office, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-4">{office.name}</h3>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <a
                    href={`tel:${office.phone}`}
                    className="hover:text-yellow-600 transition duration-300"
                  >
                    Phone: {office.phone}
                  </a>
                </p>
                <p className="text-gray-600 flex items-center gap-2">
                  <a
                    href={`https://wa.me/${office.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-600 transition duration-300"
                    title="Chat on WhatsApp"
                  >
                    <FaWhatsapp size={25} />
                  </a>
                  WhatsApp
                </p>
                <p className="text-gray-600 flex items-center gap-2">
                  <a
                    href={`mailto:${office.email}`}
                    className="hover:text-yellow-600 transition duration-300"
                    title="Send Email"
                  >
                    <FaEnvelope size={25} />
                  </a>
                  Email
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} myhive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
