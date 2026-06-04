import React from 'react';
import { motion } from 'framer-motion';

const AdvancedHero = () => {
  return (
    <section className="relative h-screen w-full bg-transparent overflow-hidden border-b border-white/5">
      {/* Static Background Grid - Crimson Tone */}
      <div className="absolute inset-0 z-0 opacity-[0.05]">
        <div className="absolute inset-0 bg-[radial-gradient(#550C18_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-[1440px] mx-auto h-full px-4 md:px-6 grid grid-cols-12 relative z-10">
        {/* Foreground Content - Flushed to the far left */}
        <div className="col-span-12 lg:col-span-10 flex flex-col justify-center pt-24 z-20">

          <h1 className="font-display text-[10vw] lg:text-[11vw] leading-[0.75] uppercase tracking-tighter text-white mb-12 ml-[-8px]">
            SECURING<br />
            <span className="text-[#550C18] italic drop-shadow-[0_0_15px_rgba(85,12,24,0.8)]">STABILITY.</span>
          </h1>

          <div className="max-w-md ml-1">
            <p className="text-muted text-sm md:text-base leading-relaxed uppercase tracking-wider mb-14 opacity-40">
              High-fidelity chaos engineering for the Stellar network.
              Injecting deterministic failure to build indestructible infrastructure.
            </p>

            <div className="flex gap-6 relative z-30">
              <button className="group relative px-10 py-5 border border-white/10 text-white font-bold uppercase text-[10px] tracking-[0.2em] overflow-hidden transition-all duration-700 hover:border-white/40">
                <span className="relative z-10">Initialize Audit</span>
                <div className="absolute inset-0 bg-white/5 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500" />
              </button>
              <button className="px-10 py-5 bg-[#550C18] border border-white/5 text-white font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-white hover:text-[#550C18] transition-all duration-700 shadow-2xl shadow-red-950/40">
                View Reports
              </button>
            </div>
          </div>
        </div>

        {/* Resilience Core - Shifted further right to avoid clashing with text */}
        <div className="absolute top-1/2 right-[-25%] lg:right-[-15%] -translate-y-1/2 w-[600px] h-[600px] lg:w-[1200px] lg:h-[1200px] pointer-events-none flex items-center justify-center opacity-50 lg:opacity-70 z-10">
          <div className="relative w-full h-full">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_40px_rgba(85,12,24,0.1)]">
              {/* Concentric Rotating Rings */}
              <motion.circle
                cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="0.02" strokeDasharray="1 3"
                className="opacity-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
              />
              <motion.circle
                cx="50" cy="50" r="35" fill="none" stroke="#550C18" strokeWidth="0.15" strokeDasharray="5 5"
                className="opacity-40"
                animate={{ rotate: -360 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              />
              <motion.circle
                cx="50" cy="50" r="28" fill="none" stroke="#550C18" strokeWidth="0.3" strokeDasharray="15 5"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />

              {/* Scanning Laser Line */}
              <motion.line
                x1="0" y1="50" x2="100" y2="50" stroke="#550C18" strokeWidth="0.4"
                animate={{ y: [-45, 45, -45] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>

            {/* Data Tags */}
            <div className="absolute inset-0">
              {[
                { label: "CRIMSON_LOCK", top: "12%", left: "70%", delay: 0 },
                { label: "FAIL_INJECT: ACTIVE", top: "78%", left: "82%", delay: 1.5 },
                { label: "0x_HARDENED", top: "38%", left: "-2%", delay: 0.8 }
              ].map((tag, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, delay: tag.delay }}
                  className="absolute p-2 border border-white/5 bg-[#550C18]/20 backdrop-blur-3xl"
                  style={{ top: tag.top, left: tag.left }}
                >
                  <p className="font-mono text-[7px] tracking-[0.3em] text-white/60">{tag.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Central Node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#550C18] rounded-full blur-[10px] animate-pulse shadow-[0_0_40px_#550C18]" />
          </div>
        </div>
      </div>

      {/* Subtle Sidebar HUD */}
      <div className="absolute right-12 bottom-12 flex flex-col gap-3 opacity-20 hidden md:flex">
        <p className="text-[8px] font-mono tracking-[0.5em] uppercase text-white">Registry: Crates.io</p>
        <p className="text-[8px] font-mono tracking-[0.5em] uppercase text-white">Build: v1.0.0-alpha</p>
      </div>
    </section>
  );
};

export default AdvancedHero;
