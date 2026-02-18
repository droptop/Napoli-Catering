import React from 'react';
import { Container } from '../ui/Container';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

interface TestimonialsProps {
  heading: string;
  testimonials: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ heading, testimonials }) => {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,rgba(185,28,28,0.05),transparent_50%)]" />
      <Container>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl text-center mb-16">
          {heading}
        </h2>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col bg-zinc-50 p-10 rounded-3xl border border-zinc-100 shadow-sm">
              <p className="text-lg text-zinc-800 font-medium italic mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="mt-auto">
                <p className="text-sm font-bold text-zinc-900">{testimonial.author}</p>
                <p className="text-xs text-zinc-500 font-medium">{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
