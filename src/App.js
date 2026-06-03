import React from 'react';
import './styles/globals.css';

function App() {
  return (
    <div className="min-h-screen border-l border-border ml-12 p-8">
      <header className="mb-24">
        <p className="font-sans text-caption-s uppercase text-muted mb-4">Studio / 2026</p>
        <h1 className="font-display text-display-xl uppercase leading-none">
          New<br />Genre
        </h1>
      </header>
      
      <main className="grid grid-cols-12 gap-8 border-t border-border pt-8">
        <div className="col-span-12 md:col-span-8">
          <h2 className="text-heading-l uppercase mb-8">Accelerating tomorrow's ideas</h2>
          <p className="text-muted max-w-md">
            A global design & technology studio. We partner with the world's most ambitious brands to create digital experiences that move the needle.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
