// HRMSolution.tsx
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
    id: "hrm-implementation",
    title: "HRM Implementation",
    desc:
      "Deploy comprehensive HR management systems for recruitment, onboarding, and employee management. Streamline HR operations.",
    imgQuery: "human resources",
  },
  {
    id: "hrm-customization",
    title: "System Customization",
    desc:
      "Customize HRM systems to match your organizational structure and workflows. Integrate with existing tools seamlessly.",
    imgQuery: "business integration",
  },
  {
    id: "hrm-payroll",
    title: "Payroll Integration",
    desc:
      "Integrate payroll systems with accurate salary calculations, tax compliance, and direct deposits.",
    imgQuery: "payroll management",
  },
  {
    id: "hrm-analytics",
    title: "Analytics & Reporting",
    desc:
      "Advanced analytics and dashboards for HR metrics, employee performance, and workforce planning.",
    imgQuery: "data analytics",
  },
  {
    id: "hrm-compliance",
    title: "Compliance Management",
    desc:
      "Ensure labor law compliance, document management, and audit trails. Stay compliant with regulations.",
    imgQuery: "compliance",
  },
  {
    id: "hrm-training",
    title: "User Training",
    desc:
      "Comprehensive training for HR teams and employees. Maximize system adoption and effectiveness.",
    imgQuery: "training",
  },
];



const TopNav: React.FC<{ progress: number }> = ({ progress }) => {
  return (
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
              HRM Solutions
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
          <a href="#hrm-implementation" className="hover:text-white">Implementation</a>
          <a href="#hrm-customization" className="hover:text-white">Customization</a>
          <a href="#hrm-payroll" className="hover:text-white">Payroll</a>
          <a href="#hrm-analytics" className="hover:text-white">Analytics</a>
          <a href="#hrm-compliance" className="hover:text-white">Compliance</a>
          <a href="#hrm-training" className="hover:text-white">Training</a>
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
};

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-[72vh] flex items-center"
      style={{ background: COLORS.bg, color: COLORS.white }}
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7">
          <div className="inline-block rounded-full px-4 py-1 text-sm font-medium" style={{ background: `${COLORS.secondary}33`, color: COLORS.white }}>
            Comprehensive • Compliant • Employee-Centric
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            HRM Solutions{" "}
            <span style={{ color: COLORS.primary }}>| Axonary</span>
          </h1>

          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Manage your human capital efficiently. From recruitment to retirement, streamline every HR process.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <a href="#hrm-implementation" className="px-6 py-3 rounded-full font-semibold inline-flex items-center gap-3" style={{ background: COLORS.primary, color: COLORS.white }}>
              Explore Services
            </a>
            <a href="/contact" className="px-5 py-3 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>
              Request Consultation
            </a>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="rounded-2xl p-6" style={{ background: COLORS.card }}>
            <h5 className="text-sm text-gray-400">HRM Success</h5>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">350+</div>
                <div className="text-xs text-gray-400">HRM Implementations</div>
              </div>
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">40%</div>
                <div className="text-xs text-gray-400">Efficiency Improvement</div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-300">Ready to transform your HR operations? Let's get started.</p>
              <div className="mt-4">
                <a href="/contact" className="inline-block px-4 py-2 rounded-full" style={{ background: COLORS.primary, color: COLORS.white }}>Schedule Consultation</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SplitSection: React.FC<{ idx: number; id: string; title: string; desc: string; }> = ({ idx, id, title, desc }) => {
  const isLeftImage = idx % 2 === 0;

  const Placeholder = () => {
    const getSVG = () => {
      switch(idx) {
        case 0: // Implementation → DEPLOY org chart
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="hrm0" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="hrmGlow0">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#hrmGlow0)">
                <circle cx="200" cy="100" r="26" fill="url(#hrm0)" opacity="0.95" stroke={COLORS.primary} strokeWidth="2" />
                <circle cx="120" cy="180" r="20" fill={COLORS.secondary} opacity="0.8" stroke={COLORS.primary} strokeWidth="1.5" />
                <circle cx="200" cy="200" r="20" fill={COLORS.secondary} opacity="0.8" stroke={COLORS.primary} strokeWidth="1.5" />
                <circle cx="280" cy="180" r="20" fill={COLORS.secondary} opacity="0.8" stroke={COLORS.primary} strokeWidth="1.5" />
                <line x1="200" y1="126" x2="120" y2="160" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.4" />
                <line x1="200" y1="126" x2="200" y2="180" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.4" />
                <line x1="200" y1="126" x2="280" y2="160" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.4" />
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">DEPLOY</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Implementation</text>
            </svg>
          );
        case 1: // Customization → CONFIGURE structure
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="hrm1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="hrmGlow1">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#hrmGlow1)">
                <circle cx="200" cy="150" r="28" fill="url(#hrm1)" opacity="0.95" stroke={COLORS.primary} strokeWidth="2">
                  <animate attributeName="r" values="28;32;28" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="110" cy="130" r="18" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
                <circle cx="290" cy="130" r="18" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
                <circle cx="110" cy="220" r="18" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
                <circle cx="290" cy="220" r="18" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
                <line x1="172" y1="150" x2="128" y2="130" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.3" />
                <line x1="228" y1="150" x2="272" y2="130" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.3" />
                <line x1="172" y1="150" x2="128" y2="220" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.3" />
                <line x1="228" y1="150" x2="272" y2="220" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.3" />
              </g>
              <path d="M 190 140 L 210 140 L 210 160 L 190 160 Z" fill="none" stroke="white" strokeWidth="2" opacity="0.6" />
              <line x1="194" y1="148" x2="206" y2="148" stroke="white" strokeWidth="1" opacity="0.4" />
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">CONFIGURE</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Customization</text>
            </svg>
          );
        case 2: // Payroll → CALCULATE
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="hrm2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="hrmGlow2">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#hrmGlow2)">
                <rect x="130" y="100" width="140" height="160" rx="12" fill="url(#hrm2)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2" />
                <circle cx="160" cy="140" r="16" fill={COLORS.secondary} opacity="0.8" stroke={COLORS.primary} strokeWidth="1.5" />
                <circle cx="240" cy="140" r="16" fill={COLORS.secondary} opacity="0.8" stroke={COLORS.primary} strokeWidth="1.5" />
                <circle cx="160" cy="210" r="16" fill={COLORS.secondary} opacity="0.8" stroke={COLORS.primary} strokeWidth="1.5" />
                <circle cx="240" cy="210" r="16" fill={COLORS.secondary} opacity="0.8" stroke={COLORS.primary} strokeWidth="1.5" />
              </g>
              <path d="M 195 130 L 205 130 L 205 150 L 195 150 Z" fill={COLORS.primary} opacity="0.6" />
              <text x="200" y="130" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle" dy="4">$</text>
              <line x1="140" y1="175" x2="260" y2="175" stroke={COLORS.primary} strokeWidth="1" opacity="0.3" />
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">CALCULATE</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Payroll</text>
            </svg>
          );
        case 3: // Analytics → ANALYZE
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="hrm3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="hrmGlow3">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#hrmGlow3)">
                <rect x="130" y="130" width="20" height="100" rx="2" fill="url(#hrm3)" opacity="0.8" stroke={COLORS.primary} strokeWidth="1" />
                <rect x="165" y="100" width="20" height="130" rx="2" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1" />
                <rect x="200" y="110" width="20" height="120" rx="2" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1" />
                <rect x="235" y="90" width="20" height="140" rx="2" fill="url(#hrm3)" opacity="0.85" stroke={COLORS.primary} strokeWidth="1" />
                <line x1="120" y1="240" x2="270" y2="240" stroke={COLORS.primary} strokeWidth="2" opacity="0.3" />
              </g>
              <path d="M 180 60 L 190 60 L 190 70 L 180 70 Z" fill={COLORS.primary} opacity="0.4" />
              <circle cx="185" cy="50" r="4" fill={COLORS.primary} opacity="0.3">
                <animate attributeName="r" values="4;6;4" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">ANALYZE</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Analytics</text>
            </svg>
          );
        case 4: // Compliance → VERIFY
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="hrm4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="hrmGlow4">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#hrmGlow4)">
                <rect x="140" y="120" width="120" height="140" rx="8" fill="url(#hrm4)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2.5" />
                <circle cx="200" cy="160" r="24" fill={COLORS.secondary} opacity="0.3" stroke={COLORS.primary} strokeWidth="1.5" />
              </g>
              <path d="M 190 160 L 197 167 L 217 147" fill="none" stroke={COLORS.primary} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
              <circle cx="200" cy="235" r="12" fill={COLORS.primary} opacity="0.4" />
              <text x="200" y="235" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle" dy="3">✓</text>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">VERIFY</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Compliance</text>
            </svg>
          );
        case 5: // Training → EDUCATE
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="hrm5" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="hrmGlow5">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#hrmGlow5)">
                <circle cx="200" cy="140" r="28" fill="url(#hrm5)" opacity="0.95" stroke={COLORS.primary} strokeWidth="2" />
                <circle cx="110" cy="220" r="18" fill={COLORS.secondary} opacity="0.75" stroke={COLORS.primary} strokeWidth="1.5">
                  <animate attributeName="opacity" values="0.75;0.95;0.75" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="200" cy="260" r="18" fill={COLORS.secondary} opacity="0.75" stroke={COLORS.primary} strokeWidth="1.5">
                  <animate attributeName="opacity" values="0.75;0.95;0.75" dur="2.3s" repeatCount="indefinite" />
                </circle>
                <circle cx="290" cy="220" r="18" fill={COLORS.secondary} opacity="0.75" stroke={COLORS.primary} strokeWidth="1.5">
                  <animate attributeName="opacity" values="0.75;0.95;0.75" dur="2.6s" repeatCount="indefinite" />
                </circle>
                <line x1="180" y1="158" x2="120" y2="202" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.3" />
                <line x1="200" y1="168" x2="200" y2="242" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.3" />
                <line x1="220" y1="158" x2="280" y2="202" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.3" />
              </g>
              <text x="200" y="145" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle" dy="3">👨‍🏫</text>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">EDUCATE</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Training</text>
            </svg>
          );
        default:
          return null;
      }
    };

    return (
      <div className="rounded-2xl shadow-lg w-full overflow-hidden" style={{ background: COLORS.card, aspectRatio: '1', maxWidth: '360px' }}>
        {getSVG()}
      </div>
    );
  };

  return (
    <section id={id} className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-stretch">
          {isLeftImage ? (
            <>
              <div className="md:col-span-6 flex items-center justify-center">
                <Placeholder />
              </div>

              <div className="md:col-span-6 flex items-center">
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
              <div className="md:col-span-6 flex items-center">
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
                <Placeholder />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

const FooterCTA: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-[92%] md:w-[720px]">
      <div
        className="rounded-2xl p-4 flex items-center justify-between shadow-xl"
        style={{
          background: `linear-gradient(90deg, rgba(92,54,147,0.12), rgba(71,42,113,0.06))`,
          border: "1px solid rgba(255,255,255,0.03)",
        }}
      >
        <div>
          <div className="text-sm font-semibold" style={{ color: COLORS.white }}>Ready to transform HR?</div>
          <div className="text-xs" style={{ color: COLORS.textMuted }}>Streamline HR operations today.</div>
        </div>

        <div className="flex items-center gap-3">
          <a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Get in Touch</a>
          <a href="/work" className="px-3 py-2 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>Portfolio</a>
        </div>
      </div>
    </div>
  );
};

const HRMSolution: React.FC = () => {
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

        <div className="mt-8">
          {services.map((s, idx) => (
            <SplitSection key={s.id} idx={idx} id={s.id} title={s.title} desc={s.desc} />
          ))}
        </div>

        <div style={{ height: 160 }} />
      </main>

      <FooterCTA />

    </div>
  );
};

export default HRMSolution;