import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const COLORS = { primary: "#5C3693", secondary: "#472A71", bg: "#000000", card: "#0b0b0d", textMuted: "#BDB7D6", white: "#FFFFFF" };
const services = [
  { id: "payment-platform", title: "Payment Processing Platforms", desc: "Secure payment gateways with multi-currency, real-time settlement, and fraud detection." },
  { id: "digital-wallet", title: "Digital Wallet Solutions", desc: "Mobile wallets, peer-to-peer transfers, and cryptocurrency integration." },
  { id: "lending-platform", title: "Lending & Credit Platforms", desc: "Loan origination, credit scoring, and risk assessment systems." },
  { id: "investment-tools", title: "Investment Trading Platforms", desc: "Stock trading, robo-advisors, portfolio management, and market data." },
  { id: "compliance-kyc", title: "Compliance & KYC", desc: "AML/KYC verification, regulatory reporting, and document management." },
  { id: "fintech-analytics", title: "Fintech Analytics", desc: "Transaction analysis, fraud detection, and financial intelligence systems." },
];
const TopNav: React.FC<{ progress: number }> = ({ progress }) => (
  <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm" style={{ background: "rgba(0,0,0,0.45)", borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
    <div className="container mx-auto px-6 flex items-center justify-between h-16">
      <div className="flex items-center gap-3">
        <div style={{ width: 44, height: 44, borderRadius: 10, background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})` }} />
        <div><div className="text-sm font-bold" style={{ color: COLORS.white }}>Axonary</div><div className="text-xs" style={{ color: COLORS.textMuted }}>Fintech Solutions</div></div>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
        <a href="#payment-platform" className="hover:text-white">Payments</a><a href="#digital-wallet" className="hover:text-white">Wallets</a><a href="#lending-platform" className="hover:text-white">Lending</a><a href="#investment-tools" className="hover:text-white">Trading</a><a href="#compliance-kyc" className="hover:text-white">Compliance</a><a href="#fintech-analytics" className="hover:text-white">Analytics</a>
        <Link to="/contact" className="ml-4 inline-block px-4 py-2 rounded-full" style={{ background: COLORS.primary, color: COLORS.white }}>Book a Call</Link>
      </nav>
    </div>
    <div className="h-[3px] w-full" style={{ background: "rgba(255,255,255,0.02)" }}><div style={{ height: "3px", width: `${progress}%`, transition: "width 120ms linear", background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary})` }} /></div>
  </header>
);
const Hero: React.FC = () => (
  <section id="hero" className="min-h-[72vh] flex items-center" style={{ background: COLORS.bg, color: COLORS.white }}>
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
      <div className="md:col-span-7">
        <div className="inline-block rounded-full px-4 py-1 text-sm font-medium" style={{ background: `${COLORS.secondary}33`, color: COLORS.white }}>Secure • Compliant • Innovative</div>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">Fintech Solutions <span style={{ color: COLORS.primary }}>| Axonary</span></h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl">Transform financial services with cutting-edge technology, security-first architecture, and regulatory compliance.</p>
        <div className="mt-6 flex items-center gap-4">
          <a href="#payment-platform" className="px-6 py-3 rounded-full font-semibold inline-flex items-center gap-3" style={{ background: COLORS.primary, color: COLORS.white }}>Explore Services</a>
          <a href="/contact" className="px-5 py-3 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>Request Consultation</a>
        </div>
      </div>
      <div className="md:col-span-5">
        <div className="rounded-2xl p-6" style={{ background: COLORS.card }}>
          <h5 className="text-sm text-gray-400">Fintech Excellence</h5>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4"><div className="text-2xl font-bold">100+</div><div className="text-xs text-gray-400">Fintech Apps</div></div>
            <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4"><div className="text-2xl font-bold">$500B+</div><div className="text-xs text-gray-400">Transactions</div></div>
          </div>
          <div className="mt-6"><p className="text-sm text-gray-300">Ready to disrupt finance? Let's build your fintech product.</p>
            <div className="mt-4"><a href="/contact" className="inline-block px-4 py-2 rounded-full" style={{ background: COLORS.primary, color: COLORS.white }}>Schedule Consultation</a></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
const SplitSection: React.FC<{ idx: number; id: string; title: string; desc: string }> = ({ idx, id, title, desc }) => (
  <section id={id} className="py-20 md:py-28">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-stretch">
        {idx % 2 === 0 ? (
          <>
            <div className="md:col-span-6 flex items-center justify-center">
              <div className="rounded-2xl shadow-lg w-full overflow-hidden" style={{ background: COLORS.card, aspectRatio: '1', maxWidth: '360px' }}>
                <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
                  <defs><linearGradient id="ft" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
                  <circle cx="200" cy="160" r="50" fill="url(#ft)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
                  <path d="M 170 140 L 230 140 L 230 180 L 170 180 Z" fill={COLORS.secondary} opacity="0.4" />
                  <circle cx="180" cy="150" r="5" fill="white" opacity="0.7" />
                  <circle cx="220" cy="150" r="5" fill="white" opacity="0.7" />
                  <circle cx="200" cy="170" r="5" fill="white" opacity="0.7" />
                  <text x="200" y="320" fontSize="16" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">FINTECH</text>
                </svg>
              </div>
            </div>
            <div className="md:col-span-6 flex items-center"><div className="max-w-xl w-full">
              <div className="inline-block rounded-full px-3 py-1 text-sm font-medium" style={{ background: `${COLORS.secondary}22`, color: COLORS.white }}>{title.split(" ")[0]}</div>
              <h3 className="mt-4 text-2xl md:text-3xl font-bold" style={{ color: COLORS.white }}>{title}</h3>
              <p className="mt-4 text-lg text-gray-300">{desc}</p>
              <div className="mt-6 flex items-center gap-3"><a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Learn More</a><a href="/contact" className="px-4 py-2 rounded-full border border-[rgba(255,255,255,0.06)]" style={{ color: COLORS.textMuted }}>Get Started</a></div>
            </div></div>
          </>
        ) : (
          <>
            <div className="md:col-span-6 flex items-center justify-center"><div className="max-w-xl w-full" style={{ textAlign: 'left' }}>
              <div className="inline-block rounded-full px-3 py-1 text-sm font-medium" style={{ background: `${COLORS.secondary}22`, color: COLORS.white }}>{title.split(" ")[0]}</div>
              <h3 className="mt-4 text-2xl md:text-3xl font-bold" style={{ color: COLORS.white }}>{title}</h3>
              <p className="mt-4 text-lg text-gray-300">{desc}</p>
              <div className="mt-6 flex items-center gap-3"><a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Learn More</a><a href="/contact" className="px-4 py-2 rounded-full border border-[rgba(255,255,255,0.06)]" style={{ color: COLORS.textMuted }}>Get Started</a></div>
            </div></div>
            <div className="md:col-span-6 flex items-center justify-center">
              <div className="rounded-2xl shadow-lg w-full overflow-hidden" style={{ background: COLORS.card, aspectRatio: '1', maxWidth: '360px' }}>
                <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
                  <defs><linearGradient id="ft2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
                  <circle cx="200" cy="160" r="50" fill="url(#ft2)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
                  <path d="M 170 140 L 230 140 L 230 180 L 170 180 Z" fill={COLORS.secondary} opacity="0.4" />
                  <circle cx="180" cy="150" r="5" fill="white" opacity="0.7" />
                  <circle cx="220" cy="150" r="5" fill="white" opacity="0.7" />
                  <circle cx="200" cy="170" r="5" fill="white" opacity="0.7" />
                  <text x="200" y="320" fontSize="16" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">FINTECH</text>
                </svg>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  </section>
);
const Fintech: React.FC = () => {
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
      <TopNav progress={progress} /><main className="pt-20"><Hero /><div className="mt-8">{services.map((s, idx) => (<SplitSection key={s.id} idx={idx} id={s.id} title={s.title} desc={s.desc} />))}</div><div style={{ height: 160 }} /></main>
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-[92%] md:w-[720px]"><div className="rounded-2xl p-4 flex items-center justify-between shadow-xl" style={{ background: `linear-gradient(90deg, rgba(92,54,147,0.12), rgba(71,42,113,0.06))`, border: "1px solid rgba(255,255,255,0.03)" }}><div><div className="text-sm font-semibold" style={{ color: COLORS.white }}>Ready to revolutionize finance?</div><div className="text-xs" style={{ color: COLORS.textMuted }}>Start building today.</div></div><div className="flex items-center gap-3"><a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Get in Touch</a><a href="/work" className="px-3 py-2 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>Portfolio</a></div></div></div>
      <footer className="mt-20 py-10"><div className="container mx-auto px-6 text-center text-sm" style={{ color: COLORS.textMuted }}>© {new Date().getFullYear()} Axonary — Fintech Excellence. Always.</div></footer>
    </div>
  );
};
export default Fintech;
