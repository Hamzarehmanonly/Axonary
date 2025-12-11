// ContentMarketing.tsx
import React from "react";
import { Link } from "react-router-dom";

const COLORS = {
  primary: "#5C3693",
  secondary: "#472A71",
  bg: "#000000",
  card: "#0b0b0d",
  glass: "rgba(255,255,255,0.03)",
  textMuted: "#BDB7D6",
  white: "#FFFFFF",
};

const services = [
  {
    id: "content-strategy",
    title: "Content Strategy",
    desc: "Develop a comprehensive content strategy aligned with business goals and audience needs.",
  },
  {
    id: "blog-writing",
    title: "Blog Writing & SEO",
    desc: "Create SEO-optimized blog posts that rank well and drive consistent organic traffic.",
  },
  {
    id: "video-content",
    title: "Video Content",
    desc: "Engaging video content that educates, entertains, and converts viewers into customers.",
  },
  {
    id: "infographics",
    title: "Visual Content",
    desc: "Create visually stunning infographics and graphics that get shares and backlinks.",
  },
  {
    id: "content-distribution",
    title: "Content Distribution",
    desc: "Strategic distribution of content across channels to maximize reach and engagement.",
  },
  {
    id: "content-repurposing",
    title: "Content Repurposing",
    desc: "Maximize ROI by repurposing content across multiple platforms and formats.",
  },
];

const benefits = [
  { title: "Authority Building", desc: "Establish your brand as an industry thought leader" },
  { title: "Traffic Growth", desc: "Consistent organic traffic from valuable content" },
  { title: "Lead Generation", desc: "Content that educates and converts prospects into customers" },
  { title: "Customer Loyalty", desc: "Build trust and engagement with your audience" },
  { title: "Cost-Effective", desc: "Long-term benefits from evergreen content" },
  { title: "Social Amplification", desc: "Shareable content that spreads across social networks" },
];

const ContentMarketing: React.FC = () => {
  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center" style={{ background: COLORS.bg }}>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block rounded-full px-4 py-1 text-sm font-medium" style={{ background: `${COLORS.secondary}33`, color: COLORS.white }}>
              Engaging • Strategic • Results-Driven
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
              Engage & Convert with{" "}
              <span style={{ color: COLORS.primary }}>Powerful Content</span>
            </h1>

            <p className="mt-4 text-lg text-gray-300 max-w-2xl">
              Build authority, drive traffic, and generate leads with strategic content that resonates with your audience.
            </p>

            <div className="mt-8 flex items-center gap-4 flex-wrap">
              <Link to="/contact" className="px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2" style={{ background: COLORS.primary, color: COLORS.white }}>
                Get Content Strategy
              </Link>
              <button className="px-6 py-3 rounded-full border font-semibold" style={{ borderColor: `${COLORS.primary}33`, color: COLORS.textMuted }}>
                Learn More
              </button>
            </div>
          </div>

          <div className="rounded-2xl p-6" style={{ background: COLORS.card }}>
            <h5 className="text-sm text-gray-400">Content Results</h5>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-xs text-gray-400">Content Pieces Created</div>
              </div>
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">5M+</div>
                <div className="text-xs text-gray-400">Content Views</div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-300">Ready to tell your story?</p>
              <Link to="/contact" className="inline-block mt-4 px-4 py-2 rounded-full" style={{ background: COLORS.primary, color: COLORS.white }}>
                Schedule Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28" style={{ background: COLORS.bg }}>
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Our Content Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="p-8 rounded-xl border transition hover:border-opacity-100"
                style={{
                  borderColor: `${COLORS.primary}33`,
                  backgroundColor: COLORS.card,
                }}
              >
                <h3 className="text-2xl font-bold mb-3" style={{ color: COLORS.primary }}>
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28" style={{ background: `${COLORS.secondary}11` }}>
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Why Content Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border-l-4"
                style={{
                  background: COLORS.card,
                  borderLeftColor: COLORS.primary,
                }}
              >
                <h4 className="text-xl font-bold mb-2" style={{ color: COLORS.primary }}>
                  {benefit.title}
                </h4>
                <p className="text-gray-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28" style={{ background: COLORS.bg }}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Tell Your Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our content experts create a strategy that engages, converts, and builds your brand.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 rounded-full font-semibold"
            style={{ background: COLORS.primary, color: COLORS.white }}
          >
            Get Content Audit
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

export default ContentMarketing;
