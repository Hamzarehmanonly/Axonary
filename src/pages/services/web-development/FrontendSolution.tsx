// FrontendSolution.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MobileServiceHero } from "../../../components/MobileServiceHero";
import { MobileServiceGovernanceSections } from "../../../components/MobileServiceGovernanceSections";
import { webGovernanceFrontend } from "../../../data/webServiceGovernanceContent";

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
    id: "frontend-design",
    title: "Exceptional UI/UX Design",
    desc:
      "We don't just design interfaces—we craft digital experiences that delight, inspire, and convert. Our UI/UX process fuses cutting-edge design trends with behavioral psychology, data-driven insights, and accessibility best practices. Every pixel serves a purpose. Every interaction feels intentional. Every animation delights without distraction. We design for the full spectrum of users—from visually impaired to highly engaged power users. Our design systems ensure consistency across thousands of screens while allowing flexibility for innovation. The result: interfaces so intuitive users navigate effortlessly. So beautiful users linger. So compelling users return.",
    imgQuery: "ui design",
  },
  {
    id: "frontend-react",
    title: "Modern React Development",
    desc:
      "Lightning-fast, interactive frontends powered by React and cutting-edge JavaScript frameworks. We build component-driven architectures that scale from small projects to massive applications. State management with Redux/Zustand, context optimization, code splitting, and lazy loading create snappy user experiences. Our React developers master hooks, custom hooks, error boundaries, and performance optimization. We implement real-time sync with WebSockets, seamless API integration, and offline-first capabilities. The result: user interfaces that feel responsive, fast, and alive—no matter how complex the underlying logic.",
    imgQuery: "react development",
  },
  {
    id: "frontend-responsive",
    title: "Responsive & Adaptive Design",
    desc:
      "From 320px phones to 4K monitors, your interface adapts flawlessly. We craft responsive architectures that detect device capabilities and adapt gracefully. Mobile-first design ensures excellent experiences on small screens first. Progressive enhancement adds rich features for capable devices. Adaptive layouts shift from single-column mobile to multi-column desktop seamlessly. Touch interfaces work perfectly on phones and tablets. Hover states gracefully degrade on touch devices. The result: a single codebase that feels native on every device, delivering consistent quality from garage startup to enterprise employee.",
    imgQuery: "responsive design",
  },
  {
    id: "frontend-performance",
    title: "Performance Optimization & Web Vitals",
    desc:
      "Speed is a feature. We optimize every aspect of frontend performance—bundle sizes, render cycles, memory usage, and network requests. Code splitting reduces initial load times. Image optimization through WebP and responsive images. Lazy loading ensures off-screen content loads when needed. Service workers enable offline functionality and instant app-like experiences. Performance budgets ensure every change maintains speed. We target Core Web Vitals perfect scores. The result: interfaces that load in milliseconds, render at 60fps, and feel responsive to every user interaction. Fast sites convert better, rank higher, and users return.",
    imgQuery: "web performance",
  },
  {
    id: "frontend-accessibility",
    title: "Accessibility & Inclusive Design",
    desc:
      "No one left behind. We build WCAG 2.1 AAA-compliant interfaces that work for every user—keyboard navigation for power users without mice, screen readers that clearly describe interfaces, sufficient color contrast even for colorblind users, captions and transcripts for audio/video. Semantic HTML, ARIA labels, focus management, and skip links create accessible foundations. Automated testing catches 80% of issues. Manual testing with assistive technology catches the rest. The result: interfaces truly accessible to the full diversity of humanity—including up to 15% of users with disabilities who might otherwise be locked out.",
    imgQuery: "web accessibility",
  },
  {
    id: "frontend-testing",
    title: "Comprehensive Testing & Quality Assurance",
    desc:
      "Confidence in every release. We employ multiple testing strategies—unit tests for individual functions, integration tests for component interactions, end-to-end tests that click through user journeys, visual regression testing catching unintended design changes, performance testing ensuring speed targets. Our test suites achieve 80%+ code coverage. Continuous integration runs tests automatically on every code change. The result: ships with zero surprises, bugs caught before production, and the confidence to iterate rapidly without fear.",
    imgQuery: "testing automation",
  },
];

// --- Testimonials Section ---
const TESTIMONIALS = [
  {
    name: "Priya S.",
    title: "E-commerce Founder",
    quote:
      "Our storefront UI finally matches our brand system—Axonary shipped components we could reuse and performance budgets we could defend in launch review.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Mark T.",
    title: "Product Lead",
    quote:
      "Accessibility and Core Web Vitals were in acceptance criteria, not a post-launch scramble. That alone saved us weeks of rework.",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
  },
];

const TestimonialsSection: React.FC = () => (
  <section className="py-20 md:py-28 bg-black/60">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center" style={{ color: COLORS.white }}>
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {TESTIMONIALS.map((t) => (
          <div key={t.name} className="rounded-xl p-6 shadow-lg flex flex-col items-center bg-[#18181b]">
            <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full mb-4" />
            <div className="text-lg font-semibold mb-2" style={{ color: COLORS.white }}>{t.name}</div>
            <div className="text-xs mb-2" style={{ color: COLORS.textMuted }}>{t.title}</div>
            <div className="italic text-center text-gray-300">"{t.quote}"</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- FAQ Section ---
const FAQS = [
  {
    q: "How long does a typical frontend engagement take?",
    a: "Depends on surface area, design system maturity, and integrations—many product UIs land first slices in a few weeks; larger programs run in milestones with clear acceptance per journey.",
  },
  {
    q: "Can you work inside our existing design system or codebase?",
    a: "Yes. We extend tokens, components, and patterns you already have, or help introduce a system where one is missing—without a disruptive rewrite unless you want one.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "We can continue with dependency updates, performance regressions, accessibility fixes, and feature work on a cadence that matches your release train.",
  },
  {
    q: "How do you handle performance and SEO for SPAs?",
    a: "We align rendering strategy (SSR/SSG/hybrid) with what must be indexed, set performance budgets on real devices, and pair automated checks with manual passes on critical paths.",
  },
  {
    q: "What makes Axonary different on frontend?",
    a: "We treat UI as product infrastructure—contracts with APIs, measurable UX, and operability—not a skin applied after the fact.",
  },
];

const FAQSection: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-20 md:py-28 bg-black/70">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center" style={{ color: COLORS.white }}>
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={faq.q} className="border-b border-gray-700 pb-4">
              <button
                className="w-full text-left flex justify-between items-center text-lg font-medium focus:outline-none"
                style={{ color: COLORS.white }}
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                {faq.q}
                <span className="ml-2 text-xl">{open === idx ? '-' : '+'}</span>
              </button>
              {open === idx && (
                <div className="mt-2 text-gray-300 text-base">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Footer CTA Section ---
const FooterConsultCTA: React.FC = () => (
  <section className="py-16 bg-gradient-to-r from-[#5C3693]/80 to-[#472A71]/80">
    <div className="container mx-auto px-6 flex flex-col items-center justify-center text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: COLORS.white }}>
        Ready to level up your frontend?
      </h2>
      <p className="mb-6 text-lg text-gray-200 max-w-2xl">
        Share design system, framework, and performance targets—we will align components, testing, and API contracts.
      </p>
      <Link
        to="/contact"
        className="px-8 py-3 rounded-full font-semibold bg-white text-[#5C3693] hover:bg-gray-200 transition"
        style={{ boxShadow: '0 2px 16px 0 rgba(92,54,147,0.10)' }}
      >
        Get Your Free Consultation
      </Link>
    </div>
  </section>
);

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
              Frontend Excellence
            </div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
          <a href="#frontend-design" className="hover:text-white">Design</a>
          <a href="#frontend-react" className="hover:text-white">React</a>
          <a href="#frontend-performance" className="hover:text-white">Performance</a>
          <a href="#frontend-accessibility" className="hover:text-white">Accessibility</a>
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

const SplitSection: React.FC<{ idx: number; id: string; title: string; desc: string }> = ({ idx, id, title, desc }) => {
  const isLeftImage = idx % 2 === 0;
  const Placeholder: React.FC = () => (
    <div
      className="rounded-2xl shadow-lg w-full overflow-hidden flex items-center justify-center text-sm font-medium"
      style={{ background: COLORS.card, aspectRatio: "1", maxWidth: "360px", color: COLORS.textMuted }}
    >
      {title.split(" ")[0]}
    </div>
  );
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
          <div className="text-xs" style={{ color: COLORS.textMuted }}>Create amazing frontend experiences.</div>
        </div>

        <div className="flex items-center gap-3">
          <a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Get in Touch</a>
          <a href="/work" className="px-3 py-2 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>Portfolio</a>
        </div>
      </div>
    </div>
  );
};

const FrontendSolution: React.FC = () => {
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
        <MobileServiceHero colors={COLORS} hero={webGovernanceFrontend.hero} />
        <MobileServiceGovernanceSections colors={COLORS} copy={webGovernanceFrontend} />

        <div className="mt-8">
          {services.map((s, idx) => (
            <SplitSection key={s.id} idx={idx} id={s.id} title={s.title} desc={s.desc} />
          ))}
        </div>

        <TestimonialsSection />
        <FAQSection />
        <FooterConsultCTA />

        <div style={{ height: 160 }} />
      </main>

      <FooterCTA />

    </div>
  );
};

export default FrontendSolution;
