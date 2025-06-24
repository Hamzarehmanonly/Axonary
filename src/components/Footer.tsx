import React, { useState } from "react";
import { Link } from "react-router-dom";
import WorkInProgressModal from "./WorkInProgressModal";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("");

  const handlePageClick = (pageName: string) => {
    console.log(`Clicked on ${pageName} in footer, setting modal to open`);
    setCurrentPage(pageName);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const companyLinks = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Contact us", path: "/contact" },
    { name: "Work", path: "/work" },
  ];

  const serviceLinks = [
    { name: "Social Media Marketing", path: "#smm", useModal: true },
    { name: "Search Engine Optimization", path: "#seo", useModal: true },
    { name: "Paid Advertising", path: "#ppc", useModal: true },
    { name: "Content Marketing & Copywriting", path: "#content", useModal: true },
    { name: "Graphic Design & Branding", path: "#branding", useModal: true }
  ];

  const resourceLinks = [
    { name: "Blog", path: "/blog" },
    { name: "Case Studies", path: "/casestudies" },
    { name: "Documentation", path: "#docs", useModal: true },
    { name: "Support", path: "/support" }
  ];

  const legalLinks = [
      { name: "Privacy Policy", path: "/privacypolicy" },
      { name: "Terms & Conditions", path: "/termsconditions" },
      { name: "Cookie Policy", path: "/cookiepolicy" },
      { name: "Sitemap", path: "/sitemap" }
  ];

  const socialLinks = [
    { name: "Facebook", icon: "facebook", url: "https://www.facebook.com/people/Axonary/61573521008481/" },
    { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/company/axonary" },
    { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/axonaryofficial" },
  ];

  return (
    <footer className="bg-black border-t border-[#5C3693]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center">
              <img 
                src="/AXONARY-WHITE-TRANSPARENT.png" 
                alt="Axonary" 
                className="h-10 w-auto mr-2" 
              />
              <span className="text-white font-bold text-xl tracking-wider pb-1">AXONARY</span>
            </Link>
            <p className="text-gray-400 max-w-md">
            Your full-stack marketing partner, delivering expert SEO, paid ads, social media marketing, content creation, and branding to help businesses grow.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#5C3693] transition-colors duration-300 cursor-pointer"
                >
                  {social.icon === "facebook" && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  )}
                  {social.icon === "linkedin" && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
                  {social.icon === "instagram" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Company Links Section */}
           <div>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                {companyLinks.map((link, linkIndex) => (
                  <li key={linkIndex}>
                     <Link
                        to={link.path}
                        className="text-gray-400 hover:text-[#5C3693] transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                  </li>
                ))}
              </ul>
            </div>

          {/* Services Links Section (Uses Modal) */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2">
                {serviceLinks.map((link, linkIndex) => (
                  <li key={linkIndex}>
                      <a
                        href={link.path}
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageClick(link.name);
                        }}
                        className="text-gray-400 hover:text-[#5C3693] transition-colors duration-300 cursor-pointer"
                      >
                        {link.name}
                      </a>
                  </li>
                ))}
              </ul>
            </div>

          {/* Resources Links Section */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                {resourceLinks.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.useModal ? (
                       <a
                        href={link.path}
                        onClick={(e) => { e.preventDefault(); handlePageClick(link.name); }}
                        className="text-gray-400 hover:text-[#5C3693] transition-colors duration-300 cursor-pointer"
                       >
                         {link.name}
                       </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-gray-400 hover:text-[#5C3693] transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-[#5C3693]/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Axonary, Backed by Second Brain Studio.
            </p>
            <div className="mt-4 md:mt-0 flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
              {/* Legal links - Use Link component */}
              {legalLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-gray-400 hover:text-[#5C3693] text-sm transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Work in Progress Modal */}
      <WorkInProgressModal isOpen={modalOpen} onClose={handleCloseModal} pageName={currentPage} />
    </footer>
  );
};

export default Footer;
