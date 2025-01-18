import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {

  return (
    <footer className="bg-gray-200 text-gray-800 py-12 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Social Media Section */}
        <div className="flex space-x-4">
          <Link
            to="/https://www.facebook.com/hive.biz/"
            className="text-2xl hover:text-yellow-500 transition duration-300"
          >
            <FaFacebook />
          </Link>
          <Link
            to="https://www.instagram.com/hive.biz/"
            className="text-2xl hover:text-yellow-500 transition duration-300"
          >
            <FaInstagram />
          </Link>
          <Link
            to="https://www.linkedin.com/hive.biz/"
            className="text-2xl hover:text-yellow-500 transition duration-300"
          >
            <FaLinkedin />
          </Link>
          <Link
            to="https://www.tiktok.com/hive.biz/"
            className="text-2xl hover:text-yellow-500 transition duration-300"
          >
            <FaTiktok />
          </Link>
          <Link
            to="/"
            className="text-2xl hover:text-yellow-500 transition duration-300"
          >
            <FaWhatsapp />
          </Link>
        </div>

        {/* About Us Section */}
        {/* <div>
          <h3 className="font-semibold mb-4">About Us</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            volutpat nisl.
          </p>
        </div> */}

        {/* Contact Us Section */}
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-600">
            Email: hello@myhive.biz<br />
            Phone: +1 555 123 4567
          </p>
        </div>
      </div>
      <div className="text-center mt-8 pt-8 border-t border-gray-200 text-gray-600">
        &copy; {new Date().getFullYear()} HiVE. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
