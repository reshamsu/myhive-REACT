import React from 'react';

const FAQ: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
      <div className="mt-6 space-y-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold">What is included in the pricing?</h3>
          <p>Each tier includes different features and support levels.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold">Can I upgrade my plan later?</h3>
          <p>Yes, you can upgrade your plan at any time.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;