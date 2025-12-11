import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AndroidDeveloperSVG, AndroidNativeSVG, MaterialDesignSVG, AndroidTestingSVG, PlayStoreSVG } from "../../components/StaffSectionSVGs";

const COLORS = {
  primary: "#5C3693",
  secondary: "#472A71",
  backgroundColor: "#000000",
  cardBg: "#0b0b0d",
  textMuted: "#BDB7D6",
  white: "#FFFFFF",
};

const sections = [
  {
    title: "Native Android Development Expertise",
    description: "Our Android developers are certified and experienced in building scalable, high-performance applications using Kotlin and Java. With a proven track record of delivering 50+ successful Android applications, our team brings expertise in native development, API integration, and platform optimization.",
    imgQuery: "kotlin java programming android",
    features: ["Native Android Development", "Kotlin & Java Programming", "High Performance Apps"]
  },
  {
    title: "Material Design & Modern Architecture",
    description: "We implement Material Design 3 principles and modern architecture patterns like MVVM and Clean Architecture. This ensures your apps are not only beautiful and intuitive but also maintainable and scalable for future enhancements.",
    imgQuery: "material design ui ux interface",
    features: ["Material Design Implementation", "Clean Architecture", "MVVM Pattern"]
  },
  {
    title: "Performance, Security & Testing",
    description: "Every app we develop is optimized for performance with minimal battery drain and fast load times. We implement comprehensive testing (unit, integration, and UI testing) and industry-standard security practices including encryption and OWASP compliance.",
    imgQuery: "software testing cybersecurity performance",
    features: ["Performance Optimization", "Security Implementation", "Comprehensive Testing"]
  },
  {
    title: "Google Play Store & Ongoing Support",
    description: "We handle complete Google Play Store submission, optimization, and ongoing maintenance. Our post-launch support includes feature updates, bug fixes, and continuous monitoring to ensure your app stays competitive and secure in the evolving Android ecosystem.",
    imgQuery: "app store deployment mobile launch",
    features: ["Play Store Submission", "App Maintenance", "Feature Updates"]
  }
];

const HireAndroidAppDeveloper = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
      {/* Fixed Header */}
      <header 
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{ background: "rgba(0,0,0,0.7)", borderColor: "rgba(255,255,255,0.03)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold" style={{ color: COLORS.primary }}>
            Axonary
          </Link>
          <nav className="flex gap-8 text-xs md:text-sm">
            <a href="#hero" className="hover:text-purple-400 transition">Home</a>
            <a href="#services" className="hover:text-purple-400 transition">Services</a>
            <a href="#why-us" className="hover:text-purple-400 transition">Why Us</a>
            <Link to="/contact" className="px-4 py-2 rounded-full" style={{background: COLORS.primary, color: COLORS.white}}>
              Hire Now
            </Link>
          </nav>
        </div>
        {isSticky && (
          <div 
            className="h-1" 
            style={{
              background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary})`,
              width: `${scrollProgress}%`,
              transition: "width 120ms linear"
            }}
          />
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center pt-24" style={{background: COLORS.backgroundColor}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-full px-4 py-1 text-sm font-medium mb-6" style={{background: `${COLORS.secondary}33`, color: COLORS.white}}>
                Expert Developers • Native Android • Certified Team
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Hire Android App
                <span style={{color: COLORS.primary}}> Developers</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Build robust, high-performance Android applications with our certified developers. Expert in Kotlin, Java, and modern architecture patterns. Proven track record of 50+ successful projects.
              </p>
              <div className="flex gap-4">
                <Link 
                  to="/contact"
                  className="px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
                  style={{background: COLORS.primary, color: COLORS.white}}
                >
                  Start Your Project
                </Link>
                <a 
                  href="#services"
                  className="px-8 py-4 rounded-full font-semibold border transition-all hover:bg-white/10"
                  style={{borderColor: COLORS.primary, color: COLORS.primary}}
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <AndroidDeveloperSVG width={300} height={300} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <section id="services" style={{background: COLORS.backgroundColor}}>
        {sections.map((section, idx) => {
          const isLeftImage = idx % 2 === 0;
          return (
            <div key={idx} className="py-20 md:py-28 border-b border-gray-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  {isLeftImage ? (
                    <>
                      <div className="flex justify-center">
                        {idx === 0 && <AndroidNativeSVG width={360} height={360} className="w-full max-w-md rounded-2xl" />}
                        {idx === 1 && <MaterialDesignSVG width={360} height={360} className="w-full max-w-md rounded-2xl" />}
                        {idx === 2 && <AndroidTestingSVG width={360} height={360} className="w-full max-w-md rounded-2xl" />}
                        {idx === 3 && <PlayStoreSVG width={360} height={360} className="w-full max-w-md rounded-2xl" />}
                      </div>
                      <div className="flex justify-center">
                        <div style={{textAlign: "left"}}>
                          <div className="inline-block rounded-full px-4 py-1 text-sm font-medium mb-4" style={{background: `${COLORS.secondary}33`, color: COLORS.white}}>
                            Expert Feature
                          </div>
                          <h3 className="text-4xl font-bold mb-6">{section.title}</h3>
                          <p className="text-lg text-gray-300 mb-8">{section.description}</p>
                          <div className="space-y-3">
                            {section.features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-3">
                                <span style={{color: COLORS.primary}} className="text-xl">✓</span>
                                <span className="text-gray-300">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-center">
                        <div style={{textAlign: "left"}}>
                          <div className="inline-block rounded-full px-4 py-1 text-sm font-medium mb-4" style={{background: `${COLORS.secondary}33`, color: COLORS.white}}>
                            Expert Feature
                          </div>
                          <h3 className="text-4xl font-bold mb-6">{section.title}</h3>
                          <p className="text-lg text-gray-300 mb-8">{section.description}</p>
                          <div className="space-y-3">
                            {section.features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-3">
                                <span style={{color: COLORS.primary}} className="text-xl">✓</span>
                                <span className="text-gray-300">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        {idx === 0 && <AndroidNativeSVG width={360} height={360} className="w-full max-w-md rounded-2xl" />}
                        {idx === 1 && <MaterialDesignSVG width={360} height={360} className="w-full max-w-md rounded-2xl" />}
                        {idx === 2 && <AndroidTestingSVG width={360} height={360} className="w-full max-w-md rounded-2xl" />}
                        {idx === 3 && <PlayStoreSVG width={360} height={360} className="w-full max-w-md rounded-2xl" />}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20 md:py-28" style={{background: COLORS.backgroundColor}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Why Choose Our Developers?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our Android developers are certified professionals with years of experience building production-grade applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {title: "Certified & Experienced", desc: "Google-certified Android developers with 8+ years of experience"},
              {title: "Performance Focused", desc: "Optimize for speed, battery life, and smooth user experience"},
              {title: "Secure by Design", desc: "Implement OWASP standards and encryption best practices"},
              {title: "Agile & Flexible", desc: "Work with agile methodologies for rapid iteration"},
              {title: "Quality Assurance", desc: "Comprehensive testing across devices and OS versions"},
              {title: "Post-Launch Support", desc: "Ongoing maintenance, updates, and feature enhancements"}
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-xl border" style={{background: COLORS.cardBg, borderColor: `${COLORS.primary}22`}}>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 md:py-28 border-t border-gray-800" style={{background: COLORS.backgroundColor}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-8">Ready to Hire Android Developers?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Let's discuss your Android app development project and build something exceptional together
          </p>
          <div className="flex gap-6 justify-center">
            <Link 
              to="/contact"
              className="px-10 py-4 rounded-full font-semibold transition-all hover:scale-105"
              style={{background: COLORS.primary, color: COLORS.white}}
            >
              Get Started Now
            </Link>
            <a 
              href="tel:+1234567890"
              className="px-10 py-4 rounded-full font-semibold border transition-all hover:bg-white/10"
              style={{borderColor: COLORS.primary, color: COLORS.primary}}
            >
              Call Us
            </a>
          </div>
        </div>
      </section>

      <div className="fixed bottom-8 right-8 z-40">
        <Link to="/contact" className="px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition inline-block" style={{backgroundColor: COLORS.primary, color: "white"}}>
          Hire Now
        </Link>
      </div>
    </div>
  );
};

export default HireAndroidAppDeveloper;
