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
    id: "on-page-seo",
    title: "On-Page SEO",
    desc: "Optimize meta tags, content, keywords, and technical elements for better rankings.",
  },
  {
    id: "link-building",
    title: "Link Building",
    desc: "Build high-quality backlinks to establish domain authority.",
  },
  {
    id: "technical-seo",
    title: "Technical SEO",
    desc: "Improve site speed, mobile-friendliness, and crawlability.",
  },
  {
    id: "local-seo",
    title: "Local SEO",
    desc: "Dominate local search with Google My Business optimization.",
  },
  {
    id: "keyword-research",
    title: "Keyword Research",
    desc: "Identify high-potential keywords with low competition.",
  },
  {
    id: "content-strategy",
    title: "Content Strategy",
    desc: "Develop comprehensive SEO content strategies.",
  },
];

const benefits = [
  { title: "Increased Traffic", desc: "Drive qualified visitors from search results" },
  { title: "Higher Rankings", desc: "Dominate first page results for target keywords" },
  { title: "Better UX", desc: "Improved site performance and usability" },
  { title: "Cost-Effective", desc: "Sustainable long-term traffic generation" },
  { title: "Competitive Edge", desc: "Outrank competitors in search results" },
  { title: "Lead Generation", desc: "Convert organic visitors into customers" },
];

const SEOServices: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
      {/* Navigation Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all"
        style={{
          background: "rgba(0,0,0,0.45)",
          borderBottom: "1px solid rgba(255,255,255,0.03)",
        }}
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
                SEO Services
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
            <Link to="/services" className="hover:text-white transition">Services</Link>
            <Link to="/about" className="hover:text-white transition">About</Link>
            <Link to="/contact" className="ml-4 inline-block px-4 py-2 rounded-full" style={{ background: COLORS.primary, color: COLORS.white }}>
              Get Started
            </Link>
          </nav>
        </div>

        <div className="h-[3px] w-full" style={{ background: "rgba(255,255,255,0.02)" }}>
          <div
            style={{
              height: "3px",
              width: `${scrollProgress}%`,
              transition: "width 120ms linear",
              background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary})`,
            }}
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-[72vh] flex items-center pt-20" style={{ background: COLORS.bg }}>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block rounded-full px-4 py-1 text-sm font-medium" style={{ background: `${COLORS.secondary}33`, color: COLORS.white }}>
              Organic Growth • Sustainable • Results-Driven
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
              Dominate Search Results{" "}
              <span style={{ color: COLORS.primary }}>with SEO</span>
            </h1>

            <p className="mt-4 text-lg text-gray-300 max-w-2xl">
              Drive organic traffic and increase visibility with our comprehensive SEO strategies. Get more leads and customers from search.
            </p>

            <div className="mt-8 flex items-center gap-4 flex-wrap">
              <Link to="/contact" className="px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2" style={{ background: COLORS.primary, color: COLORS.white }}>
                Get SEO Strategy
              </Link>
              <button className="px-6 py-3 rounded-full border font-semibold" style={{ borderColor: `${COLORS.primary}33`, color: COLORS.textMuted }}>
                Learn More
              </button>
            </div>
          </div>

          <div className="rounded-2xl p-6" style={{ background: COLORS.card }}>
            <h5 className="text-sm text-gray-400">SEO Results</h5>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-xs text-gray-400">Websites Optimized</div>
              </div>
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">300%</div>
                <div className="text-xs text-gray-400">Avg. Traffic Growth</div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-300">Ready to improve your rankings?</p>
              <Link to="/contact" className="inline-block mt-4 px-4 py-2 rounded-full" style={{ background: COLORS.primary, color: COLORS.white }}>
                Schedule Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28" style={{ background: COLORS.bg }}>
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Our SEO Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="p-8 rounded-xl border transition hover:border-opacity-100"
                style={{
                  borderColor: `${COLORS.primary}33`,
                  backgroundColor: COLORS.card,
                }}
              >
                <h3 className="text-2xl font-bold mb-3" style={{ color: COLORS.primary }}>
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28" style={{ background: `${COLORS.secondary}11` }}>
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Why Choose Our SEO</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border-l-4"
                style={{
                  background: COLORS.card,
                  borderLeftColor: COLORS.primary,
                }}
              >
                <h4 className="text-xl font-bold mb-2" style={{ color: COLORS.primary }}>
                  {benefit.title}
                </h4>
                <p className="text-gray-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28" style={{ background: COLORS.bg }}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Boost Your Rankings?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free SEO audit and discover how we can increase your organic traffic.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 rounded-full font-semibold"
            style={{ background: COLORS.primary, color: COLORS.white }}
          >
            Start Free Audit
          </Link>
        </div>
      </section>

      {/* Footer CTA */}
      <div className="fixed bottom-8 right-8 z-40">
        <Link
          to="/contact"
          className="px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition inline-block"
          style={{ backgroundColor: COLORS.primary, color: "white" }}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default SEOServices;
