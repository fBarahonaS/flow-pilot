import { ArrowRight } from "lucide-react";
import { Section } from "./Section";

export function FinalCta() {
  return (
    <section aria-labelledby="final-cta-heading" className="relative">
      <Section className="py-14 sm:py-16 lg:py-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md sm:p-8">
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(70% 70% at 20% 20%, rgba(56,189,248,0.16), transparent 65%), radial-gradient(60% 60% at 80% 30%, rgba(167,139,250,0.14), transparent 65%)",
            }}
            aria-hidden="true"
          />

          <div className="relative flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <h2
                id="final-cta-heading"
                className="text-pretty text-2xl font-semibold tracking-tight text-white sm:text-3xl"
              >
                See FlowPilot in action.
              </h2>
              <p className="mt-2 max-w-xl text-pretty text-sm leading-6 text-white/65 sm:text-base">
                Get a guided walkthrough tailored to your team’s workflow—no
                slides, just the product.
              </p>
            </div>

            <a
              href="#schedule-demo"
              className={[
                "inline-flex h-11 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold",
                "bg-white text-slate-950 shadow-[0_10px_40px_-18px_rgba(255,255,255,0.45)]",
                "transition-transform transition-colors duration-150",
                "hover:bg-white/95 active:scale-[0.98]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
              ].join(" ")}
            >
              Schedule a Demo
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Section>
    </section>
  );
}

