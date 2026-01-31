// WebPortalsSolution.tsx
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
    id: "portal-design",
    title: "Portal Design",
    desc:
      "Create engaging web portals with intuitive navigation and user-centric design. Perfect for B2B and B2C platforms.",
    imgQuery: "web portal",
  },
  {
    id: "portal-dashboard",
    title: "Dashboard Development",
    desc:
      "Build interactive dashboards with real-time data visualization and analytics integration.",
    imgQuery: "dashboard analytics",
  },
  {
    id: "portal-authentication",
    title: "Authentication & Security",
    desc:
      "Implement secure authentication systems, role-based access control, and data encryption.",
    imgQuery: "security portal",
  },
  {
    id: "portal-content",
    title: "Content Management",
    desc:
      "Develop flexible CMS systems for easy content management and multi-language support.",
    imgQuery: "content management",
  },
  {
    id: "portal-integration",
    title: "API Integration",
    desc:
      "Connect your portal with third-party services, databases, and legacy systems seamlessly.",
    imgQuery: "api integration",
  },
  {
    id: "portal-support",
    title: "Support & Maintenance",
    desc:
      "24/7 support, monitoring, and maintenance for optimal portal performance.",
    imgQuery: "technical support",
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
              Web Portals Solutions
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
          <a href="#portal-design" className="hover:text-white">Design</a>
          <a href="#portal-dashboard" className="hover:text-white">Dashboard</a>
          <a href="#portal-authentication" className="hover:text-white">Security</a>
          <a href="#portal-content" className="hover:text-white">Content</a>
          <a href="#portal-integration" className="hover:text-white">Integration</a>
          <a href="#portal-support" className="hover:text-white">Support</a>
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
            Feature-Rich • Secure • Scalable
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            Web Portals Solutions{" "}
            <span style={{ color: COLORS.primary }}>| Axonary</span>
          </h1>

          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Enterprise-grade web portals designed for efficiency, scalability, and user engagement.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <a href="#portal-design" className="px-6 py-3 rounded-full font-semibold inline-flex items-center gap-3" style={{ background: COLORS.primary, color: COLORS.white }}>
              Explore Services
            </a>
            <a href="/contact" className="px-5 py-3 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>
              Request Consultation
            </a>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="rounded-2xl p-6" style={{ background: COLORS.card }}>
            <h5 className="text-sm text-gray-400">Portal Success</h5>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">800+</div>
                <div className="text-xs text-gray-400">Web Portals Deployed</div>
              </div>
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-xs text-gray-400">Uptime Guarantee</div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-300">Ready to launch your portal? Let's get started.</p>
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
        case 0: // Portal Design → DESIGN
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="portal0" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="portalGlow0">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#portalGlow0)">
                <rect x="110" y="100" width="180" height="180" rx="10" fill="none" stroke={COLORS.primary} strokeWidth="2.5" opacity="0.6" />
                <line x1="110" y1="140" x2="290" y2="140" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.3" />
                <rect x="120" y="155" width="160" height="110" fill="url(#portal0)" opacity="0.15" stroke={COLORS.primary} strokeWidth="1" />
              </g>
              <circle cx="135" cy="120" r="5" fill={COLORS.primary} opacity="0.7" />
              <circle cx="155" cy="120" r="5" fill={COLORS.primary} opacity="0.5" />
              <circle cx="175" cy="120" r="5" fill={COLORS.primary} opacity="0.5" />
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">DESIGN</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Portal Design</text>
            </svg>
          );
        case 1: // Dashboard → VISUALIZE
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="portal1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="portalGlow1">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#portalGlow1)">
                <rect x="120" y="110" width="160" height="140" rx="8" fill="none" stroke={COLORS.primary} strokeWidth="2" opacity="0.5" />
                <rect x="130" y="125" width="35" height="45" fill={COLORS.secondary} opacity="0.6" stroke={COLORS.primary} strokeWidth="1" />
                <rect x="175" y="140" width="35" height="30" fill="url(#portal1)" opacity="0.8" stroke={COLORS.primary} strokeWidth="1" />
                <rect x="220" y="150" width="35" height="20" fill={COLORS.secondary} opacity="0.6" stroke={COLORS.primary} strokeWidth="1" />
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">VISUALIZE</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Dashboard</text>
            </svg>
          );
        case 2: // Authentication & Security → PROTECT
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="portal2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="portalGlow2">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#portalGlow2)">
                <path d="M 200 110 L 260 145 L 260 230 Q 200 270 140 230 L 140 145 Z" fill="url(#portal2)" opacity="0.2" stroke={COLORS.primary} strokeWidth="2.5" />
                <circle cx="200" cy="180" r="22" fill={COLORS.secondary} opacity="0.5" stroke={COLORS.primary} strokeWidth="1.5" />
              </g>
              <path d="M 194 175 L 201 182 L 212 168" fill="none" stroke={COLORS.primary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">PROTECT</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Security</text>
            </svg>
          );
        case 3: // Content Management → MANAGE
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="portal3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="portalGlow3">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#portalGlow3)">
                <rect x="130" y="100" width="140" height="170" rx="8" fill="url(#portal3)" opacity="0.1" stroke={COLORS.primary} strokeWidth="2" />
                <line x1="140" y1="130" x2="260" y2="130" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.4" />
                <line x1="140" y1="155" x2="260" y2="155" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.4" />
                <line x1="140" y1="180" x2="240" y2="180" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.4" />
                <line x1="140" y1="205" x2="260" y2="205" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.4" />
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">MANAGE</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Content</text>
            </svg>
          );
        case 4: // API Integration → CONNECT
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="portal4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="portalGlow4">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#portalGlow4)">
                <circle cx="130" cy="170" r="26" fill="none" stroke={COLORS.primary} strokeWidth="2" opacity="0.6" />
                <circle cx="200" cy="160" r="28" fill="url(#portal4)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2.5" />
                <circle cx="270" cy="170" r="26" fill="none" stroke={COLORS.primary} strokeWidth="2" opacity="0.6" />
                <line x1="156" y1="170" x2="174" y2="165" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.4" />
                <line x1="226" y1="165" x2="244" y2="170" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.4" />
              </g>
              <circle cx="130" cy="170" r="8" fill={COLORS.primary} opacity="0.5" />
              <circle cx="270" cy="170" r="8" fill={COLORS.primary} opacity="0.5" />
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">CONNECT</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Integration</text>
            </svg>
          );
        case 5: // Support & Maintenance → SUPPORT
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="portal5" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="portalGlow5">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#portalGlow5)">
                <circle cx="200" cy="150" r="30" fill="url(#portal5)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2.5" />
                <circle cx="130" cy="220" r="20" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
                <circle cx="200" cy="250" r="20" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
                <circle cx="270" cy="220" r="20" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
                <line x1="180" y1="175" x2="140" y2="200" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.3" />
                <line x1="200" y1="180" x2="200" y2="230" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.3" />
                <line x1="220" y1="175" x2="260" y2="200" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.3" />
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">SUPPORT</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Maintenance</text>
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
          <div className="text-sm font-semibold" style={{ color: COLORS.white }}>Ready to launch?</div>
          <div className="text-xs" style={{ color: COLORS.textMuted }}>Bring your portal vision to life.</div>
        </div>

        <div className="flex items-center gap-3">
          <a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Get in Touch</a>
          <a href="/work" className="px-3 py-2 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>Portfolio</a>
        </div>
      </div>
    </div>
  );
};

const WebPortalsSolution: React.FC = () => {
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

export default WebPortalsSolution;
