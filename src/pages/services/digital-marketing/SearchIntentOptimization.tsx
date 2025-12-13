// SearchIntentOptimization.tsx
import React from "react";
import { Link } from "react-router-dom";
import { SearchIntentOptimizationSVG } from "../../../components/DigitalMarketingSVGs";

const COLORS = { primary: "#5C3693", secondary: "#472A71", accent: "#A855F7", bg: "#000000", card: "#0b0b0d", white: "#FFFFFF" };

const SearchIntentOptimization: React.FC = () => (
  <div className="w-full bg-black text-white overflow-x-hidden">
    <section className="min-h-screen flex items-center pt-20 pb-20" style={{ background: COLORS.bg }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center"><SearchIntentOptimizationSVG width={400} height={400} /></div>
          <div>
            <div className="inline-block rounded-full px-4 py-1 text-sm font-medium mb-6" style={{ background: `${COLORS.secondary}33`, color: COLORS.primary }}>Search Intent Marketing</div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">Master <span style={{ color: COLORS.primary }}>Search Intent</span> for Perfect Targeting</h1>
            <p className="text-lg text-gray-300 mb-8">Don't just target keywords—target intent. We align your content and ads with exactly what users are searching for to maximize conversions.</p>
            <Link to="/contact" className="inline-block px-8 py-4 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Optimize for Intent Now</Link>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 px-6" style={{ background: COLORS.bg }}>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Understanding Search Intent</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-lg" style={{ background: COLORS.card }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: COLORS.accent }}>What is Search Intent?</h3>
            <p className="text-gray-300 leading-relaxed mb-4">Search intent is the WHY behind a search query. When someone searches, they have a specific goal—finding information, making a purchase, visiting a website, or comparing options.</p>
            <p className="text-gray-300 leading-relaxed">Google ranks pages that satisfy user intent. If your content doesn't match what users actually want, you won't rank—no matter how optimized it is.</p>
          </div>
          <div className="p-8 rounded-lg" style={{ background: COLORS.card }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: COLORS.accent }}>The Four Intent Types</h3>
            <ul className="space-y-3">
              <li className="flex gap-3"><span style={{ color: COLORS.primary }}>1.</span><span className="text-gray-300"><strong>Informational:</strong> "How to..." "What is..." research queries</span></li>
              <li className="flex gap-3"><span style={{ color: COLORS.primary }}>2.</span><span className="text-gray-300"><strong>Navigational:</strong> "Brand name" website/app discovery</span></li>
              <li className="flex gap-3"><span style={{ color: COLORS.primary }}>3.</span><span className="text-gray-300"><strong>Transactional:</strong> "Buy..." "Price..." immediate purchase intent</span></li>
              <li className="flex gap-3"><span style={{ color: COLORS.primary }}>4.</span><span className="text-gray-300"><strong>Commercial:</strong> "Best..." "Reviews" comparison shopping</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 px-6" style={{ background: `${COLORS.secondary}11` }}>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Intent Optimization Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: "🔎", title: "Intent Analysis", desc: "Identify true intent behind your target keywords" },
            { icon: "📄", title: "Content Matching", desc: "Create content that perfectly matches user intent" },
            { icon: "🎯", title: "Query Clustering", desc: "Group keywords by intent for strategic targeting" },
            { icon: "📊", title: "Competitor Analysis", desc: "See how competitors satisfy intent" },
            { icon: "🔄", title: "SERP Optimization", desc: "Analyze top results to understand intent signals" },
            { icon: "📈", title: "Conversion Optimization", desc: "Guide users from awareness to conversion" }
          ].map((s, i) => (<div key={i} className="p-8 rounded-lg" style={{ background: COLORS.card }}><div className="text-4xl mb-4">{s.icon}</div><h3 className="text-xl font-bold mb-3">{s.title}</h3><p className="text-gray-400">{s.desc}</p></div>))}
        </div>
      </div>
    </section>

    <section className="py-20 px-6" style={{ background: COLORS.bg }}>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Intent-Based Optimization Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { num: "01", title: "Research", desc: "Understand user intent behind queries" },
            { num: "02", title: "Segmentation", desc: "Group keywords by intent type" },
            { num: "03", title: "Strategy", desc: "Create tailored content for each intent" },
            { num: "04", title: "Measure", desc: "Track intent-based conversions" }
          ].map((s, i) => (<div key={i} className="p-6 rounded-lg" style={{ background: COLORS.card, borderLeft: `3px solid ${COLORS.primary}` }}><div className="text-3xl font-bold mb-3" style={{ color: COLORS.accent }}>{s.num}</div><h3 className="text-lg font-bold mb-2">{s.title}</h3><p className="text-sm text-gray-400">{s.desc}</p></div>))}
        </div>
      </div>
    </section>

    <section className="py-20 px-6" style={{ background: `${COLORS.secondary}11` }}>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Results from Intent Optimization</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { stat: "320%", label: "Conversion Lift", desc: "Better intent matching = higher conversions" },
            { stat: "180%", label: "CTR Improvement", desc: "Relevant results get clicked more" },
            { stat: "2.5x", label: "Quality Score", desc: "Google rewards intent-matched ads" }
          ].map((r, i) => (<div key={i} className="text-center p-8 rounded-lg" style={{ background: COLORS.card }}><div className="text-5xl font-bold mb-2" style={{ color: COLORS.primary }}>{r.stat}</div><h3 className="text-xl font-bold mb-2">{r.label}</h3><p className="text-sm text-gray-400">{r.desc}</p></div>))}
        </div>
      </div>
    </section>

    <section className="py-20 px-6 text-center" style={{ background: COLORS.bg }}>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">Ready to Master Search Intent?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Let's align your strategy with what users actually want to find.</p>
        <Link to="/contact" className="inline-block px-10 py-4 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Get Intent Analysis</Link>
      </div>
    </section>

    <div className="fixed bottom-8 right-8 z-40">
      <Link to="/contact" className="px-6 py-3 rounded-full font-semibold inline-block" style={{ backgroundColor: COLORS.primary, color: "white" }}>Get Started</Link>
    </div>
  </div>
);

export default SearchIntentOptimization;
