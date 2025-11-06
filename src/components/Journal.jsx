import React, { useState } from 'react';

const Journal = () => {
  const [text, setText] = useState('Today I let the page breathe...\nWhat arrives does not need to be perfect—only honest.');

  return (
    <section id="journal" className="relative py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl text-gray-700 mb-6 tracking-wide" style={{ fontFamily: 'var(--font-manrope)' }}>Journal</h2>
        <div className="rounded-xl border border-gray-200/60 bg-white/70 backdrop-blur-sm shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-[1fr]">
            <div className="relative">
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(closest-side,rgba(99,102,241,0.06),transparent_70%)]" />
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write softly..."
                className="relative w-full h-[320px] sm:h-[380px] resize-none bg-transparent outline-none p-6 sm:p-8 text-gray-800 leading-relaxed tracking-wide"
                style={{ fontFamily: 'var(--font-ibm-plex)' }}
              />
              {/* animated brush stroke on hover */}
              <div className="absolute bottom-3 left-4 right-4 h-1 rounded-full bg-gradient-to-r from-blue-200 via-slate-200 to-amber-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-500">Your words live only in this session. No data is stored.</p>
      </div>

      {/* ink drips */}
      <div className="pointer-events-none absolute -z-0 -top-6 right-10 w-16 h-16 rounded-full opacity-30 bg-[radial-gradient(closest-side,rgba(15,23,42,0.18),transparent_70%)] animate-drop" />
    </section>
  );
};

export default Journal;
