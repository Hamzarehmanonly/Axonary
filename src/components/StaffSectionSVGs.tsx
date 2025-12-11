import React from "react";

const COLORS = {
  primary: "#5C3693",
  secondary: "#472A71",
  accent: "#A855F7",
  light: "#E9D5FF",
  dark: "#000000",
  textMuted: "#BDB7D6",
};

// ============ ANDROID DEVELOPER SVGS ============

export const AndroidNativeSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="androidGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} />
        <stop offset="100%" stopColor={COLORS.accent} />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <rect width="360" height="360" fill="#0a0e27" />
    
    {/* Android phone with glowing screen */}
    <rect x="100" y="60" width="160" height="240" rx="20" fill="#1a1a2e" stroke={COLORS.primary} strokeWidth="2.5" />
    
    {/* Screen glow effect */}
    <rect x="105" y="70" width="150" height="215" rx="15" fill="url(#androidGrad1)" opacity="0.15" filter="url(#glow)" />
    
    {/* Status bar */}
    <rect x="105" y="70" width="150" height="12" rx="8" fill={COLORS.primary} opacity="0.3" />
    
    {/* App icons */}
    <circle cx="125" cy="95" r="8" fill={COLORS.secondary} opacity="0.7" />
    <circle cx="145" cy="95" r="8" fill={COLORS.accent} opacity="0.7" />
    <circle cx="165" cy="95" r="8" fill={COLORS.primary} opacity="0.7" />
    <circle cx="185" cy="95" r="8" fill={COLORS.secondary} opacity="0.7" />
    <circle cx="205" cy="95" r="8" fill={COLORS.accent} opacity="0.7" />
    
    {/* Main content area */}
    <rect x="115" y="120" width="130" height="140" rx="8" fill={COLORS.primary} opacity="0.1" stroke={COLORS.accent} strokeWidth="1.5" strokeDasharray="5,5" />
    
    {/* Kotlin badge */}
    <rect x="125" y="265" width="110" height="8" rx="4" fill={COLORS.accent} opacity="0.4" />
    <text x="130" y="258" fontSize="11" fontFamily="sans-serif" fontWeight="bold" fill={COLORS.accent}>KOTLIN NATIVE</text>
    
    {/* Navigation bar */}
    <rect x="105" y="265" width="150" height="10" rx="5" fill={COLORS.secondary} opacity="0.2" />
  </svg>
);

export const MaterialDesignSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="matGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.accent} />
        <stop offset="50%" stopColor={COLORS.primary} />
        <stop offset="100%" stopColor={COLORS.secondary} />
      </linearGradient>
      <filter id="shadow">
        <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.3"/>
      </filter>
    </defs>
    <rect width="360" height="360" fill="#0a0e27" />
    
    {/* Floating Material Design cards */}
    <g filter="url(#shadow)">
      <rect x="60" y="100" width="100" height="130" rx="12" fill={COLORS.primary} opacity="0.3" stroke="url(#matGrad)" strokeWidth="2" transform="skewY(-5)" />
      <rect x="140" y="80" width="100" height="130" rx="12" fill={COLORS.accent} opacity="0.25" stroke="url(#matGrad)" strokeWidth="2" />
      <rect x="220" y="110" width="100" height="130" rx="12" fill={COLORS.secondary} opacity="0.3" stroke="url(#matGrad)" strokeWidth="2" transform="skewY(5)" />
    </g>
    
    {/* Depth layers */}
    <line x1="70" y1="240" x2="290" y2="240" stroke={COLORS.accent} strokeWidth="1.5" opacity="0.4" />
    <line x1="70" y1="260" x2="290" y2="260" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.3" />
    <line x1="70" y1="280" x2="290" y2="280" stroke={COLORS.secondary} strokeWidth="1.5" opacity="0.2" />
    
    {/* Accent dots */}
    <circle cx="100" cy="310" r="5" fill={COLORS.accent} opacity="0.6" />
    <circle cx="160" cy="310" r="5" fill={COLORS.primary} opacity="0.6" />
    <circle cx="220" cy="310" r="5" fill={COLORS.secondary} opacity="0.6" />
    <circle cx="280" cy="310" r="5" fill={COLORS.accent} opacity="0.5" />
  </svg>
);

export const AndroidTestingSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="testGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor={COLORS.accent} />
      </linearGradient>
    </defs>
    <rect width="360" height="360" fill="#0a0e27" />
    
    {/* Test code editor background */}
    <rect x="50" y="50" width="260" height="260" rx="12" fill="#1a1a2e" stroke={COLORS.accent} strokeWidth="1.5" opacity="0.6" />
    
    {/* Code lines */}
    <line x1="70" y1="75" x2="290" y2="75" stroke={COLORS.primary} strokeWidth="2" opacity="0.3" />
    <line x1="70" y1="100" x2="280" y2="100" stroke={COLORS.accent} strokeWidth="1.5" opacity="0.4" />
    <line x1="70" y1="125" x2="270" y2="125" stroke={COLORS.secondary} strokeWidth="1.5" opacity="0.3" />
    <line x1="70" y1="150" x2="260" y2="150" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.3" />
    <line x1="70" y1="175" x2="285" y2="175" stroke={COLORS.accent} strokeWidth="1.5" opacity="0.4" />
    <line x1="70" y1="200" x2="275" y2="200" stroke={COLORS.secondary} strokeWidth="1.5" opacity="0.3" />
    
    {/* Test checkmarks */}
    <circle cx="280" cy="100" r="6" fill="#10B981" opacity="0.8" />
    <text x="277" y="105" fontSize="10" fontWeight="bold" fill="#10B981">✓</text>
    
    <circle cx="280" cy="150" r="6" fill="#10B981" opacity="0.8" />
    <text x="277" y="155" fontSize="10" fontWeight="bold" fill="#10B981">✓</text>
    
    <circle cx="280" cy="200" r="6" fill="#10B981" opacity="0.8" />
    <text x="277" y="205" fontSize="10" fontWeight="bold" fill="#10B981">✓</text>
    
    {/* Progress bar */}
    <rect x="70" y="250" width="200" height="6" rx="3" fill={COLORS.secondary} opacity="0.2" />
    <rect x="70" y="250" width="160" height="6" rx="3" fill="url(#testGradient)" />
  </svg>
);

export const PlayStoreSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="playGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.accent} />
        <stop offset="100%" stopColor={COLORS.primary} />
      </linearGradient>
    </defs>
    <rect width="360" height="360" fill="#0a0e27" />
    
    {/* Play Store building blocks */}
    <g>
      <rect x="80" y="100" width="70" height="70" rx="10" fill={COLORS.primary} opacity="0.5" stroke="url(#playGrad)" strokeWidth="2" />
      <text x="95" y="150" fontSize="14" fontWeight="bold" fill={COLORS.accent} textAnchor="middle">APP</text>
    </g>
    
    <g>
      <rect x="170" y="80" width="70" height="90" rx="10" fill={COLORS.accent} opacity="0.4" stroke="url(#playGrad)" strokeWidth="2" />
      <text x="185" y="145" fontSize="12" fontWeight="bold" fill={COLORS.light} textAnchor="middle">STORE</text>
    </g>
    
    <g>
      <rect x="260" y="110" width="70" height="70" rx="10" fill={COLORS.secondary} opacity="0.5" stroke="url(#playGrad)" strokeWidth="2" />
      <text x="275" y="160" fontSize="14" fontWeight="bold" fill={COLORS.light} textAnchor="middle">TOP</text>
    </g>
    
    {/* Download arrows */}
    <path d="M 180 220 L 160 240 L 170 240" fill="none" stroke={COLORS.accent} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 180 220 L 200 240 L 190 240" fill="none" stroke={COLORS.accent} strokeWidth="2.5" strokeLinecap="round" />
    <line x1="180" y1="220" x2="180" y2="280" stroke={COLORS.accent} strokeWidth="2.5" opacity="0.5" />
    
    {/* Rating stars */}
    <text x="140" y="310" fontSize="12" fill={COLORS.accent}>★★★★★</text>
    <text x="215" y="310" fontSize="11" fill={COLORS.textMuted}>4.8 Rating</text>
  </svg>
);

// ============ CONTENT WRITER SVGS ============

export const SEOWritingSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="seoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} />
        <stop offset="50%" stopColor={COLORS.accent} />
        <stop offset="100%" stopColor={COLORS.secondary} />
      </linearGradient>
      <filter id="seoShadow">
        <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.3" />
      </filter>
    </defs>
    <rect width="360" height="360" fill="#0a0e27" />
    
    {/* Search bar */}
    <rect x="50" y="60" width="260" height="45" rx="25" fill={COLORS.primary} opacity="0.15" stroke="url(#seoGrad)" strokeWidth="2" filter="url(#seoShadow)" />
    <circle cx="70" cy="82" r="4" fill={COLORS.accent} />
    <text x="85" y="90" fontSize="14" fontFamily="sans-serif" fill={COLORS.light} fontWeight="600">SEO optimized keyword</text>
    <text x="315" y="90" fontSize="20" fill={COLORS.accent}>🔍</text>
    
    {/* Search results cards */}
    <g filter="url(#seoShadow)">
      {/* Result 1 */}
      <rect x="50" y="125" width="260" height="55" rx="10" fill="#1a1a2e" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.7" />
      <text x="65" y="145" fontSize="10" fontFamily="monospace" fill={COLORS.accent}>www.example.com › blog</text>
      <text x="65" y="162" fontSize="13" fontFamily="serif" fill={COLORS.light} fontWeight="bold">High-Ranking Article Title</text>
      <text x="65" y="175" fontSize="9" fontFamily="sans-serif" fill={COLORS.textMuted}>Comprehensive guide with 95 SEO score...</text>
      
      {/* Result 2 */}
      <rect x="50" y="195" width="260" height="55" rx="10" fill="#1a1a2e" stroke={COLORS.accent} strokeWidth="1.5" opacity="0.7" />
      <text x="65" y="215" fontSize="10" fontFamily="monospace" fill={COLORS.secondary}>www.content.io › strategy</text>
      <text x="65" y="232" fontSize="13" fontFamily="serif" fill={COLORS.light} fontWeight="bold">Content Strategy Framework</text>
      <text x="65" y="245" fontSize="9" fontFamily="sans-serif" fill={COLORS.textMuted}>Proven methodology for organic traffic...</text>
    </g>
    
    {/* SEO metrics indicator */}
    <circle cx="310" cy="300" r="20" fill={COLORS.accent} opacity="0.2" stroke={COLORS.accent} strokeWidth="2" />
    <text x="310" y="307" fontSize="14" fontWeight="bold" fill={COLORS.accent} textAnchor="middle">✓</text>
  </svg>
);

export const ContentStrategySVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="strategyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.secondary} />
        <stop offset="50%" stopColor={COLORS.primary} />
        <stop offset="100%" stopColor={COLORS.accent} />
      </linearGradient>
      <filter id="stratShadow">
        <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodOpacity="0.25" />
      </filter>
    </defs>
    <rect width="360" height="360" fill="#0a0e27" />
    
    {/* Editorial calendar */}
    <rect x="45" y="55" width="270" height="240" rx="14" fill="#1a1a2e" stroke="url(#strategyGrad)" strokeWidth="2" filter="url(#stratShadow)" />
    
    {/* Calendar header */}
    <rect x="45" y="55" width="270" height="35" rx="14" fill="url(#strategyGrad)" opacity="0.4" />
    <text x="180" y="80" fontSize="13" fontWeight="bold" fill={COLORS.light} textAnchor="middle">Content Calendar Q1</text>
    
    {/* Month labels */}
    <text x="80" y="105" fontSize="10" fill={COLORS.accent} fontWeight="600">January</text>
    <text x="180" y="105" fontSize="10" fill={COLORS.primary} fontWeight="600">February</text>
    <text x="270" y="105" fontSize="10" fill={COLORS.secondary} fontWeight="600">March</text>
    
    {/* Content blocks with different colors */}
    <rect x="65" y="125" width="35" height="30" rx="6" fill={COLORS.primary} opacity="0.5" filter="url(#stratShadow)" />
    <rect x="115" y="125" width="35" height="30" rx="6" fill={COLORS.accent} opacity="0.5" filter="url(#stratShadow)" />
    <rect x="165" y="125" width="35" height="30" rx="6" fill={COLORS.secondary} opacity="0.5" filter="url(#stratShadow)" />
    <rect x="215" y="125" width="35" height="30" rx="6" fill={COLORS.primary} opacity="0.4" filter="url(#stratShadow)" />
    <rect x="265" y="125" width="35" height="30" rx="6" fill={COLORS.accent} opacity="0.4" filter="url(#stratShadow)" />
    
    {/* More content blocks */}
    <rect x="65" y="165" width="35" height="30" rx="6" fill={COLORS.secondary} opacity="0.4" filter="url(#stratShadow)" />
    <rect x="115" y="165" width="35" height="30" rx="6" fill={COLORS.primary} opacity="0.5" filter="url(#stratShadow)" />
    <rect x="215" y="165" width="35" height="30" rx="6" fill={COLORS.accent} opacity="0.5" filter="url(#stratShadow)" />
    <rect x="265" y="165" width="35" height="30" rx="6" fill={COLORS.secondary} opacity="0.4" filter="url(#stratShadow)" />
    
    {/* Planning indicator */}
    <circle cx="310" cy="300" r="18" fill={COLORS.primary} opacity="0.3" stroke={COLORS.primary} strokeWidth="2" />
    <text x="310" y="306" fontSize="16" fill={COLORS.accent} textAnchor="middle">📅</text>
  </svg>
);

export const WebCopySVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="webCopyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.accent} />
        <stop offset="50%" stopColor={COLORS.primary} />
        <stop offset="100%" stopColor={COLORS.secondary} />
      </linearGradient>
      <filter id="webShadow">
        <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.3" />
      </filter>
    </defs>
    <rect width="360" height="360" fill="#0a0e27" />
    
    {/* Browser frame */}
    <rect x="40" y="50" width="280" height="260" rx="15" fill="#1a1a2e" stroke="url(#webCopyGrad)" strokeWidth="2.5" filter="url(#webShadow)" />
    
    {/* Browser header */}
    <rect x="40" y="50" width="280" height="30" rx="15" fill="url(#webCopyGrad)" opacity="0.3" />
    
    {/* Hero section */}
    <rect x="50" y="90" width="260" height="70" rx="10" fill={COLORS.primary} opacity="0.25" />
    <text x="180" y="115" fontSize="16" fontFamily="serif" fill={COLORS.light} fontWeight="bold" textAnchor="middle">Compelling Headline</text>
    <text x="180" y="135" fontSize="10" fontFamily="sans-serif" fill={COLORS.textMuted} textAnchor="middle">Subheadline that engages</text>
    
    {/* Body copy lines */}
    <rect x="60" y="170" width="240" height="6" rx="2" fill={COLORS.accent} opacity="0.4" />
    <rect x="60" y="183" width="230" height="6" rx="2" fill={COLORS.accent} opacity="0.3" />
    <rect x="60" y="196" width="220" height="6" rx="2" fill={COLORS.accent} opacity="0.2" />
    
    {/* CTA Button */}
    <rect x="120" y="220" width="120" height="35" rx="18" fill="url(#webCopyGrad)" stroke={COLORS.accent} strokeWidth="1.5" filter="url(#webShadow)" />
    <text x="180" y="243" fontSize="12" fontWeight="bold" fill={COLORS.light} textAnchor="middle">Get Started</text>
  </svg>
);

export const DiverseContentSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="diverseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} />
        <stop offset="33%" stopColor={COLORS.secondary} />
        <stop offset="66%" stopColor={COLORS.accent} />
        <stop offset="100%" stopColor={COLORS.primary} />
      </linearGradient>
      <filter id="diverseShadow">
        <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodOpacity="0.25" />
      </filter>
    </defs>
    <rect width="360" height="360" fill="#0a0e27" />
    
    {/* Content type boxes - Row 1 */}
    {/* Blog */}
    <rect x="50" y="65" width="85" height="100" rx="12" fill={COLORS.primary} opacity="0.2" stroke={COLORS.primary} strokeWidth="2" filter="url(#diverseShadow)" />
    <text x="92" y="105" fontSize="24" textAnchor="middle">📝</text>
    <text x="92" y="158" fontSize="11" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">Blog Posts</text>
    
    {/* Video */}
    <rect x="150" y="65" width="85" height="100" rx="12" fill={COLORS.secondary} opacity="0.2" stroke={COLORS.secondary} strokeWidth="2" filter="url(#diverseShadow)" />
    <text x="192" y="105" fontSize="24" textAnchor="middle">🎬</text>
    <text x="192" y="158" fontSize="11" fontWeight="bold" fill={COLORS.secondary} textAnchor="middle">Videos</text>
    
    {/* Podcast */}
    <rect x="250" y="65" width="85" height="100" rx="12" fill={COLORS.accent} opacity="0.2" stroke={COLORS.accent} strokeWidth="2" filter="url(#diverseShadow)" />
    <text x="292" y="105" fontSize="24" textAnchor="middle">🎙️</text>
    <text x="292" y="158" fontSize="11" fontWeight="bold" fill={COLORS.accent} textAnchor="middle">Podcasts</text>
    
    {/* Content type boxes - Row 2 */}
    {/* Infographics */}
    <rect x="50" y="185" width="85" height="100" rx="12" fill={COLORS.accent} opacity="0.15" stroke={COLORS.accent} strokeWidth="2" filter="url(#diverseShadow)" />
    <text x="92" y="225" fontSize="24" textAnchor="middle">📊</text>
    <text x="92" y="278" fontSize="11" fontWeight="bold" fill={COLORS.accent} textAnchor="middle">Infographics</text>
    
    {/* Social Media */}
    <rect x="150" y="185" width="85" height="100" rx="12" fill={COLORS.primary} opacity="0.15" stroke={COLORS.primary} strokeWidth="2" filter="url(#diverseShadow)" />
    <text x="192" y="225" fontSize="24" textAnchor="middle">📱</text>
    <text x="192" y="278" fontSize="11" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">Social Posts</text>
    
    {/* Interactive */}
    <rect x="250" y="185" width="85" height="100" rx="12" fill={COLORS.secondary} opacity="0.15" stroke={COLORS.secondary} strokeWidth="2" filter="url(#diverseShadow)" />
    <text x="292" y="225" fontSize="24" textAnchor="middle">⚙️</text>
    <text x="292" y="278" fontSize="11" fontWeight="bold" fill={COLORS.secondary} textAnchor="middle">Interactive</text>
  </svg>
);

// ============ SOFTWARE DEVELOPER SVGS ============

export const EnterpriseSoftwareSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="entGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} />
        <stop offset="100%" stopColor={COLORS.secondary} />
      </linearGradient>
      <filter id="entShadow">
        <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.3" />
      </filter>
    </defs>
    <rect width="360" height="360" fill="#0a0e27" />
    
    {/* Enterprise system integration diagram */}
    <g filter="url(#entShadow)">
      {/* System A */}
      <rect x="50" y="70" width="85" height="70" rx="10" fill="#1a1a2e" stroke={COLORS.primary} strokeWidth="2" />
      <text x="92" y="95" fontSize="11" fontFamily="monospace" fill={COLORS.primary} fontWeight="bold" textAnchor="middle">System</text>
      <text x="92" y="110" fontSize="10" fontFamily="monospace" fill={COLORS.accent} textAnchor="middle">A</text>
      
      {/* System B */}
      <rect x="225" y="70" width="85" height="70" rx="10" fill="#1a1a2e" stroke={COLORS.secondary} strokeWidth="2" />
      <text x="267" y="95" fontSize="11" fontFamily="monospace" fill={COLORS.secondary} fontWeight="bold" textAnchor="middle">System</text>
      <text x="267" y="110" fontSize="10" fontFamily="monospace" fill={COLORS.accent} textAnchor="middle">B</text>
      
      {/* API Gateway */}
      <circle cx="180" cy="200" r="35" fill="url(#entGrad)" opacity="0.4" stroke="url(#entGrad)" strokeWidth="2.5" />
      <text x="180" y="210" fontSize="13" fontFamily="monospace" fill={COLORS.light} fontWeight="bold" textAnchor="middle">API</text>
      
      {/* Connection lines */}
      <line x1="92" y1="140" x2="160" y2="170" stroke={COLORS.primary} strokeWidth="2.5" opacity="0.6" />
      <line x1="267" y1="140" x2="200" y2="170" stroke={COLORS.secondary} strokeWidth="2.5" opacity="0.6" />
      
      {/* Database */}
      <ellipse cx="180" cy="310" rx="40" ry="18" fill="#1a1a2e" stroke={COLORS.accent} strokeWidth="2.5" />
      <line x1="140" y1="310" x2="140" y2="335" stroke={COLORS.accent} strokeWidth="1.5" />
      <line x1="180" y1="310" x2="180" y2="338" stroke={COLORS.accent} strokeWidth="1.5" />
      <line x1="220" y1="310" x2="220" y2="335" stroke={COLORS.accent} strokeWidth="1.5" />
      <ellipse cx="180" cy="338" rx="40" ry="12" fill={COLORS.accent} opacity="0.25" />
    </g>
  </svg>
);

export const CloudArchitectureSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.secondary} />
        <stop offset="50%" stopColor={COLORS.primary} />
        <stop offset="100%" stopColor={COLORS.accent} />
      </linearGradient>
      <filter id="cloudShadow">
        <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodOpacity="0.3" />
      </filter>
    </defs>
    <rect width="360" height="360" fill="#0a0e27" />
    
    {/* AWS Cloud */}
    <path d="M 70 110 Q 50 90 70 70 Q 90 55 110 70 Q 125 50 145 70 Q 165 55 175 85 Q 165 110 145 120 Z" fill={COLORS.primary} opacity="0.35" stroke={COLORS.primary} strokeWidth="2.5" filter="url(#cloudShadow)" />
    <text x="110" y="95" fontSize="11" fontFamily="sans-serif" fill={COLORS.light} fontWeight="bold" textAnchor="middle">AWS</text>
    
    {/* Azure Cloud */}
    <path d="M 210 110 Q 190 90 210 70 Q 230 55 250 70 Q 265 50 285 85 Q 275 110 255 120 Z" fill={COLORS.secondary} opacity="0.35" stroke={COLORS.secondary} strokeWidth="2.5" filter="url(#cloudShadow)" />
    <text x="250" y="95" fontSize="11" fontFamily="sans-serif" fill={COLORS.light} fontWeight="bold" textAnchor="middle">Azure</text>
    
    {/* Cloud services */}
    <circle cx="80" cy="180" r="20" fill={COLORS.primary} opacity="0.5" stroke={COLORS.primary} strokeWidth="1.5" filter="url(#cloudShadow)" />
    <text x="80" y="188" fontSize="10" fontFamily="monospace" fill={COLORS.light} fontWeight="bold" textAnchor="middle">API</text>
    
    <circle cx="145" cy="180" r="20" fill={COLORS.secondary} opacity="0.5" stroke={COLORS.secondary} strokeWidth="1.5" filter="url(#cloudShadow)" />
    <text x="145" y="188" fontSize="10" fontFamily="monospace" fill={COLORS.light} fontWeight="bold" textAnchor="middle">DB</text>
    
    <circle cx="210" cy="180" r="20" fill={COLORS.accent} opacity="0.5" stroke={COLORS.accent} strokeWidth="1.5" filter="url(#cloudShadow)" />
    <text x="210" y="188" fontSize="10" fontFamily="monospace" fill={COLORS.light} fontWeight="bold" textAnchor="middle">FN</text>
    
    <circle cx="275" cy="180" r="20" fill={COLORS.primary} opacity="0.4" stroke={COLORS.primary} strokeWidth="1.5" filter="url(#cloudShadow)" />
    <text x="275" y="188" fontSize="10" fontFamily="monospace" fill={COLORS.light} fontWeight="bold" textAnchor="middle">CDN</text>
    
    {/* Connection lines */}
    <line x1="80" y1="160" x2="100" y2="115" stroke={COLORS.primary} strokeWidth="2" opacity="0.5" />
    <line x1="145" y1="160" x2="130" y2="115" stroke={COLORS.secondary} strokeWidth="2" opacity="0.5" />
    <line x1="210" y1="160" x2="240" y2="115" stroke={COLORS.accent} strokeWidth="2" opacity="0.5" />
    <line x1="275" y1="160" x2="260" y2="115" stroke={COLORS.primary} strokeWidth="2" opacity="0.4" />
    
    {/* Load balancer */}
    <rect x="145" y="265" width="70" height="35" rx="8" fill="url(#cloudGrad)" opacity="0.4" stroke={COLORS.accent} strokeWidth="2" filter="url(#cloudShadow)" />
    <text x="180" y="287" fontSize="11" fontFamily="monospace" fill={COLORS.light} fontWeight="bold" textAnchor="middle">LB</text>
  </svg>
);

export const QualityAssuranceSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="qaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor={COLORS.primary} />
      </linearGradient>
      <filter id="qaShadow">
        <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodOpacity="0.25" />
      </filter>
    </defs>
    <rect width="360" height="360" fill="#0a0e27" />
    
    {/* Test pipeline stages */}
    <g filter="url(#qaShadow)">
      {/* Unit Tests */}
      <circle cx="70" cy="110" r="28" fill="#1a1a2e" stroke={COLORS.primary} strokeWidth="2.5" />
      <text x="70" y="115" fontSize="18" textAnchor="middle">🧪</text>
      <text x="70" y="160" fontSize="11" fontFamily="sans-serif" fill={COLORS.light} textAnchor="middle" fontWeight="600">Unit</text>
      
      {/* Integration Tests */}
      <circle cx="180" cy="110" r="28" fill="#1a1a2e" stroke={COLORS.secondary} strokeWidth="2.5" />
      <text x="180" y="115" fontSize="18" textAnchor="middle">🔗</text>
      <text x="180" y="160" fontSize="11" fontFamily="sans-serif" fill={COLORS.light} textAnchor="middle" fontWeight="600">Integration</text>
      
      {/* E2E Tests */}
      <circle cx="290" cy="110" r="28" fill="#1a1a2e" stroke={COLORS.accent} strokeWidth="2.5" />
      <text x="290" y="115" fontSize="18" textAnchor="middle">🎯</text>
      <text x="290" y="160" fontSize="11" fontFamily="sans-serif" fill={COLORS.light} textAnchor="middle" fontWeight="600">E2E</text>
      
      {/* Connection arrows */}
      <path d="M 98 110 L 152 110" stroke="url(#qaGrad)" strokeWidth="2.5" fill="none" />
      <path d="M 208 110 L 262 110" stroke="url(#qaGrad)" strokeWidth="2.5" fill="none" />
      <text x="125" y="100" fontSize="12" fill={COLORS.primary} fontWeight="bold">→</text>
      <text x="235" y="100" fontSize="12" fill={COLORS.primary} fontWeight="bold">→</text>
    </g>
    
    {/* Quality score badge */}
    <circle cx="180" cy="250" r="45" fill="url(#qaGrad)" opacity="0.25" stroke="url(#qaGrad)" strokeWidth="2.5" filter="url(#qaShadow)" />
    <text x="180" y="265" fontSize="28" fontWeight="bold" fill="#10B981" textAnchor="middle">✓</text>
    <text x="180" y="300" fontSize="12" fontFamily="sans-serif" fill={COLORS.light} textAnchor="middle" fontWeight="bold">99.9% Pass Rate</text>
  </svg>
);

export const SupportMaintenanceSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="supportGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.accent} />
        <stop offset="50%" stopColor={COLORS.primary} />
        <stop offset="100%" stopColor={COLORS.secondary} />
      </linearGradient>
      <filter id="supportShadow">
        <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodOpacity="0.25" />
      </filter>
    </defs>
    <rect width="360" height="360" fill="#0a0e27" />
    
    {/* 24/7 Support Badge */}
    <circle cx="180" cy="80" r="38" fill="url(#supportGrad)" opacity="0.3" stroke="url(#supportGrad)" strokeWidth="2.5" filter="url(#supportShadow)" />
    <text x="180" y="95" fontSize="32" fontWeight="bold" fill={COLORS.accent} textAnchor="middle">24/7</text>
    
    {/* Support Channels */}
    <g filter="url(#supportShadow)">
      {/* Phone */}
      <circle cx="65" cy="190" r="28" fill={COLORS.primary} opacity="0.3" stroke={COLORS.primary} strokeWidth="2.5" />
      <text x="65" y="195" fontSize="20" textAnchor="middle">📞</text>
      <text x="65" y="245" fontSize="11" fontFamily="sans-serif" fill={COLORS.light} textAnchor="middle" fontWeight="600">Phone</text>
      
      {/* Chat */}
      <circle cx="180" cy="190" r="28" fill={COLORS.secondary} opacity="0.3" stroke={COLORS.secondary} strokeWidth="2.5" />
      <text x="180" y="195" fontSize="20" textAnchor="middle">💬</text>
      <text x="180" y="245" fontSize="11" fontFamily="sans-serif" fill={COLORS.light} textAnchor="middle" fontWeight="600">Live Chat</text>
      
      {/* Email */}
      <circle cx="295" cy="190" r="28" fill={COLORS.accent} opacity="0.3" stroke={COLORS.accent} strokeWidth="2.5" />
      <text x="295" y="195" fontSize="20" textAnchor="middle">📧</text>
      <text x="295" y="245" fontSize="11" fontFamily="sans-serif" fill={COLORS.light} textAnchor="middle" fontWeight="600">Email</text>
    </g>
    
    {/* Uptime Indicator */}
    <rect x="60" y="290" width="240" height="28" rx="14" fill="#1a1a2e" stroke={COLORS.accent} strokeWidth="2" filter="url(#supportShadow)" />
    <rect x="62" y="292" width="236" height="24" rx="12" fill="url(#supportGrad)" opacity="0.4" />
    <text x="180" y="312" fontSize="11" fontFamily="monospace" fill={COLORS.light} textAnchor="middle" fontWeight="bold">99.99% Uptime SLA</text>
  </svg>
);

// ============ FLUTTER DEVELOPER SVGS ============

export const FlutterCrossplatformSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="flutterCrossGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.accent} />
        <stop offset="100%" stopColor={COLORS.primary} />
      </linearGradient>
    </defs>
    <rect width="360" height="360" fill="#0f0f0f" />
    {/* Code editor */}
    <rect x="70" y="60" width="220" height="180" rx="8" fill="#1a1a1a" stroke={COLORS.accent} strokeWidth="2" />
    <rect x="70" y="60" width="220" height="25" fill="url(#flutterCrossGrad)" rx="8" />
    <text x="80" y="78" fontSize="10" fontFamily="monospace" fill={COLORS.light} fontWeight="bold">main.dart</text>
    {/* Code lines */}
    <line x1="85" y1="110" x2="275" y2="110" stroke={COLORS.accent} strokeWidth="1.5" opacity="0.6" />
    <line x1="85" y1="130" x2="250" y2="130" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.6" />
    <line x1="85" y1="150" x2="245" y2="150" stroke={COLORS.secondary} strokeWidth="1.5" opacity="0.6" />
    <line x1="85" y1="170" x2="240" y2="170" stroke={COLORS.accent} strokeWidth="1.5" opacity="0.6" />
    <line x1="85" y1="190" x2="235" y2="190" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.6" />
    
    {/* Output targets */}
    <circle cx="100" cy="280" r="20" fill={COLORS.primary} opacity="0.4" stroke={COLORS.primary} strokeWidth="2" />
    <text x="100" y="285" fontSize="16" textAnchor="middle">📱</text>
    
    <circle cx="180" cy="280" r="20" fill={COLORS.secondary} opacity="0.4" stroke={COLORS.secondary} strokeWidth="2" />
    <text x="180" y="285" fontSize="16" textAnchor="middle">🌐</text>
    
    <circle cx="260" cy="280" r="20" fill={COLORS.accent} opacity="0.4" stroke={COLORS.accent} strokeWidth="2" />
    <text x="260" y="285" fontSize="16" textAnchor="middle">💻</text>
  </svg>
);

export const FlutterUIDesignSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="flutterUIGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} />
        <stop offset="100%" stopColor={COLORS.accent} />
      </linearGradient>
    </defs>
    <rect width="360" height="360" fill="#0f0f0f" />
    {/* Phone wireframe */}
    <rect x="100" y="50" width="160" height="260" rx="20" fill="#1a1a1a" stroke="url(#flutterUIGrad)" strokeWidth="2.5" />
    <rect x="115" y="70" width="130" height="220" fill="#2a2a2a" rx="12" />
    {/* UI Elements */}
    <rect x="125" y="85" width="110" height="30" rx="6" fill={COLORS.primary} opacity="0.6" />
    <circle cx="145" cy="130" r="15" fill={COLORS.secondary} opacity="0.6" />
    <rect x="125" y="160" width="110" height="15" rx="4" fill={COLORS.accent} opacity="0.5" />
    <rect x="125" y="185" width="110" height="15" rx="4" fill={COLORS.primary} opacity="0.5" />
    <rect x="125" y="210" width="110" height="40" rx="6" fill={COLORS.secondary} opacity="0.4" />
  </svg>
);

export const FirebaseIntegrationSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="firebaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFA500" />
        <stop offset="100%" stopColor={COLORS.primary} />
      </linearGradient>
    </defs>
    <rect width="360" height="360" fill="#0f0f0f" />
    {/* App and Firebase */}
    <rect x="80" y="80" width="80" height="80" rx="8" fill={COLORS.primary} opacity="0.3" stroke={COLORS.primary} strokeWidth="2" />
    <text x="120" y="125" fontSize="18" textAnchor="middle">📱</text>
    <text x="120" y="175" fontSize="10" fontFamily="sans-serif" fill={COLORS.light} textAnchor="middle" fontWeight="bold">App</text>
    
    <rect x="200" y="80" width="80" height="80" rx="8" fill="#FFA500" opacity="0.3" stroke="#FFA500" strokeWidth="2" />
    <text x="240" y="125" fontSize="18" textAnchor="middle">🔥</text>
    <text x="240" y="175" fontSize="10" fontFamily="sans-serif" fill={COLORS.light} textAnchor="middle" fontWeight="bold">Firebase</text>
    
    {/* Connection arrow */}
    <path d="M 165 120 L 200 120" stroke="url(#firebaseGrad)" strokeWidth="2.5" fill="none" />
    <polygon points="200,120 195,117 195,123" fill="url(#firebaseGrad)" />
    
    {/* Services below */}
    <circle cx="80" cy="260" r="20" fill={COLORS.primary} opacity="0.4" stroke={COLORS.primary} strokeWidth="2" />
    <text x="80" y="265" fontSize="12" fontFamily="monospace" fill={COLORS.light} textAnchor="middle" fontWeight="bold">DB</text>
    
    <circle cx="140" cy="260" r="20" fill={COLORS.secondary} opacity="0.4" stroke={COLORS.secondary} strokeWidth="2" />
    <text x="140" y="265" fontSize="12" fontFamily="monospace" fill={COLORS.light} textAnchor="middle" fontWeight="bold">Auth</text>
    
    <circle cx="200" cy="260" r="20" fill={COLORS.accent} opacity="0.4" stroke={COLORS.accent} strokeWidth="2" />
    <text x="200" y="265" fontSize="12" fontFamily="monospace" fill={COLORS.light} textAnchor="middle" fontWeight="bold">FN</text>
    
    <circle cx="260" cy="260" r="20" fill={COLORS.primary} opacity="0.4" stroke={COLORS.primary} strokeWidth="2" />
    <text x="260" y="265" fontSize="12" fontFamily="monospace" fill={COLORS.light} textAnchor="middle" fontWeight="bold">Host</text>
  </svg>
);

export const AppDeploymentSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="deployGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.accent} />
        <stop offset="100%" stopColor={COLORS.secondary} />
      </linearGradient>
    </defs>
    <rect width="360" height="360" fill="#0f0f0f" />
    {/* App Store icons */}
    <g transform="translate(70, 80)">
      <rect width="70" height="70" rx="15" fill={COLORS.primary} opacity="0.3" stroke={COLORS.primary} strokeWidth="2" />
      <text x="35" y="42" fontSize="28" textAnchor="middle">🍎</text>
    </g>
    
    <g transform="translate(220, 80)">
      <rect width="70" height="70" rx="15" fill={COLORS.accent} opacity="0.3" stroke={COLORS.accent} strokeWidth="2" />
      <text x="35" y="42" fontSize="28" textAnchor="middle">🤖</text>
    </g>
    
    {/* Deployment flow */}
    <path d="M 105 160 Q 180 140 220 160" stroke="url(#deployGrad)" strokeWidth="2.5" fill="none" />
    <text x="145" y="150" fontSize="11" fontFamily="sans-serif" fill={COLORS.light} fontWeight="bold">Deploy</text>
    
    {/* Store ratings */}
    <g transform="translate(85, 220)">
      <text fontSize="14" fill={COLORS.primary}>★★★★★</text>
      <text x="0" y="20" fontSize="9" fontFamily="sans-serif" fill={COLORS.light}>4.9 Rating</text>
    </g>
    
    <g transform="translate(235, 220)">
      <text fontSize="14" fill={COLORS.accent}>★★★★★</text>
      <text x="0" y="20" fontSize="9" fontFamily="sans-serif" fill={COLORS.light}>4.8 Rating</text>
    </g>
    
    {/* Download count */}
    <rect x="80" y="290" width="200" height="35" rx="8" fill="#1a1a1a" stroke={COLORS.secondary} strokeWidth="1.5" />
    <text x="180" y="308" fontSize="12" fontFamily="sans-serif" fill={COLORS.light} textAnchor="middle" fontWeight="bold">1M+ Downloads</text>
  </svg>
);

// ============ GRAPHIC DESIGNER SVGS ============

export const LogoBrandingSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoBrandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} />
        <stop offset="50%" stopColor={COLORS.accent} />
        <stop offset="100%" stopColor={COLORS.secondary} />
      </linearGradient>
    </defs>
    <rect width="360" height="360" fill="#0f0f0f" />
    {/* Logo mockup */}
    <circle cx="180" cy="140" r="50" fill="url(#logoBrandGrad)" opacity="0.4" stroke={COLORS.primary} strokeWidth="2" />
    <path d="M 160 130 L 180 150 L 200 130 Z" fill={COLORS.primary} />
    {/* Brand guidelines */}
    <g transform="translate(60, 230)">
      <text x="0" y="0" fontSize="12" fontFamily="sans-serif" fill={COLORS.light} fontWeight="bold">Colors</text>
      <circle cx="25" cy="15" r="8" fill={COLORS.primary} />
      <circle cx="50" cy="15" r="8" fill={COLORS.secondary} />
      <circle cx="75" cy="15" r="8" fill={COLORS.accent} />
      <circle cx="100" cy="15" r="8" fill="#14B8A6" />
    </g>
    <g transform="translate(60, 280)">
      <text x="0" y="0" fontSize="12" fontFamily="sans-serif" fill={COLORS.light} fontWeight="bold">Typography</text>
      <text x="0" y="18" fontSize="11" fontFamily="serif" fill={COLORS.light}>Serif</text>
      <text x="80" y="18" fontSize="11" fontFamily="sans-serif" fill={COLORS.light}>Sans</text>
    </g>
  </svg>
);

export const DigitalUIDesignSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="digitalUIGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.secondary} />
        <stop offset="100%" stopColor={COLORS.accent} />
      </linearGradient>
    </defs>
    <rect width="360" height="360" fill="#0f0f0f" />
    {/* Laptop screen */}
    <rect x="60" y="70" width="240" height="160" rx="10" fill="#1a1a1a" stroke="url(#digitalUIGrad)" strokeWidth="2.5" />
    {/* Screen content */}
    <rect x="75" y="85" width="210" height="35" fill={COLORS.primary} opacity="0.5" rx="6" />
    <circle cx="100" cy="130" r="12" fill={COLORS.secondary} opacity="0.5" />
    <rect x="75" y="155" width="210" height="15" fill={COLORS.accent} opacity="0.4" rx="4" />
    {/* Laptop base */}
    <rect x="85" y="230" width="190" height="8" fill={COLORS.secondary} opacity="0.5" rx="2" />
    <polygon points="90,238 270,238 260,250 100,250" fill="#1a1a1a" stroke="url(#digitalUIGrad)" strokeWidth="1" />
  </svg>
);

export const PrintPackagingSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="printGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.accent} />
        <stop offset="100%" stopColor={COLORS.primary} />
      </linearGradient>
    </defs>
    <rect width="360" height="360" fill="#0f0f0f" />
    {/* Business card */}
    <rect x="70" y="80" width="100" height="60" rx="4" fill={COLORS.primary} opacity="0.3" stroke={COLORS.primary} strokeWidth="2" />
    <text x="120" y="115" fontSize="11" fontFamily="serif" fill={COLORS.light} textAnchor="middle" fontWeight="bold">Business Card</text>
    {/* Brochure */}
    <rect x="190" y="80" width="100" height="60" rx="4" fill={COLORS.secondary} opacity="0.3" stroke={COLORS.secondary} strokeWidth="2" />
    <text x="240" y="115" fontSize="11" fontFamily="serif" fill={COLORS.light} textAnchor="middle" fontWeight="bold">Brochure</text>
    {/* Package */}
    <g transform="translate(110, 190)">
      <path d="M 0 20 L 40 0 L 80 20 L 80 60 L 0 60 Z" fill={COLORS.accent} opacity="0.3" stroke={COLORS.accent} strokeWidth="2" />
      <text x="40" y="40" fontSize="11" fontFamily="serif" fill={COLORS.light} textAnchor="middle" fontWeight="bold">Box</text>
    </g>
    {/* Label */}
    <rect x="70" y="280" width="220" height="40" rx="6" fill="#1a1a1a" stroke="url(#printGrad)" strokeWidth="2" />
    <text x="180" y="308" fontSize="12" fontFamily="sans-serif" fill={COLORS.light} textAnchor="middle" fontWeight="bold">Print Ready Files</text>
  </svg>
);

export const CreativeStrategySVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="strategySVGGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} />
        <stop offset="100%" stopColor={COLORS.secondary} />
      </linearGradient>
    </defs>
    <rect width="360" height="360" fill="#0f0f0f" />
    {/* Brainstorm circles */}
    <circle cx="100" cy="100" r="25" fill={COLORS.primary} opacity="0.3" stroke={COLORS.primary} strokeWidth="2" />
    <text x="100" y="105" fontSize="16" textAnchor="middle">💡</text>
    
    <circle cx="180" cy="80" r="25" fill={COLORS.secondary} opacity="0.3" stroke={COLORS.secondary} strokeWidth="2" />
    <text x="180" y="85" fontSize="16" textAnchor="middle">🎨</text>
    
    <circle cx="260" cy="100" r="25" fill={COLORS.accent} opacity="0.3" stroke={COLORS.accent} strokeWidth="2" />
    <text x="260" y="105" fontSize="16" textAnchor="middle">✨</text>
    {/* Central hub */}
    <circle cx="180" cy="180" r="40" fill="url(#strategySVGGrad)" opacity="0.2" stroke={COLORS.primary} strokeWidth="2" />
    <text x="180" y="190" fontSize="18" textAnchor="middle" fontWeight="bold" fill={COLORS.primary}>IDEA</text>
    {/* Concept sketches */}
    <rect x="80" y="270" width="50" height="50" rx="4" fill={COLORS.primary} opacity="0.2" stroke={COLORS.primary} strokeWidth="1.5" />
    <rect x="155" y="270" width="50" height="50" rx="4" fill={COLORS.secondary} opacity="0.2" stroke={COLORS.secondary} strokeWidth="1.5" />
    <rect x="230" y="270" width="50" height="50" rx="4" fill={COLORS.accent} opacity="0.2" stroke={COLORS.accent} strokeWidth="1.5" />
  </svg>
);

// ============ HERO SVGS (Main Page SVGs) ============

// Android Developer Hero SVG
export const AndroidDeveloperSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="androidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} />
        <stop offset="100%" stopColor={COLORS.secondary} />
      </linearGradient>
    </defs>
    <rect width="360" height="360" fill="#0f0f0f" />
    <rect x="110" y="60" width="140" height="240" rx="15" fill="#1a1a1a" stroke={COLORS.primary} strokeWidth="3" />
    <rect x="120" y="75" width="120" height="210" rx="8" fill="#2a2a2a" />
    <rect x="120" y="75" width="120" height="20" fill="url(#androidGrad)" rx="8" />
    <circle cx="128" cy="85" r="2.5" fill={COLORS.light} />
    <circle cx="135" cy="85" r="2.5" fill={COLORS.light} />
    <rect x="130" y="105" width="20" height="20" rx="4" fill={COLORS.primary} opacity="0.8" />
    <rect x="160" y="105" width="20" height="20" rx="4" fill={COLORS.secondary} opacity="0.8" />
    <rect x="190" y="105" width="20" height="20" rx="4" fill={COLORS.accent} opacity="0.8" />
    <rect x="130" y="135" width="20" height="20" rx="4" fill={COLORS.accent} opacity="0.8" />
    <rect x="160" y="135" width="20" height="20" rx="4" fill={COLORS.primary} opacity="0.8" />
    <rect x="190" y="135" width="20" height="20" rx="4" fill={COLORS.secondary} opacity="0.8" />
    <text x="130" y="175" fontSize="24" fontFamily="monospace" fill={COLORS.primary} fontWeight="bold">&lt;</text>
    <text x="145" y="175" fontSize="14" fontFamily="monospace" fill={COLORS.light}>/&gt;</text>
    <rect x="145" y="275" width="70" height="3" rx="1.5" fill={COLORS.light} opacity="0.5" />
    <circle cx="180" cy="310" r="15" fill={COLORS.primary} opacity="0.3" />
    <text x="175" y="315" fontSize="12" fontFamily="sans-serif" fill={COLORS.primary} fontWeight="bold">Kt</text>
    <circle cx="260" cy="280" r="25" fill={COLORS.primary} opacity="0.2" stroke={COLORS.primary} strokeWidth="2" />
    <text x="248" y="286" fontSize="14" fontFamily="sans-serif" fill={COLORS.primary} fontWeight="bold">DEV</text>
  </svg>
);

// Content Writer Hero SVG
export const ContentWriterSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="writerHeroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} />
        <stop offset="50%" stopColor={COLORS.accent} />
        <stop offset="100%" stopColor={COLORS.secondary} />
      </linearGradient>
      <filter id="writerHeroShadow">
        <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.35" />
      </filter>
    </defs>
    <rect width="360" height="360" fill="#0a0e27" />
    
    {/* Typewriter/Document */}
    <rect x="80" y="50" width="200" height="260" rx="16" fill="#1a1a2e" stroke="url(#writerHeroGrad)" strokeWidth="2.5" filter="url(#writerHeroShadow)" />
    
    {/* Document header */}
    <rect x="80" y="50" width="200" height="50" rx="16" fill="url(#writerHeroGrad)" opacity="0.4" />
    <text x="180" y="83" fontSize="14" fontFamily="serif" fill={COLORS.light} fontWeight="bold" textAnchor="middle">Epic Content</text>
    
    {/* Content lines */}
    <rect x="95" y="115" width="170" height="8" rx="2" fill={COLORS.primary} opacity="0.6" />
    <rect x="95" y="130" width="165" height="6" rx="2" fill={COLORS.accent} opacity="0.5" />
    <rect x="95" y="142" width="160" height="6" rx="2" fill={COLORS.accent} opacity="0.4" />
    
    <rect x="95" y="165" width="170" height="8" rx="2" fill={COLORS.secondary} opacity="0.5" />
    <rect x="95" y="180" width="165" height="6" rx="2" fill={COLORS.secondary} opacity="0.4" />
    <rect x="95" y="192" width="160" height="6" rx="2" fill={COLORS.secondary} opacity="0.3" />
    
    <rect x="95" y="215" width="170" height="8" rx="2" fill={COLORS.accent} opacity="0.5" />
    <rect x="95" y="230" width="165" height="6" rx="2" fill={COLORS.primary} opacity="0.4" />
    <rect x="95" y="242" width="160" height="6" rx="2" fill={COLORS.primary} opacity="0.3" />
    
    {/* Pen/Writing indicator */}
    <circle cx="270" cy="120" r="22" fill={COLORS.primary} opacity="0.3" stroke={COLORS.primary} strokeWidth="2" filter="url(#writerHeroShadow)" />
    <text x="270" y="128" fontSize="20" textAnchor="middle">✍️</text>
    
    {/* SEO badge */}
    <rect x="75" y="290" width="55" height="25" rx="12" fill={COLORS.secondary} opacity="0.35" stroke={COLORS.secondary} strokeWidth="1.5" />
    <text x="102" y="308" fontSize="10" fontWeight="bold" fill={COLORS.light} textAnchor="middle">SEO Pro</text>
    
    {/* Content badge */}
    <rect x="230" y="290" width="55" height="25" rx="12" fill={COLORS.accent} opacity="0.35" stroke={COLORS.accent} strokeWidth="1.5" />
    <text x="257" y="308" fontSize="10" fontWeight="bold" fill={COLORS.light} textAnchor="middle">Expert</text>
  </svg>
);

// Software Developer Hero SVG
export const SoftwareDeveloperSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="softwareGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} />
        <stop offset="50%" stopColor={COLORS.accent} />
        <stop offset="100%" stopColor={COLORS.secondary} />
      </linearGradient>
      <filter id="softwareShadow">
        <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.35" />
      </filter>
    </defs>
    <rect width="360" height="360" fill="#0a0e27" />
    
    {/* Code editor window */}
    <rect x="60" y="50" width="240" height="260" rx="16" fill="#1a1a2e" stroke="url(#softwareGrad)" strokeWidth="2.5" filter="url(#softwareShadow)" />
    
    {/* Editor header */}
    <rect x="60" y="50" width="240" height="35" rx="16" fill="url(#softwareGrad)" opacity="0.3" />
    <circle cx="80" cy="67" r="3" fill={COLORS.accent} opacity="0.6" />
    <circle cx="95" cy="67" r="3" fill={COLORS.secondary} opacity="0.6" />
    <circle cx="110" cy="67" r="3" fill={COLORS.primary} opacity="0.6" />
    
    {/* Code lines with syntax coloring */}
    <text x="75" y="100" fontSize="9" fontFamily="monospace" fill={COLORS.primary} fontWeight="bold">const</text>
    <text x="120" y="100" fontSize="9" fontFamily="monospace" fill={COLORS.accent}>app</text>
    <text x="150" y="100" fontSize="9" fontFamily="monospace" fill={COLORS.light}>=</text>
    <text x="170" y="100" fontSize="9" fontFamily="monospace" fill={COLORS.secondary}>new</text>
    <text x="220" y="100" fontSize="9" fontFamily="monospace" fill={COLORS.accent}>App();</text>
    
    <text x="75" y="120" fontSize="9" fontFamily="monospace" fill={COLORS.primary} fontWeight="bold">app</text>
    <text x="105" y="120" fontSize="9" fontFamily="monospace" fill={COLORS.light}>.</text>
    <text x="115" y="120" fontSize="9" fontFamily="monospace" fill={COLORS.secondary}>start</text>
    <text x="165" y="120" fontSize="9" fontFamily="monospace" fill={COLORS.light}>();</text>
    
    <text x="75" y="140" fontSize="9" fontFamily="monospace" fill={COLORS.secondary} fontWeight="bold">for</text>
    <text x="110" y="140" fontSize="9" fontFamily="monospace" fill={COLORS.light}>(</text>
    <text x="125" y="140" fontSize="9" fontFamily="monospace" fill={COLORS.primary}>let</text>
    <text x="165" y="140" fontSize="9" fontFamily="monospace" fill={COLORS.accent}>i</text>
    <text x="190" y="140" fontSize="9" fontFamily="monospace" fill={COLORS.light}>=</text>
    <text x="210" y="140" fontSize="9" fontFamily="monospace" fill={COLORS.secondary}>0)</text>
    
    {/* Terminal output */}
    <rect x="70" y="175" width="200" height="80" rx="6" fill="#0a0a15" stroke={COLORS.accent} strokeWidth="1" opacity="0.8" />
    <text x="80" y="195" fontSize="8" fontFamily="monospace" fill={COLORS.secondary}>&gt;</text>
    <text x="95" y="195" fontSize="8" fontFamily="monospace" fill={COLORS.light}>Build successful</text>
    
    <text x="80" y="215" fontSize="8" fontFamily="monospace" fill={COLORS.secondary}>&gt;</text>
    <text x="95" y="215" fontSize="8" fontFamily="monospace" fill={COLORS.accent}>✓ Tests passed</text>
    
    <text x="80" y="235" fontSize="8" fontFamily="monospace" fill={COLORS.secondary}>&gt;</text>
    <text x="95" y="235" fontSize="8" fontFamily="monospace" fill={COLORS.primary}>Deploying...</text>
    
    {/* Status indicator */}
    <circle cx="290" cy="70" r="16" fill={COLORS.primary} opacity="0.25" stroke={COLORS.primary} strokeWidth="2" filter="url(#softwareShadow)" />
    <circle cx="290" cy="70" r="6" fill="#10B981" />
  </svg>
);

// Flutter Developer Hero SVG
export const FlutterDeveloperSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="flutterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.accent} />
        <stop offset="100%" stopColor={COLORS.primary} />
      </linearGradient>
    </defs>
    <rect width="360" height="360" fill="#0f0f0f" />
    <rect x="60" y="90" width="110" height="180" rx="12" fill="#1a1a1a" stroke={COLORS.accent} strokeWidth="2.5" />
    <rect x="70" y="105" width="90" height="150" rx="8" fill="#2a2a2a" />
    <circle cx="115" cy="140" r="15" fill={COLORS.accent} opacity="0.7" />
    <rect x="100" y="165" width="30" height="4" rx="2" fill={COLORS.accent} opacity="0.6" />
    <rect x="100" y="175" width="30" height="4" rx="2" fill={COLORS.primary} opacity="0.6" />
    <rect x="190" y="90" width="110" height="180" rx="12" fill="#1a1a1a" stroke={COLORS.primary} strokeWidth="2.5" />
    <rect x="200" y="105" width="90" height="150" rx="8" fill="#2a2a2a" />
    <circle cx="245" cy="140" r="15" fill={COLORS.primary} opacity="0.7" />
    <rect x="230" y="165" width="30" height="4" rx="2" fill={COLORS.secondary} opacity="0.6" />
    <rect x="230" y="175" width="30" height="4" rx="2" fill={COLORS.accent} opacity="0.6" />
    <line x1="175" y1="180" x2="185" y2="180" stroke="url(#flutterGrad)" strokeWidth="2.5" strokeLinecap="round" />
    <polygon points="188,180 183,177 183,183" fill="url(#flutterGrad)" />
    <circle cx="180" cy="300" r="28" fill={COLORS.accent} opacity="0.2" stroke={COLORS.accent} strokeWidth="2" />
    <path d="M 180 280 Q 175 285 180 295 Q 185 285 180 280" fill={COLORS.accent} />
    <path d="M 175 290 Q 170 292 175 298" stroke={COLORS.primary} strokeWidth="1.5" fill="none" />
    <path d="M 185 290 Q 190 292 185 298" stroke={COLORS.accent} strokeWidth="1.5" fill="none" />
    <rect x="95" y="290" width="70" height="25" rx="4" fill={COLORS.primary} opacity="0.15" stroke={COLORS.primary} strokeWidth="1" />
    <text x="110" y="308" fontSize="10" fontFamily="sans-serif" fill={COLORS.primary} fontWeight="bold">iOS + Android</text>
  </svg>
);

// Graphic Designer Hero SVG
export const GraphicDesignerSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="designGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} />
        <stop offset="50%" stopColor={COLORS.accent} />
        <stop offset="100%" stopColor={COLORS.secondary} />
      </linearGradient>
    </defs>
    <rect width="360" height="360" fill="#0f0f0f" />
    <rect x="80" y="70" width="200" height="200" rx="15" fill="#1a1a1a" stroke={COLORS.primary} strokeWidth="2.5" />
    <circle cx="130" cy="120" r="25" fill={COLORS.primary} opacity="0.6" />
    <rect x="180" y="95" width="50" height="50" rx="5" fill={COLORS.secondary} opacity="0.6" />
    <polygon points="210,160 235,210 185,210" fill={COLORS.accent} opacity="0.6" />
    <circle cx="100" cy="290" r="12" fill={COLORS.primary} opacity="0.8" />
    <circle cx="130" cy="290" r="12" fill={COLORS.secondary} opacity="0.8" />
    <circle cx="160" cy="290" r="12" fill={COLORS.accent} opacity="0.8" />
    <circle cx="190" cy="290" r="12" fill="#14B8A6" opacity="0.8" />
    <circle cx="220" cy="290" r="12" fill="#EC4899" opacity="0.8" />
    <g transform="translate(270, 120)">
      <line x1="0" y1="0" x2="0" y2="20" stroke={COLORS.primary} strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="0" cy="25" rx="8" ry="6" fill={COLORS.secondary} opacity="0.7" />
    </g>
    <circle cx="80" cy="320" r="18" fill={COLORS.accent} opacity="0.2" stroke={COLORS.accent} strokeWidth="1.5" />
    <text x="71" y="325" fontSize="10" fontFamily="sans-serif" fill={COLORS.accent} fontWeight="bold">DES</text>
  </svg>
);

// iOS Developer Hero SVG
export const IOSDeveloperSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="iosGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.accent} />
        <stop offset="100%" stopColor={COLORS.primary} />
      </linearGradient>
    </defs>
    <rect width="360" height="360" fill="#0f0f0f" />
    <rect x="100" y="50" width="160" height="260" rx="20" fill="#1a1a1a" stroke={COLORS.accent} strokeWidth="3" />
    <rect x="115" y="65" width="130" height="230" rx="15" fill="#2a2a2a" />
    <rect x="115" y="65" width="130" height="20" fill="url(#iosGrad)" rx="15" />
    <circle cx="175" cy="75" r="1.5" fill={COLORS.light} />
    <rect x="130" y="100" width="20" height="20" rx="4" fill={COLORS.accent} opacity="0.8" />
    <rect x="160" y="100" width="20" height="20" rx="4" fill={COLORS.primary} opacity="0.8" />
    <rect x="190" y="100" width="20" height="20" rx="4" fill={COLORS.secondary} opacity="0.8" />
    <rect x="130" y="135" width="20" height="20" rx="4" fill={COLORS.primary} opacity="0.8" />
    <rect x="160" y="135" width="20" height="20" rx="4" fill={COLORS.accent} opacity="0.8" />
    <rect x="190" y="135" width="20" height="20" rx="4" fill={COLORS.secondary} opacity="0.8" />
    <text x="145" y="175" fontSize="10" fontFamily="monospace" fill={COLORS.accent} fontWeight="bold">Swift</text>
    <circle cx="140" cy="215" r="12" fill={COLORS.accent} opacity="0.3" />
    <circle cx="175" cy="215" r="12" fill={COLORS.primary} opacity="0.3" />
    <circle cx="210" cy="215" r="12" fill={COLORS.secondary} opacity="0.3" />
    <rect x="145" y="250" width="70" height="3" rx="1.5" fill={COLORS.light} opacity="0.5" />
    <circle cx="240" cy="100" r="25" fill={COLORS.accent} opacity="0.2" stroke={COLORS.accent} strokeWidth="2" />
    <text x="228" y="106" fontSize="12" fontFamily="sans-serif" fill={COLORS.accent} fontWeight="bold">iOS</text>
  </svg>
);

// Node.js Developer Hero SVG
export const NodeJSDeveloperSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.accent} />
        <stop offset="100%" stopColor={COLORS.secondary} />
      </linearGradient>
    </defs>
    <rect width="360" height="360" fill="#0f0f0f" />
    <rect x="80" y="60" width="200" height="200" rx="12" fill="#1a1a1a" stroke={COLORS.accent} strokeWidth="2.5" />
    <rect x="95" y="80" width="170" height="160" rx="8" fill="#0a0a0a" />
    <text x="110" y="100" fontSize="11" fontFamily="monospace" fill={COLORS.accent} fontWeight="bold">const server =</text>
    <text x="110" y="120" fontSize="11" fontFamily="monospace" fill={COLORS.primary}>&nbsp;&nbsp;require('express')</text>
    <text x="110" y="140" fontSize="11" fontFamily="monospace" fill={COLORS.secondary}>&nbsp;&nbsp;app.listen(3000)</text>
    <text x="110" y="160" fontSize="11" fontFamily="monospace" fill={COLORS.accent}>&gt;</text>
    <g transform="translate(260, 140)">
      <circle cx="0" cy="0" r="28" fill={COLORS.accent} opacity="0.2" stroke={COLORS.accent} strokeWidth="2" />
      <text x="-18" y="6" fontSize="14" fontFamily="sans-serif" fill={COLORS.accent} fontWeight="bold">Node</text>
    </g>
    <g transform="translate(100, 280)">
      <circle cx="0" cy="0" r="15" fill={COLORS.primary} opacity="0.4" />
      <circle cx="30" cy="0" r="15" fill={COLORS.secondary} opacity="0.4" />
      <circle cx="60" cy="0" r="15" fill={COLORS.accent} opacity="0.4" />
    </g>
  </svg>
);

// Java Developer Hero SVG
export const JavaDeveloperSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="javaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} />
        <stop offset="100%" stopColor={COLORS.secondary} />
      </linearGradient>
    </defs>
    <rect width="360" height="360" fill="#0f0f0f" />
    <rect x="70" y="50" width="220" height="260" rx="15" fill="#1a1a1a" stroke={COLORS.primary} strokeWidth="2.5" />
    <rect x="85" y="70" width="190" height="220" rx="10" fill="#0a0a0a" />
    <text x="100" y="95" fontSize="12" fontFamily="monospace" fill={COLORS.primary} fontWeight="bold">public class App</text>
    <text x="100" y="115" fontSize="11" fontFamily="monospace" fill={COLORS.secondary}>{"  main() {"}</text>
    <text x="100" y="135" fontSize="11" fontFamily="monospace" fill={COLORS.accent}>    run();</text>
    <text x="100" y="155" fontSize="11" fontFamily="monospace" fill={COLORS.secondary}>{"  }"}</text>
    <text x="100" y="175" fontSize="11" fontFamily="monospace" fill={COLORS.primary}>{"}"}</text>
    <circle cx="240" cy="200" r="30" fill={COLORS.primary} opacity="0.2" stroke={COLORS.primary} strokeWidth="2" />
    <text x="225" y="210" fontSize="16" fontFamily="sans-serif" fill={COLORS.primary} fontWeight="bold">♨</text>
    <g transform="translate(120, 250)">
      <rect x="0" y="0" width="15" height="15" rx="2" fill={COLORS.primary} opacity="0.5" />
      <rect x="25" y="0" width="15" height="15" rx="2" fill={COLORS.secondary} opacity="0.5" />
      <rect x="50" y="0" width="15" height="15" rx="2" fill={COLORS.accent} opacity="0.5" />
      <rect x="75" y="0" width="15" height="15" rx="2" fill={COLORS.primary} opacity="0.4" />
    </g>
  </svg>
);

// Web Developer Hero SVG
export const WebDeveloperSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="webGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} />
        <stop offset="100%" stopColor={COLORS.accent} />
      </linearGradient>
    </defs>
    <rect width="360" height="360" fill="#0f0f0f" />
    <rect x="60" y="50" width="240" height="260" rx="15" fill="#1a1a1a" stroke={COLORS.primary} strokeWidth="3" />
    <rect x="60" y="50" width="240" height="50" fill="url(#webGrad)" rx="15" />
    <text x="75" y="78" fontSize="14" fontFamily="serif" fill={COLORS.light} fontWeight="bold">My Awesome Website</text>
    <line x1="75" y1="95" x2="285" y2="95" stroke={COLORS.primary} strokeWidth="2" opacity="0.7" />
    <rect x="75" y="115" width="210" height="150" rx="4" fill="#2a2a2a" />
    <rect x="85" y="125" width="80" height="30" rx="3" fill={COLORS.primary} opacity="0.5" />
    <rect x="85" y="165" width="190" height="8" rx="2" fill={COLORS.accent} opacity="0.4" />
    <rect x="85" y="180" width="190" height="8" rx="2" fill={COLORS.primary} opacity="0.3" />
    <rect x="85" y="195" width="150" height="8" rx="2" fill={COLORS.secondary} opacity="0.3" />
    <circle cx="280" cy="150" r="20" fill={COLORS.accent} opacity="0.2" stroke={COLORS.accent} strokeWidth="1.5" />
    <circle cx="50" cy="300" r="22" fill={COLORS.primary} opacity="0.2" stroke={COLORS.primary} strokeWidth="2" />
    <text x="39" y="306" fontSize="11" fontFamily="sans-serif" fill={COLORS.primary} fontWeight="bold">WEB</text>
  </svg>
);

// SMM Expert Hero SVG
export const SMMExpertSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="smmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.accent} />
        <stop offset="100%" stopColor={COLORS.primary} />
      </linearGradient>
    </defs>
    <rect width="360" height="360" fill="#0f0f0f" />
    <circle cx="100" cy="80" r="45" fill="#1a1a1a" stroke={COLORS.accent} strokeWidth="2.5" />
    <circle cx="100" cy="80" r="35" fill="#2a2a2a" />
    <text x="92" y="88" fontSize="20" fill={COLORS.accent} fontWeight="bold">f</text>
    <circle cx="260" cy="80" r="45" fill="#1a1a1a" stroke={COLORS.primary} strokeWidth="2.5" />
    <circle cx="260" cy="80" r="35" fill="#2a2a2a" />
    <text x="246" y="90" fontSize="22" fill={COLORS.primary} fontWeight="bold">𝕏</text>
    <rect x="80" y="170" width="200" height="150" rx="12" fill="#1a1a1a" stroke={COLORS.secondary} strokeWidth="2" />
    <rect x="95" y="185" width="170" height="35" rx="4" fill={COLORS.accent} opacity="0.3" />
    <text x="110" y="208" fontSize="11" fontFamily="sans-serif" fill={COLORS.light} fontWeight="bold">Trending: #marketing</text>
    <rect x="95" y="230" width="170" height="8" rx="2" fill={COLORS.primary} opacity="0.3" />
    <rect x="95" y="243" width="170" height="8" rx="2" fill={COLORS.accent} opacity="0.3" />
    <rect x="95" y="256" width="140" height="8" rx="2" fill={COLORS.secondary} opacity="0.3" />
    <g transform="translate(180, 320)">
      <circle cx="-20" cy="0" r="8" fill={COLORS.accent} opacity="0.7" />
      <circle cx="0" cy="0" r="8" fill={COLORS.primary} opacity="0.7" />
      <circle cx="20" cy="0" r="8" fill={COLORS.secondary} opacity="0.7" />
    </g>
  </svg>
);

// SEO Expert Hero SVG
export const SEOExpertSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="seoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} />
        <stop offset="100%" stopColor={COLORS.accent} />
      </linearGradient>
    </defs>
    <rect width="360" height="360" fill="#0f0f0f" />
    <rect x="70" y="60" width="220" height="240" rx="15" fill="#1a1a1a" stroke={COLORS.primary} strokeWidth="2.5" />
    <rect x="85" y="75" width="190" height="40" fill="url(#seoGrad)" rx="10" />
    <text x="100" y="103" fontSize="13" fontFamily="serif" fill={COLORS.light} fontWeight="bold">SEO Strategy 2025</text>
    <line x1="100" y1="125" x2="255" y2="125" stroke={COLORS.primary} strokeWidth="2" opacity="0.6" />
    <g transform="translate(100, 145)">
      <circle cx="10" cy="0" r="8" fill={COLORS.accent} opacity="0.7" />
      <text x="25" y="5" fontSize="11" fontFamily="sans-serif" fill={COLORS.light} fontWeight="bold">Keyword Research</text>
    </g>
    <g transform="translate(100, 170)">
      <circle cx="10" cy="0" r="8" fill={COLORS.primary} opacity="0.7" />
      <text x="25" y="5" fontSize="11" fontFamily="sans-serif" fill={COLORS.light} fontWeight="bold">On-Page Optimization</text>
    </g>
    <g transform="translate(100, 195)">
      <circle cx="10" cy="0" r="8" fill={COLORS.secondary} opacity="0.7" />
      <text x="25" y="5" fontSize="11" fontFamily="sans-serif" fill={COLORS.light} fontWeight="bold">Link Building</text>
    </g>
    <circle cx="280" cy="240" r="28" fill={COLORS.primary} opacity="0.2" stroke={COLORS.primary} strokeWidth="2" />
    <text x="268" y="246" fontSize="12" fontFamily="sans-serif" fill={COLORS.primary} fontWeight="bold">📈</text>
  </svg>
);

// PPC Expert Hero SVG
export const PPCExpertSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ppcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} />
        <stop offset="100%" stopColor={COLORS.secondary} />
      </linearGradient>
    </defs>
    <rect width="360" height="360" fill="#0f0f0f" />
    <rect x="60" y="50" width="240" height="260" rx="15" fill="#1a1a1a" stroke={COLORS.primary} strokeWidth="2.5" />
    <rect x="75" y="65" width="210" height="50" fill="url(#ppcGrad)" rx="10" />
    <text x="90" y="96" fontSize="14" fontFamily="sans-serif" fill={COLORS.light} fontWeight="bold">Google Ads Campaign</text>
    <g transform="translate(100, 140)">
      <rect x="0" y="0" width="20" height="60" rx="2" fill={COLORS.primary} opacity="0.7" />
      <rect x="30" y="20" width="20" height="40" rx="2" fill={COLORS.accent} opacity="0.7" />
      <rect x="60" y="35" width="20" height="25" rx="2" fill={COLORS.secondary} opacity="0.7" />
      <rect x="90" y="10" width="20" height="50" rx="2" fill={COLORS.primary} opacity="0.6" />
      <rect x="120" y="25" width="20" height="35" rx="2" fill={COLORS.accent} opacity="0.6" />
    </g>
    <circle cx="70" cy="260" r="15" fill={COLORS.secondary} opacity="0.3" stroke={COLORS.secondary} strokeWidth="1.5" />
    <text x="58" y="266" fontSize="10" fontFamily="sans-serif" fill={COLORS.secondary} fontWeight="bold">ROI</text>
    <circle cx="290" cy="260" r="15" fill={COLORS.accent} opacity="0.3" stroke={COLORS.accent} strokeWidth="1.5" />
    <text x="278" y="266" fontSize="10" fontFamily="sans-serif" fill={COLORS.accent} fontWeight="bold">CPC</text>
  </svg>
);

// ============ iOS DEVELOPER SECTION SVGS ============

export const SwiftDevelopmentSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="360" fill="#0f0f0f" />
    <rect x="80" y="80" width="200" height="200" rx="15" fill="#1a1a1a" stroke={COLORS.primary} strokeWidth="2.5" />
    <text x="180" y="120" fontSize="24" fontFamily="monospace" fill={COLORS.primary} fontWeight="bold" textAnchor="middle">swift</text>
    <rect x="100" y="140" width="160" height="6" rx="3" fill={COLORS.secondary} opacity="0.6" />
    <rect x="100" y="155" width="140" height="4" rx="2" fill={COLORS.secondary} opacity="0.4" />
    <rect x="100" y="165" width="150" height="4" rx="2" fill={COLORS.secondary} opacity="0.4" />
    <circle cx="60" cy="300" r="25" fill={COLORS.accent} opacity="0.3" stroke={COLORS.accent} strokeWidth="2" />
    <text x="52" y="306" fontSize="12" fontFamily="sans-serif" fill={COLORS.accent} fontWeight="bold">iOS</text>
    <circle cx="300" cy="300" r="25" fill={COLORS.primary} opacity="0.3" stroke={COLORS.primary} strokeWidth="2" />
    <text x="291" y="306" fontSize="12" fontFamily="sans-serif" fill={COLORS.primary} fontWeight="bold">App</text>
  </svg>
);

export const SwiftUIDevelopmentSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="360" fill="#0f0f0f" />
    <g transform="translate(70, 70)">
      <rect width="220" height="220" rx="12" fill="#1a1a1a" stroke={COLORS.primary} strokeWidth="2" />
      <rect x="15" y="15" width="50" height="50" rx="6" fill={COLORS.primary} opacity="0.6" />
      <rect x="75" y="15" width="50" height="50" rx="6" fill={COLORS.secondary} opacity="0.6" />
      <rect x="135" y="15" width="50" height="50" rx="6" fill={COLORS.accent} opacity="0.6" />
      <rect x="15" y="75" width="50" height="50" rx="6" fill={COLORS.accent} opacity="0.5" />
      <rect x="75" y="75" width="50" height="50" rx="6" fill={COLORS.primary} opacity="0.5" />
      <rect x="135" y="75" width="50" height="50" rx="6" fill={COLORS.secondary} opacity="0.5" />
    </g>
    <circle cx="80" cy="320" r="18" fill={COLORS.secondary} opacity="0.3" stroke={COLORS.secondary} strokeWidth="1.5" />
    <text x="71" y="326" fontSize="10" fontFamily="sans-serif" fill={COLORS.secondary} fontWeight="bold">UI</text>
  </svg>
);

export const CoreDataSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="360" fill="#0f0f0f" />
    <circle cx="120" cy="100" r="30" fill="#1a1a1a" stroke={COLORS.primary} strokeWidth="2.5" />
    <text x="120" y="108" fontSize="14" fontFamily="sans-serif" fill={COLORS.primary} fontWeight="bold" textAnchor="middle">DB</text>
    <line x1="150" y1="100" x2="210" y2="100" stroke={COLORS.secondary} strokeWidth="2.5" markerEnd="url(#arrowhead)" />
    <circle cx="240" cy="100" r="30" fill="#1a1a1a" stroke={COLORS.secondary} strokeWidth="2.5" />
    <text x="240" y="108" fontSize="14" fontFamily="sans-serif" fill={COLORS.secondary} fontWeight="bold" textAnchor="middle">API</text>
    <line x1="150" y1="100" x2="150" y2="160" stroke={COLORS.accent} strokeWidth="2.5" />
    <circle cx="150" cy="190" r="30" fill="#1a1a1a" stroke={COLORS.accent} strokeWidth="2.5" />
    <text x="150" y="198" fontSize="12" fontFamily="sans-serif" fill={COLORS.accent} fontWeight="bold" textAnchor="middle">SYNC</text>
    <rect x="80" y="260" width="200" height="60" rx="8" fill="#1a1a1a" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.7" />
    <text x="180" y="285" fontSize="11" fontFamily="sans-serif" fill={COLORS.primary} fontWeight="bold" textAnchor="middle">Data Persistence</text>
    <text x="180" y="305" fontSize="9" fontFamily="sans-serif" fill={COLORS.textMuted} textAnchor="middle">Efficient Storage</text>
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <polygon points="0 0, 10 3, 0 6" fill={COLORS.secondary} />
      </marker>
    </defs>
  </svg>
);

export const AppStoreSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="360" fill="#0f0f0f" />
    <g transform="translate(90, 80)">
      <rect width="180" height="200" rx="12" fill="#1a1a1a" stroke={COLORS.primary} strokeWidth="2.5" />
      <circle cx="45" cy="50" r="25" fill={COLORS.primary} opacity="0.7" />
      <text x="45" y="56" fontSize="14" fontFamily="sans-serif" fill={COLORS.light} fontWeight="bold" textAnchor="middle">App</text>
      <rect x="15" y="90" width="130" height="20" rx="4" fill={COLORS.secondary} opacity="0.6" />
      <rect x="15" y="120" width="130" height="8" rx="2" fill={COLORS.secondary} opacity="0.4" />
      <rect x="15" y="135" width="120" height="8" rx="2" fill={COLORS.secondary} opacity="0.4" />
    </g>
    <circle cx="80" cy="310" r="18" fill={COLORS.accent} opacity="0.3" stroke={COLORS.accent} strokeWidth="1.5" />
    <text x="71" y="316" fontSize="10" fontFamily="sans-serif" fill={COLORS.accent} fontWeight="bold">ASO</text>
  </svg>
);

// ============ NODE.JS DEVELOPER SECTION SVGS ============

export const ExpressJSSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="360" fill="#0f0f0f" />
    <rect x="80" y="100" width="200" height="160" rx="10" fill="#1a1a1a" stroke={COLORS.primary} strokeWidth="2.5" />
    <text x="180" y="135" fontSize="18" fontFamily="monospace" fill={COLORS.primary} fontWeight="bold" textAnchor="middle">app.</text>
    <text x="180" y="160" fontSize="16" fontFamily="monospace" fill={COLORS.secondary}>listen(3000)</text>
    <rect x="100" y="180" width="160" height="30" rx="4" fill={COLORS.accent} opacity="0.3" stroke={COLORS.accent} strokeWidth="1.5" />
    <text x="180" y="202" fontSize="12" fontFamily="monospace" fill={COLORS.accent} textAnchor="middle">RESTful API</text>
    <circle cx="70" cy="300" r="20" fill={COLORS.primary} opacity="0.3" stroke={COLORS.primary} strokeWidth="1.5" />
    <text x="64" y="305" fontSize="9" fontFamily="sans-serif" fill={COLORS.primary} fontWeight="bold">API</text>
    <circle cx="290" cy="300" r="20" fill={COLORS.secondary} opacity="0.3" stroke={COLORS.secondary} strokeWidth="1.5" />
    <text x="283" y="305" fontSize="9" fontFamily="sans-serif" fill={COLORS.secondary} fontWeight="bold">FW</text>
  </svg>
);

export const WebSocketSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="360" fill="#0f0f0f" />
    <circle cx="90" cy="130" r="40" fill="#1a1a1a" stroke={COLORS.primary} strokeWidth="2.5" />
    <text x="90" y="140" fontSize="16" fontFamily="sans-serif" fill={COLORS.primary} fontWeight="bold" textAnchor="middle">Client</text>
    <line x1="130" y1="130" x2="230" y2="130" stroke={COLORS.accent} strokeWidth="2.5" strokeDasharray="5,5" />
    <line x1="130" y1="130" x2="230" y2="130" stroke={COLORS.primary} strokeWidth="2.5" opacity="0.6" />
    <circle cx="270" cy="130" r="40" fill="#1a1a1a" stroke={COLORS.secondary} strokeWidth="2.5" />
    <text x="270" y="140" fontSize="16" fontFamily="sans-serif" fill={COLORS.secondary} fontWeight="bold" textAnchor="middle">Server</text>
    <circle cx="180" cy="220" r="35" fill="#1a1a1a" stroke={COLORS.accent} strokeWidth="2.5" />
    <text x="180" y="228" fontSize="12" fontFamily="sans-serif" fill={COLORS.accent} fontWeight="bold" textAnchor="middle">Real-time</text>
  </svg>
);

export const DatabaseNodeSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="360" fill="#0f0f0f" />
    <g transform="translate(60, 80)">
      <ellipse cx="60" cy="0" rx="50" ry="15" fill={COLORS.primary} opacity="0.3" stroke={COLORS.primary} strokeWidth="2" />
      <rect x="10" y="0" width="100" height="60" fill="none" stroke={COLORS.primary} strokeWidth="2" />
      <ellipse cx="60" cy="60" rx="50" ry="15" fill={COLORS.primary} opacity="0.5" stroke={COLORS.primary} strokeWidth="2" />
    </g>
    <text x="180" y="185" fontSize="13" fontFamily="sans-serif" fill={COLORS.secondary} fontWeight="bold" textAnchor="middle">MongoDB</text>
    <text x="180" y="205" fontSize="13" fontFamily="sans-serif" fill={COLORS.secondary} fontWeight="bold" textAnchor="middle">PostgreSQL</text>
    <circle cx="280" cy="280" r="20" fill={COLORS.accent} opacity="0.3" stroke={COLORS.accent} strokeWidth="1.5" />
    <text x="272" y="285" fontSize="9" fontFamily="sans-serif" fill={COLORS.accent} fontWeight="bold">ORM</text>
  </svg>
);

export const DevOpsSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="360" fill="#0f0f0f" />
    <g transform="translate(70, 90)">
      <rect x="0" y="0" width="60" height="60" rx="6" fill={COLORS.primary} opacity="0.6" stroke={COLORS.primary} strokeWidth="1.5" />
      <text x="30" y="38" fontSize="11" fontFamily="sans-serif" fill={COLORS.light} fontWeight="bold" textAnchor="middle">Code</text>
      <line x1="60" y1="30" x2="90" y2="30" stroke={COLORS.secondary} strokeWidth="2.5" />
      <rect x="90" y="0" width="60" height="60" rx="6" fill={COLORS.secondary} opacity="0.6" stroke={COLORS.secondary} strokeWidth="1.5" />
      <text x="120" y="38" fontSize="11" fontFamily="sans-serif" fill={COLORS.light} fontWeight="bold" textAnchor="middle">Build</text>
      <line x1="120" y1="60" x2="120" y2="80" stroke={COLORS.accent} strokeWidth="2.5" />
      <line x1="120" y1="80" x2="150" y2="80" stroke={COLORS.accent} strokeWidth="2.5" />
      <rect x="150" y="50" width="60" height="60" rx="6" fill={COLORS.accent} opacity="0.6" stroke={COLORS.accent} strokeWidth="1.5" />
      <text x="180" y="88" fontSize="11" fontFamily="sans-serif" fill={COLORS.light} fontWeight="bold" textAnchor="middle">Deploy</text>
    </g>
  </svg>
);

// ============ JAVA DEVELOPER SECTION SVGS ============

export const SpringBootSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="360" fill="#0f0f0f" />
    <circle cx="180" cy="120" r="45" fill="#1a1a1a" stroke={COLORS.primary} strokeWidth="3" />
    <text x="180" y="130" fontSize="18" fontFamily="sans-serif" fill={COLORS.primary} fontWeight="bold" textAnchor="middle">SB</text>
    <rect x="100" y="190" width="160" height="40" rx="6" fill={COLORS.secondary} opacity="0.4" stroke={COLORS.secondary} strokeWidth="2" />
    <text x="180" y="217" fontSize="12" fontFamily="sans-serif" fill={COLORS.secondary} fontWeight="bold" textAnchor="middle">Spring Boot</text>
    <circle cx="90" cy="300" r="18" fill={COLORS.accent} opacity="0.3" stroke={COLORS.accent} strokeWidth="1.5" />
    <text x="82" y="305" fontSize="9" fontFamily="sans-serif" fill={COLORS.accent} fontWeight="bold">Fast</text>
    <circle cx="270" cy="300" r="18" fill={COLORS.primary} opacity="0.3" stroke={COLORS.primary} strokeWidth="1.5" />
    <text x="262" y="305" fontSize="9" fontFamily="sans-serif" fill={COLORS.primary} fontWeight="bold">Easy</text>
  </svg>
);

export const MicroservicesSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="360" fill="#0f0f0f" />
    <g transform="translate(80, 100)">
      <rect x="0" y="0" width="50" height="50" rx="5" fill={COLORS.primary} opacity="0.6" stroke={COLORS.primary} strokeWidth="1.5" />
      <text x="25" y="32" fontSize="10" fontFamily="sans-serif" fill={COLORS.light} fontWeight="bold" textAnchor="middle">M1</text>
      <rect x="70" y="0" width="50" height="50" rx="5" fill={COLORS.secondary} opacity="0.6" stroke={COLORS.secondary} strokeWidth="1.5" />
      <text x="95" y="32" fontSize="10" fontFamily="sans-serif" fill={COLORS.light} fontWeight="bold" textAnchor="middle">M2</text>
      <rect x="140" y="0" width="50" height="50" rx="5" fill={COLORS.accent} opacity="0.6" stroke={COLORS.accent} strokeWidth="1.5" />
      <text x="165" y="32" fontSize="10" fontFamily="sans-serif" fill={COLORS.light} fontWeight="bold" textAnchor="middle">M3</text>
      <line x1="25" y1="50" x2="25" y2="70" stroke={COLORS.primary} strokeWidth="2" />
      <line x1="95" y1="50" x2="95" y2="70" stroke={COLORS.secondary} strokeWidth="2" />
      <line x1="165" y1="50" x2="165" y2="70" stroke={COLORS.accent} strokeWidth="2" />
      <line x1="25" y1="70" x2="165" y2="70" stroke={COLORS.primary} strokeWidth="2" opacity="0.5" />
    </g>
  </svg>
);

export const OraclePostgresSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="360" fill="#0f0f0f" />
    <g transform="translate(100, 100)">
      <ellipse cx="40" cy="0" rx="35" ry="12" fill={COLORS.primary} opacity="0.3" stroke={COLORS.primary} strokeWidth="2" />
      <rect x="5" y="0" width="70" height="60" fill="none" stroke={COLORS.primary} strokeWidth="2" />
      <ellipse cx="40" cy="60" rx="35" ry="12" fill={COLORS.primary} opacity="0.6" stroke={COLORS.primary} strokeWidth="2" />
    </g>
    <text x="180" y="200" fontSize="12" fontFamily="sans-serif" fill={COLORS.secondary} fontWeight="bold" textAnchor="middle">Database</text>
    <text x="180" y="220" fontSize="12" fontFamily="sans-serif" fill={COLORS.secondary} fontWeight="bold" textAnchor="middle">Optimization</text>
    <circle cx="70" cy="310" r="18" fill={COLORS.accent} opacity="0.3" stroke={COLORS.accent} strokeWidth="1.5" />
    <text x="62" y="315" fontSize="9" fontFamily="sans-serif" fill={COLORS.accent} fontWeight="bold">SQL</text>
  </svg>
);

export const KubernetesJavaSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="360" fill="#0f0f0f" />
    <circle cx="180" cy="100" r="35" fill="#1a1a1a" stroke={COLORS.primary} strokeWidth="2.5" />
    <text x="180" y="110" fontSize="13" fontFamily="sans-serif" fill={COLORS.primary} fontWeight="bold" textAnchor="middle">K8s</text>
    <g transform="translate(80, 170)">
      <rect x="0" y="0" width="40" height="40" rx="4" fill={COLORS.secondary} opacity="0.5" stroke={COLORS.secondary} strokeWidth="1.5" />
      <rect x="50" y="0" width="40" height="40" rx="4" fill={COLORS.accent} opacity="0.5" stroke={COLORS.accent} strokeWidth="1.5" />
      <rect x="100" y="0" width="40" height="40" rx="4" fill={COLORS.primary} opacity="0.5" stroke={COLORS.primary} strokeWidth="1.5" />
    </g>
  </svg>
);

// ============ WEBSITE DEVELOPER SECTION SVGS ============

export const ResponsiveDesignSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="360" fill="#0f0f0f" />
    <rect x="50" y="60" width="120" height="180" rx="8" fill="#1a1a1a" stroke={COLORS.primary} strokeWidth="2.5" />
    <rect x="60" y="75" width="100" height="140" fill="#2a2a2a" />
    <text x="110" y="100" fontSize="10" fontFamily="sans-serif" fill={COLORS.primary} fontWeight="bold" textAnchor="middle">Mobile</text>
    <rect x="190" y="60" width="140" height="180" rx="8" fill="#1a1a1a" stroke={COLORS.secondary} strokeWidth="2.5" />
    <rect x="200" y="75" width="120" height="140" fill="#2a2a2a" />
    <text x="260" y="100" fontSize="10" fontFamily="sans-serif" fill={COLORS.secondary} fontWeight="bold" textAnchor="middle">Desktop</text>
    <circle cx="90" cy="310" r="16" fill={COLORS.accent} opacity="0.3" stroke={COLORS.accent} strokeWidth="1.5" />
    <text x="84" y="315" fontSize="8" fontFamily="sans-serif" fill={COLORS.accent} fontWeight="bold">RWD</text>
  </svg>
);

export const ReactVueSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="360" fill="#0f0f0f" />
    <circle cx="100" cy="120" r="35" fill="#1a1a1a" stroke={COLORS.primary} strokeWidth="2.5" />
    <text x="100" y="130" fontSize="13" fontFamily="sans-serif" fill={COLORS.primary} fontWeight="bold" textAnchor="middle">React</text>
    <line x1="135" y1="120" x2="225" y2="120" stroke={COLORS.accent} strokeWidth="2" />
    <circle cx="260" cy="120" r="35" fill="#1a1a1a" stroke={COLORS.secondary} strokeWidth="2.5" />
    <text x="260" y="130" fontSize="13" fontFamily="sans-serif" fill={COLORS.secondary} fontWeight="bold" textAnchor="middle">Vue</text>
    <rect x="80" y="200" width="200" height="70" rx="8" fill="#1a1a1a" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.6" />
    <text x="180" y="225" fontSize="11" fontFamily="sans-serif" fill={COLORS.primary} fontWeight="bold" textAnchor="middle">Modern Frontend</text>
    <text x="180" y="245" fontSize="9" fontFamily="sans-serif" fill={COLORS.textMuted} textAnchor="middle">Frameworks</text>
  </svg>
);

export const FullStackWebSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="360" fill="#0f0f0f" />
    <g transform="translate(110, 80)">
      <rect x="0" y="0" width="140" height="40" rx="6" fill={COLORS.primary} opacity="0.5" stroke={COLORS.primary} strokeWidth="2" />
      <text x="70" y="27" fontSize="11" fontFamily="sans-serif" fill={COLORS.light} fontWeight="bold" textAnchor="middle">Frontend</text>
    </g>
    <line x1="180" y1="125" x2="180" y2="155" stroke={COLORS.secondary} strokeWidth="2.5" />
    <g transform="translate(110, 160)">
      <rect x="0" y="0" width="140" height="40" rx="6" fill={COLORS.secondary} opacity="0.5" stroke={COLORS.secondary} strokeWidth="2" />
      <text x="70" y="27" fontSize="11" fontFamily="sans-serif" fill={COLORS.light} fontWeight="bold" textAnchor="middle">Backend</text>
    </g>
    <line x1="180" y1="205" x2="180" y2="235" stroke={COLORS.accent} strokeWidth="2.5" />
    <g transform="translate(110, 240)">
      <rect x="0" y="0" width="140" height="40" rx="6" fill={COLORS.accent} opacity="0.5" stroke={COLORS.accent} strokeWidth="2" />
      <text x="70" y="27" fontSize="11" fontFamily="sans-serif" fill={COLORS.light} fontWeight="bold" textAnchor="middle">Database</text>
    </g>
  </svg>
);

export const WebPerfSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="360" fill="#0f0f0f" />
    <g transform="translate(60, 100)">
      <rect x="0" y="0" width="240" height="150" rx="8" fill="#1a1a1a" stroke={COLORS.primary} strokeWidth="2" />
      <text x="120" y="25" fontSize="11" fontFamily="sans-serif" fill={COLORS.primary} fontWeight="bold" textAnchor="middle">Performance</text>
      <polyline points="30,100 60,70 90,85 120,50 150,65 180,40 210,55" fill="none" stroke={COLORS.accent} strokeWidth="2.5" />
      <circle cx="30" cy="100" r="4" fill={COLORS.accent} />
      <circle cx="210" cy="55" r="4" fill={COLORS.accent} />
    </g>
    <circle cx="80" cy="310" r="16" fill={COLORS.secondary} opacity="0.3" stroke={COLORS.secondary} strokeWidth="1.5" />
    <text x="73" y="315" fontSize="8" fontFamily="sans-serif" fill={COLORS.secondary} fontWeight="bold">SEO</text>
  </svg>
);

// ============ SMM EXPERT SECTION SVGS ============

export const SocialStrategyLogoBrandingSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="360" fill="#0f0f0f" />
    <circle cx="100" cy="100" r="35" fill={COLORS.primary} opacity="0.4" stroke={COLORS.primary} strokeWidth="2" />
    <text x="100" y="110" fontSize="11" fontFamily="sans-serif" fill={COLORS.primary} fontWeight="bold" textAnchor="middle">f</text>
    <circle cx="180" cy="100" r="35" fill={COLORS.secondary} opacity="0.4" stroke={COLORS.secondary} strokeWidth="2" />
    <text x="180" y="110" fontSize="11" fontFamily="sans-serif" fill={COLORS.secondary} fontWeight="bold" textAnchor="middle">📘</text>
    <circle cx="260" cy="100" r="35" fill={COLORS.accent} opacity="0.4" stroke={COLORS.accent} strokeWidth="2" />
    <text x="260" y="110" fontSize="11" fontFamily="sans-serif" fill={COLORS.accent} fontWeight="bold" textAnchor="middle">in</text>
    <rect x="80" y="180" width="200" height="80" rx="8" fill="#1a1a1a" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.6" />
    <text x="180" y="205" fontSize="11" fontFamily="sans-serif" fill={COLORS.primary} fontWeight="bold" textAnchor="middle">Social Media</text>
    <text x="180" y="225" fontSize="11" fontFamily="sans-serif" fill={COLORS.primary} fontWeight="bold" textAnchor="middle">Strategy</text>
  </svg>
);

export const ContentCreationSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="360" fill="#0f0f0f" />
    <rect x="80" y="70" width="200" height="150" rx="10" fill="#1a1a1a" stroke={COLORS.primary} strokeWidth="2.5" />
    <rect x="95" y="85" width="60" height="60" rx="4" fill={COLORS.primary} opacity="0.6" />
    <rect x="165" y="85" width="60" height="60" rx="4" fill={COLORS.secondary} opacity="0.6" />
    <rect x="95" y="155" width="130" height="8" rx="2" fill={COLORS.accent} opacity="0.5" />
    <rect x="70" y="260" width="220" height="60" rx="8" fill="#1a1a1a" stroke={COLORS.secondary} strokeWidth="1.5" opacity="0.7" />
    <text x="180" y="285" fontSize="11" fontFamily="sans-serif" fill={COLORS.secondary} fontWeight="bold" textAnchor="middle">Visual Content</text>
    <text x="180" y="305" fontSize="9" fontFamily="sans-serif" fill={COLORS.textMuted} textAnchor="middle">Creation</text>
  </svg>
);

export const CommunityManagementSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="360" fill="#0f0f0f" />
    <circle cx="100" cy="100" r="25" fill="#1a1a1a" stroke={COLORS.primary} strokeWidth="2" />
    <text x="100" y="108" fontSize="12" fontFamily="sans-serif" fill={COLORS.primary} fontWeight="bold" textAnchor="middle">👤</text>
    <circle cx="260" cy="100" r="25" fill="#1a1a1a" stroke={COLORS.secondary} strokeWidth="2" />
    <text x="260" y="108" fontSize="12" fontFamily="sans-serif" fill={COLORS.secondary} fontWeight="bold" textAnchor="middle">👤</text>
    <circle cx="180" cy="180" r="25" fill="#1a1a1a" stroke={COLORS.accent} strokeWidth="2" />
    <text x="180" y="188" fontSize="12" fontFamily="sans-serif" fill={COLORS.accent} fontWeight="bold" textAnchor="middle">👤</text>
    <line x1="100" y1="125" x2="180" y2="155" stroke={COLORS.primary} strokeWidth="2" opacity="0.6" />
    <line x1="260" y1="125" x2="180" y2="155" stroke={COLORS.secondary} strokeWidth="2" opacity="0.6" />
    <rect x="80" y="250" width="200" height="60" rx="8" fill="#1a1a1a" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.6" />
    <text x="180" y="275" fontSize="11" fontFamily="sans-serif" fill={COLORS.primary} fontWeight="bold" textAnchor="middle">Community</text>
    <text x="180" y="295" fontSize="11" fontFamily="sans-serif" fill={COLORS.primary} fontWeight="bold" textAnchor="middle">Management</text>
  </svg>
);

export const EngagementAnalyticsSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="360" fill="#0f0f0f" />
    <g transform="translate(70, 90)">
      <rect x="0" y="50" width="30" height="100" rx="3" fill={COLORS.primary} opacity="0.6" />
      <rect x="45" y="30" width="30" height="120" rx="3" fill={COLORS.secondary} opacity="0.6" />
      <rect x="90" y="10" width="30" height="140" rx="3" fill={COLORS.accent} opacity="0.6" />
      <rect x="135" y="40" width="30" height="110" rx="3" fill={COLORS.primary} opacity="0.5" />
    </g>
    <text x="180" y="260" fontSize="11" fontFamily="sans-serif" fill={COLORS.secondary} fontWeight="bold" textAnchor="middle">Analytics & Insights</text>
  </svg>
);

// ============ SEO EXPERT SECTION SVGS ============

export const OnPageSEOSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="360" fill="#0f0f0f" />
    <rect x="80" y="80" width="200" height="180" rx="10" fill="#1a1a1a" stroke={COLORS.primary} strokeWidth="2.5" />
    <text x="180" y="110" fontSize="13" fontFamily="sans-serif" fill={COLORS.primary} fontWeight="bold" textAnchor="middle">Page Title</text>
    <line x1="100" y1="130" x2="260" y2="130" stroke={COLORS.secondary} strokeWidth="2" opacity="0.6" />
    <line x1="100" y1="145" x2="250" y2="145" stroke={COLORS.secondary} strokeWidth="1.5" opacity="0.4" />
    <line x1="100" y1="160" x2="245" y2="160" stroke={COLORS.secondary} strokeWidth="1.5" opacity="0.4" />
    <text x="100" y="190" fontSize="10" fontFamily="sans-serif" fill={COLORS.accent} fontWeight="bold">h1, h2, h3 Tags</text>
    <text x="100" y="210" fontSize="10" fontFamily="sans-serif" fill={COLORS.accent} fontWeight="bold">Meta Description</text>
    <circle cx="80" cy="310" r="18" fill={COLORS.primary} opacity="0.3" stroke={COLORS.primary} strokeWidth="1.5" />
    <text x="72" y="315" fontSize="9" fontFamily="sans-serif" fill={COLORS.primary} fontWeight="bold">SEO</text>
  </svg>
);

export const LinkBuildingSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="360" fill="#0f0f0f" />
    <circle cx="100" cy="120" r="30" fill="#1a1a1a" stroke={COLORS.primary} strokeWidth="2.5" />
    <text x="100" y="128" fontSize="11" fontFamily="sans-serif" fill={COLORS.primary} fontWeight="bold" textAnchor="middle">Site</text>
    <line x1="130" y1="120" x2="170" y2="120" stroke={COLORS.accent} strokeWidth="2.5" />
    <circle cx="200" cy="120" r="30" fill="#1a1a1a" stroke={COLORS.secondary} strokeWidth="2.5" />
    <text x="200" y="128" fontSize="11" fontFamily="sans-serif" fill={COLORS.secondary} fontWeight="bold" textAnchor="middle">Link</text>
    <line x1="200" y1="150" x2="200" y2="190" stroke={COLORS.primary} strokeWidth="2.5" />
    <rect x="130" y="190" width="140" height="60" rx="8" fill="#1a1a1a" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.6" />
    <text x="200" y="215" fontSize="11" fontFamily="sans-serif" fill={COLORS.primary} fontWeight="bold" textAnchor="middle">Authority Building</text>
  </svg>
);

export const KeywordResearchSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="360" fill="#0f0f0f" />
    <circle cx="140" cy="120" r="35" fill="#1a1a1a" stroke={COLORS.primary} strokeWidth="2.5" />
    <line x1="165" y1="95" x2="190" y2="70" stroke={COLORS.primary} strokeWidth="3" strokeLinecap="round" />
    <text x="140" y="130" fontSize="11" fontFamily="sans-serif" fill={COLORS.primary} fontWeight="bold" textAnchor="middle">Search</text>
    <rect x="70" y="190" width="220" height="100" rx="8" fill="#1a1a1a" stroke={COLORS.secondary} strokeWidth="2" opacity="0.7" />
    <text x="180" y="215" fontSize="11" fontFamily="sans-serif" fill={COLORS.secondary} fontWeight="bold" textAnchor="middle">Keyword Research</text>
    <text x="180" y="235" fontSize="9" fontFamily="sans-serif" fill={COLORS.textMuted} textAnchor="middle">Volume, Competition, Intent</text>
  </svg>
);

export const TechnicalSEOSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="360" fill="#0f0f0f" />
    <g transform="translate(100, 100)">
      <rect x="0" y="0" width="80" height="80" rx="6" fill={COLORS.primary} opacity="0.5" stroke={COLORS.primary} strokeWidth="2" />
      <text x="40" y="48" fontSize="11" fontFamily="monospace" fill={COLORS.light} fontWeight="bold" textAnchor="middle">{`</`}</text>
      <text x="70" y="48" fontSize="11" fontFamily="monospace" fill={COLORS.light} fontWeight="bold">html</text>
    </g>
    <text x="180" y="230" fontSize="11" fontFamily="sans-serif" fill={COLORS.secondary} fontWeight="bold" textAnchor="middle">Technical SEO</text>
    <text x="180" y="250" fontSize="9" fontFamily="sans-serif" fill={COLORS.textMuted} textAnchor="middle">Crawlability, Indexing, Speed</text>
  </svg>
);

// ============ PPC EXPERT SECTION SVGS ============

export const GoogleAdsSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="360" fill="#0f0f0f" />
    <rect x="80" y="80" width="200" height="150" rx="10" fill="#1a1a1a" stroke={COLORS.primary} strokeWidth="2.5" />
    <circle cx="100" cy="100" r="6" fill={COLORS.primary} />
    <text x="115" y="105" fontSize="11" fontFamily="sans-serif" fill={COLORS.primary} fontWeight="bold">Ads</text>
    <rect x="100" y="130" width="160" height="8" rx="2" fill={COLORS.secondary} opacity="0.6" />
    <rect x="100" y="145" width="150" height="6" rx="2" fill={COLORS.secondary} opacity="0.4" />
    <circle cx="70" cy="290" r="20" fill={COLORS.accent} opacity="0.3" stroke={COLORS.accent} strokeWidth="1.5" />
    <text x="63" y="295" fontSize="9" fontFamily="sans-serif" fill={COLORS.accent} fontWeight="bold">PPC</text>
  </svg>
);

export const AudienceTargetingSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="360" fill="#0f0f0f" />
    <circle cx="180" cy="110" r="40" fill="#1a1a1a" stroke={COLORS.primary} strokeWidth="2.5" />
    <circle cx="180" cy="110" r="25" fill="none" stroke={COLORS.primary} strokeWidth="2" opacity="0.6" />
    <circle cx="180" cy="110" r="15" fill={COLORS.primary} opacity="0.5" />
    <g transform="translate(70, 190)">
      <circle cx="20" cy="20" r="18" fill="#1a1a1a" stroke={COLORS.secondary} strokeWidth="2" />
      <text x="20" y="27" fontSize="10" fontFamily="sans-serif" fill={COLORS.secondary} fontWeight="bold" textAnchor="middle">👤</text>
      <circle cx="70" cy="20" r="18" fill="#1a1a1a" stroke={COLORS.accent} strokeWidth="2" />
      <text x="70" y="27" fontSize="10" fontFamily="sans-serif" fill={COLORS.accent} fontWeight="bold" textAnchor="middle">👤</text>
      <circle cx="120" cy="20" r="18" fill="#1a1a1a" stroke={COLORS.primary} strokeWidth="2" />
      <text x="120" y="27" fontSize="10" fontFamily="sans-serif" fill={COLORS.primary} fontWeight="bold" textAnchor="middle">👤</text>
    </g>
  </svg>
);

export const ConversionOptimizationSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="360" fill="#0f0f0f" />
    <polyline points="80,260 120,200 160,220 200,140 240,170 280,100" fill="none" stroke={COLORS.primary} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="80" cy="260" r="6" fill={COLORS.primary} />
    <circle cx="280" cy="100" r="6" fill={COLORS.primary} />
    <rect x="80" y="300" width="200" height="40" rx="6" fill="#1a1a1a" stroke={COLORS.secondary} strokeWidth="1.5" opacity="0.6" />
    <text x="180" y="325" fontSize="10" fontFamily="sans-serif" fill={COLORS.secondary} fontWeight="bold" textAnchor="middle">Conversion Rate</text>
  </svg>
);

export const CampaignManagementSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 360,
  height = 360,
  className = "",
}) => (
  <svg viewBox="0 0 360 360" width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="360" fill="#0f0f0f" />
    <g transform="translate(80, 90)">
      <rect x="0" y="0" width="60" height="60" rx="6" fill={COLORS.primary} opacity="0.5" stroke={COLORS.primary} strokeWidth="2" />
      <text x="30" y="38" fontSize="10" fontFamily="sans-serif" fill={COLORS.light} fontWeight="bold" textAnchor="middle">Plan</text>
      <line x1="60" y1="30" x2="90" y2="30" stroke={COLORS.secondary} strokeWidth="2.5" />
      <rect x="90" y="0" width="60" height="60" rx="6" fill={COLORS.secondary} opacity="0.5" stroke={COLORS.secondary} strokeWidth="2" />
      <text x="120" y="38" fontSize="10" fontFamily="sans-serif" fill={COLORS.light} fontWeight="bold" textAnchor="middle">Execute</text>
      <line x1="120" y1="60" x2="120" y2="80" stroke={COLORS.accent} strokeWidth="2.5" />
      <rect x="60" y="80" width="60" height="60" rx="6" fill={COLORS.accent} opacity="0.5" stroke={COLORS.accent} strokeWidth="2" />
      <text x="90" y="118" fontSize="10" fontFamily="sans-serif" fill={COLORS.light} fontWeight="bold" textAnchor="middle">Optimize</text>
    </g>
  </svg>
);
