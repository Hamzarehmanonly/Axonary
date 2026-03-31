/** MVC governance copy: Cloud Services hub + application development, migration, support. */

import type { MobileGovernanceCopy } from "./mobileServiceGovernanceContent";

export const cloudGovernanceHub: MobileGovernanceCopy = {
  hero: {
    badge: "Cloud Services",
    titleMain: "Cloud Delivery with Architecture, Cost, Security, and Operability in One Thread",
    description:
      "We help you build on cloud, migrate with a plan, and keep environments healthy—without surprise bills or opaque handoffs. Landing zones, IaC, observability, and support models are discussed as part of scope, not after go-live.",
    exploreHref: "#services",
    cardTitle: "Cloud practice",
    stat1: { value: "IaC-first", label: "Repeatable envs" },
    stat2: { value: "Observed", label: "Metrics & logs" },
    cardFooter:
      "Book a cloud review: current footprint, target platforms, migration path, and runbooks.",
  },
  overview: {
    what:
      "Cloud services cover application development on managed platforms, migration from on-prem or other clouds, and ongoing support—unified by architecture standards, identity and networking patterns, FinOps awareness, and operational readiness.",
    who: [
      "Teams standardizing on AWS, Azure, or GCP",
      "Organizations exiting datacenters or repatriating workloads selectively",
      "Products needing SRE-style support without building a full internal team",
    ],
    businessValue:
      "Cloud done well improves time-to-market and elasticity; done poorly it creates cost sprawl and fragile ops—so we anchor on architecture, automation, and measurable SLOs.",
  },
  features: [
    "Well-architected patterns — Security, reliability, performance, cost pillars.",
    "IaC & CI/CD — Terraform/Bicep/CloudFormation-class pipelines.",
    "Identity & network — Zero-trust friendly baselines.",
    "Observability — Metrics, logs, traces, alerting ownership.",
    "FinOps hooks — Tagging, budgets, right-sizing reviews.",
    "DR & backup — RPO/RTO aligned to business appetite.",
    "Documentation — Runbooks and onboarding for your team.",
  ],
  useCases: [
    "Greenfield SaaS on managed Kubernetes or PaaS",
    "Lift-and-shift plus refactor waves",
    "Hybrid connectivity and identity integration",
    "24/7 or business-hours support with escalation paths",
  ],
  processSteps: [
    "Assess — Inventory, dependencies, compliance drivers.",
    "Design — Target architecture, landing zone, networking.",
    "Build — IaC, pipelines, observability baseline.",
    "Migrate or launch — Cutover plans, rollback, validation.",
    "Operate — On-call, patching, incident response.",
    "Optimize — Cost, performance, and reliability reviews.",
  ],
  techStackIntro: "Multi-cloud capable; depth where you standardize.",
  techStackItems: [
    "AWS — EKS, Lambda, RDS, VPC, IAM patterns.",
    "Azure — AKS, App Service, Entra ID integration.",
    "GCP — GKE, Cloud Run, IAM and org policies.",
    "IaC — Terraform, Pulumi, ARM/Bicep as appropriate.",
    "GitOps & CI — GitHub Actions, Azure DevOps, GitLab.",
    "Observability — Prometheus, Grafana, cloud-native tooling.",
  ],
  whyChoose: [
    { title: "Architecture before VMs", subtitle: "Patterns that survive the first release." },
    { title: "Cost literacy", subtitle: "We talk spend and trade-offs in design reviews." },
    { title: "Security defaults", subtitle: "Least privilege and secrets handling baked in." },
    { title: "Operational clarity", subtitle: "Who owns alerts, backups, and DR is explicit." },
    { title: "Honest migration", subtitle: "Phasing and rollback when zero-downtime is not realistic." },
  ],
  seo: {
    primaryKeyword: "cloud services company",
    supportingKeywords: [
      "cloud application development",
      "cloud migration services",
      "cloud support and maintenance",
      "managed cloud services",
    ],
    metaTitle: "Cloud Services | Axonary",
    metaDescription:
      "Cloud application development, migration, and support—with architecture, FinOps, and operations. Axonary.",
  },
  whySectionHeading: "Why Choose Axonary for Cloud Services?",
};

export const cloudGovernanceAppDev: MobileGovernanceCopy = {
  hero: {
    badge: "Cloud-native • PaaS • Containers",
    titleMain: "Cloud Application Development Built for Scale, Security, and Day-Two Operations",
    description:
      "We build and modernize applications on cloud primitives—containers, serverless, managed data, and API gateways—with CI/CD, secrets, and observability as non-negotiables. Vendor features are used where they reduce toil, not where they lock you in blindly.",
    exploreHref: "#cloud-app-architecture",
    cardTitle: "Cloud apps",
    stat1: { value: "CI/CD", label: "From day one" },
    stat2: { value: "SLO-ready", label: "Observability" },
    cardFooter:
      "Share your traffic profile and compliance needs—we propose stack and hosting shape.",
  },
  overview: {
    what:
      "Cloud application development delivers software designed for elastic infrastructure: twelve-factor style boundaries, managed databases and queues, identity integration, automated deployments, and operational dashboards from the first milestone.",
    who: [
      "Startups shipping MVP to production on cloud PaaS",
      "Enterprises containerizing legacy services gradually",
      "Teams needing global edge or multi-region patterns",
    ],
    businessValue:
      "Faster releases and better resilience when deployments are automated and failures are observable—not guessed from user complaints.",
  },
  features: [
    "Service design — APIs, async patterns, idempotency where money moves.",
    "Container & orchestration — Kubernetes or managed PaaS by fit.",
    "Data layer — RDS-class, Cosmos, Firestore—matched to consistency needs.",
    "Auth — OAuth/OIDC, service-to-service credentials.",
    "Pipelines — Build, test, deploy, promotion environments.",
    "Observability — RED/USE style metrics, structured logging.",
    "Performance — Load testing hooks before big launches.",
  ],
  useCases: [
    "API backends for web and mobile",
    "Event-driven processing pipelines",
    "Internal platforms and admin consoles",
    "Batch and scheduled workloads on serverless or workers",
  ],
  processSteps: [
    "Requirements — SLOs, RTO/RPO, compliance.",
    "Spike — Risky integrations proved early.",
    "Implement — Vertical slices with tests.",
    "Harden — Security review, chaos or failure drills.",
    "Launch — Gradual traffic, feature flags.",
    "Iterate — Cost and performance reviews each quarter.",
  ],
  techStackIntro: "AWS, Azure, GCP—aligned to your existing contracts and skills.",
  techStackItems: [
    "Runtime — Node, .NET, Python, Go, Java as your stack dictates.",
    "Data — Postgres, Redis, Kafka-class messaging.",
    "Infra — Terraform + pipeline per environment.",
    "Edge — CDN and WAF where public traffic demands.",
  ],
  whyChoose: [
    { title: "Production mindset", subtitle: "Not a prototype dressed as done." },
    { title: "Security in CI", subtitle: "Dependency and secret scanning in pipeline." },
    { title: "Cost-aware design", subtitle: "Autoscaling and storage tier choices explained." },
    { title: "Handoff clarity", subtitle: "Docs and dashboards your team can own." },
    { title: "Incremental modernization", subtitle: "Strangler patterns when rewrite is too risky." },
  ],
  seo: {
    primaryKeyword: "cloud application development",
    supportingKeywords: ["cloud native development", "AWS application development", "Azure cloud apps", "cloud microservices"],
    metaTitle: "Cloud Application Development Services | Axonary",
    metaDescription:
      "Build cloud-native apps with CI/CD, observability, and secure patterns—AWS, Azure, GCP. Axonary.",
  },
  whySectionHeading: "Why Choose Axonary for Cloud Application Development?",
};

export const cloudGovernanceMigration: MobileGovernanceCopy = {
  hero: {
    badge: "Assessment • Phasing • Cutover",
    titleMain: "Cloud Migration with Honest Sequencing, Validation, and Rollback Thinking",
    description:
      "We assess readiness, choose migration patterns per workload, and execute with testing checkpoints—not a big-bang unless your risk profile truly allows. Downtime and data consistency trade-offs are documented before cutover.",
    exploreHref: "#cloud-migration-assessment",
    cardTitle: "Migration",
    stat1: { value: "Phased", label: "Wave planning" },
    stat2: { value: "Validated", label: "Test before cutover" },
    cardFooter:
      "Bring inventory and constraints—we draft waves, tooling, and validation criteria.",
  },
  overview: {
    what:
      "Cloud migration moves applications, data, and operations from on-premises or other clouds to a target platform—using assessment, wave planning, replication or rebuild strategies, cutover runbooks, and post-migration optimization.",
    who: [
      "Datacenter exit programs",
      "M&A consolidation onto one cloud",
      "Teams modernizing select systems while keeping others on-prem",
    ],
    businessValue:
      "Controlled migration reduces outage risk and surprise dependency breaks; optimization waves capture savings after stability is proven.",
  },
  features: [
    "Discovery — CMDB-style inventory, dependency mapping.",
    "6R strategy — Rehost, replatform, refactor choices per app.",
    "Data movement — DMS-class tools, consistency checks.",
    "Networking — VPN, ExpressRoute, private endpoints.",
    "Testing — Functional, performance, DR drills post-move.",
    "Cutover — Maintenance windows or blue/green where feasible.",
    "FinOps follow-up — Rightsizing after real traffic arrives.",
  ],
  useCases: [
    "VM fleets to IaaS or container platforms",
    "Database lift with managed service targets",
    "Hybrid stretch during long transitions",
    "Decommission planning for legacy hardware",
  ],
  processSteps: [
    "Assess — TCO, complexity, compliance blockers.",
    "Plan — Waves, tooling, RACI.",
    "Pilot — One representative workload end-to-end.",
    "Execute — Migrate, validate, cut over per wave.",
    "Stabilize — Hypercare window with tuned alerts.",
    "Optimize — Reservations, autoscaling, storage tiering.",
  ],
  techStackIntro: "Cloud-native migration services plus common enterprise tools.",
  techStackItems: [
    "AWS MGN, Azure Migrate, GCP Migrate for Compute Engine",
    "Database replication and cutover tooling",
    "IaC to recreate environments reproducibly",
    "Monitoring parity old vs new before switch",
  ],
  whyChoose: [
    { title: "No fantasy cutovers", subtitle: "Downtime and rollback are planned, not hoped away." },
    { title: "Dependency honesty", subtitle: "Hidden integrations surfaced in discovery." },
    { title: "Test evidence", subtitle: "Checklists signed before traffic moves." },
    { title: "Post-migration care", subtitle: "Hypercare and tuning, not a vanishing act." },
    { title: "Cost after landing", subtitle: "Optimization pass once utilization is real." },
  ],
  seo: {
    primaryKeyword: "cloud migration services",
    supportingKeywords: ["AWS migration", "Azure cloud migration", "datacenter migration", "cloud migration consulting"],
    metaTitle: "Cloud Migration Services | Axonary",
    metaDescription:
      "Phased cloud migration: assessment, execution, validation, and optimization—with clear rollback and FinOps follow-through. Axonary.",
  },
  whySectionHeading: "Why Choose Axonary for Cloud Migration?",
};

export const cloudGovernanceSupport: MobileGovernanceCopy = {
  hero: {
    badge: "SRE-style • 24/7 options • FinOps",
    titleMain: "Cloud Support & Maintenance That Keeps Production Predictable and Costs Visible",
    description:
      "We provide monitoring, patching cadence, incident response, and periodic optimization reviews—scoped to your SLOs and business hours needs. Alert noise is treated as a defect; every on-call rotation should know what “fixed” means.",
    exploreHref: "#cloud-support-monitoring",
    cardTitle: "Cloud ops",
    stat1: { value: "SLO-aligned", label: "Response targets" },
    stat2: { value: "Runbooks", label: "Repeatable fixes" },
    cardFooter:
      "Describe current pain: noise, outages, or cost creep—we propose a support tier and improvement backlog.",
  },
  overview: {
    what:
      "Cloud support and maintenance covers proactive monitoring, patching, backup verification, incident management, performance tuning, and advisory reviews—so environments stay secure, available, and cost-aligned with documented responsibilities.",
    who: [
      "Teams without dedicated SRE headcount",
      "Products post-launch needing stable ops",
      "Organizations cleaning up after ad-hoc cloud growth",
    ],
    businessValue:
      "Fewer surprise outages and invoice spikes when someone owns dashboards, patching, and structured incident learning.",
  },
  features: [
    "Monitoring & alerting — SLO-based thresholds, paging policy.",
    "Patching & upgrades — OS, runtime, managed service windows.",
    "Incident response — Severity model, comms templates, RCAs.",
    "Backup & DR testing — Scheduled restore drills.",
    "Performance — DB query review, cache, autoscaling tuning.",
    "Security hygiene — Key rotation, IAM reviews, vuln scanning triage.",
    "Cost reviews — Idle resources, commitment recommendations.",
  ],
  useCases: [
    "Production Kubernetes or PaaS estates",
    "Multi-environment CI/CD maintenance",
    "Seasonal traffic preparation",
    "Compliance evidence for uptime and patching",
  ],
  processSteps: [
    "Onboard — Access, architecture doc, alert inventory.",
    "Baseline — Dashboards, SLOs, noise reduction sprint.",
    "Operate — Routine patching and ticket flow.",
    "Improve — Monthly optimization and risk backlog.",
    "Report — Uptime, incidents, spend trends.",
    "Review — Quarterly roadmap with your stakeholders.",
  ],
  techStackIntro: "Works with your existing cloud accounts and tooling.",
  techStackItems: [
    "Cloud vendor health and metrics APIs",
    "Prometheus/Grafana or cloud-native monitoring",
    "ITSM integration — Jira Service Management, etc.",
    "IaC change tracking for controlled updates",
  ],
  whyChoose: [
    { title: "Alert hygiene", subtitle: "Fewer pages, clearer ownership." },
    { title: "Transparent scope", subtitle: "What we do vs your dev team is explicit." },
    { title: "Incident learning", subtitle: "RCAs feed prevention, not blame." },
    { title: "Cost partnership", subtitle: "FinOps reviews without surprise invoices." },
    { title: "Security cadence", subtitle: "Patching and access reviews on a schedule." },
  ],
  seo: {
    primaryKeyword: "cloud support and maintenance",
    supportingKeywords: ["managed cloud support", "AWS managed services", "Azure support", "cloud SRE"],
    metaTitle: "Cloud Support & Maintenance | Axonary",
    metaDescription:
      "Cloud support: monitoring, incidents, patching, backups, performance, and cost reviews—with clear SLOs. Axonary.",
  },
  whySectionHeading: "Why Choose Axonary for Cloud Support & Maintenance?",
};
