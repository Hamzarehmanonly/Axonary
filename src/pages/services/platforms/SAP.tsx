// SAP.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SAPSVG } from "../../../components/IndustriesSVGs.js";

const COLORS = {
  primary: "#0F7FDC",
  secondary: "#00B8D4",
  bg: "#000000",
  card: "#0b0b0d",
  textMuted: "#BDB7D6",
  white: "#FFFFFF",
};

const services = [
  { id: "sap-s4hana", title: "SAP S/4HANA Implementation", desc: "Modernize your enterprise with SAP S/4HANA's intelligent ERP suite and real-time analytics capabilities." },
  { id: "cloud-solutions", title: "SAP Cloud Solutions", desc: "Deploy SAP SuccessFactors, Ariba, Concur, and other cloud applications for digital business transformation." },
  { id: "analytics-reporting", title: "SAP Analytics & Reporting", desc: "Build comprehensive business intelligence solutions with SAP Analytics Cloud and embedded analytics." },
  { id: "integration-services", title: "SAP Integration Services", desc: "Connect SAP systems with third-party applications using SAP Cloud Platform Integration and APIs." },
  { id: "support-maintenance", title: "SAP Support & Maintenance", desc: "Provide ongoing SAP system support, performance optimization, and technical maintenance services." },
];

const TopNav: React.FC<{ progress: number }> = ({ progress }) => (
  <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm" style={{ background: "rgba(0,0,0,0.45)", borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
    <div className="container mx-auto px-6 flex items-center justify-between h-16">
      <div className="flex items-center gap-3">
        <div style={{ width: 44, height: 44, borderRadius: 10, background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})` }} />
        <div><div className="text-sm font-bold" style={{ color: COLORS.white }}>Axonary</div><div className="text-xs" style={{ color: COLORS.textMuted }}>SAP Solutions</div></div>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
        <a href="#sap-s4hana" className="hover:text-white">S/4HANA</a><a href="#cloud-solutions" className="hover:text-white">Cloud</a><a href="#analytics-reporting" className="hover:text-white">Analytics</a><a href="#integration-services" className="hover:text-white">Integration</a><a href="#support-maintenance" className="hover:text-white">Support</a>
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
          <div className="inline-block rounded-full px-4 py-1 text-sm font-medium" style={{ background: `${COLORS.secondary}33`, color: COLORS.white }}>Intelligent • Integrated • Future-Ready</div>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">SAP <span style={{ color: COLORS.primary }}>Intelligence</span></h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">Transform your business processes with SAP's intelligent enterprise solutions and cloud-first approach.</p>
          <div className="mt-6 flex items-center gap-4">
            <a href="#sap-s4hana" className="px-6 py-3 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Explore Services</a>
            <a href="/contact" className="px-5 py-3 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>Request Demo</a>
          </div>
        </div>
      </div>
      <div className="md:col-span-5"><div className="rounded-2xl p-6" style={{ background: COLORS.card }}><SAPSVG width={360} height={360} /></div></div>
    </div>
  </section>
);

const SplitSection: React.FC<{ idx: number; id: string; title: string; desc: string; }> = ({ idx, id, title, desc }) => {
  const getSVG = () => [<SAPSVG width={360} height={360} />, <SAPSVG width={360} height={360} />, <SAPSVG width={360} height={360} />, <SAPSVG width={360} height={360} />, <SAPSVG width={360} height={360} />][idx];
  const isLeft = idx % 2 === 0;
  return (
    <section id={id} className="py-20" style={{ background: COLORS.bg }}>
      <div className="container mx-auto px-6"><div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {isLeft ? <><div className="md:col-span-6 flex justify-center"><div className="rounded-2xl shadow-lg" style={{ background: COLORS.card, maxWidth: '360px' }}>{getSVG()}</div></div><div className="md:col-span-6 flex justify-center"><div className="max-w-xl text-left"><div className="inline-block rounded-full px-3 py-1 text-sm" style={{ background: `${COLORS.secondary}22`, color: COLORS.white }}>{title.split(" ")[0]}</div><h3 className="mt-4 text-3xl font-bold" style={{ color: COLORS.white }}>{title}</h3><p className="mt-4 text-lg text-gray-300">{desc}</p><div className="mt-6 flex gap-3"><a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Learn More</a></div></div></div></> : <><div className="md:col-span-6 flex justify-center"><div className="max-w-xl text-left"><div className="inline-block rounded-full px-3 py-1 text-sm" style={{ background: `${COLORS.secondary}22`, color: COLORS.white }}>{title.split(" ")[0]}</div><h3 className="mt-4 text-3xl font-bold" style={{ color: COLORS.white }}>{title}</h3><p className="mt-4 text-lg text-gray-300">{desc}</p><div className="mt-6 flex gap-3"><a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Learn More</a></div></div></div><div className="md:col-span-6 flex justify-center"><div className="rounded-2xl shadow-lg" style={{ background: COLORS.card, maxWidth: '360px' }}>{getSVG()}</div></div></>}
      </div></div>
    </section>
  );
};

const SAP: React.FC = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => { const onScroll = () => { const scrolled = window.scrollY; const height = document.documentElement.scrollHeight - window.innerHeight; setProgress((scrolled / height) * 100); }; window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);
  return (<div className="w-full bg-black text-white overflow-x-hidden"><TopNav progress={progress} /><HeroSection />{services.map((s, i) => <SplitSection key={s.id} idx={i} {...s} />)}<footer className="py-8" style={{ background: COLORS.bg }}><div className="container mx-auto px-6 text-center text-sm" style={{ color: COLORS.textMuted }}>© {new Date().getFullYear()} Axonary — SAP Intelligence</div></footer></div>);
};

export default SAP;
