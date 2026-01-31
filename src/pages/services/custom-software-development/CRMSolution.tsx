// CRMSolution.tsx
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
    id: "crm-implementation",
    title: "CRM Implementation",
    desc:
      "Deploy industry-leading CRM systems tailored to your sales, marketing, and customer service needs. Maximize customer relationships and revenue.",
    imgQuery: "customer relationship management",
  },
  {
    id: "crm-customization",
    title: "CRM Customization",
    desc:
      "Customize CRM workflows, fields, and modules to match your business processes. Flexible solutions for unique requirements.",
    imgQuery: "business automation",
  },
  {
    id: "crm-integration",
    title: "Integration & APIs",
    desc:
      "Seamlessly integrate CRM with your existing tools and platforms. Data synchronization, webhooks, and custom API development.",
    imgQuery: "api integration",
  },
  {
    id: "crm-automation",
    title: "Workflow Automation",
    desc:
      "Automate sales processes, lead scoring, and customer communications. Increase productivity and reduce manual work.",
    imgQuery: "workflow automation",
  },
  {
    id: "crm-analytics",
    title: "Analytics & Reporting",
    desc:
      "Advanced dashboards and reports for sales forecasting and performance tracking. Data-driven decision making.",
    imgQuery: "data analytics",
  },
  {
    id: "crm-support",
    title: "Training & Support",
    desc:
      "Comprehensive training programs and ongoing support. Ensure successful adoption and user engagement.",
    imgQuery: "customer support",
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
              CRM Solutions
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
          <a href="#crm-implementation" className="hover:text-white">Implementation</a>
          <a href="#crm-customization" className="hover:text-white">Customization</a>
          <a href="#crm-integration" className="hover:text-white">Integration</a>
          <a href="#crm-automation" className="hover:text-white">Automation</a>
          <a href="#crm-analytics" className="hover:text-white">Analytics</a>
          <a href="#crm-support" className="hover:text-white">Support</a>
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
            Customer-Centric • Scalable • Integrated
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            CRM Solutions{" "}
            <span style={{ color: COLORS.primary }}>| Axonary</span>
          </h1>

          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Build stronger customer relationships with powerful CRM systems. Streamline sales, marketing, and support operations.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <a href="#crm-implementation" className="px-6 py-3 rounded-full font-semibold inline-flex items-center gap-3" style={{ background: COLORS.primary, color: COLORS.white }}>
              Explore Services
            </a>
            <a href="/contact" className="px-5 py-3 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>
              Request Consultation
            </a>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="rounded-2xl p-6" style={{ background: COLORS.card }}>
            <h5 className="text-sm text-gray-400">CRM Success</h5>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">400+</div>
                <div className="text-xs text-gray-400">CRM Projects</div>
              </div>
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">250%</div>
                <div className="text-xs text-gray-400">Avg ROI</div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-300">Ready to boost sales? Let's implement your CRM solution.</p>
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
        case 0: // Implementation
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs><linearGradient id="crm0" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
              <rect x="100" y="100" width="200" height="200" rx="12" fill="url(#crm0)" opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
              <circle cx="140" cy="140" r="20" fill={COLORS.secondary} opacity="0.7" />
              <circle cx="200" cy="140" r="20" fill={COLORS.secondary} opacity="0.7" />
              <circle cx="260" cy="140" r="20" fill={COLORS.secondary} opacity="0.7" />
              <path d="M 140 170 L 200 170 L 260 170" stroke="white" strokeWidth="2" opacity="0.6" />
              <path d="M 140 200 L 200 200 L 260 200" stroke="white" strokeWidth="2" opacity="0.6" />
              <path d="M 140 230 L 200 230 L 260 230" stroke="white" strokeWidth="2" opacity="0.6" />
              <text x="200" y="310" fontSize="18" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">SETUP</text>
            </svg>
          );
        case 1: // Customization
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs><linearGradient id="crm1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
              <circle cx="200" cy="200" r="80" fill="none" stroke={COLORS.primary} strokeWidth="2" opacity="0.4" />
              <circle cx="200" cy="200" r="60" fill="url(#crm1)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
              <g opacity="0.7">
                <path d="M 180 185 L 220 185 M 200 165 L 200 205 M 185 200 L 215 200" stroke="white" strokeWidth="2.5" />
              </g>
              <circle cx="120" cy="120" r="15" fill={COLORS.secondary} opacity="0.6" />
              <circle cx="280" cy="120" r="15" fill={COLORS.secondary} opacity="0.6" />
              <circle cx="120" cy="280" r="15" fill={COLORS.secondary} opacity="0.6" />
              <circle cx="280" cy="280" r="15" fill={COLORS.secondary} opacity="0.6" />
              <text x="200" y="310" fontSize="18" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">PERSONALIZE</text>
            </svg>
          );
        case 2: // Integration
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs><linearGradient id="crm2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
              <g opacity="0.8">
                <path d="M 100 150 L 120 150 L 120 250 L 100 250" stroke={COLORS.primary} strokeWidth="2" fill="none" />
                <path d="M 300 150 L 280 150 L 280 250 L 300 250" stroke={COLORS.primary} strokeWidth="2" fill="none" />
                <rect x="130" y="170" width="140" height="60" rx="6" fill="url(#crm2)" opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
              </g>
              <circle cx="100" cy="200" r="12" fill={COLORS.secondary} opacity="0.7" />
              <circle cx="300" cy="200" r="12" fill={COLORS.secondary} opacity="0.7" />
              <path d="M 130 200 L 115 200 M 285 200 L 270 200" stroke={COLORS.primary} strokeWidth="2" />
              <text x="200" y="310" fontSize="18" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">SYNC</text>
            </svg>
          );
        case 3: // Automation
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs><linearGradient id="crm3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
              <circle cx="200" cy="180" r="50" fill="url(#crm3)" opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
              <path d="M 180 170 L 180 190 M 200 150 L 200 170" stroke="white" strokeWidth="3" strokeLinecap="round" />
              <path d="M 220 170 L 220 190 M 200 190 L 200 210" stroke="white" strokeWidth="3" strokeLinecap="round" />
              <circle cx="200" cy="180" r="50" fill="none" stroke={COLORS.primary} strokeWidth="1" opacity="0.2">
                <animate attributeName="r" values="50;65;50" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <g opacity="0.6">
                <path d="M 120 260 L 140 240 L 160 250 L 180 235 L 200 245 L 220 235 L 240 245 L 260 240 L 280 260" stroke={COLORS.primary} strokeWidth="2" fill="none" />
              </g>
              <text x="200" y="320" fontSize="18" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">AUTOMATE</text>
            </svg>
          );
        case 4: // Analytics
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs><linearGradient id="crm4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
              <g opacity="0.8">
                <rect x="110" y="210" width="30" height="70" rx="4" fill={COLORS.secondary} opacity="0.7" />
                <rect x="155" y="170" width="30" height="110" rx="4" fill={COLORS.secondary} opacity="0.7" />
                <rect x="200" y="140" width="30" height="140" rx="4" fill="url(#crm4)" opacity="0.9" />
                <rect x="245" y="160" width="30" height="120" rx="4" fill={COLORS.secondary} opacity="0.7" />
              </g>
              <path d="M 105 285 L 290 285" stroke={COLORS.primary} strokeWidth="2" opacity="0.5" />
              <circle cx="125" cy="210" r="4" fill={COLORS.primary} />
              <circle cx="170" cy="170" r="4" fill={COLORS.primary} />
              <circle cx="215" cy="140" r="4" fill={COLORS.primary} />
              <circle cx="260" cy="160" r="4" fill={COLORS.primary} />
              <text x="200" y="320" fontSize="18" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">ANALYZE</text>
            </svg>
          );
        case 5: // Support
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs><linearGradient id="crm5" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
              <g opacity="0.7">
                <path d="M 170 140 Q 200 120 230 140 Q 240 160 230 180 L 170 180 Q 160 160 170 140" fill="url(#crm5)" opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
                <circle cx="185" cy="160" r="4" fill="white" />
                <circle cx="215" cy="160" r="4" fill="white" />
                <path d="M 185 175 Q 200 180 215 175" stroke="white" strokeWidth="1.5" fill="none" />
              </g>
              <circle cx="120" cy="260" r="16" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1" />
              <circle cx="200" cy="280" r="16" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1" />
              <circle cx="280" cy="260" r="16" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1" />
              <path d="M 190 220 L 150 260 M 210 220 L 250 260 M 200 220 L 200 280" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.4" />
              <text x="200" y="330" fontSize="18" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">SUPPORT</text>
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
          <div className="text-sm font-semibold" style={{ color: COLORS.white }}>Ready to grow your sales pipeline?</div>
          <div className="text-xs" style={{ color: COLORS.textMuted }}>Implement CRM today.</div>
        </div>

        <div className="flex items-center gap-3">
          <a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Get in Touch</a>
          <a href="/work" className="px-3 py-2 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>Portfolio</a>
        </div>
      </div>
    </div>
  );
};

const CRMSolution: React.FC = () => {
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

export default CRMSolution;