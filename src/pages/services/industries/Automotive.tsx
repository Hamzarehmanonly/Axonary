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
    id: "automotive-development",
    title: "Automotive Software Development",
    desc: "Custom software solutions for vehicle diagnostics, infotainment systems, and fleet management platforms.",
  },
  {
    id: "telematics",
    title: "Telematics & GPS Solutions",
    desc: "Real-time vehicle tracking, remote diagnostics, and IoT integration for connected vehicles.",
  },
  {
    id: "automotive-ecommerce",
    title: "Automotive E-Commerce",
    desc: "Online platforms for parts distribution, dealer management, and customer engagement.",
  },
  {
    id: "auto-maintenance",
    title: "Maintenance & Service Platforms",
    desc: "Digital solutions for scheduling, service management, and customer communication.",
  },
  {
    id: "autonomous-systems",
    title: "Autonomous Systems Integration",
    desc: "Advanced AI and sensor integration for autonomous vehicle platforms.",
  },
  {
    id: "compliance-solutions",
    title: "Compliance & Regulatory Solutions",
    desc: "Software to ensure compliance with automotive standards and regulations.",
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
              Automotive Solutions
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
          <a href="#automotive-development" className="hover:text-white">Development</a>
          <a href="#telematics" className="hover:text-white">Telematics</a>
          <a href="#automotive-ecommerce" className="hover:text-white">E-Commerce</a>
          <a href="#auto-maintenance" className="hover:text-white">Maintenance</a>
          <a href="#autonomous-systems" className="hover:text-white">Autonomous</a>
          <a href="#compliance-solutions" className="hover:text-white">Compliance</a>
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
            Innovative • Reliable • Industry-Focused
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            Automotive Solutions{" "}
            <span style={{ color: COLORS.primary }}>| Axonary</span>
          </h1>

          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Transform your automotive business with cutting-edge software solutions designed for the modern vehicle ecosystem.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <a href="#automotive-development" className="px-6 py-3 rounded-full font-semibold inline-flex items-center gap-3" style={{ background: COLORS.primary, color: COLORS.white }}>
              Explore Services
            </a>
            <a href="/contact" className="px-5 py-3 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>
              Request Consultation
            </a>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="rounded-2xl p-6" style={{ background: COLORS.card }}>
            <h5 className="text-sm text-gray-400">Automotive Excellence</h5>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">150+</div>
                <div className="text-xs text-gray-400">Auto Projects</div>
              </div>
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">99%</div>
                <div className="text-xs text-gray-400">Uptime</div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-300">Ready to accelerate your automotive innovation? Let's build your next solution.</p>
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
        case 0:
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs><linearGradient id="auto0" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
              <rect x="80" y="140" width="240" height="120" rx="20" fill="url(#auto0)" opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
              <circle cx="130" cy="260" r="25" fill={COLORS.secondary} opacity="0.8" stroke={COLORS.primary} strokeWidth="2" />
              <circle cx="270" cy="260" r="25" fill={COLORS.secondary} opacity="0.8" stroke={COLORS.primary} strokeWidth="2" />
              <rect x="120" y="160" width="160" height="40" rx="8" fill={COLORS.primary} opacity="0.6" />
              <text x="200" y="340" fontSize="16" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">SOFTWARE</text>
            </svg>
          );
        case 1:
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs><linearGradient id="auto1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
              <circle cx="200" cy="160" r="60" fill="url(#auto1)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
              <circle cx="200" cy="160" r="60" fill="none" stroke={COLORS.primary} strokeWidth="1" opacity="0.2"><animate attributeName="r" values="60;75;60" dur="2.5s" repeatCount="indefinite" /></circle>
              <g opacity="0.7"><path d="M 190 150 L 190 170 M 210 150 L 210 170 M 200 140 L 200 180" stroke="white" strokeWidth="2" /><circle cx="200" cy="160" r="8" fill="white" opacity="0.5" /></g>
              <text x="200" y="320" fontSize="16" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">TRACKING</text>
            </svg>
          );
        case 2:
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs><linearGradient id="auto2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
              <rect x="90" y="130" width="220" height="160" rx="16" fill="url(#auto2)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
              <rect x="110" y="150" width="180" height="30" fill={COLORS.secondary} opacity="0.5" rx="6" />
              <circle cx="130" cy="210" r="12" fill="white" opacity="0.7" />
              <circle cx="200" cy="210" r="12" fill="white" opacity="0.7" />
              <circle cx="270" cy="210" r="12" fill="white" opacity="0.7" />
              <path d="M 140 240 L 260 240" stroke={COLORS.primary} strokeWidth="2" opacity="0.4" />
              <text x="200" y="320" fontSize="16" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">COMMERCE</text>
            </svg>
          );
        case 3:
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs><linearGradient id="auto3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
              <path d="M 200 110 L 270 150 L 270 230 Q 270 280 200 310 Q 130 280 130 230 L 130 150 Z" fill="url(#auto3)" opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
              <g opacity="0.8"><circle cx="200" cy="180" r="20" fill="none" stroke="white" strokeWidth="2" /><path d="M 200 165 L 200 195 M 185 180 L 215 180" stroke="white" strokeWidth="2" /></g>
              <text x="200" y="340" fontSize="16" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">MAINTENANCE</text>
            </svg>
          );
        case 4:
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs><linearGradient id="auto4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
              <circle cx="200" cy="170" r="55" fill="url(#auto4)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
              <path d="M 170 140 L 230 140 L 230 200 L 170 200 Z" fill={COLORS.secondary} opacity="0.4" />
              <g opacity="0.7"><path d="M 180 160 L 220 160 M 180 180 L 220 180 M 200 150 L 200 190" stroke="white" strokeWidth="1.5" /></g>
              <text x="200" y="320" fontSize="16" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">AUTONOMOUS</text>
            </svg>
          );
        case 5:
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs><linearGradient id="auto5" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
              <path d="M 130 180 L 200 120 L 270 180" fill="url(#auto5)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
              <path d="M 150 200 L 250 200 L 250 260 L 150 260 Z" fill={COLORS.secondary} opacity="0.4" stroke={COLORS.primary} strokeWidth="1.5" />
              <circle cx="170" cy="230" r="8" fill="white" opacity="0.6" />
              <circle cx="230" cy="230" r="8" fill="white" opacity="0.6" />
              <text x="200" y="310" fontSize="16" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">COMPLIANCE</text>
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

              <div className="md:col-span-6 flex items-center justify-center">
                <div className="max-w-xl w-full" style={{ textAlign: 'left' }}>
                  <div className="inline-block rounded-full px-3 py-1 text-sm font-medium" style={{ background: `${COLORS.secondary}22`, color: COLORS.white }}>
                    {title.split(" ")[0]}
                  </div>

                  <h3 className="mt-4 text-2xl md:text-3xl font-bold" style={{ color: COLORS.white }}>
                    {title}
                  </h3>

                  <p className="mt-4 text-lg text-gray-300">{desc}</p>

                  <div className="mt-6 flex items-center gap-3">
                    <a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>
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
              <div className="md:col-span-6 flex items-center justify-center">
                <div className="max-w-xl w-full" style={{ textAlign: 'left' }}>
                  <div className="inline-block rounded-full px-3 py-1 text-sm font-medium" style={{ background: `${COLORS.secondary}22`, color: COLORS.white }}>
                    {title.split(" ")[0]}
                  </div>

                  <h3 className="mt-4 text-2xl md:text-3xl font-bold" style={{ color: COLORS.white }}>
                    {title}
                  </h3>

                  <p className="mt-4 text-lg text-gray-300">{desc}</p>

                  <div className="mt-6 flex items-center gap-3">
                    <a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>
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
          <div className="text-sm font-semibold" style={{ color: COLORS.white }}>Ready to transform your automotive business?</div>
          <div className="text-xs" style={{ color: COLORS.textMuted }}>Start innovating today.</div>
        </div>

        <div className="flex items-center gap-3">
          <a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Get in Touch</a>
          <a href="/work" className="px-3 py-2 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>Portfolio</a>
        </div>
      </div>
    </div>
  );
};

const Automotive: React.FC = () => {
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

      <footer className="mt-20 py-10">
        <div className="container mx-auto px-6 text-center text-sm" style={{ color: COLORS.textMuted }}>
          © {new Date().getFullYear()} Axonary — Automotive Excellence. Always.
        </div>
      </footer>
    </div>
  );
};

export default Automotive;
