import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  AndroidDeveloperSVG,
  FlutterDeveloperSVG,
  SoftwareDeveloperSVG,
  GraphicDesignerSVG,
  ContentWriterSVG,
  IOSDeveloperSVG,
  NodeJSDeveloperSVG,
  JavaDeveloperSVG,
  WebDeveloperSVG,
  SMMExpertSVG,
  SEOExpertSVG,
  PPCExpertSVG,
} from "../../components/StaffSectionSVGs";

const COLORS = {
  primary: "#5C3693",
  secondary: "#472A71",
  bg: "#000000",
  card: "#0b0b0d",
  textMuted: "#BDB7D6",
  white: "#FFFFFF",
};

const StaffAugmentation: React.FC = () => {
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

  const staffCategories = [
    {
      id: "android-app-developer",
      title: "Hire Android App Developer",
      description: "Expert Android developers who build high-performance mobile applications using Java and Kotlin with modern architecture, smooth user experiences, and robust functionality.",
      services: [
        "Android App Development",
        "Kotlin Development",
        "Material Design UI",
        "Firebase Integration",
        "Android API Development",
        "App Performance Optimization"
      ],
      link: "/hire-android-app-developer"
    },
    {
      id: "ios-app-developer",
      title: "Hire iOS App Developer",
      description: "Experienced iOS developers specializing in Swift development, creating elegant and performant applications for iPhone and iPad with beautiful user interfaces.",
      services: [
        "iOS App Development",
        "Swift Development",
        "SwiftUI Design",
        "Core Data Integration",
        "Push Notifications",
        "App Store Optimization"
      ],
      link: "/hire-ios-app-developer"
    },
    {
      id: "nodejs-developer",
      title: "Hire Node Js Developer",
      description: "Proficient Node.js developers creating fast, scalable server-side applications and real-time solutions with modern JavaScript frameworks and enterprise patterns.",
      services: [
        "Node.js Backend Development",
        "Express.js Applications",
        "Real-time Applications",
        "WebSocket Integration",
        "Database Integration",
        "API Development"
      ],
      link: "/hire-nodejs-developer"
    },
    {
      id: "flutter-developer",
      title: "Hire Flutter Developer",
      description: "Expert Flutter developers who build high-performance cross-platform mobile applications for iOS and Android with beautiful UI and smooth user experiences.",
      services: [
        "Flutter App Development",
        "Cross-Platform Solutions",
        "Firebase Integration",
        "REST API Development",
        "UI/UX Implementation",
        "Performance Optimization"
      ],
      link: "/hire-flutter-developer"
    },
    {
      id: "java-developer",
      title: "Hire Java Developer",
      description: "Experienced Java developers specializing in enterprise-level applications, microservices, and robust backend systems with clean code architecture.",
      services: [
        "Enterprise Java Development",
        "Spring Boot Development",
        "Microservices Architecture",
        "Database Design",
        "RESTful API Development",
        "Code Optimization"
      ],
      link: "/hire-java-developer"
    },
    {
      id: "website-developer",
      title: "Hire Website Developer",
      description: "Skilled website developers creating responsive, scalable web solutions including frontend, backend, and full-stack applications with cutting-edge technologies.",
      services: [
        "Responsive Web Design",
        "Full-Stack Development",
        "Frontend Development",
        "Backend Development",
        "Database Design",
        "SEO Optimization"
      ],
      link: "/hire-website-developer"
    },
    {
      id: "smm-expert",
      title: "Hire Social Media Marketing (SMM) Expert",
      description: "Experienced SMM experts creating engaging social media campaigns, content strategies, and community management to boost your brand presence and engagement.",
      services: [
        "Social Media Strategy",
        "Content Creation",
        "Community Management",
        "Campaign Management",
        "Analytics & Reporting",
        "Brand Building"
      ],
      link: "/hire-smm-expert"
    },
    {
      id: "seo-expert",
      title: "Hire Search Engine Optimizer",
      description: "Expert SEO professionals optimizing websites for search engines, improving rankings, and driving organic traffic through proven strategies and technical expertise.",
      services: [
        "On-Page SEO",
        "Technical SEO",
        "Link Building",
        "Keyword Research",
        "Content Optimization",
        "SEO Analytics"
      ],
      link: "/hire-seo-expert"
    },
    {
      id: "graphic-designer",
      title: "Hire Graphic Designer",
      description: "Talented graphic designers creating stunning visual content including logos, branding, UI design, and marketing materials that communicate your brand message effectively.",
      services: [
        "Logo Design",
        "Brand Identity",
        "UI/UX Design",
        "Print Design",
        "Digital Assets",
        "Visual Branding"
      ],
      link: "/hire-graphic-designer"
    },
    {
      id: "ppc-expert",
      title: "Hire Pay-Per-Click (PPC) Expert",
      description: "Skilled PPC specialists managing Google Ads, Facebook Ads, and other platforms to maximize ROI, increase conversions, and drive targeted traffic to your business.",
      services: [
        "Google Ads Management",
        "Facebook Ads",
        "Campaign Strategy",
        "Bid Management",
        "Conversion Optimization",
        "Performance Analytics"
      ],
      link: "/hire-ppc-expert"
    },
    {
      id: "custom-software-developer",
      title: "Hire Custom Software Developer",
      description: "Expert developers building tailored enterprise solutions including ERP systems, CRM platforms, and custom applications designed for your specific business needs.",
      services: [
        "ERP Development",
        "CRM Development",
        "Business Automation",
        "Custom Solutions",
        "Legacy Modernization",
        "System Integration"
      ],
      link: "/hire-custom-software-developer"
    },
    {
      id: "content-writer",
      title: "Hire a Content Writer",
      description: "Professional content writers creating engaging, SEO-optimized content for websites, blogs, social media, and marketing materials that drive engagement and conversions.",
      services: [
        "Blog Writing",
        "SEO Content",
        "Copywriting",
        "Social Media Content",
        "Email Marketing",
        "Technical Writing"
      ],
      link: "/hire-content-writer"
    }
  ];

  const getSVGComponent = (id: string) => {
    const svgMap: Record<string, React.FC<any>> = {
      "android-app-developer": AndroidDeveloperSVG,
      "ios-app-developer": IOSDeveloperSVG,
      "nodejs-developer": NodeJSDeveloperSVG,
      "flutter-developer": FlutterDeveloperSVG,
      "java-developer": JavaDeveloperSVG,
      "website-developer": WebDeveloperSVG,
      "smm-expert": SMMExpertSVG,
      "seo-expert": SEOExpertSVG,
      "graphic-designer": GraphicDesignerSVG,
      "ppc-expert": PPCExpertSVG,
      "custom-software-developer": SoftwareDeveloperSVG,
      "content-writer": ContentWriterSVG,
    };
    return svgMap[id];
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
                Staff Augmentation
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-4 text-sm" style={{ color: COLORS.textMuted }}>
            <a href="#android-app-developer" className="hover:text-white transition-colors text-xs">Android</a>
            <a href="#ios-app-developer" className="hover:text-white transition-colors text-xs">iOS</a>
            <a href="#nodejs-developer" className="hover:text-white transition-colors text-xs">Node.js</a>
            <a href="#flutter-developer" className="hover:text-white transition-colors text-xs">Flutter</a>
            <a href="#java-developer" className="hover:text-white transition-colors text-xs">Java</a>
            <a href="#website-developer" className="hover:text-white transition-colors text-xs">Web</a>
            <a href="#smm-expert" className="hover:text-white transition-colors text-xs">SMM</a>
            <a href="#seo-expert" className="hover:text-white transition-colors text-xs">SEO</a>
            <Link to="/contact" className="ml-2 inline-block px-3 py-1 rounded-full transition-all duration-300 hover:scale-105 text-xs" style={{ background: COLORS.primary, color: COLORS.white }}>
              Hire
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
              Build Your Dream Team
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Expert Developers{" "}
              <span style={{ color: COLORS.primary }}>On Demand</span>
            </h1>

            <p className="text-lg text-gray-300 mb-8 max-w-2xl">
              Hire specialized developers across multiple technologies. Scale your team with experienced professionals who deliver exceptional results.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="#flutter-developers" className="px-6 py-3 rounded-full font-semibold inline-block transition-all duration-300 hover:scale-105" style={{ background: COLORS.primary, color: COLORS.white }}>
                Browse Talents
              </a>
              <Link to="/contact" className="px-6 py-3 rounded-full border border-[rgba(255,255,255,0.06)] transition-all duration-300 hover:border-[rgba(255,255,255,0.15)]" style={{ color: COLORS.textMuted }}>
                Get Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Staff Categories Split Sections */}
      <main>
        {staffCategories.map((category, idx) => {
          const isLeftImage = idx % 2 === 0;
          const SVGComponent = getSVGComponent(category.id);

          return (
            <section key={category.id} id={category.id} className="py-20 md:py-28 px-6">
              <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-stretch">
                  {isLeftImage ? (
                    <>
                      {/* Image Left */}
                      <div className="md:col-span-6 flex items-center justify-center">
                        {SVGComponent && React.createElement(SVGComponent, {
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
                              View Profile
                            </Link>
                            <Link to="/contact" className="px-6 py-3 rounded-full border border-[rgba(255,255,255,0.06)] transition-all duration-300 hover:border-[rgba(255,255,255,0.15)]" style={{ color: COLORS.textMuted }}>
                              Hire Developer
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
                              View Profile
                            </Link>
                            <Link to="/contact" className="px-6 py-3 rounded-full border border-[rgba(255,255,255,0.06)] transition-all duration-300 hover:border-[rgba(255,255,255,0.15)]" style={{ color: COLORS.textMuted }}>
                              Hire Developer
                            </Link>
                          </div>
                        </motion.div>
                      </div>

                      {/* Image Right */}
                      <div className="md:col-span-6 flex items-center justify-center">
                        {SVGComponent && React.createElement(SVGComponent, {
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
            <div className="text-sm font-semibold" style={{ color: COLORS.white }}>Ready to hire top talent?</div>
            <div className="text-xs" style={{ color: COLORS.textMuted }}>Connect with expert developers today</div>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/contact" className="px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105" style={{ background: COLORS.primary, color: COLORS.white }}>
              Get Started
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-20 py-10 border-t border-[rgba(255,255,255,0.03)]">
        <div className="container mx-auto px-6 text-center text-sm" style={{ color: COLORS.textMuted }}>
          © {new Date().getFullYear()} Axonary — Expert Staff Augmentation Services
        </div>
      </footer>
    </div>
  );
};

export default StaffAugmentation;
