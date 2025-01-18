import React from "react";
import ContactForm from "../components/ContactForm";

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-thin text-gray-800 text-center mb-12">
          Get in <span className="font-bold">Touch</span>
        </h1>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;

