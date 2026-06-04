import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Solution = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  const features = [
    {
      id: '01',
      title: 'Middleware Chaos Proxy',
      desc: 'The Shield. A Rust-based interception layer sitting between DApp and RPC, mimicking real-world network instability.',
    },
    {
      id: '02',
      title: 'Fault Injection Loop',
      desc: 'The Stressor. Programmatic injection of latency, packet loss, and bad sequence numbers to test DApp breaking points.',
    },
    {
      id: '03',
      title: 'Scenario Library',
      desc: "The Playbook. Pre-configured YAML profiles representing real-world Stellar failure modes (e.g., 'The Validator Lag', 'The RPC Timeout').",
    },
    {
      id: '04',
      title: 'Resilience Auditing',
      desc: 'The Verdict. Automated generation of resilience reports (JUnit/XML) for CI/CD integration.',
    },
  ];

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-background">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Blueprint Grid Lines */}
        <div className="absolute inset-0 grid grid-cols-12 pointer-events-none opacity-10">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-border h-full" />
          ))}
        </div>

        <div className="max-w-7xl mx-auto w-full px-8 relative z-10 mb-12">
          <header className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-2xl">
              <h2 className="text-caption-s text-accent uppercase tracking-[0.3em] font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent" /> / Section 03 / The Fix
              </h2>
              <h3 className="text-display-xl leading-[0.85] uppercase mb-8">
                Systematic<br />
                <span className="text-muted/30 italic">Resilience.</span>
              </h3>
              <p className="text-xl text-muted leading-relaxed">
                SoroSentinel provides the missing link in the Stellar developer toolchain, 
                turning unpredictable blockchain failures into manageable test cases.
              </p>
            </div>
            
            <div className="bg-accent p-8 md:mt-12 group hover:bg-foreground transition-colors duration-500 cursor-pointer">
              <p className="text-background text-caption-s font-bold uppercase tracking-widest mb-2 group-hover:text-background transition-colors">Phase 01 Status</p>
              <p className="text-3xl font-display uppercase group-hover:text-background">Operational</p>
            </div>
          </header>
        </div>

        <motion.div style={{ x }} className="flex gap-24 px-24">
          {features.map((f) => (
            <div key={f.id} className="relative w-[80vw] md:w-[600px] shrink-0 group">
              <div className="absolute -top-24 -left-12 text-[18rem] md:text-[22rem] font-display text-white/5 pointer-events-none select-none">
                {f.id}
              </div>
              <div className="border border-border p-12 bg-background relative z-10 hover:bg-border/5 transition-colors duration-500">
                <h4 className="text-4xl md:text-5xl font-display uppercase mb-8 group-hover:text-accent transition-colors leading-tight">
                  {f.title}
                </h4>
                <p className="text-xl text-muted leading-relaxed">
                  {f.desc}
                </p>
                <div className="mt-12 flex items-center gap-2 group cursor-pointer">
                  <span className="text-caption-s uppercase font-bold tracking-widest group-hover:text-accent transition-colors">Documentation</span>
                  <div className="h-[1px] w-0 bg-accent group-hover:w-12 transition-all duration-500" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Technical Footer */}
        <div className="max-w-7xl mx-auto w-full px-8 mt-24 grid grid-cols-12 gap-8 items-center opacity-50 relative z-10">
          <div className="col-span-12 md:col-span-6">
            <p className="text-caption-s uppercase font-mono tracking-tighter">
              Build v1.0.0-alpha // Architecture: Rust (Hyper/Axum) // Registry: Crates.io
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 md:text-right">
            <p className="text-caption-s uppercase font-mono tracking-tighter">
              Validated on Stellar Testnet // Mainnet Ready Q3 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
