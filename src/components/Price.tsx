import React from "react";

const Price: React.FC = () => {
  return (
    <div className=" p-10 bg-zinc-800 text-gray-100 flex flex-col items-center">
      {/* Pricing Section Header */}
      <h2 className="text-4xl font-bold text-center text-amber-500">
        Pricing Plans
      </h2>
      <p className="text-lg text-center text-gray-400 mt-2">
        Choose the perfect plan for your business needs.
      </p>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full px-6 lg:px-20">
        {/* Core Plan */}
        <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 flex flex-col relative">
          <h3 className="text-2xl font-semibold">CORE PLAN</h3>
          <p className="text-xl font-bold mt-2">LKR 25,000+</p>
          <p className="text-sm text-gray-600">MONTHLY</p>
          <p className="mt-4 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>
          <ul className="mt-6 space-y-2 text-gray-800 flex-grow">
            <li>Lite+</li>
            <li>Calendar</li>
            <li>CRM</li>
            <li>Opportunities</li>
            <li>Email Marketing</li>
          </ul>
          <div className="absolute bottom-0 left-0 w-full p-6 bg-gray-50">
            <button className="w-full bg-amber-500 text-white py-2 rounded-md font-semibold hover:bg-amber-700">
              Buy Now!
            </button>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 flex flex-col relative">
          <h3 className="text-2xl font-semibold">PRO PLAN</h3>
          <p className="text-xl font-bold mt-2">LKR 100,000+</p>
          <p className="text-sm text-gray-600">MONTHLY</p>
          <p className="mt-4 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>
          <ul className="mt-6 space-y-2 text-gray-800 flex-grow">
            <li>Basic+</li>
            <li>Funnels</li>
            <li>Website Builder</li>
            <li>Membership Platform</li>
            <li>Automation</li>
            <li>Forms</li>
            <li>Surveys</li>
            <li>Trigger Links</li>
            <li>SMS & Email Templates</li>
            <li>Detailed Reporting</li>
            <li>Remove ideal™ Branding</li>
          </ul>
          <div className="absolute bottom-0 left-0 w-full p-6 bg-gray-50">
            <button className="w-full bg-amber-500 text-white py-2 rounded-md font-semibold hover:bg-amber-700">
              Buy Now!
            </button>
          </div>
        </div>

        {/* Essential Plan */}
        <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 flex flex-col relative">
          <h3 className="text-2xl font-semibold">ESSENTIAL PLAN</h3>
          <p className="text-xl font-bold mt-2">$75,000+</p>
          <p className="text-sm text-gray-600">MONTHLY</p>
          <p className="mt-4 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>
          <ul className="mt-6 space-y-2 text-gray-800 flex-grow">
            <li>2-Way SMS Messaging</li>
            <li>Google My Business Messaging</li>
            <li>WEBCHAT</li>
            <li>Reputation Management</li>
            <li>Facebook Messenger</li>
            <li>Google My Business Call Tracking</li>
            <li>Missed Call Text Back</li>
            <li>Text To Pay</li>
            <li>Live Chat & Email Support</li>
          </ul>
          <div className="absolute bottom-0 left-0 w-full p-6 bg-gray-50">
            <button className="w-full bg-amber-500 text-white py-2 rounded-md font-semibold hover:bg-amber-700">
              Buy Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
