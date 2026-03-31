// EcommerceSolution.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MobileServiceHero } from "../../../components/MobileServiceHero";
import { MobileServiceGovernanceSections } from "../../../components/MobileServiceGovernanceSections";
import { webGovernanceEcommerce } from "../../../data/webServiceGovernanceContent";

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
    id: "ecom-storefront",
    title: "Premium Storefront Design & Development",
    desc:
      "Launch a digital flagship that transcends ordinary e-commerce. We craft immersive, high-converting storefronts engineered to captivate, inspire, and convert. Every visual element, interaction, and user flow is meticulously designed around your customers' journey—from discovery to checkout to advocacy. Our storefronts blend stunning aesthetics with conversion psychology, mobile-first architecture, and blazing-fast performance. We build platforms that don't just look beautiful—they generate revenue, build brand loyalty, and scale effortlessly as your business grows.",
    imgQuery: "ecommerce store",
  },
  {
    id: "ecom-integration",
    title: "Secure Payment & Checkout Mastery",
    desc:
      "Never lose a sale to checkout friction. We architect bulletproof payment systems that feel invisible to customers while remaining fortress-strong on security. Integrating Stripe, PayPal, Square, Apple Pay, Google Wallet, and 100+ international payment methods, our solutions handle every scenario—from one-time purchases to subscriptions to multi-currency transactions. We implement PCI-DSS compliance, tokenization, fraud detection, and one-click purchasing. The result: frictionless checkouts that reduce cart abandonment by 30-40% and transform hesitant browsers into confident buyers.",
    imgQuery: "payment gateway",
  },
  {
    id: "ecom-inventory",
    title: "Real-Time Inventory & Supply Chain Intelligence",
    desc:
      "Stay perpetually ahead of demand with intelligent inventory systems that think for you. Our real-time tracking syncs across warehouses, locations, and channels—giving you perfect visibility into stock levels every second. Automated reorder points trigger restocks before you run out. Dynamic allocation prevents overselling. Smart forecasting predicts demand surges. Our systems integrate with suppliers, shippers, and ERPs to create a seamless supply chain. The outcome: zero stockouts, minimized overstock, optimized cash flow, and customers who never face the dreaded 'out of stock' message.",
    imgQuery: "inventory management",
  },
  {
    id: "ecom-analytics",
    title: "Advanced Analytics & Business Intelligence",
    desc:
      "Unlock the hidden truths in your sales data. Our custom dashboards reveal what drives revenue, spotlight emerging trends, and pinpoint growth opportunities. Track every metric that matters—conversion rates, customer lifetime value, product affinity, cart abandonment patterns, traffic sources, geographic performance. Predictive analytics forecast future revenue. Cohort analysis reveals your most valuable customers. Real-time alerts notify you of anomalies. We transform raw data into actionable intelligence that empowers you to make strategic decisions, optimize marketing spend, and scale revenue with precision.",
    imgQuery: "sales analytics",
  },
  {
    id: "ecom-mobile",
    title: "Mobile-First Commerce Excellence",
    desc:
      "Capture the explosive growth of mobile shopping with platforms engineered for the small screen first. We build lightning-fast, app-like mobile experiences that let your customers shop, search, pay, and receive support with one hand. One-tap checkout, biometric authentication, push notifications for deals, mobile wallets, augmented reality try-ons, and seamless sync across devices create friction-free journeys. Our mobile platforms drive 40-60% of sales for leading brands. We optimize for 3G networks, battery life, and touch gestures. Your mobile store doesn't just work—it thrives.",
    imgQuery: "mobile shopping",
  },
  {
    id: "ecom-optimization",
    title: "Performance Optimization & SEO Domination",
    desc:
      "Rise to the top of search and stay there. We turbocharge every aspect of your e-commerce empire—page load times, Core Web Vitals, image optimization, smart caching, CDN delivery. Our SEO expertise ranks you for high-intent keywords that drive buyers. We optimize product pages for featured snippets, implement rich schema markup, build internal linking strategies that guide customers through discovery. Technical SEO removes crawl issues. User experience improvements signal authority to Google. The result: top rankings, organic traffic floods, and unstoppable revenue growth that compounds month after month.",
    imgQuery: "website optimization",
  },
];

// --- Testimonials Section ---
const TESTIMONIALS = [
  {
    name: "Priya S.",
    title: "E-commerce Founder",
    quote:
      "Checkout, tax, and fulfillment hooks were scoped together—fewer launch-week surprises when real orders hit real APIs.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Mark T.",
    title: "Product Lead",
    quote:
      "Core Web Vitals and catalog SEO were part of the build, not a panic sprint after marketing saw rankings slip.",
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
    q: "Which platforms do you build storefronts on?",
    a: "We work headless or on major commerce platforms depending on your catalog complexity, ops team, and integration surface—always with PCI scope clarity.",
  },
  {
    q: "Can you integrate OMS, ERP, or 3PL systems?",
    a: "Yes. We map order states, webhooks, idempotency, and reconciliation so finance and fulfillment see the same truth as the storefront.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Seasonal readiness, promotions, payment updates, and performance tuning are typical ongoing work—we align to your peak calendar.",
  },
  {
    q: "How do you approach performance for high-traffic sales?",
    a: "Caching layers, cart/checkout isolation, load testing on realistic journeys, and observability on payment and inventory calls—not just homepage scores.",
  },
  {
    q: "What makes Axonary different on e-commerce?",
    a: "We connect merchandising UX to operational reality—fewer 'sold but not shippable' classes of bugs.",
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
        Ready to scope your ecommerce build?
      </h2>
      <p className="mb-6 text-lg text-gray-200 max-w-2xl">
        Share catalog complexity, payments, and fulfilment—we will outline storefront approach, integrations, and a phased launch plan.
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
              E-Commerce Excellence
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
          <a href="#ecom-storefront" className="hover:text-white">Storefront</a>
          <a href="#ecom-integration" className="hover:text-white">Payment</a>
          <a href="#ecom-inventory" className="hover:text-white">Inventory</a>
          <a href="#ecom-analytics" className="hover:text-white">Analytics</a>
          <Link to="/contact" className="ml-4 inline-block px-4 py-2 rounded-full" style={{ background: COLORS.primary, color: COLORS.white }}>
            Book a Call
          </Link>
        </nav>
      </div>

      {/* scroll progress bar */}
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
          <div className="text-sm font-semibold" style={{ color: COLORS.white }}>Ready to boost sales?</div>
          <div className="text-xs" style={{ color: COLORS.textMuted }}>Launch your online store today.</div>
        </div>

        <div className="flex items-center gap-3">
          <a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Get in Touch</a>
          <a href="/work" className="px-3 py-2 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>Portfolio</a>
        </div>
      </div>
    </div>
  );
};

const EcommerceSolution: React.FC = () => {
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
        <MobileServiceHero colors={COLORS} hero={webGovernanceEcommerce.hero} />
        <MobileServiceGovernanceSections colors={COLORS} copy={webGovernanceEcommerce} />

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

export default EcommerceSolution;
