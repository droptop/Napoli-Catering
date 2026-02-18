import React from 'react';

interface WavyItalianSeparatorProps {
  className?: string;
  width?: string;
}

export const WavyItalianSeparator: React.FC<WavyItalianSeparatorProps> = ({ 
  className = "", 
  width = "w-48" 
}) => {
  const wavePath = "M0 3 Q 12.5 1, 25 3 T 50 3 T 75 3 T 100 3 T 125 3 T 150 3 T 175 3 T 200 3";
  
  return (
    <div className={`flex flex-col items-center gap-[1px] ${className}`}>
      <svg width="200" height="6" viewBox="0 0 200 6" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${width} h-auto`}>
        <path d={wavePath} stroke="#008C45" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
      <svg width="200" height="6" viewBox="0 0 200 6" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${width} h-auto`}>
        <path d={wavePath} stroke="#F4F5F0" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
      <svg width="200" height="6" viewBox="0 0 200 6" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${width} h-auto`}>
        <path d={wavePath} stroke="#CD212A" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
};
