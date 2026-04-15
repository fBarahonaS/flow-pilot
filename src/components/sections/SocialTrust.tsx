"use client";

import { Cpu, Layers, Box, Zap, Shield, Globe, Command } from "lucide-react";

const brands = [
  { name: "NeuralCompute", icon: Cpu },
  { name: "StackLayer", icon: Layers },
  { name: "CoreEngine", icon: Box },
  { name: "HyperFlux", icon: Zap },
  { name: "SecureNode", icon: Shield },
  { name: "GlobalNet", icon: Globe },
  { name: "FlowCmd", icon: Command },
];

export function SocialTrust() {
  return (
    <section className="py-20 border-y border-white/5 bg-slate-950/50 overflow-hidden relative">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />

      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-center text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em]">
          Powering the next generation of engineering
        </h2>
      </div>

      <div className="relative flex overflow-hidden group">
        <div 
          className="flex whitespace-nowrap gap-16 md:gap-32 items-center [animation:marquee_40s_linear_infinite] hover:[animation-play-state:paused]"
          style={{ width: "max-content" }}
        >
          {[...brands, ...brands].map((brand, i) => (
            <div 
              key={i} 
              className="flex items-center gap-3 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default"
            >
              <brand.icon className="size-6 md:size-8 text-white" />
              <span className="text-white font-bold text-lg md:text-xl tracking-tight">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
