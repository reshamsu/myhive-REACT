import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold text-amber-600 mb-4">HiVE</h3>
          <p className="text-gray-600 mb-4">
            Empowering businesses with innovative solutions for unparalleled
            success.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/hive.biz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-amber-600 transition duration-300"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/hive.biz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-amber-600 transition duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/hive.biz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-amber-600 transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.tiktok.com/hive.biz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-amber-600 transition duration-300"
            >
              <FaTiktok size={24} />
            </a>
            <a
              href="https://wa.me/your-whatsapp-number"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-amber-600 transition duration-300"
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
                className="text-gray-600 hover:text-amber-600 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-600 hover:text-amber-600 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-gray-600 hover:text-amber-600 transition duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="text-gray-600 hover:text-amber-600 transition duration-300"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-amber-600 transition duration-300"
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
              href="mailto:hello@myhive.biz"
              className="hover:text-amber-600 transition duration-300"
            >
              hello@myhive.biz
            </a>
          </p>
          <p className="text-gray-600 mb-2">
            Phone:{" "}
            <a
              href="tel:+15551234567"
              className="hover:text-amber-600 transition duration-300"
            >
              +1 555 123 4567
            </a>
          </p>
          <p className="text-gray-600">
            Colombo 3, Sri Lanka
          </p>
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
