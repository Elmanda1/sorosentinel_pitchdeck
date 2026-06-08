# Business Expansion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement Pricing and Contact sections and connect all navigation links for a fully functional business site.

**Architecture:** Create new modular components for Pricing and Contact, then integrate them into the main App layout with anchor-based navigation.

**Tech Stack:** React, Tailwind CSS, Framer Motion.

---

### Task 1: Pricing Component

**Files:**
- Create: `src/components/Pricing.jsx`

- [ ] **Step 1: Create the Pricing component**

Implement the "Resilience Metric" pricing grid with 3 tiers.

```jsx
import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const tiers = [
    {
      name: 'Light Stress',
      price: '$50',
      unit: '/run',
      features: ['Network Latency', 'Jitter Simulation', 'Basic Logs'],
      cta: 'Initialize Simulation'
    },
    {
      name: 'Deep Fault',
      price: '$150',
      unit: '/run',
      features: ['Network + Tx Failures', 'Sequence Drift', 'Fee Surges', 'Detailed Trace'],
      cta: 'Initialize Simulation',
      featured: true
    },
    {
      name: 'Full Hardening',
      price: '$500',
      unit: '/run',
      features: ['Complete Chaos Suite', 'CI/CD Report Generation', '1h Consultant Review', 'Priority Support'],
      cta: 'Initialize Simulation'
    }
  ];

  return (
    <section id="pricing" className="py-32 px-8 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-caption-s text-accent uppercase tracking-[0.3em] font-bold mb-16 flex items-center gap-3">
          <span className="w-8 h-[1px] bg-accent" /> / Section 04 / The Resilience Metric
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div 
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 border ${tier.featured ? 'border-accent bg-accent/[0.02]' : 'border-border'} flex flex-col`}
            >
              <h3 className="text-caption-s uppercase tracking-widest text-muted mb-4">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-display text-foreground">{tier.price}</span>
                <span className="text-muted uppercase text-[10px] tracking-widest">{tier.unit}</span>
              </div>
              
              <ul className="flex-grow space-y-4 mb-12">
                {tier.features.map(f => (
                  <li key={f} className="text-sm uppercase tracking-wider text-muted flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" /> {f}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-4 uppercase tracking-[0.2em] font-bold text-[10px] transition-all duration-500 ${tier.featured ? 'bg-accent text-white hover:bg-foreground' : 'border border-border text-foreground hover:border-accent'}`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Pricing.jsx
git commit -m "feat: add Pricing component"
```

---

### Task 2: Contact Component

**Files:**
- Create: `src/components/Contact.jsx`

- [ ] **Step 1: Create the Contact component**

Implement the "Access Terminal" form.

```jsx
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-8 border-t border-border bg-transparent relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-caption-s text-accent uppercase tracking-[0.3em] font-bold mb-16 flex items-center justify-center gap-3">
          <span className="w-8 h-[1px] bg-accent" /> / Section 05 / The Access Terminal
        </h2>
        
        <h3 className="text-6xl md:text-8xl font-display uppercase tracking-tighter text-foreground mb-16">
          Initialize<br />
          <span className="italic text-accent">Connection.</span>
        </h3>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 text-left">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-[0.3em] text-muted font-bold">Full Name</label>
            <input type="text" className="bg-transparent border-b border-border py-4 focus:outline-none focus:border-accent transition-colors text-foreground" placeholder="ENTRY_NAME" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-[0.3em] text-muted font-bold">Project Name</label>
            <input type="text" className="bg-transparent border-b border-border py-4 focus:outline-none focus:border-accent transition-colors text-foreground" placeholder="ENTRY_PROJECT" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-[0.3em] text-muted font-bold">Infrastructure</label>
            <select className="bg-transparent border-b border-border py-4 focus:outline-none focus:border-accent transition-colors text-foreground uppercase tracking-widest text-[10px]">
              <option className="bg-background">Stellar Network</option>
              <option className="bg-background">Soroban Smart Contracts</option>
              <option className="bg-background">Other (Custom)</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-[0.3em] text-muted font-bold">Inquiry Type</label>
            <select className="bg-transparent border-b border-border py-4 focus:outline-none focus:border-accent transition-colors text-foreground uppercase tracking-widest text-[10px]">
              <option className="bg-background">Resilience Audit</option>
              <option className="bg-background">Infrastructure Support</option>
              <option className="bg-background">Partnership</option>
            </select>
          </div>
          <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-[0.3em] text-muted font-bold">Message</label>
            <textarea className="bg-transparent border-b border-border py-4 focus:outline-none focus:border-accent transition-colors text-foreground h-32 resize-none" placeholder="ENTRY_MESSAGE_BODY" />
          </div>

          <div className="col-span-1 md:col-span-2 pt-12">
            <button type="submit" className="px-12 py-6 bg-accent text-white uppercase tracking-[0.3em] font-bold text-xs hover:bg-foreground transition-all duration-500 w-full md:w-auto shadow-2xl shadow-red-950/20">
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Contact.jsx
git commit -m "feat: add Contact component"
```

---

### Task 3: Integration & Global Navigation

**Files:**
- Modify: `src/App.jsx`
- Modify: `src/components/Navbar.jsx`
- Modify: `src/components/AdvancedHero.jsx`

- [ ] **Step 1: Integrate new components into App.jsx**

```jsx
// src/App.jsx additions
import Pricing from './components/Pricing';
import Contact from './components/Contact';

// In return statement, add them above the footer section
<Pricing />
<Contact />
```

- [ ] **Step 2: Update Navbar links**

```jsx
// src/components/Navbar.jsx updates
const links = [
  { name: 'Work', href: '#taxonomy' },
  { name: 'Approach', href: '#solution' },
  { name: 'Services', href: '#strategy' },
  { name: 'Pricing', href: '#pricing' },
];

// In the 'Join' link area, point 'Contact' to #contact
<motion.a 
  href="#contact" 
  // ...
>
  Contact
</motion.a>
```

- [ ] **Step 3: Update Hero buttons**

```jsx
// src/components/AdvancedHero.jsx updates
<button 
  onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
  // ...
>
  Initialize Audit
</button>
```

- [ ] **Step 4: Verify all links**

Run the build and manually check that all links scroll to the correct section.

- [ ] **Step 5: Commit**

```bash
git add src/App.jsx src/components/Navbar.jsx src/components/AdvancedHero.jsx
git commit -m "feat: integrate pricing/contact and enable global navigation"
```
