import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function buildChunk(c) {
  return `const Hero: React.FC = () => (
  <section
    id="hero"
    className="min-h-[72vh] flex items-center"
    style={{ background: COLORS.bg, color: COLORS.white }}
  >
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
      <div className="md:col-span-7">
        <div className="inline-block rounded-full px-4 py-1 text-sm font-medium" style={{ background: \`\${COLORS.secondary}33\`, color: COLORS.white }}>
          ${c.badge}
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
          ${c.h1}
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl">
          ${c.paragraph}
        </p>
        <div className="mt-6 flex items-center gap-4">
          <a href="${c.anchor}" className="px-6 py-3 rounded-full font-semibold inline-flex items-center gap-3" style={{ background: COLORS.primary, color: COLORS.white }}>
            Explore Services
          </a>
          <a href="/contact" className="px-5 py-3 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>
            Request Consultation
          </a>
        </div>
      </div>
      <div className="md:col-span-5">
        <div className="rounded-2xl p-6" style={{ background: COLORS.card }}>
          <h5 className="text-sm text-gray-400">${c.cardTitle}</h5>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
              <div className="text-2xl font-bold">${c.s1v}</div>
              <div className="text-xs text-gray-400">${c.s1l}</div>
            </div>
            <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
              <div className="text-2xl font-bold">${c.s2v}</div>
              <div className="text-xs text-gray-400">${c.s2l}</div>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-sm text-gray-300">${c.cta}</p>
            <div className="mt-4">
              <a href="/contact" className="inline-block px-4 py-2 rounded-full" style={{ background: COLORS.primary, color: COLORS.white }}>Schedule Consultation</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SplitSection: React.FC<{ idx: number; id: string; title: string; desc: string }> = ({ idx, id, title, desc }) => {
  const isLeftImage = idx % 2 === 0;
  const Placeholder: React.FC = () => (
    <div
      className="rounded-2xl shadow-lg w-full overflow-hidden flex items-center justify-center text-sm font-medium"
      style={{ background: COLORS.card, aspectRatio: "1", maxWidth: "360px", color: COLORS.textMuted }}
    >
      {title.split(" ")[0]}
    </div>
  );
  return (
    <section id={id} className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-stretch">
          {isLeftImage ? (
            <>
              <div className="md:col-span-6 flex items-center justify-center">
                <Placeholder />
              </div>
              <div className="md:col-span-6 flex items-center">
                <div className="max-w-xl w-full">
                  <div className="inline-block rounded-full px-3 py-1 text-sm font-medium" style={{ background: \`\${COLORS.secondary}22\`, color: COLORS.white }}>
                    {title.split(" ")[0]}
                  </div>
                  <h3 className="mt-4 text-2xl md:text-3xl font-bold" style={{ color: COLORS.white }}>
                    {title}
                  </h3>
                  <p className="mt-4 text-lg text-gray-300">{desc}</p>
                  <div className="mt-6 flex items-center gap-3">
                    <a href={\`/\${id}\`} className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>
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
                  <div className="inline-block rounded-full px-3 py-1 text-sm font-medium" style={{ background: \`\${COLORS.secondary}22\`, color: COLORS.white }}>
                    {title.split(" ")[0]}
                  </div>
                  <h3 className="mt-4 text-2xl md:text-3xl font-bold" style={{ color: COLORS.white }}>
                    {title}
                  </h3>
                  <p className="mt-4 text-lg text-gray-300">{desc}</p>
                  <div className="mt-6 flex items-center gap-3">
                    <a href={\`/\${id}\`} className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>
                      Learn More
                    </a>
                    <a href="/contact" className="px-4 py-2 rounded-full border border-[rgba(255,255,255,0.06)]" style={{ color: COLORS.textMuted }}>
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 flex items-center justify-center">
                <Placeholder />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};


`;
}

const pages = {
  FrontendSolution: {
    rel: "src/pages/services/web-development/FrontendSolution.tsx",
    anchor: "#frontend-design",
    badge: "Beautiful • Lightning-Fast • Inclusive",
    h1: `Frontend Development <span style={{ color: COLORS.primary }}>| Axonary</span>`,
    paragraph:
      "Make your first impression unforgettable. At Axonary, we engineer frontends that do not just look amazing—they feel alive. From pixel-perfect design to seamless performance, we turn your vision into a digital experience that wows, engages, and converts on every device.",
    cardTitle: "Frontend Impact",
    s1v: "600+",
    s1l: "Projects Delivered",
    s2v: "95%",
    s2l: "Performance Score",
    cta: "Ready to launch a frontend that sets you apart? Let&apos;s build brilliance together.",
  },
  BackendSolution: {
    rel: "src/pages/services/web-development/BackendSolution.tsx",
    anchor: "#backend-architecture",
    badge: "Scalable • Secure • Reliable",
    h1: `Backend Development <span style={{ color: COLORS.primary }}>| Axonary</span>`,
    paragraph:
      "Power your product with backends built for scale. We design APIs, databases, and services that stay fast under load, protect your data, and integrate cleanly with the rest of your stack.",
    cardTitle: "Backend Impact",
    s1v: "400+",
    s1l: "APIs Shipped",
    s2v: "99.9%",
    s2l: "Uptime Target",
    cta: "Ready for infrastructure you can trust? Let&apos;s architect your backend together.",
  },
  FullstackSolution: {
    rel: "src/pages/services/web-development/FullstackSolution.tsx",
    anchor: "#fullstack-planning",
    badge: "End-to-End • Cohesive • Fast",
    h1: `Full-Stack Development <span style={{ color: COLORS.primary }}>| Axonary</span>`,
    paragraph:
      "One team, one vision—from database to UI. We deliver full-stack products with aligned architecture, shared types, and a single roadmap so features ship faster with fewer gaps.",
    cardTitle: "Full-Stack Delivery",
    s1v: "350+",
    s1l: "Products Launched",
    s2v: "One",
    s2l: "Unified Team",
    cta: "Ready to build the whole product in one motion? Let&apos;s talk full stack.",
  },
};

for (const key of Object.keys(pages)) {
  const cfg = pages[key];
  const filePath = path.join(root, cfg.rel);
  let s = fs.readFileSync(filePath, "utf8");
  const start = s.indexOf("const services2 = [");
  if (start < 0) {
    console.warn("skip (no services2):", key);
    continue;
  }
  const end = s.indexOf("\nconst FooterCTA:");
  if (end < 0) throw new Error("FooterCTA not found: " + key);
  const chunk = buildChunk(cfg);
  s = s.slice(0, start) + chunk + "\n" + s.slice(end);
  fs.writeFileSync(filePath, s);
  console.log("fixed", key);
}

const MAIN_START = "const MainPage: React.FC = () => {";

const mainPageFiles = [
  {
    rel: "src/pages/services/web-development/EcommerceSolution.tsx",
    anchor: "#ecom-storefront",
    badge: "Unleash Growth • Inspire Loyalty • Dominate Online",
    h1: `E-Commerce Solutions <span style={{ color: COLORS.primary }}>| Axonary</span>`,
    paragraph:
      "Transform your vision into a thriving digital marketplace. At Axonary, we build online stores and unforgettable shopping journeys—from bold storefronts to seamless checkouts—so your brand can lead, inspire, and sell at scale.",
    cardTitle: "E-Commerce Impact",
    s1v: "500+",
    s1l: "Stores Launched",
    s2v: "250%",
    s2l: "Avg. Client Growth",
    cta: "Ready to make your mark in e-commerce? Let&apos;s build something legendary together.",
  },
  {
    rel: "src/pages/services/web-development/WebPortalsSolution.tsx",
    anchor: "#portal-design",
    badge: "Connected • Secure • Limitless",
    h1: `Web Portals Solutions <span style={{ color: COLORS.primary }}>| Axonary</span>`,
    paragraph:
      "Open the gateway to digital transformation. At Axonary, we build web portals that empower communities, streamline operations, and spark engagement at every touchpoint. Whether you are connecting teams, customers, or partners, our portals are engineered for impact, security, and scale.",
    cardTitle: "Portal Impact",
    s1v: "800+",
    s1l: "Portals Deployed",
    s2v: "99.9%",
    s2l: "Uptime Guarantee",
    cta: "Ready to create a portal that powers your vision? Let&apos;s make it happen together.",
  },
  {
    rel: "src/pages/services/web-development/LowCodeSolution.tsx",
    anchor: "#lowcode-velocity",
    badge: "Fast • Cost-Effective • Scalable",
    h1: `Low-Code Development <span style={{ color: COLORS.primary }}>| Axonary</span>`,
    paragraph:
      "Accelerate time-to-market without sacrificing quality or flexibility. We leverage low-code platforms to build sophisticated applications in record time, then inject custom logic where innovation matters most. Launch faster, iterate smarter, and adapt without the traditional constraints of custom development.",
    cardTitle: "Low-Code Impact",
    s1v: "300+",
    s1l: "Apps Delivered",
    s2v: "70%",
    s2l: "Time Saved",
    cta: "Ready to build faster and smarter? Let&apos;s make it happen together.",
  },
];

for (const cfg of mainPageFiles) {
  const filePath = path.join(root, cfg.rel);
  let s = fs.readFileSync(filePath, "utf8");
  const start = s.indexOf(MAIN_START);
  const end = s.indexOf("\nconst FooterCTA:");
  if (start < 0 || end < 0) throw new Error(`main splice failed ${cfg.rel} start=${start} end=${end}`);
  const { rel, ...heroCfg } = cfg;
  const chunk = buildChunk(heroCfg);
  s = s.slice(0, start) + chunk + "\n" + s.slice(end);
  fs.writeFileSync(filePath, s);
  console.log("main fixed", rel);
}
