import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define types
interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  detailedDescription: string;
  features: string[];
  showcaseImage?: string;
}

const Solutions: React.FC = () => {
  // States for managing active service and showcase view
  const [activeService, setActiveService] = useState<number | null>(1);
  const [showServiceDetail, setShowServiceDetail] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isHovering, setIsHovering] = useState<number | null>(null);

  // Axonary color theme
  const colors = {
    purple: {
      primary: '#5C3693',
      secondary: '#472A71',
    },
    white: '#FFFFFF',
    black: '#000000',
  };

  // Comprehensive service data
  const services: ServiceItem[] = [
    {
      id: 1,
      title: "UI UX CX Design",
      description: "Creating intuitive and engaging user experiences that drive conversion and delight customers.",
      icon: "🎨",
      detailedDescription: "Our UI/UX/CX design process begins with comprehensive user research to understand your target audience's needs and behaviors. We create wireframes, prototypes, and seamless user journeys that align with your business goals while providing exceptional user experiences.",
      features: [
        "User Research & Persona Development",
        "Wireframing & Prototyping",
        "Interactive Design",
        "Usability Testing",
        "Customer Journey Mapping",
        "Design Systems Creation"
      ],
      showcaseImage: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "Website Development",
      description: "Building high-performance, responsive websites that represent your brand perfectly.",
      icon: "🖥️",
      detailedDescription: "Our website development team specializes in creating fast-loading, SEO-optimized, and responsive websites that work flawlessly across all devices. We focus on clean code, accessibility, and seamless user experiences while ensuring your website stands out from the competition.",
      features: [
        "Responsive Web Design",
        "E-commerce Solutions",
        "CMS Integration",
        "Custom Web Applications",
        "Performance Optimization",
        "SEO Implementation"
      ],
      showcaseImage: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Mobile App Development",
      description: "Crafting native and cross-platform applications that users love.",
      icon: "📱",
      detailedDescription: "We develop intuitive, high-performance mobile applications for iOS and Android platforms that engage users and drive business growth. Our expertise spans native, hybrid, and cross-platform development approaches to suit your specific requirements and budget constraints.",
      features: [
        "iOS & Android Development",
        "Cross-platform Solutions",
        "UI/UX Design for Mobile",
        "App Store Optimization",
        "API Integration",
        "Maintenance & Support"
      ],
      showcaseImage: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "Digital Marketing",
      description: "Driving growth through strategic campaigns across multiple digital channels.",
      icon: "📈",
      detailedDescription: "Our digital marketing strategies are data-driven and results-focused, designed to increase your online visibility, engage your target audience, and convert prospects into loyal customers. We create comprehensive marketing plans tailored to your specific business goals and market position.",
      features: [
        "SEO & Content Marketing",
        "Social Media Campaigns",
        "PPC & Display Advertising",
        "Email Marketing Automation",
        "Analytics & Reporting",
        "Conversion Rate Optimization"
      ],
      showcaseImage: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "Cloud Solutions",
      description: "Implementing scalable, secure cloud infrastructure for your business needs.",
      icon: "☁️",
      detailedDescription: "We design, implement, and manage robust cloud solutions that enhance your operational efficiency, data security, and scalability. Our cloud expertise covers major platforms including AWS, Azure, and Google Cloud, with a focus on optimization and cost-effectiveness.",
      features: [
        "Cloud Migration & Strategy",
        "Infrastructure as Code",
        "Serverless Architecture",
        "DevOps Implementation",
        "Disaster Recovery Planning",
        "Cloud Security & Compliance"
      ],
      showcaseImage: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "AI & Machine Learning",
      description: "Leveraging cutting-edge AI technology to solve complex business problems.",
      icon: "🤖",
      detailedDescription: "Our AI and machine learning solutions transform your raw data into actionable intelligence and automated processes. We help businesses across industries implement AI-driven decision making, predictive analytics, and smart automation to gain competitive advantages.",
      features: [
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Recommendation Systems",
        "Process Automation",
        "Custom AI Model Development"
      ],
      showcaseImage: "/api/placeholder/600/400"
    },
    {
      id: 7,
      title: "Blockchain",
      description: "Building secure, transparent blockchain solutions for various industries.",
      icon: "🔗",
      detailedDescription: "We develop innovative blockchain solutions that enhance security, transparency, and efficiency across your operations. Our blockchain expertise spans multiple platforms and use cases, from smart contracts to decentralized applications and enterprise blockchain implementations.",
      features: [
        "Smart Contract Development",
        "DeFi Applications",
        "NFT Platforms",
        "Enterprise Blockchain",
        "Cryptocurrency Integration",
        "Blockchain Security Audits"
      ],
      showcaseImage: "/api/placeholder/600/400"
    }
  ];

  // Auto-cycling through services animation
  useEffect(() => {
    if (showServiceDetail) return; // Don't cycle when showing detailed view
    
    const interval = setInterval(() => {
      setActiveService((prev) => {
        if (prev === null || prev >= services.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 4000);
    
    return () => clearInterval(interval);
  }, [services.length, showServiceDetail]);

  // Handle service selection
  const handleServiceClick = (service: ServiceItem) => {
    setSelectedService(service);
    setShowServiceDetail(true);
  };

  // Handle back to services
  const handleBackClick = () => {
    setShowServiceDetail(false);
  };

  // Find service by ID
  const getServiceFromFooter = (id: number) => {
    const service = services.find(s => s.id === id);
    if (service) {
      handleServiceClick(service);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const serviceVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 12px 30px rgba(92, 54, 147, 0.4)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const detailVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { 
        duration: 0.3 
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({ 
      opacity: 1, 
      x: 0,
      transition: { 
        delay: 0.1 * i,
        duration: 0.3
      }
    })
  };

  return (
    <section id="solutions" className="w-full py-24 bg-gradient-to-b from-black to-[#472A71] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#5C3693] to-white">
            Our Solutions
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Transforming ideas into digital reality with cutting-edge technologies and innovative approaches
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!showServiceDetail ? (
            <motion.div
              key="services-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  variants={serviceVariants}
                  whileHover="hover"
                  onHoverStart={() => setIsHovering(service.id)}
                  onHoverEnd={() => setIsHovering(null)}
                  className={`rounded-xl p-6 sm:p-8 backdrop-blur-lg cursor-pointer transform transition-all duration-500 relative overflow-hidden ${
                    activeService === service.id 
                      ? 'bg-gradient-to-br from-[#5C3693]/90 to-[#472A71]/90 border border-[#5C3693]'
                      : 'bg-white/5 border border-white/10 hover:border-[#5C3693]/40'
                  }`}
                  onClick={() => handleServiceClick(service)}
                >
                  <motion.div 
                    className="absolute -inset-1 bg-gradient-to-r from-[#5C3693]/30 to-[#472A71]/30 rounded-xl blur-xl opacity-0"
                    animate={{ 
                      opacity: isHovering === service.id || activeService === service.id ? 0.8 : 0,
                      scale: isHovering === service.id ? 1.05 : 1
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  <div className="relative z-10">
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ 
                        width: activeService === service.id || isHovering === service.id ? '100%' : '0%'
                      }}
                      transition={{ duration: 0.5 }}
                      className="h-0.5 bg-gradient-to-r from-[#5C3693] to-white/80 mt-4"
                    />
                    
                    {(activeService === service.id || isHovering === service.id) && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-right"
                      >
                        <span className="text-white/80 text-sm inline-flex items-center">
                          Learn more 
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </span>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="service-detail"
              variants={detailVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-gradient-to-br from-[#5C3693]/10 to-[#472A71]/20 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-[#5C3693]/30 relative overflow-hidden"
            >
              {selectedService && (
                <div>
                  {/* Animated background */}
                  <motion.div 
                    className="absolute -inset-4 bg-gradient-to-r from-[#5C3693]/10 to-[#472A71]/10 rounded-xl blur-3xl"
                    animate={{ 
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 10,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                      <div className="flex items-center">
                        <div className="text-4xl sm:text-5xl mr-4 bg-[#5C3693]/20 p-3 rounded-full">{selectedService.icon}</div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white">{selectedService.title}</h3>
                      </div>
                      <button 
                        onClick={handleBackClick}
                        className="px-4 py-2 rounded-full bg-gradient-to-r from-[#5C3693] to-[#472A71] hover:from-[#472A71] hover:to-[#5C3693] text-white shadow-lg shadow-[#5C3693]/20 transition-all duration-300 flex items-center"
                      >
                        <svg className="w-4 h-4 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                        Back to Solutions
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <motion.p 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="text-white text-lg mb-8"
                        >
                          {selectedService.detailedDescription}
                        </motion.p>
                        
                        <motion.h4 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="text-xl font-semibold mb-4 text-[#5C3693] bg-white/10 p-2 rounded-md inline-block"
                        >
                          Key Features
                        </motion.h4>
                        
                        <ul className="space-y-3">
                          {selectedService.features.map((feature, index) => (
                            <motion.li 
                              key={index} 
                              custom={index}
                              variants={featureVariants}
                              initial="hidden"
                              animate="visible"
                              className="flex items-start"
                            >
                              <span className="text-[#5C3693] mr-3 mt-1">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                              </span>
                              <span className="text-white/90">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                        
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                          className="mt-8"
                        >
                          <button className="btn-gradient flex items-center">
                            <span>Request a Consultation</span>
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                          </button>
                        </motion.div>
                      </div>
                      
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="rounded-lg overflow-hidden border border-[#5C3693]/30 shadow-xl shadow-[#5C3693]/20 relative"
                      >
                        <img 
                          src={selectedService.showcaseImage} 
                          alt={`${selectedService.title} showcase`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#472A71]/80 to-transparent flex items-end">
                          <div className="p-6">
                            <motion.div 
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.7 }}
                              className="flex items-center space-x-2"
                            >
                              <span className="bg-[#5C3693] text-white text-xs px-3 py-1 rounded-full">Case Studies</span>
                              <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">Projects</span>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-16 sm:mt-20"
        >
          <button className="btn-gradient group relative overflow-hidden">
            <span className="relative z-10 flex items-center justify-center">
              Explore Our Portfolio
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-[#472A71] to-[#5C3693] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{ 
                x: ["0%", "100%", "0%"],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 8,
                ease: "linear" 
              }}
            />
          </button>
        </motion.div>
      </div>
      
      {/* Footer Service Navigation */}
      <div className="mt-24 pt-12 border-t border-[#5C3693]/30 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-[#5C3693]/5 to-[#472A71]/5"
          animate={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
          }}
          transition={{ 
            repeat: Infinity,
            duration: 15,
            ease: "linear" 
          }}
        />
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl font-semibold mb-6 md:mb-8 text-center"
          >
            Explore Our Solutions
          </motion.h4>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 md:gap-4 text-center"
          >
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                variants={serviceVariants}
                onClick={() => getServiceFromFooter(service.id)}
                className="px-3 py-2 md:py-3 rounded-lg bg-[#5C3693]/10 hover:bg-[#5C3693]/30 border border-[#5C3693]/20 cursor-pointer transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-[#5C3693]/20 flex flex-col items-center justify-center"
                whileHover={{
                  y: -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <span className="text-lg mb-1 hidden md:block">{service.icon}</span>
                <span className="text-xs sm:text-sm md:text-base font-medium">{service.title}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;