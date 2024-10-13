import React from 'react';

function Products() {
  const products = [
    { name: 'Eyeglasses', description: 'Stylish frames for every face shape', icon: '👓' },
    { name: 'Sunglasses', description: 'Protect your eyes in style', icon: '🕶️' },
    { name: 'Contact Lenses', description: 'Comfortable lenses for clear vision', icon: '👁️' },
    { name: 'Sports Eyewear', description: 'Durable frames for active lifestyles', icon: '🏃' },
    { name: 'Children\'s Glasses', description: 'Fun and sturdy frames for kids', icon: '👶' },
    { name: 'Lens Coatings', description: 'Enhance your lenses with special coatings', icon: '🔬' },
  ];

  const neumorphicCard = "bg-gray-100 rounded-xl p-6 shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#b8b9be,inset_-6px_-6px_12px_#ffffff] transition-all duration-300 ease-in-out transform hover:-translate-y-1";

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800">Our Products</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className={neumorphicCard}>
              <div className="text-4xl mb-4">{product.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>

        <div className={`${neumorphicCard} mt-12 text-center`}>
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Can't Find What You're Looking For?</h3>
          <p className="text-gray-600 mb-6">We offer a wide range of products and can order special items upon request.</p>
          <a href="/contact" className="inline-block bg-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff] hover:shadow-[inset_4px_4px_8px_#3b82f6,inset_-4px_-4px_8px_#60a5fa] transition-all duration-300 ease-in-out">
            Contact Us
          </a>
        </div>

        <div className={`${neumorphicCard} mt-12`}>
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Commitment to Quality</h3>
          <p className="text-gray-600 mb-4">
            At ASK Optics, we're committed to providing only the highest quality eyewear products. We carefully select our frames and lenses from reputable manufacturers known for their durability, style, and comfort.
          </p>
          <p className="text-gray-600">
            All our products come with a satisfaction guarantee. If you're not completely satisfied with your purchase, we'll work with you to make it right.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Products;