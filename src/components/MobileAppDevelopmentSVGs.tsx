import React from "react";

interface SVGProps {
  width?: number;
  height?: number;
  className?: string;
}

// Android App Development SVG
export const AndroidAppSVG: React.FC<SVGProps> = ({ width = 360, height = 360, className }) => (
  <svg
    viewBox="0 0 360 360"
    width={width}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="androidGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3DDC84" />
        <stop offset="100%" stopColor="#5C3693" />
      </linearGradient>
      <filter id="androidShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.3" />
      </filter>
    </defs>

    <rect width="360" height="360" fill="#000000" opacity="0" />

    {/* Android Phone */}
    <rect x="90" y="30" width="180" height="300" rx="24" fill="#0b0b0d" stroke="#3DDC84" strokeWidth="2.5" filter="url(#androidShadow)" />

    {/* Screen */}
    <rect x="102" y="45" width="156" height="270" rx="18" fill="url(#androidGradient)" opacity="0.15" />

    {/* Status Bar */}
    <rect x="102" y="45" width="156" height="20" fill="#3DDC84" opacity="0.2" />
    <circle cx="115" cy="55" r="2.5" fill="#3DDC84" />
    <circle cx="125" cy="55" r="2.5" fill="#3DDC84" />
    <circle cx="245" cy="55" r="2.5" fill="#3DDC84" />
    <circle cx="255" cy="55" r="2.5" fill="#3DDC84" />

    {/* App Cards */}
    <rect x="115" y="80" width="130" height="50" rx="8" fill="#3DDC84" opacity="0.2" stroke="#3DDC84" strokeWidth="1" />
    <circle cx="130" cy="105" r="8" fill="#3DDC84" />
    <text x="150" y="110" fontSize="10" fill="#FFFFFF" opacity="0.8">Material Design</text>

    <rect x="115" y="145" width="130" height="45" rx="8" fill="#5C3693" opacity="0.2" stroke="#5C3693" strokeWidth="1" />
    <circle cx="130" cy="167" r="7" fill="#5C3693" />
    <text x="150" y="172" fontSize="9" fill="#FFFFFF" opacity="0.7">High Performance</text>

    {/* Navigation Bar */}
    <rect x="102" y="305" width="156" height="10" fill="#3DDC84" opacity="0.1" />

    {/* Floating Android Head */}
    <g transform="translate(280, 120) rotate(-20)">
      <circle cx="0" cy="0" r="20" fill="none" stroke="#3DDC84" strokeWidth="2" />
      <circle cx="-6" cy="-4" r="2.5" fill="#3DDC84" />
      <circle cx="6" cy="-4" r="2.5" fill="#3DDC84" />
      <path d="M -8 4 Q 0 8 8 4" fill="none" stroke="#3DDC84" strokeWidth="1.5" strokeLinecap="round" />
    </g>

    {/* Code Element */}
    <g transform="translate(30, 240) rotate(15)">
      <rect width="80" height="70" rx="8" fill="#0b0b0d" stroke="#3DDC84" strokeWidth="1.5" />
      <line x1="8" y1="12" x2="50" y2="12" stroke="#3DDC84" strokeWidth="1" />
      <line x1="8" y1="24" x2="65" y2="24" stroke="#5C3693" strokeWidth="1" />
      <line x1="8" y1="36" x2="55" y2="36" stroke="#3DDC84" strokeWidth="1" />
      <line x1="8" y1="48" x2="60" y2="48" stroke="#FF6B6B" strokeWidth="1" />
    </g>

    {/* Decorative Elements */}
    <circle cx="50" cy="330" r="10" fill="none" stroke="#3DDC84" strokeWidth="1.5" opacity="0.4" />
    <line x1="280" y1="300" x2="330" y2="340" stroke="#3DDC84" strokeWidth="1" opacity="0.3" />
  </svg>
);

// iOS App Development SVG
export const iOSAppSVG: React.FC<SVGProps> = ({ width = 360, height = 360, className }) => (
  <svg
    viewBox="0 0 360 360"
    width={width}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="iOSGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#555555" />
        <stop offset="100%" stopColor="#5C3693" />
      </linearGradient>
      <filter id="iOSShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.3" />
      </filter>
    </defs>

    <rect width="360" height="360" fill="#000000" opacity="0" />

    {/* iPhone with Notch */}
    <rect x="85" y="25" width="190" height="310" rx="28" fill="#0b0b0d" stroke="#555555" strokeWidth="2.5" filter="url(#iOSShadow)" />

    {/* Notch */}
    <rect x="140" y="25" width="80" height="28" rx="0" fill="#0b0b0d" />
    <path d="M 140 40 Q 140 25 160 25 L 180 25 Q 200 25 200 40" fill="#0b0b0d" />

    {/* Screen */}
    <rect x="98" y="55" width="164" height="270" rx="16" fill="url(#iOSGradient)" opacity="0.12" />

    {/* Time and status icons */}
    <text x="105" y="72" fontSize="11" fontWeight="bold" fill="#FFFFFF">9:41</text>
    <circle cx="260" cy="66" r="2" fill="#FFFFFF" opacity="0.8" />
    <circle cx="268" cy="66" r="2" fill="#FFFFFF" opacity="0.8" />
    <circle cx="276" cy="66" r="2" fill="#FFFFFF" opacity="0.8" />

    {/* App Cards */}
    <rect x="112" y="90" width="136" height="55" rx="10" fill="#555555" opacity="0.2" stroke="#555555" strokeWidth="1" />
    <circle cx="130" cy="117" r="10" fill="#555555" />
    <text x="155" y="122" fontSize="10" fill="#FFFFFF" opacity="0.8">Swift Excellence</text>

    <rect x="112" y="160" width="136" height="50" rx="10" fill="#5C3693" opacity="0.2" stroke="#5C3693" strokeWidth="1" />
    <circle cx="130" cy="185" r="9" fill="#5C3693" />
    <text x="155" y="190" fontSize="9" fill="#FFFFFF" opacity="0.7">App Store Ready</text>

    {/* Home Indicator */}
    <rect x="150" y="325" width="60" height="4" rx="2" fill="#FFFFFF" opacity="0.3" />

    {/* Floating Swift Logo */}
    <g transform="translate(290, 130) rotate(-25)">
      <circle cx="0" cy="0" r="18" fill="none" stroke="#555555" strokeWidth="2" />
      <path d="M -6 -8 Q 6 0 -6 8" fill="none" stroke="#555555" strokeWidth="2" strokeLinecap="round" />
    </g>

    {/* Code Element */}
    <g transform="translate(35, 250) rotate(18)">
      <rect width="85" height="72" rx="8" fill="#0b0b0d" stroke="#555555" strokeWidth="1.5" />
      <line x1="8" y1="12" x2="52" y2="12" stroke="#555555" strokeWidth="1" />
      <line x1="8" y1="24" x2="68" y2="24" stroke="#5C3693" strokeWidth="1" />
      <line x1="8" y1="36" x2="58" y2="36" stroke="#555555" strokeWidth="1" />
      <line x1="8" y1="48" x2="65" y2="48" stroke="#FF6B6B" strokeWidth="1" />
      <line x1="8" y1="60" x2="55" y2="60" stroke="#555555" strokeWidth="1" />
    </g>

    {/* Decorative Elements */}
    <circle cx="70" cy="340" r="9" fill="none" stroke="#555555" strokeWidth="1.5" opacity="0.4" />
    <path d="M 290 310 L 320 330" stroke="#555555" strokeWidth="1" opacity="0.3" />
  </svg>
);

// Flutter App Development SVG
export const FlutterAppSVG: React.FC<SVGProps> = ({ width = 360, height = 360, className }) => (
  <svg
    viewBox="0 0 360 360"
    width={width}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="flutterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#02569B" />
        <stop offset="100%" stopColor="#5C3693" />
      </linearGradient>
      <filter id="flutterShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.3" />
      </filter>
    </defs>

    <rect width="360" height="360" fill="#000000" opacity="0" />

    {/* Dual Phones Side by Side */}
    {/* Left Phone */}
    <rect x="60" y="50" width="110" height="230" rx="14" fill="#0b0b0d" stroke="#02569B" strokeWidth="2" filter="url(#flutterShadow)" />
    <rect x="67" y="60" width="96" height="210" rx="10" fill="url(#flutterGradient)" opacity="0.1" />

    {/* Left Screen Content */}
    <rect x="72" y="75" width="86" height="35" rx="6" fill="#02569B" opacity="0.2" />
    <rect x="72" y="120" width="86" height="30" rx="6" fill="#5C3693" opacity="0.2" />
    <rect x="72" y="160" width="86" height="25" rx="6" fill="#02569B" opacity="0.15" />

    {/* Right Phone */}
    <rect x="190" y="50" width="110" height="230" rx="14" fill="#0b0b0d" stroke="#02569B" strokeWidth="2" filter="url(#flutterShadow)" />
    <rect x="197" y="60" width="96" height="210" rx="10" fill="url(#flutterGradient)" opacity="0.1" />

    {/* Right Screen Content */}
    <rect x="202" y="75" width="86" height="35" rx="6" fill="#5C3693" opacity="0.2" />
    <rect x="202" y="120" width="86" height="30" rx="6" fill="#02569B" opacity="0.2" />
    <rect x="202" y="160" width="86" height="25" rx="6" fill="#5C3693" opacity="0.15" />

    {/* Synchronization Arrow */}
    <g transform="translate(180, 165)">
      <path d="M -15 0 L 15 0 M 10 -5 L 15 0 L 10 5" fill="none" stroke="#02569B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 15 20 L -15 20 M -10 15 L -15 20 L -10 25" fill="none" stroke="#5C3693" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    {/* Flutter Widget */}
    <g transform="translate(290, 110) rotate(-20)">
      <polygon points="0,-12 12,6 -12,6" fill="none" stroke="#02569B" strokeWidth="2" />
      <polygon points="0,-6 7,4 -7,4" fill="#02569B" opacity="0.4" />
    </g>

    {/* Code Block */}
    <g transform="translate(30, 280) rotate(12)">
      <rect width="78" height="65" rx="8" fill="#0b0b0d" stroke="#02569B" strokeWidth="1.5" />
      <line x1="8" y1="12" x2="48" y2="12" stroke="#02569B" strokeWidth="1" />
      <line x1="8" y1="22" x2="62" y2="22" stroke="#5C3693" strokeWidth="1" />
      <line x1="8" y1="32" x2="52" y2="32" stroke="#02569B" strokeWidth="1" />
      <line x1="8" y1="42" x2="58" y2="42" stroke="#FF6B6B" strokeWidth="1" />
    </g>

    {/* Decorative Elements */}
    <circle cx="60" cy="310" r="8" fill="none" stroke="#02569B" strokeWidth="1.5" opacity="0.4" />
    <circle cx="300" cy="320" r="6" fill="none" stroke="#5C3693" strokeWidth="1.5" opacity="0.3" />
  </svg>
);

// React Native App Development SVG
export const ReactNativeAppSVG: React.FC<SVGProps> = ({ width = 360, height = 360, className }) => (
  <svg
    viewBox="0 0 360 360"
    width={width}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="reactGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#61DAFB" />
        <stop offset="100%" stopColor="#5C3693" />
      </linearGradient>
      <filter id="reactShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.3" />
      </filter>
    </defs>

    <rect width="360" height="360" fill="#000000" opacity="0" />

    {/* Phone Frame */}
    <rect x="95" y="35" width="170" height="290" rx="20" fill="#0b0b0d" stroke="#61DAFB" strokeWidth="2.5" filter="url(#reactShadow)" />

    {/* Screen */}
    <rect x="105" y="50" width="150" height="260" rx="14" fill="url(#reactGradient)" opacity="0.12" />

    {/* React Atoms */}
    <g transform="translate(180, 90)">
      <circle cx="0" cy="0" r="12" fill="none" stroke="#61DAFB" strokeWidth="1.5" />
      <circle cx="-10" cy="8" r="2.5" fill="#61DAFB" />
      <circle cx="10" cy="8" r="2.5" fill="#61DAFB" />
      <circle cx="0" cy="-12" r="2.5" fill="#61DAFB" />
    </g>

    {/* App Components */}
    <rect x="115" y="120" width="130" height="45" rx="8" fill="#61DAFB" opacity="0.15" stroke="#61DAFB" strokeWidth="1" />
    <text x="180" y="147" fontSize="9" fill="#FFFFFF" opacity="0.8" textAnchor="middle">Component Layer</text>

    <rect x="115" y="180" width="130" height="40" rx="8" fill="#5C3693" opacity="0.15" stroke="#5C3693" strokeWidth="1" />
    <text x="180" y="204" fontSize="9" fill="#FFFFFF" opacity="0.7" textAnchor="middle">Cross Platform</text>

    {/* React Logo Floating */}
    <g transform="translate(290, 140) rotate(-25)">
      <circle cx="0" cy="0" r="3" fill="#61DAFB" />
      <ellipse cx="0" cy="0" rx="14" ry="8" fill="none" stroke="#61DAFB" strokeWidth="1.5" />
      <ellipse cx="0" cy="0" rx="14" ry="8" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60)" />
      <ellipse cx="0" cy="0" rx="14" ry="8" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120)" />
    </g>

    {/* Code Element */}
    <g transform="translate(40, 245) rotate(15)">
      <rect width="82" height="68" rx="8" fill="#0b0b0d" stroke="#61DAFB" strokeWidth="1.5" />
      <line x1="8" y1="12" x2="50" y2="12" stroke="#61DAFB" strokeWidth="1" />
      <line x1="8" y1="24" x2="64" y2="24" stroke="#5C3693" strokeWidth="1" />
      <line x1="8" y1="36" x2="54" y2="36" stroke="#61DAFB" strokeWidth="1" />
      <line x1="8" y1="48" x2="62" y2="48" stroke="#FF6B6B" strokeWidth="1" />
    </g>

    {/* Decorative Elements */}
    <circle cx="65" cy="330" r="10" fill="none" stroke="#61DAFB" strokeWidth="1.5" opacity="0.4" />
    <line x1="290" y1="310" x2="330" y2="340" stroke="#61DAFB" strokeWidth="1" opacity="0.3" />
  </svg>
);

// Cross-Platform App Development SVG
export const CrossPlatformAppSVG: React.FC<SVGProps> = ({ width = 360, height = 360, className }) => (
  <svg
    viewBox="0 0 360 360"
    width={width}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="crossGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF8A50" />
        <stop offset="100%" stopColor="#5C3693" />
      </linearGradient>
      <filter id="crossShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.3" />
      </filter>
    </defs>

    <rect width="360" height="360" fill="#000000" opacity="0" />

    {/* Central Hub */}
    <circle cx="180" cy="160" r="35" fill="none" stroke="#FF8A50" strokeWidth="2.5" filter="url(#crossShadow)" />
    <circle cx="180" cy="160" r="20" fill="#0b0b0d" stroke="#FF8A50" strokeWidth="1.5" />
    <text x="180" y="168" fontSize="12" fontWeight="bold" fill="#FF8A50" textAnchor="middle">Unified</text>

    {/* Platform Nodes */}
    {/* Top Left - iOS */}
    <circle cx="90" cy="80" r="22" fill="none" stroke="#555555" strokeWidth="2" />
    <circle cx="90" cy="80" r="14" fill="#0b0b0d" stroke="#555555" strokeWidth="1.5" />
    <text x="90" y="86" fontSize="10" fill="#555555" textAnchor="middle" fontWeight="bold">iOS</text>

    {/* Top Right - Android */}
    <circle cx="270" cy="80" r="22" fill="none" stroke="#3DDC84" strokeWidth="2" />
    <circle cx="270" cy="80" r="14" fill="#0b0b0d" stroke="#3DDC84" strokeWidth="1.5" />
    <text x="270" y="86" fontSize="10" fill="#3DDC84" textAnchor="middle" fontWeight="bold">Android</text>

    {/* Left - Web */}
    <circle cx="50" cy="160" r="22" fill="none" stroke="#4ECDC4" strokeWidth="2" />
    <circle cx="50" cy="160" r="14" fill="#0b0b0d" stroke="#4ECDC4" strokeWidth="1.5" />
    <text x="50" y="166" fontSize="10" fill="#4ECDC4" textAnchor="middle" fontWeight="bold">Web</text>

    {/* Right - Desktop */}
    <circle cx="310" cy="160" r="22" fill="none" stroke="#F38181" strokeWidth="2" />
    <circle cx="310" cy="160" r="14" fill="#0b0b0d" stroke="#F38181" strokeWidth="1.5" />
    <text x="310" y="166" fontSize="10" fill="#F38181" textAnchor="middle" fontWeight="bold">Desktop</text>

    {/* Bottom */}
    <circle cx="180" cy="280" r="22" fill="none" stroke="#95E1D3" strokeWidth="2" />
    <circle cx="180" cy="280" r="14" fill="#0b0b0d" stroke="#95E1D3" strokeWidth="1.5" />
    <text x="180" y="286" fontSize="10" fill="#95E1D3" textAnchor="middle" fontWeight="bold">IoT</text>

    {/* Connection Lines */}
    <line x1="108" y1="97" x2="162" y2="137" stroke="#555555" strokeWidth="1.5" opacity="0.6" />
    <line x1="252" y1="97" x2="198" y2="137" stroke="#3DDC84" strokeWidth="1.5" opacity="0.6" />
    <line x1="72" y1="160" x2="145" y2="160" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.6" />
    <line x1="215" y1="160" x2="288" y2="160" stroke="#F38181" strokeWidth="1.5" opacity="0.6" />
    <line x1="180" y1="195" x2="180" y2="258" stroke="#95E1D3" strokeWidth="1.5" opacity="0.6" />

    {/* Code Element */}
    <g transform="translate(270, 240) rotate(20)">
      <rect width="80" height="65" rx="8" fill="#0b0b0d" stroke="#FF8A50" strokeWidth="1.5" />
      <line x1="8" y1="12" x2="48" y2="12" stroke="#FF8A50" strokeWidth="1" />
      <line x1="8" y1="22" x2="60" y2="22" stroke="#5C3693" strokeWidth="1" />
      <line x1="8" y1="32" x2="50" y2="32" stroke="#FF8A50" strokeWidth="1" />
      <line x1="8" y1="42" x2="55" y2="42" stroke="#FF6B6B" strokeWidth="1" />
    </g>

    {/* Decorative Element */}
    <circle cx="40" cy="310" r="8" fill="none" stroke="#FF8A50" strokeWidth="1.5" opacity="0.4" />
  </svg>
);

// Cloud Mobile App Development SVG
export const CloudMobileAppSVG: React.FC<SVGProps> = ({ width = 360, height = 360, className }) => (
  <svg
    viewBox="0 0 360 360"
    width={width}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="cloudMobileGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFB84D" />
        <stop offset="100%" stopColor="#5C3693" />
      </linearGradient>
      <filter id="cloudMobileShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.3" />
      </filter>
    </defs>

    <rect width="360" height="360" fill="#000000" opacity="0" />

    {/* Cloud */}
    <path
      d="M 70 120 Q 50 120 50 140 Q 30 150 40 170 Q 30 185 60 195 L 260 195 Q 290 195 290 170 Q 310 160 300 135 Q 290 115 260 115 Q 250 95 230 95 Q 210 75 180 75 Q 150 75 140 95 Q 120 85 100 85 Q 80 85 70 105 Q 65 105 70 120 Z"
      fill="url(#cloudMobileGradient)"
      opacity="0.2"
      stroke="#FFB84D"
      strokeWidth="2.5"
      filter="url(#cloudMobileShadow)"
    />

    {/* Phone in Cloud */}
    <rect x="110" y="95" width="140" height="230" rx="16" fill="#0b0b0d" stroke="#FFB84D" strokeWidth="2" />
    <rect x="120" y="110" width="120" height="200" rx="12" fill="url(#cloudMobileGradient)" opacity="0.1" />

    {/* Screen Content */}
    <rect x="130" y="130" width="100" height="40" rx="6" fill="#FFB84D" opacity="0.15" />
    <rect x="130" y="185" width="100" height="35" rx="6" fill="#5C3693" opacity="0.15" />

    {/* Data Sync Arrows */}
    <g transform="translate(280, 110)">
      <path d="M 0 0 L 20 0 M 18 -3 L 20 0 L 18 3" fill="none" stroke="#FFB84D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    <g transform="translate(280, 200)">
      <path d="M 20 0 L 0 0 M 2 -3 L 0 0 L 2 3" fill="none" stroke="#5C3693" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    {/* Server/Database Icons */}
    <g transform="translate(50, 150)">
      <rect width="50" height="12" rx="2" fill="none" stroke="#FFB84D" strokeWidth="1.5" />
      <circle cx="15" cy="6" r="2" fill="#FFB84D" />
      <circle cx="35" cy="6" r="2" fill="#FFB84D" />
    </g>

    <g transform="translate(50, 185)">
      <rect width="50" height="12" rx="2" fill="none" stroke="#FFB84D" strokeWidth="1.5" opacity="0.6" />
      <circle cx="15" cy="6" r="2" fill="#FFB84D" opacity="0.6" />
      <circle cx="35" cy="6" r="2" fill="#FFB84D" opacity="0.6" />
    </g>

    {/* Code Element */}
    <g transform="translate(270, 270) rotate(18)">
      <rect width="80" height="68" rx="8" fill="#0b0b0d" stroke="#FFB84D" strokeWidth="1.5" />
      <line x1="8" y1="12" x2="50" y2="12" stroke="#FFB84D" strokeWidth="1" />
      <line x1="8" y1="24" x2="64" y2="24" stroke="#5C3693" strokeWidth="1" />
      <line x1="8" y1="36" x2="54" y2="36" stroke="#FFB84D" strokeWidth="1" />
      <line x1="8" y1="48" x2="60" y2="48" stroke="#FF6B6B" strokeWidth="1" />
    </g>

    {/* Decorative Elements */}
    <circle cx="70" cy="310" r="9" fill="none" stroke="#FFB84D" strokeWidth="1.5" opacity="0.4" />
    <line x1="290" y1="300" x2="330" y2="330" stroke="#FFB84D" strokeWidth="1" opacity="0.3" />
  </svg>
);

// IoT Mobile App Development SVG
export const IoTMobileAppSVG: React.FC<SVGProps> = ({ width = 360, height = 360, className }) => (
  <svg
    viewBox="0 0 360 360"
    width={width}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="iotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00D4FF" />
        <stop offset="100%" stopColor="#5C3693" />
      </linearGradient>
      <filter id="iotShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.3" />
      </filter>
    </defs>

    <rect width="360" height="360" fill="#000000" opacity="0" />

    {/* Central Phone */}
    <rect x="105" y="65" width="150" height="220" rx="18" fill="#0b0b0d" stroke="#00D4FF" strokeWidth="2.5" filter="url(#iotShadow)" />
    <rect x="115" y="80" width="130" height="190" rx="14" fill="url(#iotGradient)" opacity="0.12" />

    {/* Phone Screen Content */}
    <rect x="125" y="100" width="110" height="45" rx="6" fill="#00D4FF" opacity="0.15" />
    <text x="180" y="128" fontSize="8" fill="#FFFFFF" opacity="0.8" textAnchor="middle">IoT Control</text>

    <rect x="125" y="160" width="110" height="40" rx="6" fill="#5C3693" opacity="0.15" />
    <text x="180" y="184" fontSize="8" fill="#FFFFFF" opacity="0.7" textAnchor="middle">Real-time Data</text>

    {/* Connected Devices */}
    {/* Top Left Device */}
    <circle cx="60" cy="80" r="18" fill="none" stroke="#00D4FF" strokeWidth="2" />
    <rect x="52" y="72" width="16" height="16" rx="3" fill="#0b0b0d" stroke="#00D4FF" strokeWidth="1" />
    <line x1="72" y1="80" x2="105" y2="110" stroke="#00D4FF" strokeWidth="1.5" opacity="0.6" strokeDasharray="3,3" />

    {/* Top Right Device */}
    <circle cx="300" cy="80" r="18" fill="none" stroke="#00D4FF" strokeWidth="2" />
    <polygon points="300,68 310,78 300,88 290,78" fill="none" stroke="#00D4FF" strokeWidth="1.5" />
    <line x1="288" y1="80" x2="255" y2="110" stroke="#00D4FF" strokeWidth="1.5" opacity="0.6" strokeDasharray="3,3" />

    {/* Bottom Left Device */}
    <circle cx="60" cy="270" r="18" fill="none" stroke="#5C3693" strokeWidth="2" />
    <circle cx="60" cy="270" r="8" fill="none" stroke="#5C3693" strokeWidth="1" />
    <circle cx="60" cy="270" r="3" fill="#5C3693" />
    <line x1="72" y1="260" x2="105" y2="220" stroke="#5C3693" strokeWidth="1.5" opacity="0.6" strokeDasharray="3,3" />

    {/* Bottom Right Device */}
    <circle cx="300" cy="270" r="18" fill="none" stroke="#5C3693" strokeWidth="2" />
    <path d="M 290 260 L 310 260 L 310 280 L 290 280 Z" fill="none" stroke="#5C3693" strokeWidth="1" />
    <line x1="288" y1="270" x2="255" y2="220" stroke="#5C3693" strokeWidth="1.5" opacity="0.6" strokeDasharray="3,3" />

    {/* Central Connection Ring */}
    <circle cx="180" cy="175" r="80" fill="none" stroke="#00D4FF" strokeWidth="1" opacity="0.3" strokeDasharray="5,5" />

    {/* Code Element */}
    <g transform="translate(30, 310) rotate(12)">
      <rect width="80" height="68" rx="8" fill="#0b0b0d" stroke="#00D4FF" strokeWidth="1.5" />
      <line x1="8" y1="12" x2="50" y2="12" stroke="#00D4FF" strokeWidth="1" />
      <line x1="8" y1="24" x2="64" y2="24" stroke="#5C3693" strokeWidth="1" />
      <line x1="8" y1="36" x2="54" y2="36" stroke="#00D4FF" strokeWidth="1" />
      <line x1="8" y1="48" x2="60" y2="48" stroke="#FF6B6B" strokeWidth="1" />
    </g>

    {/* Decorative Elements */}
    <circle cx="70" cy="50" r="6" fill="none" stroke="#00D4FF" strokeWidth="1.5" opacity="0.4" />
    <circle cx="310" cy="320" r="7" fill="none" stroke="#5C3693" strokeWidth="1.5" opacity="0.3" />
  </svg>
);
