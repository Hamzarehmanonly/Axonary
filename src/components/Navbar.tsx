import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

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

  return (
    <>
      <header className="py-4 px-6 flex justify-between items-center border-b border-gray-800 bg-black/100 backdrop-blur-sm sticky top-0 z-[100]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link
              to="/"
              className="text-2xl font-bold text-white">
                AXONARY
          </Link>
        </motion.div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <motion.a
            whileHover={{ scale: 1.05 }}
          >
            <Link
              to="/about"
              className="hover:text-purple-500 text-white transition-colors">
              About
            </Link>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
          >
           <Link
              to="/work"
              className="hover:text-purple-500 text-white transition-colors">
              Work
            </Link>
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
          >
            <Link
              to="/solutions"
              className="hover:text-purple-500 text-white transition-colors">
              Solutions
            </Link>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
          >
            <Link
              to="/approach"
              className="hover:text-purple-500 text-white transition-colors">
              Our Approach
            </Link>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
          >
            <Link
              to="/blog"
              className="hover:text-purple-500 text-white transition-colors">
              Blog
            </Link>
          </motion.a>
        </nav>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
              to="/contact"
              className="hidden md:block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Contact Us →
          </Link>
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 relative focus:outline-none"
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
              {[
                { href: "#about", label: "About" },
                { href: "#work", label: "Work" },
                { href: "#solutions", label: "Solutions" },
                { href: "#approach", label: "Our Approach" },
                { href: "#blog", label: "Blog" }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  variants={itemVariants}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-bold text-white my-4 hover:text-purple-500 transition-colors"
                  whileHover={{ scale: 1.1, x: 10 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={"/contact"} className="mt-8 bg-purple-600 text-white px-8 py-3 rounded-lg text-xl hover:bg-purple-700 transition-colors">
                Contact Us →
                </Link>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
