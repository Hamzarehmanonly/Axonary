import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  SMMExpertSVG,
  SocialStrategyLogoBrandingSVG,
  ContentCreationSVG,
  CommunityManagementSVG,
  EngagementAnalyticsSVG,
} from "../../components/StaffSectionSVGs";

const COLORS = {
  primary: "#5C3693",
  secondary: "#472A71",
  bg: "#000000",
  card: "#0b0b0d",
  glass: "rgba(255,255,255,0.03)",
  textMuted: "#BDB7D6",
  white: "#FFFFFF",
};

const sections = [
  {
    id: "smm-strategy",
    title: "Social Media Strategy",
    desc: "Develop comprehensive social media strategies tailored to your brand. We create engagement plans and content calendars that resonate with your target audience.",
    imgQuery: "social media marketing strategy",
  },
  {
    id: "smm-content",
    title: "Content Creation & Management",
    desc: "High-quality content creation for all platforms. From graphics and videos to copywriting, we create engaging content that drives engagement and builds your community.",
    imgQuery: "social media content creation",
  },
  {
    id: "smm-campaigns",
    title: "Paid Campaigns & Advertising",
    desc: "Strategic paid social campaigns on Facebook, Instagram, LinkedIn, and TikTok. We maximize ROI through data-driven targeting and continuous optimization.",
    imgQuery: "social media advertising campaigns",
  },
  {
    id: "smm-analytics",
    title: "Community Growth & Analytics",
    desc: "Build engaged communities and track what matters. Detailed analytics, reporting, and optimization to ensure sustainable growth and measurable results.",
    imgQuery: "social media analytics metrics",
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
              Social Media Marketing Solutions
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
          <a href="#smm-strategy" className="hover:text-white">Strategy</a>
          <a href="#smm-content" className="hover:text-white">Content</a>
          <a href="#smm-campaigns" className="hover:text-white">Campaigns</a>
          <a href="#smm-analytics" className="hover:text-white">Analytics</a>
          <Link to="/contact" className="ml-4 inline-block px-4 py-2 rounded-full" style={{ background: COLORS.primary, color: COLORS.white }}>
            Hire Now
          </Link>
        </nav>
      </div>

      <div className="h-[3px] w-full" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div style={{
          height: "3px",
          width: `${progress}%`,
          transition: "width 120ms linear",
          background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary})`
        }} />
      </div>
    </header>
  );
};

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-[72vh] flex items-center"
      style={{ background: COLORS.bg, color: COLORS.white }}
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7">
          <div className="inline-block rounded-full px-4 py-1 text-sm font-medium" style={{ background: `${COLORS.secondary}33`, color: COLORS.white }}>
            Engaging • Strategic • Results-Driven
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 leading-tight">
            Hire Expert <span style={{ color: COLORS.primary }}>Social Media Experts</span>
          </h1>
          <p className="text-lg mt-6" style={{ color: COLORS.textMuted }}>
            Grow your brand presence across all social platforms. We create engaging content, build communities, and drive measurable results.
          </p>
          <div className="flex gap-4 mt-8">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-lg font-semibold"
              style={{ background: COLORS.primary, color: COLORS.white }}
            >
              Start Campaign
            </Link>
            <button
              className="px-6 py-3 rounded-lg font-semibold border"
              style={{ borderColor: COLORS.primary, color: COLORS.primary }}
            >
              Schedule Consultation
            </button>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-12">
            <div>
              <div className="text-3xl font-bold" style={{ color: COLORS.primary }}>1000+</div>
              <div className="text-sm" style={{ color: COLORS.textMuted }}>Clients Managed</div>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: COLORS.primary }}>50M+</div>
              <div className="text-sm" style={{ color: COLORS.textMuted }}>Followers Grown</div>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 flex justify-center">
          {React.createElement(SMMExpertSVG, {
            width: 360,
            height: 360,
            className: "w-full max-w-sm"
          })}
        </div>
      </div>
    </section>
  );
};

const SplitSection: React.FC<{ idx: number; id: string; title: string; desc: string; imgQuery: string }> = ({ idx, id, title, desc, imgQuery }) => {
  const isLeftImage = idx % 2 === 0;
  
  const getSectionSVG = (index: number) => {
    const svgs = [SocialStrategyLogoBrandingSVG, ContentCreationSVG, CommunityManagementSVG, EngagementAnalyticsSVG];
    return svgs[index % svgs.length];
  };

  return (
    <section
      id={id}
      className="py-16 md:py-24"
      style={{ background: idx % 2 === 0 ? COLORS.bg : `${COLORS.card}44` }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {isLeftImage && (
            <div className="md:col-span-5 flex justify-center">
              {React.createElement(getSectionSVG(idx), {
                width: 360,
                height: 360,
                className: "w-full max-w-sm"
              })}
            </div>
          )}
          <div className={isLeftImage ? "md:col-span-7 flex justify-center" : "md:col-span-7 flex justify-center"}>
            <div style={{textAlign: "left"}}>
              <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: COLORS.white }}>
                {title}
              </h3>
              <p className="text-lg mb-6" style={{ color: COLORS.textMuted }}>
                {desc}
              </p>
              <button
                className="px-6 py-3 rounded-lg font-semibold"
                style={{ background: COLORS.primary, color: COLORS.white }}
              >
                Learn More
              </button>
            </div>
          </div>
          {!isLeftImage && (
            <div className="md:col-span-5 flex justify-center">
              {React.createElement(getSectionSVG(idx), {
                width: 360,
                height: 360,
                className: "w-full max-w-sm"
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const FooterCTA: React.FC = () => {
  return (
    <section style={{ background: `${COLORS.primary}15` }} className="py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4" style={{ color: COLORS.white }}>
          Ready to Grow on Social Media?
        </h2>
        <p className="text-lg mb-8" style={{ color: COLORS.textMuted }}>
          Hire our expert SMM professionals and watch your brand grow across all platforms.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/contact"
            className="px-8 py-3 rounded-lg font-semibold"
            style={{ background: COLORS.primary, color: COLORS.white }}
          >
            Get Started
          </Link>
          <button
            className="px-8 py-3 rounded-lg font-semibold border"
            style={{ borderColor: COLORS.primary, color: COLORS.primary }}
          >
            Schedule Call
          </button>
        </div>
      </div>
    </section>
  );
};

const HireSMMExpert: React.FC = () => {
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
    <div style={{ background: COLORS.bg, color: COLORS.white }}>
      <TopNav progress={scrollProgress} />
      <div className="pt-16">
        <Hero />
        {sections.map((section, idx) => (
          <SplitSection
            key={section.id}
            idx={idx}
            id={section.id}
            title={section.title}
            desc={section.desc}
            imgQuery={section.imgQuery}
          />
        ))}
        <FooterCTA />
      </div>
    </div>
  );
};

export default HireSMMExpert;
