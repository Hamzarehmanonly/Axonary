// CloudApplicationDevelopment.tsx
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
    id: "cloud-app-architecture",
    title: "Cloud Architecture Design",
    desc:
      "Design scalable, secure cloud architectures tailored to your business. AWS, Azure, GCP expertise with best practices.",
    imgQuery: "cloud architecture",
  },
  {
    id: "cloud-app-development",
    title: "Cloud-Native Development",
    desc:
      "Build cloud-native applications with microservices, containerization, and serverless technologies for maximum scalability.",
    imgQuery: "cloud application development",
  },
  {
    id: "cloud-app-api",
    title: "API Development & Integration",
    desc:
      "Create robust APIs and integrate with cloud services. RESTful, GraphQL, and event-driven architectures.",
    imgQuery: "api development cloud",
  },
  {
    id: "cloud-app-deployment",
    title: "Deployment & CI/CD",
    desc:
      "Automate deployment pipelines with CI/CD tools. Docker, Kubernetes, and orchestration for seamless releases.",
    imgQuery: "deployment pipeline",
  },
  {
    id: "cloud-app-database",
    title: "Database & Data Management",
    desc:
      "Manage databases in cloud environments. Relational, NoSQL, and data warehouse solutions with optimization.",
    imgQuery: "cloud database",
  },
  {
    id: "cloud-app-security",
    title: "Cloud Security & Compliance",
    desc:
      "Implement security best practices, IAM, encryption, and compliance frameworks for cloud applications.",
    imgQuery: "cloud security",
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
              Cloud Application Solutions
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
          <a href="#cloud-app-architecture" className="hover:text-white">Architecture</a>
          <a href="#cloud-app-development" className="hover:text-white">Development</a>
          <a href="#cloud-app-api" className="hover:text-white">APIs</a>
          <a href="#cloud-app-deployment" className="hover:text-white">Deployment</a>
          <a href="#cloud-app-database" className="hover:text-white">Database</a>
          <a href="#cloud-app-security" className="hover:text-white">Security</a>
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
            Scalable • Secure • Enterprise-Ready
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            Cloud Application{" "}
            <span style={{ color: COLORS.primary }}>Development | Axonary</span>
          </h1>

          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Build powerful cloud applications that scale with your business. From architecture to deployment, we handle it all.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <a href="#cloud-app-architecture" className="px-6 py-3 rounded-full font-semibold inline-flex items-center gap-3" style={{ background: COLORS.primary, color: COLORS.white }}>
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
                <div className="text-2xl font-bold">400+</div>
                <div className="text-xs text-gray-400">Cloud Apps Deployed</div>
              </div>
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">99.99%</div>
                <div className="text-xs text-gray-400">Uptime Guarantee</div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-300">Ready to scale your applications? Let's get started.</p>
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
        case 0: // Architecture → DESIGN
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="cloud0" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="cloudGlow0">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#cloudGlow0)">
                <rect x="120" y="120" width="160" height="120" rx="8" fill="url(#cloud0)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2" />
                <circle cx="160" cy="160" r="20" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
                <circle cx="200" cy="160" r="20" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
                <circle cx="240" cy="160" r="20" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
                <line x1="160" y1="180" x2="200" y2="210" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.5" />
                <line x1="200" y1="180" x2="240" y2="210" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.5" />
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">DESIGN</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Architecture</text>
            </svg>
          );
        case 1: // Cloud-Native Development → BUILD
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="cloud1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="cloudGlow1">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#cloudGlow1)">
                <circle cx="140" cy="150" r="25" fill="url(#cloud1)" opacity="0.8" stroke={COLORS.primary} strokeWidth="2" />
                <circle cx="200" cy="140" r="28" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
                <circle cx="260" cy="150" r="25" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
                <path d="M 165 175 L 175 190" stroke={COLORS.primary} strokeWidth="2" opacity="0.5" />
                <path d="M 225 175 L 235 190" stroke={COLORS.primary} strokeWidth="2" opacity="0.5" />
              </g>
              <rect x="130" y="210" width="140" height="60" rx="6" fill="none" stroke={COLORS.primary} strokeWidth="2" opacity="0.4" />
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">BUILD</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Cloud-Native</text>
            </svg>
          );
        case 2: // API Development → CONNECT
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="cloud2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="cloudGlow2">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#cloudGlow2)">
                <rect x="140" y="120" width="50" height="80" rx="6" fill="none" stroke={COLORS.primary} strokeWidth="2" opacity="0.6" />
                <rect x="210" y="120" width="50" height="80" rx="6" fill="none" stroke={COLORS.primary} strokeWidth="2" opacity="0.6" />
                <line x1="190" y1="160" x2="210" y2="160" stroke="url(#cloud2)" strokeWidth="3" />
                <circle cx="165" cy="130" r="6" fill={COLORS.primary} opacity="0.7" />
                <circle cx="235" cy="130" r="6" fill={COLORS.primary} opacity="0.7" />
              </g>
              <path d="M 200 220 L 200 250" stroke={COLORS.primary} strokeWidth="2" opacity="0.4" />
              <circle cx="200" cy="260" r="5" fill={COLORS.primary} opacity="0.6" />
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">CONNECT</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">API Gateway</text>
            </svg>
          );
        case 3: // Deployment & CI/CD → DEPLOY
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="cloud3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="cloudGlow3">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#cloudGlow3)">
                <path d="M 150 130 L 170 150 L 150 170" fill="none" stroke={COLORS.primary} strokeWidth="2.5" opacity="0.7" />
                <path d="M 200 130 L 220 150 L 200 170" fill="none" stroke={COLORS.primary} strokeWidth="2.5" opacity="0.7" />
                <path d="M 250 130 L 270 150 L 250 170" fill="none" stroke={COLORS.primary} strokeWidth="2.5" opacity="0.7" />
                <line x1="170" y1="150" x2="200" y2="150" stroke="url(#cloud3)" strokeWidth="2" opacity="0.8" />
                <line x1="220" y1="150" x2="250" y2="150" stroke="url(#cloud3)" strokeWidth="2" opacity="0.8" />
              </g>
              <rect x="130" y="210" width="140" height="50" rx="6" fill="url(#cloud3)" opacity="0.15" stroke={COLORS.primary} strokeWidth="1.5" />
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">DEPLOY</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">CI/CD Pipeline</text>
            </svg>
          );
        case 4: // Database Management → STORE
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="cloud4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="cloudGlow4">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#cloudGlow4)">
                <ellipse cx="140" cy="130" rx="20" ry="25" fill="url(#cloud4)" opacity="0.8" stroke={COLORS.primary} strokeWidth="2" />
                <ellipse cx="200" cy="140" rx="22" ry="28" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
                <ellipse cx="260" cy="130" rx="20" ry="25" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
                <line x1="140" y1="155" x2="140" y2="200" stroke={COLORS.primary} strokeWidth="1" opacity="0.3" />
                <line x1="200" y1="168" x2="200" y2="220" stroke={COLORS.primary} strokeWidth="1" opacity="0.3" />
                <line x1="260" y1="155" x2="260" y2="200" stroke={COLORS.primary} strokeWidth="1" opacity="0.3" />
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">STORE</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Data Management</text>
            </svg>
          );
        case 5: // Security & Compliance → SECURE
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="cloud5" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="cloudGlow5">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#cloudGlow5)">
                <path d="M 180 110 L 220 110 L 220 170 L 180 170 Z" fill="none" stroke={COLORS.primary} strokeWidth="2.5" opacity="0.7" />
                <circle cx="200" cy="140" r="12" fill="url(#cloud5)" opacity="0.8" stroke={COLORS.primary} strokeWidth="1.5" />
                <path d="M 200 130 L 200 150" stroke={COLORS.primary} strokeWidth="2" opacity="0.6" />
              </g>
              <rect x="160" y="200" width="80" height="50" rx="4" fill={COLORS.secondary} opacity="0.15" stroke={COLORS.primary} strokeWidth="1.5" />
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">SECURE</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Compliance</text>
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
          <div className="text-sm font-semibold" style={{ color: COLORS.white }}>Ready to scale your applications?</div>
          <div className="text-xs" style={{ color: COLORS.textMuted }}>Build cloud-native today.</div>
        </div>

        <div className="flex items-center gap-3">
          <a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Get in Touch</a>
          <a href="/work" className="px-3 py-2 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>Portfolio</a>
        </div>
      </div>
    </div>
  );
};

const CloudApplicationDevelopment: React.FC = () => {
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
          © {new Date().getFullYear()} Axonary — Cloud Innovation. Always.
        </div>
      </footer>
    </div>
  );
};

export default CloudApplicationDevelopment;
