import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence, useInView } from 'framer-motion';

const GridBackground = () => {
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
          backgroundSize: '30px 30px',
          width: '100%',
          height: '100%'
        }}
      />

      {/* Grid dots */}
      <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,30px)] grid-rows-[repeat(auto-fill,30px)]">
        {Array.from({ length: Math.ceil((window.innerWidth * window.innerHeight) / 900) }).map((_, i) => (
          <div key={i} className="relative w-[30px] h-[30px]">
            <div className="absolute -top-[0.5px] -left-[0.5px] w-[1.5px] h-[1.5px] rounded-full bg-[#4A4A4A]" />
            <div className="absolute -top-[0.5px] -right-[0.5px] w-[1.5px] h-[1.5px] rounded-full bg-[#4A4A4A]" />
            <div className="absolute -bottom-[0.5px] -left-[0.5px] w-[1.5px] h-[1.5px] rounded-full bg-[#4A4A4A]" />
            <div className="absolute -bottom-[0.5px] -right-[0.5px] w-[1.5px] h-[1.5px] rounded-full bg-[#4A4A4A]" />
          </div>
        ))}
      </div>
    </div>
  );
};
// Animated section component for reuse
const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className={`py-20 ${className}`}
    >
      {children}
    </motion.section>
  );
};
// Service Card Component
const ServiceCard = ({ title, description, icon, delay = 0 }: { title: string; description: string; icon: React.ReactNode; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-300"
    >
      <div className="text-purple-500 text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};
// Project Card Component
const ProjectCard = ({ title, category, imageUrl, delay = 0 }: { title: string; category: string; imageUrl: string; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay }}
      className="group cursor-pointer relative overflow-hidden rounded-lg"
    >
      <div className="aspect-video bg-gray-800 w-full overflow-hidden">
        <div
        
          className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <span className="text-purple-400 text-sm font-semibold mb-2">{category}</span>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
    </motion.div>
  );
};
// Testimonial Card Component
const TestimonialCard = ({ quote, author, position, company, delay = 0 }: { quote: string; author: string; position: string; company: string; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      className="bg-gray-900 p-8 rounded-lg border border-gray-800"
    >
      <div className="text-purple-500 text-4xl mb-4">"</div>
      <p className="text-gray-300 italic mb-6">{quote}</p>
      <div>
        <h4 className="text-white font-bold">{author}</h4>
        <p className="text-gray-400 text-sm">{position}, {company}</p>
      </div>
    </motion.div>
  );
};
// Team Member Card Component
const TeamMemberCard = ({ name, position, imageUrl, delay = 0 }: { name: string; position: string; imageUrl: string; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      className="text-center"
    >
      <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4 border-2 border-purple-500">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>
      <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
      <p className="text-gray-400">{position}</p>
    </motion.div>
  );
};
// Stats Component
const StatItem = ({ number, label, delay = 0 }: { number: string; label: string; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      className="text-center"
    >
      <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{number}</div>
      <p className="text-gray-400">{label}</p>
    </motion.div>
  );
};
// Blog Post Card Component
const BlogPostCard = ({ title, excerpt, category, date, imageUrl, delay = 0 }: { title: string; excerpt: string; category: string; date: string; imageUrl: string; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      className="bg-gray-900 rounded-lg overflow-hidden group cursor-pointer"
    >
      <div className="aspect-video w-full overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-purple-400 text-sm font-semibold">{category}</span>
          <span className="text-gray-500 text-sm">{date}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{title}</h3>
        <p className="text-gray-400 mb-4">{excerpt}</p>
        <div className="inline-flex items-center text-purple-500 font-semibold">
          Read More
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </div>
      </div>
    </motion.div>
  );
};
// Technology Item Component
const TechnologyItem = ({ name, icon, delay = 0 }: { name: string; icon: JSX.Element; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="bg-gray-900 p-4 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-300 flex items-center justify-center flex-col"
    >
      <div className="text-purple-500 text-3xl mb-2">{icon}</div>
      <div className="text-white font-medium text-sm">{name}</div>
    </motion.div>
  );
};
// FAQ Item Component
const FAQItem = ({ question, answer, delay = 0 }: { question: string; answer: string; delay?: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="border-b border-gray-800 py-6"
    >
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-bold text-white">{question}</h3>
        <div className={`text-purple-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 mt-4">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Home = () => {
  const [, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className=" bg-black relative">
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
            <div className="h-full flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-20">
              {/* Left side - Heading */}
              <div className="w-full lg:w-[45%] text-left pt-16">
                <motion.h1
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.2] tracking-normal"
                  style={{ wordSpacing: '0.1em' }}
                >
                  IN THIS EVER{'\n'}
                  MOVING DIGITAL{'\n'}
                  SPACE, WE ARE...
                </motion.h1>
              </div>

              {/* Right side - Three Cards */}
              <div className="w-full lg:w-[45%] space-y-16 lg:space-y-24 pt-16">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-2"
                >
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Merging Artistry with Innovation.</h3>
                  <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl">Harness the power of artistic storytelling and cutting-edge technology to elevate your brand.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="space-y-2"
                >
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Crafting Unique Journeys.</h3>
                  <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl">Passionately creating unique and immersive experiences that engage and inspire.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="space-y-2"
                >
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Pushing Boundaries.</h3>
                  <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl">We don't just meet expectations; we exceed them.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <AnimatedSection className="bg-black">
        <div className="max-w-[1920px] mx-auto px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <motion.div
                className="aspect-square bg-gray-800 rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/about-image.jpg')" }} />
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">About Us</h2>
                <p className="text-gray-400 text-lg mb-6">Founded in 2018, our agency has been at the forefront of digital innovation, helping brands transform their online presence and connect with audiences in meaningful ways.</p>
                <p className="text-gray-400 text-lg mb-8">We're a collective of designers, developers, and strategists who are passionate about creating digital experiences that leave lasting impressions.</p>

                <div className="grid grid-cols-2 gap-8">
                  <StatItem number="150+" label="Projects Completed" delay={0.2} />
                  <StatItem number="45+" label="Happy Clients" delay={0.3} />
                  <StatItem number="12+" label="Team Members" delay={0.4} />
                  <StatItem number="8+" label="Industry Awards" delay={0.5} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection className="bg-gray-950">
        <div className="max-w-[1920px] mx-auto px-8 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Our Services</h2>
              <p className="text-gray-400 text-lg">We offer a comprehensive range of digital services to help your brand stand out in the digital landscape.</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Web Development"
              description="Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience."
              icon="💻"
              delay={0.1}
            />
            <ServiceCard
              title="UI/UX Design"
              description="Human-centered design solutions that prioritize usability, accessibility, and delightful user experiences."
              icon="🎨"
              delay={0.2}
            />
            <ServiceCard
              title="Brand Strategy"
              description="Strategic brand development to help you connect with your audience and stand out from competitors."
              icon="📊"
              delay={0.3}
            />
            <ServiceCard
              title="Digital Marketing"
              description="Data-driven marketing strategies to grow your online presence and drive meaningful engagement."
              icon="📱"
              delay={0.4}
            />
            <ServiceCard
              title="Content Creation"
              description="Compelling visual and written content that tells your brand's story and resonates with your audience."
              icon="📝"
              delay={0.5}
            />
            <ServiceCard
              title="E-Commerce Solutions"
              description="Custom e-commerce experiences that drive conversions and enhance customer satisfaction."
              icon="🛒"
              delay={0.6}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Featured Work Section */}
      <AnimatedSection className="bg-black">
        <div className="max-w-[1920px] mx-auto px-8 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Featured Work</h2>
              <p className="text-gray-400 text-lg">Browse our portfolio of award-winning projects and see how we've helped brands elevate their digital presence.</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Revive Wellness App"
              category="UI/UX Design & Development"
              imageUrl="/images/project1.jpg"
              delay={0.1}
            />
            <ProjectCard
              title="Horizon Finance Website"
              category="Web Development"
              imageUrl="/images/project2.jpg"
              delay={0.2}
            />
            <ProjectCard
              title="Lush Cosmetics Rebrand"
              category="Brand Strategy"
              imageUrl="/images/project3.jpg"
              delay={0.3}
            />
            <ProjectCard
              title="TechSphere Conference"
              category="Digital Marketing"
              imageUrl="/images/project4.jpg"
              delay={0.4}
            />
            <ProjectCard
              title="Nomad Travel Platform"
              category="E-Commerce"
              imageUrl="/images/project5.jpg"
              delay={0.5}
            />
            <ProjectCard
              title="Pulse Music App"
              category="Mobile Development"
              imageUrl="/images/project6.jpg"
              delay={0.6}
            />
          </div>

          <div className="text-center mt-12">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              View All Projects
            </motion.button>
          </div>
        </div>
      </AnimatedSection>

      {/* Process Section */}
      <AnimatedSection className="bg-gray-950">
        <div className="max-w-[1920px] mx-auto px-8 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Our Process</h2>
              <p className="text-gray-400 text-lg">We follow a proven methodology to deliver exceptional results for every project.</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="text-purple-500 text-5xl font-bold mb-4">01</div>
              <h3 className="text-xl font-bold text-white mb-4">Discovery</h3>
              <p className="text-gray-400">We begin by understanding your goals, audience, and unique challenges through in-depth research.</p>
              <div className="absolute -right-4 top-8 hidden lg:block">
                <svg width="40" height="16" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M39.7071 8.70711C40.0976 8.31658 40.0976 7.68342 39.7071 7.29289L33.3431 0.928932C32.9526 0.538408 32.3195 0.538408 31.9289 0.928932C31.5384 1.31946 31.5384 1.95262 31.9289 2.34315L37.5858 8L31.9289 13.6569C31.5384 14.0474 31.5384 14.6805 31.9289 15.0711C32.3195 15.4616 32.9526 15.4616 33.3431 15.0711L39.7071 8.70711ZM0 9H39V7H0V9Z" fill="#A855F7" />
                </svg>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="text-purple-500 text-5xl font-bold mb-4">02</div>
              <h3 className="text-xl font-bold text-white mb-4">Strategy</h3>
              <p className="text-gray-400">We develop a comprehensive roadmap tailored to your specific needs and business objectives.</p>
              <div className="absolute -right-4 top-8 hidden lg:block">
                <svg width="40" height="16" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M39.7071 8.70711C40.0976 8.31658 40.0976 7.68342 39.7071 7.29289L33.3431 0.928932C32.9526 0.538408 32.3195 0.538408 31.9289 0.928932C31.5384 1.31946 31.5384 1.95262 31.9289 2.34315L37.5858 8L31.9289 13.6569C31.5384 14.0474 31.5384 14.6805 31.9289 15.0711C32.3195 15.4616 32.9526 15.4616 33.3431 15.0711L39.7071 8.70711ZM0 9H39V7H0V9Z" fill="#A855F7" />
                </svg>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <div className="text-purple-500 text-5xl font-bold mb-4">03</div>
              <h3 className="text-xl font-bold text-white mb-4">Creation</h3>
              <p className="text-gray-400">Our team brings your vision to life through collaborative design and development processes.</p>
              <div className="absolute -right-4 top-8 hidden lg:block">
                <svg width="40" height="16" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M39.7071 8.70711C40.0976 8.31658 40.0976 7.68342 39.7071 7.29289L33.3431 0.928932C32.9526 0.538408 32.3195 0.538408 31.9289 0.928932C31.5384 1.31946 31.5384 1.95262 31.9289 2.34315L37.5858 8L31.9289 13.6569C31.5384 14.0474 31.5384 14.6805 31.9289 15.0711C32.3195 15.4616 32.9526 15.4616 33.3431 15.0711L39.7071 8.70711ZM0 9H39V7H0V9Z" fill="#A855F7" />
                </svg>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative"
            >
              <div className="text-purple-500 text-5xl font-bold mb-4">04</div>
              <h3 className="text-xl font-bold text-white mb-4">Launch & Support</h3>
              <p className="text-gray-400">We ensure a smooth deployment and provide ongoing support to optimize performance.</p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Technologies Section */}
      <AnimatedSection className="bg-black">
        <div className="max-w-[1920px] mx-auto px-8 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Technologies</h2>
              <p className="text-gray-400 text-lg">We leverage cutting-edge technologies to build scalable and future-proof solutions.</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <TechnologyItem name="React" icon={<span>⚛️</span>} delay={0.1} />
            <TechnologyItem name="Node.js" icon={<span>🟢</span>} delay={0.15} />
            <TechnologyItem name="Next.js" icon={<span>▲</span>} delay={0.2} />
            <TechnologyItem name="TypeScript" icon={<span>📘</span>} delay={0.25} />
            <TechnologyItem name="Python" icon={<span>🐍</span>} delay={0.3} />
            <TechnologyItem name="AWS" icon={<span>☁️</span>} delay={0.35} />
            <TechnologyItem name="Firebase" icon={<span>🔥</span>} delay={0.4} />
            <TechnologyItem name="Figma" icon={<span>🎨</span>} delay={0.45} />
            <TechnologyItem name="GraphQL" icon={<span>◼️</span>} delay={0.5} />
            <TechnologyItem name="MongoDB" icon={<span>🍃</span>} delay={0.55} />
            <TechnologyItem name="Tailwind CSS" icon={<span>💨</span>} delay={0.6} />
            <TechnologyItem name="Flutter" icon={<span>📱</span>} delay={0.65} />
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="bg-gray-950">
        <div className="max-w-[1920px] mx-auto px-8 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">What Clients Say</h2>
              <p className="text-gray-400 text-lg">Don't just take our word for it — hear what our clients have to say about working with us.</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Working with this team has been a game-changer for our brand. They understood our vision and translated it into a digital experience that exceeded our expectations."
              author="Sarah Johnson"
              position="Marketing Director"
              company="Revive Wellness"
              delay={0.1}
            />
            <TestimonialCard
              quote="Their approach to design and development is truly innovative. They don't just follow trends; they set them. Our website has seen a 200% increase in engagement since launch."
              author="Michael Chen"
              position="CEO"
              company="Horizon Finance"
              delay={0.2}
            />
            <TestimonialCard
              quote="From concept to execution, the team delivered exceptional work that perfectly captured our brand essence. They're not just service providers; they're true partners in our success."
              author="Emma Rodriguez"
              position="Brand Manager"
              company="Lush Cosmetics"
              delay={0.3}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection className="bg-black">
        <div className="max-w-[1920px] mx-auto px-8 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Meet Our Team</h2>
              <p className="text-gray-400 text-lg">The talented individuals who bring creativity, expertise, and passion to every project.</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            <TeamMemberCard
              name="Alex Morgan"
              position="Founder & Creative Director"
              imageUrl="/images/team1.jpg"
              delay={0.1}
            />
            <TeamMemberCard
              name="Jessica Kim"
              position="Lead UX Designer"
              imageUrl="/images/team2.jpg"
              delay={0.2}
            />
            <TeamMemberCard
              name="David Chen"
              position="Frontend Developer"
              imageUrl="/images/team3.jpg"
              delay={0.3}
            />
            <TeamMemberCard
              name="Olivia Taylor"
              position="Brand Strategist"
              imageUrl="/images/team4.jpg"
              delay={0.4}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Blog Section */}
      <AnimatedSection className="bg-gray-950">
        <div className="max-w-[1920px] mx-auto px-8 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Latest Insights</h2>
              <p className="text-gray-400 text-lg">Explore our latest articles and stay updated with industry trends and insights.</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogPostCard
              title="The Future of Web Design: Trends to Watch in 2023"
              excerpt="Explore the emerging design trends that are shaping the digital landscape and how to stay ahead of the curve."
              category="Design"
              date="May 15, 2023"
              imageUrl="/images/blog1.jpg"
              delay={0.1}
            />
            <BlogPostCard
              title="How AI is Transforming the Creative Industry"
              excerpt="Discover how artificial intelligence is revolutionizing creative processes and opening new possibilities for designers."
              category="Technology"
              date="April 28, 2023"
              imageUrl="/images/blog2.jpg"
              delay={0.2}
            />
            <BlogPostCard
              title="Building Accessible Websites: A Comprehensive Guide"
              excerpt="Learn the best practices for creating inclusive digital experiences that cater to users of all abilities."
              category="Development"
              date="April 10, 2023"
              imageUrl="/images/blog3.jpg"
              delay={0.3}
            />
          </div>

          <div className="text-center mt-12">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              View All Articles
            </motion.button>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="bg-black">
        <div className="max-w-[1920px] mx-auto px-8 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">FAQ</h2>
              <p className="text-gray-400 text-lg">Find answers to commonly asked questions about our services and process.</p>
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQItem
              question="What services do you offer?"
              answer="We offer a comprehensive range of digital services including web development, UI/UX design, brand strategy, digital marketing, content creation, and e-commerce solutions. Our team works collaboratively to deliver holistic solutions tailored to your specific needs."
              delay={0.1}
            />
            <FAQItem
              question="How long does a typical project take?"
              answer="Project timelines vary depending on the scope and complexity. A simple website redesign might take 4-6 weeks, while a comprehensive digital transformation could take 3-6 months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements."
              delay={0.2}
            />
            <FAQItem
              question="What is your design process like?"
              answer="Our design process follows a user-centered approach that begins with research and discovery to understand your audience and business goals. We then move through wireframing, prototyping, and iterative design phases with regular client feedback. This ensures the final product not only looks great but also delivers results."
              delay={0.3}
            />
            <FAQItem
              question="Do you offer ongoing support after launch?"
              answer="Yes, we offer various maintenance and support packages to ensure your digital assets continue to perform optimally after launch. These can include regular updates, performance monitoring, content updates, and strategic optimizations based on user data and feedback."
              delay={0.4}
            />
            <FAQItem
              question="How do you handle project pricing?"
              answer="We offer transparent project-based pricing rather than hourly rates. After understanding your project requirements, we provide a detailed proposal with clear deliverables and fixed pricing. For ongoing services, we offer flexible monthly retainers tailored to your needs."
              delay={0.5}
            />
          </div>
        </div>
      </AnimatedSection>



    </>
  );
};

export default Home;