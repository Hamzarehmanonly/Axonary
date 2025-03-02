import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Axonary color theme
const AXONARY_COLORS = {
  primary: '#5C3693',
  secondary: '#472A71',
  dark: '#000000',
  light: '#FFFFFF',
  accent1: '#7B4DCC',
  accent2: '#341C52',
  gradient1: '#5C3693',
  gradient2: '#341C52',
};

// Approach step interface
interface ApproachStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  keyPoints: string[];
}

// Sample approach data - replace with your actual approach steps
const approachSteps: ApproachStep[] = [
  {
    id: 1,
    title: "Discovery",
    description: "We deep dive into your business goals, audience needs, and market trends to shape our strategy.",
    icon: "🔍",
    color: AXONARY_COLORS.accent1,
    keyPoints: [
      "User research & persona development",
      "Competitive analysis & market positioning",
      "Business goals alignment & KPI definition"
    ]
  },
  {
    id: 2,
    title: "Strategy",
    description: "We craft a detailed roadmap aligned with your objectives, timeline, and technical requirements.",
    icon: "🧠",
    color: AXONARY_COLORS.primary,
    keyPoints: [
      "Digital roadmap creation",
      "Resource planning & technology selection",
      "Technical architecture planning"
    ]
  },
  {
    id: 3,
    title: "Design",
    description: "Our creative team transforms concepts into visually compelling, user-focused experiences.",
    icon: "✏️",
    color: AXONARY_COLORS.accent1,
    keyPoints: [
      "UI wireframes & prototyping",
      "User experience flows & journey mapping",
      "Visual identity & design system creation"
    ]
  },
  {
    id: 4,
    title: "Development",
    description: "We build robust, scalable solutions using cutting-edge technologies and best practices.",
    icon: "⚙️",
    color: AXONARY_COLORS.primary,
    keyPoints: [
      "Clean code architecture & implementation",
      "Responsive & progressive enhancement",
      "Performance & accessibility optimization"
    ]
  },
  {
    id: 5,
    title: "Testing",
    description: "Rigorous quality assurance ensures flawless performance across all devices and platforms.",
    icon: "🧪",
    color: AXONARY_COLORS.accent1,
    keyPoints: [
      "Automated testing & CI/CD integration",
      "Cross-browser & device compatibility",
      "User acceptance testing & validation"
    ]
  },
  {
    id: 6,
    title: "Launch",
    description: "We execute a smooth deployment and provide comprehensive post-launch support.",
    icon: "🚀",
    color: AXONARY_COLORS.primary,
    keyPoints: [
      "Deployment automation & monitoring setup",
      "Performance tracking & analytics",
      "Continuous improvement & maintenance"
    ]
  }
];

// Statistics for the metrics section
const agencyMetrics = [
  { value: "98%", label: "Client Satisfaction", icon: "😊" },
  { value: "85+", label: "Projects Completed", icon: "🏆" },
  { value: "42%", label: "Average ROI Increase", icon: "📈" },
  { value: "24/7", label: "Support & Maintenance", icon: "🛠️" },
];

// Testimonial data
const testimonials = [
  {
    quote: "Axonary transformed our digital presence with innovative solutions that truly captured our brand essence.",
    author: "Sarah Johnson",
    position: "CMO, TechFront Inc.",
    image: "/api/placeholder/80/80"
  },
  {
    quote: "Their strategic approach to our e-commerce platform resulted in a 40% increase in conversion rates within 3 months.",
    author: "Michael Chen",
    position: "CEO, Retail Innovations",
    image: "/api/placeholder/80/80"
  }
];

const Approach: React.FC = () => {
  // For header animations
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: false });
  const headerControls = useAnimation();

  // For visual elements animation
  const [activeStep, setActiveStep] = useState<number>(0);
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: false});
  
  // For metrics section
  const metricsRef = useRef(null);
  const metricsInView = useInView(metricsRef, { once: false });
  const metricsControls = useAnimation();
  
  // For testimonials section
  const testimonialsRef = useRef(null);
  const testimonialsInView = useInView(testimonialsRef, { once: false });
  const testimonialsControls = useAnimation();

  // Animate header when in view
  useEffect(() => {
    if (headerInView) {
      headerControls.start('visible');
    } else {
      headerControls.start('hidden');
    }
  }, [headerInView, headerControls]);
  
  // Animate metrics when in view
  useEffect(() => {
    if (metricsInView) {
      metricsControls.start('visible');
    } else {
      metricsControls.start('hidden');
    }
  }, [metricsInView, metricsControls]);
  
  // Animate testimonials when in view
  useEffect(() => {
    if (testimonialsInView) {
      testimonialsControls.start('visible');
    } else {
      testimonialsControls.start('hidden');
    }
  }, [testimonialsInView, testimonialsControls]);

  // Auto-cycle through approach steps
  useEffect(() => {
    if (timelineInView) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev === approachSteps.length - 1 ? 0 : prev + 1));
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [timelineInView]);

  // Handle manual step selection
  const handleStepClick = (index: number) => {
    setActiveStep(index);
  };

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        staggerChildren: 0.2,
        ease: "easeOut" 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const stepVariants = {
    inactive: { scale: 0.9, opacity: 0.6 },
    active: { 
      scale: 1, 
      opacity: 1,
      boxShadow: "0 10px 25px -5px rgba(92, 54, 147, 0.3)",
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const connectionVariants = {
    inactive: { 
      backgroundColor: "#2A2A2A",
      transition: { duration: 0.5 }
    },
    active: { 
      backgroundColor: approachSteps[activeStep].color,
      transition: { duration: 0.5 }
    }
  };

  const iconVariants = {
    initial: { scale: 0.8, rotate: 0 },
    animate: { 
      scale: 1.2, 
      rotate: 360,
      transition: { 
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const detailsVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };
  
  const metricVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: index * 0.1
      }
    })
  };
  
  const testimonialVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (index: number) => ({ 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6,
        delay: index * 0.2
      }
    })
  };

  return (
    <div className="bg-black text-white">
      <section className="bg-gradient-to-b from-black to-gray-900 py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <motion.div 
            ref={headerRef}
            variants={headerVariants}
            initial="hidden"
            animate={headerControls}
            className="text-center mb-16"
          >
            <motion.span 
              variants={itemVariants} 
              className="inline-block bg-gradient-to-r from-purple-600 to-purple-800 text-white text-sm px-3 py-1 rounded-full mb-4"
              style={{ backgroundColor: AXONARY_COLORS.primary }}
            >
              Our Methodology
            </motion.span>
            <motion.h2 
              variants={itemVariants} 
              className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600"
              style={{ 
                backgroundImage: `linear-gradient(to right, ${AXONARY_COLORS.accent1}, ${AXONARY_COLORS.primary})` 
              }}
            >
              Our Approach
            </motion.h2>
            <motion.p 
              variants={itemVariants} 
              className="max-w-2xl mx-auto text-gray-300 text-lg"
            >
              We follow a proven process to turn your vision into digital reality through a collaborative and transparent journey.
            </motion.p>
          </motion.div>

          {/* Timeline and Approach Visualization */}
          <div 
            ref={timelineRef} 
            className="relative max-w-6xl mx-auto"
          >
            {/* The animated approach timeline */}
            <div className="mb-16 hidden md:flex justify-between items-center">
              {approachSteps.map((step, index) => (
                <React.Fragment key={step.id}>
                  {/* Connection line */}
                  {index > 0 && (
                    <motion.div 
                      className="h-1 flex-grow mx-2"
                      variants={connectionVariants}
                      animate={index <= activeStep ? "active" : "inactive"}
                    />
                  )}
                  
                  {/* Step marker */}
                  <motion.div
                    className="relative cursor-pointer"
                    onClick={() => handleStepClick(index)}
                    variants={stepVariants}
                    animate={index === activeStep ? "active" : "inactive"}
                  >
                    <div 
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: step.color }}
                    >
                      <motion.span 
                        className="text-white text-xl"
                        variants={iconVariants}
                        initial="initial"
                        animate={index === activeStep ? "animate" : "initial"}
                      >
                        {step.icon}
                      </motion.span>
                    </div>
                    <p className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap font-medium text-gray-300">
                      {step.title}
                    </p>
                  </motion.div>
                </React.Fragment>
              ))}
            </div>

            {/* Mobile view steps */}
            <div className="md:hidden space-y-4 mb-10">
              {approachSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="flex items-center space-x-4 cursor-pointer p-3 rounded-lg"
                  onClick={() => handleStepClick(index)}
                  variants={stepVariants}
                  animate={index === activeStep ? "active" : "inactive"}
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: step.color }}
                  >
                    <motion.span 
                      className="text-white text-xl"
                      variants={iconVariants}
                      animate={index === activeStep ? "animate" : "initial"}
                    >
                      {step.icon}
                    </motion.span>
                  </div>
                  <span className="font-medium text-gray-200">{step.title}</span>
                </motion.div>
              ))}
            </div>

            {/* Active step details with animation */}
            <motion.div
              className="bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-800"
              initial="hidden"
              animate="visible"
              variants={detailsVariants}
              key={activeStep} // This forces re-render and animation on step change
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <motion.span 
                    className="inline-block text-sm px-3 py-1 rounded-full mb-4"
                    style={{ 
                      backgroundColor: `${approachSteps[activeStep].color}30`, 
                      color: approachSteps[activeStep].color 
                    }}
                    variants={itemVariants}
                  >
                    Step {activeStep + 1}
                  </motion.span>
                  <motion.h3 
                    className="text-3xl font-bold mb-4 text-white" 
                    variants={itemVariants}
                  >
                    {approachSteps[activeStep].title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-300" 
                    variants={itemVariants}
                  >
                    {approachSteps[activeStep].description}
                  </motion.p>
                  
                  <motion.div className="mt-6" variants={itemVariants}>
                    <ul className="space-y-3">
                      {approachSteps[activeStep].keyPoints.map((point, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-center" 
                          variants={itemVariants}
                        >
                          <span className="mr-3 text-purple-400">✓</span>
                          <span className="text-gray-300">{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Animated illustration for each step */}
                <motion.div 
                  className="rounded-xl overflow-hidden bg-gray-800 aspect-square flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { duration: 0.5, delay: 0.2 }
                  }}
                >
                  <div className="relative w-4/5 h-4/5">
                    {/* SVG illustrations for each step */}
                    {activeStep === 0 && (
                      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="100" cy="100" r="80" fill={`${approachSteps[activeStep].color}20`} />
                        <motion.path 
                          d="M40,100 a60,60 0 1,0 120,0 a60,60 0 1,0 -120,0" 
                          fill="none" 
                          stroke={approachSteps[activeStep].color} 
                          strokeWidth="8"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1, transition: { duration: 2, ease: "easeInOut" } }}
                        />
                        <motion.circle 
                          cx="100" 
                          cy="100" 
                          r="30" 
                          fill={approachSteps[activeStep].color}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1, transition: { duration: 0.5, delay: 1 } }}
                        />
                      </svg>
                    )}
                    {activeStep === 1 && (
                      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <rect x="40" y="40" width="120" height="120" rx="10" fill={`${approachSteps[activeStep].color}20`} />
                        <motion.line 
                          x1="60" 
                          y1="70" 
                          x2="140" 
                          y2="70" 
                          stroke={approachSteps[activeStep].color} 
                          strokeWidth="8"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1, transition: { duration: 1 } }}
                        />
                        <motion.line 
                          x1="60" 
                          y1="100" 
                          x2="140" 
                          y2="100" 
                          stroke={approachSteps[activeStep].color} 
                          strokeWidth="8"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1, transition: { duration: 1, delay: 0.3 } }}
                        />
                        <motion.line 
                          x1="60" 
                          y1="130" 
                          x2="140" 
                          y2="130" 
                          stroke={approachSteps[activeStep].color} 
                          strokeWidth="8"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1, transition: { duration: 1, delay: 0.6 } }}
                        />
                      </svg>
                    )}
                    {activeStep === 2 && (
                      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <rect x="50" y="50" width="100" height="100" rx="10" fill={`${approachSteps[activeStep].color}20`} />
                        <motion.circle 
                          cx="100" 
                          cy="80" 
                          r="15" 
                          fill={approachSteps[activeStep].color}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1, transition: { duration: 0.5 } }}
                        />
                        <motion.rect 
                          x="75" 
                          y="110" 
                          width="50" 
                          height="10" 
                          rx="5" 
                          fill={approachSteps[activeStep].color}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1, transition: { duration: 0.5, delay: 0.3 } }}
                        />
                        <motion.rect 
                          x="85" 
                          y="130" 
                          width="30" 
                          height="8" 
                          rx="4" 
                          fill={approachSteps[activeStep].color}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1, transition: { duration: 0.5, delay: 0.6 } }}
                        />
                      </svg>
                    )}
                    {activeStep === 3 && (
                      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <rect x="40" y="60" width="120" height="80" rx="5" fill={`${approachSteps[activeStep].color}20`} />
                        <motion.path 
                          d="M50 70 L60 70 L60 80 L70 80 L70 90 L80 90 L80 100 L90 100 L90 110 L100 110 L100 100 L110 100 L110 90 L120 90 L120 80 L130 80 L130 70 L140 70" 
                          fill="none" 
                          stroke={approachSteps[activeStep].color} 
                          strokeWidth="5"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1, transition: { duration: 2, ease: "easeInOut" } }}
                        />
                      </svg>
                    )}
                    {activeStep === 4 && (
                      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="100" cy="100" r="60" fill={`${approachSteps[activeStep].color}20`} />
                        <motion.path 
                          d="M70,100 L90,120 L130,80" 
                          fill="none" 
                          stroke={approachSteps[activeStep].color} 
                          strokeWidth="10" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1, transition: { duration: 1, delay: 0.5 } }}
                        />
                      </svg>
                    )}
                    {activeStep === 5 && (
                      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <motion.path 
                          d="M100,40 L120,100 L180,100 L130,140 L150,200 L100,160 L50,200 L70,140 L20,100 L80,100 L100,40"
                          fill={`${approachSteps[activeStep].color}20`}
                          stroke={approachSteps[activeStep].color}
                          strokeWidth="5"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1, transition: { duration: 0.8, ease: "backOut" } }}
                        />
                      </svg>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Step navigation dots for mobile */}
            <div className="flex justify-center mt-8 md:hidden">
              {approachSteps.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleStepClick(index)}
                  className="w-3 h-3 mx-1 rounded-full"
                  style={{ 
                    backgroundColor: index === activeStep 
                      ? approachSteps[activeStep].color
                      : '#333333'
                  }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
          
          {/* Metrics Section */}
          <motion.div
            ref={metricsRef}
            variants={headerVariants}
            initial="hidden"
            animate={metricsControls}
            className="mt-20 pt-16 border-t border-gray-800"
          >
            <motion.h3 
              variants={itemVariants} 
              className="text-3xl font-bold mb-4 text-center text-white"
            >
              Why Choose Axonary
            </motion.h3>
            <motion.p 
              variants={itemVariants} 
              className="text-center text-gray-300 mb-12 max-w-2xl mx-auto"
            >
              Our approach has delivered exceptional results for clients across industries
            </motion.p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {agencyMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={metricVariants}
                  className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center"
                >
                  <div className="text-3xl mb-2">{metric.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600"
                    style={{ 
                      backgroundImage: `linear-gradient(to right, ${AXONARY_COLORS.accent1}, ${AXONARY_COLORS.primary})` 
                    }}
                  >
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-300">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Testimonials Section */}
          <motion.div
            ref={testimonialsRef}
            variants={headerVariants}
            initial="hidden"
            animate={testimonialsControls}
            className="mt-20 pt-16 border-t border-gray-800"
          >
            <motion.h3 
              variants={itemVariants} 
              className="text-3xl font-bold mb-4 text-center text-white"
            >
              Client Success Stories
            </motion.h3>
            <motion.p 
              variants={itemVariants} 
              className="text-center text-gray-300 mb-12 max-w-2xl mx-auto"
            >
              Here's what our clients say about our approach and results
            </motion.p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={testimonialVariants}
                  className="bg-gray-900 p-8 rounded-lg border border-gray-800 relative"
                >
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full flex items-center justify-center text-2xl">
                    "
                  </div>
                  <p className="text-gray-300 mb-6 italic">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-bold text-white">{testimonial.author}</div>
                      <div className="text-sm text-gray-400">{testimonial.position}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* CTA Button */}
            <motion.div 
              variants={itemVariants}
              className="text-center mt-12"
            >
              <motion.button
                className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-3 rounded-full font-bold text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  backgroundImage: `linear-gradient(to right, ${AXONARY_COLORS.primary}, ${AXONARY_COLORS.secondary})` 
                }}
              >
                Start Your Project
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Technology Stack Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-white">Our Technology Stack</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We leverage cutting-edge technologies to deliver exceptional digital experiences
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {["React", "Next.js", "Node.js", "GraphQL", "AWS", "TypeScript", "Tailwind CSS", "Framer Motion"].map((tech, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 px-6 py-3 rounded-lg border border-gray-800"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: `0 0 10px ${AXONARY_COLORS.primary}50` 
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.6,
                    delay: index * 0.1
                  }
                }}
              >
                <span className="text-gray-300">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Approach;