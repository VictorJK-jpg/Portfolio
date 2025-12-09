// src/components/Navigation.tsx
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react'; // Import Sun and Moon icons
import { debouncedPrefetch } from '../utils/lazyLoading.tsx';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize dark mode from localStorage or system preference
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('theme');
      if (savedMode) {
        return savedMode === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false; // Default to light mode if window is not defined (e.g., during SSR)
  });

  // Effect to apply/remove 'dark' class to HTML element and save preference
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Effect to handle scroll for blur/luminous effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <>
      {/* Main Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out
          ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-[#F7E6CA]'}
          flex items-center justify-between`}
        style={{
          // Ensure the background color changes for dark mode if you want
          // For now, it's based on scroll, but you can add dark mode specific styles here
          // e.g., ${darkMode ? 'dark:bg-gray-900/80' : ''}
        }}
      >
        {/* Logo - Left Aligned */}
        <Link to="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
          <img src="/logo.jpg" alt="Victor Logo" className="h-8 w-auto" />
        </Link>

        {/* Desktop Navigation Links - Centered */}
        <div className="hidden md:flex flex-grow justify-center">
          <div className="flex gap-8">
            <Link 
              to="/about" 
              className="text-slate-900 hover:text-blue-600 text-sm font-medium transition-colors duration-200"
              onMouseEnter={() => debouncedPrefetch('/about')}
            >About</Link>
            <Link 
              to="/toolkit" 
              className="text-slate-900 hover:text-blue-600 text-sm font-medium transition-colors duration-200"
              onMouseEnter={() => debouncedPrefetch('/toolkit')}
            >Toolkit</Link>
            <Link 
              to="/portfolio" 
              className="text-slate-900 hover:text-blue-600 text-sm font-medium transition-colors duration-200"
              onMouseEnter={() => debouncedPrefetch('/portfolio')}
            >My Work</Link>
            <Link 
              to="/contact" 
              className="text-slate-900 hover:text-blue-600 text-sm font-medium transition-colors duration-200"
              onMouseEnter={() => debouncedPrefetch('/contact')}
            >Contact</Link>
          </div>
        </div>

        {/* Right side - Dark Mode Toggle & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle for Desktop */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-slate-900 hover:bg-slate-200 transition-colors duration-200 hidden md:block"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Button (Hamburger) */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md text-slate-900 hover:bg-slate-200 transition-colors duration-200 md:hidden"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div
          className={`fixed top-[4.5rem] left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-sm
            bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6 z-40
            flex flex-col items-center space-y-4 transition-all duration-300 ease-in-out
            ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
            md:hidden`}
          style={{
            // Ensure the background color changes for dark mode if you want
            // e.g., ${darkMode ? 'dark:bg-gray-900/90' : ''}
          }}
        >
          {/* Dark Mode Toggle for Mobile */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-slate-900 hover:bg-slate-200 transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          <Link to="/about" className="text-slate-900 hover:text-blue-600 text-lg font-medium py-2 w-full text-center" onClick={closeMobileMenu} onMouseEnter={() => debouncedPrefetch('/about')}>About</Link>
          <Link to="/toolkit" className="text-slate-900 hover:text-blue-600 text-lg font-medium py-2 w-full text-center" onClick={closeMobileMenu} onMouseEnter={() => debouncedPrefetch('/toolkit')}>Toolkit</Link>
          <Link to="/portfolio" className="text-slate-900 hover:text-blue-600 text-lg font-medium py-2 w-full text-center" onClick={closeMobileMenu} onMouseEnter={() => debouncedPrefetch('/portfolio')}>Portfolio</Link>
          <Link to="/contact" className="text-slate-900 hover:text-blue-600 text-lg font-medium py-2 w-full text-center" onClick={closeMobileMenu} onMouseEnter={() => debouncedPrefetch('/contact')}>Contact</Link>
        </div>
      )}
    </>
  );
};

export default Navigation;
