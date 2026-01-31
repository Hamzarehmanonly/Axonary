// IOSAppDevelopment.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const COLORS = {
  primary: "#5C3693",
  secondary: "#472A71",
  bg: "#000000",
  card: "#0b0b0d",
  glass: "rgba(255,255,255,0.03)",
  textMuted: "#BDB7D6",
  white: "#FFFFFF",
};

const services = [
  {
    id: "native-ios",
    title: "Native iOS Apps Built to Perform",
    desc:
      "Axonary delivers high-performance native iOS apps built in Swift and Objective-C. Our iOS app development services help you launch fast, stable, and scalable products that stand out on the App Store.",
    imgQuery: "ios mobile app development company",
  },
  {
    id: "ios-ui",
    title: "Responsive UI for Every iOS Device",
    desc:
      "Apple Human Interface Guidelines brought to life with thoughtful UI, fluid motion, and a user-first approach. We ensure your iOS app is modern, intuitive, and effortless to navigate.",
    imgQuery: "ios app development agency",
  },
  {
    id: "ios-backend",
    title: "Connected, Secure, and Built to Scale",
    desc:
      "From API integration to real-time sync, we build backend systems that keep your iOS app fast, secure, and ready for scale—no matter how many users you have.",
    imgQuery: "ios app development services",
  },
  {
    id: "ios-testing",
    title: "Testing & QA You Can Trust",
    desc:
      "We test your iOS app across devices, screen sizes, and OS versions to ensure every release is stable, fast, and ready for real users.",
    imgQuery: "ios app development firms",
  },
  {
    id: "ios-performance",
    title: "Optimization That Users Notice",
    desc:
      "From frame-rate smoothing to smarter resource handling, we fine-tune your iOS app for speed, stability, and a noticeably better user experience.",
    imgQuery: "ios app optimization",
  },
  {
    id: "ios-maintenance",
    title: "Reliable iOS Maintenance & Monitoring",
    desc:
      "We handle updates, enhancements, and rapid bug fixes so your iOS app stays stable, secure, and compatible with every new OS release.",
    imgQuery: "ios app maintenance support",
  },
];

const unsplashSrc = (q: string) =>
  `https://source.unsplash.com/collection/922197/1200x900?${encodeURIComponent(q)}`;

const FAQS = [
  {
    q: "How long does iOS app development take?",
    a: "Most MVPs launch in 4–8 weeks. Timelines depend on features, integrations, and your feedback speed. We deliver with speed and precision—always!",
  },
  {
    q: "Can you migrate my existing app to iOS?",
    a: "Absolutely. We handle full migrations, code audits, and phased rollouts to ensure a smooth, zero-downtime transition. Your users won't miss a beat.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes! We provide ongoing maintenance, updates, and feature enhancements to keep your app future-ready and ahead of the competition.",
  },
  {
    q: "Will my app work on all iOS devices?",
    a: "We test across a huge range of devices, screen sizes, and OS versions to guarantee maximum compatibility and performance. Your app will shine everywhere.",
  },
  {
    q: "What makes Axonary different?",
    a: "We blend Apple-certified expertise, creative UI/UX, and relentless support. Our iOS apps don't just work—they win users and drive growth.",
  },
];

const TESTIMONIALS = [
  {
    name: "Priya S.",
    title: "E-commerce Founder",
    quote: "Axonary's iOS team delivered our app ahead of schedule. The quality and performance are outstanding. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Mark T.",
    title: "Product Lead",
    quote: "We scaled to 1M+ users with Axonary's help. Their support and expertise are unmatched.",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
  },
];

const TopNav: React.FC<{ progress: number }> = ({ progress }) => (
  <header
    className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
    style={{ background: "rgba(0,0,0,0.45)", borderBottom: "1px solid rgba(255,255,255,0.03)" }}
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
            iOS App Development
          </div>
        </div>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
        <a href="#native-ios" className="hover:text-white">Overview</a>
        <a href="#ios-ui" className="hover:text-white">UI</a>
        <a href="#ios-backend" className="hover:text-white">Backend</a>
        <a href="#ios-testing" className="hover:text-white">Testing</a>
        <a href="#ios-performance" className="hover:text-white">Performance</a>
        <a href="#ios-maintenance" className="hover:text-white">Support</a>
        <Link to="/contact" className="ml-4 inline-block px-4 py-2 rounded-full" style={{ background: COLORS.primary, color: COLORS.white }}>
          Book a Call
        </Link>
      </nav>
    </div>
    <div className="h-[3px] w-full" style={{ background: "rgba(255,255,255,0.02)" }}>
      <div style={{
        height: "3px",
        width: `${progress}%`,
        transition: "width 120ms linear",
        background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary})`
      }} />
    </div>
  </header>
);

const Hero: React.FC = () => (
  <section
    id="hero"
    className="min-h-[72vh] flex items-center"
    style={{ background: COLORS.bg, color: COLORS.white }}
  >
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
      <div className="md:col-span-7">
        <div className="inline-block rounded-full px-4 py-1 text-sm font-medium" style={{ background: `${COLORS.secondary}33`, color: COLORS.white }}>
          iOS App Development Company | Axonary
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
          iOS App Development That Wins the App Store
          <span style={{ color: COLORS.primary }}> | Axonary</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl">
          Partner with Axonary for iOS app development that delivers speed, elegance, and business results. Our award-winning team crafts native iOS apps that launch faster, scale with your growth, and win user loyalty. From MVP to enterprise, we help you stand out in the App Store.
        </p>
        <ul className="mt-4 text-gray-300 list-disc pl-6">
          <li>Native iOS expertise: Swift, Objective-C, and SwiftUI</li>
          <li>Pixel-perfect UI/UX and seamless Apple ecosystem integration</li>
          <li>Agile delivery, transparent process, and ongoing support</li>
        </ul>
        <div className="mt-6 flex items-center gap-4">
          <a href="#native-ios" className="px-6 py-3 rounded-full font-semibold inline-flex items-center gap-3" style={{ background: COLORS.primary, color: COLORS.white }}>
            Explore Services
          </a>
          <a href="/contact" className="px-5 py-3 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>
            Request Consultation
          </a>
        </div>
      </div>
      <div className="md:col-span-5">
        <div className="rounded-2xl p-6" style={{ background: COLORS.card }}>
          <h5 className="text-sm text-gray-400">iOS Success</h5>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
              <div className="text-2xl font-bold">40+</div>
              <div className="text-xs text-gray-400">Apps Launched</div>
            </div>
            <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
              <div className="text-2xl font-bold">8M+</div>
              <div className="text-xs text-gray-400">Downloads</div>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-sm text-gray-300">Axonary is an iOS app development company trusted by startups and enterprises worldwide. Let’s build your next big thing.</p>
            <div className="mt-4">
              <a href="/contact" className="inline-block px-4 py-2 rounded-full" style={{ background: COLORS.primary, color: COLORS.white }}>Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const UniqueSellingPoints: React.FC = () => (
  <section className="mt-12">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: COLORS.primary }}>
        Why Choose Axonary for iOS App Development?
      </h2>
      <ul className="list-disc pl-6 text-lg text-gray-300 space-y-2">
        <li>Apple-certified iOS experts and UI/UX designers</li>
        <li>End-to-end development: strategy, design, engineering, and support</li>
        <li>Proven track record with 40+ successful iOS apps</li>
        <li>Transparent process, agile delivery, and measurable results</li>
        <li>Dedicated support and continuous optimization</li>
      </ul>
    </div>
  </section>
);

const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section className="mt-20 py-16" style={{ background: COLORS.bg }}>
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: COLORS.primary, fontFamily: 'inherit', fontWeight: 700, letterSpacing: '-0.5px' }}>
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-[#181828] rounded-xl shadow-lg">
              <button
                className="w-full text-left px-6 py-5 focus:outline-none flex justify-between items-center group"
                style={{ fontFamily: 'inherit', color: COLORS.white, fontWeight: 600, fontSize: '1.15rem' }}
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                aria-expanded={openIdx === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <span>{faq.q}</span>
                <span className={`ml-4 transition-transform duration-200 ${openIdx === idx ? 'rotate-45' : ''}`} style={{ fontSize: 24, color: COLORS.primary }}>
                  {openIdx === idx ? '−' : '+'}
                </span>
              </button>
              {openIdx === idx && (
                <div
                  id={`faq-answer-${idx}`}
                  className="px-6 pb-6 text-gray-300 text-base md:text-lg leading-relaxed animate-fadeIn"
                  style={{ fontFamily: 'inherit' }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="/contact" className="px-5 py-3 rounded-full font-medium shadow-lg" style={{ background: COLORS.primary, color: COLORS.white, minWidth: 140, textAlign: 'center', fontFamily: 'inherit', fontSize: '1rem' }}>
            Still have questions? Ask our iOS experts
          </a>
        </div>
      </div>
    </section>
  );
};

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

const MobilePhoneMockup: React.FC<{ image: string; title: string; id: string }> = ({ image, title, id }) => {
  function renderUniqueScreen() {
    switch (id) {
      case "native-ios":
        return (
          <div className="flex-1 flex flex-col gap-3 px-4 py-4 overflow-y-auto">
            <div className="bg-[#f3f4f6] rounded-xl p-4 flex flex-col gap-2 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#5C3693] flex items-center justify-center text-white font-bold text-lg">NI</div>
                <div>
                  <div className="text-gray-900 font-semibold text-sm">Native iOS</div>
                  <div className="text-gray-500 text-xs">Swift & Objective-C</div>
                </div>
              </div>
              <div className="text-gray-700 text-xs mt-2">High-performance, stable, and scalable iOS apps for the App Store.</div>
              <div className="flex gap-2 mt-2">
                <button className="px-3 py-1 rounded-full font-semibold text-xs" style={{ background: '#5C3693', color: '#fff' }}>Launch</button>
                <button className="px-3 py-1 rounded-full border border-[#e5e7eb] font-semibold text-xs" style={{ color: '#5C3693' }}>Docs</button>
              </div>
            </div>
            <div className="bg-[#f3f4f6] rounded-xl p-4 flex items-center gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#472A71] flex items-center justify-center text-white font-bold text-lg">AS</div>
              <div className="flex-1">
                <div className="text-gray-900 font-semibold text-sm">App Store Ready</div>
                <div className="text-gray-500 text-xs">Approval optimized</div>
              </div>
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
          </div>
        );
      case "ios-ui":
        return (
          <div className="flex-1 flex flex-col gap-3 px-4 py-4 overflow-y-auto">
            <div className="bg-[#f3f4f6] rounded-xl p-4 flex flex-col gap-2 shadow-sm border border-[#e5e7eb]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#5C3693] flex items-center justify-center text-white font-bold text-lg">UI</div>
                <div>
                  <div className="text-gray-900 font-semibold text-sm">iOS Design</div>
                  <div className="text-gray-500 text-xs">HIG Compliant</div>
                </div>
              </div>
              <div className="text-gray-700 text-xs mt-2">Apple Human Interface Guidelines brought to life with fluid motion and intuitive navigation.</div>
              <div className="flex gap-2 mt-2">
                <button className="px-3 py-1 rounded-full font-semibold text-xs" style={{ background: '#5C3693', color: '#fff' }}>Preview</button>
                <button className="px-3 py-1 rounded-full border border-[#e5e7eb] font-semibold text-xs" style={{ color: '#5C3693' }}>Design</button>
              </div>
            </div>
            <div className="bg-[#f3f4f6] rounded-xl p-4 flex items-center gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#472A71] flex items-center justify-center text-white font-bold text-lg">UX</div>
              <div className="flex-1">
                <div className="text-gray-900 font-semibold text-sm">User Experience</div>
                <div className="text-gray-500 text-xs">Delightful & Simple</div>
              </div>
              <div className="w-3 h-3 rounded-full bg-blue-400" />
            </div>
          </div>
        );
      case "ios-backend":
        return (
          <div className="flex-1 flex flex-col gap-3 px-4 py-4 overflow-y-auto">
            <div className="bg-[#f3f4f6] rounded-xl p-4 flex flex-col gap-2 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#5C3693] flex items-center justify-center text-white font-bold text-lg">BE</div>
                <div>
                  <div className="text-gray-900 font-semibold text-sm">Backend</div>
                  <div className="text-gray-500 text-xs">API & Realtime</div>
                </div>
              </div>
              <div className="text-gray-700 text-xs mt-2">Fast, secure, and scalable backend for your iOS app.</div>
              <div className="flex gap-2 mt-2">
                <button className="px-3 py-1 rounded-full font-semibold text-xs" style={{ background: '#5C3693', color: '#fff' }}>API</button>
                <button className="px-3 py-1 rounded-full border border-[#e5e7eb] font-semibold text-xs" style={{ color: '#5C3693' }}>Docs</button>
              </div>
            </div>
            <div className="bg-[#f3f4f6] rounded-xl p-4 flex items-center gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#472A71] flex items-center justify-center text-white font-bold text-lg">RT</div>
              <div className="flex-1">
                <div className="text-gray-900 font-semibold text-sm">Realtime Sync</div>
                <div className="text-gray-500 text-xs">Always up-to-date</div>
              </div>
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
          </div>
        );
      case "ios-testing":
        return (
          <div className="flex-1 flex flex-col gap-3 px-4 py-4 overflow-y-auto">
            <div className="bg-[#f3f4f6] rounded-xl p-4 flex flex-col gap-2 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#5C3693] flex items-center justify-center text-white font-bold text-lg">QA</div>
                <div>
                  <div className="text-gray-900 font-semibold text-sm">Testing & QA</div>
                  <div className="text-gray-500 text-xs">Stable Releases</div>
                </div>
              </div>
              <div className="text-gray-700 text-xs mt-2">Tested across devices, screen sizes, and iOS versions.</div>
              <div className="flex gap-2 mt-2">
                <button className="px-3 py-1 rounded-full font-semibold text-xs" style={{ background: '#5C3693', color: '#fff' }}>Test</button>
                <button className="px-3 py-1 rounded-full border border-[#e5e7eb] font-semibold text-xs" style={{ color: '#5C3693' }}>Report</button>
              </div>
            </div>
            <div className="bg-[#f3f4f6] rounded-xl p-4 flex items-center gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#472A71] flex items-center justify-center text-white font-bold text-lg">DL</div>
              <div className="flex-1">
                <div className="text-gray-900 font-semibold text-sm">Device Lab</div>
                <div className="text-gray-500 text-xs">All iPhones</div>
              </div>
              <div className="w-3 h-3 rounded-full bg-blue-400" />
            </div>
          </div>
        );
      case "ios-performance":
        return (
          <div className="flex-1 flex flex-col gap-3 px-4 py-4 overflow-y-auto">
            <div className="bg-[#f3f4f6] rounded-xl p-4 flex flex-col gap-2 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#5C3693] flex items-center justify-center text-white font-bold text-lg">OP</div>
                <div>
                  <div className="text-gray-900 font-semibold text-sm">Optimization</div>
                  <div className="text-gray-500 text-xs">Speed & Stability</div>
                </div>
              </div>
              <div className="text-gray-700 text-xs mt-2">Frame-rate smoothing, resource handling, and battery optimization.</div>
              <div className="flex gap-2 mt-2">
                <button className="px-3 py-1 rounded-full font-semibold text-xs" style={{ background: '#5C3693', color: '#fff' }}>Optimize</button>
                <button className="px-3 py-1 rounded-full border border-[#e5e7eb] font-semibold text-xs" style={{ color: '#5C3693' }}>Details</button>
              </div>
            </div>
            <div className="bg-[#f3f4f6] rounded-xl p-4 flex items-center gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#472A71] flex items-center justify-center text-white font-bold text-lg">UX</div>
              <div className="flex-1">
                <div className="text-gray-900 font-semibold text-sm">User Delight</div>
                <div className="text-gray-500 text-xs">Noticeable Results</div>
              </div>
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
          </div>
        );
      case "ios-maintenance":
        return (
          <div className="flex-1 flex flex-col gap-3 px-4 py-4 overflow-y-auto">
            <div className="bg-[#f3f4f6] rounded-xl p-4 flex flex-col gap-2 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#5C3693] flex items-center justify-center text-white font-bold text-lg">MT</div>
                <div>
                  <div className="text-gray-900 font-semibold text-sm">Maintenance</div>
                  <div className="text-gray-500 text-xs">Updates & Support</div>
                </div>
              </div>
              <div className="text-gray-700 text-xs mt-2">Updates, enhancements, and rapid bug fixes for stability.</div>
              <div className="flex gap-2 mt-2">
                <button className="px-3 py-1 rounded-full font-semibold text-xs" style={{ background: '#5C3693', color: '#fff' }}>Update</button>
                <button className="px-3 py-1 rounded-full border border-[#e5e7eb] font-semibold text-xs" style={{ color: '#5C3693' }}>Support</button>
              </div>
            </div>
            <div className="bg-[#f3f4f6] rounded-xl p-4 flex items-center gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#472A71] flex items-center justify-center text-white font-bold text-lg">AN</div>
              <div className="flex-1">
                <div className="text-gray-900 font-semibold text-sm">Always On</div>
                <div className="text-gray-500 text-xs">24/7 Monitoring</div>
              </div>
              <div className="w-3 h-3 rounded-full bg-blue-400" />
            </div>
          </div>
        );
      default:
        return null;
    }
  }
  
  return (
    <div className="flex items-center justify-center">
      <div className="relative" style={{ width: "320px", height: "640px" }}>
        <div
          className="absolute inset-0 rounded-[40px] shadow-2xl"
          style={{
            background: "linear-gradient(135deg, #f8fafc 0%, #e5e7eb 100%)",
            boxShadow: "0 0 0 6px rgba(92,54,147,0.25), 0 0 80px rgba(92,54,147,0.15), inset 0 0 40px rgba(0,0,0,0.05), 0 25px 50px rgba(0,0,0,0.07)",
            borderWidth: "14px",
            borderStyle: "solid",
            borderColor: "#18111e",
          }}
        >
          {/* Realistic App UI Overlay */}
          <div className="absolute inset-0 rounded-[36px] overflow-hidden flex flex-col" style={{ margin: "2px", background: "#fff" }}>
            {/* Status Bar */}
            <div className="flex items-center justify-between px-4 py-2" style={{ background: '#f3f4f6', height: 28 }}>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <div className="w-2 h-2 rounded-full bg-red-400" />
              </div>
              <div className="text-xs text-gray-700">9:41</div>
              <div className="flex items-center gap-1">
                <div className="w-4 h-2 bg-gray-400 rounded-sm" />
                <div className="w-2 h-2 bg-gray-400 rounded-full" />
              </div>
            </div>
            {/* App Bar */}
            <div className="flex items-center justify-between px-5 py-3" style={{ background: '#f3f4f6', borderBottom: '1px solid #e5e7eb' }}>
              <div className="w-8 h-8 rounded-full bg-[#5C3693] flex items-center justify-center text-white font-bold text-lg">A</div>
              <div className="text-gray-900 font-semibold text-base">Axonary App</div>
              <div className="w-8 h-8 rounded-full bg-[#e5e7eb] flex items-center justify-center text-gray-700">⋮</div>
            </div>
            {/* Main Content */}
            {renderUniqueScreen()}
            {/* Tab Bar */}
            <div className="flex items-center justify-between px-8 py-3" style={{ background: '#f3f4f6', borderTop: '1px solid #e5e7eb' }}>
              <div className="flex flex-col items-center text-xs gap-1">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#5C3693" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12l9-9 9 9M5 11v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8M10 15h4v4h-4z"/></svg>
                <span style={{ color: '#666' }}>Home</span>
              </div>
              <div className="flex flex-col items-center text-xs gap-1">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#5C3693" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></svg>
                <span style={{ color: '#666' }}>Explore</span>
              </div>
              <div className="flex flex-col items-center text-xs gap-1">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#5C3693" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M6 6h4v4H6zM14 6h4v4h-4zM6 14h4v4H6zM14 14h4v4h-4z"/></svg>
                <span style={{ color: '#666' }}>Apps</span>
              </div>
              <div className="flex flex-col items-center text-xs gap-1">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#5C3693" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M6 20h12a2 2 0 0 0 2-2v-1c0-2.5-3.6-4-7-4s-7 1.5-7 4v1a2 2 0 0 0 2 2z"/></svg>
                <span style={{ color: '#666' }}>Profile</span>
              </div>
            </div>
          </div>

          <div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 rounded-b-3xl"
            style={{
              width: "160px",
              height: "32px",
              background: "#000000",
              boxShadow: "0 2px 10px rgba(0,0,0,0.6)",
            }}
          />
          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-full"
            style={{
              width: "110px",
              height: "6px",
              background: "#050505",
              zIndex: 5,
            }}
          />
        </div>
        <div
          className="absolute inset-0 rounded-[40px] blur-3xl opacity-60"
          style={{
            background: `linear-gradient(135deg, ${COLORS.primary}55, ${COLORS.secondary}33)`,
            zIndex: -1,
          }}
        />
      </div>
    </div>
  );
};

const SplitSection: React.FC<{ idx: number; id: string; title: string; desc: string; imgQuery: string; }> = ({ idx, id, title, desc, imgQuery }) => {
  const isLeftImage = idx % 2 === 0;
  const image = unsplashSrc(imgQuery);
  return (
    <section id={id} className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-stretch">
          {isLeftImage ? (
            <>
              <div className="md:col-span-6 flex items-center justify-center">
                <MobilePhoneMockup image={image} title={title} id={id} />
              </div>
              <div className="md:col-span-6 flex flex-col items-center justify-center">
                <div className="max-w-xl w-full">
                  <div className="inline-block rounded-full px-3 py-1 text-sm font-medium" style={{ background: `${COLORS.secondary}22`, color: COLORS.white }}>
                    {title.split(" ")[0]}
                  </div>
                  <h3 className="mt-4 text-2xl md:text-3xl font-bold" style={{ color: COLORS.white }}>
                    {title}
                  </h3>
                  <p className="mt-4 text-lg text-gray-300">{desc}</p>
                  <div className="mt-6 flex items-center gap-3">
                    <a href={`/${id}`} className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>
                      Learn More
                    </a>
                    <a href="/contact" className="px-4 py-2 rounded-full border border-[rgba(255,255,255,0.06)]" style={{ color: COLORS.textMuted }}>
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="md:col-span-6 flex flex-col items-center justify-center">
                <div className="max-w-xl w-full">
                  <div className="inline-block rounded-full px-3 py-1 text-sm font-medium" style={{ background: `${COLORS.secondary}22`, color: COLORS.white }}>
                    {title.split(" ")[0]}
                  </div>
                  <h3 className="mt-4 text-2xl md:text-3xl font-bold" style={{ color: COLORS.white }}>
                    {title}
                  </h3>
                  <p className="mt-4 text-lg text-gray-300">{desc}</p>
                  <div className="mt-6 flex items-center gap-3">
                    <a href={`/${id}`} className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>
                      Learn More
                    </a>
                    <a href="/contact" className="px-4 py-2 rounded-full border border-[rgba(255,255,255,0.06)]" style={{ color: COLORS.textMuted }}>
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 flex items-center justify-center">
                <MobilePhoneMockup image={image} title={title} id={id} />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

const FooterCTA: React.FC = () => (
  <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-[92%] md:w-[720px]">
    <div
      className="rounded-2xl p-4 flex items-center justify-between shadow-xl"
      style={{
        background: `linear-gradient(90deg, rgba(92,54,147,0.25), rgba(71,42,113,0.15))`,
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div>
        <div className="text-sm font-semibold" style={{ color: COLORS.white }}>Ready to build your iOS app?</div>
        <div className="text-xs" style={{ color: COLORS.textMuted }}>Let’s create a high-performance iOS app together.</div>
      </div>
      <div className="flex items-center gap-3">
        <a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Get in Touch</a>
        <a href="/work" className="px-3 py-2 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>Portfolio</a>
      </div>
    </div>
  </div>
);

const IOSAppDevelopment: React.FC = () => {
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
        <UniqueSellingPoints />
        <div className="mt-8">
          {services.map((s, idx) => (
            <SplitSection key={s.id} idx={idx} id={s.id} title={s.title} desc={s.desc} imgQuery={s.imgQuery} />
          ))}
        </div>
        <Testimonials />
        <FAQSection />
        <section className="mt-12">
          <div className="container mx-auto px-6 text-center py-8 rounded-2xl shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: COLORS.primary, letterSpacing: '-1px' }}>
              Ready to Build Your iOS App?
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Unlock your business potential with a custom iOS app engineered for performance, scale, and user delight. Let Axonary turn your vision into a top-rated app on the App Store.
            </p>
            <a href="/contact" className="inline-block px-10 py-3 rounded-full font-bold text-lg shadow-lg transition-transform duration-200 hover:scale-105" style={{ background: COLORS.primary, color: COLORS.white }}>
              Get Your Free Consultation
            </a>
          </div>
        </section>
        <div style={{ height: 160 }} />
      </main>
      <FooterCTA />
    </div>
  );
};

export default IOSAppDevelopment;
