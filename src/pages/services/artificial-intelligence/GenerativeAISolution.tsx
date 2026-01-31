// GenerativeAISolution.tsx
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
    id: "gen-models",
    title: "AI Model Development",
    desc:
      "Build custom generative AI models tailored to your business needs. From fine-tuning existing models to developing proprietary solutions.",
    imgQuery: "artificial intelligence",
  },
  {
    id: "gen-content",
    title: "Content Generation",
    desc:
      "Automate content creation for marketing, documentation, and communications. Generate high-quality text, images, and multimedia at scale.",
    imgQuery: "content generation",
  },
  {
    id: "gen-chatbot",
    title: "AI Chatbots",
    desc:
      "Deploy intelligent conversational AI for customer service, support, and engagement. Natural language understanding and contextual responses.",
    imgQuery: "chatbot ai",
  },
  {
    id: "gen-integration",
    title: "API Integration",
    desc:
      "Integrate generative AI APIs into your applications. GPT, DALL-E, Claude, and custom model integrations with seamless workflows.",
    imgQuery: "api integration",
  },
  {
    id: "gen-optimization",
    title: "Model Optimization",
    desc:
      "Optimize AI models for performance, cost, and latency. Quantization, pruning, and deployment optimization strategies.",
    imgQuery: "optimization",
  },
  {
    id: "gen-training",
    title: "Training & Support",
    desc:
      "Train your teams on AI implementation. Ongoing support, monitoring, and continuous improvement of your AI systems.",
    imgQuery: "training",
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
              AI Solutions
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
          <a href="#gen-models" className="hover:text-white">Models</a>
          <a href="#gen-content" className="hover:text-white">Content</a>
          <a href="#gen-chatbot" className="hover:text-white">Chatbots</a>
          <a href="#gen-integration" className="hover:text-white">Integration</a>
          <a href="#gen-optimization" className="hover:text-white">Optimization</a>
          <a href="#gen-training" className="hover:text-white">Training</a>
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
            Cutting-Edge • Scalable • Intelligent
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            Generative AI Solutions{" "}
            <span style={{ color: COLORS.primary }}>| Axonary</span>
          </h1>

          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Harness the power of generative AI to transform your business. From custom models to intelligent applications, we deliver cutting-edge solutions.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <a href="#gen-models" className="px-6 py-3 rounded-full font-semibold inline-flex items-center gap-3" style={{ background: COLORS.primary, color: COLORS.white }}>
              Explore Services
            </a>
            <a href="/contact" className="px-5 py-3 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>
              Request Consultation
            </a>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="rounded-2xl p-6" style={{ background: COLORS.card }}>
            <h5 className="text-sm text-gray-400">Generative AI Impact</h5>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">200+</div>
                <div className="text-xs text-gray-400">AI Projects</div>
              </div>
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">85%</div>
                <div className="text-xs text-gray-400">Efficiency Gain</div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-300">Ready to leverage AI? Let's build intelligent solutions together.</p>
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
        case 0: // Model Development → CREATE
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="ai0" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="aiGlow0">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#aiGlow0)">
                <circle cx="200" cy="180" r="60" fill="none" stroke={COLORS.primary} strokeWidth="2" opacity="0.5" />
                <circle cx="200" cy="180" r="45" fill="url(#ai0)" opacity="0.15" stroke={COLORS.primary} strokeWidth="1.5" />
                <circle cx="200" cy="180" r="25" fill={COLORS.secondary} opacity="0.6" stroke={COLORS.primary} strokeWidth="1" />
                <circle cx="150" cy="140" r="8" fill={COLORS.secondary} opacity="0.5" stroke={COLORS.primary} strokeWidth="1" />
                <circle cx="250" cy="140" r="8" fill={COLORS.secondary} opacity="0.5" stroke={COLORS.primary} strokeWidth="1" />
                <circle cx="150" cy="220" r="8" fill={COLORS.secondary} opacity="0.5" stroke={COLORS.primary} strokeWidth="1" />
                <circle cx="250" cy="220" r="8" fill={COLORS.secondary} opacity="0.5" stroke={COLORS.primary} strokeWidth="1" />
                <line x1="170" y1="155" x2="200" y2="180" stroke={COLORS.primary} strokeWidth="1" opacity="0.4" />
                <line x1="230" y1="155" x2="200" y2="180" stroke={COLORS.primary} strokeWidth="1" opacity="0.4" />
                <line x1="170" y1="205" x2="200" y2="180" stroke={COLORS.primary} strokeWidth="1" opacity="0.4" />
                <line x1="230" y1="205" x2="200" y2="180" stroke={COLORS.primary} strokeWidth="1" opacity="0.4" />
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">CREATE</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Models</text>
            </svg>
          );
        case 1: // Content Generation → GENERATE
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="ai1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="aiGlow1">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#aiGlow1)">
                <rect x="120" y="110" width="160" height="150" rx="8" fill="url(#ai1)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2" />
                <line x1="140" y1="135" x2="260" y2="135" stroke={COLORS.secondary} strokeWidth="2" opacity="0.6" />
                <line x1="140" y1="160" x2="200" y2="160" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.5" />
                <line x1="140" y1="185" x2="220" y2="185" stroke={COLORS.secondary} strokeWidth="1.5" opacity="0.5" />
                <line x1="140" y1="210" x2="190" y2="210" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.5" />
                <line x1="140" y1="235" x2="240" y2="235" stroke={COLORS.secondary} strokeWidth="1.5" opacity="0.5" />
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">GENERATE</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Content</text>
            </svg>
          );
        case 2: // Chatbots → CONVERSE
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="ai2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="aiGlow2">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#aiGlow2)">
                <rect x="100" y="100" width="90" height="120" rx="12" fill="url(#ai2)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2" />
                <rect x="210" y="100" width="90" height="120" rx="12" fill={COLORS.secondary} opacity="0.15" stroke={COLORS.secondary} strokeWidth="2" />
                <ellipse cx="145" cy="135" rx="25" ry="18" fill={COLORS.secondary} opacity="0.6" stroke={COLORS.primary} strokeWidth="1.5" />
                <ellipse cx="255" cy="135" rx="25" ry="18" fill={COLORS.primary} opacity="0.6" stroke={COLORS.secondary} strokeWidth="1.5" />
                <line x1="110" y1="175" x2="180" y2="175" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.5" />
                <line x1="220" y1="175" x2="290" y2="175" stroke={COLORS.secondary} strokeWidth="1.5" opacity="0.5" />
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">CONVERSE</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Chatbots</text>
            </svg>
          );
        case 3: // API Integration → CONNECT
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="ai3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="aiGlow3">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#aiGlow3)">
                <rect x="100" y="140" width="60" height="60" rx="6" fill="url(#ai3)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2" />
                <rect x="240" y="140" width="60" height="60" rx="6" fill="url(#ai3)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2" />
                <circle cx="130" cy="170" r="12" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1" />
                <circle cx="270" cy="170" r="12" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1" />
                <path d="M 160 170 Q 200 140 240 170" fill="none" stroke={COLORS.primary} strokeWidth="2" opacity="0.6" />
                <path d="M 240 170 Q 200 200 160 170" fill="none" stroke={COLORS.secondary} strokeWidth="2" opacity="0.6" />
                <circle cx="200" cy="170" r="8" fill={COLORS.primary} opacity="0.8" />
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">CONNECT</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Integration</text>
            </svg>
          );
        case 4: // Optimization → OPTIMIZE
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="ai4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="aiGlow4">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#aiGlow4)">
                <path d="M 140 240 Q 170 140 200 180 Q 230 140 260 240" fill="none" stroke={COLORS.primary} strokeWidth="2.5" opacity="0.7" />
                <circle cx="140" cy="240" r="6" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1" />
                <circle cx="200" cy="180" r="6" fill={COLORS.primary} opacity="0.8" stroke={COLORS.secondary} strokeWidth="1" />
                <circle cx="260" cy="240" r="6" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1" />
                <rect x="120" y="260" width="160" height="8" rx="4" fill="url(#ai4)" opacity="0.3" stroke={COLORS.primary} strokeWidth="1" />
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">OPTIMIZE</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Performance</text>
            </svg>
          );
        case 5: // Training & Support → EMPOWER
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="ai5" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="aiGlow5">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#aiGlow5)">
                <rect x="130" y="120" width="140" height="110" rx="8" fill="url(#ai5)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2" />
                <circle cx="160" cy="155" r="18" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
                <circle cx="200" cy="155" r="18" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
                <circle cx="240" cy="155" r="18" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
                <path d="M 160 175 L 160 200 M 200 175 L 200 200 M 240 175 L 240 200" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.5" />
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">EMPOWER</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Teams</text>
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
          <div className="text-sm font-semibold" style={{ color: COLORS.white }}>Ready to embrace AI?</div>
          <div className="text-xs" style={{ color: COLORS.textMuted }}>Transform your business today.</div>
        </div>

        <div className="flex items-center gap-3">
          <a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Get in Touch</a>
          <a href="/work" className="px-3 py-2 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>Portfolio</a>
        </div>
      </div>
    </div>
  );
};

const GenerativeAISolution: React.FC = () => {
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

export default GenerativeAISolution;
