'use client';

import React, { useState } from 'react';
import { Container } from '../ui/Container';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  heading: string;
  items: FAQItem[];
}

export const FAQ: React.FC<FAQProps> = ({ heading, items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-zinc-50">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl text-center mb-16">
            {heading}
          </h2>
          <div className="space-y-4">
            {items.map((item, index) => (
              <div 
                key={index} 
                className="border border-zinc-200 rounded-xl bg-white overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-bold text-zinc-900">{item.question}</span>
                  <svg 
                    className={`h-5 w-5 text-zinc-500 transition-transform ${activeIndex === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeIndex === index && (
                  <div className="px-6 pb-6 text-zinc-600 leading-relaxed border-t border-zinc-100 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
