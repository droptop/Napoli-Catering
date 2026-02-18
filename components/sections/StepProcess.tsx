import React from 'react';
import { Container } from '../ui/Container';

interface Step {
  title: string;
  description: string;
}

interface StepProcessProps {
  heading: string;
  steps: Step[];
}

export const StepProcess: React.FC<StepProcessProps> = ({ heading, steps }) => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <h2 className="text-3xl font-serif font-light tracking-tight text-zinc-900 sm:text-4xl text-center mb-20 uppercase tracking-widest">
          {heading}
        </h2>
        <div className="relative">
          {/* Horizontal Dotted Line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px border-t-2 border-dashed border-[#c5a059]/40 z-0 mx-12" />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="h-16 w-16 rounded-full bg-white border-2 border-[#c5a059] flex items-center justify-center text-2xl font-sans font-semibold text-[#c5a059] mb-8 shadow-sm transition-transform group-hover:scale-110">
                  {index + 1}
                </div>
                <h3 className="text-sm font-bold text-zinc-900 mb-4 uppercase tracking-widest leading-tight min-h-[40px] flex items-center justify-center px-2">
                  {step.title}
                </h3>
                <p className="text-zinc-500 text-sm font-light leading-relaxed px-4">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
