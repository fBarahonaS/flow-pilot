"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Network, GanttChart } from "lucide-react";
import { Section } from "./Section";

const benefits = [
  {
    title: "Reclaim Focused Engineering Time",
    description: "Reduce context-switching by 40%. FlowPilot manages the state of your projects so your engineers can stay in the zone.",
    glowColor: "rgba(37, 99, 235, 0.3)",
    Icon: BrainCircuit,
  },
  {
    title: "Eliminate Knowledge Silos",
    description: "Instant onboarding for new hires. Our persistent graph ensures that every decision and its context is searchable from day one.",
    glowColor: "rgba(147, 51, 234, 0.3)",
    Icon: Network,
  },
  {
    title: "Predictable Delivery Cycles",
    description: "Stop guessing ship dates. Leverage real-time velocity data to forecast releases with 95% accuracy.",
    glowColor: "rgba(16, 185, 129, 0.3)",
    Icon: GanttChart,
  },
];

export function Benefits() {
  return (
    <Section className="py-24">
      <div className="flex flex-col gap-20 md:gap-32">
        {benefits.map(({ title, description, glowColor, Icon }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`flex flex-col md:flex-row items-center gap-12 md:gap-16 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                {title}
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed">
                {description}
              </p>
            </div>

            <div className="flex-1 w-full aspect-[4/3] sm:aspect-video rounded-3xl border border-white/10 relative overflow-hidden bg-slate-950 shadow-2xl group">
              
              <div 
                className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110 opacity-50 blur-3xl"
                style={{ backgroundImage: `radial-gradient(circle at 50% 50%, ${glowColor}, transparent 70%)` }} 
              />

              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="relative flex items-center justify-center w-full h-full">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10"
                  >
                    <Icon 
                      className="w-14 h-14 md:w-20 md:h-20 text-white filter drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
                      strokeWidth={1.2}
                    />
                  </motion.div>

                  {index === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      {[1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                          transition={{ duration: 4, delay: i * 2, repeat: Infinity }}
                          className="absolute rounded-full border border-white/20"
                          style={{ width: `${40 + i * 20}%`, aspectRatio: "1/1" }}
                        />
                      ))}
                    </div>
                  )}

                  {index === 1 && (
                    <div className="absolute inset-0 opacity-20">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{ opacity: [0.2, 0.5, 0.2] }}
                          transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                          className="absolute size-2 bg-white rounded-full"
                          style={{ 
                            top: `${20 + (i * 15) % 60}%`, 
                            left: `${20 + (i * 23) % 60}%` 
                          }}
                        />
                      ))}
                    </div>
                  )}

                  {index === 2 && (
                    <div className="absolute inset-0 flex items-end justify-center gap-2 px-12 pb-12 opacity-30">
                      {[0.4, 0.8, 0.6, 0.9, 0.5].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h * 100}%` }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className="w-2 md:w-3 bg-white rounded-full"
                        />
                      ))}
                    </div>
                  )}

                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
