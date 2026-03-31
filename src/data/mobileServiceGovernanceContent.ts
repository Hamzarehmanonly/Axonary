/** MVC governance copy: Overview → Features → Use cases → Process → Tech → Why choose → SEO. */

export type MobileGovernanceColors = {
  primary: string;
  secondary: string;
  bg: string;
  card: string;
  textMuted: string;
  white: string;
};

export type MobileHeroCopy = {
  badge: string;
  titleMain: string;
  description: string;
  exploreHref: string;
  cardTitle: string;
  stat1: { value: string; label: string };
  stat2: { value: string; label: string };
  cardFooter: string;
};

export type MobileGovernanceCopy = {
  hero: MobileHeroCopy;
  overview: { what: string; who: string[]; businessValue: string };
  features: string[];
  useCases: string[];
  processSteps: string[];
  techStackIntro: string;
  techStackItems: string[];
  whyChoose: { title: string; subtitle: string }[];
  seo: {
    primaryKeyword: string;
    supportingKeywords: string[];
    metaTitle: string;
    metaDescription: string;
  };
  whySectionHeading: string;
};

export const mobileGovernanceMobileApp: MobileGovernanceCopy = {
  hero: {
    badge: "Mobile App Development Services",
    titleMain: "Mobile App Development That Ships, Scales, and Stays Maintainable",
    description:
      "We build mobile products for startups and enterprises: clear roadmaps, secure architecture, and performance under real users and traffic. You get one accountable delivery thread—UX fidelity, engineering quality, and release criteria—not a disconnected task list.",
    exploreHref: "#services",
    cardTitle: "Delivery focus",
    stat1: { value: "End-to-end", label: "Strategy to store" },
    stat2: { value: "iOS & Android", label: "Native & shared code" },
    cardFooter:
      "Book a product discovery call to map scope, platforms, timeline, and the right stack for your goals.",
  },
  overview: {
    what:
      "Mobile app development is end-to-end delivery of software for phones and tablets: product definition, UX/UI, implementation, testing, store submission, analytics, and iteration—for consumer, B2B, and internal apps on native or shared codebases.",
    who: [
      "Founders and product teams launching a mobile-first product",
      "Companies extending web or desktop products to mobile",
      "Enterprises standardizing secure, compliant mobile workflows",
    ],
    businessValue:
      "Mobile apps meet users where they are, improve engagement and retention versus mobile web alone, and can unlock revenue, efficiency, and actionable data. Solid engineering reduces support load and protects brand trust through reliable, fast experiences.",
  },
  features: [
    "Product clarity — Prioritized backlog, milestones, and acceptance criteria tied to business goals.",
    "Experience that converts — Flows and UI tuned for onboarding, task completion, and retention.",
    "Robust engineering — Stable releases, sensible architecture, and code your team (or ours) can extend.",
    "Quality before launch — Automated checks plus structured manual testing on real devices and OS levels.",
    "Store readiness — Platform guidelines, assets, privacy disclosures, and submission workflows handled deliberately.",
    "Observability — Crash reporting, analytics, and performance signals to guide post-launch decisions.",
    "Roadmap beyond v1 — Hardening, feature drops, and OS updates aligned with your growth phase.",
  ],
  useCases: [
    "Retail & e-commerce — Shopping, loyalty, order tracking, notifications.",
    "Financial services — Secure auth, transactions, regulated workflows within your compliance framework.",
    "Healthcare & wellness — Scheduling, education, member tools aligned to applicable regulations.",
    "Logistics & field operations — Proof of delivery, routing, offline-capable flows.",
    "SaaS & B2B — Companion apps for dashboards, approvals, mobile workflows.",
    "Media & education — Content, subscriptions, engagement features.",
  ],
  processSteps: [
    "Discover & align — Goals, users, constraints, platforms, success metrics.",
    "Design & specify — Flows, UI, API contracts, phased delivery plan.",
    "Build in iterations — Working increments with demos and feedback.",
    "Test & harden — Functional, regression, device, release-readiness checks.",
    "Release & handover — Store submission, monitoring, documentation, knowledge transfer.",
    "Evolve — Analytics-led improvements, OS updates, backlog execution.",
  ],
  techStackIntro: "Representative; final stack follows requirements and existing systems.",
  techStackItems: [
    "Native — Kotlin, Swift, platform SDKs and Jetpack / Apple frameworks as appropriate.",
    "Cross-platform — Flutter, React Native, or similar when shared codebase ROI is clear.",
    "Backend & APIs — REST, GraphQL, WebSockets; integration with your services.",
    "Cloud & DevOps — CI/CD, test builds, environment separation.",
    "Quality & analytics — Targeted automated tests; crash and product analytics.",
    "Security — Secure storage, transport, secrets handling per your policies.",
  ],
  whyChoose: [
    { title: "One accountable thread", subtitle: "Product, design, engineering share one definition of done." },
    { title: "Honest scoping", subtitle: "Trade-offs on time, cost, and risk surfaced early." },
    { title: "Built for change", subtitle: "Architecture and practices that support growth and team change." },
    { title: "Transparent communication", subtitle: "Demos, written decisions, clear escalation." },
    { title: "Breadth of context", subtitle: "Greenfield launches, rewrites, extensions of existing products." },
  ],
  seo: {
    primaryKeyword: "mobile app development",
    supportingKeywords: [
      "mobile application development services",
      "custom mobile apps",
      "iOS and Android app development",
      "enterprise mobile apps",
      "mobile UX development",
      "cross-platform mobile apps",
    ],
    metaTitle: "Mobile App Development Services | Axonary",
    metaDescription:
      "Custom mobile app development for iOS and Android: strategy, UX, engineering, QA, store launch, and ongoing support. Ship with confidence with Axonary.",
  },
  whySectionHeading: "Why Choose Axonary for Mobile App Development?",
};

export const mobileGovernanceAndroid: MobileGovernanceCopy = {
  hero: {
    badge: "Native Android • Kotlin • Play Store",
    titleMain: "Android App Development Built for Performance, Compatibility, and Play Store Success",
    description:
      "We ship Android apps that behave consistently across devices and OS levels: thoughtful UX, resilient networking, offline-aware flows where needed, and release pipelines for frequent updates. Store policy, security, and maintainability are part of delivery—not afterthoughts.",
    exploreHref: "#native-android",
    cardTitle: "Android delivery",
    stat1: { value: "Kotlin-first", label: "Modern stack" },
    stat2: { value: "Device QA", label: "Real hardware" },
    cardFooter: "Book an Android discovery call to align scope, device matrix, and your path to a stable Play Store launch.",
  },
  overview: {
    what:
      "Android app development covers design, implementation, testing, and publication for the Android ecosystem—phones, tablets, and relevant form factors—including UI, backend integration, data and sync, notifications, background work, and Play Store packaging.",
    who: [
      "Teams launching or scaling consumer or B2B Android products",
      "Organizations adding a credible Android client next to iOS or web",
      "Enterprises deploying internal or field Android apps with security requirements",
    ],
    businessValue:
      "Android reaches a large global device base; polished native apps improve reach, engagement, and task completion. Strong engineering cuts crashes, bad reviews, support cost, and makes platform evolution manageable.",
  },
  features: [
    "Material-aligned UX — Patterns and components that match platform expectations and accessibility.",
    "Modern native stack — Kotlin-first code, structured modules, maintainable architecture.",
    "Reliable connectivity — APIs, errors, retries, caching suited to real networks.",
    "Quality on hardware — Testing on representative devices, sizes, and OS versions.",
    "Play Store readiness — Bundles, signing, listings, data safety, policy-aligned releases.",
    "Operational visibility — Crashes, ANRs, performance, analytics for prioritization.",
    "Sustainable delivery — Versioning, staged rollout, OS and dependency updates.",
  ],
  useCases: [
    "Retail & e-commerce — Shopping, wishlists, orders, push campaigns.",
    "Financial services — Biometrics, secure sessions, regulated flows.",
    "Healthcare & wellness — Scheduling, education, care-adjacent tools per your regulatory context.",
    "Logistics & field service — Scanning, jobs, signatures, limited offline.",
    "Media & subscriptions — Playback, entitlements, accounts.",
    "Enterprise productivity — Approvals, dashboards, identity integration.",
  ],
  processSteps: [
    "Discover & align — Journeys, device/OS targets, APIs, release constraints.",
    "Design & technical spec — Flows, UI specs, API shapes, phased backlog.",
    "Build in iterations — Vertical slices, demo builds, feedback.",
    "Test & stabilize — Automation plus manual passes; performance and regression focus.",
    "Publish & monitor — Play rollout, staged release, crash and ANR monitoring.",
    "Evolve — Roadmap, OS adaptation, dependencies, analytics-led improvements.",
  ],
  techStackIntro: "Representative; aligned to product and security needs.",
  techStackItems: [
    "Core — Kotlin, Android SDK, Jetpack (Navigation, Lifecycle, WorkManager, etc.).",
    "UI — Jetpack Compose and/or Views by product stage.",
    "Data & networking — Room, Retrofit/OkHttp-class stacks, coroutines/flows.",
    "Architecture — MVVM/MVI-style, modularization for scale.",
    "Quality — Unit/instrumentation tests where ROI is clear; CI builds.",
    "Distribution — Play App Signing, testing tracks, release automation.",
  ],
  whyChoose: [
    { title: "Platform-native judgment", subtitle: "Clear trade-offs on UI stack, offline scope, background limits." },
    { title: "Release discipline", subtitle: "Policy and technical risk before submission, not at the deadline." },
    { title: "Aligned delivery", subtitle: "UX, engineering, and launch criteria owned together." },
    { title: "Honest estimates", subtitle: "Backend, design, parallel work called out in planning." },
    { title: "Long-term maintainability", subtitle: "Structure and docs for your team or ongoing partnership." },
  ],
  seo: {
    primaryKeyword: "android app development",
    supportingKeywords: [
      "kotlin android development",
      "native android apps",
      "google play development",
      "android ui development",
      "enterprise android apps",
      "android application services",
    ],
    metaTitle: "Android App Development Services | Axonary",
    metaDescription:
      "Native Android apps with Kotlin: UX, APIs, testing, Play Store launch, monitoring, and updates. Build a stable, maintainable product with Axonary.",
  },
  whySectionHeading: "Why Choose Axonary for Android App Development?",
};

export const mobileGovernanceIOS: MobileGovernanceCopy = {
  hero: {
    badge: "Native iOS • Swift • App Store",
    titleMain: "iOS App Development Crafted for the App Store, Apple UX Standards, and Long-Term Maintainability",
    description:
      "We build iOS apps that feel at home on iPhone and iPad: clear information architecture, responsive layouts, accessible interactions, and networking that fails gracefully. Delivery includes review-ready assets, privacy posture aligned to your policies, and instrumentation for data-driven iteration.",
    exploreHref: "#native-ios",
    cardTitle: "iOS delivery",
    stat1: { value: "Swift", label: "Native stack" },
    stat2: { value: "TestFlight", label: "Staged release" },
    cardFooter: "Book an iOS discovery call to define scope, release targets, and a realistic path through TestFlight to App Store launch.",
  },
  overview: {
    what:
      "iOS app development is end-to-end software for Apple’s mobile and tablet platforms: experience design, native implementation, service integration, device testing, TestFlight distribution, App Store submission, and updates.",
    who: [
      "Teams launching iOS-first or iOS-primary products",
      "Businesses adding a high-quality iOS client",
      "Enterprises distributing internal or B2B apps within Apple programs you use",
    ],
    businessValue:
      "Native iOS can deepen engagement, enable richer workflows, and strengthen trust through polish. Solid engineering cuts crashes, improves retention, and keeps pace with iOS releases.",
  },
  features: [
    "HIG-aware UX — Navigation, feedback, and layout aligned to iOS expectations.",
    "Accessibility in scope — Dynamic Type, VoiceOver, contrast, focus order as requirements.",
    "Secure networking — Auth, tokens, edge cases tested—not only happy paths.",
    "Device-realistic QA — Representative iPhone and iPad models and OS versions.",
    "TestFlight-ready — Channels, notes, beta feedback for staged learning.",
    "Submission discipline — Assets, privacy nutrition labels as applicable, review alignment.",
    "Observability — Crashes, performance, analytics for post-launch priorities.",
  ],
  useCases: [
    "Subscriptions & media — Accounts, paywalls, libraries, engagement.",
    "Financial services — Biometric sign-in, secure sessions, regulated flows.",
    "Healthcare & wellness — Scheduling, education, care-adjacent tools per your rules.",
    "Retail & loyalty — Offers, orders, Wallet-related features where relevant.",
    "B2B & workforce — Role tools, offline-tolerant tasks, enterprise sign-in.",
    "Productivity — Tasks, approvals, system integrations where appropriate.",
  ],
  processSteps: [
    "Discover & align — Journeys, iPhone/iPad targets, integrations, store positioning.",
    "Design & specification — Flows, UI specs, APIs, analytics events, backlog.",
    "Build in iterations — Vertical slices, TestFlight builds, feedback.",
    "Harden & verify — Regression, performance, accessibility, release checks.",
    "Distribute & launch — TestFlight, submission, phased release, monitoring.",
    "Evolve — OS updates, dependencies, features from live data.",
  ],
  techStackIntro: "Representative; depends on app age and constraints.",
  techStackItems: [
    "Languages & UI — Swift; SwiftUI and/or UIKit.",
    "Frameworks — Combine/async-await, Foundation, Keychain, background tasks as needed.",
    "Architecture — MVVM-style patterns, modules at scale.",
    "Tooling — Xcode, SPM and/or CocoaPods if legacy requires, CI.",
    "Quality — XCTest, UI tests on critical paths, static analysis.",
    "Distribution — TestFlight, App Store Connect, signing/provisioning.",
  ],
  whyChoose: [
    { title: "Review-aware planning", subtitle: "Privacy, sign-in, payments, metadata risks addressed early." },
    { title: "Product + engineering alignment", subtitle: "Intent to shipped behavior and metrics." },
    { title: "Pragmatic stack choices", subtitle: "UIKit vs SwiftUI with explicit trade-offs." },
    { title: "Transparent scope", subtitle: "Backend, design, third-party SDK dependencies visible upfront." },
    { title: "Sustainable handover", subtitle: "Structure and docs for internal or partner ownership." },
  ],
  seo: {
    primaryKeyword: "ios app development",
    supportingKeywords: [
      "iphone app development",
      "swift app development",
      "native ios apps",
      "swiftui development",
      "app store development",
      "ipad app development",
    ],
    metaTitle: "iOS App Development Services | Axonary",
    metaDescription:
      "Native iOS apps in Swift: HIG-aligned UX, secure APIs, TestFlight, App Store release, monitoring, and iteration with Axonary.",
  },
  whySectionHeading: "Why Choose Axonary for iOS App Development?",
};

export const mobileGovernanceCrossPlatform: MobileGovernanceCopy = {
  hero: {
    badge: "One codebase • iOS & Android",
    titleMain: "Cross-Platform App Development for One Codebase, Two Stores, Consistent UX",
    description:
      "We deliver cross-platform mobile products when a single team and shared roadmap beat parallel native builds: faster feature parity, one QA surface for most flows, and coordinated releases. Platform differences, performance, and store requirements stay explicit so you are not surprised at submission or scale.",
    exploreHref: "#cp-native",
    cardTitle: "Cross-platform",
    stat1: { value: "Shared core", label: "Aligned releases" },
    stat2: { value: "Dual store", label: "iOS & Android" },
    cardFooter: "Book a cross-platform discovery call to validate fit, stack choice, and release strategy for both platforms.",
  },
  overview: {
    what:
      "Cross-platform app development uses frameworks that target iOS and Android from one project—shared business logic and UI—with selective native modules when needed. It spans design, build, test, dual-store submission, and ongoing updates.",
    who: [
      "Teams that need feature parity and one release cadence across platforms",
      "Startups validating product–market fit before doubling native investment",
      "Products with moderate platform-specific surface area and a clear shared core",
    ],
    businessValue:
      "You reduce duplicate engineering for shared features, shorten time-to-market for both stores, and simplify staffing for one primary mobile codebase—when the approach matches product risk and performance needs.",
  },
  features: [
    "Fit assessment — When cross-platform helps versus when native split is lower risk.",
    "Unified product core — One domain model and feature layer driving both apps.",
    "Platform-respectful UX — Patterns tuned per OS where user expectations diverge.",
    "Performance awareness — Startup time, lists, animations, and bridges profiled early.",
    "Dual-store readiness — iOS and Android guidelines, assets, and privacy artifacts in one plan.",
    "Shared quality bar — Automated tests and device passes covering both targets.",
    "Escape hatches — Native code paths for SDKs, sensors, or UI gaps in the framework.",
  ],
  useCases: [
    "B2B SaaS companions — Dashboards, workflows, notifications across employee devices.",
    "Consumer utilities — Onboarding-heavy, form-driven, or content-light experiences.",
    "Internal tools — Field apps with shared logic and faster rollout.",
    "MVP and growth phase — Rapid iteration before optional native specialization.",
    "Retail & loyalty — Catalogs, loyalty, order status with shared screens.",
    "Dual-market launch — One UX validated across geographies with two store presences.",
  ],
  processSteps: [
    "Discover & align — Journeys, must-have native behaviors, parity definition, success metrics.",
    "Stack & architecture — Framework choice, module boundaries, integration points.",
    "Design & build — Shared components with platform adjustments where needed.",
    "Test both targets — Automation plus devices for iOS and Android.",
    "Dual release — TestFlight and Play testing tracks, coordinated submissions.",
    "Evolve — Framework upgrades, feature work, analytics-driven tuning on both OSes.",
  ],
  techStackIntro: "Framework choice follows product, team, and integration constraints.",
  techStackItems: [
    "Frameworks — Flutter, React Native, or similar multi-target stacks.",
    "Languages — Dart, TypeScript/JavaScript, or others per framework.",
    "Native bridges — Swift, Kotlin, platform APIs for gaps.",
    "State & data — Shared patterns for API clients, caching, offline where scoped.",
    "CI/CD — Pipelines producing iOS and Android artifacts.",
    "Analytics & crashes — Unified or parallel integrations per platform policy.",
  ],
  whyChoose: [
    { title: "Honest fit calls", subtitle: "We recommend cross-platform when economics and risk align." },
    { title: "Dual-store fluency", subtitle: "Submission and policy work planned for both markets." },
    { title: "Performance culture", subtitle: "Measurement before and after launch, not assumptions." },
    { title: "Single backlog", subtitle: "Features prioritized once, delivered to both apps when intended." },
    { title: "Path to specialization", subtitle: "Architecture that allows native modules without rewriting everything." },
  ],
  seo: {
    primaryKeyword: "cross-platform app development",
    supportingKeywords: [
      "cross platform mobile development",
      "flutter react native agency",
      "ios android single codebase",
      "hybrid mobile app development",
      "multi platform mobile apps",
    ],
    metaTitle: "Cross-Platform App Development Services | Axonary",
    metaDescription:
      "One codebase for iOS and Android: shared core, platform-aware UX, dual-store release, testing, and iteration. Cross-platform mobile apps with Axonary.",
  },
  whySectionHeading: "Why Choose Axonary for Cross-Platform App Development?",
};

export const mobileGovernanceFlutter: MobileGovernanceCopy = {
  hero: {
    badge: "Flutter • Dart • iOS & Android",
    titleMain: "Flutter App Development for Consistent UI, Fast Iteration, and Dual-Store Releases",
    description:
      "We build Flutter apps when you want one codebase with a custom-rendered UI layer: branded experiences, rapid iteration across iOS and Android, and native plugins only where the product requires them.",
    exploreHref: "#flutter-app-development",
    cardTitle: "Flutter delivery",
    stat1: { value: "Widgets", label: "Composable UI" },
    stat2: { value: "Dual target", label: "iOS & Android" },
    cardFooter: "Schedule a Flutter discovery call to align UI goals, plugin needs, and your store launch plan.",
  },
  overview: {
    what:
      "Flutter app development delivers iOS and Android apps from a single Dart codebase with a custom-rendered UI layer. It covers product design, widget-based implementation, plugin integration, testing, and dual-store releases.",
    who: [
      "Teams prioritizing UI consistency and fast iteration across platforms",
      "Products with branded interfaces and animation-heavy experiences",
      "Organizations with Dart/Flutter skills or a partner-led delivery model",
    ],
    businessValue:
      "Flutter can accelerate parity between iOS and Android, keep visual branding consistent, and reduce duplicate UI work—while still allowing native plugins where the platform requires them.",
  },
  features: [
    "Composable UI — Widget trees and design systems that scale with your product.",
    "Performance focus — Jank profiling, build size awareness, and platform channel discipline.",
    "Plugin strategy — First-party, community, or custom plugins chosen with maintenance in mind.",
    "Dual-store packaging — iOS and Android build flavors, signing, and store assets.",
    "Test pyramid — Unit, widget, and integration tests where they protect revenue paths.",
    "State management fit — Provider, Bloc, Riverpod, or other patterns matched to team and scale.",
    "Upgrade path — Flutter SDK and dependency updates planned on a recurring cadence.",
  ],
  useCases: [
    "Consumer brands — High-fidelity UI, campaigns, and loyalty experiences.",
    "Fintech-style flows — Multi-step forms, KYC-style journeys (within your compliance scope).",
    "Marketplace & booking — Calendars, maps, real-time status with plugin support.",
    "Internal ops — Field tools with consistent UI across issued devices.",
    "Media & learning — Rich layouts, video, and structured content.",
    "Startup MVPs — Fast iteration from prototype to store presence.",
  ],
  processSteps: [
    "Discover & align — UX goals, plugin needs, offline scope, and release targets.",
    "Design system — Tokens, components, and motion aligned to Flutter constraints.",
    "Implement & integrate — APIs, auth, analytics, and native bridges as needed.",
    "Test on devices — iOS and Android hardware passes for critical journeys.",
    "Release — Store listings, privacy disclosures, staged rollout.",
    "Maintain — SDK upgrades, dependency audits, performance regression checks.",
  ],
  techStackIntro: "Typical Flutter delivery stack; adjusted to your environment.",
  techStackItems: [
    "Framework — Flutter, Dart.",
    "Architecture — Layered or feature modules; state management per team standard.",
    "Networking & storage — Dio/http, local persistence as required.",
    "CI/CD — Fastlane or cloud pipelines for both platforms.",
    "Quality — flutter_test, integration_test, golden tests where valuable.",
    "Native — Swift/Kotlin for plugins and platform channels when required.",
  ],
  whyChoose: [
    { title: "Flutter delivery experience", subtitle: "Shipping real apps, not prototypes only." },
    { title: "UI craft + engineering", subtitle: "Motion, layout, and performance treated together." },
    { title: "Pragmatic plugins", subtitle: "Native only where it reduces long-term risk." },
    { title: "Dual-platform QA", subtitle: "Both stores tested, not assumed identical." },
    { title: "Sustainable upgrades", subtitle: "Flutter moves fast; we plan SDK migration work." },
  ],
  seo: {
    primaryKeyword: "flutter app development",
    supportingKeywords: [
      "flutter development services",
      "dart mobile apps",
      "cross platform flutter",
      "flutter ios android",
      "flutter ui development",
    ],
    metaTitle: "Flutter App Development Services | Axonary",
    metaDescription:
      "Flutter apps for iOS and Android: custom UI, APIs, plugins, testing, and store launch. Consistent experience and disciplined delivery with Axonary.",
  },
  whySectionHeading: "Why Choose Axonary for Flutter App Development?",
};

export const mobileGovernanceReactNative: MobileGovernanceCopy = {
  hero: {
    badge: "React Native • TypeScript • iOS & Android",
    titleMain: "React Native App Development for Shared Logic, Web Team Leverage, and Pragmatic Native Bridges",
    description:
      "We build React Native apps when JavaScript or TypeScript and shared logic accelerate delivery—while native modules handle SDKs, hardware, and store-specific edges. Upgrades, performance, and review requirements are planned, not improvised.",
    exploreHref: "#rn-native",
    cardTitle: "React Native delivery",
    stat1: { value: "TS/JS", label: "Shared logic" },
    stat2: { value: "Native", label: "Bridges when needed" },
    cardFooter: "Book a React Native discovery call to map native dependencies, navigation, and your dual-store timeline.",
  },
  overview: {
    what:
      "React Native app development builds iOS and Android clients primarily in JavaScript or TypeScript, sharing business logic and much of the UI while using native modules where required. It spans design, implementation, native bridges, testing, and store submission.",
    who: [
      "Teams with strong React/web skills moving into mobile",
      "Products that benefit from a large ecosystem of libraries and tooling",
      "Organizations wanting shared logic between web and mobile in TypeScript",
    ],
    businessValue:
      "React Native can shorten time-to-market for dual-platform apps, leverage existing JS talent, and align with web teams—when navigation, native dependencies, and upgrade cadence are managed deliberately.",
  },
  features: [
    "Architecture choices — Expo vs bare workflow or hybrid approaches based on native needs.",
    "Native module boundaries — Clear seams for Bluetooth, payments, or SDKs that require native code.",
    "Performance hygiene — List virtualization, image handling, and bridge traffic awareness.",
    "Hermes & build tuning — Startup and memory tuned for production, not dev defaults only.",
    "OTA vs store updates — Policy-safe use of code push patterns where appropriate.",
    "Testing — Jest, RNTL, Detox or Maestro-class flows on critical paths.",
    "Upgrade planning — React Native releases tracked; dependency drift reduced.",
  ],
  useCases: [
    "SaaS mobile clients — Dashboards, messaging, notifications.",
    "E-commerce companions — Catalogs, carts, order tracking.",
    "Internal tools — Rapid rollout to mixed device fleets.",
    "Content & community — Feeds, profiles, lightweight commerce.",
    "Prototypes to scale — MVP on RN with path to harden native edges.",
    "Brownfield extensions — New RN surfaces alongside legacy native apps.",
  ],
  processSteps: [
    "Discover & align — Native dependencies, auth, analytics, and store constraints.",
    "Scaffold & standards — Linting, navigation, state, folder structure.",
    "Build features — Shared screens with platform-specific files when needed.",
    "Integrate native — Modules and config for iOS/Android projects.",
    "Test & profile — Devices, performance, and store review prep.",
    "Ship & maintain — Version cadence, RN upgrades, security patches.",
  ],
  techStackIntro: "Representative React Native ecosystem choices.",
  techStackItems: [
    "Runtime — React Native, JavaScript/TypeScript.",
    "Navigation — React Navigation or equivalent.",
    "State — Redux, Zustand, Jotai, or context patterns by scale.",
    "Tooling — Metro, Flipper-compatible workflows, CI for both binaries.",
    "Native — Xcode, Android Studio for modules and release builds.",
    "Analytics & crash — Sentry/Firebase-class tooling per your stack.",
  ],
  whyChoose: [
    { title: "RN in production", subtitle: "Experience shipping and maintaining apps past launch." },
    { title: "Web team leverage", subtitle: "Patterns that help React developers contribute safely." },
    { title: "Native when needed", subtitle: "Bridges for SDKs without compromising maintainability." },
    { title: "Upgrade realism", subtitle: "RN upgrades budgeted, not ignored until broken." },
    { title: "Store-aware delivery", subtitle: "iOS and Android review requirements handled together." },
  ],
  seo: {
    primaryKeyword: "react native app development",
    supportingKeywords: [
      "react native development company",
      "react native ios android",
      "expo react native services",
      "typescript mobile apps",
      "react native performance",
    ],
    metaTitle: "React Native App Development Services | Axonary",
    metaDescription:
      "React Native apps for iOS and Android: TypeScript, native modules, testing, store release, and maintenance. Practical, review-ready delivery with Axonary.",
  },
  whySectionHeading: "Why Choose Axonary for React Native App Development?",
};

export const mobileGovernanceCloudMobile: MobileGovernanceCopy = {
  hero: {
    badge: "Cloud-backed • Secure APIs • Scale",
    titleMain: "Cloud Mobile App Development for Reliable Backends, Identity, and Observable Operations",
    description:
      "We pair mobile clients with cloud services—auth, APIs, sync, push, and observability—so features scale safely and incidents are diagnosable. Architecture, cost, and security are designed together with the apps, not bolted on later.",
    exploreHref: "#cloud-apps",
    cardTitle: "Cloud + mobile",
    stat1: { value: "APIs", label: "Contract-first" },
    stat2: { value: "Ops-ready", label: "Monitoring" },
    cardFooter: "Schedule a cloud mobile consultation to align SLAs, identity, regions, and your integration map.",
  },
  overview: {
    what:
      "Cloud mobile app development pairs mobile clients with cloud backends and managed services—auth, APIs, real-time data, push, storage, and serverless or containerized workloads—so apps scale securely and operations stay observable.",
    who: [
      "Teams building sync-heavy or multi-device experiences",
      "Enterprises integrating mobile with existing cloud identity and APIs",
      "Products that need elastic capacity and regional deployment options",
    ],
    businessValue:
      "Cloud-backed mobile reduces operational toil, improves reliability under load, and supports features like push, remote config, and analytics—when architecture, cost, and security are designed together with the client apps.",
  },
  features: [
    "Backend-for-frontend or API design — Contracts that match mobile constraints (payload size, chatty calls).",
    "Identity & access — OAuth/OIDC, SSO patterns, token lifecycle suited to mobile storage.",
    "Real-time & offline — Sync strategies, conflict handling, and queueing where scoped.",
    "Push & messaging — FCM/APNs integration with privacy and segmentation in mind.",
    "Observability — Logging, metrics, tracing aligned to mobile release cycles.",
    "Cost guardrails — Usage patterns, caching, and autoscaling limits reviewed.",
    "Security posture — Encryption in transit/at rest, secrets management, least privilege.",
  ],
  useCases: [
    "Field workforce — Job sync, attachments, intermittent connectivity.",
    "Collaboration — Shared state, presence, notifications.",
    "IoT adjacency — Device telemetry ingestion next to a mobile control surface.",
    "Global consumer apps — Multi-region APIs and CDN-backed assets.",
    "Enterprise mobility — Integration with corporate IdP and policy.",
    "Media & uploads — Resumable uploads, transcoding pipelines.",
  ],
  processSteps: [
    "Discover & align — SLAs, compliance, regions, and integration inventory.",
    "Architecture — APIs, data stores, auth, and mobile data flow.",
    "Implement cloud & client — Parallel tracks with contract-first delivery.",
    "Load & security review — Baseline tests and threat modeling commensurate with risk.",
    "Launch — Staged rollout, monitoring, runbooks.",
    "Operate — On-call alignment, cost reviews, incident learning loops.",
  ],
  techStackIntro: "Illustrative; mapped to your cloud provider and policies.",
  techStackItems: [
    "Cloud — AWS, GCP, or Azure services as appropriate.",
    "APIs — REST, GraphQL, gRPC to mobile where justified.",
    "Data — PostgreSQL, Dynamo-style stores, Redis caches, object storage.",
    "Auth — Cognito, Auth0-class, or corporate IdP integrations.",
    "Mobile SDKs — Official cloud SDKs with minimal privilege.",
    "IaC & CI/CD — Terraform/Bicep-class, pipelines for infra and apps.",
  ],
  whyChoose: [
    { title: "Mobile + cloud together", subtitle: "Not two siloed workstreams with mismatched contracts." },
    { title: "Operational thinking", subtitle: "Monitoring and runbooks part of launch, not an afterthought." },
    { title: "Security proportionate to risk", subtitle: "Controls matched to data sensitivity and regulations." },
    { title: "Cost awareness", subtitle: "Architectures reviewed against realistic traffic patterns." },
    { title: "Vendor-neutral patterns", subtitle: "Portable designs where your roadmap requires it." },
  ],
  seo: {
    primaryKeyword: "cloud mobile app development",
    supportingKeywords: [
      "cloud native mobile apps",
      "mobile backend development",
      "aws mobile development",
      "firebase alternative architecture",
      "scalable mobile APIs",
    ],
    metaTitle: "Cloud Mobile App Development Services | Axonary",
    metaDescription:
      "Mobile apps backed by cloud APIs, auth, sync, and observability. Secure, scalable architecture from Axonary—aligned to your provider and policies.",
  },
  whySectionHeading: "Why Choose Axonary for Cloud Mobile App Development?",
};

export const mobileGovernanceIoT: MobileGovernanceCopy = {
  hero: {
    badge: "IoT • Connectivity • Field-ready",
    titleMain: "IoT Mobile App Development for Device Pairing, Secure Control, and Real-World Connectivity",
    description:
      "We build mobile companions for connected products: onboarding, provisioning, telemetry, and commands across BLE, Wi-Fi, or cloud-mediated paths. Security, weak networks, and hardware variation are treated as core requirements.",
    exploreHref: "#iot-connectivity",
    cardTitle: "IoT + mobile",
    stat1: { value: "Protocols", label: "BLE / MQTT / HTTP" },
    stat2: { value: "Field QA", label: "Real devices" },
    cardFooter: "Book an IoT mobile discovery call to review hardware, protocols, security model, and support workflows.",
  },
  overview: {
    what:
      "IoT mobile app development connects handheld software to devices and cloud services—pairing, provisioning, telemetry, control commands, and fleet-aware UX—using protocols and hardware interfaces appropriate to your product class.",
    who: [
      "Hardware and product companies shipping connected consumer or industrial devices",
      "Enterprises rolling out sensor-backed operational tools",
      "Teams needing a credible mobile companion for firmware and cloud you already run",
    ],
    businessValue:
      "A reliable mobile layer improves onboarding, reduces support burden for device setup, and surfaces the data users need to act—when connectivity, security, and firmware variation are handled explicitly.",
  },
  features: [
    "Connectivity patterns — BLE, Wi-Fi provisioning, cellular gateways, or hub-mediated control as applicable.",
    "Protocol literacy — MQTT, CoAP, WebSockets, or vendor stacks aligned to your firmware.",
    "Security — Pairing trust, credential storage, OTA awareness, and least-privilege device access.",
    "Offline & edge cases — Reconnect flows, degraded modes, and user-visible status.",
    "Device lab mindset — Testing with real hardware revisions, not only simulators.",
    "Fleet operations — Diagnostics, logs, and support workflows for the field.",
    "App store compliance — Background modes, permission strings, and data disclosures aligned to behavior.",
  ],
  useCases: [
    "Smart home & consumer — Setup, control, schedules, notifications.",
    "Industrial monitoring — Readings, alerts, technician workflows.",
    "Healthcare-adjacent devices — Within your regulatory and clinical process.",
    "Asset tracking — Location or status with battery and connectivity constraints.",
    "Agriculture & environment — Field-deployed sensors and mobile dashboards.",
    "Mobility & logistics — Vehicle or equipment telematics companions.",
  ],
  processSteps: [
    "Discover & align — Hardware revisions, protocols, security model, and user journeys.",
    "Prototype connectivity — Spikes on radios and firmware paths early.",
    "Implement mobile + cloud handoff — Commands, telemetry, and error semantics.",
    "Harden — Security review, soak testing, field pilot feedback.",
    "Release — Store policies, permissions, and support documentation.",
    "Iterate — Firmware co-releases, compatibility matrices, deprecation planning.",
  ],
  techStackIntro: "Depends on device class, radio, and your existing cloud edge.",
  techStackItems: [
    "Mobile — Kotlin/Swift or cross-platform with native BLE modules as needed.",
    "Protocols — MQTT/HTTP/WebSocket to cloud; BLE/Wi-Fi to device.",
    "Cloud — Ingestion, rules, device registries per your platform.",
    "Security — Certificates, rotating keys, secure enclave storage where available.",
    "Tooling — CI with hardware-in-the-loop where feasible.",
    "Analytics — Device and app telemetry for reliability improvements.",
  ],
  whyChoose: [
    { title: "Systems thinking", subtitle: "Mobile, firmware, and cloud treated as one product surface." },
    { title: "Field realism", subtitle: "Testing plans that include weak networks and mixed hardware." },
    { title: "Security-first pairing", subtitle: "Threats to device onboarding and control considered explicitly." },
    { title: "Supportable UX", subtitle: "Error states and diagnostics that reduce ticket volume." },
    { title: "Long compatibility windows", subtitle: "Plans for OS updates and hardware revisions." },
  ],
  seo: {
    primaryKeyword: "iot mobile app development",
    supportingKeywords: [
      "iot app development services",
      "ble mobile app development",
      "mqtt mobile client",
      "smart device app development",
      "industrial iot mobile",
    ],
    metaTitle: "IoT Mobile App Development Services | Axonary",
    metaDescription:
      "IoT companion apps: device pairing, secure control, telemetry, and cloud integration. Practical mobile software for connected products—Axonary.",
  },
  whySectionHeading: "Why Choose Axonary for IoT Mobile App Development?",
};
