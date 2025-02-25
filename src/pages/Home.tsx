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
const AnimatedSection = ({ children, className = "" }) => {
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
const ServiceCard = ({ title, description, icon, delay = 0 }) => {
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
const ProjectCard = ({ title, category, imageUrl, delay = 0 }) => {
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
const TestimonialCard = ({ quote, author, position, company, delay = 0 }) => {
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
const TeamMemberCard = ({ name, position, imageUrl, delay = 0 }) => {
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
const StatItem = ({ number, label, delay = 0 }) => {
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
const BlogPostCard = ({ title, excerpt, category, date, imageUrl, delay = 0 }) => {
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
const TechnologyItem = ({ name, icon, delay = 0 }) => {
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
const FAQItem = ({ question, answer, delay = 0 }) => {
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

// Contact Form Component
const ContactForm = () => {
  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 p-8 rounded-lg border border-gray-800"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
          <input
            type="text"
            id="name"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
            placeholder="Your email"
          />
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="subject" className="block text-white font-medium mb-2">Subject</label>
        <input
          type="text"
          id="subject"
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
          placeholder="Subject"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
        <textarea
          id="message"
          rows="5"
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
          placeholder="Your message"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300"
      >
        Send Message
      </button>
    </motion.form>
  );
};

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
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
            <TechnologyItem name="React" icon="⚛️" delay={0.1} />
            <TechnologyItem name="Node.js" icon="🟢" delay={0.15} />
            <TechnologyItem name="Next.js" icon="▲" delay={0.2} />
            <TechnologyItem name="TypeScript" icon="📘" delay={0.25} />
            <TechnologyItem name="Python" icon="🐍" delay={0.3} />
            <TechnologyItem name="AWS" icon="☁️" delay={0.35} />
            <TechnologyItem name="Firebase" icon="🔥" delay={0.4} />
            <TechnologyItem name="Figma" icon="🎨" delay={0.45} />
            <TechnologyItem name="GraphQL" icon="◼️" delay={0.5} />
            <TechnologyItem name="MongoDB" icon="🍃" delay={0.55} />
            <TechnologyItem name="Tailwind CSS" icon="💨" delay={0.6} />
            <TechnologyItem name="Flutter" icon="📱" delay={0.65} />
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

      {/* Contact Section */}
      <AnimatedSection className="bg-gray-950">
        <div className="max-w-[1920px] mx-auto px-8 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Get In Touch</h2>
              <p className="text-gray-400 text-lg">Ready to start your next project? Reach out to us and let's create something amazing together.</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-12"
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="text-purple-500 mr-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 10C20 14.4183 16.4183 18 12 18C7.58172 18 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M12 18V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M8 22H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Location</h4>
                        <p className="text-gray-400">123 Design Street, Creative City, 10001</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-purple-500 mr-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22 12C22 16.4183 18.4183 20 14 20H10C5.58172 20 2 16.4183 2 12C2 7.58172 5.58172 4 10 4H14C18.4183 4 22 7.58172 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M22 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M14 16L18 12L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M8 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M6 16L2 12L6 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Email</h4>
                        <p className="text-gray-400">hello@axonaryweb.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-purple-500 mr-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M8 14H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M12 14H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M16 14H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M8 18H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M16 18H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Working Hours</h4>
                        <p className="text-gray-400">Monday - Friday: 9am - 6pm</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7616 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            <ContactForm />
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-[1920px] mx-auto px-8 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl font-bold text-white mb-4">AXONARY</h2>
              <p className="text-gray-400">Creating digital experiences that inspire and innovate.</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">© 2023 Axonary. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;