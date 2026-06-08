# Soft Crimson Theme Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transition the SoroSentinel website from a dark theme to a "Soft Crimson" light theme.

**Architecture:** Update global CSS variables for the color palette, modify the dynamic background component for light mode compatibility, and refine container styles for consistency.

**Tech Stack:** React, Tailwind CSS, Framer Motion.

---

### Task 1: Update Global CSS Variables

**Files:**
- Modify: `src/styles/globals.css`

- [ ] **Step 1: Update theme variables and base styles**

Update the `@theme` block and `body` styles to reflect the Soft Crimson palette.

```css
@theme {
  --color-background: #FDFCFB;
  --color-foreground: #1A0508;
  --color-accent: #550C18;
  --color-accent-light: #FF4D6D;
  --color-muted: #6B7280;
  --color-border: #E5E7EB;

  /* ... rest of theme ... */
}

@layer base {
  /* ... */
  body {
    @apply bg-background text-foreground font-sans antialiased overflow-x-hidden;
    background-color: #FDFCFB;
  }
  
  ::-webkit-scrollbar-track {
    background: #FDFCFB;
  }
  ::-webkit-scrollbar-thumb {
    background: #E5E7EB;
  }
}
```

- [ ] **Step 2: Verify changes**

Check the site manually (if possible) or ensure the CSS variables are correctly applied in the build.

- [ ] **Step 3: Commit**

```bash
git add src/styles/globals.css
git commit -m "style: update global variables for soft crimson theme"
```

---

### Task 2: Refactor Background Component

**Files:**
- Modify: `src/components/Background.jsx`

- [ ] **Step 1: Update Background colors and gradients**

Adjust the background to be light and use softer crimson washes.

```jsx
// src/components/Background.jsx

// ... imports ...

const Background = () => {
  // ... scroll logic ...
  
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#FDFCFB] pointer-events-none">
      {/* Top Left Soft Wash */}
      <div 
        className="absolute top-[-20%] left-[-10%] w-[100%] h-[100%] rounded-full blur-[180px] opacity-[0.1]"
        style={{
          background: 'radial-gradient(circle, #550C18 0%, transparent 70%)'
        }}
      />

      {/* Main Soft Surge */}
      <motion.div 
        style={{
          y,
          opacity: 0.3, // Fixed lower opacity for light mode
          scale,
          background: 'radial-gradient(circle at center, #E5E7EB 0%, #FDFCFB 60%, transparent 80%)'
        }}
        className="absolute bottom-[-30%] left-[-10%] w-[130%] h-[130%] rounded-full blur-[150px]"
      />

      {/* Grain / Noise Texture - Adjusted for light mode */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-multiply pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};
```

- [ ] **Step 2: Verify changes**

- [ ] **Step 3: Commit**

```bash
git add src/components/Background.jsx
git commit -m "style: update background component for light mode"
```

---

### Task 3: Final App Refinements

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: Update Blueprint Grid Opacity**

The grid lines might be too faint or too strong. Adjust opacity for the light background.

```jsx
// src/App.jsx

{/* Blueprint Grid Lines */}
<div className="absolute inset-y-0 left-0 right-0 grid grid-cols-12 pointer-events-none opacity-10">
  {/* ... */}
</div>
```

- [ ] **Step 2: Check Footer/CTA contrast**

```jsx
{/* Footer / CTA Section */}
<section className="p-8 py-24 border-t border-border flex flex-col items-center text-center bg-accent/[0.02]">
  {/* Changed bg-border/5 to a very light accent wash */}
  {/* ... */}
</section>
```

- [ ] **Step 3: Verify and Commit**

```bash
git add src/App.jsx
git commit -m "style: final theme refinements in App component"
```
