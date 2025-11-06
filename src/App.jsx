import React from 'react';
import Home from './components/Home';
import Journal from './components/Journal';
import Gallery from './components/Gallery';
import About from './components/About';

const App = () => {
  return (
    <div className="min-h-screen text-gray-800 bg-[radial-gradient(60%_60%_at_20%_10%,#e9ecef,transparent_70%),radial-gradient(50%_50%_at_80%_10%,#e0f2fe,transparent_60%),radial-gradient(60%_60%_at_10%_90%,#fef3c7,transparent_60%)]">
      {/* Global subtle texture overlay */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.08]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIzNTg2NzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <header className="sticky top-0 z-10 backdrop-blur-md bg-white/40 border-b border-gray-200/60">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 h-14">
          <a href="#home" className="text-sm tracking-wider text-gray-700 hover:text-gray-900 transition-colors" style={{ fontFamily: 'var(--font-manrope)' }}>Mind Canvas</a>
          <div className="flex items-center gap-4 text-sm">
            <a href="#journal" className="nav-link">Journal</a>
            <a href="#gallery" className="nav-link">Gallery</a>
            <a href="#about" className="nav-link">About</a>
          </div>
        </nav>
      </header>

      <main className="relative">
        <Home />
        <Journal />
        <Gallery />
        <About />
      </main>

      <footer className="py-10 text-center text-xs text-gray-500">Made with calm for thoughtful moments.</footer>

      {/* global styles for subtle interactions */}
      <style>{`
        .nav-link { @apply text-gray-600 hover:text-gray-900 transition-colors; }
        .ink-underline {
          position: absolute; left: -6px; right: -6px; bottom: -2px; height: 10px;
          background: radial-gradient(closest-side, rgba(2,132,199,0.35), transparent 70%);
          opacity: 0; transform: translateY(2px);
          transition: opacity .35s ease, transform .35s ease;
          border-radius: 9999px;
        }
        a:hover .ink-underline { opacity: 1; transform: translateY(0); }

        @keyframes inkFloat {
          0%, 100% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(6px, -8px, 0) scale(1.03); }
        }
        .animate-inkFloat { animation: inkFloat 6s ease-in-out infinite; }

        @keyframes inkFloat2 {
          0%, 100% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(-8px, 10px, 0) scale(1.04); }
        }
        .animate-inkFloat2 { animation: inkFloat2 7.5s ease-in-out infinite; }

        @keyframes drop {
          0% { transform: translateY(-6px); }
          50% { transform: translateY(4px); }
          100% { transform: translateY(-6px); }
        }
        .animate-drop { animation: drop 5.5s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default App;
