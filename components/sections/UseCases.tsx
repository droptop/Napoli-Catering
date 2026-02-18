import React from 'react';
import Link from 'next/link';
import { Container } from '../ui/Container';

interface UseCase {
  title: string;
  description: string;
  href: string;
}

interface UseCasesProps {
  heading: string;
  useCases: UseCase[];
}

export const UseCases: React.FC<UseCasesProps> = ({ heading, useCases }) => {
  return (
    <section className="py-24 bg-zinc-50">
      <Container>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl text-center mb-16">
          {heading}
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {useCases.map((useCase, index) => (
            <Link 
              key={index} 
              href={useCase.href}
              className="group bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-zinc-900 mb-4 group-hover:text-red-700 transition-colors">
                {useCase.title}
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                {useCase.description}
              </p>
              <span className="text-sm font-bold text-red-700 uppercase tracking-wider">
                Learn more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
