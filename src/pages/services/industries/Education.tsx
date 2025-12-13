import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const COLORS = { primary: "#5C3693", secondary: "#472A71", bg: "#000000", card: "#0b0b0d", glass: "rgba(255,255,255,0.03)", textMuted: "#BDB7D6", white: "#FFFFFF" };
const services = [
  { id: "lms", title: "Learning Management Systems", desc: "Comprehensive LMS platforms for course creation, student management, and assessment." },
  { id: "virtual-classrooms", title: "Virtual Classroom Solutions", desc: "Interactive live classroom tools with video conferencing, screen sharing, and engagement features." },
  { id: "assessment-tools", title: "Assessment & Testing Tools", desc: "Advanced testing platforms with auto-grading, proctoring, and performance analytics." },
  { id: "student-engagement", title: "Student Engagement Platforms", desc: "Gamification, collaboration tools, and interactive learning experiences." },
  { id: "college-management", title: "College Management System", desc: "Complete administration systems for admissions, enrollment, scheduling, and records." },
  { id: "education-analytics", title: "Learning Analytics", desc: "Student performance tracking, learning insights, and predictive analytics." },
];

const TopNav: React.FC<{ progress: number }> = ({ progress }) => (
  <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm" style={{ background: "rgba(0,0,0,0.45)", borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
    <div className="container mx-auto px-6 flex items-center justify-between h-16">
      <div className="flex items-center gap-3">
        <div style={{ width: 44, height: 44, borderRadius: 10, background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})` }} />
        <div><div className="text-sm font-bold" style={{ color: COLORS.white }}>Axonary</div><div className="text-xs" style={{ color: COLORS.textMuted }}>Education Solutions</div></div>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
        <a href="#lms" className="hover:text-white">LMS</a>
        <a href="#virtual-classrooms" className="hover:text-white">Classrooms</a>
        <a href="#assessment-tools" className="hover:text-white">Assessment</a>
        <a href="#student-engagement" className="hover:text-white">Engagement</a>
        <a href="#college-management" className="hover:text-white">Management</a>
        <a href="#education-analytics" className="hover:text-white">Analytics</a>
        <Link to="/contact" className="ml-4 inline-block px-4 py-2 rounded-full" style={{ background: COLORS.primary, color: COLORS.white }}>Book a Call</Link>
      </nav>
    </div>
    <div className="h-[3px] w-full" style={{ background: "rgba(255,255,255,0.02)" }}>
      <div style={{ height: "3px", width: `${progress}%`, transition: "width 120ms linear", background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary})` }} />
    </div>
  </header>
);

const Hero: React.FC = () => (
  <section id="hero" className="min-h-[72vh] flex items-center" style={{ background: COLORS.bg, color: COLORS.white }}>
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
      <div className="md:col-span-7">
        <div className="inline-block rounded-full px-4 py-1 text-sm font-medium" style={{ background: `${COLORS.secondary}33`, color: COLORS.white }}>Interactive • Scalable • Engaging</div>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">Education Solutions <span style={{ color: COLORS.primary }}>| Axonary</span></h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl">Empower students and educators with modern learning platforms that transform education delivery and student outcomes.</p>
        <div className="mt-6 flex items-center gap-4">
          <a href="#lms" className="px-6 py-3 rounded-full font-semibold inline-flex items-center gap-3" style={{ background: COLORS.primary, color: COLORS.white }}>Explore Services</a>
          <a href="/contact" className="px-5 py-3 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>Request Consultation</a>
        </div>
      </div>
      <div className="md:col-span-5">
        <div className="rounded-2xl p-6" style={{ background: COLORS.card }}>
          <h5 className="text-sm text-gray-400">Education Excellence</h5>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4"><div className="text-2xl font-bold">250+</div><div className="text-xs text-gray-400">Edu Platforms</div></div>
            <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4"><div className="text-2xl font-bold">500K+</div><div className="text-xs text-gray-400">Active Learners</div></div>
          </div>
          <div className="mt-6">
            <p className="text-sm text-gray-300">Ready to transform education? Let's build your learning platform today.</p>
            <div className="mt-4"><a href="/contact" className="inline-block px-4 py-2 rounded-full" style={{ background: COLORS.primary, color: COLORS.white }}>Schedule Consultation</a></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SplitSection: React.FC<{ idx: number; id: string; title: string; desc: string }> = ({ idx, id, title, desc }) => {
  const isLeftImage = idx % 2 === 0;
  const Placeholder = () => (
    <div className="rounded-2xl shadow-lg w-full overflow-hidden" style={{ background: COLORS.card, aspectRatio: '1', maxWidth: '360px' }}>
      <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
        <defs><linearGradient id="edu" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
        <polygon points="200,100 280,140 280,240 200,280 120,240 120,140" fill="url(#edu)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
        <polygon points="200,120 270,150 270,230 200,260 130,230 130,150" fill={COLORS.secondary} opacity="0.3" />
        <circle cx="200" cy="190" r="20" fill="white" opacity="0.6" />
        <path d="M 130 280 Q 200 320 270 280" stroke={COLORS.primary} strokeWidth="2" opacity="0.4" />
        <text x="200" y="340" fontSize="16" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">EDUCATION</text>
      </svg>
    </div>
  );
  return (
    <section id={id} className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-stretch">
          {isLeftImage ? (
            <>
              <div className="md:col-span-6 flex items-center justify-center"><Placeholder /></div>
              <div className="md:col-span-6 flex items-center justify-center">
                <div className="max-w-xl w-full" style={{ textAlign: 'left' }}>
                  <div className="inline-block rounded-full px-3 py-1 text-sm font-medium" style={{ background: `${COLORS.secondary}22`, color: COLORS.white }}>{title.split(" ")[0]}</div>
                  <h3 className="mt-4 text-2xl md:text-3xl font-bold" style={{ color: COLORS.white }}>{title}</h3>
                  <p className="mt-4 text-lg text-gray-300">{desc}</p>
                  <div className="mt-6 flex items-center gap-3">
                    <a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Learn More</a>
                    <a href="/contact" className="px-4 py-2 rounded-full border border-[rgba(255,255,255,0.06)]" style={{ color: COLORS.textMuted }}>Get Started</a>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="md:col-span-6 flex items-center justify-center">
                <div className="max-w-xl w-full" style={{ textAlign: 'left' }}>
                  <div className="inline-block rounded-full px-3 py-1 text-sm font-medium" style={{ background: `${COLORS.secondary}22`, color: COLORS.white }}>{title.split(" ")[0]}</div>
                  <h3 className="mt-4 text-2xl md:text-3xl font-bold" style={{ color: COLORS.white }}>{title}</h3>
                  <p className="mt-4 text-lg text-gray-300">{desc}</p>
                  <div className="mt-6 flex items-center gap-3">
                    <a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Learn More</a>
                    <a href="/contact" className="px-4 py-2 rounded-full border border-[rgba(255,255,255,0.06)]" style={{ color: COLORS.textMuted }}>Get Started</a>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 flex items-center justify-center"><Placeholder /></div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

const FooterCTA: React.FC = () => (
  <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-[92%] md:w-[720px]">
    <div className="rounded-2xl p-4 flex items-center justify-between shadow-xl" style={{ background: `linear-gradient(90deg, rgba(92,54,147,0.12), rgba(71,42,113,0.06))`, border: "1px solid rgba(255,255,255,0.03)" }}>
      <div>
        <div className="text-sm font-semibold" style={{ color: COLORS.white }}>Ready to transform education?</div>
        <div className="text-xs" style={{ color: COLORS.textMuted }}>Start empowering learners today.</div>
      </div>
      <div className="flex items-center gap-3">
        <a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Get in Touch</a>
        <a href="/work" className="px-3 py-2 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>Portfolio</a>
      </div>
    </div>
  </div>
);

const Education: React.FC = () => {
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
        <div className="mt-8">{services.map((s, idx) => (<SplitSection key={s.id} idx={idx} id={s.id} title={s.title} desc={s.desc} />))}</div>
        <div style={{ height: 160 }} />
      </main>
      <FooterCTA />
      <footer className="mt-20 py-10"><div className="container mx-auto px-6 text-center text-sm" style={{ color: COLORS.textMuted }}>© {new Date().getFullYear()} Axonary — Education Excellence. Always.</div></footer>
    </div>
  );
};

export default Education;
