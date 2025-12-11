import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContentWriterSVG, SEOWritingSVG, ContentStrategySVG, WebCopySVG, DiverseContentSVG } from "../../components/StaffSectionSVGs";

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
    id: "content-seo",
    title: "SEO-Optimized Writing",
    desc: "Engaging blog posts and articles optimized for search engines. Our content ranks high, drives organic traffic, and establishes your authority in your industry.",
    imgQuery: "content writing seo blog",
  },
  {
    id: "content-strategy",
    title: "Content Strategy & Planning",
    desc: "Comprehensive content strategy development and planning. We create content calendars, topic clusters, and messaging frameworks that align with your business goals.",
    imgQuery: "content strategy planning marketing",
  },
  {
    id: "content-website",
    title: "Website & Landing Page Copy",
    desc: "Compelling website content and landing page copy that converts. We craft persuasive messaging that speaks to your audience and drives action.",
    imgQuery: "website copy copywriting writing",
  },
  {
    id: "content-diverse",
    title: "Diverse Content Creation",
    desc: "All types of content across all channels. From email campaigns to social media posts, whitepapers to product descriptions - we've got you covered.",
    imgQuery: "content creation diverse writing",
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
              Content Writing Solutions
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
          <a href="#content-seo" className="hover:text-white">SEO Writing</a>
          <a href="#content-strategy" className="hover:text-white">Strategy</a>
          <a href="#content-website" className="hover:text-white">Web Copy</a>
          <a href="#content-diverse" className="hover:text-white">All Types</a>
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
            Engaging • SEO-Optimized • Brand-Voice
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 leading-tight">
            Hire Expert <span style={{ color: COLORS.primary }}>Content Writers</span>
          </h1>
          <p className="text-lg mt-6" style={{ color: COLORS.textMuted }}>
            Create compelling, engaging content that attracts and converts. Our writers produce SEO-optimized content that drives traffic and builds authority.
          </p>
          <div className="flex gap-4 mt-8">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-lg font-semibold"
              style={{ background: COLORS.primary, color: COLORS.white }}
            >
              Start Writing
            </Link>
            <button
              className="px-6 py-3 rounded-lg font-semibold border"
              style={{ borderColor: COLORS.primary, color: COLORS.primary }}
            >
              View Samples
            </button>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-12">
            <div>
              <div className="text-3xl font-bold" style={{ color: COLORS.primary }}>500+</div>
              <div className="text-sm" style={{ color: COLORS.textMuted }}>Articles Written</div>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: COLORS.primary }}>10M+</div>
              <div className="text-sm" style={{ color: COLORS.textMuted }}>Words Published</div>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 flex justify-center">
          <ContentWriterSVG width={360} height={360} />
        </div>
      </div>
    </section>
  );
};

const SplitSection: React.FC<{ idx: number; id: string; title: string; desc: string; imgQuery: string }> = ({ idx, id, title, desc, imgQuery }) => {
  const isLeftImage = idx % 2 === 0;
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
              {idx === 0 && <SEOWritingSVG width={360} height={360} />}
              {idx === 1 && <ContentStrategySVG width={360} height={360} />}
              {idx === 2 && <WebCopySVG width={360} height={360} />}
              {idx === 3 && <DiverseContentSVG width={360} height={360} />}
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
              {idx === 0 && <SEOWritingSVG width={360} height={360} />}
              {idx === 1 && <ContentStrategySVG width={360} height={360} />}
              {idx === 2 && <WebCopySVG width={360} height={360} />}
              {idx === 3 && <DiverseContentSVG width={360} height={360} />}
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
          Ready to Transform Your Content?
        </h2>
        <p className="text-lg mb-8" style={{ color: COLORS.textMuted }}>
          Hire our expert content writers and create engaging, high-performing content that drives results.
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
            See Samples
          </button>
        </div>
      </div>
    </section>
  );
};

const HireContentWriter: React.FC = () => {
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

export default HireContentWriter;
