import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';

// Import GSAP for animations
const gsapEffects = () => {
  // This is where GSAP animations would be implemented
  // Since we can't directly import gsap in this environment,
  // we're using the animation capabilities of framer-motion instead
  return {
    init: () => {
      // Initialize animations
    }
  };
};

const ContactForm = () => {
  const [selectedBudget, setSelectedBudget] = useState(null);
  const formRef = useRef(null);
  
  const budgetOptions = [
    { value: '10-20k', label: '10-20k' },
    { value: '30-40k', label: '30-40k' },
    { value: '40-50k', label: '40-50k' },
    { value: '50-100k', label: '50-100k' },
    { value: '> 100k', label: '> 100k' },
  ];
  const handleBudgetSelect = (value: any) => {
    setSelectedBudget(value);
  };

  return (
    <motion.form
      ref={formRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-black rounded-lg shadow-xl p-8 w-full"
    >
      <div className="mb-6">
        <input
          type="text"
          className="w-full border-b border-gray-700 py-3 text-white focus:outline-none focus:border-white transition-colors bg-transparent"
          placeholder="Your name"
        />
      </div>
      
      <div className="mb-6">
        <input
          type="email"
          className="w-full border-b border-gray-700 py-3 text-white focus:outline-none focus:border-white transition-colors bg-transparent"
          placeholder="Email"
        />
      </div>
      
      <div className="mb-8">
        <textarea
          rows={3}
          className="w-full border-b border-gray-700 py-3 text-white focus:outline-none focus:border-white transition-colors resize-none bg-transparent"
          placeholder="Tell us about your project"
        ></textarea>
      </div>
      
      <div className="mb-8">
        <p className="text-lg font-medium text-white mb-4">Project budget (USD)</p>
        <div className="flex flex-wrap gap-3">
          {budgetOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleBudgetSelect(option.value)}
              className={`px-4 py-2 rounded-full border ${
                selectedBudget === option.value 
                  ? 'border-[#5C3693] bg-[#5C3693] text-[#FFFFFF]' 
                  : 'border-[#5C3693]/20 text-[#FFFFFF] hover:border-[#5C3693]/50'
              } transition-all`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="bg-[#5C3693] text-[#FFFFFF] py-3 px-6 rounded-full font-medium flex items-center justify-center gap-2 w-full md:w-auto"
      >
        <span>Send message</span>
        <Send size={16} />
      </motion.button>
    </motion.form>
  );
};

const AnimatedHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

const InterestItem = ({ text, isActive = false }: { text: string; isActive?: boolean }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-6 py-3 rounded-full border ${
        isActive ? 'border-[#5C3693] bg-[#5C3693] text-[#FFFFFF]' : 'border-[#5C3693]/20 text-[#FFFFFF]'
      } transition-all`}
    >
      {text}
    </motion.button>
  );
};

const Contact = () => {
  const interests = [
    { id: 1, text: 'Site from scratch' },
    { id: 2, text: 'UX/UI design' },
    { id: 3, text: 'Product design' },
    { id: 4, text: 'Webflow site' },
    { id: 5, text: 'Motion design' },
    { id: 6, text: 'Branding' },
    { id: 7, text: 'Mobile development' },
  ];
  
  useEffect(() => {
    const gsap = gsapEffects();
    gsap.init();
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Hero Section */}
        <div className="mb-20">
          <AnimatedHeading>
            <h1 className="text-6xl md:text-7xl font-black mb-16 text-white">
              Hey! Tell us all<br />
              the things <span className="inline-block animate-pulse">👋</span>
            </h1>
          </AnimatedHeading>
          
          <div className="space-y-8">
            <p className="text-xl text-gray-300">I'm interested in...</p>
            
            <motion.div 
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
            >
              {interests.map((item) => (
                <InterestItem key={item.id} text={item.text} />
              ))}
            </motion.div>
          </div>
        </div>
        
        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="order-2 lg:order-1">
            <ContactForm />
          </div>
          
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Let's talk about your project</h2>
            <p className="text-gray-300 mb-12">We help ambitious brands grow by creating captivating digital experiences that convert and drive growth.</p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start">
                <div className="text-white mr-4">
                  <MapPin />
                </div>
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-gray-300">123 Design Street, Creative City, 10001</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-white mr-4">
                  <Mail />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-gray-300">hello@axonaryweb.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-white mr-4">
                  <Clock />
                </div>
                <div>
                  <h4 className="text-white font-medium">Working Hours</h4>
                  <p className="text-gray-300">Monday - Friday: 9am - 6pm</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;