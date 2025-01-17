import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 text-white py-12 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Section 1: Logo and Description */}
        <div className="flex flex-col">
          <div className="text-2xl font-bold mb-4">HiVE</div>
          <p className="text-gray-400">
            Empowering businesses with AI-powered solutions.
          </p>
        </div>

        {/* Section 2: Navigation Links */}
        <div className="flex flex-col">
          <h3 className="font-semibold mb-4">Navigation</h3>
          <nav className="flex flex-col space-y-2">
            <Link
              to="/"
              className="text-gray-400 hover:text-amber-500 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-400 hover:text-amber-500 transition duration-300"
            >
              About
            </Link>
            <Link
              to="/pricing"
              className="text-gray-400 hover:text-amber-500 transition duration-300"
            >
              Pricing
            </Link>
            <Link
              to="/services"
              className="text-gray-400 hover:text-amber-500 transition duration-300"
            >
              Features
            </Link>
            <Link
              to="/contact"
              className="text-gray-400 hover:text-amber-500 transition duration-300"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Section 3: Contact Us Details */}
        <div className="flex flex-col">
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">Email: hello@myhive.biz</p>
          <p className="text-gray-400">Phone: +1 (234) 567-890</p>
          <p className="text-gray-400">Colombo 3, Sri Lanka</p>
        </div>

        {/* Section 4: Social Media Icons */}
        <div className="flex flex-col">
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-500 transition duration-300"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@hive.biz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-500 transition duration-300"
            >
              <FaTiktok size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-500 transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/hive.biz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-500 transition duration-300"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 pt-8 border-t border-zinc-800 text-gray-400">
        &copy; {new Date().getFullYear()} HiVE. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
