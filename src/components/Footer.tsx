import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 text-white py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Section 1: Logo and Description */}
        <div className="flex flex-col">
          <div className="text-2xl font-bold mb-2">HiVE</div>
          <p className="text-gray-400">
            Empowering businesses with AI-powered solutions.
          </p>
        </div>

        {/* Section 2: Navigation Links */}
        <div className="flex flex-col">
          <h3 className="font-semibold mb-2">Navigation</h3>
          <nav>
            <Link to="/" className="text-gray-400 hover:text-gray-300 mb-1">
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-400 hover:text-gray-300 mb-1"
            >
              About
            </Link>
            <Link
              to="/pricing"
              className="text-gray-400 hover:text-gray-300 mb-1"
            >
              Pricing
            </Link>
            <Link to="/blog" className="text-gray-400 hover:text-gray-300 mb-1">
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-gray-400 hover:text-gray-300 mb-1"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Section 3: Contact Us Details */}
        <div className="flex flex-col">
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-400">Email: hello@myhive.biz</p>
          <p className="text-gray-400">Phone: +1 (234) 567-890</p>
          <p className="text-gray-400">Colombo 3, Sri Lanka</p>
        </div>

        {/* Section 4: Social Media Icons */}
        <div className="flex flex-col">
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-6 text-gray-400">
        &copy; {new Date().getFullYear()} HiVE. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
