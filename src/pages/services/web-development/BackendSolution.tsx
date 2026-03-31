// BackendSolution.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MobileServiceHero } from "../../../components/MobileServiceHero";
import { MobileServiceGovernanceSections } from "../../../components/MobileServiceGovernanceSections";
import { webGovernanceBackend } from "../../../data/webServiceGovernanceContent";

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
    id: "backend-architecture",
    title: "Scalable System Architecture",
    desc:
      "We engineer the invisible engines that power your business—architected from day one for reliability, scalability, and growth. From microservices to monoliths, from serverless to containerized deployments, we design systems that handle anything you throw at them. Load balancing distributes traffic. Auto-scaling spawns new servers during demand surges. Circuit breakers prevent cascading failures. Service mesh manages inter-service communication. The result: architectures that grow from startup to scale-up without redesigns, maintaining consistent performance regardless of load.",
    imgQuery: "system architecture",
  },
  {
    id: "backend-database",
    title: "Database Design & Performance Optimization",
    desc:
      "Data is your competitive edge. We design optimized schemas, implement caching strategies, and tune databases for sub-millisecond query responses. SQL for relational data, NoSQL for flexible schemas, graph databases for connected data—we choose the right tool for every challenge. Indexing strategies prevent slow queries. Query optimization catches unnecessary operations. Replication ensures high availability. Backup strategies protect against data loss. The result: databases that reliably serve billions of queries without breaking a sweat.",
    imgQuery: "database design",
  },
  {
    id: "backend-api",
    title: "RESTful & GraphQL API Development",
    desc:
      "Build interfaces that your frontend and third-party partners love. We design clean, well-documented, RESTful APIs that follow best practices, versioning strategies, and error handling conventions. GraphQL APIs provide clients flexible query capabilities. Rate limiting protects against abuse. Caching strategies minimize database load. WebSocket APIs enable real-time bidirectional communication. The result: APIs so elegant and intuitive developers prefer your platform to competitors.",
    imgQuery: "api development",
  },
  {
    id: "backend-security",
    title: "Security Architecture & Compliance",
    desc:
      "Your data is sacred. We implement fortress-grade security at every layer—authentication via OAuth2/JWT, authorization through role-based and attribute-based access control, encryption at rest and in transit, secure key management, secrets rotation, vulnerability scanning in continuous integration. We follow OWASP guidelines, maintain compliance with GDPR/CCPA/HIPAA, and conduct regular security audits. The result: backends so secure regulators sleep soundly and customers trust your platform with their most sensitive information.",
    imgQuery: "cybersecurity",
  },
  {
    id: "backend-devops",
    title: "DevOps & Deployment Excellence",
    desc:
      "From code to production seamlessly. We architect CI/CD pipelines that automate testing, building, and deployment. Docker containerization ensures consistency across environments. Kubernetes orchestrates container fleets. Infrastructure-as-code provisions resources reliably. Blue-green deployments enable risk-free releases. Feature flags allow gradual rollouts. Real-time monitoring alerts teams to incidents. The result: deployments that happen daily, safely, confidently—without manual intervention or midnight emergencies.",
    imgQuery: "devops deployment",
  },
  {
    id: "backend-monitoring",
    title: "Observability & 24/7 Monitoring",
    desc:
      "Downtime is unacceptable. Our monitoring catches issues before they impact users—application performance monitoring tracks response times and error rates, infrastructure monitoring watches CPU/memory/disk, log aggregation surfaces problems from thousands of servers, distributed tracing follows requests across microservices. Alerting escalates issues to on-call engineers within minutes. The result: backends that run like clockwork, with problems resolved before customers notice.",
    imgQuery: "server monitoring",
  },
];

// --- Testimonials Section ---
const TESTIMONIALS = [
  {
    name: "Priya S.",
    title: "E-commerce Founder",
    quote:
      "Partner API incidents dropped after Axonary tightened our error model and observability—finally we could see which client was failing and why.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Mark T.",
    title: "Product Lead",
    quote:
      "Our team ships faster because schemas, versioning, and deployment are documented the same way we document features.",
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
    q: "How do you approach API design and versioning?",
    a: "We start from consumer contracts, error shapes, and deprecation policy—then implement versioning or compatibility layers so partners are not surprised by releases.",
  },
  {
    q: "Can you work with our cloud and existing data stores?",
    a: "Yes. We deploy to your AWS, Azure, or GCP accounts, respect your networking and secrets standards, and evolve schemas with migration plans—not one-off scripts nobody trusts.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Ongoing SLO monitoring, dependency updates, incident response, and backlog delivery are available under an agreed cadence.",
  },
  {
    q: "How do you handle security basics?",
    a: "AuthN/AuthZ patterns, least privilege, secrets handling, and dependency scanning in CI are part of default delivery—not optional extras.",
  },
  {
    q: "What makes Axonary different on backend work?",
    a: "We optimize for operability and clear contracts—logs, metrics, and runbooks are treated as part of the feature, not a post-launch afterthought.",
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
        Ready to harden your APIs and data layer?
      </h2>
      <p className="mb-6 text-lg text-gray-200 max-w-2xl">
        Share traffic profile, auth model, and integrations—we will propose service boundaries, observability, and release practices.
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
              Backend Excellence
            </div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
          <a href="#backend-architecture" className="hover:text-white">Architecture</a>
          <a href="#backend-database" className="hover:text-white">Database</a>
          <a href="#backend-api" className="hover:text-white">API</a>
          <a href="#backend-security" className="hover:text-white">Security</a>
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
          <div className="text-xs" style={{ color: COLORS.textMuted }}>Scale your backend infrastructure.</div>
        </div>

        <div className="flex items-center gap-3">
          <a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Get in Touch</a>
          <a href="/work" className="px-3 py-2 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>Portfolio</a>
        </div>
      </div>
    </div>
  );
};

const BackendSolution: React.FC = () => {
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
        <MobileServiceHero colors={COLORS} hero={webGovernanceBackend.hero} />
        <MobileServiceGovernanceSections colors={COLORS} copy={webGovernanceBackend} />

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

export default BackendSolution;
