"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ClipboardList,
  CalendarClock,
  PlayCircle,
  FileSearch,
  BarChart3,
  FileInput,
  ClipboardCheck,
  Workflow,
  Gavel,
  Mail,
  CalendarCheck,
  Presentation,
  FileCheck,
  ListChecks,
  FolderOpen,
  Route,
  Scale,
  ShieldCheck,
  ThumbsUp,
  CreditCard,
  RefreshCw,
  FileText,
  type LucideIcon,
} from "lucide-react";

// Exact-match icon per known flow step across all 5 case studies, with a
// generic fallback for any step text not covered here.
const STEP_ICONS: Record<string, LucideIcon> = {
  "Inspection Planning": ClipboardList,
  Scheduling: CalendarClock,
  "Onsite Execution": PlayCircle,
  "Findings & Recommendations": FileSearch,
  Reporting: BarChart3,
  "Complaint Submission": FileInput,
  "Triage & Assignment": ClipboardCheck,
  "Resolution Workflow": Workflow,
  "Committee Escalation": Gavel,
  "KPI Reporting": BarChart3,
  "Meeting Request": Mail,
  "Agenda & Invitations": CalendarCheck,
  "Board Session": Presentation,
  "Decisions & MOM": FileCheck,
  "Action Follow-Up": ListChecks,
  "Case Intake": FolderOpen,
  "Workflow Routing": Route,
  "Decision / Penalty": Scale,
  "Appeal Review": FileSearch,
  "Enforcement Outcome": ShieldCheck,
  "Application Submission": FileInput,
  "Review & Validation": ClipboardCheck,
  "Approval Workflow": ThumbsUp,
  "Payment & Issuance": CreditCard,
  "Renewal Tracking": RefreshCw,
};

function VerticalConnector() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <svg viewBox="0 0 24 40" width="24" height="40" className="text-accent" aria-hidden="true">
      <motion.path
        d="M12 2 C 19 12, 5 28, 12 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="5 5"
        strokeLinecap="round"
        initial={shouldReduceMotion ? false : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />
      <path d="M6 34 L12 40 L18 34 Z" fill="currentColor" />
    </svg>
  );
}

function HorizontalConnector() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <svg viewBox="0 0 48 24" width="48" height="24" className="hidden text-accent lg:block" aria-hidden="true">
      <motion.path
        d="M2 12 C 14 3, 32 21, 40 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="5 5"
        strokeLinecap="round"
        initial={shouldReduceMotion ? false : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />
      <path d="M36 6 L44 12 L36 18 Z" fill="currentColor" />
    </svg>
  );
}

function FlowNode({ step, index }: { step: string; index: number }) {
  const Icon = STEP_ICONS[step] ?? FileText;
  return (
    <div className="relative flex-1 rounded-lg border border-hairline border-l-4 border-l-accent bg-[linear-gradient(135deg,#ffffff,#f3f5f7)] px-4 py-3">
      <span className="absolute -top-2.5 -left-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-white">
        {index + 1}
      </span>
      <div className="flex items-center gap-2 text-sm text-fg">
        <Icon size={16} className="shrink-0 text-accent" aria-hidden="true" />
        {step}
      </div>
    </div>
  );
}

export function ProjectFlow({ steps }: { steps: string[] }) {
  const pairs: [string, string | undefined][] = [];
  for (let i = 0; i < steps.length; i += 2) {
    pairs.push([steps[i], steps[i + 1]]);
  }

  return (
    <div className="w-full rounded-2xl border border-hairline border-t-[rgba(62,107,156,0.15)] bg-raised p-6 sm:p-7">
      <p className="text-[11px] font-medium tracking-wide text-fg-faint uppercase">
        Conceptual System Flow
      </p>

      {/* Mobile / tablet: vertical stack */}
      <ol className="mt-5 flex flex-col items-stretch lg:hidden">
        {steps.map((step, i) => (
          <li key={step}>
            <FlowNode step={step} index={i} />
            {i < steps.length - 1 ? (
              <div className="flex justify-center py-1">
                <VerticalConnector />
              </div>
            ) : null}
          </li>
        ))}
      </ol>

      {/* Desktop: 2-column paired rows, read left-to-right then down */}
      <ol className="mt-5 hidden flex-col items-stretch lg:flex">
        {pairs.map((pair, rowIndex) => (
          <li key={pair[0]}>
            <div className="flex items-center gap-2">
              <FlowNode step={pair[0]} index={rowIndex * 2} />
              {pair[1] ? (
                <>
                  <HorizontalConnector />
                  <FlowNode step={pair[1]} index={rowIndex * 2 + 1} />
                </>
              ) : null}
            </div>
            {rowIndex < pairs.length - 1 ? (
              <div className="flex justify-center py-1">
                <VerticalConnector />
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
