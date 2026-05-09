import React from "react";
import { Link } from "react-router-dom";
import { SEOServicesSVG, SEOAISVG } from "../../../components/DigitalMarketingSVGs";

const COLORS = {
  primary: "#5C3693",
  secondary: "#472A71",
  accent: "#A855F7",
  bg: "#000000",
  card: "#0b0b0d",
  white: "#FFFFFF",
};

const SEOLLM: React.FC = () => {
  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
      <section className="min-h-screen flex items-center pt-20 pb-20" style={{ background: COLORS.bg }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <SEOServicesSVG width={380} height={380} />
                <div className="absolute -bottom-8 -left-10 opacity-80 hidden md:block">
                  <SEOAISVG width={200} height={200} />
                </div>
              </div>
            </div>
            <div>
              <div
                className="inline-block rounded-full px-4 py-1 text-sm font-medium mb-6"
                style={{ background: `${COLORS.secondary}33`, color: COLORS.primary }}
              >
                SEO for LLM-driven discovery
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                LLM SEO <span style={{ color: COLORS.primary }}>Agency</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Combine strong technical SEO with AI-era optimization so your brand shows up in both classic search results and
                AI-generated answers. We focus on clarity, authority, proof, and structure—built to convert.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="inline-block px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
                  style={{ background: COLORS.primary, color: COLORS.white }}
                >
                  Talk to an LLM SEO Strategist
                </Link>
                <Link
                  to="/generative-engine-optimization"
                  className="inline-block px-8 py-4 rounded-full font-semibold border"
                  style={{ borderColor: `${COLORS.primary}66`, color: COLORS.white }}
                >
                  Explore GEO
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: `${COLORS.secondary}11` }}>
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            What “LLM SEO” <span style={{ color: COLORS.primary }}>Includes</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Technical trust", desc: "Crawlability, indexation, performance, and clean architecture that support consistent understanding." },
              { title: "Citeable pages", desc: "Pages that are easy to summarize, compare, and reference—with proof and specificity." },
              { title: "Intent-driven structure", desc: "Clear page goals, conversion paths, and internal linking that reinforce topical ownership." },
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
            Core <span style={{ color: COLORS.primary }}>Deliverables</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🧪", title: "LLM discoverability audit", desc: "Assess brand presence, entities, structured content, and proof blocks." },
              { icon: "🧾", title: "Landing page upgrades", desc: "Rewrite key pages to be answer-ready while improving conversion clarity." },
              { icon: "🧠", title: "Entity + topic strategy", desc: "Define the topics you should own and how to connect them across the site." },
              { icon: "🔗", title: "Internal linking & clusters", desc: "Strengthen the supporting pages that build authority behind offers." },
              { icon: "🏷️", title: "Schema recommendations", desc: "Structured data guidance aligned with your services and trust signals." },
              { icon: "📈", title: "Reporting loop", desc: "Measurement tied to leads, not vanity metrics." },
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
            Ready to grow with <span style={{ color: COLORS.primary }}>AI-era SEO</span>?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We’ll build a strategy that improves rankings now and strengthens AI-driven visibility as search evolves—without
            cannibalizing your core SEO wins.
          </p>
          <Link to="/contact" className="inline-block px-10 py-4 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>
            Get an LLM SEO Plan
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

export default SEOLLM;

