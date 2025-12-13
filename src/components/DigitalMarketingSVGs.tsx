import React from "react";

// Digital Marketing SVG Components
const COLORS = {
  primary: "#5C3693",
  secondary: "#472A71",
  accent: "#A855F7",
  light: "#E9D5FF",
  dark: "#000000",
  textMuted: "#BDB7D6",
};

// ============ SEO SERVICES SVG ============

export const SEOServicesSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 400,
  height = 400,
  className = "",
}) => (
  <svg viewBox="0 0 400 400" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="seoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} />
        <stop offset="100%" stopColor={COLORS.accent} />
      </linearGradient>
      <filter id="seoGlow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <rect width="400" height="400" fill="transparent" />

    {/* Large magnifying glass */}
    <circle cx="150" cy="150" r="80" fill="none" stroke={COLORS.primary} strokeWidth="4" opacity="0.8" />
    <line x1="210" y1="210" x2="280" y2="280" stroke={COLORS.primary} strokeWidth="4" opacity="0.8" />

    {/* Handle glow */}
    <circle cx="280" cy="280" r="8" fill={COLORS.accent} filter="url(#seoGlow)" />

    {/* Ranking bars on the right */}
    <g transform="translate(260, 80)">
      <rect x="0" y="0" width="20" height="40" fill={COLORS.secondary} opacity="0.6" />
      <rect x="25" y="10" width="20" height="50" fill={COLORS.primary} />
      <rect x="50" y="5" width="20" height="60" fill={COLORS.accent} />
      <rect x="75" y="15" width="20" height="45" fill={COLORS.secondary} opacity="0.6" />
    </g>

    {/* #1 Badge */}
    <circle cx="320" cy="60" r="20" fill={COLORS.accent} filter="url(#seoGlow)" />
    <text x="320" y="70" textAnchor="middle" fill={COLORS.dark} fontSize="20" fontWeight="bold">
      #1
    </text>

    {/* Bottom text */}
    <text x="200" y="340" textAnchor="middle" fill={COLORS.textMuted} fontSize="16">
      Search Ranking Excellence
    </text>
  </svg>
);

// ============ PPC SERVICES SVG ============

export const PPCServicesSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 400,
  height = 400,
  className = "",
}) => (
  <svg viewBox="0 0 400 400" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ppcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.accent} />
        <stop offset="100%" stopColor={COLORS.primary} />
      </linearGradient>
      <filter id="ppcGlow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <rect width="400" height="400" fill="transparent" />

    {/* Ad blocks */}
    <rect x="40" y="60" width="140" height="80" rx="8" fill={COLORS.secondary} opacity="0.4" stroke={COLORS.primary} strokeWidth="2" />
    <text x="110" y="85" textAnchor="middle" fill={COLORS.primary} fontSize="14" fontWeight="bold">
      Sponsored Ad
    </text>
    <text x="110" y="105" textAnchor="middle" fill={COLORS.textMuted} fontSize="11">
      Premium Click CTR
    </text>
    <circle cx="130" cy="130" r="4" fill={COLORS.accent} />

    <rect x="220" y="60" width="140" height="80" rx="8" fill={COLORS.secondary} opacity="0.4" stroke={COLORS.accent} strokeWidth="2" />
    <text x="290" y="85" textAnchor="middle" fill={COLORS.accent} fontSize="14" fontWeight="bold">
      Sponsored Ad
    </text>
    <text x="290" y="105" textAnchor="middle" fill={COLORS.textMuted} fontSize="11">
      High Quality Score
    </text>
    <circle cx="310" cy="130" r="4" fill={COLORS.primary} />

    {/* Ad blocks middle row */}
    <rect x="40" y="180" width="140" height="80" rx="8" fill={COLORS.primary} opacity="0.15" stroke={COLORS.primary} strokeWidth="2" />
    <text x="110" y="205" textAnchor="middle" fill={COLORS.primary} fontSize="14" fontWeight="bold">
      Optimized Ad
    </text>
    <text x="110" y="225" textAnchor="middle" fill={COLORS.textMuted} fontSize="11">
      Max Conversions
    </text>

    <rect x="220" y="180" width="140" height="80" rx="8" fill={COLORS.accent} opacity="0.15" stroke={COLORS.accent} strokeWidth="2" />
    <text x="290" y="205" textAnchor="middle" fill={COLORS.accent} fontSize="14" fontWeight="bold">
      Performance Ad
    </text>
    <text x="290" y="225" textAnchor="middle" fill={COLORS.textMuted} fontSize="11">
      ROI Focused
    </text>

    {/* Conversion indicator at bottom */}
    <circle cx="130" cy="310" r="25" fill={COLORS.accent} filter="url(#ppcGlow)" />
    <text x="130" y="315" textAnchor="middle" fill={COLORS.dark} fontSize="18" fontWeight="bold">
      ✓
    </text>

    <text x="200" y="350" textAnchor="middle" fill={COLORS.textMuted} fontSize="14">
      High-Converting Campaigns
    </text>
  </svg>
);

// ============ SOCIAL MEDIA SERVICES SVG ============

export const SocialMediaServicesSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 400,
  height = 400,
  className = "",
}) => (
  <svg viewBox="0 0 400 400" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="phoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} />
        <stop offset="100%" stopColor={COLORS.accent} />
      </linearGradient>
      <filter id="phoneGlow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <rect width="400" height="400" fill="transparent" />

    {/* Phone mockup */}
    <rect x="100" y="40" width="200" height="320" rx="20" fill={COLORS.dark} stroke={COLORS.primary} strokeWidth="3" filter="url(#phoneGlow)" />

    {/* Screen background */}
    <rect x="110" y="55" width="180" height="290" rx="16" fill={COLORS.secondary} opacity="0.3" />

    {/* Status bar */}
    <rect x="110" y="55" width="180" height="15" fill={COLORS.primary} opacity="0.4" />

    {/* Social posts */}
    <g>
      {/* Post 1 */}
      <rect x="120" y="80" width="160" height="50" rx="6" fill={COLORS.primary} opacity="0.2" />
      <circle cx="130" cy="88" r="4" fill={COLORS.accent} />
      <text x="140" y="92" fill={COLORS.textMuted} fontSize="8">
        @user1
      </text>
      <rect x="120" y="98" width="160" height="20" fill={COLORS.primary} opacity="0.1" />
      <circle cx="125" cy="138" r="5" fill={COLORS.accent} />
      <circle cx="137" cy="138" r="5" fill={COLORS.primary} />
      <circle cx="149" cy="138" r="5" fill={COLORS.secondary} opacity="0.7" />
    </g>

    <g>
      {/* Post 2 */}
      <rect x="120" y="150" width="160" height="50" rx="6" fill={COLORS.accent} opacity="0.2" />
      <circle cx="130" cy="158" r="4" fill={COLORS.primary} />
      <text x="140" y="162" fill={COLORS.textMuted} fontSize="8">
        @user2
      </text>
      <rect x="120" y="168" width="160" height="20" fill={COLORS.accent} opacity="0.1" />
      <circle cx="125" cy="208" r="5" fill={COLORS.secondary} opacity="0.7" />
      <circle cx="137" cy="208" r="5" fill={COLORS.accent} />
      <circle cx="149" cy="208" r="5" fill={COLORS.primary} />
    </g>

    <g>
      {/* Post 3 */}
      <rect x="120" y="220" width="160" height="50" rx="6" fill={COLORS.secondary} opacity="0.2" />
      <circle cx="130" cy="228" r="4" fill={COLORS.accent} />
      <text x="140" y="232" fill={COLORS.textMuted} fontSize="8">
        @user3
      </text>
      <rect x="120" y="238" width="160" height="20" fill={COLORS.secondary} opacity="0.1" />
    </g>

    <text x="200" y="370" textAnchor="middle" fill={COLORS.textMuted} fontSize="14">
      Engaging Social Content
    </text>
  </svg>
);

// ============ SEARCH ENGINE MARKETING SVG ============

export const SearchEngineMarketingSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 400,
  height = 400,
  className = "",
}) => (
  <svg viewBox="0 0 400 400" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="semGrad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor={COLORS.accent} />
        <stop offset="100%" stopColor={COLORS.primary} />
      </linearGradient>
      <filter id="semGlow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <rect width="400" height="400" fill="transparent" />

    {/* Search results */}
    <rect x="40" y="50" width="320" height="35" rx="4" fill={COLORS.primary} opacity="0.15" stroke={COLORS.primary} strokeWidth="1.5" />
    <text x="50" y="70" fill={COLORS.primary} fontSize="12" fontWeight="bold">
      Result #1 - Top Ranking
    </text>

    <rect x="40" y="100" width="320" height="35" rx="4" fill={COLORS.accent} opacity="0.15" stroke={COLORS.accent} strokeWidth="1.5" />
    <text x="50" y="120" fill={COLORS.accent} fontSize="12" fontWeight="bold">
      Result #2 - High Traffic
    </text>

    <rect x="40" y="150" width="320" height="35" rx="4" fill={COLORS.secondary} opacity="0.15" stroke={COLORS.secondary} strokeWidth="1.5" />
    <text x="50" y="170" fill={COLORS.secondary} fontSize="12" fontWeight="bold">
      Result #3 - Optimized
    </text>

    {/* Growth chart on right */}
    <g transform="translate(280, 220)">
      <polyline points="0,40 10,35 20,28 30,18 40,8" stroke="url(#semGrad)" strokeWidth="3" fill="none" filter="url(#semGlow)" />
      <circle cx="40" cy="8" r="6" fill={COLORS.accent} filter="url(#semGlow)" />
    </g>

    <text x="200" y="380" textAnchor="middle" fill={COLORS.textMuted} fontSize="14">
      Growth Through SEM Strategy
    </text>
  </svg>
);

// ============ SEARCH ENGINE OPTIMIZATION SVG ============

export const SearchEngineOptimizationSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 400,
  height = 400,
  className = "",
}) => (
  <svg viewBox="0 0 400 400" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="seoOptGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={COLORS.accent} />
        <stop offset="100%" stopColor={COLORS.primary} />
      </radialGradient>
      <filter id="seoOptGlow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <rect width="400" height="400" fill="transparent" />

    {/* Large magnifying glass */}
    <circle cx="140" cy="140" r="90" fill="none" stroke="url(#seoOptGrad)" strokeWidth="5" filter="url(#seoOptGlow)" />
    <line x1="215" y1="215" x2="300" y2="300" stroke="url(#seoOptGrad)" strokeWidth="5" filter="url(#seoOptGlow)" />

    {/* SEO factor circles inside magnifier */}
    <circle cx="100" cy="110" r="15" fill={COLORS.primary} opacity="0.6" />
    <text x="100" y="115" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
      K
    </text>

    <circle cx="160" cy="100" r="15" fill={COLORS.accent} opacity="0.6" />
    <text x="160" y="105" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
      L
    </text>

    <circle cx="180" cy="150" r="15" fill={COLORS.secondary} opacity="0.6" />
    <text x="180" y="155" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
      C
    </text>

    <circle cx="130" cy="180" r="15" fill={COLORS.primary} opacity="0.6" />
    <text x="130" y="185" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
      T
    </text>

    {/* Legend */}
    <text x="50" y="320" fill={COLORS.textMuted} fontSize="11">
      K=Keywords L=Links C=Content T=Technical
    </text>

    <text x="200" y="370" textAnchor="middle" fill={COLORS.textMuted} fontSize="14">
      Comprehensive SEO Optimization
    </text>
  </svg>
);

// ============ SEARCH INTENT OPTIMIZATION SVG ============

export const SearchIntentOptimizationSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 400,
  height = 400,
  className = "",
}) => (
  <svg viewBox="0 0 400 400" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="intentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} />
        <stop offset="100%" stopColor={COLORS.accent} />
      </linearGradient>
      <filter id="intentGlow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <rect width="400" height="400" fill="transparent" />

    {/* Brain/neural structure */}
    <circle cx="200" cy="140" r="40" fill="url(#intentGrad)" opacity="0.4" filter="url(#intentGlow)" />

    {/* Neural nodes */}
    <circle cx="160" cy="120" r="8" fill={COLORS.primary} filter="url(#intentGlow)" />
    <circle cx="200" cy="100" r="8" fill={COLORS.accent} filter="url(#intentGlow)" />
    <circle cx="240" cy="120" r="8" fill={COLORS.primary} filter="url(#intentGlow)" />
    <circle cx="180" cy="160" r="8" fill={COLORS.accent} filter="url(#intentGlow)" />
    <circle cx="220" cy="160" r="8" fill={COLORS.secondary} opacity="0.8" filter="url(#intentGlow)" />

    {/* Connections */}
    <line x1="160" y1="120" x2="200" y2="100" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.5" />
    <line x1="200" y1="100" x2="240" y2="120" stroke={COLORS.accent} strokeWidth="1.5" opacity="0.5" />
    <line x1="160" y1="120" x2="180" y2="160" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.5" />
    <line x1="240" y1="120" x2="220" y2="160" stroke={COLORS.accent} strokeWidth="1.5" opacity="0.5" />
    <line x1="180" y1="160" x2="220" y2="160" stroke={COLORS.secondary} strokeWidth="1.5" opacity="0.5" />

    {/* Intent type boxes */}
    <rect x="40" y="250" width="100" height="60" rx="6" fill={COLORS.primary} opacity="0.15" stroke={COLORS.primary} strokeWidth="2" />
    <text x="90" y="275" textAnchor="middle" fill={COLORS.primary} fontSize="11" fontWeight="bold">
      Informational
    </text>

    <rect x="150" y="250" width="100" height="60" rx="6" fill={COLORS.accent} opacity="0.15" stroke={COLORS.accent} strokeWidth="2" />
    <text x="200" y="275" textAnchor="middle" fill={COLORS.accent} fontSize="11" fontWeight="bold">
      Transactional
    </text>

    <rect x="260" y="250" width="100" height="60" rx="6" fill={COLORS.secondary} opacity="0.15" stroke={COLORS.secondary} strokeWidth="2" />
    <text x="310" y="275" textAnchor="middle" fill={COLORS.secondary} fontSize="11" fontWeight="bold">
      Commercial
    </text>

    <text x="200" y="370" textAnchor="middle" fill={COLORS.textMuted} fontSize="14">
      Intent-Based Keyword Targeting
    </text>
  </svg>
);

// ============ CONTENT MARKETING SVG ============

export const ContentMarketingSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 400,
  height = 400,
  className = "",
}) => (
  <svg viewBox="0 0 400 400" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="contentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} />
        <stop offset="100%" stopColor={COLORS.accent} />
      </linearGradient>
      <filter id="contentGlow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <rect width="400" height="400" fill="transparent" />

    {/* Document/Blog page */}
    <rect x="80" y="50" width="240" height="280" rx="8" fill={COLORS.dark} stroke="url(#contentGrad)" strokeWidth="3" filter="url(#contentGlow)" />

    {/* Document header */}
    <rect x="90" y="60" width="220" height="20" fill={COLORS.primary} opacity="0.3" />
    <text x="100" y="73" fill={COLORS.primary} fontSize="13" fontWeight="bold">
      Featured Article
    </text>

    {/* Content blocks */}
    <rect x="100" y="90" width="200" height="8" rx="2" fill={COLORS.primary} opacity="0.4" />
    <rect x="100" y="105" width="200" height="8" rx="2" fill={COLORS.primary} opacity="0.3" />
    <rect x="100" y="120" width="180" height="8" rx="2" fill={COLORS.primary} opacity="0.3" />

    <rect x="100" y="145" width="200" height="8" rx="2" fill={COLORS.accent} opacity="0.4" />
    <rect x="100" y="160" width="200" height="8" rx="2" fill={COLORS.accent} opacity="0.3" />
    <rect x="100" y="175" width="160" height="8" rx="2" fill={COLORS.accent} opacity="0.3" />

    <rect x="100" y="200" width="200" height="8" rx="2" fill={COLORS.secondary} opacity="0.4" />
    <rect x="100" y="215" width="200" height="8" rx="2" fill={COLORS.secondary} opacity="0.3" />
    <rect x="100" y="230" width="170" height="8" rx="2" fill={COLORS.secondary} opacity="0.3" />

    {/* Engagement indicators */}
    <circle cx="110" cy="270" r="6" fill={COLORS.accent} filter="url(#contentGlow)" />
    <text x="122" y="275" fill={COLORS.textMuted} fontSize="11">
      1.2K Likes
    </text>

    <circle cx="200" cy="270" r="6" fill={COLORS.primary} filter="url(#contentGlow)" />
    <text x="212" y="275" fill={COLORS.textMuted} fontSize="11">
      890 Shares
    </text>

    <text x="200" y="370" textAnchor="middle" fill={COLORS.textMuted} fontSize="14">
      Engaging Content Strategy
    </text>
  </svg>
);

// ============ SEO AI SVG ============

export const SEOAISVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 400,
  height = 400,
  className = "",
}) => (
  <svg viewBox="0 0 400 400" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.accent} />
        <stop offset="100%" stopColor={COLORS.primary} />
      </linearGradient>
      <filter id="aiGlow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <rect width="400" height="400" fill="transparent" />

    {/* AI Brain core */}
    <circle cx="200" cy="150" r="50" fill="url(#aiGrad)" opacity="0.3" filter="url(#aiGlow)" />

    {/* Central node */}
    <circle cx="200" cy="150" r="12" fill={COLORS.accent} filter="url(#aiGlow)" />

    {/* Neural nodes around brain */}
    <circle cx="140" cy="120" r="10" fill={COLORS.primary} filter="url(#aiGlow)" />
    <circle cx="260" cy="120" r="10" fill={COLORS.primary} filter="url(#aiGlow)" />
    <circle cx="120" cy="150" r="10" fill={COLORS.accent} filter="url(#aiGlow)" />
    <circle cx="280" cy="150" r="10" fill={COLORS.accent} filter="url(#aiGlow)" />
    <circle cx="140" cy="180" r="10" fill={COLORS.secondary} opacity="0.8" filter="url(#aiGlow)" />
    <circle cx="260" cy="180" r="10" fill={COLORS.secondary} opacity="0.8" filter="url(#aiGlow)" />

    {/* Connections */}
    <line x1="200" y1="150" x2="140" y2="120" stroke={COLORS.primary} strokeWidth="2" opacity="0.6" />
    <line x1="200" y1="150" x2="260" y2="120" stroke={COLORS.primary} strokeWidth="2" opacity="0.6" />
    <line x1="200" y1="150" x2="120" y2="150" stroke={COLORS.accent} strokeWidth="2" opacity="0.6" />
    <line x1="200" y1="150" x2="280" y2="150" stroke={COLORS.accent} strokeWidth="2" opacity="0.6" />
    <line x1="200" y1="150" x2="140" y2="180" stroke={COLORS.secondary} strokeWidth="2" opacity="0.4" />
    <line x1="200" y1="150" x2="260" y2="180" stroke={COLORS.secondary} strokeWidth="2" opacity="0.4" />

    {/* Optimization indicators */}
    <circle cx="90" cy="270" r="20" fill={COLORS.primary} opacity="0.2" stroke={COLORS.primary} strokeWidth="2" />
    <text x="90" y="280" textAnchor="middle" fill={COLORS.primary} fontSize="16" fontWeight="bold">
      ↑
    </text>

    <circle cx="200" cy="280" r="20" fill={COLORS.accent} opacity="0.2" stroke={COLORS.accent} strokeWidth="2" />
    <text x="200" y="290" textAnchor="middle" fill={COLORS.accent} fontSize="16" fontWeight="bold">
      ✓
    </text>

    <circle cx="310" cy="270" r="20" fill={COLORS.secondary} opacity="0.2" stroke={COLORS.secondary} strokeWidth="2" />
    <text x="310" y="280" textAnchor="middle" fill={COLORS.secondary} fontSize="16" fontWeight="bold">
      ⚡
    </text>

    <text x="200" y="370" textAnchor="middle" fill={COLORS.textMuted} fontSize="14">
      AI-Powered SEO Intelligence
    </text>
  </svg>
);
