import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const neumorphicCard = "bg-gray-100 rounded-xl p-6 shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#b8b9be,inset_-6px_-6px_12px_#ffffff] transition-all duration-300 ease-in-out transform hover:-translate-y-1";
  const neumorphicButton = "inline-block bg-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff] hover:shadow-[inset_4px_4px_8px_#3b82f6,inset_-4px_-4px_8px_#60a5fa] transition-all duration-300 ease-in-out";

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Welcome to ASK Optics</h1>
          <p className="text-xl text-gray-600">Your vision is our mission. Explore our range of eyewear and optical services.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className={neumorphicCard}>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Expert Eye Care</h2>
            <p className="text-gray-600 mb-4">Our experienced optometrists use state-of-the-art technology to provide comprehensive eye exams and personalized care.</p>
            <Link to="/services" className={neumorphicButton}>Our Services</Link>
          </div>

          <div className={neumorphicCard}>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Stylish Eyewear</h2>
            <p className="text-gray-600 mb-4">Discover our wide selection of designer frames and high-quality lenses to suit your style and vision needs.</p>
            <Link to="/products" className={neumorphicButton}>View Collection</Link>
          </div>

          <div className={neumorphicCard}>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Customer Satisfaction</h2>
            <p className="text-gray-600 mb-4">Join our satisfied customers who trust ASK Optics for all their eye care needs. Read their experiences.</p>
            <Link to="/about" className={neumorphicButton}>Testimonials</Link>
          </div>
        </div>

        <div className={`${neumorphicCard} text-center`}>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Schedule Your Eye Exam Today</h2>
          <p className="text-gray-600 mb-6">Take the first step towards clearer vision. Book an appointment with our expert optometrists.</p>
          <Link to="/contact" className={`${neumorphicButton} text-lg`}>Book Appointment</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;