// WebDevelopment.tsx — web category hub
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MobileServiceHero } from "../../../components/MobileServiceHero";
import { MobileServiceGovernanceSections } from "../../../components/MobileServiceGovernanceSections";
import { webGovernanceHub } from "../../../data/webServiceGovernanceContent";
import { WebDevelopmentSVG } from "../../../components/ServiceSVGs";

const COLORS = {
  primary: "#5C3693",
  secondary: "#472A71",
  bg: "#000000",
  card: "#0b0b0d",
  glass: "rgba(255,255,255,0.03)",
  textMuted: "#BDB7D6",
  white: "#FFFFFF",
};

const solutions = [
  {
    label: "Commerce",
    title: "E-Commerce Website Development",
    description: "Storefronts, checkout, payments, and ops integrations—with performance and SEO foundations treated as product requirements.",
    features: ["Storefront UX", "Payments & PCI scope", "Catalog & promotions", "OMS/ERP hooks", "Core Web Vitals"],
    link: "/ecommerce-website-development",
  },
  {
    label: "Portals",
    title: "Web Portals",
    description: "Authenticated experiences with SSO, role-based access, dashboards, and integrations to the systems your users already rely on.",
    features: ["Identity & RBAC", "Persona-based IA", "Dashboards", "LOB APIs", "Audit-friendly access"],
    link: "/web-portals",
  },
  {
    label: "UI",
    title: "Frontend Development",
    description: "Component-driven UIs, design system alignment, accessibility targets, and performance budgets on real devices.",
    features: ["Design systems", "React/Vue/Angular", "a11y & responsive", "Testing pyramid", "API collaboration"],
    link: "/frontend-development",
  },
  {
    label: "APIs",
    title: "Backend Development",
    description: "Services, data models, auth patterns, and observability—so clients and partners get stable contracts and operable systems.",
    features: ["REST/GraphQL", "Data modeling", "Security basics", "CI/CD", "Logs & metrics"],
    link: "/backend-development",
  },
  {
    label: "Stack",
    title: "Full-Stack Development",
    description: "Vertical slices across UI and services—shared contracts, aligned errors, and deploy pipelines that move together.",
    features: ["End-to-end slices", "Shared schemas", "Auth through the stack", "Staging parity", "Faster validation"],
    link: "/fullstack-development",
  },
  {
    label: "Speed",
    title: "Low-Code Development",
    description: "Accelerate MVPs and internal tools on visual platforms—with integration rigor and escape hatches for custom logic.",
    features: ["Platform fit", "API connectors", "Hybrid code", "Roles & data model", "TCO conversation"],
    link: "/low-code-development",
  },
  {
    label: "PWA",
    title: "PWA Solution",
    description: "Installable web, caching strategies, offline tolerance, and push—implemented with clear update and freshness semantics.",
    features: ["Service worker design", "Offline UX", "Install prompts", "Web push policy", "Cross-browser QA"],
    link: "/pwa-solution",
  },
];

const TESTIMONIALS = [
  {
    name: "Elena V.",
    title: "Head of Digital",
    quote: "Axonary shipped our portal and API work as one thread—fewer integration fires and much clearer ownership.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Chris M.",
    title: "CTO",
    quote: "Performance and accessibility were part of acceptance, not an afterthought. Exactly what we needed for a public launch.",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
  },
];

const FAQS = [
  {
    q: "Do you work with our existing hosting or cloud?",
    a: "Yes. We deploy to your AWS, Azure, GCP, or managed platforms when you provide access and standards—we document environments and secrets handling accordingly.",
  },
  {
    q: "How do you handle SEO for SPAs or storefronts?",
    a: "We choose SSR/SSG or hybrid rendering when indexing matters, and align meta, structured data, and performance with your content model.",
  },
  {
    q: "Can you integrate with our legacy systems?",
    a: "We map APIs, files, or screen-scrape-last-resort patterns with explicit SLAs and error handling—scope depends on what the legacy system exposes.",
  },
  {
    q: "What about accessibility?",
    a: "We target WCAG-oriented acceptance on critical journeys, combine automated checks with manual keyboard and reader passes, and document known gaps if trade-offs are approved.",
  },
  {
    q: "Do you offer maintenance after launch?",
    a: "Yes—monitoring, dependency updates, incident response, and feature backlog can continue under an agreed cadence and SLA.",
  },
];

const TopNav: React.FC<{ progress: number }> = ({ progress }) => (
  <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm" style={{ background: "rgba(0,0,0,0.45)", borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
    <div className="container mx-auto px-6 flex items-center justify-between h-16">
      <div className="flex items-center gap-3">
        <div style={{ width: 44, height: 44, borderRadius: 10, background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})` }} />
        <div>
          <div className="text-sm font-bold" style={{ color: COLORS.white }}>Axonary</div>
          <div className="text-xs" style={{ color: COLORS.textMuted }}>Web Development</div>
        </div>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
        <a href="#services" className="hover:text-white">Services</a>
        <a href="#why-choose-governance" className="hover:text-white">Why Us</a>
        <a href="#faqs" className="hover:text-white">FAQs</a>
        <Link to="/contact" className="ml-4 inline-block px-4 py-2 rounded-full" style={{ background: COLORS.primary, color: COLORS.white }}>Book a Call</Link>
      </nav>
    </div>
    <div className="h-[3px] w-full" style={{ background: "rgba(255,255,255,0.02)" }}>
      <div style={{ height: "3px", width: `${progress}%`, transition: "width 120ms linear", background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary})` }} />
    </div>
  </header>
);

const Testimonials: React.FC = () => (
  <section className="mt-16">
    <div className="container mx-auto px-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center" style={{ color: COLORS.primary }}>
        What Our Clients Say
      </h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {TESTIMONIALS.map((t, idx) => (
          <div
            key={idx}
            className="flex-1 bg-[#181828] rounded-2xl p-8 shadow-xl flex flex-col items-center text-center hover:scale-[1.03] transition-transform duration-200"
            style={{ minWidth: 280, maxWidth: 420 }}
          >
            <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full border-4 border-[rgba(92,54,147,0.18)] mb-4 shadow-md object-cover" style={{ background: COLORS.card }} />
            <p className="text-lg italic text-gray-200 mb-4">&quot;{t.quote}&quot;</p>
            <div className="font-semibold text-white">{t.name}</div>
            <div className="text-xs text-gray-400">{t.title}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section id="faqs" className="mt-20 py-16 scroll-mt-24" style={{ background: COLORS.bg }}>
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: COLORS.primary, fontWeight: 700, letterSpacing: "-0.5px" }}>
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-[#181828] rounded-xl shadow-lg">
              <button
                type="button"
                className="w-full text-left px-6 py-5 focus:outline-none flex justify-between items-center group"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="font-semibold text-white group-hover:text-[#5C3693] transition-colors">{faq.q}</span>
                <span className="text-[#5C3693] transition-transform duration-300" style={{ transform: openIdx === idx ? "rotate(180deg)" : "rotate(0)" }}>▼</span>
              </button>
              {openIdx === idx && <div className="px-6 pb-5 text-gray-300 text-sm">{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SolutionsSection: React.FC = () => (
  <section id="services" className="py-16 md:py-24 scroll-mt-24">
    {solutions.map((sol, idx) => (
      <div key={sol.link} className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
            <div className={idx % 2 === 1 ? "md:order-2" : "md:order-1"}>
              <div className="rounded-2xl overflow-hidden shadow-2xl h-96 md:h-full min-h-[280px] flex items-center justify-center" style={{ background: COLORS.card }}>
                <WebDevelopmentSVG width={360} height={320} />
              </div>
            </div>
            <div className={idx % 2 === 1 ? "md:order-1" : "md:order-2"}>
              <div className="inline-block rounded-full px-3 py-1 text-xs font-medium mb-4" style={{ background: `${COLORS.secondary}33`, color: COLORS.white }}>
                {sol.label}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: COLORS.white, letterSpacing: "-0.5px" }}>
                {sol.title}
              </h2>
              <p className="text-gray-300 text-base md:text-lg mb-6">{sol.description}</p>
              <div className="space-y-3 mb-8">
                {sol.features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <div style={{ color: COLORS.primary, fontSize: "18px", marginTop: "2px" }}>✓</div>
                    <span className="text-gray-200">{f}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <Link to={sol.link} className="px-6 py-3 rounded-full font-semibold transition-all hover:scale-105" style={{ background: COLORS.primary, color: COLORS.white }}>
                  Learn More
                </Link>
                <a href="/contact" className="px-6 py-3 rounded-full font-semibold border transition-all hover:scale-105" style={{ borderColor: "rgba(255,255,255,0.1)", color: COLORS.textMuted }}>
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </section>
);

const WebDevelopment: React.FC = () => {
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
        <MobileServiceHero colors={COLORS} hero={webGovernanceHub.hero} />
        <MobileServiceGovernanceSections colors={COLORS} copy={webGovernanceHub} />
        <SolutionsSection />
        <Testimonials />
        <FAQSection />
        <section className="mt-12">
          <div className="container mx-auto px-6 text-center py-8 rounded-2xl shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: COLORS.primary, letterSpacing: "-1px" }}>
              Ready to plan your web roadmap?
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Share audiences, integrations, and hosting constraints—we will propose architecture, milestones, and how we operate after launch.
            </p>
            <a href="/contact" className="inline-block px-10 py-3 rounded-full font-bold text-lg shadow-lg transition-transform duration-200 hover:scale-105" style={{ background: COLORS.primary, color: COLORS.white }}>
              Schedule a consultation
            </a>
          </div>
        </section>
        <div style={{ height: 160 }} />
      </main>
    </div>
  );
};

export default WebDevelopment;
