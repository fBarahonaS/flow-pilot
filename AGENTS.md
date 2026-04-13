# FlowPilot Agent Instructions


## Role & Context
You are an expert Senior Frontend Engineer. We are building a mobile-first, responsive landing page for "FlowPilot," an AI-powered workspace that helps teams organize ideas, tasks, and decisions in one place. This landing page is going to be used to present the concept to internal stakeholders and validate interest in the product, so the goal is a high-fidelity, polished, and modern prototype that demonstrates senior-level judgment.


## Required Sections for "FlowPilot" Landing Page
The landing page must contain all of the following section, in the sma eorder as listed and having in consideration their descriptions:

1. **Hero Section:** A CSS-only abstract UI mockup, must include Product name, headline, short supporting text, primary CTA, secondary action, visual area for a mockup or UI preview.
2. **Features Section:** Must have 3 feature blocks, which must be organised in 3 columns, explaining core product value.
3. **Benefits Section:** Clear and concise, explaing (focusing on the outcome and the final user's value) of how the product helps users or teams work better.
4. **Social Section:** A responsive grid or a marquee/carousel with the title "Who trust us?", here you must display 5 different high-level international brands and their logos. Ensure it includes a "pause-on-hover" feature.
5. **Final CTA Section:** A closing section with a nice button, encouraging "Schedule a Demo".
6. **Footer Section:** Clean footer with basic navigation, must have logos for Facebook and Instragram a link to scroll up to the Hero Section and copyright text.


## Technical Stack
- **Framework / Language:** Next.js, React 19, TypeScript.
- **Testing:** Jest.
- **Versioning:** Github.
- **Styling:** Tailwind CSS (Mobile-first, responsive).
- **Animations:** Framer Motion (Subtle, intentional micro-interactions).
- **Components:** Shadcn/ui (Radix-based) for speed and accessibility.
- **Icons:** Lucide React.


## Coding Standards - *Important!*
1. **TypeScript:**
    - Use strict typing. Prefer interfaces for component props. Avoid `any`.
2. **Atomic Constraint:**
    - Create a Section wrapper component that handles standard padding and width constraints across the Hero, Features, Benefits, Social and Footer sections to ensure visual consistency.
3. **Component Structure:**
    - Use the `src/components` directory.
    - Separate "Section" components (e.g., `Hero.tsx`, `Features.tsx`, `Benefits.tsx`, `Social.tsx`, `FinalCta.tsx`, `Footer.tsx`) from "UI" primitives / reusables such as buttons, containers, forms. Use `src/components/sections` for the 6 required blocks and `src/components/ui` for Shadcn primitives.
4. **Clean Code:**
    - No generic filler text; avoid corporate buzzwords like "synergy", "revolutionize", or "next-generation". Use direct, benefit-driven language focused on saving time and reducing cognitive load. All of the copy within landing page must be persuasive and product-focused.
    - Ensure semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`). Use the header tag to wrap the top-level "FlowPilot" logo. Use the nav tag inside the footer for its internal links.
5. **Testing Requirement:**
    - Must create the following test-cases and place them as their component's sibling. 
    - Create a basic Jest scaffold test to ensure the app renders without crashing. For this; create `page.test.tsx` as a sibling to the root `page.tsx`.
    - Create a snapshot test for the Hero component to demonstrate visual regression awareness.
    - Write a "Happy Path" test for the "Schedule a Demo" button in the Final CTA—checking that it’s clickable or has the correct href.
6. **Interactivity:**
   - All buttons must have hover/active states.
   - Implement reveal animations for sections using Framer Motion (duration < 0.4s).
7. **Responsiveness:**
    - Use Tailwind's `sm`, `md`, `lg`, and `xl` breakpoints consistently.


## Visual Identity
- **Vibe:** Modern-minimalist, high-tech, trustworthy (think Linear, Vercel, or Raycast).
- **Hierarchy:** Strong contrast for Primary CTAs. Clear typography scaling.