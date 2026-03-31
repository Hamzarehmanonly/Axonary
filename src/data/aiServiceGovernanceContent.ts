/** MVC governance copy: Artificial Intelligence hub + Generative AI, NLP, AI Agents. */

import type { MobileGovernanceCopy } from "./mobileServiceGovernanceContent";

export const aiGovernanceHub: MobileGovernanceCopy = {
  hero: {
    badge: "Artificial Intelligence Services",
    titleMain: "Artificial Intelligence Delivery Grounded in Use Cases, Risk, and Measurable Value",
    description:
      "We help you adopt AI responsibly: clear problem framing, data and evaluation discipline, human oversight where stakes are high, and integration paths that fit your stack. Hype-free scoping—what we automate, what we assist, and what stays human is explicit.",
    exploreHref: "#services",
    cardTitle: "AI delivery",
    stat1: { value: "Eval-first", label: "Quality bars" },
    stat2: { value: "Integrated", label: "Your systems" },
    cardFooter:
      "Book an AI discovery to align use cases, data access, compliance touchpoints, and a phased proof path.",
  },
  overview: {
    what:
      "Artificial intelligence services span generative models, language understanding, and agent-style automation—implemented with data pipelines, evaluation, monitoring, safety constraints, and APIs that connect to your products and operations.",
    who: [
      "Product teams augmenting workflows with LLMs or NLP",
      "Enterprises piloting assistants and retrieval systems within policy",
      "Builders exploring agents with tool use under human-defined boundaries",
    ],
    businessValue:
      "AI can reduce manual work and improve response quality when success metrics, data rights, and failure handling are defined—otherwise projects stall on unclear ROI or unacceptable risk.",
  },
  features: [
    "Use-case clarity — Outcomes, constraints, and “good enough” definitions before model talk.",
    "Data & privacy — Access, retention, and PII handling aligned to your policies.",
    "Evaluation — Offline tests, human review loops, and production monitoring hooks.",
    "Integration — APIs, RAG over your corpus, or batch pipelines as appropriate.",
    "Safety & governance — Guardrails, logging, and escalation paths for high-stakes flows.",
    "Cost awareness — Token, GPU, and vendor choices reviewed against traffic.",
    "Roadmap — From pilot to production hardening and retraining cadence.",
  ],
  useCases: [
    "Support copilots — Drafts with citation or human approval gates.",
    "Content & comms — Templated generation with brand and compliance checks.",
    "Search & Q&A — Retrieval-augmented answers over internal docs.",
    "Classification & routing — NLP for tickets, leads, or documents.",
    "Agents — Tool-using workflows with bounded autonomy and audit trails.",
  ],
  processSteps: [
    "Discover — Stakeholders, data inventory, risk class, success metrics.",
    "Prototype — Thin vertical slice with realistic inputs and eval set.",
    "Integrate — Auth, APIs, UI, logging, and fallback UX.",
    "Harden — Load, abuse scenarios, and monitoring dashboards.",
    "Launch — Phased rollout with feedback and incident playbooks.",
    "Operate — Drift checks, cost reviews, model/vendor updates.",
  ],
  techStackIntro: "Illustrative; aligned to your cloud, data estate, and vendor posture.",
  techStackItems: [
    "LLMs & APIs — OpenAI, Anthropic, Azure OpenAI, open-weights where policy allows.",
    "Orchestration — LangChain-class, custom pipelines, or lightweight prompts.",
    "Vector & search — Embeddings stores, hybrid search, access control layers.",
    "MLOps — Experiment tracking, versioning, deployment patterns.",
    "NLP classics — Transformers for classification, NER, sentiment as needed.",
    "Observability — Traces, eval dashboards, feedback capture.",
  ],
  whyChoose: [
    { title: "Outcome-led", subtitle: "We tie work to metrics you can defend internally." },
    { title: "Risk-aware", subtitle: "Human review and guardrails where your domain demands." },
    { title: "Integration focus", subtitle: "Not a demo that ignores your IdP and data silos." },
    { title: "Evaluation habit", subtitle: "Tests and monitors treated as part of the product." },
    { title: "Vendor-neutral thinking", subtitle: "Swap models when cost or capability shifts." },
  ],
  seo: {
    primaryKeyword: "artificial intelligence services",
    supportingKeywords: [
      "generative AI consulting",
      "NLP development services",
      "AI agent development",
      "enterprise AI integration",
    ],
    metaTitle: "Artificial Intelligence Services | Axonary",
    metaDescription:
      "AI services: generative AI, NLP, and agents—with evaluation, integration, and governance. Pragmatic delivery with Axonary.",
  },
  whySectionHeading: "Why Choose Axonary for Artificial Intelligence?",
};

export const aiGovernanceGenerative: MobileGovernanceCopy = {
  hero: {
    badge: "Generative AI • LLMs • Multimodal",
    titleMain: "Generative AI for Assistive Workflows, Content, and Product Features You Can Ship",
    description:
      "We implement generative AI behind clear prompts, retrieval when facts matter, and evaluation so quality does not regress silently. Fine-tuning or RAG is chosen based on data and maintenance appetite—not by default.",
    exploreHref: "#gen-models",
    cardTitle: "Generative AI",
    stat1: { value: "RAG-ready", label: "When facts matter" },
    stat2: { value: "Eval loops", label: "Quality control" },
    cardFooter:
      "Discuss use cases, data sources, and review workflows on a generative AI consultation.",
  },
  overview: {
    what:
      "Generative AI development applies large language and multimodal models to produce text, code, or media—typically via prompting, retrieval augmentation, fine-tuning where justified, API integration, and user-facing experiences with safety and cost controls.",
    who: [
      "Teams adding copilots to internal or customer tools",
      "Marketing and ops exploring scaled drafting with guardrails",
      "Products embedding summarization, extraction, or codegen assists",
    ],
    businessValue:
      "Generative AI can accelerate drafts and support when hallucination risk is bounded and humans stay in the loop for high-stakes outputs.",
  },
  features: [
    "Prompt & tool design — Structured outputs, function calling, and fallbacks.",
    "RAG pipelines — Chunking, embedding, access control on corpora.",
    "Fine-tuning — When proprietary data and ROI justify ongoing training cost.",
    "Content safety — Filters, blocklists, and escalation for sensitive domains.",
    "Cost & latency — Caching, model routing, and batch where applicable.",
    "UX patterns — Streaming, citations, undo, and human edit flows.",
    "Monitoring — Quality signals, user feedback, and regression tests.",
  ],
  useCases: [
    "Support reply drafts with ticket context",
    "Internal doc Q&A over Confluence/SharePoint-class sources",
    "Marketing variant generation with brand linting",
    "Developer assists inside IDEs or CI comments",
  ],
  processSteps: [
    "Scope & risk class — What must never be wrong?",
    "Baseline eval — Golden sets from real inputs.",
    "Build slice — One journey end-to-end.",
    "User test — Trust and edit burden measured.",
    "Scale — Hardening, caching, SLAs.",
    "Operate — Model updates and eval refresh.",
  ],
  techStackIntro: "OpenAI, Anthropic, Azure OpenAI, open models—per your policy.",
  techStackItems: [
    "APIs — Chat completions, embeddings, vision where needed.",
    "Frameworks — Lightweight chains or custom services.",
    "Storage — Vector DB + source-of-truth permissions.",
    "App layers — Next.js/React or backend-for-frontend patterns.",
  ],
  whyChoose: [
    { title: "Fact sensitivity", subtitle: "RAG and citations when stakes are high." },
    { title: "Eval discipline", subtitle: "You see scores, not just demo sparkle." },
    { title: "Product UX", subtitle: "Streaming, errors, and recovery designed in." },
    { title: "Cost transparency", subtitle: "Token and infra estimates upfront." },
    { title: "Governed rollout", subtitle: "Phased exposure with kill switches." },
  ],
  seo: {
    primaryKeyword: "generative AI development",
    supportingKeywords: ["LLM integration", "RAG development", "custom GPT solutions", "AI copilot development"],
    metaTitle: "Generative AI Development Services | Axonary",
    metaDescription:
      "Generative AI: copilots, RAG, integrations, and evaluation—built for real users and policies. Axonary.",
  },
  whySectionHeading: "Why Choose Axonary for Generative AI?",
};

export const aiGovernanceNLP: MobileGovernanceCopy = {
  hero: {
    badge: "NLP • Classification • Understanding",
    titleMain: "Natural Language Processing for Structured Insight from Text at Scale",
    description:
      "We build NLP pipelines for classification, entity extraction, and search— with labeled data strategy, baseline metrics, and production deployment. Classical models or transformers follow fit and maintainability, not buzzwords.",
    exploreHref: "#nlp-sentiment",
    cardTitle: "NLP delivery",
    stat1: { value: "Labeled data", label: "Strategy" },
    stat2: { value: "Production", label: "Serving & drift" },
    cardFooter:
      "Bring sample data and business rules—we will propose modeling approach and evaluation plan.",
  },
  overview: {
    what:
      "Natural language processing turns unstructured text into signals: sentiment, entities, topics, intent, translation, or Q&A—implemented with training or prompt-based methods, batch or real-time inference, and monitoring for drift and bias commensurate with use.",
    who: [
      "CX and ops teams automating triage and tagging",
      "Compliance-adjacent review needing consistent extraction",
      "Global products requiring translation or locale-aware NLP",
    ],
    businessValue:
      "NLP reduces manual reading and speeds routing when labels, edge cases, and human override paths are agreed.",
  },
  features: [
    "Problem framing — Labels, ambiguity, and acceptable error types.",
    "Data pipeline — Annotation guidelines, active learning where useful.",
    "Model selection — Linear baselines to transformers by ROI.",
    "Serving — Batch scoring APIs or streaming inference.",
    "Evaluation — Precision/recall per class, slice analysis.",
    "Operations — Drift detection, retrain triggers, versioning.",
    "Fairness review — Where decisions affect people, within your process.",
  ],
  useCases: [
    "Ticket and email intent routing",
    "Review mining and sentiment dashboards",
    "Contract or form field extraction (scoped)",
    "Multilingual support routing",
  ],
  processSteps: [
    "Discover — Volumes, languages, latency needs.",
    "Label plan — Schema, inter-annotator agreement pilot.",
    "Train & compare — Baselines vs advanced models.",
    "Deploy — API, batch jobs, or embedded scoring.",
    "Monitor — Performance by segment over time.",
    "Improve — Error analysis backlog.",
  ],
  techStackIntro: "spaCy, Hugging Face, cloud NLP APIs—matched to constraints.",
  techStackItems: [
    "Frameworks — PyTorch, HF Transformers, cloud language APIs.",
    "Feature stores & labeling — Human-in-the-loop tooling as needed.",
    "Search — BM25 + dense hybrid patterns.",
    "Infra — GPU inference or serverless by load.",
  ],
  whyChoose: [
    { title: "Baseline honesty", subtitle: "Simple models when they win." },
    { title: "Label quality", subtitle: "Garbage labels are called out early." },
    { title: "Production path", subtitle: "Not a notebook that stops at accuracy." },
    { title: "Explainability hooks", subtitle: "Where your process needs audit trails." },
    { title: "Long-term ownership", subtitle: "Retrain playbooks, not one-off accuracy reports." },
  ],
  seo: {
    primaryKeyword: "natural language processing services",
    supportingKeywords: ["NLP development company", "text classification API", "sentiment analysis development", "named entity recognition"],
    metaTitle: "Natural Language Processing (NLP) Services | Axonary",
    metaDescription:
      "NLP development: classification, NER, sentiment, deployment, and monitoring—grounded in your data. Axonary.",
  },
  whySectionHeading: "Why Choose Axonary for NLP?",
};

export const aiGovernanceAgent: MobileGovernanceCopy = {
  hero: {
    badge: "AI agents • Tools • Oversight",
    titleMain: "AI Agent Development with Bounded Autonomy, Tool Access, and Observable Behavior",
    description:
      "We design agents that call your APIs and tools under explicit policies: allowed actions, rate limits, confirmation steps, and logging. “Fully autonomous” is never assumed where money, data, or safety are on the line.",
    exploreHref: "#agent-design",
    cardTitle: "Agent delivery",
    stat1: { value: "Bounded", label: "Action policies" },
    stat2: { value: "Observable", label: "Traces & logs" },
    cardFooter:
      "Walk through target workflows and risk—we will map agent architecture and human checkpoints.",
  },
  overview: {
    what:
      "AI agent development combines language models with planning, memory, and tool use to execute multi-step tasks—implemented with guardrails, structured outputs, retries, and monitoring so behavior stays within org-defined boundaries.",
    who: [
      "Teams automating internal ops with API-backed steps",
      "Products experimenting with assistant-led workflows",
      "Enterprises requiring audit trails on automated actions",
    ],
    businessValue:
      "Agents can reduce repetitive multi-tool work when each action is authorized, idempotent where possible, and reversible or compensable on failure.",
  },
  features: [
    "Capability design — Tool manifest, schemas, and auth per tool.",
    "Planning & memory — Short-term context vs durable store decisions.",
    "Safety layers — Confirmation, simulation, or sandbox for risky calls.",
    "Reliability — Retries, timeouts, partial failure UX.",
    "Tracing — Step-level logs for debugging and compliance review.",
    "Evaluation — Scenario suites and red-team style prompts.",
    "Human handoff — Escalation when confidence or policy demands.",
  ],
  useCases: [
    "Research and summarization across internal systems",
    "Ops playbooks with approval gates for writes",
    "Sales or support drafts with CRM lookups",
    "Dev workflow assists (read-heavy, scoped writes)",
  ],
  processSteps: [
    "Threat model actions — What can go wrong per tool?",
    "Prototype tool loop — One vertical with mocks then live APIs.",
    "Harden — Rate limits, auth refresh, idempotency keys.",
    "Test — Adversarial and load scenarios.",
    "Launch — Feature flags and sampling.",
    "Govern — Review cadence for new tools and prompts.",
  ],
  techStackIntro: "Composable stacks; security matches your enterprise standards.",
  techStackItems: [
    "Orchestration — Agent frameworks or custom state machines.",
    "Tools — REST/GraphQL connectors with scoped credentials.",
    "LLMs — Same as generative layer, routed by task.",
    "Storage — Conversation and audit logs with retention policy.",
  ],
  whyChoose: [
    { title: "Action governance", subtitle: "Tools are not wide-open by default." },
    { title: "Operable traces", subtitle: "You can answer what the agent did and why." },
    { title: "Failure-aware UX", subtitle: "Users are not stuck in silent loops." },
    { title: "Incremental autonomy", subtitle: "Expand scope as trust builds." },
    { title: "Integration rigor", subtitle: "Real API quirks handled, not demo-only." },
  ],
  seo: {
    primaryKeyword: "AI agent development",
    supportingKeywords: ["autonomous AI agents", "LLM agents enterprise", "AI workflow automation", "tool-using AI"],
    metaTitle: "AI Agent Development Services | Axonary",
    metaDescription:
      "AI agents with tool integration, guardrails, tracing, and human oversight—built for production constraints. Axonary.",
  },
  whySectionHeading: "Why Choose Axonary for AI Agent Development?",
};
