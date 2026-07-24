"use client";

import { useMemo, useState } from "react";

type Accent = "emerald" | "cyan" | "violet" | "amber";
type Node = { id: string; label: string; detail: string; status: "active" | "complete" | "warning" | "idle"; related: string[]; meta: string };
type Lane = { id: string; label: string; items: string[]; dependsOn: string[] };
export type WorkSystem = {
  title: string; status: string; impact: string; category: string; accent: Accent;
  metrics: { id: string; label: string; value: string; context: string }[]; nodes: Node[]; lanes: Lane[];
  signals: { label: string; state: "active" | "complete" | "warning"; detail: string }[];
  decisions: { path: string; rationale: string; outcome: string; related: string[] }[];
  map: "automation" | "lineage" | "workspace" | "workflow";
};

const accent = {
  emerald: { soft: "border-emerald-300/25 bg-emerald-300/10 text-emerald-100", ring: "focus-visible:ring-emerald-300", text: "text-emerald-300" },
  cyan: { soft: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100", ring: "focus-visible:ring-cyan-300", text: "text-cyan-300" },
  violet: { soft: "border-violet-300/25 bg-violet-300/10 text-violet-100", ring: "focus-visible:ring-violet-300", text: "text-violet-300" },
  amber: { soft: "border-amber-300/25 bg-amber-300/10 text-amber-100", ring: "focus-visible:ring-amber-300", text: "text-amber-300" },
};
const statusClass = { active: "border-sky-300/35 bg-sky-300/10 text-sky-100", complete: "border-emerald-300/35 bg-emerald-300/10 text-emerald-100", warning: "border-amber-300/40 bg-amber-300/10 text-amber-100", idle: "border-white/10 bg-zinc-950/70 text-zinc-300" };

function StatusBadge({ state }: { state: Node["status"] | "active" | "complete" | "warning" }) {
  return <span className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] ${statusClass[state]}`}>{state}</span>;
}
function TopologyNode({ node, selected, related, dimmed, accentName, onSelect }: { node: Node; selected: boolean; related: boolean; dimmed: boolean; accentName: Accent; onSelect: () => void }) {
  return <button type="button" aria-pressed={selected} onClick={onSelect} onFocus={onSelect} className={`group min-h-32 w-full rounded-2xl border p-4 text-left transition motion-safe:duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070b] ${accent[accentName].ring} ${selected ? accent[accentName].soft : related ? "border-white/25 bg-white/[0.07]" : "border-white/10 bg-zinc-950/70"} ${dimmed ? "opacity-35" : "opacity-100"}`}>
    <div className="flex items-start justify-between gap-3"><span className="font-mono text-[11px] text-zinc-500">{node.id}</span><StatusBadge state={node.status} /></div>
    <p className="mt-3 text-sm font-semibold text-white">{node.label}</p><p className="mt-1 text-xs leading-5 text-zinc-400">{node.detail}</p>
  </button>;
}
function MetadataPanel({ work, node, metric }: { work: WorkSystem; node?: Node; metric?: WorkSystem["metrics"][number] }) {
  return <aside className="rounded-3xl border border-white/10 bg-black/25 p-5" aria-live="polite"><p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Selected-state metadata</p>{metric ? <><h4 className="mt-4 text-2xl font-semibold text-white">{metric.label}: {metric.value}</h4><p className="mt-3 text-sm leading-6 text-zinc-400">{metric.context}</p></> : <><h4 className="mt-4 text-2xl font-semibold text-white">{node?.label}</h4><p className="mt-3 text-sm leading-6 text-zinc-400">{node?.meta}</p><div className="mt-4 flex flex-wrap gap-2">{node?.related.map((r) => <span key={r} className={`rounded-full border px-3 py-1 text-xs ${accent[work.accent].soft}`}>{r}</span>)}</div></>}</aside>;
}
function SignalList({ signals }: { signals: WorkSystem["signals"] }) { return <div className="space-y-2">{signals.map(s => <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-3"><div className="flex items-center justify-between gap-3"><span className="text-sm font-medium text-zinc-200">{s.label}</span><StatusBadge state={s.state} /></div><p className="mt-2 text-xs leading-5 text-zinc-500">{s.detail}</p></div>)}</div>; }

export function WorkSystemCard({ work, index }: { work: WorkSystem; index: number }) {
  const [selectedNode, setSelectedNode] = useState(work.nodes[0].id); const [metricId, setMetricId] = useState<string>(); const [decision, setDecision] = useState(0); const [openTradeoff, setOpenTradeoff] = useState(false);
  const node = work.nodes.find(n => n.id === selectedNode) ?? work.nodes[0]; const related = new Set([node.id, ...node.related]); const selectedMetric = work.metrics.find(m => m.id === metricId);
  const activeDecision = work.decisions[decision]; const decisionRelated = useMemo(() => new Set(activeDecision.related), [activeDecision]);
  return <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,.055),rgba(255,255,255,.018))] shadow-2xl shadow-black/30">
    <div className="grid gap-6 border-b border-white/10 bg-zinc-950/90 p-6 sm:p-8 lg:grid-cols-[1.1fr_.9fr]"><div><p className="font-mono text-xs uppercase tracking-[0.28em] text-zinc-500">Systems Console / workspace 0{index + 1}</p><h3 className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">{work.title}</h3><div className="mt-5 flex flex-wrap gap-2">{[work.status, work.category, work.impact].map(item => <span key={item} className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.16em] ${accent[work.accent].soft}`}>{item}</span>)}</div></div>
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">{work.metrics.map(m => <button key={m.id} type="button" onClick={() => setMetricId(m.id)} className={`rounded-2xl border p-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070b] ${accent[work.accent].ring} ${metricId === m.id ? accent[work.accent].soft : "border-white/10 bg-black/25"}`}><p className="text-2xl font-semibold text-white">{m.value}</p><p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-zinc-500">{m.label}</p></button>)}</div></div>
    <div className="grid gap-5 p-6 sm:p-8"><div className="rounded-3xl border border-white/10 bg-black/25 p-5"><div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4"><p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Topology map</p><span className="font-mono text-xs text-zinc-500">{work.map}.prod</span></div><div className="mt-5 overflow-x-auto pb-2" aria-label={`${work.title} relationship map`}><div className="grid min-w-[720px] gap-3 md:min-w-0 md:grid-cols-6">{work.nodes.map((n,i)=><div key={n.id} className="relative"><TopologyNode node={n} selected={n.id===node.id} related={related.has(n.id) || decisionRelated.has(n.id)} dimmed={openTradeoff && !decisionRelated.has(n.id)} accentName={work.accent} onSelect={()=>{setSelectedNode(n.id); setMetricId(undefined);}} />{i<work.nodes.length-1?<span className={`absolute -right-2 top-1/2 hidden md:block ${related.has(n.id) ? accent[work.accent].text : "text-zinc-700"}`}>→</span>:null}</div>)}</div></div></div>
    <div className="grid gap-5 lg:grid-cols-[1fr_.82fr]"><div className="grid gap-3 md:grid-cols-3">{work.lanes.map(l => <button type="button" key={l.id} onClick={()=>setSelectedNode(l.dependsOn[0])} className={`rounded-3xl border p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070b] ${accent[work.accent].ring} ${l.dependsOn.includes(node.id)?"border-white/25 bg-white/[0.06]":"border-white/10 bg-zinc-950/60"}`}><p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{l.label}</p><div className="mt-4 space-y-2">{l.items.map(item=><div key={item} className="rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-zinc-300">{item}</div>)}</div></button>)}</div><div className="grid gap-4"><MetadataPanel work={work} node={node} metric={selectedMetric}/><div className="rounded-3xl border border-white/10 bg-black/20 p-5"><p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Operating signals</p><div className="mt-4"><SignalList signals={work.signals}/></div></div></div></div>
    <details className="rounded-3xl border border-white/10 bg-zinc-950/60 p-5" onToggle={(e)=>setOpenTradeoff((e.currentTarget as HTMLDetailsElement).open)}><summary className={`cursor-pointer list-none text-sm font-semibold ${accent[work.accent].text} focus-visible:outline-none`}>Expandable reasoning panel: decision paths, rationale, outcomes</summary><div className="mt-4 grid gap-4 lg:grid-cols-[.75fr_1.25fr]"><div className="space-y-2">{work.decisions.map((d,i)=><button key={d.path} type="button" onClick={()=>setDecision(i)} className={`w-full rounded-2xl border p-3 text-left text-sm focus-visible:outline-none focus-visible:ring-2 ${decision===i?accent[work.accent].soft:"border-white/10 bg-white/[0.03] text-zinc-300"}`}>{d.path}</button>)}</div><div className="rounded-2xl border border-white/10 bg-black/25 p-4"><p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Rationale</p><p className="mt-2 text-sm leading-6 text-zinc-300">{activeDecision.rationale}</p><p className="mt-4 text-xs uppercase tracking-[0.18em] text-zinc-500">Outcome</p><p className="mt-2 text-sm leading-6 text-zinc-300">{activeDecision.outcome}</p></div></div></details></div></article>;
}
