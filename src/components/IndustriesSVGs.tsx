import React from "react";

const COLORS = {
  primary: "#5C3693",
  secondary: "#472A71",
  accent: "#A855F7",
  bg: "#000000",
  card: "#0b0b0d",
  white: "#FFFFFF",
};

// ============ AUTOMOTIVE INDUSTRY SVGS ============

export const AutomotiveSoftwareSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="auto1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    {/* Car body */}
    <path d="M 80 180 L 120 140 L 280 140 L 320 180 L 320 220 L 280 240 L 120 240 L 80 220 Z" fill="url(#auto1)" opacity="0.9" stroke={COLORS.primary} strokeWidth="3" />
    {/* Wheels */}
    <circle cx="130" cy="260" r="25" fill={COLORS.secondary} opacity="0.8" stroke={COLORS.white} strokeWidth="3" />
    <circle cx="270" cy="260" r="25" fill={COLORS.secondary} opacity="0.8" stroke={COLORS.white} strokeWidth="3" />
    <circle cx="130" cy="260" r="12" fill={COLORS.primary} opacity="0.9" />
    <circle cx="270" cy="260" r="12" fill={COLORS.primary} opacity="0.9" />
    {/* Windows */}
    <rect x="140" y="155" width="50" height="30" rx="4" fill={COLORS.white} opacity="0.3" />
    <rect x="210" y="155" width="50" height="30" rx="4" fill={COLORS.white} opacity="0.3" />
    {/* Dashboard display */}
    <rect x="180" y="195" width="40" height="20" rx="4" fill={COLORS.accent} opacity="0.8" />
    {/* Connection lines */}
    <path d="M 200 100 L 200 140" stroke={COLORS.accent} strokeWidth="3" opacity="0.6" />
    <circle cx="200" cy="90" r="8" fill={COLORS.accent} opacity="0.8" />
  </svg>
);

export const TelematicsSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="auto2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    {/* Central satellite/tower */}
    <rect x="190" y="120" width="20" height="60" fill="url(#auto2)" opacity="0.9" />
    <path d="M 180 120 L 200 100 L 220 120" stroke={COLORS.primary} strokeWidth="3" fill="none" />
    {/* Signal waves */}
    <circle cx="200" cy="130" r="40" fill="none" stroke={COLORS.accent} strokeWidth="2" opacity="0.6" />
    <circle cx="200" cy="130" r="60" fill="none" stroke={COLORS.accent} strokeWidth="2" opacity="0.4" />
    <circle cx="200" cy="130" r="80" fill="none" stroke={COLORS.accent} strokeWidth="2" opacity="0.2" />
    {/* Connected vehicles */}
    <rect x="100" y="220" width="60" height="35" rx="8" fill="url(#auto2)" opacity="0.8" />
    <circle cx="115" cy="265" r="10" fill={COLORS.white} opacity="0.7" />
    <circle cx="145" cy="265" r="10" fill={COLORS.white} opacity="0.7" />
    
    <rect x="240" y="220" width="60" height="35" rx="8" fill="url(#auto2)" opacity="0.8" />
    <circle cx="255" cy="265" r="10" fill={COLORS.white} opacity="0.7" />
    <circle cx="285" cy="265" r="10" fill={COLORS.white} opacity="0.7" />
    
    <rect x="170" y="280" width="60" height="35" rx="8" fill="url(#auto2)" opacity="0.8" />
    <circle cx="185" cy="325" r="10" fill={COLORS.white} opacity="0.7" />
    <circle cx="215" cy="325" r="10" fill={COLORS.white} opacity="0.7" />
    
    {/* Connection lines */}
    <path d="M 180 160 L 130 220" stroke={COLORS.accent} strokeWidth="2" opacity="0.6" strokeDasharray="5,5" />
    <path d="M 220 160 L 270 220" stroke={COLORS.accent} strokeWidth="2" opacity="0.6" strokeDasharray="5,5" />
    <path d="M 200 180 L 200 280" stroke={COLORS.accent} strokeWidth="2" opacity="0.6" strokeDasharray="5,5" />
  </svg>
);

export const AutomotiveEcommerceSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="auto3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    {/* Mobile device */}
    <rect x="140" y="100" width="120" height="200" rx="20" fill="url(#auto3)" opacity="0.9" stroke={COLORS.primary} strokeWidth="3" />
    <rect x="150" y="120" width="100" height="160" rx="8" fill={COLORS.white} opacity="0.1" />
    
    {/* Shopping cart icon */}
    <rect x="170" y="140" width="25" height="18" rx="2" fill="none" stroke={COLORS.white} strokeWidth="2" opacity="0.8" />
    <circle cx="175" cy="170" r="3" fill={COLORS.white} opacity="0.8" />
    <circle cx="188" cy="170" r="3" fill={COLORS.white} opacity="0.8" />
    <path d="M 198 145 L 205 145 L 207 155 L 170 155" stroke={COLORS.white} strokeWidth="2" fill="none" opacity="0.8" />
    
    {/* Car parts icons */}
    <circle cx="180" cy="190" r="8" fill="none" stroke={COLORS.accent} strokeWidth="2" opacity="0.7" />
    <circle cx="180" cy="190" r="4" fill={COLORS.accent} opacity="0.7" />
    
    <rect x="200" y="185" width="15" height="10" rx="2" fill={COLORS.accent} opacity="0.7" />
    
    {/* Price tags */}
    <rect x="165" y="210" width="30" height="15" rx="3" fill={COLORS.secondary} opacity="0.8" />
    <rect x="205" y="210" width="30" height="15" rx="3" fill={COLORS.secondary} opacity="0.8" />
    
    {/* Buy button */}
    <rect x="160" y="240" width="80" height="25" rx="12" fill={COLORS.accent} opacity="0.8" />
    
    {/* Connection lines to car */}
    <path d="M 260 200 L 320 180" stroke={COLORS.accent} strokeWidth="2" opacity="0.5" strokeDasharray="3,3" />
    
    {/* Small car icon */}
    <rect x="320" y="170" width="50" height="25" rx="6" fill={COLORS.secondary} opacity="0.8" />
    <circle cx="330" cy="205" r="8" fill={COLORS.white} opacity="0.6" />
    <circle cx="360" cy="205" r="8" fill={COLORS.white} opacity="0.6" />
  </svg>
);

// ============ HEALTHCARE INDUSTRY SVGS ============

export const HealthcarePlatformSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="health1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    {/* Medical cross */}
    <rect x="180" y="120" width="40" height="140" fill="url(#health1)" opacity="0.9" stroke={COLORS.primary} strokeWidth="2" rx="8" />
    <rect x="130" y="170" width="140" height="40" fill="url(#health1)" opacity="0.9" stroke={COLORS.primary} strokeWidth="2" rx="8" />
    
    {/* Stethoscope */}
    <circle cx="320" cy="130" r="15" fill="none" stroke={COLORS.accent} strokeWidth="3" opacity="0.8" />
    <circle cx="340" cy="150" r="8" fill={COLORS.accent} opacity="0.7" />
    <path d="M 305 130 Q 280 140, 260 160 Q 240 180, 220 200" stroke={COLORS.accent} strokeWidth="3" fill="none" opacity="0.8" />
    
    {/* Heart rate line */}
    <path d="M 80 280 L 120 280 L 130 260 L 140 300 L 150 240 L 160 320 L 170 280 L 320 280" 
          stroke={COLORS.accent} strokeWidth="3" fill="none" opacity="0.7" />
          
    {/* Medical chart/tablet */}
    <rect x="100" y="120" width="60" height="80" rx="8" fill={COLORS.secondary} opacity="0.8" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="110" y="135" width="40" height="6" rx="2" fill={COLORS.white} opacity="0.6" />
    <rect x="110" y="150" width="35" height="4" rx="2" fill={COLORS.white} opacity="0.4" />
    <rect x="110" y="165" width="30" height="4" rx="2" fill={COLORS.white} opacity="0.4" />
    
    {/* Pulse/data visualization */}
    <rect x="250" y="300" width="120" height="60" rx="8" fill={COLORS.card} opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="260" y="320" width="8" height="20" fill={COLORS.accent} opacity="0.8" />
    <rect x="275" y="310" width="8" height="30" fill={COLORS.accent} opacity="0.8" />
    <rect x="290" y="315" width="8" height="25" fill={COLORS.accent} opacity="0.8" />
    <rect x="305" y="305" width="8" height="35" fill={COLORS.accent} opacity="0.8" />
  </svg>
);

export const PatientEngagementSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="health2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    
    {/* Mobile health app */}
    <rect x="150" y="80" width="100" height="180" rx="20" fill="url(#health2)" opacity="0.9" stroke={COLORS.primary} strokeWidth="3" />
    <rect x="160" y="100" width="80" height="140" rx="8" fill={COLORS.white} opacity="0.1" />
    
    {/* Health icons in app */}
    <circle cx="185" cy="130" r="12" fill={COLORS.accent} opacity="0.8" />
    <rect x="180" y="125" width="10" height="10" rx="2" fill={COLORS.white} opacity="0.9" />
    <path d="M 183 128 L 187 128 M 185 126 L 185 130" stroke={COLORS.accent} strokeWidth="2" />
    
    <circle cx="215" cy="130" r="12" fill={COLORS.accent} opacity="0.8" />
    <path d="M 210 130 L 220 130 M 215 125 L 215 135" stroke={COLORS.white} strokeWidth="2" />
    
    {/* Appointment scheduler */}
    <rect x="165" y="160" width="70" height="50" rx="6" fill={COLORS.secondary} opacity="0.7" />
    <rect x="170" y="170" width="15" height="8" fill={COLORS.white} opacity="0.6" />
    <rect x="190" y="170" width="15" height="8" fill={COLORS.white} opacity="0.6" />
    <rect x="170" y="185" width="25" height="6" fill={COLORS.accent} opacity="0.8" />
    <rect x="170" y="195" width="35" height="6" fill={COLORS.white} opacity="0.4" />
    
    {/* Notification bell */}
    <path d="M 220 100 Q 230 95, 240 100 Q 240 110, 230 115 Q 220 110, 220 100" fill={COLORS.accent} opacity="0.8" />
    <circle cx="235" cy="95" r="3" fill={COLORS.white} opacity="0.9" />
    
    {/* Communication bubbles */}
    <ellipse cx="300" cy="150" rx="25" ry="18" fill={COLORS.secondary} opacity="0.8" />
    <rect x="285" y="145" width="30" height="4" rx="2" fill={COLORS.white} opacity="0.6" />
    <rect x="285" y="155" width="20" height="3" rx="2" fill={COLORS.white} opacity="0.4" />
    
    <ellipse cx="320" cy="200" rx="30" ry="20" fill={COLORS.accent} opacity="0.6" />
    <rect x="300" y="195" width="35" height="4" rx="2" fill={COLORS.white} opacity="0.6" />
    <rect x="300" y="205" width="25" height="3" rx="2" fill={COLORS.white} opacity="0.4" />
    
    {/* Patient profile icons */}
    <circle cx="100" cy="180" r="20" fill={COLORS.secondary} opacity="0.8" />
    <circle cx="100" cy="170" r="8" fill={COLORS.white} opacity="0.7" />
    <path d="M 85 195 Q 100 185, 115 195" stroke={COLORS.white} strokeWidth="3" fill="none" opacity="0.7" />
  </svg>
);

export const MedicalImagingSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="health3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <rect x="100" y="100" width="200" height="200" rx="12" fill="url(#health3)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="200" cy="200" r="60" fill="none" stroke={COLORS.white} strokeWidth="3" opacity="0.6" />
    <circle cx="200" cy="200" r="30" fill={COLORS.white} opacity="0.3" />
  </svg>
);

// ============ ON-DEMAND INDUSTRY SVGS ============

export const OnDemandDeliverySVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="ondemand1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <rect x="120" y="140" width="160" height="120" rx="12" fill="url(#ondemand1)" opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="155" cy="270" r="18" fill={COLORS.secondary} opacity="0.8" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="245" cy="270" r="18" fill={COLORS.secondary} opacity="0.8" stroke={COLORS.primary} strokeWidth="2" />
    <path d="M 200 120 L 200 140" stroke={COLORS.primary} strokeWidth="3" opacity="0.6" />
  </svg>
);

export const RideSharingSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="ondemand2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <ellipse cx="200" cy="200" rx="80" ry="80" fill="url(#ondemand2)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="180" cy="190" r="8" fill={COLORS.white} opacity="0.7" />
    <circle cx="220" cy="190" r="8" fill={COLORS.white} opacity="0.7" />
    <path d="M 170 215 Q 200 230 230 215" stroke={COLORS.white} strokeWidth="3" opacity="0.6" />
  </svg>
);

export const HomeServicesSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="ondemand3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <path d="M 120 200 L 200 120 L 280 200 L 280 280 L 120 280 Z" fill="url(#ondemand3)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="170" y="220" width="60" height="60" fill={COLORS.secondary} opacity="0.6" />
  </svg>
);

// ============ EDUCATION INDUSTRY SVGS ============

export const LearningManagementSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="edu1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <rect x="100" y="120" width="200" height="180" rx="12" fill="url(#edu1)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="120" y="140" width="160" height="20" rx="4" fill={COLORS.white} opacity="0.3" />
    <rect x="120" y="170" width="160" height="20" rx="4" fill={COLORS.white} opacity="0.3" />
    <rect x="120" y="200" width="160" height="20" rx="4" fill={COLORS.white} opacity="0.3" />
  </svg>
);

export const VirtualClassroomSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="edu2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <rect x="80" y="100" width="240" height="180" rx="16" fill="url(#edu2)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="140" cy="160" r="20" fill={COLORS.white} opacity="0.5" />
    <circle cx="200" cy="160" r="20" fill={COLORS.white} opacity="0.5" />
    <circle cx="260" cy="160" r="20" fill={COLORS.white} opacity="0.5" />
  </svg>
);

export const AssessmentToolsSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="edu3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <rect x="120" y="100" width="160" height="220" rx="12" fill="url(#edu3)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="150" cy="150" r="10" fill={COLORS.white} opacity="0.6" />
    <circle cx="150" cy="190" r="10" fill={COLORS.white} opacity="0.6" />
    <circle cx="150" cy="230" r="10" fill={COLORS.white} opacity="0.6" />
    <path d="M 145 150 L 155 150 M 145 190 L 155 190" stroke={COLORS.primary} strokeWidth="2" />
  </svg>
);

// ============ MUSIC INDUSTRY SVGS ============

export const MusicStreamingSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="music1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <circle cx="200" cy="200" r="80" fill="url(#music1)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="200" cy="200" r="25" fill={COLORS.white} opacity="0.6" />
    <path d="M 200 120 L 200 280 M 120 200 L 280 200" stroke={COLORS.primary} strokeWidth="2" opacity="0.4" />
  </svg>
);

export const AudioProductionSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="music2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <rect x="100" y="120" width="200" height="160" rx="12" fill="url(#music2)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="120" y="150" width="20" height="80" rx="4" fill={COLORS.white} opacity="0.5" />
    <rect x="160" y="140" width="20" height="100" rx="4" fill={COLORS.white} opacity="0.5" />
    <rect x="200" y="130" width="20" height="110" rx="4" fill={COLORS.white} opacity="0.5" />
    <rect x="240" y="160" width="20" height="70" rx="4" fill={COLORS.white} opacity="0.5" />
  </svg>
);

export const MusicDistributionSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="music3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <circle cx="200" cy="140" r="40" fill="url(#music3)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="140" cy="240" r="30" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="200" cy="260" r="30" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="260" cy="240" r="30" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="2" />
    <path d="M 200 180 L 140 210 M 200 180 L 200 230 M 200 180 L 260 210" stroke={COLORS.primary} strokeWidth="2" opacity="0.5" />
  </svg>
);

// ============ ECOMMERCE INDUSTRY SVGS ============

export const EcommercePlatformSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs>
      <linearGradient id="ecom1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" />
        <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" />
      </linearGradient>
    </defs>
    {/* Shopping cart */}
    <path d="M 150 180 L 170 180 L 190 140 L 310 140 L 320 220 L 190 220 Z" fill="url(#ecom1)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="210" cy="260" r="15" fill={COLORS.secondary} opacity="0.8" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="290" cy="260" r="15" fill={COLORS.secondary} opacity="0.8" stroke={COLORS.primary} strokeWidth="2" />
    
    {/* Website/Platform interface */}
    <rect x="80" y="100" width="240" height="160" rx="12" fill={COLORS.white} opacity="0.1" stroke={COLORS.primary} strokeWidth="2" />
    
    {/* Header/Navigation bar */}
    <rect x="90" y="110" width="220" height="25" rx="8" fill={COLORS.primary} opacity="0.6" />
    <circle cx="110" cy="122" r="5" fill={COLORS.white} opacity="0.8" />
    <rect x="270" y="117" width="30" height="10" rx="5" fill={COLORS.white} opacity="0.6" />
    
    {/* Product grid */}
    <rect x="100" y="150" width="50" height="50" rx="8" fill="url(#ecom1)" opacity="0.7" />
    <rect x="165" y="150" width="50" height="50" rx="8" fill="url(#ecom1)" opacity="0.7" />
    <rect x="230" y="150" width="50" height="50" rx="8" fill="url(#ecom1)" opacity="0.7" />
    
    {/* Product details lines */}
    <rect x="105" y="210" width="40" height="6" rx="3" fill={COLORS.white} opacity="0.4" />
    <rect x="170" y="210" width="40" height="6" rx="3" fill={COLORS.white} opacity="0.4" />
    <rect x="235" y="210" width="40" height="6" rx="3" fill={COLORS.white} opacity="0.4" />
    
    {/* Price tags */}
    <rect x="105" y="222" width="20" height="10" rx="5" fill={COLORS.secondary} opacity="0.8" />
    <rect x="170" y="222" width="20" height="10" rx="5" fill={COLORS.secondary} opacity="0.8" />
    <rect x="235" y="222" width="20" height="10" rx="5" fill={COLORS.secondary} opacity="0.8" />
  </svg>
);

export const PaymentGatewaySVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs>
      <linearGradient id="ecom2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" />
        <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" />
      </linearGradient>
    </defs>
    
    {/* Credit Card 1 */}
    <rect x="100" y="130" width="120" height="75" rx="12" fill="url(#ecom2)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="110" y="145" width="25" height="18" rx="4" fill={COLORS.white} opacity="0.6" />
    <rect x="110" y="170" width="70" height="8" rx="4" fill={COLORS.white} opacity="0.4" />
    <rect x="110" y="185" width="50" height="6" rx="3" fill={COLORS.white} opacity="0.4" />
    <rect x="180" y="185" width="25" height="12" rx="3" fill={COLORS.white} opacity="0.5" />
    
    {/* Credit Card 2 (overlapping) */}
    <rect x="180" y="170" width="120" height="75" rx="12" fill="url(#ecom2)" opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="190" y="185" width="25" height="18" rx="4" fill={COLORS.white} opacity="0.6" />
    <rect x="190" y="210" width="70" height="8" rx="4" fill={COLORS.white} opacity="0.4" />
    <rect x="190" y="225" width="50" height="6" rx="3" fill={COLORS.white} opacity="0.4" />
    <rect x="260" y="225" width="25" height="12" rx="3" fill={COLORS.white} opacity="0.5" />
    
    {/* Payment terminal/POS */}
    <rect x="150" y="280" width="100" height="70" rx="8" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="160" y="290" width="80" height="25" rx="6" fill={COLORS.white} opacity="0.3" />
    <rect x="170" y="325" width="18" height="18" rx="4" fill={COLORS.primary} opacity="0.8" />
    <rect x="195" y="325" width="18" height="18" rx="4" fill={COLORS.primary} opacity="0.8" />
    <rect x="220" y="325" width="18" height="18" rx="4" fill={COLORS.primary} opacity="0.8" />
    
    {/* Transaction arrow */}
    <path d="M 200 260 L 200 280" stroke={COLORS.primary} strokeWidth="3" markerEnd="url(#arrow)" opacity="0.8" />
    <path d="M 195 275 L 200 280 L 205 275" stroke={COLORS.primary} strokeWidth="2" fill="none" opacity="0.8" />
  </svg>
);

export const InventoryManagementSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs>
      <linearGradient id="ecom3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" />
        <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" />
      </linearGradient>
    </defs>
    
    {/* Warehouse shelving unit */}
    <rect x="100" y="120" width="200" height="160" rx="8" fill={COLORS.white} opacity="0.1" stroke={COLORS.primary} strokeWidth="2" />
    
    {/* Shelf levels */}
    <rect x="105" y="135" width="190" height="4" fill={COLORS.primary} opacity="0.6" />
    <rect x="105" y="185" width="190" height="4" fill={COLORS.primary} opacity="0.6" />
    <rect x="105" y="235" width="190" height="4" fill={COLORS.primary} opacity="0.6" />
    
    {/* Boxes on shelves - Top shelf */}
    <rect x="115" y="140" width="40" height="40" rx="6" fill="url(#ecom3)" opacity="0.85" stroke={COLORS.primary} strokeWidth="1.5" />
    <rect x="170" y="140" width="40" height="40" rx="6" fill="url(#ecom3)" opacity="0.85" stroke={COLORS.primary} strokeWidth="1.5" />
    <rect x="225" y="140" width="40" height="40" rx="6" fill="url(#ecom3)" opacity="0.85" stroke={COLORS.primary} strokeWidth="1.5" />
    
    {/* Boxes on shelves - Middle shelf */}
    <rect x="115" y="190" width="40" height="40" rx="6" fill="url(#ecom3)" opacity="0.9" stroke={COLORS.primary} strokeWidth="1.5" />
    <rect x="170" y="190" width="40" height="40" rx="6" fill="url(#ecom3)" opacity="0.9" stroke={COLORS.primary} strokeWidth="1.5" />
    
    {/* Boxes on shelves - Bottom shelf */}
    <rect x="115" y="240" width="40" height="40" rx="6" fill="url(#ecom3)" opacity="0.85" stroke={COLORS.primary} strokeWidth="1.5" />
    <rect x="170" y="240" width="40" height="40" rx="6" fill="url(#ecom3)" opacity="0.85" stroke={COLORS.primary} strokeWidth="1.5" />
    <rect x="225" y="240" width="40" height="40" rx="6" fill="url(#ecom3)" opacity="0.85" stroke={COLORS.primary} strokeWidth="1.5" />
    
    {/* Box labels/barcodes */}
    <rect x="120" y="165" width="30" height="6" rx="2" fill={COLORS.white} opacity="0.6" />
    <rect x="175" y="165" width="30" height="6" rx="2" fill={COLORS.white} opacity="0.6" />
    <rect x="120" y="215" width="30" height="6" rx="2" fill={COLORS.white} opacity="0.6" />
    
    {/* Vertical support beams */}
    <rect x="100" y="125" width="6" height="150" fill={COLORS.primary} opacity="0.4" />
    <rect x="294" y="125" width="6" height="150" fill={COLORS.primary} opacity="0.4" />
    
    {/* Clipboard/checklist */}
    <rect x="320" y="140" width="35" height="50" rx="4" fill={COLORS.white} opacity="0.8" stroke={COLORS.primary} strokeWidth="1.5" />
    <rect x="325" y="150" width="25" height="4" rx="2" fill={COLORS.secondary} opacity="0.6" />
    <rect x="325" y="160" width="20" height="4" rx="2" fill={COLORS.secondary} opacity="0.6" />
    <rect x="325" y="170" width="18" height="4" rx="2" fill={COLORS.secondary} opacity="0.6" />
    <circle cx="330" cy="180" r="3" fill={COLORS.primary} opacity="0.8" />
  </svg>
);

// ============ REAL ESTATE INDUSTRY SVGS ============

export const PropertyManagementSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs>
      <linearGradient id="real1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" />
        <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" />
      </linearGradient>
    </defs>
    
    {/* Main building */}
    <path d="M 120 200 L 200 120 L 280 200 L 280 320 L 120 320 Z" fill="url(#real1)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    
    {/* Windows grid */}
    <rect x="140" y="180" width="20" height="25" rx="2" fill={COLORS.white} opacity="0.4" stroke={COLORS.primary} strokeWidth="1" />
    <rect x="170" y="180" width="20" height="25" rx="2" fill={COLORS.white} opacity="0.4" stroke={COLORS.primary} strokeWidth="1" />
    <rect x="210" y="180" width="20" height="25" rx="2" fill={COLORS.white} opacity="0.4" stroke={COLORS.primary} strokeWidth="1" />
    <rect x="240" y="180" width="20" height="25" rx="2" fill={COLORS.white} opacity="0.4" stroke={COLORS.primary} strokeWidth="1" />
    
    <rect x="140" y="220" width="20" height="25" rx="2" fill={COLORS.white} opacity="0.4" stroke={COLORS.primary} strokeWidth="1" />
    <rect x="170" y="220" width="20" height="25" rx="2" fill={COLORS.white} opacity="0.4" stroke={COLORS.primary} strokeWidth="1" />
    <rect x="210" y="220" width="20" height="25" rx="2" fill={COLORS.white} opacity="0.4" stroke={COLORS.primary} strokeWidth="1" />
    <rect x="240" y="220" width="20" height="25" rx="2" fill={COLORS.white} opacity="0.4" stroke={COLORS.primary} strokeWidth="1" />
    
    {/* Door */}
    <rect x="185" y="270" width="30" height="50" rx="4" fill={COLORS.secondary} opacity="0.6" />
    <circle cx="205" cy="295" r="2" fill={COLORS.white} opacity="0.8" />
    
    {/* Management dashboard/tablet */}
    <rect x="320" y="140" width="60" height="80" rx="8" fill={COLORS.white} opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
    
    {/* Dashboard content */}
    <rect x="325" y="150" width="50" height="12" rx="2" fill={COLORS.primary} opacity="0.6" />
    <rect x="330" y="170" width="15" height="15" rx="2" fill="url(#real1)" opacity="0.7" />
    <rect x="350" y="170" width="15" height="15" rx="2" fill="url(#real1)" opacity="0.7" />
    <rect x="330" y="190" width="15" height="15" rx="2" fill="url(#real1)" opacity="0.5" />
    <rect x="350" y="190" width="15" height="15" rx="2" fill="url(#real1)" opacity="0.7" />
    
    {/* Key management */}
    <rect x="30" y="180" width="70" height="40" rx="6" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
    <rect x="40" y="190" width="12" height="8" rx="2" fill={COLORS.white} opacity="0.6" />
    <rect x="55" y="190" width="12" height="8" rx="2" fill={COLORS.white} opacity="0.6" />
    <rect x="70" y="190" width="12" height="8" rx="2" fill={COLORS.white} opacity="0.6" />
    <rect x="40" y="205" width="12" height="8" rx="2" fill={COLORS.white} opacity="0.4" />
    <rect x="55" y="205" width="12" height="8" rx="2" fill={COLORS.white} opacity="0.6" />
    <rect x="70" y="205" width="12" height="8" rx="2" fill={COLORS.white} opacity="0.4" />
    
    {/* Connection lines */}
    <path d="M 100 200 Q 110 190 120 200" stroke={COLORS.accent} strokeWidth="2" opacity="0.6" strokeDasharray="3,2" />
    <path d="M 280 190 Q 290 185 320 190" stroke={COLORS.accent} strokeWidth="2" opacity="0.6" strokeDasharray="3,2" />
  </svg>
);

export const VirtualToursSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs>
      <linearGradient id="real2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" />
        <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" />
      </linearGradient>
    </defs>
    
    {/* 360-degree camera */}
    <circle cx="200" cy="200" r="45" fill="url(#real2)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="200" cy="200" r="25" fill={COLORS.white} opacity="0.3" />
    <circle cx="200" cy="200" r="12" fill={COLORS.primary} opacity="0.8" />
    
    {/* Camera lens details */}
    <circle cx="200" cy="200" r="35" fill="none" stroke={COLORS.white} strokeWidth="1.5" opacity="0.4" />
    <path d="M 185 200 A 15 15 0 0 1 215 200" stroke={COLORS.white} strokeWidth="2" fill="none" opacity="0.6" />
    <path d="M 185 200 A 15 15 0 0 0 215 200" stroke={COLORS.white} strokeWidth="2" fill="none" opacity="0.6" />
    
    {/* VR headset */}
    <rect x="90" y="120" width="80" height="40" rx="20" fill={COLORS.secondary} opacity="0.8" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="105" y="130" width="20" height="20" rx="4" fill={COLORS.white} opacity="0.4" />
    <rect x="135" y="130" width="20" height="20" rx="4" fill={COLORS.white} opacity="0.4" />
    <rect x="110" y="105" width="40" height="8" rx="4" fill={COLORS.primary} opacity="0.6" />
    
    {/* Smartphone showing VR view */}
    <rect x="280" y="140" width="60" height="100" rx="12" fill={COLORS.white} opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="285" y="150" width="50" height="80" rx="6" fill="url(#real2)" opacity="0.6" />
    
    {/* Room view in phone */}
    <rect x="290" y="160" width="15" height="20" fill={COLORS.white} opacity="0.4" />
    <rect x="310" y="160" width="15" height="20" fill={COLORS.white} opacity="0.4" />
    <rect x="295" y="185" width="20" height="15" fill={COLORS.white} opacity="0.3" />
    
    {/* 360-degree field of view lines */}
    <circle cx="200" cy="200" r="80" fill="none" stroke={COLORS.accent} strokeWidth="2" opacity="0.5" strokeDasharray="8,4" />
    <circle cx="200" cy="200" r="110" fill="none" stroke={COLORS.accent} strokeWidth="1.5" opacity="0.3" strokeDasharray="6,6" />
    
    {/* View angle indicators */}
    <path d="M 200 120 L 200 200 L 280 200" stroke={COLORS.accent} strokeWidth="1.5" opacity="0.6" />
    <path d="M 275 195 L 280 200 L 275 205" stroke={COLORS.accent} strokeWidth="1.5" fill="none" opacity="0.6" />
    
    {/* Connection lines */}
    <path d="M 170 140 Q 180 170 180 180" stroke={COLORS.primary} strokeWidth="2" opacity="0.4" strokeDasharray="3,2" />
    <path d="M 245 200 Q 260 200 280 200" stroke={COLORS.primary} strokeWidth="2" opacity="0.4" strokeDasharray="3,2" />
  </svg>
);

export const RealEstateAnalyticsSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs>
      <linearGradient id="real3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" />
        <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" />
      </linearGradient>
    </defs>
    
    {/* Main dashboard */}
    <rect x="80" y="100" width="240" height="180" rx="12" fill={COLORS.white} opacity="0.1" stroke={COLORS.primary} strokeWidth="2" />
    
    {/* Dashboard header */}
    <rect x="90" y="110" width="220" height="25" rx="6" fill="url(#real3)" opacity="0.7" />
    <rect x="100" y="117" width="60" height="11" rx="3" fill={COLORS.white} opacity="0.6" />
    
    {/* Property price chart */}
    <rect x="100" y="150" width="100" height="80" rx="8" fill="url(#real3)" opacity="0.6" stroke={COLORS.primary} strokeWidth="1" />
    <path d="M 110 210 L 125 195 L 140 205 L 155 180 L 170 190 L 185 175" stroke={COLORS.white} strokeWidth="2.5" fill="none" opacity="0.8" />
    <circle cx="125" cy="195" r="3" fill={COLORS.accent} opacity="0.9" />
    <circle cx="155" cy="180" r="3" fill={COLORS.accent} opacity="0.9" />
    <circle cx="185" cy="175" r="3" fill={COLORS.accent} opacity="0.9" />
    
    {/* Property metrics */}
    <rect x="220" y="150" width="85" height="80" rx="8" fill={COLORS.secondary} opacity="0.6" stroke={COLORS.primary} strokeWidth="1" />
    
    {/* Metric boxes */}
    <rect x="230" y="160" width="25" height="20" rx="3" fill={COLORS.white} opacity="0.4" />
    <rect x="270" y="160" width="25" height="20" rx="3" fill={COLORS.white} opacity="0.4" />
    <rect x="230" y="190" width="25" height="20" rx="3" fill={COLORS.white} opacity="0.4" />
    <rect x="270" y="190" width="25" height="20" rx="3" fill={COLORS.white} opacity="0.4" />
    
    {/* Value indicators */}
    <rect x="235" y="167" width="15" height="4" rx="2" fill={COLORS.primary} opacity="0.8" />
    <rect x="275" y="167" width="15" height="4" rx="2" fill={COLORS.primary} opacity="0.8" />
    <rect x="235" y="197" width="15" height="4" rx="2" fill={COLORS.primary} opacity="0.8" />
    <rect x="275" y="197" width="15" height="4" rx="2" fill={COLORS.primary} opacity="0.8" />
    
    {/* Map/Location analytics */}
    <rect x="100" y="245" width="80" height="60" rx="6" fill={COLORS.primary} opacity="0.5" stroke={COLORS.primary} strokeWidth="1" />
    <circle cx="140" cy="270" r="8" fill={COLORS.white} opacity="0.6" />
    <circle cx="125" cy="285" r="5" fill={COLORS.accent} opacity="0.8" />
    <circle cx="155" cy="260" r="4" fill={COLORS.accent} opacity="0.8" />
    
    {/* ROI Calculator */}
    <rect x="200" y="245" width="105" height="60" rx="6" fill="url(#real3)" opacity="0.7" stroke={COLORS.primary} strokeWidth="1" />
    <rect x="210" y="255" width="85" height="8" rx="4" fill={COLORS.white} opacity="0.4" />
    <rect x="210" y="270" width="60" height="6" rx="3" fill={COLORS.white} opacity="0.3" />
    <rect x="210" y="280" width="40" height="6" rx="3" fill={COLORS.white} opacity="0.3" />
    <rect x="210" y="290" width="70" height="10" rx="5" fill={COLORS.secondary} opacity="0.8" />
    
    {/* Dollar sign */}
    <text x="260" y="275" fill={COLORS.white} fontSize="16" opacity="0.7">$</text>
    
    {/* Trend arrows */}
    <path d="M 190 165 L 205 165" stroke={COLORS.accent} strokeWidth="2" opacity="0.7" />
    <path d="M 200 160 L 205 165 L 200 170" stroke={COLORS.accent} strokeWidth="1.5" fill="none" opacity="0.7" />
  </svg>
);

// ============ SAAS INDUSTRY SVGS ============

export const SaaSPlatformSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs>
      <linearGradient id="saas1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" />
        <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" />
      </linearGradient>
    </defs>
    
    {/* Cloud */}
    <ellipse cx="200" cy="150" rx="80" ry="40" fill="url(#saas1)" opacity="0.8" stroke={COLORS.primary} strokeWidth="2" />
    <ellipse cx="160" cy="140" rx="35" ry="20" fill="url(#saas1)" opacity="0.7" />
    <ellipse cx="240" cy="140" rx="35" ry="20" fill="url(#saas1)" opacity="0.7" />
    <ellipse cx="200" cy="120" rx="25" ry="15" fill="url(#saas1)" opacity="0.6" />
    
    {/* SaaS text in cloud */}
    <text x="200" y="155" textAnchor="middle" fill={COLORS.white} fontSize="18" fontWeight="bold" opacity="0.9">SaaS</text>
    
    {/* Connected devices */}
    {/* Laptop */}
    <rect x="80" y="220" width="60" height="40" rx="4" fill={COLORS.secondary} opacity="0.8" stroke={COLORS.primary} strokeWidth="1.5" />
    <rect x="85" y="225" width="50" height="30" rx="2" fill={COLORS.white} opacity="0.3" />
    <rect x="105" y="260" width="20" height="8" rx="4" fill={COLORS.secondary} opacity="0.6" />
    
    {/* Desktop */}
    <rect x="260" y="220" width="60" height="50" rx="4" fill={COLORS.secondary} opacity="0.8" stroke={COLORS.primary} strokeWidth="1.5" />
    <rect x="265" y="225" width="50" height="35" rx="2" fill={COLORS.white} opacity="0.3" />
    <rect x="280" y="270" width="20" height="15" rx="2" fill={COLORS.secondary} opacity="0.6" />
    
    {/* Mobile phone */}
    <rect x="180" y="280" width="40" height="70" rx="8" fill={COLORS.secondary} opacity="0.8" stroke={COLORS.primary} strokeWidth="1.5" />
    <rect x="185" y="290" width="30" height="50" rx="4" fill={COLORS.white} opacity="0.3" />
    <circle cx="200" cy="365" r="4" fill={COLORS.white} opacity="0.5" />
    
    {/* Tablet */}
    <rect x="120" y="320" width="50" height="70" rx="6" fill={COLORS.secondary} opacity="0.8" stroke={COLORS.primary} strokeWidth="1.5" />
    <rect x="125" y="325" width="40" height="60" rx="3" fill={COLORS.white} opacity="0.3" />
    
    {/* Connection lines to cloud */}
    <path d="M 130 220 Q 150 190 170 170" stroke={COLORS.accent} strokeWidth="2" opacity="0.6" strokeDasharray="4,3" />
    <path d="M 280 220 Q 260 190 230 170" stroke={COLORS.accent} strokeWidth="2" opacity="0.6" strokeDasharray="4,3" />
    <path d="M 200 280 Q 200 230 200 190" stroke={COLORS.accent} strokeWidth="2" opacity="0.6" strokeDasharray="4,3" />
    <path d="M 145 320 Q 165 260 185 190" stroke={COLORS.accent} strokeWidth="2" opacity="0.6" strokeDasharray="4,3" />
    
    {/* Data flow indicators */}
    <circle cx="150" cy="200" r="3" fill={COLORS.accent} opacity="0.8" />
    <circle cx="250" cy="200" r="3" fill={COLORS.accent} opacity="0.8" />
    <circle cx="200" cy="235" r="3" fill={COLORS.accent} opacity="0.8" />
    <circle cx="175" cy="255" r="3" fill={COLORS.accent} opacity="0.8" />
  </svg>
);

export const APIIntegrationSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="saas2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <circle cx="200" cy="200" r="60" fill="url(#saas2)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="120" cy="200" r="30" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="280" cy="200" r="30" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="200" cy="120" r="30" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="200" cy="280" r="30" fill={COLORS.secondary} opacity="0.7" stroke={COLORS.primary} strokeWidth="2" />
  </svg>
);

export const SubscriptionManagementSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="saas3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <rect x="110" y="130" width="70" height="140" rx="8" fill="url(#saas3)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="220" y="110" width="70" height="160" rx="8" fill="url(#saas3)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <path d="M 145 180 Q 200 160 255 180" stroke={COLORS.white} strokeWidth="2" fill="none" opacity="0.6" />
  </svg>
);

// ============ FINTECH INDUSTRY SVGS ============

export const PaymentProcessingSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="fin1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    {/* Credit cards */}
    <rect x="120" y="140" width="160" height="100" rx="12" fill="url(#fin1)" opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="130" y="160" width="140" height="15" rx="3" fill={COLORS.white} opacity="0.4" />
    <rect x="130" y="185" width="40" height="25" rx="4" fill={COLORS.accent} opacity="0.8" />
    <rect x="180" y="185" width="40" height="25" rx="4" fill={COLORS.accent} opacity="0.8" />
    <rect x="230" y="185" width="40" height="25" rx="4" fill={COLORS.accent} opacity="0.8" />
    
    {/* Card behind */}
    <rect x="140" y="120" width="160" height="100" rx="12" fill={COLORS.secondary} opacity="0.6" stroke={COLORS.primary} strokeWidth="1" />
    
    {/* Payment terminal */}
    <rect x="290" y="180" width="80" height="120" rx="8" fill={COLORS.card} opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="300" y="200" width="60" height="40" rx="4" fill={COLORS.white} opacity="0.2" />
    <rect x="310" y="260" width="40" height="25" rx="4" fill={COLORS.accent} opacity="0.8" />
    
    {/* Connection arrows */}
    <path d="M 270 190 L 295 190" stroke={COLORS.accent} strokeWidth="3" opacity="0.7" />
    
    {/* Transaction flow */}
    <circle cx="200" cy="300" r="25" fill={COLORS.accent} opacity="0.6" />
    <text x="200" y="308" textAnchor="middle" fill={COLORS.white} fontSize="16" opacity="0.8">$</text>
  </svg>
);

export const DigitalWalletSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="fin2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    {/* Mobile phone */}
    <rect x="150" y="100" width="100" height="180" rx="20" fill="url(#fin2)" opacity="0.9" stroke={COLORS.primary} strokeWidth="3" />
    <rect x="160" y="120" width="80" height="140" rx="8" fill={COLORS.white} opacity="0.1" />
    
    {/* Wallet app interface */}
    <rect x="170" y="140" width="60" height="8" rx="4" fill={COLORS.white} opacity="0.6" />
    <rect x="170" y="160" width="40" height="6" rx="3" fill={COLORS.white} opacity="0.4" />
    
    {/* Balance display */}
    <rect x="170" y="180" width="60" height="25" rx="4" fill={COLORS.accent} opacity="0.8" />
    <text x="200" y="197" textAnchor="middle" fill={COLORS.white} fontSize="12" opacity="0.9">$2,450</text>
    
    {/* Transaction buttons */}
    <circle cx="185" cy="230" r="15" fill={COLORS.secondary} opacity="0.8" />
    <text x="185" y="235" textAnchor="middle" fill={COLORS.white} fontSize="12">↑</text>
    
    <circle cx="215" cy="230" r="15" fill={COLORS.secondary} opacity="0.8" />
    <text x="215" y="235" textAnchor="middle" fill={COLORS.white} fontSize="12">↓</text>
    
    {/* NFC waves */}
    <path d="M 120 160 Q 140 140, 160 160" stroke={COLORS.accent} strokeWidth="2" fill="none" opacity="0.6" />
    <path d="M 110 170 Q 135 145, 160 170" stroke={COLORS.accent} strokeWidth="2" fill="none" opacity="0.4" />
    <path d="M 100 180 Q 130 150, 160 180" stroke={COLORS.accent} strokeWidth="2" fill="none" opacity="0.2" />
    
    {/* Coins floating */}
    <circle cx="280" cy="150" r="12" fill={COLORS.accent} opacity="0.7" />
    <text x="280" y="156" textAnchor="middle" fill={COLORS.white} fontSize="10">$</text>
    <circle cx="300" cy="200" r="10" fill={COLORS.accent} opacity="0.5" />
    <text x="300" y="205" textAnchor="middle" fill={COLORS.white} fontSize="8">$</text>
  </svg>
);

export const BlockchainSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="fin3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    
    {/* Blockchain blocks with detailed structure */}
    <g>
      {/* Block 1 */}
      <rect x="60" y="160" width="70" height="70" rx="8" fill="url(#fin3)" opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
      <rect x="70" y="170" width="50" height="8" rx="2" fill={COLORS.white} opacity="0.6" />
      <rect x="70" y="185" width="35" height="6" rx="2" fill={COLORS.white} opacity="0.4" />
      <rect x="70" y="200" width="40" height="6" rx="2" fill={COLORS.white} opacity="0.4" />
      <text x="95" y="220" textAnchor="middle" fill={COLORS.accent} fontSize="10" opacity="0.8">#001</text>
      
      {/* Block 2 */}
      <rect x="165" y="160" width="70" height="70" rx="8" fill="url(#fin3)" opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
      <rect x="175" y="170" width="50" height="8" rx="2" fill={COLORS.white} opacity="0.6" />
      <rect x="175" y="185" width="35" height="6" rx="2" fill={COLORS.white} opacity="0.4" />
      <rect x="175" y="200" width="40" height="6" rx="2" fill={COLORS.white} opacity="0.4" />
      <text x="200" y="220" textAnchor="middle" fill={COLORS.accent} fontSize="10" opacity="0.8">#002</text>
      
      {/* Block 3 */}
      <rect x="270" y="160" width="70" height="70" rx="8" fill="url(#fin3)" opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
      <rect x="280" y="170" width="50" height="8" rx="2" fill={COLORS.white} opacity="0.6" />
      <rect x="280" y="185" width="35" height="6" rx="2" fill={COLORS.white} opacity="0.4" />
      <rect x="280" y="200" width="40" height="6" rx="2" fill={COLORS.white} opacity="0.4" />
      <text x="305" y="220" textAnchor="middle" fill={COLORS.accent} fontSize="10" opacity="0.8">#003</text>
    </g>
    
    {/* Chain connections with lock symbols */}
    <g>
      <path d="M 130 195 L 165 195" stroke={COLORS.accent} strokeWidth="4" opacity="0.8" />
      <circle cx="147.5" cy="195" r="8" fill={COLORS.accent} opacity="0.8" />
      <rect x="143" y="191" width="9" height="8" rx="2" fill={COLORS.white} opacity="0.9" />
      <circle cx="147.5" cy="193" r="2" fill={COLORS.accent} opacity="0.9" />
      
      <path d="M 235 195 L 270 195" stroke={COLORS.accent} strokeWidth="4" opacity="0.8" />
      <circle cx="252.5" cy="195" r="8" fill={COLORS.accent} opacity="0.8" />
      <rect x="248" y="191" width="9" height="8" rx="2" fill={COLORS.white} opacity="0.9" />
      <circle cx="252.5" cy="193" r="2" fill={COLORS.accent} opacity="0.9" />
    </g>
    
    {/* Network nodes above */}
    <circle cx="120" cy="120" r="12" fill={COLORS.secondary} opacity="0.8" />
    <circle cx="200" cy="100" r="12" fill={COLORS.secondary} opacity="0.8" />
    <circle cx="280" cy="120" r="12" fill={COLORS.secondary} opacity="0.8" />
    
    {/* Network connections */}
    <path d="M 95 140 L 110 150" stroke={COLORS.accent} strokeWidth="2" opacity="0.5" strokeDasharray="3,3" />
    <path d="M 200 115 L 200 150" stroke={COLORS.accent} strokeWidth="2" opacity="0.5" strokeDasharray="3,3" />
    <path d="M 305 140 L 290 150" stroke={COLORS.accent} strokeWidth="2" opacity="0.5" strokeDasharray="3,3" />
  </svg>
);

// ============ LOGISTICS INDUSTRY SVGS ============

export const FleetManagementSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="log1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <rect x="100" y="140" width="200" height="100" rx="12" fill="url(#log1)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="145" cy="250" r="22" fill={COLORS.secondary} opacity="0.8" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="255" cy="250" r="22" fill={COLORS.secondary} opacity="0.8" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="120" y="160" width="80" height="40" rx="6" fill={COLORS.white} opacity="0.4" />
  </svg>
);

export const WarehouseSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="log2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <path d="M 110 190 L 200 130 L 290 190 L 290 270 L 110 270 Z" fill="url(#log2)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="150" y="210" width="40" height="60" fill={COLORS.secondary} opacity="0.6" />
    <rect x="210" y="210" width="40" height="60" fill={COLORS.secondary} opacity="0.6" />
  </svg>
);

export const SupplyChainSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="log3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <circle cx="120" cy="200" r="35" fill="url(#log3)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="200" cy="200" r="35" fill="url(#log3)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="280" cy="200" r="35" fill="url(#log3)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <path d="M 155 200 L 165 200 M 235 200 L 245 200" stroke={COLORS.white} strokeWidth="3" opacity="0.6" />
  </svg>
);

// ============ RETAIL INDUSTRY SVGS ============

export const POSSolutionsSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="retail1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <rect x="130" y="120" width="140" height="180" rx="12" fill="url(#retail1)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="150" y="140" width="100" height="120" rx="8" fill={COLORS.white} opacity="0.4" />
    <rect x="150" y="270" width="100" height="8" rx="4" fill={COLORS.white} opacity="0.3" />
  </svg>
);

export const OmniChannelSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="retail2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <circle cx="200" cy="200" r="70" fill="url(#retail2)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="180" y="100" width="40" height="50" rx="6" fill={COLORS.secondary} opacity="0.7" />
    <rect x="250" y="180" width="60" height="40" rx="6" fill={COLORS.secondary} opacity="0.7" />
    <rect x="90" y="180" width="60" height="40" rx="6" fill={COLORS.secondary} opacity="0.7" />
    <rect x="180" y="250" width="40" height="50" rx="6" fill={COLORS.secondary} opacity="0.7" />
  </svg>
);

export const CustomerLoyaltySVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="retail3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <path d="M 200 120 L 230 180 L 300 190 L 250 240 L 260 310 L 200 280 L 140 310 L 150 240 L 100 190 L 170 180 Z" fill="url(#retail3)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="200" cy="220" r="30" fill={COLORS.white} opacity="0.3" />
  </svg>
);

// ============ MISSING AUTOMOTIVE SVGS ============

export const AdasSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="adas" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <rect x="80" y="140" width="240" height="120" rx="20" fill="url(#adas)" opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="200" cy="200" r="25" fill={COLORS.white} opacity="0.8" />
    <path d="M 180 180 L 220 180 L 220 220 L 180 220 Z" fill={COLORS.primary} opacity="0.6" />
  </svg>
);

export const EvSolutionsSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="ev" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <rect x="80" y="140" width="240" height="120" rx="20" fill="url(#ev)" opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
    <path d="M 180 160 L 220 160 L 220 180 L 200 190 L 180 180 Z" fill={COLORS.white} opacity="0.7" />
  </svg>
);

export const AutoMaintenanceSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="maintenance" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <rect x="120" y="140" width="160" height="120" rx="12" fill="url(#maintenance)" opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="160" cy="200" r="15" fill={COLORS.white} opacity="0.7" />
    <circle cx="240" cy="200" r="15" fill={COLORS.white} opacity="0.7" />
  </svg>
);

// ============ MISSING ECOMMERCE SVGS ============

export const EcommerceMarketingSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs>
      <linearGradient id="ecommMarketing" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" />
        <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" />
      </linearGradient>
    </defs>
    
    {/* Analytics dashboard */}
    <rect x="90" y="120" width="220" height="120" rx="12" fill={COLORS.white} opacity="0.1" stroke={COLORS.primary} strokeWidth="2" />
    
    {/* Chart/Analytics */}
    <rect x="105" y="135" width="70" height="50" rx="8" fill="url(#ecommMarketing)" opacity="0.8" />
    <path d="M 115 170 L 125 155 L 135 165 L 150 145 L 165 160" stroke={COLORS.white} strokeWidth="2" fill="none" opacity="0.8" />
    
    {/* Social media icons */}
    <circle cx="210" cy="150" r="15" fill="url(#ecommMarketing)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="203" y="143" width="14" height="14" rx="3" fill={COLORS.white} opacity="0.6" />
    
    <circle cx="250" cy="150" r="15" fill="url(#ecommMarketing)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <path d="M 243 146 L 257 146 M 243 150 L 257 150 M 243 154 L 257 154" stroke={COLORS.white} strokeWidth="1.5" opacity="0.6" />
    
    {/* Ad banner */}
    <rect x="105" y="200" width="170" height="35" rx="8" fill="url(#ecommMarketing)" opacity="0.7" stroke={COLORS.primary} strokeWidth="1.5" />
    <rect x="115" y="208" width="50" height="18" rx="4" fill={COLORS.white} opacity="0.4" />
    <rect x="175" y="208" width="35" height="7" rx="4" fill={COLORS.white} opacity="0.3" />
    <rect x="175" y="219" width="40" height="7" rx="4" fill={COLORS.white} opacity="0.3" />
    <rect x="225" y="208" width="35" height="18" rx="6" fill={COLORS.secondary} opacity="0.8" />
    
    {/* Email marketing */}
    <rect x="110" y="260" width="80" height="50" rx="8" fill={COLORS.secondary} opacity="0.6" stroke={COLORS.primary} strokeWidth="1.5" />
    <path d="M 110 275 L 150 290 L 190 275" stroke={COLORS.white} strokeWidth="2" fill="none" opacity="0.7" />
    <circle cx="125" cy="280" r="3" fill={COLORS.white} opacity="0.8" />
    <circle cx="175" cy="280" r="3" fill={COLORS.white} opacity="0.8" />
    
    {/* Shopping cart with arrow (conversion) */}
    <path d="M 220 275 L 235 275 L 245 265 L 300 265 L 305 295 L 245 295 Z" fill="url(#ecommMarketing)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="255" cy="308" r="6" fill={COLORS.secondary} opacity="0.8" />
    <circle cx="285" cy="308" r="6" fill={COLORS.secondary} opacity="0.8" />
    
    {/* Conversion arrow */}
    <path d="M 200 285 L 220 285" stroke={COLORS.accent} strokeWidth="3" opacity="0.8" />
    <path d="M 215 280 L 220 285 L 215 290" stroke={COLORS.accent} strokeWidth="2" fill="none" opacity="0.8" />
  </svg>
);

export const MobileCommerceSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs>
      <linearGradient id="mobileComm" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" />
        <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" />
      </linearGradient>
    </defs>
    
    {/* Phone outline */}
    <rect x="170" y="110" width="80" height="160" rx="18" fill="url(#mobileComm)" opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
    
    {/* Screen */}
    <rect x="178" y="122" width="64" height="136" rx="8" fill={COLORS.white} opacity="0.2" />
    
    {/* App header */}
    <rect x="182" y="127" width="56" height="18" rx="4" fill={COLORS.primary} opacity="0.7" />
    <circle cx="190" cy="136" r="3" fill={COLORS.white} opacity="0.8" />
    <rect x="215" y="133" width="18" height="6" rx="3" fill={COLORS.white} opacity="0.6" />
    
    {/* Product grid in app */}
    <rect x="182" y="155" width="24" height="24" rx="4" fill="url(#mobileComm)" opacity="0.7" />
    <rect x="214" y="155" width="24" height="24" rx="4" fill="url(#mobileComm)" opacity="0.7" />
    <rect x="182" y="185" width="24" height="24" rx="4" fill="url(#mobileComm)" opacity="0.7" />
    <rect x="214" y="185" width="24" height="24" rx="4" fill="url(#mobileComm)" opacity="0.7" />
    
    {/* Price tags */}
    <rect x="184" y="205" width="10" height="5" rx="2" fill={COLORS.secondary} opacity="0.8" />
    <rect x="216" y="205" width="10" height="5" rx="2" fill={COLORS.secondary} opacity="0.8" />
    
    {/* Shopping cart icon */}
    <path d="M 185 220 L 190 220 L 195 215 L 225 215 L 227 230 L 195 230 Z" fill={COLORS.primary} opacity="0.8" />
    <circle cx="200" cy="237" r="3" fill={COLORS.primary} opacity="0.8" />
    <circle cx="215" cy="237" r="3" fill={COLORS.primary} opacity="0.8" />
    
    {/* Phone buttons */}
    <circle cx="210" cy="260" r="6" fill={COLORS.white} opacity="0.4" />
    
    {/* Credit cards flying to phone (payment) */}
    <rect x="90" y="160" width="40" height="28" rx="6" fill="url(#mobileComm)" opacity="0.8" stroke={COLORS.primary} strokeWidth="1.5" />
    <rect x="95" y="166" width="12" height="8" rx="2" fill={COLORS.white} opacity="0.5" />
    <rect x="95" y="178" width="25" height="4" rx="2" fill={COLORS.white} opacity="0.4" />
    
    <rect x="270" y="180" width="40" height="28" rx="6" fill="url(#mobileComm)" opacity="0.8" stroke={COLORS.primary} strokeWidth="1.5" />
    <rect x="275" y="186" width="12" height="8" rx="2" fill={COLORS.white} opacity="0.5" />
    <rect x="275" y="198" width="25" height="4" rx="2" fill={COLORS.white} opacity="0.4" />
    
    {/* Curved arrows showing mobile payment flow */}
    <path d="M 130 170 Q 145 160 170 170" stroke={COLORS.accent} strokeWidth="2" fill="none" opacity="0.7" strokeDasharray="3,2" />
    <path d="M 250 190 Q 260 185 270 190" stroke={COLORS.accent} strokeWidth="2" fill="none" opacity="0.7" strokeDasharray="3,2" />
  </svg>
);

// ============ MISSING EDUCATION SVGS ============

export const StudentPortalsSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="studentPortal" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <rect x="90" y="130" width="220" height="140" rx="18" fill="url(#studentPortal)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="150" cy="180" r="20" fill={COLORS.white} opacity="0.7" />
    <circle cx="250" cy="180" r="20" fill={COLORS.white} opacity="0.7" />
  </svg>
);

export const ContentAuthoringSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="contentAuth" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <rect x="110" y="140" width="180" height="120" rx="12" fill="url(#contentAuth)" opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
    <path d="M 130 160 L 270 160 L 270 170 L 130 170 Z" fill={COLORS.white} opacity="0.6" />
    <path d="M 130 190 L 250 190 L 250 200 L 130 200 Z" fill={COLORS.white} opacity="0.4" />
  </svg>
);

export const EducationAnalyticsSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="eduAnalytics" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <rect x="100" y="140" width="200" height="120" rx="15" fill="url(#eduAnalytics)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="120" y="160" width="30" height="80" fill={COLORS.white} opacity="0.5" />
    <rect x="170" y="180" width="30" height="60" fill={COLORS.white} opacity="0.5" />
    <rect x="220" y="170" width="30" height="70" fill={COLORS.white} opacity="0.5" />
  </svg>
);

// ============ MISSING FINTECH SVGS ============

export const LendingSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="lending" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <rect x="120" y="150" width="160" height="100" rx="12" fill="url(#lending)" opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
    <path d="M 140 170 L 180 170 L 180 180 L 140 180 Z" fill={COLORS.white} opacity="0.7" />
    <path d="M 220 170 L 260 170 L 260 180 L 220 180 Z" fill={COLORS.white} opacity="0.7" />
  </svg>
);

export const InsuranceSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="insurance" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <path d="M 200 130 L 260 160 L 260 220 L 200 250 L 140 220 L 140 160 Z" fill="url(#insurance)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="200" cy="190" r="20" fill={COLORS.white} opacity="0.6" />
  </svg>
);

// ============ MISSING HEALTHCARE SVGS ============

export const HealthcareAnalyticsSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="healthAnalytics" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <rect x="100" y="140" width="200" height="120" rx="15" fill="url(#healthAnalytics)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <path d="M 180 160 L 220 160 L 220 170 L 180 170 Z" fill={COLORS.white} opacity="0.7" />
    <path d="M 200 180 L 200 220" stroke={COLORS.white} strokeWidth="3" opacity="0.6" />
    <path d="M 180 200 L 220 200" stroke={COLORS.white} strokeWidth="3" opacity="0.6" />
  </svg>
);

export const TelehealthSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="telehealth" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <rect x="130" y="130" width="140" height="90" rx="15" fill="url(#telehealth)" opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="200" cy="175" r="15" fill={COLORS.white} opacity="0.7" />
    <rect x="160" y="240" width="80" height="30" rx="8" fill="url(#telehealth)" opacity="0.7" />
  </svg>
);

export const ClinicalResearchSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="clinical" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <rect x="110" y="140" width="180" height="120" rx="12" fill="url(#clinical)" opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="160" cy="190" r="12" fill={COLORS.white} opacity="0.6" />
    <circle cx="200" cy="190" r="12" fill={COLORS.white} opacity="0.6" />
    <circle cx="240" cy="190" r="12" fill={COLORS.white} opacity="0.6" />
  </svg>
);

// ============ MISSING LOGISTICS SVGS ============

export const DeliverySVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="delivery" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <rect x="120" y="160" width="160" height="80" rx="15" fill="url(#delivery)" opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="150" cy="250" r="15" fill={COLORS.primary} opacity="0.8" />
    <circle cx="250" cy="250" r="15" fill={COLORS.primary} opacity="0.8" />
    <rect x="140" y="180" width="120" height="40" fill={COLORS.white} opacity="0.3" />
  </svg>
);

export const CustomsSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="customs" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <rect x="100" y="140" width="200" height="120" rx="12" fill="url(#customs)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="140" y="160" width="40" height="30" fill={COLORS.white} opacity="0.6" />
    <rect x="220" y="160" width="40" height="30" fill={COLORS.white} opacity="0.6" />
  </svg>
);

// ============ MISSING MUSIC SVGS ============

export const MusicLicensingSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="musicLicense" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <rect x="110" y="140" width="180" height="120" rx="15" fill="url(#musicLicense)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="160" cy="200" r="18" fill={COLORS.white} opacity="0.7" />
    <circle cx="240" cy="200" r="18" fill={COLORS.white} opacity="0.7" />
  </svg>
);

export const MusicSocialSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="musicSocial" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <circle cx="200" cy="200" r="60" fill="url(#musicSocial)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="180" cy="180" r="12" fill={COLORS.white} opacity="0.7" />
    <circle cx="220" cy="180" r="12" fill={COLORS.white} opacity="0.7" />
    <circle cx="200" cy="220" r="12" fill={COLORS.white} opacity="0.7" />
  </svg>
);

// ============ MISSING ON-DEMAND SVGS ============

export const HealthcareOndemandSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="healthOndemand" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <rect x="130" y="150" width="140" height="100" rx="20" fill="url(#healthOndemand)" opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
    <path d="M 190 180 L 210 180 L 210 190 L 190 190 Z" fill={COLORS.white} opacity="0.7" />
    <path d="M 200 170 L 200 200" stroke={COLORS.white} strokeWidth="3" opacity="0.7" />
  </svg>
);

export const LogisticsOptimizationSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="logisticsOpt" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <circle cx="150" cy="170" r="20" fill="url(#logisticsOpt)" opacity="0.8" />
    <circle cx="250" cy="170" r="20" fill="url(#logisticsOpt)" opacity="0.8" />
    <circle cx="200" cy="230" r="20" fill="url(#logisticsOpt)" opacity="0.8" />
    <path d="M 150 170 L 250 170 L 200 230 Z" stroke={COLORS.primary} strokeWidth="2" opacity="0.6" fill="none" />
  </svg>
);

export const PaymentIntegrationSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="paymentInt" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <rect x="130" y="160" width="140" height="80" rx="15" fill="url(#paymentInt)" opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="150" y="180" width="100" height="8" fill={COLORS.white} opacity="0.6" />
    <rect x="150" y="200" width="60" height="8" fill={COLORS.white} opacity="0.4" />
  </svg>
);

// ============ MISSING REAL ESTATE SVGS ============

export const RealEstateCrmSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="realEstateCrm" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <rect x="100" y="140" width="200" height="120" rx="15" fill="url(#realEstateCrm)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="140" cy="180" r="15" fill={COLORS.white} opacity="0.7" />
    <rect x="170" y="170" width="100" height="8" fill={COLORS.white} opacity="0.5" />
    <rect x="170" y="190" width="80" height="6" fill={COLORS.white} opacity="0.3" />
  </svg>
);

export const RealEstateMarketplaceSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="realEstateMarket" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <rect x="120" y="150" width="160" height="100" rx="12" fill="url(#realEstateMarket)" opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="140" y="170" width="40" height="30" fill={COLORS.white} opacity="0.5" />
    <rect x="200" y="170" width="40" height="30" fill={COLORS.white} opacity="0.5" />
    <rect x="140" y="210" width="100" height="20" fill={COLORS.white} opacity="0.3" />
  </svg>
);

// ============ MISSING RETAIL SVGS ============

export const RetailAnalyticsSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs>
      <linearGradient id="retailAnalytics" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" />
        <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" />
      </linearGradient>
    </defs>
    
    {/* Dashboard background */}
    <rect x="80" y="100" width="240" height="180" rx="12" fill={COLORS.white} opacity="0.1" stroke={COLORS.primary} strokeWidth="2" />
    
    {/* Sales chart */}
    <rect x="100" y="120" width="120" height="80" rx="8" fill="url(#retailAnalytics)" opacity="0.7" stroke={COLORS.primary} strokeWidth="1" />
    <rect x="110" y="170" width="15" height="25" fill={COLORS.white} opacity="0.7" />
    <rect x="130" y="155" width="15" height="40" fill={COLORS.white} opacity="0.7" />
    <rect x="150" y="145" width="15" height="50" fill={COLORS.white} opacity="0.7" />
    <rect x="170" y="140" width="15" height="55" fill={COLORS.white} opacity="0.7" />
    <rect x="190" y="135" width="15" height="60" fill={COLORS.white} opacity="0.7" />
    
    {/* Shopping cart icon */}
    <path d="M 250 140 L 265 140 L 275 130 L 300 130 L 305 160 L 275 160 Z" fill="url(#retailAnalytics)" opacity="0.8" stroke={COLORS.primary} strokeWidth="1.5" />
    <circle cx="285" cy="170" r="5" fill={COLORS.secondary} opacity="0.8" />
    <circle cx="295" cy="170" r="5" fill={COLORS.secondary} opacity="0.8" />
    
    {/* Revenue metrics */}
    <rect x="240" y="180" width="70" height="50" rx="6" fill={COLORS.secondary} opacity="0.6" stroke={COLORS.primary} strokeWidth="1" />
    <rect x="250" y="190" width="50" height="8" rx="4" fill={COLORS.white} opacity="0.6" />
    <rect x="250" y="205" width="30" height="6" rx="3" fill={COLORS.white} opacity="0.4" />
    <rect x="250" y="215" width="40" height="10" rx="5" fill={COLORS.primary} opacity="0.8" />
    
    {/* Customer analytics */}
    <rect x="100" y="220" width="100" height="50" rx="6" fill={COLORS.primary} opacity="0.6" stroke={COLORS.primary} strokeWidth="1" />
    
    {/* Customer icons */}
    <circle cx="120" cy="240" r="8" fill={COLORS.white} opacity="0.6" />
    <path d="M 112 250 Q 120 255 128 250" stroke={COLORS.white} strokeWidth="2" fill="none" opacity="0.6" />
    
    <circle cx="145" cy="240" r="8" fill={COLORS.white} opacity="0.6" />
    <path d="M 137 250 Q 145 255 153 250" stroke={COLORS.white} strokeWidth="2" fill="none" opacity="0.6" />
    
    <circle cx="170" cy="240" r="8" fill={COLORS.white} opacity="0.6" />
    <path d="M 162 250 Q 170 255 178 250" stroke={COLORS.white} strokeWidth="2" fill="none" opacity="0.6" />
    
    {/* Trend line */}
    <path d="M 110 300 L 125 285 L 140 295 L 155 275 L 170 285 L 185 270 L 200 280 L 215 265" stroke={COLORS.accent} strokeWidth="2.5" fill="none" opacity="0.8" />
    <circle cx="155" cy="275" r="3" fill={COLORS.accent} opacity="0.9" />
    <circle cx="185" cy="270" r="3" fill={COLORS.accent} opacity="0.9" />
    <circle cx="215" cy="265" r="3" fill={COLORS.accent} opacity="0.9" />
    
    {/* Product performance */}
    <circle cx="270" cy="300" r="25" fill="url(#retailAnalytics)" opacity="0.7" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="262" y="292" width="16" height="16" rx="2" fill={COLORS.white} opacity="0.6" />
    <rect x="250" y="330" width="40" height="6" rx="3" fill={COLORS.white} opacity="0.4" />
  </svg>
);

export const RetailSupplyChainSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs>
      <linearGradient id="retailSupply" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" />
        <stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" />
      </linearGradient>
    </defs>
    
    {/* Supplier/Factory */}
    <rect x="60" y="140" width="80" height="60" rx="8" fill="url(#retailSupply)" opacity="0.8" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="70" y="155" width="15" height="30" fill={COLORS.white} opacity="0.4" />
    <rect x="90" y="155" width="15" height="30" fill={COLORS.white} opacity="0.4" />
    <rect x="110" y="155" width="15" height="30" fill={COLORS.white} opacity="0.4" />
    <path d="M 70 150 L 130 150" stroke={COLORS.white} strokeWidth="2" opacity="0.6" />
    
    {/* Warehouse/Distribution Center */}
    <rect x="180" y="120" width="80" height="80" rx="8" fill="url(#retailSupply)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    
    {/* Shelving in warehouse */}
    <rect x="190" y="135" width="60" height="50" rx="4" fill={COLORS.white} opacity="0.2" />
    <rect x="195" y="140" width="15" height="15" fill={COLORS.white} opacity="0.4" />
    <rect x="215" y="140" width="15" height="15" fill={COLORS.white} opacity="0.4" />
    <rect x="235" y="140" width="15" height="15" fill={COLORS.white} opacity="0.4" />
    <rect x="195" y="160" width="15" height="15" fill={COLORS.white} opacity="0.3" />
    <rect x="215" y="160" width="15" height="15" fill={COLORS.white} opacity="0.4" />
    <rect x="235" y="160" width="15" height="15" fill={COLORS.white} opacity="0.3" />
    
    {/* Retail Store */}
    <rect x="300" y="140" width="80" height="60" rx="8" fill="url(#retailSupply)" opacity="0.8" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="315" y="175" width="25" height="25" fill={COLORS.white} opacity="0.4" />
    <rect x="345" y="175" width="25" height="25" fill={COLORS.white} opacity="0.4" />
    <rect x="325" y="155" width="30" height="8" fill={COLORS.white} opacity="0.5" />
    
    {/* Trucks for transportation */}
    <rect x="130" y="230" width="50" height="25" rx="4" fill={COLORS.secondary} opacity="0.8" stroke={COLORS.primary} strokeWidth="1.5" />
    <circle cx="145" cy="260" r="8" fill={COLORS.primary} opacity="0.8" />
    <circle cx="165" cy="260" r="8" fill={COLORS.primary} opacity="0.8" />
    <rect x="135" y="240" width="40" height="15" fill={COLORS.white} opacity="0.3" />
    
    <rect x="250" y="230" width="50" height="25" rx="4" fill={COLORS.secondary} opacity="0.8" stroke={COLORS.primary} strokeWidth="1.5" />
    <circle cx="265" cy="260" r="8" fill={COLORS.primary} opacity="0.8" />
    <circle cx="285" cy="260" r="8" fill={COLORS.primary} opacity="0.8" />
    <rect x="255" y="240" width="40" height="15" fill={COLORS.white} opacity="0.3" />
    
    {/* Flow arrows */}
    <path d="M 140 170 L 175 170" stroke={COLORS.accent} strokeWidth="3" opacity="0.8" />
    <path d="M 170 165 L 175 170 L 170 175" stroke={COLORS.accent} strokeWidth="2" fill="none" opacity="0.8" />
    
    <path d="M 260 160 L 295 160" stroke={COLORS.accent} strokeWidth="3" opacity="0.8" />
    <path d="M 290 155 L 295 160 L 290 165" stroke={COLORS.accent} strokeWidth="2" fill="none" opacity="0.8" />
    
    {/* Curved arrows for truck routes */}
    <path d="M 155 220 Q 155 205 180 205" stroke={COLORS.accent} strokeWidth="2" opacity="0.6" strokeDasharray="4,2" />
    <path d="M 275 220 Q 275 205 300 205" stroke={COLORS.accent} strokeWidth="2" opacity="0.6" strokeDasharray="4,2" />
    
    {/* Labels */}
    <rect x="70" y="210" width="50" height="12" rx="6" fill={COLORS.white} opacity="0.8" />
    <rect x="190" y="85" width="60" height="12" rx="6" fill={COLORS.white} opacity="0.8" />
    <rect x="310" y="210" width="50" height="12" rx="6" fill={COLORS.white} opacity="0.8" />
  </svg>
);

// ============ MISSING SAAS SVGS ============

export const SaasAnalyticsSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="saasAnalytics" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <rect x="100" y="140" width="200" height="120" rx="15" fill="url(#saasAnalytics)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="200" cy="200" r="30" fill={COLORS.white} opacity="0.4" />
    <path d="M 150 170 L 250 230" stroke={COLORS.white} strokeWidth="3" opacity="0.6" />
  </svg>
);

export const SaasSecuritySVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs><linearGradient id="saasSecurity" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.8" /><stop offset="100%" stopColor={COLORS.secondary} stopOpacity="0.6" /></linearGradient></defs>
    <path d="M 200 130 L 260 160 L 260 220 L 200 250 L 140 220 L 140 160 Z" fill="url(#saasSecurity)" opacity="0.85" stroke={COLORS.primary} strokeWidth="2" />
    <path d="M 180 180 L 190 190 L 220 160" stroke={COLORS.white} strokeWidth="4" opacity="0.8" fill="none" />
  </svg>
);

// ============ PROGRAMMING LANGUAGES SVGS ============

export const DotNetSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs>
      <linearGradient id="dotnet1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#512BD4" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#9C4FFF" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    {/* .NET Logo */}
    <circle cx="200" cy="200" r="80" fill="url(#dotnet1)" opacity="0.9" stroke={COLORS.primary} strokeWidth="3" />
    <text x="200" y="210" textAnchor="middle" fill={COLORS.white} fontSize="28" fontWeight="bold" fontFamily="Arial">.NET</text>
    {/* Code blocks */}
    <rect x="120" y="120" width="60" height="40" rx="8" fill={COLORS.white} opacity="0.2" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="220" y="120" width="60" height="40" rx="8" fill={COLORS.white} opacity="0.2" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="120" y="240" width="60" height="40" rx="8" fill={COLORS.white} opacity="0.2" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="220" y="240" width="60" height="40" rx="8" fill={COLORS.white} opacity="0.2" stroke={COLORS.primary} strokeWidth="2" />
    {/* Connection lines */}
    <path d="M 170 140 Q 185 155 185 180" stroke={COLORS.accent} strokeWidth="2" opacity="0.7" strokeDasharray="4,2" />
    <path d="M 230 140 Q 215 155 215 180" stroke={COLORS.accent} strokeWidth="2" opacity="0.7" strokeDasharray="4,2" />
    <path d="M 185 220 Q 185 235 170 260" stroke={COLORS.accent} strokeWidth="2" opacity="0.7" strokeDasharray="4,2" />
    <path d="M 215 220 Q 215 235 230 260" stroke={COLORS.accent} strokeWidth="2" opacity="0.7" strokeDasharray="4,2" />
  </svg>
);

export const HTML5SVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs>
      <linearGradient id="html51" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E34F26" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#F06529" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    {/* HTML5 Shield */}
    <path d="M 160 120 L 240 120 L 225 280 L 200 300 L 175 280 Z" fill="url(#html51)" opacity="0.9" stroke={COLORS.primary} strokeWidth="2" />
    <path d="M 180 150 L 220 150 L 215 250 L 200 270 L 185 250 Z" fill={COLORS.white} opacity="0.3" />
    <text x="200" y="180" textAnchor="middle" fill={COLORS.white} fontSize="16" fontWeight="bold">HTML5</text>
    {/* Browser window */}
    <rect x="120" y="320" width="160" height="60" rx="8" fill={COLORS.white} opacity="0.2" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="125" y="330" width="150" height="8" rx="4" fill={COLORS.primary} opacity="0.6" />
    <rect x="130" y="345" width="60" height="30" rx="4" fill="url(#html51)" opacity="0.7" />
    <rect x="200" y="345" width="70" height="30" rx="4" fill="url(#html51)" opacity="0.7" />
    {/* Tags */}
    <rect x="90" y="200" width="40" height="15" rx="3" fill={COLORS.secondary} opacity="0.8" />
    <rect x="270" y="200" width="40" height="15" rx="3" fill={COLORS.secondary} opacity="0.8" />
  </svg>
);

export const JavaSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs>
      <linearGradient id="java1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ED8B00" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#5382A1" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    {/* Coffee Cup */}
    <ellipse cx="200" cy="280" rx="60" ry="15" fill="url(#java1)" opacity="0.6" />
    <rect x="150" y="200" width="100" height="80" rx="8" fill="url(#java1)" opacity="0.8" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="160" y="210" width="80" height="60" rx="6" fill={COLORS.white} opacity="0.3" />
    {/* Handle */}
    <path d="M 250 230 Q 270 230 270 250 Q 270 270 250 270" stroke={COLORS.primary} strokeWidth="4" fill="none" opacity="0.8" />
    {/* Steam */}
    <path d="M 180 190 Q 175 180 180 170 Q 185 160 180 150" stroke={COLORS.white} strokeWidth="3" fill="none" opacity="0.7" />
    <path d="M 200 190 Q 195 180 200 170 Q 205 160 200 150" stroke={COLORS.white} strokeWidth="3" fill="none" opacity="0.7" />
    <path d="M 220 190 Q 215 180 220 170 Q 225 160 220 150" stroke={COLORS.white} strokeWidth="3" fill="none" opacity="0.7" />
    {/* Java text */}
    <text x="200" y="135" textAnchor="middle" fill={COLORS.white} fontSize="24" fontWeight="bold">Java</text>
    {/* Code elements */}
    <rect x="100" y="320" width="200" height="50" rx="8" fill={COLORS.white} opacity="0.1" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="110" y="330" width="80" height="8" rx="4" fill="url(#java1)" opacity="0.6" />
    <rect x="110" y="345" width="120" height="8" rx="4" fill="url(#java1)" opacity="0.6" />
    <rect x="110" y="355" width="60" height="8" rx="4" fill="url(#java1)" opacity="0.6" />
  </svg>
);

export const NodeJsSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs>
      <linearGradient id="nodejs1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#68A063" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#3C873A" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    {/* Node.js hexagon logo */}
    <path d="M 200 120 L 260 150 L 260 210 L 200 240 L 140 210 L 140 150 Z" fill="url(#nodejs1)" opacity="0.9" stroke={COLORS.primary} strokeWidth="3" />
    <path d="M 200 140 L 240 160 L 240 200 L 200 220 L 160 200 L 160 160 Z" fill={COLORS.white} opacity="0.3" />
    <text x="200" y="185" textAnchor="middle" fill={COLORS.white} fontSize="14" fontWeight="bold">Node.js</text>
    {/* Server representation */}
    <rect x="120" y="270" width="160" height="80" rx="8" fill={COLORS.white} opacity="0.1" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="130" y="280" width="140" height="15" rx="4" fill="url(#nodejs1)" opacity="0.6" />
    <rect x="130" y="300" width="140" height="15" rx="4" fill="url(#nodejs1)" opacity="0.6" />
    <rect x="130" y="320" width="140" height="15" rx="4" fill="url(#nodejs1)" opacity="0.6" />
    {/* API connections */}
    <circle cx="100" cy="180" r="12" fill="url(#nodejs1)" opacity="0.8" />
    <circle cx="300" cy="180" r="12" fill="url(#nodejs1)" opacity="0.8" />
    <path d="M 112 180 L 140 180" stroke={COLORS.accent} strokeWidth="2" opacity="0.7" strokeDasharray="4,2" />
    <path d="M 260 180 L 288 180" stroke={COLORS.accent} strokeWidth="2" opacity="0.7" strokeDasharray="4,2" />
    {/* Connection to server */}
    <path d="M 200 240 L 200 270" stroke={COLORS.accent} strokeWidth="3" opacity="0.8" />
  </svg>
);

export const PHPSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs>
      <linearGradient id="php1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#777BB4" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#4F5D95" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    {/* PHP elephant logo inspired */}
    <ellipse cx="200" cy="200" rx="120" ry="60" fill="url(#php1)" opacity="0.9" stroke={COLORS.primary} strokeWidth="3" />
    <text x="200" y="210" textAnchor="middle" fill={COLORS.white} fontSize="32" fontWeight="bold">PHP</text>
    {/* Code tags */}
    <rect x="100" y="130" width="40" height="20" rx="4" fill={COLORS.white} opacity="0.8" />
    <text x="120" y="145" textAnchor="middle" fill={COLORS.primary} fontSize="12" fontWeight="bold">&lt;?</text>
    <rect x="260" y="130" width="40" height="20" rx="4" fill={COLORS.white} opacity="0.8" />
    <text x="280" y="145" textAnchor="middle" fill={COLORS.primary} fontSize="12" fontWeight="bold">?&gt;</text>
    {/* Database connection */}
    <rect x="150" y="280" width="100" height="60" rx="8" fill={COLORS.white} opacity="0.2" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="160" y="290" width="80" height="12" rx="4" fill="url(#php1)" opacity="0.6" />
    <rect x="160" y="308" width="80" height="12" rx="4" fill="url(#php1)" opacity="0.6" />
    <rect x="160" y="326" width="80" height="12" rx="4" fill="url(#php1)" opacity="0.6" />
    {/* Connection line */}
    <path d="M 200 260 L 200 280" stroke={COLORS.accent} strokeWidth="3" opacity="0.8" />
    <path d="M 195 275 L 200 280 L 205 275" stroke={COLORS.accent} strokeWidth="2" fill="none" opacity="0.8" />
  </svg>
);

export const PythonSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs>
      <linearGradient id="python1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3776AB" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#FFD43B" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    {/* Python snake-like logo */}
    <path d="M 150 160 Q 120 140 120 180 Q 120 220 150 240 L 250 240 Q 280 220 280 180 Q 280 140 250 160 Z" fill="url(#python1)" opacity="0.9" stroke={COLORS.primary} strokeWidth="3" />
    <circle cx="170" cy="170" r="8" fill={COLORS.white} opacity="0.8" />
    <circle cx="230" cy="170" r="8" fill={COLORS.white} opacity="0.8" />
    <text x="200" y="210" textAnchor="middle" fill={COLORS.white} fontSize="18" fontWeight="bold">Python</text>
    {/* Data science elements */}
    <rect x="120" y="280" width="160" height="60" rx="8" fill={COLORS.white} opacity="0.1" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="150" cy="310" r="15" fill="url(#python1)" opacity="0.7" />
    <circle cx="200" cy="310" r="15" fill="url(#python1)" opacity="0.7" />
    <circle cx="250" cy="310" r="15" fill="url(#python1)" opacity="0.7" />
    {/* AI/ML connections */}
    <path d="M 150 295 L 200 295 L 250 295" stroke={COLORS.accent} strokeWidth="2" opacity="0.7" />
    {/* Code representation */}
    <rect x="90" y="100" width="60" height="40" rx="6" fill={COLORS.secondary} opacity="0.7" />
    <rect x="250" y="100" width="60" height="40" rx="6" fill={COLORS.secondary} opacity="0.7" />
    <rect x="95" y="110" width="50" height="6" rx="3" fill={COLORS.white} opacity="0.6" />
    <rect x="95" y="120" width="35" height="6" rx="3" fill={COLORS.white} opacity="0.6" />
    <rect x="255" y="110" width="50" height="6" rx="3" fill={COLORS.white} opacity="0.6" />
    <rect x="255" y="120" width="35" height="6" rx="3" fill={COLORS.white} opacity="0.6" />
  </svg>
);

// ============ PLATFORMS SVGS ============

export const AzureSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs>
      <linearGradient id="azure1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0078D4" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#005A9F" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    {/* Azure logo inspired */}
    <path d="M 140 120 L 220 140 L 280 200 L 200 280 L 120 260 L 160 200 Z" fill="url(#azure1)" opacity="0.9" stroke={COLORS.primary} strokeWidth="3" />
    <path d="M 160 160 L 200 170 L 240 200 L 200 240 L 160 230 L 180 200 Z" fill={COLORS.white} opacity="0.3" />
    <text x="200" y="210" textAnchor="middle" fill={COLORS.white} fontSize="16" fontWeight="bold">Azure</text>
    {/* Cloud services */}
    <ellipse cx="120" cy="320" rx="40" ry="20" fill="url(#azure1)" opacity="0.7" />
    <ellipse cx="200" cy="340" rx="50" ry="25" fill="url(#azure1)" opacity="0.7" />
    <ellipse cx="280" cy="320" rx="40" ry="20" fill="url(#azure1)" opacity="0.7" />
    {/* Connection lines */}
    <path d="M 140 280 Q 130 300 120 320" stroke={COLORS.accent} strokeWidth="2" opacity="0.7" strokeDasharray="4,2" />
    <path d="M 200 280 L 200 315" stroke={COLORS.accent} strokeWidth="2" opacity="0.7" strokeDasharray="4,2" />
    <path d="M 260 280 Q 270 300 280 320" stroke={COLORS.accent} strokeWidth="2" opacity="0.7" strokeDasharray="4,2" />
  </svg>
);

export const GCPSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs>
      <linearGradient id="gcp1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4285F4" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#34A853" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    {/* GCP hexagon pattern */}
    <path d="M 200 120 L 260 150 L 280 210 L 240 270 L 160 270 L 120 210 L 140 150 Z" fill="url(#gcp1)" opacity="0.9" stroke={COLORS.primary} strokeWidth="3" />
    <circle cx="200" cy="200" r="40" fill={COLORS.white} opacity="0.3" />
    <text x="200" y="210" textAnchor="middle" fill={COLORS.primary} fontSize="14" fontWeight="bold">GCP</text>
    {/* Google services */}
    <rect x="100" y="300" width="200" height="60" rx="8" fill={COLORS.white} opacity="0.1" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="110" y="315" width="40" height="30" rx="4" fill="#DB4437" opacity="0.8" />
    <rect x="160" y="315" width="40" height="30" rx="4" fill="#F4B400" opacity="0.8" />
    <rect x="210" y="315" width="40" height="30" rx="4" fill="#0F9D58" opacity="0.8" />
    <rect x="260" y="315" width="30" height="30" rx="4" fill="#4285F4" opacity="0.8" />
    {/* Connection to main logo */}
    <path d="M 200 270 L 200 300" stroke={COLORS.accent} strokeWidth="3" opacity="0.8" />
  </svg>
);

export const OracleSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs>
      <linearGradient id="oracle1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F80000" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#C74634" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    {/* Oracle logo inspired */}
    <ellipse cx="200" cy="180" rx="100" ry="40" fill="url(#oracle1)" opacity="0.9" stroke={COLORS.primary} strokeWidth="3" />
    <text x="200" y="190" textAnchor="middle" fill={COLORS.white} fontSize="24" fontWeight="bold">Oracle</text>
    {/* Database layers */}
    <ellipse cx="200" cy="250" rx="80" ry="20" fill="url(#oracle1)" opacity="0.7" />
    <ellipse cx="200" cy="280" rx="80" ry="20" fill="url(#oracle1)" opacity="0.7" />
    <ellipse cx="200" cy="310" rx="80" ry="20" fill="url(#oracle1)" opacity="0.7" />
    {/* Enterprise connections */}
    <rect x="90" y="100" width="60" height="40" rx="6" fill={COLORS.white} opacity="0.2" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="250" y="100" width="60" height="40" rx="6" fill={COLORS.white} opacity="0.2" stroke={COLORS.primary} strokeWidth="2" />
    <path d="M 120 140 Q 160 155 160 180" stroke={COLORS.accent} strokeWidth="2" opacity="0.7" strokeDasharray="4,2" />
    <path d="M 280 140 Q 240 155 240 180" stroke={COLORS.accent} strokeWidth="2" opacity="0.7" strokeDasharray="4,2" />
  </svg>
);

export const SAPSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs>
      <linearGradient id="sap1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0FAAFF" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#003366" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    {/* SAP logo */}
    <rect x="120" y="150" width="160" height="80" rx="12" fill="url(#sap1)" opacity="0.9" stroke={COLORS.primary} strokeWidth="3" />
    <text x="200" y="200" textAnchor="middle" fill={COLORS.white} fontSize="28" fontWeight="bold">SAP</text>
    {/* Enterprise modules */}
    <rect x="100" y="260" width="50" height="60" rx="6" fill={COLORS.white} opacity="0.2" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="175" y="260" width="50" height="60" rx="6" fill={COLORS.white} opacity="0.2" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="250" y="260" width="50" height="60" rx="6" fill={COLORS.white} opacity="0.2" stroke={COLORS.primary} strokeWidth="2" />
    {/* Module labels */}
    <text x="125" y="295" textAnchor="middle" fill={COLORS.white} fontSize="10">ERP</text>
    <text x="200" y="295" textAnchor="middle" fill={COLORS.white} fontSize="10">CRM</text>
    <text x="275" y="295" textAnchor="middle" fill={COLORS.white} fontSize="10">SCM</text>
    {/* Connection lines */}
    <path d="M 125 260 L 175 230" stroke={COLORS.accent} strokeWidth="2" opacity="0.7" />
    <path d="M 200 260 L 200 230" stroke={COLORS.accent} strokeWidth="2" opacity="0.7" />
    <path d="M 275 260 L 225 230" stroke={COLORS.accent} strokeWidth="2" opacity="0.7" />
    {/* Cloud integration */}
    <ellipse cx="200" cy="100" rx="60" ry="25" fill="url(#sap1)" opacity="0.6" />
    <path d="M 200 125 L 200 150" stroke={COLORS.accent} strokeWidth="2" opacity="0.7" strokeDasharray="4,2" />
  </svg>
);

export const MetaSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs>
      <linearGradient id="meta1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1877F2" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#42A5F5" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    {/* Meta infinity logo inspired */}
    <path d="M 120 200 Q 150 150 200 180 Q 250 150 280 200 Q 250 250 200 220 Q 150 250 120 200 Z" fill="url(#meta1)" opacity="0.9" stroke={COLORS.primary} strokeWidth="3" />
    <text x="200" y="210" textAnchor="middle" fill={COLORS.white} fontSize="18" fontWeight="bold">Meta</text>
    {/* VR/AR elements */}
    <rect x="100" y="120" width="80" height="40" rx="20" fill={COLORS.white} opacity="0.2" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="115" y="130" width="20" height="20" rx="4" fill="url(#meta1)" opacity="0.7" />
    <rect x="135" y="130" width="20" height="20" rx="4" fill="url(#meta1)" opacity="0.7" />
    {/* Social connections */}
    <circle cx="150" cy="320" r="20" fill="url(#meta1)" opacity="0.7" />
    <circle cx="200" cy="340" r="20" fill="url(#meta1)" opacity="0.7" />
    <circle cx="250" cy="320" r="20" fill="url(#meta1)" opacity="0.7" />
    {/* Connection lines */}
    <path d="M 150 300 L 200 320 L 250 300" stroke={COLORS.accent} strokeWidth="2" opacity="0.7" />
    <path d="M 170 200 Q 150 260 150 300" stroke={COLORS.accent} strokeWidth="2" opacity="0.7" strokeDasharray="4,2" />
    <path d="M 230 200 Q 250 260 250 300" stroke={COLORS.accent} strokeWidth="2" opacity="0.7" strokeDasharray="4,2" />
  </svg>
);

export const GoogleSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs>
      <linearGradient id="google1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4285F4" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#34A853" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    {/* Google "G" inspired */}
    <circle cx="200" cy="200" r="70" fill="url(#google1)" opacity="0.9" stroke={COLORS.primary} strokeWidth="3" />
    <circle cx="200" cy="200" r="45" fill={COLORS.white} opacity="0.3" />
    <rect x="200" y="155" width="45" height="90" fill="url(#google1)" opacity="0.9" />
    <rect x="200" y="180" width="70" height="40" fill="url(#google1)" opacity="0.9" />
    <text x="200" y="340" textAnchor="middle" fill={COLORS.white} fontSize="20" fontWeight="bold">Google</text>
    {/* Search elements */}
    <rect x="120" y="100" width="160" height="40" rx="20" fill={COLORS.white} opacity="0.2" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="260" cy="120" r="12" fill="url(#google1)" opacity="0.8" />
    <path d="M 268 128 L 280 140" stroke={COLORS.primary} strokeWidth="3" opacity="0.8" />
    {/* Analytics */}
    <rect x="100" y="300" width="80" height="60" rx="6" fill={COLORS.white} opacity="0.1" stroke={COLORS.primary} strokeWidth="2" />
    <rect x="220" y="300" width="80" height="60" rx="6" fill={COLORS.white} opacity="0.1" stroke={COLORS.primary} strokeWidth="2" />
    <path d="M 110 340 L 125 325 L 140 335 L 155 320 L 170 330" stroke="#DB4437" strokeWidth="2" fill="none" opacity="0.8" />
    <path d="M 230 340 L 245 325 L 260 335 L 275 320 L 290 330" stroke="#0F9D58" strokeWidth="2" fill="none" opacity="0.8" />
  </svg>
);

export const BingSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({ width = 360, height = 360, className = "" }) => (
  <svg width={width} height={height} viewBox="0 0 400 400" className={className} style={{ background: `linear-gradient(135deg, ${COLORS.secondary}22 0%, ${COLORS.secondary}11 100%)` }}>
    <defs>
      <linearGradient id="bing1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00BCF2" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#0078D4" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    {/* Bing logo inspired */}
    <path d="M 160 120 L 200 140 L 240 120 L 260 160 L 240 200 L 200 220 L 160 200 L 140 160 Z" fill="url(#bing1)" opacity="0.9" stroke={COLORS.primary} strokeWidth="3" />
    <circle cx="200" cy="160" r="25" fill={COLORS.white} opacity="0.3" />
    <text x="200" y="170" textAnchor="middle" fill={COLORS.primary} fontSize="14" fontWeight="bold">Bing</text>
    {/* Search interface */}
    <rect x="120" y="260" width="160" height="40" rx="20" fill={COLORS.white} opacity="0.2" stroke={COLORS.primary} strokeWidth="2" />
    <circle cx="250" cy="280" r="12" fill="url(#bing1)" opacity="0.8" />
    <path d="M 258 288 L 270 300" stroke={COLORS.primary} strokeWidth="3" opacity="0.8" />
    {/* AI suggestions */}
    <rect x="90" y="320" width="60" height="30" rx="6" fill="url(#bing1)" opacity="0.6" />
    <rect x="170" y="320" width="60" height="30" rx="6" fill="url(#bing1)" opacity="0.6" />
    <rect x="250" y="320" width="60" height="30" rx="6" fill="url(#bing1)" opacity="0.6" />
    {/* Connection lines */}
    <path d="M 200 220 L 200 260" stroke={COLORS.accent} strokeWidth="2" opacity="0.7" strokeDasharray="4,2" />
    <path d="M 200 300 L 120 320" stroke={COLORS.accent} strokeWidth="1.5" opacity="0.5" />
    <path d="M 200 300 L 200 320" stroke={COLORS.accent} strokeWidth="1.5" opacity="0.5" />
    <path d="M 200 300 L 280 320" stroke={COLORS.accent} strokeWidth="1.5" opacity="0.5" />
  </svg>
);

export default {
  // Automotive
  AutomotiveSoftwareSVG,
  TelematicsSVG,
  AutomotiveEcommerceSVG,
  AdasSVG,
  EvSolutionsSVG,
  AutoMaintenanceSVG,
  // Healthcare
  HealthcarePlatformSVG,
  PatientEngagementSVG,
  MedicalImagingSVG,
  HealthcareAnalyticsSVG,
  TelehealthSVG,
  ClinicalResearchSVG,
  // On-Demand
  OnDemandDeliverySVG,
  RideSharingSVG,
  HomeServicesSVG,
  HealthcareOndemandSVG,
  LogisticsOptimizationSVG,
  PaymentIntegrationSVG,
  // Education
  LearningManagementSVG,
  VirtualClassroomSVG,
  AssessmentToolsSVG,
  StudentPortalsSVG,
  ContentAuthoringSVG,
  EducationAnalyticsSVG,
  // Music
  MusicStreamingSVG,
  AudioProductionSVG,
  MusicDistributionSVG,
  MusicLicensingSVG,
  MusicSocialSVG,
  // Ecommerce
  EcommercePlatformSVG,
  PaymentGatewaySVG,
  InventoryManagementSVG,
  EcommerceMarketingSVG,
  MobileCommerceSVG,
  // Real Estate
  PropertyManagementSVG,
  VirtualToursSVG,
  RealEstateAnalyticsSVG,
  RealEstateCrmSVG,
  RealEstateMarketplaceSVG,
  // SAAS
  SaaSPlatformSVG,
  APIIntegrationSVG,
  SubscriptionManagementSVG,
  SaasAnalyticsSVG,
  SaasSecuritySVG,
  // Fintech
  PaymentProcessingSVG,
  DigitalWalletSVG,
  BlockchainSVG,
  LendingSVG,
  InsuranceSVG,
  // Logistics
  FleetManagementSVG,
  WarehouseSVG,
  SupplyChainSVG,
  DeliverySVG,
  CustomsSVG,
  // Retail
  POSSolutionsSVG,
  OmniChannelSVG,
  CustomerLoyaltySVG,
  RetailAnalyticsSVG,
  RetailSupplyChainSVG,
  // Languages
  DotNetSVG,
  HTML5SVG,
  JavaSVG,
  NodeJsSVG,
  PHPSVG,
  PythonSVG,
  // Platforms
  AzureSVG,
  GCPSVG,
  OracleSVG,
  SAPSVG,
  MetaSVG,
  GoogleSVG,
  BingSVG,
};
