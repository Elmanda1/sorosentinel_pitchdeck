# SoroSentinel Redesign Spec: Horizontal Parallax & Feature Storytelling
Date: 2026-06-04

## 1. Overview
Redesign the "Solution" section into a high-impact horizontal scroll experience inspired by New Genre. The goal is to highlight SoroSentinel's technical prowess in blockchain resilience auditing while maintaining a minimalist, elegant aesthetic.

## 2. Core Features & Narrative
SoroSentinel's value proposition is "Turning Blockchain Chaos into Deterministic Tests."

### Key Features to Highlight:
1. **Middleware Chaos Proxy (The Shield):** A Rust-based interception layer that sits between your DApp and the RPC node. It mimics network instability.
2. **Fault Injection Loop (The Stressor):** Programmatic injection of latency, packet loss, and bad sequence numbers to test DApp breaking points.
3. **Scenario Library (The Playbook):** Pre-configured YAML profiles representing real-world Stellar failure modes (e.g., "The Validator Lag", "The RPC Timeout").
4. **Resilience Auditing (The Verdict):** Automated generation of resilience reports (JUnit/XML) for CI/CD integration.

## 3. Visual & Motion Design
- **Layout:** Use a `sticky` container with `overflow-hidden`. The actual content length will be mapped to the scroll height of a parent container (approx `400vh`).
- **Typography:** 
    - Display titles: *Playfair Display* (Italic for emphasis).
    - Technical metadata: *Inter* (Monospace look).
- **Parallax:** 
    - Foreground: Feature cards and text.
    - Background: Large, semi-transparent index numbers (01, 02...) moving at 0.5x speed.
    - Accents: Thin red grid lines moving at 1.2x speed for depth.

## 4. Technical Architecture
- **State Management:** `framer-motion` `useScroll` and `useTransform`.
- **Component Structure:**
    - `Solution.jsx`: Refactor to a horizontal scroll container.
    - `FeatureCard.jsx`: New component for individual feature slides.
- **Responsive:** Fallback to standard vertical stack on mobile (width < 768px).

## 5. Success Criteria
- Smooth 60fps horizontal transition.
- Features are clearly readable and take center stage.
- Aesthetic matches DESIGN_SYSTEM.md (Black, White, Red Accent).
