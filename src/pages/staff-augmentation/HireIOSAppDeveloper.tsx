import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  IOSDeveloperSVG,
  AndroidNativeSVG,
  MaterialDesignSVG,
  AndroidTestingSVG,
  PlayStoreSVG,
} from "../../components/StaffSectionSVGs";

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
    title: "Native iOS Development with Swift",
    description: "We use the latest Swift technology and SwiftUI to create modern, responsive iOS applications with cutting-edge features and seamless user experiences.",
    imgQuery: "swift programming ios development",
    features: ["Native iOS Development", "Swift & Objective-C", "SwiftUI Implementation"]
  },
  {
    title: "Complete Apple Ecosystem Integration",
    description: "Seamless integration with CloudKit, HealthKit, HomeKit, and other Apple services for a unified experience across all Apple devices.",
    imgQuery: "apple ecosystem integration",
    features: ["CloudKit Integration", "Apple Services", "Multi-device Sync"]
  },
  {
    title: "App Store Optimization & Submission",
    description: "We handle App Store guidelines compliance, submission process, and optimization to ensure your app gets maximum visibility and downloads.",
    imgQuery: "app store optimization deployment",
    features: ["App Store Optimization", "App Store Submission", "Performance Monitoring"]
  },
  {
    title: "Ongoing Support & Maintenance",
    description: "Continuous monitoring, updates for new iOS versions, bug fixes, and feature enhancements to keep your app running smoothly.",
    imgQuery: "app maintenance support ios updates",
    features: ["iOS Version Updates", "Bug Fixes & Patches", "Performance Monitoring"]
  }
];

const HireIOSAppDeveloper = () => {
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
                Expert Developers • Native iOS • Certified Team
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Hire iOS App
                <span style={{color: COLORS.primary}}> Developers</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Build stunning, high-performance iOS applications with our certified developers. Expert in Swift, SwiftUI, and Apple ecosystem. Proven track record of 50+ successful projects.
              </p>
              <div className="flex gap-4">
                <Link to="/contact" className="px-8 py-3 rounded-lg font-semibold" style={{background: COLORS.primary, color: COLORS.white}}>
                  Start Project
                </Link>
                <a href="#services" className="px-8 py-3 rounded-lg font-semibold border" style={{borderColor: COLORS.primary, color: COLORS.primary}}>
                  Learn More
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <IOSDeveloperSVG width={300} height={300} className="w-full max-w-md rounded-2xl" />
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-opacity-50" style={{backgroundColor: `${COLORS.backgroundColor}dd`}}>
        <div className="max-w-7xl mx-auto">
          {sections.map((section, idx) => {
            const isLeftImage = idx % 2 === 0;
            return (
              <div key={idx} className="py-20 border-b border-gray-800">
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
            );
          })}
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-16">Why Choose Our iOS Developers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {title: "Apple Certified", desc: "Team certified in latest iOS technologies"},
              {title: "100% Uptime", desc: "Reliable, crash-free applications"},
              {title: "User-Focused", desc: "Design centered on user experience"},
              {title: "Swift Expertise", desc: "Modern Swift & SwiftUI specialists"},
              {title: "Quick Delivery", desc: "Efficient development cycles"},
              {title: "Affordable", desc: "Competitive pricing for quality work"}
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-lg border" style={{borderColor: COLORS.primary, backgroundColor: `${COLORS.backgroundColor}99`}}>
                <h4 className="text-xl font-bold mb-2" style={{color: COLORS.primary}}>{item.title}</h4>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-opacity-50" style={{backgroundColor: `${COLORS.primary}20`}}>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Launch Your iOS App?</h3>
          <p className="text-lg text-gray-400 mb-8">
            Hire our expert iOS developers and bring your app idea to life with world-class quality.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-12 py-4 rounded-lg font-semibold text-lg" style={{backgroundColor: COLORS.primary, color: "white"}}>Start Project</button>
            <button className="px-12 py-4 rounded-lg font-semibold text-lg border" style={{borderColor: COLORS.primary, color: COLORS.primary}}>Schedule Call</button>
          </div>
        </div>
      </section>

      {/* Floating CTA Bar */}
      <div className="fixed bottom-8 right-8 z-40">
        <button className="px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition" style={{backgroundColor: COLORS.primary, color: "white"}}>
          Hire Now
        </button>
      </div>
    </div>
  );
};

export default HireIOSAppDeveloper;
