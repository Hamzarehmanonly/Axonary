import React from "react";

interface SVGProps {
  width?: number;
  height?: number;
  className?: string;
}

// Mobile App Development SVG
export const MobileAppSVG: React.FC<SVGProps> = ({ width = 360, height = 360, className }) => (
  <svg
    viewBox="0 0 360 360"
    width={width}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="mobileGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#5C3693" />
        <stop offset="100%" stopColor="#FF6B6B" />
      </linearGradient>
      <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.3" />
      </filter>
    </defs>

    {/* Background */}
    <rect width="360" height="360" fill="#000000" opacity="0" />

    {/* Main Phone Frame */}
    <rect x="110" y="40" width="140" height="280" rx="16" fill="#0b0b0d" stroke="#5C3693" strokeWidth="2" filter="url(#shadow)" />

    {/* Phone Screen */}
    <rect x="118" y="50" width="124" height="260" rx="12" fill="url(#mobileGradient)" />

    {/* Screen Content - App Icons */}
    <circle cx="135" cy="75" r="12" fill="#FFFFFF" opacity="0.9" />
    <circle cx="165" cy="75" r="12" fill="#FFFFFF" opacity="0.9" />
    <circle cx="195" cy="75" r="12" fill="#FFFFFF" opacity="0.9" />

    {/* Screen Content - Cards */}
    <rect x="125" y="100" width="100" height="50" rx="8" fill="#FFFFFF" opacity="0.15" />
    <rect x="125" y="160" width="100" height="50" rx="8" fill="#FFFFFF" opacity="0.15" />
    <rect x="125" y="220" width="100" height="30" rx="6" fill="#FFFFFF" opacity="0.15" />

    {/* Floating Element - UI Card */}
    <g transform="translate(220, 120) rotate(-15)">
      <rect width="80" height="60" rx="8" fill="#472A71" stroke="#5C3693" strokeWidth="1.5" />
      <circle cx="15" cy="15" r="4" fill="#FF6B6B" />
      <rect x="25" y="10" width="40" height="5" rx="2" fill="#FFFFFF" opacity="0.7" />
      <rect x="25" y="20" width="30" height="3" rx="1.5" fill="#FFFFFF" opacity="0.5" />
    </g>

    {/* Floating Element - Code */}
    <g transform="translate(40, 200) rotate(12)">
      <rect width="75" height="70" rx="8" fill="#0b0b0d" stroke="#5C3693" strokeWidth="1.5" />
      <line x1="8" y1="12" x2="50" y2="12" stroke="#4ECDC4" strokeWidth="1" />
      <line x1="8" y1="22" x2="65" y2="22" stroke="#FF6B6B" strokeWidth="1" />
      <line x1="8" y1="32" x2="55" y2="32" stroke="#4ECDC4" strokeWidth="1" />
      <line x1="8" y1="42" x2="60" y2="42" stroke="#95E1D3" strokeWidth="1" />
    </g>

    {/* Decorative Lines */}
    <line x1="250" y1="280" x2="320" y2="320" stroke="#5C3693" strokeWidth="1" opacity="0.5" />
    <circle cx="330" cy="330" r="15" fill="none" stroke="#FF6B6B" strokeWidth="1.5" opacity="0.4" />
  </svg>
);

// Web Development SVG
export const WebDevelopmentSVG: React.FC<SVGProps> = ({ width = 360, height = 360, className }) => (
  <svg
    viewBox="0 0 360 360"
    width={width}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="webGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#5C3693" />
        <stop offset="100%" stopColor="#4ECDC4" />
      </linearGradient>
      <filter id="shadow2" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.3" />
      </filter>
    </defs>

    {/* Background */}
    <rect width="360" height="360" fill="#000000" opacity="0" />

    {/* Browser Window */}
    <rect x="50" y="40" width="260" height="220" rx="12" fill="#0b0b0d" stroke="#5C3693" strokeWidth="2" filter="url(#shadow2)" />

    {/* Browser Header */}
    <rect x="50" y="40" width="260" height="35" rx="12" fill="#472A71" />
    <circle cx="65" cy="57" r="3" fill="#FF6B6B" />
    <circle cx="77" cy="57" r="3" fill="#FFB84D" />
    <circle cx="89" cy="57" r="3" fill="#4ECDC4" />
    <text x="160" y="62" fontSize="10" fill="#FFFFFF" opacity="0.6" textAnchor="middle">
      www.example.com
    </text>

    {/* Browser Content */}
    <rect x="60" y="85" width="240" height="40" fill="url(#webGradient)" rx="4" opacity="0.3" />
    <rect x="60" y="135" width="240" height="15" fill="#FFFFFF" opacity="0.1" rx="3" />
    <rect x="60" y="160" width="155" height="12" fill="#FFFFFF" opacity="0.08" rx="2" />
    <rect x="60" y="180" width="240" height="12" fill="#FFFFFF" opacity="0.08" rx="2" />

    {/* Floating Code Element */}
    <g transform="translate(280, 140) rotate(-20)">
      <rect width="90" height="75" rx="8" fill="#0b0b0d" stroke="#4ECDC4" strokeWidth="1.5" />
      <line x1="8" y1="12" x2="55" y2="12" stroke="#FF6B6B" strokeWidth="1" />
      <line x1="8" y1="22" x2="70" y2="22" stroke="#4ECDC4" strokeWidth="1" />
      <line x1="8" y1="32" x2="60" y2="32" stroke="#5C3693" strokeWidth="1" />
      <line x1="8" y1="42" x2="65" y2="42" stroke="#FF6B6B" strokeWidth="1" />
      <line x1="8" y1="52" x2="55" y2="52" stroke="#4ECDC4" strokeWidth="1" />
    </g>

    {/* Database Icon */}
    <g transform="translate(30, 240)">
      <ellipse cx="35" cy="15" rx="20" ry="12" fill="none" stroke="#5C3693" strokeWidth="2" />
      <path d="M 15 15 L 15 35 Q 15 45 35 45 Q 55 45 55 35 L 55 15" fill="none" stroke="#4ECDC4" strokeWidth="2" />
      <line x1="15" y1="25" x2="55" y2="25" stroke="#5C3693" strokeWidth="1.5" opacity="0.6" />
    </g>

    {/* Responsive Design Indicator */}
    <g transform="translate(240, 290)">
      <rect width="40" height="25" rx="3" fill="none" stroke="#5C3693" strokeWidth="1.5" />
      <line x1="0" y1="8" x2="40" y2="8" stroke="#4ECDC4" strokeWidth="1" opacity="0.7" />
      <line x1="0" y1="13" x2="30" y2="13" stroke="#FF6B6B" strokeWidth="1" opacity="0.7" />
    </g>

    {/* Decorative Elements */}
    <circle cx="80" cy="310" r="8" fill="none" stroke="#4ECDC4" strokeWidth="1" opacity="0.5" />
    <path d="M 100 300 Q 120 290 140 300" fill="none" stroke="#5C3693" strokeWidth="1.5" opacity="0.4" />
  </svg>
);

// Custom Software SVG
export const CustomSoftwareSVG: React.FC<SVGProps> = ({ width = 360, height = 360, className }) => (
  <svg
    viewBox="0 0 360 360"
    width={width}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="softwareGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#5C3693" />
        <stop offset="100%" stopColor="#95E1D3" />
      </linearGradient>
      <filter id="shadow3" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.3" />
      </filter>
    </defs>

    {/* Background */}
    <rect width="360" height="360" fill="#000000" opacity="0" />

    {/* Main Dashboard */}
    <rect x="40" y="30" width="280" height="240" rx="12" fill="#0b0b0d" stroke="#5C3693" strokeWidth="2" filter="url(#shadow3)" />

    {/* Header */}
    <rect x="40" y="30" width="280" height="40" rx="12" fill="#472A71" />
    <text x="60" y="58" fontSize="14" fontWeight="bold" fill="#FFFFFF">Dashboard</text>

    {/* Sidebar */}
    <rect x="40" y="70" width="60" height="200" fill="#0b0b0d" />
    <rect x="48" y="85" width="44" height="8" rx="4" fill="#5C3693" />
    <rect x="48" y="105" width="44" height="7" rx="3.5" fill="#FFFFFF" opacity="0.3" />
    <rect x="48" y="125" width="44" height="7" rx="3.5" fill="#FFFFFF" opacity="0.3" />
    <rect x="48" y="145" width="44" height="7" rx="3.5" fill="#FFFFFF" opacity="0.3" />

    {/* Main Content Area */}
    {/* Cards Grid */}
    <rect x="120" y="85" width="70" height="50" rx="6" fill="url(#softwareGradient)" opacity="0.2" stroke="#5C3693" strokeWidth="1.5" />
    <rect x="205" y="85" width="70" height="50" rx="6" fill="#FFFFFF" opacity="0.08" stroke="#95E1D3" strokeWidth="1.5" />
    <rect x="290" y="85" width="20" height="50" rx="6" fill="none" stroke="#5C3693" strokeWidth="1.5" opacity="0.5" />

    {/* Charts */}
    <g>
      <rect x="120" y="150" width="15" height="60" fill="#FF6B6B" opacity="0.8" rx="2" />
      <rect x="145" y="140" width="15" height="70" fill="#4ECDC4" opacity="0.8" rx="2" />
      <rect x="170" y="130" width="15" height="80" fill="#5C3693" opacity="0.8" rx="2" />
      <rect x="195" y="150" width="15" height="60" fill="#95E1D3" opacity="0.8" rx="2" />
      <rect x="220" y="120" width="15" height="90" fill="#FF6B6B" opacity="0.8" rx="2" />
    </g>

    {/* Floating Code Block */}
    <g transform="translate(50, 260) rotate(15)">
      <rect width="85" height="65" rx="8" fill="#0b0b0d" stroke="#5C3693" strokeWidth="1.5" />
      <line x1="8" y1="12" x2="50" y2="12" stroke="#FF6B6B" strokeWidth="1" />
      <line x1="8" y1="22" x2="70" y2="22" stroke="#95E1D3" strokeWidth="1" />
      <line x1="8" y1="32" x2="60" y2="32" stroke="#5C3693" strokeWidth="1" />
      <line x1="8" y1="42" x2="65" y2="42" stroke="#4ECDC4" strokeWidth="1" />
    </g>

    {/* Floating Settings Icon */}
    <g transform="translate(290, 270)">
      <circle cx="20" cy="20" r="15" fill="none" stroke="#5C3693" strokeWidth="2" />
      <circle cx="20" cy="20" r="4" fill="#5C3693" />
      <circle cx="20" cy="8" r="2" fill="#95E1D3" />
      <circle cx="29" cy="20" r="2" fill="#95E1D3" />
      <circle cx="20" cy="32" r="2" fill="#95E1D3" />
      <circle cx="11" cy="20" r="2" fill="#95E1D3" />
    </g>

    {/* Decorative Line */}
    <line x1="100" y1="320" x2="200" y2="340" stroke="#5C3693" strokeWidth="1" opacity="0.4" />
  </svg>
);

// Cloud Services SVG
export const CloudServicesSVG: React.FC<SVGProps> = ({ width = 360, height = 360, className }) => (
  <svg
    viewBox="0 0 360 360"
    width={width}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#5C3693" />
        <stop offset="100%" stopColor="#F38181" />
      </linearGradient>
      <filter id="shadow4" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.3" />
      </filter>
    </defs>

    {/* Background */}
    <rect width="360" height="360" fill="#000000" opacity="0" />

    {/* Main Cloud */}
    <path
      d="M 80 140 Q 60 140 60 160 Q 40 170 50 195 Q 40 210 70 220 L 280 220 Q 310 220 310 190 Q 330 180 320 150 Q 310 130 280 130 Q 270 110 250 110 Q 230 90 200 90 Q 170 90 160 110 Q 140 100 120 100 Q 100 100 90 120 Q 85 120 80 140 Z"
      fill="url(#cloudGradient)"
      opacity="0.3"
      stroke="#5C3693"
      strokeWidth="2"
      filter="url(#shadow4)"
    />

    {/* Network Nodes */}
    <circle cx="120" cy="160" r="18" fill="none" stroke="#5C3693" strokeWidth="2" />
    <circle cx="120" cy="160" r="12" fill="#0b0b0d" stroke="#5C3693" strokeWidth="1.5" />
    <circle cx="120" cy="160" r="6" fill="#FF6B6B" />

    <circle cx="180" cy="120" r="18" fill="none" stroke="#4ECDC4" strokeWidth="2" />
    <circle cx="180" cy="120" r="12" fill="#0b0b0d" stroke="#4ECDC4" strokeWidth="1.5" />
    <circle cx="180" cy="120" r="6" fill="#4ECDC4" />

    <circle cx="240" cy="160" r="18" fill="none" stroke="#5C3693" strokeWidth="2" />
    <circle cx="240" cy="160" r="12" fill="#0b0b0d" stroke="#5C3693" strokeWidth="1.5" />
    <circle cx="240" cy="160" r="6" fill="#F38181" />

    <circle cx="180" cy="200" r="18" fill="none" stroke="#95E1D3" strokeWidth="2" />
    <circle cx="180" cy="200" r="12" fill="#0b0b0d" stroke="#95E1D3" strokeWidth="1.5" />
    <circle cx="180" cy="200" r="6" fill="#95E1D3" />

    {/* Connecting Lines */}
    <line x1="132" y1="152" x2="168" y2="128" stroke="#5C3693" strokeWidth="1.5" opacity="0.6" />
    <line x1="180" y1="138" x2="228" y2="152" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.6" />
    <line x1="228" y1="168" x2="192" y2="192" stroke="#5C3693" strokeWidth="1.5" opacity="0.6" />
    <line x1="168" y1="192" x2="132" y2="168" stroke="#95E1D3" strokeWidth="1.5" opacity="0.6" />

    {/* Upload Icon */}
    <g transform="translate(280, 260)">
      <path d="M 15 25 L 15 5 M 10 10 L 15 5 L 20 10" fill="none" stroke="#5C3693" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="15" cy="30" r="12" fill="none" stroke="#F38181" strokeWidth="2" />
    </g>

    {/* Download Icon */}
    <g transform="translate(60, 260)">
      <path d="M 15 5 L 15 25 M 10 20 L 15 25 L 20 20" fill="none" stroke="#4ECDC4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="15" cy="0" r="12" fill="none" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.6" />
    </g>

    {/* Data Flow Lines */}
    <path d="M 40 290 Q 100 280 160 290" fill="none" stroke="#5C3693" strokeWidth="1.5" opacity="0.4" strokeDasharray="5,5" />
    <path d="M 200 290 Q 260 280 320 290" fill="none" stroke="#F38181" strokeWidth="1.5" opacity="0.4" strokeDasharray="5,5" />
  </svg>
);

// Artificial Intelligence SVG
export const ArtificialIntelligenceSVG: React.FC<SVGProps> = ({ width = 360, height = 360, className }) => (
  <svg
    viewBox="0 0 360 360"
    width={width}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#5C3693" />
        <stop offset="100%" stopColor="#AA96DA" />
      </linearGradient>
      <filter id="shadow5" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.3" />
      </filter>
    </defs>

    {/* Background */}
    <rect width="360" height="360" fill="#000000" opacity="0" />

    {/* AI Brain Concept */}
    {/* Main Brain Circle */}
    <circle cx="180" cy="130" r="50" fill="none" stroke="#5C3693" strokeWidth="2" />
    <circle cx="180" cy="130" r="40" fill="#0b0b0d" stroke="#AA96DA" strokeWidth="1.5" />
    <circle cx="180" cy="130" r="30" fill="url(#aiGradient)" opacity="0.3" />

    {/* Neural Connections */}
    <circle cx="150" cy="100" r="8" fill="#FF6B6B" />
    <circle cx="210" cy="100" r="8" fill="#4ECDC4" />
    <circle cx="150" cy="160" r="8" fill="#95E1D3" />
    <circle cx="210" cy="160" r="8" fill="#F38181" />
    <circle cx="180" cy="180" r="8" fill="#AA96DA" />

    {/* Connection Lines */}
    <line x1="180" y1="160" x2="150" y2="100" stroke="#5C3693" strokeWidth="1.5" opacity="0.6" />
    <line x1="180" y1="160" x2="210" y2="100" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.6" />
    <line x1="180" y1="160" x2="150" y2="160" stroke="#95E1D3" strokeWidth="1.5" opacity="0.6" />
    <line x1="180" y1="160" x2="210" y2="160" stroke="#F38181" strokeWidth="1.5" opacity="0.6" />
    <line x1="180" y1="160" x2="180" y2="180" stroke="#AA96DA" strokeWidth="1.5" opacity="0.6" />

    {/* Data Flow */}
    <g transform="translate(80, 240)">
      <rect width="60" height="50" rx="6" fill="#0b0b0d" stroke="#5C3693" strokeWidth="1.5" />
      <line x1="8" y1="12" x2="35" y2="12" stroke="#FF6B6B" strokeWidth="1" />
      <line x1="8" y1="22" x2="50" y2="22" stroke="#4ECDC4" strokeWidth="1" />
      <line x1="8" y1="32" x2="45" y2="32" stroke="#AA96DA" strokeWidth="1" />
    </g>

    {/* Analytics */}
    <g transform="translate(240, 240)">
      <path d="M 5 30 L 15 20 L 25 25 L 35 10" fill="none" stroke="#5C3693" strokeWidth="2" />
      <circle cx="5" cy="30" r="2" fill="#FF6B6B" />
      <circle cx="15" cy="20" r="2" fill="#4ECDC4" />
      <circle cx="25" cy="25" r="2" fill="#AA96DA" />
      <circle cx="35" cy="10" r="2" fill="#95E1D3" />
      <line x1="5" y1="40" x2="35" y2="40" stroke="#5C3693" strokeWidth="1.5" opacity="0.5" />
    </g>

    {/* Particle Effect */}
    <circle cx="120" cy="90" r="3" fill="#FF6B6B" opacity="0.6" />
    <circle cx="240" cy="110" r="3" fill="#4ECDC4" opacity="0.6" />
    <circle cx="100" cy="200" r="2" fill="#AA96DA" opacity="0.5" />
    <circle cx="260" cy="200" r="2" fill="#95E1D3" opacity="0.5" />

    {/* Decorative Elements */}
    <path d="M 140 60 Q 160 50 180 60" fill="none" stroke="#5C3693" strokeWidth="1" opacity="0.4" strokeDasharray="3,3" />
    <path d="M 180 60 Q 200 50 220 60" fill="none" stroke="#AA96DA" strokeWidth="1" opacity="0.4" strokeDasharray="3,3" />
  </svg>
);

// Design & Strategy SVG
export const DesignStrategySVG: React.FC<SVGProps> = ({ width = 360, height = 360, className }) => (
  <svg
    viewBox="0 0 360 360"
    width={width}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="designGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#5C3693" />
        <stop offset="100%" stopColor="#FCBAD3" />
      </linearGradient>
      <filter id="shadow6" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.3" />
      </filter>
    </defs>

    {/* Background */}
    <rect width="360" height="360" fill="#000000" opacity="0" />

    {/* Design Palette */}
    <circle cx="180" cy="140" r="70" fill="none" stroke="#5C3693" strokeWidth="2" filter="url(#shadow6)" />
    <circle cx="180" cy="140" r="65" fill="#0b0b0d" stroke="none" />

    {/* Color Swatches */}
    <circle cx="155" cy="110" r="15" fill="#FF6B6B" opacity="0.9" />
    <circle cx="205" cy="110" r="15" fill="#4ECDC4" opacity="0.9" />
    <circle cx="155" cy="160" r="15" fill="#95E1D3" opacity="0.9" />
    <circle cx="205" cy="160" r="15" fill="#FCBAD3" opacity="0.9" />
    <circle cx="180" cy="140" r="12" fill="#5C3693" />

    {/* Connecting Lines */}
    <line x1="180" y1="140" x2="155" y2="110" stroke="#5C3693" strokeWidth="1" opacity="0.5" />
    <line x1="180" y1="140" x2="205" y2="110" stroke="#5C3693" strokeWidth="1" opacity="0.5" />
    <line x1="180" y1="140" x2="155" y2="160" stroke="#5C3693" strokeWidth="1" opacity="0.5" />
    <line x1="180" y1="140" x2="205" y2="160" stroke="#5C3693" strokeWidth="1" opacity="0.5" />

    {/* Wireframe */}
    <g transform="translate(60, 240)">
      <rect width="85" height="70" rx="4" fill="none" stroke="#5C3693" strokeWidth="1.5" />
      <rect x="4" y="4" width="77" height="18" fill="none" stroke="#5C3693" strokeWidth="1" opacity="0.7" />
      <line x1="8" y1="30" x2="75" y2="30" stroke="#FCBAD3" strokeWidth="1" opacity="0.7" />
      <line x1="8" y1="38" x2="50" y2="38" stroke="#FCBAD3" strokeWidth="1" opacity="0.7" />
      <line x1="8" y1="46" x2="75" y2="46" stroke="#FCBAD3" strokeWidth="1" opacity="0.7" />
      <line x1="8" y1="54" x2="60" y2="54" stroke="#FCBAD3" strokeWidth="1" opacity="0.7" />
    </g>

    {/* Typography Sample */}
    <g transform="translate(220, 240)">
      <rect width="85" height="70" rx="4" fill="url(#designGradient)" opacity="0.15" stroke="#FCBAD3" strokeWidth="1.5" />
      <text x="42" y="25" fontSize="16" fontWeight="bold" fill="#FCBAD3" textAnchor="middle" fontFamily="Arial">
        Aa
      </text>
      <line x1="8" y1="35" x2="77" y2="35" stroke="#5C3693" strokeWidth="1" opacity="0.7" />
      <line x1="8" y1="45" x2="70" y2="45" stroke="#5C3693" strokeWidth="0.8" opacity="0.6" />
      <line x1="8" y1="53" x2="65" y2="53" stroke="#5C3693" strokeWidth="0.8" opacity="0.6" />
    </g>

    {/* Design Tools Icon */}
    <g transform="translate(170, 280)">
      {/* Pencil */}
      <line x1="5" y1="20" x2="15" y2="5" stroke="#5C3693" strokeWidth="2" strokeLinecap="round" />
      <polygon points="5,25 2,30 10,28" fill="#FCBAD3" />
    </g>

    {/* Decorative Shapes */}
    <rect x="50" y="60" width="40" height="40" rx="6" fill="none" stroke="#5C3693" strokeWidth="1.5" opacity="0.4" />
    <path d="M 300 80 L 320 60 L 330 80 Z" fill="none" stroke="#FCBAD3" strokeWidth="1.5" opacity="0.4" />
    <circle cx="320" cy="280" r="18" fill="none" stroke="#5C3693" strokeWidth="1" opacity="0.3" />
  </svg>
);

// Export all SVGs as a map for easy access
export const ServiceSVGMap = {
  "mobile-app-development": MobileAppSVG,
  "web-development": WebDevelopmentSVG,
  "custom-software-development": CustomSoftwareSVG,
  "cloud-services": CloudServicesSVG,
  "artificial-intelligence": ArtificialIntelligenceSVG,
  "design-strategy": DesignStrategySVG,
};
