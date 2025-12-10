// AIAgentSolution.tsx
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
    id: "agent-design",
    title: "Agent Architecture",
    desc:
      "Design intelligent agents with advanced reasoning capabilities. Multi-agent systems, memory, and decision-making frameworks.",
    imgQuery: "agent architecture",
  },
  {
    id: "agent-autonomy",
    title: "Autonomous Systems",
    desc:
      "Build self-managing agents that learn and adapt. Reinforcement learning, feedback loops, and continuous improvement.",
    imgQuery: "autonomous systems",
  },
  {
    id: "agent-reasoning",
    title: "Reasoning & Planning",
    desc:
      "Develop agents with advanced planning and reasoning. Multi-step problem solving, goal optimization, and strategic decision-making.",
    imgQuery: "reasoning",
  },
  {
    id: "agent-integration",
    title: "Tool Integration",
    desc:
      "Connect AI agents with your business tools and APIs. Automated workflows, data access, and external system integration.",
    imgQuery: "integration",
  },
  {
    id: "agent-monitoring",
    title: "Monitoring & Control",
    desc:
      "Real-time monitoring of agent behavior. Safety mechanisms, performance tracking, and human oversight integration.",
    imgQuery: "monitoring",
  },
  {
    id: "agent-deployment",
    title: "Deployment & Scaling",
    desc:
      "Deploy agents in production with enterprise reliability. Load balancing, fault tolerance, and scalable infrastructure.",
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
              AI Agents
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
          <a href="#agent-design" className="hover:text-white">Architecture</a>
          <a href="#agent-autonomy" className="hover:text-white">Autonomy</a>
          <a href="#agent-reasoning" className="hover:text-white">Reasoning</a>
          <a href="#agent-integration" className="hover:text-white">Integration</a>
          <a href="#agent-monitoring" className="hover:text-white">Monitoring</a>
          <a href="#agent-deployment" className="hover:text-white">Deployment</a>
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
            Intelligent • Autonomous • Adaptive
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            AI Agent Development{" "}
            <span style={{ color: COLORS.primary }}>| Axonary</span>
          </h1>

          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Build autonomous AI agents that work 24/7. Intelligent decision-making, continuous learning, and seamless automation.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <a href="#agent-design" className="px-6 py-3 rounded-full font-semibold inline-flex items-center gap-3" style={{ background: COLORS.primary, color: COLORS.white }}>
              Explore Services
            </a>
            <a href="/contact" className="px-5 py-3 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>
              Request Consultation
            </a>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="rounded-2xl p-6" style={{ background: COLORS.card }}>
            <h5 className="text-sm text-gray-400">Agent Deployment Stats</h5>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">150+</div>
                <div className="text-xs text-gray-400">AI Agents</div>
              </div>
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">99.8%</div>
                <div className="text-xs text-gray-400">Uptime</div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-300">Ready to automate with intelligence? Let's build your custom agents.</p>
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
        case 0: // Architecture → ARCHITECT
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="agent0" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="agentGlow0">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#agentGlow0)">
                <rect x="130" y="110" width="140" height="140" rx="8" fill="url(#agent0)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2" />
                <circle cx="160" cy="155" r="18" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
                <circle cx="240" cy="155" r="18" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
                <circle cx="200" cy="230" r="18" fill={COLORS.primary} opacity="0.6" stroke={COLORS.secondary} strokeWidth="1.5" />
                <line x1="160" y1="173" x2="200" y2="212" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.5" />
                <line x1="240" y1="173" x2="200" y2="212" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.5" />
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">ARCHITECT</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Design</text>
            </svg>
          );
        case 1: // Autonomy → LEARN
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="agent1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="agentGlow1">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#agentGlow1)">
                <circle cx="200" cy="170" r="60" fill="none" stroke={COLORS.primary} strokeWidth="2" opacity="0.4" />
                <circle cx="200" cy="170" r="45" fill="url(#agent1)" opacity="0.15" stroke={COLORS.primary} strokeWidth="1.5" />
                <circle cx="200" cy="170" r="30" fill={COLORS.secondary} opacity="0.6" stroke={COLORS.primary} strokeWidth="1" />
                <circle cx="150" cy="130" r="8" fill={COLORS.secondary} opacity="0.5" />
                <circle cx="250" cy="130" r="8" fill={COLORS.secondary} opacity="0.5" />
                <circle cx="150" cy="210" r="8" fill={COLORS.secondary} opacity="0.5" />
                <circle cx="250" cy="210" r="8" fill={COLORS.secondary} opacity="0.5" />
                <path d="M 210 160 Q 220 170 210 180" fill="none" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.5" />
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">LEARN</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Autonomy</text>
            </svg>
          );
        case 2: // Reasoning → THINK
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="agent2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="agentGlow2">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#agentGlow2)">
                <circle cx="200" cy="130" r="40" fill="url(#agent2)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2" />
                <circle cx="200" cy="130" r="25" fill={COLORS.secondary} opacity="0.6" stroke={COLORS.primary} strokeWidth="1" />
                <circle cx="170" cy="160" r="8" fill={COLORS.primary} opacity="0.5" stroke={COLORS.secondary} strokeWidth="1" />
                <circle cx="200" cy="175" r="8" fill={COLORS.secondary} opacity="0.6" stroke={COLORS.primary} strokeWidth="1" />
                <circle cx="230" cy="160" r="8" fill={COLORS.primary} opacity="0.5" stroke={COLORS.secondary} strokeWidth="1" />
                <path d="M 200 155 L 200 165" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.4" />
                <path d="M 185 145 Q 200 165 185 175" fill="none" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.4" />
                <path d="M 215 145 Q 200 165 215 175" fill="none" stroke={COLORS.secondary} strokeWidth="1.5" opacity="0.4" />
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">THINK</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Reasoning</text>
            </svg>
          );
        case 3: // Integration → CONNECT
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="agent3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="agentGlow3">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#agentGlow3)">
                <circle cx="200" cy="160" r="50" fill="url(#agent3)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2" />
                <circle cx="200" cy="160" r="30" fill={COLORS.secondary} opacity="0.6" stroke={COLORS.primary} strokeWidth="1.5" />
                <rect x="80" y="140" width="40" height="40" rx="4" fill={COLORS.secondary} opacity="0.5" stroke={COLORS.primary} strokeWidth="1" />
                <rect x="280" y="140" width="40" height="40" rx="4" fill={COLORS.secondary} opacity="0.5" stroke={COLORS.primary} strokeWidth="1" />
                <line x1="120" y1="160" x2="170" y2="160" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.5" />
                <line x1="230" y1="160" x2="280" y2="160" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.5" />
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">CONNECT</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Tools</text>
            </svg>
          );
        case 4: // Monitoring → OBSERVE
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="agent4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="agentGlow4">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#agentGlow4)">
                <circle cx="200" cy="160" r="55" fill="none" stroke={COLORS.primary} strokeWidth="2" opacity="0.4" />
                <circle cx="200" cy="160" r="35" fill="url(#agent4)" opacity="0.15" stroke={COLORS.primary} strokeWidth="1.5" />
                <circle cx="200" cy="160" r="18" fill={COLORS.secondary} opacity="0.6" stroke={COLORS.primary} strokeWidth="1" />
                <circle cx="200" cy="160" r="8" fill={COLORS.primary} opacity="0.8" />
                <line x1="200" y1="100" x2="200" y2="125" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.5" />
                <line x1="260" y1="130" x2="242" y2="145" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.5" />
                <line x1="260" y1="190" x2="242" y2="175" stroke={COLORS.secondary} strokeWidth="1.5" opacity="0.5" />
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">OBSERVE</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Monitor</text>
            </svg>
          );
        case 5: // Deployment → SCALE
          return (
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
              <defs>
                <linearGradient id="agent5" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.9" />
                  <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.7" />
                </linearGradient>
                <filter id="agentGlow5">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <g filter="url(#agentGlow5)">
                <rect x="100" y="100" width="50" height="50" rx="6" fill="url(#agent5)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2" />
                <rect x="175" y="75" width="50" height="50" rx="6" fill="url(#agent5)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2" />
                <rect x="250" y="100" width="50" height="50" rx="6" fill="url(#agent5)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2" />
                <rect x="100" y="175" width="50" height="50" rx="6" fill="url(#agent5)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2" />
                <rect x="175" y="200" width="50" height="50" rx="6" fill="url(#agent5)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2" />
                <rect x="250" y="175" width="50" height="50" rx="6" fill="url(#agent5)" opacity="0.15" stroke={COLORS.primary} strokeWidth="2" />
                <circle cx="125" cy="125" r="8" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1" />
                <circle cx="200" cy="100" r="8" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1" />
                <circle cx="275" cy="125" r="8" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1" />
              </g>
              <text x="200" y="320" fontSize="24" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">SCALE</text>
              <text x="200" y="350" fontSize="14" fill={COLORS.textMuted} textAnchor="middle" opacity="0.8">Deploy</text>
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
          <div className="text-sm font-semibold" style={{ color: COLORS.white }}>Ready to build intelligent agents?</div>
          <div className="text-xs" style={{ color: COLORS.textMuted }}>Automate your workflows today.</div>
        </div>

        <div className="flex items-center gap-3">
          <a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Get in Touch</a>
          <a href="/work" className="px-3 py-2 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>Portfolio</a>
        </div>
      </div>
    </div>
  );
};

const AIAgentSolution: React.FC = () => {
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
          © {new Date().getFullYear()} Axonary — AI Agent Excellence. Always.
        </div>
      </footer>
    </div>
  );
};

export default AIAgentSolution;
