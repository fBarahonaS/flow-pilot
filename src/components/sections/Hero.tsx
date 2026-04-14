"use client";

/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import type { TargetAndTransition } from "framer-motion";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Section } from "./Section";

const buttonMotion = {
  whileHover: { scale: 1.02, y: -1 },
  whileTap: { scale: 0.96 },
  transition: { type: "spring", stiffness: 400, damping: 15 },
} as const;

const iconSlide = {
  whileHover: { x: 3 },
  transition: { type: "spring", stiffness: 400, damping: 15 },
} as const;

function clamp01(v: number) {
  return Math.max(0, Math.min(1, v));
}

function seededHsl(seed: number) {
  const hue = (seed * 47) % 360;
  return `hsl(${hue} 85% 62%)`;
}

interface StatRingProps {
  value: number; // 0..1
  label: string;
  sublabel: string;
}

function StatRing({ value, label, sublabel }: StatRingProps) {
  const v = clamp01(value);
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - v);

  return (
    <div className="flex items-center gap-4">
      <div className="relative grid size-[104px] place-items-center">
        <svg
          className="size-[104px] -rotate-90"
          viewBox="0 0 120 120"
          aria-hidden="true"
        >
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            className="stroke-white/10"
            strokeWidth="10"
          />
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            className="stroke-sky-400/90"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
          />
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          <div className="text-center">
            <div className="text-2xl font-semibold tracking-tight text-white">
              {Math.round(v * 100)}%
            </div>
            <div className="text-[11px] text-white/60">On track</div>
          </div>
        </div>
      </div>
      <div className="min-w-0">
        <div className="text-sm font-medium text-white">{label}</div>
        <div className="text-sm text-white/60">{sublabel}</div>
      </div>
    </div>
  );
}

interface AvatarStackProps {
  names: string[];
}

function AvatarStack({ names }: AvatarStackProps) {
  return (
    <div className="flex items-center">
      <div className="flex -space-x-3">
        {names.slice(0, 4).map((name, idx) => (
          <div
            key={name}
            className="relative grid size-9 place-items-center rounded-full border border-white/15 bg-white/5 shadow-[0_0_0_1px_rgba(0,0,0,0.25)]"
            aria-label={name}
            title={name}
          >
            <div
              className="absolute inset-0 rounded-full opacity-80"
              style={{
                background:
                  "radial-gradient(100% 100% at 30% 25%, rgba(255,255,255,0.20), rgba(255,255,255,0.06))",
              }}
              aria-hidden="true"
            />
            <div
              className="relative grid size-7 place-items-center rounded-full text-xs font-semibold text-slate-900"
              style={{ background: seededHsl(idx + 1) }}
              aria-hidden="true"
            >
              {name
                .split(" ")
                .map((p) => p[0])
                .slice(0, 2)
                .join("")
                .toUpperCase()}
            </div>
          </div>
        ))}
        {names.length > 4 ? (
          <div className="grid size-9 place-items-center rounded-full border border-white/15 bg-white/5 text-xs font-medium text-white/80">
            +{names.length - 4}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-md",
        "shadow-[0_20px_80px_-40px_rgba(0,0,0,0.8)]",
        className ?? "",
      ].join(" ")}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-70"
        style={{
          background:
            "radial-gradient(1200px 500px at 0% 0%, rgba(56,189,248,0.16), transparent 60%), radial-gradient(900px 500px at 90% 20%, rgba(167,139,250,0.14), transparent 55%), radial-gradient(700px 500px at 40% 120%, rgba(34,197,94,0.10), transparent 55%)",
        }}
        aria-hidden="true"
      />
      <div className="relative">{children}</div>
    </div>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
    },
  } as const;

  const mockIn = {
    hidden: { opacity: 0, scale: reduceMotion ? 1 : 0.98 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.34, ease: [0.22, 1, 0.36, 1] },
    },
  } as const;

  const floaty: TargetAndTransition | undefined = reduceMotion
    ? undefined
    : {
        y: [0, -10, 0],
        transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
      };

  return (
    <header className="relative overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute -top-24 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(56,189,248,0.18), transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-40 left-1/2 h-[560px] w-[980px] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(167,139,250,0.16), transparent 70%)",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:26px_26px] opacity-60" />
      </div>

      <Section className="relative py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ staggerChildren: 0.08, delayChildren: 0.05 }}
            className="flex flex-col items-start"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-white/80"
            >
              <Sparkles className="size-4 text-sky-300" aria-hidden="true" />
              <span>FlowPilot preview</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-5 text-balance text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Orchestrate Team Intelligence without the Friction
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-pretty text-base leading-7 text-white/70 sm:text-lg"
            >
              The all-in-one workspace where ideas, tasks, and decisions converge.
              Built for high-velocity teams who refuse to be slowed down.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-7 flex w-full flex-col gap-3 sm:flex-row sm:items-center"
            >
              <motion.a
                href="#get-started"
                {...buttonMotion}
                className={[
                  "inline-flex h-11 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold",
                  "bg-white text-slate-950 shadow-[0_10px_40px_-18px_rgba(255,255,255,0.45)]",
                  "transition-colors duration-150",
                  "hover:bg-white/95 hover:shadow-[0_10px_40px_-12px_rgba(255,255,255,0.3)]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
                ].join(" ")}
              >
                Get Started
                <motion.span aria-hidden="true" {...iconSlide}>
                  <ArrowRight className="size-4" />
                </motion.span>
              </motion.a>

              <motion.a
                href="#watch-demo"
                {...buttonMotion}
                className={[
                  "inline-flex h-11 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold",
                  "border border-white/15 bg-white/[0.04] text-white",
                  "transition-colors duration-150",
                  "hover:bg-white/[0.08]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
                ].join(" ")}
              >
                <motion.span aria-hidden="true" {...iconSlide}>
                  <Play className="size-4" />
                </motion.span>
                Watch Demo
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Visual / Mockup */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            variants={mockIn}
            className="relative"
          >
            {/* Mesh/radial behind bento */}
            <div
              className="pointer-events-none absolute -inset-8 -z-10 rounded-[32px] opacity-90 blur-2xl"
              style={{
                background:
                  "radial-gradient(60% 60% at 35% 25%, rgba(56,189,248,0.22), transparent 70%), radial-gradient(50% 55% at 80% 30%, rgba(167,139,250,0.20), transparent 70%), radial-gradient(50% 60% at 60% 90%, rgba(34,197,94,0.12), transparent 70%)",
              }}
              aria-hidden="true"
            />

            <motion.div animate={floaty} className="relative">
              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="p-5 sm:col-span-2">
                  <div className="flex items-center justify-between">
                    <div className="min-w-0">
                      <div className="text-xs font-medium uppercase tracking-wide text-white/50">
                        Current Project
                      </div>
                      <div className="mt-1 truncate text-base font-semibold text-white">
                        Launch Readiness
                      </div>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-white/70">
                      Updated 2m ago
                    </div>
                  </div>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <StatRing
                      value={0.78}
                      label="Milestones"
                      sublabel="Tracking across teams"
                    />
                    <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-white">
                          Decision log
                        </div>
                        <div className="text-xs text-white/50">Last 24h</div>
                      </div>
                      <ul className="mt-3 space-y-2 text-sm text-white/70">
                        <li className="flex items-center gap-2">
                          <span className="size-1.5 rounded-full bg-sky-400" />
                          Freeze scope for v1
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="size-1.5 rounded-full bg-violet-400" />
                          Approve onboarding flow
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="size-1.5 rounded-full bg-emerald-400" />
                          Ship analytics events
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-5">
                  <div className="text-xs font-medium uppercase tracking-wide text-white/50">
                    Team Availability
                  </div>
                  <div className="mt-1 text-base font-semibold text-white">
                    Today
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="text-sm font-medium text-white/90">
                        Standup window
                      </div>
                      <div className="text-sm text-white/60">10:00–10:15</div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-xs text-white/70">
                      3/5 online
                    </div>
                  </div>
                  <div className="mt-4">
                    <AvatarStack
                      names={[
                        "Ava Chen",
                        "Noah Patel",
                        "Sofia Ramos",
                        "Liam Park",
                        "Maya Singh",
                      ]}
                    />
                  </div>
                </Card>

                <Card className="p-5">
                  <div className="text-xs font-medium uppercase tracking-wide text-white/50">
                    Capture → Align → Ship
                  </div>
                  <div className="mt-2 space-y-3">
                    <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                      <div className="text-sm font-medium text-white">
                        Inbox
                      </div>
                      <div className="mt-1 text-sm text-white/60">
                        Notes, links, and voice snippets—auto-organized.
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                      <div className="text-sm font-medium text-white">
                        Tasks
                      </div>
                      <div className="mt-1 text-sm text-white/60">
                        Turn decisions into work with one click.
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Section>
    </header>
  );
}

