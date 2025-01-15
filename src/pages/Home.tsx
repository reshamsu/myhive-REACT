import React from 'react';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Testimonials from '../components/Testimonial';

const Home: React.FC = () => {
  return (
    <div className="bg-zinc-900 text-zinc-100">
      <HeroSection />
      <Features />
      <Testimonials />
    </div>
  );
};

export default Home;

