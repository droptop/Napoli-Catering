'use client';

import React, { useState, useEffect } from 'react';

export const LanguageSwitcher = () => {
  const [lang, setLang] = useState<'EN' | 'NL'>('EN');

  // We'll simulate the switch for now as a UI element
  // In a real app, this would change the URL or load different translations
  const toggleLang = (newLang: 'EN' | 'NL') => {
    setLang(newLang);
    // You could add logic here to redirect or change context
  };

  return (
    <div className="flex items-center bg-white/5 backdrop-blur-md rounded-full p-1 border border-white/10">
      <button
        onClick={() => toggleLang('EN')}
        className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
          lang === 'EN' 
            ? 'bg-[#c5a059] text-zinc-950 shadow-sm' 
            : 'text-white/60 hover:text-white'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => toggleLang('NL')}
        className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
          lang === 'NL' 
            ? 'bg-[#c5a059] text-zinc-950 shadow-sm' 
            : 'text-white/60 hover:text-white'
        }`}
      >
        NL
      </button>
    </div>
  );
};
