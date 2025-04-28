import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "About", path: "/about" },
  { label: "Work", path: "/work" },
  { label: "Solutions", path: "/solutions" },
  { label: "Our Approach", path: "/approach" },
  { label: "Blog", path: "/blog" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 50 },
    open: { opacity: 1, x: 0 }
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="py-4 px-6 flex justify-between items-center border-b border-gray-800 bg-black/100 backdrop-blur-sm sticky top-0 z-[100]">
        {/* Left section - Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-1/3"
        >
          <Link
              to="/"
              className="flex items-center">
                <img 
                  src="/AXONARY-WHITE-TRANSPARENT.png" 
                  alt="Axonary" 
                  className="h-10 w-auto mr-4" 
                />
                {/* Hide AXONARY text on mobile screens */}
                <span className="text-white font-bold text-xl tracking-wider pb-1 hidden md:inline">AXONARY</span>
          </Link>
        </motion.div>
        
        {/* Middle section - Navigation */}
        <nav className="hidden md:flex items-center justify-center w-1/3 space-x-8">
          {navItems.map((item) => (
            <motion.div key={item.label} whileHover={{ scale: 1.05 }}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                   `pb-1 transition-colors duration-300 ${isActive ? 'text-[#5C3693] border-b-2 border-[#5C3693]' : 'text-white hover:text-[#7e5adb]'}`
                }
              >
                {item.label}
              </NavLink>
            </motion.div>
          ))}
        </nav>

        {/* Right section - Contact button and mobile menu */}
        <div className="w-1/3 flex justify-end">
          {/* Contact Us button - visible ONLY on desktop */}
          <div className="hidden md:block">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Contact Us →
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 relative focus:outline-none z-50"
          >
            <div className="block w-10 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span
                className={`block absolute h-0.5 w-8 bg-white transform transition duration-500 ease-in-out ${
                  isOpen ? "rotate-45" : "-translate-y-2"
                }`}
              />
              <span
                className={`block absolute h-0.5 w-8 bg-white transform transition duration-500 ease-in-out ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block absolute h-0.5 w-8 bg-white transform transition duration-500 ease-in-out ${
                  isOpen ? "-rotate-45" : "translate-y-2"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-lg z-40 md:hidden"
          >
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col items-center justify-center h-full"
            >
              {navItems.map((item) => (
                <motion.div key={item.label} variants={itemVariants} whileHover={{ scale: 1.1, x: 10 }}>
                  <Link
                    to={item.path}
                    onClick={closeMobileMenu}
                    className="block text-3xl font-bold text-white my-4 hover:text-purple-500 transition-colors cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={itemVariants} whileHover={{ scale: 1.1, x: 10 }}>
                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                  className='block text-3xl font-bold text-white my-4 mt-8 btn-primary-lg text-xl'
                >
                  Contact Us →
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
