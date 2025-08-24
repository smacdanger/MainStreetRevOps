import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  external?: boolean;
  onClick?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
  onClick
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus-ring transform hover:-translate-y-0.5';
  
  const variantClasses = {
    primary: 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl',
    secondary: 'border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white',
    accent: 'bg-teal-600 text-white hover:bg-teal-700 shadow-lg hover:shadow-xl'
  };
  
  const sizeClasses = {
    sm: 'px-6 py-3 text-sm',
    md: 'px-8 py-4 text-lg',
    lg: 'px-10 py-5 text-xl'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  const buttonContent = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center"
    >
      {children}
    </motion.span>
  );
  
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={onClick}
      >
        {buttonContent}
      </a>
    );
  }
  
  return (
    <Link href={href} className={classes} onClick={onClick}>
      {buttonContent}
    </Link>
  );
};

export default CTAButton;