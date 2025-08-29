import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  company: string;
  quote: string;
  className?: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  company,
  quote,
  className = '',
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.2 }
      }}
      className={`group relative bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 motion-safe ${className}`}
    >
      {/* Subtle gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
        animate={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Quote icon */}
        <div className="mb-6">
          <motion.svg 
            className="w-8 h-8 text-teal-500 mb-4" 
            fill="currentColor" 
            viewBox="0 0 24 24"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
          </motion.svg>
        </div>
        
        {/* Quote */}
        <blockquote className="text-lg text-slate-700 mb-6 leading-relaxed italic">
          &ldquo;{quote}&rdquo;
        </blockquote>
        
        {/* Attribution */}
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
            <span className="text-white font-semibold text-lg">
              {name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <div className="font-semibold text-slate-900">{name}</div>
            <div className="text-sm text-slate-500">{company}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;