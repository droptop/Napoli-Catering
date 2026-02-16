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
    <section className="py-24">
      <Container>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl text-center mb-16">
          {heading}
        </h2>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full border-t-2 border-dashed border-zinc-200 -ml-8 z-0" />
              )}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-white border-2 border-red-700 flex items-center justify-center text-xl font-extrabold text-red-700 mb-6 shadow-sm">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">{step.title}</h3>
                <p className="text-zinc-600 max-w-xs">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
