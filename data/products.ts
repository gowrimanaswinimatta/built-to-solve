export type Product = {
  slug: string; title: string; positioning: string; summary: string; focus: string; outcome: string; capabilities: string[]; context: string; problem: string; constraints: string[]; approach: string[]; workflow: string[]; decisions: string[]; lessons: string[];
};

export const products: Product[] = [
  {
    slug: "decision-intelligence-platform",
    title: "Decision Intelligence Platform",
    positioning: "Enterprise analytics platform enabling executive decision-making through unified reporting.",
    summary: "A trusted decision layer that reconciles fragmented reporting, clarifies KPI definitions, and supports self-service analysis.",
    focus: "Unified reporting, governed KPIs, executive visibility",
    outcome: "More consistent decision support through shared definitions and clearer operating views.",
    capabilities: ["Data modeling", "Self-service BI", "Executive reporting", "Governed metrics", "Stakeholder alignment"],
    context: "Business teams often make decisions from reports created for different purposes, timelines, and definitions.",
    problem: "Fragmented reporting and conflicting KPI definitions made it difficult to identify one reliable view of performance.",
    constraints: ["Preserve trust while consolidating definitions", "Support executive summaries and deeper analysis", "Keep sensitive business logic understandable and maintainable"],
    approach: ["Mapped the decisions the platform needed to support before modeling data.", "Defined a unified metric layer with clear ownership and interpretation.", "Designed reporting paths for both executive visibility and team-level investigation."],
    workflow: ["Source signals", "Metric definitions", "Decision layer", "Executive views", "Self-service analysis"],
    decisions: ["Prioritized shared definitions over dashboard volume.", "Separated source complexity from user-facing views.", "Made metric context visible so teams could understand what changed and why."],
    lessons: ["Clarity is a system feature, not a presentation detail.", "Executive trust depends on consistent definitions and traceable logic."],
  },
  {
    slug: "pricing-automation-engine",
    title: "Pricing Automation Engine",
    positioning: "Automation platform reducing manual effort through intelligent workflows.",
    summary: "A rules-driven workflow that validates inputs, handles exceptions, and reduces repetitive operational effort.",
    focus: "Workflow automation, validation, exception handling",
    outcome: "Supported a 40% reduction in manual effort by moving repeatable work into reliable automation paths.",
    capabilities: ["Python", "SQL", "Process automation", "Validation rules", "Operational reliability"],
    context: "Pricing operations can require repetitive checks, manual updates, and careful review to prevent downstream errors.",
    problem: "Manual repetitive workflows increased cycle time and made consistency dependent on individual effort.",
    constraints: ["Automate without hiding business rules", "Keep exceptions reviewable", "Design for reliability rather than one-off speed"],
    approach: ["Identified repeatable rules and separated them from true judgment calls.", "Built validation and exception paths to keep risky cases visible.", "Designed outputs that operators could trust, review, and act on."],
    workflow: ["Inputs", "Rules", "Validation", "Automation", "Exception review", "Operational output"],
    decisions: ["Used explicit rules where consistency mattered most.", "Kept human review for exceptions instead of over-automating ambiguous cases.", "Designed reliability checks as part of the core workflow."],
    lessons: ["Good automation reduces effort without reducing accountability.", "Exception design is where workflow products earn trust."],
  },
  {
    slug: "executive-insights-platform",
    title: "Executive Insights Platform",
    positioning: "Self-service BI platform delivering operational visibility across business teams.",
    summary: "A governed insights environment that turns scattered operational data into executive and team-level dashboards.",
    focus: "Operational visibility, dashboard systems, data modeling",
    outcome: "Faster decision support through modeled data, governed metrics, and accessible reporting experiences.",
    capabilities: ["AWS", "Redshift", "ETL", "Power BI", "Tableau", "QuickSight", "Data modeling"],
    context: "Operational leaders need fast visibility, but source data often lives across systems with uneven quality and context.",
    problem: "Scattered operational data slowed analysis and made recurring performance questions harder to answer consistently.",
    constraints: ["Serve leaders and business teams from the same foundation", "Balance detail with readability", "Avoid unsupported claims and opaque calculations"],
    approach: ["Modeled operational data around recurring business questions.", "Created governed metrics with clear dashboard experiences for different audiences.", "Built views that could move from summary to root-cause exploration."],
    workflow: ["Operational data", "ETL", "Modeled metrics", "Dashboards", "Decision support"],
    decisions: ["Designed for decision paths, not static report lists.", "Used governed metric definitions to reduce reconciliation work.", "Kept interfaces clear enough for non-technical stakeholders."],
    lessons: ["Dashboards work best when they are part of a decision system.", "Self-service requires governance, not just access."],
  },
];

export const getProduct = (slug: string) => products.find((product) => product.slug === slug);
