import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-bold">WOLFX</Link>
          
          <div className="hidden md:flex space-x-8">
            {['/', '/services', '/blog', '/contact'].map((path) => (
              <Link
                key={path}
                to={path}
                className={`text-sm uppercase tracking-wider hover:text-purple-500 transition-colors ${
                  location.pathname === path ? 'text-purple-500' : 'text-white'
                }`}
              >
                {path === '/' ? 'Home' : path.slice(1)}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/95 backdrop-blur-sm"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['/', '/services', '/blog', '/contact'].map((path) => (
              <Link
                key={path}
                to={path}
                className="block px-3 py-2 text-base font-medium hover:text-purple-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {path === '/' ? 'Home' : path.slice(1)}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;