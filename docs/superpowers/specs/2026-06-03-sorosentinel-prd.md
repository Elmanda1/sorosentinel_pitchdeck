    # SoroSentinel Instawards - Product Requirements Document (PRD)

## 1. Project Overview
SoroSentinel is an automated chaos engineering tool for Stellar Soroban DApps. It acts as a middleware proxy that simulates real-world blockchain-layer failures, allowing developers to test their application's resilience before mainnet deployment.

## 2. Problem Statement
Developers lack tools to simulate network congestion, RPC drops, and transaction errors (e.g., sequence number overlaps, insufficient fees) in a systematic way. This leads to discovering fragility during audits or in production.

## 3. Core Features
- **Middleware Chaos Proxy (Rust):** A transparent proxy between DApps and RPC nodes.
- **Fault Injection Execution Loop:** Intercepts traffic and injects failures based on YAML configurations.
- **Scenario Library:** 12+ pre-written profiles (Network Stress, Transaction Errors, RPC Failures, Fee Drift).
- **CI/CD Integration:** GitHub Action and JUnit/XML reporting for automated resilience auditing.
- **Commercial Foundation:** Integrated API token validation for a future pay-per-use SaaS model.

## 4. Target Audience
- **Soroban Developers:** Individual and team builders on Stellar.
- **Security Auditors:** Professionals verifying DApp stability and interface resilience.

## 5. Technical Stack
- **Proxy:** Rust (Hyper, Axum).
- **Configuration:** YAML/JSON Schema.
- **Integration:** GitHub Actions, Crates.io.
- **Reporting:** HTML, JUnit/XML.

## 6. Design Vision (Pitch Deck)
- **Messaging:** Problem-Solution-Trust flow (inspired by Paygate Stellar).
- **Aesthetic:** High-contrast, typography-centric, minimal studio style (inspired by New Genre Studio).
- **Motion:** Scroll-driven storytelling, parallax effects, chaptered transitions (inspired by State of AI Design).
- **Primary Color:** `#0F172A` (Background), `#22C55E` (Accent - "Run Green").
- **Typography:** `Orbitron` (Headings), `Exo 2` (Body).

## 7. Success Metrics (30-Day Instaward)
- Functional open-source CLI on Crates.io.
- 12+ Operational fault scenarios.
- Live GitHub Action in the Marketplace.
- Complete documentation and demo video.
