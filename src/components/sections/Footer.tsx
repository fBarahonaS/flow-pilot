"use client";

import { X, Globe, Terminal, Command } from "lucide-react";

const navigation = {
  product: [
    { name: "About Us", href: "hero" },
    { name: "Features", href: "features" },
    { name: "Benefits", href: "benefits" },
  ],
  social: [
    { name: "GitHub", href: "https://github.com/fBarahonaS/flow-pilot", icon: Terminal },
    { name: "X", href: "https://x.com/reactjs", icon: X },
    { name: "Website", href: "https://react.dev/blog/2024/12/05/react-19", icon: Globe },
  ],
};

export function Footer() {
  const slowScroll = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.scrollY - 100;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const duration = 1200; 
    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t: number, b: number, c: number, d: number) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  };

  return (
    <footer className="border-t border-white/5 bg-slate-950 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-12 pb-12 border-b border-white/5">
          
          <div className="space-y-4 max-w-xs flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 text-white font-bold text-xl">
              <div className="size-8 rounded-lg bg-white flex items-center justify-center">
                <Command className="size-5 text-slate-950" />
              </div>
              <span>FlowPilot</span>
            </div>
            <p className="text-slate-400 text-sm">
              The persistent intelligence layer for engineering teams.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-2">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <button 
                    onClick={() => slowScroll(item.href)}
                    className="text-slate-400 text-sm hover:text-white transition-colors cursor-pointer"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            {navigation.social.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center size-10 rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:-translate-y-1"
              >
                <item.icon className="size-4 text-slate-400 transition-colors duration-300 group-hover:text-white" />
                <span className="sr-only">{item.name}</span>
              </a>
            ))}
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-1 text-[10px] text-slate-600 uppercase tracking-[0.2em] text-center md:text-right">
            <p>© 2026 FlowPilot Inc.</p>
            <p>Precision Engineered in Bogotá by Francisco Barahona Sarmiento</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
