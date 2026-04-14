"use client";

import { LazyMotion, m } from "framer-motion";
import { Activity, Network, Sparkles } from "lucide-react";
import { Section } from "./Section";

const loadMotionFeatures = () =>
  import("@/lib/motion-features").then((res) => res.default);

interface FeatureItem {
  title: string;
  copy: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const FEATURES: FeatureItem[] = [
  {
    title: "Context-Aware Graph",
    copy: "Stop chasing threads. Link tasks, docs, and decisions in a single persistent graph.",
    Icon: Network,
  },
  {
    title: "Async Team Intelligence",
    copy: "Automated summaries of team standups and decision logs so you stay in flow.",
    Icon: Sparkles,
  },
  {
    title: "Live Velocity Tracking",
    copy: "Visualize real-time throughput without the overhead of manual reporting.",
    Icon: Activity,
  },
];

const cardBase =
  "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md";

export function Features() {
  return (
    <LazyMotion features={loadMotionFeatures} strict>
      <section id="features" aria-labelledby="features-heading" className="relative">
        <Section className="py-14 sm:py-16 lg:py-20">
          <m.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.34 }}
          >
            <h2
              id="features-heading"
              className="text-pretty text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            >
              Built to keep teams aligned at speed.
            </h2>
            <p className="mt-2 max-w-2xl text-pretty text-sm leading-6 text-white/70 sm:text-base">
              FlowPilot turns scattered work into a shared system—without adding
              process overhead.
            </p>
          </m.div>

          <div className="mt-8 grid gap-4 md:grid-cols-3 md:gap-5">
            {FEATURES.map(({ title, copy, Icon }, idx) => (
              <m.article
                key={title}
                className={[
                  cardBase,
                  "before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:opacity-0 before:transition-opacity before:duration-200",
                  "before:[background:radial-gradient(120%_120%_at_20%_0%,rgba(56,189,248,0.22),transparent_55%),radial-gradient(120%_120%_at_80%_30%,rgba(167,139,250,0.20),transparent_55%)]",
                  "hover:before:opacity-100",
                ].join(" ")}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.34, delay: idx * 0.04 }}
              >
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="grid size-10 place-items-center rounded-xl border border-white/10 bg-black/20 text-white">
                      <Icon className="size-5 text-white/90" aria-hidden="true" />
                    </div>
                    <h3 className="text-base font-semibold text-white">{title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/70">{copy}</p>
                </div>
              </m.article>
            ))}
          </div>
        </Section>
      </section>
    </LazyMotion>
  );
}

