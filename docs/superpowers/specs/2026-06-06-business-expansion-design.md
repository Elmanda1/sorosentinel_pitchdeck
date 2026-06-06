# SoroSentinel Business Expansion Spec: Pricing, Contact & Navigation
Date: 2026-06-06

## 1. Overview
Implement the missing business-critical sections of the SoroSentinel website: a "Pay-per-Use" Pricing model, a unified "Inquiry/Contact" form, and fully functional navigation.

## 2. Pricing Section (`src/components/Pricing.jsx`)
A "Utility-First" pricing model designed for developers.

### Content:
- **Heading:** "The Resilience Metric"
- **Model:** Pay-per-Simulation Unit.
- **Tiers (Cards):**
    1. **Light Stress:** $50/run. Network latency & jitter only.
    2. **Deep Fault:** $150/run. Network + Transaction failures (Sequence drift, Fee surges).
    3. **Full Hardening:** $500/run. Complete chaos suite + CI/CD report generation + 1h consultant review.

### Visual Design:
- 3-column grid of minimalist "Blueprint" cards.
- Dark Crimson (`#550C18`) accents for prices.
- "Initialize Simulation" buttons on each card scrolling to the Contact form.

## 3. Contact & Inquiry Section (`src/components/Contact.jsx`)
A unified "Access Terminal" for leads and technical inquiries.

### Content:
- **Heading:** "The Access Terminal"
- **Form Fields:** 
    - `Full Name`
    - `Project/DApp Name`
    - `Infrastructure (Stellar/Soroban)`
    - `Inquiry Type (Select: Audit, Support, Partnership)`
    - `Message`
- **CTA:** "Submit Request"

### Visual Design:
- Single column, centered layout.
- Input fields with `border-b` only (minimalist terminal look).
- Monospace labels (`Inter` with wide tracking).

## 4. Navigation & Button Activation
Connect all disparate UI elements.

### Navbar (`src/components/Navbar.jsx`):
- Link `Work` to `#taxonomy`
- Link `Approach` to `#solution`
- Link `Services` to `#strategy` (or a dedicated services anchor)
- Add `Pricing` and `Contact` links.
- Implement smooth scroll behavior for all anchors.

### Hero Buttons (`src/components/AdvancedHero.jsx`):
- `Initialize Audit` -> Scrolls to `#pricing`
- `View Reports` -> Link to `/reports` (or placeholder success toast)

## 5. Scope & Success Criteria
- All Navbar links are functional and scroll to the correct sections.
- Pricing tiers are clearly presented and consistent with the Soft Crimson theme.
- The Contact form is visually complete and mimics a technical interface.
- Mobile responsiveness for the new 3-column pricing grid.
