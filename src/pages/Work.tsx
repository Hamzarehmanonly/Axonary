import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register the plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Define TypeScript interfaces
interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  color: string;
  image: string;
}

interface MousePosition {
  x: number;
  y: number;
}

const Work: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [activeProject, setActiveProject] = useState<number>(0);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const contentRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<(HTMLElement | null)[]>([]);
  
  // Enhanced project data with more details
  const projects: Project[] = [
    {
      id: 1,
      title: "Indian Navy",
      category: "Web Application",
      year: "2024",
      description: "Development of a custom web application that streamlined their internal processes, enabling them to operate more efficiently and effectively.",
      tags: ["UI/UX", "Web Development", "Deployment", "Training"],
      color: "#00FF00",
      image: "navy"
    },
    {
      id: 2,
      title: "Mahindra Armored",
      category: "Website Redesign",
      year: "2023",
      description: "Creating a new look for a well-established brand, we worked with Mahindra Armored to develop a new website that showcased their products and services in a modern and engaging way.",
      tags: ["UI/UX", "CMS Development", "Web Development", "Deployment"],
      color: "#00FF00",
      image: "armored"
    },
    {
      id: 3,
      title: "Motion System",
      category: "Motion Design",
      year: "2023",
      description: "Comprehensive motion language creating consistent animated interactions across platforms.",
      tags: ["Keyframes", "Transitions", "Micro-interactions"],
      color: "#00FF00",
      image: "motion"
    }
  ];
  
  // Track mouse position for parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Set up GSAP animations on component mount
  useEffect(() => {
    // Simulate loading sequence
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    if (!contentRef.current) return;

    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // GSAP setup for each project
    projectsRef.current.forEach((section, index) => {
      if (!section) return;

      // Initial state - all start below the viewport
      gsap.set(section, { 
        y: index === 0 ? 0 : '100%', // First project starts visible, others start below
        opacity: index === 0 ? 1 : 0.3, // First project starts visible, others slightly hidden
      });

      // Create timeline for each project
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top bottom", // Animation starts when top of section hits bottom of viewport
          end: "top 20%", // Animation ends when top of section is 20% from the top
          scrub: 1, // Smooth scrubbing effect
          markers: false, // Set to true for debugging
          onEnter: () => setActiveProject(index),
          onEnterBack: () => setActiveProject(index)
        }
      });

      // Animation timeline - slide up and fade in
      tl.to(section, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out"
      });

      // Elements within each project
      const category = section.querySelector('.project-category');
      const title = section.querySelector('.project-title');
      const description = section.querySelector('.project-description');
      const tags = section.querySelector('.project-tags');
      const button = section.querySelector('.project-button');
      const image = section.querySelector('.project-image');

      // Staggered animation for project elements
      if (category && title && description && tags && button && image) {
        gsap.set([category, title, description, tags, button], { 
          y: 30, 
          opacity: 0 
        });
        
        gsap.set(image, { 
          scale: 0.9, 
          opacity: 0 
        });

        const elementsTl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 60%", // Start when the section is 60% from the top of the viewport
            end: "top 20%", // End when the section is 20% from the top
            scrub: 0.5 // Smoother scrubbing for elements
          }
        });

        elementsTl
          .to(category, { y: 0, opacity: 1, duration: 0.3 })
          .to(title, { y: 0, opacity: 1, duration: 0.3 }, "-=0.1")
          .to(description, { y: 0, opacity: 1, duration: 0.3 }, "-=0.1")
          .to(tags, { y: 0, opacity: 1, duration: 0.3 }, "-=0.1")
          .to(button, { y: 0, opacity: 1, duration: 0.3 }, "-=0.1")
          .to(image, { scale: 1, opacity: 1, duration: 0.5 }, "-=0.3");
      }

      // Create a separate ScrollTrigger for each project to handle the exit animation
      if (index < projectsRef.current.length - 1) {
        const nextSection = projectsRef.current[index + 1];
        if (nextSection) {
          ScrollTrigger.create({
            trigger: nextSection,
            start: "top bottom",
            end: "top 70%",
            scrub: 1,
            onEnter: () => {
              gsap.to(section, {
                y: "-30%",
                opacity: 0.3,
                duration: 1,
                ease: "power2.in"
              });
            },
            onLeaveBack: () => {
              gsap.to(section, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out"
              });
            }
          });
        }
      }
    });

    // Create parallax effect on mouse move
    const moveBackground = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const translateX = (e.clientX - centerX) / 25;
      const translateY = (e.clientY - centerY) / 25;

      projectsRef.current.forEach((section) => {
        if (!section) return;
        
        const title = section.querySelector('.project-title');
        const description = section.querySelector('.project-description');
        const image = section.querySelector('.project-image');
        
        if (title) {
          gsap.to(title, {
            x: translateX * 0.5,
            y: translateY * 0.5,
            duration: 0.5,
            ease: "power1.out"
          });
        }
        
        if (description) {
          gsap.to(description, {
            x: translateX * 0.3,
            y: translateY * 0.3,
            duration: 0.5,
            ease: "power1.out"
          });
        }
        
        if (image) {
          gsap.to(image, {
            x: translateX * -0.2,
            y: translateY * -0.2,
            duration: 0.5,
            ease: "power1.out"
          });
        }
      });
    };

    window.addEventListener('mousemove', moveBackground);

    return () => {
      // Clean up ScrollTriggers when component unmounts
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener('mousemove', moveBackground);
    };
  }, []);

  // Smooth scroll to project
  const handleProjectChange = (index: number) => {
    const projectElement = projectsRef.current[index];
    if (!projectElement) return;
    
    gsap.to(window, {
      duration: 1.5,
      scrollTo: {
        y: projectElement,
        offsetY: 0
      },
      ease: "power2.inOut"
    });
  };

  return (
    <div ref={contentRef} className="relative bg-black text-white font-sans overflow-hidden">
      {/* Animated grain overlay */}
      <div className="fixed inset-0 opacity-10 z-0 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        animation: 'grain 8s steps(10) infinite',
      }} />
      
      {/* Header with GSAP-enhanced transitions */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-6">
        <div className={`transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}>
          <h1 className="text-xl font-medium tracking-tight">Project.Studio</h1>
        </div>
        <nav className={`transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}>
          <ul className="flex space-x-8">
            <li className="text-sm uppercase tracking-wider">Work</li>
            <li className="text-sm uppercase tracking-wider text-gray-500 hover:text-white transition-colors duration-300">About</li>
            <li className="text-sm uppercase tracking-wider text-gray-500 hover:text-white transition-colors duration-300">Contact</li>
          </ul>
        </nav>
      </header>
      
      {/* Project navigation */}
      <div className={`fixed bottom-6 left-6 md:left-12 z-50 space-y-2 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <div className="text-xs text-gray-500">Select Project</div>
        <div className="flex space-x-4">
          {projects.map((project, index) => (
            <button 
              key={project.id}
              onClick={() => handleProjectChange(index)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                activeProject === index 
                  ? 'bg-white text-black scale-110' 
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              0{index + 1}
            </button>
          ))}
        </div>
      </div>
      
      {/* Main content with improved project sections */}
      <div className="min-h-screen">
        {projects.map((project, index) => (
          <section 
            key={project.id}
            ref={el => { projectsRef.current[index] = el as HTMLElement; }}
            className="relative min-h-screen flex items-center"
            style={{
              position: index === 0 ? 'relative' : 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              zIndex: 10 - index,
            }}
          >
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 px-6 md:px-12">
              {/* Project details */}
              <div className="space-y-12">
                <div className="space-y-6">
                  <div className="overflow-hidden">
                    <span className="project-category inline-block text-xs uppercase tracking-widest text-gray-400">
                      {project.category} / {project.year}
                    </span>
                  </div>
                  
                  <div className="overflow-hidden">
                    <h2 className="project-title text-4xl md:text-6xl font-bold">
                      {project.title}
                    </h2>
                  </div>
                  
                  <div className="overflow-hidden">
                    <p className="project-description text-lg text-gray-300 max-w-md">
                      {project.description}
                    </p>
                  </div>
                </div>
                
                <div className="project-tags flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-4 py-2 text-xs border border-gray-800 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="project-button">
                  <button className="group px-8 py-4 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center space-x-2">
                    <span>View Project</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Project image */}
              <div className="flex items-center justify-center relative h-full">
                <div 
                  className="project-image w-full aspect-square bg-gray-900 rounded-lg overflow-hidden"
                  style={{
                    backgroundImage: 'linear-gradient(to bottom right, rgba(20, 20, 20, 0.8), rgba(10, 10, 10, 0.9))',
                    position: 'relative',
                  }}
                >
                  {/* SVG graphics for projects */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {project.image === "navy" ? (
                      <div className="w-full h-full flex items-center justify-center">
                        <svg viewBox="0 0 200 100" className="w-4/5 h-4/5">
                          <path 
                            d="M10,50 C30,20 70,20 90,50 C120,80 150,80 190,50" 
                            stroke={project.color} 
                            strokeWidth="2" 
                            fill="none"
                            className="svg-path"
                          />
                          <path 
                            d="M10,60 C50,90 100,90 140,60 C170,40 190,40 190,60" 
                            stroke={project.color} 
                            strokeWidth="2" 
                            fill="none"
                            className="svg-path"
                          />
                          <rect 
                            x="20" y="40" width="160" height="20" 
                            stroke={project.color} 
                            strokeWidth="1" 
                            fill="none"
                            className="svg-path"
                          />
                        </svg>
                      </div>
                    ) : project.image === "armored" ? (
                      <div className="w-full h-full flex items-center justify-center">
                        <svg viewBox="0 0 200 120" className="w-4/5 h-4/5">
                          <rect 
                            x="40" y="30" width="120" height="60" 
                            stroke={project.color} 
                            strokeWidth="2" 
                            fill="none"
                            className="svg-path"
                          />
                          <circle 
                            cx="60" cy="90" r="15" 
                            stroke={project.color} 
                            strokeWidth="2" 
                            fill="none"
                            className="svg-path"
                          />
                          <circle 
                            cx="140" cy="90" r="15" 
                            stroke={project.color} 
                            strokeWidth="2" 
                            fill="none"
                            className="svg-path"
                          />
                          <path 
                            d="M30,50 L40,30 L160,30 L170,50" 
                            stroke={project.color} 
                            strokeWidth="2" 
                            fill="none"
                            className="svg-path"
                          />
                        </svg>
                      </div>
                    ) : (
                      <div className="text-6xl font-bold text-gray-700">
                        0{index + 1}
                      </div>
                    )}
                  </div>
                  
                  {/* Project number */}
                  <div className="absolute bottom-4 right-4 text-4xl font-bold" style={{ color: project.color }}>
                    0{index + 1}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Scroll indicator */}
            {index < projects.length - 1 && (
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-sm text-gray-400 flex flex-col items-center">
                <span>scroll to experience the journey</span>
                <svg className="w-6 h-10 mt-2 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            )}
          </section>
        ))}
        
        {/* Extra space for scrolling */}
        <div style={{ height: '100vh' }}></div>
      </div>
    </div>
  );
};

export default Work;