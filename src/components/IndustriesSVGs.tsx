import React from "react";

const COLORS = {
  primary: "#5C3693",
  secondary: "#472A71",
  accent: "#A855F7",
  bg: "#000000",
  card: "#0b0b0d",
  white: "#FFFFFF",
};

// Automotive Industry SVG
export const AutomotiveSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 100, height = 100, className }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs>
      <linearGradient id="auto" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" />
        <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" />
      </linearGradient>
    </defs>
    <rect x="80" y="140" width="240" height="120" rx="20" fill="url(#auto)" opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="130" cy="260" r="25" fill={COLORS.secondary} opacity="0.8" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="270" cy="260" r="25" fill={COLORS.secondary} opacity="0.8" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="120" y="160" width="160" height="40" rx="8" fill={COLORS.primary} opacity="0.6" />
    <text x="200" y="340" fontSize="18" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">AUTOMOTIVE</text>
  </svg>
);

// Healthcare Industry SVG
export const HealthcareSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 100, height = 100, className }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs>
      <linearGradient id="health" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" />
        <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" />
      </linearGradient>
    </defs>
    <circle cx="200" cy="170" r="50" fill="url(#health)" opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
    <path d="M 200 140 L 200 200 M 170 170 L 230 170" stroke="white" strokeWidth="3" opacity="0.8" strokeLinecap="round" />
    <path d="M 120 260 L 280 260" stroke={COLORS.primary} strokeWidth="2" opacity="0.5" />
    <circle cx="140" cy="260" r="8" fill={COLORS.secondary} opacity="0.7" />
    <circle cx="200" cy="260" r="8" fill={COLORS.secondary} opacity="0.7" />
    <circle cx="260" cy="260" r="8" fill={COLORS.secondary} opacity="0.7" />
    <text x="200" y="340" fontSize="18" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">HEALTHCARE</text>
  </svg>
);

// On-Demand Industry SVG
export const OnDemandSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 100, height = 100, className }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs>
      <linearGradient id="ondemand" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" />
        <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" />
      </linearGradient>
    </defs>
    <rect x="90" y="130" width="220" height="160" rx="16" fill="url(#ondemand)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="110" y="150" width="180" height="30" fill={COLORS.secondary} opacity="0.5" rx="6" />
    <circle cx="130" cy="210" r="12" fill="white" opacity="0.7" />
    <circle cx="200" cy="210" r="12" fill="white" opacity="0.7" />
    <circle cx="270" cy="210" r="12" fill="white" opacity="0.7" />
    <path d="M 140 230 L 260 230" stroke={COLORS.primary} strokeWidth="2" opacity="0.4" />
    <path d="M 140 250 L 200 250" stroke={COLORS.primary} strokeWidth="2" opacity="0.4" />
    <text x="200" y="340" fontSize="18" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">ON-DEMAND</text>
  </svg>
);

// Education Industry SVG
export const EducationSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 100, height = 100, className }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs>
      <linearGradient id="edu" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" />
        <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" />
      </linearGradient>
    </defs>
    <polygon points="200,100 280,140 280,240 200,280 120,240 120,140" fill="url(#edu)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <polygon points="200,120 270,150 270,230 200,260 130,230 130,150" fill={COLORS.secondary} opacity="0.3" />
    <circle cx="200" cy="190" r="20" fill="white" opacity="0.6" />
    <path d="M 130 280 Q 200 320 270 280" stroke={COLORS.primary} strokeWidth="2" opacity="0.4" />
    <text x="200" y="340" fontSize="18" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">EDUCATION</text>
  </svg>
);

// Music Industry SVG
export const MusicSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 100, height = 100, className }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs>
      <linearGradient id="music" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" />
        <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" />
      </linearGradient>
    </defs>
    <circle cx="140" cy="160" r="35" fill="url(#music)" opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="260" cy="160" r="35" fill="url(#music)" opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="170" y="140" width="60" height="80" fill={COLORS.secondary} opacity="0.6" rx="8" />
    <circle cx="200" cy="180" r="12" fill="white" opacity="0.7" />
    <path d="M 100 260 Q 200 310 300 260" stroke={COLORS.primary} strokeWidth="2" opacity="0.4" />
    <circle cx="100" cy="260" r="6" fill={COLORS.secondary} opacity="0.6" />
    <circle cx="300" cy="260" r="6" fill={COLORS.secondary} opacity="0.6" />
    <text x="200" y="340" fontSize="18" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">MUSIC</text>
  </svg>
);

// Ecommerce Industry SVG
export const EcommerceSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 100, height = 100, className }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs>
      <linearGradient id="ecom" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" />
        <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" />
      </linearGradient>
    </defs>
    <path d="M 120 260 L 140 120 L 260 120 L 280 260 Z" fill="url(#ecom)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="150" y="140" width="100" height="80" fill={COLORS.secondary} opacity="0.4" rx="8" />
    <circle cx="175" cy="165" r="8" fill="white" opacity="0.6" />
    <circle cx="225" cy="165" r="8" fill="white" opacity="0.6" />
    <line x1="170" y1="200" x2="230" y2="200" stroke="white" strokeWidth="2" opacity="0.5" />
    <path d="M 280 260 L 300 280 M 120 260 L 100 280" stroke={COLORS.primary} strokeWidth="2" opacity="0.4" />
    <text x="200" y="340" fontSize="18" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">ECOMMERCE</text>
  </svg>
);

// Real Estate Industry SVG
export const RealEstateSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 100, height = 100, className }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs>
      <linearGradient id="realestate" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" />
        <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" />
      </linearGradient>
    </defs>
    <polygon points="200,100 280,160 280,280 120,280 120,160" fill="url(#realestate)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <polygon points="200,100 260,150 260,160 200,120" fill={COLORS.primary} opacity="0.6" />
    <rect x="140" y="180" width="50" height="50" fill={COLORS.secondary} opacity="0.4" />
    <rect x="210" y="180" width="50" height="50" fill={COLORS.secondary} opacity="0.4" />
    <circle cx="165" cy="205" r="6" fill="white" opacity="0.6" />
    <circle cx="235" cy="205" r="6" fill="white" opacity="0.6" />
    <text x="200" y="340" fontSize="18" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">REAL ESTATE</text>
  </svg>
);

// SAAS Industry SVG
export const SAASSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 100, height = 100, className }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs>
      <linearGradient id="saas" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" />
        <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" />
      </linearGradient>
    </defs>
    <rect x="100" y="130" width="200" height="150" rx="16" fill="url(#saas)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="120" y="150" width="160" height="30" fill={COLORS.secondary} opacity="0.5" rx="6" />
    <line x1="120" y1="200" x2="280" y2="200" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.4" />
    <circle cx="145" cy="235" r="10" fill="white" opacity="0.6" />
    <circle cx="200" cy="235" r="10" fill="white" opacity="0.6" />
    <circle cx="255" cy="235" r="10" fill="white" opacity="0.6" />
    <path d="M 100 290 L 300 290" stroke={COLORS.primary} strokeWidth="1.5" opacity="0.3" />
    <text x="200" y="340" fontSize="18" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">SAAS</text>
  </svg>
);

// Fintech Industry SVG
export const FintechSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 100, height = 100, className }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs>
      <linearGradient id="fintech" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" />
        <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" />
      </linearGradient>
    </defs>
    <circle cx="200" cy="160" r="50" fill="url(#fintech)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <path d="M 170 140 L 230 140 L 230 180 L 170 180 Z" fill={COLORS.secondary} opacity="0.4" />
    <circle cx="180" cy="150" r="5" fill="white" opacity="0.7" />
    <circle cx="220" cy="150" r="5" fill="white" opacity="0.7" />
    <circle cx="200" cy="170" r="5" fill="white" opacity="0.7" />
    <path d="M 120 260 L 280 260" stroke={COLORS.primary} strokeWidth="2" opacity="0.4" />
    <path d="M 150 240 Q 200 270 250 240" stroke={COLORS.primary} strokeWidth="1.5" fill="none" opacity="0.3" />
    <text x="200" y="340" fontSize="18" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">FINTECH</text>
  </svg>
);

// Logistics Industry SVG
export const LogisticsSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 100, height = 100, className }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs>
      <linearGradient id="logistics" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" />
        <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" />
      </linearGradient>
    </defs>
    <rect x="100" y="160" width="200" height="90" rx="8" fill="url(#logistics)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="130" y="190" width="140" height="40" fill={COLORS.secondary} opacity="0.4" rx="6" />
    <circle cx="125" cy="235" r="20" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="275" cy="235" r="20" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="2" />
    <path d="M 160 110 L 240 110 L 245 160" stroke={COLORS.primary} strokeWidth="2" fill="none" opacity="0.5" />
    <circle cx="165" cy="110" r="5" fill={COLORS.secondary} opacity="0.6" />
    <text x="200" y="340" fontSize="18" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">LOGISTICS</text>
  </svg>
);

// Retail Industry SVG
export const RetailSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 100, height = 100, className }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs>
      <linearGradient id="retail" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" />
        <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" />
      </linearGradient>
    </defs>
    <rect x="90" y="130" width="220" height="160" rx="12" fill="url(#retail)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="110" y="150" width="180" height="35" fill={COLORS.secondary} opacity="0.4" rx="6" />
    <circle cx="140" cy="210" r="18" fill={COLORS.secondary} opacity="0.5" stroke={COLORS.primary} strokeWidth="1.5" />
    <circle cx="200" cy="210" r="18" fill={COLORS.secondary} opacity="0.5" stroke={COLORS.primary} strokeWidth="1.5" />
    <circle cx="260" cy="210" r="18" fill={COLORS.secondary} opacity="0.5" stroke={COLORS.primary} strokeWidth="1.5" />
    <path d="M 110 270 L 290 270" stroke={COLORS.primary} strokeWidth="2" opacity="0.3" />
    <text x="200" y="340" fontSize="18" fontWeight="bold" fill={COLORS.primary} textAnchor="middle">RETAIL</text>
  </svg>
);
