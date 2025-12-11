// SocialMediaServices.tsx
import React, { useEffect, useState } from "react";
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
    id: "social-strategy",
    title: "Social Strategy",
    desc: "Comprehensive social media strategy aligned with your business goals and audience.",
  },
  {
    id: "content-creation",
    title: "Content Creation",
    desc: "Engaging posts, videos, and stories tailored to your audience across all platforms.",
  },
  {
    id: "community-management",
    title: "Community Management",
    desc: "Build and nurture engaged communities with responsive interaction and engagement.",
  },
  {
    id: "influencer-marketing",
    title: "Influencer Partnerships",
    desc: "Connect with relevant influencers to amplify your message and reach new audiences.",
  },
  {
    id: "social-analytics",
    title: "Analytics & Reporting",
    desc: "Track performance with detailed analytics and provide insights for optimization.",
  },
  {
    id: "paid-social",
    title: "Paid Social Ads",
    desc: "Targeted social media advertising campaigns that drive conversions and sales.",
  },
];

const benefits = [
  { title: "Brand Awareness", desc: "Build recognition and presence across all social platforms" },
  { title: "Community Building", desc: "Engage loyal followers and create brand advocates" },
  { title: "Lead Generation", desc: "Convert social followers into qualified leads" },
  { title: "Sales Growth", desc: "Drive direct sales through social commerce" },
  { title: "Customer Loyalty", desc: "Strengthen relationships with existing customers" },
  { title: "Real-Time Engagement", desc: "Respond to customers instantly and build trust" },
];

const SocialMediaServices: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
      {/* Navigation Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all"
        style={{
          background: "rgba(0,0,0,0.45)",
          borderBottom: "1px solid rgba(255,255,255,0.03)",
        }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
              }}
            />
            <div>
              <div className="text-sm font-bold" style={{ color: COLORS.white }}>
                Axonary
              </div>
              <div className="text-xs" style={{ color: COLORS.textMuted }}>
                Social Media Marketing
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
            <Link to="/services" className="hover:text-white transition">Services</Link>
            <Link to="/about" className="hover:text-white transition">About</Link>
            <Link to="/contact" className="ml-4 inline-block px-4 py-2 rounded-full" style={{ background: COLORS.primary, color: COLORS.white }}>
              Get Started
            </Link>
          </nav>
        </div>

        <div className="h-[3px] w-full" style={{ background: "rgba(255,255,255,0.02)" }}>
          <div
            style={{
              height: "3px",
              width: `${scrollProgress}%`,
              transition: "width 120ms linear",
              background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary})`,
            }}
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-[72vh] flex items-center pt-20" style={{ background: COLORS.bg }}>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block rounded-full px-4 py-1 text-sm font-medium" style={{ background: `${COLORS.secondary}33`, color: COLORS.white }}>
              Engagement • Growth • Community
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
              Build a Thriving Social{" "}
              <span style={{ color: COLORS.primary }}>Presence</span>
            </h1>

            <p className="mt-4 text-lg text-gray-300 max-w-2xl">
              Engage your audience, build brand loyalty, and drive sales through strategic social media management across all platforms.
            </p>

            <div className="mt-8 flex items-center gap-4 flex-wrap">
              <Link to="/contact" className="px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2" style={{ background: COLORS.primary, color: COLORS.white }}>
                Get Social Strategy
              </Link>
              <button className="px-6 py-3 rounded-full border font-semibold" style={{ borderColor: `${COLORS.primary}33`, color: COLORS.textMuted }}>
                Learn More
              </button>
            </div>
          </div>

          <div className="rounded-2xl p-6" style={{ background: COLORS.card }}>
            <h5 className="text-sm text-gray-400">Social Media Results</h5>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-xs text-gray-400">Brands Managed</div>
              </div>
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">5M+</div>
                <div className="text-xs text-gray-400">Followers Built</div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-300">Ready to grow your social presence?</p>
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
            <h2 className="text-4xl md:text-5xl font-bold">Our Social Services</h2>
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
            <h2 className="text-4xl md:text-5xl font-bold">Why Social Matters</h2>
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
            Ready to Grow on Social?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our social media experts create a strategy that builds your brand and drives results.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 rounded-full font-semibold"
            style={{ background: COLORS.primary, color: COLORS.white }}
          >
            Get Social Audit
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
