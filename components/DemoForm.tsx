'use client';

import React, { useState } from 'react';
import { Button } from './ui/Button';
import { trackEvent } from '@/lib/analytics';

export const DemoForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    // Track lead submission
    trackEvent('lead_submit', {
      form: 'demo_form',
    });

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="rounded-3xl bg-[#fcfaf7] p-10 text-center border border-[#c5a059]/20 shadow-sm">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 mb-6">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-serif font-light text-zinc-900 mb-4">Request Received</h3>
        <p className="text-zinc-600 font-light leading-relaxed">
          Thank you for your interest. A specialist from Napoli Catering Co. will contact you within 24 hours to schedule your live tasting demonstration.
        </p>
        <Button 
          variant="outline" 
          className="mt-8 border-zinc-200 text-zinc-500 hover:bg-zinc-50" 
          onClick={() => setStatus('idle')}
        >
          Request another demo
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
      <div className="sm:col-span-2">
        <label htmlFor="business-name" className="block text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2">
          Business Name
        </label>
        <input
          type="text"
          name="business-name"
          id="business-name"
          required
          className="block w-full bg-zinc-50 border-0 border-b border-zinc-200 py-3 text-zinc-900 focus:ring-0 focus:border-[#c5a059] transition-colors placeholder:text-zinc-300"
          placeholder="E.g. Amsterdam Golf Club"
        />
      </div>
      
      <div>
        <label htmlFor="location" className="block text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2">
          Location (City)
        </label>
        <input
          type="text"
          name="location"
          id="location"
          required
          className="block w-full bg-zinc-50 border-0 border-b border-zinc-200 py-3 text-zinc-900 focus:ring-0 focus:border-[#c5a059] transition-colors"
        />
      </div>

      <div>
        <label htmlFor="industry" className="block text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2">
          Industry Type
        </label>
        <select
          id="industry"
          name="industry"
          className="block w-full bg-zinc-50 border-0 border-b border-zinc-200 py-3 text-zinc-900 focus:ring-0 focus:border-[#c5a059] transition-colors"
        >
          <option>Golf Club</option>
          <option>Catering Company</option>
          <option>Bar / Hospitality Venue</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="volume" className="block text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2">
          Est. Weekly Volume
        </label>
        <select
          id="volume"
          name="volume"
          className="block w-full bg-zinc-50 border-0 border-b border-zinc-200 py-3 text-zinc-900 focus:ring-0 focus:border-[#c5a059] transition-colors"
        >
          <option>50 - 100 bases</option>
          <option>100 - 250 bases</option>
          <option>250 - 500 bases</option>
          <option>500+ bases</option>
        </select>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2">
          Work Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          required
          className="block w-full bg-zinc-50 border-0 border-b border-zinc-200 py-3 text-zinc-900 focus:ring-0 focus:border-[#c5a059] transition-colors"
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="contact-name" className="block text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2">
          Contact Name
        </label>
        <input
          type="text"
          name="contact-name"
          id="contact-name"
          required
          className="block w-full bg-zinc-50 border-0 border-b border-zinc-200 py-3 text-zinc-900 focus:ring-0 focus:border-[#c5a059] transition-colors"
        />
      </div>

      <div className="sm:col-span-2 mt-8">
        <Button
          type="submit"
          disabled={status === 'loading'}
          variant="premium"
          className="w-full py-4 text-lg"
        >
          {status === 'loading' ? 'Processing...' : 'Book a Tasting Demo'}
        </Button>
        <p className="mt-4 text-center text-xs text-zinc-400 font-light">
          No obligation. We bring the equipment and ingredients to your location.
        </p>
      </div>
    </form>
  );
};
