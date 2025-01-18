import React from 'react';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Testimonials from '../components/Testimonial';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <HeroSection />
      <Features />
      <Testimonials />
    </div>
  );
};

export default Home;

