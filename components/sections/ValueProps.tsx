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
}

export const ValueProps: React.FC<ValuePropsProps> = ({ heading, items }) => {
  return (
    <section className="py-24 bg-zinc-50">
      <Container>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          {heading}
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="h-12 w-12 rounded-lg bg-red-700 flex items-center justify-center text-white mb-6">
                {item.icon || (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-zinc-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
