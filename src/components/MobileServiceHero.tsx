import React from "react";
import type { MobileGovernanceColors, MobileHeroCopy } from "../data/mobileServiceGovernanceContent";

type Props = {
  colors: MobileGovernanceColors;
  hero: MobileHeroCopy;
};

export const MobileServiceHero: React.FC<Props> = ({ colors: c, hero }) => (
  <section
    id="hero"
    className="min-h-[72vh] flex items-center"
    style={{ background: c.bg, color: c.white }}
  >
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
      <div className="md:col-span-7">
        <div
          className="inline-block rounded-full px-4 py-1 text-sm font-medium"
          style={{ background: `${c.secondary}33`, color: c.white }}
        >
          {hero.badge}
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
          {hero.titleMain}
          <span style={{ color: c.primary }}> | Axonary</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl">{hero.description}</p>
        <div className="mt-6 flex items-center gap-4 flex-wrap">
          <a
            href={hero.exploreHref}
            className="px-4 py-2 rounded-full font-semibold inline-flex items-center gap-3"
            style={{ background: c.primary, color: c.white, minWidth: 140, justifyContent: "center" }}
          >
            Explore Services
          </a>
          <a
            href="/contact"
            className="px-4 py-2 rounded-full border border-[rgba(255,255,255,0.06)] font-semibold"
            style={{ color: c.textMuted, minWidth: 140, textAlign: "center" }}
          >
            Request Consultation
          </a>
        </div>
      </div>
      <div className="md:col-span-5">
        <div className="rounded-2xl p-6" style={{ background: c.card }}>
          <h5 className="text-sm text-gray-400">{hero.cardTitle}</h5>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
              <div className="text-2xl font-bold">{hero.stat1.value}</div>
              <div className="text-xs text-gray-400">{hero.stat1.label}</div>
            </div>
            <div className="border border-[rgba(255,255,255,0.04)] rounded-lg p-4">
              <div className="text-2xl font-bold">{hero.stat2.value}</div>
              <div className="text-xs text-gray-400">{hero.stat2.label}</div>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-sm text-gray-300">{hero.cardFooter}</p>
            <div className="mt-4">
              <a
                href="/contact"
                className="inline-block px-4 py-2 rounded-full font-semibold"
                style={{ background: c.primary, color: c.white, minWidth: 140, textAlign: "center" }}
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
