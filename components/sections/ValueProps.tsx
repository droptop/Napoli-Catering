import React from 'react';
import { Container } from '../ui/Container';

interface ValueProp {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface ValuePropsProps {
  heading: string;
  items: ValueProp[];
  showSketchBackground?: boolean;
}

export const ValueProps: React.FC<ValuePropsProps> = ({ heading, items, showSketchBackground }) => {
  return (
    <section className={`py-24 relative overflow-hidden ${showSketchBackground ? 'bg-white' : 'bg-zinc-50'}`}>
      {showSketchBackground && (
        <div
          className="absolute inset-0 z-0 opacity-[0.50] pointer-events-none"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2F911c671c9bd5429ca0699a0004064868?format=webp&width=1600&height=1200')`,
            backgroundRepeat: 'repeat',
            backgroundSize: '800px'
          }}
        />
      )}
      <Container className="relative z-10">
        <h2 className="text-3xl font-serif font-light tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl mb-16 uppercase tracking-widest text-center">
          {heading}
        </h2>
        <div className={`grid grid-cols-1 gap-12 sm:grid-cols-2 ${items.length === 4 ? 'lg:grid-cols-4' : items.length === 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-3'}`}>
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full border border-[#c5a059] flex items-center justify-center text-[#c5a059] mb-8 shadow-sm transition-colors duration-300">
                {item.icon || (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-4 uppercase tracking-widest">{item.title}</h3>
              <p className="text-zinc-600 font-light leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
