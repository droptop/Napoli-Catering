import React from 'react';
import { Container } from '../ui/Container';

interface PartnersProps {
  heading: string;
}

export const Partners: React.FC<PartnersProps> = ({ heading }) => {
  return (
    <section className="py-12 border-y border-zinc-100">
      <Container>
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-8">
          {heading}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 grayscale opacity-60">
          {/* Using text labels as placeholders for real logos */}
          <div className="text-2xl font-black text-zinc-900 tracking-tighter italic uppercase">AcmePizza</div>
          <div className="text-2xl font-serif text-zinc-900 tracking-tight">Vesuvio Gear</div>
          <div className="text-2xl font-sans font-extrabold text-zinc-900">NAPOLI-PRO</div>
          <div className="text-2xl font-mono text-zinc-900">OVEN-CORP</div>
          <div className="text-2xl font-bold text-zinc-900 underline decoration-red-600 decoration-4">CATER-LINK</div>
        </div>
      </Container>
    </section>
  );
};
