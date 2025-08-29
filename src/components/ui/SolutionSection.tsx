import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SolutionSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            How We Fix Your Lead Flow
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Stop losing leads to poor follow-up. We design, build, and hand over systems that work for contractors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Setup & Implementation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white p-8 rounded-3xl shadow-lg border border-slate-200 relative overflow-hidden group hover:shadow-xl transition-all duration-300 motion-safe"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="bg-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-200 transition-colors duration-300">
                <svg className="w-8 h-8 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Setup & Implementation
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We build everything from scratch, test it thoroughly, then hand over the keys. 
                You own the system forever — no monthly subscriptions for the core setup.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Complete lead flow assessment and analysis",
                  "CRM setup and automation workflows", 
                  "Instant lead response systems",
                  "No more missed calls — AI + routing ensures every call gets answered",
                  "Team training and documentation",
                  "Full system handover — it's yours"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-3 h-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
              
              <Link
                href="/assessment"
                className="w-full bg-teal-600 text-white px-6 py-4 rounded-xl font-semibold text-center transition-all duration-200 block hover:bg-teal-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                aria-label="Get your lead flow assessment"
              >
                Get Your Lead Flow Assessment
              </Link>
            </div>
          </motion.div>

          {/* Ongoing Optimization */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="bg-white p-8 rounded-3xl shadow-lg border border-slate-200 relative overflow-hidden group hover:shadow-xl transition-all duration-300 motion-safe"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Ongoing Optimization
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Optional monthly service to keep your systems current, add new features, 
                and optimize performance as your business grows.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Monthly system monitoring and optimization",
                  "New lead source integrations as you expand",
                  "Advanced reporting and analytics dashboard",
                  "Additional automation workflows",
                  "Priority support and strategic consulting"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
              
              <Link
                href="/contact"
                className="w-full bg-slate-900 text-white px-6 py-4 rounded-xl font-semibold text-center transition-all duration-200 block hover:bg-slate-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
                aria-label="Learn about ongoing support options"
              >
                Learn About Ongoing Support
              </Link>
            </div>
          </motion.div>
        </div>

        {/* CTA Below */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-center mt-16 motion-safe"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Stop Losing Leads?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              Get a professional assessment that identifies exactly where your leads are falling through the cracks 
              and provides a custom roadmap to capture more revenue.
            </p>
            <Link
              href="/assessment"
              className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-300 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Assessment
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;