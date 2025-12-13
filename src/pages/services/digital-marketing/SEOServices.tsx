import React from "react";
import { Link } from "react-router-dom";
import { SEOServicesSVG } from "../../../components/DigitalMarketingSVGs";

const COLORS = {
  primary: "#5C3693",
  secondary: "#472A71",
  accent: "#A855F7",
  bg: "#000000",
  card: "#0b0b0d",
  textMuted: "#BDB7D6",
  white: "#FFFFFF",
};

const SEOServices: React.FC = () => {
  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 pb-20" style={{ background: COLORS.bg }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <SEOServicesSVG width={400} height={400} />
            </div>
            <div>
              <div className="inline-block rounded-full px-4 py-1 text-sm font-medium mb-6" style={{ background: `${COLORS.secondary}33`, color: COLORS.primary }}>
                Search Engine Optimization
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Dominate Search Rankings with
                <span style={{ color: COLORS.primary }}> Strategic SEO</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Drive sustainable organic traffic with our comprehensive SEO services. We combine technical expertise with proven strategies to get your website ranking for high-intent keywords.
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
                style={{ background: COLORS.primary, color: COLORS.white }}
              >
                Start Your SEO Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is SEO Section */}
      <section className="py-20 px-6" style={{ background: COLORS.bg }}>
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">What is SEO & Why It Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg" style={{ background: COLORS.card }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: COLORS.accent }}>Search Engine Optimization Explained</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                SEO is the process of optimizing your website to rank higher in search engine results. It involves technical improvements, content strategy, and link building to increase visibility for relevant search queries.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Unlike paid advertising, SEO delivers long-term results. Once you rank, you continue getting traffic without paying per click. It's a sustainable investment in your online presence.
              </p>
            </div>
            <div className="p-8 rounded-lg" style={{ background: COLORS.card }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: COLORS.accent }}>The Business Impact</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span style={{ color: COLORS.primary }}>→</span>
                  <span className="text-gray-300"><strong>Increased Visibility:</strong> Rank for keywords your customers search</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: COLORS.primary }}>→</span>
                  <span className="text-gray-300"><strong>Qualified Traffic:</strong> Attract users actively seeking your services</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: COLORS.primary }}>→</span>
                  <span className="text-gray-300"><strong>Cost Effective:</strong> Lower CAC compared to paid advertising</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: COLORS.primary }}>→</span>
                  <span className="text-gray-300"><strong>Build Authority:</strong> Establish thought leadership in your industry</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our SEO Process */}
      <section className="py-20 px-6" style={{ background: `${COLORS.secondary}11` }}>
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Proven SEO Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Audit & Analysis", desc: "Comprehensive technical audit, competitor analysis, and keyword research" },
              { num: "02", title: "Strategy Development", desc: "Custom roadmap targeting your industry, competition, and growth goals" },
              { num: "03", title: "Implementation", desc: "On-page optimization, technical fixes, content creation, and link building" },
              { num: "04", title: "Monitoring & Refinement", desc: "Monthly reporting, continuous optimization, and strategy adjustments" }
            ].map((step, idx) => (
              <div key={idx} className="p-6 rounded-lg" style={{ background: COLORS.card, borderLeft: `3px solid ${COLORS.primary}` }}>
                <div className="text-3xl font-bold mb-3" style={{ color: COLORS.accent }}>{step.num}</div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-20 px-6" style={{ background: COLORS.bg }}>
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Core SEO Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🔍", title: "Technical SEO", desc: "Site speed optimization, mobile responsiveness, crawlability, indexation, structured data" },
              { icon: "📝", title: "Content Strategy", desc: "Keyword-focused content creation, topic clusters, pillar pages, regular updates" },
              { icon: "🔗", title: "Link Building", desc: "High-quality backlinks, authority building, broken link reclamation, resource pages" },
              { icon: "📊", title: "Local SEO", desc: "Google Business optimization, local citations, reviews management, local link building" },
              { icon: "🎯", title: "Keyword Research", desc: "Long-tail keywords, search intent analysis, competitor keywords, opportunity mining" },
              { icon: "📈", title: "Performance Tracking", desc: "Rankings monitoring, traffic analytics, conversion tracking, ROI measurement" }
            ].map((service, idx) => (
              <div key={idx} className="p-8 rounded-lg" style={{ background: COLORS.card }}>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & ROI */}
      <section className="py-20 px-6" style={{ background: `${COLORS.secondary}11` }}>
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Results You Can Expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stat: "300%", label: "Average Traffic Increase", desc: "Within 6-12 months of strategic optimization" },
              { stat: "85%", label: "First Page Rankings", desc: "For target keywords within your industry" },
              { stat: "40%", label: "Conversion Rate Lift", desc: "From improved ranking and traffic quality" }
            ].map((result, idx) => (
              <div key={idx} className="text-center p-8 rounded-lg" style={{ background: COLORS.card }}>
                <div className="text-5xl font-bold mb-2" style={{ color: COLORS.primary }}>{result.stat}</div>
                <h3 className="text-xl font-bold mb-2">{result.label}</h3>
                <p className="text-sm text-gray-400">{result.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center" style={{ background: COLORS.bg }}>
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Dominate Search Rankings?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create a custom SEO strategy tailored to your business goals. Get a free consultation and audit today.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
            style={{ background: COLORS.primary, color: COLORS.white }}
          >
            Get Your Free SEO Audit
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
