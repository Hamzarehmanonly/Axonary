import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface CaseStudy {
  title: string;
  category: string;
  description: string;
  metrics: {
    value: string;
    label: string;
  }[];
  image: string;
  tags: string[];
  featured?: boolean;
}

const CaseStudies: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = ['All', 'UX/UI Design', 'Mobile Development', 'Web Application', 'Enterprise Solution'];

  const caseStudies: CaseStudy[] = [
    {
      title: "E-commerce Platform Redesign",
      category: "UX/UI Design",
      description: "Complete overhaul of an e-commerce platform resulting in increased conversion rates and user engagement.",
      metrics: [
        { value: "156%", label: "Conversion Rate Increase" },
        { value: "2.5x", label: "User Engagement" },
        { value: "42%", label: "Bounce Rate Reduction" }
      ],
      image: "/cases/ecommerce.jpg",
      tags: ["E-commerce", "UI/UX", "React", "Node.js"],
      featured: true
    },
    {
      title: "FinTech Mobile App",
      category: "Mobile Development",
      description: "Revolutionary fintech application that simplifies personal finance management and investment tracking.",
      metrics: [
        { value: "1M+", label: "Active Users" },
        { value: "4.8", label: "App Store Rating" },
        { value: "98%", label: "User Satisfaction" }
      ],
      image: "/cases/fintech.jpg",
      tags: ["FinTech", "Mobile", "React Native", "AWS"]
    },
    {
      title: "AI-Powered Analytics Dashboard",
      category: "Web Application",
      description: "Enterprise analytics platform with AI-driven insights and real-time data visualization.",
      metrics: [
        { value: "85%", label: "Time Saved" },
        { value: "3x", label: "ROI" },
        { value: "95%", label: "Accuracy" }
      ],
      image: "/cases/analytics.jpg",
      tags: ["AI/ML", "Analytics", "Python", "React"],
      featured: true
    },
    {
      title: "Healthcare Management System",
      category: "Enterprise Solution",
      description: "Comprehensive healthcare management system streamlining patient care and administrative processes.",
      metrics: [
        { value: "45%", label: "Efficiency Increase" },
        { value: "200k+", label: "Patients Served" },
        { value: "99.9%", label: "Uptime" }
      ],
      image: "/cases/healthcare.jpg",
      tags: ["Healthcare", "Enterprise", "Cloud", "Security"]
    }
  ];

  const filteredStudies = selectedCategory === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  const featuredStudies = caseStudies.filter(study => study.featured);
  const regularStudies = filteredStudies.filter(study => !study.featured);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Featured Case Study */}
      <div className="relative min-h-[60vh] md:min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10" />
          <div className="absolute inset-0 bg-[#5C3693]/20" />
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2 md:gap-4 opacity-20 absolute inset-0">
            {Array.from({ length: 32 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-[#5C3693]/20 rounded-lg transform transition-all duration-1000"
                style={{
                  animation: `pulse ${2 + Math.random() * 4}s infinite ${Math.random() * 2}s`,
                  opacity: Math.random() * 0.5
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center lg:text-left">
              <div 
                className={`inline-block bg-[#472A71]/20 px-4 py-1 rounded-full mb-4 transform transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <span className="text-sm font-medium text-[#5C3693]">Featured Work</span>
              </div>
              <h1 
                className={`text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 transform transition-all duration-700 delay-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                Our Case <span className="text-[#5C3693]">Studies</span>
              </h1>
              <p 
                className={`text-lg md:text-xl text-gray-400 mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0 transform transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                Discover how we've helped businesses transform their digital presence and achieve remarkable results.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
              {featuredStudies.map((study, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transform transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{
                    transitionDelay: `${400 + index * 200}ms`,
                    zIndex: featuredStudies.length - index
                  }}
                >
                  <div className="bg-gradient-to-br from-[#000000] to-[#472A71] rounded-2xl p-6 md:p-8 border border-[#5C3693]/20 h-full">
                    <div className="flex items-center mb-4">
                      <span className="text-[#5C3693] text-sm font-medium">{study.category}</span>
                      <span className="mx-2 text-[#5C3693]/30">•</span>
                      <span className="text-white/60">Featured Project</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">{study.title}</h3>
                    <p className="text-gray-400 mb-4 md:mb-6 line-clamp-3">{study.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                      {study.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-[#5C3693]/10 text-[#5C3693]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to="#"
                      className="inline-flex items-center text-[#5C3693] hover:text-white transition-colors duration-300"
                    >
                      View Case Study
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-0 bg-black/80 backdrop-blur-lg z-30 border-y border-[#5C3693]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
          <div className="flex items-center justify-between md:justify-start md:space-x-4">
            <div className="flex-1 md:flex-none">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden w-full px-4 py-2 rounded-full text-sm font-medium bg-[#5C3693]/10 text-[#5C3693] flex items-center justify-between"
              >
                <span>{selectedCategory}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`absolute left-0 right-0 bg-black/90 backdrop-blur-lg mt-2 py-2 px-4 border-y border-[#5C3693]/20 md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm font-medium ${
                      selectedCategory === category
                        ? 'text-[#5C3693]'
                        : 'text-gray-400 hover:text-[#5C3693]'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4 overflow-x-auto">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-[#5C3693] text-white'
                      : 'bg-[#5C3693]/10 text-[#5C3693] hover:bg-[#5C3693]/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Masonry Grid of Case Studies */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {regularStudies.map((study, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl">
                {/* Card Background with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#000000] to-[#472A71] transform group-hover:scale-105 transition-transform duration-500" />
                
                {/* Content */}
                <div className="relative p-6 md:p-8 border border-[#5C3693]/20 rounded-2xl group-hover:border-[#5C3693]/50 transition-all duration-500">
                  <div className="flex items-center mb-4">
                    <span className="text-[#5C3693] text-sm font-medium">{study.category}</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-[#5C3693] transition-colors duration-300">
                    {study.title}
                  </h3>

                  <p className="text-gray-400 mb-4 md:mb-6 line-clamp-3">
                    {study.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6">
                    {study.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center transform group-hover:translate-y-[-4px] transition-transform duration-300">
                        <div className="text-xl md:text-2xl font-bold text-[#5C3693] mb-1">{metric.value}</div>
                        <div className="text-xs md:text-sm text-gray-400">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                    {study.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-[#5C3693]/10 text-[#5C3693] transform group-hover:translate-y-[-2px] transition-transform duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="#"
                    className="inline-flex items-center text-[#5C3693] group-hover:text-white transition-colors duration-300"
                  >
                    View Details
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>

                {/* Interactive hover effects */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#5C3693]/0 via-[#5C3693]/5 to-[#5C3693]/0" />
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#5C3693]/10 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add some dynamic styles */}
      <style>
        {`
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.2; }
            50% { transform: scale(1.1); opacity: 0.3; }
          }
        `}
      </style>
    </div>
  );
    };
    
    export default CaseStudies;