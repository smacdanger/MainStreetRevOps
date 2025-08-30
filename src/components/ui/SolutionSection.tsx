import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SolutionSection: React.FC = () => {
  return (
    <section className="py-16 md:py-12 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-10">
          <div className="mb-4 md:mb-3">
            <span className="inline-flex items-center px-4 py-2 md:px-3 md:py-1.5 rounded-full text-sm md:text-xs font-medium bg-teal-100 text-teal-800">
              The Solution
            </span>
          </div>
          <h2 className="text-4xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-6 md:mb-3">
            Stop Losing Leads While You&apos;re on the Job
          </h2>
          <p className="text-lg md:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our AI assistant handles every lead 24/7, so you never miss another opportunity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 mb-12 md:mb-10">
          {/* Strategic Assessment */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="bg-white p-8 md:p-6 rounded-2xl shadow-lg border border-slate-200 relative overflow-hidden group hover:shadow-xl transition-all duration-300 motion-safe"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="bg-teal-100 w-16 h-16 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-6 md:mb-4 group-hover:bg-teal-200 transition-colors duration-300">
                <svg className="w-8 h-8 md:w-6 md:h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-lg font-bold text-slate-900 mb-4 md:mb-3 group-hover:text-teal-800 transition-colors duration-300">
                Strategic Assessment & Planning
              </h3>
              <p className="text-slate-600 mb-6 md:mb-4 text-base md:text-sm leading-relaxed">
                We analyze your current lead flow and design a custom AI assistant that catches every opportunity.
              </p>
              
              <div className="space-y-3 md:space-y-2 mb-8 md:mb-6">
                {[
                  "🔍 Lead flow analysis and gap identification",
                  "🎯 Custom AI assistant design for your business",
                  "📊 ROI projections and implementation roadmap",
                  "⚡ Integration with your existing tools"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-teal-600 mr-3 md:mr-2 mt-0.5 flex-shrink-0 text-sm md:text-xs">
                      {feature.split(' ')[0]}
                    </div>
                    <p className="text-slate-600 text-sm md:text-xs leading-relaxed">{feature.substring(feature.indexOf(' ') + 1)}</p>
                  </div>
                ))}
              </div>
              
              <Link
                href="/assessment"
                className="w-full bg-teal-600 text-white px-6 py-4 md:px-4 md:py-3 rounded-xl font-semibold text-base md:text-sm text-center transition-all duration-200 block hover:bg-teal-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                aria-label="Get your strategic assessment"
              >
                Get Strategic Assessment
              </Link>
            </div>
          </motion.div>

          {/* Ongoing Optimization */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="bg-white p-8 md:p-6 rounded-2xl shadow-lg border border-slate-200 relative overflow-hidden group hover:shadow-xl transition-all duration-300 motion-safe"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="bg-blue-100 w-16 h-16 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-6 md:mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                <svg className="w-8 h-8 md:w-6 md:h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-lg font-bold text-slate-900 mb-4 md:mb-3 group-hover:text-blue-800 transition-colors duration-300">
                AI Implementation & Optimization
              </h3>
              <p className="text-slate-600 mb-6 md:mb-4 text-base md:text-sm leading-relaxed">
                We deploy and continuously optimize your AI assistant for maximum lead conversion.
              </p>
              
              <div className="space-y-3 md:space-y-2 mb-8 md:mb-6">
                {[
                  "🤖 AI assistant deployment and training",
                  "📱 24/7 lead response and qualification",
                  "📈 Performance monitoring and optimization",
                  "🔄 Continuous improvement based on results"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-blue-600 mr-3 md:mr-2 mt-0.5 flex-shrink-0 text-sm md:text-xs">
                      {feature.split(' ')[0]}
                    </div>
                    <p className="text-slate-600 text-sm md:text-xs leading-relaxed">{feature.substring(feature.indexOf(' ') + 1)}</p>
                  </div>
                ))}
              </div>
              
              <Link
                href="/contact"
                className="w-full border-2 border-blue-600 text-blue-600 px-6 py-4 md:px-4 md:py-3 rounded-xl font-semibold text-base md:text-sm text-center transition-all duration-200 block hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                aria-label="Learn about AI implementation"
              >
                Learn About Implementation
              </Link>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          className="text-center motion-safe"
        >
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-8 md:p-6 rounded-2xl border border-slate-200">
            <h3 className="text-3xl md:text-xl font-bold text-slate-900 mb-4 md:mb-3">
              Ready to Stop Losing Leads to Poor Follow-Up?
            </h3>
            <p className="text-slate-600 mb-6 md:mb-4 max-w-3xl mx-auto leading-relaxed text-base md:text-sm">
              Get a strategic assessment that identifies exactly where your leads are falling through the cracks and provides a custom implementation roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-3 justify-center">
              <Link
                href="/assessment"
                className="bg-teal-600 text-white px-8 py-4 md:px-6 md:py-3 rounded-xl font-bold text-base md:text-sm hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                aria-label="Start your free assessment"
              >
                Start Free Assessment
              </Link>
              <Link
                href="/contact"
                className="border-2 border-teal-600 text-teal-600 px-8 py-4 md:px-6 md:py-3 rounded-xl font-semibold text-base md:text-sm hover:bg-teal-600 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                aria-label="Schedule a consultation call"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;