'use client';

import React, { useState } from 'react';
import { Button } from './ui/Button';
import { trackEvent } from '@/lib/analytics';

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    // Track lead submission
    trackEvent('lead_submit', {
      form: 'contact_form',
    });

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-white/5 backdrop-blur-md p-10 text-center border border-[#c5a059]/30 shadow-sm">
        <div className="mx-auto flex h-[92px] w-[92px] items-center justify-center rounded-full bg-[#c5a059]/10 text-[#c5a059] mb-6">
          <svg className="h-[46px] w-[46px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-serif font-light text-white mb-4 uppercase tracking-widest">Request Received</h3>
        <p className="text-zinc-200 font-light leading-relaxed">
          Thank you for your interest. A commercial specialist from Napoli Catering Co. will contact you within 24 hours.
        </p>
        <Button
          variant="outline"
          className="mt-8 border-white/20 !text-white hover:bg-white/10 uppercase tracking-widest text-xs font-bold"
          onClick={() => setStatus('idle')}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
      <div>
        <label htmlFor="first-name" className="block text-[10px] font-bold uppercase tracking-widest text-[#c5a059] mb-1">
          First name
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            required
            className="block w-full bg-transparent border-0 border-b border-white/10 py-2 text-white focus:ring-0 focus:outline-none focus:border-[#c5a059] transition-colors placeholder:text-zinc-600 font-light text-sm"
          />
        </div>
      </div>
      <div>
        <label htmlFor="last-name" className="block text-[10px] font-bold uppercase tracking-widest text-[#c5a059] mb-1">
          Last name
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            required
            className="block w-full bg-transparent border-0 border-b border-white/10 py-2 text-white focus:ring-0 focus:outline-none focus:border-[#c5a059] transition-colors font-light text-sm"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="company" className="block text-[10px] font-bold uppercase tracking-widest text-[#c5a059] mb-1">
          Company / Business name
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="company"
            id="company"
            autoComplete="organization"
            required
            className="block w-full bg-transparent border-0 border-b border-white/10 py-2 text-white focus:ring-0 focus:outline-none focus:border-[#c5a059] transition-colors font-light text-sm"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-widest text-[#c5a059] mb-1">
          Work Email
        </label>
        <div className="mt-1">
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            required
            className="block w-full bg-transparent border-0 border-b border-white/10 py-2 text-white focus:ring-0 focus:outline-none focus:border-[#c5a059] transition-colors font-light text-sm"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-widest text-[#c5a059] mb-1">
          Tell us about your needs
        </label>
        <div className="mt-1">
          <textarea
            name="message"
            id="message"
            rows={4}
            placeholder="E.g. I need a quote for weekly Pizza Bases and other ingredients."
            className="block w-full bg-transparent border-0 border-b border-white/10 py-2 text-white focus:ring-0 focus:outline-none focus:border-[#c5a059] transition-colors placeholder:text-zinc-600 font-light text-sm"
            defaultValue={''}
          />
        </div>
      </div>
      <div className="sm:col-span-2 mt-4">
        <Button
          type="submit"
          disabled={status === 'loading'}
          variant="premium"
          className="w-full py-4 text-lg uppercase tracking-widest font-bold"
        >
          {status === 'loading' ? 'Sending...' : 'Send Enquiry'}
        </Button>
      </div>
    </form>
  );
};
