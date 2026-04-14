import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <main className="min-h-full bg-slate-950">
      <Hero />
      <Features />
      <FinalCta />
    </main>
  );
}
