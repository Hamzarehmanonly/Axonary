// ContentMarketing.tsx
import React from "react";
import { Link } from "react-router-dom";
import { ContentMarketingSVG } from "../../../components/DigitalMarketingSVGs";

const COLORS = { primary: "#5C3693", secondary: "#472A71", accent: "#A855F7", bg: "#000000", card: "#0b0b0d", white: "#FFFFFF" };

const ContentMarketing: React.FC = () => (
  <div className="w-full bg-black text-white overflow-x-hidden">
    <section className="min-h-screen flex items-center pt-20 pb-20" style={{ background: COLORS.bg }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center"><ContentMarketingSVG width={400} height={400} /></div>
          <div>
            <div className="inline-block rounded-full px-4 py-1 text-sm font-medium mb-6" style={{ background: `${COLORS.secondary}33`, color: COLORS.primary }}>Content Marketing Strategy</div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">Content That <span style={{ color: COLORS.primary }}>Sells, Ranks & Engages</span></h1>
            <p className="text-lg text-gray-300 mb-8">Strategic content marketing that drives traffic, builds authority, and converts readers into customers. Quality content is your most valuable asset.</p>
            <Link to="/contact" className="inline-block px-8 py-4 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Develop Content Strategy</Link>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 px-6" style={{ background: COLORS.bg }}>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Why Strategic Content Marketing Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-lg" style={{ background: COLORS.card }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: COLORS.accent }}>Content is King</h3>
            <p className="text-gray-300 leading-relaxed mb-4">Quality content is the foundation of all digital marketing. It drives SEO rankings, builds trust, establishes authority, and creates social sharing opportunities.</p>
            <p className="text-gray-300 leading-relaxed">Strategic content marketing means creating valuable information that solves problems for your target audience, not just promotion.</p>
          </div>
          <div className="p-8 rounded-lg" style={{ background: COLORS.card }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: COLORS.accent }}>Strategic Benefits</h3>
            <ul className="space-y-3">
              <li className="flex gap-3"><span style={{ color: COLORS.primary }}>→</span><span className="text-gray-300"><strong>SEO Rankings:</strong> Quality content ranks better</span></li>
              <li className="flex gap-3"><span style={{ color: COLORS.primary }}>→</span><span className="text-gray-300"><strong>Authority:</strong> Establish industry thought leadership</span></li>
              <li className="flex gap-3"><span style={{ color: COLORS.primary }}>→</span><span className="text-gray-300"><strong>Engagement:</strong> Build relationships with audience</span></li>
              <li className="flex gap-3"><span style={{ color: COLORS.primary }}>→</span><span className="text-gray-300"><strong>Long-term ROI:</strong> Evergreen content keeps working</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 px-6" style={{ background: `${COLORS.secondary}11` }}>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Content Marketing Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: "📝", title: "Blog Posts & Articles", desc: "SEO-optimized long-form content that ranks and converts" },
            { icon: "🎥", title: "Video Content", desc: "Engaging videos for YouTube, social media, and website" },
            { icon: "📊", title: "Whitepapers & Guides", desc: "In-depth resources that establish authority" },
            { icon: "🎤", title: "Podcasts", desc: "Build audience and thought leadership through audio" },
            { icon: "📧", title: "Email Content", desc: "Nurture campaigns that convert subscribers" },
            { icon: "🎯", title: "Content Strategy", desc: "Roadmap for consistent, high-performing content" }
          ].map((s, i) => (<div key={i} className="p-8 rounded-lg" style={{ background: COLORS.card }}><div className="text-4xl mb-4">{s.icon}</div><h3 className="text-xl font-bold mb-3">{s.title}</h3><p className="text-gray-400">{s.desc}</p></div>))}
        </div>
      </div>
    </section>

    <section className="py-20 px-6" style={{ background: COLORS.bg }}>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Content Marketing Funnel</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { stage: "Awareness", content: "Blog posts, infographics, videos, social content" },
            { stage: "Consideration", content: "Guides, webinars, case studies, comparisons" },
            { stage: "Decision", content: "Product demos, testimonials, pricing info, free trials" }
          ].map((f, i) => (<div key={i} className="p-8 rounded-lg" style={{ background: COLORS.card, borderLeft: `3px solid ${COLORS.primary}` }}><h3 className="text-xl font-bold mb-3" style={{ color: COLORS.accent }}>{f.stage}</h3><p className="text-gray-400">{f.content}</p></div>))}
        </div>
      </div>
    </section>

    <section className="py-20 px-6" style={{ background: `${COLORS.secondary}11` }}>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Content Marketing Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { stat: "380%", label: "Traffic Growth", desc: "Organic traffic from quality content" },
            { stat: "420%", label: "Lead Generation", desc: "More quality leads from content" },
            { stat: "3.5x", label: "Engagement Rate", desc: "Higher engagement and social sharing" }
          ].map((r, i) => (<div key={i} className="text-center p-8 rounded-lg" style={{ background: COLORS.card }}><div className="text-5xl font-bold mb-2" style={{ color: COLORS.primary }}>{r.stat}</div><h3 className="text-xl font-bold mb-2">{r.label}</h3><p className="text-sm text-gray-400">{r.desc}</p></div>))}
        </div>
      </div>
    </section>

    <section className="py-20 px-6 text-center" style={{ background: COLORS.bg }}>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">Ready to Master Content Marketing?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Let's create a content strategy that drives traffic, builds authority, and converts readers into customers.</p>
        <Link to="/contact" className="inline-block px-10 py-4 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Get Content Strategy</Link>
      </div>
    </section>

    <div className="fixed bottom-8 right-8 z-40">
      <Link to="/contact" className="px-6 py-3 rounded-full font-semibold inline-block" style={{ backgroundColor: COLORS.primary, color: "white" }}>Get Started</Link>
    </div>
  </div>
);

export default ContentMarketing;
