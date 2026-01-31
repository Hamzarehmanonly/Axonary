// ERPSolution.tsx
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
    id: "erp-implementation",
    title: "ERP Implementation",
    desc:
      "Complete ERP system deployment tailored to your business processes. Seamless integration with existing systems and minimal downtime.",
    imgQuery: "enterprise resource planning",
  },
  {
    id: "erp-customization",
    title: "ERP Customization",
    desc:
      "Customize ERP modules to match your unique business requirements. Flexible configuration without compromising system stability.",
    imgQuery: "business process automation",
  },
  {
    id: "erp-integration",
    title: "System Integration",
    desc:
      "Integrate ERP with your existing software ecosystem. APIs, data migration, and third-party integrations handled expertly.",
    imgQuery: "system integration",
  },
  {
    id: "erp-training",
    title: "User Training & Support",
    desc:
      "Comprehensive training programs for your team. Ongoing support to ensure smooth adoption and maximum ROI.",
    imgQuery: "team training",
  },
  {
    id: "erp-migration",
    title: "ERP Migration",
    desc:
      "Migrate from legacy systems to modern ERP solutions. Zero-downtime migration with data integrity guaranteed.",
    imgQuery: "data migration enterprise",
  },
  {
    id: "erp-support",
    title: "Ongoing Support & Optimization",
    desc:
      "24/7 technical support and continuous optimization. Keep your ERP running at peak performance.",
    imgQuery: "enterprise support",
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
              ERP Solutions
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
          <a href="#erp-implementation" className="hover:text-white">Implementation</a>
          <a href="#erp-customization" className="hover:text-white">Customization</a>
          <a href="#erp-integration" className="hover:text-white">Integration</a>
          <a href="#erp-training" className="hover:text-white">Training</a>
          <a href="#erp-migration" className="hover:text-white">Migration</a>
          <a href="#erp-support" className="hover:text-white">Support</a>
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
            Enterprise • Scalable • Integrated
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            ERP Solutions{" "}
            <span style={{ color: COLORS.primary }}>| Axonary</span>
          </h1>

          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Transform your business with enterprise-grade ERP solutions. Streamline operations, improve efficiency, and drive growth with integrated systems.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <a href="#erp-implementation" className="px-6 py-3 rounded-full font-semibold inline-flex items-center gap-3" style={{ background: COLORS.primary, color: COLORS.white }}>
              Explore Services
            </a>
            <a href="/contact" className="px-5 py-3 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>
              Request Consultation
            </a>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="rounded-2xl p-6" style={{ background: COLORS.card }}>
            <h5 className="text-sm text-gray-400">ERP Success</h5>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-xs text-gray-400">ERP Projects</div>
              </div>
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-xs text-gray-400">Success Rate</div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-300">Ready to transform your enterprise? Let's implement your ERP solution.</p>
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
    // Unique SVG for each section
    const getSVG = () => {
      switch(idx) {
        case 0: // Implementation
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="impl-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" />
                </linearGradient>
              </defs>
              <rect x="80" y="120" width="240" height="200" rx="12" fill="url(#impl-grad)" opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
              <rect x="100" y="140" width="60" height="60" rx="6" fill={COLORS.secondary} opacity="0.7" />
              <rect x="180" y="140" width="60" height="60" rx="6" fill={COLORS.secondary} opacity="0.7" />
              <rect x="260" y="140" width="60" height="60" rx="6" fill={COLORS.secondary} opacity="0.7" />
              <circle cx="130" cy="170" r="15" fill="white" opacity="0.6" />
              <circle cx="210" cy="170" r="15" fill="white" opacity="0.6" />
              <circle cx="290" cy="170" r="15" fill="white" opacity="0.6" />
              <text x="200" y="250" fontSize="20" fontWeight="bold" fill="white" textAnchor="middle" opacity="0.8">DEPLOY</text>
              <line x1="120" y1="280" x2="280" y2="280" stroke={COLORS.primary} strokeWidth="2" opacity="0.4" />
              <circle cx="200" cy="320" r="20" fill={COLORS.primary} opacity="0.5" />
            </svg>
          );
        case 1: // Customization
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="custom-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" />
                </linearGradient>
              </defs>
              <g opacity="0.8">
                <circle cx="140" cy="140" r="35" fill="none" stroke={COLORS.primary} strokeWidth="3" />
                <circle cx="260" cy="140" r="35" fill="none" stroke={COLORS.primary} strokeWidth="3" />
                <circle cx="200" cy="240" r="35" fill="none" stroke={COLORS.primary} strokeWidth="3" />
                <line x1="140" y1="140" x2="260" y2="140" stroke={COLORS.primary} strokeWidth="2" opacity="0.5" />
                <line x1="200" y1="140" x2="200" y2="205" stroke={COLORS.primary} strokeWidth="2" opacity="0.5" />
              </g>
              <circle cx="140" cy="140" r="20" fill="url(#custom-grad)" />
              <circle cx="260" cy="140" r="20" fill="url(#custom-grad)" />
              <circle cx="200" cy="240" r="20" fill="url(#custom-grad)" />
              <text x="200" y="340" fontSize="18" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">CONFIGURE</text>
            </svg>
          );
        case 2: // Integration
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="integ-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" />
                </linearGradient>
              </defs>
              <rect x="60" y="130" width="80" height="140" rx="8" fill={COLORS.secondary} opacity="0.6" stroke={COLORS.primary} strokeWidth="2" />
              <rect x="160" y="80" width="80" height="240" rx="8" fill="url(#integ-grad)" opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
              <rect x="260" y="130" width="80" height="140" rx="8" fill={COLORS.secondary} opacity="0.6" stroke={COLORS.primary} strokeWidth="2" />
              <path d="M 140 200 L 160 200" stroke={COLORS.primary} strokeWidth="3" fill="none" />
              <path d="M 240 200 L 260 200" stroke={COLORS.primary} strokeWidth="3" fill="none" />
              <polygon points="155,195 160,200 155,205" fill={COLORS.primary} />
              <polygon points="265,195 270,200 265,205" fill={COLORS.primary} />
              <text x="200" y="340" fontSize="18" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">CONNECT</text>
            </svg>
          );
        case 3: // Training
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="train-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" />
                </linearGradient>
              </defs>
              <circle cx="200" cy="160" r="50" fill="url(#train-grad)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
              <circle cx="200" cy="160" r="50" fill="none" stroke={COLORS.primary} strokeWidth="1" opacity="0.3">
                <animate attributeName="r" values="50;60;50" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="130" cy="240" r="18" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
              <circle cx="200" cy="260" r="18" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
              <circle cx="270" cy="240" r="18" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
              <line x1="200" y1="210" x2="130" y2="240" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.4" />
              <line x1="200" y1="210" x2="200" y2="260" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.4" />
              <line x1="200" y1="210" x2="270" y2="240" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.4" />
              <text x="200" y="340" fontSize="18" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">EDUCATE</text>
            </svg>
          );
        case 4: // Migration
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="migr-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" />
                </linearGradient>
              </defs>
              <rect x="60" y="150" width="100" height="100" rx="8" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="2" />
              <path d="M 170 190 Q 200 160 230 190" stroke={COLORS.primary} strokeWidth="3" fill="none" />
              <polygon points="230,190 245,185 240,200" fill={COLORS.primary} />
              <rect x="240" y="150" width="100" height="100" rx="8" fill="url(#migr-grad)" opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
              <path d="M 110 250 L 290 250" stroke={COLORS.primary} strokeWidth="2" opacity="0.3" />
              <circle cx="110" cy="250" r="8" fill={COLORS.secondary} opacity="0.6" />
              <circle cx="290" cy="250" r="8" fill={COLORS.primary} opacity="0.8" />
              <text x="200" y="340" fontSize="18" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">MIGRATE</text>
            </svg>
          );
        case 5: // Support
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="supp-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" />
                </linearGradient>
              </defs>
              <circle cx="200" cy="180" r="60" fill="url(#supp-grad)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
              <circle cx="200" cy="180" r="60" fill="none" stroke={COLORS.primary} strokeWidth="1" opacity="0.2">
                <animate attributeName="r" values="60;75;60" dur="3s" repeatCount="indefinite" />
              </circle>
              <path d="M 190 170 L 190 190 M 185 180 L 195 180" stroke="white" strokeWidth="3" />
              <path d="M 210 170 L 210 190 M 205 180 L 215 180" stroke="white" strokeWidth="3" />
              <circle cx="140" cy="290" r="12" fill={COLORS.secondary} opacity="0.6" />
              <circle cx="200" cy="310" r="12" fill={COLORS.secondary} opacity="0.6" />
              <circle cx="260" cy="290" r="12" fill={COLORS.secondary} opacity="0.6" />
              <line x1="200" y1="240" x2="140" y2="290" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.3" />
              <line x1="200" y1="240" x2="200" y2="310" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.3" />
              <line x1="200" y1="240" x2="260" y2="290" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.3" />
              <text x="200" y="360" fontSize="18" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">24/7 SUPPORT</text>
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
          <div className="text-sm font-semibold" style={{ color: COLORS.white }}>Ready to implement ERP?</div>
          <div className="text-xs" style={{ color: COLORS.textMuted }}>Transform your enterprise today.</div>
        </div>

        <div className="flex items-center gap-3">
          <a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Get in Touch</a>
          <a href="/work" className="px-3 py-2 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>Portfolio</a>
        </div>
      </div>
    </div>
  );
};

const ERPSolution: React.FC = () => {
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

export default ERPSolution;