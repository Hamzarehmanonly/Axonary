// EcommerceSolution.tsx
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
    id: "ecom-storefront",
    title: "Storefront Development",
    desc:
      "Build high-converting e-commerce storefronts with modern UI/UX. Optimize for mobile, speed, and user experience.",
    imgQuery: "ecommerce store",
  },
  {
    id: "ecom-integration",
    title: "Payment Integration",
    desc:
      "Integrate secure payment gateways, shopping carts, and checkout systems. Support multiple payment methods.",
    imgQuery: "payment gateway",
  },
  {
    id: "ecom-inventory",
    title: "Inventory Management",
    desc:
      "Real-time inventory tracking, stock management, and automated reordering systems.",
    imgQuery: "inventory management",
  },
  {
    id: "ecom-analytics",
    title: "Sales Analytics",
    desc:
      "Comprehensive analytics dashboards for sales tracking, customer behavior, and performance metrics.",
    imgQuery: "sales analytics",
  },
  {
    id: "ecom-mobile",
    title: "Mobile Commerce",
    desc:
      "Responsive mobile apps and platforms for seamless shopping experiences on all devices.",
    imgQuery: "mobile shopping",
  },
  {
    id: "ecom-optimization",
    title: "Performance & SEO",
    desc:
      "Optimize site speed, SEO rankings, and conversion rates for maximum revenue.",
    imgQuery: "website optimization",
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
              E-Commerce Solutions
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
          <a href="#ecom-storefront" className="hover:text-white">Storefront</a>
          <a href="#ecom-integration" className="hover:text-white">Payment</a>
          <a href="#ecom-inventory" className="hover:text-white">Inventory</a>
          <a href="#ecom-analytics" className="hover:text-white">Analytics</a>
          <a href="#ecom-mobile" className="hover:text-white">Mobile</a>
          <a href="#ecom-optimization" className="hover:text-white">Optimization</a>
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
            High-Converting • Mobile-First • Scalable
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            E-Commerce Solutions{" "}
            <span style={{ color: COLORS.primary }}>| Axonary</span>
          </h1>

          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Build powerful online stores that drive sales and customer loyalty. From storefront to checkout, we've got you covered.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <a href="#ecom-storefront" className="px-6 py-3 rounded-full font-semibold inline-flex items-center gap-3" style={{ background: COLORS.primary, color: COLORS.white }}>
              Explore Services
            </a>
            <a href="/contact" className="px-5 py-3 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>
              Request Consultation
            </a>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="rounded-2xl p-6" style={{ background: COLORS.card }}>
            <h5 className="text-sm text-gray-400">E-Commerce Success</h5>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-xs text-gray-400">E-Commerce Stores</div>
              </div>
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">250%</div>
                <div className="text-xs text-gray-400">Avg. Revenue Growth</div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-300">Ready to launch your online store? Let's get started.</p>
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
        case 0: // Storefront → BUILD
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="ecom0" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="ecomGlow0">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#ecomGlow0)">
                <rect x="110" y="100" width="180" height="180" rx="10" fill="url(#ecom0)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2" />
                <rect x="130" y="130" width="50" height="50" rx="4" fill={COLORS.secondary} opacity="0.6" stroke={COLORS.primary} strokeWidth="1" />
                <rect x="190" y="130" width="50" height="50" rx="4" fill={COLORS.secondary} opacity="0.6" stroke={COLORS.primary} strokeWidth="1" />
                <rect x="130" y="200" width="50" height="50" rx="4" fill={COLORS.secondary} opacity="0.6" stroke={COLORS.primary} strokeWidth="1" />
                <rect x="190" y="200" width="50" height="50" rx="4" fill={COLORS.secondary} opacity="0.6" stroke={COLORS.primary} strokeWidth="1" />
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">BUILD</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Storefront</text>
            </svg>
          );
        case 1: // Payment Integration → SECURE
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="ecom1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="ecomGlow1">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#ecomGlow1)">
                <rect x="130" y="110" width="140" height="90" rx="8" fill="url(#ecom1)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2" />
                <circle cx="160" cy="155" r="18" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
                <circle cx="240" cy="155" r="18" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
                <path d="M 160 140 L 160 170" stroke={COLORS.primary} strokeWidth="2" opacity="0.5" />
                <path d="M 240 140 L 240 170" stroke={COLORS.primary} strokeWidth="2" opacity="0.5" />
              </g>
              <path d="M 185 230 L 215 230 L 215 270 L 185 270 Z" fill="none" stroke={COLORS.primary} strokeWidth="2.5" rx="4" opacity="0.6" />
              <path d="M 200 245 L 200 255" stroke="white" strokeWidth="2" opacity="0.6" />
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">SECURE</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Payment</text>
            </svg>
          );
        case 2: // Inventory → TRACK
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="ecom2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="ecomGlow2">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#ecomGlow2)">
                <rect x="140" y="110" width="120" height="130" rx="6" fill="none" stroke={COLORS.primary} strokeWidth="2" opacity="0.4" />
                <rect x="155" y="130" width="25" height="35" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1" />
                <rect x="195" y="130" width="25" height="50" fill="url(#ecom2)" opacity="0.85" stroke={COLORS.primary} strokeWidth="1" />
                <rect x="235" y="130" width="25" height="28" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1" />
                <line x1="140" y1="195" x2="260" y2="195" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.3" />
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">TRACK</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Inventory</text>
            </svg>
          );
        case 3: // Analytics → ANALYZE
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="ecom3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="ecomGlow3">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#ecomGlow3)">
                <circle cx="140" cy="180" r="24" fill="url(#ecom3)" opacity="0.8" stroke={COLORS.primary} strokeWidth="2" />
                <circle cx="200" cy="160" r="28" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
                <circle cx="260" cy="190" r="22" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
                <line x1="164" y1="165" x2="176" y2="175" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.4" />
                <line x1="228" y1="175" x2="238" y2="185" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.4" />
              </g>
              <path d="M 190 100 L 200 120 L 210 100" fill={COLORS.primary} opacity="0.5" />
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">ANALYZE</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Analytics</text>
            </svg>
          );
        case 4: // Mobile Commerce → MOBILE
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="ecom4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="ecomGlow4">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#ecomGlow4)">
                <rect x="150" y="100" width="100" height="160" rx="12" fill="none" stroke={COLORS.primary} strokeWidth="2.5" opacity="0.7" />
                <rect x="160" y="120" width="80" height="100" fill="url(#ecom4)" opacity="0.4" stroke={COLORS.primary} strokeWidth="1" />
                <circle cx="200" cy="230" r="6" fill={COLORS.primary} opacity="0.6" />
              </g>
              <line x1="155" y1="115" x2="245" y2="115" stroke={COLORS.primary} strokeWidth="1" opacity="0.3" />
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">MOBILE</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Commerce</text>
            </svg>
          );
        case 5: // Performance & SEO → OPTIMIZE
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="ecom5" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="ecomGlow5">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#ecomGlow5)">
                <circle cx="200" cy="170" r="30" fill="url(#ecom5)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2" />
                <circle cx="200" cy="170" r="20" fill="none" stroke={COLORS.secondary} strokeWidth="1.5" opacity="0.5" />
                <circle cx="200" cy="170" r="12" fill={COLORS.primary} opacity="0.6" />
              </g>
              <path d="M 200 140 L 200 110" stroke={COLORS.primary} strokeWidth="2" opacity="0.4" />
              <circle cx="200" cy="105" r="4" fill={COLORS.primary} opacity="0.6" />
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
          <div className="text-sm font-semibold" style={{ color: COLORS.white }}>Ready to boost sales?</div>
          <div className="text-xs" style={{ color: COLORS.textMuted }}>Launch your online store today.</div>
        </div>

        <div className="flex items-center gap-3">
          <a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Get in Touch</a>
          <a href="/work" className="px-3 py-2 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>Portfolio</a>
        </div>
      </div>
    </div>
  );
};

const EcommerceSolution: React.FC = () => {
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

export default EcommerceSolution;
