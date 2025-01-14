import React from "react";
import { FaRobot, FaChartLine, FaLock, FaCogs } from "react-icons/fa";

const Features: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Key Features
        </h2>
        <p className="text-center text-gray-600 mt-4">
          Explore the powerful tools that will elevate your business to new
          heights.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {/* Feature Card 1 */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transform transition duration-300 hover:scale-105">
            <div className="flex justify-center text-green-500 text-5xl mb-4">
              <FaRobot />
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800">
              AI-Powered Automation
            </h3>
            <p className="text-gray-600 text-center mt-2">
              Transform your business with intelligent workflows that save time
              and reduce errors.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transform transition duration-300 hover:scale-105">
            <div className="flex justify-center text-blue-500 text-5xl mb-4">
              <FaChartLine />
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800">
              Real-Time Analytics
            </h3>
            <p className="text-gray-600 text-center mt-2">
              Make data-driven decisions with real-time insights into your
              sales, finances, and operations.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transform transition duration-300 hover:scale-105">
            <div className="flex justify-center text-red-500 text-5xl mb-4">
              <FaLock />
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800">
              Secure Payment Processing
            </h3>
            <p className="text-gray-600 text-center mt-2">
              Secure, multi-currency payment solutions with built-in fraud
              detection to protect your business.
            </p>
          </div>

          {/* Feature Card 4 */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transform transition duration-300 hover:scale-105">
            <div className="flex justify-center text-yellow-500 text-5xl mb-4">
              <FaCogs />
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800">
              End-to-End Integration
            </h3>
            <p className="text-gray-600 text-center mt-2">
              Unified solutions for seamless collaboration across sales,
              marketing, HR, and finance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
