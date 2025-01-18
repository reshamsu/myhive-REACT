import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/OG.png";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="bg-gray-100 p-4 md:p-6 sticky top-0 z-50"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={logo || "/placeholder.svg"}
            alt="HiVE Logo"
            className="w-10 h-10 mr-2"
          />
          <Link to="/" className="text-amber-600 text-2xl font-bold">
            HiVE
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-gray-800 hover:text-amber-600 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-800 hover:text-amber-600 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/pricing"
            className="text-gray-800 hover:text-amber-600 transition duration-300"
          >
            Pricing
          </Link>
          <Link
            to="/services"
            className="text-gray-800 hover:text-amber-600 transition duration-300"
          >
            Features
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 hover:text-amber-600 transition duration-300"
          >
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-2" role="menu">
          <Link
            to="/"
            className="block text-gray-800 hover:text-amber-600 py-2 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-gray-800 hover:text-amber-600 py-2 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/pricing"
            className="block text-gray-800 hover:text-amber-600 py-2 transition duration-300"
          >
            Pricing
          </Link>
          <Link
            to="/services"
            className="block text-gray-800 hover:text-amber-600 py-2 transition duration-300"
          >
            Features
          </Link>
          <Link
            to="/contact"
            className="block text-gray-800 hover:text-amber-600 py-2 transition duration-300"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
