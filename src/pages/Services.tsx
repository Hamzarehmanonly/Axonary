import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MobileAppSVG,
  WebDevelopmentSVG,
  CustomSoftwareSVG,
  CloudServicesSVG,
  ArtificialIntelligenceSVG,
  DesignStrategySVG,
} from "../components/ServiceSVGs";

const COLORS = {
  primary: "#5C3693",
  secondary: "#472A71",
  bg: "#000000",
  card: "#0b0b0d",
  textMuted: "#BDB7D6",
  white: "#FFFFFF",
};

const Services: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const pct = height > 0 ? Math.min(100, Math.max(0, (scrolled / height) * 100)) : 0;
      setProgress(pct);
      setScrolled(scrolled > 100);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const serviceCategories = [
    {
      id: "mobile-app-development",
      title: "Mobile App Development",
      description: "Build powerful mobile applications for iOS, Android, Flutter, React Native, and more. We create intuitive, high-performance apps that users love.",
      services: [
        "Android App Development",
        "iOS App Development",
        "Cross-Platform Solutions",
        "Flutter Development",
        "React Native Apps",
        "Cloud Mobile Solutions"
      ],
      link: "/ios-app-development"
    },
    {
      id: "web-development",
      title: "Web Development",
      description: "Create responsive, scalable web solutions including e-commerce platforms, web portals, and full-stack applications with cutting-edge technologies.",
      services: [
        "E-Commerce Websites",
        "Web Portals",
        "Frontend Development",
        "Backend Development",
        "Full-Stack Development",
        "Progressive Web Apps"
      ],
      link: "/ecommerce-website-development"
    },
    {
      id: "custom-software-development",
      title: "Custom Software Development",
      description: "Enterprise-grade solutions including ERP systems, CRM platforms, CMS, and HRM solutions designed specifically for your business requirements.",
      services: [
        "ERP Solutions",
        "CRM Platforms",
        "CMS Development",
        "HRM Systems",
        "Business Process Automation",
        "Legacy System Modernization"
      ],
      link: "/erp-solution"
    },
    {
      id: "cloud-services",
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and solutions including application development, migration strategies, and 24/7 support with AWS, Azure, and Google Cloud.",
      services: [
        "Cloud Application Development",
        "Cloud Architecture Design",
        "Cloud Migration Services",
        "24/7 Monitoring & Support",
        "Database Management",
        "Disaster Recovery"
      ],
      link: "/cloud-application-development"
    },
    {
      id: "artificial-intelligence",
      title: "Artificial Intelligence",
      description: "Transform your business with AI-powered solutions including generative AI models, natural language processing, and autonomous AI agents.",
      services: [
        "Generative AI Solutions",
        "Natural Language Processing",
        "AI Agent Development",
        "Predictive Analytics",
        "Computer Vision",
        "Model Training & Optimization"
      ],
      link: "/generative-ai"
    },
    {
      id: "design-strategy",
      title: "Design & Strategy",
      description: "Strategic design solutions combining user research, UI/UX design, and business strategy to deliver impactful digital experiences that drive growth.",
      services: [
        "UI/UX Design",
        "User Research & Testing",
        "Wireframing & Prototyping",
        "Design Systems",
        "Brand Strategy",
        "CX Optimization"
      ],
      link: "/solutions"
    }
  ];

  const Placeholder = () => {
    const gradients: Record<string, string> = {
      "mobile0": "linear-gradient(135deg, #FF6B6B33 0%, #FF6B6B11 100%)",
      "web0": "linear-gradient(135deg, #4ECDC433 0%, #4ECDC411 100%)",
      "soft0": "linear-gradient(135deg, #95E1D333 0%, #95E1D311 100%)",
      "cloud0": "linear-gradient(135deg, #F3818133 0%, #F3818111 100%)",
      "ai0": "linear-gradient(135deg, #AA96DA33 0%, #AA96DA11 100%)",
      "design0": "linear-gradient(135deg, #FCBAD333 0%, #FCBAD311 100%)"
    };

    const gradientKeys = Object.keys(gradients);
    
    return (
      <div className="w-full flex items-center justify-center">
        <div 
          className="rounded-2xl shadow-lg w-full overflow-hidden" 
          style={{ 
            background: COLORS.card, 
            aspectRatio: '1', 
            maxWidth: '360px', 
            backgroundImage: gradients[gradientKeys[Math.floor(Math.random() * gradientKeys.length)]] 
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center px-4">
              <h3 className="text-2xl font-bold" style={{ color: COLORS.primary }}>
                Service Area
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                Professional Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const getSVGComponent = (id: string) => {
    const svgMap: Record<string, React.FC<any>> = {
      "mobile-app-development": MobileAppSVG,
      "web-development": WebDevelopmentSVG,
      "custom-software-development": CustomSoftwareSVG,
      "cloud-services": CloudServicesSVG,
      "artificial-intelligence": ArtificialIntelligenceSVG,
      "design-strategy": DesignStrategySVG,
    };
    return svgMap[id] || Placeholder;
  };

  return (
    <div style={{ background: COLORS.bg, color: COLORS.white, minHeight: "100vh" }}>
      {/* Header with scroll progress */}
      <header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-300"
        style={{ 
          background: scrolled ? "rgba(0,0,0,0.65)" : "rgba(0,0,0,0.45)", 
          borderBottom: "1px solid rgba(255,255,255,0.03)" 
        }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
              }}
            />
            <div>
              <div className="text-sm font-bold" style={{ color: COLORS.white }}>
                Axonary
              </div>
              <div className="text-xs" style={{ color: COLORS.textMuted }}>
                Services
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
            <a href="#mobile-app-development" className="hover:text-white transition-colors">Mobile</a>
            <a href="#web-development" className="hover:text-white transition-colors">Web</a>
            <a href="#custom-software-development" className="hover:text-white transition-colors">Software</a>
            <a href="#cloud-services" className="hover:text-white transition-colors">Cloud</a>
            <a href="#artificial-intelligence" className="hover:text-white transition-colors">AI</a>
            <a href="#design-strategy" className="hover:text-white transition-colors">Design</a>
            <Link to="/contact" className="ml-4 inline-block px-4 py-2 rounded-full transition-all duration-300 hover:scale-105" style={{ background: COLORS.primary, color: COLORS.white }}>
              Get Started
            </Link>
          </nav>
        </div>

        {/* Scroll progress bar */}
        <div className="h-[3px] w-full" style={{ background: "rgba(255,255,255,0.02)" }}>
          <div style={{
            height: "3px",
            width: `${progress}%`,
            transition: "width 120ms linear",
            background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary})`
          }} />
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-[72vh] flex items-center pt-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block rounded-full px-4 py-1 text-sm font-medium mb-6" style={{ background: `${COLORS.secondary}33`, color: COLORS.white }}>
              Complete Digital Solutions
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Services Designed for{" "}
              <span style={{ color: COLORS.primary }}>Your Growth</span>
            </h1>

            <p className="text-lg text-gray-300 mb-8 max-w-2xl">
              From mobile apps and web development to cloud solutions and AI-powered systems, we deliver comprehensive digital transformation services.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="#mobile-app-development" className="px-6 py-3 rounded-full font-semibold inline-block transition-all duration-300 hover:scale-105" style={{ background: COLORS.primary, color: COLORS.white }}>
                Explore Services
              </a>
              <Link to="/contact" className="px-6 py-3 rounded-full border border-[rgba(255,255,255,0.06)] transition-all duration-300 hover:border-[rgba(255,255,255,0.15)]" style={{ color: COLORS.textMuted }}>
                Get Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Split Sections */}
      <main>
        {serviceCategories.map((category, idx) => {
          const isLeftImage = idx % 2 === 0;

          return (
            <section key={category.id} id={category.id} className="py-20 md:py-28 px-6">
              <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-stretch">
                  {isLeftImage ? (
                    <>
                      {/* Image Left */}
                      <div className="md:col-span-6 flex items-center justify-center">
                        {React.createElement(getSVGComponent(category.id), {
                          width: 360,
                          height: 360,
                          className: "w-full max-w-sm",
                        })}
                      </div>

                      {/* Content Right */}
                      <div className="md:col-span-6 flex items-center">
                        <motion.div 
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                          className="w-full max-w-xl"
                        >
                          <div className="inline-block rounded-full px-3 py-1 text-sm font-medium mb-4" style={{ background: `${COLORS.secondary}22`, color: COLORS.white }}>
                            {category.title.split(" ")[0]}
                          </div>

                          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                            {category.title}
                          </h2>

                          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                            {category.description}
                          </p>

                          <div className="space-y-3 mb-8">
                            {category.services.map((service, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-center gap-3"
                              >
                                <span style={{ color: COLORS.primary }} className="text-xl">✓</span>
                                <span className="text-gray-300">{service}</span>
                              </motion.div>
                            ))}
                          </div>

                          <div className="flex items-center gap-3">
                            <Link to={category.link} className="px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105" style={{ background: COLORS.primary, color: COLORS.white }}>
                              Learn More
                            </Link>
                            <Link to="/contact" className="px-6 py-3 rounded-full border border-[rgba(255,255,255,0.06)] transition-all duration-300 hover:border-[rgba(255,255,255,0.15)]" style={{ color: COLORS.textMuted }}>
                              Get Started
                            </Link>
                          </div>
                        </motion.div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Content Left */}
                      <div className="md:col-span-6 flex items-center">
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                          className="w-full max-w-xl"
                        >
                          <div className="inline-block rounded-full px-3 py-1 text-sm font-medium mb-4" style={{ background: `${COLORS.secondary}22`, color: COLORS.white }}>
                            {category.title.split(" ")[0]}
                          </div>

                          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                            {category.title}
                          </h2>

                          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                            {category.description}
                          </p>

                          <div className="space-y-3 mb-8">
                            {category.services.map((service, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-center gap-3"
                              >
                                <span style={{ color: COLORS.primary }} className="text-xl">✓</span>
                                <span className="text-gray-300">{service}</span>
                              </motion.div>
                            ))}
                          </div>

                          <div className="flex items-center gap-3">
                            <Link to={category.link} className="px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105" style={{ background: COLORS.primary, color: COLORS.white }}>
                              Learn More
                            </Link>
                            <Link to="/contact" className="px-6 py-3 rounded-full border border-[rgba(255,255,255,0.06)] transition-all duration-300 hover:border-[rgba(255,255,255,0.15)]" style={{ color: COLORS.textMuted }}>
                              Get Started
                            </Link>
                          </div>
                        </motion.div>
                      </div>

                      {/* Image Right */}
                      <div className="md:col-span-6 flex items-center justify-center">
                        {React.createElement(getSVGComponent(category.id), {
                          width: 360,
                          height: 360,
                          className: "w-full max-w-sm",
                        })}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </main>

      {/* CTA Footer Bar */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-[92%] md:w-[720px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="rounded-2xl p-4 flex items-center justify-between shadow-xl"
          style={{
            background: `linear-gradient(90deg, rgba(92,54,147,0.12), rgba(71,42,113,0.06))`,
            border: "1px solid rgba(255,255,255,0.03)",
            backdropFilter: "blur(10px)"
          }}
        >
          <div>
            <div className="text-sm font-semibold" style={{ color: COLORS.white }}>Ready to get started?</div>
            <div className="text-xs" style={{ color: COLORS.textMuted }}>Transform your business today</div>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/contact" className="px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105" style={{ background: COLORS.primary, color: COLORS.white }}>
              Let's Talk
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-20 py-10 border-t border-[rgba(255,255,255,0.03)]">
        <div className="container mx-auto px-6 text-center text-sm" style={{ color: COLORS.textMuted }}>
          © {new Date().getFullYear()} Axonary — Complete Digital Solutions
        </div>
      </footer>
    </div>
  );
};

export default Services;
