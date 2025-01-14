import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="flex items-center justify-center py-10">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-6xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Contact Information Section */}
          <div className="bg-zinc-700 text-white p-8 md:w-1/2 text-center">
            <h2 className="text-4xl font-bold">Get in Touch with Us</h2>
            <p className="text-lg mt-2">We’re here to assist you with any inquiries.</p>
            <ul className="mt-6 space-y-3 text-lg">
              <li>
                <span className="font-semibold">Phone:</span> xxx-xxx-xxxx
              </li>
              <li>
                <span className="font-semibold">Address:</span> Lorem, Ipsum, XX, 1234
              </li>
              <li>
                <span className="font-semibold">Hours:</span> 9am - 5pm EST, Daily
              </li>
            </ul>
          </div>

          {/* Contact Form Section */}
          <form className="p-8 bg-white md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
            <p className="text-gray-500 mt-2">
              Fill out the form below and we’ll get back to you as soon as possible.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6">
              {/* Name Field */}
              <div>
                <label className="block text-gray-700 font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-gray-700 font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-gray-700 font-semibold">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Inquiry Type Field */}
              <div>
                <label className="block text-gray-700 font-semibold">
                  Inquiry Type
                </label>
                <select
                  name="inquiryType"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="general">General Inquiry</option>
                  <option value="support">Support</option>
                  <option value="sales">Sales</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-amber-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-amber-700 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
