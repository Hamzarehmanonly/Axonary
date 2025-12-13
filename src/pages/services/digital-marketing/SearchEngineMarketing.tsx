import React from "react";
import { Link } from "react-router-dom";
import { SearchEngineMarketingSVG } from "../../../components/DigitalMarketingSVGs";

const COLORS = { primary: "#5C3693", secondary: "#472A71", accent: "#A855F7", bg: "#000000", card: "#0b0b0d", textMuted: "#BDB7D6", white: "#FFFFFF" };

const SearchEngineMarketing: React.FC = () => (
  <div className="w-full bg-black text-white overflow-x-hidden">
    <section className="min-h-screen flex items-center pt-20 pb-20" style={{ background: COLORS.bg }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center"><SearchEngineMarketingSVG width={400} height={400} /></div>
          <div>
            <div className="inline-block rounded-full px-4 py-1 text-sm font-medium mb-6" style={{ background: `${COLORS.secondary}33`, color: COLORS.primary }}>Search Engine Marketing</div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">Dominate Search Results with <span style={{ color: COLORS.primary }}>Integrated SEM</span></h1>
            <p className="text-lg text-gray-300 mb-8">Combine paid search (PPC) and organic SEO strategies for maximum visibility and traffic across search engines.</p>
            <Link to="/contact" className="inline-block px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition" style={{ background: COLORS.primary, color: COLORS.white }}>Start Your SEM Strategy</Link>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 px-6" style={{ background: COLORS.bg }}>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">SEM: The Complete Search Solution</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-lg" style={{ background: COLORS.card }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: COLORS.accent }}>What is SEM?</h3>
            <p className="text-gray-300 leading-relaxed mb-4">Search Engine Marketing combines PPC advertising and SEO optimization to maximize your visibility across all search results. It's a comprehensive approach that ensures you capture traffic from every angle.</p>
            <p className="text-gray-300 leading-relaxed">While PPC gets immediate results, SEO builds long-term traffic. Together, they create an unstoppable search marketing machine.</p>
          </div>
          <div className="p-8 rounded-lg" style={{ background: COLORS.card }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: COLORS.accent }}>Why SEM Matters</h3>
            <ul className="space-y-3">
              <li className="flex gap-3"><span style={{ color: COLORS.primary }}>→</span><span className="text-gray-300"><strong>100% Coverage:</strong> Own paid and organic results</span></li>
              <li className="flex gap-3"><span style={{ color: COLORS.primary }}>→</span><span className="text-gray-300"><strong>Immediate + Long-term:</strong> Quick wins and sustainable growth</span></li>
              <li className="flex gap-3"><span style={{ color: COLORS.primary }}>→</span><span className="text-gray-300"><strong>Higher CTR:</strong> More clicks with multiple ad placements</span></li>
              <li className="flex gap-3"><span style={{ color: COLORS.primary }}>→</span><span className="text-gray-300"><strong>Better Data:</strong> Insights from both channels</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 px-6" style={{ background: `${COLORS.secondary}11` }}>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Integrated SEM Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: "🔍", title: "Keyword Research", desc: "Identify high-value keywords across paid and organic" },
            { icon: "💰", title: "PPC Management", desc: "Google Ads campaigns optimized for conversions" },
            { icon: "📝", title: "SEO Optimization", desc: "Technical and content SEO for organic ranking" },
            { icon: "🎯", title: "Landing Pages", desc: "Conversion-optimized pages for both channels" },
            { icon: "📊", title: "Performance Analytics", desc: "Unified reporting across all search channels" },
            { icon: "🔄", title: "Continuous Optimization", desc: "Regular testing and strategy refinement" }
          ].map((s, i) => (<div key={i} className="p-8 rounded-lg" style={{ background: COLORS.card }}><div className="text-4xl mb-4">{s.icon}</div><h3 className="text-xl font-bold mb-3">{s.title}</h3><p className="text-gray-400">{s.desc}</p></div>))}
        </div>
      </div>
    </section>

    <section className="py-20 px-6" style={{ background: COLORS.bg }}>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Our SEM Strategy Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { num: "01", title: "Analysis", desc: "Audit both paid and organic opportunities" },
            { num: "02", title: "Strategy", desc: "Create integrated SEM roadmap" },
            { num: "03", title: "Implementation", desc: "Launch campaigns on all channels" },
            { num: "04", title: "Optimization", desc: "Monitor and continuously improve" }
          ].map((s, i) => (<div key={i} className="p-6 rounded-lg" style={{ background: COLORS.card, borderLeft: `3px solid ${COLORS.primary}` }}><div className="text-3xl font-bold mb-3" style={{ color: COLORS.accent }}>{s.num}</div><h3 className="text-lg font-bold mb-2">{s.title}</h3><p className="text-sm text-gray-400">{s.desc}</p></div>))}
        </div>
      </div>
    </section>

    <section className="py-20 px-6" style={{ background: `${COLORS.secondary}11` }}>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">SEM Results You Can Expect</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { stat: "400%", label: "Total Traffic Growth", desc: "Combined organic + paid growth" },
            { stat: "65%", label: "SERP Dominance", desc: "Own first page with ads and organic" },
            { stat: "45%", label: "Cost Efficiency", desc: "Lower cost-per-acquisition" }
          ].map((r, i) => (<div key={i} className="text-center p-8 rounded-lg" style={{ background: COLORS.card }}><div className="text-5xl font-bold mb-2" style={{ color: COLORS.primary }}>{r.stat}</div><h3 className="text-xl font-bold mb-2">{r.label}</h3><p className="text-sm text-gray-400">{r.desc}</p></div>))}
        </div>
      </div>
    </section>

    <section className="py-20 px-6 text-center" style={{ background: COLORS.bg }}>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">Ready for Integrated Search Marketing?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Let's create a unified SEM strategy that captures traffic from every angle in search results.</p>
        <Link to="/contact" className="inline-block px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition" style={{ background: COLORS.primary, color: COLORS.white }}>Get Your SEM Strategy</Link>
      </div>
    </section>

    <div className="fixed bottom-8 right-8 z-40">
      <Link to="/contact" className="px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition inline-block" style={{ backgroundColor: COLORS.primary, color: "white" }}>Get Started</Link>
    </div>
  </div>
);

export default SearchEngineMarketing;
