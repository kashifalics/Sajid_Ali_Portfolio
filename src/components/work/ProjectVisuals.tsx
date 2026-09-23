"use client";

import { motion } from "framer-motion";
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
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";
import { cn } from "@/lib/utils";

// Shared across all five visuals below — exact-match icon per known flow
// step across all 5 case studies, with a generic fallback for anything not
// covered here.
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

type VisualProps = { steps: string[] };

// 1. E-Inspection — a vertical process timeline, alternating left/right,
// rather than a stack of identical boxes.
export function InspectionTimeline({ steps }: VisualProps) {
  const shouldReduceMotion = useSafeReducedMotion();
  return (
    <div className="w-full rounded-2xl border border-hairline bg-raised p-6 sm:p-7">
      <p className="text-[11px] font-medium tracking-wide text-fg-faint uppercase">
        Process Timeline
      </p>
      <ol className="mt-6 flex flex-col">
        {steps.map((step, i) => {
          const Icon = STEP_ICONS[step] ?? FileText;
          const reversed = i % 2 === 1;
          return (
            <li key={step}>
              <div className={cn("flex items-center gap-3", reversed && "flex-row-reverse")}>
                <motion.span
                  initial={shouldReduceMotion ? false : { scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-raised text-[11px] font-bold text-accent"
                >
                  {i + 1}
                </motion.span>
                <div
                  className={cn(
                    "flex flex-1 items-center gap-2 rounded-lg border border-hairline bg-surface px-3.5 py-2.5",
                    reversed && "flex-row-reverse text-right"
                  )}
                >
                  <Icon size={15} className="shrink-0 text-accent-2" aria-hidden="true" />
                  <span className="text-sm font-medium text-fg">{step}</span>
                </div>
              </div>
              {i < steps.length - 1 ? (
                <div className="ml-3.5 h-6 w-px bg-hairline-strong" aria-hidden="true" />
              ) : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

// 2. E-Complaint — a horizontal wrapping pipeline of chips joined by
// arrows, instead of a vertical stack.
export function ComplaintPipeline({ steps }: VisualProps) {
  const shouldReduceMotion = useSafeReducedMotion();
  return (
    <div className="w-full rounded-2xl border border-hairline bg-raised p-6 sm:p-7">
      <p className="text-[11px] font-medium tracking-wide text-fg-faint uppercase">
        Complaint Pipeline
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-y-5">
        {steps.map((step, i) => {
          const Icon = STEP_ICONS[step] ?? FileText;
          return (
            <div key={step} className="flex items-center">
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex w-[104px] flex-col items-center gap-2 rounded-xl border border-hairline bg-surface px-3 py-3.5 text-center sm:w-[118px]"
              >
                <Icon size={18} className="text-accent" aria-hidden="true" />
                <span className="text-xs leading-tight font-semibold text-fg">{step}</span>
              </motion.div>
              {i < steps.length - 1 ? (
                <ArrowRight
                  size={14}
                  className="mx-1 shrink-0 text-fg-faint"
                  aria-hidden="true"
                />
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// 3. Meeting Management — three inputs converging into a central hub, then
// a simple numbered list of what follows the meeting itself.
export function MeetingHub({ steps }: VisualProps) {
  const shouldReduceMotion = useSafeReducedMotion();
  const inputs = steps.slice(0, 3);
  const hubStep = steps[3];
  const afterHub = steps.slice(4);
  const HubIcon = STEP_ICONS[hubStep] ?? Presentation;

  return (
    <div className="w-full rounded-2xl border border-hairline bg-raised p-6 sm:p-7">
      <p className="text-[11px] font-medium tracking-wide text-fg-faint uppercase">
        Meeting Lifecycle
      </p>

      <div className="mt-6 grid grid-cols-3 gap-2.5">
        {inputs.map((step, i) => {
          const Icon = STEP_ICONS[step] ?? FileText;
          return (
            <motion.div
              key={step}
              initial={shouldReduceMotion ? false : { opacity: 0, y: -6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center gap-1.5 rounded-lg border border-hairline bg-surface px-2 py-2.5 text-center"
            >
              <Icon size={15} className="text-accent-2" aria-hidden="true" />
              <span className="text-[11px] font-medium text-fg">{step}</span>
            </motion.div>
          );
        })}
      </div>

      <div className="mx-auto mt-3 h-6 w-px bg-hairline-strong" aria-hidden="true" />

      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent bg-accent-3">
        <HubIcon size={20} className="text-accent" aria-hidden="true" />
      </div>
      <p className="mt-2 text-center text-xs font-semibold text-fg">{hubStep}</p>

      <div className="mx-auto mt-3 h-6 w-px bg-hairline-strong" aria-hidden="true" />

      <ol className="mx-auto mt-1 flex max-w-xs flex-col gap-3">
        {afterHub.map((step, i) => {
          const Icon = STEP_ICONS[step] ?? FileText;
          return (
            <li key={step} className="flex items-center gap-2.5 text-sm text-fg">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-3 text-[10px] font-bold text-accent">
                {i + 1}
              </span>
              <Icon size={14} className="shrink-0 text-accent-2" aria-hidden="true" />
              {step}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

// 4. Follow-up & Enforcement — four case types with no fixed order, shown
// as a quadrant around a shared center rather than a numbered sequence.
export function EnforcementQuadrant({ steps }: VisualProps) {
  const shouldReduceMotion = useSafeReducedMotion();
  return (
    <div className="w-full rounded-2xl border border-hairline bg-raised p-6 sm:p-7">
      <p className="text-[11px] font-medium tracking-wide text-fg-faint uppercase">
        Case Types
      </p>
      <div className="relative mx-auto mt-6 grid max-w-sm grid-cols-2 gap-3">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent bg-accent-3"
        />
        {steps.map((step, i) => {
          const Icon = STEP_ICONS[step] ?? FileText;
          return (
            <motion.div
              key={step}
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center gap-2 rounded-lg border border-hairline bg-surface px-3 py-4 text-center"
            >
              <Icon size={17} className="text-accent-2" aria-hidden="true" />
              <span className="text-xs font-semibold text-fg">{step}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

const PENTAGON_POSITIONS = [
  { left: "50%", top: "6%" },
  { left: "91%", top: "36%" },
  { left: "75%", top: "86%" },
  { left: "25%", top: "86%" },
  { left: "9%", top: "36%" },
];

// 5. License & Registration — steps arranged on a ring with a slow
// orbiting marker, standing in for the renewal cycle rather than a
// one-way list.
export function LicenseCycle({ steps }: VisualProps) {
  const shouldReduceMotion = useSafeReducedMotion();
  return (
    <div className="w-full rounded-2xl border border-hairline bg-raised p-6 sm:p-7">
      <p className="text-[11px] font-medium tracking-wide text-fg-faint uppercase">
        Renewal Cycle
      </p>
      <div className="relative mx-auto mt-6 aspect-square w-full max-w-[280px]">
        <div
          className="absolute inset-[8%] rounded-full border border-dashed border-hairline-strong"
          aria-hidden="true"
        />
        <motion.div
          aria-hidden="true"
          className="absolute inset-[8%]"
          style={{ transformOrigin: "50% 50%" }}
          animate={shouldReduceMotion ? undefined : { rotate: 360 }}
          transition={
            shouldReduceMotion ? undefined : { duration: 9, repeat: Infinity, ease: "linear" }
          }
        >
          <span className="absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-2 shadow-[0_0_8px_1px_rgba(56,189,248,0.5)]" />
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center">
          <RefreshCw size={22} className="text-accent" aria-hidden="true" />
        </div>

        {steps.map((step, i) => {
          const Icon = STEP_ICONS[step] ?? FileText;
          const pos = PENTAGON_POSITIONS[i % PENTAGON_POSITIONS.length];
          return (
            <motion.div
              key={step}
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 text-center"
              style={pos}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-accent bg-raised text-accent">
                <Icon size={15} aria-hidden="true" />
              </span>
              <span className="w-20 text-[10.5px] leading-tight font-medium text-fg">
                {step}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export const PROJECT_VISUALS: Record<string, (props: VisualProps) => React.JSX.Element> = {
  "e-inspection": InspectionTimeline,
  "e-complaint": ComplaintPipeline,
  "meeting-management": MeetingHub,
  "follow-up-enforcement": EnforcementQuadrant,
  "license-registration": LicenseCycle,
};
