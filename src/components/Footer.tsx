// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-4 px-4 sm:px-6 lg:px-8 mt-auto"> {/* mt-auto pushes it to the bottom */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Branding & Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link to="/" className="mb-4">
            {/* You can use your logo here, or just text */}
            <img src="/logo.jpg" alt="Your Company Logo" className="h-10" />
          </Link>
          <p className="text-sm text-slate-400">
            &copy; {currentYear} Victor. All rights reserved.
          </p>
          <p className="text-sm text-slate-400 mt-2">
            Crafting digital marketing solutions for growth.
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="text-slate-300 hover:text-white transition-colors duration-200">About</Link></li>
            <li><Link to="/toolkit" className="text-slate-300 hover:text-white transition-colors duration-200">Toolkit</Link></li>
            <li><Link to="/portfolio" className="text-slate-300 hover:text-white transition-colors duration-200">Portfolio</Link></li>
            <li><Link to="/contact" className="text-slate-300 hover:text-white transition-colors duration-200">Contact</Link></li>
            {/* NEW LEGAL LINKS */}
            <li><Link to="/privacy-policy" className="text-slate-300 hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service" className="text-slate-300 hover:text-white transition-colors duration-200">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info / Social Media */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <ul className="space-y-2">
            <li><a href="mailto:victor@victorseda.xyz" className="text-slate-300 hover:text-white transition-colors duration-200">victor@victorseda.xyz</a></li>
            <li><a href="/home" className="text-slate-300 hover:text-white transition-colors duration-200">Made with 💚 In London, UK</a></li>
            {/* Social Media Links (replace with actual icons/links) */}
            <li className="flex gap-4 mt-4 justify-center md:justify-start">
              <a href="https://www.linkedin.com/in/victor-seda-41145b371/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors duration-200">LinkedIn</a>
              <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors duration-200">Twitter</a>
              {/* Add more social links as needed */}
            </li>
          </ul>
        </div>
      </div>
    </footer>
   );
};

export default Footer;
