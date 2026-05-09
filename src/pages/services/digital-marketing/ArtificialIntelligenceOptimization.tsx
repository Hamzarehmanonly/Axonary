import React from "react";
import { Link } from "react-router-dom";
import { SEOAISVG } from "../../../components/DigitalMarketingSVGs";

const COLORS = {
  primary: "#5C3693",
  secondary: "#472A71",
  accent: "#A855F7",
  bg: "#000000",
  card: "#0b0b0d",
  white: "#FFFFFF",
};

const ArtificialIntelligenceOptimization: React.FC = () => {
  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
      <section className="min-h-screen flex items-center pt-20 pb-20" style={{ background: COLORS.bg }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <SEOAISVG width={420} height={420} />
            </div>
            <div>
              <div
                className="inline-block rounded-full px-4 py-1 text-sm font-medium mb-6"
                style={{ background: `${COLORS.secondary}33`, color: COLORS.primary }}
              >
                Artificial Intelligence Optimization (AIO)
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Artificial Intelligence <span style={{ color: COLORS.primary }}>Optimization</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Build an AI-ready brand footprint across your site and content. We improve how AI systems interpret your pages,
                align messaging to search intent, and turn insights into scalable optimization—so you earn more qualified demand.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="inline-block px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
                  style={{ background: COLORS.primary, color: COLORS.white }}
                >
                  Start AIO Assessment
                </Link>
                <Link
                  to="/seo-ai"
                  className="inline-block px-8 py-4 rounded-full font-semibold border"
                  style={{ borderColor: `${COLORS.primary}66`, color: COLORS.white }}
                >
                  See AI SEO
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: `${COLORS.secondary}11` }}>
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Where AIO <span style={{ color: COLORS.primary }}>Fits</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Search intent clarity", desc: "Make positioning and page structure unmistakable for both people and systems." },
              { title: "Content quality signals", desc: "Improve helpfulness, specificity, proof, and expert framing—without keyword stuffing." },
              { title: "Scalable workflows", desc: "Use AI-assisted processes responsibly to accelerate research, briefs, and on-page iteration." },
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
            AIO <span style={{ color: COLORS.primary }}>Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🧠", title: "AI content brief system", desc: "Briefs that encode intent, entities, comparisons, and proof requirements." },
              { icon: "🧭", title: "Messaging alignment", desc: "Sharper ICP, offers, and differentiation across top landing pages." },
              { icon: "🧱", title: "Information architecture", desc: "Topic clusters and internal linking that support consistent understanding." },
              { icon: "🔎", title: "SERP + competitor modeling", desc: "What competitors cover—and what you can win with better clarity." },
              { icon: "🧾", title: "Schema guidance", desc: "Structured data suggestions to reinforce entities and page intent." },
              { icon: "📊", title: "Performance loop", desc: "Iteration plan tied to queries, engagement, and lead quality." },
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
            Want a smarter <span style={{ color: COLORS.primary }}>optimization system</span>?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We’ll map your intent, tighten content and entity signals, and build a repeatable AIO workflow your team can execute
            without sacrificing quality.
          </p>
          <Link to="/contact" className="inline-block px-10 py-4 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>
            Get an AIO Roadmap
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

export default ArtificialIntelligenceOptimization;

