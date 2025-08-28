import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from '@/components/ui/CTAButton';

interface IntroScreenProps {
  onStart: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden min-h-screen flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-blue-600/20"></div>
      <div className="absolute inset-0 opacity-40">
        <div className="h-full w-full bg-gradient-to-r from-transparent via-teal-500/10 to-transparent"></div>
      </div>
      <div className="absolute top-20 -right-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-teal-500/20 text-teal-200 border border-teal-400/30">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            Free TCO Calculator
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          What&apos;s Your Lead Management 
          <span className="block bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
            Really Costing You?
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed text-slate-200"
        >
          Calculate your current Total Cost of Ownership vs an optimized MainStreet RevOps stack
        </motion.p>

        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-6">
          See exactly how much you&apos;re losing to inefficient systems, manual work, and missed leads — plus your potential ROI with our solutions.
        </p>

        {/* Value Props */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto"
        >
          {[
            {
              icon: "📊",
              title: "Complete Cost Analysis",
              description: "Hidden labor, software costs, and missed revenue"
            },
            {
              icon: "💰",
              title: "ROI Projections",
              description: "See potential savings and revenue gains"
            },
            {
              icon: "⚡",
              title: "5-Minute Setup",
              description: "Quick inputs, instant detailed breakdown"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-300 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={onStart}
            className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Start Calculator
          </button>
          <CTAButton
            href="/assessment"
            variant="secondary"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm"
          >
            Get Professional Assessment Instead
          </CTAButton>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-8 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl border border-white/20">
            <div className="text-center">
              <div className="text-xl font-bold text-white">100%</div>
              <div className="text-slate-300 text-sm">Free Tool</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-center">
              <div className="text-xl font-bold text-white">No Email</div>
              <div className="text-slate-300 text-sm">Required</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-center">
              <div className="text-xl font-bold text-white">Instant</div>
              <div className="text-slate-300 text-sm">Results</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroScreen;