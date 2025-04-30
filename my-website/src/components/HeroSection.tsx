import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-16 rounded-lg my-6">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Get the Best Roblox Scripts!
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Find free and working scripts for your favorite Roblox games like Blox Fruits, Dead Rails, Flatch and more...
        </p>
        <Link
          to="/scripts"
          className="inline-block bg-white text-blue-600 font-medium py-3 px-6 rounded-md hover:bg-gray-100 transition duration-200 shadow-md"
        >
          Explore Scripts
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;