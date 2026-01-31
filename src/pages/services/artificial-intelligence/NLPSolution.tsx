// NLPSolution.tsx
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
    id: "nlp-sentiment",
    title: "Sentiment Analysis",
    desc:
      "Analyze customer feedback, reviews, and social media. Extract insights on brand perception and customer satisfaction.",
    imgQuery: "sentiment analysis",
  },
  {
    id: "nlp-entity",
    title: "Entity Recognition",
    desc:
      "Identify and extract key entities from text. Names, organizations, locations, and custom domain-specific entities.",
    imgQuery: "entity recognition",
  },
  {
    id: "nlp-classification",
    title: "Text Classification",
    desc:
      "Categorize documents, emails, and messages automatically. Spam detection, intent classification, and topic modeling.",
    imgQuery: "text classification",
  },
  {
    id: "nlp-translation",
    title: "Machine Translation",
    desc:
      "Enable multi-language support with accurate translation. Break language barriers and reach global audiences.",
    imgQuery: "translation",
  },
  {
    id: "nlp-qa",
    title: "Question Answering",
    desc:
      "Build intelligent Q&A systems for customer support. Extract answers from documents and knowledge bases automatically.",
    imgQuery: "question answering",
  },
  {
    id: "nlp-deployment",
    title: "Deployment & Scaling",
    desc:
      "Deploy NLP models in production with high performance. Scaling, optimization, and real-time processing capabilities.",
    imgQuery: "deployment",
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
              NLP Solutions
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
          <a href="#nlp-sentiment" className="hover:text-white">Sentiment</a>
          <a href="#nlp-entity" className="hover:text-white">Entities</a>
          <a href="#nlp-classification" className="hover:text-white">Classification</a>
          <a href="#nlp-translation" className="hover:text-white">Translation</a>
          <a href="#nlp-qa" className="hover:text-white">Q&A</a>
          <a href="#nlp-deployment" className="hover:text-white">Deployment</a>
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
            Advanced • Accurate • Intelligent
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            Natural Language Processing{" "}
            <span style={{ color: COLORS.primary }}>| Axonary</span>
          </h1>

          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Unlock the power of language understanding. Extract insights, automate processing, and enhance customer interactions with advanced NLP.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <a href="#nlp-sentiment" className="px-6 py-3 rounded-full font-semibold inline-flex items-center gap-3" style={{ background: COLORS.primary, color: COLORS.white }}>
              Explore Services
            </a>
            <a href="/contact" className="px-5 py-3 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>
              Request Consultation
            </a>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="rounded-2xl p-6" style={{ background: COLORS.card }}>
            <h5 className="text-sm text-gray-400">NLP Success Metrics</h5>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">300+</div>
                <div className="text-xs text-gray-400">NLP Projects</div>
              </div>
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">94%</div>
                <div className="text-xs text-gray-400">Accuracy Rate</div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-300">Ready to process language at scale? Let's unlock insights from your data.</p>
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
        case 0: // Sentiment → ANALYZE
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="nlp0" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="nlpGlow0">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#nlpGlow0)">
                <circle cx="200" cy="170" r="50" fill="url(#nlp0)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2" />
                <circle cx="160" cy="140" r="12" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
                <circle cx="240" cy="140" r="12" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
                <path d="M 170 210 Q 200 230 230 210" fill="none" stroke={COLORS.primary} strokeWidth="2.5" opacity="0.6" />
                <path d="M 200 165 L 200 180" stroke={COLORS.secondary} strokeWidth="1.5" opacity="0.5" />
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">ANALYZE</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Sentiment</text>
            </svg>
          );
        case 1: // Entity → EXTRACT
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="nlp1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="nlpGlow1">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#nlpGlow1)">
                <rect x="120" y="110" width="160" height="140" rx="6" fill="url(#nlp1)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2" />
                <rect x="135" y="130" width="40" height="25" rx="3" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1" />
                <rect x="190" y="130" width="50" height="25" rx="3" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1" />
                <rect x="135" y="170" width="35" height="25" rx="3" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1" />
                <rect x="190" y="170" width="55" height="25" rx="3" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1" />
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">EXTRACT</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Entities</text>
            </svg>
          );
        case 2: // Classification → CATEGORIZE
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="nlp2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="nlpGlow2">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#nlpGlow2)">
                <rect x="100" y="100" width="70" height="170" rx="6" fill="url(#nlp2)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2" />
                <rect x="115" y="120" width="40" height="30" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1" />
                <rect x="115" y="165" width="40" height="40" fill={COLORS.primary} opacity="0.6" stroke={COLORS.secondary} strokeWidth="1" />
                <rect x="115" y="220" width="40" height="35" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1" />
                <rect x="210" y="100" width="90" height="170" rx="6" fill="url(#nlp2)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2" />
                <circle cx="245" cy="140" r="15" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
                <path d="M 245 160 L 245 200" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.5" />
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">CATEGORIZE</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Classify</text>
            </svg>
          );
        case 3: // Translation → TRANSLATE
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="nlp3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="nlpGlow3">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#nlpGlow3)">
                <rect x="90" y="110" width="120" height="120" rx="8" fill="url(#nlp3)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2" />
                <text x="150" y="160" fontSize="20" fontWeight="bold" fill={COLORS.secondary} opacity="0.7">A</text>
                <text x="150" y="190" fontSize="14" fill={COLORS.textMuted} opacity="0.5" textAnchor="middle">English</text>
                <path d="M 210 165 L 240 165" stroke={COLORS.primary} strokeWidth="2.5" markerEnd={`url(#arrowhead)`} opacity="0.6" />
                <circle cx="225" cy="165" r="8" fill={COLORS.secondary} opacity="0.8" />
                <rect x="190" y="110" width="120" height="120" rx="8" fill="url(#nlp3)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2" />
                <text x="250" y="160" fontSize="20" fontWeight="bold" fill={COLORS.secondary} opacity="0.7">B</text>
                <text x="250" y="190" fontSize="14" fill={COLORS.textMuted} opacity="0.5" textAnchor="middle">Spanish</text>
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">TRANSLATE</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Languages</text>
            </svg>
          );
        case 4: // Q&A → ANSWER
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="nlp4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="nlpGlow4">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#nlpGlow4)">
                <ellipse cx="140" cy="140" rx="45" ry="35" fill="url(#nlp4)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2" />
                <text x="140" y="145" fontSize="18" fontWeight="bold" fill={COLORS.secondary} opacity="0.7" textAnchor="middle">?</text>
                <path d="M 185 140 L 215 140" stroke={COLORS.primary} strokeWidth="2.5" opacity="0.6" />
                <ellipse cx="260" cy="140" rx="45" ry="35" fill="url(#nlp4)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2" />
                <text x="260" y="145" fontSize="18" fontWeight="bold" fill={COLORS.secondary} opacity="0.7" textAnchor="middle">!</text>
                <rect x="130" y="200" width="140" height="60" rx="6" fill={COLORS.secondary} opacity="0.3" stroke={COLORS.primary} strokeWidth="1.5" />
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">ANSWER</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Questions</text>
            </svg>
          );
        case 5: // Deployment → DEPLOY
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="nlp5" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="nlpGlow5">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#nlpGlow5)">
                <rect x="110" y="110" width="70" height="70" rx="6" fill="url(#nlp5)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2" />
                <rect x="110" y="200" width="70" height="70" rx="6" fill="url(#nlp5)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2" />
                <rect x="220" y="110" width="70" height="70" rx="6" fill="url(#nlp5)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2" />
                <rect x="220" y="200" width="70" height="70" rx="6" fill="url(#nlp5)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2" />
                <circle cx="145" cy="145" r="12" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1" />
                <circle cx="145" cy="235" r="12" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1" />
                <circle cx="255" cy="145" r="12" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1" />
                <circle cx="255" cy="235" r="12" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1" />
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">DEPLOY</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Scale</text>
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
          <div className="text-sm font-semibold" style={{ color: COLORS.white }}>Ready to understand language?</div>
          <div className="text-xs" style={{ color: COLORS.textMuted }}>Unlock insights from text data today.</div>
        </div>

        <div className="flex items-center gap-3">
          <a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Get in Touch</a>
          <a href="/work" className="px-3 py-2 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>Portfolio</a>
        </div>
      </div>
    </div>
  );
};

const NLPSolution: React.FC = () => {
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

export default NLPSolution;
