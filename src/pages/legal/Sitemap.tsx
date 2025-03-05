import React from 'react';
import { Link } from 'react-router-dom';

const Sitemap: React.FC = () => {
  const siteStructure = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Work", path: "/work" },
        { name: "Solutions", path: "/solutions" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "UI UX CX Design", path: "#ui-ux" },
        { name: "Website Development", path: "#web-dev" },
        { name: "Mobile App Development", path: "#mobile-dev" },
        { name: "Digital Marketing", path: "#digital-marketing" },
        { name: "Cloud Solutions", path: "#cloud" },
        { name: "AI & Machine Learning", path: "#ai-ml" },
        { name: "Blockchain", path: "#blockchain" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", path: "/blog" },
        { name: "Case Studies", path: "/casestudies" },
        { name: "Documentation", path: "#docs" },
        { name: "Support", path: "#support" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/privacypolicy" },
        { name: "Terms & Conditions", path: "/termsconditions" },
        { name: "Cookie Policy", path: "/cookiepolicy" },
        { name: "Sitemap", path: "/sitemap" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Header */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Site<span className="text-[#5C3693]">map</span>
          </h1>
          <p className="text-gray-400">All pages and resources available on our website</p>
        </div>

        {/* Simple Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteStructure.map((section, index) => (
            <div key={index} className="bg-[#000000] rounded-xl p-6 border border-[#5C3693]/20">
              <h2 className="text-xl font-bold text-white mb-4">{section.title}</h2>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.path.startsWith('#') ? (
                      <a
                        href={link.path}
                        className="text-gray-400 hover:text-[#5C3693] transition-colors duration-300"
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sitemap;