"use client";

import type React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
// import { Link } from "react-router-dom";

interface OfficeInfo {
  name: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  location: string;
}

const officeLocations: OfficeInfo[] = [
  {
    name: "HiVE Colombo - Head Quarters (Sri Lanka)",
    phone: "+94 720 333 863",
    whatsapp: "94720333863",
    email: "hello@myhive.biz",
    address: "No. 146/5, Havelock Road",
    location: "Colombo 05, Sri Lanka",
  },
  {
    name: "HiVE Toronto - Canada",
    phone: "+1 437 254 3077",
    whatsapp: "14372543077",
    email: "hello@myhive.biz",
    address: "100 City Centre Dr",
    location: "Mississauga, Ontario L5B 2C9, Canada",
  },
  {
    name: "HiVE Vancouver - Canada",
    phone: "+1 236 939 1372",
    whatsapp: "12369391372",
    email: "hello@myhive.biz",
    address: "1021 West Hastings Street",
    location: "Vancouver, BC V6E 0C3, Canada",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* First Column with Company Info and Quick Links */}
          <div className="lg:col-span-1">
            {/* Company Info */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-yellow-600 mb-4">HiVE</h3>
              <p className="text-gray-600 mb-4">
                Empowering businesses with innovative solutions for unparalleled
                success.
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

            {/* Quick Links */}
            {/* <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/"
                  className="text-gray-600 hover:text-yellow-600 transition duration-300"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-yellow-600 transition duration-300"
                >
                  About
                </Link>
                <Link
                  to="/services"
                  className="text-gray-600 hover:text-yellow-600 transition duration-300"
                >
                  Services
                </Link>
                <Link
                  to="/pricing"
                  className="text-gray-600 hover:text-yellow-600 transition duration-300"
                >
                  Pricing
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-yellow-600 transition duration-300"
                >
                  Contact
                </Link>
              </div>
            </div> */}
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">AI-Powered Solutions</li>
              <li className="text-gray-600">Business Automation</li>
              <li className="text-gray-600">Data Analytics</li>
              <li className="text-gray-600">
                Customer Relationship Management
              </li>
              <li className="text-gray-600">Digital Marketing Tools</li>
            </ul>
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
