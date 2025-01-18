import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <footer className="bg-gray-200 text-gray-800 py-12 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Social Media Section */}
        <div className="flex space-x-4">
          <Link
            to="/"
            className="text-2xl hover:text-amber-500 transition duration-300"
          >
            <FaFacebook />
          </Link>
          <Link
            to="/"
            className="text-2xl hover:text-amber-500 transition duration-300"
          >
            <FaInstagram />
          </Link>
          <Link
            to="/"
            className="text-2xl hover:text-amber-500 transition duration-300"
          >
            <FaLinkedin />
          </Link>
          <Link
            to="/"
            className="text-2xl hover:text-amber-500 transition duration-300"
          >
            <FaTiktok />
          </Link>
        </div>

        {/* About Us Section */}
        <div>
          <h3 className="font-semibold mb-4">About Us</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            volutpat nisl.
          </p>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-600">
            Email: info@hive.com <br />
            Phone: +1 555 123 4567
          </p>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col">
          <h3 className="font-semibold mb-4">Subscribe to Our Newsletter</h3>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="px-4 py-2 bg-white text-gray-800 rounded"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-amber-500 text-zinc-900 rounded hover:bg-amber-400 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="text-center mt-8 pt-8 border-t border-gray-200 text-gray-600">
        &copy; {new Date().getFullYear()} HiVE. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
