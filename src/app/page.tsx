import { Hero } from "@/components/sections/Hero";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <main className="min-h-full bg-slate-950">
      <Hero />
      <FinalCta />
    </main>
  );
}
