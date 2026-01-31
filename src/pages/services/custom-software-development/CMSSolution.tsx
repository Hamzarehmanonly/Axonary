// CMSSolution.tsx
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
    id: "cms-implementation",
    title: "CMS Implementation",
    desc:
      "Deploy powerful content management systems for easy content updates. WordPress, Drupal, or custom solutions tailored to your needs.",
    imgQuery: "content management system",
  },
  {
    id: "cms-customization",
    title: "CMS Customization",
    desc:
      "Custom themes, plugins, and modules for your unique requirements. Extend functionality without compromising performance.",
    imgQuery: "website customization",
  },
  {
    id: "cms-migration",
    title: "Content Migration",
    desc:
      "Migrate your content from legacy systems to modern CMS platforms. Preserve SEO rankings and content integrity.",
    imgQuery: "data transfer",
  },
  {
    id: "cms-optimization",
    title: "Performance Optimization",
    desc:
      "Optimize your CMS for speed, SEO, and user experience. Caching, CDN integration, and database optimization.",
    imgQuery: "website performance",
  },
  {
    id: "cms-security",
    title: "Security & Maintenance",
    desc:
      "Regular security updates, backups, and maintenance. Keep your CMS secure and running smoothly.",
    imgQuery: "cybersecurity",
  },
  {
    id: "cms-training",
    title: "User Training",
    desc:
      "Comprehensive training for content editors and administrators. Maximize productivity and content quality.",
    imgQuery: "online training",
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
              CMS Solutions
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
          <a href="#cms-implementation" className="hover:text-white">Implementation</a>
          <a href="#cms-customization" className="hover:text-white">Customization</a>
          <a href="#cms-migration" className="hover:text-white">Migration</a>
          <a href="#cms-optimization" className="hover:text-white">Optimization</a>
          <a href="#cms-security" className="hover:text-white">Security</a>
          <a href="#cms-training" className="hover:text-white">Training</a>
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
            Flexible • Scalable • User-Friendly
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            CMS Solutions{" "}
            <span style={{ color: COLORS.primary }}>| Axonary</span>
          </h1>

          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Empower your team with intuitive content management systems. Create, publish, and manage content effortlessly.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <a href="#cms-implementation" className="px-6 py-3 rounded-full font-semibold inline-flex items-center gap-3" style={{ background: COLORS.primary, color: COLORS.white }}>
              Explore Services
            </a>
            <a href="/contact" className="px-5 py-3 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>
              Request Consultation
            </a>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="rounded-2xl p-6" style={{ background: COLORS.card }}>
            <h5 className="text-sm text-gray-400">CMS Success</h5>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">300+</div>
                <div className="text-xs text-gray-400">CMS Projects</div>
              </div>
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">99%</div>
                <div className="text-xs text-gray-400">Uptime</div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-300">Ready to manage your content easily? Let's implement your CMS.</p>
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
              <defs><linearGradient id="cms0" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
              <rect x="80" y="100" width="240" height="200" rx="12" fill="url(#cms0)" opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
              <g opacity="0.7" fill="white"><path d="M 110 130 L 290 130 L 290 320 L 110 320 Z M 130 150 L 270 150" strokeWidth="0" /><rect x="130" y="160" width="140" height="20" fill="white" opacity="0.4" /><rect x="130" y="195" width="140" height="15" fill="white" opacity="0.3" /><rect x="130" y="220" width="100" height="15" fill="white" opacity="0.3" /></g>
              <text x="200" y="340" fontSize="18" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">PUBLISH</text>
            </svg>
          );
        case 1: // Customization
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs><linearGradient id="cms1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
              <circle cx="200" cy="150" r="50" fill="url(#cms1)" opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
              <g opacity="0.7"><path d="M 185 140 L 215 140 L 215 160 L 185 160 Z" fill="white" /><circle cx="200" cy="150" r="8" fill="#000" opacity="0.6" /></g>
              <g opacity="0.6"><path d="M 100 250 L 140 240 L 180 260 L 220 240 L 260 260 L 300 245" stroke={COLORS.primary} strokeWidth="2" fill="none" /></g>
              <circle cx="100" cy="250" r="6" fill={COLORS.secondary} opacity="0.7" />
              <circle cx="300" cy="245" r="6" fill={COLORS.secondary} opacity="0.7" />
              <text x="200" y="320" fontSize="18" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">THEME</text>
            </svg>
          );
        case 2: // Migration
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs><linearGradient id="cms2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
              <rect x="60" y="130" width="100" height="140" rx="8" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="2" />
              <g opacity="0.8"><path d="M 170 190 Q 200 160 230 190" stroke={COLORS.primary} strokeWidth="4" fill="none" strokeLinecap="round" /><polygon points="230,190 245,185 240,200" fill={COLORS.primary} /></g>
              <rect x="240" y="130" width="100" height="140" rx="8" fill="url(#cms2)" opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
              <g opacity="0.5"><line x1="90" y1="300" x2="310" y2="300" stroke={COLORS.primary} strokeWidth="2" /></g>
              <circle cx="110" cy="300" r="10" fill={COLORS.secondary} opacity="0.6" />
              <circle cx="290" cy="300" r="10" fill={COLORS.primary} opacity="0.8" />
              <text x="200" y="340" fontSize="18" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">MIGRATE</text>
            </svg>
          );
        case 3: // Performance
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs><linearGradient id="cms3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
              <circle cx="200" cy="180" r="60" fill="url(#cms3)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
              <circle cx="200" cy="180" r="60" fill="none" stroke={COLORS.primary} strokeWidth="1" opacity="0.2"><animate attributeName="r" values="60;75;60" dur="2.5s" repeatCount="indefinite" /></circle>
              <g opacity="0.8"><path d="M 190 160 L 190 200 M 200 150 L 200 200 M 210 170 L 210 200" stroke="white" strokeWidth="2" /><circle cx="190" cy="160" r="3" fill="white" /><circle cx="200" cy="150" r="3" fill="white" /><circle cx="210" cy="170" r="3" fill="white" /></g>
              <g opacity="0.5"><path d="M 100 280 L 150 240 L 200 270 L 250 230 L 300 260" stroke={COLORS.primary} strokeWidth="2" fill="none" /></g>
              <text x="200" y="330" fontSize="18" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">OPTIMIZE</text>
            </svg>
          );
        case 4: // Security
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs><linearGradient id="cms4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
              <path d="M 200 110 L 270 150 L 270 230 Q 270 280 200 310 Q 130 280 130 230 L 130 150 Z" fill="url(#cms4)" opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
              <g opacity="0.8"><circle cx="200" cy="180" r="20" fill="none" stroke="white" strokeWidth="2" /><path d="M 200 165 L 200 195 M 185 180 L 215 180" stroke="white" strokeWidth="2" /></g>
              <text x="200" y="340" fontSize="18" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">PROTECT</text>
            </svg>
          );
        case 5: // Training
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs><linearGradient id="cms5" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
              <circle cx="200" cy="160" r="50" fill="url(#cms5)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
              <circle cx="200" cy="160" r="50" fill="none" stroke={COLORS.primary} strokeWidth="1" opacity="0.2"><animate attributeName="r" values="50;60;50" dur="2.5s" repeatCount="indefinite" /></circle>
              <circle cx="200" cy="160" r="25" fill="none" stroke="white" strokeWidth="2" opacity="0.6" />
              <circle cx="130" cy="240" r="16" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
              <circle cx="200" cy="260" r="16" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
              <circle cx="270" cy="240" r="16" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
              <line x1="200" y1="210" x2="130" y2="240" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.3" />
              <line x1="200" y1="210" x2="200" y2="260" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.3" />
              <line x1="200" y1="210" x2="270" y2="240" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.3" />
              <text x="200" y="320" fontSize="18" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">EDUCATE</text>
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
          <div className="text-sm font-semibold" style={{ color: COLORS.white }}>Ready to launch your CMS?</div>
          <div className="text-xs" style={{ color: COLORS.textMuted }}>Start managing content better today.</div>
        </div>

        <div className="flex items-center gap-3">
          <a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Get in Touch</a>
          <a href="/work" className="px-3 py-2 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>Portfolio</a>
        </div>
      </div>
    </div>
  );
};

const CMSSolution: React.FC = () => {
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

export default CMSSolution;