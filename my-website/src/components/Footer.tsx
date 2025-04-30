import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ScriptPastebin</h3>
            <p className="text-gray-600 mb-4">
              The best place to find free and working scripts for your favorite Roblox games.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-blue-600 transition">Home</Link></li>
              <li><Link to="/scripts" className="text-gray-600 hover:text-blue-600 transition">Scripts</Link></li>
              <li><Link to="/mobile-scripts" className="text-gray-600 hover:text-blue-600 transition">Mobile Scripts</Link></li>
              <li><Link to="/execute" className="text-gray-600 hover:text-blue-600 transition">Execute</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-600 hover:text-blue-600 transition">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-blue-600 transition">Privacy Policy</Link></li>
              <li><Link to="/disclaimer" className="text-gray-600 hover:text-blue-600 transition">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {currentYear} ScriptPastebin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;