import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

const FinalCTASection: React.FC = () => {
  return (
    <section id="contact" className="relative bg-slate-900 text-white py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-blue-600/20"></div>
      <div className="absolute inset-0 opacity-40">
        <div className="h-full w-full bg-gradient-to-r from-transparent via-teal-500/10 to-transparent"></div>
      </div>
      <div className="absolute top-10 -right-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-teal-500/20 text-teal-200 border border-teal-400/30">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Free/Low-Cost Lead Flow Audit
          </span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Turn More Leads Into Revenue — Without Hiring More Staff
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl mb-4 text-slate-200 max-w-3xl mx-auto leading-relaxed"
        >
          Get your free Lead Flow Audit and discover exactly where leads are slipping through the cracks.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg mb-8 text-slate-300 max-w-2xl mx-auto"
        >
          <strong>No subscription required.</strong> Keep us on only if you want ongoing guidance.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <CTAButton 
            href="/assessment" 
            variant="accent" 
            size="lg"
            className="bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:from-teal-600 hover:to-teal-700 border-2 border-teal-400 hover:border-teal-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
          >
            Get Your Free Lead Flow Audit
          </CTAButton>
          
          <CTAButton 
            href="/contact" 
            variant="secondary" 
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm"
          >
            Schedule Strategy Call
          </CTAButton>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            {
              icon: "⚡",
              text: "Free audit in 48 hours"
            },
            {
              icon: "🎯",
              text: "90-day results guarantee"
            },
            {
              icon: "🚀", 
              text: "Own your system forever"
            }
          ].map((feature, index) => (
            <div key={index} className="flex items-center justify-center space-x-3">
              <div className="text-xl">{feature.icon}</div>
              <div className="text-slate-300 text-sm">{feature.text}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;