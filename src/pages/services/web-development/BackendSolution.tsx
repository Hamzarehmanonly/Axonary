// BackendSolution.tsx
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
    id: "backend-architecture",
    title: "System Architecture",
    desc:
      "Design scalable, reliable backend systems. Microservices, monolithic, or serverless architecture.",
    imgQuery: "system architecture",
  },
  {
    id: "backend-database",
    title: "Database Design",
    desc:
      "Optimize database schemas, query performance, and data integrity. SQL and NoSQL expertise.",
    imgQuery: "database design",
  },
  {
    id: "backend-api",
    title: "API Development",
    desc:
      "Build robust REST & GraphQL APIs with authentication, authorization, and rate limiting.",
    imgQuery: "api development",
  },
  {
    id: "backend-security",
    title: "Security & Compliance",
    desc:
      "Implement security best practices, encryption, data protection, and regulatory compliance.",
    imgQuery: "cybersecurity",
  },
  {
    id: "backend-integration",
    title: "Third-party Integration",
    desc:
      "Seamless integration with payment gateways, email services, cloud platforms, and more.",
    imgQuery: "integration services",
  },
  {
    id: "backend-deployment",
    title: "DevOps & Deployment",
    desc:
      "CI/CD pipelines, containerization, cloud deployment, and monitoring. Zero-downtime updates.",
    imgQuery: "devops deployment",
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
              Backend Solutions
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
          <a href="#backend-architecture" className="hover:text-white">Architecture</a>
          <a href="#backend-database" className="hover:text-white">Database</a>
          <a href="#backend-api" className="hover:text-white">API</a>
          <a href="#backend-security" className="hover:text-white">Security</a>
          <a href="#backend-integration" className="hover:text-white">Integration</a>
          <a href="#backend-deployment" className="hover:text-white">DevOps</a>
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
            Robust • Scalable • Secure
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            Backend Development{" "}
            <span style={{ color: COLORS.primary }}>| Axonary</span>
          </h1>

          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Enterprise-grade backend systems built for performance, reliability, and scalability.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <a href="#backend-architecture" className="px-6 py-3 rounded-full font-semibold inline-flex items-center gap-3" style={{ background: COLORS.primary, color: COLORS.white }}>
              Explore Services
            </a>
            <a href="/contact" className="px-5 py-3 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>
              Request Consultation
            </a>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="rounded-2xl p-6" style={{ background: COLORS.card }}>
            <h5 className="text-sm text-gray-400">Backend Success</h5>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">700+</div>
                <div className="text-xs text-gray-400">Backend Systems</div>
              </div>
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">99.99%</div>
                <div className="text-xs text-gray-400">Availability</div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-300">Ready to scale your backend? Let's get started.</p>
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
        case 0: // System Architecture → ARCHITECT
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="be0" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="beGlow0">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#beGlow0)">
                <rect x="130" y="120" width="45" height="45" rx="4" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
                <rect x="225" y="120" width="45" height="45" rx="4" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
                <rect x="177" y="200" width="45" height="45" rx="4" fill="url(#be0)" opacity="0.85" stroke={COLORS.primary} strokeWidth="1.5" />
                <line x1="152" y1="165" x2="195" y2="200" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.4" />
                <line x1="247" y1="165" x2="205" y2="200" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.4" />
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">ARCHITECT</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Architecture</text>
            </svg>
          );
        case 1: // Database Design → OPTIMIZE
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="be1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="beGlow1">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#beGlow1)">
                <ellipse cx="200" cy="140" rx="35" ry="25" fill="none" stroke={COLORS.primary} strokeWidth="2.5" opacity="0.5" />
                <rect x="165" y="165" width="70" height="50" fill="url(#be1)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2" />
                <ellipse cx="200" cy="215" rx="35" ry="25" fill="none" stroke={COLORS.primary} strokeWidth="2.5" opacity="0.5" />
              </g>
              <line x1="180" y1="148" x2="180" y2="162" stroke={COLORS.primary} strokeWidth="1" opacity="0.3" />
              <line x1="220" y1="148" x2="220" y2="162" stroke={COLORS.primary} strokeWidth="1" opacity="0.3" />
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">OPTIMIZE</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Database</text>
            </svg>
          );
        case 2: // API Development → CODE
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="be2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="beGlow2">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#beGlow2)">
                <rect x="120" y="110" width="160" height="160" rx="8" fill="none" stroke={COLORS.primary} strokeWidth="2.5" opacity="0.5" />
                <line x1="140" y1="135" x2="200" y2="135" stroke="url(#be2)" strokeWidth="2" opacity="0.7" />
                <line x1="140" y1="160" x2="240" y2="160" stroke={COLORS.secondary} strokeWidth="1.5" opacity="0.5" />
                <line x1="140" y1="185" x2="220" y2="185" stroke={COLORS.secondary} strokeWidth="1.5" opacity="0.5" />
                <line x1="140" y1="210" x2="200" y2="210" stroke={COLORS.secondary} strokeWidth="1.5" opacity="0.5" />
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">CODE</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">API</text>
            </svg>
          );
        case 3: // Security & Compliance → SECURE
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="be3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="beGlow3">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#beGlow3)">
                <path d="M 200 110 L 260 145 L 260 230 Q 200 270 140 230 L 140 145 Z" fill="url(#be3)" opacity="0.2" stroke={COLORS.primary} strokeWidth="2.5" />
                <rect x="180" y="160" width="40" height="50" rx="3" fill={COLORS.secondary} opacity="0.4" stroke={COLORS.primary} strokeWidth="1" />
              </g>
              <circle cx="200" cy="175" r="4" fill={COLORS.primary} opacity="0.7" />
              <line x1="200" y1="185" x2="200" y2="195" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.6" />
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">SECURE</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Security</text>
            </svg>
          );
        case 4: // Third-party Integration → INTEGRATE
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="be4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="beGlow4">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#beGlow4)">
                <rect x="100" y="150" width="50" height="50" rx="6" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
                <rect x="250" y="150" width="50" height="50" rx="6" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
                <rect x="175" y="160" width="50" height="50" rx="6" fill="url(#be4)" opacity="0.85" stroke={COLORS.primary} strokeWidth="1.5" />
                <line x1="150" y1="175" x2="175" y2="175" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.4" />
                <line x1="225" y1="175" x2="250" y2="175" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.4" />
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">INTEGRATE</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Integration</text>
            </svg>
          );
        case 5: // DevOps & Deployment → DEPLOY
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="be5" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="beGlow5">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#beGlow5)">
                <circle cx="140" cy="160" r="24" fill={COLORS.secondary} opacity="0.6" stroke={COLORS.primary} strokeWidth="2" />
                <circle cx="200" cy="150" r="28" fill="url(#be5)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2.5" />
                <circle cx="260" cy="160" r="24" fill={COLORS.secondary} opacity="0.6" stroke={COLORS.primary} strokeWidth="2" />
                <path d="M 164 160 L 172 160" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.4" />
                <path d="M 228 160 L 236 160" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.4" />
              </g>
              <path d="M 200 140 L 200 120 M 194 124 L 200 120 L 206 124" fill="none" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.7" strokeLinecap="round" />
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">DEPLOY</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">DevOps</text>
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
          <div className="text-xs" style={{ color: COLORS.textMuted }}>Scale your backend infrastructure.</div>
        </div>

        <div className="flex items-center gap-3">
          <a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Get in Touch</a>
          <a href="/work" className="px-3 py-2 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>Portfolio</a>
        </div>
      </div>
    </div>
  );
};

const BackendSolution: React.FC = () => {
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
          © {new Date().getFullYear()} Axonary — Backend Excellence. Always.
        </div>
      </footer>
    </div>
  );
};

export default BackendSolution;
