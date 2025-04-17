import React from 'react';

const CaseStudies: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center">Success Stories</h2>
      <div className="mt-6 bg-white p-6 rounded-lg shadow">
        <h3 className="font-semibold">Business Challenge</h3>
        <p>Describe the challenge faced by the client.</p>
        <h3 className="font-semibold"><span className="bg-gradient-to-r from-yellow-600 to-amber-500 bg-clip-text text-transparent font-bold">myhive's</span> Solution</h3>
        <p>Explain how <span className="bg-gradient-to-r from-yellow-600 to-amber-500 bg-clip-text text-transparent font-bold">myhive</span> provided a solution.</p>
        <h3 className="font-semibold">Results</h3>
        <p>“Increased efficiency by 40%, cutting costs, saving time etc…”</p>
      </div>
    </div>
  );
};

export default CaseStudies;