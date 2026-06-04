# SoroSentinel UI Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the SoroSentinel landing page with a horizontal scroll parallax experience for the Solution section and refined visual hierarchy for Hero/Problem sections.

**Architecture:** Use `framer-motion`'s `useScroll` and `useTransform` to map vertical window scroll to horizontal content translation.

**Tech Stack:** React, Tailwind CSS v4, Framer Motion, Lucide React.

---

### Task 1: Refactor Hero Component for Scale & Breathing Room

**Files:**
- Modify: `src/components/Hero.jsx`

- [ ] **Step 1: Reduce Title Scale & Increase Whitespace**
Change `text-[15vw]` to a more controlled `text-[10vw]` or `text-7xl` on larger screens. Adjust tracking and leading.

```jsx
// src/components/Hero.jsx (partial update)
<motion.h1 
  variants={itemVars}
  className="font-display text-7xl md:text-[10vw] leading-[0.9] uppercase tracking-tight"
>
  Accelerating<br />
  <span className="text-accent italic font-light">Tomorrow's</span><br />
  Ideas.
</motion.h1>
```

- [ ] **Step 2: Refine Narrative Content**
Update the hero description to be more specific to SoroSentinel's mission.

```jsx
<p className="max-w-xl text-muted text-xl leading-relaxed">
  Turning blockchain chaos into deterministic tests. SoroSentinel is the 
  resilience layer for Stellar developers, ensuring DApps survive the 
  unpredictable nature of mainnet.
</p>
```

- [ ] **Step 3: Commit changes**
```bash
git add src/components/Hero.jsx
git commit -m "style(hero): refine typography and content for better hierarchy"
```

### Task 2: Implement Horizontal Scroll Foundation in Solution Component

**Files:**
- Modify: `src/components/Solution.jsx`

- [ ] **Step 1: Setup Sticky Scroll Container**
Refactor the `Solution` component to use a tall parent container (`400vh`) and a `sticky` inner container.

```jsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Solution = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-background">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-24 px-24">
          {/* Feature cards will go here */}
        </motion.div>
      </div>
    </section>
  );
};
```

- [ ] **Step 2: Commit initial structure**
```bash
git add src/components/Solution.jsx
git commit -m "feat(solution): implement sticky horizontal scroll foundation"
```

### Task 3: Create Parallax Feature Cards

**Files:**
- Modify: `src/components/Solution.jsx`

- [ ] **Step 1: Define Feature Data & Card Component**
Incorporate the narrative from the spec into cards with parallax background numbers.

```jsx
const features = [
  {
    id: '01',
    title: 'Middleware Chaos Proxy',
    desc: 'The Shield. A Rust-based interception layer sitting between DApp and RPC, mimicking real-world network instability.',
  },
  // ... other features from spec
];

const FeatureCard = ({ feature }) => {
  return (
    <div className="relative w-[80vw] md:w-[600px] shrink-0 group">
      <div className="absolute -top-20 -left-10 text-[20rem] font-display text-white/5 pointer-events-none select-none">
        {feature.id}
      </div>
      <div className="border border-border p-12 bg-background relative z-10">
        <h4 className="text-5xl font-display uppercase mb-8 group-hover:text-accent transition-colors">
          {feature.title}
        </h4>
        <p className="text-xl text-muted leading-relaxed">
          {feature.desc}
        </p>
      </div>
    </div>
  );
};
```

- [ ] **Step 2: Verify Smooth Scroll**
Run `npm run dev` and test scroll behavior.

- [ ] **Step 3: Commit features**
```bash
git add src/components/Solution.jsx
git commit -m "feat(solution): add feature cards with parallax backgrounds"
```

### Task 4: Final Visual Polish & Grid Alignment

**Files:**
- Modify: `src/styles/globals.css`
- Modify: `src/App.jsx`

- [ ] **Step 1: Refine Grid Lines**
Ensure the 12-column grid is subtle and consistent across sections.

- [ ] **Step 2: Add Smooth Scroll to HTML**
```css
html {
  scroll-behavior: smooth;
}
```

- [ ] **Step 3: Final verification**
Run `npm run build` and ensure no warnings.

- [ ] **Step 4: Commit and cleanup**
```bash
git add .
git commit -m "style: final polish and grid alignment for redesign"
```
