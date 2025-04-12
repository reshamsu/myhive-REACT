import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center">Latest Articles</h2>
      <article className="mt-6 bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold">How Ai is Revolutionizing Business Operations</h3>
        <p>Explore the impact of Ai on modern business practices.</p>
      </article>
      <article className="mt-6 bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold">Top Tips for Secure Payment Processing</h3>
        <p>Learn how to protect your business with secure payment solutions.</p>
      </article>
      <article className="mt-6 bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold">5 Benefits of Real-Time Analytics for Your Business</h3>
        <p>Discover how real-time data can enhance your business strategy.</p>
      </article>
    </div>
  );
};

export default Blog;