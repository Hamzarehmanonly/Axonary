// FullstackSolution.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MobileServiceHero } from "../../../components/MobileServiceHero";
import { MobileServiceGovernanceSections } from "../../../components/MobileServiceGovernanceSections";
import { webGovernanceFullstack } from "../../../data/webServiceGovernanceContent";

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
    id: "fullstack-planning",
    title: "Strategic Planning & Architecture",
    desc:
      "We turn ideas into blueprints for digital success. Our planning process is strategic, collaborative, and laser-focused on your goals. We conduct discovery workshops to understand your business. We sketch architecture diagrams. We identify technical risks early. We select the perfect tech stack for your needs. We define success metrics. We create development roadmaps. The result: clear vision, aligned teams, and realistic timelines that set you up for execution excellence.",
    imgQuery: "project planning",
  },
  {
    id: "fullstack-frontend",
    title: "Full Frontend Development",
    desc:
      "Modern, responsive interfaces built with React, Vue, or Angular. We craft experiences that users love—pixel-perfect designs, smooth animations, keyboard navigation, screen reader support. Responsive layouts adapt to every device. Progressive enhancement works everywhere. TypeScript catches bugs before they ship. Component libraries scale development speed. The result: frontends so polished they feel like natural extensions of your brand.",
    imgQuery: "frontend development",
  },
  {
    id: "fullstack-backend",
    title: "Robust Backend Systems",
    desc:
      "Scalable APIs and databases that handle anything. We build backends architected for reliability—redundancy prevents single points of failure, load balancing distributes traffic, caching minimizes database load, monitoring catches issues instantly. Security is baked in. Performance is optimized. The result: backends that grow from startup to scale without architectural redesigns.",
    imgQuery: "backend development",
  },
  {
    id: "fullstack-integration",
    title: "Seamless Frontend-Backend Integration",
    desc:
      "Full-stack development means every system talks to every other system perfectly. We orchestrate frontend-backend communication via RESTful or GraphQL APIs. WebSocket events power real-time features. Request/response cycles are optimized. Error handling gracefully degrades. Real-time sync keeps interfaces up-to-date. The result: unified experiences that work like they're a single cohesive system.",
    imgQuery: "system integration",
  },
  {
    id: "fullstack-database",
    title: "Strategic Data Architecture",
    desc:
      "Data strategies that power insights. We design schemas that optimize both writes and reads. We implement caching layers that accelerate common queries. We architect backups that protect against disaster. We scale databases to handle growth. The result: data systems that reliably serve your business without becoming bottlenecks.",
    imgQuery: "database management",
  },
  {
    id: "fullstack-deployment",
    title: "Deployment & Operations Excellence",
    desc:
      "From development to production flawlessly. We architect deployment pipelines that build, test, and release automatically. We containerize applications for consistency. We implement monitoring that catches issues instantly. We design runbooks that guide operations teams through incidents. The result: production environments so reliable you sleep soundly.",
    imgQuery: "cloud deployment",
  },
];

// --- Testimonials Section ---
const TESTIMONIALS = [
  {
    name: "Priya S.",
    title: "E-commerce Founder",
    quote:
      "End-to-end slices meant our checkout flow shipped as one unit—fewer 'works on my machine' debates between UI and API owners.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Mark T.",
    title: "Product Lead",
    quote:
      "Shared types and aligned error handling across the stack cut integration time for every new feature we added afterward.",
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
    q: "How do you split ownership between frontend and backend on full-stack work?",
    a: "We deliver vertical slices with one accountable thread per feature—shared schemas, staging parity, and joint acceptance so UI and services evolve together.",
  },
  {
    q: "Can you plug into our existing monorepo or separate repos?",
    a: "Either model works—we align package boundaries, CI, and release order so changes land safely whether code lives in one place or many.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes—monitoring, dependency hygiene, incident help, and roadmap delivery continue under an agreed operating model.",
  },
  {
    q: "How do you handle auth across the stack?",
    a: "We implement consistent session/token flows, role checks on the server, and UI states that match real authorization—not optimistic buttons that 403 in production.",
  },
  {
    q: "What makes Axonary different on full-stack delivery?",
    a: "We optimize for coherent user journeys: the same people reason about data, errors, and performance from browser to database.",
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
        Ready to ship full-stack vertical slices?
      </h2>
      <p className="mb-6 text-lg text-gray-200 max-w-2xl">
        Bring your MVP or product goals—we will align UI, APIs, environments, and milestones in one thread.
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
              Full-Stack Excellence
            </div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
          <a href="#fullstack-planning" className="hover:text-white">Planning</a>
          <a href="#fullstack-frontend" className="hover:text-white">Frontend</a>
          <a href="#fullstack-backend" className="hover:text-white">Backend</a>
          <a href="#fullstack-database" className="hover:text-white">Database</a>
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
          <div className="text-sm font-semibold" style={{ color: COLORS.white }}>Ready to launch?</div>
          <div className="text-xs" style={{ color: COLORS.textMuted }}>Build your complete solution.</div>
        </div>

        <div className="flex items-center gap-3">
          <a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Get in Touch</a>
          <a href="/work" className="px-3 py-2 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>Portfolio</a>
        </div>
      </div>
    </div>
  );
};

const FullstackSolution: React.FC = () => {
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
        <MobileServiceHero colors={COLORS} hero={webGovernanceFullstack.hero} />
        <MobileServiceGovernanceSections colors={COLORS} copy={webGovernanceFullstack} />

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

export default FullstackSolution;
