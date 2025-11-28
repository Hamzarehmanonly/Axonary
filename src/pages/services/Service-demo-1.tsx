// Service-demo-1.tsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

/**
 * Epic Services Page - Service-demo-1.tsx
 * Single page, scroll sections, hybrid dark premium theme (Axonary)
 *
 * Notes:
 * - Static sections for 6 service pillars (user's main title used verbatim).
 * - Smooth in-view animations via framer-motion.
 * - Sticky section nav (desktop) + sticky CTA footer card.
 * - Uses same color tokens / vibe from your demo file.
 */

/* ------------------------
   Theme colors (Axonary)
   ------------------------ */
const COLORS = {
  primary: "#5C3693",        // purple accent
  secondary: "#472A71",      // darker purple
  bg: "#000000",
  card: "#0b0b0d",
  glass: "rgba(255,255,255,0.03)",
  textMuted: "#BDB7D6",
  white: "#FFFFFF",
};

/* ------------------------
   Helpers: Section wrapper with reveal
   ------------------------ */
const Section: React.FC<{
  id?: string;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
}> = ({ id, title, subtitle, children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 md:py-28 container mx-auto px-6 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        {title && (
          <div className="mb-8">
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              {title}{" "}
              {subtitle && (
                <span style={{ color: COLORS.primary }} className="ml-1">
                  {subtitle}
                </span>
              )}
            </h2>
            <p className="mt-3 text-lg text-gray-300 max-w-3xl">
              {subtitle ? null : ""}
            </p>
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
};

/* ------------------------
   Small UI parts
   ------------------------ */
const Pill: React.FC<{ title: string; subtitle?: string }> = ({
  title,
  subtitle,
}) => (
  <div className="p-6 rounded-2xl" style={{ background: COLORS.card }}>
    <h4 className="text-xl font-semibold">{title}</h4>
    {subtitle && <p className="mt-2 text-sm text-gray-300">{subtitle}</p>}
  </div>
);

/* ------------------------
   Main component
   ------------------------ */
const ServiceDemo1: React.FC = () => {
  const sections = [
    {
      id: "hero",
      label: "Overview",
    },
    {
      id: "social",
      label: "Social Ads",
    },
    {
      id: "seo",
      label: "SEO",
    },
    {
      id: "conversion",
      label: "Conversion",
    },
    {
      id: "brand",
      label: "Brand",
    },
    {
      id: "web",
      label: "Web & SaaS",
    },
    {
      id: "email",
      label: "Email",
    },
  ];

  return (
    <div style={{ background: COLORS.bg, color: COLORS.white, minHeight: "100vh" }}>
      {/* Sticky side nav - desktop */}
      <aside className="hidden lg:flex fixed left-6 top-1/3 z-50">
        <div className="bg-[rgba(255,255,255,0.02)] rounded-full px-3 py-2 shadow-lg">
          <nav className="flex flex-col gap-2">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-sm px-3 py-2 rounded-full transition-colors hover:bg-[rgba(255,255,255,0.04)]"
                style={{ color: COLORS.textMuted }}
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </aside>

      {/* Top nav / simple */}
      <header className="py-6">
        <div className="container mx-auto px-6 flex items-center justify-between">
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
              <div className="text-sm font-bold">Axonary</div>
              <div className="text-xs text-gray-400">Marketing that moves</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            <a href="#social" className="hover:text-white">Social</a>
            <a href="#seo" className="hover:text-white">SEO</a>
            <a href="#conversion" className="hover:text-white">Conversion</a>
            <a href="#brand" className="hover:text-white">Brand</a>
            <a href="#web" className="hover:text-white">Web</a>
            <a href="#email" className="hover:text-white">Email</a>
            <Link to="/contact" className="ml-4 inline-block px-4 py-2 rounded-full" style={{ background: COLORS.primary }}>
              Book a Call
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <Section id="hero">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="inline-block rounded-full px-4 py-1 text-sm font-medium" style={{ background: `${COLORS.secondary}66` }}>
              Premium • Performance • Proof
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Data-Driven Social Media Marketing Solutions{" "}
              <span style={{ color: COLORS.primary }}>| Axonary</span>
            </h1>

            <p className="text-lg text-gray-300 max-w-2xl">
              We pair creative storytelling with aggressive performance engineering to scale audiences, lower acquisition cost, and drive revenue that actually shows up on your P&L.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#social"
                className="px-6 py-3 rounded-full font-semibold inline-flex items-center gap-3"
                style={{ background: COLORS.primary }}
              >
                Explore Social Solutions
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>

              <a
                href="#seo"
                className="px-5 py-3 rounded-full border border-[rgba(255,255,255,0.06)] text-sm"
                style={{ color: COLORS.textMuted }}
              >
                See SEO Growth
              </a>
            </div>

            {/* preview cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="p-4 rounded-2xl" style={{ background: COLORS.card }}>
                <h4 className="font-semibold">ROAS-first Campaigns</h4>
                <p className="text-sm text-gray-300 mt-1">We optimize to profit, not impressions.</p>
              </div>
              <div className="p-4 rounded-2xl" style={{ background: COLORS.card }}>
                <h4 className="font-semibold">Creative + Data Workflows</h4>
                <p className="text-sm text-gray-300 mt-1">Test creatives like experiments — scale winners automatically.</p>
              </div>
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
                  <a href="/contact" className="inline-block px-4 py-2 rounded-full" style={{ background: COLORS.primary }}>Request Audit</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SOCIAL - primary (user provided) */}
      <Section id="social" title="Data-Driven Social Media Marketing Solutions | Axonary">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-gray-300 text-lg mb-6">
              Social is not a vanity channel — it's a revenue channel when you combine creative storytelling, multivariate signal tracking, and automated bidding logic. We build scalable systems that treat ads like product features.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Pill title="Audience Architecture" subtitle="Layered targeting & custom intent cohorts." />
              <Pill title="Creative Testing Lab" subtitle="Automated A/B/C testing with variant scoring." />
              <Pill title="Server-side Events" subtitle="Accurate attribution with resilient tracking." />
              <Pill title="Budget Allocator" subtitle="Machine-assisted budget shifts to winning pockets." />
            </div>
          </div>

          <div>
            <div className="rounded-2xl p-6" style={{ background: COLORS.card }}>
              <h4 className="font-bold mb-2">Case Snapshot</h4>
              <p className="text-sm text-gray-300 mb-4">D2C brand: 3x scale in 90 days while decreasing CPA by 28%.</p>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>Creative funnel redesign</li>
                <li>Lookalike scaling + negative audience sculpting</li>
                <li>Ad-set automation via rules & scripts</li>
              </ul>
              <div className="mt-6">
                <a href="/cases" className="inline-block px-4 py-2 rounded-full" style={{ background: COLORS.primary }}>View Case Study</a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SEO */}
      <Section id="seo" title="SEO Growth Engine" subtitle="">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-gray-300 text-lg mb-6">
              We grow organic pipelines with technical precision and content velocity. Link acquisition that moves SERPs and content that converts visitors into users.
            </p>

            <div className="space-y-4">
              <Pill title="Technical SEO" subtitle="Core web vitals, crawl budgets, structured data." />
              <Pill title="Content Velocity" subtitle="Topic clusters built for scale & relevance." />
              <Pill title="Authority & Links" subtitle="Whitehat partnerships + editorial outreach." />
            </div>
          </div>

          <div>
            <div className="rounded-2xl p-6" style={{ background: COLORS.card }}>
              <h4 className="font-bold mb-2">Signal Improvements</h4>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg" style={{ background: COLORS.glass }}>
                  <div className="text-lg font-bold">+42%</div>
                  <div className="text-xs text-gray-400">Organic sessions</div>
                </div>
                <div className="p-3 rounded-lg" style={{ background: COLORS.glass }}>
                  <div className="text-lg font-bold">+18</div>
                  <div className="text-xs text-gray-400">Top→10 keywords</div>
                </div>
              </div>

              <div className="mt-4">
                <a href="/audit" className="inline-block px-4 py-2 rounded-full" style={{ background: COLORS.primary }}>Run SEO Audit</a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Conversion Design */}
      <Section id="conversion" title="Conversion Design — Landing Pages That Convert">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-gray-300 text-lg mb-6">
              Design + product logic focused on the single metric that matters: conversion rate. We fuse UX heuristics with aggressive experiment frameworks.
            </p>

            <div className="space-y-4">
              <Pill title="Funnel Mapping" subtitle="Identify drop-off and test highest ROI lever." />
              <Pill title="Microcopy & Persuasion" subtitle="Tiny words, massive lift." />
              <Pill title="AB Experiments" subtitle="Hypothesis-driven testing cadence." />
            </div>
          </div>

          <div>
            <div className="rounded-2xl p-6" style={{ background: COLORS.card }}>
              <h4 className="font-bold mb-2">Example KPI</h4>
              <p className="text-sm text-gray-300">Landing variant with new hero + social proof improved CVR by 37%.</p>
              <div className="mt-4">
                <a href="/conversion" className="inline-block px-4 py-2 rounded-full" style={{ background: COLORS.primary }}>See Playbook</a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Brand */}
      <Section id="brand" title="Brand Strategy & Identity">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-gray-300 text-lg mb-6">
              We create identities that earn attention and keep it. Strategy, naming, voice, visual systems — built to scale across paid & organic channels.
            </p>

            <div className="space-y-4">
              <Pill title="Positioning" subtitle="Narrative frameworks that win markets." />
              <Pill title="Visual Systems" subtitle="Scalable design systems & asset libraries." />
              <Pill title="Creative Ops" subtitle="Templates so teams ship without design debt." />
            </div>
          </div>

          <div>
            <div className="rounded-2xl p-6" style={{ background: COLORS.card }}>
              <h4 className="font-bold mb-2">Brand Impact</h4>
              <p className="text-sm text-gray-300">From tone to typography, we lock brand parameters that consistently increase LTV and recall.</p>
              <div className="mt-4">
                <a href="/brand" className="inline-block px-4 py-2 rounded-full" style={{ background: COLORS.primary }}>Start Brand Sprint</a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Web & SaaS Engineering */}
      <Section id="web" title="Web App / SaaS Engineering">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-gray-300 text-lg mb-6">
              Production-grade frontends and scalable backends. CI/CD, observability, and conversion-first engineering — we ship fast and keep it stable.
            </p>

            <div className="space-y-4">
              <Pill title="Platform Architecture" subtitle="Scalable, cost-efficient infra design." />
              <Pill title="Conversion Engineering" subtitle="Performance-first frontends & analytics." />
              <Pill title="Integrations" subtitle="CRMs, payment flows, tracking pipelines." />
            </div>
          </div>

          <div>
            <div className="rounded-2xl p-6" style={{ background: COLORS.card }}>
              <h4 className="font-bold mb-2">Dev Highlights</h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>Next.js / React SPAs & SSR</li>
                <li>Typesafe APIs & feature flags</li>
                <li>Automated releases & rollbacks</li>
              </ul>
              <div className="mt-4">
                <a href="/engineering" className="inline-block px-4 py-2 rounded-full" style={{ background: COLORS.primary }}>Talk Tech</a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Email & Lifecycle */}
      <Section id="email" title="Email + Lifecycle Automation">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-gray-300 text-lg mb-6">
              Build the backbone that turns one-time buyers into repeat customers. Journeys, triggers, and creative playbooks that increase retention and LTV.
            </p>

            <div className="space-y-4">
              <Pill title="Lifecycle Journeys" subtitle="Onboarding → activation → retention flows." />
              <Pill title="Segmentation" subtitle="Behavioral & revenue-based cohorts." />
              <Pill title="Deliverability" subtitle="Inbox-focused, not just open-focused." />
            </div>
          </div>

          <div>
            <div className="rounded-2xl p-6" style={{ background: COLORS.card }}>
              <h4 className="font-bold mb-2">Automation Wins</h4>
              <p className="text-sm text-gray-300">Flows that added +12% repeat purchase rate for an ecom client inside 3 months.</p>
              <div className="mt-4">
                <a href="/email" className="inline-block px-4 py-2 rounded-full" style={{ background: COLORS.primary }}>See Flows</a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA sticky footer card */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-[92%] md:w-[720px]">
        <div className="rounded-2xl p-4 flex items-center justify-between shadow-xl" style={{ background: "linear-gradient(90deg, rgba(92,54,147,0.12), rgba(71,42,113,0.06))" }}>
          <div>
            <div className="text-sm font-semibold">Want a free micro-audit?</div>
            <div className="text-xs text-gray-300">We’ll dig 3 quick wins you can ship in 48 hours.</div>
          </div>

          <div className="flex items-center gap-3">
            <a href="/contact" className="px-4 py-2 rounded-full font-semibold" style={{ background: COLORS.primary }}>Request Audit</a>
            <a href="/pricing" className="px-3 py-2 rounded-full border border-[rgba(255,255,255,0.06)] text-sm" style={{ color: COLORS.textMuted }}>Pricing</a>
          </div>
        </div>
      </div>

      {/* Small footer */}
      <footer className="mt-40 py-10">
        <div className="container mx-auto px-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Axonary — Strategy First. Always.
        </div>
      </footer>
    </div>
  );
};

export default ServiceDemo1;
