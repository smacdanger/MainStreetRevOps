import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const BeyondLeadsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
              Full RevOps
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Leads Are Just the Start
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Contractors don&apos;t just lose money from missed leads — they also lose it from broken systems, 
            billing headaches, and hidden cost overruns. We help close those gaps too.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-8">
              Beyond Lead Capture: Complete Business Operations
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Once your lead flow is optimized, we can help streamline every other part of your business 
              that touches revenue — from project management to supplier relationships.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                  title: "QuickBooks + CRM integrations that actually work",
                  description: "Stop double-entering data. Automatic sync between your sales system and accounting."
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 0 01-2-2z" />
                    </svg>
                  ),
                  title: "Automated supplier price tracking to protect margins",
                  description: "Get alerts when material costs spike so you can adjust pricing before it hurts profits."
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Invoice verification to stop unauthorized charges",
                  description: "Automatic checking for billing errors and unexpected charges from suppliers and subs."
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  title: "Smart call routing + round-robin lead distribution",
                  description: "Never miss a call again. Intelligent routing to available team members with automatic backup."
                }
              ].map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-purple-200 transition-colors duration-300">
                    <div className="text-purple-700 group-hover:text-purple-800 transition-colors duration-300">
                      {capability.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-purple-900 transition-colors duration-300">
                      {capability.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                      {capability.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual: System Integration */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-slate-50 to-purple-50 p-8 rounded-3xl border border-slate-200 shadow-lg relative overflow-hidden"
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500 rounded-full blur-2xl"></div>
              </div>
              
              <div className="relative text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Connected Business Systems</h3>
                
                {/* Integration Visual */}
                <div className="space-y-6">
                  {/* Top: Lead System */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-teal-100 px-6 py-4 rounded-lg border border-teal-200"
                  >
                    <div className="text-teal-800 font-bold">Lead Management</div>
                    <div className="text-teal-600 text-sm">Optimized & Automated</div>
                  </motion.div>
                  
                  {/* Connection lines */}
                  <div className="flex justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center"
                    >
                      <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  </div>
                  
                  {/* Connected Systems */}
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="bg-blue-100 px-4 py-3 rounded-lg border border-blue-200"
                    >
                      <div className="text-blue-800 font-medium text-sm">Accounting</div>
                      <div className="text-blue-600 text-xs">QuickBooks</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="bg-green-100 px-4 py-3 rounded-lg border border-green-200"
                    >
                      <div className="text-green-800 font-medium text-sm">Suppliers</div>
                      <div className="text-green-600 text-xs">Price Tracking</div>
                    </motion.div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-white rounded-xl border border-slate-200">
                  <p className="text-slate-700 font-medium text-sm">
                    Every system talks to every other system
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-2xl border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Start with Lead Flow, Grow into Full Operations
            </h3>
            <p className="text-slate-600 mb-6 max-w-3xl mx-auto leading-relaxed">
              Most contractors need their lead flow fixed first. Once that&apos;s working, we can tackle billing, 
              supplier management, cost control, and any other system that impacts your bottom line.
            </p>
            <Link
              href="/assessment"
              className="bg-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-700 transition-colors duration-300 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start With a Lead Flow Audit
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeyondLeadsSection;