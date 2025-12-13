import React from "react";
import { Link } from "react-router-dom";
import { PPCServicesSVG } from "../../../components/DigitalMarketingSVGs";

const COLORS = {
  primary: "#5C3693",
  secondary: "#472A71",
  accent: "#A855F7",
  bg: "#000000",
  card: "#0b0b0d",
  textMuted: "#BDB7D6",
  white: "#FFFFFF",
};

const PPCServices: React.FC = () => {
  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 pb-20" style={{ background: COLORS.bg }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <PPCServicesSVG width={400} height={400} />
            </div>
            <div>
              <div className="inline-block rounded-full px-4 py-1 text-sm font-medium mb-6" style={{ background: `${COLORS.secondary}33`, color: COLORS.primary }}>
                Pay-Per-Click Advertising
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Maximize ROI with
                <span style={{ color: COLORS.primary }}> Expert PPC Campaigns</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Get immediate visibility on Google Ads and social platforms. Our data-driven PPC strategies deliver qualified leads and maximize every marketing dollar you spend.
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
                style={{ background: COLORS.primary, color: COLORS.white }}
              >
                Start Your PPC Campaign
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is PPC Section */}
      <section className="py-20 px-6" style={{ background: COLORS.bg }}>
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Understanding Pay-Per-Click Marketing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg" style={{ background: COLORS.card }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: COLORS.accent }}>How PPC Works</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                PPC is an online advertising model where you pay only when someone clicks your ad. Your ads appear at the top of search results (Google Ads) or on social platforms (Facebook, Instagram, LinkedIn), reaching users actively seeking your products or services.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The advantage? Immediate visibility and highly targeted reach. You control your budget, bid strategy, and can pause or adjust campaigns in real-time based on performance.
              </p>
            </div>
            <div className="p-8 rounded-lg" style={{ background: COLORS.card }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: COLORS.accent }}>PPC vs Organic Search</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-300 font-semibold mb-2">⚡ Speed: Immediate results</p>
                  <p className="text-sm text-gray-400">While SEO takes months, PPC gets you traffic on day one</p>
                </div>
                <div>
                  <p className="text-gray-300 font-semibold mb-2">🎯 Precision: Laser-targeted audiences</p>
                  <p className="text-sm text-gray-400">Target by keywords, demographics, interests, behavior, and location</p>
                </div>
                <div>
                  <p className="text-gray-300 font-semibold mb-2">📊 Control: Full campaign management</p>
                  <p className="text-sm text-gray-400">Adjust budgets, bids, and messaging anytime based on data</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our PPC Specialties */}
      <section className="py-20 px-6" style={{ background: `${COLORS.secondary}11` }}>
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our PPC Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🔍", title: "Google Search Ads", desc: "Dominate search results with high-performing text ads targeting commercial keywords" },
              { icon: "📱", title: "Social Media Ads", desc: "Facebook, Instagram, LinkedIn campaigns with advanced audience targeting and creative optimization" },
              { icon: "🎬", title: "Video Ads", desc: "YouTube pre-roll and in-stream ads to reach audiences with engaging video content" },
              { icon: "🛍️", title: "Shopping Ads", desc: "E-commerce focused campaigns showcasing products directly in search results" },
              { icon: "🤖", title: "Remarketing Campaigns", desc: "Re-engage website visitors and recover abandoned carts with targeted retargeting" },
              { icon: "📊", title: "Lead Generation", desc: "Form-driven campaigns optimized for capturing quality leads and inquiries" }
            ].map((specialty, idx) => (
              <div key={idx} className="p-8 rounded-lg" style={{ background: COLORS.card }}>
                <div className="text-4xl mb-4">{specialty.icon}</div>
                <h3 className="text-xl font-bold mb-3">{specialty.title}</h3>
                <p className="text-gray-400">{specialty.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Optimization Process */}
      <section className="py-20 px-6" style={{ background: COLORS.bg }}>
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Campaign Optimization Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Strategy & Planning", desc: "Define goals, audience, budget allocation, and bid strategy" },
              { num: "02", title: "Campaign Setup", desc: "Create ads, landing pages, conversion tracking, and audience segments" },
              { num: "03", title: "Testing & Optimization", desc: "A/B test headlines, copy, visuals, and targeting parameters" },
              { num: "04", title: "Scaling & Growth", desc: "Expand high-performing campaigns while maintaining profitability" }
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

      {/* ROI & Results */}
      <section className="py-20 px-6" style={{ background: `${COLORS.secondary}11` }}>
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Proven Results & ROI</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stat: "4.5x", label: "Average ROI", desc: "For every $1 spent, clients earn $4.50 in revenue" },
              { stat: "35%", label: "Cost Reduction", desc: "Through continuous optimization and A/B testing" },
              { stat: "250%", label: "Quality Lead Growth", desc: "Higher conversion rates with precision targeting" }
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
          <h2 className="text-4xl font-bold mb-6">Ready to Scale Your Business with PPC?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our PPC experts create a high-performing campaign strategy tailored to your industry and goals.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
            style={{ background: COLORS.primary, color: COLORS.white }}
          >
            Get Your PPC Strategy
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

export default PPCServices;
