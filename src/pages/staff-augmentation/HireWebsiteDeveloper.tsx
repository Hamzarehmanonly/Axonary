import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  WebDeveloperSVG,
  ResponsiveDesignSVG,
  ReactVueSVG,
  FullStackWebSVG,
  WebPerfSVG,
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
    id: "web-frontend",
    title: "Frontend Development",
    desc: "Modern, responsive websites built with React, Vue, and Next.js. We create interactive experiences with smooth animations and excellent user interface design.",
    imgQuery: "web development responsive design",
  },
  {
    id: "web-backend",
    title: "Backend Integration",
    desc: "Robust server-side solutions with Node.js, Python, and database integration. Fast APIs, secure authentication, and scalable architecture for your web applications.",
    imgQuery: "backend api integration development",
  },
  {
    id: "web-performance",
    title: "Performance & Optimization",
    desc: "Lightning-fast websites optimized for speed, SEO, and user experience. We implement best practices for performance, accessibility, and search engine visibility.",
    imgQuery: "web performance optimization seo",
  },
  {
    id: "web-maintenance",
    title: "Hosting & Maintenance",
    desc: "24/7 monitoring, regular updates, security patches, and ongoing support. We keep your website running smoothly with proactive maintenance and security measures.",
    imgQuery: "hosting maintenance deployment",
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
              Web Development Solutions
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
          <a href="#web-frontend" className="hover:text-white">Frontend</a>
          <a href="#web-backend" className="hover:text-white">Backend</a>
          <a href="#web-performance" className="hover:text-white">Performance</a>
          <a href="#web-maintenance" className="hover:text-white">Support</a>
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
            Responsive • Modern • SEO-Optimized
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            Website Development{" "}
            <span style={{ color: COLORS.primary }}>Excellence | Axonary</span>
          </h1>

          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Build stunning, high-performing websites that convert visitors into customers. Modern stack, responsive design, and SEO-optimized.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <a href="#web-frontend" className="px-6 py-3 rounded-full font-semibold inline-flex items-center gap-3" style={{ background: COLORS.primary, color: COLORS.white }}>
              Explore Services
            </a>
            <a href="/contact" className="px-5 py-3 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>
              Request Quote
            </a>
          </div>
        </div>

        <div className="md:col-span-5 flex items-center justify-center">
          {React.createElement(WebDeveloperSVG, {
            width: 360,
            height: 360,
            className: "w-full max-w-sm"
          })}
        </div>
      </div>
    </section>
  );
};

const SplitSection: React.FC<{ idx: number; id: string; title: string; desc: string; imgQuery: string; }> = ({ idx, id, title, desc, imgQuery }) => {
  const isLeftImage = idx % 2 === 0;
  
  const getSectionSVG = (index: number) => {
    const svgs = [ResponsiveDesignSVG, ReactVueSVG, FullStackWebSVG, WebPerfSVG];
    return svgs[index % svgs.length];
  };

  return (
    <section id={id} className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-stretch">
          {isLeftImage ? (
            <>
              <div className="md:col-span-6 flex items-center justify-center">
                {React.createElement(getSectionSVG(idx), {
                  width: 360,
                  height: 360,
                  className: "w-full max-w-sm"
                })}
              </div>
              <div className="md:col-span-6 flex items-center justify-center">
                <div className="max-w-xl w-full" style={{textAlign: "left"}}>
                  <div className="inline-block rounded-full px-3 py-1 text-sm font-medium" style={{ background: `${COLORS.secondary}22`, color: COLORS.white }}>
                    {title.split(" ")[0]}
                  </div>

                  <h3 className="mt-4 text-2xl md:text-3xl font-bold" style={{ color: COLORS.white }}>
                    {title}
                  </h3>

                  <p className="mt-4 text-lg text-gray-300">{desc}</p>

                  <div className="mt-6 flex items-center gap-3">
                    <a href={`/${id}`} className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>
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
              <div className="md:col-span-6 flex items-center justify-center">
                <div className="max-w-xl w-full" style={{textAlign: "left"}}>
                  <div className="inline-block rounded-full px-3 py-1 text-sm font-medium" style={{ background: `${COLORS.secondary}22`, color: COLORS.white }}>
                    {title.split(" ")[0]}
                  </div>

                  <h3 className="mt-4 text-2xl md:text-3xl font-bold" style={{ color: COLORS.white }}>
                    {title}
                  </h3>

                  <p className="mt-4 text-lg text-gray-300">{desc}</p>

                  <div className="mt-6 flex items-center gap-3">
                    <a href={`/${id}`} className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>
                      Learn More
                    </a>
                    <a href="/contact" className="px-4 py-2 rounded-full border border-[rgba(255,255,255,0.06)]" style={{ color: COLORS.textMuted }}>
                      Get Started
                    </a>
                  </div>
                </div>
              </div>

              <div className="md:col-span-6 flex items-center justify-center">
                {React.createElement(getSectionSVG(idx), {
                  width: 360,
                  height: 360,
                  className: "w-full max-w-sm"
                })}
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
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="/contact"
        className="inline-block px-6 py-3 rounded-full font-semibold shadow-lg"
        style={{ background: COLORS.primary, color: COLORS.white }}
      >
        Hire Now
      </a>
    </div>
  );
};

const HireWebsiteDeveloper: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const pct = height > 0 ? Math.min(100, Math.max(0, (scrolled / height) * 100)) : 0;
      setProgress(pct);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ background: COLORS.bg, color: COLORS.white, minHeight: "100vh" }}>
      <TopNav progress={progress} />

      <main className="pt-20">
        <Hero />

        <div className="mt-8">
          {sections.map((s, idx) => (
            <SplitSection key={s.id} idx={idx} id={s.id} title={s.title} desc={s.desc} imgQuery={s.imgQuery} />
          ))}
        </div>

        <div style={{ height: 160 }} />
      </main>

      <FooterCTA />
    </div>
  );
};

export default HireWebsiteDeveloper;
