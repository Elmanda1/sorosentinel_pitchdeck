import React from 'react';
import './styles/globals.css';
import AdvancedHero from './components/AdvancedHero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Taxonomy from './components/Taxonomy';
import CodeGlimpse from './components/CodeGlimpse';
import Deliverables from './components/Deliverables';
import Strategy from './components/Strategy';
import Background from './components/Background';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-transparent min-h-screen selection:bg-accent selection:text-white">
      <Background />
      <Navbar />
      {/* Sidebar Navigation (Removed previously, ensured here) */}

      <main className="relative">
        {/* Blueprint Grid Lines */}
        <div className="absolute inset-y-0 left-0 right-0 grid grid-cols-12 pointer-events-none opacity-5">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-border h-full last:border-r-0" />
          ))}
        </div>
        <AdvancedHero />
        <Problem />
        <Solution />
        <Taxonomy />
        <CodeGlimpse />
        <Deliverables />
        <Strategy />

        {/* Footer / CTA Section */}
        <section className="p-8 py-24 border-t border-border flex flex-col items-center text-center bg-border/5">
          <h2 className="text-display-xl uppercase mb-12 leading-none">
            Ready to<br />
            <span className="text-accent italic">Audit?</span>
          </h2>
          <button className="px-12 py-6 bg-foreground text-background font-bold uppercase tracking-widest hover:bg-accent transition-all duration-500">
            Get Started on Crates.io
          </button>
          <p className="mt-12 text-caption-s text-muted uppercase tracking-widest">
            SoroSentinel Team / Indonesia Chapter / 2026
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
