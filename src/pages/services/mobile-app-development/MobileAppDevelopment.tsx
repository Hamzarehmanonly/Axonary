
// MobileAppDevelopment.tsx - Mobile App Development Overview
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AndroidAppSVG,
  iOSAppSVG,
  FlutterAppSVG,
  ReactNativeAppSVG,
  CrossPlatformAppSVG,
  CloudMobileAppSVG,
  IoTMobileAppSVG,
} from "../../../components/MobileAppDevelopmentSVGs";

const COLORS = {
  primary: "#5C3693",
  secondary: "#472A71",
  bg: "#000000",
  card: "#0b0b0d",
  glass: "rgba(255,255,255,0.03)",
  textMuted: "#BDB7D6",
  white: "#FFFFFF",
};

const mobileServices = [
  {
    id: "android",
    title: "Android App Development",
    desc: "Native Android apps built with Kotlin and Java. High-performance, stable, and scalable products for Google Play.",
    link: "/services/mobile-app-development/android",
    icon: "🤖",
  },
  {
    id: "ios",
    title: "iOS App Development",
    desc: "Premium iOS apps with Swift and Objective-C. Pixel-perfect design and lightning-fast performance for the App Store.",
    link: "/services/mobile-app-development/ios",
    icon: "🍎",
  },
  {
    id: "flutter",
    title: "Flutter App Development",
    desc: "Cross-platform apps with beautiful UI and incredible performance. One codebase, infinite possibilities.",
    link: "/services/mobile-app-development/flutter",
    icon: "🎨",
  },
  {
    id: "react-native",
    title: "React Native App Development",
    desc: "JavaScript-powered mobile apps that run on iOS and Android. Fast development, unified experience.",
    link: "/services/mobile-app-development/react-native",
    icon: "⚛️",
  },
  {
    id: "cross-platform",
    title: "Cross-Platform App Development",
    desc: "Unified apps across all platforms with Xamarin and native bridges. Code reuse, maximum reach.",
    link: "/services/mobile-app-development/cross-platform",
    icon: "🌐",
  },
  {
    id: "cloud-mobile",
    title: "Cloud Mobile App Development",
    desc: "Cloud-native mobile apps with real-time sync, offline capabilities, and enterprise scalability.",
    link: "/services/mobile-app-development/cloud-mobile",
    icon: "☁️",
  },
  {
    id: "iot",
    title: "IoT Mobile App Development",
    desc: "Next-generation IoT apps for device connectivity, real-time control, and intelligent automation.",
    link: "/services/mobile-app-development/iot",
    icon: "📡",
  },
];

const SVG_COMPONENTS = [
  AndroidAppSVG,
  iOSAppSVG,
  FlutterAppSVG,
  ReactNativeAppSVG,
  CrossPlatformAppSVG,
  CloudMobileAppSVG,
  IoTMobileAppSVG,
];

const TESTIMONIALS = [
  {
    name: "Priya S.",
    title: "E-commerce Founder",
    quote: "Axonary's mobile team delivered our apps ahead of schedule. The quality and performance are outstanding. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Mark T.",
    title: "Product Lead",
    quote: "We scaled to 1M+ users with Axonary's help. Their support and expertise are unmatched.",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
  },
];

const FAQS = [
  {
    q: "Which platform should I choose for my app?",
    a: "It depends on your target audience and budget. Native apps (iOS/Android) offer best performance. Cross-platform solutions (Flutter, React Native) speed up development. Let us guide you through the best choice for your needs.",
  },
  {
    q: "How long does mobile app development take?",
    a: "Most MVPs launch in 4–8 weeks. Full-featured apps typically take 3-6 months. Timelines depend on complexity, features, and your feedback speed.",
  },
  {
    q: "Do you support app maintenance after launch?",
    a: "Yes! We provide ongoing maintenance, updates, feature enhancements, and rapid bug fixes to keep your app competitive and secure.",
  },
  {
    q: "Can you develop for multiple platforms?",
    a: "Absolutely. We can build native apps for each platform or use cross-platform solutions for faster, more efficient development.",
  },
  {
    q: "What's included in your mobile app development?",
    a: "Strategy, design, development, testing, deployment, and post-launch support. We handle everything from concept to production.",
  },
];

const unsplashSrc = (q: string) =>
  `https://source.unsplash.com/collection/922197/1200x900?${encodeURIComponent(q)}`;

const TopNav: React.FC<{ progress: number }> = ({ progress }) => (
  <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm" style={{ background: "rgba(0,0,0,0.45)", borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
    <div className="container mx-auto px-6 flex items-center justify-between h-16">
      <div className="flex items-center gap-3">
        <div style={{ width: 44, height: 44, borderRadius: 10, background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})` }} />
        <div>
          <div className="text-sm font-bold" style={{ color: COLORS.white }}>Axonary</div>
          <div className="text-xs" style={{ color: COLORS.textMuted }}>Mobile App Development</div>
        </div>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
        <a href="#services" className="hover:text-white">Services</a>
        <a href="#why-us" className="hover:text-white">Why Us</a>
        <a href="#faqs" className="hover:text-white">FAQs</a>
        <Link to="/contact" className="ml-4 inline-block px-4 py-2 rounded-full" style={{ background: COLORS.primary, color: COLORS.white }}>Book a Call</Link>
      </nav>
    </div>
    <div className="h-[3px] w-full" style={{ background: "rgba(255,255,255,0.02)" }}>
      <div style={{ height: "3px", width: `${progress}%`, transition: "width 120ms linear", background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary})` }} />
    </div>
  </header>
);

const Hero: React.FC = () => (
  <section id="hero" className="min-h-[72vh] flex items-center" style={{ background: COLORS.bg, color: COLORS.white }}>
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <div className="inline-block rounded-full px-4 py-1 text-sm font-medium" style={{ background: `${COLORS.secondary}33`, color: COLORS.white }}>
          Mobile App Development Services
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
          Mobile Apps That Win Users
          <span style={{ color: COLORS.primary }}> | Axonary</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl">
          Whether you need native Android, iOS, Flutter, React Native, or cross-platform solutions, we deliver high-performance mobile apps that users love. From MVP to enterprise scale, we build apps that drive growth.
        </p>
        <div className="mt-6 flex items-center gap-4">
          <a href="#services" className="px-6 py-3 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>
            Explore Services
          </a>
          <a href="/contact" className="px-5 py-3 rounded-full border border-[rgba(255,255,255,0.06)]" style={{ color: COLORS.textMuted }}>
            Request Consultation
          </a>
        </div>
      </div>
      <div className="rounded-2xl p-6" style={{ background: COLORS.card }}>
        <h5 className="text-sm text-gray-400">Mobile Excellence</h5>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
            <div className="text-2xl font-bold">500+</div>
            <div className="text-xs text-gray-400">Apps Delivered</div>
          </div>
          <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
            <div className="text-2xl font-bold">10M+</div>
            <div className="text-xs text-gray-400">Total Downloads</div>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-sm text-gray-300">Axonary is the trusted partner for startups and enterprises building world-class mobile applications.</p>
          <div className="mt-4">
            <a href="/contact" className="inline-block px-4 py-2 rounded-full" style={{ background: COLORS.primary, color: COLORS.white }}>Schedule Consultation</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ServicesGrid: React.FC = () => (
  <section id="services" className="py-20 md:py-28">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-left" style={{ color: COLORS.primary }}>
        Our Mobile App Development Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mobileServices.map((service) => (
          <Link key={service.id} to={service.link}>
            <div className="h-full rounded-2xl p-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer" style={{ background: COLORS.card }}>
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: COLORS.white }}>{service.title}</h3>
              <p className="text-gray-400 text-sm mb-6">{service.desc}</p>
              <div className="flex items-center" style={{ color: COLORS.primary }}>
                Learn More →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const WhyUs: React.FC = () => (
  <section id="why-us" className="mt-24">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-left" style={{ color: COLORS.primary }}>
        Why Choose Axonary for Mobile App Development?
      </h2>
      <div className="flex flex-col gap-4 max-w-3xl">
        <div className="flex items-start gap-4">
          <div className="w-2 h-8 rounded bg-[var(--tw-prose-bullets, #5C3693)] mt-1" style={{ background: COLORS.primary }} />
          <div>
            <div className="font-semibold text-base md:text-lg text-left" style={{ color: COLORS.white }}>Multi-platform expertise across all major technologies</div>
            <div className="text-gray-400 text-sm md:text-base text-left">Native, hybrid, cross-platform — we master them all</div>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-2 h-8 rounded bg-[var(--tw-prose-bullets, #5C3693)] mt-1" style={{ background: COLORS.primary }} />
          <div>
            <div className="font-semibold text-base md:text-lg text-left" style={{ color: COLORS.white }}>Award-winning design and user experience</div>
            <div className="text-gray-400 text-sm md:text-base text-left">Apps that users love, retention that drives growth</div>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-2 h-8 rounded bg-[var(--tw-prose-bullets, #5C3693)] mt-1" style={{ background: COLORS.primary }} />
          <div>
            <div className="font-semibold text-base md:text-lg text-left" style={{ color: COLORS.white }}>500+ apps delivered, 10M+ downloads, proven results</div>
            <div className="text-gray-400 text-sm md:text-base text-left">Track record of success across industries</div>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-2 h-8 rounded bg-[var(--tw-prose-bullets, #5C3693)] mt-1" style={{ background: COLORS.primary }} />
          <div>
            <div className="font-semibold text-base md:text-lg text-left" style={{ color: COLORS.white }}>Agile development with transparent communication</div>
            <div className="text-gray-400 text-sm md:text-base text-left">You're in control, every step of the way</div>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-2 h-8 rounded bg-[var(--tw-prose-bullets, #5C3693)] mt-1" style={{ background: COLORS.primary }} />
          <div>
            <div className="font-semibold text-base md:text-lg text-left" style={{ color: COLORS.white }}>Post-launch support and continuous optimization</div>
            <div className="text-gray-400 text-sm md:text-base text-left">We're with you for the long run</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials: React.FC = () => (
  <section className="mt-16">
    <div className="container mx-auto px-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center" style={{ color: COLORS.primary }}>
        What Our Clients Say
      </h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {TESTIMONIALS.map((t, idx) => (
          <div
            key={idx}
            className="flex-1 bg-[#181828] rounded-2xl p-8 shadow-xl flex flex-col items-center text-center hover:scale-[1.03] transition-transform duration-200"
            style={{ minWidth: 280, maxWidth: 420 }}
          >
            <img
              src={t.avatar}
              alt={t.name}
              className="w-16 h-16 rounded-full border-4 border-[rgba(92,54,147,0.18)] mb-4 shadow-md object-cover"
              style={{ background: COLORS.card }}
            />
            <p className="text-lg italic text-gray-200 mb-4">"{t.quote}"</p>
            <div className="font-semibold text-white">{t.name}</div>
            <div className="text-xs text-gray-400">{t.title}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section id="faqs" className="mt-20 py-16" style={{ background: COLORS.bg }}>
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: COLORS.primary, fontFamily: 'inherit', fontWeight: 700, letterSpacing: '-0.5px' }}>
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-[#181828] rounded-xl shadow-lg">
              <button
                className="w-full text-left px-6 py-5 focus:outline-none flex justify-between items-center group"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="font-semibold text-white group-hover:text-[#5C3693] transition-colors">{faq.q}</span>
                <span className="text-[#5C3693] transition-transform duration-300" style={{ transform: openIdx === idx ? 'rotate(180deg)' : 'rotate(0)' }}>▼</span>
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-5 text-gray-300 text-sm">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FooterCTA: React.FC = () => (
  <div className="container mx-auto px-6 py-12">
    <div
      className="rounded-2xl p-4 flex items-center justify-between shadow-xl"
      style={{
        background: `linear-gradient(90deg, rgba(92,54,147,0.25), rgba(71,42,113,0.15))`,
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div>
        <div className="text-sm font-semibold" style={{ color: COLORS.white }}>Ready to build your mobile app?</div>
        <div className="text-xs" style={{ color: COLORS.textMuted }}>Let's create a high-performance app that users love.</div>
      </div>
      <div className="flex items-center gap-3">
        <a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Get in Touch</a>
        <a href="/work" className="px-3 py-2 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>Portfolio</a>
      </div>
    </div>
  </div>
);

const PlatformsSection: React.FC = () => {
  const platforms = [
    {
      title: "Android App Development",
      label: "Android",
      description: "Build powerful native Android applications with Kotlin and Java. High-performance, stable, and scalable products optimized for Google Play.",
      features: [
        "Native Android Development (Kotlin & Java)",
        "Material Design Excellence",
        "Google Play Store Optimization",
        "High-Performance Architecture",
        "Enterprise-Grade Security"
      ],
      link: "/services/mobile-app-development/android"
    },
    {
      title: "iOS App Development",
      label: "iOS",
      description: "Premium iOS apps with Swift and Objective-C. Pixel-perfect design and lightning-fast performance optimized for the App Store.",
      features: [
        "Native iOS Development (Swift & Objective-C)",
        "Human Interface Guidelines Compliance",
        "App Store Optimization",
        "Lightning-Fast Performance",
        "Advanced Security Standards"
      ],
      link: "/services/mobile-app-development/ios"
    },
    {
      title: "Flutter App Development",
      label: "Flutter",
      description: "Cross-platform apps with beautiful UI and incredible performance. One codebase, infinite possibilities across iOS and Android.",
      features: [
        "Cross-Platform Development",
        "Beautiful UI Components",
        "Single Codebase Solution",
        "Rapid Prototyping & Development",
        "Exceptional Performance"
      ],
      link: "/services/mobile-app-development/flutter"
    },
    {
      title: "React Native App Development",
      label: "React Native",
      description: "JavaScript-powered mobile apps that run seamlessly on iOS and Android. Fast development cycles with unified experience.",
      features: [
        "JavaScript-Based Development",
        "Code Sharing Across Platforms",
        "Fast Development Cycles",
        "Native Performance",
        "Rich Ecosystem & Libraries"
      ],
      link: "/services/mobile-app-development/react-native"
    },
    {
      title: "Cross-Platform App Development",
      label: "Cross-Platform",
      description: "Unified apps across all platforms with Xamarin and native bridges. Maximum code reuse and complete platform coverage.",
      features: [
        "Multi-Platform Support",
        "Xamarin & Native Bridges",
        "Maximum Code Reuse",
        "Enterprise Solutions",
        "Consistent UX Across Platforms"
      ],
      link: "/services/mobile-app-development/cross-platform"
    },
    {
      title: "Cloud Mobile App Development",
      label: "Cloud Mobile",
      description: "Cloud-native mobile apps with real-time sync, offline capabilities, and enterprise scalability. Future-proof architecture.",
      features: [
        "Cloud-Native Architecture",
        "Real-Time Data Synchronization",
        "Offline Capabilities",
        "Enterprise Scalability",
        "Global Deployment"
      ],
      link: "/services/mobile-app-development/cloud-mobile"
    },
    {
      title: "IoT Mobile App Development",
      label: "IoT",
      description: "Next-generation IoT apps for device connectivity, real-time control, and intelligent automation. Smart solutions for connected devices.",
      features: [
        "IoT Device Integration",
        "Real-Time Control Systems",
        "Smart Automation",
        "Sensor Data Management",
        "Edge Computing Solutions"
      ],
      link: "/services/mobile-app-development/iot"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      {platforms.map((platform, idx) => (
        <div key={idx} className="py-12 md:py-16">
          <div className="container mx-auto px-6">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              {/* SVG Illustration */}
              <div className={idx % 2 === 1 ? 'md:order-2' : 'md:order-1'}>
                <div className="rounded-2xl overflow-hidden shadow-2xl h-96 md:h-full flex items-center justify-center">
                  {React.createElement(SVG_COMPONENTS[idx], { width: 360, height: 320 })}
                </div>
              </div>

              {/* Content */}
              <div className={idx % 2 === 1 ? 'md:order-1' : 'md:order-2'}>
                <div className="inline-block rounded-full px-3 py-1 text-xs font-medium mb-4" style={{ background: `${COLORS.secondary}33`, color: COLORS.white }}>
                  {platform.label}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: COLORS.white, letterSpacing: '-0.5px' }}>
                  {platform.title}
                </h2>
                <p className="text-gray-300 text-base md:text-lg mb-6">
                  {platform.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {platform.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-center gap-3">
                      <div style={{ color: COLORS.primary, fontSize: '18px', marginTop: '2px' }}>✓</div>
                      <span className="text-gray-200">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4">
                  <Link to={platform.link} className="px-6 py-3 rounded-full font-semibold transition-all hover:scale-105" style={{ background: COLORS.primary, color: COLORS.white }}>
                    Learn More
                  </Link>
                  <a href="/contact" className="px-6 py-3 rounded-full font-semibold border transition-all hover:scale-105" style={{ borderColor: 'rgba(255,255,255,0.1)', color: COLORS.textMuted }}>
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

const MobileAppDevelopment: React.FC = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const pct = height > 0 ? Math.min(100, Math.max(0, (scrolled / height) * 100)) : 0;
      setProgress(pct);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ background: COLORS.bg, color: COLORS.white, minHeight: "100vh" }}>
      <TopNav progress={progress} />
      <main className="pt-20">
        <Hero />
        <PlatformsSection />
        <Testimonials />
        <FAQSection />
        <section className="mt-12">
          <div className="container mx-auto px-6 text-center py-8 rounded-2xl shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: COLORS.primary, letterSpacing: '-1px' }}>
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Unlock your business potential with a custom mobile app engineered for performance, scale, and user delight. Let Axonary turn your vision into a top-rated app.
            </p>
            <a href="/contact" className="inline-block px-10 py-3 rounded-full font-bold text-lg shadow-lg transition-transform duration-200 hover:scale-105" style={{ background: COLORS.primary, color: COLORS.white }}>
              Get Your Free Consultation
            </a>
          </div>
        </section>
        <div style={{ height: 160 }} />
      </main>
    </div>
  );
};

export default MobileAppDevelopment;
