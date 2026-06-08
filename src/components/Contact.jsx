import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-8 border-t border-border bg-transparent relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-caption-s text-accent uppercase tracking-[0.3em] font-bold mb-16 flex items-center justify-center gap-3">
          <span className="w-8 h-[1px] bg-accent" /> / Section 07 / The Access Terminal
        </h2>
        
        <h3 className="text-6xl md:text-8xl font-display uppercase tracking-tighter text-foreground mb-16">
          Initialize<br />
          <span className="italic text-accent">Connection.</span>
        </h3>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 text-left">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-[0.3em] text-foreground font-bold">Full Name</label>
            <input type="text" className="bg-transparent border-b border-foreground/20 py-4 focus:outline-none focus:border-accent transition-colors text-foreground placeholder:text-muted/50" placeholder="ENTRY_NAME" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-[0.3em] text-foreground font-bold">Project Name</label>
            <input type="text" className="bg-transparent border-b border-foreground/20 py-4 focus:outline-none focus:border-accent transition-colors text-foreground placeholder:text-muted/50" placeholder="ENTRY_PROJECT" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-[0.3em] text-foreground font-bold">Infrastructure</label>
            <select className="bg-transparent border-b border-foreground/20 py-4 focus:outline-none focus:border-accent transition-colors text-foreground uppercase tracking-widest text-[10px]">
              <option className="bg-background">Stellar Network</option>
              <option className="bg-background">Soroban Smart Contracts</option>
              <option className="bg-background">Other (Custom)</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-[0.3em] text-foreground font-bold">Inquiry Type</label>
            <select className="bg-transparent border-b border-foreground/20 py-4 focus:outline-none focus:border-accent transition-colors text-foreground uppercase tracking-widest text-[10px]">
              <option className="bg-background">Resilience Audit</option>
              <option className="bg-background">Infrastructure Support</option>
              <option className="bg-background">Partnership</option>
            </select>
          </div>
          <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-[0.3em] text-foreground font-bold">Message</label>
            <textarea className="bg-transparent border-b border-foreground/20 py-4 focus:outline-none focus:border-accent transition-colors text-foreground h-32 resize-none placeholder:text-muted/50" placeholder="ENTRY_MESSAGE_BODY" />
          </div>

          <div className="col-span-1 md:col-span-2 pt-12">
            <button type="submit" className="px-12 py-6 bg-accent text-white uppercase tracking-[0.3em] font-bold text-xs hover:bg-foreground transition-all duration-500 w-full md:w-auto shadow-xl shadow-accent/20">
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
