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

const SEOAI: React.FC = () => {
  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 pb-20" style={{ background: COLORS.bg }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <SEOAISVG width={400} height={400} />
            </div>
            <div>
              <div className="inline-block rounded-full px-4 py-1 text-sm font-medium mb-6" style={{ background: `${COLORS.secondary}33`, color: COLORS.primary }}>
                AI-Powered SEO
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                Supercharge SEO with <span style={{ color: COLORS.primary }}>Advanced AI</span>
              </h1>
              <p className="text-lg text-gray-300 mb-10">
                Leverage cutting-edge artificial intelligence and machine learning for smarter optimization, predictive insights, and unmatched SEO results that scale effortlessly.
              </p>
              <Link to="/contact" className="px-6 py-3 rounded-full font-semibold inline-block" style={{ background: COLORS.primary, color: COLORS.white }}>
                Get AI-Powered SEO Strategy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Advantage Section */}
      <section className="py-20 px-6" style={{ background: `${COLORS.secondary}11` }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">
                The <span style={{ color: COLORS.primary }}>AI Advantage</span> in SEO
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Artificial intelligence and machine learning enable SEO at unprecedented scale. We analyze millions of data points, predict ranking opportunities, and optimize content with precision impossible through manual efforts alone.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                AI helps us understand search patterns, user behavior, and competitive landscapes faster and more accurately than ever before—giving you an unfair advantage in your market.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { title: "Predictive Analytics", desc: "Forecast ranking changes and growth opportunities weeks in advance" },
                { title: "Smart Automation", desc: "Reduce manual work by 70% while improving optimization quality" },
                { title: "Deep Learning", desc: "AI models trained on millions of websites and SERP data" },
                { title: "Real-Time Insights", desc: "Get instant alerts on ranking changes and algorithm updates" },
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-lg" style={{ background: COLORS.card }}>
                  <h3 className="font-bold text-xl mb-2" style={{ color: COLORS.primary }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6" style={{ background: COLORS.bg }}>
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Our AI-Powered <span style={{ color: COLORS.primary }}>SEO Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🤖", title: "AI Content Optimization", desc: "ML-powered content analysis and optimization for maximum ranking potential and user engagement" },
              { icon: "🔮", title: "Predictive Analytics", desc: "Forecast ranking potential, identify emerging trends, and predict algorithm changes" },
              { icon: "🧠", title: "Smart Keyword Research", desc: "AI discovers high-intent, low-competition keywords hidden from traditional research" },
              { icon: "👥", title: "Intent Matching", desc: "AI analyzes search intent to match your content perfectly to user needs" },
              { icon: "🔍", title: "Automated Monitoring", desc: "24/7 AI tracking of rankings, competitors, and hundreds of metrics" },
              { icon: "📈", title: "Performance Prediction", desc: "ML models predict which optimizations will drive the biggest impact" },
            ].map((service, idx) => (
              <div key={idx} className="p-8 rounded-lg" style={{ background: COLORS.card }}>
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-20 px-6" style={{ background: `${COLORS.secondary}11` }}>
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            AI SEO <span style={{ color: COLORS.primary }}>Implementation Roadmap</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Comprehensive Audit", desc: "AI analyzes your site and identifies all optimization opportunities" },
              { num: "02", title: "AI Strategy", desc: "ML algorithms predict optimal optimization path for your goals" },
              { num: "03", title: "Automated Deployment", desc: "Deploy AI-powered optimizations across your entire site" },
              { num: "04", title: "Continuous Improvement", desc: "AI monitors results and automatically refines strategies" },
            ].map((step, idx) => (
              <div key={idx} className="p-6 rounded-lg" style={{ background: COLORS.card, borderLeft: `3px solid ${COLORS.primary}` }}>
                <div className="text-4xl font-bold mb-3" style={{ color: COLORS.primary }}>
                  {step.num}
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-6" style={{ background: COLORS.bg }}>
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Results from <span style={{ color: COLORS.primary }}>AI-Powered SEO</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stat: "550%", label: "Faster Growth", desc: "Accelerated results from intelligent automation and optimization" },
              { stat: "95%", label: "Prediction Accuracy", desc: "AI models predict ranking changes with industry-leading precision" },
              { stat: "40%", label: "Time Savings", desc: "Automation eliminates manual tasks, freeing your team for strategy" },
            ].map((result, idx) => (
              <div key={idx} className="text-center p-8 rounded-lg" style={{ background: COLORS.card }}>
                <div className="text-5xl font-bold mb-3" style={{ color: COLORS.primary }}>
                  {result.stat}
                </div>
                <h3 className="text-xl font-bold mb-2">{result.label}</h3>
                <p className="text-gray-400 text-sm">{result.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 text-center" style={{ background: `${COLORS.secondary}11` }}>
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your SEO with <span style={{ color: COLORS.primary }}>AI</span>?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's leverage advanced artificial intelligence to scale your SEO efforts, predict opportunities, and dominate your market faster than ever before.
          </p>
          <Link to="/contact" className="px-8 py-4 rounded-full font-semibold inline-block" style={{ background: COLORS.primary, color: COLORS.white }}>
            Get AI-Powered SEO Consultation
          </Link>
        </div>
      </section>

      {/* Fixed Footer CTA */}
      <div className="fixed bottom-8 right-8 z-40">
        <Link to="/contact" className="px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition inline-block" style={{ backgroundColor: COLORS.primary, color: "white" }}>
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default SEOAI;
