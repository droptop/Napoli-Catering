import React from 'react';
import Link from 'next/link';
import { Container } from '../ui/Container';

interface Category {
  title: string;
  description: string;
  href: string;
  image?: string;
}

interface CategoriesProps {
  heading: string;
  categories: Category[];
}

export const Categories: React.FC<CategoriesProps> = ({ heading, categories }) => {
  return (
    <section className="py-24">
      <Container>
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            {heading}
          </h2>
          <Link href="/products" className="text-sm font-bold text-red-700 hover:text-red-800 uppercase tracking-wider">
            View all products &rarr;
          </Link>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <Link 
              key={index} 
              href={category.href}
              className="group relative overflow-hidden rounded-2xl bg-zinc-100 aspect-[4/5] flex flex-col justify-end p-8"
            >
              {/* Placeholder for image */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent z-10" />
              <div className="relative z-20 transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                <p className="text-sm text-zinc-300 line-clamp-2">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
