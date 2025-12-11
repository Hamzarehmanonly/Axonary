import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  JavaDeveloperSVG,
  SpringBootSVG,
  MicroservicesSVG,
  OraclePostgresSVG,
  KubernetesJavaSVG,
} from "../../components/StaffSectionSVGs";

const COLORS = {
  primary: "#5C3693",
  secondary: "#472A71",
  backgroundColor: "#000000",
  cardBg: "#0b0b0d",
  textMuted: "#BDB7D6",
  white: "#FFFFFF",
};

const sections = [
  {title: "Enterprise Java Development", description: "Build robust, scalable enterprise applications with Java. Our developers leverage Spring, Spring Boot for production-grade systems handling millions of transactions.", imgQuery: "java enterprise programming backend", features: ["Spring Framework", "Enterprise Solutions", "Scalable Architecture"]},
  {title: "Microservices & Architecture", description: "Design and implement microservices using Spring Cloud, Apache Kafka. Build systems that scale horizontally with minimal overhead and distributed architecture patterns.", imgQuery: "microservices architecture distributed systems", features: ["Microservices Design", "Spring Cloud", "Kafka Messaging"]},
  {title: "Database Integration & Optimization", description: "Expert integration with Oracle, PostgreSQL, MySQL, MongoDB. Optimize queries, implement connection pooling, and ensure data consistency in high-throughput systems.", imgQuery: "database optimization sql java integration", features: ["Database Design", "Query Optimization", "JPA/Hibernate"]},
  {title: "Cloud Deployment & DevOps", description: "Deploy Java applications on AWS, Azure, Google Cloud using Docker, Kubernetes, and automated CI/CD pipelines. Ensure high availability and zero-downtime deployments.", imgQuery: "cloud deployment kubernetes docker devops", features: ["Cloud Infrastructure", "Kubernetes", "CI/CD Pipelines"]}
];

const HireJavaDeveloper = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const getSectionSVG = (idx: number) => {
    const svgs = [SpringBootSVG, MicroservicesSVG, OraclePostgresSVG, KubernetesJavaSVG];
    return svgs[idx % svgs.length];
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
      <header 
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{ background: "rgba(0,0,0,0.7)", borderColor: "rgba(255,255,255,0.03)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold" style={{ color: COLORS.primary }}>
            Axonary
          </Link>
          <nav className="flex gap-8 text-xs md:text-sm">
            <a href="#hero" className="hover:text-purple-400 transition">Home</a>
            <a href="#services" className="hover:text-purple-400 transition">Services</a>
            <a href="#why-us" className="hover:text-purple-400 transition">Why Us</a>
            <Link to="/contact" className="px-4 py-2 rounded-full" style={{background: COLORS.primary, color: COLORS.white}}>
              Hire Now
            </Link>
          </nav>
        </div>
        {isSticky && <div className="h-1" style={{background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary})`, width: `${scrollProgress}%`, transition: "width 120ms linear"}} />}
      </header>

      <section id="hero" className="min-h-screen flex items-center pt-24" style={{background: COLORS.backgroundColor}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-full px-4 py-1 text-sm font-medium mb-6" style={{background: `${COLORS.secondary}33`, color: COLORS.white}}>Expert Developers • Enterprise Java • Certified Team</div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">Hire Java<span style={{color: COLORS.primary}}> Developers</span></h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">Build enterprise-grade applications with Java. Our developers specialize in Spring Framework, microservices, and cloud-native architectures. 50+ successful projects.</p>
              <div className="flex gap-4">
                <Link to="/contact" className="px-8 py-3 rounded-lg font-semibold" style={{background: COLORS.primary, color: COLORS.white}}>Start Project</Link>
                <a href="#services" className="px-8 py-3 rounded-lg font-semibold border" style={{borderColor: COLORS.primary, color: COLORS.primary}}>Learn More</a>
              </div>
            </div>
            <div className="flex justify-center">
              {React.createElement(JavaDeveloperSVG, {
                width: 400,
                height: 400,
                className: "w-full max-w-md"
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="services" style={{background: COLORS.backgroundColor}}>
        {sections.map((section, idx) => {
          const isLeftImage = idx % 2 === 0;
          return (
            <div key={idx} className="py-20 md:py-28 border-b border-gray-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  {isLeftImage ? (
                    <>
                      <div className="flex justify-center">
                        {React.createElement(getSectionSVG(idx), {
                          width: 400,
                          height: 400,
                          className: "w-full max-w-md"
                        })}
                      </div>
                      <div className="flex justify-center">
                        <div style={{textAlign: "left"}}>
                          <div className="inline-block rounded-full px-4 py-1 text-sm font-medium mb-4" style={{background: `${COLORS.secondary}33`, color: COLORS.white}}>Expert Feature</div>
                          <h3 className="text-4xl font-bold mb-6">{section.title}</h3>
                          <p className="text-lg text-gray-300 mb-8">{section.description}</p>
                          <div className="space-y-3">{section.features.map((feature, i) => (<div key={i} className="flex items-center gap-3"><span style={{color: COLORS.primary}} className="text-xl">✓</span><span className="text-gray-300">{feature}</span></div>))}</div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-center">
                        <div style={{textAlign: "left"}}>
                          <div className="inline-block rounded-full px-4 py-1 text-sm font-medium mb-4" style={{background: `${COLORS.secondary}33`, color: COLORS.white}}>Expert Feature</div>
                          <h3 className="text-4xl font-bold mb-6">{section.title}</h3>
                          <p className="text-lg text-gray-300 mb-8">{section.description}</p>
                          <div className="space-y-3">{section.features.map((feature, i) => (<div key={i} className="flex items-center gap-3"><span style={{color: COLORS.primary}} className="text-xl">✓</span><span className="text-gray-300">{feature}</span></div>))}</div>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        {React.createElement(getSectionSVG(idx), {
                          width: 400,
                          height: 400,
                          className: "w-full max-w-md"
                        })}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <section id="why-us" className="py-20 md:py-28" style={{background: COLORS.backgroundColor}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16"><h2 className="text-5xl font-bold mb-6">Why Choose Our Java Developers?</h2><p className="text-lg text-gray-400">Expert team with proven track record in enterprise application development</p></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">{[{title: "Enterprise Experts", desc: "20+ years combined experience"}, {title: "Spring Masters", desc: "Spring Framework & Spring Boot specialists"}, {title: "High Performance", desc: "Scalable systems handling millions of users"}, {title: "Microservices Gurus", desc: "Distributed architecture experts"}, {title: "Cloud Native", desc: "AWS, Azure, Google Cloud proficiency"}, {title: "DevOps Ready", desc: "Docker, Kubernetes, CI/CD expertise"}].map((item, idx) => (<div key={idx} className="p-8 rounded-xl border" style={{borderColor: `${COLORS.primary}33`, backgroundColor: `${COLORS.cardBg}cc`}}><h4 className="text-xl font-bold mb-3" style={{color: COLORS.primary}}>{item.title}</h4><p className="text-gray-300">{item.desc}</p></div>))}</div>
        </div>
      </section>

      <section id="cta" className="py-20 md:py-28" style={{background: `${COLORS.primary}10`}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Build Your Java Application?</h2>
          <p className="text-xl text-gray-300 mb-12">Our expert Java developers will create scalable, secure, enterprise-grade solutions for your business.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact" className="px-8 py-4 rounded-lg font-semibold text-lg inline-block" style={{background: COLORS.primary, color: COLORS.white}}>Start Your Project</Link>
            <a href="#services" className="px-8 py-4 rounded-lg font-semibold text-lg border inline-block" style={{borderColor: COLORS.primary, color: COLORS.primary}}>Explore Services</a>
          </div>
        </div>
      </section>

      <div className="fixed bottom-8 right-8 z-40">
        <Link to="/contact" className="px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition inline-block" style={{backgroundColor: COLORS.primary, color: "white"}}>Hire Now</Link>
      </div>
    </div>
  );
};

export default HireJavaDeveloper;
