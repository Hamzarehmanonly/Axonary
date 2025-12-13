import React from "react";
import { Link } from "react-router-dom";
import { SearchEngineOptimizationSVG } from "../../../components/DigitalMarketingSVGs";

const COLORS = { primary: "#5C3693", secondary: "#472A71", accent: "#A855F7", bg: "#000000", card: "#0b0b0d", white: "#FFFFFF" };

const SearchEngineOptimization: React.FC = () => (
  <div className="w-full bg-black text-white overflow-x-hidden">
    <section className="min-h-screen flex items-center pt-20 pb-20" style={{ background: COLORS.bg }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center"><SearchEngineOptimizationSVG width={400} height={400} /></div>
          <div>
            <div className="inline-block rounded-full px-4 py-1 text-sm font-medium mb-6" style={{ background: `${COLORS.secondary}33`, color: COLORS.primary }}>Technical & Strategic SEO</div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">Advanced <span style={{ color: COLORS.primary }}>SEO Optimization</span> Strategies</h1>
            <p className="text-lg text-gray-300 mb-8">Go beyond basics with comprehensive technical SEO, advanced content optimization, and strategic link building that drives sustainable organic growth.</p>
            <Link to="/contact" className="inline-block px-8 py-4 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Optimize Your Site Now</Link>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 px-6" style={{ background: COLORS.bg }}>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">The Three Pillars of SEO Excellence</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-lg" style={{ background: COLORS.card }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: COLORS.accent }}>🔧 Technical SEO</h3>
            <p className="text-gray-300">Core Web Vitals optimization, mobile responsiveness, site speed, XML sitemaps, structured data, indexation fixes</p>
          </div>
          <div className="p-8 rounded-lg" style={{ background: COLORS.card }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: COLORS.accent }}>📝 On-Page Optimization</h3>
            <p className="text-gray-300">Keyword optimization, meta tags, content structure, internal linking, topic clusters, user experience signals</p>
          </div>
          <div className="p-8 rounded-lg" style={{ background: COLORS.card }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: COLORS.accent }}>🔗 Link Building</h3>
            <p className="text-gray-300">Authority building, high-quality backlinks, resource pages, broken link reclamation, competitor analysis</p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 px-6" style={{ background: `${COLORS.secondary}11` }}>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Advanced SEO Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: "⚡", title: "Page Speed Optimization", desc: "Improve Core Web Vitals and loading performance" },
            { icon: "📱", title: "Mobile Optimization", desc: "Mobile-first indexing and responsive design" },
            { icon: "🏗️", title: "Site Architecture", desc: "Optimal URL structure and site hierarchy" },
            { icon: "🔍", title: "Search Intent Targeting", desc: "Match content to user search intent perfectly" },
            { icon: "📊", title: "Schema Markup", desc: "Implement structured data for rich snippets" },
            { icon: "🎯", title: "Competitive Analysis", desc: "Understand and outrank your competitors" }
          ].map((s, i) => (<div key={i} className="p-8 rounded-lg" style={{ background: COLORS.card }}><div className="text-4xl mb-4">{s.icon}</div><h3 className="text-xl font-bold mb-3">{s.title}</h3><p className="text-gray-400">{s.desc}</p></div>))}
        </div>
      </div>
    </section>

    <section className="py-20 px-6" style={{ background: COLORS.bg }}>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">6-Month to 2-Year Results Timeline</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { period: "0-3 Months", focus: "Technical fixes, content optimization, initial improvements" },
            { period: "3-6 Months", focus: "Ranking improvements, traffic growth, authority building" },
            { period: "6-24 Months", focus: "Domination, sustained traffic, compounding organic growth" }
          ].map((t, i) => (<div key={i} className="p-8 rounded-lg" style={{ background: COLORS.card, borderLeft: `3px solid ${COLORS.primary}` }}><h3 className="text-xl font-bold mb-3" style={{ color: COLORS.accent }}>{t.period}</h3><p className="text-gray-400">{t.focus}</p></div>))}
        </div>
      </div>
    </section>

    <section className="py-20 px-6" style={{ background: `${COLORS.secondary}11` }}>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Measurable SEO Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { stat: "500%+", label: "Traffic Growth", desc: "Dramatic increase in organic traffic" },
            { stat: "90%", label: "First Page Keywords", desc: "Dominat search results for targets" },
            { stat: "5x", label: "Lead Increase", desc: "More qualified organic leads" }
          ].map((r, i) => (<div key={i} className="text-center p-8 rounded-lg" style={{ background: COLORS.card }}><div className="text-5xl font-bold mb-2" style={{ color: COLORS.primary }}>{r.stat}</div><h3 className="text-xl font-bold mb-2">{r.label}</h3><p className="text-sm text-gray-400">{r.desc}</p></div>))}
        </div>
      </div>
    </section>

    <section className="py-20 px-6 text-center" style={{ background: COLORS.bg }}>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">Ready for Advanced SEO Optimization?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Let's audit your site and create a comprehensive SEO strategy for long-term dominance.</p>
        <Link to="/contact" className="inline-block px-10 py-4 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Get SEO Audit & Plan</Link>
      </div>
    </section>

    <div className="fixed bottom-8 right-8 z-40">
      <Link to="/contact" className="px-6 py-3 rounded-full font-semibold inline-block" style={{ backgroundColor: COLORS.primary, color: "white" }}>Get Started</Link>
    </div>
  </div>
);

export default SearchEngineOptimization;
