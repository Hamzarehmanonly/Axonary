// Service.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/**
 * Service.tsx
 * Interactive Split (Dribbble-style) Services Page
 *
 * Notes:
 * - TailwindCSS utility classes used (assumes Tailwind configured).
 * - Unsplash source links used for evocative demo images.
 * - Main services showcase page for Axonary.
 */

const COLORS = {
  primary: "#5C3693",        // purple accent
  secondary: "#472A71",      // darker purple
  bg: "#000000",
  card: "#0b0b0d",
  glass: "rgba(255,255,255,0.03)",
  textMuted: "#BDB7D6",
  white: "#FFFFFF",
};

const services = [
  {
    id: "social",
    title: "Data-Driven Social Media Marketing",
    desc:
      "Performance-first social campaigns that scale ROAS. Creative experiments, audience architecture and automation that favors profit.",
    imgQuery: "digital marketing",
  },
  {
    id: "seo",
    title: "SEO Growth Engine",
    desc:
      "Technical SEO, content velocity and white-hat link building to move organic metrics and capture high intent traffic.",
    imgQuery: "seo marketing",
  },
  {
    id: "conversion",
    title: "Conversion Design",
    desc:
      "Landing pages and funnels built around the single metric: conversion rate. Microcopy, experiments, and analytics-driven design.",
    imgQuery: "conversion rate optimization",
  },
  {
    id: "brand",
    title: "Brand Strategy & Identity",
    desc:
      "Positioning, visual systems, and creative ops — identities that earn attention and scale across paid and organic channels.",
    imgQuery: "branding design",
  },
  {
    id: "web",
    title: "Web & SaaS Engineering",
    desc:
      "Production-grade frontends, Typesafe APIs and CI/CD — engineered for performance, stability and conversion.",
    imgQuery: "saas dashboard",
  },
  {
    id: "email",
    title: "Email & Lifecycle Automation",
    desc:
      "Journeys that increase retention and LTV. Segmentation, deliverability, and creative that drives repeat purchases.",
    imgQuery: "email marketing",
  },
];

const unsplashSrc = (q: string) =>
  `https://source.unsplash.com/collection/922197/1200x900?${encodeURIComponent(q)}`;

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
              Marketing that moves
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
          <a href="#social" className="hover:text-white">Social</a>
          <a href="#seo" className="hover:text-white">SEO</a>
          <a href="#conversion" className="hover:text-white">Conversion</a>
          <a href="#brand" className="hover:text-white">Brand</a>
          <a href="#web" className="hover:text-white">Web</a>
          <a href="#email" className="hover:text-white">Email</a>
          <Link to="/contact" className="ml-4 inline-block px-4 py-2 rounded-full" style={{ background: COLORS.primary, color: COLORS.white }}>
            Book a Call
          </Link>
        </nav>
      </div>

      {/* scroll progress bar */}
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
            Premium • Performance • Proof
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            Data-Driven Social Media Marketing Solutions{" "}
            <span style={{ color: COLORS.primary }}>| Axonary</span>
          </h1>

          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            We pair creative storytelling with engineering-grade measurement to scale audiences, lower acquisition costs, and grow revenue that shows up on the P&L.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <a href="#social" className="px-6 py-3 rounded-full font-semibold inline-flex items-center gap-3" style={{ background: COLORS.primary, color: COLORS.white }}>
              Explore Services
            </a>
            <a href="/audit" className="px-5 py-3 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>
              Request Audit
            </a>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="rounded-2xl p-6" style={{ background: COLORS.card }}>
            <h5 className="text-sm text-gray-400">Snapshot</h5>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">+87</div>
                <div className="text-xs text-gray-400">Campaigns launched</div>
              </div>
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">+2M</div>
                <div className="text-xs text-gray-400">Tracked revenue</div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-300">Need a quick audit? We surface low-hanging wins in 48 hours.</p>
              <div className="mt-4">
                <a href="/contact" className="inline-block px-4 py-2 rounded-full" style={{ background: COLORS.primary, color: COLORS.white }}>Request Audit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SplitSection: React.FC<{ idx: number; id: string; title: string; desc: string; imgQuery: string; }> = ({ idx, id, title, desc, imgQuery }) => {
  const isLeftImage = idx % 2 === 0; // even -> image on left
  const image = unsplashSrc(imgQuery);

  return (
    <section id={id} className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {isLeftImage ? (
            <>
              <div className="md:col-span-6">
                <div className="rounded-2xl overflow-hidden shadow-lg" style={{ background: COLORS.card }}>
                  <img src={image} alt={title} className="w-full h-[360px] object-cover" />
                </div>
              </div>

              <div className="md:col-span-6">
                <div className="max-w-xl">
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
                    <a href="/cases" className="px-4 py-2 rounded-full border border-[rgba(255,255,255,0.06)]" style={{ color: COLORS.textMuted }}>
                      View Case Study
                    </a>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="md:col-span-6 md:col-start-7">
                <div className="rounded-2xl overflow-hidden shadow-lg" style={{ background: COLORS.card }}>
                  <img src={image} alt={title} className="w-full h-[360px] object-cover" />
                </div>
              </div>

              <div className="md:col-span-6 md:col-start-1">
                <div className="max-w-xl">
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
                    <a href="/cases" className="px-4 py-2 rounded-full border border-[rgba(255,255,255,0.06)]" style={{ color: COLORS.textMuted }}>
                      View Case Study
                    </a>
                  </div>
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
          <div className="text-sm font-semibold" style={{ color: COLORS.white }}>Want a free micro-audit?</div>
          <div className="text-xs" style={{ color: COLORS.textMuted }}>We’ll dig 3 quick wins you can ship in 48 hours.</div>
        </div>

        <div className="flex items-center gap-3">
          <a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Request Audit</a>
          <a href="/pricing" className="px-3 py-2 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>Pricing</a>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
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
          {services.map((s, idx) => (
            <SplitSection key={s.id} idx={idx} id={s.id} title={s.title} desc={s.desc} imgQuery={s.imgQuery} />
          ))}
        </div>

        {/* spacing so footer CTA doesn't overlap content */}
        <div style={{ height: 160 }} />
      </main>

      <FooterCTA />

      <footer className="mt-20 py-10">
        <div className="container mx-auto px-6 text-center text-sm" style={{ color: COLORS.textMuted }}>
          © {new Date().getFullYear()} Axonary — Strategy First. Always.
        </div>
      </footer>
    </div>
  );
};

export default Services;
