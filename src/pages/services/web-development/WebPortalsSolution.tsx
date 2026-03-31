// WebPortalsSolution.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MobileServiceHero } from "../../../components/MobileServiceHero";
import { MobileServiceGovernanceSections } from "../../../components/MobileServiceGovernanceSections";
import { webGovernancePortals } from "../../../data/webServiceGovernanceContent";

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
    id: "portal-design",
    title: "Enterprise Portal Architecture & Design",
    desc:
      "We architect digital gateways that transcend standard web applications. Every portal we build becomes the beating heart of your digital ecosystem—a unified command center where your users discover, engage, and transact with purpose. We combine intuitive navigation with sophisticated information architecture, ensuring users find exactly what they need in seconds. Our design language adapts seamlessly from B2B enterprise systems to B2C customer platforms. We implement role-based experiences, personalization engines, and adaptive UI that evolves based on user behavior. The result: portals that feel less like utilities and more like extensions of your brand.",
    imgQuery: "web portal",
  },
  {
    id: "portal-dashboard",
    title: "Interactive Dashboards & Real-Time Analytics",
    desc:
      "See your business in high definition. We build dashboards that turn raw data into actionable intelligence at a glance. Real-time data refresh, interactive visualizations, drill-down capabilities, and predictive charts empower your teams to make smarter, faster decisions. We implement custom widgets, KPI tracking, anomaly detection, and data-driven alerts. Whether you're monitoring sales, operations, customer satisfaction, or compliance metrics, our dashboards scale from single-user interfaces to enterprise-wide command centers. Users gain clarity, confidence, and the ability to lead instead of react.",
    imgQuery: "dashboard analytics",
  },
  {
    id: "portal-authentication",
    title: "Enterprise Security & Access Control",
    desc:
      "Trust is everything. We implement fortress-grade security architectures that protect user data while maintaining frictionless access. Single sign-on (SSO), multi-factor authentication, role-based access control (RBAC), attribute-based access control (ABAC), OAuth2, SAML, and JWT tokens provide bulletproof authentication. We encrypt data at rest and in transit, implement zero-trust security models, maintain audit trails, and exceed compliance standards (GDPR, CCPA, SOC 2, ISO 27001). Your users stay protected without friction. Your data stays locked down. Your reputation remains untouchable.",
    imgQuery: "security portal",
  },
  {
    id: "portal-content",
    title: "Flexible Content Management & Localization",
    desc:
      "Take control of your story without coding. We build content management systems so intuitive that non-technical teams can publish, update, and optimize content with confidence. Version control, scheduled publishing, multi-language support, media libraries, SEO optimization, and workflow approvals ensure content quality and consistency. Our CMS solutions handle unlimited scalability—from small blogs to massive content repositories. We provide API-first architectures that let you use content anywhere. Your team ships content faster. Your users access it in their language. Your brand voice stays consistent.",
    imgQuery: "content management",
  },
  {
    id: "portal-integration",
    title: "Seamless API Integration & System Connectivity",
    desc:
      "Break down silos and unlock new value. We seamlessly connect your portal to every critical system—legacy databases, cloud platforms, third-party SaaS, payment processors, CRM systems, ERP platforms. Our integration expertise handles REST APIs, GraphQL, webhook events, real-time data sync, and complex ETL pipelines. We design middleware that translates between incompatible systems. We implement retry logic, error handling, and monitoring that keeps data flowing reliably. The result: a unified digital experience where your portal connects everything that matters, creating a competitive advantage through total system integration.",
    imgQuery: "api integration",
  },
  {
    id: "portal-support",
    title: "24/7 Enhanced Support & Continuous Optimization",
    desc:
      "Your portal never sleeps, and neither do we. Our 24/7 support team monitors uptime, performance, and security around the clock. Proactive monitoring catches issues before users notice. Rapid-response maintenance fixes problems within minutes. Continuous optimization improves performance, security, and features every day. We provide uptime SLAs of 99.99%, detailed analytics, monthly performance reports, and strategic guidance on features, improvements, and modernization. Your portal becomes more reliable, faster, and more valuable over time.",
    imgQuery: "technical support",
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
              Web Portals Solutions
            </div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
          <a href="#portal-design" className="hover:text-white">Design</a>
          <a href="#portal-dashboard" className="hover:text-white">Dashboard</a>
          <a href="#portal-authentication" className="hover:text-white">Security</a>
          <a href="#portal-content" className="hover:text-white">CMS</a>
          <a href="#portal-integration" className="hover:text-white">Integration</a>
          <a href="#portal-support" className="hover:text-white">Support</a>
          <Link to="/contact" className="ml-4 inline-block px-4 py-2 rounded-full" style={{ background: COLORS.primary, color: COLORS.white }}>
            Book a Call
          </Link>
        </nav>
      </div>
      <div className="h-[3px] w-full" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div
          className="h-full transition-all duration-300"
          style={{ width: `${progress}%`, background: COLORS.primary }}
        />
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
          <div className="text-sm font-semibold" style={{ color: COLORS.white }}>Ready to launch?</div>
          <div className="text-xs" style={{ color: COLORS.textMuted }}>Bring your portal vision to life.</div>
        </div>

        <div className="flex items-center gap-3">
          <a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Get in Touch</a>
          <a href="/work" className="px-3 py-2 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>Portfolio</a>
        </div>
      </div>
    </div>
  );
};


// --- Testimonials Section ---
const TESTIMONIALS = [
  {
    name: "Priya S.",
    title: "Director of Operations",
    quote:
      "SSO, roles, and audit trails were designed for our actual org chart—not a demo RBAC matrix nobody could operate.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Mark T.",
    title: "Product Lead",
    quote:
      "Partner and customer views share a backbone but stay properly isolated—legal slept better after the access review.",
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
    q: "Can you integrate with our IdP (SAML/OIDC)?",
    a: "Yes—SSO, group-to-role mapping, and session policies are standard portal work for us, aligned to your security team's requirements.",
  },
  {
    q: "How do you model roles for customers vs employees vs partners?",
    a: "We separate tenants or namespaces where needed, enforce authorization on the server for every API, and keep audit logs attributable.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Ongoing access reviews, onboarding tweaks, integration maintenance, and feature backlog delivery under an agreed cadence.",
  },
  {
    q: "Can portals pull from multiple internal systems?",
    a: "We aggregate via APIs or events with clear ownership of source-of-truth, caching, and failure UX when a downstream system is slow.",
  },
  {
    q: "What makes Axonary different on portals?",
    a: "We design for governance and scale from day one—so your portal survives real org complexity, not just the pilot department.",
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
        Ready to design your authenticated portal?
      </h2>
      <p className="mb-6 text-lg text-gray-200 max-w-2xl">
        Share personas, IdP, and integrations—we will map RBAC, dashboards, and a secure rollout plan.
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

const WebPortalsSolution: React.FC = () => {
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
        <MobileServiceHero colors={COLORS} hero={webGovernancePortals.hero} />
        <MobileServiceGovernanceSections colors={COLORS} copy={webGovernancePortals} />

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

export default WebPortalsSolution;
