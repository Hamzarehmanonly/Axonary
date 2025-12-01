// ReactNativeAppDevelopment.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    id: "react-native",
    title: "React Native Expertise",
    desc:
      "Build iOS and Android apps using JavaScript and React. Leverage existing React knowledge for mobile development.",
    imgQuery: "react native development",
  },
  {
    id: "javascript-power",
    title: "JavaScript Ecosystem",
    desc:
      "Access millions of npm packages. Build complex features with proven JavaScript libraries and tools.",
    imgQuery: "javascript programming",
  },
  {
    id: "native-modules",
    title: "Native Module Integration",
    desc:
      "Seamless integration with native code when needed. Direct access to platform-specific APIs and features.",
    imgQuery: "api integration",
  },
  {
    id: "rn-performance",
    title: "High Performance",
    desc:
      "Fast app startup times and smooth 60 FPS animations. Optimized for both iOS and Android platforms.",
    imgQuery: "performance optimization",
  },
  {
    id: "rn-libraries",
    title: "Rich Component Library",
    desc:
      "Pre-built components for common UI patterns. Redux, Navigation, and UI libraries ready to use.",
    imgQuery: "software development",
  },
  {
    id: "rn-deployment",
    title: "Easy Deployment & Updates",
    desc:
      "Deploy updates over-the-air with CodePush. Faster release cycles and immediate bug fixes.",
    imgQuery: "app deployment",
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
              React Native Development
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
          <a href="#react-native" className="hover:text-white">React Native</a>
          <a href="#javascript-power" className="hover:text-white">JavaScript</a>
          <a href="#native-modules" className="hover:text-white">Modules</a>
          <a href="#rn-performance" className="hover:text-white">Performance</a>
          <a href="#rn-libraries" className="hover:text-white">Libraries</a>
          <a href="#rn-deployment" className="hover:text-white">Deployment</a>
          <Link to="/contact" className="ml-4 inline-block px-4 py-2 rounded-full" style={{ background: COLORS.primary, color: COLORS.white }}>
            Book a Call
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
            JavaScript-Powered • Cross-Platform • Fast
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            React Native App Development{" "}
            <span style={{ color: COLORS.primary }}>| Axonary</span>
          </h1>

          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Leverage JavaScript and React skills to build iOS and Android apps. Access millions of npm packages and develop faster than ever.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <a href="#react-native" className="px-6 py-3 rounded-full font-semibold inline-flex items-center gap-3" style={{ background: COLORS.primary, color: COLORS.white }}>
              Explore Services
            </a>
            <a href="/contact" className="px-5 py-3 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>
              Request Consultation
            </a>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="rounded-2xl p-6" style={{ background: COLORS.card }}>
            <h5 className="text-sm text-gray-400">React Native Stats</h5>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">80+</div>
                <div className="text-xs text-gray-400">RN Apps Built</div>
              </div>
              <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
                <div className="text-2xl font-bold">35%</div>
                <div className="text-xs text-gray-400">Faster Dev</div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-300">Want to use JavaScript for mobile? Let's build amazing React Native apps.</p>
              <div className="mt-4">
                <a href="/contact" className="inline-block px-4 py-2 rounded-full" style={{ background: COLORS.primary, color: COLORS.white }}>Schedule Consultation</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MobilePhoneMockup: React.FC<{ image: string; title: string }> = ({ image, title }) => {
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <div className="flex items-center justify-center">
      <div className="relative" style={{ width: "320px", height: "640px" }}>
        <div
          className="absolute inset-0 rounded-[40px] shadow-2xl"
          style={{
            background: "linear-gradient(135deg, #0f0f0f 0%, #050505 100%)",
            boxShadow: "0 0 80px rgba(92, 54, 147, 0.35), inset 0 0 40px rgba(0,0,0,0.9), 0 25px 50px rgba(0,0,0,0.7)",
            borderWidth: "14px",
            borderStyle: "solid",
            borderColor: "#0a0a0a",
          }}
        >
          <div className="absolute inset-0 rounded-[36px] overflow-hidden" style={{ margin: "2px" }}>
            {imageLoaded ? (
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover"
                onError={() => setImageLoaded(false)}
              />
            ) : (
              <div className="w-full h-full" style={{ background: "linear-gradient(-90deg, #1a1a1a 25%, #2a2a2a 50%, #1a1a1a 75%)", backgroundSize: "200% 100%", animation: "shimmer 2s infinite" }}>
                <style>{`
                  @keyframes shimmer {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                  }
                `}</style>
                <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-6">
                  <div className="w-3/4 h-8 rounded" style={{ background: "#2a2a2a" }} />
                  <div className="w-full space-y-3">
                    <div className="w-full h-4 rounded" style={{ background: "#2a2a2a" }} />
                    <div className="w-5/6 h-4 rounded" style={{ background: "#2a2a2a" }} />
                  </div>
                  <div className="w-full space-y-3 mt-6">
                    <div className="w-full h-4 rounded" style={{ background: "#2a2a2a" }} />
                    <div className="w-4/5 h-4 rounded" style={{ background: "#2a2a2a" }} />
                  </div>
                  <div className="w-2/3 h-10 rounded-full mt-6" style={{ background: "#2a2a2a" }} />
                  <div className="w-full flex gap-3 mt-6">
                    <div className="flex-1 h-16 rounded" style={{ background: "#2a2a2a" }} />
                    <div className="flex-1 h-16 rounded" style={{ background: "#2a2a2a" }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 rounded-b-3xl"
            style={{
              width: "160px",
              height: "32px",
              background: "#000000",
              boxShadow: "0 2px 10px rgba(0,0,0,0.6)",
            }}
          />

          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-full"
            style={{
              width: "110px",
              height: "6px",
              background: "#050505",
              zIndex: 5,
            }}
          />
        </div>

        <div
          className="absolute inset-0 rounded-[40px] blur-3xl opacity-60"
          style={{
            background: `linear-gradient(135deg, ${COLORS.primary}55, ${COLORS.secondary}33)`,
            zIndex: -1,
          }}
        />
      </div>
    </div>
  );
};

const SplitSection: React.FC<{ idx: number; id: string; title: string; desc: string; imgQuery: string; }> = ({ idx, id, title, desc, imgQuery }) => {
  const isLeftImage = idx % 2 === 0;
  const image = unsplashSrc(imgQuery);

  return (
    <section id={id} className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-stretch">
          {isLeftImage ? (
            <>
              <div className="md:col-span-6 flex items-center justify-center">
                <MobilePhoneMockup image={image} title={title} />
              </div>

              <div className="md:col-span-6 flex items-center">
                <div className="max-w-xl w-full">
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
              <div className="md:col-span-6 flex items-center">
                <div className="max-w-xl w-full">
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
                <MobilePhoneMockup image={image} title={title} />
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
          <div className="text-sm font-semibold" style={{ color: COLORS.white }}>Ready to build with React Native?</div>
          <div className="text-xs" style={{ color: COLORS.textMuted }}>Let's bring your JavaScript skills to mobile.</div>
        </div>

        <div className="flex items-center gap-3">
          <a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Get in Touch</a>
          <a href="/work" className="px-3 py-2 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>Portfolio</a>
        </div>
      </div>
    </div>
  );
};

const ReactNativeAppDevelopment: React.FC = () => {
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

        <div style={{ height: 160 }} />
      </main>

      <FooterCTA />

      <footer className="mt-20 py-10">
        <div className="container mx-auto px-6 text-center text-sm" style={{ color: COLORS.textMuted }}>
          © {new Date().getFullYear()} Axonary — React Native Excellence. Always.
        </div>
      </footer>
    </div>
  );
};

export default ReactNativeAppDevelopment;
