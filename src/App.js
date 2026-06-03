import React from 'react';
import './styles/globals.css';
import Hero from './components/Hero';

function App() {
  return (
    <div className="bg-background min-h-screen selection:bg-accent selection:text-white">
      {/* Sidebar Navigation (Inspiration) */}
      <nav className="fixed left-0 top-0 h-full w-12 border-r border-border flex flex-col items-center justify-between py-8 z-50 bg-background">
        <div className="font-bold text-xl">NG.</div>
        <div className="rotate-90 origin-center whitespace-nowrap text-caption-s text-muted tracking-widest uppercase">
          Studio Edition 2026
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-1 h-1 bg-muted rounded-full mx-auto" />
          <div className="w-1 h-1 bg-muted rounded-full mx-auto" />
          <div className="w-1 h-1 bg-accent rounded-full mx-auto" />
        </div>
      </nav>

      <main className="pl-12">
        <Hero />
        
        {/* Secondary Content Section */}
        <section className="p-8 grid grid-cols-12 gap-8 py-24">
          <div className="col-span-12 md:col-span-4 border-l border-accent pl-6">
            <h3 className="text-caption-s text-muted uppercase mb-4">Services</h3>
            <ul className="space-y-2 font-bold uppercase text-sm tracking-wider">
              <li>01 / Brand Identity</li>
              <li>02 / Digital Products</li>
              <li>03 / 3D & Motion</li>
              <li>04 / Strategy</li>
            </ul>
          </div>
          
          <div className="col-span-12 md:col-span-8">
            <p className="text-2xl leading-snug">
              "We don't just build websites. We build the constellations 
              that guide your users through the dark."
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
