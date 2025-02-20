import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo Column */}
          <div>
            <div className="text-2xl font-bold mb-8">WOLFX</div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-gray-300">Home</a></li>
              <li><a href="#about" className="hover:text-gray-300">About us</a></li>
              <li><a href="#contact" className="hover:text-gray-300">Contact us</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#ui-ux" className="hover:text-gray-300">UI UX CX Design</a></li>
              <li><a href="#web-dev" className="hover:text-gray-300">Website Development</a></li>
              <li><a href="#mobile-dev" className="hover:text-gray-300">Mobile App Development</a></li>
              <li><a href="#digital-marketing" className="hover:text-gray-300">Digital Marketing</a></li>
              <li><a href="#cloud" className="hover:text-gray-300">Cloud Solutions</a></li>
              <li><a href="#ai-ml" className="hover:text-gray-300">AI & Machine Learning</a></li>
              <li><a href="#blockchain" className="hover:text-gray-300">Blockchain</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#blog" className="hover:text-gray-300">Blog</a></li>
              <li><a href="#case-studies" className="hover:text-gray-300">Case Studies</a></li>
              <li><a href="#faqs" className="hover:text-gray-300">FAQs</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2025 WOLFX. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#privacy" className="hover:text-white">Privacy Policy</a>
            <a href="#terms" className="hover:text-white">Terms & Conditions</a>
            <a href="#cookie" className="hover:text-white">Cookie Policy</a>
            <a href="#sitemap" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
