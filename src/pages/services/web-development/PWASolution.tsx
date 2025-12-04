// PWASolution.tsx
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
    id: "pwa-architecture",
    title: "PWA Architecture",
    desc:
      "Design progressive web apps with offline capabilities, fast loading, and app-like experience.",
    imgQuery: "progressive web app",
  },
  {
    id: "pwa-development",
    title: "PWA Development",
    desc:
      "Build PWAs using modern web technologies. Works on all devices and browsers.",
    imgQuery: "web app development",
  },
  {
    id: "pwa-offline",
    title: "Offline First",
    desc:
      "Service workers and caching strategies for seamless offline functionality.",
    imgQuery: "offline application",
  },
  {
    id: "pwa-notifications",
    title: "Push Notifications",
    desc:
      "Implement push notifications and real-time updates for user engagement.",
    imgQuery: "push notifications",
  },
  {
    id: "pwa-installation",
    title: "App Installation",
    desc:
      "Enable users to install your PWA as a native app on their home screen.",
    imgQuery: "app installation",
  },
  {
    id: "pwa-performance",
    title: "Performance & Analytics",
    desc:
      "Optimize performance, monitor analytics, and track user engagement metrics.",
    imgQuery: "performance analytics",
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
              PWA Solutions
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
          <a href="#pwa-architecture" className="hover:text-white">Architecture</a>
          <a href="#pwa-development" className="hover:text-white">Development</a>
          <a href="#pwa-offline" className="hover:text-white">Offline</a>
          <a href="#pwa-notifications" className="hover:text-white">Notifications</a>
          <a href="#pwa-installation" className="hover:text-white">Installation</a>
          <a href="#pwa-performance" className="hover:text-white">Performance</a>
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
            App-Like • Reliable • Engaging
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            Progressive Web Apps{" "}
            <span style={{ color: COLORS.primary }}>| Axonary</span>
          </h1>

          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Build powerful progressive web applications that work offline, load instantly, and feel like native apps.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <a href="#pwa-architecture" className="px-6 py-3 rounded-full font-semibold inline-flex items-center gap-3" style={{ background: COLORS.primary, color: COLORS.white }}>
              Explore Services
            </a>
            <a href="/contact" className="px-5 py-3 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>
              Request Consultation
            </a>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="rounded-2xl p-6" style={{ background: COLORS.card }}>
            <h5 className="text-sm text-gray-400">PWA Success</h5>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">250+</div>
                <div className="text-xs text-gray-400">PWA Applications</div>
              </div>
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">4.8/5</div>
                <div className="text-xs text-gray-400">Avg. User Rating</div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-300">Ready to go progressive? Let's get started.</p>
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
              <defs>
                <linearGradient id="pwa0" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="pwaGlow0"><feGaussianBlur stdDeviation="3" result="coloredBlur" /><feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
              </defs>
              <g filter="url(#pwaGlow0)">
                <rect x="120" y="110" width="160" height="160" rx="12" fill="url(#pwa0)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2.5" />
                <path d="M 165 140 L 200 115 L 235 140 L 235 210 Q 200 235 165 210 Z" fill={COLORS.secondary} opacity="0.6" stroke={COLORS.primary} strokeWidth="1.5" />
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">ARCHITECT</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Architecture</text>
            </svg>
          );
        case 1:
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="pwa1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="pwaGlow1"><feGaussianBlur stdDeviation="3" result="coloredBlur" /><feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
              </defs>
              <g filter="url(#pwaGlow1)">
                <rect x="150" y="100" width="100" height="160" rx="8" fill="none" stroke={COLORS.primary} strokeWidth="2.5" opacity="0.6" />
                <rect x="160" y="115" width="80" height="100" fill="url(#pwa1)" opacity="0.4" stroke={COLORS.primary} strokeWidth="1" />
                <circle cx="200" cy="230" r="6" fill={COLORS.primary} opacity="0.6" />
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">BUILD</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Development</text>
            </svg>
          );
        case 2:
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="pwa2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="pwaGlow2"><feGaussianBlur stdDeviation="3" result="coloredBlur" /><feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
              </defs>
              <g filter="url(#pwaGlow2)">
                <circle cx="200" cy="170" r="40" fill="none" stroke={COLORS.primary} strokeWidth="2" opacity="0.4" />
                <circle cx="200" cy="170" r="28" fill="url(#pwa2)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2.5" />
                <circle cx="200" cy="170" r="12" fill={COLORS.primary} opacity="0.8" />
              </g>
              <path d="M 240 130 L 260 110 M 240 210 L 260 230 M 160 130 L 140 110 M 160 210 L 140 230" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.3" />
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">OFFLINE</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Offline First</text>
            </svg>
          );
        case 3:
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="pwa3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="pwaGlow3"><feGaussianBlur stdDeviation="3" result="coloredBlur" /><feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
              </defs>
              <g filter="url(#pwaGlow3)">
                <circle cx="200" cy="150" r="32" fill="url(#pwa3)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2.5" />
                <path d="M 200 130 L 210 145 L 190 145 Z" fill={COLORS.primary} opacity="0.8" />
                <circle cx="200" cy="150" r="6" fill={COLORS.primary} opacity="0.6" />
              </g>
              <circle cx="160" cy="220" r="16" fill={COLORS.secondary} opacity="0.6" stroke={COLORS.primary} strokeWidth="1.5" />
              <circle cx="240" cy="220" r="16" fill={COLORS.secondary} opacity="0.6" stroke={COLORS.primary} strokeWidth="1.5" />
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">NOTIFY</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Notifications</text>
            </svg>
          );
        case 4:
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="pwa4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="pwaGlow4"><feGaussianBlur stdDeviation="3" result="coloredBlur" /><feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
              </defs>
              <g filter="url(#pwaGlow4)">
                <rect x="145" y="125" width="110" height="110" rx="20" fill="none" stroke={COLORS.primary} strokeWidth="2.5" opacity="0.6" />
                <rect x="160" y="145" width="80" height="80" fill="url(#pwa4)" opacity="0.4" stroke={COLORS.primary} strokeWidth="1" rx="12" />
              </g>
              <path d="M 175 170 L 180 175 L 190 165" fill="none" stroke={COLORS.primary} strokeWidth="2" opacity="0.7" strokeLinecap="round" />
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">INSTALL</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Installation</text>
            </svg>
          );
        case 5:
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="pwa5" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="pwaGlow5"><feGaussianBlur stdDeviation="3" result="coloredBlur" /><feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
              </defs>
              <g filter="url(#pwaGlow5)">
                <path d="M 130 200 L 160 150 L 190 180 L 240 130 L 270 170" fill="none" stroke="url(#pwa5)" strokeWidth="3" opacity="0.8" strokeLinecap="round" />
                <circle cx="160" cy="150" r="5" fill={COLORS.primary} opacity="0.8" />
                <circle cx="190" cy="180" r="5" fill={COLORS.primary} opacity="0.8" />
                <circle cx="240" cy="130" r="5" fill={COLORS.primary} opacity="0.8" />
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">OPTIMIZE</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Performance</text>
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
          <div className="text-sm font-semibold" style={{ color: COLORS.white }}>Ready to go progressive?</div>
          <div className="text-xs" style={{ color: COLORS.textMuted }}>Build your next-gen PWA.</div>
        </div>
        <div className="flex items-center gap-3">
          <a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Get in Touch</a>
          <a href="/work" className="px-3 py-2 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>Portfolio</a>
        </div>
      </div>
    </div>
  );
};

const PWASolution: React.FC = () => {
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
          © {new Date().getFullYear()} Axonary — PWA Excellence. Always.
        </div>
      </footer>
    </div>
  );
};

export default PWASolution;
