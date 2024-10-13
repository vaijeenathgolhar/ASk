import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">&copy; 2023 ASK Opticians. All rights reserved.</p>
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex space-x-4">
              <li>
                <Link to="/about" className="hover:text-gray-400">About Us</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-gray-400">Products</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gray-400">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-400">Contact</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-gray-400">Gallery</Link>
              </li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;