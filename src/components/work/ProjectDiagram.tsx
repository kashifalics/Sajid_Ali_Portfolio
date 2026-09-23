"use client";

import { motion } from "framer-motion";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";
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
  Users,
  DoorOpen,
  ListChecks,
  Presentation,
  FileCheck,
  ListTodo,
  ShieldAlert,
  Ban,
  FileQuestion,
  ThumbsUp,
  CreditCard,
  RefreshCw,
  FileText,
  type LucideIcon,
} from "lucide-react";
import type { FlowShape } from "@/data/projects";

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
  Members: Users,
  Rooms: DoorOpen,
  Agenda: ListChecks,
  Meeting: Presentation,
  Minutes: FileCheck,
  Recommendations: FileText,
  "Action Follow-Up": ListTodo,
  "Court Decision": Gavel,
  Penalty: ShieldAlert,
  "Cancellation Request": Ban,
  "Appeal Request": FileQuestion,
  "Application Submission": FileInput,
  "Review & Validation": ClipboardCheck,
  "Approval Workflow": ThumbsUp,
  "Payment & Issuance": CreditCard,
  "Renewal Tracking": RefreshCw,
};

function StepNode({ step, index }: { step: string; index: number }) {
  const Icon = STEP_ICONS[step] ?? FileText;
  return (
    <div className="relative flex-1 rounded-lg border border-hairline border-l-4 border-l-accent bg-gradient-to-br from-surface to-raised px-4 py-3">
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

function VerticalConnector() {
  const shouldReduceMotion = useSafeReducedMotion();
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

function LinearDiagram({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-col items-stretch">
      {steps.map((step, i) => (
        <li key={step}>
          <StepNode step={step} index={i} />
          {i < steps.length - 1 ? (
            <div className="flex justify-center py-1.5">
              <VerticalConnector />
            </div>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

function ConvergingDiagram({ steps }: { steps: string[] }) {
  // First 3 steps are the converging inputs (e.g. Members + Rooms + Agenda);
  // the rest continue as a single linear chain below.
  const inputs = steps.slice(0, 3);
  const rest = steps.slice(3);

  return (
    <div>
      <p className="mb-2.5 text-[11px] font-medium tracking-wide text-fg-faint uppercase">
        Inputs
      </p>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        {inputs.map((step, i) => (
          <StepNode key={step} step={step} index={i} />
        ))}
      </div>
      <div className="flex justify-center py-1.5">
        <VerticalConnector />
      </div>
      <ol className="flex flex-col items-stretch">
        {rest.map((step, i) => (
          <li key={step}>
            <StepNode step={step} index={i + 3} />
            {i < rest.length - 1 ? (
              <div className="flex justify-center py-1.5">
                <VerticalConnector />
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

function BranchingDiagram({ steps }: { steps: string[] }) {
  // Steps here are parallel case types with no fixed sequence — fan out
  // from a single point rather than implying an order that doesn't exist.
  return (
    <div>
      <p className="mb-2.5 text-[11px] font-medium tracking-wide text-fg-faint uppercase">
        Case Types
      </p>
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {steps.map((step, i) => (
          <StepNode key={step} step={step} index={i} />
        ))}
      </div>
    </div>
  );
}

export function ProjectDiagram({ steps, shape }: { steps: string[]; shape: FlowShape }) {
  return (
    <div className="w-full rounded-2xl border border-hairline border-t-[rgba(37,99,235,0.15)] bg-raised p-6 sm:p-7">
      <p className="text-[11px] font-medium tracking-wide text-fg-faint uppercase">
        System Flow
      </p>
      <div className="mt-5">
        {shape === "converging" ? (
          <ConvergingDiagram steps={steps} />
        ) : shape === "branching" ? (
          <BranchingDiagram steps={steps} />
        ) : (
          <LinearDiagram steps={steps} />
        )}
      </div>
    </div>
  );
}
