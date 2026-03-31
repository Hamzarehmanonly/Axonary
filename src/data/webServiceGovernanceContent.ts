/** MVC governance copy for web development hub and solution pages. */

import type { MobileGovernanceCopy } from "./mobileServiceGovernanceContent";

export const webGovernanceHub: MobileGovernanceCopy = {
  hero: {
    badge: "Web Development Services",
    titleMain: "Web Development for Fast, Secure, and Maintainable Digital Products",
    description:
      "We build and evolve web experiences—stores, portals, SPAs, APIs, and PWAs—with clear contracts between design, frontend, backend, and operations. Performance, accessibility, and release discipline are part of delivery, not optional polish at the end.",
    exploreHref: "#services",
    cardTitle: "Web delivery",
    stat1: { value: "Full stack", label: "When you need it" },
    stat2: { value: "Observable", label: "Releases & ops" },
    cardFooter:
      "Book a web discovery call to align UX goals, integrations, hosting constraints, and your phased roadmap.",
  },
  overview: {
    what:
      "Web development covers browser and server-side software: information architecture, UI implementation, APIs, data layers, commerce flows, authentication, SEO foundations, CI/CD, and production monitoring—delivered as cohesive product increments.",
    who: [
      "Teams launching or replatforming customer-facing sites and apps",
      "Enterprises standardizing portals, dashboards, and internal tools",
      "Founders needing ecommerce, PWA, or low-code acceleration with an escape hatch for custom logic",
    ],
    businessValue:
      "Well-scoped web work reduces time-to-market, improves conversion and support load through clearer UX, and lowers operational risk when observability and security are built in from the start.",
  },
  features: [
    "Product-aligned discovery — Journeys, constraints, and success metrics before stack debates.",
    "Contract-first APIs — Stable boundaries between UI, partners, and legacy systems.",
    "Performance & a11y — Budgets, Core Web Vitals awareness, and inclusive patterns.",
    "Security basics done — Auth flows, transport, secrets, and dependency hygiene commensurate with risk.",
    "Testable releases — Automated checks plus targeted manual paths on real browsers.",
    "Environment discipline — Dev/stage/prod separation and repeatable deploys.",
    "Roadmap after launch — Hardening, SEO iteration, features, and platform upgrades.",
  ],
  useCases: [
    "E-commerce — Catalog, checkout, payments, and order ops integrations.",
    "Portals — Authenticated experiences, dashboards, and role-based content.",
    "Marketing & content sites — CMS-driven pages with performance and governance.",
    "SaaS web apps — SPA/SSR frontends with robust APIs and billing hooks.",
    "PWAs — Installable web, offline-aware flows, and push where appropriate.",
    "Low-code plus code — Rapid shells with custom modules for differentiation.",
  ],
  processSteps: [
    "Discover & align — Users, integrations, compliance touchpoints, non-functional goals.",
    "Design & specify — UX, content model, API sketches, milestone plan.",
    "Build in iterations — Vertical slices with review and measurable acceptance.",
    "Test & harden — Cross-browser, load spot checks, security review by risk.",
    "Launch & observe — Monitoring, runbooks, handover documentation.",
    "Evolve — Analytics-led improvements and dependency updates on cadence.",
  ],
  techStackIntro: "Representative; final choices follow your standards and existing estate.",
  techStackItems: [
    "Frontend — React, Vue, or Angular; SSR frameworks when SEO or TTFB demands it.",
    "Styling & UX — Design systems, component libraries, responsive patterns.",
    "Backend — Node, .NET, Java, Python, or PHP ecosystems as appropriate.",
    "Data — PostgreSQL, MySQL, Redis, search engines, object storage.",
    "Commerce & CMS — Shopify, WooCommerce, headless CMS, or custom admin surfaces.",
    "Infra — Docker, Kubernetes, serverless, or managed PaaS aligned to your ops model.",
  ],
  whyChoose: [
    { title: "Coherent stack decisions", subtitle: "Trade-offs on SSR, SPA, and hosting explained in business terms." },
    { title: "Integration realism", subtitle: "What is real-time, batch, or manual is explicit early." },
    { title: "Maintainable codepaths", subtitle: "Structure your team—or ours—can extend without fear." },
    { title: "Ops-aware launches", subtitle: "Logging, alerts, and rollback thinking part of go-live." },
    { title: "Breadth across web patterns", subtitle: "From storefronts to PWAs to API-heavy apps." },
  ],
  seo: {
    primaryKeyword: "web development services",
    supportingKeywords: [
      "custom web development",
      "ecommerce development company",
      "full stack web development",
      "progressive web app development",
    ],
    metaTitle: "Web Development Services | Axonary",
    metaDescription:
      "Web development for ecommerce, portals, frontend, backend, full-stack, low-code, and PWAs—secure, performant delivery with Axonary.",
  },
  whySectionHeading: "Why Choose Axonary for Web Development?",
};

export const webGovernanceEcommerce: MobileGovernanceCopy = {
  hero: {
    badge: "E-commerce • Checkout • Integrations",
    titleMain: "E-Commerce Website Development for Conversion, Operations, and Trustworthy Checkout",
    description:
      "We build online commerce around your catalog, fulfillment, and payment reality—clear product data, cart and checkout flows that reduce friction, and integrations to inventory and back-office systems. PCI scope and fraud posture are discussed with your processors and policies.",
    exploreHref: "#ecom-storefront",
    cardTitle: "Commerce delivery",
    stat1: { value: "Checkout", label: "Friction-aware" },
    stat2: { value: "Ops-ready", label: "Fulfilment hooks" },
    cardFooter:
      "Schedule an ecommerce discovery to review platform vs custom, payment providers, and integration map.",
  },
  overview: {
    what:
      "E-commerce website development delivers storefronts, cart and checkout, payments, tax and shipping rules (as scoped), order management hooks, and often analytics—implemented with performance, SEO product foundations, and operational monitoring.",
    who: [
      "Brands launching D2C or B2B catalog experiences",
      "Retailers connecting online sales to ERP or WMS",
      "Teams migrating platforms without freezing merchandising",
    ],
    businessValue:
      "A disciplined commerce build improves conversion through faster, clearer journeys and reduces operational drag when orders, stock, and support tools stay in sync—assuming integrations and data ownership are planned.",
  },
  features: [
    "Storefront UX — Navigation, search, PDP templates, and mobile-first patterns.",
    "Cart & checkout — Guest/account flows, validation, and recovery tactics.",
    "Payments — Provider integration with tokenization patterns your PCI stance allows.",
    "Catalog & promotions — Merchandising rules, bundles, and campaign landing patterns.",
    "Ops integrations — OMS, ERP, 3PL, or marketplace feeds as scoped.",
    "Performance — Image pipelines, caching, and critical path tuning.",
    "Analytics — Event taxonomy aligned to funnel and attribution discussions.",
  ],
  useCases: [
    "D2C lifestyle and specialty retail",
    "B2B catalog with approvals and account pricing",
    "Subscription or mixed cart models within platform limits",
    "Headless storefronts on a commerce API",
    "Marketplace or multi-vendor (where scope and policy allow)",
  ],
  processSteps: [
    "Discover — SKUs, variants, fulfilment model, markets, compliance hooks.",
    "Design & IA — Templates, content entry, and checkout storyboards.",
    "Build & integrate — Theme/app work, payment go-live checklist.",
    "Test — Payments in sandbox, edge cases, load on key paths.",
    "Launch — DNS, monitoring, search console, hypercare.",
    "Grow — CRO backlog, SEO iterations, seasonal campaigns.",
  ],
  techStackIntro: "Platform-flexible; we match Shopify, WooCommerce, custom, or hybrid stacks.",
  techStackItems: [
    "Platforms — Shopify, WooCommerce, Magento, BigCommerce, or bespoke.",
    "Frontend — Liquid, Hydrogen, Next.js storefronts, or theme customization.",
    "Payments — Stripe, Adyen, PayPal, and regional methods as required.",
    "Search — Algolia, native platform search, or Elasticsearch class.",
    "Content — Headless CMS for editorial pages alongside commerce.",
  ],
  whyChoose: [
    { title: "Commerce ops literacy", subtitle: "We align UX with how you pick, pack, and support." },
    { title: "Honest PCI conversation", subtitle: "Scope and provider features surfaced early." },
    { title: "SEO-aware templates", subtitle: "Structure and performance treated as product." },
    { title: "Integration discipline", subtitle: "Batch vs real-time chosen with failure handling." },
    { title: "Post-launch CRO", subtitle: "Measurement and iteration, not one-shot launch." },
  ],
  seo: {
    primaryKeyword: "ecommerce website development",
    supportingKeywords: ["online store development", "shopify development", "woocommerce agency", "checkout optimization"],
    metaTitle: "E-Commerce Website Development Services | Axonary",
    metaDescription:
      "E-commerce development: storefront UX, checkout, payments, integrations, and performance. Pragmatic delivery with Axonary.",
  },
  whySectionHeading: "Why Choose Axonary for E-Commerce Development?",
};

export const webGovernancePortals: MobileGovernanceCopy = {
  hero: {
    badge: "Portals • IAM • Dashboards",
    titleMain: "Web Portals for Role-Based Access, Unified Entry, and Operational Dashboards",
    description:
      "We implement portals where authentication, authorization, and content or data visibility must align to roles—employees, partners, or customers. SSO patterns, audit-friendly access, and integration to line-of-business systems are scoped explicitly, not assumed.",
    exploreHref: "#portal-design",
    cardTitle: "Portal delivery",
    stat1: { value: "RBAC", label: "Role clarity" },
    stat2: { value: "Integrated", label: "LOB systems" },
    cardFooter:
      "Book a portal discovery to map personas, IdP, data sensitivity, and integration inventory.",
  },
  overview: {
    what:
      "Web portal development delivers gated web applications: login experiences, role-based navigation, dashboards, content or task workflows, and integrations to CRM, ERP, ticketing, or custom APIs—plus operational monitoring appropriate to usage.",
    who: [
      "Enterprises replacing intranet sprawl with a governed entry point",
      "Vendors managing partner onboarding and resource access",
      "Customer success teams needing a single authenticated destination",
    ],
    businessValue:
      "Portals reduce support tickets and security drift when access rules match org reality and integrations keep task data current—requires clear identity architecture and content ownership.",
  },
  features: [
    "Information architecture — Navigation and landing per persona.",
    "Identity — SSO, MFA, session lifecycle aligned to your IdP.",
    "Authorization — RBAC/ABAC patterns tested with negative cases.",
    "Dashboards — Widgets fed from APIs with agreed refresh semantics.",
    "Content & workflow — CMS or custom publishing with approvals as needed.",
    "Integrations — REST/GraphQL, webhooks, and file exchange where legacy requires.",
    "Observability — Audit logs, error tracking, and uptime checks.",
  ],
  useCases: [
    "Employee self-service and policy hubs",
    "Partner extranets with document and deal visibility",
    "Customer account portals with tickets and subscriptions",
    "Operational command centers aggregating KPIs",
    "Vendor or franchise portals with localized content",
  ],
  processSteps: [
    "Discover — Personas, IdP, data classes, integration list.",
    "Blueprint — Site map, permission matrix, API contracts.",
    "Build — UI shells, auth integration, feature slices.",
    "Security review — Threat model commensurate with data sensitivity.",
    "UAT — Role-based scenarios and penetration basics if required.",
    "Launch & train — Admin guides and support handover.",
  ],
  techStackIntro: "Vendor-neutral; fits Okta/Azure AD-class identity and your stack.",
  techStackItems: [
    "Auth — OIDC/SAML, JWT patterns, BFF or SPA flows by threat model.",
    "Frontend — SPA or SSR frameworks with secure cookie/session handling.",
    "Backend — API gateways, service layers, and caching.",
    "CMS — For mixed marketing + authenticated content when applicable.",
    "Search & notifications — Email/push/in-app per policy.",
  ],
  whyChoose: [
    { title: "Identity-first delivery", subtitle: "Permissions modeled before screen polish." },
    { title: "Enterprise integration habits", subtitle: "Contracts and retries for brittle systems." },
    { title: "Operational clarity", subtitle: "Support and admins know how to grant/revoke access." },
    { title: "Accessible UX", subtitle: "Keyboard and reader paths for employee-wide rollouts." },
    { title: "Sustainable evolution", subtitle: "Feature flags and modular boundaries for growth." },
  ],
  seo: {
    primaryKeyword: "web portal development",
    supportingKeywords: ["enterprise portal", "customer portal development", "extranet development", "SSO web application"],
    metaTitle: "Web Portal Development Services | Axonary",
    metaDescription:
      "Web portals with SSO, RBAC, dashboards, and integrations—built for security and real operations. Axonary.",
  },
  whySectionHeading: "Why Choose Axonary for Web Portals?",
};

export const webGovernanceFrontend: MobileGovernanceCopy = {
  hero: {
    badge: "UI • Performance • Accessibility",
    titleMain: "Frontend Development for Maintainable UIs, Strong Web Vitals, and Inclusive UX",
    description:
      "We implement interfaces with component discipline, state clarity, and performance budgets suited to your traffic. Accessibility and responsive behavior are tested on real devices—not only desktop Chrome—so releases stay shippable for diverse users.",
    exploreHref: "#frontend-design",
    cardTitle: "Frontend delivery",
    stat1: { value: "Components", label: "Design system" },
    stat2: { value: "Perf + a11y", label: "Budgets" },
    cardFooter:
      "Request a frontend review to align framework choice, design tokens, and release expectations.",
  },
  overview: {
    what:
      "Frontend development turns design and UX specs into running UI: component libraries, routing, data fetching, form validation, internationalization, performance optimization, accessibility compliance targets, and automated UI tests where valuable.",
    who: [
      "Product teams needing a scalable UI codebase",
      "Design systems rolling out across multiple properties",
      "Backend-heavy orgs wanting a focused frontend partner",
    ],
    businessValue:
      "Solid frontends improve conversion and support metrics through speed and clarity, and reduce rework when components and APIs are stable and documented.",
  },
  features: [
    "Design system alignment — Tokens, variants, and documentation for reuse.",
    "Framework-appropriate patterns — React/Vue/Angular with sane state boundaries.",
    "Data layer — React Query/RTK-class patterns, error and loading UX.",
    "Performance — Code splitting, image strategy, memoization where measured.",
    "Accessibility — WCAG-oriented checks, keyboard flows, focus management.",
    "Testing — Unit, component, and e2e on critical journeys.",
    "Handoff — Storybook or equivalent for design-dev sync.",
  ],
  useCases: [
    "Marketing sites with rich interactions",
    "SaaS dashboards and settings surfaces",
    "Embedded widgets in legacy pages",
    "Mobile-first commerce frontends",
    "Internal tools with dense data tables",
  ],
  processSteps: [
    "Discover — Browsers, locales, performance and a11y targets.",
    "Component audit — Map Figma to primitives and layouts.",
    "Implement slices — Vertical features with API mocks then live data.",
    "Harden — Perf profiling, a11y fixes, cross-browser passes.",
    "Release — Feature flags and monitoring on UI errors.",
    "Iterate — UX debt backlog from analytics and support.",
  ],
  techStackIntro: "We follow your preferred stack or recommend based on team skills.",
  techStackItems: [
    "Frameworks — React, Next.js, Vue, Nuxt, Angular.",
    "Styling — CSS modules, Tailwind, styled-components, or design tokens.",
    "Quality — ESLint, Prettier, TypeScript, Vitest/Jest, Playwright/Cypress.",
    "Assets — Image CDNs, font strategy, icon systems.",
    "APIs — REST, GraphQL, WebSocket clients with typed clients.",
  ],
  whyChoose: [
    { title: "Measured performance", subtitle: "Changes judged against budgets, not vibes." },
    { title: "Accessibility as acceptance", subtitle: "Not a post-launch checkbox." },
    { title: "API collaboration", subtitle: "We help shape payloads for UI needs." },
    { title: "Design partnership", subtitle: "Tight loop with design on edge cases." },
    { title: "Long-term maintainability", subtitle: "Patterns your next hire can follow." },
  ],
  seo: {
    primaryKeyword: "frontend development services",
    supportingKeywords: ["react development company", "responsive web development", "web accessibility development", "UI engineering"],
    metaTitle: "Frontend Development Services | Axonary",
    metaDescription:
      "Frontend engineering: design systems, performance, accessibility, and testing—integrated with your APIs. Axonary.",
  },
  whySectionHeading: "Why Choose Axonary for Frontend Development?",
};

export const webGovernanceBackend: MobileGovernanceCopy = {
  hero: {
    badge: "APIs • Data • Security",
    titleMain: "Backend Development for Reliable APIs, Sound Data Models, and Production Operations",
    description:
      "We build services that your frontend and partners can depend on: explicit API contracts, validation, observability, and data designs that match access patterns. Security controls scale with sensitivity—no one-size-fits-all checklist theater.",
    exploreHref: "#backend-architecture",
    cardTitle: "Backend delivery",
    stat1: { value: "Contract-first", label: "APIs" },
    stat2: { value: "Observable", label: "Logs & metrics" },
    cardFooter:
      "Schedule a backend discovery for load profile, data stores, auth model, and integration map.",
  },
  overview: {
    what:
      "Backend development covers application services, databases, caching, message handling, authentication and authorization, background jobs, and deployment pipelines—delivered with testing and monitoring suited to your uptime expectations.",
    who: [
      "Teams exposing APIs to web and mobile clients",
      "Products needing to scale reads/writes predictably",
      "Organizations hardening legacy services behind gateways",
    ],
    businessValue:
      "Reliable backends reduce incident cost and speed feature delivery when schemas, APIs, and deploys are automated and observable.",
  },
  features: [
    "Service design — Modular boundaries and versioning strategy.",
    "Data modeling — Migrations, indexes, and retention aligned to queries.",
    "APIs — REST, GraphQL, or gRPC with documented error semantics.",
    "AuthZ — Roles, scopes, and service-to-service patterns.",
    "Async work — Queues and schedulers for heavy or slow tasks.",
    "Security — OWASP-aligned input handling, secrets management, dependency updates.",
    "DevOps — CI/CD, infra as code, environments, rollback paths.",
  ],
  useCases: [
    "Greenfield APIs for new products",
    "Strangler patterns around monoliths",
    "Integration hubs for SaaS connectors",
    "High-read catalog or search backends",
    "Webhook receivers and event processors",
  ],
  processSteps: [
    "Discover — SLAs, data classes, traffic shape, compliance hooks.",
    "Model & contract — ERD sketches, OpenAPI/GraphQL schema drafts.",
    "Implement — Services with tests and local dev ergonomics.",
    "Harden — Load smoke tests, security pass, chaos-lite on critical paths.",
    "Deploy — Staged rollout, dashboards, alerts.",
    "Operate — On-call playbooks and cost review loops.",
  ],
  techStackIntro: "Polyglot; we match your runtime and cloud standards.",
  techStackItems: [
    "Runtimes — Node, .NET, Java, Python, Go, PHP.",
    "Data — PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch.",
    "Messaging — Kafka, RabbitMQ, cloud-native queues.",
    "Infra — Kubernetes, ECS, Cloud Run, or VM patterns.",
    "Observability — OpenTelemetry, structured logging, APM tools.",
  ],
  whyChoose: [
    { title: "Operational honesty", subtitle: "We plan for failure modes and on-call reality." },
    { title: "Schema care", subtitle: "Migrations and backwards compatibility thought through." },
    { title: "Security proportionate to data", subtitle: "Controls matched to sensitivity." },
    { title: "Partner-friendly APIs", subtitle: "Docs and stability for consumers." },
    { title: "Cost-aware design", subtitle: "Caching and query patterns reviewed." },
  ],
  seo: {
    primaryKeyword: "backend development services",
    supportingKeywords: ["API development company", "microservices development", "nodejs backend", "cloud backend development"],
    metaTitle: "Backend Development & API Services | Axonary",
    metaDescription:
      "Backend and API development: data modeling, security, CI/CD, and observability—production-minded delivery with Axonary.",
  },
  whySectionHeading: "Why Choose Axonary for Backend Development?",
};

export const webGovernanceFullstack: MobileGovernanceCopy = {
  hero: {
    badge: "End-to-end • One thread • Shippable slices",
    titleMain: "Full-Stack Development for Coherent UX, APIs, and Deployment Together",
    description:
      "We deliver vertical slices across UI and services so features are demonstrable early—shared types or contracts, aligned error handling, and environments that mirror production enough to catch integration issues before users do.",
    exploreHref: "#fullstack-planning",
    cardTitle: "Full-stack delivery",
    stat1: { value: "Vertical", label: "Feature slices" },
    stat2: { value: "Aligned", label: "UI ↔ API" },
    cardFooter:
      "Book a full-stack planning session for stack choices, hosting, and milestone definitions.",
  },
  overview: {
    what:
      "Full-stack web development spans UX implementation, backend logic, persistence, auth, deployment, and monitoring—typically in a single accountable team thread from backlog to production.",
    who: [
      "Startups needing a single team to own the product surface",
      "Teams tired of frontend/backend disconnects at integration time",
      "Internal products requiring rapid iteration with full visibility",
    ],
    businessValue:
      "One thread reduces handoff friction and speeds feedback when UI and API evolve together—especially valuable for MVPs and products with tight learning loops.",
  },
  features: [
    "Unified backlog — Stories cut across layers with clear acceptance.",
    "Shared contracts — Types, schemas, or OpenAPI as source of truth.",
    "Auth end-to-end — Sessions, tokens, and UI states handled consistently.",
    "Data flow clarity — Loading, empty, and error UX wired to real responses.",
    "Testing pyramid — Unit, API, and e2e on critical paths.",
    "Deployment unity — Frontend and backend pipelines coordinated.",
    "Observability — Correlation IDs from browser to server logs where useful.",
  ],
  useCases: [
    "MVP web apps with auth and billing stubs",
    "Admin tools with complex forms and permissions",
    "B2B products with multi-tenant concerns",
    "Greenfield replaces of legacy internal apps",
  ],
  processSteps: [
    "Discover — Users, must-haves, hosting, team skills.",
    "Blueprint — Architecture sketch, stack, first vertical slice.",
    "Iterate — Demo-ready increments weekly or bi-weekly.",
    "Harden — Security, perf, and UX polish pass.",
    "Launch — Monitoring, docs, support readiness.",
    "Scale — Split concerns or add specialists as load grows.",
  ],
  techStackIntro: "Typical pairs include React/Next + Node or .NET; adapted to you.",
  techStackItems: [
    "Frontend — React, Vue, Next, Nuxt.",
    "Backend — Node, Nest, Express, .NET, FastAPI.",
    "Data — SQL primary with Redis where caching wins.",
    "Auth — OIDC providers, JWT/BFF patterns by threat model.",
    "Hosting — Vercel/Netlify edge + API on cloud PaaS or K8s.",
  ],
  whyChoose: [
    { title: "Fewer integration surprises", subtitle: "Same team owns the seam." },
    { title: "Faster validation", subtitle: "Slices prove value before big bets." },
    { title: "Sensible stack choices", subtitle: "Hiring and ops constraints included." },
    { title: "Production habits", subtitle: "CI, staging, and logs from early phases." },
    { title: "Growth path", subtitle: "We help split roles when you scale." },
  ],
  seo: {
    primaryKeyword: "full stack development services",
    supportingKeywords: ["full stack web development", "MVP development team", "react node development", "end to end web development"],
    metaTitle: "Full-Stack Web Development Services | Axonary",
    metaDescription:
      "Full-stack delivery: UI, APIs, data, auth, deploy, and monitoring in one accountable thread. Axonary.",
  },
  whySectionHeading: "Why Choose Axonary for Full-Stack Development?",
};

export const webGovernanceLowCode: MobileGovernanceCopy = {
  hero: {
    badge: "Low-code • Speed • Escape hatches",
    titleMain: "Low-Code Development for Fast Delivery With Controlled Custom Extensions",
    description:
      "We use low-code platforms where time-to-value wins, and add custom code, APIs, or data layers where differentiation or compliance requires it. Vendor limits, export paths, and total cost of ownership are part of the conversation—not ignored until renewal.",
    exploreHref: "#lowcode-velocity",
    cardTitle: "Low-code delivery",
    stat1: { value: "Fast", label: "MVP cycles" },
    stat2: { value: "Hybrid", label: "Code where needed" },
    cardFooter:
      "Discuss platform fit, integration depth, and long-term ownership on a low-code discovery call.",
  },
  overview: {
    what:
      "Low-code development accelerates UI and workflow creation using visual builders while allowing custom logic, external APIs, and sometimes custom frontends. Governance includes data modeling, environment promotion, testing, and documentation for citizen-developer handoff if desired.",
    who: [
      "Teams validating product ideas before native rebuild",
      "Ops-heavy orgs automating internal workflows quickly",
      "Founders balancing speed with a path to custom later",
    ],
    businessValue:
      "Low-code can shorten cycles for internal tools and MVPs when integration scope and platform limits are understood—reduces waste versus overbuilding early or underbuilding on the wrong tool.",
  },
  features: [
    "Platform selection — Fit for UX complexity, auth, and data residency.",
    "Data model discipline — Entities and relationships that won’t paint you into a corner.",
    "Integration patterns — REST connectors, webhooks, scheduled sync.",
    "Custom code boundaries — Clear where code lives and how it deploys.",
    "Security & roles — Row-level and UI-level access tested.",
    "Testing — Critical path checks beyond the happy demo.",
    "Roadmap — Upgrade cadence and technical debt visibility.",
  ],
  useCases: [
    "Internal CRUD apps and approvals",
    "Customer onboarding wizards with API hooks",
    "Lightweight partner portals on a platform",
    "Rapid prototypes for investor or user validation",
  ],
  processSteps: [
    "Discover — Workflows, users, integrations, compliance.",
    "Prototype — Core screens and data on platform.",
    "Integrate — External systems with error handling.",
    "Harden — Permissions, logging, backup/restore awareness.",
    "Train — Handoff materials for maintainers.",
    "Evaluate — Exit or deepen platform commitment with data.",
  ],
  techStackIntro: "Bubble, FlutterFlow, Retool-class, or your chosen vendor—we stay pragmatic.",
  techStackItems: [
    "Platforms — Visual builders per your license and region.",
    "APIs — REST/GraphQL connectors and custom edge functions.",
    "Data — Platform DB plus warehouse export if analytics needed.",
    "Auth — SSO hooks where enterprise demands.",
    "Code escape — Node/TS or other runtimes for the 20% custom slice.",
  ],
  whyChoose: [
    { title: "Vendor realism", subtitle: "Limits and pricing triggers discussed upfront." },
    { title: "Hybrid skillset", subtitle: "We bridge visual builders and code." },
    { title: "Integration rigor", subtitle: "Retries, idempotency, and monitoring on sync jobs." },
    { title: "Ownership clarity", subtitle: "Docs for whoever runs it next quarter." },
    { title: "Path to custom", subtitle: "When to graduate off platform, without panic." },
  ],
  seo: {
    primaryKeyword: "low code development services",
    supportingKeywords: ["low code application development", "bubble developer", "rapid application development", "no code low code agency"],
    metaTitle: "Low-Code Development Services | Axonary",
    metaDescription:
      "Low-code apps with disciplined integrations, security, and custom extensions where they matter. Axonary.",
  },
  whySectionHeading: "Why Choose Axonary for Low-Code Development?",
};

export const webGovernancePWA: MobileGovernanceCopy = {
  hero: {
    badge: "PWA • Offline • Installable",
    titleMain: "Progressive Web Apps for Installable Experiences, Offline Tolerance, and Engagement",
    description:
      "We build PWAs where service workers, caching strategies, and update flows are designed deliberately—so offline modes fail gracefully and users aren’t stuck on stale shells. Push and install prompts follow platform policy and respectful UX.",
    exploreHref: "#pwa-architecture",
    cardTitle: "PWA delivery",
    stat1: { value: "Service worker", label: "Caching design" },
    stat2: { value: "Engagement", label: "Push where fit" },
    cardFooter:
      "Review PWA goals, content freshness needs, and notification strategy on a discovery call.",
  },
  overview: {
    what:
      "Progressive web app development adds installability, app-shell caching, background sync patterns, and optionally web push to web experiences—implemented with HTTPS, manifest configuration, and cross-browser testing.",
    who: [
      "Brands wanting app-like reach without store gatekeeping",
      "Field or retail staff on variable connectivity",
      "Products combining mobile web SEO with re-engagement hooks",
    ],
    businessValue:
      "PWAs can improve repeat visits and perceived performance when caching and update semantics match user expectations—especially for content and task flows that tolerate eventual consistency.",
  },
  features: [
    "App shell strategy — What is cached vs network-first documented.",
    "Offline UX — Queued actions, conflict handling, user messaging.",
    "Install experience — Manifest, icons, and prompt timing.",
    "Performance — Precache vs runtime cache trade-offs measured.",
    "Push — Permission UX, segmentation, and quiet hours patterns.",
    "Security — HTTPS, SW scope, and CSP considerations.",
    "Testing — Lighthouse CI, real device passes, update scenarios.",
  ],
  useCases: [
    "Media and content readers with offline packs",
    "Lightweight storefront or catalog PWAs",
    "Internal task apps for distributed teams",
    "Event or campaign micro-apps",
  ],
  processSteps: [
    "Discover — Connectivity profile, freshness needs, notification goals.",
    "Design cache map — Routes, assets, API GET semantics.",
    "Implement — SW registration, manifest, fallback pages.",
    "Harden — Update flow, storage quotas, error monitoring.",
    "Launch — Add to home screen QA on target browsers.",
    "Iterate — Push experiments within policy and analytics.",
  ],
  techStackIntro: "Works with React, Vue, or Workbox-class tooling on your stack.",
  techStackItems: [
    "Service workers — Workbox or hand-rolled strategies.",
    "Frameworks — Next.js, CRA, Vite SPAs with PWA plugins.",
    "Push — FCM/web push with VAPID keys managed safely.",
    "Storage — IndexedDB, Cache API usage with eviction policy.",
    "Hosting — CDN and HTTPS prerequisites.",
  ],
  whyChoose: [
    { title: "Caching with intent", subtitle: "Not “cache everything” by default." },
    { title: "Update transparency", subtitle: "Users and admins understand refresh behavior." },
    { title: "Cross-browser QA", subtitle: "iOS Safari quirks included in scope." },
    { title: "Policy-safe push", subtitle: "Opt-in patterns that won’t annoy users." },
    { title: "Performance evidence", subtitle: "Metrics before/after SW rollout." },
  ],
  seo: {
    primaryKeyword: "progressive web app development",
    supportingKeywords: ["PWA development services", "offline web app", "web push notifications", "installable web app"],
    metaTitle: "Progressive Web App (PWA) Development | Axonary",
    metaDescription:
      "PWA development: service workers, offline flows, install prompts, and push—implemented with clear caching and update behavior. Axonary.",
  },
  whySectionHeading: "Why Choose Axonary for PWA Development?",
};
