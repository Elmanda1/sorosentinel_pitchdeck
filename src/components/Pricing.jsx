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
