// OnDemand.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { OnDemandDeliverySVG, RideSharingSVG, HomeServicesSVG, HealthcareOndemandSVG, LogisticsOptimizationSVG, PaymentIntegrationSVG } from "../../../components/IndustriesSVGs.js";

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
    id: "delivery-platforms",
    title: "On-Demand Delivery Platforms",
    desc: "Food delivery, grocery delivery, and courier services with real-time tracking and optimization.",
  },
  {
    id: "ride-sharing",
    title: "Ride-Sharing Solutions",
    desc: "Build your Uber-like platform with driver management, passenger matching, and dynamic pricing.",
  },
  {
    id: "home-services",
    title: "Home Services Marketplace",
    desc: "Connect service providers with customers for cleaning, repairs, beauty, and more.",
  },
  {
    id: "healthcare-ondemand",
    title: "Healthcare On-Demand",
    desc: "Telemedicine, home healthcare, and pharmacy delivery platforms.",
  },
  {
    id: "logistics-optimization",
    title: "Logistics & Route Optimization",
    desc: "AI-powered route planning, fleet management, and delivery optimization.",
  },
  {
    id: "payment-integration",
    title: "Payment & Wallet Integration",
    desc: "Secure payment gateways, digital wallets, and subscription management.",
  },
];

const TopNav: React.FC<{ progress: number }> = ({ progress }) => {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
      style={{ background: "rgba(0,0,0,0.45)", borderBottom: "1px solid rgba(255,255,255,0.03)" }}
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
              On-Demand Solutions
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
          <a href="#delivery-platforms" className="hover:text-white">Delivery</a>
          <a href="#ride-sharing" className="hover:text-white">Ride-Sharing</a>
          <a href="#home-services" className="hover:text-white">Home Services</a>
          <a href="#healthcare-ondemand" className="hover:text-white">Healthcare</a>
          <a href="#logistics-optimization" className="hover:text-white">Logistics</a>
          <a href="#payment-integration" className="hover:text-white">Payments</a>
          <Link to="/contact" className="ml-4 inline-block px-4 py-2 rounded-full" style={{ background: COLORS.primary, color: COLORS.white }}>
            Book a Call
          </Link>
        </nav>
      </div>

      <div className="h-[3px] w-full" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary})`,
            transition: "width 0.1s ease-out",
          }}
        />
      </div>
    </header>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section
      className="min-h-screen flex items-center pt-20 pb-20"
      style={{ background: COLORS.bg, color: COLORS.white }}
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 flex justify-center">
          <div className="text-left">
            <div className="inline-block rounded-full px-4 py-1 text-sm font-medium" style={{ background: `${COLORS.secondary}33`, color: COLORS.white }}>
              Fast • Reliable • Scalable
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
              On-Demand Solutions{" "}
              <span style={{ color: COLORS.primary }}>for Modern Life</span>
            </h1>

            <p className="mt-4 text-lg text-gray-300 max-w-2xl">
              Build powerful on-demand platforms for delivery, services, and transportation with real-time tracking and seamless experiences.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a href="#delivery-platforms" className="px-6 py-3 rounded-full font-semibold inline-flex items-center gap-3" style={{ background: COLORS.primary, color: COLORS.white }}>
                Explore Solutions
              </a>
              <a href="/contact" className="px-5 py-3 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>
                Request Demo
              </a>
            </div>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="rounded-2xl p-6" style={{ background: COLORS.card }}>
            <OnDemandDeliverySVG width={360} height={360} />
          </div>
        </div>
      </div>
    </section>
  );
};

const SplitSection: React.FC<{ idx: number; id: string; title: string; desc: string; }> = ({ idx, id, title, desc }) => {
  const isLeftImage = idx % 2 === 0;

  const getSVGComponent = () => {
    switch(idx) {
      case 0: return <OnDemandDeliverySVG width={360} height={360} />;
      case 1: return <RideSharingSVG width={360} height={360} />;
      case 2: return <HomeServicesSVG width={360} height={360} />;
      case 3: return <HealthcareOndemandSVG width={360} height={360} />;
      case 4: return <LogisticsOptimizationSVG width={360} height={360} />;
      case 5: return <PaymentIntegrationSVG width={360} height={360} />;
      default: return <OnDemandDeliverySVG width={360} height={360} />;
    }
  };

  return (
    <section id={id} className="py-20" style={{ background: COLORS.bg }}>
      <div className="container mx-auto px-6">
        <div className={`grid grid-cols-1 md:grid-cols-12 gap-12 items-center ${!isLeftImage ? "md:flex-row-reverse" : ""}`}>
          {isLeftImage ? (
            <>
              <div className="md:col-span-6 flex items-center justify-center">
                <div className="rounded-2xl shadow-lg w-full overflow-hidden" style={{ background: COLORS.card, maxWidth: '360px' }}>
                  {getSVGComponent()}
                </div>
              </div>
              <div className="md:col-span-6 flex items-center">
                <div className="max-w-xl w-full">
                  <div className="inline-block rounded-full px-3 py-1 text-sm font-medium" style={{ background: `${COLORS.secondary}22`, color: COLORS.white }}>
                    {title.split(" ")[0]}
                  </div>
                  <h3 className="mt-4 text-2xl md:text-3xl font-bold" style={{ color: COLORS.white }}>{title}</h3>
                  <p className="mt-4 text-lg text-gray-300">{desc}</p>
                  <div className="mt-6 flex items-center gap-3">
                    <a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>
                      Learn More
                    </a>
                    <a href="/contact" className="px-4 py-2 rounded-full border border-[rgba(255,255,255,0.06)]" style={{ color: COLORS.textMuted }}>
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="md:col-span-6 flex items-center">
                <div className="max-w-xl w-full">
                  <div className="inline-block rounded-full px-3 py-1 text-sm font-medium" style={{ background: `${COLORS.secondary}22`, color: COLORS.white }}>
                    {title.split(" ")[0]}
                  </div>
                  <h3 className="mt-4 text-2xl md:text-3xl font-bold" style={{ color: COLORS.white }}>{title}</h3>
                  <p className="mt-4 text-lg text-gray-300">{desc}</p>
                  <div className="mt-6 flex items-center gap-3">
                    <a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>
                      Learn More
                    </a>
                    <a href="/contact" className="px-4 py-2 rounded-full border border-[rgba(255,255,255,0.06)]" style={{ color: COLORS.textMuted }}>
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 flex items-center justify-center">
                <div className="rounded-2xl shadow-lg w-full overflow-hidden" style={{ background: COLORS.card, maxWidth: '360px' }}>
                  {getSVGComponent()}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

const FooterCTA: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-[92%] md:w-[720px]">
      <div
        className="rounded-2xl p-4 flex items-center justify-between shadow-xl"
        style={{
          background: `linear-gradient(90deg, rgba(92,54,147,0.12), rgba(71,42,113,0.06))`,
          border: "1px solid rgba(255,255,255,0.03)",
        }}
      >
        <div>
          <div className="text-sm font-semibold" style={{ color: COLORS.white }}>Ready to launch your on-demand platform?</div>
          <div className="text-xs" style={{ color: COLORS.textMuted }}>Let's build something amazing.</div>
        </div>

        <div className="flex items-center gap-3">
          <a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>
            Get in Touch
          </a>
          <a href="/work" className="px-3 py-2 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>
            Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

const OnDemand: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrolled / height) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
      <TopNav progress={progress} />
      <HeroSection />
      {services.slice(0, 3).map((service, idx) => (
        <SplitSection key={service.id} idx={idx} {...service} />
      ))}
      <FooterCTA />

      <footer className="py-8" style={{ background: COLORS.bg }}>
        <div className="container mx-auto px-6 text-center text-sm" style={{ color: COLORS.textMuted }}>
          © {new Date().getFullYear()} Axonary — On-Demand Excellence
        </div>
      </footer>
    </div>
  );
};

export default OnDemand;
