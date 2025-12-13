import React from "react";
import { Link } from "react-router-dom";
import { SocialMediaServicesSVG } from "../../../components/DigitalMarketingSVGs";

const COLORS = {
  primary: "#5C3693",
  secondary: "#472A71",
  accent: "#A855F7",
  bg: "#000000",
  card: "#0b0b0d",
  textMuted: "#BDB7D6",
  white: "#FFFFFF",
};

const SocialMediaServices: React.FC = () => {
  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 pb-20" style={{ background: COLORS.bg }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <SocialMediaServicesSVG width={400} height={400} />
            </div>
            <div>
              <div className="inline-block rounded-full px-4 py-1 text-sm font-medium mb-6" style={{ background: `${COLORS.secondary}33`, color: COLORS.primary }}>
                Social Media Marketing
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Build Your Brand with
                <span style={{ color: COLORS.primary }}> Strategic Social Media</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Engage your audience, build community, and drive sales across Facebook, Instagram, LinkedIn, and TikTok with content that resonates and converts.
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
                style={{ background: COLORS.primary, color: COLORS.white }}
              >
                Start Your Social Strategy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Social Media Matters */}
      <section className="py-20 px-6" style={{ background: COLORS.bg }}>
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Social Media is Critical for Business</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg" style={{ background: COLORS.card }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: COLORS.accent }}>The Modern Marketing Landscape</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                4.5 billion people use social media globally. Your customers are actively engaging with brands, sharing recommendations, and making purchase decisions based on social proof. Missing out means losing visibility.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Social platforms allow direct communication with your audience, real-time customer service, and humanize your brand in ways traditional advertising cannot.
              </p>
            </div>
            <div className="p-8 rounded-lg" style={{ background: COLORS.card }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: COLORS.accent }}>Key Social Benefits</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span style={{ color: COLORS.primary }}>→</span>
                  <span className="text-gray-300"><strong>Community Building:</strong> Create loyal fans and advocates</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: COLORS.primary }}>→</span>
                  <span className="text-gray-300"><strong>Brand Awareness:</strong> Reach new audiences organically</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: COLORS.primary }}>→</span>
                  <span className="text-gray-300"><strong>Direct Sales:</strong> Convert followers into customers</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: COLORS.primary }}>→</span>
                  <span className="text-gray-300"><strong>Customer Insights:</strong> Understand preferences and trends</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Social Media Services */}
      <section className="py-20 px-6" style={{ background: `${COLORS.secondary}11` }}>
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Social Media Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "📱", title: "Content Creation", desc: "Engaging posts, stories, reels, and videos tailored to each platform" },
              { icon: "📅", title: "Community Management", desc: "Monitor mentions, respond to comments, engage with followers" },
              { icon: "📊", title: "Social Media Ads", desc: "Targeted paid campaigns driving traffic and sales" },
              { icon: "🎬", title: "Video Production", desc: "Short-form and long-form content optimized for engagement" },
              { icon: "📈", title: "Growth Strategy", desc: "Organic growth tactics and audience development" },
              { icon: "📊", title: "Analytics & Reporting", desc: "Detailed insights on engagement, reach, and ROI" }
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

      {/* Platform-Specific Strategies */}
      <section className="py-20 px-6" style={{ background: COLORS.bg }}>
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Platform-Specific Strategies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { platform: "Facebook", focus: "Community building, customer service, events, local promotion" },
              { platform: "Instagram", focus: "Visual storytelling, lifestyle content, influencer collabs" },
              { platform: "LinkedIn", focus: "B2B thought leadership, industry insights, recruitment" },
              { platform: "TikTok", focus: "Trending content, behind-the-scenes, viral marketing" }
            ].map((p, idx) => (
              <div key={idx} className="p-6 rounded-lg" style={{ background: COLORS.card, borderLeft: `3px solid ${COLORS.primary}` }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: COLORS.accent }}>{p.platform}</h3>
                <p className="text-sm text-gray-400">{p.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20 px-6" style={{ background: `${COLORS.secondary}11` }}>
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Proven Results from Social Media</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stat: "250%", label: "Engagement Growth", desc: "Higher engagement through quality, consistent content" },
              { stat: "180%", label: "Follower Increase", desc: "Rapid growth with authentic community strategies" },
              { stat: "3.2x", label: "Conversion Rate", desc: "Social followers convert at higher rates" }
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
          <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Social Presence?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's develop a comprehensive social media strategy that builds your brand and drives real business results.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
            style={{ background: COLORS.primary, color: COLORS.white }}
          >
            Get Your Social Strategy
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

export default SocialMediaServices;
