import React, { useEffect, useRef, ReactNode, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';

const GridBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0">
      {/* Grid lines */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Grid dots */}
      <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,40px)] grid-rows-[repeat(auto-fill,40px)]">
        {Array.from({ length: Math.ceil((window.innerWidth * window.innerHeight) / 1600) }).map((_, i) => (
          <div key={i} className="relative w-[40px] h-[40px]">
            <div className="absolute top-0 left-0 w-[1px] h-[1px] rounded-full" style={{ backgroundColor: '#2E2E2E' }} />
            <div className="absolute top-0 right-0 w-[1px] h-[1px] rounded-full" style={{ backgroundColor: '#2E2E2E' }} />
            <div className="absolute bottom-0 left-0 w-[1px] h-[1px] rounded-full" style={{ backgroundColor: '#2E2E2E' }} />
            <div className="absolute bottom-0 right-0 w-[1px] h-[1px] rounded-full" style={{ backgroundColor: '#2E2E2E' }} />
          </div>
        ))}
      </div>

      {/* Mouse glow effect */}
      <div 
        className="pointer-events-none absolute w-[120px] h-[120px] transition-transform duration-300"
        style={{
          transform: `translate(${mousePosition.x - 60}px, ${mousePosition.y - 60}px)`,
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 70%)',
          mixBlendMode: 'screen'
        }}
      />
    </div>
  );
};

interface ScrollSectionProps {
  children: ReactNode;
  direction?: "right" | "left";
}

const ScrollSection: React.FC<ScrollSectionProps> = ({ children, direction = "right" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction === "right" ? 100 : -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative"
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="h-screen bg-black overflow-hidden relative">
      {/* Grid Background */}
      <GridBackground />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-purple-500 transform origin-left z-50"
        style={{ scaleX }}
      />

      {/* Main Content */}
      <div className="h-full relative z-10">
        <div className="max-w-[1920px] mx-auto px-8 lg:px-16 h-full">
          <div className="h-full flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-40">
            {/* Left side - Heading */}
            <div className="w-full lg:w-1/2 text-left pt-24">
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl sm:text-7xl lg:text-8xl xl:text-[10rem] font-bold text-white leading-[1.1] tracking-tighter"
              >
                IN THIS<br />
                EVER<br />
                MOVING<br />
                DIGITAL<br />
                SPACE,<br />
                WE ARE...
              </motion.h1>
            </div>

            {/* Right side - Three Cards */}
            <div className="w-full lg:w-1/2 space-y-24 lg:space-y-32 pt-24">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4"
              >
                <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white">Merging Artistry with Innovation.</h3>
                <p className="text-gray-400 text-xl lg:text-2xl max-w-3xl">Harness the power of artistic storytelling and cutting-edge technology to elevate your brand.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-4"
              >
                <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white">Crafting Unique Journeys.</h3>
                <p className="text-gray-400 text-xl lg:text-2xl max-w-3xl">Passionately creating unique and immersive experiences that engage and inspire.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-4"
              >
                <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white">Pushing Boundaries.</h3>
                <p className="text-gray-400 text-xl lg:text-2xl max-w-3xl">We don't just meet expectations; we exceed them.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;