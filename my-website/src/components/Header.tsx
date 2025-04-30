import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl text-gray-900 hover:text-blue-600 transition">
            ScriptPastebin
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
              Home
            </Link>
            <Link to="/scripts" className="text-gray-700 hover:text-blue-600 transition">
              Scripts
            </Link>
            <Link to="/mobile-scripts" className="text-gray-700 hover:text-blue-600 transition">
              Mobile Scripts
            </Link>
            <Link to="/execute" className="text-gray-700 hover:text-blue-600 transition">
              Execute
            </Link>
            <button aria-label="Search" className="text-gray-700 hover:text-blue-600 transition">
              <Search size={20} />
            </button>
          </nav>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-2 pb-4 space-y-2 border-t border-gray-200">
            <Link 
              to="/" 
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/scripts" 
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Scripts
            </Link>
            <Link 
              to="/mobile-scripts" 
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Mobile Scripts
            </Link>
            <Link 
              to="/execute" 
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Execute
            </Link>
            <div className="px-4 py-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  className="absolute right-3 top-2.5 text-gray-500 hover:text-blue-600"
                  aria-label="Search"
                >
                  <Search size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;