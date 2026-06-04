import React from 'react';
import './styles/globals.css';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';

function App() {
  return (
    <div className="bg-background min-h-screen selection:bg-accent selection:text-white">
      {/* Sidebar Navigation */}
      <nav className="fixed left-0 top-0 h-full w-12 border-r border-border flex flex-col items-center justify-between py-8 z-50 bg-background">
        <div className="font-bold text-xl">SS.</div>
        <div className="rotate-90 origin-center whitespace-nowrap text-caption-s text-muted tracking-widest uppercase">
          SoroSentinel 2026
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-1 h-1 bg-muted rounded-full mx-auto" />
          <div className="w-1 h-1 bg-accent rounded-full mx-auto" />
          <div className="w-1 h-1 bg-muted rounded-full mx-auto" />
        </div>
      </nav>

      <main className="pl-12 relative">
        {/* Blueprint Grid Lines */}
        <div className="absolute inset-y-0 left-12 right-0 grid grid-cols-12 pointer-events-none opacity-5">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-border h-full last:border-r-0" />
          ))}
        </div>
        <Hero />
        <Problem />
        <Solution />
        
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
