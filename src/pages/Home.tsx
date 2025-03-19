import { Loader } from 'lucide-react';
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import ServicesLoader from '../components/Loader';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);
  const featuresRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const platformsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    // Track mouse position for parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    // Track scroll position for scroll-based animations
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to check if element is in viewport
  const isInViewport = (elementRef: React.RefObject<HTMLDivElement>, offset = 100) => {
    if (!elementRef.current) return false;
    const rect = elementRef.current.getBoundingClientRect();
    return (
      rect.top + offset < window.innerHeight &&
      rect.bottom - offset > 0
    );
  };

  const handleLoaderFinished = () => {
    setIsLoading(false);
  };

  return (
    <>
      <div className="relative w-full bg-black overflow-hidden">
        {/* Hero Section */}
        <div className="relative h-screen">
          {/* Subtle gradient background */}
          <div
          />

          {/* Grid background */}
          <div
            className="absolute inset-0"
          >
            <div className="grid grid-cols-12 gap-4 h-full w-full">
              {Array.from({ length: 12 }).map((_, colIndex) => (
                <div key={`col-${colIndex}`} className="h-full">
                  {Array.from({ length: 12 }).map((_, rowIndex) => (
                    <div
                      key={`cell-${colIndex}-${rowIndex}`}
                      className={`h-24 border border-[#5C3693]/20 transition-all duration-700 ${isVisible
                          ? 'opacity-100'
                          : 'opacity-0'
                        }`}
                      style={{
                        transitionDelay: `${(colIndex + rowIndex) * 20}ms`
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Animated purple orbs */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={`orb-${i}`}
                className={`absolute rounded-full bg-[#5C3693] blur-3xl opacity-20 transition-all duration-1000 ${isVisible ? 'scale-100' : 'scale-0'
                  }`}
                style={{
                  width: `${100 + i * 50}px`,
                  height: `${100 + i * 50}px`,
                  left: `${10 + i * 20}%`,
                  top: `${20 + i * 15}%`,
                  transitionDelay: `${500 + i * 200}ms`,
                  transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)`,
                }}
              />
            ))}
          </div>

          {/* Content container */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-[#FFFFFF] px-4">
            {/* Announcement pill */}
            <div
              className={`bg-[#472A71]/80 rounded-full px-6 py-2 mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-8'
                }`}
            >
              <span className="text-sm font-medium text-[#FFFFFF]">Marketing. Branding. Digital Solutions.</span>
            </div>

            {/* Main heading */}
            <h1
              className={`text-5xl md:text-7xl font-bold text-center mb-6 max-w-5xl transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-8'
                }`}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF] to-[#5C3693]">
              Your Growth Partner in Marketing & Digital Innovation
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className={`text-lg text-[#FFFFFF]/80 text-center max-w-3xl mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-8'
                }`}
            >
              We create data-driven marketing strategies and scalable digital solutions that help businesses thrive in a competitive world.
            </p>

            {/* CTA Button with hover effect */}
            <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-8'
              }`}>
              <Link
                to="/contact"
                className="btn-gradient group relative overflow-hidden"
              >
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition-all duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-[#FFFFFF]/10 opacity-30 group-hover:rotate-90 ease-out"></span>
                <span className="relative flex items-center">
                  Let's Talk <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </div>
          </div>

          {/* Floating elements for added visual interest */}
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={`float-${i}`}
              className={`absolute rounded-full w-2 h-2 bg-[#5C3693] transition-all duration-1000 ${isVisible ? 'opacity-40' : 'opacity-0'
                }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `scale(${Math.random() * 2 + 0.5})`,
                transitionDelay: `${1000 + Math.random() * 1000}ms`,
                animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`
              }}
            />
          ))}

          {/* Scroll indicator */}
          <div
            className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <div className="w-8 h-12 rounded-full border-2 border-[#FFFFFF]/30 flex justify-center">
              <div
                className="w-2 h-2 bg-[#FFFFFF] rounded-full mt-2"
                style={{
                  animation: 'scrollIndicator 2s infinite ease-in-out'
                }}
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div
          ref={featuresRef}
          className="relative min-h-screen py-24 bg-gradient-to-b from-[#000000] to-[#000000] overflow-hidden"
        >
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute w-full h-full opacity-10">
              <div className="absolute -right-64 top-0 w-[800px] h-[800px] rounded-full bg-[#5C3693]/30 blur-[150px]" />
              <div className="absolute -left-64 bottom-0 w-[600px] h-[600px] rounded-full bg-[#472A71]/20 blur-[150px]" />
              </div>
            {/* Enhanced grid pattern with animation */}
            <div className="absolute inset-0 opacity-10">
              {Array.from({ length: 40 }).map((_, i) => (
                <div 
                  key={`grid-h-${i}`} 
                  className="absolute h-px w-full bg-[#5C3693]/40"
                  style={{ 
                    top: `${i * 2.5}%`,
                    animation: `pulse 4s infinite ease-in-out ${i * 0.1}s`
                  }}
                />
              ))}
              {Array.from({ length: 40 }).map((_, i) => (
                <div 
                  key={`grid-v-${i}`} 
                  className="absolute w-px h-full bg-[#5C3693]/40"
                  style={{ 
                    left: `${i * 2.5}%`,
                    animation: `pulse 4s infinite ease-in-out ${i * 0.1}s`
                  }}
                />
              ))}
            </div>
            
            {/* Floating particle elements */}
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={`particle-${i}`}
                className="absolute rounded-full bg-[#5C3693] opacity-20"
                style={{
                  width: `${4 + Math.random() * 8}px`,
                  height: `${4 + Math.random() * 8}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${15 + Math.random() * 15}s infinite ease-in-out ${Math.random() * 5}s`
                }}
              />
            ))}
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            {/* Section header with improved animation */}
            <div className="text-center mb-28 relative">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInViewport(featuresRef) ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="inline-block bg-gradient-to-r from-[#5C3693]/20 to-[#472A71]/20 px-5 py-2 rounded-full mb-6 border border-[#5C3693]/30"
              >
                <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#5C3693] to-[#472A71]">What Sets Us Apart</span>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={isInViewport(featuresRef) ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold text-center mb-8 relative"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF] to-[#5C3693]">
                  Everything You Need to <span className="relative inline-block">
                    <span className="text-[#5C3693]">Grow & Succeed</span>
                    <span className="absolute -bottom-2 left-0 h-3 w-full bg-[#5C3693]/20 rounded-full blur-sm"></span>
                  </span>
                </span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isInViewport(featuresRef) ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[#FFFFFF]/60 max-w-2xl mx-auto text-lg"
              >
              Our expertise goes beyond marketing, we deliver strategic solutions that maximize impact, boost engagement, and drive conversions. Whether you need visibility, branding, or digital growth strategies, we simplify success.
              </motion.p>
              
              {/* Enhanced decorative lines */}
              <div className="absolute left-1/2 -bottom-14 transform -translate-x-1/2 w-px h-10 bg-gradient-to-b from-[#5C3693] to-transparent"></div>
              <div className="absolute left-1/2 -bottom-14 transform -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-[#5C3693] to-transparent"></div>
            </div>

            {/* Features hero cards - first row - large prominent cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {[
                {
                  title: "Data-Driven Marketing",
                  description: "We craft high-impact marketing strategies based on analytics and industry insights that deliver measurable results.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                      <path d="M3 3v18h18"></path>
                      <path d="M18 17V9"></path>
                      <path d="M13 17V5"></path>
                      <path d="M8 17v-3"></path>
                    </svg>
                  ),
                  accent: "#5C3693"
                },
                {
                  title: "SEO & Visibility Boost",
                  description: "Dominate search rankings with our expert SEO optimization techniques and comprehensive visibility strategies.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      <line x1="11" y1="8" x2="11" y2="14"></line>
                      <path d="M8 11h6"></path>
                      <path d="M21 11l-2-2-2 2 2 2 2-2z"></path>
                    </svg>
                  ),
                  accent: "#472A71"
                }
              ].map((feature, index) => (
                <motion.div
                  key={`hero-feature-${index}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInViewport(featuresRef) ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.2 + (index * 0.1) }}
                  className="relative group h-full perspective transform-style-3d"
                >
                  <div 
                    className="relative h-full bg-black/40 backdrop-blur-sm border border-opacity-20 rounded-2xl p-8 md:p-10 hover:border-opacity-50 transition-all duration-500 overflow-hidden transform group-hover:translate-z-10"
                    style={{ 
                      borderColor: feature.accent,
                      background: `radial-gradient(circle at bottom right, rgba(0,0,0,0.8), rgba(0,0,0,0.95))`,
                    }}
                  >
                    {/* Enhanced glowing orb effect */}
                    <div 
                      className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-3xl"
                      style={{ 
                        background: `radial-gradient(circle, ${feature.accent}, transparent 70%)`,
                        animation: 'pulse 3s infinite alternate ease-in-out' 
                      }}
                    ></div>
                    
                    {/* Enhanced border glow effect on hover */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"
                      style={{ 
                        background: `linear-gradient(45deg, transparent, ${feature.accent}20, transparent)`,
                        backgroundSize: '200% 200%',
                        animation: 'shimmer 3s infinite',
                      }}
                    ></div>
                    
                    <div className="relative z-10">
                      {/* Icon with enhanced gradient background */}
                      <div 
                        className="w-20 h-20 rounded-xl flex items-center justify-center mb-8 text-white transform group-hover:scale-110 transition-transform duration-300"
                        style={{ 
                          background: `linear-gradient(135deg, ${feature.accent}, ${feature.accent}70)`,
                          boxShadow: `0 10px 30px -5px ${feature.accent}40`
                        }}
                      >
                        {feature.icon}
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-[#FFFFFF]">
                        {feature.title}
                      </h3>
                      
                      <p className="text-[#FFFFFF]/60 group-hover:text-[#FFFFFF]/90 transition-colors duration-300 text-lg">
                        {feature.description}
                      </p>
                      
                      {/* Enhanced arrow indicator that appears on hover */}
                      <div className="mt-6 opacity-0 transform translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke={feature.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Middle row of 3 smaller cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  title: "Conversion-Focused Strategies",
                  description: "Turn visitors into customers with strategic call-to-action elements and user-focused campaigns optimized for conversion.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <polyline points="16 11 18 13 22 9"></polyline>
                    </svg>
                  ),
                  accent: "#5C3693"
                },
                {
                  title: "Brand Identity & Design",
                  description: "Elevate your brand with cohesive, visually compelling branding and messaging that resonates with your target audience.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                      <line x1="12" y1="22" x2="12" y2="12"></line>
                    </svg>
                  ),
                  accent: "#472A71"
                },
                {
                  title: "Fast & Scalable Growth",
                  description: "We optimize your marketing for both short-term wins and long-term success with scalable strategies that grow with your business.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  ),
                  accent: "#5C3693"
                }
              ].map((feature, index) => (
                <motion.div
                  key={`mid-feature-${index}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInViewport(featuresRef) ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.4 + (index * 0.1) }}
                  className="relative group h-full"
                >
                  <div 
                    className="relative h-full bg-black/40 backdrop-blur-sm border border-opacity-20 rounded-2xl p-6 hover:border-opacity-50 transition-all duration-500 overflow-hidden transform group-hover:translate-y-[-8px]"
                    style={{ 
                      borderColor: feature.accent,
                      background: `radial-gradient(circle at bottom right, rgba(0,0,0,0.8), rgba(0,0,0,0.95))`,
                    }}
                  >
                    {/* Glowing effect */}
                    <div 
                      className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl"
                      style={{ background: `radial-gradient(circle, ${feature.accent}, transparent 70%)` }}
                    ></div>
                    
                    <div className="relative z-10">
                      {/* Icon with gradient background */}
                      <div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-white transform group-hover:scale-105 transition-transform duration-300"
                        style={{ 
                          background: `linear-gradient(135deg, ${feature.accent}, ${feature.accent}70)`,
                          boxShadow: `0 10px 30px -10px ${feature.accent}30`
                        }}
                      >
                    {feature.icon}
                  </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-[#FFFFFF]">
                        {feature.title}
                      </h3>
                      
                      <p className="text-[#FFFFFF]/60 group-hover:text-[#FFFFFF]/80 transition-colors duration-300">
                        {feature.description}
                      </p>
                      
                      {/* Hover indicator */}
                      <div className="mt-4 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke={feature.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                </div>
            </div>
                  </div>
                </motion.div>
              ))}
          </div>

            {/* Featured card - full width */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInViewport(featuresRef) ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="relative group h-full"
            >
              <div 
                className="relative h-full bg-black/40 backdrop-blur-sm border border-opacity-20 rounded-2xl p-8 md:p-10 hover:border-opacity-70 transition-all duration-500 overflow-hidden"
              style={{
                  borderColor: "#472A71",
                  background: `radial-gradient(circle at top left, rgba(71,42,113,0.3), rgba(0,0,0,0.95))`,
              }}
              >
                {/* Multiple glowing orbs for featured card */}
            <div
                  className="absolute top-0 left-0 w-80 h-80 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-3xl"
              style={{
                    background: `radial-gradient(circle, #5C3693, transparent 70%)`,
                    animation: 'float 15s infinite alternate ease-in-out'
                  }}
                ></div>
                <div 
                  className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-3xl"
                  style={{ 
                    background: `radial-gradient(circle, #472A71, transparent 70%)`,
                    animation: 'float 15s infinite alternate-reverse ease-in-out'
                  }}
                ></div>
                
                {/* Enhanced border glow for featured card */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"
                  style={{ 
                    background: `linear-gradient(45deg, #472A7120, #5C369330, #472A7120)`,
                    backgroundSize: '200% 200%',
                    animation: 'shimmer 4s infinite',
                  }}
                ></div>
                
                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
                  {/* Icon with gradient background */}
                  <div 
                    className="w-20 h-20 md:w-24 md:h-24 rounded-xl flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-500"
                    style={{ 
                      background: `linear-gradient(135deg, #472A71, #5C369370)`,
                      boxShadow: `0 20px 40px -10px rgba(92,54,147,0.4)`
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 md:w-12 md:h-12">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                    </svg>
          </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 transition-colors duration-300">
                      Seamless Customization
                    </h3>
                    
                    <p className="text-[#FFFFFF]/70 group-hover:text-[#FFFFFF]/90 transition-colors duration-300 text-lg md:text-xl max-w-4xl">
                      Tailored marketing solutions to fit your unique business needs, ensuring every campaign perfectly aligns with your goals and audience.
                    </p>
                    
                    {/* Call to action button */}
                    <div className="mt-6 inline-flex items-center text-[#5C3693] hover:text-[#FFFFFF] transition-colors duration-300 group-hover:translate-x-2 transform transition-transform">
                      <span className="mr-2 font-medium">Discover our customization options</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Subtle call to action */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInViewport(featuresRef) ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-16 text-center"
            >
              <Link to="#" className="inline-flex items-center text-[#5C3693] hover:text-[#472A71] transition-colors duration-300 hover:scale-105 transform transition-transform">
                <span className="py-2 px-6 border border-[#5C3693]/30 rounded-full hover:bg-[#5C3693]/10 transition-colors duration-300">
                  Explore all our features
                  <svg className="ml-2 w-5 h-5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Testimonials Section with Parallax */}
        <div
          ref={testimonialsRef}
          className="relative min-h-screen py-24 bg-[#000000]"
        >
          {/* Parallax grid lines */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              transform: `translateY(${scrollPosition * 0.1}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className="h-full w-full">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={`line-${i}`}
                  className="absolute h-px w-full bg-gradient-to-r from-transparent via-[#5C3693]/10 to-transparent"
                  style={{ top: `${i * 5}%` }}
                />
              ))}
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 relative z-10">
            {/* Section header */}
            <div className="text-center mb-20">
              <div className="inline-block bg-[#472A71]/20 px-4 py-1 rounded-full mb-4">
                <span className="text-sm font-medium text-[#5C3693]">What People Say</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-6">
              Trusted by <span className="text-[#5C3693]">Businesses</span>  That Lead
              </h2>
              <p className="text-[#FFFFFF]/60 max-w-2xl mx-auto">
              See how our clients achieve real growth with our marketing strategies and digital solutions. Their success stories speak for themselves
              </p>
            </div>

            {/* Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote: "This template completely transformed our landing page. The animations are stunning and our conversion rate increased by 40%.",
                  author: "Sarah Johnson",
                  role: "Marketing Director"
                },
                {
                  quote: "I've never received so many compliments on my website before. The design is spectacular and it was incredibly easy to customize.",
                  author: "Michael Chang",
                  role: "Startup Founder"
                },
                {
                  quote: "As a non-designer, I was amazed at how professional my landing page looks. Worth every penny!",
                  author: "Emma Williams",
                  role: "Product Manager"
                },
                {
                  quote: "The animations and responsiveness of this template are unmatched. Our bounce rate decreased significantly after implementation.",
                  author: "Alex Rodriguez",
                  role: "UX Designer"
                }
              ].map((testimonial, index) => (
                <div
                  key={`testimonial-${index}`}
                  className={`bg-gradient-to-br from-[#000000] to-[#472A71] border border-[#5C3693]/20 rounded-xl p-8 transition-all duration-700 transform ${isInViewport(testimonialsRef)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-12'
                    }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="mb-6">
                    {/* Stars */}
                    <div className="flex mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-[#5C3693] mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-[#FFFFFF] text-lg italic mb-4">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#5C3693] to-[#472A71] flex items-center justify-center text-[#FFFFFF] font-bold mr-3">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-[#FFFFFF] font-medium">{testimonial.author}</h4>
                        <p className="text-[#FFFFFF]/60 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Supported Platforms Section with Animations */}
        <div
          ref={platformsRef}
          className="relative min-h-screen py-24 bg-gradient-to-b from-[#000000] to-[#000000]"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5C3693]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5C3693]/30 to-transparent" />

          <div className="max-w-6xl mx-auto px-4">
            {/* Section header */}
            <div className="text-center mb-20">
              <div className="inline-block bg-[#472A71]/20 px-4 py-1 rounded-full mb-4">
                <span className="text-sm font-medium text-[#5C3693]">Platform Integrations</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-6">
              Works with Your <span className="text-[#5C3693]">Growth Channels</span>
              </h2>
              <p className="text-[#FFFFFF]/60 max-w-2xl mx-auto">
              Seamlessly integrate our expert marketing strategies to boost your brand across all major digital platforms.
              </p>
            </div>

            {/* Platform cards with animations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "SEO",
                  icon: "seo",
                  description: "Dominate search engine rankings with our data-driven SEO strategies tailored for sustainable growth.",
                  features: [
                    "Keyword research & on-page optimization",
                    "Technical SEO & site audits",
                    "High-quality backlink building",
                    "Content marketing & blog strategy",
                    "Performance tracking & analytics"
                  ],
                  cta: "Explore SEO Services",
                  color: "#5C3693",
                  animation: "float"
                },
                {
                  name: "Social Media Marketing (SMM)",
                  icon: "smm",
                  description: "Grow, engage, and convert your audience with strategic social media campaigns.",
                  features: [
                    "Social media strategy & management",
                    "Audience targeting & engagement tactics",
                    "Influencer & community marketing",
                    "Organic & paid content optimization",
                    "Performance insights & analytics"
                  ],
                  cta: "Explore SMM Services",
                  color: "#472A71",
                  animation: "pulse",
                  popular: true
                },
                {
                  name: "Paid Advertising (PPC)",
                  icon: "ads",
                  description: "Maximize ROI with high-performing, conversion-driven paid campaigns.",
                  features: [
                    "Google Ads, Facebook & Instagram Ads",
                    "Retargeting & audience segmentation",
                    "A/B testing & ad optimization",
                    "Conversion rate optimization (CRO)",
                    "Budget management & performance tracking"
                  ],
                  cta: "Explore Paid Ads",
                  color: "#5C3693",
                  animation: "slide"
                }
              ].map((platform, index) => (
                <div
                  key={`platform-${index}`}
                  className={`group relative border border-[#5C3693]/20 rounded-xl transition-all duration-500 ${platform.popular
                      ? 'bg-gradient-to-b from-[#472A71] to-[#472A71]'
                      : 'bg-[#000000] hover:bg-[#472A71]'
                    } ${isInViewport(platformsRef)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-12'
                    }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {platform.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#5C3693] text-[#FFFFFF] text-xs font-semibold py-1 px-4 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <div className="p-8">
                    {/* Platform icon with animation */}
                    <div
                      className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center ${platform.animation === "float"
                          ? "animate-float"
                          : platform.animation === "pulse"
                            ? "animate-pulse-slow"
                            : "animate-slide"
                        }`}
                      style={{
                        background: `linear-gradient(135deg, ${platform.color}, ${platform.color}70)`,
                        boxShadow: `0 10px 30px -5px ${platform.color}30`
                      }}
                    >
                      {platform.icon === "seo" && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#FFFFFF]">
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                          <line x1="11" y1="8" x2="11" y2="14"></line>
                          <line x1="8" y1="11" x2="14" y2="11"></line>
                        </svg>
                      )}
                      {platform.icon === "smm" && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#FFFFFF]">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                          <circle cx="18" cy="18" r="3"></circle>
                          <path d="M18.5 9A4.5 4.5 0 0 0 23 4.5"></path>
                        </svg>
                      )}
                      {platform.icon === "ads" && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#FFFFFF]">
                          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                          <path d="M2 17l10 5 10-5"></path>
                          <path d="M2 12l10 5 10-5"></path>
                          <line x1="12" y1="22" x2="12" y2="12"></line>
                        </svg>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-[#FFFFFF] mb-2">{platform.name}</h3>
                    <p className="text-[#FFFFFF]/60 mb-6">{platform.description}</p>
                    <ul className="mb-6 space-y-3">
                      {platform.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-[#FFFFFF]/80">
                          <svg className="w-5 h-5 text-[#5C3693] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      className={`w-full py-3 px-6 rounded-lg text-[#FFFFFF] font-medium transition-all duration-300 ${platform.popular
                          ? 'bg-gradient-to-r from-[#5C3693] to-[#472A71] hover:shadow-lg hover:shadow-[#5C3693]/20'
                          : 'bg-[#472A71]/80 hover:bg-[#472A71]'
                        }`}
                    >
                      {platform.cta}
                    </button>
                  </div>

                  {/* Interactive animation effect on hover */}
                  <div className="absolute bottom-0 left-0 w-full h-1/2 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {platform.icon === "seo" && (
                      <div className="absolute bottom-0 left-0 w-full">
                        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-12 text-[#5C3693]/10">
                          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" opacity=".25"></path>
                          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
                          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
                        </svg>
                      </div>
                    )}
                    {platform.icon === "smm" && (
                      <div className="absolute inset-0">
                        {Array.from({ length: 8 }).map((_, i) => (
                          <div
                            key={i}
                            className="absolute bg-[#5C3693]/10 rounded-full"
                            style={{
                              width: `${20 + Math.random() * 30}px`,
                              height: `${20 + Math.random() * 30}px`,
                              bottom: `${Math.random() * 100}%`,
                              left: `${Math.random() * 100}%`,
                              animation: `float ${3 + Math.random() * 4}s infinite ease-in-out ${Math.random() * 2}s`
                            }}
                          />
                        ))}
                      </div>
                    )}
                    {platform.icon === "ads" && (
                      <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-full h-full">
                          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#5C3693]/10 to-transparent"
                            style={{ transform: "translateY(50%)", transition: "transform 0.5s ease-out" }} />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Platform-specific decorative elements */}
                  {platform.popular && (
                    <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                      <div className="absolute inset-0 rounded-xl border-2 border-[#5C3693]/50" />
                      <div
                        className="absolute top-0 left-0 w-full h-full border-2 border-[#5C3693] rounded-xl"
                        style={{
                          clipPath: 'polygon(0% 0%, 5% 0%, 5% 100%, 0% 100%)',
                          animation: 'borderFlow 2s infinite linear'
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>


          </div>
        </div>
        {/* Technologies Section */}
        <div className="relative py-24 bg-[#000000] overflow-hidden">
          {/* Section header */}
          <div className="text-center mb-20 relative z-20">
            <div className="inline-block bg-[#472A71]/20 px-4 py-1 rounded-full mb-4">
              <span className="text-sm font-medium text-[#5C3693]">Built With</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-6">
              Technologies we use
            </h2>
            <p className="text-[#FFFFFF]/60 max-w-2xl mx-auto">
              We leverage industry-leading platforms and tools to create powerful marketing strategies and deliver exceptional results.
            </p>
          </div>

          {/* Infinite Slider */}
          <div className="relative w-full overflow-hidden">
            {/* First row - Marketing & SEO Platforms */}
            <div className="w-[200%] flex relative">
              <div className="flex animate-infinite-scroll w-[50%] justify-around">
                {[
                  { 
                    name: "Google Ads", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
                  },
                  { 
                    name: "Google Analytics", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
                  },
                  { 
                    name: "SEO Tools", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                  },
                  { 
                    name: "Keyword Planner", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><polygon points="14 2 18 6 7 17 3 17 3 13 14 2"/><line x1="3" y1="22" x2="21" y2="22"/></svg>
                  },
                  { 
                    name: "Google Search Console", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M4 4v16h16"/><path d="M4 20l7-7"/><path d="M15 4l5 5"/><path d="M9 9l5 5"/></svg>
                  },
                  { 
                    name: "Ahrefs", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M9 10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4z"/><path d="M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"/><path d="M21 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z"/></svg>
                  },
                  { 
                    name: "SEMrush", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m15 9-6 6"/><circle cx="15" cy="15" r="2"/></svg>
                  },
                  { 
                    name: "Mailchimp", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  },
                  { 
                    name: "Facebook", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  },
                  { 
                    name: "Shopify", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M7 21L3 15h4l4 6M14 3a2 2 0 0 0-2 2v4h6v-4a2 2 0 0 0-2-2h-2zM14 15a2 2 0 0 1-2-2v-4h6v4a2 2 0 0 1-2 2h-2z"/></svg>
                  }
                ].map((tech, index) => (
                  <div
                    key={`tech1-${index}`}
                    className="flex flex-col items-center group px-8 mx-2"
                  >
                    <div className="mb-3 text-[#FFFFFF]/60 group-hover:text-[#5C3693] transition-all duration-300">
                      {tech.icon}
                    </div>
                    <span className="text-[#FFFFFF] text-sm font-medium opacity-70 group-hover:opacity-100 transition-all duration-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex animate-infinite-scroll w-[50%] justify-around" aria-hidden="true">
                {[
                  { 
                    name: "Google Ads", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
                  },
                  { 
                    name: "Google Analytics", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
                  },
                  { 
                    name: "SEO Tools", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                  },
                  { 
                    name: "Keyword Planner", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><polygon points="14 2 18 6 7 17 3 17 3 13 14 2"/><line x1="3" y1="22" x2="21" y2="22"/></svg>
                  },
                  { 
                    name: "Google Search Console", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M4 4v16h16"/><path d="M4 20l7-7"/><path d="M15 4l5 5"/><path d="M9 9l5 5"/></svg>
                  },
                  { 
                    name: "Ahrefs", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M9 10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4z"/><path d="M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"/><path d="M21 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z"/></svg>
                  },
                  { 
                    name: "SEMrush", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m15 9-6 6"/><circle cx="15" cy="15" r="2"/></svg>
                  },
                  { 
                    name: "Mailchimp", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  },
                  { 
                    name: "Facebook", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  },
                  { 
                    name: "Shopify", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M7 21L3 15h4l4 6M14 3a2 2 0 0 0-2 2v4h6v-4a2 2 0 0 0-2-2h-2zM14 15a2 2 0 0 1-2-2v-4h6v4a2 2 0 0 1-2 2h-2z"/></svg>
                  }
                ].map((tech, index) => (
                  <div
                    key={`tech1-dup-${index}`}
                    className="flex flex-col items-center group px-8 mx-2"
                  >
                    <div className="mb-3 text-[#FFFFFF]/60 group-hover:text-[#5C3693] transition-all duration-300">
                      {tech.icon}
                    </div>
                    <span className="text-[#FFFFFF] text-sm font-medium opacity-70 group-hover:opacity-100 transition-all duration-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gradient overlays */}
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />
          </div>

          {/* Second row - Social Media and Digital Branding */}
          <div className="relative w-full overflow-hidden mt-12">
            {/* Second row - reverse direction */}
            <div className="w-[200%] flex relative">
              <div className="flex animate-infinite-scroll-reverse w-[50%] justify-around">
                {[
                  { 
                    name: "Instagram", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  },
                  { 
                    name: "Adobe Creative Suite", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  },
                  { 
                    name: "LinkedIn Ads", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  },
                  { 
                    name: "Twitter/X", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  },
                  { 
                    name: "WordPress", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><path d="M12 8c-2.3 0-4 1.9-4 4 0 2 2 4 4 3 1.9-.9 2-2.6 2-3s.1-4-2-4z"/><path d="M9 14v0"/><path d="M15 14v0"/><path d="M19 12h.01"/><path d="M19 16h.01"/><path d="M19 8h.01"/><path d="M5 12h.01"/><path d="M5 16h.01"/><path d="M5 8h.01"/></svg>
                  },
                  { 
                    name: "Google Tag Manager", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="7.5 4.21 12 6.81 16.5 4.21"/><polyline points="7.5 19.79 7.5 14.6 3 12"/><polyline points="21 12 16.5 14.6 16.5 19.79"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                  },
                  { 
                    name: "Canva", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Z"/><path d="M8 15v-3a2 2 0 0 1 4 0"/><path d="M14 9l2 2-2 2"/></svg>
                  },
                  { 
                    name: "TikTok", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/><path d="M16 8v8a5 5 0 0 1-5 5v0a5 5 0 0 1-5-5v0"/><path d="M19 6c-.6-1.5-1.6-2.5-3-3"/><path d="M22 6c-.6-3-2.5-5-5-5.6"/></svg>
                  },
                  { 
                    name: "HubSpot", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><path d="M12 8v8"/><path d="M9 11l3 3 3-3"/></svg>
                  }
                ].map((tech, index) => (
                  <div
                    key={`tech2-${index}`}
                    className="flex flex-col items-center group px-8 mx-2"
                  >
                    <div className="mb-3 text-[#FFFFFF]/60 group-hover:text-[#5C3693] transition-all duration-300">
                      {tech.icon}
                    </div>
                    <span className="text-[#FFFFFF] text-sm font-medium opacity-70 group-hover:opacity-100 transition-all duration-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex animate-infinite-scroll-reverse w-[50%] justify-around" aria-hidden="true">
                {[
                  { 
                    name: "Instagram", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  },
                  { 
                    name: "Adobe Creative Suite", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  },
                  { 
                    name: "LinkedIn Ads", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  },
                  { 
                    name: "Twitter/X", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  },
                  { 
                    name: "WordPress", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><path d="M12 8c-2.3 0-4 1.9-4 4 0 2 2 4 4 3 1.9-.9 2-2.6 2-3s.1-4-2-4z"/><path d="M9 14v0"/><path d="M15 14v0"/><path d="M19 12h.01"/><path d="M19 16h.01"/><path d="M19 8h.01"/><path d="M5 12h.01"/><path d="M5 16h.01"/><path d="M5 8h.01"/></svg>
                  },
                  { 
                    name: "Google Tag Manager", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="7.5 4.21 12 6.81 16.5 4.21"/><polyline points="7.5 19.79 7.5 14.6 3 12"/><polyline points="21 12 16.5 14.6 16.5 19.79"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                  },
                  { 
                    name: "Canva", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Z"/><path d="M8 15v-3a2 2 0 0 1 4 0"/><path d="M14 9l2 2-2 2"/></svg>
                  },
                  { 
                    name: "TikTok", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/><path d="M16 8v8a5 5 0 0 1-5 5v0a5 5 0 0 1-5-5v0"/><path d="M19 6c-.6-1.5-1.6-2.5-3-3"/><path d="M22 6c-.6-3-2.5-5-5-5.6"/></svg>
                  },
                  { 
                    name: "HubSpot", 
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><path d="M12 8v8"/><path d="M9 11l3 3 3-3"/></svg>
                  }
                ].map((tech, index) => (
                  <div
                    key={`tech2-dup-${index}`}
                    className="flex flex-col items-center group px-8 mx-2"
                  >
                    <div className="mb-3 text-[#FFFFFF]/60 group-hover:text-[#5C3693] transition-all duration-300">
                      {tech.icon}
                    </div>
                    <span className="text-[#FFFFFF] text-sm font-medium opacity-70 group-hover:opacity-100 transition-all duration-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gradient overlays for second row */}
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />
          </div>

          {/* Add some decorative elements */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#5C3693] rounded-full filter blur-[100px]" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#472A71] rounded-full filter blur-[100px]" />
          </div>
          
        </div>
      </div>

      {/* Ready to Transform Section */}
      <section className="py-24 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000] to-[#000000]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
             Ready to Scale Your <span className="text-[#5C3693]">Brand</span> with Expert Marketing?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
            Let's craft a marketing strategy that drives results. Whether you need SEO, paid ads, or social media growth, our team is here to turn your goals into success.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary-lg"
            >
              Your success starts here!
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>
          </div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#5C3693] rounded-full filter blur-[100px]" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#472A71] rounded-full filter blur-[100px]" />
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;