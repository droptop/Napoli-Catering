import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'premium';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors rounded-none focus:outline-none focus:ring-2 focus:ring-[#c5a059] focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-red-700 text-white hover:bg-red-800',
    secondary: 'bg-zinc-900 text-white hover:bg-zinc-800',
    outline: 'border-2 border-zinc-200 text-zinc-900 hover:bg-zinc-50',
    ghost: 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100',
    premium: 'bg-[#c5a059] text-zinc-950 hover:bg-[#d4af37]',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
};
