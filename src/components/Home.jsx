import React from 'react';

const Home = () => {
  return (
    <section id="home" className="min-h-[90vh] flex items-center justify-center relative">
      <div className="max-w-3xl mx-auto text-center px-6 py-16 sm:py-24">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-800/90" style={{ fontFamily: 'var(--font-manrope)' }}>
          Mind Canvas
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-600">
          "Between ink and breath, ideas bloom like quiet constellations."
        </p>
        <div className="mt-8">
          <a href="#journal" className="inline-flex items-center gap-2 rounded-full bg-[#cbd5e1]/60 hover:bg-[#cbd5e1]/80 text-gray-800 px-6 py-3 transition-colors">
            <span className="relative">
              <span className="ink-underline" />
              Start Writing
            </span>
          </a>
        </div>
      </div>

      {/* subtle floating ink blot */}
      <div className="pointer-events-none absolute -top-10 left-8 w-28 h-28 rounded-full opacity-40 bg-[radial-gradient(closest-side,rgba(30,41,59,0.2),transparent_70%)] animate-inkFloat" />
      <div className="pointer-events-none absolute bottom-12 right-10 w-24 h-24 rounded-full opacity-40 bg-[radial-gradient(closest-side,rgba(2,132,199,0.2),transparent_70%)] animate-inkFloat2" />
    </section>
  );
};

export default Home;
