import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import WorkInProgressModal from "./WorkInProgressModal";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("Test");

  const handlePageClick = (pageName: string) => {
    console.log(`Clicked on ${pageName}, setting modal to open`);
    setCurrentPage(pageName);
    setModalOpen(true);
    
    // Close the mobile menu if it's open
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

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
              className="flex items-center">
                <img 
                  src="/AXONARY-WHITE-TRANSPARENT.png" 
                  alt="Axonary" 
                  className="h-10 w-auto mr-4" 
                />
                 <span className="text-white font-bold text-xl tracking-wider pb-1">AXONARY</span>
          </Link>
        </motion.div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <motion.a
            whileHover={{ scale: 1.05 }}
            onClick={() => handlePageClick("About")}
            className="cursor-pointer"
          >
            <span className="hover:text-purple-500 text-white transition-colors">
              About
            </span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            onClick={() => handlePageClick("Work")}
            className="cursor-pointer"
          >
            <span className="hover:text-purple-500 text-white transition-colors">
              Work
            </span>
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            onClick={() => handlePageClick("Solutions")}
            className="cursor-pointer"
          >
            <span className="hover:text-purple-500 text-white transition-colors">
              Solutions
            </span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            onClick={() => handlePageClick("Our Approach")}
            className="cursor-pointer"
          >
            <span className="hover:text-purple-500 text-white transition-colors">
              Our Approach
            </span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            onClick={() => handlePageClick("Blog")}
            className="cursor-pointer"
          >
            <span className="hover:text-purple-500 text-white transition-colors">
              Blog
            </span>
          </motion.a>
        </nav>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handlePageClick("Contact")}
          className="hidden md:block btn-primary"
        >
          Contact Us →
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
                { label: "About" },
                { label: "Work" },
                { label: "Solutions" },
                { label: "Our Approach" },
                { label: "Blog" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  onClick={() => handlePageClick(item.label)}
                  className="text-3xl font-bold text-white my-4 hover:text-purple-500 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.1, x: 10 }}
                >
                  {item.label}
                </motion.div>
              ))}
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePageClick("Contact")}
                className="mt-8 btn-primary-lg"
              >
                Contact Us →
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <WorkInProgressModal 
        isOpen={modalOpen} 
        onClose={handleCloseModal} 
        pageName={currentPage} 
      />
    </>
  );
};

export default Navbar;
