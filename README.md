## FlowPilot: AI-Powered Workspace
    A high-fidelity landing page prototype for FlowPilot, an AI-driven intelligence layer for engineering teams. This project demonstrates senior-level frontend judgment, focusing on performance, accessibility, and high-end micro-interactions.

Live Demo: [Vercel Link](https://vercel.com)

## 🛠 Tech Stack
    - Core: Next.js 15 (App Router), TypeScript.
    - UI: Tailwind CSS v4, Lucide Icons, Framer Motion (where variable-driven animation was required). Used Shadcn/ui (Radix-based) for speed and accessibility in regards to the components.
    - Quality Assurance: Jest, React Testing Library, ESLint.

## 🚀 Technical Highlights
    1. Performance-First Architecture
        - Next.js 15 & React 19: Leveraged the latest App Router for optimal streaming and server-side rendering.
        - Tailwind CSS v4: Utilized the new JIT engine for a zero-runtime CSS footprint.
        - CSS-Native Marquee: Implemented the infinite `SocialTrust` scroll using pure CSS keyframes on the compositor thread, avoiding JS main-thread overhead for a smooth 60fps experience.

    2. Premium UX & Micro-interactions
        - Cinematic Smooth Scroll: Engineered a custom requestAnimationFrame loop with Quadratic Easing. I bypassed the native CSS scroll-behavior to achieve a specifically timed 1.2s duration, providing a "heavy", premium tactile feel.
        - Optical Balance: Social icons are encased in uniform circular wrappers with compound hover states (translation + scale + glassmorphism) to ensure consistent hitboxes and visual hierarchy.

    3. Engineering Rigor & Testing
        Defensive Programming: Implemented strict guard clauses in DOM-dependent functions to prevent runtime crashes during hydration or missing section IDs.
            - Unit Testing: 100% coverage on critical interaction logic using Jest and React Testing Library.
            - Verified asynchronous scroll triggers.
            - Tested security compliance (ensuring rel="noopener noreferrer" on external targets).

## 🧠 Trade-offs & Decisions
    - Abstract vs. Brand Icons: Opted for high-fidelity abstract tech icons in the SocialProof section. This decision was made to maintain visual neutrality and project an "exclusive" product vibe, avoiding the visual clutter of common corporate logos.
    - Client vs. Server Components: Carefully partitioned the Footer and SocialProof as Client Components only where interactivity was required, keeping the core page payload lean.

## 🤖 AI-Assisted Workflow (Vibe Coding)
    - This project was developed using a "Vibe Coding" methodology:
    - Rapid Prototyping: Used AI to generate complex Tailwind layouts and boilerplate.
    - Judgment-Led Refinement: Manually overrode AI outputs for critical logic, such as fixing SSR hydration mismatches and implementing the custom easing functions for the scroll engine.
    - Efficiency: Accelerated the build time to under 5 hours without compromising code quality or architectural standards.

## 🏃 Setup
    - Install dependencies: `npm install`
    - Run development server: `npm run dev`
    - Execute test suite: `npm test`
