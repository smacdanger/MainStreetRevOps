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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.2 }
      }}
      className={`group relative bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 ${className}`}
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
        
        {/* Quote text */}
        <blockquote className="text-slate-700 mb-6 text-lg leading-relaxed italic">
          &ldquo;{quote}&rdquo;
        </blockquote>
        
        {/* Author info */}
        <div className="flex items-center">
          <motion.div 
            className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            {name.split(' ').map(n => n[0]).join('')}
          </motion.div>
          <div>
            <p className="font-semibold text-slate-900">{name}</p>
            <p className="text-teal-600 font-medium">{company}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;