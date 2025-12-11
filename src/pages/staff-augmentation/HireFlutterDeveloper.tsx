import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FlutterDeveloperSVG, FlutterCrossplatformSVG, FlutterUIDesignSVG, FirebaseIntegrationSVG, AppDeploymentSVG } from "../../components/StaffSectionSVGs";

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
    title: "Single Codebase, Multiple Platforms",
    description: "Write once, deploy everywhere. Our developers use Dart and Flutter to create apps for iOS, Android, and web with one codebase, reducing development time and costs.",
    imgQuery: "flutter cross-platform development",
    features: ["Single Codebase", "iOS & Android", "Fast Development"]
  },
  {
    title: "Beautiful Material & Cupertino Design",
    description: "Create stunning user experiences with Material Design and Cupertino widgets. Our designers ensure pixel-perfect, responsive interfaces across all platforms.",
    imgQuery: "flutter material design ui interface",
    features: ["Material Design", "Cupertino UI", "Responsive Layout"]
  },
  {
    title: "Firebase & Backend Integration",
    description: "Seamless Firebase integration for real-time databases, authentication, cloud functions, and hosting. Quick backend setup without complex infrastructure.",
    imgQuery: "firebase backend integration flutter",
    features: ["Firebase Realtime", "Authentication", "Cloud Functions"]
  },
  {
    title: "App Store & Play Store Deployment",
    description: "We handle app store submissions, store listing optimization, and post-launch management. Complete guidance from development to millions of downloads.",
    imgQuery: "app deployment app store play store",
    features: ["Store Submission", "App Marketing", "Launch Support"]
  }
];

const HireFlutterDeveloper = () => {
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

      <section id="hero" className="min-h-screen flex items-center pt-24" style={{background: COLORS.backgroundColor}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-full px-4 py-1 text-sm font-medium mb-6" style={{background: `${COLORS.secondary}33`, color: COLORS.white}}>
                Expert Developers • Cross-Platform • Certified Team
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Hire Flutter
                <span style={{color: COLORS.primary}}> Developers</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Build beautiful, fast apps for iOS and Android with a single codebase. Our Flutter experts deliver high-performance applications quickly and cost-effectively.
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
              <FlutterDeveloperSVG width={300} height={300} />
            </div>
          </div>
        </div>
      </section>

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
                        {idx === 0 && <FlutterCrossplatformSVG width={360} height={360} className="w-full max-w-md" />}
                        {idx === 1 && <FlutterUIDesignSVG width={360} height={360} className="w-full max-w-md" />}
                        {idx === 2 && <FirebaseIntegrationSVG width={360} height={360} className="w-full max-w-md" />}
                        {idx === 3 && <AppDeploymentSVG width={360} height={360} className="w-full max-w-md" />}
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
                        {idx === 0 && <FlutterCrossplatformSVG width={360} height={360} className="w-full max-w-md" />}
                        {idx === 1 && <FlutterUIDesignSVG width={360} height={360} className="w-full max-w-md" />}
                        {idx === 2 && <FirebaseIntegrationSVG width={360} height={360} className="w-full max-w-md" />}
                        {idx === 3 && <AppDeploymentSVG width={360} height={360} className="w-full max-w-md" />}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <section id="why-us" className="py-20 md:py-28" style={{background: COLORS.backgroundColor}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Why Choose Our Flutter Developers?</h2>
            <p className="text-lg text-gray-400">Expert team with proven track record in cross-platform app development</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {title: "Cross-Platform Masters", desc: "One codebase for iOS, Android, and Web"},
              {title: "Fast & Hot Reload", desc: "Instant updates during development"},
              {title: "Beautiful UI", desc: "Material Design & Cupertino perfection"},
              {title: "Performance Optimized", desc: "60+ FPS, smooth animations"},
              {title: "Firebase Experts", desc: "Seamless backend integration"},
              {title: "Cost Effective", desc: "Lower development costs vs native"}
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-xl border" style={{borderColor: `${COLORS.primary}33`, backgroundColor: `${COLORS.cardBg}cc`}}>
                <h4 className="text-xl font-bold mb-3" style={{color: COLORS.primary}}>{item.title}</h4>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="py-20 md:py-28" style={{background: `${COLORS.primary}10`}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Launch Your Flutter App?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Our expert Flutter developers will turn your vision into reality. Fast, beautiful, cost-effective.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact" className="px-8 py-4 rounded-lg font-semibold text-lg inline-block" style={{background: COLORS.primary, color: COLORS.white}}>
              Start Your Project
            </Link>
            <a href="#services" className="px-8 py-4 rounded-lg font-semibold text-lg border inline-block" style={{borderColor: COLORS.primary, color: COLORS.primary}}>
              Explore Services
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

export default HireFlutterDeveloper;
