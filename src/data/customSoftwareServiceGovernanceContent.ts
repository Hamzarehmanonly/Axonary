/** MVC governance copy for custom software (ERP, CRM, CMS, HRM) and category hub. Reuses mobile governance shape for shared hero/sections. */

import type { MobileGovernanceCopy } from "./mobileServiceGovernanceContent";

export const customSoftwareGovernanceHub: MobileGovernanceCopy = {
  hero: {
    badge: "Custom Software Development Services",
    titleMain: "Custom Software That Aligns Process, Data, and Teams",
    description:
      "We design and build business systems—ERP, CRM, CMS, and HRM—around how you actually operate: clear requirements, integration boundaries, and release plans you can govern. One delivery thread from discovery through rollout and handover.",
    exploreHref: "#services",
    cardTitle: "Enterprise delivery",
    stat1: { value: "Integrated", label: "Systems & APIs" },
    stat2: { value: "Phased", label: "Rollout & training" },
    cardFooter:
      "Book a discovery session to map domains, legacy systems, compliance needs, and the right product mix (ERP, CRM, CMS, HRM).",
  },
  overview: {
    what:
      "Custom software development for organizations means tailored applications that support core workflows: finance and operations (ERP), customer lifecycle (CRM), content and digital presence (CMS), and people operations (HRM)—implemented with explicit data models, integrations, and ownership.",
    who: [
      "Mid-market and enterprise teams outgrowing spreadsheets or fragmented tools",
      "Companies modernizing legacy systems without a big-bang cutover",
      "Product and IT leaders who need vendor-neutral architecture and documentation",
    ],
    businessValue:
      "Purpose-built software reduces manual work, improves data quality for decisions, and enforces process where it matters—when scope, integrations, and change management are treated as first-class, not afterthoughts.",
  },
  features: [
    "Domain-led discovery — Workshops, process maps, and prioritized backlog tied to outcomes.",
    "Integration-first design — APIs, events, and identity aligned with your existing stack.",
    "Configurable over rigid — Workflows and roles that adapt as the org changes.",
    "Security & access — Role-based control, audit expectations, and data handling you can defend.",
    "Testing with real scenarios — UAT shaped around payroll, pipeline, publishing, or hire flows as applicable.",
    "Documentation & handover — Runbooks, environments, and knowledge transfer for your team or ours.",
    "Roadmap after go-live — Hardening, enhancements, and platform upgrades on a sane cadence.",
  ],
  useCases: [
    "ERP — Financial consolidation, inventory, procurement, and operational reporting.",
    "CRM — Pipeline, service desk, marketing alignment, and customer 360 where justified.",
    "CMS — Multi-site content, editorial workflows, and performance-aware delivery.",
    "HRM — Core HR, onboarding, time, and payroll-adjacent integrations within your policies.",
    "Regulated or internal tools — Controls and evidence commensurate with your risk profile.",
  ],
  processSteps: [
    "Discover & align — Stakeholders, systems map, success metrics, constraints.",
    "Design & specify — Data model, integrations, UX for critical paths, phased plan.",
    "Build in increments — Working slices with demos and sign-off.",
    "Test & train — UAT, migration dry runs, role-based training materials.",
    "Deploy & stabilize — Cutover or phased rollout with monitoring and support.",
    "Evolve — Backlog, SLAs, and continuous improvement.",
  ],
  techStackIntro: "Illustrative; chosen to fit your standards and existing vendors.",
  techStackItems: [
    "Backend — .NET, Java, Node, or Python ecosystems as appropriate.",
    "Data — SQL/NoSQL, ETL, and reporting layers matched to volume and compliance.",
    "Frontend — SPA or server-rendered UIs for operator and employee experiences.",
    "Integrations — REST, message queues, iPaaS, or file-based patterns where needed.",
    "Cloud & on-prem — Hosting model aligned to your security and residency requirements.",
    "DevOps — CI/CD, environments, secrets, and release discipline.",
  ],
  whyChoose: [
    { title: "Business language first", subtitle: "We translate process and policy into software decisions." },
    { title: "Honest integration scope", subtitle: "What connects, what waits, and what is custom is explicit." },
    { title: "Sustainable ownership", subtitle: "Code and docs your team can run—or a clear managed path." },
    { title: "No mystery roadmap", subtitle: "Phases, dependencies, and trade-offs documented." },
    { title: "Breadth across pillars", subtitle: "ERP, CRM, CMS, and HRM under one delivery mindset." },
  ],
  seo: {
    primaryKeyword: "custom software development",
    supportingKeywords: [
      "enterprise software development",
      "ERP CRM CMS HRM solutions",
      "business process software",
      "custom business applications",
    ],
    metaTitle: "Custom Software Development Services | Axonary",
    metaDescription:
      "Custom ERP, CRM, CMS, and HRM software: discovery, integration, phased rollout, and documentation. Enterprise-grade delivery with Axonary.",
  },
  whySectionHeading: "Why Choose Axonary for Custom Software Development?",
};

export const customSoftwareGovernanceERP: MobileGovernanceCopy = {
  hero: {
    badge: "ERP • Finance • Operations • Integration",
    titleMain: "ERP Solutions for Coherent Processes, Data, and Cross-Department Visibility",
    description:
      "We implement and extend ERP around your chart of accounts, supply chain, and reporting needs—not generic templates dropped on your team. Data migration, integrations, and cutover are planned with rollback thinking and clear ownership.",
    exploreHref: "#erp-implementation",
    cardTitle: "ERP delivery",
    stat1: { value: "Phased", label: "Rollout options" },
    stat2: { value: "Integrated", label: "Adjacent systems" },
    cardFooter:
      "Schedule an ERP discovery call to review modules, master data, integrations, and your target go-live window.",
  },
  overview: {
    what:
      "ERP (enterprise resource planning) software unifies financial, operational, and often HR-related processes in one system or suite—covering configuration, customization, integrations, migration, training, and ongoing optimization.",
    who: [
      "Organizations consolidating multiple ledgers or regional instances",
      "Teams replacing legacy ERP or scaling past accounting-only tools",
      "Companies needing inventory, manufacturing, or project accounting tied to finance",
    ],
    businessValue:
      "A well-governed ERP reduces reconciliation effort, improves inventory and order visibility, and supports audit-ready reporting—when master data and integrations are treated as part of the program, not a side project.",
  },
  features: [
    "Process fit analysis — Standard vs configure vs custom with cost and upgrade impact clear.",
    "Master data strategy — Customers, vendors, items, and dimensions cleaned before load.",
    "Integration layer — GL bridges, e-commerce, CRM, payroll, and industry systems as needed.",
    "Role-based security — Segregation of duties and least privilege by role.",
    "Reporting & analytics — Operational and management views agreed with finance owners.",
    "Migration & reconciliation — Parallel run or phased cutover with sign-off checkpoints.",
    "Hypercare & optimization — Post-go-live tuning and backlog for phase two.",
  ],
  useCases: [
    "Multi-entity finance — Consolidation, intercompany, and localized compliance within your framework.",
    "Manufacturing & distribution — BOM, MRP-light or full, warehouse and order flows.",
    "Professional services — Project accounting, time, and margin visibility.",
    "Retail & omnichannel — POS or e-commerce tie-in to inventory and GL.",
    "Public sector / grant tracking — Within your policies and approval chains.",
  ],
  processSteps: [
    "Discover — Current processes, pain points, non-negotiable integrations.",
    "Blueprint — Target processes, module scope, data model, timeline.",
    "Configure & build — Workflows, forms, reports, custom extensions as scoped.",
    "Integrate & migrate — APIs, batches, validation, reconciliation.",
    "UAT & train — Scenario-based testing and role training.",
    "Go-live & stabilize — Cutover, hypercare, issue triage.",
    "Evolve — Releases, upgrades, and continuous improvement.",
  ],
  techStackIntro: "Vendor-agnostic patterns; stack follows your selected ERP and IT standards.",
  techStackItems: [
    "ERP platforms — SAP, Oracle NetSuite, Microsoft Dynamics, Odoo, or others per your choice.",
    "Integration — REST, SOAP, EDI, message buses, iPaaS.",
    "Data — SQL warehouses, reporting cubes, or BI tools you already use.",
    "Identity — SSO and directory integration for operator access.",
    "Automation — Scheduled jobs, workflow engines, RPA only where justified.",
  ],
  whyChoose: [
    { title: "Finance-aligned delivery", subtitle: "We speak GL, close, and audit questions early." },
    { title: "Integration realism", subtitle: "Fewer surprises at cutover from honest interface mapping." },
    { title: "Upgrade-aware customizations", subtitle: "Extensions isolated where possible." },
    { title: "Training as adoption", subtitle: "Materials tied to roles and real month-end scenarios." },
    { title: "Roadmap beyond go-live", subtitle: "Phase two modules and optimization planned." },
  ],
  seo: {
    primaryKeyword: "ERP solution",
    supportingKeywords: [
      "ERP implementation services",
      "enterprise resource planning",
      "ERP integration",
      "ERP migration",
    ],
    metaTitle: "ERP Solution & Implementation Services | Axonary",
    metaDescription:
      "ERP implementation, customization, integration, migration, and training—scoped for finance and operations. Pragmatic delivery with Axonary.",
  },
  whySectionHeading: "Why Choose Axonary for ERP Solutions?",
};

export const customSoftwareGovernanceCRM: MobileGovernanceCopy = {
  hero: {
    badge: "CRM • Sales • Service • Marketing alignment",
    titleMain: "CRM Solutions for Pipeline Discipline, Service Quality, and Trusted Customer Data",
    description:
      "We implement CRM so teams actually use it: clean data model, sensible automation, and integrations that keep sales, marketing, and support in sync. Governance covers duplicates, permissions, and what gets synced from other systems.",
    exploreHref: "#crm-implementation",
    cardTitle: "CRM delivery",
    stat1: { value: "Unified", label: "Lead-to-cash view" },
    stat2: { value: "Automated", label: "Where it helps" },
    cardFooter:
      "Request a CRM consultation to align objects, pipelines, integrations, and rollout by team.",
  },
  overview: {
    what:
      "CRM (customer relationship management) software supports sales, marketing, and customer service workflows—implementation covers configuration, customization, integration with email and product systems, automation, analytics, and adoption enablement.",
    who: [
      "B2B teams needing pipeline hygiene and forecast discipline",
      "Service organizations routing tickets and SLAs in one place",
      "Marketing and sales leaders requiring attributable journeys without tool sprawl",
    ],
    businessValue:
      "CRM reduces lead leakage, speeds response times, and improves forecasting when data entry burden is low and integrations keep context current—otherwise it becomes another database nobody trusts.",
  },
  features: [
    "Object & field design — Accounts, contacts, opportunities, custom entities as needed.",
    "Pipeline & stages — Stages, probabilities, and guardrails that match how you sell.",
    "Service processes — Queues, macros, knowledge, and escalation paths.",
    "Marketing alignment — Consent, segments, and handoffs without duplicate chaos.",
    "Integrations — ERP, billing, product usage, and support tools via API or iPaaS.",
    "Automation — Workflows that remove toil, not hide errors.",
    "Reporting — Dashboards for reps, managers, and execs with agreed definitions.",
  ],
  useCases: [
    "SMB to mid-market sales — Simple CRM with room to grow.",
    "Enterprise sales stacks — Multi-team territories and complex approvals.",
    "Customer support — Omnichannel intake with a single customer record.",
    "Partner channels — PRM-style flows where applicable.",
    "Renewal & expansion — Health scores and playbooks within your data ethics stance.",
  ],
  processSteps: [
    "Discover — Teams, objects, current tools, data quality issues.",
    "Design — Stages, layouts, automation rules, integration map.",
    "Build & integrate — Configuration, light code, API connections.",
    "Migrate & cleanse — Imports, dedupe strategy, validation.",
    "Pilot & train — Power users first, then broader rollout.",
    "Launch & refine — Adoption metrics and backlog for iteration.",
  ],
  techStackIntro: "Platform-flexible; we match Salesforce, HubSpot, Dynamics, or others you standardize on.",
  techStackItems: [
    "CRM platforms — Salesforce, HubSpot, Microsoft Dynamics 365, Zoho, or custom builds.",
    "Email & calendar — Sync patterns respecting privacy and IT policy.",
    "Data — Warehouses or CDPs when analytics scale beyond CRM alone.",
    "Identity — SSO for reps and service agents.",
    "Automation — Flow builders, serverless hooks, or custom services.",
  ],
  whyChoose: [
    { title: "Adoption-centered UX", subtitle: "Fewer clicks for the jobs reps and agents do daily." },
    { title: "Clean data doctrine", subtitle: "Dedupe, ownership, and sync rules agreed upfront." },
    { title: "Integration discipline", subtitle: "Contracts tested before promising real-time everything." },
    { title: "Sales + service together", subtitle: "One customer story across teams when scope allows." },
    { title: "Measurable rollout", subtitle: "Success criteria beyond “we turned it on.”" },
  ],
  seo: {
    primaryKeyword: "CRM solution",
    supportingKeywords: [
      "CRM implementation",
      "sales CRM development",
      "customer relationship management software",
      "CRM integration services",
    ],
    metaTitle: "CRM Solution & Implementation Services | Axonary",
    metaDescription:
      "CRM setup, customization, automation, integrations, and training—built for adoption and clean customer data. Axonary.",
  },
  whySectionHeading: "Why Choose Axonary for CRM Solutions?",
};

export const customSoftwareGovernanceCMS: MobileGovernanceCopy = {
  hero: {
    badge: "CMS • Content • Performance • Governance",
    titleMain: "CMS Solutions for Editorial Velocity, Brand Consistency, and Reliable Publishing",
    description:
      "We build and operate content platforms where editors can ship safely: workflows, previews, roles, and performance practices (caching, CDN, media) suited to your traffic and compliance. Migrations preserve structure and SEO intent where possible.",
    exploreHref: "#cms-implementation",
    cardTitle: "CMS delivery",
    stat1: { value: "Editor-ready", label: "Workflows & roles" },
    stat2: { value: "Performant", label: "Core Web Vitals aware" },
    cardFooter:
      "Book a CMS review to discuss platforms, migration scope, headless vs traditional, and editorial training.",
  },
  overview: {
    what:
      "A content management system (CMS) powers websites and digital experiences—implementation includes information architecture, themes or headless frontends, workflows, multilingual or multi-site setups, migrations, SEO foundations, security patching, and performance tuning.",
    who: [
      "Marketing and editorial teams managing many pages or locales",
      "Publishers needing workflow, scheduling, and approval chains",
      "Engineering teams wanting headless delivery with a strong editorial UI",
    ],
    businessValue:
      "A governed CMS speeds publishing, reduces developer bottlenecks for routine changes, and supports SEO and performance—when content models and caching strategy are designed with real editors in the room.",
  },
  features: [
    "Content modeling — Types, fields, relationships, and reuse across sites.",
    "Editorial workflow — Draft, review, publish, and rollback patterns.",
    "Theming & components — Design system alignment for brand consistency.",
    "Headless or hybrid — API delivery when frontends need flexibility.",
    "Migration — URL mapping, redirects, media, and structured data preservation.",
    "Security & maintenance — Updates, backups, and hardening commensurate with exposure.",
    "Performance — Caching, image pipelines, and CDN configuration.",
  ],
  useCases: [
    "Corporate marketing sites — Campaign landing pages and resource libraries.",
    "Multi-brand portfolios — Shared components with brand overrides.",
    "Documentation & help centers — Search-friendly, versioned content.",
    "Member or partner portals — Authenticated content layers.",
    "E-commerce content — Rich merchandising alongside your commerce stack.",
  ],
  processSteps: [
    "Discover — Audiences, content types, current pain points, traffic profile.",
    "IA & model — Sitemap, templates, migration inventory.",
    "Build — Theme/components or headless API + frontend.",
    "Migrate & QA — Content, redirects, accessibility spot checks.",
    "Launch — DNS, monitoring, search console handoff.",
    "Operate — Update cadence, editor training, backlog for enhancements.",
  ],
  techStackIntro: "Platform choices follow your stack and editorial needs.",
  techStackItems: [
    "CMS — WordPress, Drupal, Contentful, Strapi, Sanity, or enterprise DXP components.",
    "Frontend — Next.js, Nuxt, or traditional PHP/theme stacks.",
    "Search — Algolia, Elasticsearch, or native CMS search.",
    "Media — DAM integrations, image CDNs, responsive delivery.",
    "Hosting — Managed WordPress, Kubernetes, or static/edge where appropriate.",
  ],
  whyChoose: [
    { title: "Editors in the loop", subtitle: "UX for people who publish weekly, not just launch day." },
    { title: "SEO-aware migrations", subtitle: "Redirects and structure treated as part of success." },
    { title: "Performance culture", subtitle: "Budgets and monitoring, not one-off Lighthouse runs." },
    { title: "Security hygiene", subtitle: "Patching and access models appropriate to your surface area." },
    { title: "Composable thinking", subtitle: "Headless or monolith—whichever fits your team." },
  ],
  seo: {
    primaryKeyword: "CMS solution",
    supportingKeywords: [
      "CMS development services",
      "content management system implementation",
      "headless CMS",
      "WordPress enterprise development",
    ],
    metaTitle: "CMS Solution & Development Services | Axonary",
    metaDescription:
      "CMS implementation, customization, migration, performance, and security—for editorial teams and scalable sites. Axonary.",
  },
  whySectionHeading: "Why Choose Axonary for CMS Solutions?",
};

export const customSoftwareGovernanceHRM: MobileGovernanceCopy = {
  hero: {
    badge: "HRM • People ops • Payroll adjacency • Compliance",
    titleMain: "HRM Solutions for Consistent People Data, Workflows, and Audit-Friendly Processes",
    description:
      "We implement HRM systems that respect how you hire, onboard, and pay—within your policies and regional rules. Integrations to payroll and IT provisioning are scoped explicitly; self-service and manager workflows are tested with real scenarios.",
    exploreHref: "#hrm-implementation",
    cardTitle: "HRM delivery",
    stat1: { value: "Policy-aware", label: "Workflows & access" },
    stat2: { value: "Connected", label: "Payroll & IT hooks" },
    cardFooter:
      "Schedule an HRM discovery to map employee lifecycle, integrations, and data residency requirements.",
  },
  overview: {
    what:
      "Human resource management (HRM) software covers employee records, onboarding, time and attendance, performance, and often interfaces to payroll and benefits—delivery includes configuration, customization, integrations, compliance-oriented workflows, training, and change management.",
    who: [
      "Growing companies centralizing HRIS after spreadsheets",
      "Multi-country employers needing consistent core data with local variations",
      "IT and HR jointly owning identity, access, and offboarding risk",
    ],
    businessValue:
      "Solid HRM reduces administrative load, improves data for workforce planning, and supports compliance evidence—when approvals, retention, and integrations are implemented with legal and payroll partners in the conversation.",
  },
  features: [
    "Employee record core — Job, compensation, position, and org structure alignment.",
    "Onboarding & offboarding — Checklists, access provisioning hooks, asset tracking as scoped.",
    "Time & leave — Rules engines matched to your policies and locales.",
    "Performance & goals — Cycles, calibration support, and manager tooling as needed.",
    "Payroll integrations — File or API patterns with reconciliation checkpoints.",
    "Compliance support — Audit trails, document retention, and role-based access—within your counsel’s framework.",
    "Self-service UX — Employees and managers can complete tasks without HR tickets for every change.",
  ],
  useCases: [
    "Core HRIS replacement — Single source of truth for people data.",
    "Mid-market scaling — From 100 to 1,000+ employees with process standardization.",
    "Contractor + employee mix — Engagement types modeled without messy workarounds.",
    "Union or complex rules — Where configuration depth and testing matter.",
    "Integration with ITSM — Joiner-mover-leaver automation where approved.",
  ],
  processSteps: [
    "Discover — Policies, countries, payroll provider, current spreadsheets or legacy HRIS.",
    "Design — Org model, fields, workflows, integration contracts.",
    "Configure & integrate — Core setup, benefits feeds, payroll testing.",
    "Data migration — Historical balances and clean employee loads.",
    "UAT with HR & payroll — Parallel payroll runs where required.",
    "Go-live & support — Hypercare, FAQ, and iteration backlog.",
  ],
  techStackIntro: "We work with leading HCM suites and custom layers where appropriate.",
  techStackItems: [
    "HCM platforms — Workday, SAP SuccessFactors, BambooHR, HiBob, ADP ecosystem, or others.",
    "Identity — SSO, SCIM, and lifecycle hooks to IT systems.",
    "Payroll — Vendor APIs, flat files, or middleware per provider.",
    "Document — E-signature and HR document repositories.",
    "Analytics — Workforce metrics feeding your BI standards.",
  ],
  whyChoose: [
    { title: "HR + payroll literacy", subtitle: "We align software steps with how pay actually runs." },
    { title: "Careful with PII", subtitle: "Access, logging, and retention discussed early." },
    { title: "Realistic integrations", subtitle: "Batch vs real-time chosen with failure modes in mind." },
    { title: "Change management", subtitle: "Managers and employees trained on live scenarios." },
    { title: "Governed evolution", subtitle: "Regulatory and policy changes tracked on a backlog." },
  ],
  seo: {
    primaryKeyword: "HRM solution",
    supportingKeywords: [
      "HRIS implementation",
      "human resource management software",
      "HRM system integration",
      "payroll HR integration",
    ],
    metaTitle: "HRM Solution & HRIS Implementation | Axonary",
    metaDescription:
      "HRM and HRIS implementation: core HR, time, onboarding, payroll integrations, and compliance-minded workflows. Axonary.",
  },
  whySectionHeading: "Why Choose Axonary for HRM Solutions?",
};
