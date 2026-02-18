import React from 'react';
import Link from 'next/link';
import { Container } from '../ui/Container';

const navigation = {
  products: [
    { name: 'Ovens', href: '/products/ovens' },
    { name: 'Ingredients & Flour', href: '/products/ingredients' },
    { name: 'Tools & Accessories', href: '/products/tools' },
    { name: 'Packaging', href: '/products/packaging' },
  ],
  services: [
    { name: 'Catering Supply', href: '/services/supply' },
    { name: 'Advice & Support', href: '/services/advice' },
    { name: 'Bulk Orders', href: '/services/bulk-orders' },
  ],
  industries: [
    { name: 'Pizzerias', href: '/industries/pizzerias' },
    { name: 'Restaurants', href: '/industries/restaurants' },
    { name: 'Food Trucks', href: '/industries/food-trucks' },
    { name: 'Caterers', href: '/industries/caterers' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white py-16" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-tight text-white uppercase">
              NAPOLI <span className="text-red-600">CATERING CO.</span>
            </Link>
            <p className="mt-4 text-sm text-zinc-400 leading-6 max-w-xs">
              Professional Neapolitan catering equipment and premium ingredients for the Dutch market. One stop shop for commercial pizza ovens and bulk supply.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Products</h3>
            <ul className="mt-4 space-y-2">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-zinc-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Services</h3>
            <ul className="mt-4 space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-zinc-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-zinc-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} Napoli Catering Co. B.V. Registered in the Netherlands.
          </p>
          <p className="text-xs text-zinc-500">
            Proudly serving pizzerias and restaurants across the NL.
          </p>
        </div>
      </Container>
    </footer>
  );
};
