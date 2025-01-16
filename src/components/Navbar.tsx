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
    <nav className="bg-zinc-900 p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="HiVE Logo" className="w-10 h-10 mr-2" />
          <Link to="/" className="text-amber-500 text-2xl font-bold">
            HiVE
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-zinc-100 hover:text-amber-500 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-zinc-100 hover:text-amber-500 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/pricing"
            className="text-zinc-100 hover:text-amber-500 transition duration-300"
          >
            Pricing
          </Link>
          <Link
            to="/services"
            className="text-zinc-100 hover:text-amber-500 transition duration-300"
          >
            Features
          </Link>
          <Link
            to="/contact"
            className="text-zinc-100 hover:text-amber-500 transition duration-300"
          >
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-zinc-100 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <Link
            to="/"
            className="block text-zinc-100 hover:text-amber-500 py-2 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-zinc-100 hover:text-amber-500 py-2 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/pricing"
            className="block text-zinc-100 hover:text-amber-500 py-2 transition duration-300"
          >
            Pricing
          </Link>
          <Link
            to="/services"
            className="block text-zinc-100 hover:text-amber-500 py-2 transition duration-300"
          >
            Features
          </Link>
          <Link
            to="/contact"
            className="block text-zinc-100 hover:text-amber-500 py-2 transition duration-300"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
