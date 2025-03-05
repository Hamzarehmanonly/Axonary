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
              <span className="text-sm font-medium text-[#FFFFFF]">Exciting announcement 🎉</span>
            </div>

            {/* Main heading */}
            <h1
              className={`text-5xl md:text-7xl font-bold text-center mb-6 max-w-5xl transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-8'
                }`}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF] to-[#5C3693]">
                A landing page template that works for you
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className={`text-lg text-[#FFFFFF]/80 text-center max-w-3xl mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-8'
                }`}
            >
              Build beautiful landing pages for your startups, clients, and side projects,
              without having to think about design.
            </p>

            {/* CTA Button with hover effect */}
            <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-8'
              }`}>
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium overflow-hidden rounded-lg"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#5C3693] to-[#472A71]"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition-all duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-[#FFFFFF]/10 opacity-30 group-hover:rotate-90 ease-out"></span>
                <span className="relative text-[#FFFFFF] flex items-center">
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
          className="relative min-h-screen py-24 bg-gradient-to-b from-[#000000] to-[#000000]"
        >
          <div className="max-w-6xl mx-auto px-4">
            {/* Section header */}
            <div className="text-center mb-20">
              <div className="inline-block bg-[#472A71]/20 px-4 py-1 rounded-full mb-4">
                <span className="text-sm font-medium text-[#5C3693]">Powerful Features</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-6">
                Everything you need to <span className="text-[#5C3693]">succeed</span>
              </h2>
              <p className="text-[#FFFFFF]/60 max-w-2xl mx-auto">
                Our platform combines powerful features with an intuitive interface, making it easier than ever to create stunning landing pages.
              </p>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Interactive Animations",
                  description: "Create engaging user experiences with smooth, responsive animations that captivate your audience.",
                  icon: "✨"
                },
                {
                  title: "Responsive Design",
                  description: "Ensure your landing page looks amazing on any device with our fully responsive design system.",
                  icon: "📱"
                },
                {
                  title: "SEO Optimized",
                  description: "Rank higher in search results with our built-in SEO optimization techniques.",
                  icon: "🔍"
                },
                {
                  title: "Fast Loading",
                  description: "Keep your visitors engaged with lightning-fast page loading speeds.",
                  icon: "⚡"
                },
                {
                  title: "Easy Customization",
                  description: "Modify colors, fonts, and layouts without any coding knowledge required.",
                  icon: "🎨"
                },
                {
                  title: "Conversion Focused",
                  description: "Drive more conversions with strategically designed call-to-action elements.",
                  icon: "📈"
                }
              ].map((feature, index) => (
                <div
                  key={`feature-${index}`}
                  className={`bg-[#000000] border border-[#5C3693]/20 rounded-xl p-6 transition-all duration-700 transform ${isInViewport(featuresRef)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-12'
                    }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#5C3693] to-[#472A71] flex items-center justify-center mb-4 text-2xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#FFFFFF] mb-2">{feature.title}</h3>
                  <p className="text-[#FFFFFF]/60">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Animated blobs in background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute -right-64 -top-64 w-96 h-96 rounded-full bg-[#5C3693]/10 blur-3xl"
              style={{
                animation: 'float 15s infinite ease-in-out alternate',
                transformOrigin: 'center center'
              }}
            />
            <div
              className="absolute -left-32 bottom-32 w-64 h-64 rounded-full bg-[#472A71]/10 blur-3xl"
              style={{
                animation: 'float2 20s infinite ease-in-out alternate',
                transformOrigin: 'center center'
              }}
            />
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
                Trusted by <span className="text-[#5C3693]">innovators</span>
              </h2>
              <p className="text-[#FFFFFF]/60 max-w-2xl mx-auto">
                See what our customers have to say about their experience using our product.
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
                Works with your <span className="text-[#5C3693]">favorite platforms</span>
              </h2>
              <p className="text-[#FFFFFF]/60 max-w-2xl mx-auto">
                Seamlessly integrate our animations and designs with all major web platforms.
              </p>
            </div>

            {/* Platform cards with animations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "WordPress",
                  icon: "wordpress",
                  description: "Perfect integration with WordPress sites. Install our plugin and get started in minutes.",
                  features: [
                    "One-click installation",
                    "Compatible with popular themes",
                    "WooCommerce support",
                    "Elementor & Gutenberg ready"
                  ],
                  cta: "WordPress Integration",
                  color: "#21759b",
                  animation: "float"
                },
                {
                  name: "Shopify",
                  icon: "shopify",
                  description: "Build stunning e-commerce sites with our Shopify-optimized components and animations.",
                  features: [
                    "Theme integration",
                    "Product showcase animations",
                    "Cart animations",
                    "Mobile-optimized",
                    "Conversion boosters"
                  ],
                  cta: "Shopify Integration",
                  color: "#7ab55c",
                  animation: "pulse",
                  popular: true
                },
                {
                  name: "Webflow",
                  icon: "webflow",
                  description: "Enhance your Webflow designs with our custom animation library.",
                  features: [
                    "Custom interactions",
                    "Animation presets",
                    "Complete design control",
                    "No-code solution",
                    "Responsive behavior"
                  ],
                  cta: "Webflow Integration",
                  color: "#4353ff",
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
                    >
                      {platform.icon === "wordpress" && (
                        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#FFFFFF]" fill="currentColor">
                          <path d="M12.158 12.786L9.46 20.625c0.806 0.237 1.657 0.366 2.54 0.366 1.047 0 2.051-0.181 2.986-0.51-0.024-0.038-0.079-0.065-0.124l-2.762-7.57zM3.009 12c0 3.559 2.068 6.634 5.067 8.092l-4.293-11.75c-0.498 1.139-0.775 2.403-0.775 3.658zM18.069 11.546c0-1.112-0.399-1.881-0.741-2.48-0.456-0.741-0.883-1.368-0.883-2.109 0-0.826 0.627-1.596 1.51-1.596 0.04 0 0.078 0.005 0.116 0.007-1.598-1.464-3.73-2.355-6.07-2.355-3.141 0-5.904 1.613-7.512 4.052 0.211 0.007 0.41 0.011 0.579 0.011 0.94 0 2.396-0.114 2.396-0.114 0.483-0.029 0.541 0.684 0.057 0.741 0 0-0.487 0.057-1.029 0.085l3.274 9.739 1.968-5.901-1.401-3.838c-0.485-0.029-0.943-0.085-0.943-0.085-0.485-0.029-0.428-0.77 0.057-0.741 0 0 1.484 0.114 2.368 0.114 0.94 0 2.397-0.114 2.397-0.114 0.485-0.029 0.543 0.684 0.059 0.741 0 0-0.488 0.057-1.031 0.085l3.249 9.665 0.897-2.996c0.456-1.169 0.684-2.137 0.684-2.907zM12.198 13.146l-2.694 7.826c0.806 0.237 1.657 0.366 2.541 0.366 1.047 0 2.051-0.181 2.986-0.51-0.028-0.042-0.049-0.085-0.069-0.132l-2.764-7.55zM21.088 7.146c0.041 0.297 0.063 0.615 0.063 0.957 0 0.945-0.177 2.005-0.709 3.33l-2.842 8.213c2.761-1.607 4.622-4.653 4.622-8.156 0-1.627-0.415-3.156-1.134-4.344zM12 2.252c-5.38 0-9.748 4.368-9.748 9.748s4.368 9.748 9.748 9.748 9.748-4.368 9.748-9.748-4.368-9.748-9.748-9.748zM12 20.648c-4.763 0-8.648-3.885-8.648-8.648s3.885-8.648 8.648-8.648 8.648 3.885 8.648 8.648-3.885 8.648-8.648 8.648z" />
                        </svg>
                      )}
                      {platform.icon === "shopify" && (
                        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#FFFFFF]" fill="currentColor">
                          <path d="M15.337 14.916l.504-1.716-1.355-.434.85-2.879 2.254.403c-.145-.623-.195-.958-.342-1.644-1.339-.245-2.2-.403-3.56-.646-.975-.195-2.008-.305-2.935.316-.928.622-1.443 1.935-1.839 2.918l-2.309.414.195 1.446 1.598-.288c.45 1.205.924 2.401 1.38 3.599-1.616.683-2.871 1.475-3.621 3.13H14.3c-.537-1.343-1.055-2.696-1.575-4.045l2.612-.574zm.312-4.211l.723-2.415c.825.15 1.656.297 2.476.45-.122.51-.268 1.003-.377 1.506l-2.822.459zm-1.761.316l.985-3.35 1.261.229-.977 3.305-1.269-.184zm-2.584.48l1.937-.341s.734-1.339 1.145-2.043c.144-.245.59-.622.977-.403-.144.438-1.185 4.064-1.185 4.064-2.874.53zm12.138 2.275H3.995c.325-.746.654-1.488 1.381-1.935.73-.446 1.494-.355 2.25-.5.758-.148 1.514-.355 2.236-.694.65 1.662 1.3 3.322 1.943 4.989h2.206c.732-1.884 1.464-3.76 2.197-5.642.868.196 1.735.388 2.61.583-.52 1.736-1.04 3.47-1.56 5.204h2.917c.59-1.926 1.176-3.85 1.768-5.774.731.196 1.464.388 2.197.582-.59 1.885-1.177 3.76-1.768 5.642.115.297.23-.043 0 0z" />
                        </svg>
                      )}
                      {platform.icon === "webflow" && (
                        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#FFFFFF]" fill="currentColor">
                          <path d="M17.802 8.56s-1.946 6.103-2.105 6.607a4674.03 4674.03 0 0 1-2.106-6.607h-2.116l-3.053 9.414h2.134s1.946-6.104 2.106-6.608c0 0 1.984 6.608 2.143 6.608h2.134s3.053-9.414 3.053-9.414h-2.19zM7.143 2.27H2.572L2.5 2.344v17.324l.072.071h13.754l.071-.071V15.13l-.071-.071h-2.358l-.072.071z" />
                        </svg>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-[#FFFFFF] mb-2">{platform.name}</h3>
                    <p className="text-[#FFFFFF]/60 mb-6">{platform.description}</p>
                    <ul className="mb-6 space-y-3">
                      {platform.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-[#FFFFFF]/80">
                          <svg className="w-5 h-5 text-[#5C3693] mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
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
                    {platform.icon === "wordpress" && (
                      <div className="absolute bottom-0 left-0 w-full">
                        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-12 text-[#5C3693]/10">
                          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" opacity=".25"></path>
                          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
                          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
                        </svg>
                      </div>
                    )}
                    {platform.icon === "shopify" && (
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
                    {platform.icon === "webflow" && (
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
          </div>

          {/* Infinite Slider */}
          <div className="relative w-full overflow-hidden">
            {/* First row */}
            <div className="w-[200%] flex relative">
              <div className="flex animate-infinite-scroll w-[50%] justify-around">
                {[
                  { name: "React", icon: "⚛️" },
                  { name: "Vue", icon: "🎯" },
                  { name: "Angular", icon: "🔺" },
                  { name: "Next.js", icon: "▲" },
                  { name: "TypeScript", icon: "📘" },
                  { name: "Tailwind", icon: "🎨" },
                  { name: "Node.js", icon: "🟢" },
                  { name: "Python", icon: "🐍" }
                ].map((tech, index) => (
                  <div
                    key={`tech1-${index}`}
                    className="flex flex-col items-center group"
                  >
                    <div className="text-4xl mb-2 opacity-70 group-hover:opacity-100 transition-all duration-300">
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
                  { name: "React", icon: "⚛️" },
                  { name: "Vue", icon: "🎯" },
                  { name: "Angular", icon: "🔺" },
                  { name: "Next.js", icon: "▲" },
                  { name: "TypeScript", icon: "📘" },
                  { name: "Tailwind", icon: "🎨" },
                  { name: "Node.js", icon: "🟢" },
                  { name: "Python", icon: "🐍" }
                ].map((tech, index) => (
                  <div
                    key={`tech1-dup-${index}`}
                    className="flex flex-col items-center group"
                  >
                    <div className="text-4xl mb-2 opacity-70 group-hover:opacity-100 transition-all duration-300">
                      {tech.icon}
                    </div>
                    <span className="text-[#FFFFFF] text-sm font-medium opacity-70 group-hover:opacity-100 transition-all duration-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Second row */}
            <div className="w-[200%] flex relative mt-16">
              <div className="flex animate-infinite-scroll-reverse w-[50%] justify-around">
                {[
                  { name: "AWS", icon: "☁️" },
                  { name: "Docker", icon: "🐳" },
                  { name: "Kubernetes", icon: "⎈" },
                  { name: "MongoDB", icon: "🍃" },
                  { name: "PostgreSQL", icon: "🐘" },
                  { name: "Redis", icon: "🔴" },
                  { name: "GraphQL", icon: "◈" },
                  { name: "Firebase", icon: "🔥" }
                ].map((tech, index) => (
                  <div
                    key={`tech2-${index}`}
                    className="flex flex-col items-center group"
                  >
                    <div className="text-4xl mb-2 opacity-70 group-hover:opacity-100 transition-all duration-300">
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
                  { name: "AWS", icon: "☁️" },
                  { name: "Docker", icon: "🐳" },
                  { name: "Kubernetes", icon: "⎈" },
                  { name: "MongoDB", icon: "🍃" },
                  { name: "PostgreSQL", icon: "🐘" },
                  { name: "Redis", icon: "🔴" },
                  { name: "GraphQL", icon: "◈" },
                  { name: "Firebase", icon: "🔥" }
                ].map((tech, index) => (
                  <div
                    key={`tech2-dup-${index}`}
                    className="flex flex-col items-center group"
                  >
                    <div className="text-4xl mb-2 opacity-70 group-hover:opacity-100 transition-all duration-300">
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
              Ready to <span className="text-[#5C3693]">Transform</span> Your Digital Presence?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Let's create something extraordinary together. Whether you have a specific challenge or need guidance exploring possibilities, our team is ready to bring your vision to life.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-[#5C3693] text-[#FFFFFF] px-8 py-4 rounded-full font-medium text-lg hover:bg-[#472A71] transition-colors"
            >
              Start Your Project
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