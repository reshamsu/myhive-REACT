import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/OG.png";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);
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
            alt="myhive Logo"
            className="w-10 h-10 mr-2"
          />
          <button
            onClick={() => handleLinkClick("/")}
            className="text-yellow-600 text-2xl font-bold"
          >
            myhive
          </button>
        </div>
        <div className="hidden md:flex space-x-6">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/pricing", label: "Pricing" },
            { to: "/services", label: "Solutions" },
            { to: "/contact", label: "Contact" },
          ].map((link) => (
            <button
              key={link.to}
              onClick={() => handleLinkClick(link.to)}
              className="text-gray-800 hover:text-yellow-600 transition duration-300"
            >
              {link.label}
            </button>
          ))}
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
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/pricing", label: "Pricing" },
            { to: "/services", label: "Features" },
            { to: "/contact", label: "Contact" },
          ].map((link) => (
            <button
              key={link.to}
              onClick={() => handleLinkClick(link.to)}
              className="block text-gray-800 hover:text-yellow-600 py-2 transition duration-300 w-full text-left"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
