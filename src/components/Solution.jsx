import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Database, Terminal } from 'lucide-react';

const Solution = () => {
  const features = [
    {
      id: '01',
      icon: <Terminal className="w-6 h-6" />,
      title: 'Middleware Chaos Proxy',
      desc: 'A transparent Rust-based proxy that intercepts and manipulates RPC traffic in real-time.',
    },
    {
      id: '02',
      icon: <Zap className="w-6 h-6" />,
      title: 'Fault Injection Loop',
      desc: 'Simulate packet drops, latency spikes, and bad sequence numbers with surgical precision.',
    },
    {
      id: '03',
      icon: <Database className="w-6 h-6" />,
      title: 'Scenario Library',
      desc: '12+ battle-tested YAML profiles mapping real Stellar mainnet failure modes.',
    },
    {
      id: '04',
      icon: <Shield className="w-6 h-6" />,
      title: 'Resilience Auditing',
      desc: 'Automated JUnit/XML reporting that integrates directly into your GitHub CI/CD pipeline.',
    },
  ];

  return (
    <section className="bg-background text-foreground py-32 px-8 border-b border-border relative overflow-hidden">
      {/* Blueprint Grid Lines */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none opacity-10">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-r border-border h-full" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-24 flex flex-col md:flex-row justify-between items-start gap-12">
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

        <div className="grid grid-cols-12 gap-px bg-border border border-border">
          {features.map((f, index) => (
            <motion.div 
              key={f.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="col-span-12 md:col-span-6 bg-background p-12 hover:bg-border/5 transition-colors duration-500"
            >
              <div className="flex flex-col h-full">
                <div className="text-accent mb-8">
                  {f.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-caption-s text-muted font-mono">{f.id}</span>
                    <h4 className="text-2xl font-display uppercase tracking-tight">{f.title}</h4>
                  </div>
                  <p className="text-muted leading-relaxed max-w-sm">
                    {f.desc}
                  </p>
                </div>
                <div className="mt-12 flex items-center gap-2 group cursor-pointer">
                  <span className="text-caption-s uppercase font-bold tracking-widest group-hover:text-accent transition-colors">Documentation</span>
                  <div className="h-[1px] w-0 bg-accent group-hover:w-12 transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Footer */}
        <footer className="mt-24 grid grid-cols-12 gap-8 items-center opacity-50">
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
        </footer>
      </div>
    </section>
  );
};

export default Solution;
