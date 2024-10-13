import React from 'react';

function Services() {
  const services = [
    {
      title: "Comprehensive Eye Examinations",
      description: "Our thorough eye exams use state-of-the-art technology to assess your vision and eye health.",
      icon: "👁️"
    },
    {
      title: "Contact Lens Fittings",
      description: "We offer personalized contact lens fittings to ensure comfort and optimal vision correction.",
      icon: "🔍"
    },
    {
      title: "Frame Adjustments and Repairs",
      description: "Keep your glasses in perfect shape with our professional adjustment and repair services.",
      icon: "🔧"
    },
    {
      title: "Designer Eyewear Selection",
      description: "Choose from our wide range of designer frames to find the perfect style for you.",
      icon: "👓"
    },
    {
      title: "Pediatric Eye Care",
      description: "Specialized eye care services for children to ensure healthy vision development.",
      icon: "👶"
    },
    {
      title: "LASIK Consultation",
      description: "Expert consultation to determine if LASIK or other refractive surgeries are right for you.",
      icon: "🔬"
    }
  ];

  const neumorphicCard = "bg-gray-100 rounded-xl p-6 shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#b8b9be,inset_-6px_-6px_12px_#ffffff] transition-all duration-300 ease-in-out transform hover:-translate-y-1";

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className={neumorphicCard}>
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        <div className={`${neumorphicCard} mt-12`}>
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Why Choose ASK Optics?</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm">
            <li>Experienced and certified optometrists</li>
            <li>Cutting-edge diagnostic equipment</li>
            <li>Wide range of designer frames and lenses</li>
            <li>Personalized care and attention</li>
            <li>Convenient location and flexible hours</li>
            <li>Commitment to ongoing education and latest practices</li>
          </ul>
        </div>

        <div className={`${neumorphicCard} mt-12 text-center`}>
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Ready to Schedule Your Appointment?</h3>
          <p className="text-gray-600 mb-6 text-sm">Experience top-quality eye care services at ASK Optics today!</p>
          <a href="/contact" className="inline-block bg-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff] hover:shadow-[inset_4px_4px_8px_#3b82f6,inset_-4px_-4px_8px_#60a5fa] transition-all duration-300 ease-in-out text-sm">
            Book an Appointment
          </a>
        </div>
      </div>
    </div>
  );
}

export default Services;