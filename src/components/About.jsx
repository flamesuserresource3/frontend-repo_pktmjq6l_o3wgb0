import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl text-gray-700 mb-6 tracking-wide" style={{ fontFamily: 'var(--font-manrope)' }}>About</h2>
        <div className="prose prose-slate max-w-none">
          <p className="text-gray-700 text-lg leading-relaxed">
            Mind Canvas is a quiet space for ideas to land. It borrows the calm of a studio—soft light, paper textures, patient ink—and turns it into a simple journal you can open anytime.
          </p>
          <p className="text-gray-600 leading-loose mt-4">
            The design pairs brush-style accents with clean typography, letting your words feel hand-made yet clear. Each section opens like a page of a sketchbook, with gentle motion and watercolor blooms to keep the experience alive without noise.
          </p>
          <p className="text-gray-600 leading-loose mt-4">
            No accounts, no feeds—just presence. Breathe, write, and let the page be enough.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
