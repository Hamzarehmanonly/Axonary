// FrontendSolution.tsx
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
    id: "frontend-design",
    title: "UI/UX Design",
    desc:
      "Create beautiful, user-centric interfaces with responsive design. From mockups to implementation.",
    imgQuery: "ui design",
  },
  {
    id: "frontend-react",
    title: "React Development",
    desc:
      "Build interactive, component-based applications with React. Fast, efficient, and scalable.",
    imgQuery: "react development",
  },
  {
    id: "frontend-performance",
    title: "Performance Optimization",
    desc:
      "Optimize loading times, bundle sizes, and rendering. Deliver lightning-fast experiences.",
    imgQuery: "performance optimization",
  },
  {
    id: "frontend-accessibility",
    title: "Accessibility & Compliance",
    desc:
      "Ensure WCAG compliance and inclusive design. Accessible for all users.",
    imgQuery: "web accessibility",
  },
  {
    id: "frontend-responsive",
    title: "Responsive Design",
    desc:
      "Mobile-first design that works perfectly on all devices and screen sizes.",
    imgQuery: "responsive design",
  },
  {
    id: "frontend-testing",
    title: "Testing & QA",
    desc:
      "Comprehensive testing strategies: unit, integration, and E2E testing.",
    imgQuery: "software testing",
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
              Frontend Solutions
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
          <a href="#frontend-design" className="hover:text-white">Design</a>
          <a href="#frontend-react" className="hover:text-white">React</a>
          <a href="#frontend-performance" className="hover:text-white">Performance</a>
          <a href="#frontend-accessibility" className="hover:text-white">Accessibility</a>
          <a href="#frontend-responsive" className="hover:text-white">Responsive</a>
          <a href="#frontend-testing" className="hover:text-white">Testing</a>
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
            Modern • Fast • Accessible
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            Frontend Development{" "}
            <span style={{ color: COLORS.primary }}>| Axonary</span>
          </h1>

          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Create stunning, responsive web experiences with modern frameworks and best practices.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <a href="#frontend-design" className="px-6 py-3 rounded-full font-semibold inline-flex items-center gap-3" style={{ background: COLORS.primary, color: COLORS.white }}>
              Explore Services
            </a>
            <a href="/contact" className="px-5 py-3 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>
              Request Consultation
            </a>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="rounded-2xl p-6" style={{ background: COLORS.card }}>
            <h5 className="text-sm text-gray-400">Frontend Success</h5>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">600+</div>
                <div className="text-xs text-gray-400">Frontend Projects</div>
              </div>
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-xs text-gray-400">Performance Score</div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-300">Ready to build your frontend? Let's get started.</p>
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
        case 0: // UI/UX Design → CRAFT
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="fe0" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="feGlow0">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#feGlow0)">
                <rect x="120" y="110" width="160" height="160" rx="12" fill="none" stroke={COLORS.primary} strokeWidth="2.5" opacity="0.6" />
                <circle cx="160" cy="150" r="16" fill="url(#fe0)" opacity="0.8" stroke={COLORS.primary} strokeWidth="1" />
                <rect x="190" y="140" width="60" height="30" rx="4" fill={COLORS.secondary} opacity="0.5" stroke={COLORS.primary} strokeWidth="1" />
              </g>
              <path d="M 135 220 L 265 220" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.3" />
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">CRAFT</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">UI/UX Design</text>
            </svg>
          );
        case 1: // React Development → BUILD
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="fe1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="feGlow1">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#feGlow1)">
                <circle cx="200" cy="170" r="28" fill="url(#fe1)" opacity="0.2" stroke={COLORS.primary} strokeWidth="2.5" />
                <circle cx="140" cy="140" r="20" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
                <circle cx="260" cy="140" r="20" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
                <circle cx="140" cy="220" r="20" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
                <circle cx="260" cy="220" r="20" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
                <line x1="170" y1="152" x2="230" y2="152" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.3" />
                <line x1="170" y1="188" x2="230" y2="188" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.3" />
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">BUILD</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">React</text>
            </svg>
          );
        case 2: // Performance Optimization → ACCELERATE
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="fe2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="feGlow2">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#feGlow2)">
                <path d="M 110 200 L 160 150 L 210 180 L 260 130 L 290 170" fill="none" stroke="url(#fe2)" strokeWidth="3" opacity="0.7" strokeLinecap="round" />
                <circle cx="160" cy="150" r="6" fill={COLORS.primary} opacity="0.8" />
                <circle cx="210" cy="180" r="6" fill={COLORS.primary} opacity="0.8" />
                <circle cx="260" cy="130" r="6" fill={COLORS.primary} opacity="0.8" />
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">ACCELERATE</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Performance</text>
            </svg>
          );
        case 3: // Accessibility & Compliance → INCLUDE
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="fe3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="feGlow3">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#feGlow3)">
                <circle cx="200" cy="150" r="24" fill="url(#fe3)" opacity="0.2" stroke={COLORS.primary} strokeWidth="2" />
                <circle cx="200" cy="150" r="12" fill={COLORS.primary} opacity="0.6" />
                <circle cx="140" cy="220" r="18" fill={COLORS.secondary} opacity="0.6" stroke={COLORS.primary} strokeWidth="1.5" />
                <circle cx="200" cy="240" r="18" fill={COLORS.secondary} opacity="0.6" stroke={COLORS.primary} strokeWidth="1.5" />
                <circle cx="260" cy="220" r="18" fill={COLORS.secondary} opacity="0.6" stroke={COLORS.primary} strokeWidth="1.5" />
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">INCLUDE</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Accessibility</text>
            </svg>
          );
        case 4: // Responsive Design → ADAPT
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="fe4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="feGlow4">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#feGlow4)">
                <rect x="130" y="110" width="80" height="140" rx="6" fill="url(#fe4)" opacity="0.2" stroke={COLORS.primary} strokeWidth="2" />
                <line x1="135" y1="125" x2="205" y2="125" stroke={COLORS.primary} strokeWidth="1" opacity="0.3" />
                <line x1="135" y1="140" x2="205" y2="140" stroke={COLORS.primary} strokeWidth="1" opacity="0.3" />
                <rect x="190" y="110" width="60" height="140" rx="6" fill="none" stroke={COLORS.primary} strokeWidth="2" opacity="0.5" />
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">ADAPT</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Responsive</text>
            </svg>
          );
        case 5: // Testing & QA → VALIDATE
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="fe5" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="feGlow5">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#feGlow5)">
                <rect x="130" y="120" width="140" height="120" rx="8" fill="none" stroke={COLORS.primary} strokeWidth="2.5" opacity="0.5" />
                <circle cx="165" cy="160" r="14" fill={COLORS.secondary} opacity="0.6" stroke={COLORS.primary} strokeWidth="1" />
                <circle cx="200" cy="160" r="14" fill={COLORS.secondary} opacity="0.6" stroke={COLORS.primary} strokeWidth="1" />
                <circle cx="235" cy="160" r="14" fill={COLORS.secondary} opacity="0.6" stroke={COLORS.primary} strokeWidth="1" />
              </g>
              <path d="M 165 158 L 169 162 L 177 154" fill="none" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.7" strokeLinecap="round" />
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">VALIDATE</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Testing</text>
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
          <div className="text-sm font-semibold" style={{ color: COLORS.white }}>Ready to build?</div>
          <div className="text-xs" style={{ color: COLORS.textMuted }}>Create amazing frontend experiences.</div>
        </div>

        <div className="flex items-center gap-3">
          <a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Get in Touch</a>
          <a href="/work" className="px-3 py-2 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>Portfolio</a>
        </div>
      </div>
    </div>
  );
};

const FrontendSolution: React.FC = () => {
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
          © {new Date().getFullYear()} Axonary — Frontend Excellence. Always.
        </div>
      </footer>
    </div>
  );
};

export default FrontendSolution;
