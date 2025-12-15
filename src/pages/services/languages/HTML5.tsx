// HTML5.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HTML5SVG } from "../../../components/IndustriesSVGs.js";

const COLORS = {
  primary: "#E34F26",
  secondary: "#F16529",
  bg: "#000000",
  card: "#0b0b0d",
  textMuted: "#BDB7D6",
  white: "#FFFFFF",
};

const services = [
  { id: "responsive-design", title: "Responsive Web Design", desc: "Create mobile-first, responsive websites using HTML5, CSS3, and modern layout techniques." },
  { id: "semantic-markup", title: "Semantic HTML", desc: "Build accessible, SEO-friendly websites using semantic HTML5 elements and proper markup structure." },
  { id: "multimedia-integration", title: "Multimedia Integration", desc: "Integrate video, audio, canvas, and interactive media using native HTML5 APIs." },
  { id: "progressive-web-apps", title: "Progressive Web Apps", desc: "Develop PWAs with HTML5 features like service workers, offline functionality, and app-like experiences." },
  { id: "modern-apis", title: "Modern Web APIs", desc: "Utilize HTML5 APIs for geolocation, local storage, web workers, and real-time communication." },
];

const TopNav: React.FC<{ progress: number }> = ({ progress }) => (
  <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm" style={{ background: "rgba(0,0,0,0.45)", borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
    <div className="container mx-auto px-6 flex items-center justify-between h-16">
      <div className="flex items-center gap-3">
        <div style={{ width: 44, height: 44, borderRadius: 10, background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})` }} />
        <div><div className="text-sm font-bold" style={{ color: COLORS.white }}>Axonary</div><div className="text-xs" style={{ color: COLORS.textMuted }}>HTML5 Development</div></div>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
        <a href="#responsive-design" className="hover:text-white">Responsive</a><a href="#semantic-markup" className="hover:text-white">Semantic</a><a href="#multimedia-integration" className="hover:text-white">Multimedia</a><a href="#progressive-web-apps" className="hover:text-white">PWAs</a><a href="#modern-apis" className="hover:text-white">APIs</a>
        <Link to="/contact" className="ml-4 inline-block px-4 py-2 rounded-full" style={{ background: COLORS.primary, color: COLORS.white }}>Book a Call</Link>
      </nav>
    </div>
    <div className="h-[3px] w-full" style={{ background: "rgba(255,255,255,0.02)" }}><div style={{ height: "100%", width: `${progress}%`, background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary})`, transition: "width 0.1s ease-out" }} /></div>
  </header>
);

const HeroSection: React.FC = () => (
  <section className="min-h-screen flex items-center pt-20 pb-20" style={{ background: COLORS.bg, color: COLORS.white }}>
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
      <div className="md:col-span-7 flex justify-center">
        <div className="text-left">
          <div className="inline-block rounded-full px-4 py-1 text-sm font-medium" style={{ background: `${COLORS.secondary}33`, color: COLORS.white }}>Modern • Accessible • Standards-Compliant</div>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">HTML5 <span style={{ color: COLORS.primary }}>Mastery</span></h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">Build modern, semantic, and accessible web applications using the latest HTML5 standards and best practices.</p>
          <div className="mt-6 flex items-center gap-4">
            <a href="#responsive-design" className="px-6 py-3 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Explore Services</a>
            <a href="/contact" className="px-5 py-3 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>Request Demo</a>
          </div>
        </div>
      </div>
      <div className="md:col-span-5"><div className="rounded-2xl p-6" style={{ background: COLORS.card }}><HTML5SVG width={360} height={360} /></div></div>
    </div>
  </section>
);

const SplitSection: React.FC<{ idx: number; id: string; title: string; desc: string; }> = ({ idx, id, title, desc }) => {
  const getSVG = () => [<HTML5SVG width={360} height={360} />, <HTML5SVG width={360} height={360} />, <HTML5SVG width={360} height={360} />, <HTML5SVG width={360} height={360} />, <HTML5SVG width={360} height={360} />][idx];
  const isLeft = idx % 2 === 0;
  return (
    <section id={id} className="py-20" style={{ background: COLORS.bg }}>
      <div className="container mx-auto px-6"><div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {isLeft ? <><div className="md:col-span-6 flex justify-center"><div className="rounded-2xl shadow-lg" style={{ background: COLORS.card, maxWidth: '360px' }}>{getSVG()}</div></div><div className="md:col-span-6 flex justify-center"><div className="max-w-xl text-left"><div className="inline-block rounded-full px-3 py-1 text-sm" style={{ background: `${COLORS.secondary}22`, color: COLORS.white }}>{title.split(" ")[0]}</div><h3 className="mt-4 text-3xl font-bold" style={{ color: COLORS.white }}>{title}</h3><p className="mt-4 text-lg text-gray-300">{desc}</p><div className="mt-6 flex gap-3"><a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Learn More</a></div></div></div></> : <><div className="md:col-span-6 flex justify-center"><div className="max-w-xl text-left"><div className="inline-block rounded-full px-3 py-1 text-sm" style={{ background: `${COLORS.secondary}22`, color: COLORS.white }}>{title.split(" ")[0]}</div><h3 className="mt-4 text-3xl font-bold" style={{ color: COLORS.white }}>{title}</h3><p className="mt-4 text-lg text-gray-300">{desc}</p><div className="mt-6 flex gap-3"><a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Learn More</a></div></div></div><div className="md:col-span-6 flex justify-center"><div className="rounded-2xl shadow-lg" style={{ background: COLORS.card, maxWidth: '360px' }}>{getSVG()}</div></div></>}
      </div></div>
    </section>
  );
};

const HTML5: React.FC = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => { const onScroll = () => { const scrolled = window.scrollY; const height = document.documentElement.scrollHeight - window.innerHeight; setProgress((scrolled / height) * 100); }; window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);
  return (<div className="w-full bg-black text-white overflow-x-hidden"><TopNav progress={progress} /><HeroSection />{services.map((s, i) => <SplitSection key={s.id} idx={i} {...s} />)}<footer className="py-8" style={{ background: COLORS.bg }}><div className="container mx-auto px-6 text-center text-sm" style={{ color: COLORS.textMuted }}>© {new Date().getFullYear()} Axonary — HTML5 Mastery</div></footer></div>);
};

export default HTML5;