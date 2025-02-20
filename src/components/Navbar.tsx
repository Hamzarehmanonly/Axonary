import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="py-4 px-6 flex justify-between items-center border-b border-gray-800 bg-black sticky top-0 z-[100]">
      <div className="text-2xl font-bold text-white">WOLFX</div>
      <nav className="hidden md:flex items-center space-x-8">
        <a href="#about" className="hover:text-gray-300 text-white">About</a>
        <a href="#work" className="hover:text-gray-300 text-white">Work</a>
        <a href="#solutions" className="hover:text-gray-300 text-white">Solutions</a>
        <a href="#approach" className="hover:text-gray-300 text-white">Our Approach</a>
        <a href="#blog" className="hover:text-gray-300 text-white">Blog</a>
      </nav>
      <button className="bg-white text-black px-4 py-2 hover:bg-gray-100">
        Contact Us →
      </button>
    </header>
  );
};

export default Navbar;
