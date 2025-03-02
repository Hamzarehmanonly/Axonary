import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Define the Axonary color theme
const COLORS = {
  PRIMARY_PURPLE: '#5C3693',
  SECONDARY_PURPLE: '#472A71',
  WHITE: '#FFFFFF',
  BLACK: '#000000',
};

interface SolutionCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ title, description, icon, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.5, 
            delay: index * 0.2 
          }
        },
      }}
      className="relative overflow-hidden rounded-xl p-6 bg-gradient-to-br from-[#5C3693] to-[#472A71] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:translate-y-[-5px]"
    >
      <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" />
          <path d="M50 10 L50 90" stroke="white" strokeWidth="2" />
          <path d="M10 50 L90 50" stroke="white" strokeWidth="2" />
          <circle cx="50" cy="50" r="20" stroke="white" strokeWidth="2" />
        </svg>
      </div>

      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-200">{description}</p>
      
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-white"
        initial={{ width: 0 }}
        animate={{ width: inView ? '100%' : 0 }}
        transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
      />
    </motion.div>
  );
};

const AnimatedCircle = () => {
  return (
    <motion.div
      className="absolute pointer-events-none opacity-30"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: [0, 1.5, 1],
        opacity: [0, 0.6, 0],
        zIndex: -1,
      }}
      transition={{ 
        duration: 6,
        repeat: Infinity,
        repeatType: "loop",
      }}
      style={{
        width: '30vw',
        height: '30vw',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${COLORS.PRIMARY_PURPLE} 0%, rgba(71, 42, 113, 0) 70%)`,
        top: '10%',
        right: '10%',
      }}
    />
  );
};

const Solutions: React.FC = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!bgRef.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      bgRef.current.style.transform = `translate(${x * -20}px, ${y * -20}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const solutions = [
    {
      title: "Digital Transformation",
      description: "Revolutionize your business processes with our comprehensive digital transformation solutions.",
      icon: "🚀",
    },
    {
      title: "AI Integration",
      description: "Harness the power of artificial intelligence to optimize your operations and stay ahead of competition.",
      icon: "🤖",
    },
    {
      title: "Web Development",
      description: "Create stunning, responsive websites that engage users and drive conversions.",
      icon: "💻",
    },
    {
      title: "Mobile Applications",
      description: "Develop intuitive mobile apps that connect with your audience anytime, anywhere.",
      icon: "📱",
    },
    {
      title: "Cloud Solutions",
      description: "Scale your infrastructure effortlessly with our secure and flexible cloud solutions.",
      icon: "☁️",
    },
    {
      title: "Cybersecurity",
      description: "Protect your digital assets with our advanced security protocols and monitoring.",
      icon: "🔒",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background elements */}
      <div ref={bgRef} className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-[#5C3693] opacity-10 blur-[100px]" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#472A71] opacity-10 blur-[120px]" />
      </div>
      
      <AnimatedCircle />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid opacity-5" style={{
        backgroundImage: `linear-gradient(${COLORS.WHITE} 1px, transparent 1px), linear-gradient(to right, ${COLORS.WHITE} 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
            Our Solutions
          </h1>
          <div className="w-20 h-1 bg-[#5C3693] mx-auto mb-6" />
          <p className="text-xl max-w-3xl mx-auto">
            Transforming businesses with innovative digital solutions tailored to your unique challenges.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              title={solution.title}
              description={solution.description}
              icon={solution.icon}
              index={index}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#5C3693] to-[#472A71] text-white py-3 px-8 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
      
      {/* Animated shapes */}
      <div className="hidden md:block">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              border: `2px solid ${Math.random() > 0.5 ? COLORS.PRIMARY_PURPLE : COLORS.SECONDARY_PURPLE}`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.2,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Solutions;