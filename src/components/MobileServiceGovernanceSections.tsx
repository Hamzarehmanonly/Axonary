import React, { useEffect } from "react";
import type { MobileGovernanceCopy, MobileGovernanceColors } from "../data/mobileServiceGovernanceContent";

type Props = {
  colors: MobileGovernanceColors;
  copy: MobileGovernanceCopy;
};

export const MobileServiceGovernanceSections: React.FC<Props> = ({ colors: c, copy }) => {
  useEffect(() => {
    document.title = copy.seo.metaTitle;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", copy.seo.metaDescription);
  }, [copy.seo.metaTitle, copy.seo.metaDescription]);

  const h2 = "text-3xl md:text-4xl font-bold mb-8 text-left";

  return (
    <>
      <section id="overview" className="mt-20 md:mt-24 scroll-mt-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className={h2} style={{ color: c.primary }}>
            Overview
          </h2>
          <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed">
            <div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: c.white }}>
                What this service is
              </h3>
              <p>{copy.overview.what}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: c.white }}>
                Who it is for
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                {copy.overview.who.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: c.white }}>
                Business value
              </h3>
              <p>{copy.overview.businessValue}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="key-features" className="mt-20 md:mt-24 scroll-mt-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className={h2} style={{ color: c.primary }}>
            Key features & capabilities
          </h2>
          <ul className="space-y-4 text-gray-300 text-base md:text-lg">
            {copy.features.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 w-2 h-2 rounded-full shrink-0" style={{ background: c.primary }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="use-cases" className="mt-20 md:mt-24 scroll-mt-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className={h2} style={{ color: c.primary }}>
            Use cases & industries
          </h2>
          <ul className="space-y-3 text-gray-300 text-base md:text-lg list-disc pl-6">
            {copy.useCases.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="process" className="mt-20 md:mt-24 scroll-mt-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className={h2} style={{ color: c.primary }}>
            Process — how we work
          </h2>
          <ol className="space-y-4 text-gray-300 text-base md:text-lg list-decimal pl-6">
            {copy.processSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>

      <section id="technology-stack" className="mt-20 md:mt-24 scroll-mt-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className={h2} style={{ color: c.primary }}>
            Technology stack
          </h2>
          <p className="text-gray-400 text-sm md:text-base mb-6">{copy.techStackIntro}</p>
          <ul className="space-y-3 text-gray-300 text-base md:text-lg list-disc pl-6">
            {copy.techStackItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="why-choose-governance" className="mt-20 md:mt-24 scroll-mt-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className={h2} style={{ color: c.primary }}>
            {copy.whySectionHeading}
          </h2>
          <div className="flex flex-col gap-4 max-w-3xl">
            {copy.whyChoose.map((row) => (
              <div key={row.title} className="flex items-start gap-4">
                <div className="w-2 h-8 rounded mt-1 shrink-0" style={{ background: c.primary }} />
                <div>
                  <div className="font-semibold text-base md:text-lg text-left" style={{ color: c.white }}>
                    {row.title}
                  </div>
                  <div className="text-gray-400 text-sm md:text-base text-left">{row.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="seo-keywords" className="mt-20 md:mt-24 mb-8 scroll-mt-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className={h2} style={{ color: c.primary }}>
            SEO focus
          </h2>
          <div
            className="rounded-2xl p-6 md:p-8 border border-[rgba(255,255,255,0.08)]"
            style={{ background: c.card }}
          >
            <p className="text-sm text-gray-400 mb-2">Primary keyword</p>
            <p className="text-lg font-medium mb-6" style={{ color: c.white }}>
              {copy.seo.primaryKeyword}
            </p>
            <p className="text-sm text-gray-400 mb-2">Supporting keywords</p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
              {copy.seo.supportingKeywords.join(", ")}
            </p>
            <p className="text-sm text-gray-400 mb-2">Meta title</p>
            <p className="text-gray-200 text-sm md:text-base font-mono mb-4 break-words">{copy.seo.metaTitle}</p>
            <p className="text-sm text-gray-400 mb-2">Meta description</p>
            <p className="text-gray-200 text-sm md:text-base font-mono break-words">{copy.seo.metaDescription}</p>
          </div>
        </div>
      </section>
    </>
  );
};
