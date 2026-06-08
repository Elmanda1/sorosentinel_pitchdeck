import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Taxonomy = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const domains = [
    {
      id: '01',
      title: 'Network Stress',
      tags: ['Latency Bursts', 'Cascading Drops', 'Jitter'],
      desc: 'Simulate extreme congestion. We inject artificial delay and packet loss to see how your DApp handles asynchronous blockchain responses.'
    },
    {
      id: '02',
      title: 'Transaction Errors',
      tags: ['TxBadSeq', 'InsufficientFee', 'OpNoSource'],
      desc: 'The most common Stellar failures. Programmatically trigger sequence number collisions and fee estimation drifts to test recovery logic.'
    },
    {
      id: '03',
      title: 'RPC Failures',
      tags: ['Timeout Chains', 'Partial Dropouts', '429 Rate Limits'],
      desc: 'When the node goes silent. Test your DApp fallback mechanisms when Horizon or Soroban RPC nodes return non-200 status codes.'
    },
    {
      id: '04',
      title: 'Fee Estimation Drift',
      tags: ['Fee Surges', 'Market Volatility', 'Priority Queues'],
      desc: 'Simulate rapid gas price changes. Ensure your DApp remains functional when network fees drift beyond initial estimation thresholds.'
    }
  ];

  return (
    <section className="bg-transparent py-32 px-8 border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-caption-s text-accent uppercase tracking-[0.3em] font-bold mb-16 flex items-center gap-3">
          <span className="w-8 h-[1px] bg-accent" /> / Section 03 / The Taxonomy of Chaos
        </h2>

        <div className="flex flex-col border-t border-border">
          {domains.map((d, index) => (
            <div 
              key={d.id}
              onMouseEnter={() => setActiveIndex(index)}
              className="border-b border-border group cursor-pointer relative"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between py-12 px-4 transition-all duration-700 group-hover:bg-accent/[0.01]">
                <div className="flex items-center gap-12">
                  <span className={`font-mono text-xl transition-colors duration-500 ${activeIndex === index ? 'text-accent' : 'text-muted/60'}`}>
                    {d.id}
                  </span>
                  <h3 className={`text-4xl md:text-7xl font-display uppercase tracking-tighter transition-all duration-700 ${activeIndex === index ? 'translate-x-4 text-foreground' : 'text-muted/40'}`}>
                    {d.title}
                  </h3>
                </div>

                <div className="flex gap-4 mt-6 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {d.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 border border-border text-[10px] uppercase font-mono tracking-widest text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-12 px-24 max-w-2xl">
                      <p className="text-xl text-muted leading-relaxed italic">
                        "{d.desc}"
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Hover Line */}
              <motion.div 
                className="absolute bottom-0 left-0 h-[1px] bg-accent w-0"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Dynamic Background Visual */}
      <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 pointer-events-none select-none opacity-[0.03]">
        <h4 className="text-[30vw] font-display uppercase leading-none text-accent">
          {domains[activeIndex].id}
        </h4>
      </div>
    </section>
  );
};

export default Taxonomy;
