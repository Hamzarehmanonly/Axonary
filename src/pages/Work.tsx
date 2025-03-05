import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  year: string;
  description: string;
  challenge: string;
  solution: string;
  results: {
    label: string;
    value: string;
  }[];
  technologies: string[];
  gallery: string[];
}

const Work: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const categories = [
    'All Projects',
    'Websites',
    'Applications',
    'Branding'
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform Redesign",
      subtitle: "Modern Shopping Experience",
      category: "UX/UI Design",
      image: "/images/projects/ecommerce-main.jpg",
      year: "2023",
      description: "Complete overhaul of an e-commerce platform resulting in increased conversion rates and user engagement.",
      challenge: "The client's existing e-commerce platform was outdated, leading to poor user engagement and low conversion rates. They needed a modern, user-friendly interface that could handle their growing product catalog while providing an exceptional shopping experience.",
      solution: "We reimagined the entire shopping experience with a focus on mobile-first design, intuitive navigation, and streamlined checkout process. The new platform features advanced search capabilities, personalized recommendations, and a seamless cart experience.",
      results: [
        { label: "Conversion Rate Increase", value: "156%" },
        { label: "User Engagement", value: "2.5x" },
        { label: "Bounce Rate Reduction", value: "42%" }
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Stripe"],
      gallery: [
        "/images/projects/ecommerce/homepage.jpg",
        "/images/projects/ecommerce/product-page.jpg",
        "/images/projects/ecommerce/checkout.jpg",
        "/images/projects/ecommerce/mobile-view.jpg"
      ]
    },
    {
      id: 2,
      title: "FinTech Mobile App",
      subtitle: "Personal Finance Revolution",
      category: "Mobile Development",
      image: "/images/projects/fintech-main.jpg",
      year: "2023",
      description: "Revolutionary fintech application that simplifies personal finance management and investment tracking.",
      challenge: "The financial sector needed a modern solution to help users manage their investments and track their spending habits. The challenge was to create an intuitive app that could handle complex financial data while remaining accessible to everyday users.",
      solution: "We developed a comprehensive mobile application with real-time investment tracking, AI-powered spending insights, and automated savings features. The app includes advanced security measures and integrates with multiple financial institutions.",
      results: [
        { label: "Active Users", value: "1M+" },
        { label: "App Store Rating", value: "4.8" },
        { label: "User Satisfaction", value: "98%" }
      ],
      technologies: ["React Native", "TypeScript", "Firebase", "AWS", "TensorFlow"],
      gallery: [
        "/images/projects/fintech/dashboard.jpg",
        "/images/projects/fintech/investments.jpg",
        "/images/projects/fintech/analytics.jpg",
        "/images/projects/fintech/settings.jpg"
      ]
    },
    {
      id: 3,
      title: "AI-Powered Analytics Dashboard",
      subtitle: "Enterprise Intelligence Platform",
      category: "Web Application",
      image: "/images/projects/analytics-main.jpg",
      year: "2023",
      description: "Enterprise analytics platform with AI-driven insights and real-time data visualization.",
      challenge: "The client needed a powerful analytics platform that could process massive amounts of data and present actionable insights in real-time. The system needed to be both powerful and user-friendly.",
      solution: "We created a comprehensive analytics dashboard that leverages AI to process data and generate insights automatically. The platform features interactive visualizations, customizable reports, and predictive analytics capabilities.",
      results: [
        { label: "Time Saved", value: "85%" },
        { label: "ROI", value: "3x" },
        { label: "Accuracy", value: "95%" }
      ],
      technologies: ["Python", "React", "TensorFlow", "D3.js", "PostgreSQL"],
      gallery: [
        "/images/projects/analytics/dashboard.jpg",
        "/images/projects/analytics/reports.jpg",
        "/images/projects/analytics/predictions.jpg",
        "/images/projects/analytics/insights.jpg"
      ]
    },
    {
      id: 4,
      title: "Healthcare Management System",
      subtitle: "Digital Health Innovation",
      category: "Enterprise Solution",
      image: "/images/projects/healthcare-main.jpg",
      year: "2023",
      description: "Comprehensive healthcare management system streamlining patient care and administrative processes.",
      challenge: "Healthcare providers needed a modern system to manage patient records, appointments, and administrative tasks efficiently. The solution needed to be HIPAA-compliant and user-friendly for both staff and patients.",
      solution: "We developed a secure, cloud-based healthcare management system with electronic health records, automated scheduling, and telemedicine capabilities. The platform includes patient portals and integrated billing systems.",
      results: [
        { label: "Efficiency Increase", value: "45%" },
        { label: "Patients Served", value: "200k+" },
        { label: "Uptime", value: "99.9%" }
      ],
      technologies: ["Angular", "Node.js", "MongoDB", "Azure", "WebRTC"],
      gallery: [
        "/images/projects/healthcare/dashboard.jpg",
        "/images/projects/healthcare/patient-portal.jpg",
        "/images/projects/healthcare/scheduling.jpg",
        "/images/projects/healthcare/telemedicine.jpg"
      ]
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleModalClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleCloseModal();
    }
  };

  const filteredProjects = selectedCategory === 'All Projects'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black" ref={containerRef}>
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our <span className="text-[#5C3693]">Work</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Transforming ideas into exceptional digital experiences
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-lg border-y border-[#5C3693]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-center space-x-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-[#5C3693] text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Project Details */}
      <AnimatePresence>
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-sm"
            onClick={handleModalClick}
          >
            <div className="min-h-screen px-4 flex items-center justify-center">
              <motion.div
                ref={modalRef}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative bg-black/95 rounded-2xl max-w-6xl w-full mx-auto my-8"
              >
                {/* Close Button */}
                <button
                  onClick={handleCloseModal}
                  className="absolute top-6 right-6 text-white/50 hover:text-white z-50 p-2"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="p-8">
                  {/* Project Header */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-12"
                  >
                    <span className="text-[#5C3693] text-sm font-medium mb-2 block">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                      {selectedProject.title}
                    </h2>
                    <p className="text-xl text-gray-400">
                      {selectedProject.description}
                    </p>
                  </motion.div>

                  {/* Project Gallery */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {selectedProject.gallery.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="relative aspect-video rounded-lg overflow-hidden bg-[#5C3693]/10"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#000000] to-[#472A71] opacity-50" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Project Details */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12"
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Challenge</h3>
                      <p className="text-gray-400 mb-8">{selectedProject.challenge}</p>
                      
                      <h3 className="text-2xl font-bold text-white mb-4">Solution</h3>
                      <p className="text-gray-400 mb-8">{selectedProject.solution}</p>
                    </div>

                    <div>
                      {/* Results */}
                      <h3 className="text-2xl font-bold text-white mb-6">Results</h3>
                      <div className="grid grid-cols-2 gap-6 mb-8">
                        {selectedProject.results.map((result, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="text-center p-4 rounded-lg bg-[#5C3693]/10"
                          >
                            <div className="text-2xl font-bold text-[#5C3693] mb-2">
                              {result.value}
                            </div>
                            <div className="text-sm text-gray-400">
                              {result.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <h3 className="text-2xl font-bold text-white mb-4">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                            className="px-4 py-2 rounded-full text-sm bg-[#5C3693]/20 text-[#5C3693]"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => handleProjectClick(project)}
              >
                <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                  {/* Project Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#000000] to-[#472A71] transform transition-transform duration-700 group-hover:scale-105" />
                  
                  {/* Content */}
                  <div className="relative p-8 h-full flex flex-col justify-between">
                    <div>
                      <span className="text-[#5C3693] text-sm font-medium mb-2 block">
                        {project.category}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-400">{project.subtitle}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-gray-400">{project.year}</span>
                      <motion.div
                        className="w-12 h-12 rounded-full flex items-center justify-center bg-[#5C3693]/20"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <svg
                          className="w-6 h-6 text-[#5C3693]"
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
                      </motion.div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  {hoveredProject === project.id && (
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div
                        className="absolute w-32 h-32 rounded-full blur-3xl"
                        style={{
                          background: 'radial-gradient(circle, rgba(92,54,147,0.3) 0%, rgba(0,0,0,0) 70%)',
                          left: mousePosition.x - 64,
                          top: mousePosition.y - 64,
                        }}
                      />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Technology Stack Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-[#5C3693]/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-block bg-[#472A71]/20 px-4 py-1 rounded-full mb-4 text-sm font-medium text-[#5C3693]">
            Built With
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Technologies we use
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            We leverage cutting-edge technologies to deliver exceptional digital experiences
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { name: "React", icon: "⚛️" },
            { name: "Next.js", icon: "▲" },
            { name: "Node.js", icon: "🟢" },
            { name: "GraphQL", icon: "◈" },
            { name: "AWS", icon: "☁️" },
            { name: "TypeScript", icon: "📘" },
            { name: "Tailwind CSS", icon: "🎨" },
            { name: "Framer Motion", icon: "🎬" }
          ].map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#000000] p-6 rounded-lg border border-[#5C3693]/20 group hover:border-[#5C3693] transition-colors"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {tech.icon}
              </div>
              <div className="text-white font-medium">{tech.name}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-white mb-8"
          >
            Have a project in mind?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="btn-primary-lg"
            >
              <span>Let's talk</span>
              <svg
                className="w-5 h-5"
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
            </Link>
          </motion.div>
        </div>
        
      </div>
      
    </div>
  );
};

export default Work;