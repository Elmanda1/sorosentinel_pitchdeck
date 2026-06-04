import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const MagneticButton = ({ children, className }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    x.set(mouseX * 0.35);
    y.set(mouseY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: mouseXSpring, y: mouseYSpring }}
      className={className}
    >
      {children}
    </motion.button>
  );
};

const Strategy = () => {
  return (
    <section className="text-foreground py-32 px-8 border-b border-border relative overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-16 items-center">
        <div className="col-span-12 lg:col-span-7">
          <h2 className="text-caption-s text-accent uppercase tracking-[0.3em] font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-accent" /> / Section 07 / Commercial Foundation
          </h2>
          <h3 className="text-display-xl uppercase font-display leading-[0.85] mb-12">
            Beyond<br />
            <span className="italic text-muted/30">Open Source.</span>
          </h3>
          
          <div className="space-y-12 max-w-2xl">
            <p className="text-2xl text-muted leading-relaxed">
              SoroSentinel is built for high-scale enterprise resilience. While the core CLI is open source, our SDK includes a native <span className="text-white underline decoration-accent/40 underline-offset-8">API Token Validation Hook</span> built directly into the engine.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-accent uppercase tracking-widest font-bold text-xs mb-4">Phase 01: Core</h4>
                <p className="text-muted text-sm leading-relaxed">
                  Transparent, hyper-based proxy ecosystem with 12+ pre-written fault profiles for the Stellar community.
                </p>
              </div>
              <div>
                <h4 className="text-accent uppercase tracking-widest font-bold text-xs mb-4">Phase 02: Scale</h4>
                <p className="text-muted text-sm leading-relaxed">
                  Transition to a B2B SaaS model. Managed runners, AI-powered scenario synthesis, and on-chain audit attestations.
                </p>
              </div>
            </div>

            <div className="pt-8">
              <MagneticButton className="px-12 py-6 bg-accent text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-500 rounded-sm">
                Inquire for Enterprise
              </MagneticButton>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 relative">
          <div className="border border-border p-12 relative z-10 bg-background">
            <p className="text-display-xl absolute -top-12 -right-8 opacity-[0.03] select-none pointer-events-none">B2B</p>
            <h4 className="text-2xl font-display uppercase mb-6 tracking-tight">The Vision</h4>
            <ul className="space-y-6">
              {[
                "Commercial pay-per-use SaaS model",
                "Zero-friction adoption for CI/CD",
                "Verifiable evidence for mainnet audits",
                "Rust-based system safety"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="w-1 h-1 bg-accent mt-2" />
                  <span className="text-muted uppercase text-xs tracking-widest">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Decorative Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-accent/10 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Strategy;
