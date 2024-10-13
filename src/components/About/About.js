import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function About() {
  const reviews = [
    { id: 1, name: 'John D.', text: 'ASK Optics provided me with exceptional service. Their attention to detail is impressive!' },
    { id: 2, name: 'Sarah M.', text: 'I love my new glasses from ASK Optics! The staff was incredibly helpful in finding the perfect frames.' },
    { id: 3, name: 'Michael R.', text: 'The eye exam at ASK Optics was thorough and the optometrist took the time to explain everything.' },
    { id: 4, name: 'Emma L.', text: 'Great selection of frames and excellent customer service at ASK Optics. Highly recommended!' },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const neumorphicCard = "bg-gray-100 rounded-xl p-6 shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#b8b9be,inset_-6px_-6px_12px_#ffffff] transition-all duration-300 ease-in-out transform hover:-translate-y-1";
  const neumorphicHeader = "text-2xl font-bold mb-4 text-gray-800 p-3 bg-gray-100 rounded-xl shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff]";

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800">About ASK Optics</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className={neumorphicCard}>
            <h3 className={neumorphicHeader}>Our Vision</h3>
            <p className="text-base mb-4 text-gray-700">
              At ASK Optics, we envision a world where everyone experiences life with crystal clear vision. 
              Our mission is to provide cutting-edge eye care solutions that enhance the quality of life for our community.
            </p>
          </div>

          <div className={neumorphicCard}>
            <h3 className={neumorphicHeader}>Our Story</h3>
            <p className="text-base mb-4 text-gray-700">
              Founded in 2024, ASK Optics has grown from a small local shop to a leading name in optical care. 
              Our journey is marked by a relentless pursuit of excellence and a commitment to embracing the latest in optometric technology.
            </p>
          </div>
        </div>

        <div className={`${neumorphicCard} mb-12`}>
          <h3 className={neumorphicHeader}>Our Commitment</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base text-gray-700">
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Comprehensive eye exams with cutting-edge technology
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Wide selection of premium frames and lenses
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Personalized, attentive customer service
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Ongoing patient education and support
            </li>
          </ul>
        </div>

        <div className={neumorphicCard}>
          <h3 className={neumorphicHeader}>What Our Customers Say</h3>
          <Slider {...sliderSettings} className="mb-8">
            {reviews.map((review) => (
              <div key={review.id} className="p-4">
                <p className="text-base mb-4 text-gray-700 italic">"{review.text}"</p>
                <p className="text-right font-semibold text-gray-800">- {review.name}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default About;