import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

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

const ContactForm = ({ selectedInterests }: { selectedInterests: string[] }) => {
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [state, handleSubmit] = useForm("xovwpvvg"); // IMPORTANT: Replace "myzjbydg" with your actual Formspree form ID
  
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

  if (state.succeeded) {
    return <p className="text-white text-center text-xl py-8">Thanks for contacting us! We'll get back to you soon.</p>;
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-black rounded-lg shadow-xl p-8 w-full"
    >
      <div className="mb-6">
        <label htmlFor="name" className="sr-only">Your name</label>
        <input
          id="name"
          type="text"
          name="name"
          className="w-full border-b border-gray-700 py-3 text-white focus:outline-none focus:border-white transition-colors bg-transparent"
          placeholder="Your name"
        />
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="email" className="sr-only">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          className="w-full border-b border-gray-700 py-3 text-white focus:outline-none focus:border-white transition-colors bg-transparent"
          placeholder="Email"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </div>
      
      <div className="mb-8">
        <label htmlFor="message" className="sr-only">Tell us about your project</label>
        <textarea
          id="message"
          rows={3}
          name="message"
          className="w-full border-b border-gray-700 py-3 text-white focus:outline-none focus:border-white transition-colors resize-none bg-transparent"
          placeholder="Tell us about your project"
        ></textarea>
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
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
        <input type="hidden" name="budget" value={selectedBudget || ''} />
      </div>

      <input type="hidden" name="interests" value={selectedInterests.join(', ')} />
      
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="btn-primary w-full md:w-auto"
        disabled={state.submitting}
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

const InterestItem = ({ text, isActive = false, onClick }: { text: string; isActive?: boolean; onClick: () => void }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-6 py-3 rounded-full border ${
        isActive ? 'border-[#5C3693] bg-[#5C3693] text-[#FFFFFF]' : 'border-[#5C3693]/20 text-[#FFFFFF]'
      } transition-all`}
      onClick={onClick}
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

  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const handleInterestSelect = (text: string) => {
    setSelectedInterests(prev => 
      prev.includes(text) ? prev.filter(item => item !== text) : [...prev, text]
    );
  };
  
  useEffect(() => {
    // Removed GSAP initialization as it's not being used
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
                <InterestItem 
                  key={item.id} 
                  text={item.text} 
                  isActive={selectedInterests.includes(item.text)}
                  onClick={() => handleInterestSelect(item.text)}
                />
              ))}
            </motion.div>
          </div>
        </div>
        
        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="order-2 lg:order-1">
            <ContactForm selectedInterests={selectedInterests} />
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
                <a href="https://www.facebook.com/people/Axonary/61573521008481" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/axonary" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/axonaryofficial" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
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