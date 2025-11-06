import React from 'react';

const cards = [
  { title: 'Soft Morning Light', note: 'Ideas drift like steam from tea. Sketch the quiet.' },
  { title: 'Blue Thread', note: 'Follow the small curiosity until it becomes a pattern.' },
  { title: 'Paper Boats', note: 'Let simple thoughts travel farther than expected.' },
  { title: 'Echoes', note: 'Write what lingers after the noise is gone.' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl text-gray-700 mb-6 tracking-wide" style={{ fontFamily: 'var(--font-manrope)' }}>Gallery</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <article key={i} className="group relative rounded-xl bg-white/70 border border-gray-200/60 p-5 shadow-sm overflow-hidden">
              <div className="absolute inset-0 pointer-events-none opacity-60 mix-blend-multiply bg-[radial-gradient(ellipse_at_top_right,rgba(96,165,250,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(251,191,36,0.12),transparent_40%)]" />
              <div className="relative">
                <h3 className="text-lg font-medium text-gray-800" style={{ fontFamily: 'var(--font-manrope)' }}>{c.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{c.note}</p>
              </div>
              {/* watercolor frame effect */}
              <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-300/40" />
              <span className="pointer-events-none absolute -inset-1 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(closest-side,rgba(96,165,250,0.15),transparent_70%)]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
