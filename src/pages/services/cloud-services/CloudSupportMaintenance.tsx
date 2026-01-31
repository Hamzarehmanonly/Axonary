// CloudSupportMaintenance.tsx
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
    id: "cloud-support-monitoring",
    title: "24/7 Monitoring & Alerts",
    desc:
      "Real-time monitoring of cloud infrastructure, applications, and services with instant alerting and notifications.",
    imgQuery: "cloud monitoring",
  },
  {
    id: "cloud-support-maintenance",
    title: "Proactive Maintenance",
    desc:
      "Scheduled maintenance, patching, and updates to keep systems secure and optimized without disruption.",
    imgQuery: "system maintenance",
  },
  {
    id: "cloud-support-incidents",
    title: "Incident Management",
    desc:
      "Rapid response to issues with root cause analysis, resolution, and post-incident reviews.",
    imgQuery: "incident response",
  },
  {
    id: "cloud-support-performance",
    title: "Performance Optimization",
    desc:
      "Continuous optimization of cloud resources, scaling, and tuning for peak performance.",
    imgQuery: "performance tuning",
  },
  {
    id: "cloud-support-backup",
    title: "Backup & Disaster Recovery",
    desc:
      "Robust backup strategies, disaster recovery plans, and business continuity solutions.",
    imgQuery: "backup disaster recovery",
  },
  {
    id: "cloud-support-consulting",
    title: "Strategic Consulting",
    desc:
      "Expert guidance on cloud optimization, architecture reviews, and strategic planning for cloud investments.",
    imgQuery: "business consulting",
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
              Cloud Support Solutions
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
          <a href="#cloud-support-monitoring" className="hover:text-white">Monitoring</a>
          <a href="#cloud-support-maintenance" className="hover:text-white">Maintenance</a>
          <a href="#cloud-support-incidents" className="hover:text-white">Incidents</a>
          <a href="#cloud-support-performance" className="hover:text-white">Performance</a>
          <a href="#cloud-support-backup" className="hover:text-white">Backup</a>
          <a href="#cloud-support-consulting" className="hover:text-white">Consulting</a>
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
            Always Available • Highly Responsive • Expert Team
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            Cloud Support &{" "}
            <span style={{ color: COLORS.primary }}>Maintenance | Axonary</span>
          </h1>

          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Keep your cloud infrastructure running smoothly. 24/7 support, proactive maintenance, and expert optimization.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <a href="#cloud-support-monitoring" className="px-6 py-3 rounded-full font-semibold inline-flex items-center gap-3" style={{ background: COLORS.primary, color: COLORS.white }}>
              Explore Services
            </a>
            <a href="/contact" className="px-5 py-3 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>
              Request Consultation
            </a>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="rounded-2xl p-6" style={{ background: COLORS.card }}>
            <h5 className="text-sm text-gray-400">Support Excellence</h5>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-xs text-gray-400">Satisfaction Rate</div>
              </div>
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">2hrs</div>
                <div className="text-xs text-gray-400">Avg. Response Time</div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-300">Get dedicated support for your cloud infrastructure.</p>
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
        case 0: // Monitoring → MONITOR
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="support0" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="supportGlow0">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#supportGlow0)">
                <rect x="130" y="120" width="140" height="110" rx="8" fill="none" stroke={COLORS.primary} strokeWidth="2.5" opacity="0.6" />
                <polyline points="140,180 160,150 180,165 200,140 220,160 240,145 260,170" fill="none" stroke="url(#support0)" strokeWidth="2.5" opacity="0.8" />
                <circle cx="200" cy="140" r="6" fill={COLORS.primary} opacity="0.8" />
              </g>
              <line x1="130" y1="230" x2="270" y2="230" stroke={COLORS.primary} strokeWidth="1" opacity="0.2" />
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">MONITOR</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">24/7</text>
            </svg>
          );
        case 1: // Maintenance → MAINTAIN
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="support1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="supportGlow1">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#supportGlow1)">
                <circle cx="130" cy="170" r="20" fill="none" stroke={COLORS.primary} strokeWidth="2.5" opacity="0.7" />
                <line x1="125" y1="165" x2="135" y2="175" stroke={COLORS.primary} strokeWidth="3" opacity="0.8" />
                <circle cx="200" cy="170" r="24" fill="url(#support1)" opacity="0.3" stroke={COLORS.primary} strokeWidth="2" />
                <circle cx="270" cy="170" r="20" fill="none" stroke={COLORS.primary} strokeWidth="2.5" opacity="0.7" />
                <path d="M 265 165 L 275 175" stroke={COLORS.primary} strokeWidth="2" opacity="0.6" />
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">MAINTAIN</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Proactive</text>
            </svg>
          );
        case 2: // Incident → RESPOND
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="support2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="supportGlow2">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#supportGlow2)">
                <path d="M 200 120 L 230 160 L 210 160 L 240 200 L 160 160 L 180 160 Z" fill="url(#support2)" opacity="0.8" stroke={COLORS.primary} strokeWidth="1.5" />
              </g>
              <circle cx="200" cy="240" r="20" fill="none" stroke={COLORS.primary} strokeWidth="2" opacity="0.5" />
              <circle cx="200" cy="240" r="14" fill="none" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.3" />
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">RESPOND</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Incident</text>
            </svg>
          );
        case 3: // Performance → OPTIMIZE
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="support3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="supportGlow3">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#supportGlow3)">
                <circle cx="200" cy="170" r="40" fill="none" stroke={COLORS.primary} strokeWidth="2" opacity="0.4" />
                <circle cx="200" cy="170" r="30" fill="url(#support3)" opacity="0.3" stroke={COLORS.primary} strokeWidth="1.5" />
                <circle cx="200" cy="170" r="18" fill={COLORS.primary} opacity="0.7" />
              </g>
              <path d="M 200 130 L 200 100" stroke={COLORS.primary} strokeWidth="2.5" opacity="0.6" />
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">OPTIMIZE</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Performance</text>
            </svg>
          );
        case 4: // Backup → PROTECT
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="support4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="supportGlow4">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#supportGlow4)">
                <path d="M 160 130 L 200 110 L 240 130 L 240 200 Q 200 220 160 200 Z" fill="url(#support4)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2.5" />
                <path d="M 200 130 L 200 180" stroke={COLORS.primary} strokeWidth="2" opacity="0.7" />
                <circle cx="200" cy="145" r="5" fill={COLORS.primary} opacity="0.8" />
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">PROTECT</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Backup</text>
            </svg>
          );
        case 5: // Consulting → ADVISE
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="support5" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="supportGlow5">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#supportGlow5)">
                <circle cx="160" cy="150" r="18" fill={COLORS.secondary} opacity="0.6" stroke={COLORS.primary} strokeWidth="1.5" />
                <circle cx="240" cy="150" r="18" fill={COLORS.secondary} opacity="0.6" stroke={COLORS.primary} strokeWidth="1.5" />
                <path d="M 178 150 L 222 150" stroke="url(#support5)" strokeWidth="2.5" opacity="0.8" />
                <rect x="140" y="190" width="120" height="50" rx="6" fill="url(#support5)" opacity="0.15" stroke={COLORS.primary} strokeWidth="1.5" />
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">ADVISE</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Strategic</text>
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
          <div className="text-sm font-semibold" style={{ color: COLORS.white }}>Need cloud support?</div>
          <div className="text-xs" style={{ color: COLORS.textMuted }}>We're here 24/7 for you.</div>
        </div>

        <div className="flex items-center gap-3">
          <a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Get in Touch</a>
          <a href="/work" className="px-3 py-2 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>Portfolio</a>
        </div>
      </div>
    </div>
  );
};

const CloudSupportMaintenance: React.FC = () => {
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

export default CloudSupportMaintenance;
