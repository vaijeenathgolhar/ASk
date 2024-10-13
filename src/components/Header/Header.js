import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-100 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0 text-center">
            <Link to="/" className="flex flex-col items-center">
              {/* "ASK" in red */}
              <span className="text-5xl font-bold text-red-600">ASK</span>
              {/* "Opticians" below "ASK" with a different font */}
              <span className="text-xl font-serif text-gray-800">Opticians</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {['Home', 'Products', 'Services', 'About', 'Contact', 'Gallery'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="px-4 py-2 text-gray-700 rounded-lg transition duration-300 ease-in-out
                           bg-gray-100 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)]
                           hover:shadow-[inset_-3px_-3px_6px_rgba(255,255,255,0.8),inset_3px_3px_6px rgba(0,0,0,0.1)]
                           hover:translate-y-0.5 hover:text-blue-600 focus:outline-none"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 text-gray-600
                         shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)]
                         hover:shadow-[inset_-3px_-3px_6px rgba(255,255,255,0.8),inset_3px_3px_6px rgba(0,0,0,0.1)]
                         focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-2">
            {['Home', 'Products', 'Services', 'About', 'Contact', 'Gallery'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="block px-4 py-2 text-gray-700 rounded-lg transition duration-300 ease-in-out
                           bg-gray-100 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)]
                           hover:shadow-[inset_-3px_-3px_6px rgba(255,255,255,0.8),inset_3px_3px_6px rgba(0,0,0,0.1)]
                           hover:translate-y-0.5 hover:text-blue-600 focus:outline-none"
              >
                {item}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;