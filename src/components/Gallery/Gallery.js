import React from 'react';

// Import images from the Assets folder
import img2 from '../../Assets/img2.jpeg';
import img3 from '../../Assets/img3.jpeg';
import img4 from '../../Assets/img4.jpeg';
import img5 from '../../Assets/img5.jpeg';
import img6 from '../../Assets/img6.jpeg';
import img7 from '../../Assets/img7.jpeg';

const images = [
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
];

function Gallery() {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <img 
                src={image} 
                alt={`Gallery Image ${index + 2}`} 
                className="w-full h-48 object-cover" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;