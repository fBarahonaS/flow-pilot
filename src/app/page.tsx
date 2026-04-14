import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { FinalCta } from "@/components/sections/FinalCta";
import { Benefits } from "@/components/sections/Benefits";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-full bg-slate-950">
      <Hero />
      <Features />
      <Benefits />
      <FinalCta />
      <Footer />
    </main>
  );
}
