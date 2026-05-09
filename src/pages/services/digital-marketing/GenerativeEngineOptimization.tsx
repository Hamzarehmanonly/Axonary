import React from "react";
import { Link } from "react-router-dom";
import { SEOAISVG, SearchEngineOptimizationSVG } from "../../../components/DigitalMarketingSVGs";

const COLORS = {
  primary: "#5C3693",
  secondary: "#472A71",
  accent: "#A855F7",
  bg: "#000000",
  card: "#0b0b0d",
  white: "#FFFFFF",
};

const GenerativeEngineOptimization: React.FC = () => {
  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
      <section className="min-h-screen flex items-center pt-20 pb-20" style={{ background: COLORS.bg }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <SearchEngineOptimizationSVG width={360} height={360} />
                <div className="absolute -bottom-6 -right-8 opacity-80 hidden md:block">
                  <SEOAISVG width={180} height={180} />
                </div>
              </div>
            </div>
            <div>
              <div
                className="inline-block rounded-full px-4 py-1 text-sm font-medium mb-6"
                style={{ background: `${COLORS.secondary}33`, color: COLORS.primary }}
              >
                Generative Engine Optimization (GEO)
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Generative Engine Optimization <span style={{ color: COLORS.primary }}>Service</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Optimize your brand for AI-driven discovery. We help your content and pages earn visibility in generative answers
                across modern search experiences—without sacrificing classic SEO fundamentals.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="inline-block px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
                  style={{ background: COLORS.primary, color: COLORS.white }}
                >
                  Get a GEO Audit
                </Link>
                <Link
                  to="/seo-services"
                  className="inline-block px-8 py-4 rounded-full font-semibold border"
                  style={{ borderColor: `${COLORS.primary}66`, color: COLORS.white }}
                >
                  Explore SEO Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: `${COLORS.secondary}11` }}>
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            What GEO <span style={{ color: COLORS.primary }}>Means</span> for Growth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Entity & brand presence",
                desc: "Strengthen the signals that models use to understand who you are, what you do, and where you’re credible.",
              },
              {
                title: "Answer-ready content",
                desc: "Turn key pages into structured, citeable explanations that fit how AI summarizes, compares, and recommends.",
              },
              {
                title: "SEO-first foundations",
                desc: "Improve crawlability, indexation, internal linking, and topical authority—so GEO compounds with organic SEO.",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-lg" style={{ background: COLORS.card }}>
                <h3 className="text-xl font-bold mb-3" style={{ color: COLORS.accent }}>
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: COLORS.bg }}>
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Our GEO <span style={{ color: COLORS.primary }}>Deliverables</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🧩", title: "Entity mapping", desc: "Define core entities, relationships, and topical coverage gaps." },
              { icon: "🧾", title: "Answer architecture", desc: "Rewrite key pages into clear, citeable sections and comparisons." },
              { icon: "🏷️", title: "Structured data", desc: "Schema recommendations to support understanding and trust." },
              { icon: "🔗", title: "Internal linking plan", desc: "Strengthen topic clusters and attribution pathways." },
              { icon: "📌", title: "Citations & proof", desc: "Improve proof blocks so AI can confidently reference your claims." },
              { icon: "📈", title: "Measurement", desc: "Track visibility signals, query coverage, and downstream leads." },
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

      <section className="py-20 px-6 text-center" style={{ background: `${COLORS.secondary}11` }}>
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Ready to rank in <span style={{ color: COLORS.primary }}>AI answers</span>?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We’ll assess your content for AI-readiness, tighten your SEO foundations, and build a GEO roadmap that’s aligned to
            your offers and funnel.
          </p>
          <Link to="/contact" className="inline-block px-10 py-4 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>
            Book a GEO Consultation
          </Link>
        </div>
      </section>

      <div className="fixed bottom-8 right-8 z-40">
        <Link to="/contact" className="px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition inline-block" style={{ backgroundColor: COLORS.primary, color: "white" }}>
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default GenerativeEngineOptimization;

