import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

interface HeroProps {
  badge?: string;
  title: React.ReactNode;
  subtitle?: string;
  description: string;
  subtext?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  variant?: 'default' | 'gradient' | 'minimal';
  className?: string;
}

const Hero: React.FC<HeroProps> = ({
  badge,
  title,
  subtitle,
  description,
  subtext,
  primaryCTA,
  secondaryCTA,
  variant = 'gradient',
  className = ''
}) => {
  const backgroundClasses = {
    default: 'bg-slate-900',
    gradient: 'relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900',
    minimal: 'bg-white'
  };

  const textColor = variant === 'minimal' ? 'text-slate-900' : 'text-white';
  const descriptionColor = variant === 'minimal' ? 'text-slate-600' : 'text-slate-200';

  return (
    <section className={`${backgroundClasses[variant]} ${className} overflow-hidden`}>
      {/* Background elements for gradient variant */}
      {variant === 'gradient' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-blue-600/20"></div>
          <div className="absolute inset-0 opacity-40">
            <div className="h-full w-full bg-gradient-to-r from-transparent via-teal-500/10 to-transparent"></div>
          </div>
          {/* Decorative shapes */}
          <div className="absolute top-20 -right-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </>
      )}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          {/* Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                variant === 'minimal' 
                  ? 'bg-teal-100 text-teal-800 border border-teal-200'
                  : 'bg-teal-500/20 text-teal-200 border border-teal-400/30'
              }`}>
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                {badge}
              </span>
            </motion.div>
          )}
          
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-5xl md:text-7xl font-bold mb-6 leading-tight ${textColor}`}
          >
            {subtitle && (
              <span className={`block ${variant === 'minimal' ? 'bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent' : 'bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent'}`}>
                {subtitle}
              </span>
            )}
            <span className={`block ${textColor}`}>{title}</span>
          </motion.h1>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-xl md:text-2xl ${subtext ? 'mb-4' : 'mb-10'} max-w-4xl mx-auto leading-relaxed ${descriptionColor}`}
          >
            {description}
          </motion.p>
          
          {/* Subtext */}
          {subtext && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className={`text-sm md:text-base mb-10 max-w-2xl mx-auto ${variant === 'minimal' ? 'text-slate-500' : 'text-slate-300'} italic`}
            >
              {subtext}
            </motion.p>
          )}
          
          {/* CTAs */}
          {(primaryCTA || secondaryCTA) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {primaryCTA && (
                <CTAButton
                  href={primaryCTA.href}
                  variant={variant === 'minimal' ? 'primary' : 'accent'}
                  size="lg"
                >
                  {primaryCTA.text}
                </CTAButton>
              )}
              {secondaryCTA && (
                <CTAButton
                  href={secondaryCTA.href}
                  variant="secondary"
                  size="lg"
                  className={variant === 'minimal' ? '' : 'border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm'}
                >
                  {secondaryCTA.text}
                </CTAButton>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;