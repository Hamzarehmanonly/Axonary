import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

// Updated navigation structure with new menu items and unique dropdowns
const navItems = [
  { 
    label: "Services", 
    path: "/services",
    hasMegaMenu: true,
    megaMenuItems: [
      "Android App Development",
      "iOS App Development",
      "Cross-Platform App Development",
      "Flutter App Development",
      "React Native App Development",
      "Cloud Mobile App Development",
      "IoT Mobile App Development",
      "ERP Solution",
      "CRM Solution",
      "CMS Solution",
      "HRM Solution",
      "E-Commerce Website Development",
      "Web Portals",
      "Frontend Development",
      "Backend Development",
      "Full-Stack Development",
      "Low-Code Development",
      "PWA Solution"
    ],
    subCategories: [
      {
        name: "Mobile App Development",
        items: ["Android App Development", "iOS App Development", "Cross-Platform App Development", "Flutter App Development", "React Native App Development", "Cloud Mobile App Development", "IoT Mobile App Development"]
      },
      {
        name: "Custom Software Development",
        items: ["ERP Solution", "CRM Solution", "CMS Solution", "HRM Solution"]
      },
      {
        name: "Web Development",
        items: ["E-Commerce Website Development", "Web Portals", "Frontend Development", "Backend Development", "Full-Stack Development", "Low-Code Development", "PWA Solution"]
      }
    ]
  },
  { 
    label: "Ecommerce", 
    path: "/ecommerce",
    hasMegaMenu: true,
    megaMenuItems: [
      "Ecommerce Development",
      "Adobe Commerce Development",
      "Adobe Commerce Migration", 
      "Adobe Commerce Support",
      "Adobe Commerce Customization",
      "Shopify Development",
      "Shopify App Development",
      "Shopify Migration",
      "Shopify Integration",
      "WooCommerce Development",
      "BigCommerce Development"
    ],
    subCategories: [
      {
        name: "Services",
        items: ["Ecommerce Development"]
      },
      {
        name: "Adobe Commerce",
        items: ["Adobe Commerce Development", "Adobe Commerce Migration", "Adobe Commerce Support", "Adobe Commerce Customization"]
      },
      {
        name: "Shopify",
        items: ["Shopify Development", "Shopify App Development", "Shopify Migration", "Shopify Integration"]
      },
      {
        name: "WooCommerce",
        items: ["WooCommerce Development"]
      },
      {
        name: "BigCommerce",
        items: ["BigCommerce Development"]
      }
    ]
  },
  { 
    label: "Staff Augmentation", 
    path: "/staff-augmentation",
    hasMegaMenu: true,
    megaMenuItems: [
      "Top App Developers",
      "Hire Flutter Developer",
      "Hire Java Developer", 
      "Hire Magento Developer",
      "Hire Python Developer",
      "Hire Laravel Developer",
      "Hire Node Js Developer"
    ],
    subCategories: [
      {
        name: "Staff Augmentation",
        items: ["Top App Developers", "Hire Flutter Developer", "Hire Java Developer", "Hire Magento Developer", "Hire Python Developer", "Hire Laravel Developer", "Hire Node Js Developer"]
      }
    ]
  },
  { 
    label: "Enterprise", 
    path: "/enterprise",
    hasMegaMenu: true,
    megaMenuItems: [
      "Dynamics 365",
      "Sharepoint",
      "Azure Consulting Services",
      "Power Apps",
      "Power BI Services",
      "Dynamics 365 Integrations",
      "BC Development",
      "BC Integration",
      "IT Consulting",
      "Salesforce",
      "WMS",
      "HRMS"
    ],
    subCategories: [
      {
        name: "Microsoft",
        items: ["Dynamics 365", "Sharepoint", "Azure Consulting Services", "Power Apps", "Power BI Services", "Dynamics 365 Integrations", "BC Development", "BC Integration"]
      },
      {
        name: "BPO",
        items: ["IT Consulting"]
      },
      {
        name: "Salesforce",
        items: ["Salesforce"]
      },
      {
        name: "Products",
        items: ["WMS", "HRMS"]
      }
    ]
  },
  { 
    label: "Gov", 
    path: "/gov",
    hasMegaMenu: false
  },
  { 
    label: "Portfolio", 
    path: "/portfolio",
    hasMegaMenu: false
  },
  { 
    label: "Company", 
    path: "/company",
    hasMegaMenu: true,
    megaMenuItems: [
      "Careers",
      "Blog",
      "About",
      "Partnership",
      "Our Locations"
    ],
    subCategories: [
      {
        name: "Company",
        items: ["Careers", "Blog", "About", "Partnership", "Our Locations"]
      }
    ]
  }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

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

  const megaMenuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  const handleMegaMenuEnter = (label: string) => {
    setActiveMegaMenu(label);
  };

  const handleMegaMenuLeave = () => {
    setActiveMegaMenu(null);
  };

  // Get current mega menu item
  const currentMegaMenuItem = navItems.find(item => item.label === activeMegaMenu);

  // Split locations into two columns for better layout
  const getLocationsColumns = (locations: string[]) => {
    const midPoint = Math.ceil(locations.length / 2);
    return {
      left: locations.slice(0, midPoint),
      right: locations.slice(midPoint)
    };
  };

  return (
    <>
      <header className="py-4 px-6 border-b border-gray-800 bg-black/100 backdrop-blur-sm sticky top-0 z-[100] grid grid-cols-3 items-center">
        {/* Left section - Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="col-span-1"
        >
          <Link
              to="/"
              className="flex items-center">
                <img 
                  src="/AXONARY-WHITE-TRANSPARENT.png" 
                  alt="Axonary" 
                  className="h-[50px] w-[50px] md:h-10 md:w-auto mr-2 md:mr-4" 
                />
                {/* Hide AXONARY text on mobile screens */}
                <span className="text-white font-bold text-lg md:text-xl tracking-wider pb-1 hidden md:inline">AXONARY</span>
          </Link>
        </motion.div>
        
        {/* Middle section - Navigation */}
        <nav className="hidden md:flex items-center justify-center col-span-1 space-x-6">
          {navItems.map((item) => (
            <div 
              key={item.label} 
              className="relative"
              onMouseEnter={() => item.hasMegaMenu && handleMegaMenuEnter(item.label)}
              onMouseLeave={() => item.hasMegaMenu && handleMegaMenuLeave()}
            >
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                     `pb-1 transition-colors duration-300 whitespace-nowrap text-sm ${isActive ? 'text-[#5C3693] border-b-2 border-[#5C3693]' : 'text-white hover:text-[#7e5adb]'}`
                  }
                >
                  {item.label}
                </NavLink>
                {item.hasMegaMenu && (
                  <svg className="w-4 h-4 ml-1 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </motion.div>
            </div>
          ))}
        </nav>



        {/* Right section - Contact button and mobile menu */}
        <div className="flex justify-end items-center col-span-1">
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
            className="md:hidden w-10 h-10 relative focus:outline-none z-50 flex items-center justify-center"
          >
            <div className="flex flex-col items-center justify-center w-6 h-6">
              <span
                className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                  isOpen ? "rotate-45 translate-y-0" : "-translate-y-1"
                }`}
              />
              <span
                className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                  isOpen ? "-rotate-45 translate-y-0" : "translate-y-1"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Full Width Mega Menu Overlay */}
      <AnimatePresence>
        {activeMegaMenu && currentMegaMenuItem && (
          <motion.div
            variants={megaMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed top-0 left-0 w-full bg-white shadow-2xl border-b border-gray-200 z-[99]"
            style={{ top: '72px' }} // Adjust this value to match your navbar height
            onMouseEnter={() => handleMegaMenuEnter(activeMegaMenu)}
            onMouseLeave={handleMegaMenuLeave}
          >
            <div className="w-full h-full">
              <div className="flex gap-12 h-full">
                {/* Left Side Sitemap Navigation - Shows subcategories of current mega menu */}
                <div className="w-1/4 flex-shrink-0 bg-gray-100 p-3 px-6 py-8">
                  <div className="space-y-1">
                    {currentMegaMenuItem.subCategories?.map((subCategory) => (
                      <div
                        key={subCategory.name}
                        className="w-full text-left px-2 py-1 transition-all duration-200 font-medium text-gray-900 hover:bg-gray-200 cursor-pointer flex items-center gap-2"
                      >
                        {/* Icons for different categories */}
                        {subCategory.name === "Services" && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        )}
                        {subCategory.name === "Technology" && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                          </svg>
                        )}
                        {subCategory.name === "Industries" && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                          </svg>
                        )}
                        {subCategory.name === "Solution" && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        )}
                        {subCategory.name === "Location" && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        )}
                        {subCategory.name === "Microsoft" && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                        {subCategory.name === "BPO" && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        )}
                        {subCategory.name === "Salesforce" && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                          </svg>
                        )}
                        {subCategory.name === "Products" && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                          </svg>
                        )}
                        {subCategory.name === "Staff Augmentation" && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                          </svg>
                        )}
                        {subCategory.name === "Company" && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        )}
                        {subCategory.name === "Adobe Commerce" && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                          </svg>
                        )}
                        {subCategory.name === "Shopify" && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                          </svg>
                        )}
                        {subCategory.name === "WooCommerce" && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                          </svg>
                        )}
                        {subCategory.name === "BigCommerce" && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        )}
                        <span className="text-sm">{subCategory.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side Content Area - Shows all subcategories and their items */}
                <div className="flex-1 py-8 px-5">
                  <div className={`grid gap-8 ${
                    activeMegaMenu === "Staff Augmentation" 
                      ? "grid-cols-1" 
                      : activeMegaMenu === "Services"
                      ? "grid-cols-3"
                      : activeMegaMenu === "Ecommerce"
                      ? "grid-cols-5"
                      : activeMegaMenu === "Enterprise"
                      ? "grid-cols-4"
                      : "grid-cols-3"
                  }`}>
                    {currentMegaMenuItem.subCategories?.map((subCategory) => (
                      <div key={subCategory.name}>
                        <h3 className="text-sm font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">
                          {subCategory.name === "Services" && activeMegaMenu === "Ecommerce" ? "Ecommerce Development" : subCategory.name}
                        </h3>
                        <div className="space-y-1">
                          {subCategory.name === "Location" ? (
                            // Special layout for locations with two columns
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                {getLocationsColumns(subCategory.items).left.map((location, index) => (
                                  <Link
                                    key={index}
                                    to={`${currentMegaMenuItem.path}/locations/${location.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-2 py-1 rounded transition-all duration-200 text-xs"
                                  >
                                    {location}
                                  </Link>
                                ))}
                              </div>
                              <div>
                                {getLocationsColumns(subCategory.items).right.map((location, index) => (
                                  <Link
                                    key={index}
                                    to={`${currentMegaMenuItem.path}/locations/${location.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-2 py-1 rounded transition-all duration-200 text-xs"
                                  >
                                    {location}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ) : activeMegaMenu === "Services" ? (
                            // Special handling for Services - use direct app development routes
                            subCategory.items.map((item, index) => {
                              const routeMap: { [key: string]: string } = {
                                "Android App Development": "/android-app-development",
                                "iOS App Development": "/ios-app-development",
                                "Cross-Platform App Development": "/cross-platform-app-development",
                                "Flutter App Development": "/flutter-app-development",
                                "React Native App Development": "/react-native-app-development",
                                "Cloud Mobile App Development": "/cloud-mobile-app-development",
                                "IoT Mobile App Development": "/iot-mobile-app-development",
                                "ERP Solution": "/erp-solution",
                                "CRM Solution": "/crm-solution",
                                "CMS Solution": "/cms-solution",
                                "HRM Solution": "/hrm-solution",
                                "E-Commerce Website Development": "/ecommerce-website-development",
                                "Web Portals": "/web-portals",
                                "Frontend Development": "/frontend-development",
                                "Backend Development": "/backend-development",
                                "Full-Stack Development": "/fullstack-development",
                                "Low-Code Development": "/low-code-development",
                                "PWA Solution": "/pwa-solution"
                              };
                              return (
                                <Link
                                  key={index}
                                  to={routeMap[item] || `${currentMegaMenuItem.path}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-2 py-1 rounded transition-all duration-200 text-xs"
                                >
                                  {item}
                                </Link>
                              );
                            })
                          ) : (
                            // Regular layout for other categories
                            subCategory.items.map((item, index) => (
                              <Link
                                key={index}
                                to={`${currentMegaMenuItem.path}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-2 py-1 rounded transition-all duration-200 text-xs"
                              >
                                {item}
                              </Link>
                            ))
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

                           {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-lg z-40 md:hidden"
            >
                             <motion.div
                 variants={menuVariants}
                 initial="closed"
                 animate="open"
                 exit="closed"
                 className="flex flex-col h-full overflow-y-auto pt-24 pb-8 px-6"
               >


                                 {/* Navigation items */}
                 <div className="space-y-4">
                   {navItems.map((item) => (
                     <motion.div key={item.label} variants={itemVariants} className="border-b border-gray-800 pb-4">
                       <Link
                         to={item.path}
                         onClick={closeMobileMenu}
                         className="block text-lg font-bold text-white mb-3 hover:text-[#5C3693] transition-colors cursor-pointer flex items-center justify-between group"
                       >
                         {item.label}
                         {item.hasMegaMenu && (
                           <svg className="w-4 h-4 text-gray-400 group-hover:text-[#5C3693] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                           </svg>
                         )}
                       </Link>
                       
                       {/* Mobile submenu for mega menu items */}
                       {item.hasMegaMenu && item.megaMenuItems && (
                         <div className="space-y-1 ml-4">
                           {/* Special handling for Services section - show both app dev and custom software pages */}
                           {item.label === "Services" ? (
                             <>
                               <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 pl-3">Mobile App Development</p>
                               <Link to="/android-app-development" onClick={closeMobileMenu} className="block text-sm text-gray-300 hover:text-[#5C3693] py-1.5 transition-colors border-l-2 border-transparent hover:border-[#5C3693] pl-3">Android App Development</Link>
                               <Link to="/ios-app-development" onClick={closeMobileMenu} className="block text-sm text-gray-300 hover:text-[#5C3693] py-1.5 transition-colors border-l-2 border-transparent hover:border-[#5C3693] pl-3">iOS App Development</Link>
                               <Link to="/cross-platform-app-development" onClick={closeMobileMenu} className="block text-sm text-gray-300 hover:text-[#5C3693] py-1.5 transition-colors border-l-2 border-transparent hover:border-[#5C3693] pl-3">Cross-Platform App Development</Link>
                               <Link to="/flutter-app-development" onClick={closeMobileMenu} className="block text-sm text-gray-300 hover:text-[#5C3693] py-1.5 transition-colors border-l-2 border-transparent hover:border-[#5C3693] pl-3">Flutter App Development</Link>
                               <Link to="/react-native-app-development" onClick={closeMobileMenu} className="block text-sm text-gray-300 hover:text-[#5C3693] py-1.5 transition-colors border-l-2 border-transparent hover:border-[#5C3693] pl-3">React Native App Development</Link>
                               <Link to="/cloud-mobile-app-development" onClick={closeMobileMenu} className="block text-sm text-gray-300 hover:text-[#5C3693] py-1.5 transition-colors border-l-2 border-transparent hover:border-[#5C3693] pl-3">Cloud Mobile App Development</Link>
                               <Link to="/iot-mobile-app-development" onClick={closeMobileMenu} className="block text-sm text-gray-300 hover:text-[#5C3693] py-1.5 transition-colors border-l-2 border-transparent hover:border-[#5C3693] pl-3">IoT Mobile App Development</Link>
                               
                               <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 pl-3 mt-4">Custom Software Development</p>
                               <Link to="/erp-solution" onClick={closeMobileMenu} className="block text-sm text-gray-300 hover:text-[#5C3693] py-1.5 transition-colors border-l-2 border-transparent hover:border-[#5C3693] pl-3">ERP Solution</Link>
                               <Link to="/crm-solution" onClick={closeMobileMenu} className="block text-sm text-gray-300 hover:text-[#5C3693] py-1.5 transition-colors border-l-2 border-transparent hover:border-[#5C3693] pl-3">CRM Solution</Link>
                               <Link to="/cms-solution" onClick={closeMobileMenu} className="block text-sm text-gray-300 hover:text-[#5C3693] py-1.5 transition-colors border-l-2 border-transparent hover:border-[#5C3693] pl-3">CMS Solution</Link>
                               <Link to="/hrm-solution" onClick={closeMobileMenu} className="block text-sm text-gray-300 hover:text-[#5C3693] py-1.5 transition-colors border-l-2 border-transparent hover:border-[#5C3693] pl-3">HRM Solution</Link>
                               
                               <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 pl-3 mt-4">Web Development</p>
                               <Link to="/ecommerce-website-development" onClick={closeMobileMenu} className="block text-sm text-gray-300 hover:text-[#5C3693] py-1.5 transition-colors border-l-2 border-transparent hover:border-[#5C3693] pl-3">E-Commerce Website Development</Link>
                               <Link to="/web-portals" onClick={closeMobileMenu} className="block text-sm text-gray-300 hover:text-[#5C3693] py-1.5 transition-colors border-l-2 border-transparent hover:border-[#5C3693] pl-3">Web Portals</Link>
                               <Link to="/frontend-development" onClick={closeMobileMenu} className="block text-sm text-gray-300 hover:text-[#5C3693] py-1.5 transition-colors border-l-2 border-transparent hover:border-[#5C3693] pl-3">Frontend Development</Link>
                               <Link to="/backend-development" onClick={closeMobileMenu} className="block text-sm text-gray-300 hover:text-[#5C3693] py-1.5 transition-colors border-l-2 border-transparent hover:border-[#5C3693] pl-3">Backend Development</Link>
                               <Link to="/fullstack-development" onClick={closeMobileMenu} className="block text-sm text-gray-300 hover:text-[#5C3693] py-1.5 transition-colors border-l-2 border-transparent hover:border-[#5C3693] pl-3">Full-Stack Development</Link>
                               <Link to="/low-code-development" onClick={closeMobileMenu} className="block text-sm text-gray-300 hover:text-[#5C3693] py-1.5 transition-colors border-l-2 border-transparent hover:border-[#5C3693] pl-3">Low-Code Development</Link>
                               <Link to="/pwa-solution" onClick={closeMobileMenu} className="block text-sm text-gray-300 hover:text-[#5C3693] py-1.5 transition-colors border-l-2 border-transparent hover:border-[#5C3693] pl-3">PWA Solution</Link>
                             </>
                           ) : (
                             <>
                               {item.megaMenuItems.slice(0, 3).map((subItem, index) => (
                                 <Link
                                   key={index}
                                   to={`${item.path}/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                                   onClick={closeMobileMenu}
                                   className="block text-sm text-gray-300 hover:text-[#5C3693] py-1.5 transition-colors border-l-2 border-transparent hover:border-[#5C3693] pl-3"
                                 >
                                   {subItem}
                                 </Link>
                               ))}
                               {item.megaMenuItems.length > 3 && (
                                 <div className="pt-2">
                                   <div className="flex items-center justify-between">
                                     <span className="block text-xs text-gray-500 pl-3">
                                       +{item.megaMenuItems.length - 3} more services
                                     </span>
                                     <Link
                                       to={item.path}
                                       onClick={closeMobileMenu}
                                       className="block text-sm text-[#5C3693] py-1 px-3 rounded-full bg-[#5C3693]/10 hover:bg-[#5C3693]/20 transition-colors"
                                     >
                                       View All →
                                     </Link>
                                   </div>
                                 </div>
                               )}
                             </>
                           )}
                         </div>
                       )}
                     </motion.div>
                   ))}
                 </div>

                                 {/* Contact button */}
                 <motion.div variants={itemVariants} className="mt-auto pt-6">
                   <div className="bg-gradient-to-r from-[#5C3693] to-[#7e5adb] rounded-xl p-6 text-center">
                     <div className="mb-3">
                       <svg className="w-8 h-8 text-white mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                       </svg>
                     </div>
                     <h3 className="text-white font-bold text-lg mb-2">Ready to get started?</h3>
                     <p className="text-white/80 text-sm mb-4">Let's discuss your project requirements</p>
                     <Link
                       to="/contact"
                       onClick={closeMobileMenu}
                       className="block w-full bg-white text-[#5C3693] text-center py-3 rounded-lg font-bold text-base hover:bg-gray-100 transition-all duration-300"
                     >
                       Contact Us →
                     </Link>
                   </div>
                 </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
    </>
  );
};

export default Navbar;


