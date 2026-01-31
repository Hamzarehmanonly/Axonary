
// CloudMobileAppDevelopment.tsx
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
    id: "cloud-backend",
    title: "Cloud Infrastructure Setup",
    desc:
      "Launch your mobile app on a rock-solid cloud foundation. We architect scalable, secure, and high-availability backends using AWS, Azure, and Google Cloud. Enjoy auto-scaling, load balancing, and global reach for your business.",
    imgQuery: "cloud infrastructure",
  },
  {
    id: "serverless",
    title: "Serverless Architecture",
    desc:
      "Cut costs and boost agility with serverless solutions. We build mobile backends using AWS Lambda, Azure Functions, and Google Cloud Functions—no server management, just pure scalability and performance.",
    imgQuery: "serverless computing",
  },
  {
    id: "real-time-sync",
    title: "Real-time Data Sync",
    desc:
      "Deliver seamless user experiences with real-time data synchronization. We implement Firebase, AWS AppSync, and custom WebSocket solutions for instant updates and offline support across all devices.",
    imgQuery: "real-time data",
  },
  {
    id: "cloud-security",
    title: "Cloud Security & Compliance",
    desc:
      "Protect your users and data with enterprise-grade security. We ensure end-to-end encryption, robust authentication, and compliance with GDPR, HIPAA, and more. Your privacy-first architecture starts here.",
    imgQuery: "cloud security",
  },
  {
    id: "cloud-analytics",
    title: "Analytics & Monitoring",
    desc:
      "Gain actionable insights with real-time analytics, crash reporting, and performance monitoring. Understand user behavior, optimize engagement, and drive growth with data-driven decisions.",
    imgQuery: "data analytics",
  },
  {
    id: "cloud-migration",
    title: "Cloud Migration & Optimization",
    desc:
      "Modernize your legacy apps with seamless cloud migration. We handle cost optimization, performance tuning, and disaster recovery planning for a future-proof mobile presence.",
    imgQuery: "cloud migration",
  },
];

const unsplashSrc = (q: string) =>
  `https://source.unsplash.com/collection/922197/1200x900?${encodeURIComponent(q)}`;

const FAQS = [
  {
    q: "How long does cloud mobile app development take?",
    a: "Most MVPs launch in 4–8 weeks. Timelines depend on features, integrations, and your feedback speed. We deliver with speed and precision—always!",
  },
  {
    q: "Can you migrate my existing app to the cloud?",
    a: "Absolutely. We handle full migrations, code audits, and phased rollouts to ensure a smooth, zero-downtime transition. Your users won't miss a beat.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes! We provide ongoing maintenance, updates, and feature enhancements to keep your app future-ready and ahead of the competition.",
  },
  {
    q: "Will my cloud app scale automatically?",
    a: "We architect auto-scaling solutions across devices, regions, and OS versions to guarantee maximum compatibility and performance. Your app will shine everywhere.",
  },
  {
    q: "What makes Axonary different?",
    a: "We blend cloud expertise, creative UI/UX, and relentless support. Our cloud mobile apps don't just work—they win users and drive growth.",
  },
];

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
            Still have questions? Ask our cloud experts
          </a>
        </div>
      </div>
    </section>
  );
};

const TESTIMONIALS = [
  {
    name: "Priya S.",
    title: "E-commerce Founder",
    quote: "Axonary's cloud team delivered our app ahead of schedule. The quality and performance are outstanding. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Mark T.",
    title: "Product Lead",
    quote: "We scaled to 1M+ users with Axonary's help. Their support and expertise are unmatched.",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
  },
];

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
            Cloud Mobile App Development
          </div>
        </div>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
        <a href="#cloud-backend" className="hover:text-white">Infrastructure</a>
        <a href="#serverless" className="hover:text-white">Serverless</a>
        <a href="#real-time-sync" className="hover:text-white">Real-time</a>
        <a href="#cloud-security" className="hover:text-white">Security</a>
        <a href="#cloud-analytics" className="hover:text-white">Analytics</a>
        <a href="#cloud-migration" className="hover:text-white">Migration</a>
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
          Cloud-Native • Scalable • Secure
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
          Cloud Mobile App Development <span style={{ color: COLORS.primary }}>| Axonary</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl">
          Supercharge your business with next-level cloud mobile app development. At Axonary, we build future-proof, scalable, and secure mobile apps powered by the world’s leading cloud platforms. Whether you need real-time data, global reach, or bulletproof security, our cloud experts deliver solutions that help you dominate your market and rank on Google.
        </p>
        <ul className="mt-4 text-gray-300 list-disc pl-6">
          <li>Enterprise-grade cloud infrastructure for mobile apps</li>
          <li>Serverless, real-time, and analytics-driven solutions</li>
          <li>End-to-end security, compliance, and migration expertise</li>
        </ul>
        <div className="mt-6 flex items-center gap-4">
          <a href="#cloud-backend" className="px-6 py-3 rounded-full font-semibold inline-flex items-center gap-3" style={{ background: COLORS.primary, color: COLORS.white }}>
            Explore Services
          </a>
          <a href="/contact" className="px-5 py-3 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>
            Request Consultation
          </a>
        </div>
      </div>
      <div className="md:col-span-5">
        <div className="rounded-2xl p-6" style={{ background: COLORS.card }}>
          <h5 className="text-sm text-gray-400">Cloud Excellence</h5>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
              <div className="text-2xl font-bold">100+</div>
              <div className="text-xs text-gray-400">Cloud Projects</div>
            </div>
            <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
              <div className="text-2xl font-bold">99.9%</div>
              <div className="text-xs text-gray-400">Uptime</div>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-sm text-gray-300">Ready to scale? Let’s architect your mobile app for the cloud era.</p>
            <div className="mt-4">
              <a href="/contact" className="inline-block px-4 py-2 rounded-full" style={{ background: COLORS.primary, color: COLORS.white }}>Schedule Consultation</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const MobilePhoneMockup: React.FC<{ image: string; title: string; id: string }> = ({ image, title, id }) => {
  function renderUniqueScreen() {
    switch (id) {
      case "cloud-apps":
        return (
          <div className="flex-1 flex flex-col gap-3 px-4 py-4 overflow-y-auto">
            <div className="bg-[#f3f4f6] rounded-xl p-4 flex flex-col gap-2 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#5C3693] flex items-center justify-center text-white font-bold text-lg">CA</div>
                <div>
                  <div className="text-gray-900 font-semibold text-sm">Cloud Apps</div>
                  <div className="text-gray-500 text-xs">Scalable Infrastructure</div>
                </div>
              </div>
              <div className="text-gray-700 text-xs mt-2">Mobile apps built on robust cloud infrastructure for unlimited scale.</div>
              <div className="flex gap-2 mt-2">
                <button className="px-3 py-1 rounded-full font-semibold text-xs" style={{ background: '#5C3693', color: '#fff' }}>Deploy</button>
                <button className="px-3 py-1 rounded-full border border-[#e5e7eb] font-semibold text-xs" style={{ color: '#5C3693' }}>Learn</button>
              </div>
            </div>
            <div className="bg-[#f3f4f6] rounded-xl p-4 flex items-center gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#472A71] flex items-center justify-center text-white font-bold text-lg">SC</div>
              <div className="flex-1">
                <div className="text-gray-900 font-semibold text-sm">Scalability</div>
                <div className="text-gray-500 text-xs">Auto-Scaling Ready</div>
              </div>
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
          </div>
        );
      case "cloud-sync":
        return (
          <div className="flex-1 flex flex-col gap-3 px-4 py-4 overflow-y-auto">
            <div className="bg-[#f3f4f6] rounded-xl p-4 flex flex-col gap-2 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#5C3693] flex items-center justify-center text-white font-bold text-lg">SY</div>
                <div>
                  <div className="text-gray-900 font-semibold text-sm">Real-time Sync</div>
                  <div className="text-gray-500 text-xs">Instant Updates</div>
                </div>
              </div>
              <div className="text-gray-700 text-xs mt-2">Seamless data synchronization across devices with offline support.</div>
              <div className="flex gap-2 mt-2">
                <button className="px-3 py-1 rounded-full font-semibold text-xs" style={{ background: '#5C3693', color: '#fff' }}>Sync</button>
                <button className="px-3 py-1 rounded-full border border-[#e5e7eb] font-semibold text-xs" style={{ color: '#5C3693' }}>Setup</button>
              </div>
            </div>
            <div className="bg-[#f3f4f6] rounded-xl p-4 flex items-center gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#472A71] flex items-center justify-center text-white font-bold text-lg">OF</div>
              <div className="flex-1">
                <div className="text-gray-900 font-semibold text-sm">Offline Support</div>
                <div className="text-gray-500 text-xs">Always Works</div>
              </div>
              <div className="w-3 h-3 rounded-full bg-blue-400" />
            </div>
          </div>
        );
      case "cloud-backend":
        return (
          <div className="flex-1 flex flex-col gap-3 px-4 py-4 overflow-y-auto">
            <div className="bg-[#f3f4f6] rounded-xl p-4 flex flex-col gap-2 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#5C3693] flex items-center justify-center text-white font-bold text-lg">BE</div>
                <div>
                  <div className="text-gray-900 font-semibold text-sm">Cloud Backend</div>
                  <div className="text-gray-500 text-xs">Serverless & Managed</div>
                </div>
              </div>
              <div className="text-gray-700 text-xs mt-2">Serverless functions, managed databases, and APIs at scale.</div>
              <div className="flex gap-2 mt-2">
                <button className="px-3 py-1 rounded-full font-semibold text-xs" style={{ background: '#5C3693', color: '#fff' }}>Build</button>
                <button className="px-3 py-1 rounded-full border border-[#e5e7eb] font-semibold text-xs" style={{ color: '#5C3693' }}>Docs</button>
              </div>
            </div>
            <div className="bg-[#f3f4f6] rounded-xl p-4 flex items-center gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#472A71] flex items-center justify-center text-white font-bold text-lg">API</div>
              <div className="flex-1">
                <div className="text-gray-900 font-semibold text-sm">REST & GraphQL</div>
                <div className="text-gray-500 text-xs">Full Coverage</div>
              </div>
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
          </div>
        );
      case "cloud-testing":
        return (
          <div className="flex-1 flex flex-col gap-3 px-4 py-4 overflow-y-auto">
            <div className="bg-[#f3f4f6] rounded-xl p-4 flex flex-col gap-2 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#5C3693] flex items-center justify-center text-white font-bold text-lg">QA</div>
                <div>
                  <div className="text-gray-900 font-semibold text-sm">Testing & QA</div>
                  <div className="text-gray-500 text-xs">Cloud Testing</div>
                </div>
              </div>
              <div className="text-gray-700 text-xs mt-2">Performance testing, load testing, and security validation.</div>
              <div className="flex gap-2 mt-2">
                <button className="px-3 py-1 rounded-full font-semibold text-xs" style={{ background: '#5C3693', color: '#fff' }}>Test</button>
                <button className="px-3 py-1 rounded-full border border-[#e5e7eb] font-semibold text-xs" style={{ color: '#5C3693' }}>Report</button>
              </div>
            </div>
            <div className="bg-[#f3f4f6] rounded-xl p-4 flex items-center gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#472A71] flex items-center justify-center text-white font-bold text-lg">PM</div>
              <div className="flex-1">
                <div className="text-gray-900 font-semibold text-sm">Performance</div>
                <div className="text-gray-500 text-xs">Optimized</div>
              </div>
              <div className="w-3 h-3 rounded-full bg-blue-400" />
            </div>
          </div>
        );
      case "cloud-scale":
        return (
          <div className="flex-1 flex flex-col gap-3 px-4 py-4 overflow-y-auto">
            <div className="bg-[#f3f4f6] rounded-xl p-4 flex flex-col gap-2 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#5C3693] flex items-center justify-center text-white font-bold text-lg">SC</div>
                <div>
                  <div className="text-gray-900 font-semibold text-sm">Scale Management</div>
                  <div className="text-gray-500 text-xs">Load Balancing</div>
                </div>
              </div>
              <div className="text-gray-700 text-xs mt-2">Auto-scaling, load balancing, and multi-region deployment.</div>
              <div className="flex gap-2 mt-2">
                <button className="px-3 py-1 rounded-full font-semibold text-xs" style={{ background: '#5C3693', color: '#fff' }}>Scale</button>
                <button className="px-3 py-1 rounded-full border border-[#e5e7eb] font-semibold text-xs" style={{ color: '#5C3693' }}>Details</button>
              </div>
            </div>
            <div className="bg-[#f3f4f6] rounded-xl p-4 flex items-center gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#472A71] flex items-center justify-center text-white font-bold text-lg">MR</div>
              <div className="flex-1">
                <div className="text-gray-900 font-semibold text-sm">Multi-Region</div>
                <div className="text-gray-500 text-xs">Global Coverage</div>
              </div>
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
          </div>
        );
      case "cloud-maintenance":
        return (
          <div className="flex-1 flex flex-col gap-3 px-4 py-4 overflow-y-auto">
            <div className="bg-[#f3f4f6] rounded-xl p-4 flex flex-col gap-2 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#5C3693] flex items-center justify-center text-white font-bold text-lg">MT</div>
                <div>
                  <div className="text-gray-900 font-semibold text-sm">Monitoring</div>
                  <div className="text-gray-500 text-xs">24/7 Alerts</div>
                </div>
              </div>
              <div className="text-gray-700 text-xs mt-2">Real-time monitoring, alerting, and incident management.</div>
              <div className="flex gap-2 mt-2">
                <button className="px-3 py-1 rounded-full font-semibold text-xs" style={{ background: '#5C3693', color: '#fff' }}>Monitor</button>
                <button className="px-3 py-1 rounded-full border border-[#e5e7eb] font-semibold text-xs" style={{ color: '#5C3693' }}>Support</button>
              </div>
            </div>
            <div className="bg-[#f3f4f6] rounded-xl p-4 flex items-center gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#472A71] flex items-center justify-center text-white font-bold text-lg">AN</div>
              <div className="flex-1">
                <div className="text-gray-900 font-semibold text-sm">Always On</div>
                <div className="text-gray-500 text-xs">99.99% Uptime</div>
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
        <div className="text-sm font-semibold" style={{ color: COLORS.white }}>Ready for cloud-native mobile?</div>
        <div className="text-xs" style={{ color: COLORS.textMuted }}>Let’s build your scalable, future-ready app today.</div>
      </div>
      <div className="flex items-center gap-3">
        <a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Get in Touch</a>
        <a href="/work" className="px-3 py-2 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>Portfolio</a>
      </div>
    </div>
  </div>
);

const CloudMobileAppDevelopment: React.FC = () => {
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
        <section className="mt-8">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: COLORS.primary }}>
              Why Choose Axonary for Cloud Mobile App Development?
            </h2>
            <ul className="list-disc pl-6 text-lg text-gray-300 space-y-2">
              <li>Proven expertise in AWS, Azure, and Google Cloud mobile solutions</li>
              <li>End-to-end development: strategy, design, engineering, and support</li>
              <li>Focus on security, compliance, and future scalability</li>
              <li>Transparent process, agile delivery, and measurable results</li>
              <li>Dedicated support and continuous optimization</li>
            </ul>
          </div>
        </section>
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
              Ready to Build Your Cloud-Powered Mobile App?
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Unlock your business potential with a custom mobile app engineered for cloud performance, scale, and user delight. Let Axonary turn your vision into a top-rated app.
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

export default CloudMobileAppDevelopment;
