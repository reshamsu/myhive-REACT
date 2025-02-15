"use client";

import type React from "react";
import { useState, useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

const contactInfoByRegion: { [key: string]: ContactInfo } = {
  LK: {
    phone: "+94 720 333 863",
    email: "hello@myhive.biz",
    address: "Colombo 3, Sri Lanka",
  },
  CA_ON: {
    phone: "+1 437 254 3077",
    email: "hello@myhive.biz",
    address: "Toronto, Ontario, Canada",
  },
  CA_BC: {
    phone: "+1 236 939 1372",
    email: "hello@myhive.biz",
    address: "Vancouver, British Columbia, Canada",
  },
  US: {
    phone: "+1 236 939 1372",
    email: "hello@myhive.biz",
    address: "Vancouver, British Columbia, Canada",
  },
};

const getRegionCode = async (): Promise<string> => {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    if (data.country_code === "CA") {
      if (data.region_code === "BC") {
        return "CA_BC";
      } else if (data.region_code === "ON") {
        return "CA_ON";
      }
      return "CA_ON"; // Default to Ontario for other Canadian provinces
    }
    return data.country_code;
  } catch (error) {
    console.error("Error fetching region:", error);
    return "LK"; // Default to Sri Lanka if there's an error
  }
};

const Footer: React.FC = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfo>(
    contactInfoByRegion.LK
  );

  useEffect(() => {
    getRegionCode().then((code) => {
      setContactInfo(contactInfoByRegion[code] || contactInfoByRegion.LK);
    });
  }, []);

  return (
    <footer className="bg-gray-100 text-gray-800 py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div>
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
            <a
              href="https://wa.me/your-whatsapp-number"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-yellow-600 transition duration-300"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="text-gray-600 hover:text-yellow-600 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-600 hover:text-yellow-600 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-gray-600 hover:text-yellow-600 transition duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="text-gray-600 hover:text-yellow-600 transition duration-300"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-yellow-600 transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li className="text-gray-600">AI-Powered Solutions</li>
            <li className="text-gray-600">Business Automation</li>
            <li className="text-gray-600">Data Analytics</li>
            <li className="text-gray-600">Customer Relationship Management</li>
            <li className="text-gray-600">Digital Marketing Tools</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-600 mb-2">
            Email:{" "}
            <a
              href={`mailto:${contactInfo.email}`}
              className="hover:text-yellow-600 transition duration-300"
            >
              {contactInfo.email}
            </a>
          </p>
          <p className="text-gray-600 mb-2">
            Phone:{" "}
            <a
              href={`tel:${contactInfo.phone}`}
              className="hover:text-yellow-600 transition duration-300"
            >
              {contactInfo.phone}
            </a>
          </p>
          <p className="text-gray-600">{contactInfo.address}</p>
        </div>
      </div>

      <div className="text-center mt-12 pt-8 border-t border-gray-200">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} HiVE. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
