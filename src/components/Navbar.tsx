import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-amber-500 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">HiVE Colombo</Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-200">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-200">About</Link>
          <Link to="/pricing" className="text-white hover:text-gray-200">Pricing</Link>
          {/* <Link to="/blog" className="text-white hover:text-gray-200">Blog</Link> */}
          <Link to="/contact" className="text-white hover:text-gray-200">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;