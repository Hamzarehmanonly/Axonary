import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

// Add type definitions at the top
interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

interface CounterProps {
  end: number;
  label: string;
  delay?: number;
}

interface RevealTextProps {
  children: React.ReactNode;
  delay?: number;
}

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
}

interface SkillBarProps {
  skill: string;
  percentage: number;
  delay?: number;
}

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
}

// Add interface for approach items
interface ApproachItem {
  title: string;
  description: string;
  icon: JSX.Element;
  delay: number;
}

// Add type for team members
interface TeamMember {
  name: string;
  role: string;
  image: string;
}

// Add type for skills
interface Skill {
  skill: string;
  percentage: number;
  delay: number;
}

// Constants for brand colors
const COLORS = {
  primary: "#5C3693",
  secondary: "#472A71",
  white: "#FFFFFF",
  black: "#000000",
  darkGray: "#000000",
  lightGray: "#000000",
  textGray: "#FFFFFF"
};

// Team member component with hover effect
const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-w-3 aspect-h-4 bg-gray-800 overflow-hidden rounded-lg">
        <img 
          src={`/api/placeholder/600/800`} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out"
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1.0)'
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500" />
      </div>
      <motion.div 
        className="absolute bottom-0 left-0 p-6 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h3 className="text-white text-xl font-bold">{name}</h3>
        <p className="text-gray-300">{role}</p>
      </motion.div>
    </motion.div>
  );
};

// Animated counter component
const Counter: React.FC<CounterProps> = ({ end, label, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;
      
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / 2000, 1);
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };
      
      setTimeout(() => {
        animationFrame = requestAnimationFrame(animate);
      }, delay * 100);
      
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, delay]);
  
  return (
    <motion.div
      ref={counterRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      className="text-center"
    >
      <p className="text-5xl md:text-6xl font-bold text-white mb-2">{count}+</p>
      <p style={{ color: COLORS.textGray }}>{label}</p>
    </motion.div>
  );
};

// Text reveal animation component
const RevealText: React.FC<RevealTextProps> = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ duration: 0.8, delay: delay * 0.1 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

// Parallax section component
const ParallaxSection: React.FC<ParallaxSectionProps> = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Progress bar for skills
const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage, delay = 0 }) => {
  const barRef = useRef(null);
  const isInView = useInView(barRef, { once: true, amount: 0.5 });
  
  return (
    <div ref={barRef} className="mb-6">
      <div className="flex justify-between mb-2">
        <h4 className="text-white font-medium">{skill}</h4>
        <span style={{ color: COLORS.textGray }}>{percentage}%</span>
      </div>
      <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
        <motion.div 
          className="h-full rounded-full"
          style={{ backgroundColor: COLORS.primary }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay * 0.1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

// Magnetic button component for enhanced interaction
const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className }) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const button = buttonRef.current as HTMLDivElement;
    if (!button) return;
    const { left, top, width, height } = button.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.2;
    const y = (clientY - (top + height / 2)) * 0.2;
    setPosition({ x, y });
  };
  
  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };
  
  return (
    <motion.div
      ref={buttonRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
      {children}
    </motion.div>
  );
};

// Main About page component
const About = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  
  const teamMembers: TeamMember[] = [
    { name: "Maya Blackwood", role: "Creative Director", image: "/api/placeholder/600/800" },
    { name: "Adrian Hayes", role: "Lead Developer", image: "/api/placeholder/600/800" },
    { name: "Zara Chen", role: "UX Strategist", image: "/api/placeholder/600/800" },
    { name: "Julian Parker", role: "Art Director", image: "/api/placeholder/600/800" }
  ];
  
  const skills: Skill[] = [
    { skill: "Meta Ads Mastery", percentage: 97, delay: 0 },
    { skill: "SEO Strategy", percentage: 94, delay: 1 },
    { skill: "Brand Management", percentage: 96, delay: 2 },
    { skill: "Web Development", percentage: 91, delay: 3 },
    { skill: "Complete Marketing Solutions", percentage: 95, delay: 4 }
  ];

  // Approach items with icons
  const approachItems: ApproachItem[] = [
    { 
      title: "Discover & Define", 
      description: "We don't just research. We dive in. As a leading Digital Marketing and Advertising Agency, we explore your business like cartographers charting new terrain, mapping out your audience, challenges, and untapped potential. The result? A crystal-clear marketing strategy shaped by insight, not assumption, built to fuel sustainable brand growth from the start.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke={COLORS.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      delay: 0
    },
    { 
      title: "Design & Develop", 
      description: "This is where ideas take shape, and strategy finds its voice. From UX to UI, our team blends brains and beauty to craft sleek, high-performaing solutions where every pixel has a purpose. Whether it's web design or campaign architecture, our experts – from creatives to SEO & PPC specialists ensure every elemets plays its part in harmony and impact.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4.5V19.5M19.5 12H4.5" stroke={COLORS.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      delay: 1
    },
    { 
      title: "Deploy & Evolve", 
      description: "We don't just launch. We stay in orbit. With precision rollouts, real-time optimization, and agile adjustments, we keep your responsive and relevant. Because at Axonary, brand growth isn't a moment. It's movement continually guided by data, performance, and relentless refinement.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 8H8M16 8C18.2091 8 20 6.20914 20 4C20 1.79086 18.2091 0 16 0C13.7909 0 12 1.79086 12 4C12 6.20914 13.7909 8 16 8ZM8 8C5.79086 8 4 6.20914 4 4C4 1.79086 5.79086 0 8 0C10.2091 0 12 1.79086 12 4C12 6.20914 10.2091 8 8 8ZM16 24C13.7909 24 12 22.2091 12 20C12 17.7909 13.7909 16 16 16C18.2091 16 20 17.7909 20 20C20 22.2091 18.2091 24 16 24ZM8 24C5.79086 24 4 22.2091 4 20C4 17.7909 5.79086 16 8 16C10.2091 16 12 17.7909 12 20C12 22.2091 10.2091 24 8 24ZM16 16H8" stroke={COLORS.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      delay: 2
    }
  ];
  
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80" />
          <motion.div
            animate={{ 
              background: [
                `radial-gradient(circle at 20% 50%, rgba(92, 54, 147, 0.15) 0%, rgba(0, 0, 0, 0) 50%)`,
                `radial-gradient(circle at 80% 20%, rgba(92, 54, 147, 0.15) 0%, rgba(0, 0, 0, 0) 50%)`,
                `radial-gradient(circle at 20% 80%, rgba(92, 54, 147, 0.15) 0%, rgba(0, 0, 0, 0) 50%)`,
                `radial-gradient(circle at 20% 50%, rgba(92, 54, 147, 0.15) 0%, rgba(0, 0, 0, 0) 50%)`
              ]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
            className="absolute inset-0"
          />
        </div>
        
        <div className="container mx-auto px-6 z-10">
          <motion.div
            ref={headerRef}
            className="max-w-4xl mx-auto text-center space-y-8"
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div
              className={`bg-[#472A71]/80 rounded-full px-6 py-2 mb-8 transition-all duration-700 w-fit mx-auto`}
            >
              <span className="text-sm font-medium text-[#FFFFFF]">Learn About Axonary's Superior Marketing</span>
            </div>
            <motion.h1 
              className="text-5xl md:text-7xl font-black leading-tight"
              initial={{ y: 50 }}
              animate={isHeaderInView ? { y: 0 } : { y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
            Marketing<br />That <span style={{ color: COLORS.primary }}>Moves </span>the Needle

            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ y: 50 }}
              animate={isHeaderInView ? { y: 0 } : { y: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
            At Axonary, we don't just do marketing. We build momentum. From ambitious startups to established giants, we help businesses claim their space, own their voice, and lead with purpose.
            </motion.p>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={isHeaderInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <MagneticButton className="inline-block">
                <a href="#our-story" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-medium rounded-full transition-colors" style={{ backgroundColor: COLORS.primary }}>
                  <span>Strategy. Execution. Results. All in one place.</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </section>
      
      {/* Our Story Section */}
      <section id="our-story" className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <ParallaxSection className="max-w-4xl mx-auto mb-16">
            <RevealText>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Meet the Founder - <span style={{ color: COLORS.primary }}>Hamza Rehman</span></h2>
            </RevealText>
            <RevealText delay={0.5}>
              <p className="text-gray-300 text-xl font-semibold mb-4">Founder | Axonary</p>
            </RevealText>
            <RevealText delay={1}>
              <p className="text-gray-300 text-lg mb-6">Performance-Driven. Strategy Obsessed. Results-focused.</p>
            </RevealText>
            <RevealText delay={1.5}>
              <p className="text-gray-300 text-lg mb-6">
                Hamza Rehman didn't build Axonary to chase likes. He built it to chase results. With 15 years of cross-industry insight, 9 in culinary and 7 in digital execution, Hamza brings an unusual but powerful blend of structure, speed, and strategic clarity to the world of marketing.
              </p>
            </RevealText>
            <RevealText delay={2}>
              <p className="text-gray-300 text-lg">
                Where others pitch promises, Hamza builds pipelines. Where others follow the noise, he follows data. Where others guess, he scales confidently. He's driven over $2 million in tracked revenue across SaaS, logistics, e-commerce, and health. And he's not done. Certified in Google Ads, PPC, and digital growth frameworks, Hamza leads Axonary with one rule: Strategy First: Always. Because when the foundation is smart, growth is inevitable.
              </p>
            </RevealText>
          </ParallaxSection>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-24">
            <Counter end={87} label="Projects Launched" delay={0} />
            <Counter end={12} label="Industry Awards" delay={1} />
            <Counter end={25} label="Team Experts" delay={2} />
            <Counter end={6} label="Years of Excellence" delay={3} />
          </div>
        </div>
      </section>
      
      {/* Our Approach Section */}
      <section className="py-24" style={{ backgroundColor: COLORS.darkGray }}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16">
            <RevealText>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Our <span style={{ color: COLORS.primary }}>Approach</span></h2>
            </RevealText>
            <RevealText delay={1}>
              <p className="text-gray-300 text-lg mb-6">
                We don't just follow blueprints. We redraw them. At Axonary, a leading Digital Marketing and Advertising Agency, strategy isn't a checklist; it's a canvas. Our customer-centric approach fuses the logic of a chess master with the spark of an artist, transforming insight into action and creativity into conversion.
              </p>
            </RevealText>
            <RevealText delay={1.2}>
              <p className="text-gray-300 text-lg mb-6">
                We deliver data-driven solutions built on precision, not guesswork. Every pixel placed, every word written, and every campaign launched is backed by intent and designed for impact. It's marketing innovation at its core, shaped by what your brand actually needs to grow.
              </p>
            </RevealText>
            <RevealText delay={1.4}>
              <p className="text-gray-300 text-lg">
                Because in a world full of noise, we don't whisper. We build chaos. And from it, unforgettable brands.
              </p>
            </RevealText>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approachItems.map((item, index) => (
              <motion.div 
                key={index}
                className="p-8 rounded-lg"
                style={{ backgroundColor: COLORS.lightGray }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item.delay * 0.2 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      {/*
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16">
            <RevealText>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Meet The <span style={{ color: COLORS.primary }}>Team</span></h2>
            </RevealText>
            <RevealText delay={1}>
              <p className="text-gray-300 text-lg">
                Our diverse team of specialists brings together expertise across strategy, design, and technology. United by a shared passion for excellence, we collaborate to create digital experiences that push boundaries.
              </p>
            </RevealText>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember 
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section> 
      */}
      
      {/* Skills Section */}
      <section className="py-24" style={{ backgroundColor: COLORS.darkGray }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <RevealText>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Our <span style={{ color: COLORS.primary }}>Expertise</span></h2>
              </RevealText>
              <RevealText delay={1}>
                <p className="text-gray-300 text-lg mb-8">
                  We don't dabble. We dominate.
                  At Axonary, we blend creative firepower with strategic precision, delivering marketing that moves the needle. From Meta ads and SEO to brand management and full-scale digital strategy, our expertise runs deep and adapts fast. We're not just staying in the game. We are shaping it.
                </p>
              </RevealText>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
              >
                {skills.map((skill, index) => (
                  <SkillBar 
                    key={index}
                    skill={skill.skill}
                    percentage={skill.percentage}
                    delay={skill.delay}
                  />
                ))}
              </motion.div>
            </div>
            <ParallaxSection className="relative">
              <div className="relative h-full min-h-[400px] overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
                <div className="absolute inset-0" style={{ 
                  background: `linear-gradient(135deg, ${COLORS.secondary}20 0%, ${COLORS.black}90 100%)` 
                }} />
                
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="text-center p-8">
                    <h3 className="text-3xl font-bold mb-4">Innovation Through <span style={{ color: COLORS.primary }}>Collaboration</span></h3>
                    <p className="text-gray-300">We combine creative vision with technical excellence to deliver solutions that transform businesses and elevate brands.</p>
                  </div>
                </motion.div>
              </div>
            </ParallaxSection>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
          style={{
            background: `radial-gradient(circle at center, ${COLORS.primary}20 0%, rgba(0, 0, 0, 0) 70%)`,
            backgroundSize: '200% 200%'
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <RevealText>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to <span style={{ color: COLORS.primary }}>Make Your Brand Impossible to Ignore?</span></h2>
            </RevealText>
            <RevealText delay={1}>
              <p className="text-gray-300 text-lg mb-12">
                Let's turn your goals into action. Whether you're just launching, scaling, or reinventing, Axonary is your partner in bold moves and big results.
              </p>
            </RevealText>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <MagneticButton className="inline-block">
                <Link to={"/contact"} className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-medium rounded-full transition-all hover:bg-opacity-90" style={{ backgroundColor: COLORS.primary }}>
                  <span>Book Your Free Consultation</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;