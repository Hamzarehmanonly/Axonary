// GCP.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GCPSVG } from "../../../components/IndustriesSVGs.js";

const COLORS = {
  primary: "#4285F4",
  secondary: "#34A853",
  bg: "#000000",
  card: "#0b0b0d",
  textMuted: "#BDB7D6",
  white: "#FFFFFF",
};

const services = [
  { id: "compute-engine", title: "Compute Engine Solutions", desc: "Deploy scalable virtual machines with Google Cloud's high-performance computing infrastructure." },
  { id: "kubernetes-engine", title: "Kubernetes Engine", desc: "Orchestrate containerized applications with Google's managed Kubernetes service and auto-scaling capabilities." },
  { id: "bigquery-analytics", title: "BigQuery Analytics", desc: "Analyze massive datasets with Google's serverless, enterprise data warehouse and machine learning integration." },
  { id: "cloud-functions", title: "Cloud Functions", desc: "Build event-driven serverless applications with automatic scaling and pay-per-use pricing model." },
  { id: "ai-ml-platform", title: "AI & ML Platform", desc: "Leverage Google's AI services including Vision AI, Natural Language API, and custom ML model training." },
];

const TopNav: React.FC<{ progress: number }> = ({ progress }) => (
  <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm" style={{ background: "rgba(0,0,0,0.45)", borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
    <div className="container mx-auto px-6 flex items-center justify-between h-16">
      <div className="flex items-center gap-3">
        <div style={{ width: 44, height: 44, borderRadius: 10, background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})` }} />
        <div><div className="text-sm font-bold" style={{ color: COLORS.white }}>Axonary</div><div className="text-xs" style={{ color: COLORS.textMuted }}>Google Cloud</div></div>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
        <a href="#compute-engine" className="hover:text-white">Compute</a><a href="#kubernetes-engine" className="hover:text-white">Kubernetes</a><a href="#bigquery-analytics" className="hover:text-white">BigQuery</a><a href="#cloud-functions" className="hover:text-white">Functions</a><a href="#ai-ml-platform" className="hover:text-white">AI/ML</a>
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
          <div className="inline-block rounded-full px-4 py-1 text-sm font-medium" style={{ background: `${COLORS.secondary}33`, color: COLORS.white }}>Innovative • Scalable • AI-Powered</div>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">Google Cloud <span style={{ color: COLORS.primary }}>Innovation</span></h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">Accelerate your digital transformation with Google Cloud's cutting-edge infrastructure and AI capabilities.</p>
          <div className="mt-6 flex items-center gap-4">
            <a href="#compute-engine" className="px-6 py-3 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Explore Services</a>
            <a href="/contact" className="px-5 py-3 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>Request Demo</a>
          </div>
        </div>
      </div>
      <div className="md:col-span-5"><div className="rounded-2xl p-6" style={{ background: COLORS.card }}><GCPSVG width={360} height={360} /></div></div>
    </div>
  </section>
);

const SplitSection: React.FC<{ idx: number; id: string; title: string; desc: string; }> = ({ idx, id, title, desc }) => {
  const getSVG = () => [<GCPSVG width={360} height={360} />, <GCPSVG width={360} height={360} />, <GCPSVG width={360} height={360} />, <GCPSVG width={360} height={360} />, <GCPSVG width={360} height={360} />][idx];
  const isLeft = idx % 2 === 0;
  return (
    <section id={id} className="py-20" style={{ background: COLORS.bg }}>
      <div className="container mx-auto px-6"><div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {isLeft ? <><div className="md:col-span-6 flex justify-center"><div className="rounded-2xl shadow-lg" style={{ background: COLORS.card, maxWidth: '360px' }}>{getSVG()}</div></div><div className="md:col-span-6 flex justify-center"><div className="max-w-xl text-left"><div className="inline-block rounded-full px-3 py-1 text-sm" style={{ background: `${COLORS.secondary}22`, color: COLORS.white }}>{title.split(" ")[0]}</div><h3 className="mt-4 text-3xl font-bold" style={{ color: COLORS.white }}>{title}</h3><p className="mt-4 text-lg text-gray-300">{desc}</p><div className="mt-6 flex gap-3"><a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Learn More</a></div></div></div></> : <><div className="md:col-span-6 flex justify-center"><div className="max-w-xl text-left"><div className="inline-block rounded-full px-3 py-1 text-sm" style={{ background: `${COLORS.secondary}22`, color: COLORS.white }}>{title.split(" ")[0]}</div><h3 className="mt-4 text-3xl font-bold" style={{ color: COLORS.white }}>{title}</h3><p className="mt-4 text-lg text-gray-300">{desc}</p><div className="mt-6 flex gap-3"><a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Learn More</a></div></div></div><div className="md:col-span-6 flex justify-center"><div className="rounded-2xl shadow-lg" style={{ background: COLORS.card, maxWidth: '360px' }}>{getSVG()}</div></div></>}
      </div></div>
    </section>
  );
};

const GCP: React.FC = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => { const onScroll = () => { const scrolled = window.scrollY; const height = document.documentElement.scrollHeight - window.innerHeight; setProgress((scrolled / height) * 100); }; window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);
  return (<div className="w-full bg-black text-white overflow-x-hidden"><TopNav progress={progress} /><HeroSection />{services.map((s, i) => <SplitSection key={s.id} idx={i} {...s} />)}<footer className="py-8" style={{ background: COLORS.bg }}><div className="container mx-auto px-6 text-center text-sm" style={{ color: COLORS.textMuted }}>© {new Date().getFullYear()} Axonary — Google Cloud Innovation</div></footer></div>);
};

export default GCP;
