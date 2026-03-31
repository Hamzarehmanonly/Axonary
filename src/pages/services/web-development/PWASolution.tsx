// PWASolution.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MobileServiceHero } from "../../../components/MobileServiceHero";
import { MobileServiceGovernanceSections } from "../../../components/MobileServiceGovernanceSections";
import { webGovernancePWA } from "../../../data/webServiceGovernanceContent";

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
    id: "pwa-architecture",
    title: "Progressive Web App Architecture",
    desc:
      "We architect next-gen progressive web apps that blur the line between web and native. Our PWAs are engineered for speed, reliability, and a seamless, app-like experience—online or off. Service workers enable offline functionality. Smart caching reduces network requests. Push notifications engage users even when the app is closed. Home screen installation creates the appearance of native apps. The result: applications that feel native, install instantly without app stores, and work reliably even on spotty internet connections.",
    imgQuery: "progressive web app",
  },
  {
    id: "pwa-offline",
    title: "Offline Functionality & Sync",
    desc:
      "Always available, even without internet. We implement offline-first architectures that cache data locally. Users continue working offline—composing emails, editing documents, adding items to lists. When connectivity returns, changes sync automatically. Conflict resolution handles edits made offline and online. The result: applications that never feel broken, adapting gracefully to connectivity rather than failing without it.",
    imgQuery: "offline first",
  },
  {
    id: "pwa-performance",
    title: "Lightning-Fast Loading & Performance",
    desc:
      "Every millisecond matters. We optimize PWAs ruthlessly—code splitting reduces initial load to under 3 seconds on 3G. Service workers cache assets for instant subsequent loads. Image optimization serves perfectly-sized images to each device. Lazy loading enables infinite scrolling without slowdowns. Performance budgets prevent regression. The result: applications that load faster than competitors while consuming less bandwidth, delighting users with speed.",
    imgQuery: "web performance",
  },
  {
    id: "pwa-installation",
    title: "Seamless Installation & App Shelf",
    desc:
      "Users install your app like native apps—no app store required. Install prompts appear naturally when users are engaged. Installable manifests customize icons, splash screens, and themes. Home screen shortcuts simplify access. The result: better user retention as your app gets prime real estate on users' home screens, creating daily habits.",
    imgQuery: "app installation",
  },
  {
    id: "pwa-engagement",
    title: "Push Notifications & Engagement",
    desc:
      "Stay connected even when the app is closed. We implement web push notifications that engage users at the right moment—sales updates, order statuses, friend requests, personalized recommendations. Notifications adapt based on user preferences and timezone. Click-through rates far exceed email. The result: a direct channel to users' attention, consistently driving engagement and revenue.",
    imgQuery: "push notifications",
  },
  {
    id: "pwa-security",
    title: "Security & Privacy by Default",
    desc:
      "HTTPS-only delivery ensures communications can't be intercepted. Service worker security prevents man-in-the-middle attacks. Secure authentication protects user accounts. Privacy-respecting tracking respects user choice. The result: PWAs so secure and private users trust them with sensitive data and information.",
    imgQuery: "cybersecurity",
  },
];

// --- Testimonials Section ---
const TESTIMONIALS = [
  {
    name: "Priya S.",
    title: "E-commerce Founder",
    quote:
      "Install prompts and offline behavior were spelled out in UX terms we could test—users understood when content was stale versus broken.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Mark T.",
    title: "Product Lead",
    quote:
      "Push and caching policies were not magic defaults; Axonary tied them to our content freshness rules.",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
  },
];

const TestimonialsSection: React.FC = () => (
  <section className="py-20 md:py-28 bg-black/60">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center" style={{ color: COLORS.white }}>
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {TESTIMONIALS.map((t) => (
          <div key={t.name} className="rounded-xl p-6 shadow-lg flex flex-col items-center bg-[#18181b]">
            <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full mb-4" />
            <div className="text-lg font-semibold mb-2" style={{ color: COLORS.white }}>{t.name}</div>
            <div className="text-xs mb-2" style={{ color: COLORS.textMuted }}>{t.title}</div>
            <div className="italic text-center text-gray-300">"{t.quote}"</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- FAQ Section ---
const FAQS = [
  {
    q: "How is a PWA different from a native app for our users?",
    a: "PWAs install from the browser, update via the web, and reuse your existing web stack—great when store friction or dual codebases are the problem; native still wins for some hardware APIs.",
  },
  {
    q: "How do you handle offline and cache invalidation?",
    a: "We define cache names, precache vs runtime strategies, and user-visible freshness—so offline mode is predictable, not silently wrong.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes—service worker updates, push certificate rotation, and compatibility as browsers evolve.",
  },
  {
    q: "Will push notifications work everywhere?",
    a: "We map platform support (especially iOS constraints), permission UX, and fallback comms so you do not promise alerts you cannot deliver.",
  },
  {
    q: "What makes Axonary different on PWAs?",
    a: "We treat the service worker as production infrastructure—versioned, tested, and observable—not a single copied recipe.",
  },
];

const FAQSection: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-20 md:py-28 bg-black/70">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center" style={{ color: COLORS.white }}>
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={faq.q} className="border-b border-gray-700 pb-4">
              <button
                className="w-full text-left flex justify-between items-center text-lg font-medium focus:outline-none"
                style={{ color: COLORS.white }}
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                {faq.q}
                <span className="ml-2 text-xl">{open === idx ? '-' : '+'}</span>
              </button>
              {open === idx && (
                <div className="mt-2 text-gray-300 text-base">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Footer CTA Section ---
const FooterConsultCTA: React.FC = () => (
  <section className="py-16 bg-gradient-to-r from-[#5C3693]/80 to-[#472A71]/80">
    <div className="container mx-auto px-6 flex flex-col items-center justify-center text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: COLORS.white }}>
        Ready to plan installable web and offline behavior?
      </h2>
      <p className="mb-6 text-lg text-gray-200 max-w-2xl">
        Share caching, freshness, and notification goals—we will design service worker strategy and cross-browser validation.
      </p>
      <Link
        to="/contact"
        className="px-8 py-3 rounded-full font-semibold bg-white text-[#5C3693] hover:bg-gray-200 transition"
        style={{ boxShadow: '0 2px 16px 0 rgba(92,54,147,0.10)' }}
      >
        Get Your Free Consultation
      </Link>
    </div>
  </section>
);

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
              PWA Excellence
            </div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: COLORS.textMuted }}>
          <a href="#pwa-architecture" className="hover:text-white">Architecture</a>
          <a href="#pwa-offline" className="hover:text-white">Offline</a>
          <a href="#pwa-performance" className="hover:text-white">Performance</a>
          <a href="#pwa-engagement" className="hover:text-white">Engagement</a>
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
                <Placeholder />
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
          <div className="text-sm font-semibold" style={{ color: COLORS.white }}>Ready to go progressive?</div>
          <div className="text-xs" style={{ color: COLORS.textMuted }}>Build your next-gen PWA.</div>
        </div>
        <div className="flex items-center gap-3">
          <a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary, color: COLORS.white }}>Get in Touch</a>
          <a href="/work" className="px-3 py-2 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>Portfolio</a>
        </div>
      </div>
    </div>
  );
};

const PWASolution: React.FC = () => {
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
        <MobileServiceHero colors={COLORS} hero={webGovernancePWA.hero} />
        <MobileServiceGovernanceSections colors={COLORS} copy={webGovernancePWA} />
        <div className="mt-8">
          {services.map((s, idx) => (
            <SplitSection key={s.id} idx={idx} id={s.id} title={s.title} desc={s.desc} />
          ))}
        </div>
        <TestimonialsSection />
        <FAQSection />
        <FooterConsultCTA />

        <div style={{ height: 160 }} />
      </main>
      <FooterCTA />
    </div>
  );
};

export default PWASolution;
